extern crate actix_web;
extern crate scroadmap;

use actix_web::{
    http::{Method, StatusCode}, server, App, HttpRequest, HttpResponse,
};

fn index(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    scroadmap::get_stuff();

    Ok(HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .body("butt"))
}

fn main() {
    server::new(|| App::new().resource("/", |r| r.method(Method::GET).f(index)))
        .bind("0.0.0.0:8000")
        .expect("Bind failed")
        .run();
}
