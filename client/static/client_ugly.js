!function(){var n;let t={},e=[{obj:void 0},{obj:null},{obj:!0},{obj:!1}],r=e.length;function o(n){r===e.length&&e.push(e.length+1);let t=r,o=e[t];r=o;e[t]={obj:n,cnt:1};return t<<1}t.__wbg_static_accessor_document_document=function(){return o(document)};let u=HTMLDocument.prototype.createElement||function(){throw new Error("wasm-bindgen: HTMLDocument.prototype.createElement does not exist")},c=[];function f(n){if((n&1)===1){return c[n>>1]}else{let t=e[n>>1];return t.obj}}let i=new TextDecoder('utf-8'),_=null;function l(){(_===null||_.buffer!==n.memory.buffer)&&(_=new Uint8Array(n.memory.buffer));return _}function a(n,t){return i.decode(l().subarray(n,n+t))}t.__wbg_createElement_0b6ea24454b9ed80=function(n,t,e){let r=a(t,e);return o(u.call(f(n),r))};function b(n,t){while(n){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}throw new Error(`descriptor for id='${t}' not found`)}let p=b(HTMLDocument.prototype,'body').get||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get does not exist")};t.__wbg_body_3da3aca748842d98=function(n){return o(p.call(f(n)))};let w=b(Element.prototype,'innerHTML').set||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist")};t.__wbg_set_inner_html_47fcf48cc6acbe77=function(n,t,e){let r=a(t,e);w.call(f(n),r)};let g=Element.prototype.appendChild||function(){throw new Error("wasm-bindgen: Element.prototype.appendChild does not exist")};function d(n){n>>=1;if(n<4)return;let t=e[n];t.cnt-=1;if(t.cnt>0)return;e[n]=r;r=n}function y(n){let t=f(n);d(n);return t}t.__wbg_appendChild_d0aae0d981a89ffb=function(n,t){g.call(f(n),y(t))};let s=console.log;t.__wbg_log_04827950d900fcc3=function(n,t){let e=a(n,t);s(e)};t.__wbg_fetch_689c98118c6f66d2=function(n,t){let e=a(n,t);return o(fetch(e))};let h=Promise.prototype.then||function(){throw new Error("wasm-bindgen: Promise.prototype.then does not exist")},m=new TextEncoder('utf-8');function x(t){let e=m.encode(t),r=n.__wbindgen_malloc(e.length);l().set(e,r);return[r,e.length]}let C=null;function E(){(C===null||C.buffer!==n.memory.buffer)&&(C=new Uint32Array(n.memory.buffer));return C}let H=null;function O(){H===null&&(H=n.__wbindgen_global_argument_ptr());return H}function P(n){let t=O()/4+n;return E()[t]}t.__wbg_then_18faf198352ccd03=function(t,e){let r=E()[e/4];if(r===4294967295){let t=function(n){let t=this.a;this.a=0;let[e,r]=x(n);try{return this.f(t,this.b,e,r)}finally{this.a=t}};t.a=P(0);t.b=P(1);t.f=n.__wbg_function_table.get(P(2));let u=t.bind(t);u.original=t;r=E()[e/4]=o(u)}h.call(f(t),f(r))};let j=Promise.prototype.then||function(){throw new Error("wasm-bindgen: Promise.prototype.then does not exist")};t.__wbg_then_0719e1fd1f40fd3a=function(t,e){let r=E()[e/4];if(r===4294967295){let t=function(n){let t=this.a;this.a=0;try{return this.f(t,this.b,o(n))}finally{this.a=t}};t.a=P(0);t.b=P(1);t.f=n.__wbg_function_table.get(P(2));let u=t.bind(t);u.original=t;r=E()[e/4]=o(u)}return o(j.call(f(t),f(r)))};let D=Response.prototype.text||function(){throw new Error("wasm-bindgen: Response.prototype.text does not exist")};t.__wbg_text_e86a7e3a2d6fc9d1=function(n){return o(D.call(f(n)))};t.run=function(){return L.__construct(n.run())};class L{static __construct(n){return new L(n)}constructor(n){this.ptr=n}free(){let t=this.ptr;this.ptr=0;n.__wbg_closureresponmsehandle_free(t)}}t.ClosureResponmseHandle=L;t.__wbindgen_object_drop_ref=function(n){d(n)};t.__wbindgen_cb_drop=function(n){let t=f(n).original;t.a=t.b=0;d(n)};t.__wbindgen_throw=function(n,t){throw new Error(a(n,t))};function M(e){return fetch(e).then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{'./client':t})).then(({instance:t})=>{n=M.wasm=t.exports;return})}self.wasm_bindgen=Object.assign(M,t)}()