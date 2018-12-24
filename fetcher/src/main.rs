use scroadmap::json::Payload;
use std::path::Path;

fn main() {
    process(
        "https://robertsspaceindustries.com/api/roadmap/v1/boards/1",
        "Star Citizen",
        Path::new("../payloads"),
    );

    process(
        "https://robertsspaceindustries.com/api/roadmap/v1/boards/2",
        "SQ42",
        Path::new("../payloads/sq42"),
    );
}

fn process(url: &str, name: &str, path: &Path) {
    println!("Grabbing {} payload", name);

    let payload = reqwest::get(url)
        .expect("Error sending get request")
        .json::<Payload>()
        .expect("Could not get JSON result");

    println!("Got payload");
    util::write_json(&path, &payload);
    println!("Wrote payload");
    util::write_bincode_brotli(&path, &payload);
    println!("Wrote compressed binary payload");
}
