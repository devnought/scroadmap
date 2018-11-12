use scroadmap::Payload;
use std::path::Path;

fn main() {
    println!("Grabbing payload");

    let mut res = reqwest::get("https://robertsspaceindustries.com/api/roadmap/v1/boards/1")
        .expect("Error sending get request");

    let payload = res.json::<Payload>().expect("Could not get JSON result");
    let path = Path::new("../payloads");

    println!("Got payload");
    util::write_json(&path, &payload);
    println!("Wrote payload");
    util::write_bincode_brotli(&path, &payload);
    println!("Wrote compressed binary payload");
}
