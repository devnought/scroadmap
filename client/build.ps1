cargo +nightly build --release --target wasm32-unknown-unknown
wasm-bindgen ../target/wasm32-unknown-unknown/release/client.wasm --no-modules --browser --out-dir ./static
squash ./static/client.js -o ./static/client_ugly.js
