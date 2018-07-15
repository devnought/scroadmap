extern crate bincode;
extern crate reqwest;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;
extern crate snap;

mod payload;
use payload::Payload;

use std::fs::File;
use std::io::BufWriter;

pub fn get_stuff() {
    let mut res = reqwest::get("https://robertsspaceindustries.com/api/roadmap/v1/boards/1")
        .expect("Error sending get request");

    let payload = res.json::<Payload>().expect("Could not get JSON result");

    write_json(&payload);
    write_json_compressed(&payload);
    write_bindocde(&payload);
    write_bindocde_compressed(&payload);
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

fn write_json_compressed(payload: &Payload) {
    let file_name = format!(
        "payloads/{}.json.cmp",
        payload.data().expect("No payload data").last_updated()
    );

    let file = File::create(file_name).expect("Could not create file");
    let writer = BufWriter::new(file);
    let snap_write = snap::Writer::new(writer);

    serde_json::to_writer(snap_write, &payload).expect("Could not write data to file");
}

fn write_bindocde(payload: &Payload) {
    let file_name = format!(
        "payloads/{}.bin",
        payload.data().expect("No payload data").last_updated()
    );

    let file = File::create(file_name).expect("Could not create file");
    let writer = BufWriter::new(file);

    bincode::serialize_into(writer, &payload).expect("Could not write data to file");
}

fn write_bindocde_compressed(payload: &Payload) {
    let file_name = format!(
        "payloads/{}.bin.cmp",
        payload.data().expect("No payload data").last_updated()
    );

    let file = File::create(file_name).expect("Could not create file");
    let writer = BufWriter::new(file);
    let snap_write = snap::Writer::new(writer);

    bincode::serialize_into(snap_write, &payload).expect("Could not write data to file");
}
