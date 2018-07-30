
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
    /**
    * @returns {void}
    */
    __exports.run = function() {
        return wasm.run();
    };
    
    __exports.__wbindgen_object_drop_ref = function(i) {
        dropRef(i);
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

