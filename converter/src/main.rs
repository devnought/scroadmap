use scroadmap::json::Payload;
use std::{
    fs::{self, File},
    io::BufReader,
    path::Path,
};

fn main() {
    convert("../payloads");
    convert("../payloads/sq42");
}

fn convert<P>(path: P)
where
    P: AsRef<Path>,
{
    let entries = fs::read_dir(&path)
        .expect("Could not read payloads directory")
        .filter_map(|x| x.ok())
        .filter(|x| x.file_type().ok().map(|x| x.is_file()).unwrap_or(false))
        .filter(|x| x.path().extension().map(|x| x == "json").unwrap_or(false));

    for entry in entries {
        let source = File::open(entry.path()).expect("Could not open payload json");
        let reader = BufReader::new(source);
        let payload: Payload =
            serde_json::from_reader(reader).expect("Could not deserialize payload");

        util::write_bincode_brotli(&path, &payload);
    }
}
