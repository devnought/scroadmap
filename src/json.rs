use serde_derive::{Deserialize, Serialize};
use std::io::Write;

#[derive(Serialize, Deserialize, Debug)]
pub struct Payload {
    success: u32,
    data: Option<PayloadData>,
    code: String,
    msg: String,
}

impl Payload {
    pub fn data(&self) -> Option<&PayloadData> {
        self.data.as_ref()
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadData {
    id: String,
    url_slug: String,
    name: String,
    description: String,
    body: String,
    order: String,
    thumbnail: PayloadThumbnail,
    background: PayloadThumbnail,
    importer_id: String,
    info_heading: String,
    releases: Vec<PayloadRelease>,
    categories: Vec<PayloadReleaseCategory>,
    tags: Vec<String>,
    last_updated: usize,
}

impl PayloadData {
    pub fn id(&self) -> &str {
        &self.id
    }

    pub fn url_slug(&self) -> &str {
        &self.url_slug
    }

    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn description(&self) -> &str {
        &self.description
    }

    pub fn body(&self) -> &str {
        &self.body
    }

    pub fn order(&self) -> &str {
        &self.order
    }

    pub fn thumbnail(&self) -> &PayloadThumbnail {
        &self.thumbnail
    }

    pub fn background(&self) -> &PayloadThumbnail {
        &self.background
    }

    pub fn importer_id(&self) -> &str {
        &self.importer_id
    }

    pub fn info_heading(&self) -> &str {
        &self.info_heading
    }

    pub fn releases(&self) -> impl Iterator<Item = &PayloadRelease> {
        self.releases.iter()
    }

    pub fn categories(&self) -> impl Iterator<Item = &PayloadReleaseCategory> {
        self.categories.iter()
    }

    pub fn tags(&self) -> impl Iterator<Item = &str> {
        self.tags.iter().map(|x| x.as_str())
    }

    pub fn last_updated(&self) -> usize {
        self.last_updated
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadThumbnail {
    id: String,
    urls: PayloadThumbnailUrls,
}

impl PayloadThumbnail {
    pub fn id(&self) -> &str {
        &self.id
    }

    pub fn urls(&self) -> &PayloadThumbnailUrls {
        &self.urls
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
    pub fn square(&self) -> Option<&str> {
        self.square.as_ref().map(|x| x.as_str())
    }

    pub fn rect(&self) -> Option<&str> {
        self.rect.as_ref().map(|x| x.as_str())
    }

    pub fn large(&self) -> Option<&str> {
        self.large.as_ref().map(|x| x.as_str())
    }

    pub fn source(&self) -> Option<&str> {
        self.source.as_ref().map(|x| x.as_str())
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadRelease {
    id: String,
    url_slug: String,
    time_created: usize,
    time_modified: usize,
    name: String,
    description: String,
    board_id: usize,
    scheduled_at: Option<String>,
    order: usize,
    released: u32,
    importer_id: String,
    cards: Vec<PayloadReleaseCard>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadReleaseCard {
    id: String,
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
    id: String,
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
