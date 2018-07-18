# scroadmap
## Notes
- [ ] Deliver a subset of JSON to the client
    - [ ] Client will maybe do the diffing, need to see compressed payload sizes
- [ ] Compress payloads - [Snappy](https://github.com/BurntSushi/rust-snappy) or [Brotli](https://crates.io/crates/brotli)
    - [ ] JS will get the data, WASM will handle decompression
- [ ] Enforce access via tokens?