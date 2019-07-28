#![feature(async_await)]

use js_sys::{Promise, Uint8Array};
use scroadmap::json::Payload;
use wasm_bindgen::{prelude::*, JsCast};
use wasm_bindgen_futures::futures_0_3::{future_to_promise, JsFuture};
use web_sys::{console, Document, Node, Response};

#[wasm_bindgen]
pub fn main() -> Promise {
    future_to_promise(async {
        main_impl().await;
        Ok(JsValue::TRUE)
    })
}

#[wasm_bindgen(start)]
pub fn start() {
    log("START");
}

async fn main_impl() {
    let window = web_sys::window().unwrap();
    let request_promise = window.fetch_with_str("1532669929.bin.br");
    let future = JsFuture::from(request_promise);

    let response = future.await.expect("Could not get payload");

    let resp = response
        .dyn_into::<Response>()
        .expect("Could not convert to response");
    let array_buffer_promise = resp
        .array_buffer()
        .expect("Could not get resposne array buffer");
    let array_buffer = JsFuture::from(array_buffer_promise)
        .await
        .expect("Could not resolve array buffer promise");
    let data = Uint8Array::new(&array_buffer);

    let mut buffer = vec![0; data.length() as usize];
    data.copy_to(&mut buffer);

    log(&format!("{:#?}", &array_buffer));

    log("decoding payload");

    let payload = scroadmap::json::decode(&buffer);

    log("got payload");

    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");
    let body_ref = body.as_ref() as &Node;

    render_payload(&document, body_ref, &payload);
}

fn render_payload(document: &Document, body: &Node, payload: &Payload) {
    let data = payload.data().unwrap();

    let name = document.create_element("div").unwrap();
    name.set_inner_html(data.name());

    let div = document.create_element("div").unwrap();
    div.set_inner_html(&format!("{:#?}", data));

    body.append_child(name.as_ref() as &Node).unwrap();
    body.append_child(div.as_ref() as &Node).unwrap();
}

fn log(message: &str) {
    console::log_1(&JsValue::from_str(message));
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
