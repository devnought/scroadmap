# scroadmap
## Notes
- [ ] Deliver a subset of JSON to the client
    - [ ] Client will maybe do the diffing, need to see compressed payload sizes
- [ ] Compress payloads - [Snappy](https://github.com/BurntSushi/rust-snappy)
    - [ ] JS will get the data, WASM will handle decompression