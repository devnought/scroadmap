#![feature(rust_2018_preview)]
#![warn(rust_2018_idioms)]

use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

mod payload;
use crate::payload::Payload;

#[wasm_bindgen]
extern "C" {
    // Document
    type HTMLDocument;
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
    fn append_child(this: &Element, other: Element);

    // Console
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // Fetch
    fn fetch(url: &str) -> Promise;

    // Promise
    type Promise;
    #[wasm_bindgen(method, js_name = then)]
    fn then(this: &Promise, cb: &Closure<dyn FnMut(JsValue)>);

    // Response
    type Response;
    #[wasm_bindgen(method, js_name = arrayBuffer)]
    fn array_buffer(this: &Response) -> Promise;
}

#[wasm_bindgen]
pub struct ClosureHandle(Closure<dyn FnMut(JsValue)>);

#[wasm_bindgen]
pub fn main() -> ClosureHandle {
    let val = document.create_element("div");
    val.set_inner_html("Oh hey there");

    document.body().append_child(val);

    let data_cb = Closure::new(move |res: JsValue| {
        let data = Uint8Array::new(&res);
        let mut buffer: Vec<u8> = Vec::new();

        data.for_each(&mut |val, _, _| {
            buffer.push(val);
        });

        let payload = transform_payload(&buffer);
        log(&format!("{:#?}", payload));
    });

    let cb = Closure::new(move |res: JsValue| Response::from(res).array_buffer().then(&data_cb));

    fetch("1532669929.bin.br").then(&cb);

    ClosureHandle(cb)
}

fn transform_payload(data: &[u8]) -> Payload {
    let decom = brotli::Decompressor::new(data, 1024 * 8);
    
    bincode::deserialize_from(decom).expect("nope")
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
