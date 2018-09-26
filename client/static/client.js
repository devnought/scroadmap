(function() {
    var wasm;
    const __exports = {};


    const stack = [];

    const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

    function getObject(idx) {
        if ((idx & 1) === 1) {
            return stack[idx >> 1];
        } else {
            const val = slab[idx >> 1];

            return val.obj;

        }
    }

    let slab_next = slab.length;

    function dropRef(idx) {

        idx = idx >> 1;
        if (idx < 4) return;
        let obj = slab[idx];

        obj.cnt -= 1;
        if (obj.cnt > 0) return;

        // If we hit 0 then free up our space in the slab
        slab[idx] = slab_next;
        slab_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropRef(idx);
        return ret;
    }
    /**
    * @returns {any}
    */
    __exports.main = function() {
        return takeObject(wasm.main());
    };

    const __widl_f_log_1__target = console.log;

    __exports.__widl_f_log_1_ = function(arg0) {
        __widl_f_log_1__target(getObject(arg0));
    };

    const __widl_f_create_element_Document_target = Document.prototype.createElement || function() {
        throw new Error(`wasm-bindgen: Document.prototype.createElement does not exist`);
    };

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }

    function addHeapObject(obj) {
        if (slab_next === slab.length) slab.push(slab.length + 1);
        const idx = slab_next;
        const next = slab[idx];

        slab_next = next;

        slab[idx] = { obj, cnt: 1 };
        return idx << 1;
    }

    let cachedDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    __exports.__widl_f_create_element_Document = function(arg0, arg1, arg2, exnptr) {
        let varg1 = getStringFromWasm(arg1, arg2);
        try {
            return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
        throw new Error(`descriptor for id='${id}' not found`);
    }

    const __widl_f_body_Document_target = GetOwnOrInheritedPropertyDescriptor(Document.prototype, 'body').get || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Document.prototype, 'body').get does not exist`);
    };

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    __exports.__widl_f_body_Document = function(arg0) {

        const val = __widl_f_body_Document_target.call(getObject(arg0));
        return isLikeNone(val) ? 0 : addHeapObject(val);

    };

    const __widl_f_set_inner_html_Element_target = GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist`);
    };

    __exports.__widl_f_set_inner_html_Element = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        __widl_f_set_inner_html_Element_target.call(getObject(arg0), varg1);
    };

    const __widl_f_append_child_Node_target = Node.prototype.appendChild || function() {
        throw new Error(`wasm-bindgen: Node.prototype.appendChild does not exist`);
    };

    __exports.__widl_f_append_child_Node = function(arg0, arg1, exnptr) {
        try {
            return addHeapObject(__widl_f_append_child_Node_target.call(getObject(arg0), getObject(arg1)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_f_new_with_str_and_init_Request = function(arg0, arg1, arg2, exnptr) {
        let varg0 = getStringFromWasm(arg0, arg1);
        try {
            return addHeapObject(new Request(varg0, getObject(arg2)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_instanceof_Response = function(idx) {
        return getObject(idx) instanceof Response ? 1 : 0;
    };

    const __widl_f_array_buffer_Response_target = Response.prototype.arrayBuffer || function() {
        throw new Error(`wasm-bindgen: Response.prototype.arrayBuffer does not exist`);
    };

    __exports.__widl_f_array_buffer_Response = function(arg0, exnptr) {
        try {
            return addHeapObject(__widl_f_array_buffer_Response_target.call(getObject(arg0)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_instanceof_Window = function(idx) {
        return getObject(idx) instanceof Window ? 1 : 0;
    };

    const __widl_f_document_Window_target = function() {
        return this.document;
    };

    __exports.__widl_f_document_Window = function(arg0) {

        const val = __widl_f_document_Window_target.call(getObject(arg0));
        return isLikeNone(val) ? 0 : addHeapObject(val);

    };

    const __widl_f_fetch_with_request_Window_target = function(x0) {
        return this.fetch(x0);
    };

    __exports.__widl_f_fetch_with_request_Window = function(arg0, arg1) {
        return addHeapObject(__widl_f_fetch_with_request_Window_target.call(getObject(arg0), getObject(arg1)));
    };

    __exports.__wbg_newnoargs_b1f726fad978f5a3 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        return addHeapObject(new Function(varg0));
    };

    const __wbg_call_fa7f0da29d7b9250_target = Function.prototype.call || function() {
        throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);
    };

    __exports.__wbg_call_fa7f0da29d7b9250 = function(arg0, arg1, exnptr) {
        try {
            return addHeapObject(__wbg_call_fa7f0da29d7b9250_target.call(getObject(arg0), getObject(arg1)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    const __wbg_call_bd08bd79389c3e82_target = Function.prototype.call || function() {
        throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);
    };

    __exports.__wbg_call_bd08bd79389c3e82 = function(arg0, arg1, arg2, exnptr) {
        try {
            return addHeapObject(__wbg_call_bd08bd79389c3e82_target.call(getObject(arg0), getObject(arg1), getObject(arg2)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__wbg_new_70e5fc804058d6a0 = function() {
        return addHeapObject(new Object());
    };

    const __wbg_set_3387446d3253486c_target = Reflect.set.bind(Reflect) || function() {
        throw new Error(`wasm-bindgen: Reflect.set.bind(Reflect) does not exist`);
    };

    __exports.__wbg_set_3387446d3253486c = function(arg0, arg1, arg2, exnptr) {
        try {
            return __wbg_set_3387446d3253486c_target(getObject(arg0), getObject(arg1), getObject(arg2)) ? 1 : 0;
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__wbg_new_e5f1c2972584242e = function(arg0) {
        return addHeapObject(new Uint8Array(getObject(arg0)));
    };

    const __wbg_forEach_7af262e562b03798_target = Uint8Array.prototype.forEach || function() {
        throw new Error(`wasm-bindgen: Uint8Array.prototype.forEach does not exist`);
    };

    let cachedGlobalArgumentPtr = null;
    function globalArgumentPtr() {
        if (cachedGlobalArgumentPtr === null) {
            cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
        }
        return cachedGlobalArgumentPtr;
    }

    function getGlobalArgument(arg) {
        const idx = globalArgumentPtr() / 4 + arg;
        return getUint32Memory()[idx];
    }

    __exports.__wbg_forEach_7af262e562b03798 = function(arg0, arg1) {
        let cbarg1 = function(arg0, arg1, arg2) {
            let a = this.a;
            this.a = 0;
            try {
                return this.f(a, this.b, arg0, arg1, addHeapObject(arg2));

            } finally {
                this.a = a;

            }

        };
        cbarg1.f = wasm.__wbg_function_table.get(arg1);
        cbarg1.a = getGlobalArgument(0);
        cbarg1.b = getGlobalArgument(0 + 1);
        try {
            __wbg_forEach_7af262e562b03798_target.call(getObject(arg0), cbarg1.bind(cbarg1));
        } finally {
            cbarg1.a = cbarg1.b = 0;

        }
    };

    __exports.__wbg_new_477a6c8ec5821b36 = function(arg0) {
        let cbarg0 = function(arg0, arg1) {
            let a = this.a;
            this.a = 0;
            try {
                return this.f(a, this.b, addHeapObject(arg0), addHeapObject(arg1));

            } finally {
                this.a = a;

            }

        };
        cbarg0.f = wasm.__wbg_function_table.get(arg0);
        cbarg0.a = getGlobalArgument(0);
        cbarg0.b = getGlobalArgument(0 + 1);
        try {
            return addHeapObject(new Promise(cbarg0.bind(cbarg0)));
        } finally {
            cbarg0.a = cbarg0.b = 0;

        }
    };

    const __wbg_then_b902ad50736efa21_target = Promise.prototype.then || function() {
        throw new Error(`wasm-bindgen: Promise.prototype.then does not exist`);
    };

    __exports.__wbg_then_b902ad50736efa21 = function(arg0, arg1, arg2) {
        return addHeapObject(__wbg_then_b902ad50736efa21_target.call(getObject(arg0), getObject(arg1), getObject(arg2)));
    };

    __exports.__wbindgen_object_clone_ref = function(idx) {
        // If this object is on the stack promote it to the heap.
        if ((idx & 1) === 1) return addHeapObject(getObject(idx));

        // Otherwise if the object is on the heap just bump the
        // refcount and move on
        const val = slab[idx >> 1];
        val.cnt += 1;
        return idx;
    };

    __exports.__wbindgen_object_drop_ref = function(i) {
        dropRef(i);
    };

    __exports.__wbindgen_string_new = function(p, l) {
        return addHeapObject(getStringFromWasm(p, l));
    };

    __exports.__wbindgen_number_get = function(n, invalid) {
        let obj = getObject(n);
        if (typeof(obj) === 'number') return obj;
        getUint8Memory()[invalid] = 1;
        return 0;
    };

    __exports.__wbindgen_is_null = function(idx) {
        return getObject(idx) === null ? 1 : 0;
    };

    __exports.__wbindgen_is_undefined = function(idx) {
        return getObject(idx) === undefined ? 1 : 0;
    };

    __exports.__wbindgen_boolean_get = function(i) {
        let v = getObject(i);
        if (typeof(v) === 'boolean') {
            return v ? 1 : 0;
        } else {
            return 2;
        }
    };

    __exports.__wbindgen_is_symbol = function(i) {
        return typeof(getObject(i)) === 'symbol' ? 1 : 0;
    };

    let cachedEncoder = new TextEncoder('utf-8');

    function passStringToWasm(arg) {

        const buf = cachedEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        return [ptr, buf.length];
    }

    __exports.__wbindgen_string_get = function(i, len_ptr) {
        let obj = getObject(i);
        if (typeof(obj) !== 'string') return 0;
        const [ptr, len] = passStringToWasm(obj);
        getUint32Memory()[len_ptr / 4] = len;
        return ptr;
    };

    __exports.__wbindgen_cb_drop = function(i) {
        let obj = getObject(i).original;
        obj.a = obj.b = 0;
        dropRef(i);
    };

    __exports.__wbindgen_closure_wrapper1504 = function(ptr, f, _ignored) {
        let cb = function(arg0) {
            let a = this.a;
            this.a = 0;
            try {
                return this.f(a, addHeapObject(arg0));

            } finally {
                this.a = a;

            }

        };
        cb.f = wasm.__wbg_function_table.get(f);
        cb.a = ptr;
        let real = cb.bind(cb);
        real.original = cb;
        return addHeapObject(real);
    };

    __exports.__wbindgen_throw = function(ptr, len) {
        throw new Error(getStringFromWasm(ptr, len));
    };

    function init(wasm_path) {
        const fetchPromise = fetch(wasm_path);
        let resultPromise;
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './client': __exports });
        } else {
            resultPromise = fetchPromise
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.instantiate(buffer, { './client': __exports }));
        }
        return resultPromise.then(({instance}) => {
            wasm = init.wasm = instance.exports;
            return;
        });
    };
    self.wasm_bindgen = Object.assign(init, __exports);
})();
