#![warn(rust_2018_idioms)]

use futures::{future, Future};
use js_sys::{Promise, Uint8Array};
use wasm_bindgen::{prelude::*, JsCast};
use wasm_bindgen_futures::{future_to_promise, JsFuture};
use web_sys::{console, Node, Request, RequestInit, Response};

#[wasm_bindgen]
pub fn main() -> Promise {
    let mut opts = RequestInit::new();
    opts.method("GET");

    let request = Request::new_with_str_and_init("1532669929.bin.br", &opts).unwrap();

    let window = web_sys::window().unwrap();
    let request_promise = window.fetch_with_request(&request);

    let future = JsFuture::from(request_promise)
        .and_then(|resp_value| {
            let resp = resp_value.dyn_into::<Response>().unwrap();
            resp.array_buffer()
        })
        .and_then(|array_buffer_value: Promise| JsFuture::from(array_buffer_value))
        .and_then(|array_buffer| {
            let data = Uint8Array::new(&array_buffer);

            // Dirty hack for now until uint8array can be used or coerced
            // into a slice or vec.
            let mut buffer = Vec::new();

            data.for_each(&mut |val, _, _| {
                buffer.push(val);
            });

            let payload = scroadmap::decode(&buffer);

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
