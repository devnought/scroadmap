!function(){var n;let t={},e=[{obj:void 0},{obj:null},{obj:!0},{obj:!1}],r=e.length;function o(n){r===e.length&&e.push(e.length+1);let t=r,o=e[t];r=o;e[t]={obj:n,cnt:1};return t<<1}t.__wbg_static_accessor_document_document=function(){return o(document)};let u=HTMLDocument.prototype.createElement||function(){throw new Error("wasm-bindgen: HTMLDocument.prototype.createElement does not exist")},f=[];function c(n){if((n&1)===1){return f[n>>1]}else{let t=e[n>>1];return t.obj}}let i=new TextDecoder('utf-8'),a=null;function _(){(a===null||a.buffer!==n.memory.buffer)&&(a=new Uint8Array(n.memory.buffer));return a}function l(n,t){return i.decode(_().subarray(n,n+t))}t.__wbg_createElement_b8476e26186bb861=function(n,t,e){let r=l(t,e);return o(u.call(c(n),r))};function b(n,t){while(n){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}throw new Error(`descriptor for id='${t}' not found`)}let p=b(HTMLDocument.prototype,'body').get||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get does not exist")};t.__wbg_body_3188116385400c35=function(n){return o(p.call(c(n)))};let w=b(Element.prototype,'innerHTML').set||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist")};t.__wbg_setinnerhtml_0949e92f494a51e6=function(n,t,e){let r=l(t,e);w.call(c(n),r)};let g=Element.prototype.appendChild||function(){throw new Error("wasm-bindgen: Element.prototype.appendChild does not exist")};function y(n){n>>=1;if(n<4)return;let t=e[n];t.cnt-=1;if(t.cnt>0)return;e[n]=r;r=n}function d(n){let t=c(n);y(n);return t}t.__wbg_appendChild_de90fa964b431494=function(n,t){g.call(c(n),d(t))};let s=console.log;t.__wbg_log_4bdf1576e3317256=function(n,t){let e=l(n,t);s(e)};t.__wbg_fetch_a34c383a532cbb05=function(n,t){let e=l(n,t);return o(fetch(e))};let h=Response.prototype.arrayBuffer||function(){throw new Error("wasm-bindgen: Response.prototype.arrayBuffer does not exist")};t.__wbg_arrayBuffer_dc22f887378c66cc=function(n){return o(h.call(c(n)))};t.main=function(){return j.__construct(n.main())};t.__wbg_new_c585b8a5899eec6e=function(n){return o(new Uint8Array(c(n)))};let m=Uint8Array.prototype.forEach||function(){throw new Error("wasm-bindgen: Uint8Array.prototype.forEach does not exist")},E=null;function B(){(E===null||E.buffer!==n.memory.buffer)&&(E=new Uint32Array(n.memory.buffer));return E}let C=null;function H(){C===null&&(C=n.__wbindgen_global_argument_ptr());return C}function O(n){let t=H()/4+n;return B()[t]}t.__wbg_forEach_9702942586f1f0c4=function(t,e){let r=function(n,t,e){let r=this.a;this.a=0;try{return this.f(r,this.b,n,t,o(e))}finally{this.a=r}};r.f=n.__wbg_function_table.get(e);r.a=O(0);r.b=O(1);try{m.call(c(t),r.bind(r))}finally{r.a=r.b=0}};let P=Promise.prototype.then||function(){throw new Error("wasm-bindgen: Promise.prototype.then does not exist")};t.__wbg_then_98cba1b518a26f8f=function(t,e){let r=B()[e/4];if(r===4294967295){let t=function(n){let t=this.a;this.a=0;try{return this.f(t,o(n))}finally{this.a=t}};t.f=n.__wbg_function_table.get(O(0));t.a=O(1);let u=t.bind(t);u.original=t;r=B()[e/4]=o(u)}return o(P.call(c(t),c(r)))};class j{static __construct(n){return new j(n)}constructor(n){this.ptr=n}free(){let t=this.ptr;this.ptr=0;n.__wbg_closurehandle_free(t)}}t.ClosureHandle=j;t.__wbindgen_object_drop_ref=function(n){y(n)};t.__wbindgen_cb_drop=function(n){let t=c(n).original;t.a=t.b=0;y(n)};t.__wbindgen_throw=function(n,t){throw new Error(l(n,t))};function D(e){let r=fetch(e),o;typeof WebAssembly.instantiateStreaming==='function'?(o=WebAssembly.instantiateStreaming(r,{'./client':t})):(o=r.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{'./client':t})));return o.then(({instance:t})=>{n=D.wasm=t.exports;return})}self.wasm_bindgen=Object.assign(D,t)}()