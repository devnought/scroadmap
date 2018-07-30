
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
    
    const __wbg_createElement_0b6ea24454b9ed80_target = HTMLDocument.prototype.createElement  || function() {
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
    
    __exports.__wbg_createElement_0b6ea24454b9ed80 = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        return addHeapObject(__wbg_createElement_0b6ea24454b9ed80_target.call(getObject(arg0), varg1));
    };
    
    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
        throw new Error(`descriptor for id='${id}' not found`);
    }
    
    const __wbg_body_3da3aca748842d98_target = GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get  || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get does not exist`);
    } ;
    
    __exports.__wbg_body_3da3aca748842d98 = function(arg0) {
        return addHeapObject(__wbg_body_3da3aca748842d98_target.call(getObject(arg0)));
    };
    
    const __wbg_set_inner_html_47fcf48cc6acbe77_target = GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set  || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist`);
    } ;
    
    __exports.__wbg_set_inner_html_47fcf48cc6acbe77 = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        __wbg_set_inner_html_47fcf48cc6acbe77_target.call(getObject(arg0), varg1);
    };
    
    const __wbg_appendChild_d0aae0d981a89ffb_target = Element.prototype.appendChild  || function() {
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
    
    __exports.__wbg_appendChild_d0aae0d981a89ffb = function(arg0, arg1) {
        __wbg_appendChild_d0aae0d981a89ffb_target.call(getObject(arg0), takeObject(arg1));
    };
    
    const __wbg_log_04827950d900fcc3_target = console.log;
    
    __exports.__wbg_log_04827950d900fcc3 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        __wbg_log_04827950d900fcc3_target(varg0);
    };
    
    __exports.__wbg_fetch_689c98118c6f66d2 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        return addHeapObject(fetch(varg0));
    };
    
    const __wbg_byteLength_c9493d4c39367bad_target = GetOwnOrInheritedPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get  || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get does not exist`);
    } ;
    
    __exports.__wbg_byteLength_c9493d4c39367bad = function(arg0) {
        return __wbg_byteLength_c9493d4c39367bad_target.call(getObject(arg0));
    };
    
    const __wbg_then_0719e1fd1f40fd3a_target = Promise.prototype.then  || function() {
        throw new Error(`wasm-bindgen: Promise.prototype.then does not exist`);
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
    
    __exports.__wbg_then_0719e1fd1f40fd3a = function(arg0, arg1) {
        let idxarg1 = getUint32Memory()[arg1 / 4];
        if (idxarg1 === 0xffffffff) {
            let cbarg1 = function(arg0) {
                let a = this.a;
                this.a = 0;
                try {
                    return this.f(a, this.b, addHeapObject(arg0));
                    
                } finally {
                    this.a = a;
                    
                }
                
            };
            cbarg1.a = getGlobalArgument(0);
            cbarg1.b = getGlobalArgument(1);
            cbarg1.f = wasm.__wbg_function_table.get(getGlobalArgument(2));
            let real = cbarg1.bind(cbarg1);
            real.original = cbarg1;
            idxarg1 = getUint32Memory()[arg1 / 4] = addHeapObject(real);
        }
        return addHeapObject(__wbg_then_0719e1fd1f40fd3a_target.call(getObject(arg0), getObject(idxarg1)));
    };
    
    const __wbg_then_05a1a67fffae8b21_target = Promise.prototype.then  || function() {
        throw new Error(`wasm-bindgen: Promise.prototype.then does not exist`);
    } ;
    
    __exports.__wbg_then_05a1a67fffae8b21 = function(arg0, arg1) {
        let idxarg1 = getUint32Memory()[arg1 / 4];
        if (idxarg1 === 0xffffffff) {
            let cbarg1 = function(arg0) {
                let a = this.a;
                this.a = 0;
                try {
                    return this.f(a, this.b, addHeapObject(arg0));
                    
                } finally {
                    this.a = a;
                    
                }
                
            };
            cbarg1.a = getGlobalArgument(0);
            cbarg1.b = getGlobalArgument(1);
            cbarg1.f = wasm.__wbg_function_table.get(getGlobalArgument(2));
            let real = cbarg1.bind(cbarg1);
            real.original = cbarg1;
            idxarg1 = getUint32Memory()[arg1 / 4] = addHeapObject(real);
        }
        __wbg_then_05a1a67fffae8b21_target.call(getObject(arg0), getObject(idxarg1));
    };
    
    const __wbg_arrayBuffer_92dbdded3d4771f1_target = Response.prototype.arrayBuffer  || function() {
        throw new Error(`wasm-bindgen: Response.prototype.arrayBuffer does not exist`);
    } ;
    
    __exports.__wbg_arrayBuffer_92dbdded3d4771f1 = function(arg0) {
        return addHeapObject(__wbg_arrayBuffer_92dbdded3d4771f1_target.call(getObject(arg0)));
    };
    /**
    * @returns {ClosureResponmseHandle}
    */
    __exports.run = function() {
        return ClosureResponmseHandle.__construct(wasm.run());
    };
    
    /**
    */
    class ClosureResponmseHandle {
        
        static __construct(ptr) {
            return new ClosureResponmseHandle(ptr);
        }
        
        constructor(ptr) {
            this.ptr = ptr;
        }
        
        free() {
            const ptr = this.ptr;
            this.ptr = 0;
            wasm.__wbg_closureresponmsehandle_free(ptr);
        }
    }
    __exports.ClosureResponmseHandle = ClosureResponmseHandle;
    
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
        return fetch(wasm_path)
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.instantiate(buffer, { './client': __exports }))
        .then(({instance}) => {
            wasm = init.wasm = instance.exports;
            return;
        });
    };
    self.wasm_bindgen = Object.assign(init, __exports);
})();

