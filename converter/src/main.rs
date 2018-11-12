use scroadmap::Payload;
use std::{
    fs::{self, File},
    io::BufReader,
    path::Path,
};

fn main() {
    let payload_path = Path::new("../payloads");
    let entries = fs::read_dir(&payload_path)
        .expect("Could not read payloads directory")
        .filter_map(|x| x.ok())
        .filter(|x| x.file_type().ok().map(|x| x.is_file()).unwrap_or(false))
        .filter(|x| x.path().extension().map(|x| x == "json").unwrap_or(false));

    for entry in entries {
        let source = File::open(entry.path()).expect("Could not open payload json");
        let reader = BufReader::new(source);
        let payload: Payload =
            serde_json::from_reader(reader).expect("Could not deserialize payload");

        util::write_bincode_brotli(&payload_path, &payload);
    }
}
