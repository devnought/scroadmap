#![warn(rust_2018_idioms)]

use futures::{future, Future};
use js_sys::{Promise, Uint8Array};
use wasm_bindgen::{prelude::*, JsCast};
use wasm_bindgen_futures::{future_to_promise, JsFuture};
use web_sys::{Request, RequestInit, Response, Window};

#[wasm_bindgen]
extern "C" {
    // Document
    /*type HTMLDocument;
    static document: HTMLDocument;

    #[wasm_bindgen(method, js_name = createElement)]
    fn create_element(this: &HTMLDocument, tag_name: &str) -> Element;

    #[wasm_bindgen(method, getter)]
    fn body(this: &HTMLDocument) -> Element;

    // Element
    type Element;
    #[wasm_bindgen(method, setter = innerHTML)]
    fn set_inner_html(this: &Element, html: &str);

    #[wasm_bindgen(method, js_name = appendChild)]
    fn append_child(this: &Element, other: Element);*/

    // Console
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn main() -> Promise {
    let mut opts = RequestInit::new();
    opts.method("GET");

    let request = Request::new_with_str_and_init("1532669929.bin.br", &opts).unwrap();
    let request_promise = Window::fetch_with_request(&request);

    let future = JsFuture::from(request_promise)
        .and_then(|resp_value| {
            let resp = resp_value.dyn_into::<Response>().unwrap();
            resp.array_buffer()
        }).and_then(|array_buffer_value: Promise| JsFuture::from(array_buffer_value))
        .and_then(|array_buffer| {
            let data = Uint8Array::new(&array_buffer);

            // Dirty hack for now until uint8array can be used or coerced
            // into a slice or vec.
            let mut buffer = Vec::new();

            data.for_each(&mut |val, _, _| {
                buffer.push(val);
            });

            let payload = payload::decode(&buffer);

            future::ok(JsValue::from_str(&format!("{:#?}", payload)))
        });

    // Convert this Rust `Future` back into a JS `Promise`.
    future_to_promise(future)
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
