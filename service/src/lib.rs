extern crate payload;
extern crate reqwest;
extern crate serde_json;

use payload::Payload;

use std::fs::File;
use std::io::BufWriter;

pub fn get_stuff() {
    println!("Grabbing payload");

    let mut res = reqwest::get("https://robertsspaceindustries.com/api/roadmap/v1/boards/1")
        .expect("Error sending get request");

    let payload = res.json::<Payload>().expect("Could not get JSON result");

    println!("Got payload");
    write_json(&payload);
    println!("Wrote payload");
    write_bincode_brotli(&payload);
    println!("Wrote compressed binary payload");
}

fn write_json(payload: &Payload) {
    let file_name = format!(
        "payloads/{}.json",
        payload.data().expect("No payload data").last_updated()
    );

    let file = File::create(file_name).expect("Could not create file");
    let writer = BufWriter::new(file);

    serde_json::to_writer(writer, &payload).expect("Could not write data to file");
}

fn write_bincode_brotli(payload: &Payload) {
    let file_name = format!(
        "payloads/{}.bin.br",
        payload.data().expect("No payload data").last_updated()
    );

    let file = File::create(file_name).expect("Could not create file");

    payload::encode(payload, file);
}
