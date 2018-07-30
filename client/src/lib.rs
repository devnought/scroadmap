#![feature(rust_2018_preview)]
#![warn(rust_2018_idioms)]

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    //fn alert(s: &str);

    // Document
    type HTMLDocument;
    static document: HTMLDocument;

    #[wasm_bindgen(method)]
    fn createElement(this: &HTMLDocument, tag_name: &str) -> Element;

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
    type Promise;
    type Response;
    fn fetch(url: &str) -> Promise;

    #[wasm_bindgen(method, js_name = then)]
    fn then_string(this: &Promise, cb: &Closure<dyn FnMut(String)>);

    #[wasm_bindgen(method, js_name = then)]
    fn then_response(this: &Promise, cb: &Closure<dyn FnMut(Response)>) -> Promise;

    #[wasm_bindgen(method)]
    fn text(this: &Response) -> Promise;
}

#[wasm_bindgen]
pub struct ClosureResponmseHandle(Closure<dyn FnMut(Response)>);

#[wasm_bindgen]
pub fn run() -> ClosureResponmseHandle {
    let val = document.createElement("div");
    val.set_inner_html("Oh hey there");

    document.body().append_child(val);

    let txt_cb = Closure::new(|text: String| {
        log(&text);
    });

    let cb = Closure::new(move |res: Response| res.text().then_string(&txt_cb));

    fetch("client.js").then_response(&cb);

    log("asd");

    ClosureResponmseHandle(cb)
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
