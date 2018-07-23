# scroadmap
## Notes
- [ ] Deliver a subset of JSON to the client
    - [ ] Client will maybe do the diffing, need to see compressed payload sizes
- [x] Compress payloads - [Snappy](https://github.com/BurntSushi/rust-snappy) or [Brotli](https://crates.io/crates/brotli)
    - Went with Brotli for now. Size is quite small.
    - [ ] JS will get the data, WASM will handle decompression
- [ ] Enforce access via tokens?