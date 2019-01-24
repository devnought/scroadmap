use futures::{future, Future};
use js_sys::{Promise, Uint8Array};
use wasm_bindgen::{prelude::*, JsCast};
use wasm_bindgen_futures::{future_to_promise, JsFuture};
use web_sys::{console, Node, Response};

#[wasm_bindgen]
pub fn main() -> Promise {
    let window = web_sys::window().unwrap();
    let request_promise = window.fetch_with_str("1532669929.bin.br");

    let future = JsFuture::from(request_promise)
        .and_then(|resp_value| {
            let resp = resp_value.dyn_into::<Response>().unwrap();
            let b = resp.array_buffer().unwrap();

            JsFuture::from(b)
        })
        .and_then(|array_buffer| {
            let data = Uint8Array::new(&array_buffer);

            let mut buffer = vec![0; data.length() as usize];
            data.copy_to(&mut buffer);

            let payload = scroadmap::json::decode(&buffer);

            log("got payload");

            let window = web_sys::window().expect("no global `window` exists");
            let document = window.document().expect("should have a document on window");
            let body = document.body().expect("document should have a body");

            let div = document.create_element("div").unwrap();
            div.set_inner_html(&format!("{:#?}", payload));

            (body.as_ref() as &Node)
                .append_child(div.as_ref() as &Node)
                .unwrap();

            future::ok(JsValue::TRUE)
        });

    // Convert this Rust `Future` back into a JS `Promise`.
    future_to_promise(future)
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
