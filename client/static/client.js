
(function() {
    var wasm;
    const __exports = {};
    
    
    const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];
    
    let slab_next = slab.length;
    
    function addHeapObject(obj) {
        if (slab_next === slab.length) slab.push(slab.length + 1);
        const idx = slab_next;
        const next = slab[idx];
        
        slab_next = next;
        
        slab[idx] = { obj, cnt: 1 };
        return idx << 1;
    }
    
    __exports.__wbg_static_accessor_document_document = function() {
        return addHeapObject(document);
    };
    
    const __wbg_createElement_b8476e26186bb861_target = HTMLDocument.prototype.createElement  || function() {
        throw new Error(`wasm-bindgen: HTMLDocument.prototype.createElement does not exist`);
    } ;
    
    const stack = [];
    
    function getObject(idx) {
        if ((idx & 1) === 1) {
            return stack[idx >> 1];
        } else {
            const val = slab[idx >> 1];
            
            return val.obj;
            
        }
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
    
    __exports.__wbg_createElement_b8476e26186bb861 = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        return addHeapObject(__wbg_createElement_b8476e26186bb861_target.call(getObject(arg0), varg1));
    };
    
    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
        throw new Error(`descriptor for id='${id}' not found`);
    }
    
    const __wbg_body_3188116385400c35_target = GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get  || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get does not exist`);
    } ;
    
    __exports.__wbg_body_3188116385400c35 = function(arg0) {
        return addHeapObject(__wbg_body_3188116385400c35_target.call(getObject(arg0)));
    };
    
    const __wbg_setinnerhtml_0949e92f494a51e6_target = GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set  || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist`);
    } ;
    
    __exports.__wbg_setinnerhtml_0949e92f494a51e6 = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        __wbg_setinnerhtml_0949e92f494a51e6_target.call(getObject(arg0), varg1);
    };
    
    const __wbg_appendChild_de90fa964b431494_target = Element.prototype.appendChild  || function() {
        throw new Error(`wasm-bindgen: Element.prototype.appendChild does not exist`);
    } ;
    
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
    
    __exports.__wbg_appendChild_de90fa964b431494 = function(arg0, arg1) {
        __wbg_appendChild_de90fa964b431494_target.call(getObject(arg0), takeObject(arg1));
    };
    
    const __wbg_log_4bdf1576e3317256_target = console.log;
    
    __exports.__wbg_log_4bdf1576e3317256 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        __wbg_log_4bdf1576e3317256_target(varg0);
    };
    
    __exports.__wbg_fetch_a34c383a532cbb05 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        return addHeapObject(fetch(varg0));
    };
    
    const __wbg_arrayBuffer_dc22f887378c66cc_target = Response.prototype.arrayBuffer  || function() {
        throw new Error(`wasm-bindgen: Response.prototype.arrayBuffer does not exist`);
    } ;
    
    __exports.__wbg_arrayBuffer_dc22f887378c66cc = function(arg0) {
        return addHeapObject(__wbg_arrayBuffer_dc22f887378c66cc_target.call(getObject(arg0)));
    };
    /**
    * @returns {ClosureHandle}
    */
    __exports.main = function() {
        return ClosureHandle.__construct(wasm.main());
    };
    
    __exports.__wbg_new_c585b8a5899eec6e = function(arg0) {
        return addHeapObject(new Uint8Array(getObject(arg0)));
    };
    
    const __wbg_forEach_9702942586f1f0c4_target = Uint8Array.prototype.forEach  || function() {
        throw new Error(`wasm-bindgen: Uint8Array.prototype.forEach does not exist`);
    } ;
    
    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }
    
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
    
    __exports.__wbg_forEach_9702942586f1f0c4 = function(arg0, arg1) {
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
            __wbg_forEach_9702942586f1f0c4_target.call(getObject(arg0), cbarg1.bind(cbarg1));
        } finally {
            cbarg1.a = cbarg1.b = 0;
            
        }
    };
    
    const __wbg_then_98cba1b518a26f8f_target = Promise.prototype.then  || function() {
        throw new Error(`wasm-bindgen: Promise.prototype.then does not exist`);
    } ;
    
    __exports.__wbg_then_98cba1b518a26f8f = function(arg0, arg1) {
        let idxarg1 = getUint32Memory()[arg1 / 4];
        if (idxarg1 === 0xffffffff) {
            let cbarg1 = function(arg0) {
                let a = this.a;
                this.a = 0;
                try {
                    return this.f(a, addHeapObject(arg0));
                    
                } finally {
                    this.a = a;
                    
                }
                
            };
            cbarg1.f = wasm.__wbg_function_table.get(getGlobalArgument(0));
            cbarg1.a = getGlobalArgument(1);
            let real = cbarg1.bind(cbarg1);
            real.original = cbarg1;
            idxarg1 = getUint32Memory()[arg1 / 4] = addHeapObject(real);
        }
        return addHeapObject(__wbg_then_98cba1b518a26f8f_target.call(getObject(arg0), getObject(idxarg1)));
    };
    /**
    */
    class ClosureHandle {
        
        static __construct(ptr) {
            return new ClosureHandle(ptr);
        }
        
        constructor(ptr) {
            this.ptr = ptr;
        }
        
        free() {
            const ptr = this.ptr;
            this.ptr = 0;
            wasm.__wbg_closurehandle_free(ptr);
        }
    }
    __exports.ClosureHandle = ClosureHandle;
    
    __exports.__wbindgen_object_drop_ref = function(i) {
        dropRef(i);
    };
    
    __exports.__wbindgen_cb_drop = function(i) {
        let obj = getObject(i).original;
        obj.a = obj.b = 0;
        dropRef(i);
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

