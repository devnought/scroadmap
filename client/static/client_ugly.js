!function(){var n;let t={},e=[],r=[{obj:void 0},{obj:null},{obj:!0},{obj:!1}];function u(n){if((n&1)===1){return e[n>>1]}else{let t=r[n>>1];return t.obj}}let _=r.length;function o(n){n>>=1;if(n<4)return;let t=r[n];t.cnt-=1;if(t.cnt>0)return;r[n]=_;_=n}function i(n){let t=u(n);o(n);return t}t.main=function(){return i(n.main())};let f=Document.prototype.createElement||function(){throw new Error("wasm-bindgen: Document.prototype.createElement does not exist")},c=null;function l(){(c===null||c.buffer!==n.memory.buffer)&&(c=new Uint32Array(n.memory.buffer));return c}function a(n){_===r.length&&r.push(r.length+1);let t=_,e=r[t];_=e;r[t]={obj:n,cnt:1};return t<<1}let w=new TextDecoder('utf-8'),b=null;function d(){(b===null||b.buffer!==n.memory.buffer)&&(b=new Uint8Array(n.memory.buffer));return b}function g(n,t){return w.decode(d().subarray(n,n+t))}t.__widl_f_create_element_Document=function(n,t,e,r){let _=g(t,e);try{return a(f.call(u(n),_))}catch(n){let t=l();t[r/4]=1;t[r/4+1]=a(n)}};function y(n,t){while(n){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}throw new Error(`descriptor for id='${t}' not found`)}let p=y(Document.prototype,'body').get||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Document.prototype, 'body').get does not exist")};function s(n){return n===void 0||n===null}t.__widl_f_body_Document=function(n){let t=p.call(u(n));return s(t)?0:a(t)};let h=y(Element.prototype,'innerHTML').set||function(){throw new Error("wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist")};t.__widl_f_set_inner_html_Element=function(n,t,e){let r=g(t,e);h.call(u(n),r)};let m=Node.prototype.appendChild||function(){throw new Error("wasm-bindgen: Node.prototype.appendChild does not exist")};t.__widl_f_append_child_Node=function(n,t,e){try{return a(m.call(u(n),u(t)))}catch(n){let t=l();t[e/4]=1;t[e/4+1]=a(n)}};t.__widl_f_new_with_str_and_init_Request=function(n,t,e,r){let _=g(n,t);try{return a(new Request(_,u(e)))}catch(n){let t=l();t[r/4]=1;t[r/4+1]=a(n)}};t.__widl_instanceof_Response=function(n){return u(n) instanceof Response?1:0};let E=Response.prototype.arrayBuffer||function(){throw new Error("wasm-bindgen: Response.prototype.arrayBuffer does not exist")};t.__widl_f_array_buffer_Response=function(n,t){try{return a(E.call(u(n)))}catch(n){let e=l();e[t/4]=1;e[t/4+1]=a(n)}};t.__widl_f_document_=function(){let n=(()=>document)();return s(n)?0:a(n)};t.__widl_f_fetch_with_request_=function(n){return a(fetch(u(n)))};let D=console.log;t.__widl_f_log_1_=function(n){D(u(n))};let B=Function.prototype.call||function(){throw new Error("wasm-bindgen: Function.prototype.call does not exist")};t.__wbg_call_99e981b05e14efcd=function(n,t,e,r){try{return a(B.call(u(n),u(t),u(e)))}catch(n){let t=l();t[r/4]=1;t[r/4+1]=a(n)}};t.__wbg_new_68071b7b019cd30b=function(){return a(new Object)};let O=Reflect.set.bind(Reflect)||function(){throw new Error("wasm-bindgen: Reflect.set.bind(Reflect) does not exist")};t.__wbg_set_ef6103a13c19a10a=function(n,t,e){return O(u(n),u(t),u(e))?1:0};t.__wbg_new_769bb708ecaaf18b=function(n){return a(new Uint8Array(u(n)))};let P=Uint8Array.prototype.forEach||function(){throw new Error("wasm-bindgen: Uint8Array.prototype.forEach does not exist")},R=null;function j(){R===null&&(R=n.__wbindgen_global_argument_ptr());return R}function q(n){let t=j()/4+n;return l()[t]}t.__wbg_forEach_eee6bdd0ecdb7d14=function(t,e){let r=function(n,t,e){let r=this.a;this.a=0;try{return this.f(r,this.b,n,t,a(e))}finally{this.a=r}};r.f=n.__wbg_function_table.get(e);r.a=q(0);r.b=q(1);try{P.call(u(t),r.bind(r))}finally{r.a=r.b=0}};t.__wbg_new_f2666e4946c6647a=function(t){let e=function(n,t){let e=this.a;this.a=0;try{return this.f(e,this.b,a(n),a(t))}finally{this.a=e}};e.f=n.__wbg_function_table.get(t);e.a=q(0);e.b=q(1);try{return a(new Promise(e.bind(e)))}finally{e.a=e.b=0}};let C=Promise.prototype.then||function(){throw new Error("wasm-bindgen: Promise.prototype.then does not exist")};t.__wbg_then_8677d4a2d4d3886a=function(n,t,e){return a(C.call(u(n),u(t),u(e)))};t.__wbindgen_object_drop_ref=function(n){o(n)};t.__wbindgen_string_new=function(n,t){return a(g(n,t))};t.__wbindgen_number_get=function(n,t){let e=u(n);if(typeof e==='number')return e;d()[t]=1;return 0};t.__wbindgen_is_null=function(n){return u(n)===null?1:0};t.__wbindgen_is_undefined=function(n){return u(n)===void 0?1:0};t.__wbindgen_boolean_get=function(n){let t=u(n);if(typeof t==='boolean'){return t?1:0}else{return 2}};t.__wbindgen_is_symbol=function(n){return typeof(u(n))==='symbol'?1:0};let H=new TextEncoder('utf-8');function L(t){let e=H.encode(t),r=n.__wbindgen_malloc(e.length);d().set(e,r);return[r,e.length]}t.__wbindgen_string_get=function(n,t){let e=u(n);if(typeof e!=='string')return 0;let[r,_]=L(e);l()[t/4]=_;return r};t.__wbindgen_cb_drop=function(n){let t=u(n).original;t.a=t.b=0;o(n)};t.__wbindgen_closure_wrapper1488=function(t,e){let r=function(n){let t=this.a;this.a=0;try{return this.f(t,a(n))}finally{this.a=t}};r.f=n.__wbg_function_table.get(e);r.a=t;let u=r.bind(r);u.original=r;return a(u)};t.__wbindgen_throw=function(n,t){throw new Error(g(n,t))};function M(e){let r=fetch(e),u;typeof WebAssembly.instantiateStreaming==='function'?(u=WebAssembly.instantiateStreaming(r,{'./client':t})):(u=r.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{'./client':t})));return u.then(({instance:t})=>{n=M.wasm=t.exports;return})}self.wasm_bindgen=Object.assign(M,t)}()