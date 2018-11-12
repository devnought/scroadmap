use std::{fs::File, io::BufWriter, path::Path};

pub fn write_json(path: &Path, payload: &mut scroadmap::json::Payload) {
    let file_name = format!(
        "{}.json",
        payload.data().expect("No payload data").last_updated()
    );

    let file_path = path.join(file_name);

    let file = File::create(file_path).expect("Could not create file");
    let writer = BufWriter::new(file);

    serde_json::to_writer(writer, &payload).expect("Could not write data to file");
}

pub fn write_bincode_brotli(path: &Path, payload: &scroadmap::json::Payload) {
    let file_name = format!(
        "{}.bin.br",
        payload.data().expect("No payload data").last_updated()
    );

    let file_path = path.join(file_name);
    let file = File::create(file_path).expect("Could not create file");

    scroadmap::json::encode(payload, file);
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
