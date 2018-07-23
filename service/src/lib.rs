extern crate bincode;
extern crate brotli;
extern crate reqwest;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

mod payload;
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

    let quality = 11u32; // 0 - 11
    let lgwin = 0u32; // 16 to 24, or 0 to be based on quality
    let brotli_write = brotli::enc::writer::CompressorWriter::new(file, 1024 * 8, quality, lgwin);

    bincode::serialize_into(brotli_write, &payload).expect("Could not write data to file");
}
