use serde::{Deserialize, Serialize};
use std::{
    collections::{BTreeMap, BTreeSet},
    io::Write,
};

#[derive(Serialize, Deserialize, Debug)]
pub struct Payload {
    id: String,
    url_slug: String,
    name: String,
    description: String,
    body: String,
    order: String,
    thumbnail: PayloadThumbnail,
    background: Option<PayloadThumbnail>,
    importer_id: String,
    info_heading: String,
    releases: BTreeMap<String, PayloadRelease>,
    categories: BTreeMap<String, PayloadReleaseCategory>,
    tags: BTreeSet<String>,
    last_updated: usize,
}

impl Payload {
    pub fn last_updated(&self) -> usize {
        self.last_updated
    }

    //pub fn from_json_payload(payload: &crate::json::Payload) -> Option<Self> {
    //    let data = payload.data()?;
    //
    //    let p = Self {
    //        id: data.id().into(),
    //        url_slug: data.url_slug().into(),
    //        name: data.name().into(),
    //        description: data.description().into(),
    //        body: data.body().into(),
    //        order: data.order().into(),
    //        thumbnail: PayloadThumbnail::from_json_payload(data.thumbnail()),
    //        background: PayloadThumbnail::from_json_payload(data.background()),
    //        importer_id: data.importer_id().into(),
    //        info_heading: data.info_heading().into(),
    //        releases: data.releases().map(|x| (x.))
    //    };
    //
    //    Some(p)
    //}
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadThumbnail {
    id: String,
    urls: PayloadThumbnailUrls,
}

impl PayloadThumbnail {
    fn from_json_payload(payload: &crate::json::PayloadThumbnail) -> Self {
        Self {
            id: payload.id().into(),
            urls: PayloadThumbnailUrls::from_json_payload(payload.urls()),
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadThumbnailUrls {
    square: Option<String>,
    rect: Option<String>,
    large: Option<String>,
    source: Option<String>,
}

impl PayloadThumbnailUrls {
    fn from_json_payload(payload: &crate::json::PayloadThumbnailUrls) -> Self {
        Self {
            square: payload.square().map(|x| x.into()),
            rect: payload.rect().map(|x| x.into()),
            large: payload.large().map(|x| x.into()),
            source: payload.source().map(|x| x.into()),
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadRelease {
    url_slug: String,
    time_created: usize,
    time_modified: usize,
    name: String,
    description: Option<String>,
    board_id: usize,
    scheduled_at: Option<String>,
    order: usize,
    released: u32,
    importer_id: String,
    cards: BTreeMap<String, PayloadReleaseCard>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadReleaseCard {
    url_slug: String,
    time_created: usize,
    time_modified: usize,
    board_id: u32,
    name: String,
    scheduled_at: Option<String>,
    release_id: u32,
    category_id: u32,
    importer_id: String,
    description: String,
    body: Option<String>,
    order: u32,
    thumbnail: Option<PayloadThumbnail>,
    inprogress: u32,
    completed: u32,
    tasks: u32,
    released: u32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadReleaseCategory {
    board_id: u32,
    name: String,
    order: u32,
}

pub fn encode<T>(payload: &Payload, writer: T)
where
    T: Write,
{
    let quality = 11u32; // 0 - 11
    let lgwin = 0u32; // 16 to 24, or 0 to be based on quality
    let brotli_write = brotli::enc::writer::CompressorWriter::new(writer, 1024 * 8, quality, lgwin);

    bincode::serialize_into(brotli_write, payload).expect("Could not write data to writer");
}

pub fn decode(data: &[u8]) -> Payload {
    let decom = brotli::Decompressor::new(data, 1024 * 8);

    bincode::deserialize_from(decom).expect("nope")
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
