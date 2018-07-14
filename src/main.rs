#[macro_use]
extern crate rouille;
extern crate scroadmap;

fn main() {
    rouille::start_server("0.0.0.0:8000", move |request| {
        router!(request,
            (GET) (/) => {
                scroadmap::get_stuff();
                rouille::Response::text("butt")
            },

            _ => rouille::Response::empty_404()
        )
    });
}
