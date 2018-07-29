"use strict";

const js = import("./client");

js.then(js => {
    js.greet("World!");
});
