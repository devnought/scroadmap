use std::{fs::File, io::BufWriter, path::Path};

pub fn write_json<P>(path: P, payload: &scroadmap::json::Payload)
where
    P: AsRef<Path>,
{
    let file_name = format!(
        "{}.json",
        payload.data().expect("No payload data").last_updated()
    );

    let file_path = path.as_ref().join(file_name);

    let file = File::create(file_path).expect("Could not create file");
    let writer = BufWriter::new(file);

    serde_json::to_writer(writer, &payload).expect("Could not write data to file");
}

pub fn write_bincode_brotli<P>(path: P, payload: &scroadmap::json::Payload)
where
    P: AsRef<Path>,
{
    let file_name = format!(
        "{}.bin.br",
        payload.data().expect("No payload data").last_updated()
    );

    let file_path = path.as_ref().join(file_name);
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
