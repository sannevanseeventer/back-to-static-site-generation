import{n as ve,s as ot,o as Ee,t as ke}from"../chunks/scheduler.2aecb5fb.js";import{a as it,b as M}from"../chunks/paths.d86c6931.js";function st(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ct(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(e,n){const i=new URL(e);for(const r of ft)Object.defineProperty(i,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return dt(i),i}function dt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const pt="/__data.json";function ht(e){return e.replace(/\/$/,"")+pt}function gt(...e){let n=5381;for(const i of e)if(typeof i=="string"){let r=i.length;for(;r;)n=n*33^i.charCodeAt(--r)}else if(ArrayBuffer.isView(i)){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let u=r.length;for(;u;)n=n*33^r[--u]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const Xe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&oe.delete(Le(e)),Xe(e,n));const oe=new Map;function mt(e){const n=atob(e),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i.buffer}function _t(e,n){const i=Le(e,n),r=document.querySelector(i);if(r!=null&&r.textContent){let{body:u,...f}=JSON.parse(r.textContent);const _=r.getAttribute("data-ttl");return _&&oe.set(i,{body:u,init:f,ttl:1e3*Number(_)}),r.getAttribute("data-b64")!==null&&(u=mt(u)),Promise.resolve(new Response(u,f))}return window.fetch(e,n)}function wt(e,n,i){if(oe.size>0){const r=Le(e,i),u=oe.get(r);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(u.body,u.init);oe.delete(r)}}return window.fetch(n,i)}function Le(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const u=[];n.headers&&u.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&u.push(n.body),r+=`[data-hash="${gt(...u)}"]`}return r}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(u)return n.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(f)return n.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const _=r.split(/\[(.+?)\](?!\])/);return"/"+_.map((p,h)=>{if(h%2){if(p.startsWith("x+"))return Se(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Se(String.fromCharCode(...p.slice(2).split("-").map(P=>parseInt(P,16))));const g=yt.exec(p);if(!g)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,$,A,D]=g;return n.push({name:A,matcher:D,optional:!!N,rest:!!$,chained:$?h===1&&_[0]==="":!1}),$?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return Se(p)}).join("")}).join("")}/?$`),params:n}}function vt(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(vt)}function kt(e,n,i){const r={},u=e.slice(1),f=u.filter(s=>s!==void 0);let _=0;for(let s=0;s<n.length;s+=1){const p=n[s];let h=u[s-_];if(p.chained&&p.rest&&_&&(h=u.slice(s-_,s+1).filter(g=>g).join("/"),_=0),h===void 0){p.rest&&(r[p.name]="");continue}if(!p.matcher||i[p.matcher](h)){r[p.name]=h;const g=n[s+1],N=u[s+1];g&&!g.rest&&g.optional&&N&&p.chained&&(_=0),!g&&!N&&Object.keys(r).length===f.length&&(_=0);continue}if(p.optional&&p.chained){_++;continue}return}if(!_)return r}function Se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St({nodes:e,server_loads:n,dictionary:i,matchers:r}){const u=new Set(n);return Object.entries(i).map(([s,[p,h,g]])=>{const{pattern:N,params:$}=bt(s),A={id:s,exec:D=>{const P=N.exec(D);if(P)return kt(P,$,r)},errors:[1,...g||[]].map(D=>e[D]),layouts:[0,...h||[]].map(_),leaf:f(p)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function f(s){const p=s<0;return p&&(s=~s),[p,e[s]]}function _(s){return s===void 0?s:[u.has(s),e[s]]}}function Ze(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Ge(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}const Y=[];function Ue(e,n=ve){let i;const r=new Set;function u(s){if(ot(e,s)&&(e=s,i)){const p=!Y.length;for(const h of r)h[1](),Y.push(h,e);if(p){for(let h=0;h<Y.length;h+=2)Y[h][0](Y[h+1]);Y.length=0}}}function f(s){u(s(e))}function _(s,p=ve){const h=[s,p];return r.add(h),r.size===1&&(i=n(u,f)||ve),s(e),()=>{r.delete(h),r.size===0&&i&&(i(),i=null)}}return{set:u,update:f,subscribe:_}}const At="1702991293991",Qe="sveltekit:snapshot",et="sveltekit:scroll",q="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},he=location.origin;function ze(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function ae(){return{x:pageXOffset,y:pageYOffset}}function X(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Be={...pe,"":pe.hover};function tt(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=tt(e)}}function Ae(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,u=!i||!!r||de(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(i==null?void 0:i.origin)===he&&e.hasAttribute("download");return{url:i,external:u,target:r,download:f}}function ue(e){let n=null,i=null,r=null,u=null,f=null,_=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=X(s,"preload-code")),u===null&&(u=X(s,"preload-data")),n===null&&(n=X(s,"keepfocus")),i===null&&(i=X(s,"noscroll")),f===null&&(f=X(s,"reload")),_===null&&(_=X(s,"replacestate")),s=tt(s);function p(h){switch(h){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Be[r??"off"],preload_data:Be[u??"off"],keep_focus:p(n),noscroll:p(i),reload:p(f),replace_state:p(_)}}function Je(e){const n=Ue(e);let i=!0;function r(){i=!0,n.update(_=>_)}function u(_){i=!1,n.set(_)}function f(_){let s;return n.subscribe(p=>{(s===void 0||i&&p!==s)&&_(s=p)})}return{notify:r,set:u,subscribe:f}}function Rt(){const{set:e,subscribe:n}=Ue(!1);let i;async function r(){clearTimeout(i);try{const u=await fetch(`${it}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!u.ok)return!1;const _=(await u.json()).version!==At;return _&&(e(!0),clearTimeout(i)),_}catch{return!1}}return{subscribe:n,check:r}}function de(e,n){return e.origin!==he||!e.pathname.startsWith(n)}const It=-1,Lt=-2,Ut=-3,Ot=-4,xt=-5,Pt=-6;function Nt(e,n){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,r=Array(i.length);function u(f,_=!1){if(f===It)return;if(f===Ut)return NaN;if(f===Ot)return 1/0;if(f===xt)return-1/0;if(f===Pt)return-0;if(_)throw new Error("Invalid input");if(f in r)return r[f];const s=i[f];if(!s||typeof s!="object")r[f]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const p=s[0],h=n==null?void 0:n[p];if(h)return r[f]=h(u(s[1]));switch(p){case"Date":r[f]=new Date(s[1]);break;case"Set":const g=new Set;r[f]=g;for(let A=1;A<s.length;A+=1)g.add(u(s[A]));break;case"Map":const N=new Map;r[f]=N;for(let A=1;A<s.length;A+=2)N.set(u(s[A]),u(s[A+1]));break;case"RegExp":r[f]=new RegExp(s[1],s[2]);break;case"Object":r[f]=Object(s[1]);break;case"BigInt":r[f]=BigInt(s[1]);break;case"null":const $=Object.create(null);r[f]=$;for(let A=1;A<s.length;A+=2)$[s[A]]=u(s[A+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(s.length);r[f]=p;for(let h=0;h<s.length;h+=1){const g=s[h];g!==Lt&&(p[h]=u(g))}}else{const p={};r[f]=p;for(const h in s){const g=s[h];p[h]=u(g)}}return r[f]}return u(0)}function jt(e){return e.filter(n=>n!=null)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const Tt=new Set([...nt]);[...Tt];async function $t(e,n){var i;for(const r in e)if(typeof((i=e[r])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([u,f])=>[u,await f])));return e}class re{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(n,i){this.status=n,this.location=i}}class Ct extends Error{constructor(n){super(),this.status=404,this.message=`Not found: ${n}`}}const Dt="x-sveltekit-invalidated",Vt="x-sveltekit-trailing-slash";function qt(e){e.client}const z={url:Je({}),page:Je({}),navigating:Ue(null),updated:Rt()},H=Ze(et)??{},ne=Ze(Qe)??{};function Re(e){H[e]=ae()}function J(e){return location.href=e.href,new Promise(()=>{})}function Ft(e,n){var qe;const i=St(e),r=e.nodes[0],u=e.nodes[1];r(),u();const f=document.documentElement,_=[],s=[];let p=null;const h={before_navigate:[],on_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},N=!1,$=!1,A=!0,D=!1,P=!1,C=!1,K=!1,F,x=(qe=history.state)==null?void 0:qe[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const ge=H[x];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let G,W,Z;async function Oe(){if(Z=Z||Promise.resolve(),await Z,!Z)return;Z=null;const t=new URL(location.href),l=ee(t,!0);p=null;const a=W={},c=l&&await we(l);if(a===W&&c){if(c.type==="redirect")return ie(new URL(c.location,t).href,{},1,a);c.props.page!==void 0&&(G=c.props.page),F.$set(c.props)}}function xe(t){s.some(l=>l==null?void 0:l.snapshot)&&(ne[t]=s.map(l=>{var a;return(a=l==null?void 0:l.snapshot)==null?void 0:a.capture()}))}function Pe(t){var l;(l=ne[t])==null||l.forEach((a,c)=>{var o,d;(d=(o=s[c])==null?void 0:o.snapshot)==null||d.restore(a)})}function Ne(){Re(x),Ge(et,H),xe(x),Ge(Qe,ne)}async function ie(t,{noScroll:l=!1,replaceState:a=!1,keepFocus:c=!1,state:o={},invalidateAll:d=!1},m,b){return typeof t=="string"&&(t=new URL(t,ze(document))),fe({url:t,scroll:l?ae():null,keepfocus:c,redirect_count:m,details:{state:o,replaceState:a},nav_token:b,accepted:()=>{d&&(K=!0)},blocked:()=>{},type:"goto"})}async function je(t){return p={id:t.id,promise:we(t).then(l=>(l.type==="loaded"&&l.state.error&&(p=null),l))},p.promise}async function se(...t){const a=i.filter(c=>t.some(o=>c.exec(o))).map(c=>Promise.all([...c.layouts,c.leaf].map(o=>o==null?void 0:o[1]())));await Promise.all(a)}function Te(t){var c;g=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),G=t.props.page,F=new e.root({target:n,props:{...t.props,stores:z,components:s},hydrate:!0}),Pe(x);const a={from:null,to:{params:g.params,route:{id:((c=g.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};h.after_navigate.forEach(o=>o(a)),$=!0}async function Q({url:t,params:l,branch:a,status:c,error:o,route:d,form:m}){let b="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(b=y.slash);t.pathname=st(t.pathname,b),t.search=t.search;const E={type:"loaded",state:{url:t,params:l,branch:a,error:o,route:d},props:{constructors:jt(a).map(y=>y.node.component)}};m!==void 0&&(E.props.form=m);let v={},L=!G,R=0;for(let y=0;y<Math.max(a.length,g.branch.length);y+=1){const w=a[y],O=g.branch[y];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(v={...v,...w.data},L&&(E.props[`data_${R}`]=v),R+=1)}return(!g.url||t.href!==g.url.href||g.error!==o||m!==void 0&&m!==G.form||L)&&(E.props.page={error:o,params:l,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(t),form:m??null,data:L?v:G.data}),E}async function me({loader:t,parent:l,url:a,params:c,route:o,server_data_node:d}){var v,L,R;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((v=E.universal)!=null&&v.load){let U=function(...w){for(const O of w){const{href:j}=new URL(O,a);b.dependencies.add(j)}};const y={route:new Proxy(o,{get:(w,O)=>(b.route=!0,w[O])}),params:new Proxy(c,{get:(w,O)=>(b.params.add(O),w[O])}),data:(d==null?void 0:d.data)??null,url:ut(a,()=>{b.url=!0}),async fetch(w,O){let j;w instanceof Request?(j=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):j=w;const V=new URL(j,a);return U(V.href),V.origin===a.origin&&(j=V.href.slice(a.origin.length)),$?wt(j,V.href,O):_t(j,O)},setHeaders:()=>{},depends:U,parent(){return b.parent=!0,l()}};m=await E.universal.load.call(null,y)??null,m=m?await $t(m,o.id):null}return{node:E,loader:t,server:d,universal:(L=E.universal)!=null&&L.load?{type:"data",data:m,uses:b}:null,data:m??(d==null?void 0:d.data)??null,slash:a.pathname===M||a.pathname===M+"/"?"always":((R=E.universal)==null?void 0:R.trailingSlash)??(d==null?void 0:d.slash)}}function $e(t,l,a,c,o){if(K)return!0;if(!c)return!1;if(c.parent&&t||c.route&&l||c.url&&a)return!0;for(const d of c.params)if(o[d]!==g.params[d])return!0;for(const d of c.dependencies)if(_.some(m=>m(new URL(d))))return!0;return!1}function _e(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function we({id:t,invalidating:l,url:a,params:c,route:o}){if((p==null?void 0:p.id)===t)return p.promise;const{errors:d,layouts:m,leaf:b}=o,E=[...m,b];d.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const L=g.url?t!==g.url.pathname+g.url.search:!1,R=g.route?o.id!==g.route.id:!1;let U=!1;const y=E.map((k,I)=>{var B;const S=g.branch[I],T=!!(k!=null&&k[0])&&((S==null?void 0:S.loader)!==k[1]||$e(U,R,L,(B=S.server)==null?void 0:B.uses,c));return T&&(U=!0),T});if(y.some(Boolean)){try{v=await We(a,y)}catch(k){return ce({status:k instanceof re?k.status:500,error:await te(k,{url:a,params:c,route:{id:o.id}}),url:a,route:o})}if(v.type==="redirect")return v}const w=v==null?void 0:v.nodes;let O=!1;const j=E.map(async(k,I)=>{var ye;if(!k)return;const S=g.branch[I],T=w==null?void 0:w[I];if((!T||T.type==="skip")&&k[1]===(S==null?void 0:S.loader)&&!$e(O,R,L,(ye=S.universal)==null?void 0:ye.uses,c))return S;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return me({loader:k[1],url:a,params:c,route:o,parent:async()=>{var Me;const Fe={};for(let be=0;be<I;be+=1)Object.assign(Fe,(Me=await j[be])==null?void 0:Me.data);return Fe},server_data_node:_e(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?S==null?void 0:S.server:void 0)})});for(const k of j)k.catch(()=>{});const V=[];for(let k=0;k<E.length;k+=1)if(E[k])try{V.push(await j[k])}catch(I){if(I instanceof Ke)return{type:"redirect",location:I.location};let S=500,T;if(w!=null&&w.includes(I))S=I.status??S,T=I.error;else if(I instanceof re)S=I.status,T=I.body;else{if(await z.updated.check())return await J(a);T=await te(I,{params:c,url:a,route:{id:o.id}})}const B=await Ce(k,V,d);return B?await Q({url:a,params:c,branch:V.slice(0,B.idx).concat(B.node),status:S,error:T,route:o}):await Ve(a,{id:o.id},T,S)}else V.push(void 0);return await Q({url:a,params:c,branch:V,status:200,error:null,route:o,form:l?void 0:null})}async function Ce(t,l,a){for(;t--;)if(a[t]){let c=t;for(;!l[c];)c-=1;try{return{idx:c+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:l,url:a,route:c}){const o={};let d=null;if(e.server_loads[0]===0)try{const v=await We(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;d=v.nodes[0]??null}catch{(a.origin!==he||a.pathname!==location.pathname||N)&&await J(a)}const b=await me({loader:r,url:a,params:o,route:c,parent:()=>Promise.resolve({}),server_data_node:_e(d)}),E={node:await u(),loader:u,universal:null,server:null,data:null};return await Q({url:a,params:o,branch:[b,E],status:t,error:l,route:null})}function ee(t,l){if(de(t,M))return;const a=le(t);for(const c of i){const o=c.exec(a);if(o)return{id:t.pathname+t.search,invalidating:l,route:c,params:lt(o),url:t}}}function le(t){return ct(t.pathname.slice(M.length)||"/")}function De({url:t,type:l,intent:a,delta:c}){let o=!1;const d=Ye(g,a,t,l);c!==void 0&&(d.navigation.delta=c);const m={...d.navigation,cancel:()=>{o=!0,d.reject(new Error("navigation was cancelled"))}};return P||h.before_navigate.forEach(b=>b(m)),o?null:d}async function fe({url:t,scroll:l,keepfocus:a,redirect_count:c,details:o,type:d,delta:m,nav_token:b={},accepted:E,blocked:v}){var j,V,k;const L=ee(t,!1),R=De({url:t,type:d,delta:m,intent:L});if(!R){v();return}const U=x;E(),P=!0,$&&z.navigating.set(R.navigation),W=b;let y=L&&await we(L);if(!y){if(de(t,M))return await J(t);y=await Ve(t,{id:null},await te(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(L==null?void 0:L.url)||t,W!==b)return R.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(c>=20)y=await ce({status:500,error:await te(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(y.location,t).href,{},c+1,b),!1;else((j=y.props.page)==null?void 0:j.status)>=400&&await z.updated.check()&&await J(t);if(_.length=0,K=!1,D=!0,Re(U),xe(U),(V=y.props.page)!=null&&V.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),o){const I=o.replaceState?0:1;if(o.state[q]=x+=I,history[o.replaceState?"replaceState":"pushState"](o.state,"",t),!o.replaceState){let S=x+1;for(;ne[S]||H[S];)delete ne[S],delete H[S],S+=1}}if(p=null,$){g=y.state,y.props.page&&(y.props.page.url=t);const I=(await Promise.all(h.on_navigate.map(S=>S(R.navigation)))).filter(S=>typeof S=="function");if(I.length>0){let S=function(){h.after_navigate=h.after_navigate.filter(T=>!I.includes(T))};I.push(S),h.after_navigate.push(...I)}F.$set(y.props)}else Te(y);const{activeElement:w}=document;if(await ke(),A){const I=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!a&&!O&&Ie(),A=!0,y.props.page&&(G=y.props.page),P=!1,d==="popstate"&&Pe(x),R.fulfil(void 0),h.after_navigate.forEach(I=>I(R.navigation)),z.navigating.set(null),D=!1}async function Ve(t,l,a,c){return t.origin===he&&t.pathname===location.pathname&&!N?await ce({status:c,error:a,url:t,route:l}):await J(t)}function rt(){let t;f.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(t),t=setTimeout(()=>{c(m,2)},20)});function l(d){c(d.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const a=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(se(le(new URL(m.target.href))),a.unobserve(m.target))},{threshold:0});function c(d,m){const b=He(d,f);if(!b)return;const{url:E,external:v,download:L}=Ae(b,M);if(v||L)return;const R=ue(b);if(!R.reload)if(m<=R.preload_data){const U=ee(E,!1);U&&je(U)}else m<=R.preload_code&&se(le(E))}function o(){a.disconnect();for(const d of f.querySelectorAll("a")){const{url:m,external:b,download:E}=Ae(d,M);if(b||E)continue;const v=ue(d);v.reload||(v.preload_code===pe.viewport&&a.observe(d),v.preload_code===pe.eager&&se(le(m)))}}h.after_navigate.push(o),o()}function te(t,l){return t instanceof re?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id===null&&t instanceof Ct?"Not Found":"Internal Error"}}return{after_navigate:t=>{Ee(()=>(h.after_navigate.push(t),()=>{const l=h.after_navigate.indexOf(t);h.after_navigate.splice(l,1)}))},before_navigate:t=>{Ee(()=>(h.before_navigate.push(t),()=>{const l=h.before_navigate.indexOf(t);h.before_navigate.splice(l,1)}))},on_navigate:t=>{Ee(()=>(h.on_navigate.push(t),()=>{const l=h.on_navigate.indexOf(t);h.on_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(D||!$)&&(A=!1)},goto:(t,l={})=>ie(t,l,0),invalidate:t=>{if(typeof t=="function")_.push(t);else{const{href:l}=new URL(t,location.href);_.push(a=>a.href===l)}return Oe()},invalidate_all:()=>(K=!0,Oe()),preload_data:async t=>{const l=new URL(t,ze(document)),a=ee(l,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await je(a)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:a,route:c}=g;if(!c)return;const o=await Ce(g.branch.length,a,c.errors);if(o){const d=await Q({url:l,params:g.params,branch:a.slice(0,o.idx).concat(o.node),status:t.status??500,error:t.error,route:c});g=d.state,F.$set(d.props),ke().then(Ie)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},0):(F.$set({form:null,page:{...G,form:t.data,status:t.status}}),await ke(),F.$set({form:t.data}),t.type==="success"&&Ie())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let c=!1;if(Ne(),!P){const o=Ye(g,void 0,null,"leave"),d={...o.navigation,cancel:()=>{c=!0,o.reject(new Error("navigation was cancelled"))}};h.before_navigate.forEach(m=>m(d))}c?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne()}),(l=navigator.connection)!=null&&l.saveData||rt(),f.addEventListener("click",a=>{var U;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const c=He(a.composedPath()[0],f);if(!c)return;const{url:o,external:d,target:m,download:b}=Ae(c,M);if(!o)return;if(m==="_parent"||m==="_top"){if(window.parent!==window)return}else if(m&&m!=="_self")return;const E=ue(c);if(!(c instanceof SVGAElement)&&o.protocol!==location.protocol&&!(o.protocol==="https:"||o.protocol==="http:")||b)return;if(d||E.reload){De({url:o,type:"link"})?P=!0:a.preventDefault();return}const[L,R]=o.href.split("#");if(R!==void 0&&L===location.href.split("#")[0]){if(g.url.hash===o.hash){a.preventDefault(),(U=c.ownerDocument.getElementById(R))==null||U.scrollIntoView();return}if(C=!0,Re(x),t(o),!E.replace_state)return;C=!1,a.preventDefault()}fe({url:o,scroll:E.noscroll?ae():null,keepfocus:E.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:E.replace_state??o.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),f.addEventListener("submit",a=>{if(a.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(a.target),o=a.submitter;if(((o==null?void 0:o.formMethod)||c.method)!=="get")return;const m=new URL((o==null?void 0:o.hasAttribute("formaction"))&&(o==null?void 0:o.formAction)||c.action);if(de(m,M))return;const b=a.target,{keep_focus:E,noscroll:v,reload:L,replace_state:R}=ue(b);if(L)return;a.preventDefault(),a.stopPropagation();const U=new FormData(b),y=o==null?void 0:o.getAttribute("name");y&&U.append(y,(o==null?void 0:o.getAttribute("value"))??""),m.search=new URLSearchParams(U).toString(),fe({url:m,scroll:v?ae():null,keepfocus:E??!1,redirect_count:0,details:{state:{},replaceState:R??m.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var c,o;if(W={},(c=a.state)!=null&&c[q]){if(a.state[q]===x)return;const d=H[a.state[q]],m=new URL(location.href);if(((o=g.url)==null?void 0:o.href.split("#")[0])===location.href.split("#")[0]){t(m),H[x]=ae(),x=a.state[q],scrollTo(d.x,d.y);return}const b=a.state[q]-x;await fe({url:m,scroll:d,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{x=a.state[q]},blocked:()=>{history.go(-b)},type:"popstate",delta:b,nav_token:W})}else if(!C){const d=new URL(location.href);t(d)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&z.navigating.set(null)});function t(a){g.url=a,z.page.set({...G,url:a}),z.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:a,params:c,route:o,data:d,form:m})=>{N=!0;const b=new URL(location.href);({params:c={},route:o={id:null}}=ee(b,!1)||{});let E;try{const v=a.map(async(U,y)=>{const w=d[y];return w!=null&&w.uses&&(w.uses=at(w.uses)),me({loader:e.nodes[U],url:b,params:c,route:o,parent:async()=>{const O={};for(let j=0;j<y;j+=1)Object.assign(O,(await v[j]).data);return O},server_data_node:_e(w)})}),L=await Promise.all(v),R=i.find(({id:U})=>U===o.id);if(R){const U=R.layouts;for(let y=0;y<U.length;y++)U[y]||L.splice(y,0,void 0)}E=await Q({url:b,params:c,branch:L,status:t,error:l,form:m,route:R??null})}catch(v){if(v instanceof Ke){await J(new URL(v.location,location.href));return}E=await ce({status:v instanceof re?v.status:500,error:await te(v,{url:b,params:c,route:o}),url:b,route:o})}Te(E)}}}async function We(e,n){var u;const i=new URL(e);i.pathname=ht(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(Vt,"1"),i.searchParams.append(Dt,n.map(f=>f?"1":"0").join(""));const r=await Xe(i.href);if((u=r.headers.get("content-type"))!=null&&u.includes("text/html")&&await J(e),!r.ok)throw new re(r.status,await r.json());return new Promise(async f=>{var N;const _=new Map,s=r.body.getReader(),p=new TextDecoder;function h($){return Nt($,{Promise:A=>new Promise((D,P)=>{_.set(A,{fulfil:D,reject:P})})})}let g="";for(;;){const{done:$,value:A}=await s.read();if($&&!g)break;for(g+=!A&&g?`
`:p.decode(A);;){const D=g.indexOf(`
`);if(D===-1)break;const P=JSON.parse(g.slice(0,D));if(g=g.slice(D+1),P.type==="redirect")return f(P);if(P.type==="data")(N=P.nodes)==null||N.forEach(C=>{(C==null?void 0:C.type)==="data"&&(C.uses=at(C.uses),C.data=h(C.data))}),f(P);else if(P.type==="chunk"){const{id:C,data:K,error:F}=P,x=_.get(C);_.delete(C),F?x.reject(h(F)):x.fulfil(h(K))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ie(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const u=[];for(let f=0;f<r.rangeCount;f+=1)u.push(r.getRangeAt(f));setTimeout(()=>{if(r.rangeCount===u.length){for(let f=0;f<r.rangeCount;f+=1){const _=u[f],s=r.getRangeAt(f);if(_.commonAncestorContainer!==s.commonAncestorContainer||_.startContainer!==s.startContainer||_.endContainer!==s.endContainer||_.startOffset!==s.startOffset||_.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Ye(e,n,i,r){var p,h;let u,f;const _=new Promise((g,N)=>{u=g,f=N});return _.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((p=e.route)==null?void 0:p.id)??null},url:e.url},to:i&&{params:(n==null?void 0:n.params)??null,route:{id:((h=n==null?void 0:n.route)==null?void 0:h.id)??null},url:i},willUnload:!n,type:r,complete:_},fulfil:u,reject:f}}async function zt(e,n,i){const r=Ft(e,n);qt({client:r}),i?await r._hydrate(i):r.goto(location.href,{replaceState:!0}),r._start_router()}export{zt as start};
