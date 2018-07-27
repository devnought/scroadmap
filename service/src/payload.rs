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
    pub fn last_updated(&self) -> usize {
        self.last_updated
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadThumbnail {
    id: String,
    urls: PayloadThumbnailUrls,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PayloadThumbnailUrls {
    square: Option<String>,
    rect: Option<String>,
    large: Option<String>,
    source: Option<String>,
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
    body: String,
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
