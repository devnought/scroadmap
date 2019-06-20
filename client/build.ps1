cargo +nightly build --release --target wasm32-unknown-unknown
wasm-bindgen ../target/wasm32-unknown-unknown/release/client.wasm --target web --out-dir ./static
