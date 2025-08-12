import{n as la,r as ue,w as js,t as dl,a as Ns,c as jl,o as Ws,g as de,b as ml,d as gl,i as Xn,s as Cs,e as z,f as ps,h as Sa,u as G,j as bn,k as ks,l as pa,m as Ha,p as q,q as d,v as ts,x as fl,y as k,z as je,F as za,A as Fa,B as Ja,_ as A,C as Os,D as me,E as nn,G as C,H as Zn,I as _a,J as _l,K as m,L as x,M as R}from"./chunks/framework.DuhuGyQx.js";function ge(n){return ml()?(gl(n),!0):!1}const fe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const yl=Object.prototype.toString,bl=n=>yl.call(n)==="[object Object]",ya=(n,s,a)=>Math.min(a,Math.max(s,n)),is=()=>{},vl=wl();function wl(){var n,s;return fe&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function kl(...n){if(n.length!==1)return dl(...n);const s=n[0];return typeof s=="function"?ue(jl(()=>({get:s,set:is}))):Ns(s)}function Ga(n,s){function a(...t){return new Promise((e,l)=>{Promise.resolve(n(()=>s.apply(this,t),{fn:s,thisArg:this,args:t})).then(e).catch(l)})}return a}const _e=n=>n();function ql(n,s={}){let a,t,e=is;const l=r=>{clearTimeout(r),e(),e=is};let p;return r=>{const i=z(n),c=z(s.maxWait);return a&&l(a),i<=0||c!==void 0&&c<=0?(t&&(l(t),t=null),Promise.resolve(r())):new Promise((h,u)=>{e=s.rejectOnCancel?u:h,p=r,c&&!t&&(t=setTimeout(()=>{a&&l(a),t=null,h(p())},c)),a=setTimeout(()=>{t&&l(t),t=null,h(r())},i)})}}function Tl(...n){let s=0,a,t=!0,e=is,l,p,o,r,i;!Xn(n[0])&&typeof n[0]=="object"?{delay:p,trailing:o=!0,leading:r=!0,rejectOnCancel:i=!1}=n[0]:[p,o=!0,r=!0,i=!1]=n;const c=()=>{a&&(clearTimeout(a),a=void 0,e(),e=is)};return u=>{const j=z(p),g=Date.now()-s,v=()=>l=u();return c(),j<=0?(s=Date.now(),v()):(g>j&&(r||!t)?(s=Date.now(),v()):o&&(l=new Promise((b,T)=>{e=i?T:b,a=setTimeout(()=>{s=Date.now(),t=!0,b(v()),c()},Math.max(0,j-g))})),!r&&!a&&(a=setTimeout(()=>t=!0,j)),t=!1,l)}}function Sl(n=_e,s={}){const{initialState:a="active"}=s,t=kl(a==="active");function e(){t.value=!1}function l(){t.value=!0}const p=(...o)=>{t.value&&n(...o)};return{isActive:ue(t),pause:e,resume:l,eventFilter:p}}function Fn(n){return Array.isArray(n)?n:[n]}function xl(n){return de()}function Cl(n,s=200,a={}){return Ga(ql(s,a),n)}function Pl(n,s=200,a=!1,t=!0,e=!1){return Ga(Tl(s,a,t,e),n)}function Al(n,s,a={}){const{eventFilter:t=_e,...e}=a;return js(n,Ga(t,s),e)}function xa(n,s,a={}){const{eventFilter:t,initialState:e="active",...l}=a,{eventFilter:p,pause:o,resume:r,isActive:i}=Sl(t,{initialState:e});return{stop:Al(n,s,{...l,eventFilter:p}),pause:o,resume:r,isActive:i}}function lt(n,s,...[a]){const{flush:t="sync",deep:e=!1,immediate:l=!0,direction:p="both",transform:o={}}=a||{},r=[],i="ltr"in o&&o.ltr||(u=>u),c="rtl"in o&&o.rtl||(u=>u);return(p==="both"||p==="ltr")&&r.push(xa(n,u=>{r.forEach(j=>j.pause()),s.value=i(u),r.forEach(j=>j.resume())},{flush:t,deep:e,immediate:l})),(p==="both"||p==="rtl")&&r.push(xa(s,u=>{r.forEach(j=>j.pause()),n.value=c(u),r.forEach(j=>j.resume())},{flush:t,deep:e,immediate:l})),()=>{r.forEach(u=>u.stop())}}function Wa(n,s=!0,a){xl()?Ws(n,a):s?n():la(n)}function Dl(n=!1,s={}){const{truthyValue:a=!0,falsyValue:t=!1}=s,e=Xn(n),l=Cs(n);function p(o){if(arguments.length)return l.value=o,l.value;{const r=z(a);return l.value=l.value===r?z(t):r,l.value}}return e?p:[l,p]}function El(n,s,a){return js(n,s,{...a,immediate:!0})}const Is=fe?window:void 0;function _s(n){var s;const a=z(n);return(s=a==null?void 0:a.$el)!=null?s:a}function Hs(...n){const s=[],a=()=>{s.forEach(o=>o()),s.length=0},t=(o,r,i,c)=>(o.addEventListener(r,i,c),()=>o.removeEventListener(r,i,c)),e=ps(()=>{const o=Fn(z(n[0])).filter(r=>r!=null);return o.every(r=>typeof r!="string")?o:void 0}),l=El(()=>{var o,r;return[(r=(o=e.value)==null?void 0:o.map(i=>_s(i)))!=null?r:[Is].filter(i=>i!=null),Fn(z(e.value?n[1]:n[0])),Fn(G(e.value?n[2]:n[1])),z(e.value?n[3]:n[2])]},([o,r,i,c])=>{if(a(),!(o!=null&&o.length)||!(r!=null&&r.length)||!(i!=null&&i.length))return;const h=bl(c)?{...c}:c;s.push(...o.flatMap(u=>r.flatMap(j=>i.map(g=>t(u,j,g,h)))))},{flush:"post"}),p=()=>{l(),a()};return ge(a),p}let pt=!1;function Nl(n,s,a={}){const{window:t=Is,ignore:e=[],capture:l=!0,detectIframe:p=!1,controls:o=!1}=a;if(!t)return o?{stop:is,cancel:is,trigger:is}:is;if(vl&&!pt){pt=!0;const b={passive:!0};Array.from(t.document.body.children).forEach(T=>T.addEventListener("click",is,b)),t.document.documentElement.addEventListener("click",is,b)}let r=!0;const i=b=>z(e).some(T=>{if(typeof T=="string")return Array.from(t.document.querySelectorAll(T)).some(P=>P===b.target||b.composedPath().includes(P));{const P=_s(T);return P&&(b.target===P||b.composedPath().includes(P))}});function c(b){const T=z(b);return T&&T.$.subTree.shapeFlag===16}function h(b,T){const P=z(b),D=P.$.subTree&&P.$.subTree.children;return D==null||!Array.isArray(D)?!1:D.some(X=>X.el===T.target||T.composedPath().includes(X.el))}const u=b=>{const T=_s(n);if(b.target!=null&&!(!(T instanceof Element)&&c(n)&&h(n,b))&&!(!T||T===b.target||b.composedPath().includes(T))){if("detail"in b&&b.detail===0&&(r=!i(b)),!r){r=!0;return}s(b)}};let j=!1;const g=[Hs(t,"click",b=>{j||(j=!0,setTimeout(()=>{j=!1},0),u(b))},{passive:!0,capture:l}),Hs(t,"pointerdown",b=>{const T=_s(n);r=!i(b)&&!!(T&&!b.composedPath().includes(T))},{passive:!0}),p&&Hs(t,"blur",b=>{setTimeout(()=>{var T;const P=_s(n);((T=t.document.activeElement)==null?void 0:T.tagName)==="IFRAME"&&!(P!=null&&P.contains(t.document.activeElement))&&s(b)},0)},{passive:!0})].filter(Boolean),v=()=>g.forEach(b=>b());return o?{stop:v,cancel:()=>{r=!1},trigger:b=>{r=!0,u(b),r=!1}}:v}function Il(){const n=Cs(!1),s=de();return s&&Ws(()=>{n.value=!0},s),n}function Ol(n){const s=Il();return ps(()=>(s.value,!!n()))}const In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},On="__vueuse_ssr_handlers__",Rl=Ml();function Ml(){return On in In||(In[On]=In[On]||{}),In[On]}function Vl(n,s){return Rl[n]||s}function $l(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const Ll={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},ot="vueuse-storage";function Hl(n,s,a,t={}){var e;const{flush:l="pre",deep:p=!0,listenToStorageChanges:o=!0,writeDefaults:r=!0,mergeDefaults:i=!1,shallow:c,window:h=Is,eventFilter:u,onError:j=f=>{console.error(f)},initOnMounted:g}=t,v=(c?Cs:Ns)(typeof s=="function"?s():s),b=ps(()=>z(n));if(!a)try{a=Vl("getDefaultStorage",()=>{var f;return(f=Is)==null?void 0:f.localStorage})()}catch(f){j(f)}if(!a)return v;const T=z(s),P=$l(T),D=(e=t.serializer)!=null?e:Ll[P],{pause:X,resume:U}=xa(v,()=>$(v.value),{flush:l,deep:p,eventFilter:u});js(b,()=>cs(),{flush:l});let Z=!1;const O=f=>{g&&!Z||cs(f)},es=f=>{g&&!Z||os(f)};h&&o&&(a instanceof Storage?Hs(h,"storage",O,{passive:!0}):Hs(h,ot,es)),g?Wa(()=>{Z=!0,cs()}):cs();function F(f,y){if(h){const _={key:b.value,oldValue:f,newValue:y,storageArea:a};h.dispatchEvent(a instanceof Storage?new StorageEvent("storage",_):new CustomEvent(ot,{detail:_}))}}function $(f){try{const y=a.getItem(b.value);if(f==null)F(y,null),a.removeItem(b.value);else{const _=D.write(f);y!==_&&(a.setItem(b.value,_),F(y,_))}}catch(y){j(y)}}function L(f){const y=f?f.newValue:a.getItem(b.value);if(y==null)return r&&T!=null&&a.setItem(b.value,D.write(T)),T;if(!f&&i){const _=D.read(y);return typeof i=="function"?i(_,T):P==="object"&&!Array.isArray(_)?{...T,..._}:_}else return typeof y!="string"?y:D.read(y)}function cs(f){if(!(f&&f.storageArea!==a)){if(f&&f.key==null){v.value=T;return}if(!(f&&f.key!==b.value)){X();try{(f==null?void 0:f.newValue)!==D.write(v.value)&&(v.value=L(f))}catch(y){j(y)}finally{f?la(U):U()}}}}function os(f){cs(f.detail)}return v}function zl(n,s,a={}){const{window:t=Is,...e}=a;let l;const p=Ol(()=>t&&"ResizeObserver"in t),o=()=>{l&&(l.disconnect(),l=void 0)},r=ps(()=>{const h=z(n);return Array.isArray(h)?h.map(u=>_s(u)):[_s(h)]}),i=js(r,h=>{if(o(),p.value&&t){l=new ResizeObserver(s);for(const u of h)u&&l.observe(u,e)}},{immediate:!0,flush:"post"}),c=()=>{o(),i()};return ge(c),{isSupported:p,stop:c}}function ye(n,s={width:0,height:0},a={}){const{window:t=Is,box:e="content-box"}=a,l=ps(()=>{var h,u;return(u=(h=_s(n))==null?void 0:h.namespaceURI)==null?void 0:u.includes("svg")}),p=Cs(s.width),o=Cs(s.height),{stop:r}=zl(n,([h])=>{const u=e==="border-box"?h.borderBoxSize:e==="content-box"?h.contentBoxSize:h.devicePixelContentBoxSize;if(t&&l.value){const j=_s(n);if(j){const g=j.getBoundingClientRect();p.value=g.width,o.value=g.height}}else if(u){const j=Fn(u);p.value=j.reduce((g,{inlineSize:v})=>g+v,0),o.value=j.reduce((g,{blockSize:v})=>g+v,0)}else p.value=h.contentRect.width,o.value=h.contentRect.height},a);Wa(()=>{const h=_s(n);h&&(p.value="offsetWidth"in h?h.offsetWidth:s.width,o.value="offsetHeight"in h?h.offsetHeight:s.height)});const i=js(()=>_s(n),h=>{p.value=h?s.width:0,o.value=h?s.height:0});function c(){r(),i()}return{width:p,height:o,stop:c}}const rt=1;function Fl(n,s={}){const{throttle:a=0,idle:t=200,onStop:e=is,onScroll:l=is,offset:p={left:0,right:0,top:0,bottom:0},eventListenerOptions:o={capture:!1,passive:!0},behavior:r="auto",window:i=Is,onError:c=O=>{console.error(O)}}=s,h=Cs(0),u=Cs(0),j=ps({get(){return h.value},set(O){v(O,void 0)}}),g=ps({get(){return u.value},set(O){v(void 0,O)}});function v(O,es){var F,$,L,cs;if(!i)return;const os=z(n);if(!os)return;(L=os instanceof Document?i.document.body:os)==null||L.scrollTo({top:(F=z(es))!=null?F:g.value,left:($=z(O))!=null?$:j.value,behavior:z(r)});const f=((cs=os==null?void 0:os.document)==null?void 0:cs.documentElement)||(os==null?void 0:os.documentElement)||os;j!=null&&(h.value=f.scrollLeft),g!=null&&(u.value=f.scrollTop)}const b=Cs(!1),T=bn({left:!0,right:!1,top:!0,bottom:!1}),P=bn({left:!1,right:!1,top:!1,bottom:!1}),D=O=>{b.value&&(b.value=!1,P.left=!1,P.right=!1,P.top=!1,P.bottom=!1,e(O))},X=Cl(D,a+t),U=O=>{var es;if(!i)return;const F=((es=O==null?void 0:O.document)==null?void 0:es.documentElement)||(O==null?void 0:O.documentElement)||_s(O),{display:$,flexDirection:L,direction:cs}=getComputedStyle(F),os=cs==="rtl"?-1:1,f=F.scrollLeft;P.left=f<h.value,P.right=f>h.value;const y=Math.abs(f*os)<=(p.left||0),_=Math.abs(f*os)+F.clientWidth>=F.scrollWidth-(p.right||0)-rt;$==="flex"&&L==="row-reverse"?(T.left=_,T.right=y):(T.left=y,T.right=_),h.value=f;let S=F.scrollTop;O===i.document&&!S&&(S=i.document.body.scrollTop),P.top=S<u.value,P.bottom=S>u.value;const w=Math.abs(S)<=(p.top||0),N=Math.abs(S)+F.clientHeight>=F.scrollHeight-(p.bottom||0)-rt;$==="flex"&&L==="column-reverse"?(T.top=N,T.bottom=w):(T.top=w,T.bottom=N),u.value=S},Z=O=>{var es;if(!i)return;const F=(es=O.target.documentElement)!=null?es:O.target;U(F),b.value=!0,X(O),l(O)};return Hs(n,"scroll",a?Pl(Z,a,!0,!1):Z,o),Wa(()=>{try{const O=z(n);if(!O)return;U(O)}catch(O){c(O)}}),Hs(n,"scrollend",D,o),{x:j,y:g,isScrolling:b,arrivedState:T,directions:P,measure(){const O=z(n);i&&O&&U(O)}}}function it(n,s,a){if(typeof n=="function"||Sa(n))return ps(()=>ya(z(n),z(s),z(a)));const t=Ns(n);return ps({get(){return t.value=ya(t.value,z(s),z(a))},set(e){t.value=ya(e,z(s),z(a))}})}function Jl(n){const{total:s=Number.POSITIVE_INFINITY,pageSize:a=10,page:t=1,onPageChange:e=is,onPageSizeChange:l=is,onPageCountChange:p=is}=n,o=it(a,1,Number.POSITIVE_INFINITY),r=ps(()=>Math.max(1,Math.ceil(z(s)/z(o)))),i=it(t,1,r),c=ps(()=>i.value===1),h=ps(()=>i.value===r.value);Xn(t)&&lt(t,i,{direction:Sa(t)?"ltr":"both"}),Xn(a)&&lt(a,o,{direction:Sa(a)?"ltr":"both"});function u(){i.value--}function j(){i.value++}const g={currentPage:i,currentPageSize:o,pageCount:r,isFirstPage:c,isLastPage:h,prev:u,next:j};return js(i,()=>{e(bn(g))}),js(o,()=>{l(bn(g))}),js(r,()=>{p(bn(g))}),g}function be(n,s,a={}){const{window:t=Is}=a;return Hl(n,s,t==null?void 0:t.sessionStorage,a)}const Gl={class:"relative flex flex-col items-center justify-between lg:h-screen box-border border-r shadow border-gray-300 z-[3] bg-gray-100",ref:"sidebar"},Wl={class:"underline",href:"https://beian.miit.gov.cn/#/Integrated/index"},Ul=ks({__name:"Sidebar",setup(n){const s=Ns("陇ICP备2023000396号"),a=pa("sidebar"),{width:t}=ye(a),e=ps(()=>({left:t.value/2+"px"}));return Ha(),(l,p)=>(k(),q("div",Gl,[p[1]||(p[1]=d("div",{class:"p-8"},[d("h2",{class:"transform lg:-rotate-90 tracking-widest"},"七"),d("h2",{class:"transform lg:-rotate-90 tracking-widest"},"六")],-1)),d("footer",{class:"fixed flex flex-col justify-center items-center origin-left transform -rotate-90 w-48 bottom-4 text-stone-500 text-sm underline-offset-4",style:fl(G(e))},[p[0]||(p[0]=d("span",null,"@author: im6767",-1)),d("a",Wl,[d("div",null,ts(G(s)),1)])],4)],512))}}),Bl={class:"flex items-center justify-between header-menu font-normal z-3"},Yl={class:"grow-1 flex justify-around border-b-[1px] border-stone-300"},Xl=["href"],Zl=ks({__name:"HeaderMenu",setup(n){const s=[{label:"首页",path:"/"},{label:"博客",path:"/content/"}],a=je();return(t,e)=>(k(),q("div",Bl,[d("div",Yl,[(k(),q(za,null,Fa(s,l=>d("h3",{class:Ja(["cursor-pointer menu-item relative",{active:G(a).path===l.path}])},[d("a",{href:l.path,class:"inline-block py-3"},ts(l.label),9,Xl)],2)),64))])]))}}),Ql=A(Zl,[["__scopeId","data-v-e638f91e"]]),Kl=ks({name:"ListPage",__name:"ListPage",setup(n){const s=pa("scroll"),a=Ns(),t=be("scrollY",0),{y:e}=Fl(a);return js(e,l=>{t.value=l}),Ws(async()=>{await la(),t.value&&a.value&&(e.value=t.value)}),js(s,l=>{a.value=l.$el}),(l,p)=>{const o=Os("Content");return k(),me(o,{ref_key:"scroll",ref:s},null,512)}}}),sp={class:"text-stone-500 my-4"},np=["onClick"],ap=".blog-content",ve=ks({__name:"BlogDirectory",setup(n){const s=Ns([]);Ws(()=>{const t=document.querySelector(ap);if(t){const e=t.querySelectorAll("h1,h2,h3,h4");s.value=Array.from(e).filter(l=>{var p;return(p=l.textContent)==null?void 0:p.replace(/\u200B/g,"")})}});const a=t=>{t.scrollIntoView({behavior:"smooth",block:"start"})};return(t,e)=>(k(),q("ol",sp,[(k(!0),q(za,null,Fa(G(s),l=>(k(),q("li",{class:Ja([`anchor-${l.tagName}`,"cursor-pointer hover:text-stone-700 transition-all"]),onClick:()=>a(l)},ts(l.textContent),11,np))),256))]))}});/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ct={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=(n,s,a,t)=>({color:e="currentColor",size:l=24,stroke:p=2,title:o,class:r,...i},{attrs:c,slots:h})=>{let u=[...t.map(j=>nn(...j)),...h.default?[h.default()]:[]];return o&&(u=[nn("title",o),...u]),nn("svg",{...ct[n],width:l,height:l,...c,class:["tabler-icon",`tabler-icon-${s}`],...n==="filled"?{fill:e}:{"stroke-width":p??ct[n]["stroke-width"],stroke:e},...i},u)};/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var tp=oa("outline","calendar-week","CalendarWeek",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M7 14h.013",key:"svg-4"}],["path",{d:"M10.01 14h.005",key:"svg-5"}],["path",{d:"M13.01 14h.005",key:"svg-6"}],["path",{d:"M16.015 14h.005",key:"svg-7"}],["path",{d:"M13.015 17h.005",key:"svg-8"}],["path",{d:"M7.01 17h.005",key:"svg-9"}],["path",{d:"M10.01 17h.005",key:"svg-10"}]]);/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ep=oa("outline","error-404","Error404",[["path",{d:"M3 8v3a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 8v8",key:"svg-1"}],["path",{d:"M17 8v3a1 1 0 0 0 1 1h3",key:"svg-2"}],["path",{d:"M21 8v8",key:"svg-3"}],["path",{d:"M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var lp=oa("outline","link","Link",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",key:"svg-1"}],["path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pp=oa("outline","list-tree","ListTree",[["path",{d:"M9 6h11",key:"svg-0"}],["path",{d:"M12 12h8",key:"svg-1"}],["path",{d:"M15 18h5",key:"svg-2"}],["path",{d:"M5 6v.01",key:"svg-3"}],["path",{d:"M8 12v.01",key:"svg-4"}],["path",{d:"M11 18v.01",key:"svg-5"}]]);const op={class:"fixed bottom-4 right-4 flex flex-col justify-end items-end"},rp=ks({__name:"FloatDirectory",setup(n){const[s,a]=Dl(!1),t=pa("float-directory");Nl(t,()=>a(!1));const e=()=>{a(!0)};return(l,p)=>(k(),q("div",op,[d("div",{class:Ja(["pr-4 border rounded-md shadow-stone-400 border-stone-300 bg-gray-100 max-w-60 max-h-100 overflow-auto",{hidden:!G(s)}]),ref:"float-directory"},[C(ve)],2),d("div",{class:"flex items-center justify-center size-16 rounded-full shadow-lg shadow-stone-400 bg-stone-100 lg:hidden",onClick:e},[C(G(pp),{size:28})])]))}});/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */function ip(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function ht(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,we(t.key),t)}}function cp(n,s,a){return s&&ht(n.prototype,s),a&&ht(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function hp(n,s,a){return(s=we(s))in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function ut(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),a.push.apply(a,t)}return a}function Ua(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?ut(Object(a),!0).forEach(function(t){hp(n,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):ut(Object(a)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))})}return n}function up(n,s){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var t=a.call(n,s);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function we(n){var s=up(n,"string");return typeof s=="symbol"?s:s+""}function Ca(n){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ca(n)}var dt={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},dp='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',ra=typeof window<"u"&&typeof window.document<"u",Ps=ra?window:{},an=ra&&Ps.document.documentElement?"ontouchstart"in Ps.document.documentElement:!1,Ba=ra?"PointerEvent"in Ps:!1,V="viewer",Jn="move",ke="switch",gn="zoom",Rn="".concat(V,"-active"),jp="".concat(V,"-close"),Gn="".concat(V,"-fade"),Pa="".concat(V,"-fixed"),mp="".concat(V,"-fullscreen"),jt="".concat(V,"-fullscreen-exit"),$s="".concat(V,"-hide"),gp="".concat(V,"-hide-md-down"),fp="".concat(V,"-hide-sm-down"),_p="".concat(V,"-hide-xs-down"),gs="".concat(V,"-in"),vn="".concat(V,"-invisible"),tn="".concat(V,"-loading"),yp="".concat(V,"-move"),mt="".concat(V,"-open"),Ys="".concat(V,"-show"),ss="".concat(V,"-transition"),ln="click",Aa="dblclick",gt="dragstart",ft="focusin",_t="keydown",fs="load",zs="error",bp=an?"touchend touchcancel":"mouseup",vp=an?"touchmove":"mousemove",wp=an?"touchstart":"mousedown",yt=Ba?"pointerdown":wp,bt=Ba?"pointermove":vp,vt=Ba?"pointerup pointercancel":bp,wt="resize",bs="transitionend",kt="wheel",qt="ready",Tt="show",St="shown",xt="hide",Ct="hidden",Pt="view",kn="viewed",At="move",Dt="moved",Et="rotate",Nt="rotated",It="scale",Ot="scaled",Rt="zoom",Mt="zoomed",Vt="play",$t="stop",Qn="".concat(V,"Action"),Ya=/\s\s*/,Mn=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function qn(n){return typeof n=="string"}var kp=Number.isNaN||Ps.isNaN;function K(n){return typeof n=="number"&&!kp(n)}function Qs(n){return typeof n>"u"}function pn(n){return Ca(n)==="object"&&n!==null}var qp=Object.prototype.hasOwnProperty;function Ks(n){if(!pn(n))return!1;try{var s=n.constructor,a=s.prototype;return s&&a&&qp.call(a,"isPrototypeOf")}catch{return!1}}function J(n){return typeof n=="function"}function Y(n,s){if(n&&J(s))if(Array.isArray(n)||K(n.length)){var a=n.length,t;for(t=0;t<a&&s.call(n,n[t],t,n)!==!1;t+=1);}else pn(n)&&Object.keys(n).forEach(function(e){s.call(n,n[e],e,n)});return n}var ds=Object.assign||function(s){for(var a=arguments.length,t=new Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];return pn(s)&&t.length>0&&t.forEach(function(l){pn(l)&&Object.keys(l).forEach(function(p){s[p]=l[p]})}),s},Tp=/^(?:width|height|left|top|marginLeft|marginTop)$/;function ws(n,s){var a=n.style;Y(s,function(t,e){Tp.test(e)&&K(t)&&(t+="px"),a[e]=t})}function Sp(n){return qn(n)?n.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):n}function Zs(n,s){return!n||!s?!1:n.classList?n.classList.contains(s):n.className.indexOf(s)>-1}function E(n,s){if(!(!n||!s)){if(K(n.length)){Y(n,function(t){E(t,s)});return}if(n.classList){n.classList.add(s);return}var a=n.className.trim();a?a.indexOf(s)<0&&(n.className="".concat(a," ").concat(s)):n.className=s}}function H(n,s){if(!(!n||!s)){if(K(n.length)){Y(n,function(a){H(a,s)});return}if(n.classList){n.classList.remove(s);return}n.className.indexOf(s)>=0&&(n.className=n.className.replace(s,""))}}function Tn(n,s,a){if(s){if(K(n.length)){Y(n,function(t){Tn(t,s,a)});return}a?E(n,s):H(n,s)}}var xp=/([a-z\d])([A-Z])/g;function Xa(n){return n.replace(xp,"$1-$2").toLowerCase()}function sn(n,s){return pn(n[s])?n[s]:n.dataset?n.dataset[s]:n.getAttribute("data-".concat(Xa(s)))}function Da(n,s,a){pn(a)?n[s]=a:n.dataset?n.dataset[s]=a:n.setAttribute("data-".concat(Xa(s)),a)}var qe=function(){var n=!1;if(ra){var s=!1,a=function(){},t=Object.defineProperty({},"once",{get:function(){return n=!0,s},set:function(l){s=l}});Ps.addEventListener("test",a,t),Ps.removeEventListener("test",a,t)}return n}();function W(n,s,a){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},e=a;s.trim().split(Ya).forEach(function(l){if(!qe){var p=n.listeners;p&&p[l]&&p[l][a]&&(e=p[l][a],delete p[l][a],Object.keys(p[l]).length===0&&delete p[l],Object.keys(p).length===0&&delete n.listeners)}n.removeEventListener(l,e,t)})}function I(n,s,a){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},e=a;s.trim().split(Ya).forEach(function(l){if(t.once&&!qe){var p=n.listeners,o=p===void 0?{}:p;e=function(){delete o[l][a],n.removeEventListener(l,e,t);for(var i=arguments.length,c=new Array(i),h=0;h<i;h++)c[h]=arguments[h];a.apply(n,c)},o[l]||(o[l]={}),o[l][a]&&n.removeEventListener(l,o[l][a],t),o[l][a]=e,n.listeners=o}n.addEventListener(l,e,t)})}function as(n,s,a,t){var e;return J(Event)&&J(CustomEvent)?e=new CustomEvent(s,Ua({bubbles:!0,cancelable:!0,detail:a},t)):(e=document.createEvent("CustomEvent"),e.initCustomEvent(s,!0,!0,a)),n.dispatchEvent(e)}function Cp(n){var s=n.getBoundingClientRect();return{left:s.left+(window.pageXOffset-document.documentElement.clientLeft),top:s.top+(window.pageYOffset-document.documentElement.clientTop)}}function Wn(n){var s=n.rotate,a=n.scaleX,t=n.scaleY,e=n.translateX,l=n.translateY,p=[];K(e)&&e!==0&&p.push("translateX(".concat(e,"px)")),K(l)&&l!==0&&p.push("translateY(".concat(l,"px)")),K(s)&&s!==0&&p.push("rotate(".concat(s,"deg)")),K(a)&&a!==1&&p.push("scaleX(".concat(a,")")),K(t)&&t!==1&&p.push("scaleY(".concat(t,")"));var o=p.length?p.join(" "):"none";return{WebkitTransform:o,msTransform:o,transform:o}}function Pp(n){return qn(n)?decodeURIComponent(n.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var ba=Ps.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(Ps.navigator.userAgent);function Te(n,s,a){var t=document.createElement("img");if(n.naturalWidth&&!ba)return a(n.naturalWidth,n.naturalHeight),t;var e=document.body||document.documentElement;return t.onload=function(){a(t.width,t.height),ba||e.removeChild(t)},Y(s.inheritedAttributes,function(l){var p=n.getAttribute(l);p!==null&&t.setAttribute(l,p)}),t.src=n.src,ba||(t.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",e.appendChild(t)),t}function Vn(n){switch(n){case 2:return _p;case 3:return fp;case 4:return gp;default:return""}}function Ap(n){var s=Ua({},n),a=[];return Y(n,function(t,e){delete s[e],Y(s,function(l){var p=Math.abs(t.startX-l.startX),o=Math.abs(t.startY-l.startY),r=Math.abs(t.endX-l.endX),i=Math.abs(t.endY-l.endY),c=Math.sqrt(p*p+o*o),h=Math.sqrt(r*r+i*i),u=(h-c)/c;a.push(u)})}),a.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),a[0]}function $n(n,s){var a=n.pageX,t=n.pageY,e={endX:a,endY:t};return s?e:Ua({timeStamp:Date.now(),startX:a,startY:t},e)}function Dp(n){var s=0,a=0,t=0;return Y(n,function(e){var l=e.startX,p=e.startY;s+=l,a+=p,t+=1}),s/=t,a/=t,{pageX:s,pageY:a}}var Ep={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var s=this.element.ownerDocument,a=s.body||s.documentElement;this.body=a,this.scrollbarWidth=window.innerWidth-s.documentElement.clientWidth,this.initialBodyPaddingRight=a.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(a).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var s=this.options,a=this.parent,t;s.inline&&(t={width:Math.max(a.offsetWidth,s.minWidth),height:Math.max(a.offsetHeight,s.minHeight)},this.parentData=t),(this.fulled||!t)&&(t=this.containerData),this.viewerData=ds({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&ws(this.viewer,this.viewerData)},initList:function(){var s=this,a=this.element,t=this.options,e=this.list,l=[];e.innerHTML="",Y(this.images,function(p,o){var r=p.src,i=p.alt||Pp(r),c=s.getImageURL(p);if(r||c){var h=document.createElement("li"),u=document.createElement("img");Y(t.inheritedAttributes,function(j){var g=p.getAttribute(j);g!==null&&u.setAttribute(j,g)}),t.navbar&&(u.src=r||c),u.alt=i,u.setAttribute("data-original-url",c||r),h.setAttribute("data-index",o),h.setAttribute("data-viewer-action","view"),h.setAttribute("role","button"),t.keyboard&&h.setAttribute("tabindex",0),h.appendChild(u),e.appendChild(h),l.push(h)}}),this.items=l,Y(l,function(p){var o=p.firstElementChild,r,i;Da(o,"filled",!0),t.loading&&E(p,tn),I(o,fs,r=function(h){W(o,zs,i),t.loading&&H(p,tn),s.loadImage(h)},{once:!0}),I(o,zs,i=function(){W(o,fs,r),t.loading&&H(p,tn)},{once:!0})}),t.transition&&I(a,kn,function(){E(e,ss)},{once:!0})},renderList:function(){var s=this.index,a=this.items[s];if(a){var t=a.nextElementSibling,e=parseInt(window.getComputedStyle(t||a).marginLeft,10),l=a.offsetWidth,p=l+e;ws(this.list,ds({width:p*this.length-e},Wn({translateX:(this.viewerData.width-l)/2-p*s})))}},resetList:function(){var s=this.list;s.innerHTML="",H(s,ss),ws(s,Wn({translateX:0}))},initImage:function(s){var a=this,t=this.options,e=this.image,l=this.viewerData,p=this.footer.offsetHeight,o=l.width,r=Math.max(l.height-p,p),i=this.imageData||{},c;this.imageInitializing={abort:function(){c.onload=null}},c=Te(e,t,function(h,u){var j=h/u,g=Math.max(0,Math.min(1,t.initialCoverage)),v=o,b=r;a.imageInitializing=!1,r*j>o?b=o/j:v=r*j,g=K(g)?g:.9,v=Math.min(v*g,h),b=Math.min(b*g,u);var T=(o-v)/2,P=(r-b)/2,D={left:T,top:P,x:T,y:P,width:v,height:b,oldRatio:1,ratio:v/h,aspectRatio:j,naturalWidth:h,naturalHeight:u},X=ds({},D);t.rotatable&&(D.rotate=i.rotate||0,X.rotate=0),t.scalable&&(D.scaleX=i.scaleX||1,D.scaleY=i.scaleY||1,X.scaleX=1,X.scaleY=1),a.imageData=D,a.initialImageData=X,s&&s()})},renderImage:function(s){var a=this,t=this.image,e=this.imageData;if(ws(t,ds({width:e.width,height:e.height,marginLeft:e.x,marginTop:e.y},Wn(e))),s)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Zs(t,ss)){var l=function(){a.imageRendering=!1,s()};this.imageRendering={abort:function(){W(t,bs,l)}},I(t,bs,l,{once:!0})}else s()},resetImage:function(){var s=this.image;s&&(this.viewing&&this.viewing.abort(),s.parentNode.removeChild(s),this.image=null,this.title.innerHTML="")}},Np={bind:function(){var s=this.options,a=this.viewer,t=this.canvas,e=this.element.ownerDocument;I(a,ln,this.onClick=this.click.bind(this)),I(a,gt,this.onDragStart=this.dragstart.bind(this)),I(t,yt,this.onPointerDown=this.pointerdown.bind(this)),I(e,bt,this.onPointerMove=this.pointermove.bind(this)),I(e,vt,this.onPointerUp=this.pointerup.bind(this)),I(e,_t,this.onKeyDown=this.keydown.bind(this)),I(window,wt,this.onResize=this.resize.bind(this)),s.zoomable&&s.zoomOnWheel&&I(a,kt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),s.toggleOnDblclick&&I(t,Aa,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var s=this.options,a=this.viewer,t=this.canvas,e=this.element.ownerDocument;W(a,ln,this.onClick),W(a,gt,this.onDragStart),W(t,yt,this.onPointerDown),W(e,bt,this.onPointerMove),W(e,vt,this.onPointerUp),W(e,_t,this.onKeyDown),W(window,wt,this.onResize),s.zoomable&&s.zoomOnWheel&&W(a,kt,this.onWheel,{passive:!1,capture:!0}),s.toggleOnDblclick&&W(t,Aa,this.onDblclick)}},Ip={click:function(s){var a=this.options,t=this.imageData,e=s.target,l=sn(e,Qn);switch(!l&&e.localName==="img"&&e.parentElement.localName==="li"&&(e=e.parentElement,l=sn(e,Qn)),an&&s.isTrusted&&e===this.canvas&&clearTimeout(this.clickCanvasTimeout),l){case"mix":this.played?this.stop():a.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(sn(e,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(a.loop);break;case"play":this.play(a.fullscreen);break;case"next":this.next(a.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-t.scaleX||-1);break;case"flip-vertical":this.scaleY(-t.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(s){s.preventDefault(),this.viewed&&s.target===this.image&&(an&&s.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(s.isTrusted?s:s.detail&&s.detail.originalEvent))},load:function(){var s=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var a=this.element,t=this.options,e=this.image,l=this.index,p=this.viewerData;H(e,vn),t.loading&&H(this.canvas,tn),e.style.cssText="height:0;"+"margin-left:".concat(p.width/2,"px;")+"margin-top:".concat(p.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){Tn(e,yp,t.movable),Tn(e,ss,t.transition),s.renderImage(function(){s.viewed=!0,s.viewing=!1,J(t.viewed)&&I(a,kn,t.viewed,{once:!0}),as(a,kn,{originalImage:s.images[l],index:l,image:e},{cancelable:!1})})})},loadImage:function(s){var a=s.target,t=a.parentNode,e=t.offsetWidth||30,l=t.offsetHeight||50,p=!!sn(a,"filled");Te(a,this.options,function(o,r){var i=o/r,c=e,h=l;l*i>e?p?c=l*i:h=e/i:p?h=e/i:c=l*i,ws(a,ds({width:c,height:h},Wn({translateX:(e-c)/2,translateY:(l-h)/2})))})},keydown:function(s){var a=this.options;if(a.keyboard){var t=s.keyCode||s.which||s.charCode;switch(t){case 13:this.viewer.contains(s.target)&&this.click(s);break}if(this.fulled)switch(t){case 27:this.played?this.stop():a.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(a.loop);break;case 38:s.preventDefault(),this.zoom(a.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(a.loop);break;case 40:s.preventDefault(),this.zoom(-a.zoomRatio,!0);break;case 48:case 49:s.ctrlKey&&(s.preventDefault(),this.toggle());break}}},dragstart:function(s){s.target.localName==="img"&&s.preventDefault()},pointerdown:function(s){var a=this.options,t=this.pointers,e=s.buttons,l=s.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(s.type==="mousedown"||s.type==="pointerdown"&&s.pointerType==="mouse")&&(K(e)&&e!==1||K(l)&&l!==0||s.ctrlKey))){s.preventDefault(),s.changedTouches?Y(s.changedTouches,function(o){t[o.identifier]=$n(o)}):t[s.pointerId||0]=$n(s);var p=a.movable?Jn:!1;a.zoomOnTouch&&a.zoomable&&Object.keys(t).length>1?p=gn:a.slideOnTouch&&(s.pointerType==="touch"||s.type==="touchstart")&&this.isSwitchable()&&(p=ke),a.transition&&(p===Jn||p===gn)&&H(this.image,ss),this.action=p}},pointermove:function(s){var a=this.pointers,t=this.action;!this.viewed||!t||(s.preventDefault(),s.changedTouches?Y(s.changedTouches,function(e){ds(a[e.identifier]||{},$n(e,!0))}):ds(a[s.pointerId||0]||{},$n(s,!0)),this.change(s))},pointerup:function(s){var a=this,t=this.options,e=this.action,l=this.pointers,p;s.changedTouches?Y(s.changedTouches,function(o){p=l[o.identifier],delete l[o.identifier]}):(p=l[s.pointerId||0],delete l[s.pointerId||0]),e&&(s.preventDefault(),t.transition&&(e===Jn||e===gn)&&E(this.image,ss),this.action=!1,an&&e!==gn&&p&&Date.now()-p.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),t.toggleOnDblclick&&this.viewed&&s.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){as(a.image,Aa,{originalEvent:s})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){a.imageClicked=!1},500)):(this.imageClicked=!1,t.backdrop&&t.backdrop!=="static"&&s.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){as(a.canvas,ln,{originalEvent:s})},50)))))},resize:function(){var s=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){s.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}Y(this.player.getElementsByTagName("img"),function(a){I(a,fs,s.loadImage.bind(s),{once:!0}),as(a,fs)})}},wheel:function(s){var a=this;if(this.viewed&&(s.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){a.wheeling=!1},50);var t=Number(this.options.zoomRatio)||.1,e=1;s.deltaY?e=s.deltaY>0?1:-1:s.wheelDelta?e=-s.wheelDelta/120:s.detail&&(e=s.detail>0?1:-1),this.zoom(-e*t,!0,null,s)}}},Op={show:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=this.element,t=this.options;if(t.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(s),this;if(J(t.show)&&I(a,Tt,t.show,{once:!0}),as(a,Tt)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var e=this.viewer;if(H(e,$s),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",!0),e.removeAttribute("aria-hidden"),t.transition&&!s){var l=this.shown.bind(this);this.transitioning={abort:function(){W(e,bs,l),H(e,gs)}},E(e,ss),e.initialOffsetWidth=e.offsetWidth,I(e,bs,l,{once:!0}),E(e,gs)}else E(e,gs),this.shown();return this},hide:function(){var s=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=this.element,e=this.options;if(e.inline||this.hiding||!(this.isShown||this.showing))return this;if(J(e.hide)&&I(t,xt,e.hide,{once:!0}),as(t,xt)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var l=this.viewer,p=this.image,o=function(){H(l,gs),s.hidden()};if(e.transition&&!a){var r=function(h){h&&h.target===l&&(W(l,bs,r),s.hidden())},i=function(){Zs(l,ss)?(I(l,bs,r),H(l,gs)):o()};this.transitioning={abort:function(){s.viewed&&Zs(p,ss)?W(p,bs,i):Zs(l,ss)&&W(l,bs,r)}},this.viewed&&Zs(p,ss)?(I(p,bs,i,{once:!0}),this.zoomTo(0,!1,null,null,!0)):i()}else o();return this},view:function(){var s=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(a=Number(a)||0,this.hiding||this.played||a<0||a>=this.length||this.viewed&&a===this.index)return this;if(!this.isShown)return this.index=a,this.show();this.viewing&&this.viewing.abort();var t=this.element,e=this.options,l=this.title,p=this.canvas,o=this.items[a],r=o.querySelector("img"),i=sn(r,"originalUrl"),c=r.getAttribute("alt"),h=document.createElement("img");if(Y(e.inheritedAttributes,function(b){var T=r.getAttribute(b);T!==null&&h.setAttribute(b,T)}),h.src=i,h.alt=c,J(e.view)&&I(t,Pt,e.view,{once:!0}),as(t,Pt,{originalImage:this.images[a],index:a,image:h})===!1||!this.isShown||this.hiding||this.played)return this;var u=this.items[this.index];u&&(H(u,Rn),u.removeAttribute("aria-selected")),E(o,Rn),o.setAttribute("aria-selected",!0),e.focus&&o.focus(),this.image=h,this.viewed=!1,this.index=a,this.imageData={},E(h,vn),e.loading&&E(p,tn),p.innerHTML="",p.appendChild(h),this.renderList(),l.innerHTML="";var j=function(){var T=s.imageData,P=Array.isArray(e.title)?e.title[1]:e.title;l.innerHTML=Sp(J(P)?P.call(s,h,T):"".concat(c," (").concat(T.naturalWidth," × ").concat(T.naturalHeight,")"))},g,v;return I(t,kn,j,{once:!0}),this.viewing={abort:function(){W(t,kn,j),h.complete?s.imageRendering?s.imageRendering.abort():s.imageInitializing&&s.imageInitializing.abort():(h.src="",W(h,fs,g),s.timeout&&clearTimeout(s.timeout))}},h.complete?this.load():(I(h,fs,g=function(){W(h,zs,v),s.load()},{once:!0}),I(h,zs,v=function(){W(h,fs,g),s.timeout&&(clearTimeout(s.timeout),s.timeout=!1),H(h,vn),e.loading&&H(s.canvas,tn)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){H(h,vn),s.timeout=!1},1e3)),this},prev:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=this.index-1;return a<0&&(a=s?this.length-1:0),this.view(a),this},next:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=this.length-1,t=this.index+1;return t>a&&(t=s?0:a),this.view(t),this},move:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,t=this.imageData;return this.moveTo(Qs(s)?s:t.x+Number(s),Qs(a)?a:t.y+Number(a)),this},moveTo:function(s){var a=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=this.element,p=this.options,o=this.imageData;if(s=Number(s),t=Number(t),this.viewed&&!this.played&&p.movable){var r=o.x,i=o.y,c=!1;if(K(s)?c=!0:s=r,K(t)?c=!0:t=i,c){if(J(p.move)&&I(l,At,p.move,{once:!0}),as(l,At,{x:s,y:t,oldX:r,oldY:i,originalEvent:e})===!1)return this;o.x=s,o.y=t,o.left=s,o.top=t,this.moving=!0,this.renderImage(function(){a.moving=!1,J(p.moved)&&I(l,Dt,p.moved,{once:!0}),as(l,Dt,{x:s,y:t,oldX:r,oldY:i,originalEvent:e},{cancelable:!1})})}}return this},rotate:function(s){return this.rotateTo((this.imageData.rotate||0)+Number(s)),this},rotateTo:function(s){var a=this,t=this.element,e=this.options,l=this.imageData;if(s=Number(s),K(s)&&this.viewed&&!this.played&&e.rotatable){var p=l.rotate;if(J(e.rotate)&&I(t,Et,e.rotate,{once:!0}),as(t,Et,{degree:s,oldDegree:p})===!1)return this;l.rotate=s,this.rotating=!0,this.renderImage(function(){a.rotating=!1,J(e.rotated)&&I(t,Nt,e.rotated,{once:!0}),as(t,Nt,{degree:s,oldDegree:p},{cancelable:!1})})}return this},scaleX:function(s){return this.scale(s,this.imageData.scaleY),this},scaleY:function(s){return this.scale(this.imageData.scaleX,s),this},scale:function(s){var a=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,e=this.element,l=this.options,p=this.imageData;if(s=Number(s),t=Number(t),this.viewed&&!this.played&&l.scalable){var o=p.scaleX,r=p.scaleY,i=!1;if(K(s)?i=!0:s=o,K(t)?i=!0:t=r,i){if(J(l.scale)&&I(e,It,l.scale,{once:!0}),as(e,It,{scaleX:s,scaleY:t,oldScaleX:o,oldScaleY:r})===!1)return this;p.scaleX=s,p.scaleY=t,this.scaling=!0,this.renderImage(function(){a.scaling=!1,J(l.scaled)&&I(e,Ot,l.scaled,{once:!0}),as(e,Ot,{scaleX:s,scaleY:t,oldScaleX:o,oldScaleY:r},{cancelable:!1})})}}return this},zoom:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,l=this.imageData;return s=Number(s),s<0?s=1/(1-s):s=1+s,this.zoomTo(l.width*s/l.naturalWidth,a,t,e),this},zoomTo:function(s){var a=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,o=this.element,r=this.options,i=this.pointers,c=this.imageData,h=c.x,u=c.y,j=c.width,g=c.height,v=c.naturalWidth,b=c.naturalHeight;if(s=Math.max(0,s),K(s)&&this.viewed&&!this.played&&(p||r.zoomable)){if(!p){var T=Math.max(.01,r.minZoomRatio),P=Math.min(100,r.maxZoomRatio);s=Math.min(Math.max(s,T),P)}if(l)switch(l.type){case"wheel":r.zoomRatio>=.055&&s>.95&&s<1.05&&(s=1);break;case"pointermove":case"touchmove":case"mousemove":s>.99&&s<1.01&&(s=1);break}var D=v*s,X=b*s,U=D-j,Z=X-g,O=c.ratio;if(J(r.zoom)&&I(o,Rt,r.zoom,{once:!0}),as(o,Rt,{ratio:s,oldRatio:O,originalEvent:l})===!1)return this;if(this.zooming=!0,l){var es=Cp(this.viewer),F=i&&Object.keys(i).length>0?Dp(i):{pageX:l.pageX,pageY:l.pageY};c.x-=U*((F.pageX-es.left-h)/j),c.y-=Z*((F.pageY-es.top-u)/g)}else Ks(e)&&K(e.x)&&K(e.y)?(c.x-=U*((e.x-h)/j),c.y-=Z*((e.y-u)/g)):(c.x-=U/2,c.y-=Z/2);c.left=c.x,c.top=c.y,c.width=D,c.height=X,c.oldRatio=O,c.ratio=s,this.renderImage(function(){a.zooming=!1,J(r.zoomed)&&I(o,Mt,r.zoomed,{once:!0}),as(o,Mt,{ratio:s,oldRatio:O,originalEvent:l},{cancelable:!1})}),t&&this.tooltip()}return this},play:function(){var s=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var t=this.element,e=this.options;if(J(e.play)&&I(t,Vt,e.play,{once:!0}),as(t,Vt)===!1)return this;var l=this.player,p=this.loadImage.bind(this),o=[],r=0,i=0;if(this.played=!0,this.onLoadWhenPlay=p,a&&this.requestFullscreen(a),E(l,Ys),Y(this.items,function(u,j){var g=u.querySelector("img"),v=document.createElement("img");v.src=sn(g,"originalUrl"),v.alt=g.getAttribute("alt"),v.referrerPolicy=g.referrerPolicy,r+=1,E(v,Gn),Tn(v,ss,e.transition),Zs(u,Rn)&&(E(v,gs),i=j),o.push(v),I(v,fs,p,{once:!0}),l.appendChild(v)}),K(e.interval)&&e.interval>0){var c=function(){clearTimeout(s.playing.timeout),H(o[i],gs),i-=1,i=i>=0?i:r-1,E(o[i],gs),s.playing.timeout=setTimeout(c,e.interval)},h=function(){clearTimeout(s.playing.timeout),H(o[i],gs),i+=1,i=i<r?i:0,E(o[i],gs),s.playing.timeout=setTimeout(h,e.interval)};r>1&&(this.playing={prev:c,next:h,timeout:setTimeout(h,e.interval)})}return this},stop:function(){var s=this;if(!this.played)return this;var a=this.element,t=this.options;if(J(t.stop)&&I(a,$t,t.stop,{once:!0}),as(a,$t)===!1)return this;var e=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,Y(e.getElementsByTagName("img"),function(l){W(l,fs,s.onLoadWhenPlay)}),H(e,Ys),e.innerHTML="",this.exitFullscreen(),this},full:function(){var s=this,a=this.options,t=this.viewer,e=this.image,l=this.list;return!this.isShown||this.played||this.fulled||!a.inline?this:(this.fulled=!0,this.open(),E(this.button,jt),a.transition&&(H(l,ss),this.viewed&&H(e,ss)),E(t,Pa),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",!0),t.removeAttribute("style"),ws(t,{zIndex:a.zIndex}),a.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=ds({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){s.renderImage(function(){a.transition&&setTimeout(function(){E(e,ss),E(l,ss)},0)})}),this)},exit:function(){var s=this,a=this.options,t=this.viewer,e=this.image,l=this.list;return!this.isShown||this.played||!this.fulled||!a.inline?this:(this.fulled=!1,this.close(),H(this.button,jt),a.transition&&(H(l,ss),this.viewed&&H(e,ss)),a.focus&&this.clearEnforceFocus(),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),H(t,Pa),ws(t,{zIndex:a.zIndexInline}),this.viewerData=ds({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){s.renderImage(function(){a.transition&&setTimeout(function(){E(e,ss),E(l,ss)},0)})}),this)},tooltip:function(){var s=this,a=this.options,t=this.tooltipBox,e=this.imageData;return!this.viewed||this.played||!a.tooltip?this:(t.textContent="".concat(Math.round(e.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):a.transition?(this.fading&&as(t,bs),E(t,Ys),E(t,Gn),E(t,ss),t.removeAttribute("aria-hidden"),t.initialOffsetWidth=t.offsetWidth,E(t,gs)):(E(t,Ys),t.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){a.transition?(I(t,bs,function(){H(t,Ys),H(t,Gn),H(t,ss),t.setAttribute("aria-hidden",!0),s.fading=!1},{once:!0}),H(t,gs),s.fading=!0):(H(t,Ys),t.setAttribute("aria-hidden",!0)),s.tooltipping=!1},1e3),this)},toggle:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,s):this.zoomTo(1,!0,null,s),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=ds({},this.initialImageData),this.renderImage()),this},update:function(){var s=this,a=this.element,t=this.options,e=this.isImg;if(e&&!a.parentNode)return this.destroy();var l=[];if(Y(e?[a]:a.querySelectorAll("img"),function(i){J(t.filter)?t.filter.call(s,i)&&l.push(i):s.getImageURL(i)&&l.push(i)}),!l.length)return this;if(this.images=l,this.length=l.length,this.ready){var p=[];if(Y(this.items,function(i,c){var h=i.querySelector("img"),u=l[c];u&&h?(u.src!==h.src||u.alt!==h.alt)&&p.push(c):p.push(c)}),ws(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var o=p.indexOf(this.index);if(o>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-o,this.length-1),0));else{var r=this.items[this.index];E(r,Rn),r.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var s=this.element,a=this.options;return s[V]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),a.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):a.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),a.inline||W(s,ln,this.onStart),s[V]=void 0,this):this}},Rp={getImageURL:function(s){var a=this.options.url;return qn(a)?a=s.getAttribute(a):J(a)?a=a.call(this,s):a="",a},enforceFocus:function(){var s=this;this.clearEnforceFocus(),I(document,ft,this.onFocusin=function(a){var t=s.viewer,e=a.target;if(!(e===document||e===t||t.contains(e))){for(;e;){if(e.getAttribute("tabindex")!==null||e.getAttribute("aria-modal")==="true")return;e=e.parentElement}t.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(W(document,ft,this.onFocusin),this.onFocusin=null)},open:function(){var s=this.body;E(s,mt),this.scrollbarWidth>0&&(s.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var s=this.body;H(s,mt),this.scrollbarWidth>0&&(s.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var s=this.element,a=this.options,t=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,a.focus&&(t.focus(),this.enforceFocus()),J(a.shown)&&I(s,St,a.shown,{once:!0}),as(s,St)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var s=this.element,a=this.options,t=this.viewer;a.fucus&&this.clearEnforceFocus(),this.close(),this.unbind(),E(t,$s),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),t.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(J(a.hidden)&&I(s,Ct,a.hidden,{once:!0}),as(s,Ct,null,{cancelable:!1}))},requestFullscreen:function(s){var a=this.element.ownerDocument;if(this.fulled&&!(a.fullscreenElement||a.webkitFullscreenElement||a.mozFullScreenElement||a.msFullscreenElement)){var t=a.documentElement;t.requestFullscreen?Ks(s)?t.requestFullscreen(s):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}},exitFullscreen:function(){var s=this.element.ownerDocument;this.fulled&&(s.fullscreenElement||s.webkitFullscreenElement||s.mozFullScreenElement||s.msFullscreenElement)&&(s.exitFullscreen?s.exitFullscreen():s.webkitExitFullscreen?s.webkitExitFullscreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.msExitFullscreen&&s.msExitFullscreen())},change:function(s){var a=this.options,t=this.pointers,e=t[Object.keys(t)[0]];if(e){var l=e.endX-e.startX,p=e.endY-e.startY;switch(this.action){case Jn:(l!==0||p!==0)&&(this.pointerMoved=!0,this.move(l,p,s));break;case gn:this.zoom(Ap(t),!1,null,s);break;case ke:{this.action="switched";var o=Math.abs(l);o>1&&o>Math.abs(p)&&(this.pointers={},l>1?this.prev(a.loop):l<-1&&this.next(a.loop));break}}Y(t,function(r){r.startX=r.endX,r.startY=r.endY})}},isSwitchable:function(){var s=this.imageData,a=this.viewerData;return this.length>1&&s.x>=0&&s.y>=0&&s.width<=a.width&&s.height<=a.height}},Mp=Ps.Viewer,Vp=function(n){return function(){return n+=1,n}}(-1),Se=function(){function n(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(ip(this,n),!s||s.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=s,this.options=ds({},dt,Ks(a)&&a),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=Vp(),this.init()}return cp(n,[{key:"init",value:function(){var a=this,t=this.element,e=this.options;if(!t[V]){t[V]=this,e.focus&&!e.keyboard&&(e.focus=!1);var l=t.localName==="img",p=[];if(Y(l?[t]:t.querySelectorAll("img"),function(i){J(e.filter)?e.filter.call(a,i)&&p.push(i):a.getImageURL(i)&&p.push(i)}),this.isImg=l,this.length=p.length,this.images=p,this.initBody(),Qs(document.createElement(V).style.transition)&&(e.transition=!1),e.inline){var o=0,r=function(){if(o+=1,o===a.length){var c;a.initializing=!1,a.delaying={abort:function(){clearTimeout(c)}},c=setTimeout(function(){a.delaying=!1,a.build()},0)}};this.initializing={abort:function(){Y(p,function(c){c.complete||(W(c,fs,r),W(c,zs,r))})}},Y(p,function(i){if(i.complete)r();else{var c,h;I(i,fs,c=function(){W(i,zs,h),r()},{once:!0}),I(i,zs,h=function(){W(i,fs,c),r()},{once:!0})}})}else I(t,ln,this.onStart=function(i){var c=i.target;c.localName==="img"&&(!J(e.filter)||e.filter.call(a,c))&&a.view(a.images.indexOf(c))})}}},{key:"build",value:function(){if(!this.ready){var a=this.element,t=this.options,e=a.parentNode,l=document.createElement("div");l.innerHTML=dp;var p=l.querySelector(".".concat(V,"-container")),o=p.querySelector(".".concat(V,"-title")),r=p.querySelector(".".concat(V,"-toolbar")),i=p.querySelector(".".concat(V,"-navbar")),c=p.querySelector(".".concat(V,"-button")),h=p.querySelector(".".concat(V,"-canvas"));if(this.parent=e,this.viewer=p,this.title=o,this.toolbar=r,this.navbar=i,this.button=c,this.canvas=h,this.footer=p.querySelector(".".concat(V,"-footer")),this.tooltipBox=p.querySelector(".".concat(V,"-tooltip")),this.player=p.querySelector(".".concat(V,"-player")),this.list=p.querySelector(".".concat(V,"-list")),p.id="".concat(V).concat(this.id),o.id="".concat(V,"Title").concat(this.id),E(o,t.title?Vn(Array.isArray(t.title)?t.title[0]:t.title):$s),E(i,t.navbar?Vn(t.navbar):$s),Tn(c,$s,!t.button),t.keyboard&&c.setAttribute("tabindex",0),t.backdrop&&(E(p,"".concat(V,"-backdrop")),!t.inline&&t.backdrop!=="static"&&Da(h,Qn,"hide")),qn(t.className)&&t.className&&t.className.split(Ya).forEach(function(D){E(p,D)}),t.toolbar){var u=document.createElement("ul"),j=Ks(t.toolbar),g=Mn.slice(0,3),v=Mn.slice(7,9),b=Mn.slice(9);j||E(r,Vn(t.toolbar)),Y(j?t.toolbar:Mn,function(D,X){var U=j&&Ks(D),Z=j?Xa(X):D,O=U&&!Qs(D.show)?D.show:D;if(!(!O||!t.zoomable&&g.indexOf(Z)!==-1||!t.rotatable&&v.indexOf(Z)!==-1||!t.scalable&&b.indexOf(Z)!==-1)){var es=U&&!Qs(D.size)?D.size:D,F=U&&!Qs(D.click)?D.click:D,$=document.createElement("li");t.keyboard&&$.setAttribute("tabindex",0),$.setAttribute("role","button"),E($,"".concat(V,"-").concat(Z)),J(F)||Da($,Qn,Z),K(O)&&E($,Vn(O)),["small","large"].indexOf(es)!==-1?E($,"".concat(V,"-").concat(es)):Z==="play"&&E($,"".concat(V,"-large")),J(F)&&I($,ln,F),u.appendChild($)}}),r.appendChild(u)}else E(r,$s);if(!t.rotatable){var T=r.querySelectorAll('li[class*="rotate"]');E(T,vn),Y(T,function(D){r.appendChild(D)})}if(t.inline)E(c,mp),ws(p,{zIndex:t.zIndexInline}),window.getComputedStyle(e).position==="static"&&ws(e,{position:"relative"}),e.insertBefore(p,a.nextSibling);else{E(c,jp),E(p,Pa),E(p,Gn),E(p,$s),ws(p,{zIndex:t.zIndex});var P=t.container;qn(P)&&(P=a.ownerDocument.querySelector(P)),P||(P=this.body),P.appendChild(p)}if(t.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,J(t.ready)&&I(a,qt,t.ready,{once:!0}),as(a,qt)===!1){this.ready=!1;return}this.ready&&t.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=Mp,n}},{key:"setDefaults",value:function(a){ds(dt,Ks(a)&&a)}}])}();ds(Se.prototype,Ep,Np,Ip,Op,Rp);const $p={class:"flex"},Lp={class:"shrink-0 grow w-3/4"},Hp={class:"flex items-center gap-1 mx-6 my-6"},zp={class:"w-fit underline underline-offset-8"},Fp={class:"border-l border-gray-300 w-1/4 sticky top-0 box-border hidden lg:block"},Jp=ks({name:"BlogPage",__name:"BlogPage",setup(n){const{frontmatter:s}=Ha();return Ws(async()=>{await la();const a=document.querySelector(".blog-content");a&&new Se(a,{toolbar:!0,title:!1,movable:!0,zoomable:!0})}),(a,t)=>{const e=Os("Content");return k(),q("div",$p,[d("div",Lp,[d("div",Hp,[d("h2",zp,ts(G(s).title),1)]),C(e,{class:"blog-content"})]),d("div",Fp,[C(ve)]),C(rp,{class:"lg:hidden"})])}}}),Gp={class:"h-full w-full"},Wp={class:"h-full flex flex-col items-center justify-center gap-4"},Up=ks({__name:"NotFound",setup(n){return(s,a)=>(k(),q("div",Gp,[d("div",Wp,[C(G(ep),{class:"size-40 lg:size-60"}),a[0]||(a[0]=d("div",{class:"font-bold text-lg"},"你来到了一个不存在的地方",-1)),a[1]||(a[1]=d("a",{href:"/",class:"px-4 py-2 border border-zinc-400 rounded-md cursor-pointer transition-colors hover:bg-teal-400 swing-button"},"回到首页",-1))])]))}}),Bp=A(Up,[["__scopeId","data-v-6c30cc3c"]]),Yp={class:"w-screen h-screen flex"},Xp={key:0,class:"hidden lg:block"},Zp={class:"flex flex-col grow overflow-hidden"},Qp={key:0,class:"h-full w-full wwwwwww"},Kp=ks({__name:"Layout",setup(n){const s=je(),a=ps(()=>s.path.startsWith("/content/blog/")?Jp:Kl),{page:t}=Ha();return(e,l)=>(k(),q("div",Yp,[e.$slots.sidebar?(k(),q("div",Xp,[_a(e.$slots,"sidebar")])):Zn("",!0),d("div",Zp,[G(t).isNotFound?Zn("",!0):_a(e.$slots,"header",{key:0}),_a(e.$slots,"main",{},()=>[G(t).isNotFound?(k(),q("div",Qp,[C(Bp)])):(k(),me(_l(G(a)),{key:1,class:"grow overflow-auto",id:"main"}))])])]))}});function so(n,s,a){n=+n,s=+s,a=(e=arguments.length)<2?(s=n,n=0,1):e<3?1:+a;for(var t=-1,e=Math.max(0,Math.ceil((s-n)/a))|0,l=new Array(e);++t<e;)l[t]=n+t*a;return l}var no={value:()=>{}};function xe(){for(var n=0,s=arguments.length,a={},t;n<s;++n){if(!(t=arguments[n]+"")||t in a||/[\s.]/.test(t))throw new Error("illegal type: "+t);a[t]=[]}return new Un(a)}function Un(n){this._=n}function ao(n,s){return n.trim().split(/^|\s+/).map(function(a){var t="",e=a.indexOf(".");if(e>=0&&(t=a.slice(e+1),a=a.slice(0,e)),a&&!s.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:t}})}Un.prototype=xe.prototype={constructor:Un,on:function(n,s){var a=this._,t=ao(n+"",a),e,l=-1,p=t.length;if(arguments.length<2){for(;++l<p;)if((e=(n=t[l]).type)&&(e=to(a[e],n.name)))return e;return}if(s!=null&&typeof s!="function")throw new Error("invalid callback: "+s);for(;++l<p;)if(e=(n=t[l]).type)a[e]=Lt(a[e],n.name,s);else if(s==null)for(e in a)a[e]=Lt(a[e],n.name,null);return this},copy:function(){var n={},s=this._;for(var a in s)n[a]=s[a].slice();return new Un(n)},call:function(n,s){if((e=arguments.length-2)>0)for(var a=new Array(e),t=0,e,l;t<e;++t)a[t]=arguments[t+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(l=this._[n],t=0,e=l.length;t<e;++t)l[t].value.apply(s,a)},apply:function(n,s,a){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],e=0,l=t.length;e<l;++e)t[e].value.apply(s,a)}};function to(n,s){for(var a=0,t=n.length,e;a<t;++a)if((e=n[a]).name===s)return e.value}function Lt(n,s,a){for(var t=0,e=n.length;t<e;++t)if(n[t].name===s){n[t]=no,n=n.slice(0,t).concat(n.slice(t+1));break}return a!=null&&n.push({name:s,value:a}),n}var Ea="http://www.w3.org/1999/xhtml";const Ht={svg:"http://www.w3.org/2000/svg",xhtml:Ea,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ia(n){var s=n+="",a=s.indexOf(":");return a>=0&&(s=n.slice(0,a))!=="xmlns"&&(n=n.slice(a+1)),Ht.hasOwnProperty(s)?{space:Ht[s],local:n}:n}function eo(n){return function(){var s=this.ownerDocument,a=this.namespaceURI;return a===Ea&&s.documentElement.namespaceURI===Ea?s.createElement(n):s.createElementNS(a,n)}}function lo(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Ce(n){var s=ia(n);return(s.local?lo:eo)(s)}function po(){}function Za(n){return n==null?po:function(){return this.querySelector(n)}}function oo(n){typeof n!="function"&&(n=Za(n));for(var s=this._groups,a=s.length,t=new Array(a),e=0;e<a;++e)for(var l=s[e],p=l.length,o=t[e]=new Array(p),r,i,c=0;c<p;++c)(r=l[c])&&(i=n.call(r,r.__data__,c,l))&&("__data__"in r&&(i.__data__=r.__data__),o[c]=i);return new ys(t,this._parents)}function ro(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function io(){return[]}function Pe(n){return n==null?io:function(){return this.querySelectorAll(n)}}function co(n){return function(){return ro(n.apply(this,arguments))}}function ho(n){typeof n=="function"?n=co(n):n=Pe(n);for(var s=this._groups,a=s.length,t=[],e=[],l=0;l<a;++l)for(var p=s[l],o=p.length,r,i=0;i<o;++i)(r=p[i])&&(t.push(n.call(r,r.__data__,i,p)),e.push(r));return new ys(t,e)}function Ae(n){return function(){return this.matches(n)}}function De(n){return function(s){return s.matches(n)}}var uo=Array.prototype.find;function jo(n){return function(){return uo.call(this.children,n)}}function mo(){return this.firstElementChild}function go(n){return this.select(n==null?mo:jo(typeof n=="function"?n:De(n)))}var fo=Array.prototype.filter;function _o(){return Array.from(this.children)}function yo(n){return function(){return fo.call(this.children,n)}}function bo(n){return this.selectAll(n==null?_o:yo(typeof n=="function"?n:De(n)))}function vo(n){typeof n!="function"&&(n=Ae(n));for(var s=this._groups,a=s.length,t=new Array(a),e=0;e<a;++e)for(var l=s[e],p=l.length,o=t[e]=[],r,i=0;i<p;++i)(r=l[i])&&n.call(r,r.__data__,i,l)&&o.push(r);return new ys(t,this._parents)}function Ee(n){return new Array(n.length)}function wo(){return new ys(this._enter||this._groups.map(Ee),this._parents)}function Kn(n,s){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=s}Kn.prototype={constructor:Kn,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,s){return this._parent.insertBefore(n,s)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function ko(n){return function(){return n}}function qo(n,s,a,t,e,l){for(var p=0,o,r=s.length,i=l.length;p<i;++p)(o=s[p])?(o.__data__=l[p],t[p]=o):a[p]=new Kn(n,l[p]);for(;p<r;++p)(o=s[p])&&(e[p]=o)}function To(n,s,a,t,e,l,p){var o,r,i=new Map,c=s.length,h=l.length,u=new Array(c),j;for(o=0;o<c;++o)(r=s[o])&&(u[o]=j=p.call(r,r.__data__,o,s)+"",i.has(j)?e[o]=r:i.set(j,r));for(o=0;o<h;++o)j=p.call(n,l[o],o,l)+"",(r=i.get(j))?(t[o]=r,r.__data__=l[o],i.delete(j)):a[o]=new Kn(n,l[o]);for(o=0;o<c;++o)(r=s[o])&&i.get(u[o])===r&&(e[o]=r)}function So(n){return n.__data__}function xo(n,s){if(!arguments.length)return Array.from(this,So);var a=s?To:qo,t=this._parents,e=this._groups;typeof n!="function"&&(n=ko(n));for(var l=e.length,p=new Array(l),o=new Array(l),r=new Array(l),i=0;i<l;++i){var c=t[i],h=e[i],u=h.length,j=Co(n.call(c,c&&c.__data__,i,t)),g=j.length,v=o[i]=new Array(g),b=p[i]=new Array(g),T=r[i]=new Array(u);a(c,h,v,b,T,j,s);for(var P=0,D=0,X,U;P<g;++P)if(X=v[P]){for(P>=D&&(D=P+1);!(U=b[D])&&++D<g;);X._next=U||null}}return p=new ys(p,t),p._enter=o,p._exit=r,p}function Co(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Po(){return new ys(this._exit||this._groups.map(Ee),this._parents)}function Ao(n,s,a){var t=this.enter(),e=this,l=this.exit();return typeof n=="function"?(t=n(t),t&&(t=t.selection())):t=t.append(n+""),s!=null&&(e=s(e),e&&(e=e.selection())),a==null?l.remove():a(l),t&&e?t.merge(e).order():e}function Do(n){for(var s=n.selection?n.selection():n,a=this._groups,t=s._groups,e=a.length,l=t.length,p=Math.min(e,l),o=new Array(e),r=0;r<p;++r)for(var i=a[r],c=t[r],h=i.length,u=o[r]=new Array(h),j,g=0;g<h;++g)(j=i[g]||c[g])&&(u[g]=j);for(;r<e;++r)o[r]=a[r];return new ys(o,this._parents)}function Eo(){for(var n=this._groups,s=-1,a=n.length;++s<a;)for(var t=n[s],e=t.length-1,l=t[e],p;--e>=0;)(p=t[e])&&(l&&p.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(p,l),l=p);return this}function No(n){n||(n=Io);function s(h,u){return h&&u?n(h.__data__,u.__data__):!h-!u}for(var a=this._groups,t=a.length,e=new Array(t),l=0;l<t;++l){for(var p=a[l],o=p.length,r=e[l]=new Array(o),i,c=0;c<o;++c)(i=p[c])&&(r[c]=i);r.sort(s)}return new ys(e,this._parents).order()}function Io(n,s){return n<s?-1:n>s?1:n>=s?0:NaN}function Oo(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Ro(){return Array.from(this)}function Mo(){for(var n=this._groups,s=0,a=n.length;s<a;++s)for(var t=n[s],e=0,l=t.length;e<l;++e){var p=t[e];if(p)return p}return null}function Vo(){let n=0;for(const s of this)++n;return n}function $o(){return!this.node()}function Lo(n){for(var s=this._groups,a=0,t=s.length;a<t;++a)for(var e=s[a],l=0,p=e.length,o;l<p;++l)(o=e[l])&&n.call(o,o.__data__,l,e);return this}function Ho(n){return function(){this.removeAttribute(n)}}function zo(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Fo(n,s){return function(){this.setAttribute(n,s)}}function Jo(n,s){return function(){this.setAttributeNS(n.space,n.local,s)}}function Go(n,s){return function(){var a=s.apply(this,arguments);a==null?this.removeAttribute(n):this.setAttribute(n,a)}}function Wo(n,s){return function(){var a=s.apply(this,arguments);a==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,a)}}function Uo(n,s){var a=ia(n);if(arguments.length<2){var t=this.node();return a.local?t.getAttributeNS(a.space,a.local):t.getAttribute(a)}return this.each((s==null?a.local?zo:Ho:typeof s=="function"?a.local?Wo:Go:a.local?Jo:Fo)(a,s))}function Ne(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Bo(n){return function(){this.style.removeProperty(n)}}function Yo(n,s,a){return function(){this.style.setProperty(n,s,a)}}function Xo(n,s,a){return function(){var t=s.apply(this,arguments);t==null?this.style.removeProperty(n):this.style.setProperty(n,t,a)}}function Zo(n,s,a){return arguments.length>1?this.each((s==null?Bo:typeof s=="function"?Xo:Yo)(n,s,a??"")):on(this.node(),n)}function on(n,s){return n.style.getPropertyValue(s)||Ne(n).getComputedStyle(n,null).getPropertyValue(s)}function Qo(n){return function(){delete this[n]}}function Ko(n,s){return function(){this[n]=s}}function sr(n,s){return function(){var a=s.apply(this,arguments);a==null?delete this[n]:this[n]=a}}function nr(n,s){return arguments.length>1?this.each((s==null?Qo:typeof s=="function"?sr:Ko)(n,s)):this.node()[n]}function Ie(n){return n.trim().split(/^|\s+/)}function Qa(n){return n.classList||new Oe(n)}function Oe(n){this._node=n,this._names=Ie(n.getAttribute("class")||"")}Oe.prototype={add:function(n){var s=this._names.indexOf(n);s<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var s=this._names.indexOf(n);s>=0&&(this._names.splice(s,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Re(n,s){for(var a=Qa(n),t=-1,e=s.length;++t<e;)a.add(s[t])}function Me(n,s){for(var a=Qa(n),t=-1,e=s.length;++t<e;)a.remove(s[t])}function ar(n){return function(){Re(this,n)}}function tr(n){return function(){Me(this,n)}}function er(n,s){return function(){(s.apply(this,arguments)?Re:Me)(this,n)}}function lr(n,s){var a=Ie(n+"");if(arguments.length<2){for(var t=Qa(this.node()),e=-1,l=a.length;++e<l;)if(!t.contains(a[e]))return!1;return!0}return this.each((typeof s=="function"?er:s?ar:tr)(a,s))}function pr(){this.textContent=""}function or(n){return function(){this.textContent=n}}function rr(n){return function(){var s=n.apply(this,arguments);this.textContent=s??""}}function ir(n){return arguments.length?this.each(n==null?pr:(typeof n=="function"?rr:or)(n)):this.node().textContent}function cr(){this.innerHTML=""}function hr(n){return function(){this.innerHTML=n}}function ur(n){return function(){var s=n.apply(this,arguments);this.innerHTML=s??""}}function dr(n){return arguments.length?this.each(n==null?cr:(typeof n=="function"?ur:hr)(n)):this.node().innerHTML}function jr(){this.nextSibling&&this.parentNode.appendChild(this)}function mr(){return this.each(jr)}function gr(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fr(){return this.each(gr)}function _r(n){var s=typeof n=="function"?n:Ce(n);return this.select(function(){return this.appendChild(s.apply(this,arguments))})}function yr(){return null}function br(n,s){var a=typeof n=="function"?n:Ce(n),t=s==null?yr:typeof s=="function"?s:Za(s);return this.select(function(){return this.insertBefore(a.apply(this,arguments),t.apply(this,arguments)||null)})}function vr(){var n=this.parentNode;n&&n.removeChild(this)}function wr(){return this.each(vr)}function kr(){var n=this.cloneNode(!1),s=this.parentNode;return s?s.insertBefore(n,this.nextSibling):n}function qr(){var n=this.cloneNode(!0),s=this.parentNode;return s?s.insertBefore(n,this.nextSibling):n}function Tr(n){return this.select(n?qr:kr)}function Sr(n){return arguments.length?this.property("__data__",n):this.node().__data__}function xr(n){return function(s){n.call(this,s,this.__data__)}}function Cr(n){return n.trim().split(/^|\s+/).map(function(s){var a="",t=s.indexOf(".");return t>=0&&(a=s.slice(t+1),s=s.slice(0,t)),{type:s,name:a}})}function Pr(n){return function(){var s=this.__on;if(s){for(var a=0,t=-1,e=s.length,l;a<e;++a)l=s[a],(!n.type||l.type===n.type)&&l.name===n.name?this.removeEventListener(l.type,l.listener,l.options):s[++t]=l;++t?s.length=t:delete this.__on}}}function Ar(n,s,a){return function(){var t=this.__on,e,l=xr(s);if(t){for(var p=0,o=t.length;p<o;++p)if((e=t[p]).type===n.type&&e.name===n.name){this.removeEventListener(e.type,e.listener,e.options),this.addEventListener(e.type,e.listener=l,e.options=a),e.value=s;return}}this.addEventListener(n.type,l,a),e={type:n.type,name:n.name,value:s,listener:l,options:a},t?t.push(e):this.__on=[e]}}function Dr(n,s,a){var t=Cr(n+""),e,l=t.length,p;if(arguments.length<2){var o=this.node().__on;if(o){for(var r=0,i=o.length,c;r<i;++r)for(e=0,c=o[r];e<l;++e)if((p=t[e]).type===c.type&&p.name===c.name)return c.value}return}for(o=s?Ar:Pr,e=0;e<l;++e)this.each(o(t[e],s,a));return this}function Ve(n,s,a){var t=Ne(n),e=t.CustomEvent;typeof e=="function"?e=new e(s,a):(e=t.document.createEvent("Event"),a?(e.initEvent(s,a.bubbles,a.cancelable),e.detail=a.detail):e.initEvent(s,!1,!1)),n.dispatchEvent(e)}function Er(n,s){return function(){return Ve(this,n,s)}}function Nr(n,s){return function(){return Ve(this,n,s.apply(this,arguments))}}function Ir(n,s){return this.each((typeof s=="function"?Nr:Er)(n,s))}function*Or(){for(var n=this._groups,s=0,a=n.length;s<a;++s)for(var t=n[s],e=0,l=t.length,p;e<l;++e)(p=t[e])&&(yield p)}var Rr=[null];function ys(n,s){this._groups=n,this._parents=s}function Dn(){return new ys([[document.documentElement]],Rr)}function Mr(){return this}ys.prototype=Dn.prototype={constructor:ys,select:oo,selectAll:ho,selectChild:go,selectChildren:bo,filter:vo,data:xo,enter:wo,exit:Po,join:Ao,merge:Do,selection:Mr,order:Eo,sort:No,call:Oo,nodes:Ro,node:Mo,size:Vo,empty:$o,each:Lo,attr:Uo,style:Zo,property:nr,classed:lr,text:ir,html:dr,raise:mr,lower:fr,append:_r,insert:br,remove:wr,clone:Tr,datum:Sr,on:Dr,dispatch:Ir,[Symbol.iterator]:Or};function Vr(n){return new ys([[document.querySelector(n)]],[document.documentElement])}function Ka(n,s,a){n.prototype=s.prototype=a,a.constructor=n}function $e(n,s){var a=Object.create(n.prototype);for(var t in s)a[t]=s[t];return a}function En(){}var Sn=.7,sa=1/Sn,en="\\s*([+-]?\\d+)\\s*",xn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ts="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$r=/^#([0-9a-f]{3,8})$/,Lr=new RegExp(`^rgb\\(${en},${en},${en}\\)$`),Hr=new RegExp(`^rgb\\(${Ts},${Ts},${Ts}\\)$`),zr=new RegExp(`^rgba\\(${en},${en},${en},${xn}\\)$`),Fr=new RegExp(`^rgba\\(${Ts},${Ts},${Ts},${xn}\\)$`),Jr=new RegExp(`^hsl\\(${xn},${Ts},${Ts}\\)$`),Gr=new RegExp(`^hsla\\(${xn},${Ts},${Ts},${xn}\\)$`),zt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ka(En,Cn,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Ft,formatHex:Ft,formatHex8:Wr,formatHsl:Ur,formatRgb:Jt,toString:Jt});function Ft(){return this.rgb().formatHex()}function Wr(){return this.rgb().formatHex8()}function Ur(){return Le(this).formatHsl()}function Jt(){return this.rgb().formatRgb()}function Cn(n){var s,a;return n=(n+"").trim().toLowerCase(),(s=$r.exec(n))?(a=s[1].length,s=parseInt(s[1],16),a===6?Gt(s):a===3?new us(s>>8&15|s>>4&240,s>>4&15|s&240,(s&15)<<4|s&15,1):a===8?Ln(s>>24&255,s>>16&255,s>>8&255,(s&255)/255):a===4?Ln(s>>12&15|s>>8&240,s>>8&15|s>>4&240,s>>4&15|s&240,((s&15)<<4|s&15)/255):null):(s=Lr.exec(n))?new us(s[1],s[2],s[3],1):(s=Hr.exec(n))?new us(s[1]*255/100,s[2]*255/100,s[3]*255/100,1):(s=zr.exec(n))?Ln(s[1],s[2],s[3],s[4]):(s=Fr.exec(n))?Ln(s[1]*255/100,s[2]*255/100,s[3]*255/100,s[4]):(s=Jr.exec(n))?Bt(s[1],s[2]/100,s[3]/100,1):(s=Gr.exec(n))?Bt(s[1],s[2]/100,s[3]/100,s[4]):zt.hasOwnProperty(n)?Gt(zt[n]):n==="transparent"?new us(NaN,NaN,NaN,0):null}function Gt(n){return new us(n>>16&255,n>>8&255,n&255,1)}function Ln(n,s,a,t){return t<=0&&(n=s=a=NaN),new us(n,s,a,t)}function Br(n){return n instanceof En||(n=Cn(n)),n?(n=n.rgb(),new us(n.r,n.g,n.b,n.opacity)):new us}function Na(n,s,a,t){return arguments.length===1?Br(n):new us(n,s,a,t??1)}function us(n,s,a,t){this.r=+n,this.g=+s,this.b=+a,this.opacity=+t}Ka(us,Na,$e(En,{brighter(n){return n=n==null?sa:Math.pow(sa,n),new us(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Sn:Math.pow(Sn,n),new us(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new us(Fs(this.r),Fs(this.g),Fs(this.b),na(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Wt,formatHex:Wt,formatHex8:Yr,formatRgb:Ut,toString:Ut}));function Wt(){return`#${Ls(this.r)}${Ls(this.g)}${Ls(this.b)}`}function Yr(){return`#${Ls(this.r)}${Ls(this.g)}${Ls(this.b)}${Ls((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ut(){const n=na(this.opacity);return`${n===1?"rgb(":"rgba("}${Fs(this.r)}, ${Fs(this.g)}, ${Fs(this.b)}${n===1?")":`, ${n})`}`}function na(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Fs(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Ls(n){return n=Fs(n),(n<16?"0":"")+n.toString(16)}function Bt(n,s,a,t){return t<=0?n=s=a=NaN:a<=0||a>=1?n=s=NaN:s<=0&&(n=NaN),new vs(n,s,a,t)}function Le(n){if(n instanceof vs)return new vs(n.h,n.s,n.l,n.opacity);if(n instanceof En||(n=Cn(n)),!n)return new vs;if(n instanceof vs)return n;n=n.rgb();var s=n.r/255,a=n.g/255,t=n.b/255,e=Math.min(s,a,t),l=Math.max(s,a,t),p=NaN,o=l-e,r=(l+e)/2;return o?(s===l?p=(a-t)/o+(a<t)*6:a===l?p=(t-s)/o+2:p=(s-a)/o+4,o/=r<.5?l+e:2-l-e,p*=60):o=r>0&&r<1?0:p,new vs(p,o,r,n.opacity)}function Xr(n,s,a,t){return arguments.length===1?Le(n):new vs(n,s,a,t??1)}function vs(n,s,a,t){this.h=+n,this.s=+s,this.l=+a,this.opacity=+t}Ka(vs,Xr,$e(En,{brighter(n){return n=n==null?sa:Math.pow(sa,n),new vs(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Sn:Math.pow(Sn,n),new vs(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,s=isNaN(n)||isNaN(this.s)?0:this.s,a=this.l,t=a+(a<.5?a:1-a)*s,e=2*a-t;return new us(va(n>=240?n-240:n+120,e,t),va(n,e,t),va(n<120?n+240:n-120,e,t),this.opacity)},clamp(){return new vs(Yt(this.h),Hn(this.s),Hn(this.l),na(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=na(this.opacity);return`${n===1?"hsl(":"hsla("}${Yt(this.h)}, ${Hn(this.s)*100}%, ${Hn(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Yt(n){return n=(n||0)%360,n<0?n+360:n}function Hn(n){return Math.max(0,Math.min(1,n||0))}function va(n,s,a){return(n<60?s+(a-s)*n/60:n<180?a:n<240?s+(a-s)*(240-n)/60:s)*255}const He=n=>()=>n;function Zr(n,s){return function(a){return n+a*s}}function Qr(n,s,a){return n=Math.pow(n,a),s=Math.pow(s,a)-n,a=1/a,function(t){return Math.pow(n+t*s,a)}}function Kr(n){return(n=+n)==1?ze:function(s,a){return a-s?Qr(s,a,n):He(isNaN(s)?a:s)}}function ze(n,s){var a=s-n;return a?Zr(n,a):He(isNaN(n)?s:n)}const Xt=function n(s){var a=Kr(s);function t(e,l){var p=a((e=Na(e)).r,(l=Na(l)).r),o=a(e.g,l.g),r=a(e.b,l.b),i=ze(e.opacity,l.opacity);return function(c){return e.r=p(c),e.g=o(c),e.b=r(c),e.opacity=i(c),e+""}}return t.gamma=n,t}(1);function Es(n,s){return n=+n,s=+s,function(a){return n*(1-a)+s*a}}var Ia=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wa=new RegExp(Ia.source,"g");function si(n){return function(){return n}}function ni(n){return function(s){return n(s)+""}}function ai(n,s){var a=Ia.lastIndex=wa.lastIndex=0,t,e,l,p=-1,o=[],r=[];for(n=n+"",s=s+"";(t=Ia.exec(n))&&(e=wa.exec(s));)(l=e.index)>a&&(l=s.slice(a,l),o[p]?o[p]+=l:o[++p]=l),(t=t[0])===(e=e[0])?o[p]?o[p]+=e:o[++p]=e:(o[++p]=null,r.push({i:p,x:Es(t,e)})),a=wa.lastIndex;return a<s.length&&(l=s.slice(a),o[p]?o[p]+=l:o[++p]=l),o.length<2?r[0]?ni(r[0].x):si(s):(s=r.length,function(i){for(var c=0,h;c<s;++c)o[(h=r[c]).i]=h.x(i);return o.join("")})}var Zt=180/Math.PI,Oa={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Fe(n,s,a,t,e,l){var p,o,r;return(p=Math.sqrt(n*n+s*s))&&(n/=p,s/=p),(r=n*a+s*t)&&(a-=n*r,t-=s*r),(o=Math.sqrt(a*a+t*t))&&(a/=o,t/=o,r/=o),n*t<s*a&&(n=-n,s=-s,r=-r,p=-p),{translateX:e,translateY:l,rotate:Math.atan2(s,n)*Zt,skewX:Math.atan(r)*Zt,scaleX:p,scaleY:o}}var zn;function ti(n){const s=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return s.isIdentity?Oa:Fe(s.a,s.b,s.c,s.d,s.e,s.f)}function ei(n){return n==null||(zn||(zn=document.createElementNS("http://www.w3.org/2000/svg","g")),zn.setAttribute("transform",n),!(n=zn.transform.baseVal.consolidate()))?Oa:(n=n.matrix,Fe(n.a,n.b,n.c,n.d,n.e,n.f))}function Je(n,s,a,t){function e(i){return i.length?i.pop()+" ":""}function l(i,c,h,u,j,g){if(i!==h||c!==u){var v=j.push("translate(",null,s,null,a);g.push({i:v-4,x:Es(i,h)},{i:v-2,x:Es(c,u)})}else(h||u)&&j.push("translate("+h+s+u+a)}function p(i,c,h,u){i!==c?(i-c>180?c+=360:c-i>180&&(i+=360),u.push({i:h.push(e(h)+"rotate(",null,t)-2,x:Es(i,c)})):c&&h.push(e(h)+"rotate("+c+t)}function o(i,c,h,u){i!==c?u.push({i:h.push(e(h)+"skewX(",null,t)-2,x:Es(i,c)}):c&&h.push(e(h)+"skewX("+c+t)}function r(i,c,h,u,j,g){if(i!==h||c!==u){var v=j.push(e(j)+"scale(",null,",",null,")");g.push({i:v-4,x:Es(i,h)},{i:v-2,x:Es(c,u)})}else(h!==1||u!==1)&&j.push(e(j)+"scale("+h+","+u+")")}return function(i,c){var h=[],u=[];return i=n(i),c=n(c),l(i.translateX,i.translateY,c.translateX,c.translateY,h,u),p(i.rotate,c.rotate,h,u),o(i.skewX,c.skewX,h,u),r(i.scaleX,i.scaleY,c.scaleX,c.scaleY,h,u),i=c=null,function(j){for(var g=-1,v=u.length,b;++g<v;)h[(b=u[g]).i]=b.x(j);return h.join("")}}}var li=Je(ti,"px, ","px)","deg)"),pi=Je(ei,", ",")",")"),rn=0,fn=0,jn=0,Ge=1e3,aa,_n,ta=0,Js=0,ca=0,Pn=typeof performance=="object"&&performance.now?performance:Date,We=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function st(){return Js||(We(oi),Js=Pn.now()+ca)}function oi(){Js=0}function ea(){this._call=this._time=this._next=null}ea.prototype=Ue.prototype={constructor:ea,restart:function(n,s,a){if(typeof n!="function")throw new TypeError("callback is not a function");a=(a==null?st():+a)+(s==null?0:+s),!this._next&&_n!==this&&(_n?_n._next=this:aa=this,_n=this),this._call=n,this._time=a,Ra()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ra())}};function Ue(n,s,a){var t=new ea;return t.restart(n,s,a),t}function ri(){st(),++rn;for(var n=aa,s;n;)(s=Js-n._time)>=0&&n._call.call(void 0,s),n=n._next;--rn}function Qt(){Js=(ta=Pn.now())+ca,rn=fn=0;try{ri()}finally{rn=0,ci(),Js=0}}function ii(){var n=Pn.now(),s=n-ta;s>Ge&&(ca-=s,ta=n)}function ci(){for(var n,s=aa,a,t=1/0;s;)s._call?(t>s._time&&(t=s._time),n=s,s=s._next):(a=s._next,s._next=null,s=n?n._next=a:aa=a);_n=n,Ra(t)}function Ra(n){if(!rn){fn&&(fn=clearTimeout(fn));var s=n-Js;s>24?(n<1/0&&(fn=setTimeout(Qt,n-Pn.now()-ca)),jn&&(jn=clearInterval(jn))):(jn||(ta=Pn.now(),jn=setInterval(ii,Ge)),rn=1,We(Qt))}}function Kt(n,s,a){var t=new ea;return s=s==null?0:+s,t.restart(e=>{t.stop(),n(e+s)},s,a),t}var hi=xe("start","end","cancel","interrupt"),ui=[],Be=0,se=1,Ma=2,Bn=3,ne=4,Va=5,Yn=6;function ha(n,s,a,t,e,l){var p=n.__transition;if(!p)n.__transition={};else if(a in p)return;di(n,a,{name:s,index:t,group:e,on:hi,tween:ui,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:Be})}function nt(n,s){var a=qs(n,s);if(a.state>Be)throw new Error("too late; already scheduled");return a}function Ss(n,s){var a=qs(n,s);if(a.state>Bn)throw new Error("too late; already running");return a}function qs(n,s){var a=n.__transition;if(!a||!(a=a[s]))throw new Error("transition not found");return a}function di(n,s,a){var t=n.__transition,e;t[s]=a,a.timer=Ue(l,0,a.time);function l(i){a.state=se,a.timer.restart(p,a.delay,a.time),a.delay<=i&&p(i-a.delay)}function p(i){var c,h,u,j;if(a.state!==se)return r();for(c in t)if(j=t[c],j.name===a.name){if(j.state===Bn)return Kt(p);j.state===ne?(j.state=Yn,j.timer.stop(),j.on.call("interrupt",n,n.__data__,j.index,j.group),delete t[c]):+c<s&&(j.state=Yn,j.timer.stop(),j.on.call("cancel",n,n.__data__,j.index,j.group),delete t[c])}if(Kt(function(){a.state===Bn&&(a.state=ne,a.timer.restart(o,a.delay,a.time),o(i))}),a.state=Ma,a.on.call("start",n,n.__data__,a.index,a.group),a.state===Ma){for(a.state=Bn,e=new Array(u=a.tween.length),c=0,h=-1;c<u;++c)(j=a.tween[c].value.call(n,n.__data__,a.index,a.group))&&(e[++h]=j);e.length=h+1}}function o(i){for(var c=i<a.duration?a.ease.call(null,i/a.duration):(a.timer.restart(r),a.state=Va,1),h=-1,u=e.length;++h<u;)e[h].call(n,c);a.state===Va&&(a.on.call("end",n,n.__data__,a.index,a.group),r())}function r(){a.state=Yn,a.timer.stop(),delete t[s];for(var i in t)return;delete n.__transition}}function ji(n,s){var a=n.__transition,t,e,l=!0,p;if(a){s=s==null?null:s+"";for(p in a){if((t=a[p]).name!==s){l=!1;continue}e=t.state>Ma&&t.state<Va,t.state=Yn,t.timer.stop(),t.on.call(e?"interrupt":"cancel",n,n.__data__,t.index,t.group),delete a[p]}l&&delete n.__transition}}function mi(n){return this.each(function(){ji(this,n)})}function gi(n,s){var a,t;return function(){var e=Ss(this,n),l=e.tween;if(l!==a){t=a=l;for(var p=0,o=t.length;p<o;++p)if(t[p].name===s){t=t.slice(),t.splice(p,1);break}}e.tween=t}}function fi(n,s,a){var t,e;if(typeof a!="function")throw new Error;return function(){var l=Ss(this,n),p=l.tween;if(p!==t){e=(t=p).slice();for(var o={name:s,value:a},r=0,i=e.length;r<i;++r)if(e[r].name===s){e[r]=o;break}r===i&&e.push(o)}l.tween=e}}function _i(n,s){var a=this._id;if(n+="",arguments.length<2){for(var t=qs(this.node(),a).tween,e=0,l=t.length,p;e<l;++e)if((p=t[e]).name===n)return p.value;return null}return this.each((s==null?gi:fi)(a,n,s))}function at(n,s,a){var t=n._id;return n.each(function(){var e=Ss(this,t);(e.value||(e.value={}))[s]=a.apply(this,arguments)}),function(e){return qs(e,t).value[s]}}function Ye(n,s){var a;return(typeof s=="number"?Es:s instanceof Cn?Xt:(a=Cn(s))?(s=a,Xt):ai)(n,s)}function yi(n){return function(){this.removeAttribute(n)}}function bi(n){return function(){this.removeAttributeNS(n.space,n.local)}}function vi(n,s,a){var t,e=a+"",l;return function(){var p=this.getAttribute(n);return p===e?null:p===t?l:l=s(t=p,a)}}function wi(n,s,a){var t,e=a+"",l;return function(){var p=this.getAttributeNS(n.space,n.local);return p===e?null:p===t?l:l=s(t=p,a)}}function ki(n,s,a){var t,e,l;return function(){var p,o=a(this),r;return o==null?void this.removeAttribute(n):(p=this.getAttribute(n),r=o+"",p===r?null:p===t&&r===e?l:(e=r,l=s(t=p,o)))}}function qi(n,s,a){var t,e,l;return function(){var p,o=a(this),r;return o==null?void this.removeAttributeNS(n.space,n.local):(p=this.getAttributeNS(n.space,n.local),r=o+"",p===r?null:p===t&&r===e?l:(e=r,l=s(t=p,o)))}}function Ti(n,s){var a=ia(n),t=a==="transform"?pi:Ye;return this.attrTween(n,typeof s=="function"?(a.local?qi:ki)(a,t,at(this,"attr."+n,s)):s==null?(a.local?bi:yi)(a):(a.local?wi:vi)(a,t,s))}function Si(n,s){return function(a){this.setAttribute(n,s.call(this,a))}}function xi(n,s){return function(a){this.setAttributeNS(n.space,n.local,s.call(this,a))}}function Ci(n,s){var a,t;function e(){var l=s.apply(this,arguments);return l!==t&&(a=(t=l)&&xi(n,l)),a}return e._value=s,e}function Pi(n,s){var a,t;function e(){var l=s.apply(this,arguments);return l!==t&&(a=(t=l)&&Si(n,l)),a}return e._value=s,e}function Ai(n,s){var a="attr."+n;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(s==null)return this.tween(a,null);if(typeof s!="function")throw new Error;var t=ia(n);return this.tween(a,(t.local?Ci:Pi)(t,s))}function Di(n,s){return function(){nt(this,n).delay=+s.apply(this,arguments)}}function Ei(n,s){return s=+s,function(){nt(this,n).delay=s}}function Ni(n){var s=this._id;return arguments.length?this.each((typeof n=="function"?Di:Ei)(s,n)):qs(this.node(),s).delay}function Ii(n,s){return function(){Ss(this,n).duration=+s.apply(this,arguments)}}function Oi(n,s){return s=+s,function(){Ss(this,n).duration=s}}function Ri(n){var s=this._id;return arguments.length?this.each((typeof n=="function"?Ii:Oi)(s,n)):qs(this.node(),s).duration}function Mi(n,s){if(typeof s!="function")throw new Error;return function(){Ss(this,n).ease=s}}function Vi(n){var s=this._id;return arguments.length?this.each(Mi(s,n)):qs(this.node(),s).ease}function $i(n,s){return function(){var a=s.apply(this,arguments);if(typeof a!="function")throw new Error;Ss(this,n).ease=a}}function Li(n){if(typeof n!="function")throw new Error;return this.each($i(this._id,n))}function Hi(n){typeof n!="function"&&(n=Ae(n));for(var s=this._groups,a=s.length,t=new Array(a),e=0;e<a;++e)for(var l=s[e],p=l.length,o=t[e]=[],r,i=0;i<p;++i)(r=l[i])&&n.call(r,r.__data__,i,l)&&o.push(r);return new As(t,this._parents,this._name,this._id)}function zi(n){if(n._id!==this._id)throw new Error;for(var s=this._groups,a=n._groups,t=s.length,e=a.length,l=Math.min(t,e),p=new Array(t),o=0;o<l;++o)for(var r=s[o],i=a[o],c=r.length,h=p[o]=new Array(c),u,j=0;j<c;++j)(u=r[j]||i[j])&&(h[j]=u);for(;o<t;++o)p[o]=s[o];return new As(p,this._parents,this._name,this._id)}function Fi(n){return(n+"").trim().split(/^|\s+/).every(function(s){var a=s.indexOf(".");return a>=0&&(s=s.slice(0,a)),!s||s==="start"})}function Ji(n,s,a){var t,e,l=Fi(s)?nt:Ss;return function(){var p=l(this,n),o=p.on;o!==t&&(e=(t=o).copy()).on(s,a),p.on=e}}function Gi(n,s){var a=this._id;return arguments.length<2?qs(this.node(),a).on.on(n):this.each(Ji(a,n,s))}function Wi(n){return function(){var s=this.parentNode;for(var a in this.__transition)if(+a!==n)return;s&&s.removeChild(this)}}function Ui(){return this.on("end.remove",Wi(this._id))}function Bi(n){var s=this._name,a=this._id;typeof n!="function"&&(n=Za(n));for(var t=this._groups,e=t.length,l=new Array(e),p=0;p<e;++p)for(var o=t[p],r=o.length,i=l[p]=new Array(r),c,h,u=0;u<r;++u)(c=o[u])&&(h=n.call(c,c.__data__,u,o))&&("__data__"in c&&(h.__data__=c.__data__),i[u]=h,ha(i[u],s,a,u,i,qs(c,a)));return new As(l,this._parents,s,a)}function Yi(n){var s=this._name,a=this._id;typeof n!="function"&&(n=Pe(n));for(var t=this._groups,e=t.length,l=[],p=[],o=0;o<e;++o)for(var r=t[o],i=r.length,c,h=0;h<i;++h)if(c=r[h]){for(var u=n.call(c,c.__data__,h,r),j,g=qs(c,a),v=0,b=u.length;v<b;++v)(j=u[v])&&ha(j,s,a,v,u,g);l.push(u),p.push(c)}return new As(l,p,s,a)}var Xi=Dn.prototype.constructor;function Zi(){return new Xi(this._groups,this._parents)}function Qi(n,s){var a,t,e;return function(){var l=on(this,n),p=(this.style.removeProperty(n),on(this,n));return l===p?null:l===a&&p===t?e:e=s(a=l,t=p)}}function Xe(n){return function(){this.style.removeProperty(n)}}function Ki(n,s,a){var t,e=a+"",l;return function(){var p=on(this,n);return p===e?null:p===t?l:l=s(t=p,a)}}function sc(n,s,a){var t,e,l;return function(){var p=on(this,n),o=a(this),r=o+"";return o==null&&(r=o=(this.style.removeProperty(n),on(this,n))),p===r?null:p===t&&r===e?l:(e=r,l=s(t=p,o))}}function nc(n,s){var a,t,e,l="style."+s,p="end."+l,o;return function(){var r=Ss(this,n),i=r.on,c=r.value[l]==null?o||(o=Xe(s)):void 0;(i!==a||e!==c)&&(t=(a=i).copy()).on(p,e=c),r.on=t}}function ac(n,s,a){var t=(n+="")=="transform"?li:Ye;return s==null?this.styleTween(n,Qi(n,t)).on("end.style."+n,Xe(n)):typeof s=="function"?this.styleTween(n,sc(n,t,at(this,"style."+n,s))).each(nc(this._id,n)):this.styleTween(n,Ki(n,t,s),a).on("end.style."+n,null)}function tc(n,s,a){return function(t){this.style.setProperty(n,s.call(this,t),a)}}function ec(n,s,a){var t,e;function l(){var p=s.apply(this,arguments);return p!==e&&(t=(e=p)&&tc(n,p,a)),t}return l._value=s,l}function lc(n,s,a){var t="style."+(n+="");if(arguments.length<2)return(t=this.tween(t))&&t._value;if(s==null)return this.tween(t,null);if(typeof s!="function")throw new Error;return this.tween(t,ec(n,s,a??""))}function pc(n){return function(){this.textContent=n}}function oc(n){return function(){var s=n(this);this.textContent=s??""}}function rc(n){return this.tween("text",typeof n=="function"?oc(at(this,"text",n)):pc(n==null?"":n+""))}function ic(n){return function(s){this.textContent=n.call(this,s)}}function cc(n){var s,a;function t(){var e=n.apply(this,arguments);return e!==a&&(s=(a=e)&&ic(e)),s}return t._value=n,t}function hc(n){var s="text";if(arguments.length<1)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,cc(n))}function uc(){for(var n=this._name,s=this._id,a=Ze(),t=this._groups,e=t.length,l=0;l<e;++l)for(var p=t[l],o=p.length,r,i=0;i<o;++i)if(r=p[i]){var c=qs(r,s);ha(r,n,a,i,p,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new As(t,this._parents,n,a)}function dc(){var n,s,a=this,t=a._id,e=a.size();return new Promise(function(l,p){var o={value:p},r={value:function(){--e===0&&l()}};a.each(function(){var i=Ss(this,t),c=i.on;c!==n&&(s=(n=c).copy(),s._.cancel.push(o),s._.interrupt.push(o),s._.end.push(r)),i.on=s}),e===0&&l()})}var jc=0;function As(n,s,a,t){this._groups=n,this._parents=s,this._name=a,this._id=t}function Ze(){return++jc}var xs=Dn.prototype;As.prototype={constructor:As,select:Bi,selectAll:Yi,selectChild:xs.selectChild,selectChildren:xs.selectChildren,filter:Hi,merge:zi,selection:Zi,transition:uc,call:xs.call,nodes:xs.nodes,node:xs.node,size:xs.size,empty:xs.empty,each:xs.each,on:Gi,attr:Ti,attrTween:Ai,style:ac,styleTween:lc,text:rc,textTween:hc,remove:Ui,tween:_i,delay:Ni,duration:Ri,ease:Vi,easeVarying:Li,end:dc,[Symbol.iterator]:xs[Symbol.iterator]};function mc(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var gc={time:null,delay:0,duration:250,ease:mc};function fc(n,s){for(var a;!(a=n.__transition)||!(a=a[s]);)if(!(n=n.parentNode))throw new Error(`transition ${s} not found`);return a}function _c(n){var s,a;n instanceof As?(s=n._id,n=n._name):(s=Ze(),(a=gc).time=st(),n=n==null?null:n+"");for(var t=this._groups,e=t.length,l=0;l<e;++l)for(var p=t[l],o=p.length,r,i=0;i<o;++i)(r=p[i])&&ha(r,n,s,i,p,a||fc(r,s));return new As(t,this._parents,n,s)}Dn.prototype.interrupt=mi;Dn.prototype.transition=_c;const $a=Math.PI,La=2*$a,Vs=1e-6,yc=La-Vs;function Qe(n){this._+=n[0];for(let s=1,a=n.length;s<a;++s)this._+=arguments[s]+n[s]}function bc(n){let s=Math.floor(n);if(!(s>=0))throw new Error(`invalid digits: ${n}`);if(s>15)return Qe;const a=10**s;return function(t){this._+=t[0];for(let e=1,l=t.length;e<l;++e)this._+=Math.round(arguments[e]*a)/a+t[e]}}class vc{constructor(s){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=s==null?Qe:bc(s)}moveTo(s,a){this._append`M${this._x0=this._x1=+s},${this._y0=this._y1=+a}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(s,a){this._append`L${this._x1=+s},${this._y1=+a}`}quadraticCurveTo(s,a,t,e){this._append`Q${+s},${+a},${this._x1=+t},${this._y1=+e}`}bezierCurveTo(s,a,t,e,l,p){this._append`C${+s},${+a},${+t},${+e},${this._x1=+l},${this._y1=+p}`}arcTo(s,a,t,e,l){if(s=+s,a=+a,t=+t,e=+e,l=+l,l<0)throw new Error(`negative radius: ${l}`);let p=this._x1,o=this._y1,r=t-s,i=e-a,c=p-s,h=o-a,u=c*c+h*h;if(this._x1===null)this._append`M${this._x1=s},${this._y1=a}`;else if(u>Vs)if(!(Math.abs(h*r-i*c)>Vs)||!l)this._append`L${this._x1=s},${this._y1=a}`;else{let j=t-p,g=e-o,v=r*r+i*i,b=j*j+g*g,T=Math.sqrt(v),P=Math.sqrt(u),D=l*Math.tan(($a-Math.acos((v+u-b)/(2*T*P)))/2),X=D/P,U=D/T;Math.abs(X-1)>Vs&&this._append`L${s+X*c},${a+X*h}`,this._append`A${l},${l},0,0,${+(h*j>c*g)},${this._x1=s+U*r},${this._y1=a+U*i}`}}arc(s,a,t,e,l,p){if(s=+s,a=+a,t=+t,p=!!p,t<0)throw new Error(`negative radius: ${t}`);let o=t*Math.cos(e),r=t*Math.sin(e),i=s+o,c=a+r,h=1^p,u=p?e-l:l-e;this._x1===null?this._append`M${i},${c}`:(Math.abs(this._x1-i)>Vs||Math.abs(this._y1-c)>Vs)&&this._append`L${i},${c}`,t&&(u<0&&(u=u%La+La),u>yc?this._append`A${t},${t},0,1,${h},${s-o},${a-r}A${t},${t},0,1,${h},${this._x1=i},${this._y1=c}`:u>Vs&&this._append`A${t},${t},0,${+(u>=$a)},${h},${this._x1=s+t*Math.cos(l)},${this._y1=a+t*Math.sin(l)}`)}rect(s,a,t,e){this._append`M${this._x0=this._x1=+s},${this._y0=this._y1=+a}h${t=+t}v${+e}h${-t}Z`}toString(){return this._}}function Xs(n){return function(){return n}}function wc(n){let s=3;return n.digits=function(a){if(!arguments.length)return s;if(a==null)s=null;else{const t=Math.floor(a);if(!(t>=0))throw new RangeError(`invalid digits: ${a}`);s=t}return n},()=>new vc(s)}function kc(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Ke(n){this._context=n}Ke.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,s){switch(n=+n,s=+s,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,s):this._context.moveTo(n,s);break;case 1:this._point=2;default:this._context.lineTo(n,s);break}}};function qc(n){return new Ke(n)}function Tc(n){return n[0]}function Sc(n){return n[1]}function xc(n,s){var a=Xs(!0),t=null,e=qc,l=null,p=wc(o);n=typeof n=="function"?n:n===void 0?Tc:Xs(n),s=typeof s=="function"?s:s===void 0?Sc:Xs(s);function o(r){var i,c=(r=kc(r)).length,h,u=!1,j;for(t==null&&(l=e(j=p())),i=0;i<=c;++i)!(i<c&&a(h=r[i],i,r))===u&&((u=!u)?l.lineStart():l.lineEnd()),u&&l.point(+n(h,i,r),+s(h,i,r));if(j)return l=null,j+""||null}return o.x=function(r){return arguments.length?(n=typeof r=="function"?r:Xs(+r),o):n},o.y=function(r){return arguments.length?(s=typeof r=="function"?r:Xs(+r),o):s},o.defined=function(r){return arguments.length?(a=typeof r=="function"?r:Xs(!!r),o):a},o.curve=function(r){return arguments.length?(e=r,t!=null&&(l=e(t)),o):e},o.context=function(r){return arguments.length?(r==null?t=l=null:l=e(t=r),o):t},o}function sl(n){this._context=n}sl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var n=this._x,s=this._y,a=n.length;if(a)if(this._line?this._context.lineTo(n[0],s[0]):this._context.moveTo(n[0],s[0]),a===2)this._context.lineTo(n[1],s[1]);else for(var t=ae(n),e=ae(s),l=0,p=1;p<a;++l,++p)this._context.bezierCurveTo(t[0][l],e[0][l],t[1][l],e[1][l],n[p],s[p]);(this._line||this._line!==0&&a===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(n,s){this._x.push(+n),this._y.push(+s)}};function ae(n){var s,a=n.length-1,t,e=new Array(a),l=new Array(a),p=new Array(a);for(e[0]=0,l[0]=2,p[0]=n[0]+2*n[1],s=1;s<a-1;++s)e[s]=1,l[s]=4,p[s]=4*n[s]+2*n[s+1];for(e[a-1]=2,l[a-1]=7,p[a-1]=8*n[a-1]+n[a],s=1;s<a;++s)t=e[s]/l[s-1],l[s]-=t,p[s]-=t*p[s-1];for(e[a-1]=p[a-1]/l[a-1],s=a-2;s>=0;--s)e[s]=(p[s]-e[s+1])/l[s];for(l[a-1]=(n[a]+e[a-1])/2,s=0;s<a-1;++s)l[s]=2*n[s+1]-e[s+1];return[e,l]}function Cc(n){return new sl(n)}function yn(n,s,a){this.k=n,this.x=s,this.y=a}yn.prototype={constructor:yn,scale:function(n){return n===1?this:new yn(this.k*n,this.x,this.y)},translate:function(n,s){return n===0&s===0?this:new yn(this.k,this.x+this.k*n,this.y+this.k*s)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};yn.prototype;const Pc=["width","height"],Ac=ks({__name:"ColorCircle",props:{width:{default:600},height:{default:600}},setup(n){const s=["#323e39","#707a73","#aebaae","#dce7e9","#e5e7eb"],a=n,t=ps(()=>Math.min(a.height,a.width)),e=()=>{const l=Vr("svg");l.selectAll("*").remove();const p=l.append("g").style("overflow","visible");p.append("rect").attr("x",0).attr("y",0).attr("width","100%").attr("height","100%").attr("fill","none"),p.attr("transform",`translate(${t.value/2}, ${t.value/2}) rotate(-45 ${t.value/2} ${t.value/2}) `);for(let o=4;o>=0;o--){const r=so(-t.value,2*t.value,60).map(g=>({x:g,y:t.value/2-(o+1)*t.value/8+Math.sin(g*Math.random())*(Math.random()*40+Math.random()*20)})),i=xc().x(g=>g.x).y(g=>g.y).curve(Cc);if(!r.length)return;let c=i(r);c+=` L${t.value},${t.value/2}`,c+=` L0,${t.value/2}`,c+=" Z";const h=p.append("g");h.attr("transform","scale(1, 0)").attr("transform-origin",`0 ${t.value}`).style("overflow","visible"),h.append("path").attr("d",c).attr("fill",s[o]).attr("stroke","none").attr("stroke-width",2).attr("opacity",1);const j=(5-o)*500;h.transition().delay(j).duration(3e3).attr("transform","scale(1, 1)").attr("opacity",1)}};return Ws(()=>{e(),js(t,()=>{e()})}),(l,p)=>(k(),q("svg",{width:G(t),height:G(t),style:{overflow:"visible"}},null,8,Pc))}}),Dc={class:"w-full h-full p-6"},Ec=ks({__name:"HomePage",setup(n){const s=pa("container"),{width:a,height:t}=ye(s);return(e,l)=>(k(),q("div",Dc,[l[0]||(l[0]=d("section",{class:"flex flex-col gap-3"},[d("h2",{class:"home-title"}," 欢迎来的这里 "),d("p",null,[m("这里是个人博客的3.0版本"),d("strong",null,"「浪潮」")]),d("p",null,"这里是网络中的一个不起眼的小角落, 就像宇宙中的一颗行星, 海浪掠过的一粒沙。"),d("p",null,"记录了一些关于作者的文字, 随意而无序。"),d("strong",null,"你在寻找意义，而我只是存在。")],-1)),d("div",{class:"fixed square-min right-0 bottom-0 pointer-events-none z-[2]",ref_key:"container",ref:s},[C(Ac,{class:"right-0 bottom-0",width:G(a),height:G(t)},null,8,["width","height"])],512)]))}}),Nc=A(Ec,[["__scopeId","data-v-d9ff9c92"]]),Ic=JSON.parse('{"title":"2020五月初青岛游·见·闻","description":"","frontmatter":{"title":"2020五月初青岛游·见·闻","summary":"国内疫情逐渐平息的五月，还是笼罩在一层阴霾之中，通往外省市的机票价格都较大幅度的低于往年情况。四月过得并不太平，工作也并非十分顺利，加上一件突发的私人事务，促使我想要离开这里一段时间。在短暂的犹豫之后，我决定踏上去往青岛的\\"赎罪之路\\"","date":"2020-05-05T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/2020五月初青岛游·见·闻.md","filePath":"content/blog/2020五月初青岛游·见·闻.md"}'),Oc={name:"content/blog/2020五月初青岛游·见·闻.md"};function Rc(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>初入青岛</h2><p>2020年5月2日中午抵达青岛，小雨天气。青岛的疫情防控是要比杭州严格的，并且信息追踪也要详细得多。到达商场、乘坐交通工具时，都必须扫码，以便记录行踪。打车直接到达指定的酒店，办理好入住就去与指定的小伙伴会面了。(酒店旁边是一个海鲜ktv，叫怡情楼，总有种住在古代青楼附近的感觉。)因为预定酒店的时候沟通过，所以距离朋友的居所也很近。有四年多没见了，我的内心还是很忐忑的，认不认得出都要另说。</p><p>好在是最后成功会面，虽然我中途认错了一个人，还盯着人家看，人家也盯着我，严重怀疑当时她的内心也非常凌乱。旅行就以中午饭开始了。吃饭聊天侃地，转眼时间就到了下午三点，出门后去了青岛啤酒博物馆，很遗憾，因为疫情是闭馆的。我们公交直达青岛天主教堂。</p><p><img src="https://www.im6767.top/articlePlates/1588650637305.jpg"> 有一个很有意思的现象：青岛很多地方都可以见到拍摄婚纱照的男女，这大概就是青岛遗留的德式建筑赋予这座城市的魅力吧。</p><blockquote>一座城市的历史不可能是别的，只能是它的建筑。</blockquote><blockquote>真古迹使人留恋之处，在于它经历沧桑直至如今，在它身边生活，你才会觉得历史至今还活着。</blockquote><p>可惜，也是因为疫情，不做开放，只能在外围观看。当然，我本身也是一个无宗教信仰者，入内也只能叹于建筑风格吧。</p><p>离开教堂，下一站前往了栈桥。我本身是没有见过大海的人，而且对栈桥这个有蛮高的期待。我对于栈桥的幻想源自两部电影：《了不起的盖茨比》中栈桥尽头的绿色闪光；《爱乐之城》塞巴斯汀在栈桥上的一首city of star。当然，青岛的栈桥规模是大于上文提到的两个，而且尽头有一座楼阁。海风很大，吹得凉嗖嗖的，人倒是挺少，大概和天气也有几分关系吧。总之栈桥给我的体验倒是一般，天公不作美。</p><p>简餐过后，去了台东。这里是一片商业区，不大，颇有些特点。街两旁是各种店铺，大小都有，和香港，上海的一些商业步行街很像，但他们是后面则是居民楼风格的建筑，墙体上都绘有涂鸦壁画，反倒是和下面的商业区域形成反差，而这种反差带来的视觉碰撞恰好带来了另一种感觉，可谓之特别。鄙人没有购物的需求，来到这边也只是流连于行人与店铺街道的灯光之中。可能因为早起赶飞机，第一天颇有些劳累，台东之后我们就踏上了返程。</p><p><br></p><h2>我在青岛的第二天</h2><p>第二天雨停了，但是天气预报说会有大雾。中午觅食去吃了朋友推荐的烤肉，确实和平日吃的烤肉不大一样，味道要好。美食总是能够有效地释放压力。下一站直接前往信号山。</p><p>信号山的得名很简单，因为山上有为青岛港船只传递信号的信旗台，所以叫信号山。据说这里是欣赏海景和市区景色的绝佳位置。这个五一确实是一个清静的五一，往来于信号山的人不多，没有人山人海时的烦躁感。观景位置望去，能够看到若影若现的房屋，橘色的屋顶。</p><p><img src="https://www.im6767.top/articlePlates/1588656250218.jpg"></p><p>旧时的德国总督府也能够清晰看到。不知为何，这座建筑让我想起了电影《利刃出鞘》。朋友说，她想住进这座房子里，我相信大多数人都会这么想吧。</p><p><img src="https://www.im6767.top/articlePlates/1588656266950.jpg"></p><p>离开信号山，下一站前往八大关。事实上八大关的名字来源于八条马路，马路的命名为<span style="color:rgb(51, 51, 51);">韶关路、</span>嘉峪关路 、函谷关路、 正阳关路、临淮关路、宁武关路、 紫荆关路 、居庸关路，所以称作八大关。这里是一座小型的建筑博物馆，因为能够看到各式建筑风格的房屋，很多房屋关联着一个故事。(图为蝴蝶楼照，和影后胡蝶有关。日后有空会专做一期关于胡蝶的简介文，介绍一下这位红极一时的女神。)</p><p><img src="https://www.im6767.top/articlePlates/1588656806065.jpg"></p><p>除此之外，还有公主楼，一个童话般的建筑，关联着一个爱情故事。当然也是因为疫情，这些原本开放的景点都关闭了。</p><p>八大关的建筑是十分具有魅力的，这里也变成了婚纱摄影的绝佳选择。一路能够看到非常多的婚纱拍摄者，这就是建筑文化赋予的额外价值。愿在这文化交融的景色中，能够得到永恒的爱情。</p><p>晚上本来要和朋友去贤合庄吃火锅，然而被告知两人需要明天，就去了别的地方。吃完饭后来到了五四广场，第二天就是五四青年节。五四广场《五月的风》可谓是知名地标，很多青岛的宣传海报都能看到它的身影。</p><p><img src="https://www.im6767.top/articlePlates/1588657482982.jpg"></p><p>我不了解雕塑艺术。只能从感受上去评价它。我本身是一个钟爱于红色的人，这种红色带给我的感觉还是非常舒服的。然而它在灯光变化下的效果让我感到惊艳。</p><p><img src="https://www.im6767.top/articlePlates/1588657659227.jpg"></p><p><img src="https://www.im6767.top/articlePlates/1588657670437.jpg"></p><p>嗯。直男评价：好看！</p><p>沿着五四广场走走，右边是海岸。当晚有风，雾大，海浪拍在岸边，一阵一阵的。心灵已经随着海风飘走啦。边聊边走，不知不觉就九点多了，温度也比较低，从广场出来，就踏上了归途。</p><h2>离别</h2><p>最后一天，天气反而变得很好。和朋友起个早，吃完早点向石老人浴场出发。今天才有了五一假期的样子，海边有很多人。沙滩一如既往的是小朋友的天下。我们光着脚沿着海边走，感受大海。海水还是有点凉的，稍微走向深水的地方会感觉到冻脚。我还是头一遭走在海滩上，感受水浪的拍打。每一步脚底被沙子完美贴合的感觉真的很棒。(图为两个人的两只脚)</p><p><img src="https://www.im6767.top/articlePlates/1588658488966.jpg"></p><p><img src="https://www.im6767.top/articlePlates/1588658564219.jpg"></p><p>可惜这是在青岛的最后一天。朋友让我改签，说实话我也想，这座城市阴雨天有阴雨天的美，晴天有晴天的特点，我还没有完全感受到。但是我终究是要回去的，或许留有一点遗憾，是为了未来更好的遇见吧。</p><p>还是因为疫情，总是因为疫情，官方建议比平时更早到达机场。我们在附近吃过饭后，就不得不说离别了。最终在下午五点半，我彻底离开了青岛。这一别，不知何时才能再相见。</p><h2>关于青岛</h2><p>我喜欢这座城市。青岛是有历史底蕴的。人们总喜欢拿历史的长短来评价一个城市的历史底蕴，但那些终归都是文字。历史是需要感受的，而不是简单地标在教科书上的年代尺表。一个城市的历史，首先就体现在它的建筑。固然拔地而起的高楼代表着一种经济实力和政治力量，但这种力量会产生距离感。红砖黄瓦的建筑将彼此拉近，时间的概念都会变得不一样。青岛有很多风格，有自然的山与海，有历史的砖与瓦，有现代的楼与桥，你总是能够从中找到不一样的东西，挖掘到城市保有的那一份浪漫。因为地形的缘故，青岛的道路修建都有点高低起伏，多弯回折。青岛是立体的，与那些经济非常发达的一线城市有一些距离，正式这些距离，让这座城市更加可爱。</p><h2>一个人，一座城</h2><p>我总是提起我的朋友，现在是时候说说她了。她是和我认识并且保持联系最长的一个人了，尽管中途可能断开过数个月。17年的时间。我和她在很多方面有很多的相似点，并且在某些方面足够了解彼此。(图摄于信号山观景台)</p><p><img src="https://www.im6767.top/articlePlates/1588660060201.jpg"></p><p>在之前很长一段时间内，我将这段友谊推向过一次毁灭，而且我很久之后才意识到。尽管这件事已经过去许久，但是一直是我内心的一个隐疾。我是一个不愿意也不敢承认错误的人，倒不是我不知道自己犯了错，而是我害怕错误带来的后果，所以事实上是我的错误，但是我还没有真正的道歉。</p><p>在社交软件上的联系和面对真人是有很大差距的。自从大学之后就没有机会再碰面了，或者说很多机会都被自己错过了。我起初对这次旅行一直怀有心悸，觉得不是一次明智的选择。但是最后我很庆幸自己做出的选择。多年没见，还是能够聊得很投机。</p><p>两个人都是独自生活在一个算不上陌生但又没那么熟悉的城市，都不太找得到挚友，反倒是都喜欢活在过去。都能把内心最深处的东西拿出来给对方分享。</p><p>我总是说，社会中最令人着迷的东西就是relationship，这也是最有价值的东西。因为她，我有幸认识了青岛。</p><p>很多人会持有一种固有的思维模式去认知异性之间的关系，而这恰恰会看不到一些关系中微妙的阶段，那种既不属于这，也不属于那的过程。</p><p>文章最后，愿我这位青岛的挚友，能够一切顺利，一切顺利地，完成自己的梦想。</p><p><br></p><p><br></p>',46)]))}const Mc=A(Oc,[["render",Rc]]),Vc=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ic,default:Mc},Symbol.toStringTag,{value:"Module"})),$c=JSON.parse('{"title":"Chrome一个关于setTimeout的BUG","description":"","frontmatter":{"title":"Chrome一个关于setTimeout的BUG","summary":"在工作中，发现一段原本正常工作的代码执行顺序变得奇怪，和自己对于代码的理解认知相冲突。在排除一切代码逻辑错误的可能性后，不得不让人怀疑，这是一个Chrome浏览器的BUG。","date":"2021-09-16T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Chrome一个关于setTimeout的BUG.md","filePath":"content/blog/Chrome一个关于setTimeout的BUG.md"}'),Lc={name:"content/blog/Chrome一个关于setTimeout的BUG.md"};function Hc(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h3>起因</h3><p>问题是从浏览器版本升级开始的。由于公司使用的是基于chromium内核构建的客户端程序，所以一直以来使用的内核都是固定的。随着开发的继续，之前的版本内核显然显得有点古老，为了适应新的功能，进行了一次版本升级，将内核版本更新到9x版本。但是更新后发现，某些代码运行不正常——在之前的版本内核是正常的。</p><h3>问题</h3><p>原本的代码构建相当复杂，里面包含很多的setTimeout，在经过反复的问题复现后，我们得到了一个简化版本的测试代码：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;before1&quot;</span>);
setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;start&quot;</span>)
}, <span class="hljs-number">1</span>)
<p><span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;set 0&quot;</span>);
setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;0&quot;</span>)
}, <span class="hljs-number">0</span>);</p>
<p><span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;set 1&quot;</span>);
setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;1&quot;</span>);
}, <span class="hljs-number">1</span>);</p>
</pre><p>我们从理论上分析一下正确的结果：</p><p>同步代码执行，异步代码再执行，所以结果是：</p><blockquote>before1</blockquote><blockquote>set 0</blockquote><blockquote>set 1</blockquote><blockquote>0</blockquote><blockquote>start</blockquote><blockquote>1</blockquote><p>前三个执行顺序没有异议，执行异步代码时，定时为0的先执行，start和1的console语句代码由于延时都为1，所以依次执行，故顺序为0 start 1。</p><p>当然这不是唯一的答案，顺序还可能是：</p><blockquote>before1</blockquote><blockquote>set 0</blockquote><blockquote>set 1</blockquote><blockquote>start</blockquote><blockquote>0</blockquote><blockquote>1</blockquote><p>这个也很容易理解：如果同步代码执行时间略长，导致三个定时器任务都已经到达执行时间，那么就按照顺序执行，也就是start 0 1。</p><p>如果你对以上结果不理解，那么说明关于setTimeout，你的认识非常有限。</p><p>如果你使用的是Chrome浏览器，你完全可以运行这段代码试试。你可以写入html文件，然后不断地刷新页面，观察输出结果，你会发现，输出结果可能是不同的，如下两张图所示：</p><p><img src="https://www.im6767.top/articlePlates/1631800833845.png"></p><p><img src="https://www.im6767.top/articlePlates/1631800848083.png"></p><p>可以看到，出现了start 0 1和start 1 0两种情况。</p><p>为什么会出现1 0？这种情况应当永远不会发生：我们知道，从事件循环来讲，任务是一个队列结构，保持着严格的先进先出，如果二者在异步任务执行时都已经到达执行时间，那么按照先进先出的原则，0肯定先于1进行打印。如果同步任务执行的很快，执行异步任务时0已经到达时间，而1仍然没有到达时间，0肯定也先于1进行打印。1 0的顺序是永远不应该发生的，但是很显然，它发生了。</p><h3>排查</h3><p>这个问题的排查显得有点无从下手。开始时我以为是事件循环并不完全按照队列的方式执行，因为很显然后进入队列的代码先执行了，于是乎翻看了标准文档，发现文档中明确指明，事件是按照队列先进先出执行的，所以是这里的问题可能性比较小。</p><p>然后想到当setTimeout嵌套过深的时候（5层），如果时间小于4ms，会将时间置为4ms，可能是因为这个影响了代码执行时间，但是得到以上的测试代码后，这个可能性就被排除了：我们的测试代码汇总没有任何的定时器嵌套。</p><p>问题变得很棘手。</p><p>排除我所能想到的所有可能之后，不得不开始怀疑这可能是一个浏览器内核的问题。我意识到在旧版的内核中，代码始终工作正常，但在新版本中出现了问题，所以肯定是从某个版本开始，出现了这个问题。通过不断地寻找，尝试各个版本的chrome，最终发现86版本之前，运行结果总是正常的，87版本开始就会出现问题，所以基本可以确定，这基本是一个浏览器问题。</p><h3>寻找答案</h3><p>发现这可能是一个浏览器的问题后，我尝试通过Chrome官方渠道寻找答案。在bug提交的相关网站，我进行了问题描述与提交，并且上传了自己的测试用例：</p><p><img src="https://www.im6767.top/articlePlates/1631802681208.jpg"></p><p>请无视我的渣英语，语言的组织还是花费了不少时间。</p><p>让我感到意外的是，发出贴三分钟后，就有开发人员对问题进行了分类，将我的提出的问题贴上了对应地标签。</p><h3>我想试试</h3><p>笔者有一个90版本的客户端与其源码，有了之前排查mouseenter和mouseleave事件问题的经验，我想尝试自己从源码中寻找答案。打开并且运行项目，进行代码debug追踪，但是最终并没有得到问题所在。一方面是chrome的代码体系太过庞大了，再者笔者的C++能力实在有限，面对这些代码也感到无能为力。但是在这个过程中，了解到了setTimeout的内部实现原理和一些实现细节，例如嵌套过深的4ms延时处理，事件循环的内部处理（一个没有跳出条件的for循环不断地处理任务），setTimeout添加的函数是如何被解析执行的等。虽然没有得到自己想要的答案，但仍旧有一些意料之外的收获。</p><h3>得到答案</h3><p>幸运的是，我很快就得到了官方人员的正式回复：</p><p><img src="https://www.im6767.top/articlePlates/1631876894387.png"></p><p>哈，这确实是一个问题，已经被采纳了，相关开发人员开始着手解决了，期待新的版本将其修复。</p><p><br></p><p><strong>2021-09-18更新</strong></p><p>又有新的开发者进行了回复，对问题进行了确认，看来影响面还有一点点大。告知了我是因为修复其他问题引起的，并给出了对应问题的id，简要说明了一下他的测试用例为什么没有覆盖到这种情况。</p><p><img src="https://www.im6767.top/articlePlates/1631953476614.png"></p><p><img src="https://www.im6767.top/articlePlates/1631953530455.png"></p><p>我觉得这个工作效率真的是很高了，比较羡慕这种开发节奏和状态，重视每个问题，而且有耐心说明问题的缘由。</p><p><br></p><p><strong>2021-11-03更新</strong></p><p>已经修复并进入测试阶段了，在97版本的发布中将会更新此问题</p><p><img src="https://www.im6767.top/articlePlates/1635925547210.png"></p><h3>恼人的问题</h3><p>这是一个相当恼人的问题，因为当我们的代码建立在别人的工具上(Chrome)时，这意味着你必须无条件的信任底层构建者的代码，如果其中某一个环节出现问题，将会对自己造成很大的麻烦。一开始我始终认为我们的代码是有问题的，于是不断地排查和重试问题，直到自己排除了知识范围内的所有情况。这个问题花费了大量时间，才得到了正确答案。有的时候我完全对此表示怀疑：这真的值得吗？为了一个看起来并不那么&quot;重要&quot;的问题，浪费了自己大量的私人时间。直到问题被修复后，这一切的努力似乎都又没有了意义。</p>`,56)]))}const zc=A(Lc,[["render",Hc]]),Fc=Object.freeze(Object.defineProperty({__proto__:null,__pageData:$c,default:zc},Symbol.toStringTag,{value:"Module"})),Jc=JSON.parse('{"title":"Echarts之dataset","description":"","frontmatter":{"title":"Echarts之dataset","summary":"在接触到数据可视化方面的相关工作时，通常会使用图表库，而echart作为流行的可视化图表库提供了丰富和图表支持，并且在开源协议之下体现出其出色的功能完备性和性能优势。在访问echarts官网中给出示例时，我们可以看到常见的示例中，通常将数据处理在series属性之中。尽管series - xA...","date":"2024-03-11T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Echarts之dataset.md","filePath":"content/blog/Echarts之dataset.md"}'),Gc={name:"content/blog/Echarts之dataset.md"};function Wc(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<p>在接触到数据可视化方面的相关工作时，通常会使用图表库，而echart作为流行的可视化图表库提供了丰富和图表支持，并且在开源协议之下体现出其出色的功能完备性和性能优势。</p><p>在访问echarts官网中给出示例时，我们可以看到常见的示例中，通常将数据处理在series属性之中。尽管series - xAxis - yAxis的分别配置符合配置图表的思维逻辑，但是这意味着需要将数据进行转化。通常我们使用数据时，更习惯以行/列的形式表达。</p><p>自echart 4.x版本之后，echart支持了dataset属性直接进行数据集的设置。这使得数据可以被单独管理，而且更符合数据开发者的的数据直觉。并且利用dataset，可以将图表的样式和数据相对分开，这对于需要进行图表转化相关操作变得更简单。</p><h2 id="dataset" tabindex="-1">Dataset <a class="header-anchor" href="#dataset" aria-label="Permalink to &quot;Dataset&quot;">​</a></h2><p>通常我们可以理解为，dataset就是统一管理数据的属性集合。例如我们用一个最简单的表格数据为例：</p><p><img src="https://im6767.top/yuque/0/2024/png/23007887/1717551086366-09dd409f-1070-4522-bec3-b33784979077.png" alt=""></p><p>如果我们使用可能更为常用的series进行数据管理，我们需要将数据处理成如下所示</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">option = {
  <span class="hljs-attr">xAxis</span>: {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;category&#39;</span>,
    <span class="hljs-attr">data</span>: [<span class="hljs-string">&#39;Tom&#39;</span>, <span class="hljs-string">&#39;Jack&#39;</span>, <span class="hljs-string">&#39;Bob&#39;</span>]
  },
  <span class="hljs-attr">yAxis</span>: {},
  <span class="hljs-attr">series</span>: [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2020&#39;</span>,
      <span class="hljs-attr">data</span>: [<span class="hljs-number">55</span>, <span class="hljs-number">78</span>, <span class="hljs-number">27</span>]
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2021&#39;</span>,
      <span class="hljs-attr">data</span>: [<span class="hljs-number">74</span>, <span class="hljs-number">71</span>, <span class="hljs-number">45</span>]
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2022&#39;</span>,
      <span class="hljs-attr">data</span>: [<span class="hljs-number">89</span>, <span class="hljs-number">40</span>, <span class="hljs-number">74</span>]
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2023&#39;</span>,
      <span class="hljs-attr">data</span>: [<span class="hljs-number">60</span>, <span class="hljs-number">96</span>, <span class="hljs-number">91</span>]
    }
  ]
};
</code></pre></div><p>可以看到数据的处理其实是有点&quot;繁琐&quot;的，我们需要将一组列数据在一个数组中体现，直观的会认为有一种隐式的&quot;行列转化&quot;逻辑包含其中。</p><p>相反，如果使用dataset看起来就和原数据符合的多：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">{
  <span class="hljs-comment">// other property</span>
  <span class="hljs-attr">xAxis</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;category&#39;</span> },
  <span class="hljs-comment">// 声明一个 Y 轴，数值轴。</span>
  <span class="hljs-attr">yAxis</span>: {},
  <span class="hljs-comment">// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。</span>
  <span class="hljs-attr">series</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }, { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }, { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }],
    <span class="hljs-attr">dataset</span>: {
    <span class="hljs-attr">source</span>: [
      [<span class="hljs-string">&#39;year&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>, <span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;2022&#39;</span>, <span class="hljs-string">&#39;2023&#39;</span>], <span class="hljs-comment">// 可以看做标题行</span>
      [<span class="hljs-string">&#39;Tom&#39;</span>, <span class="hljs-number">55</span>, <span class="hljs-number">74</span>, <span class="hljs-number">89</span>, <span class="hljs-number">60</span>],
      [<span class="hljs-string">&#39;Jack&#39;</span>, <span class="hljs-number">78</span>, <span class="hljs-number">71</span>, <span class="hljs-number">40</span>, <span class="hljs-number">96</span>],
      [<span class="hljs-string">&#39;Bob&#39;</span>, <span class="hljs-number">27</span>,	<span class="hljs-number">45</span>,	<span class="hljs-number">74</span>,	<span class="hljs-number">91</span>],
    ]
  }
}
</code></pre></div><p>可以看到，这类似于将series中的data部分统一交给dataset来管理，series只负责处理和数据不相干的部分即可。</p><p>当然也可以设置为对象的形式，不过此时我们要添加一个dimensions属性，因为对象的情况下，每个键都是同&quot;等级&quot;的，所以无法确立x和y轴。确立了dimensions之后，第一个字段将被作为x轴，后续作为y轴，完成图表关系映射。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">{
  <span class="hljs-comment">// other property</span>
  <span class="hljs-attr">xAxis</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;category&#39;</span> },
  <span class="hljs-comment">// 声明一个 Y 轴，数值轴。</span>
  <span class="hljs-attr">yAxis</span>: {},
  <span class="hljs-comment">// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。</span>
  <span class="hljs-attr">series</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }, { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }, { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span> }],
    <span class="hljs-attr">dataset</span>: {
      <span class="hljs-attr">dimensions</span>: [<span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>, <span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;2022&#39;</span>, <span class="hljs-string">&#39;2023&#39;</span>],
      <span class="hljs-attr">source</span>: [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">55</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">74</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">89</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">60</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">78</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">71</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">40</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">96</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Bob&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">27</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">45</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">74</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">91</span> }
    ]
  }
}
</code></pre></div><h2 id="映射" tabindex="-1">映射 <a class="header-anchor" href="#映射" aria-label="Permalink to &quot;映射&quot;">​</a></h2><p>上面我们提到了dimensions属性，是为了确立映射关系，这其实是dataset方式设置数据的一个关键概念。因为单纯的数据无法形成图，此时就要想办法去建立x和y轴的映射关系。除了dimensions属性，还可以通过series.encode进行处理。</p><p>encode的作用是指定哪一列可以被用来当做什么，一般会有三个属性:x, y, tooltip。可以是一个或者多个维度。例如上文中通过对象填入的数据，如果不写dimensions，使用series.encode则可以表示为:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">{
  <span class="hljs-comment">// other property</span>
  <span class="hljs-attr">xAxis</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;category&#39;</span> },
  <span class="hljs-comment">// 声明一个 Y 轴，数值轴。</span>
  <span class="hljs-attr">yAxis</span>: {},
  <span class="hljs-comment">// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。</span>
  <span class="hljs-attr">series</span>: [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,<span class="hljs-attr">encode</span>: { <span class="hljs-attr">x</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">y</span>: <span class="hljs-string">&#39;2020&#39;</span> } },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,<span class="hljs-attr">encode</span>: { <span class="hljs-attr">x</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">y</span>: <span class="hljs-string">&#39;2021&#39;</span> } },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,<span class="hljs-attr">encode</span>: { <span class="hljs-attr">x</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">y</span>: <span class="hljs-string">&#39;2022&#39;</span> } },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;bar&#39;</span>,<span class="hljs-attr">encode</span>: { <span class="hljs-attr">x</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">y</span>: <span class="hljs-string">&#39;2023&#39;</span> } }
  ],
    <span class="hljs-attr">dataset</span>: {
    <span class="hljs-attr">source</span>: [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">55</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">74</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">89</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">60</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">78</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">71</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">40</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">96</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Bob&#39;</span>, <span class="hljs-string">&#39;2020&#39;</span>: <span class="hljs-number">27</span>, <span class="hljs-string">&#39;2021&#39;</span>: <span class="hljs-number">45</span>, <span class="hljs-string">&#39;2022&#39;</span>: <span class="hljs-number">74</span>, <span class="hljs-string">&#39;2023&#39;</span>: <span class="hljs-number">91</span> }
    ]
  }
}
</code></pre></div><p>在series中声明4个系列的数据的x轴和y轴分别的映射关系，生成最终的图表。同样地，可以在encode中声明tooltip的内容。</p><h2 id="处理函数" tabindex="-1">处理函数 <a class="header-anchor" href="#处理函数" aria-label="Permalink to &quot;处理函数&quot;">​</a></h2><p>统一维护数据另一个好处在于，对于一些fomatter的实现，是能够提供诸多好处的。举例来讲，假如我想要在tooltip中展示的内容中包含当前柱的值，还想要包含相较于其他年份的&quot;变化量&quot;。如果我们使用通常的series中设置数据的方式，其tooltip.formatter中的第一个参数格式如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;componentType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;series&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;componentSubType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;bar&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;componentIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;seriesType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;bar&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;seriesIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;seriesId&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;\\u00002020\\u00000&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;seriesName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2020&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Tom&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;dataIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;data&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">55</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">55</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;color&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;#5470c6&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;dimensionNames&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-string">&quot;x&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;y&quot;</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;encode&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;x&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
      <span class="hljs-number">0</span>
    <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;y&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
      <span class="hljs-number">1</span>
    <span class="hljs-punctuation">]</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;$vars&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-string">&quot;seriesName&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;name&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;marker&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;span style=\\&quot;display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\\&quot;&gt;&lt;/span&gt;&quot;</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>可以看到data和value仅包含当前的数值，我们据此无法得到更多信息，这需要我们提前进行数据处理，或者在函数中去对其他数据进行获取和计算。</p><p>但是如果我们在dataset中进行数据维护，则参数如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;componentType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;series&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;componentSubType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;bar&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;componentIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;seriesType&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;bar&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;seriesIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;seriesId&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;\\u0000series\\u00000\\u00000&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;seriesName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;series\\u00000&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Tom&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;dataIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;data&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;2020&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">55</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2021&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">74</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2022&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">89</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2023&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">60</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Tom&quot;</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;2020&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">55</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2021&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">74</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2022&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">89</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;2023&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">60</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Tom&quot;</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;color&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;#5470c6&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;dimensionNames&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
        <span class="hljs-string">&quot;2020&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;2021&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;2022&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;2023&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;name&quot;</span>
    <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;encode&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;y&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
            <span class="hljs-number">0</span>
        <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;x&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
            <span class="hljs-number">4</span>
        <span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;$vars&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
        <span class="hljs-string">&quot;seriesName&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;name&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;marker&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;span style=\\&quot;display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\\&quot;&gt;&lt;/span&gt;&quot;</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>我们可以看到data和value包含了完整的数据值，我们可以直接在其中挑选数据进行运算。</p><p>这不仅仅在tooltip中可以方便进行处理，在label等处理中也可以获得方便。</p><h2 id="数据处理与转化" tabindex="-1">数据处理与转化 <a class="header-anchor" href="#数据处理与转化" aria-label="Permalink to &quot;数据处理与转化&quot;">​</a></h2><p>数据处理与转化部分的内容，笔者处理的相对较少，这一部分特指在Echart 5.x版本中新增的，基于dataset的数据处理方式。日常中还是更习惯于自己构建代码进行数据预处理。</p>`,29)]))}const Uc=A(Gc,[["render",Wc]]),Bc=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Jc,default:Uc},Symbol.toStringTag,{value:"Module"})),Yc=JSON.parse('{"title":"Event and Event Loop","description":"","frontmatter":{"title":"Event and Event Loop","summary":"最近有幸和公司面试官一起参加了几场公司的前端招聘面试，还是颇有些感触。一个公司的池塘里待得太久，难免忘了自己是多小一条鱼。有校招时候的大牛新人，也有社招的老练开发。当然庆幸的是我是坐在桌子这头的人。有些问题久了，也发现自己了解的似乎也有那么点缺陷，就比如事件循环，借此机会，也再来详详细细谈谈这个Event Loop。","date":"2020-10-28T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Event and Event Loop.md","filePath":"content/blog/Event and Event Loop.md"}'),Xc={name:"content/blog/Event and Event Loop.md"};function Zc(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>闲言碎语</h2><p>我写文章开头总是喜欢写点废话，那是因为开篇真的很难，就像介绍事件循环机制，到底要从哪里开始。我们不妨先提出这样一个问题：为什么要事件循环？它到底是要解决什么问题？</p><p>要弄明白这个问题，似乎要从javascript说起。javascript是单线程的，这条重要的定理是每个前端开发者再熟悉不过的。你多半会感谢JS的单线程——这意味着你不必过多去关注资源竞争和数据同步的问题。假设这样一种场景，如果两个线程同时对一个数据进行操作，例如一个线程表示添加一个DOM元素，一个线程要删除这个DOM元素，会发生什么？很幸运我们不用去面对这样的场景。但是单线程带来的局限性也很致命——一个线程执行代码，势必效率很低，这意味着阻塞很容易发生，就像只有一条马路，但是不同类型的车辆要通过，这些车辆包括用户交互，脚本，渲染，网络请求等。</p><p>但是很显然，javascript很少让你觉得发生了阻塞(当然，当你代码构建有问题的时候还是会发生)，那么javascript是如何使其成为非阻塞的？这就是本文要略微深入探讨的内容：Event Loop，事件循环。</p><blockquote>To coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use <strong>event loops</strong> as described in this section. Each agent has an associated <strong>event loop</strong>, which is unique to that agent.（引用来自<a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" rel="noopener noreferrer" target="_blank">HTML标准文档</a>）</blockquote><h2>从执行栈开始</h2><p>在本节中，我们假设已经具有了基本的执行上下文的概念。通常JS会有三种类型的执行上下文：</p><ol><li>全局执行上下文。在浏览器环境中是window对象。</li><li>函数执行上下文。每当JS的函数被调用时，创建一个执行上下文。</li><li>不怎么常见的eval执行上下文。eval方法会创建特殊的执行上下文。eval平时用的也很少，这里不多关注。</li></ol><p>执行栈，执行两个字就代表上面的执行上下文，栈就是非常熟悉的一种数据结构了。当JS第一次遇到要执行的JS代码时，首先会创建一个全局执行上下文，之后每遇到一个函数调用，就压入一个函数执行上下文。JS引擎执行栈顶的函数，执行完毕，就将这个执行上下文弹出栈。有点抽象？不妨举个例子看看过程。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testA</span>() </span>{
    testB();
}
<p><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">TestB</span>()</span>{
testC();
}</p>
<p><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testC</span>() </span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;I am testC&quot;</span>);
}</p>
<p>testA();</p>
</pre><p>我们以上述代码为例，给出下图执行栈示意图</p><p><img src="https://www.im6767.top/articlePlates/1603894867647.jpg"></p><p>关于执行栈有很多相关联的概念，例如作用域，执行上下文，变量等，他们不是本文关注的重点。为什么事件循环要从执行栈开始讲起？因为上述逻辑就是任务的执行过程。</p><h2>任务队列</h2><p>在JS的代码编程中，我们通常将任务分为同步任务和异步任务。我们再讲的通俗一些，同步任务就是需要立即执行的任务，异步任务就是&quot;待会&quot;执行的任务。思考一下，任何一个任务，都可以划归为同步任务或者异步任务，不存在既不属于同步又不属于异步的任务。同步任务通过执行栈就可以处理完毕，异步任务则就需要任务队列。当执行过程中遇到异步任务时，异步任务会被挂起，等到异步任务返回结果时，将结果加入异步队列。等到执行栈中的代码执行完毕后，再去将异步队列中的任务依次压入执行栈执行，执行完毕后再转向同步任务，然后再转向异步任务······。这个过程就被称作事件循环，整个过程大致如图：</p><p><img src="https://www.im6767.top/articlePlates/1603972592838.png"></p><p>尽管这张图几乎出现在每一篇关于事件循环的相关文章里，但是它确实简单明了的表达了JS代码执行的整个过程。关于图中列举的异步操作显得有点不全面，特别是Promise的出现，成为异步的学习不可绕过的一个部分。如果我们再去深入询问，那异步任务的执行顺序又是什么样的？上面的划分显然显然过于笼统了，我们需要再深入一点点。</p><h2>宏任务和微任务</h2><p>尽管我们说，异步任务是被加入队列执行的，但是异步任务之前也存在优先级关系。这里，我们将任务重新划分一下，分为宏任务（macro task）和微任务（micro task）。有些文章介绍会说“将异步任务划分为宏任务和微任务”，个人觉得这样的理解是不全面的，因为很显然script整个代码块也是一个宏任务，但是将其划分为异步任务多少有点勉强。</p><p>常见的宏任务包括：script（整个代码块），setTimeout，setInterval，setImmediate(nodejs定义的)，I/O，UI Render。</p><p>常见的微任务：process.nextTick(nodejs定义的)，Promise，Object.observe（proxy的前身，现在已经被废弃了），MutationObserver（DOM3标准）。</p><p>这个角度区分，我们可以将setTimout或者Promise之类的称之为&quot;任务分发器&quot;。上面提到的事件循环，每一次循环称之为一个tick。tick是什么时候开始的呢？在遇到一个script（代码块）就开始了。在第一次执行的时候，JS引擎将整个script作为一个宏任务开始执行，执行完毕后，检查是否存在微任务，如果存在，就从微任务队列中读取执行所有的微任务，再读取宏任务队列中的任务，然后再执行微任务队列中的任务，循环往复。简而言之，JS就是的执行顺序就是从宏任务到微任务的过程。我们用一个示意图大致表示上述过程。</p><p><img src="https://www.im6767.top/articlePlates/1603980894482.png"></p><p>整个流程是不是很简单呢？实际上事件循环的理解并不复杂，特别是当你已经对JS有了一定的理解，写过一定的JS代码后，这些概念性东西的理解不过是加强了对平日司空见惯的东西的系统理解。有些前端学习者，不大能够完全理解异步这个概念，导致代码构建中总是被代码执行顺序弄混，写出很多很容易规避的问题代码。接下来我们以几个实例具体看看和感受一下事件循环。</p><h2>面试问题</h2><p>你如果问我，事件循环最大的用处是什么，我第一个想到的或许就是可以用来答题。我向来比较反感手写代码和看代码说答案的问题，搭个环境跑一下的事儿何必非要纸笔伺候，特别是自己的字还不大好看。笔试面试，很多都会考代码执行的问题，看看你对异步的了解有多深入。例如写出下面这段代码执行后的打印结果。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">0</span>)</p>
<p><span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve)</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
    resolve();
}).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
});</p>
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">10</span>);</p>
<p><span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);</p>
</pre><p>这样的代码说实话意义不大，除了真的测试一下你对于异步的理解，毫无用处。但是没有办法，这种情况下我们也只能冷静分析，沉着判断了。仔细想想上面讲过的事件循环，依次分析。刚开始时整个代码块是作为一个宏任务执行的，所以首先肯定打印1，然后遇到了一个setTimeout，放进宏任务队列里，接着又执行到了promise，注意，这里promise注册的任务才会被放入微任务队列中。所以构造函数传入的方法是立即执行的，而.then才会注册。所以打印3，接着又遇到一个setTimeout，则再次放入宏任务队列，最后遇到console语句，打印6。这个时候宏任务执行完了，按照“宏任务执行完检查微任务，如果有则执行微任务”的原则，我们开始检查微任务队列，promise注册过一个回调，则此时微任务队列中有.then注册的任务，所以执行，打印4，此时微任务队列执行完毕了，检查宏任务队列，两个setTimeout注册过宏任务，则按照队列先进先出的特点，依次执行，打印2，5。所以最终的打印顺序应该是1,3,6,4,2,5。如果你怀疑结果，可以将代码贴入控制台亲自试一试。</p><p>当然正如文章介绍中说的那样，最近的我是坐在面试桌这边的，我在想我能够从这个题目的回答中获得什么信息？我认为回答可能有三种结果：第一种回答正确的，他多少对于事件循环有一定的了解，那么我可能会进一步问一个问题：这段代码到整个结果输出完毕，是不是只执行了一次事件循环？来验证他是不是真的有对事件循环的基本理解。第二种，如果回答1,6,3,4,2,5的，那我多半猜它不大会用Promise，起码不够熟练，不大明白Promise从创建到回调执行，到各种状态的转化发生了什么，那么可能会为了确认我的看法，问一些Promise相关的问题。第三种回答其它答案的，我或许会问问为什么，来确认下他有没有意识到这个问题到底想要确认他哪一方面的能力。</p><p>当然作为笔试面试题目，总是有一些出人意料的东西，比如我们稍微将上面这个题做个变种：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">10</span>)</p>
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">0</span>);</p>
<p><span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve)</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
}).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
});</p>
<p><span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);</p>
</pre><p>怎么样，现在答案是多少？我们同样将这段代码贴到控制台跑一跑，得到的结果是：1,3,6,5,2。是不是和你想的一样呢？我们和上面的问题做一比较，二者之间的差异在哪里？除了代码顺序有调整以外，实际上就是我们删除去了promise中的resolve()。我讨厌笔面试做这种题的原因之一就是，考点仿佛从事件循环机制，变成了&quot;眼神好使不好使&quot;。每当见到越是简单地面试题，我总是本能怀疑自己，这个问题可能没这么简单。当然从另一个方面来讲，细心也是一项重要的工作能力，它意味着给自己和别人带来更少的麻烦。这个问题和上一个问题结合，多少能够看出一个人对事件循环和promise的了解程度，是一知半解还是有理有据。当然如果回答个八九不离十，那不妨也问问为什么，别因为一个没看清，给别人贴上“不懂”的标签。</p><h2>手写Promise</h2><p>现在前端行业对技术人员的素质要求也越来越高，对前端开发者的底层代码理解和实现能力也越来越关注，所以就要求在关注知识面的广度的时候，也要注重深度。对于事件循环的一个常考点来讲，就是和代码结合，看你能不能实现一些常见的异步场景，例如，如何自己动手实现一个Promise。手动封装实现Promise并不复杂，且有很多库可以参考，这里在本文不详细叙述，不过在封装的时候，不仅应该处理异步的逻辑实现，还应该考虑一下微任务和宏任务如何区分，实现出最接近Promise的Promise。</p><h2>告一段落</h2><p>上面就是关于事件循环的了解，准确的说是浏览器中的事件循环的了解。在提到宏、微任务过程中，我们还提到过process.nextTick等一些nodejs中的事件循环机制。既然成文讲述事件循环，那不妨顺带也来了解了解nodejs中的事件循环，避免以后还要单独写文章的麻烦。关于nodejs中的事件循环将是下面部分的主题内容，不过在此之前，为了确认浏览器中的事件循环你已经足够理解，不妨思考下下面这种情况下，通过事件循环分析，答案应该是多少？</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> now = (<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()).valueOf();
    <span class="hljs-comment">//实现一个休眠x秒的方法</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sleep</span>(<span class="hljs-params">second</span>) </span>{
    <span class="hljs-keyword">while</span> ((<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()).valueOf() - now &lt; second * <span class="hljs-number">1000</span>) {
        <span class="hljs-keyword">continue</span>;
    };
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
<span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">0</span>);</p>
<p><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>)=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
    resolve();
}).then(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
   });</p>
<p>sleep(<span class="hljs-number">10</span>);
<span class="hljs-comment">//页面上有一个按钮，在sleep执行期间点击按钮</span>
<span class="hljs-comment"><a href="//xn--console-f43ki1au4ae05dru5abzb207j9zzcxomx19aj631b.log" target="_blank" rel="noreferrer">//\uFEFF按钮的事件回调中执行console.log</a>(&quot;btn click&quot;)</span></p>
<p>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">10</span>);</p>
<p><span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);</p>
</pre><p>试问最后的打印结果是多少？不妨自己写个代码测试一下，来看看自己是不是真正的了解了上述内容。</p><h2>nodejs中的事件循环</h2><p>在开始之前，也先聊两句废话。我不大喜欢nodejs，或者说把nodejs和前端牢牢捆绑在一起这种做法。开发自由应当是多元化的。其实模块化开发学习初期，我就一直有一个疑问：套娃式的node_modules依赖关系，难道没有人觉得有任何问题吗？有数据统计过，Javascript项目平均有377个依赖关系，Java项目则有43个，python项目有16个。依赖越多意味着你必须相信的人就越多，而他们也必须保证自己的项目足够的strong，能够支撑起其他项目。这就像是你在修建一幢大楼的377层，而你却不知道或者鲜有了解377层之下的细节，能做的就是祷告和信任他们，这座大楼不会因为自己而崩塌。技术基本都有可替代性，所以这里不大会去详细的探讨nodejs的事件循环原理，如果你正在使用nodejs（尽管现在绝大多数前端都离不开这个工具），处于一个认知学习的阶段，那下面内容会带你初步窥探一下node的事件循环。请理解：笔者对于node的理解本身也极其有限，所描述的内容和叙述的也处于自我认知范围内。</p><h2>libuv</h2><p>提到nodejs的事件循环，几乎都会提到libuv，并且大家会说明，nodejs的事件循环是通过libuv库实现的，那么如何理解libuv这个库呢？</p><p>我们知道，nodejs是可以在不同平台和系统使用的，如果要实现跨平台，那么要解决的一个重大问题就是，如何处理不同平台不同系统之间的差异？libuv就是用来干这个的。它提供了跨平台的文件I/O和线程功能，作为一个抽象层，他对上层，也就是nodejs实现统一接口暴露，对下层，也就是操作系统实现差异处理。因此libuv为nodejs提供了运行所需的一切接口，其中就包括事件队列机制。libuv的诞生，就是为nodejs而设计的。</p><h2>事件队列</h2><p>首先需要明确：nodejs中的事件循环机制的表现和浏览器中的大致相同，不过因为nodejs所做的事情要比单纯的浏览器中多一些，所以会有一些增强。</p><p>在nodejs中，有多个事件队列存在，他们分别处理不同类型的事件。通常将nodejs中的事件分为以下4种：</p><ul><li><strong>计时器队列。</strong>使用setTimeout和setInterval分发的任务将会存放在此队列。</li><li><strong>I/O事件队列。</strong>完成的I/O事件。</li><li><strong>立即队列。</strong>使用setImmediate分发的任务。</li><li><strong>关闭操作队列</strong>。使用任何一个close事件处理器。</li></ul><p>除此之外，还有一些中间队列，不过这里不再列举。</p><h2>事件循环阶段</h2><p>先给出libuv事件循环的一个阶段模型图：</p><p><img src="https://www.im6767.top/articlePlates/1604209838822.png"></p><p>从上文图中，我们可以看出时间循环的顺序：代码进入，进入轮训阶段（poll），然后进入检查阶段（check），再进入关闭事件回调阶段（close callbacks），计时器检测阶段（timers），再进入I/O事件回调阶段（I/O callbacks），然后进入闲置阶段（idle），再进入轮训阶段（poll）······</p><p>我们依次简单分析各个阶段：</p><h4>poll阶段</h4><p>V8引擎将代码传入libuv的时候，就进入poll阶段。poll阶段首先查看poll queue中有无事件，如果有则依次执行，如果queue为空，则检查有无setImmediate添加的回调，有就进入check阶段执行这些回调。<strong>特别注意，这里也会去检查有没有已经到期的timer，如果有会把这些回调放进计时器队列，然后循环进入timers阶段执行这些回调。</strong>这两个检查谁先执行呢？官方的说法是没有规定，所以不保证这两个的执行先后顺序，取决于代码运行时的环境。也就是说，不能保证setTimeout和setImmediate到底哪一个在前哪一个在后（有一种特殊情况下是保证的）。如果两个队列都是空的，那么事件循环就会停留在poll阶段，直到有I/O事件返回，再立即进入I/O callbacks阶段执行回调。看完这个阶段，有没有觉得有什么问题？如果我在poll里执行的任务很多很多，那事件循环不就会永远停留在这一个阶段？显然libuv的开发中也考虑到了这个问题，终止poll循环有两个条件，满足其一即可：1.所有的回调执行完毕。2.达到了设置的最大执行数。</p><h4>check阶段</h4><p>check阶段很容易记住，它的设计就是为了执行setImmediate方法添加的回调。当poll空闲，且立即队列不为空，就会进入该阶段。</p><h4>close阶段</h4><p>当某些连接被关闭时，close事件会被发送到关闭操作队列，从而执行。</p><h4>timers阶段</h4><p>这个阶段执行所有setTimeout或者setInterval设置，已经到期的回调。</p><h4>I/O callback阶段</h4><p>执行绝大部分I/O事件的回调，包括一些操作系统执行的回调。</p><p>通过以上处理，使得nodejs成为一个非阻塞平台。至此，简单的nodejs的事件循环的大致逻辑介绍就完毕了。更细节的，牵扯到setTimeout，setImmediate和process.nextTick差异不再进行叙述。</p><h2>对比一下</h2><p>以上，我们简单介绍了浏览器的事件循环机制，更简单地介绍了nodejs的事件循环机制，那么二者之间的差异是什么呢？</p><p>从浏览器的事件循环总结可以看出，浏览器中执行顺序是每当宏任务执行完毕后，检查执行微任务，就像图中表示：</p><p><img src="https://www.im6767.top/articlePlates/1604211688436.png"></p><p>而nodejs中则是这样：</p><p><img src="https://www.im6767.top/articlePlates/1604211930197.png"></p><p>还是比较容易理解的。</p><h2>尾声</h2><p>陆陆续续，本文也写到了最后，公司今年的校招也进入了尾声。怎么说呢，我觉得面试其实是一件蛮残忍的事情，自己也是从踏出校门，投递简历，笔试面试这个阶段走过来的，现在却某种程度上成了做决定的人。在对面试者给出评价的时候，我总是小心再小心，谨慎再谨慎，尽量给出一个中肯合理的评价。想想他们人生阶段目前的一个重大走向，很大一部分掌握在我的手中，难免有些害怕。但愿我没有做出我意料之外的错误决定吧。</p><p>面试虽说是在面试别人，但是我觉得也是在面试自己。看到自己和别人的差距，也是在鞭策自己，往更高的平台进发。</p><p><br></p>`,75)]))}const Qc=A(Xc,[["render",Zc]]),Kc=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Yc,default:Qc},Symbol.toStringTag,{value:"Module"})),sh=JSON.parse('{"title":"GraphQL: 从认知到实践","description":"","frontmatter":{"title":"GraphQL: 从认知到实践","summary":"Why GraphQLgraphQL对于很多开发者已经不陌生了，它是一种API查询语言。提到graphQL我们总会拿另一个开发者可能更为熟悉的API风格来进行比较：restful API。尽管可能也有很多开发者并没有更深入的理解过restful API的设计之初的一些约束和规则，但是我们将符合...","date":"2023-03-31T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/GraphQL: 从认知到实践.md","filePath":"content/blog/GraphQL: 从认知到实践.md"}'),nh={name:"content/blog/GraphQL: 从认知到实践.md"};function ah(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2 id="why-graphql" tabindex="-1">Why GraphQL <a class="header-anchor" href="#why-graphql" aria-label="Permalink to &quot;Why GraphQL&quot;">​</a></h2><p>graphQL对于很多开发者已经不陌生了，它是一种API查询语言。提到graphQL我们总会拿另一个开发者可能更为熟悉的API风格来进行比较：restful API。尽管可能也有很多开发者并没有更深入的理解过restful API的设计之初的一些约束和规则，但是我们将符合REST约束和规则的架构称之为restful架构。</p><p>restful中有一些很关键的设计理念。它将所有可能被引用的内容称之为&quot;资源&quot;，它的范围很广，可以使一个文件，也可以是一段数据；既然某个资源需要能够被引用，因此它就需要有一个唯一标识，来确认是这一个资源，这就是URI。事实上URI的设计应该具有可寻址，可自述，可直观关联等特征。也就是说我们尽量能够通过URI来表述这个资源的一些特征；既然资源能够被引用，我们也需要对资源进行一些操作，因此它应当是遵循统一接口原则的，因为restful在HTTP协议下实现最为广泛，所以使用标准的HTTP方法进行设计，例如GET，POST，PUT，DELETE等，通过不同的方法我们可以操作资源。</p><p>实际开发中却不怎么美好，从现在GET和POST请求一把梭的现状就可以看出来。PUT，DELETE之类的方法似乎并不常见，而且有些资源的定义是&quot;模糊&quot;的，很难将其很好的归为某一类资源，从而决定执行何种操作，选用何种方法。</p><p>另一个弊端在于，其无法很好的应对&quot;变更&quot;。事实上接口不总是一成不变的，我们需要从接口中获取到的字段也是需要变化的，每当进行改动时就要处理一下对应的一个接口，而且你很难从一个相对复杂的项目中确定接口被多少地方引用，需不需要同样进行改动等等......。特别是对前端来讲，所需要的数据被API严格限制，很难灵活扩展，当数据的粒度太大时可能无法满足需求，数据的粒度太小又会产生冗余。因此我们希望能有一种方式能够规避以上问题。</p><p>graphQL引入了一种思想，面向数据。本质上它是一种API查询语言，利用语言构建出所需数据的完整描述，后端根据描述返回所需数据，从而实现数据交互。</p><p>相较于其他类型的API风格，graphQL具有无法比拟的灵活性。</p><h2 id="使用graphql" tabindex="-1">使用GraphQL <a class="header-anchor" href="#使用graphql" aria-label="Permalink to &quot;使用GraphQL&quot;">​</a></h2><p>graphQL有很多功能插件可供使用，我们示例项目中使用graphql.js + koa-graphql + Koa2。另外， 我们需要一个数据库工具，项目中使用prisma。</p><p>安装好各依赖之后，我们创建一个Koa2路由，然后将路由地址设置为目标路径：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//路由定义</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Router</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;koa-router&quot;</span>;
<span class="hljs-keyword">import</span> { graphqlHTTP } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;koa-graphql&quot;</span>
<span class="hljs-keyword">import</span> prisma <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../db&#39;</span>;
<span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Router</span>();

router.<span class="hljs-title function_">all</span>(<span class="hljs-string">&#39;/graphql&#39;</span>, <span class="hljs-title function_">graphqlHTTP</span>({
  <span class="hljs-attr">schema</span>: schema,   <span class="hljs-comment">//your schema</span>
  <span class="hljs-attr">context</span>: prisma, <span class="hljs-comment">//your db tool</span>
  <span class="hljs-attr">graphiql</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">//help you to debug graphql</span>
}))
</code></pre></div><p>通过上文，我们将访问路径为/graphql，交由graphqlHTTP进行处理。graphiql是开启一个交互界面以便快速调试，在开发环境可设置为true，在生产环境设置为false。</p><p>schema是核心部分。schema是我们的接口定义，明确服务端有哪些字段可以使用，每个字段中包含哪些子字段等。在展示整个过程时，我们定义我们的数据，我们假设数据库有三个表，分别是log，plan，scope。每个scope数据中的数据，在plan中都有若干数据与之对应，同样地，每个plan中的数据都有若干log记录与之对应。</p><p>我们设计接口获取log信息，同时携带plan和scope信息，数据表的schema如下，这是使用prisma生成的：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//log表</span>
model log {
  id           <span class="hljs-title class_">Int</span>      <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  plan_id      <span class="hljs-title class_">Int</span>      
  status       <span class="hljs-title class_">String</span>   <span class="hljs-meta">@default</span>(<span class="hljs-string">&quot;init&quot;</span>) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
  created_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
}

<span class="hljs-comment">//plan表</span>
model plan {
  id              <span class="hljs-title class_">Int</span>       <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  shop_id         <span class="hljs-title class_">String</span>    <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
  scope_id        <span class="hljs-title class_">Int</span>
  created_time    <span class="hljs-title class_">DateTime</span>  <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time    <span class="hljs-title class_">DateTime</span>  <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
}

<span class="hljs-comment">//scope表</span>
model scope {
  id           <span class="hljs-title class_">Int</span>      <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  shop_id      <span class="hljs-title class_">Int</span>
  created_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  scope_from   <span class="hljs-title class_">String</span>?  <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
}
</code></pre></div><p>根据数据库的信息，我们设计我们期望获得的数据结构格式，他看起来大致如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">123</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;plan_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2917</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;success&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;plan&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2917</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;shop_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">275407697</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scope_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">11753</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scope&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    	<span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">11753</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;shop_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">275407697</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>接下来要做的，就是将我们实际想要获得的数据和graphql所需要的数据模型进行对应。</p><h2 id="编写schema" tabindex="-1">编写schema <a class="header-anchor" href="#编写schema" aria-label="Permalink to &quot;编写schema&quot;">​</a></h2><p>我们的schema格式的对象要从graphql中进行建立，首先我们要创建log的schema，如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { 
  <span class="hljs-title class_">GraphQLObjectType</span>, 
  <span class="hljs-title class_">GraphQLString</span>, 
  <span class="hljs-title class_">GraphQLInt</span>, 
  <span class="hljs-title class_">GraphQLList</span>, 
  <span class="hljs-title class_">GraphQLSchema</span>, 
  <span class="hljs-title class_">GraphQLFloat</span>, 
  <span class="hljs-title class_">GraphQLUnionType</span>, 
  <span class="hljs-title class_">GraphQLID</span> 
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;graphql&quot;</span>;

<span class="hljs-keyword">const</span> logSchema = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Logs&quot;</span>,
  <span class="hljs-attr">fields</span>: {
    <span class="hljs-attr">id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">plan_id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">status</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLString</span>
    },
    <span class="hljs-attr">created_time</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLFloat</span>
    },
    <span class="hljs-attr">updated_time</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLFloat</span>
    },
    <span class="hljs-attr">plan</span>: {
      <span class="hljs-attr">type</span>: planSchema
    }
  }
});

</code></pre></div><p>我们从graphql中导入各种graphql的格式定义，然后创建我们的schema，其中name字段为Logs，然后是所需要的各种字段，定义在fileds字段下，其中的type为对应字段的数据格式，设置指定的数据格式之后，在graphql进行数据返回时会进行自动转化。我们上后面的代码中使用了几个数据格式：GraphQLInt和GraphQLString对应地是int和string格式，created_time在数据库中的格式是timestamp，我们获取到对应地时间戳，所以使用GraphQLFLoat格式表示。如果你需要使其变成其它格式，例如YYYY-MM-DD，可以通过自定义自己的格式转化规则进行处理（GraphQLScalarType）。同时我们应该注意到，根据我们的设计，plan字段应该是plan表的schema，所以我们也要建立planSchema，然后将plan的类型指向planSchema，同理，plan中的scope也需要具有scope的schema，最后代码如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { 
  <span class="hljs-title class_">GraphQLObjectType</span>, 
  <span class="hljs-title class_">GraphQLString</span>, 
  <span class="hljs-title class_">GraphQLInt</span>, 
  <span class="hljs-title class_">GraphQLList</span>, 
  <span class="hljs-title class_">GraphQLSchema</span>, 
  <span class="hljs-title class_">GraphQLFloat</span>, 
  <span class="hljs-title class_">GraphQLUnionType</span>, 
  <span class="hljs-title class_">GraphQLID</span> 
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;graphql&quot;</span>;

<span class="hljs-keyword">const</span> scopeSchema = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Scopes&quot;</span>,
  <span class="hljs-attr">fields</span>: {
    <span class="hljs-attr">id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    }
  }
});

<span class="hljs-keyword">const</span> planSchema = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Plans&quot;</span>,
  <span class="hljs-attr">fields</span>: {
    <span class="hljs-attr">id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">shop_id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">scope_id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">scope</span>: {
      <span class="hljs-attr">type</span>: scopeSchema
    }
  }
});

<span class="hljs-keyword">const</span> logSchema = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Logs&quot;</span>,
  <span class="hljs-attr">fields</span>: {
    <span class="hljs-attr">id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">plan_id</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
    },
    <span class="hljs-attr">status</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLString</span>
    },
    <span class="hljs-attr">created_time</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLFloat</span>
    },
    <span class="hljs-attr">updated_time</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLFloat</span>
    },
    <span class="hljs-attr">plan</span>: {
      <span class="hljs-attr">type</span>: planSchema
    }
  }
});
</code></pre></div><p>定义好每个格式的schema之后，我们建立一个根节点，来定义我们的查询：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title class_">RootSchema</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Roots&quot;</span>,
  <span class="hljs-attr">fields</span>: {
    <span class="hljs-attr">jobLogs</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLObjectType</span>({
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;logs&quot;</span>,
        <span class="hljs-attr">fields</span>: {
          <span class="hljs-attr">list</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">GraphQLList</span>(jobSchema)
          },
          <span class="hljs-attr">pageInfo</span>: {
            <span class="hljs-attr">type</span>: pageSchema
          }
        }
      }),
      <span class="hljs-attr">args</span>: {
        <span class="hljs-attr">pageSize</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
        },
        <span class="hljs-attr">pageIndex</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
        },
        <span class="hljs-attr">id</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
        },
        <span class="hljs-attr">plan_id</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
        },
        <span class="hljs-attr">scope_id</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-title class_">GraphQLInt</span>
        }
      },
      <span class="hljs-attr">resolve</span>: <span class="hljs-title function_">async</span> (
        parent, 
        { pageSize, pageIndex, id, plan_id, scope_id }, 
        <span class="hljs-attr">context</span>: <span class="hljs-title class_">PrismaClient</span>
      ) =&gt; {
        	<span class="hljs-comment">//do something</span>
        <span class="hljs-keyword">return</span> data;
      }
    }
  }
})
</code></pre></div><p>分析上面的数据我们可以看到，我们返回的格式在fileds中定义，jobLogs是一个对象，其中包含两个字段，list是详细的数据，数组结构，pageInfo是分页信息，定义为我们所需要的分页格式即可，一般包括当前页，每页size等信息。</p><p>作为查询，通常有根据参数进行查询的需求，所以我们的args中包含所有可能的参数和对应类型。</p><p>resolve中，我们需要提供对应的数据，这些数据的来源是不定的，通常来自于数据库，所以我们需要有一个能够处理数据的上下文环境。我们之前在定义graphqlHTTP中的context属性时，传入了prisma这个ORM库，当然你也可以使用任何你所需要的工具。以下对于数据的处理代码全都基于prisma建立。</p><h2 id="获取数据" tabindex="-1">获取数据 <a class="header-anchor" href="#获取数据" aria-label="Permalink to &quot;获取数据&quot;">​</a></h2><p>这一章节，我们主探讨resolve方法的一些编写。在上面我们提到，我们将context设置为prisma，通过prisma进行数据库的模型拉取，我们可以获取到我们的数据库模型，参考我们通过上面提到的prisma生成的model。</p><p>我们思考这样一个问题：如果要编写sql，如何实现上面数据格式的需求？我们通常使用的是左连接语句。我们当然可以通过直接执行sql语句获取数据，但是笔者这里使用了ORM库，所以更倾向于用ORM库进行处理。在prisma中，这对应就是关系查询。</p><p>在进行关系查询的时候，我们首先要为表建立关系。prisma可以自动建立关联，前提是你的数据表设置了外键关联的话，在获取到的model中会直接体现，如果没有，那就需要手动添加一下。我们分析需求就可以看出，这三个表数据之间是依次的一对多关系：plan中的每条数据，都能在scope表中找到唯一对应的一条数据；log也是一样的，log中的每条数据在plan中至少能够找到一条数据对应，所以我们更改后的表格描述文件如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//log表</span>
model log {
  id           <span class="hljs-title class_">Int</span>      <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  plan_id      <span class="hljs-title class_">Int</span>      
  status       <span class="hljs-title class_">String</span>   <span class="hljs-meta">@default</span>(<span class="hljs-string">&quot;init&quot;</span>) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
  created_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  plan         plan?  <span class="hljs-meta">@relation</span>(<span class="hljs-attr">fields</span>: [plan_id], <span class="hljs-attr">references</span>: [id])
}

<span class="hljs-comment">//plan表</span>
model plan {
  id              <span class="hljs-title class_">Int</span>       <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  shop_id         <span class="hljs-title class_">String</span>    <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
  scope_id        <span class="hljs-title class_">Int</span>
  created_time    <span class="hljs-title class_">DateTime</span>  <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time    <span class="hljs-title class_">DateTime</span>  <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  scope           scope?   <span class="hljs-meta">@relation</span>(<span class="hljs-attr">fields</span>: [scope_id], <span class="hljs-attr">references</span>: [id]) 
  log             log[]
}

<span class="hljs-comment">//scope表</span>
model scope {
  id           <span class="hljs-title class_">Int</span>      <span class="hljs-meta">@id</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">autoincrement</span>())
  shop_id      <span class="hljs-title class_">Int</span>
  created_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  updated_time <span class="hljs-title class_">DateTime</span> <span class="hljs-meta">@default</span>(<span class="hljs-title function_">now</span>()) <span class="hljs-meta">@db</span>.<span class="hljs-title class_">Timestamp</span>(<span class="hljs-number">0</span>)
  scope_from   <span class="hljs-title class_">String</span>?  <span class="hljs-meta">@db</span>.<span class="hljs-title class_">VarChar</span>(<span class="hljs-number">255</span>)
  plans        plan[]
}
</code></pre></div><p>我们的log表可预见性的可能会有很多数据，所以我们决定使用分页，而且是基于偏移量的分页，同时还要能够接受基于id，plan_id和scope_id进行的数据筛选。resolve方法的第二个参数就是graphql调用时传入的参数，所以我们最终的ORM代码如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">      <span class="hljs-attr">resolve</span>: <span class="hljs-title function_">async</span> (
        parent, 
        { pageSize, pageIndex, id, plan_id, scope_id }, 
        <span class="hljs-attr">context</span>: <span class="hljs-title class_">PrismaClient</span>
      ) =&gt; {
        <span class="hljs-keyword">const</span> jobLogs = <span class="hljs-keyword">await</span> context.<span class="hljs-property">log</span>.<span class="hljs-title function_">findMany</span>({
          <span class="hljs-attr">skip</span>: pageSize * (pageIndex - <span class="hljs-number">1</span>),
          <span class="hljs-attr">take</span>: pageSize,
          <span class="hljs-attr">orderBy</span>: [{
            <span class="hljs-attr">created_time</span>: <span class="hljs-string">&quot;desc&quot;</span>
          }],
          <span class="hljs-attr">where</span>: {
            id, plan_id,
            <span class="hljs-attr">plan</span>: {
              scope_id
            }
          },
          <span class="hljs-attr">select</span>: {
            <span class="hljs-attr">id</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">status</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">plan_id</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">created_time</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">updated_time</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">plan</span>: {
              <span class="hljs-attr">select</span>: {
                <span class="hljs-attr">id</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">shop_id</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">scope_id</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">scope</span>: <span class="hljs-literal">true</span>
              }
            }
          }
        });

        <span class="hljs-keyword">const</span> total = <span class="hljs-keyword">await</span> context.<span class="hljs-property">log</span>.<span class="hljs-title function_">count</span>({
          <span class="hljs-attr">where</span>: {
            id, plan_id,
            <span class="hljs-attr">plan</span>: {
              scope_id
            }
          }
        })
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">list</span>: jobLogs,
          <span class="hljs-attr">pageInfo</span>: {
            pageIndex,
            pageSize,
            total
          }
        };
      }
</code></pre></div><p>我们获取到实际的数据和数据总数，组织成根查询所需要的数据，直接返回即可。到这一步结束，我们的后端部分基本就运行成功了。此时我们启动服务，然后输入服务地址，后接路径/graphql，如果在配置graphqlHTTP部分启用了graphiql，就能够看到一个交互式页面，可以在左侧输入graphql语法，然后右侧查看调用结果。不过我们的接口调用肯定是基于实际项目的，所以下一章将会描述如何在客户端进行调用。</p><h2 id="调用graphql接口" tabindex="-1">调用GraphQL接口 <a class="header-anchor" href="#调用graphql接口" aria-label="Permalink to &quot;调用GraphQL接口&quot;">​</a></h2><p>本质上，graphQL的调用就是将制定格式的查询语句以字符串的形式发送到服务端即可，所以对于客户端使用的工具没有特别的要求，你可以使用Axios，也可以使用原生的XHR和Fetch，不过这些工具可能要自己去实现对应的逻辑，需要额外的配置，所以，笔者更推荐使用专门为graphQL设计的调用工具。笔者推荐@Apollo/client进行处理。关于Apollo，可以<a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">点击这里</a>查看。我们通过apollo的配置生成一个客户端查询工具，然后调用查询：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ApolloClient</span>, <span class="hljs-title class_">InMemoryCache</span>, <span class="hljs-title class_">ApolloProvider</span>, gql } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@apollo/client&#39;</span>;

<span class="hljs-keyword">const</span> client = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ApolloClient</span>({
  <span class="hljs-attr">uri</span>: <span class="hljs-string">&#39;/graphql&#39;</span>,
  <span class="hljs-attr">cache</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">InMemoryCache</span>({ <span class="hljs-attr">resultCaching</span>: <span class="hljs-literal">false</span> }),
});

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">JobLogsGraphqlParams</span> {
  <span class="hljs-attr">id</span>?: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">plan_id</span>?: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">scope_id</span>?: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">pageInfo</span>: {
    <span class="hljs-attr">pageIndex</span>: <span class="hljs-built_in">number</span>
    <span class="hljs-attr">pageSize</span>: <span class="hljs-built_in">number</span>
  }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">queryJobLogs</span> = (<span class="hljs-params"><span class="hljs-attr">params</span>: <span class="hljs-title class_">JobLogsGraphqlParams</span></span>) =&gt; {
  <span class="hljs-keyword">const</span> {
    id, plan_id, scope_id,
    <span class="hljs-attr">pageInfo</span>: { pageIndex, pageSize } 
  } = params;
  <span class="hljs-keyword">return</span> client.<span class="hljs-title function_">query</span>({
    <span class="hljs-attr">query</span>: gql\`<span class="language-graphql">
      <span class="hljs-keyword">query</span> jobLogs<span class="hljs-punctuation">(</span>
      <span class="hljs-variable">$id</span>: Int,
      <span class="hljs-variable">$plan_id</span>: Int,
      <span class="hljs-variable">$scope_id</span>: Int,
      <span class="hljs-variable">$pageIndex</span>: Int<span class="hljs-punctuation">!</span>, 
      <span class="hljs-variable">$pageSize</span>: Int<span class="hljs-punctuation">!</span>
      <span class="hljs-punctuation">)</span> <span class="hljs-punctuation">{</span>
        jobLogs<span class="hljs-punctuation">(</span>
        <span class="hljs-symbol">pageIndex</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$pageIndex</span>, 
        <span class="hljs-symbol">pageSize</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$pageSize</span>,
        <span class="hljs-symbol">id</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$id</span>,
        <span class="hljs-symbol">plan_id</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$plan_id</span>,
        <span class="hljs-symbol">scope_id</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$scope_id</span>,
        <span class="hljs-symbol">date</span><span class="hljs-punctuation">:</span> <span class="hljs-variable">$date</span>
        <span class="hljs-punctuation">)</span> <span class="hljs-punctuation">{</span>
          list <span class="hljs-punctuation">{</span>
            id
            plan_id
            created_time
            updated_time
            plan <span class="hljs-punctuation">{</span>
              id
              scope_id
              scope <span class="hljs-punctuation">{</span>
                id
              <span class="hljs-punctuation">}</span>
            <span class="hljs-punctuation">}</span>
          <span class="hljs-punctuation">}</span>
          pageInfo <span class="hljs-punctuation">{</span>
            pageIndex
            pageSize
            total
          <span class="hljs-punctuation">}</span>
        <span class="hljs-punctuation">}</span>
      <span class="hljs-punctuation">}</span>
    \`</span>,
    <span class="hljs-attr">variables</span>: {
      <span class="hljs-attr">pageSize</span>: pageSize,
      <span class="hljs-attr">pageIndex</span>: pageIndex,
      id,
      plan_id,
      scope_id
    }
  })
}
</code></pre></div><p>其中的核心部分就是client.query部分。该方法接受两个参数，query表示查询的graphql语句，variables则是变量值。</p><p>gql函数为格式化与验证查询语句的函数。你可能需要一个vscode插件Apollo GraphQL来进行语句的高亮和验证，这能够大大提高开发效率，否则查询语句部分就单纯的是字符串内容，难易理解层级关系。我们的jobLogs查询需要有多个筛选参数，例如分页信息等，所以在jobLogs函数中用参数进行定义，其中他们都是$开头的变量形式，这表示这是一个变量，然后冒号后跟数据格式，这个语法有点类似于TypeScript，但又有一些不同。例如我们定义$id为整型数字，其表示为$id: Int；有些参数是必填的，我们需要在其后面添加一个感叹号!，这表示该参数不可省略，如果在调用时省略的话，Apollo将会给出报错。不添加!则该参数就是可选的。另外，如果是一个数组格式的数据，我们需要用[]将其包裹，例如浮点数数组，就是[Float]，这与TypeScript也不同。</p><p>定义好查询之后，我们要建立起变量之间的映射关系，jobLogs中类似pageIndex: $pageIndex就是将传入的变量和函数接受的形参实现一一对应。</p><p>接下来就是定义我们要获取到的数据字段，我们在上面提到，我们的服务端最终返回的数据是类似</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;list&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">124</span><span class="hljs-punctuation">,</span>
  	<span class="hljs-attr">&quot;plan&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">567</span><span class="hljs-punctuation">,</span>
      scope<span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">678</span>
      <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;pageInfo&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;pageIndex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;pageSize&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">50</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;total&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2314</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>形式的，所以gql语法中按照后端定义的数据格式进行字段表达即可。例如想要获取该类型的字段，我们的gql语句就是：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">list {
  id
  plan_id
  plan {
    id
    scope {
      id
    }
  }
}
pageInfo {
  pageIndex
  pageSize
  total
}
</code></pre></div><p>最后我们用variables字段表示我们的变量和变量值，如之前代码所示，就可以向后端发起请求了。</p><p>Apollo提供的不仅是graphQL的请求发送与处理等，它还提供了React的hook写法的请求方法，可以方便直接处理加载/成功/失败状态，更多内容可以参考文档。</p><h2 id="告一段落" tabindex="-1">告一段落 <a class="header-anchor" href="#告一段落" aria-label="Permalink to &quot;告一段落&quot;">​</a></h2><p>至此我们实现了一个基于Koa2的graphQL规范的接口，并且实现了查询功能。graphQL中的请求可以分为两大类：查询和变更，变更则包括增删改查，一般通过mutation实现，本文到此为止暂时仅给出查询的流程和代码梳理。实际上，graphQL和restful API并不是相互取代的关系，而是不同业务场景下的功能选择。选用更适合实际业务场景的方案远比无休止的探讨graphQL还是resuful API要重要得多。</p>`,50)]))}const th=A(nh,[["render",ah]]),eh=Object.freeze(Object.defineProperty({__proto__:null,__pageData:sh,default:th},Symbol.toStringTag,{value:"Module"})),lh=JSON.parse('{"title":"JSON Web Token和SSO","description":"","frontmatter":{"title":"JSON Web Token和SSO","summary":"身份验证可以说是贯穿互联网应用最普遍的一个功能了，无论是开放API的权限鉴定，还是登录功能，身份验证都是不可绕过的一个话题。认证协议技术也经过了很多的演化，从Cookie到Session，再到JWT，旨在创建开销更小，更灵活更易用的认证方式。作为现在最常使用的技术，JWT(全称JSON Web...","date":"2023-03-18T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/JSON Web Token和SSO.md","filePath":"content/blog/JSON Web Token和SSO.md"}'),ph={name:"content/blog/JSON Web Token和SSO.md"},oh={id:"payload-claims",tabindex:"-1"};function rh(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[s[4]||(s[4]=x(`<p>身份验证可以说是贯穿互联网应用最普遍的一个功能了，无论是开放API的权限鉴定，还是登录功能，身份验证都是不可绕过的一个话题。认证协议技术也经过了很多的演化，从Cookie到Session，再到JWT，旨在创建开销更小，更灵活更易用的认证方式。作为现在最常使用的技术，JWT(全称JSON Web Token)成为了认证的主流方式，笔者因为需要构建blog的后台管理部分，且可能在未来进行更多的角色功能扩展，特别对API访问进行控制，所以构建了登录鉴权服务，这里来聊聊JWT中的一些东西。</p><h2 id="jwt是什么" tabindex="-1">JWT是什么 <a class="header-anchor" href="#jwt是什么" aria-label="Permalink to &quot;JWT是什么&quot;">​</a></h2><p>JSON Web Token实际上是一个开放的互联网协议标准（详情见：<a href="https://www.rfc-editor.org/rfc/rfc7519.html" target="_blank" rel="noreferrer">RFC-7519</a>），作用是传递信息，在互联网应用中大多数为服务器和服务器或者服务器和客户端之间进行信息交互。</p><p>如同它的名字一样，其信息格式为JSON格式，为了保证数据的唯一性，JWT采用密码学方式进行签名，避免数据被篡改。</p><p>token的作用就是如此，两个消息方之间通过可以验证真伪性的方式传输信息。其实JWT就是一个字符串，其中包含必要的信息数据和签名，兼顾身份验证和消息通信的功能。</p><h2 id="生成一个jwt" tabindex="-1">生成一个JWT <a class="header-anchor" href="#生成一个jwt" aria-label="Permalink to &quot;生成一个JWT&quot;">​</a></h2><p>在生成JWT之前，需要了解JWT的三个部分。</p><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;">​</a></h3><p>组成JWT的第一个部分是头部，头部信息通常由两个部分组成：</p><ol><li>token使用的签名算法。</li><li>token的类型，在JWT中，其值为JWT。</li></ol><p>一个完整的头部信息大致如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;typ&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;jwt&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;alg&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;HS256&quot;</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>其中jwt表示token是JSON Web Token，签名加密方式为SHA256。</p><p>然后我们将这个头部的所有空格去除，然后对其的字符串形式进行base64格式的编码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> header = {
  <span class="hljs-string">&quot;typ&quot;</span>: <span class="hljs-string">&quot;jwt&quot;</span>,
  <span class="hljs-string">&quot;alg&quot;</span>: <span class="hljs-string">&quot;HS256&quot;</span>
};
<span class="hljs-keyword">const</span> jwtHeader = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(header);
<span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(jwtHeader, <span class="hljs-string">&#39;utf-8&#39;</span>).<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#39;base64&#39;</span>);
<span class="hljs-comment">//get the result: eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9</span>
</code></pre></div><p>以上是Node.js下的示例代码，如果未做特殊说明，本文代码均以Node.js编写。</p>`,16)),d("h3",oh,[s[1]||(s[1]=m("Payload（")),d("strong",null,[C(p,{style:{color:"black"}},{default:R(()=>s[0]||(s[0]=[m("Claims")])),_:1,__:[0]})]),s[2]||(s[2]=m("） ")),s[3]||(s[3]=d("a",{class:"header-anchor",href:"#payload-claims","aria-label":'Permalink to "Payload（**<font style="color:black;">Claims</font>**）"'},"​",-1))]),s[5]||(s[5]=x(`<p>payload称之为荷载（部分地方也将该部分称之为Claims，声明），主要存放一些需要交互的数据，在协议标准中定义的字段有如下几个，这些字段均为可选，而非必须定义：</p><ul><li>iss：发行人。</li><li>sub：主题部分。</li><li>aud：接收者。</li><li>exp：过期时间，一般用于标识JWT的有效日期截止时间，在官方标准中声明，超过exp时间不再接受对JWT的处理。</li><li>nbf：声明生效时间，如果在生效时间之前，不接受对JWT的处理。</li><li>iat：签发时间，存储JWT的发布时间。</li><li>jti：全称是JWT ID，是JWT的唯一标识符，主要用于重放攻击，这个在后续进行说明。</li></ul><p>除了以上部分，也可以向payload内部放入自定义的属性和属性值，可以存放一些基本的用户信息，例如用户的user_id，email等信息，以便通信双方可以获取基本的用户信息。当然这个也不是必须的，取决于你的设计，你当然可以只存入一个标识，然后通过其它手段去获取必要内容，都是OK的。如下是一个示例的payload信息：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;iss&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;sub&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;aud&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;JWTReciverNo1244&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;exp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1679150724891</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;iat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1678838400000</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;user&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;1056966560797&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;email&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767@qq.com&quot;</span>
<span class="hljs-punctuation">}</span>
</code></pre></div><p>然后我们将这个JSON转化为字符串，去除所有空格之后，使用base64进行编码：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code class="hljs language-json">const payload = <span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;iss&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;sub&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;aud&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;JWTReciverNo1244&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;exp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1679150724891</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;iat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1678838400000</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;user&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;1056966560797&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;email&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;im6767@qq.com&quot;</span>
<span class="hljs-punctuation">}</span>
const jwtPayload = JSON.stringify(payload);
Buffer.from(jwtPayload<span class="hljs-punctuation">,</span> &#39;utf<span class="hljs-number">-8</span>&#39;).toString(&#39;base64&#39;);
<span class="hljs-comment">//get the result: eyJpc3MiOiJpbTY3NjciLCJzdWIiOiJpbTY3NjciLCJhdWQiOiJKV1RSZWNpdmVyTm8xMjQ0IiwiZXhwIjoxNjc5MTUwNzI0ODkxLCJpYXQiOjE2Nzg4Mzg0MDAwMDAsInVzZXIiOiIxMDU2OTY2NTYwNzk3IiwiZW1haWwiOiJpbTY3NjdAcXEuY29tIn0=</span>
</code></pre></div><p><strong>注意：不要将不应该泄露的重要信息存放在payload中，因为仅为base64编码，实际上整个数据还是明文传输的，应当只存放和交互有关的必要信息。</strong></p><h3 id="signature" tabindex="-1">Signature <a class="header-anchor" href="#signature" aria-label="Permalink to &quot;Signature&quot;">​</a></h3><p>签名的作用是为了保证Header和Payload中的信息不会被篡改，其目的是，如果对上面的Header和Payload中的信息进行了篡改，签名信息能够发现这个行为。提到保证唯一性，我们通常使用的就是hash算法，所以选用所需要的hash算法即可。注意这个加密方式需要和Header中的加密方式对应。</p><p>首先我们将生成的Header和Payload的base64字符串用.拼接成一个新的字符串，然后使用加密算法对该字符串进行加密，之后进行base64编码转化，得到的即为Signature：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> crypto <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;crypto&quot;</span>;
<span class="hljs-keyword">const</span> str = base64Header + <span class="hljs-string">&#39;.&#39;</span> + base64Payload;
<span class="hljs-comment">//这里根据你的算法方式进行秘钥设置和选用加密方式（示例为sha256）</span>
<span class="hljs-keyword">const</span> privateKey = <span class="hljs-string">&quot;yourkey&quot;</span>;
<span class="hljs-keyword">const</span> signature = crypto.<span class="hljs-title function_">createHmac</span>(<span class="hljs-string">&#39;sha256&#39;</span>,privateKey).<span class="hljs-title function_">update</span>(str).<span class="hljs-title function_">digest</span>(<span class="hljs-string">&#39;base64&#39;</span>);
<span class="hljs-comment">//get the result: NZwVytumhQu4mhc1+WRFry2pXCG8YXroDuZnEtRePi0=</span>
</code></pre></div><h3 id="最后的拼接" tabindex="-1">最后的拼接 <a class="header-anchor" href="#最后的拼接" aria-label="Permalink to &quot;最后的拼接&quot;">​</a></h3><p>经过以上步骤，我们获得了组成JWT的三个部分，Header, Payload和Signature，接下来我们将三个部分依次用.进行拼接，得到的字符串就是完整的JWT:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-string">\`eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.
eyJpc3MiOiJpbTY3NjciLCJzdWIiOiJpbTY3NjciLCJhdW
QiOiJKV1RSZWNpdmVyTm8xMjQ0IiwiZXhwIjoxNjc5MTUw
NzI0ODkxLCJpYXQiOjE2Nzg4Mzg0MDAwMDAsInVzZXIiOi
IxMDU2OTY2NTYwNzk3IiwiZW1haWwiOiJpbTY3NjdAcXEuY29tIn0=
.NZwVytumhQu4mhc1+WRFry2pXCG8YXroDuZnEtRePi0=
\`</span>
</code></pre></div><p>为了方便展示，这里进行了折行处理，实际上应该是一个单行字符串，这就是我们最终得到的JWT，从整个过程中我们可以看出，Header和Payload部分都是明文的，而私钥是整个验证的关键，所以不能将私钥暴露，他应当只存在于受信任的服务上，且不可以被获取到。</p><p>JWT应该通过什么样的方式被传递呢？这个其实没有明确的规定，你可以通过请求参数和响应，也可以拼接在请求的URL中进行解析，同样可以放在请求header中，或者放在cookie中，都是可以的，但是要注意一些细节，URL拼接需要注意的是可能会让URL变得很长，从而引起一些服务端响应上的问题，所以更常用的做法是通过请求头来进行传播：设置Authentication请求头，值为Bearer {JWT}的形式进行传递，服务端通过头信息进行解析。当然，这完全取决于你需要的业务实现。</p><h2 id="更多的细节" tabindex="-1">更多的细节 <a class="header-anchor" href="#更多的细节" aria-label="Permalink to &quot;更多的细节&quot;">​</a></h2><p>在上面，我们实现了一个jwt的生成算法。作为一个可以说是最常见的鉴权方式，当然有大量的现成工具可以使用，笔者在构建的过程中，使用了npm的jsonwebtoken包，来验证整个过程的正确性，却发现经由自己生成的jwt无法通过jsonwebtoken的验证方法。经过检查算法后，也没有发现对应地问题所在，于是乎通过debug开始查找问题，然后看到内部对签名部分的base64进行了处理，主要包含以下三个部分：</p><ol><li>移除了base64末尾用来占位补足长度的所有&#39;=&#39;字符。</li><li>将base64中&#39;+&#39;全部替换为&#39;-&#39;。</li><li>将base64中的&#39;/&#39;全部替换为&#39;_&#39;。</li></ol><p>这是一个比较容易被忽略的细节。这样做的原因实际上是为了使得JWT对URL内容和对文件路径内容友好，是规定在标准文档中的内容，<a href="https://www.rfc-editor.org/rfc/rfc7515.html#section-3.2" target="_blank" rel="noreferrer">详见RFC-7515：JWS部分</a>。</p><p>在jsonwebtoken的官方github的issue中，也看到过有人提问获得了亚马逊应用签发的token却无法验证的情况，也是因为这个引起的，亚马逊方发送的签名没有对指定字符进行处理。</p><p>事实上在很多技术实现上，有一些标准细节囊括其中，作为开发者可能没有办法非常详细的了解，从而构建出不是完全符合功能的代码，特别是你并非对该功能的长久维护者，所以尽量使用普适性的包来构建自己的功能是合理且必要的。</p><h2 id="视野退到宏观" tabindex="-1">视野退到宏观 <a class="header-anchor" href="#视野退到宏观" aria-label="Permalink to &quot;视野退到宏观&quot;">​</a></h2><p>我们从实现细节出来，讨论一下JWT的宏观部分。</p><p>实际上根据上述阐述，我们可以知道JWT的运作原理如下：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1679194125561-6edea353-f306-4afd-a33d-b4567ec46db7.png" alt=""></p><p>在实际的实现中，一般登录鉴权是单独的服务，各种api服务是另外单独的服务，那么就会产生一些问题：各服务如何验证这个token是否有效，这其实是笔者比较疑惑的一个问题。</p><h3 id="当然是鉴权中心" tabindex="-1">当然是鉴权中心 <a class="header-anchor" href="#当然是鉴权中心" aria-label="Permalink to &quot;当然是鉴权中心&quot;">​</a></h3><p>一个可以想到的方法是，由鉴权中心来给定，这次鉴权是不是有效。所以当各个服务接收到token之后，会去询问鉴权中心，这个token是否是有效的，鉴权中心经过判断后给出结论，从而完成验证token的能力。这样的话鉴权中心所承担的任务就会相对繁重：既要负责身份验证，token分发，还要对token的有效与否进行鉴定，可能会有比较大的服务开销，特别是其中可能产生的网络请求开销，可能是这种实现方式所必须考虑的问题。</p><h3 id="不妨让他们去做" tabindex="-1">不妨让他们去做 <a class="header-anchor" href="#不妨让他们去做" aria-label="Permalink to &quot;不妨让他们去做&quot;">​</a></h3><p>如果你的应用全部在体系内部，那么这件事情还可以变得简单，你信任你所有的服务环境，那么不如放权：将秘钥给他们，由鉴权服务或者中间件自行计算，来验证这个token是否有效，这样的话登录服务就会简单，只需要负责token的分发就可以，而各个应用因为持有秘钥，所以可以自行验证，只需要保证整个秘钥的安全与否即可。</p><p>不过如果需要使用到JWT的服务来源不同，那么就不太行的通了：因为直接提供秘钥似乎是不怎么优雅的行为。</p><p>也可以使用一个中间介质，例如Redis，将分发的token信息存放其中。需要验证？服务自行去Redis中查找token进行判断即可，登录中心分发完token将token信息写入Redis即可。这当然会带来额外的开销，但是能够通过硬件解决的问题可能也不是什么大问题。</p><h2 id="一些特点" tabindex="-1">一些特点 <a class="header-anchor" href="#一些特点" aria-label="Permalink to &quot;一些特点&quot;">​</a></h2><p>相较于Session和Cookie的校验方案，JWT有其独特的特点。</p><h3 id="无状态" tabindex="-1">无状态 <a class="header-anchor" href="#无状态" aria-label="Permalink to &quot;无状态&quot;">​</a></h3><p>无状态是JWT最大的特点，因为JWT中本身包含了身份验证所需要的信息，所以不像服务器，还需要存储Session信息，减轻了服务器压力，增强了伸缩性，但是无状态带来的另一个大问题就是：<strong>JWT的有效是不可控的</strong>。</p><p>根据上文方式，我们知道，jwt的特点就是，有关于有效和无效期的内容，在一开始生成时就已经确定了，如果在这个token仍然处于有效期时间内，权限、用户信息之类的内容发生了变化，无法有效的将这个token废除。甚至当用户登出的时候，实际上这个token仍然是有效的。这其实也是很多大型互联网公司和应用不单纯使用JWT的原因之一，因为对于这些应用来讲，实时的用户信息变动和权限等变动时非常必要的。如果想要解决这些问题，就需要额外的逻辑来进行控制。</p><h3 id="避免crsf攻击" tabindex="-1">避免CRSF攻击 <a class="header-anchor" href="#避免crsf攻击" aria-label="Permalink to &quot;避免CRSF攻击&quot;">​</a></h3><p>传统的Cookie是可能会形成跨站请求伪造的，由于JWT不强依赖于Cookie，所以可以避免发生。</p><h3 id="适合单点登录" tabindex="-1">适合单点登录 <a class="header-anchor" href="#适合单点登录" aria-label="Permalink to &quot;适合单点登录&quot;">​</a></h3><p>因为JWT信息保存在客户端，所以无需像Session一样保存在一台电脑上。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>我们看到了一些JWT存在的问题，同时也会有一些直觉意义上的处理方法:</p><p>关于无状态带来的登录注销，权限变动的问题，其根本是如何保证JWT的实时有效性，我们当然可以通过上面提到的方式，将其放入一个内存数据库，例如Redis来解决，如果需要让某个token失效，就直接从Redis中删除这个数据，这样带来的问题就是JWT的每次请求都要从数据库中查询JWT是否存在。</p><p>相反而行之的方式是黑名单制度，类似于上面的做法，利用内存数据库维护一个JWT黑名单，如果某个JWT失效就放入黑名单，JWT判断时先判断是否在黑名单中，如果存在就直接判断无效。</p><p>这两种方案问题在于，违背了JWT的无状态原则。</p><p>同样地我们可以通过修改秘钥来完成这个动作，但是很愚蠢，因为需要及时同步秘钥，而且假设在多个终端进行了登录，在一个设备上登出，其他设备也会对应登出，不ok。</p><p>另外存在token过期的问题，假如一个用户在这次登录中使用了token，有效期为两个小时，他在两个小时候之后进行了某次接口调用，就会返回错误，他需要重新登陆获取一个新的token。这样的操作无疑是非常令人恼火的，但是确实存在，有人会说将token时间设置的足够长就可以，但是这意味着你的token似乎变成了一个更长时间有效的验证工具，实际上会有更多的问题，通常这个时间比较难以控制：短的token有效期意味着更好的权限控制，但是会有更快地过期问题，过长的则相反，所以一般会使用刷新token的方式。我们获取到使用的token有效期为短时间，例如一个小时，另一个返回的token用来刷新token，过期时间可以略长，例如1天，这样每次登录，如果token过期，就将refreshToken传递给服务端，服务端生成新的token返回到客户端，如果两个token都过期，则进行重新登陆处理，这样意味着如果类似于登出操作时，要注意将两个token都注销处理。</p><h2 id="实践-sso" tabindex="-1">实践：SSO <a class="header-anchor" href="#实践-sso" aria-label="Permalink to &quot;实践：SSO&quot;">​</a></h2><p>我们完成了一个鉴权功能，接下来我们利用这个流程进行一个简单的单点登录功能，看看如何处理。SSO的概念不再具体解释，可以自行查阅，总的来说宗旨就是，一次登录，访问同一个系统体系下的所有应用。从JWT的应用角度来讲，这也很容易理解——只要各系统接收，鉴别JWT，就能获取到用户的信息，从而为用户提供服务。</p><p>我们构建一个登录中心，其域名为login.im6767.xyz，负责登录和token分发；有一个管理应用，其域名为manage.im6767.xyz，需要身份验证之后才能使用。</p><p>当我们执行登录后，首先遇到的问题是，登陆之后如何处理token才能够正确流转？</p><h3 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h3><p>一个容易想到的方式是，请求登录接口，登录接口返回token，然后前端将token写入localStorage，每次请求发送时从localStorage中取出token携带即可。当我们的应用位于同一个域名下，这个方案无疑是没有问题的，但是如果按照上述的条件就不可以了，因为localStorage是严格同域的，不同域无法获取到其内容。也就是说，login.im6767.xyz写入了localStorage，其只能在login.im6767.xyz下使用，所以manage.im6767.xyz无法获取token，这种情况下无法实现。</p><p>当然通过iframe嵌套和postMessage来实现不同域之间交换token也是可以的，这取决于你的实现。</p><h3 id="可以跨域分享的cookie" tabindex="-1">可以跨域分享的Cookie <a class="header-anchor" href="#可以跨域分享的cookie" aria-label="Permalink to &quot;可以跨域分享的Cookie&quot;">​</a></h3><p>根据localStorage的限制，我们很容易想到一个可以在不同域之间流转的存储介质，Cookie。Cookie可以通过设置，在域和子域之间交换信息，因此我们可以将token写入Cookie。进一步地，既然使用Cookie，那么服务端利用Set-Cookie请求头就可以完成这个操作，无需客户端的参与。</p><h3 id="有什么问题" tabindex="-1">有什么问题？ <a class="header-anchor" href="#有什么问题" aria-label="Permalink to &quot;有什么问题？&quot;">​</a></h3><p>无论是localStorage还是Cookie，都是本地存储，那么利用这种本地存储会有哪些问题？是的，就是XSS攻击。一些XSS漏洞可能会导致本地存储的数据被恶意的JS代码读取从而被攻击者收集，再利用该token进行接口调用，访问对应的资源，因此不够安全。既然我们使用服务器的Set-Cookie，我们完全可以通过设置Cookie的安全策略来降低风险——设置httpOnly，保证其不能被JS获取，在每次请求时依旧可以携带对应Cookie中的token。当然，面对存储型XSS攻击还是力不从心，因此从根源上避免XSS攻击是非常必要的。我们也可以通过严格限制页面的JS执行和加载策略防范攻击，这些细节不在我们的讨论范围之内。</p><h3 id="cookie额外隐患" tabindex="-1">Cookie额外隐患 <a class="header-anchor" href="#cookie额外隐患" aria-label="Permalink to &quot;Cookie额外隐患&quot;">​</a></h3><p>提到Cookie就很容易和另一个安全问题联系起来——CSRF。所以当我们的token存放在Cookie中携带时，同样必须考虑这种安全问题的可能性。防御CSRF的方式有很多，一个常用的方式是通过另一个token，csrf-token来解决，关键的请求发送时，请求头需要携带csrf-token，后端进行验证，从而执行后续逻辑。</p><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><p>我们以一些简单的代码片段来描述这个过程：</p><blockquote><p>接下来的示例代码中均使用Nest.js和axios作为服务端和客户端请求发送工具来展示</p></blockquote><p>在login.im6767.xyz登录界面输入用户名和密码之后，后端进行校验，如果通过，则生成token和crsf_token</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-meta">@Controller</span>(<span class="hljs-string">&#39;auth&#39;</span>)
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AuthController</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">authService</span>: <span class="hljs-title class_">AuthService</span></span>) {}

  <span class="hljs-meta">@Post</span>(<span class="hljs-string">&#39;/login&#39;</span>)
  <span class="hljs-keyword">async</span> <span class="hljs-title function_">login</span>(<span class="hljs-params">
    <span class="hljs-meta">@Body</span>() <span class="hljs-attr">loginInfo</span>: <span class="hljs-title class_">LoginInfo</span>,
    <span class="hljs-meta">@Res</span>({ passthrough: <span class="hljs-literal">true</span> }) <span class="hljs-attr">resp</span>: <span class="hljs-title class_">Response</span>
    </span>) {
    <span class="hljs-keyword">try</span> {
      <span class="hljs-comment">//生成jwt</span>
      <span class="hljs-keyword">const</span> token = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">authService</span>.<span class="hljs-title function_">getToken</span>(loginInfo);
      <span class="hljs-comment">//利用jwt生成一个签名值, 作为crsf_token</span>
      <span class="hljs-keyword">const</span> crsf_token = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">authService</span>.<span class="hljs-title function_">getCRSFToken</span>(token);
      <span class="hljs-comment">//利用set-cookie设置token, 设置有效时间, 域为主域, JS不可操作</span>
      <span class="hljs-comment">//设置csrf_token，允许JS操作</span>
      resp.<span class="hljs-title function_">cookie</span>(<span class="hljs-string">&#39;access_token&#39;</span>, <span class="hljs-string">\`<span class="hljs-subst">\${token}</span>\`</span>, {
        <span class="hljs-attr">maxAge</span>: <span class="hljs-number">7200000</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>,
        <span class="hljs-comment">// secure: true,</span>
        <span class="hljs-attr">httpOnly</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">domain</span>: <span class="hljs-string">&quot;im6767.xyz&quot;</span>,
      });

      resp.<span class="hljs-title function_">cookie</span>(<span class="hljs-string">&#39;csrf_token&#39;</span>, <span class="hljs-string">\`<span class="hljs-subst">\${crsf_token}</span>\`</span>, {
        <span class="hljs-attr">maxAge</span>: <span class="hljs-number">7200000</span>,
        <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>,
        <span class="hljs-attr">domain</span>: <span class="hljs-string">&quot;im6767.xyz&quot;</span>,
      });

      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">code</span>: <span class="hljs-number">200</span>,
        <span class="hljs-attr">data</span>: {
          token,
          crsf_token
        }
      }
    } <span class="hljs-keyword">catch</span> (e) {
      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">UnauthorizedException</span>(<span class="hljs-string">&quot;invalid email or password&quot;</span>)
    }
  }
}
</code></pre></div><p>执行登录成功后，login.im6767.xyz重定向至所需要进入的系统页面（manage.im6767.xyz）</p><p>manage.im6767.xyz系统中的请求发送时，从cookie中读取csrf_token，并且请求头中添加csrf-token请求头，</p><p>值为对应值。后端接口接收到请求后，验证token和csrf_token的值，如果未通过返回结果，说明身份验证有误/过期等，前端执行对应逻辑，通常是重定向至登录界面，要求用户重新身份验证。</p><p>此时我们有两个策略：</p><ol><li>由manage.im6767.xyz的前端进行重定向。当manage.im6767.xyz调用某个接口，后端验证未通过时，前端收到鉴权失败的响应，执行重定向。</li><li>由后端发起，如果失败之后，直接返回302重定向请求，跳转至login.im6767.xyz。</li></ol><p>以上两个策略均可，但是有细微差别。如果是前端完成，这意味着用户仍旧能够进入系统内部（前端资源正常加载），如果你从静态资源获取开始就需要限制，则推荐后者，一个可行的方式如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//利用Nest.js服务来管理静态资源, 相当于一个小网关</span>
<span class="hljs-meta">@Module</span>({
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">ServeStaticModule</span>.<span class="hljs-title function_">forRoot</span>({
        <span class="hljs-attr">rootPath</span>: <span class="hljs-title function_">join</span>(__dirname, <span class="hljs-string">&#39;../..&#39;</span>, <span class="hljs-string">&#39;client&#39;</span>),
      }),
  ],
  <span class="hljs-attr">controllers</span>: [<span class="hljs-title class_">StaticController</span>]
})

<span class="hljs-comment">//接管所有静态资源的请求</span>
<span class="hljs-meta">@Controller</span>()
<span class="hljs-comment">//错误拦截器统一处理错误</span>
<span class="hljs-meta">@UseFilters</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">StaticExceptionFilter</span>())
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StaticController</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {}

  <span class="hljs-meta">@Get</span>(<span class="hljs-string">&#39;/*&#39;</span>)
  <span class="hljs-comment">//绑定权限控制的守卫</span>
  <span class="hljs-meta">@Bind</span>(<span class="hljs-title class_">AuthRedirect</span>(<span class="hljs-number">302</span>))
  <span class="hljs-title function_">getHello</span>(
    <span class="hljs-meta">@Req</span>() request,
    <span class="hljs-meta">@Next</span>() next
  ): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">//注意next放行</span>
    <span class="hljs-title function_">next</span>()
  }
}

<span class="hljs-comment">//静态资源权限验证的守卫</span>
<span class="hljs-comment">//请注意csrf-token不需要被验证, 因为静态资源不会携带csrf-token</span>
<span class="hljs-comment">//当没有满足守卫时, 抛出一个重定向的302错误</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title class_">AuthRedirect</span> = <span class="hljs-title function_">createParamDecorator</span>(<span class="hljs-function">(<span class="hljs-params">_, <span class="hljs-attr">ctx</span>: <span class="hljs-title class_">ExecutionContext</span></span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> request = ctx.<span class="hljs-title function_">switchToHttp</span>().<span class="hljs-title function_">getRequest</span>();
  <span class="hljs-keyword">const</span> token = request.<span class="hljs-property">cookies</span>?.<span class="hljs-property">access_token</span>;
  <span class="hljs-comment">//缺少jwt验证不通过</span>
  <span class="hljs-keyword">if</span> (!token) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">HttpException</span>(<span class="hljs-string">&#39;redirect&#39;</span>, <span class="hljs-title class_">HttpStatus</span>.<span class="hljs-property">FOUND</span>); 
  }
  <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">//进行验证</span>
    <span class="hljs-keyword">try</span> {
      jwt.<span class="hljs-title function_">verify</span>(token, <span class="hljs-variable constant_">SECRET_KEY</span>);
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    } <span class="hljs-keyword">catch</span>(e) {
      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">HttpException</span>(<span class="hljs-string">&#39;redirect&#39;</span>, <span class="hljs-title class_">HttpStatus</span>.<span class="hljs-property">FOUND</span>); 
    }
  }
});

<span class="hljs-comment">//错误过滤器中如果监测到302错误, 则将请求重定向至login.im6767.xyz</span>
<span class="hljs-meta">@Catch</span>(<span class="hljs-title class_">HttpException</span>)
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StaticExceptionFilter</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">ExceptionFilter</span> {
  <span class="hljs-keyword">catch</span>(<span class="hljs-attr">exception</span>: <span class="hljs-title class_">HttpException</span>, <span class="hljs-attr">host</span>: <span class="hljs-title class_">ArgumentsHost</span>) {
    <span class="hljs-keyword">const</span> ctx = host.<span class="hljs-title function_">switchToHttp</span>();
    <span class="hljs-keyword">const</span> response = ctx.<span class="hljs-property">getResponse</span>&lt;<span class="hljs-title class_">Response</span>&gt;();
    <span class="hljs-keyword">const</span> request = ctx.<span class="hljs-property">getRequest</span>&lt;<span class="hljs-title class_">Request</span>&gt;();
    <span class="hljs-keyword">const</span> status = exception.<span class="hljs-title function_">getStatus</span>();
    <span class="hljs-keyword">if</span> (status === <span class="hljs-number">302</span>) {
      response.<span class="hljs-title function_">redirect</span>(<span class="hljs-string">&#39;https://login.im6767.xyz/login?redirect=https://manage.im6767.xyz/admin/articles&#39;</span>);
    }
  }
}
</code></pre></div><p>此时，当没有经过授权直接访问manage.im6767.xyz时，将直接重定向至login.im6767.xyz，从而实现更为严格的权限控制——甚至无法访问静态资源。</p><p>当然，这整个过程中，需要考虑的细节问题不止这些，这里仅做流程参考，实际问题结合实际情况进行处理即可。</p><h2 id="一些思考" tabindex="-1">一些思考 <a class="header-anchor" href="#一些思考" aria-label="Permalink to &quot;一些思考&quot;">​</a></h2><p>初识JWT的过程到这里就差不多结束了，实际上有人可能会疑惑，既然JWT有如此多的问题，呢么是不是意味着JWT本身就是不可取的，否则为什么那么多大厂都不使用这个技术方案？</p><p>在笔者看来，脱离实际场景谈论技术是一个非常致命的错误。在一些实时性比较强的场景下，无状态的JWT带来的弊端确实更容易造成一些问题，而诸如开放API等形式的鉴权，JWT却显得更加适用。所有的技术问题，最终都会有对应的解决方案，实际上，追求万物极致的解决方案是对顶级美好的追求，但是寻找当下场景最易用合适的解决方案是一个工科人员的使命和原则。</p>`,79))])}const ih=A(ph,[["render",rh]]),ch=Object.freeze(Object.defineProperty({__proto__:null,__pageData:lh,default:ih},Symbol.toStringTag,{value:"Module"})),hh=JSON.parse('{"title":"Monaco-Editor和Dan","description":"","frontmatter":{"title":"Monaco-Editor和Dan","summary":"有一天有个人找到小刘，郑重其事的说要给他一个任务。原来是他有一个可视化的低代码平台，用来管理一套业务流程。这套业务大致是这样的：会有一个入口获得源数据，接下来要对这个数据进行一系列操作，最终得到结果数据。现在的操作时，在页面上拖动设置节点，让数据依次流过节点A，节点B，节点C......最终得...","date":"2023-08-07T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Monaco-Editor和Dan.md","filePath":"content/blog/Monaco-Editor和Dan.md"}'),uh={name:"content/blog/Monaco-Editor和Dan.md"};function dh(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<p>有一天有个人找到小刘，郑重其事的说要给他一个任务。原来是他有一个可视化的低代码平台，用来管理一套业务流程。这套业务大致是这样的：会有一个入口获得源数据，接下来要对这个数据进行一系列操作，最终得到结果数据。现在的操作时，在页面上拖动设置节点，让数据依次流过节点A，节点B，节点C......最终得到数据，生成Excel。这些节点都是用户可配的，顺序可调整的。但是现在遇到的问题是，大多数情况下默认的节点都够用，但是有的时候会有更加定制化的特殊需求节点，需要对表里的数据进行一些运算处理，这些运算一般都不太复杂，加减乘除基本能搞定，但是用表单去搞定配起来又很复杂迷糊，能不能有个解决办法？</p><p>小刘：写代码。</p><p>对方：不行啊，使用者学习写代码成本太高了，而且学会了你们不就没饭吃了？</p><p>小刘：说的有点子道理。</p><p>对方：能不能给我简单的一套语言方案，也能让他们像你们写代码那样去自定义处理数据，岂不美哉？最好可以全汉语搞定。</p><p>小刘：......</p><p>对方：不勉强你，你试试吧。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>思考过后小刘发现，这实际上就是一个编辑器，需要对新手友好，这个编辑器可以支持一套语言，语言用来进行逻辑描述，然后可以翻译执行。他开始头疼了，因为本质上他是一个写前端的，而涉及到语言就需要语言定义，词法分析，语法分析，编译执行等等等等，这个工作量可就比他想象的大的多了。既然是解决方案，那么能不能先拿出一个现成可行的方案去进行技术推演，然后再逐步完善？</p><h3 id="编辑器入手" tabindex="-1">编辑器入手 <a class="header-anchor" href="#编辑器入手" aria-label="Permalink to &quot;编辑器入手&quot;">​</a></h3><p>首先第一步是需要一个web可用的编辑器，可以直接在线撸代码。小刘知道那还是得用在线版的vsCode——Monaco-editor。这个项目是vsCode的一个分支演化，可以试做是网页版本的不那么轻量的vsCode，更关键的是背后是微软，倒也不怕某天突然消失。</p><p>npm安装好monaco插件后，建立所需要的文件monaco.ts，对monaco进行配置以及初始化操作。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code class="hljs language-tsx"><span class="hljs-comment">//monaco.ts</span>

<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> monaco <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;monaco-editor&quot;</span>;

self.<span class="hljs-property">MonacoEnvironment</span> = {
	<span class="hljs-attr">getWorker</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">_, label = <span class="hljs-string">&#39;&#39;</span></span>) {
		<span class="hljs-keyword">const</span> <span class="hljs-title function_">getWorkerModule</span> = (<span class="hljs-params"><span class="hljs-attr">moduleUrl</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">label</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
			<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Worker</span>(self.<span class="hljs-property">MonacoEnvironment</span>!.<span class="hljs-property">getWorkerUrl</span>!(moduleUrl, label), {
				<span class="hljs-attr">name</span>: label,
				<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;module&#39;</span>
			});
		};

		<span class="hljs-keyword">switch</span> (label) {
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;json&#39;</span>:
				<span class="hljs-keyword">return</span> <span class="hljs-title function_">getWorkerModule</span>(<span class="hljs-string">&#39;/monaco-editor/esm/vs/language/json/json.worker?worker&#39;</span>, label);
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;css&#39;</span>:
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;scss&#39;</span>:
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;less&#39;</span>:
				<span class="hljs-keyword">return</span> <span class="hljs-title function_">getWorkerModule</span>(<span class="hljs-string">&#39;/monaco-editor/esm/vs/language/css/css.worker?worker&#39;</span>, label);
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;html&#39;</span>:
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;handlebars&#39;</span>:
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;razor&#39;</span>:
				<span class="hljs-keyword">return</span> <span class="hljs-title function_">getWorkerModule</span>(<span class="hljs-string">&#39;/monaco-editor/esm/vs/language/html/html.worker?worker&#39;</span>, label);
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;typescript&#39;</span>:
			<span class="hljs-keyword">case</span> <span class="hljs-string">&#39;javascript&#39;</span>:
				<span class="hljs-keyword">return</span> <span class="hljs-title function_">getWorkerModule</span>(<span class="hljs-string">&#39;/monaco-editor/esm/vs/language/typescript/ts.worker?worker&#39;</span>, label);
			<span class="hljs-attr">default</span>:
				<span class="hljs-keyword">return</span> <span class="hljs-title function_">getWorkerModule</span>(<span class="hljs-string">&#39;/monaco-editor/esm/vs/editor/editor.worker?worker&#39;</span>, label);
		}
	}
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> monaco;
</code></pre></div><p>小刘知道自己的项目是vite搭建的，所以配置如上，如果是webpack等其他工具，就需要根据官网内容进行对应的配置调整了。</p><p>接下来就可以在项目中引入并且初始化编辑器了。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> monaco <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./utils/monaco&#39;</span>;

<span class="hljs-keyword">const</span> monacoEditor = monaco.<span class="hljs-property">editor</span>.<span class="hljs-title function_">create</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#monaco-editor&#39;</span>)!, {
  <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">language</span>: <span class="hljs-string">&#39;your language&#39;</span>
});
</code></pre></div><p>至此，编辑器基本就被引入了。</p><h3 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h3><p>小刘想用这个编辑器写一段代码试试，但是发现他想要用上一节点获取到的数据进行计算时，还需要去查上一轮的表有哪些字段，才能做对应的运算，没有任何提示，这个过程看起来不太聪明。小刘思考了一下整个流程，实际上要处理的数据入口是上一个节点处理好的表数据，然后出口是经过本轮处理的表数据，这说明数据都是有某些&quot;固定结构&quot;的，这样就可以做代码提示了嘛，于是代码提示是必要的，所以需要增加这个功能。</p><p>此时小刘模拟了上一轮数据的结果，假设他为table1。经过上一轮的处理，table1具有的列字段也都知道了，首先第一步就是要获取到这些列字段。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//获取到的列字段(方法有很多)</span>
<span class="hljs-keyword">const</span> t1Cols = [<span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-string">&quot;age&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>];
</code></pre></div><p>然后开始添加所需要的代码提示。</p><p>这个时候我们不妨为我们之后需要进行处理数据的语言取一个名字，因为monaco的语言相关功能几乎总是围绕着某个命名语言完成的，既然是数据分析，就叫它Dan（Data Analysis）吧。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code class="hljs language-tsx"><span class="hljs-comment">// 注册代码补全功能</span>
monaco.<span class="hljs-property">languages</span>.<span class="hljs-title function_">registerCompletionItemProvider</span>(<span class="hljs-string">&#39;dana&#39;</span>, {
  <span class="hljs-comment">// 在键入.时触发代码补全</span>
  <span class="hljs-attr">triggerCharacters</span>: [<span class="hljs-string">&#39;.&#39;</span>],
  <span class="hljs-comment">// 定义代码补全功能的触发原则</span>
  <span class="hljs-attr">provideCompletionItems</span>: <span class="hljs-function">(<span class="hljs-params">model, position</span>) =&gt;</span> {
    <span class="hljs-comment">// 获取到当前行代码</span>
    <span class="hljs-keyword">const</span> codePre = model.<span class="hljs-title function_">getValueInRange</span>({
      <span class="hljs-attr">startLineNumber</span>: position.<span class="hljs-property">lineNumber</span>,
      <span class="hljs-attr">startColumn</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">endLineNumber</span>: position.<span class="hljs-property">lineNumber</span>,
      <span class="hljs-attr">endColumn</span>: position.<span class="hljs-property">column</span>,
    });
    <span class="hljs-comment">// 获取到当前行到光标输入为止的内容</span>
    <span class="hljs-keyword">const</span> word = model.<span class="hljs-title function_">getWordUntilPosition</span>(position);
    <span class="hljs-comment">// 匹配.号输入的规则</span>
    <span class="hljs-keyword">const</span> tag = codePre.<span class="hljs-title function_">match</span>(<span class="hljs-regexp">/.*(\\.*)$/</span>)?.[<span class="hljs-number">1</span>];
    <span class="hljs-comment">/**
    * 这里省略了对于前导对象的判断
    * 如果是table1.xxx的形式，则return suggestions
    * 否则直接return即可
    */</span>
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">suggestions</span>: t1Cols.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">r</span> =&gt;</span> (
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">\`<span class="hljs-subst">\${r}</span>\`</span>,
          <span class="hljs-attr">kind</span>: monaco.<span class="hljs-property">languages</span>.<span class="hljs-property">CompletionItemKind</span>.<span class="hljs-property">EnumMember</span>,
          <span class="hljs-attr">insertText</span>: <span class="hljs-string">\`<span class="hljs-subst">\${r}</span>\`</span>,
          <span class="hljs-attr">insertTextRules</span>: monaco.<span class="hljs-property">languages</span>.<span class="hljs-property">CompletionItemInsertTextRule</span>.<span class="hljs-property">InsertAsSnippet</span>,
          <span class="hljs-attr">range</span>: {
            <span class="hljs-attr">startLineNumber</span>: position.<span class="hljs-property">lineNumber</span>,
            <span class="hljs-attr">endLineNumber</span>: position.<span class="hljs-property">lineNumber</span>,
            <span class="hljs-attr">startColumn</span>: word.<span class="hljs-property">startColumn</span>,
            <span class="hljs-attr">endColumn</span>: word.<span class="hljs-property">endColumn</span>,
          }
        })
      )
    }
  }
});
</code></pre></div><p>完成配置后，我们尝试一下就可以看到效果了。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1691474064090-8e85a7ef-dfdd-49b1-8494-471944c74721.png" alt=""></p><h3 id="异常" tabindex="-1">异常 <a class="header-anchor" href="#异常" aria-label="Permalink to &quot;异常&quot;">​</a></h3><p>小刘意识到了另一个问题：如果输入了没有的属性，该怎么办，毕竟输入是死的，例如table1.noName，实际上并不存在noName这个数据列。对，得需要错误提示，就像是写代码的时候，那些令人讨厌的红色波浪线一样。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">let</span> <span class="hljs-attr">timer</span>: <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>;
<span class="hljs-comment">// 在编辑器中内容发生改变时触发</span>
monacoEditor.<span class="hljs-title function_">onDidChangeModelContent</span>(<span class="hljs-function">(<span class="hljs-params">ev</span>) =&gt;</span> {
  <span class="hljs-comment">// 为了提升性能, 这里使用防抖操作</span>
  <span class="hljs-keyword">if</span> (timer) {
    <span class="hljs-built_in">clearTimeout</span>(timer);
  }
  timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> model = monacoEditor.<span class="hljs-title function_">getModel</span>()!;
    <span class="hljs-comment">// 定义我们要进行属性检测的正则表达式</span>
    <span class="hljs-keyword">const</span> varReg =<span class="hljs-regexp">/\\b(.+)\\.(.+?)\\s+/g</span>;
    <span class="hljs-comment">// 定义扫描位置, 从代码的开头开始到结尾</span>
    <span class="hljs-keyword">const</span> startPosition = { <span class="hljs-attr">lineNumber</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">column</span>: <span class="hljs-number">1</span> };
    <span class="hljs-comment">// 调用findMatches查找代码中所有符合属性检测的正则匹配</span>
    <span class="hljs-keyword">const</span> matches = model.<span class="hljs-title function_">findMatches</span>(varReg, startPosition, <span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>);
    <span class="hljs-comment">// 可能包含多个, 用变量存储</span>
    <span class="hljs-keyword">const</span> textErrors = [];
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> match <span class="hljs-keyword">of</span> matches) {
      <span class="hljs-keyword">const</span> [_, key = <span class="hljs-string">&#39;&#39;</span>, value = <span class="hljs-string">&#39;&#39;</span>] = match.<span class="hljs-property">matches</span> ?? [];
      <span class="hljs-comment">/**
      * 匹配到属性值如果是不存在的, 则生成错误提示结构对象
      * 注意, 这里和上文一样, 没有关于对象判断的部分
      */</span>
      <span class="hljs-keyword">if</span> (!t1Cols.<span class="hljs-title function_">includes</span>(value)) {
        <span class="hljs-keyword">const</span> start = match.<span class="hljs-property">range</span>.<span class="hljs-title function_">getStartPosition</span>();
        <span class="hljs-keyword">const</span> end = match.<span class="hljs-property">range</span>.<span class="hljs-title function_">getEndPosition</span>();
        textErrors.<span class="hljs-title function_">push</span>({
          <span class="hljs-attr">startLineNumber</span>: start.<span class="hljs-property">lineNumber</span>,
          <span class="hljs-attr">startColumn</span>: start.<span class="hljs-property">column</span>,
          <span class="hljs-attr">endLineNumber</span>: end.<span class="hljs-property">lineNumber</span>,
          <span class="hljs-attr">endColumn</span>: end.<span class="hljs-property">column</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">\`对象上不存在&#39;<span class="hljs-subst">\${value}</span>&#39;属性\`</span>,
          <span class="hljs-attr">severity</span>: monaco.<span class="hljs-property">MarkerSeverity</span>.<span class="hljs-property">Error</span>
        })
      }
    }
    <span class="hljs-comment">// 调用setModelMarkers设置错误提示标记</span>
    monaco.<span class="hljs-property">editor</span>.<span class="hljs-title function_">setModelMarkers</span>(model, <span class="hljs-string">&#39;owner&#39;</span>, textErrors);
  }, <span class="hljs-number">500</span>);
})
</code></pre></div><p>设置完成后，再次尝试一下。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1691478544046-915fa00e-06f5-43fa-a4ab-13731216c650.png" alt=""></p><h3 id="语言demo" tabindex="-1">语言Demo <a class="header-anchor" href="#语言demo" aria-label="Permalink to &quot;语言Demo&quot;">​</a></h3><p>调教好编辑器之后，接下来就要考虑怎么完成后续操作了。小刘觉得开始头疼，毕竟新设计一个语言可不是那么简单的事情，而且不一定值得。但是他想先试试方案可不可以行得通，于是乎他决定先设计一个中文的编程语言，然后把他&quot;翻译&quot;成现有的某种语言。换句话说，就是将现有的某种语言，给他汉化，来完成一段代码的编写。</p><p>小刘首先想到的是js，但是他又觉得不好，因为js有&quot;额外的&quot;符号, 例如{}，不够优雅，既然要避免这些符号，他立马想到了另一个语言：python，于是他决定从中文版&quot;python&quot;开始，来处理如下js代码的逻辑：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">if</span> (table1.<span class="hljs-property">score</span> &lt; <span class="hljs-number">5</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;低分&#39;</span>);
}
</code></pre></div><p>分析上面的代码，我们用到了如下几个内容：</p><ol><li>一个关键字if。</li><li>一个运算符号 &lt;。</li><li>一个代码块逻辑，内部执行一个字符串打印功能。</li></ol><p>如果用python代码，则如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre><code class="hljs language-python"><span class="hljs-keyword">if</span> table1.score &lt; <span class="hljs-number">5</span>:
	<span class="hljs-built_in">print</span>(<span class="hljs-string">&#39;low&#39;</span>)
</code></pre></div><p>据此，我们建立起一个简单的映射关系：</p><ol><li>关键词if，在Dan语言中为中文 &quot;如果&quot;。</li><li>运算符号 &lt; 在Dan语言中为中文 &quot;小于&quot;。</li><li>关键字print，在Dan语言中为&quot;打印&quot;。</li></ol><p>此外，因为中文的分词概念并不像英语单词那么明显，所以我们需要明显的分词界限，规定，分词使用一个或多个空格隔开。</p><p>据上，我们得到我们的Dan语言的tokenizer（不完整版）：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">  monaco.<span class="hljs-property">languages</span>.<span class="hljs-title function_">setMonarchTokensProvider</span>(<span class="hljs-string">&#39;dana&#39;</span>, {
    <span class="hljs-attr">tokenizer</span>: {
      <span class="hljs-attr">root</span>: [
        { <span class="hljs-attr">include</span>: <span class="hljs-string">&#39;common&#39;</span> }
      ],
      <span class="hljs-attr">common</span>: [
        <span class="hljs-comment">// 定义关键词</span>
        [<span class="hljs-regexp">/([\\u4E00-\\u9FA5]|[a-z_$])+/u</span>, {
          <span class="hljs-attr">cases</span>: {
            <span class="hljs-string">&#39;@typeKeywords&#39;</span>: <span class="hljs-string">&#39;keyword&#39;</span>,
            <span class="hljs-string">&#39;@keywords&#39;</span>: <span class="hljs-string">&#39;keyword&#39;</span>,
            <span class="hljs-string">&#39;@default&#39;</span>: <span class="hljs-string">&#39;identifier&#39;</span>
          }
        }],
      ]
    },

    <span class="hljs-attr">keywords</span>: [
      <span class="hljs-string">&#39;如果&#39;</span>, <span class="hljs-string">&#39;小于&#39;</span>, <span class="hljs-string">&#39;打印&#39;</span>
    ],
    <span class="hljs-attr">typeKeywords</span>: []
  });
</code></pre></div><p>以上内容只处理了关键词部分的内容，如果需要完整的语言功能，就需要完善各种情况，包括但不限于变量，关键词，各种括号等，而且如果需要，可以结合上面的代码提示功能，对关键字进行补全。</p><p>但是小刘发现了另一个问题：输入的代码干巴巴的，没有颜色区分，阅读性不强，那么就再添加一个样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">monaco.<span class="hljs-property">editor</span>.<span class="hljs-title function_">defineTheme</span>(<span class="hljs-string">&quot;DanTheme&quot;</span>, {
  <span class="hljs-attr">inherit</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">rules</span>: [
    { <span class="hljs-attr">token</span>: <span class="hljs-string">&#39;key&#39;</span>, <span class="hljs-attr">foreground</span>: <span class="hljs-string">&#39;#0000FF&#39;</span>, <span class="hljs-attr">fontStyle</span>: <span class="hljs-string">&#39;bold&#39;</span> },
    { <span class="hljs-attr">token</span>: <span class="hljs-string">&#39;sym&#39;</span>, <span class="hljs-attr">foreground</span>: <span class="hljs-string">&#39;#f5a623&#39;</span>, },
    { <span class="hljs-attr">token</span>: <span class="hljs-string">&#39;value&#39;</span>, <span class="hljs-attr">foreground</span>: <span class="hljs-string">&#39;#4EC9B0&#39;</span> },
    { <span class="hljs-attr">token</span>: <span class="hljs-string">&quot;notes&quot;</span>, <span class="hljs-attr">foreground</span>: <span class="hljs-string">&quot;#6A9955&quot;</span> },
    { <span class="hljs-attr">token</span>: <span class="hljs-string">&quot;comment&quot;</span>, <span class="hljs-attr">foreground</span>: <span class="hljs-string">&quot;#6A9955&quot;</span> },
  ],
  <span class="hljs-attr">base</span>: <span class="hljs-string">&#39;vs&#39;</span>,
  <span class="hljs-attr">colors</span>: {}
});
</code></pre></div><p>如此一来，效果就变成了这样：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1691487646531-95493d38-1606-405a-b886-124877938fbd.png" alt=""></p><p>看起来有那么回事儿了。</p><h3 id="翻译执行" tabindex="-1">翻译执行 <a class="header-anchor" href="#翻译执行" aria-label="Permalink to &quot;翻译执行&quot;">​</a></h3><p>既然基于python代码，我们得到结果之后就需要进行反转，这很简单，其实就是根据关键字映射把上面的伪代码段翻译成我们之前提到的python代码。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">monacoEditor.<span class="hljs-title function_">getValue</span>()
</code></pre></div><p>通过调用getValue方法能够获得输入的字符串内容，然后统一进行代码处理，得到python代码文本。小刘想，python代码也有类似js的eval的用法，可以解析运行，事半功倍。</p><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h2><p>至此一个拿来主义的语言Dan和Monaco-Editor的结合就初步完成了。当利用Monaco完成耳熟能详的成熟的编程语言的编辑功能时，你总可以直接在网上找到完备的解析配置，直接拿来使用。但如果要像上文设计自己的语言并且实现类似的功能，就需要更加繁琐的配置。</p><p>Monaco是功能强大的编辑器，这意味着它使用起来也很复杂。它提供了一个思路，即在web端，实现代码编辑的能力，所以，不失为一个类似场景的健壮的解决方案。</p>`,57)]))}const jh=A(uh,[["render",dh]]),mh=Object.freeze(Object.defineProperty({__proto__:null,__pageData:hh,default:jh},Symbol.toStringTag,{value:"Module"})),gh=JSON.parse('{"title":"More About Performance","description":"","frontmatter":{"title":"More About Performance","summary":"这是一篇可能略微深入的关于浏览器performance的文章。","date":"2022-03-03T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/More About Performance.md","filePath":"content/blog/More About Performance.md"}'),fh={name:"content/blog/More About Performance.md"};function _h(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[d("p",null,"当构建web应用或者页面构建的越来越复杂时，最终总是要回到性能问题上来。我们通常所能衡量到的指标",-1)]))}const yh=A(fh,[["render",_h]]),bh=Object.freeze(Object.defineProperty({__proto__:null,__pageData:gh,default:yh},Symbol.toStringTag,{value:"Module"})),vh=JSON.parse('{"title":"React源码系列(一)：React与createRoot","description":"","frontmatter":{"title":"React源码系列(一)：React与createRoot","summary":"前言在之前的一段时间中，完成了关于Vuejs源码阅读系列的内容。与Vue对应的一个开发者体系更加庞大的框架——React也是前端学习中不可绕过的话题。在笔者当前的开发工作下，这二者的项目均有涉及开发和维护，所以也决定花一段时间去了解React的源码原理。从这篇文章开始，笔者将会花费6~7篇梳理...","date":"2023-08-24T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/React源码系列(一)：React与createRoot.md","filePath":"content/blog/React源码系列(一)：React与createRoot.md"}'),wh={name:"content/blog/React源码系列(一)：React与createRoot.md"};function kh(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在之前的一段时间中，完成了关于Vuejs源码阅读系列的内容。与Vue对应的一个开发者体系更加庞大的框架——React也是前端学习中不可绕过的话题。在笔者当前的开发工作下，这二者的项目均有涉及开发和维护，所以也决定花一段时间去了解React的源码原理。从这篇文章开始，笔者将会花费6~7篇梳理React的相关源码流程，类似之前的系列，部分细节内容不做过多讨论，后续再进行补充。</p><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><p>首先需要搭建一个可以调用到React源码内容的服务，以便我们设计各种各样的测试代码进行运行，通过debug的方式梳理逻辑。参考网络上的一些资料之后，选用以下方式。</p><p>首先选定工具，笔者决定采用Vite + React来进行搭建，因为本身React模块在packages的文件下，使用非打包的模块可以更清晰的了解代码结构。</p><p>然后我们引入react。因为可能需要在代码中进行调试，因此在src目录下建立react目录，引入react的源码文件，然后进行一些改造，这其中包括react引入目录的映射，部分import模块的修改等等，具体内容可以参考<a href="https://github.com/astak16/react-source/issues/6" target="_blank" rel="noreferrer">这里</a>。</p><p>完成上述步骤之后，如果可以正常启动项目，则说明一切准备就绪。</p><h2 id="createroot" tabindex="-1">createRoot <a class="header-anchor" href="#createroot" aria-label="Permalink to &quot;createRoot&quot;">​</a></h2><p>一个项目的开始通常是从createRoot开始的。接受我们传入的dom节点后，通过一些参数的初始化，方法进入到createContainer中来，执行了createFiberRoot，基于以下FiberRootNode创建rootNode。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">FiberRootNode</span>(<span class="hljs-params">
                   
  containerInfo,
  <span class="hljs-comment">// $FlowFixMe[missing-local-annot]</span>
  tag,
  hydrate,
  identifierPrefix,
  onRecoverableError,
</span>) {
  <span class="hljs-comment">// 节点类型, 不同的类型具有不同的渲染行为</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">tag</span> = tag;
  <span class="hljs-comment">// 节点的容器信息</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">containerInfo</span> = containerInfo;
  <span class="hljs-comment">// pending, current, pingCache等在React内部追踪状态</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">pendingChildren</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">current</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">pingCache</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">finishedWork</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">timeoutHandle</span> = noTimeout;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">cancelPendingCommit</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">context</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">pendingContext</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">next</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">callbackNode</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">callbackPriority</span> = <span class="hljs-title class_">NoLane</span>;
  <span class="hljs-comment">// expirationTimes, pendingLanes等用于控制渲染、调度的优先级</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">expirationTimes</span> = <span class="hljs-title function_">createLaneMap</span>(<span class="hljs-title class_">NoTimestamp</span>);

  <span class="hljs-variable language_">this</span>.<span class="hljs-property">pendingLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">suspendedLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">pingedLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">expiredLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">finishedLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">errorRecoveryDisabledLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">shellSuspendCounter</span> = <span class="hljs-number">0</span>;

  <span class="hljs-variable language_">this</span>.<span class="hljs-property">entangledLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">entanglements</span> = <span class="hljs-title function_">createLaneMap</span>(<span class="hljs-title class_">NoLanes</span>);
	<span class="hljs-comment">// hiddenUpdates用以追踪隐藏的更新</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">hiddenUpdates</span> = <span class="hljs-title function_">createLaneMap</span>(<span class="hljs-literal">null</span>);

  <span class="hljs-variable language_">this</span>.<span class="hljs-property">identifierPrefix</span> = identifierPrefix;
  <span class="hljs-comment">// onRecoverableError用以处理可恢复的错误</span>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">onRecoverableError</span> = onRecoverableError;

  <span class="hljs-keyword">if</span> (enableCache) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">pooledCache</span> = <span class="hljs-literal">null</span>;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">pooledCacheLanes</span> = <span class="hljs-title class_">NoLanes</span>;
  }

  <span class="hljs-keyword">if</span> (enableSuspenseCallback) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">hydrationCallbacks</span> = <span class="hljs-literal">null</span>;
  }

  <span class="hljs-variable language_">this</span>.<span class="hljs-property">incompleteTransitions</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>();
  <span class="hljs-keyword">if</span> (enableTransitionTracing) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">transitionCallbacks</span> = <span class="hljs-literal">null</span>;
    <span class="hljs-keyword">const</span> transitionLanesMap = (<span class="hljs-variable language_">this</span>.<span class="hljs-property">transitionLanes</span> = []);
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-title class_">TotalLanes</span>; i++) {
      transitionLanesMap.<span class="hljs-title function_">push</span>(<span class="hljs-literal">null</span>);
    }
  }

  <span class="hljs-keyword">if</span> (enableProfilerTimer &amp;&amp; enableProfilerCommitHooks) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">effectDuration</span> = <span class="hljs-number">0</span>;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">passiveEffectDuration</span> = <span class="hljs-number">0</span>;
  }

  <span class="hljs-keyword">if</span> (enableUpdaterTracking) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">memoizedUpdaters</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>();
    <span class="hljs-keyword">const</span> pendingUpdatersLaneMap = (<span class="hljs-variable language_">this</span>.<span class="hljs-property">pendingUpdatersLaneMap</span> = []);
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-title class_">TotalLanes</span>; i++) {
      pendingUpdatersLaneMap.<span class="hljs-title function_">push</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>());
    }
  }

  <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-keyword">switch</span> (tag) {
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">ConcurrentRoot</span>:
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">_debugRootType</span> = hydrate ? <span class="hljs-string">&#39;hydrateRoot()&#39;</span> : <span class="hljs-string">&#39;createRoot()&#39;</span>;
        <span class="hljs-keyword">break</span>;
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">LegacyRoot</span>:
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">_debugRootType</span> = hydrate ? <span class="hljs-string">&#39;hydrate()&#39;</span> : <span class="hljs-string">&#39;render()&#39;</span>;
        <span class="hljs-keyword">break</span>;
    }
  }
}
</code></pre></div><p>创建结束后，将实例和实际的dom节点进行绑定，实际的DOM元素节点上会绑定一个__reactContainer\${randomString}的属性，其值就是该FiberRootNode。接下来绑定Dispatcher为客户端更新的patcher(ReactDOMClientDispatcher)，并且监听所有支持的事件。</p><p>完成上述操作之后，就得到了基本的FiberRootNode。Fiber是贯穿整个React的概念，这在接下来的render部分会做更详细的介绍。至此，我们所熟悉的ReactRoot就已经准备完成。</p>`,12)]))}const qh=A(wh,[["render",kh]]),Th=Object.freeze(Object.defineProperty({__proto__:null,__pageData:vh,default:qh},Symbol.toStringTag,{value:"Module"})),Sh=JSON.parse('{"title":"React源码系列(二): Render","description":"","frontmatter":{"title":"React源码系列(二): Render","summary":"前言在上一个文章章节中，我们完成了对于FiberRootNode的创建，通常的React项目中，创建完毕RootNode之后，就会开始执行对应的渲染操作，即调用render方法。本章节会进入到render方法中，追踪render的流程。Render我们给出基本的示例代码：import * as...","date":"2023-10-30T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/React源码系列(二): Render.md","filePath":"content/blog/React源码系列(二): Render.md"}'),xh={name:"content/blog/React源码系列(二): Render.md"};function Ch(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在上一个文章章节中，我们完成了对于FiberRootNode的创建，通常的React项目中，创建完毕RootNode之后，就会开始执行对应的渲染操作，即调用render方法。本章节会进入到render方法中，追踪render的流程。</p><h2 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;Render&quot;">​</a></h2><p>我们给出基本的示例代码：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-dom/client&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.jsx&#39;</span>

<span class="hljs-title class_">ReactDOM</span>
.<span class="hljs-title function_">createRoot</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#39;root&#39;</span>))
.<span class="hljs-title function_">render</span>(
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">React.StrictMode</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">React.StrictMode</span>&gt;</span></span>,
)
</code></pre></div><p>render是FiberRootNode上的方法，接受子节点为传入参数。接着在render内部调用updateContainer方法。</p><p>updateContainer首先决定更新的时候使用哪一个lane，lane是React中一个更新时所使用的优先级概念。接着为子树创建context，根据lane生成update，然后执行enqueueUpdate方法。</p><p>enqueueUpdate方法会将更新加入到更新队列中，以便在合适的时机进行处理。之后会调用scheduleUpdateOnFiber，在Fiber上面安排更新，以便触发React的调度和渲染。scheduleUpdateOnFiber内部会先标记root的状态为pending update，即正在进行更新，然后执行ensureRootIsScheduled</p>`,8)]))}const Ph=A(xh,[["render",Ch]]),Ah=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Sh,default:Ph},Symbol.toStringTag,{value:"Module"})),Dh=JSON.parse('{"title":"Vite Out Of Memory","description":"","frontmatter":{"title":"Vite Out Of Memory","summary":"因为贫穷众所周知，虽然现在云服务器相当普及，但是其价格永远是不可磨灭的痛，特别是对一个普普通通个人开发者来讲，云服务器的价格仍然感到肉疼。笔者的博客站就在一个1核2g的服务器上小心翼翼的运行着，跑两个Docker的Nodejs服务。有一天笔者在云服务器上拉取了前端Git库的代码后，执行buil...","date":"2023-03-22T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vite Out Of Memory.md","filePath":"content/blog/Vite Out Of Memory.md"}'),Eh={name:"content/blog/Vite Out Of Memory.md"};function Nh(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2 id="因为贫穷" tabindex="-1">因为贫穷 <a class="header-anchor" href="#因为贫穷" aria-label="Permalink to &quot;因为贫穷&quot;">​</a></h2><p>众所周知，虽然现在云服务器相当普及，但是其价格永远是不可磨灭的痛，特别是对一个普普通通个人开发者来讲，云服务器的价格仍然感到肉疼。笔者的博客站就在一个1核2g的服务器上小心翼翼的运行着，跑两个Docker的Nodejs服务。</p><p>有一天笔者在云服务器上拉取了前端Git库的代码后，执行build命令，等待后就会出现：</p><blockquote><p>rendering chunks... Killed!</p></blockquote><p>多次执行偶尔能成功，我开始怀疑事情没有那么简单，直觉告诉我应该是和硬件配置有关。果不其然当我在Vite仓库的Issue中搜索时，有人遇到了类似的问题，发生了OOM。</p><p>虽说能用钱解决的问题就不是问题，但是看到升级服务器内存的价格时，我还是觉得不太值得，这时候我想起了windows系统中的虚拟内存，然后突然想到某节大学课堂上的某个知识点：交换文件。</p><h2 id="扩展内存" tabindex="-1">扩展内存 <a class="header-anchor" href="#扩展内存" aria-label="Permalink to &quot;扩展内存&quot;">​</a></h2><p>Swap是Linux下的交换文件，类似于windows上的虚拟内存。物理内存不足时，系统可以把一些不常用的程序放入交换分区，从而弥补内存不足的情况。用硬盘来负责这部分工作显然会降低IO效率，但是对于我的情况来讲无所谓，所以这里进行交换文件的扩展。</p><p>使用<strong>dd</strong>命令创建交换文件。其中<strong>bs</strong>是数据块大小，<strong>count</strong>是数据块的数量。交换文件的总大小等于数据块大小乘以数量。</p><p>这里需要注意的是，数据块大小应该比可用内存小，否则可能会报错。</p><blockquote><p>sudo dd if=/dev/zero of=/swapfile bs=128M count=32</p></blockquote><p>上面命令创建了一个4GB的交换文件。</p><p>接下来更改交换文件的读取权限和写入权限</p><blockquote><p>sudo chmod 600 /swapfile</p></blockquote><p>然后设置系统的交换区域</p><blockquote><p>sudo mkswap /swapfile</p></blockquote><p>将交换文件添加到交换空间，然后立即使用交换文件</p><blockquote><p>sudo swapon /swapfile</p></blockquote><p>测试一下是否成功</p><blockquote><p>sudo swapon -s</p><p>输出/swapfile信息即可</p></blockquote><p>最后通过编辑/etc/fstab文件，在系统启动时就启用交换文件</p><blockquote><p>sudo vim /etc/fstab</p><p>添加以下内容到末尾新行，保存退出</p><p>/swapfile swap swap defaults 0 0</p></blockquote><p>然后重新执行vite的build命令，一切运行正常。</p>',23)]))}const Ih=A(Eh,[["render",Nh]]),Oh=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Dh,default:Ih},Symbol.toStringTag,{value:"Module"})),Rh=JSON.parse('{"title":"Vue.js源码系列(一)：工程与createApp","description":"","frontmatter":{"title":"Vue.js源码系列(一)：工程与createApp","summary":"前言关于Vue的源码阅读实际上在去年前年的时候就已经进行过一段时间了，但是没有彻底完成，而且很多笔记内容也已经七零八落。尽管我同意从源码的阅读中能够学习到很多东西，但是我对于将源码阅读视为必备能力这件事还是持原有看法：无必要。或者说我对于其的态度是，当你需要去理解源码时，自然会去理解源码。但出...","date":"2023-04-07T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue.js源码系列(一)：工程与createApp.md","filePath":"content/blog/Vue.js源码系列(一)：工程与createApp.md"}'),Mh={name:"content/blog/Vue.js源码系列(一)：工程与createApp.md"},Vh={class:"language-html vp-adaptive-theme"},$h={class:"hljs language-html"};function Lh(n,s,a,t,e,l){return k(),q("div",null,[s[4]||(s[4]=x(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>关于Vue的源码阅读实际上在去年前年的时候就已经进行过一段时间了，但是没有彻底完成，而且很多笔记内容也已经七零八落。尽管我同意从源码的阅读中能够学习到很多东西，但是我对于将源码阅读视为必备能力这件事还是持原有看法：无必要。或者说我对于其的态度是，当你需要去理解源码时，自然会去理解源码。</p><p>但出于世俗的目的，亦或是将原先没有彻底完成的事情完成的想法，这里还是重新整理一下。这可能是需要多篇文章才能结束的内容。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>我们从github上获取到vue的项目目录，安装好依赖之后，不妨先理解一下目录结构。关于vue源码相关的文件都存放在packages目录下，不同的功能模块拆分成不同的目录存放。同级目录的scripts中存放开发，构建等各类脚本。package.json中scripts中定义了各种指令，首先能够关注到的就是dev命令，它运行了scripts目录下的dev.js文件。如果直接运行dev。回到dev脚本中可以看到，使用的是esbuild进行的构建，根据传入的命令参数进行不同的打包区分。到这里不妨尝试更改一下dev命令：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">@package.<span class="hljs-property">json</span>
<span class="hljs-string">&quot;scripts&quot;</span>: {
  <span class="hljs-string">&quot;dev&quot;</span>: <span class="hljs-string">&quot;node scripts/dev.js -f esm&quot;</span>,
}
</code></pre></div><p>这样就可以构建出一个ESmodule规范的文件。默认情况下，会生成一个iife形式的文件，就像直接通过script标签引入的那样。</p><p>接下来在项目中创建_examples目录，在阅读源码中各种情况的调试都可以放在该目录中进行。我们建立第一个compiler.html和compiler.js，进行测试代码的编写：</p>`,8)),d("div",Vh,[s[2]||(s[2]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[3]||(s[3]=d("span",{class:"lang"},"html",-1)),d("pre",null,[d("code",$h,[s[0]||(s[0]=x(`<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">&quot;X-UA-Compatible&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;IE=edge&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>编译HTML<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;root&quot;</span>&gt;</span>`,21)),m(ts(n.msg),1),s[1]||(s[1]=x(`<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./compiler.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
`,9))])])]),s[5]||(s[5]=x(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../packages/vue/dist/vue.esm.js&#39;</span>

<span class="hljs-title function_">createApp</span>({
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> msg = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;Welcome to use examples&#39;</span>)
    <span class="hljs-keyword">return</span> {
      msg
    }
  }
}).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#root&#39;</span>)

</code></pre></div><p>如图，因为我们打包的是ESmodule形式的文件，所以script标签引入时需要使用type=&quot;module&quot;，打包时开启了sourcemap，可以直接通过浏览器进行debug，从而深入源码内部。</p><p>同样地，我们在package.json中可以看到serve命令，它基于目录开启一个本地服务，所以我们可以直接运行npm run serve，然后在浏览器中打开对应服务，直接进行_examples/compiler.html进行查看。</p><h2 id="从createapp开始" tabindex="-1">从createApp开始 <a class="header-anchor" href="#从createapp开始" aria-label="Permalink to &quot;从createApp开始&quot;">​</a></h2><p>vue3使用的第一步就是createApp，她是在runtime-dom目录下的一个方法：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-meta">@file</span> src/packages/runtime-dom/src/index.<span class="hljs-property">ts</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> createApp = (<span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(
    <span class="hljs-string">\`这里是createApp的第一步, 我们传入的参数是:\`</span>, 
    args,
    <span class="hljs-string">\`接着进行渲染器的初始化, 然后利用渲染器的createApp方法将入参传入, 生成我们的app对象。\`</span> 
  )
  <span class="hljs-keyword">const</span> rd = <span class="hljs-title function_">ensureRenderer</span>();
  <span class="hljs-keyword">const</span> app = rd.<span class="hljs-title function_">createApp</span>(...args)

  <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">injectNativeTagCheck</span>(app)
    <span class="hljs-title function_">injectCompilerOptionsCheck</span>(app)
  }
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;得到app之后, 我们从app中解析出mount方法, 然后将app的mount方法替换掉。实际上并不是替换, 而是在执行本身的mount之前, 进行一些处理, 因为根节点的mount需要找到挂载节点, 然后生成虚拟dom节点&quot;</span>)
  <span class="hljs-keyword">const</span> { mount } = app
  app.<span class="hljs-property">mount</span> = (<span class="hljs-attr">containerOrSelector</span>: <span class="hljs-title class_">Element</span> | <span class="hljs-title class_">ShadowRoot</span> | <span class="hljs-built_in">string</span>): <span class="hljs-function"><span class="hljs-params">any</span> =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;=============App挂载开始=============&quot;</span>)
    <span class="hljs-keyword">const</span> container = <span class="hljs-title function_">normalizeContainer</span>(containerOrSelector)
    <span class="hljs-keyword">if</span> (!container) <span class="hljs-keyword">return</span>

    <span class="hljs-keyword">const</span> component = app.<span class="hljs-property">_component</span>
    <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isFunction</span>(component) &amp;&amp; !component.<span class="hljs-property">render</span> &amp;&amp; !component.<span class="hljs-property">template</span>) {
      <span class="hljs-comment">// __UNSAFE__</span>
      <span class="hljs-comment">// Reason: potential execution of JS expressions in in-DOM template.</span>
      <span class="hljs-comment">// The user must make sure the in-DOM template is trusted. If it&#39;s</span>
      <span class="hljs-comment">// rendered by the server, the template should not contain any user data.</span>
      component.<span class="hljs-property">template</span> = container.<span class="hljs-property">innerHTML</span>
      <span class="hljs-comment">// 2.x compat check</span>
      <span class="hljs-keyword">if</span> (__COMPAT__ &amp;&amp; __DEV__) {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; container.<span class="hljs-property">attributes</span>.<span class="hljs-property">length</span>; i++) {
          <span class="hljs-keyword">const</span> attr = container.<span class="hljs-property">attributes</span>[i]
          <span class="hljs-keyword">if</span> (attr.<span class="hljs-property">name</span> !== <span class="hljs-string">&#39;v-cloak&#39;</span> &amp;&amp; <span class="hljs-regexp">/^(v-|:|@)/</span>.<span class="hljs-title function_">test</span>(attr.<span class="hljs-property">name</span>)) {
            compatUtils.<span class="hljs-title function_">warnDeprecation</span>(
              <span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">GLOBAL_MOUNT_CONTAINER</span>,
              <span class="hljs-literal">null</span>
            )
            <span class="hljs-keyword">break</span>
          }
        }
      }
    }

    <span class="hljs-comment">// clear content before mounting</span>
    container.<span class="hljs-property">innerHTML</span> = <span class="hljs-string">&#39;&#39;</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;调用生成app时解析出来的mount方法&quot;</span>)
    <span class="hljs-keyword">const</span> proxy = <span class="hljs-title function_">mount</span>(container, <span class="hljs-literal">false</span>, container <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">SVGElement</span>)
    <span class="hljs-keyword">if</span> (container <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Element</span>) {
      container.<span class="hljs-title function_">removeAttribute</span>(<span class="hljs-string">&#39;v-cloak&#39;</span>)
      container.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">&#39;data-v-app&#39;</span>, <span class="hljs-string">&#39;&#39;</span>)
    }
    <span class="hljs-keyword">return</span> proxy
  }
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(
    <span class="hljs-string">&quot;至此, 我们得到了调用createApp后得到的app对象, 他现在是这个样子:&quot;</span>, 
    { ...app },
    <span class="hljs-string">&quot;在开发中, 通常在createApp后会调用use等方法进行实例配置, 我们暂时按下不谈, 结束后我们通常会调用mount方法, 即createApp().mount(&#39;#app&#39;), 此时就会调用app中的mount方法, 开始示例挂载。&quot;</span>
  )

  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;=============App生成结束=============&quot;</span>)
  <span class="hljs-keyword">return</span> app
}) <span class="hljs-keyword">as</span> <span class="hljs-title class_">CreateAppFunction</span>&lt;<span class="hljs-title class_">Element</span>&gt;
</code></pre></div><p>ensureRenderer返回一个renderer，如果renderer不存在则会调用createRenderer。获取到渲染器后，调用渲染器的createApp方法获得一个app实例。</p><p>获取到app实例之后，将其mount方法保存下来，然后重写mount方法。重写的mount方法保存获得根元素容器，获取到需要渲染的模板，置空元素的innerHTML，然后再调用mount方法。在vue的使用中，你可能看到过v-cloak属性，也是在这一步进行了删除，然后添加data-v-app属性，调用mount方法后，返回得到代理。最后返回app实例。</p><p>ensureRenderer最终指向的是位于packges/runtime-core/src/renderer.ts中的baseCreateRenderer方法，其中包含大量的函数声明，其中的render就是在其中声明的：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">  <span class="hljs-keyword">const</span> <span class="hljs-attr">render</span>: <span class="hljs-title class_">RootRenderFunction</span> = <span class="hljs-function">(<span class="hljs-params">vnode, container, isSVG</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (vnode == <span class="hljs-literal">null</span>) {
      <span class="hljs-keyword">if</span> (container.<span class="hljs-property">_vnode</span>) {
        <span class="hljs-title function_">unmount</span>(container.<span class="hljs-property">_vnode</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>)
      }
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-title function_">patch</span>(container.<span class="hljs-property">_vnode</span> || <span class="hljs-literal">null</span>, vnode, container, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, isSVG)
    }
    <span class="hljs-title function_">flushPreFlushCbs</span>()
    <span class="hljs-title function_">flushPostFlushCbs</span>()
    container.<span class="hljs-property">_vnode</span> = vnode
  }
</code></pre></div><p>baseCreateRenderer函数返回的createApp方法是通过createAPI(render, hydrate)生成的：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> createAppAPI&lt;<span class="hljs-title class_">HostElement</span>&gt;(
  <span class="hljs-attr">render</span>: <span class="hljs-title class_">RootRenderFunction</span>&lt;<span class="hljs-title class_">HostElement</span>&gt;,
  <span class="hljs-attr">hydrate</span>?: <span class="hljs-title class_">RootHydrateFunction</span>
): <span class="hljs-title class_">CreateAppFunction</span>&lt;<span class="hljs-title class_">HostElement</span>&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">createApp</span>(<span class="hljs-params">rootComponent, rootProps = <span class="hljs-literal">null</span></span>) {
    <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isFunction</span>(rootComponent)) {
      rootComponent = <span class="hljs-title function_">extend</span>({}, rootComponent)
    }
 
    <span class="hljs-keyword">if</span> (rootProps != <span class="hljs-literal">null</span> &amp;&amp; !<span class="hljs-title function_">isObject</span>(rootProps)) {
      __DEV__ &amp;&amp; <span class="hljs-title function_">warn</span>(<span class="hljs-string">\`root props passed to app.mount() must be an object.\`</span>)
      rootProps = <span class="hljs-literal">null</span>
    }

    <span class="hljs-keyword">const</span> context = <span class="hljs-title function_">createAppContext</span>()
    <span class="hljs-keyword">const</span> installedPlugins = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>()
    <span class="hljs-keyword">let</span> isMounted = <span class="hljs-literal">false</span>

    <span class="hljs-keyword">const</span> <span class="hljs-attr">app</span>: <span class="hljs-title class_">App</span> = (context.<span class="hljs-property">app</span> = {
      <span class="hljs-attr">_uid</span>: uid++,
      <span class="hljs-attr">_component</span>: rootComponent <span class="hljs-keyword">as</span> <span class="hljs-title class_">ConcreteComponent</span>,
      <span class="hljs-attr">_props</span>: rootProps,
      <span class="hljs-attr">_container</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">_context</span>: context,
      <span class="hljs-attr">_instance</span>: <span class="hljs-literal">null</span>,

      version,

      <span class="hljs-keyword">get</span> <span class="hljs-title function_">config</span>() {
        <span class="hljs-keyword">return</span> context.<span class="hljs-property">config</span>
      },

      <span class="hljs-keyword">set</span> <span class="hljs-title function_">config</span>(<span class="hljs-params">v</span>) {
        <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">warn</span>(
            <span class="hljs-string">\`app.config cannot be replaced. Modify individual options instead.\`</span>
          )
        }
      },

      <span class="hljs-title function_">use</span>(<span class="hljs-params"><span class="hljs-attr">plugin</span>: <span class="hljs-title class_">Plugin</span>, ...<span class="hljs-attr">options</span>: <span class="hljs-built_in">any</span>[]</span>) {
      	<span class="hljs-comment">//do something...</span>
        <span class="hljs-keyword">return</span> app
      },

      <span class="hljs-title function_">mixin</span>(<span class="hljs-params"><span class="hljs-attr">mixin</span>: <span class="hljs-title class_">ComponentOptions</span></span>) {
      	<span class="hljs-comment">//do something...</span>
        <span class="hljs-keyword">return</span> app
      },

      <span class="hljs-title function_">component</span>(<span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">component</span>?: <span class="hljs-title class_">Component</span>): <span class="hljs-built_in">any</span> {
      	<span class="hljs-comment">//do something...</span>
        <span class="hljs-keyword">return</span> app
      },

      <span class="hljs-title function_">directive</span>(<span class="hljs-params"><span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">directive</span>?: <span class="hljs-title class_">Directive</span></span>) {
      	<span class="hljs-comment">//do something...</span>
        <span class="hljs-keyword">return</span> app
      },

      <span class="hljs-title function_">mount</span>(
        <span class="hljs-attr">rootContainer</span>: <span class="hljs-title class_">HostElement</span>,
        <span class="hljs-attr">isHydrate</span>?: <span class="hljs-built_in">boolean</span>,
        <span class="hljs-attr">isSVG</span>?: <span class="hljs-built_in">boolean</span>
      ): <span class="hljs-built_in">any</span> {
    	<span class="hljs-comment">//do something...</span>
      },

      <span class="hljs-title function_">unmount</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">//do something...</span>
      },

      <span class="hljs-title function_">provide</span>(<span class="hljs-params">key, value</span>) {
			<span class="hljs-comment">//do something...</span>
      },

      <span class="hljs-title function_">runWithContext</span>(<span class="hljs-params">fn</span>) {
			<span class="hljs-comment">//do something...</span>
      }
    })

    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`3. 利用createAppAPI生成createApp方法, 然后通过该方法生成我们的app, 实际上
    就是主应用, 其内容如下:\`</span>,
    {...app},
    <span class="hljs-string">\`我们可以看到, app对象上存在use, mixin, component等方法, 这里就是我们在使用Vue后得到的Vue实例。\`</span>)

    <span class="hljs-keyword">if</span> (__COMPAT__) {
      <span class="hljs-title function_">installAppCompatProperties</span>(app, context, render)
    }

    <span class="hljs-keyword">return</span> app
  }
}
</code></pre></div><p>可以看到，首先掉红了createAppContext创建了appContext对象，赋值给了context，然后生成了app对象，其中包含各种属性和方法，然后将这个app返回，其中就包含了我们上文提到的mount方法。</p><h2 id="mount方法" tabindex="-1">mount方法 <a class="header-anchor" href="#mount方法" aria-label="Permalink to &quot;mount方法&quot;">​</a></h2><p>mount方法实际上是最关键的方法，其中包含了虚拟vNode，render和patch的所有核心功能。mount的调用流程大致如下：</p><ol><li>调用createVNode创建虚拟节点。</li><li>调用render进行判断，是进行卸载还是进行渲染。</li><li>调用patch，进行dom的diff，渲染出页面。</li></ol><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h2><p>笔者的第一篇开头引导到此也结束了，接下来就是要进入到mount方法中窥探vue内部流程的全貌。在本章节中，笔者大致介绍了如何去开启一个源码阅读的过程，以及源码中具有的内容和创建vue时的前期流程。其表达大致如下：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1681098416354-99f677b5-54ba-456c-bf66-4fbac3888a16.png" alt=""></p><p>其他内容将在第二章节中详细说明。</p>`,20))])}const Hh=A(Mh,[["render",Lh]]),zh=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Rh,default:Hh},Symbol.toStringTag,{value:"Module"})),Fh=JSON.parse('{"title":"Vue.js源码系列(三)：模板解析与编译","description":"","frontmatter":{"title":"Vue.js源码系列(三)：模板解析与编译","summary":"前言最近脑袋里东西太多，乱糟糟的，希望这种状态赶紧过去吧。经过前两节的介绍，我们大致了解了第一次渲染的一些基本原理。本章节将会对这个过程中的模板解析部分做一说明。当我们使用单文件写法进行vue开发时，会在template中编写我们的组件模板，那么vue时如何处理这些字符串模板的呢？","date":"2023-04-10T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue.js源码系列(三)：模板解析与编译.md","filePath":"content/blog/Vue.js源码系列(三)：模板解析与编译.md"}'),Jh={name:"content/blog/Vue.js源码系列(三)：模板解析与编译.md"},Gh={class:"language-typescript vp-adaptive-theme"},Wh={class:"hljs language-typescript"},Uh={class:"language-typescript vp-adaptive-theme"},Bh={class:"hljs language-typescript"},Yh={class:"hljs-string"},Xh={class:"language-typescript vp-adaptive-theme"},Zh={class:"hljs language-typescript"},Qh={class:"hljs-string"};function Kh(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[s[36]||(s[36]=d("h2",{id:"前言",tabindex:"-1"},[m("前言 "),d("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),s[37]||(s[37]=d("p",null,"最近脑袋里东西太多，乱糟糟的，希望这种状态赶紧过去吧。",-1)),d("p",null,[s[0]||(s[0]=m("经过前两节的介绍，我们大致了解了第一次渲染的一些基本原理。本章节将会对这个过程中的模板解析部分做一说明。当我们使用单文件写法进行vue开发时，会在template中编写我们的组件模板，那么vue时如何处理这些字符串模板的呢？包括")),d("code",null,ts(n.xxx),1),s[1]||(s[1]=m("这样的插值内容是如何解析的呢？这就是vue的compile完成的内容。"))]),s[38]||(s[38]=d("h2",{id:"测试代码",tabindex:"-1"},[m("测试代码 "),d("a",{class:"header-anchor",href:"#测试代码","aria-label":'Permalink to "测试代码"'},"​")],-1)),s[39]||(s[39]=d("p",null,"和之前一样，我们使用一个测试模板来进行测试，在这里我们为了简要说明，不使用component，keep-alive等标签和引入自定义组件，而使用基本的vue语法内容进行处理，我们构建的测试template如下：",-1)),d("div",Gh,[s[13]||(s[13]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[14]||(s[14]=d("span",{class:"lang"},"typescript",-1)),d("pre",null,[d("code",Wh,[s[2]||(s[2]=d("span",{class:"hljs-comment"},"// 模板部分",-1)),s[3]||(s[3]=m(`
  <div id=`)),s[4]||(s[4]=d("span",{class:"hljs-string"},'"root"',-1)),m(`>
    `+ts(n.msg)+`
    <button `,1),s[5]||(s[5]=d("span",{class:"hljs-meta"},"@click",-1)),s[6]||(s[6]=m("=")),s[7]||(s[7]=d("span",{class:"hljs-string"},'"clickMe"',-1)),s[8]||(s[8]=m(" :")),s[9]||(s[9]=d("span",{class:"hljs-keyword"},"class",-1)),s[10]||(s[10]=m("=")),s[11]||(s[11]=d("span",{class:"hljs-string"},`"['text-class']"`,-1)),m("> "+ts(n.btnName)+` </button>
    `,1),s[12]||(s[12]=x(`<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个测试模板<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
  &lt;/div&gt;

<span class="hljs-comment">//js代码部分</span>
<span class="hljs-title function_">createApp</span>({
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> msg = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;Welcome to use examples&#39;</span>);
    <span class="hljs-keyword">const</span> btnName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&quot;Click Button&quot;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">clickMe</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">alert</span>(<span class="hljs-string">&quot;template click&quot;</span>)
    }
    <span class="hljs-keyword">return</span> {
      msg,
      btnName,
      clickMe
    }
  }
}).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#root&#39;</span>)
`,38))])])]),s[40]||(s[40]=x(`<p>在上一节中我们提到了renderComponentRoot方法，传入组件实例时，组件实例上的render属性为空，方法执行完毕之后render方法将会被赋予一个函数。这个过程是在内部执行<code>setupStatefulComponent -&gt; finishComponentSetup</code>方法时处理的，finishComponentSetup中执行了一段如下代码：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title class_">Component</span>.<span class="hljs-property">render</span> = <span class="hljs-title function_">compile</span>(template, finalCompilerOptions)
</code></pre></div><p>调用了compile方法解析template。compile方法的入口位于/src/packages/vue-compat/src/index.ts，内部判断template的类型之后，调用compile函数，传入template和配置项进行解析。</p><h2 id="compile" tabindex="-1">compile <a class="header-anchor" href="#compile" aria-label="Permalink to &quot;compile&quot;">​</a></h2><p>compile方法返回baseCompile方法，相关处理都是在baseCompile方法中进行的。此时我们传入的template为如下字符串，即为root内的innerHtml。</p>`,5)),d("div",Uh,[s[16]||(s[16]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[17]||(s[17]=d("span",{class:"lang"},"typescript",-1)),d("pre",null,[d("code",Bh,[d("span",Yh,"`"+ts(n.msg)+`
	<button @click="clickMe" :class="['text-class']"> `+ts(n.btnName)+" </button>\n<p>这是一个测试模板</p>`",1),s[15]||(s[15]=m(`
`))])])]),s[41]||(s[41]=x(`<p>baseCompile方法中调用到baseParse，实际上解析就是将其转化为抽象语法树的过程。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">baseParse</span>(<span class="hljs-params">
  <span class="hljs-attr">content</span>: <span class="hljs-built_in">string</span>,
  <span class="hljs-attr">options</span>: <span class="hljs-title class_">ParserOptions</span> = {}
</span>): <span class="hljs-title class_">RootNode</span> {
  <span class="hljs-keyword">const</span> context = <span class="hljs-title function_">createParserContext</span>(content, options)
  <span class="hljs-keyword">const</span> start = <span class="hljs-title function_">getCursor</span>(context)
  <span class="hljs-keyword">return</span> <span class="hljs-title function_">createRoot</span>(
    <span class="hljs-title function_">parseChildren</span>(context, <span class="hljs-title class_">TextModes</span>.<span class="hljs-property">DATA</span>, []),
    <span class="hljs-title function_">getSelection</span>(context, start)
  )
}
</code></pre></div><ol><li>首先调用createParserContext创建一个解析用的上下文，然后获得解析的其实位置。start可以理解为一个坐标，表示现在解析到了字符串的哪个位置，例如一开始时其中的属性为column: 1, line: 1, offset: 0。表示目前是第一行第一列，偏移量为0，接着调用parseChildren，进行解析。</li><li>parseChildren会挨个进行判断，因为我们的模板字符串开始包括了很多的空格字符，所以第一遍扫描时会直接进入parseText，最终输出一个对象如下：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">{
    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">2</span>,
    <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;\\n    &quot;</span>,
    <span class="hljs-string">&quot;loc&quot;</span>: {
        <span class="hljs-string">&quot;start&quot;</span>: {
            <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">1</span>,
            <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">1</span>,
            <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">0</span>
        },
        <span class="hljs-string">&quot;end&quot;</span>: {
            <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">5</span>,
            <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">2</span>,
            <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">5</span>
        },
        <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;\\n    &quot;</span>
    }
}
</code></pre></div><p>我们可以看到被格式化的部分表示这个节点的type为2(2表示是一个TEXT节点)，内容是换行符加数个空格字符，从第一行第一列开始到第二行第五列结束，这已经具有了初步的字符串转化为结构化的样式。然后将这个节点推入nodes数组。</p><ol start="3"><li>接着进行转化，接下来判断到字符串以{{开头, 调用parseInterpolation(context, mode)进行转化:</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">parseInterpolation</span>(<span class="hljs-params">
  <span class="hljs-attr">context</span>: <span class="hljs-title class_">ParserContext</span>,
  <span class="hljs-attr">mode</span>: <span class="hljs-title class_">TextModes</span>
</span>): <span class="hljs-title class_">InterpolationNode</span> | <span class="hljs-literal">undefined</span> {
  <span class="hljs-keyword">const</span> [open, close] = context.<span class="hljs-property">options</span>.<span class="hljs-property">delimiters</span>
  __TEST__ &amp;&amp; <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">startsWith</span>(context.<span class="hljs-property">source</span>, open))

  <span class="hljs-keyword">const</span> closeIndex = context.<span class="hljs-property">source</span>.<span class="hljs-title function_">indexOf</span>(close, open.<span class="hljs-property">length</span>)
  <span class="hljs-keyword">if</span> (closeIndex === -<span class="hljs-number">1</span>) {
    <span class="hljs-title function_">emitError</span>(context, <span class="hljs-title class_">ErrorCodes</span>.<span class="hljs-property">X_MISSING_INTERPOLATION_END</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">undefined</span>
  }

  <span class="hljs-keyword">const</span> start = <span class="hljs-title function_">getCursor</span>(context)
  <span class="hljs-title function_">advanceBy</span>(context, open.<span class="hljs-property">length</span>)
  <span class="hljs-keyword">const</span> innerStart = <span class="hljs-title function_">getCursor</span>(context)
  <span class="hljs-keyword">const</span> innerEnd = <span class="hljs-title function_">getCursor</span>(context)
  <span class="hljs-keyword">const</span> rawContentLength = closeIndex - open.<span class="hljs-property">length</span>
  <span class="hljs-keyword">const</span> rawContent = context.<span class="hljs-property">source</span>.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, rawContentLength)
  <span class="hljs-keyword">const</span> preTrimContent = <span class="hljs-title function_">parseTextData</span>(context, rawContentLength, mode)
  <span class="hljs-keyword">const</span> content = preTrimContent.<span class="hljs-title function_">trim</span>()
  <span class="hljs-keyword">const</span> startOffset = preTrimContent.<span class="hljs-title function_">indexOf</span>(content)
  <span class="hljs-keyword">if</span> (startOffset &gt; <span class="hljs-number">0</span>) {
    <span class="hljs-title function_">advancePositionWithMutation</span>(innerStart, rawContent, startOffset)
  }
  <span class="hljs-keyword">const</span> endOffset =
    rawContentLength - (preTrimContent.<span class="hljs-property">length</span> - content.<span class="hljs-property">length</span> - startOffset)
  <span class="hljs-title function_">advancePositionWithMutation</span>(innerEnd, rawContent, endOffset)
  <span class="hljs-title function_">advanceBy</span>(context, close.<span class="hljs-property">length</span>)

  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">type</span>: <span class="hljs-title class_">NodeTypes</span>.<span class="hljs-property">INTERPOLATION</span>,
    <span class="hljs-attr">content</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">NodeTypes</span>.<span class="hljs-property">SIMPLE_EXPRESSION</span>,
      <span class="hljs-attr">isStatic</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-comment">// Set \`isConstant\` to false by default and will decide in transformExpression</span>
      <span class="hljs-attr">constType</span>: <span class="hljs-title class_">ConstantTypes</span>.<span class="hljs-property">NOT_CONSTANT</span>,
      content,
      <span class="hljs-attr">loc</span>: <span class="hljs-title function_">getSelection</span>(context, innerStart, innerEnd)
    },
    <span class="hljs-attr">loc</span>: <span class="hljs-title function_">getSelection</span>(context, start)
  }
}
</code></pre></div>`,7)),d("p",null,[s[18]||(s[18]=m("因为")),d("code",null,ts(n.对应地闭合标志是),1),s[19]||(s[19]=m("，直接找到")),s[20]||(s[20]=d("code",null,"}}",-1)),s[21]||(s[21]=m("所在位置，这里需要注意，在转化的过程中，上下文context的source就是源字符串，随着转化进行，每一个部分被处理完毕后，就从source中切除对应地部分。这里通过preTrimContent方法提取出双大括号之间的内容，然后进行trim，获取到其中的内容，之后移动坐标，从source中切除")),d("code",null,ts(n.xxx),1),s[22]||(s[22]=m("部分的内容，返回刚刚处理的节点"))]),d("div",Xh,[s[25]||(s[25]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[26]||(s[26]=d("span",{class:"lang"},"typescript",-1)),d("pre",null,[d("code",Zh,[s[23]||(s[23]=x(`{
    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">5</span>,
    <span class="hljs-string">&quot;content&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">4</span>,
        <span class="hljs-string">&quot;isStatic&quot;</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-string">&quot;constType&quot;</span>: <span class="hljs-number">0</span>,
        <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;msg&quot;</span>,
        <span class="hljs-string">&quot;loc&quot;</span>: {
            <span class="hljs-string">&quot;start&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">8</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">2</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">8</span>
            },
            <span class="hljs-string">&quot;end&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">11</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">2</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">11</span>
            },
            <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;msg&quot;</span>
        }
    },
    <span class="hljs-string">&quot;loc&quot;</span>: {
        <span class="hljs-string">&quot;start&quot;</span>: {
            <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">5</span>,
            <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">2</span>,
            <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">5</span>
        },
        <span class="hljs-string">&quot;end&quot;</span>: {
            <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">14</span>,
            <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">2</span>,
            <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">14</span>
        },
        <span class="hljs-string">&quot;source&quot;</span>: `,89)),d("span",Qh,'"'+ts(n.msg)+'"',1),s[24]||(s[24]=m(`
    }
}
`))])])]),d("p",null,[s[27]||(s[27]=m("type为5表示这是一个插值内容，source中是我们处理的内容部分，")),d("code",null,ts(n.msg),1),s[28]||(s[28]=m("。因为其中包含一个变量，isStatic为false，表示这不是一个静态节点。然后将该节点推入nodes中。"))]),s[42]||(s[42]=x(`<ol start="4"><li>处理完空白字符之后，循环扫描到<code>&lt;</code>开头的字符，进入到标签处理部分的工作。<code>&lt;</code>后可能有比较多的情况，最常见的就是跟字母，也是我们测试代码中的情况，所以进入到parseElement函数中处理，parseElement中调用parseTag进行标签处理，在parseTag中，会调用parseAttributes将标签上的属性转化为props，经过转化我们的测试内容将会得到如下的props</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">[
    {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">7</span>,
        <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;on&quot;</span>,
        <span class="hljs-string">&quot;exp&quot;</span>: {
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">4</span>,
            <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;clickMe&quot;</span>,
            <span class="hljs-string">&quot;isStatic&quot;</span>: <span class="hljs-literal">false</span>,
            <span class="hljs-string">&quot;constType&quot;</span>: <span class="hljs-number">0</span>,
            <span class="hljs-string">&quot;loc&quot;</span>: {
                <span class="hljs-string">&quot;start&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">21</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">35</span>
                },
                <span class="hljs-string">&quot;end&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">28</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">42</span>
                },
                <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;clickMe&quot;</span>
            }
        },
        <span class="hljs-string">&quot;arg&quot;</span>: {
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">4</span>,
            <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
            <span class="hljs-string">&quot;isStatic&quot;</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">&quot;constType&quot;</span>: <span class="hljs-number">3</span>,
            <span class="hljs-string">&quot;loc&quot;</span>: {
                <span class="hljs-string">&quot;start&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">14</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">28</span>
                },
                <span class="hljs-string">&quot;end&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">33</span>
                },
                <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>
            }
        },
        <span class="hljs-string">&quot;modifiers&quot;</span>: [],
        <span class="hljs-string">&quot;loc&quot;</span>: {
            <span class="hljs-string">&quot;start&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">13</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">27</span>
            },
            <span class="hljs-string">&quot;end&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">29</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">43</span>
            },
            <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;@click=\\&quot;clickMe\\&quot;&quot;</span>
        }
    },
    {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">7</span>,
        <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;bind&quot;</span>,
        <span class="hljs-string">&quot;exp&quot;</span>: {
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">4</span>,
            <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;[&#39;text-class&#39;]&quot;</span>,
            <span class="hljs-string">&quot;isStatic&quot;</span>: <span class="hljs-literal">false</span>,
            <span class="hljs-string">&quot;constType&quot;</span>: <span class="hljs-number">0</span>,
            <span class="hljs-string">&quot;loc&quot;</span>: {
                <span class="hljs-string">&quot;start&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">38</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">52</span>
                },
                <span class="hljs-string">&quot;end&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">52</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">66</span>
                },
                <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;[&#39;text-class&#39;]&quot;</span>
            }
        },
        <span class="hljs-string">&quot;arg&quot;</span>: {
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-number">4</span>,
            <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;class&quot;</span>,
            <span class="hljs-string">&quot;isStatic&quot;</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">&quot;constType&quot;</span>: <span class="hljs-number">3</span>,
            <span class="hljs-string">&quot;loc&quot;</span>: {
                <span class="hljs-string">&quot;start&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">31</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">45</span>
                },
                <span class="hljs-string">&quot;end&quot;</span>: {
                    <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">36</span>,
                    <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                    <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">50</span>
                },
                <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;class&quot;</span>
            }
        },
        <span class="hljs-string">&quot;modifiers&quot;</span>: [],
        <span class="hljs-string">&quot;loc&quot;</span>: {
            <span class="hljs-string">&quot;start&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">30</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">44</span>
            },
            <span class="hljs-string">&quot;end&quot;</span>: {
                <span class="hljs-string">&quot;column&quot;</span>: <span class="hljs-number">53</span>,
                <span class="hljs-string">&quot;line&quot;</span>: <span class="hljs-number">3</span>,
                <span class="hljs-string">&quot;offset&quot;</span>: <span class="hljs-number">67</span>
            },
            <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-string">&quot;:class=\\&quot;[&#39;text-class&#39;]\\&quot;&quot;</span>
        }
    }
]
</code></pre></div><p>一个是绑定的点击时间，另一个是class类名。之后我们得到了转化之后的元素节点，这里元素可能发生嵌套，所以parseElement中会执行parseChildren继续转化，不同的是ancestors祖先栈结构里面会存放当前元素，作为Children转化的子孙节点。我们可以预测，递归向内转化，得到的会是类似于上面的插值节点，因为button内部是一个插值语法。执行完毕之后，将获得的children赋值给我们的button结构，最终得到的button的node结构化数据如下</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1681207901314-fedaa31c-a7f9-4f3f-b0f0-9d3b35534d9c.png" alt=""></p><p>可以看到其中有children属性。</p><ol start="5"><li>转化仍然继续，接下来是换行空格，同步骤1，然后监测到另一个<code>&lt;</code>开头的内容，对应就是我们的p元素部分，然后执行与button处理类似的路径流程，最终得到node推入nodes，整个转化结束，得到了一个nodes数组。</li><li>执行完上述处理之后，接下来统一处理空白字符问题。依次循环处理nodes中的每个node，如果节点满足空白条件，直接删除，从上述结果来看，我们一开始转化的<code>/n</code>节点和最后转化的<code>/n</code>节点就是这样的节点，在nodes中直接将这两个位置上的node置为null，经过循环处理之后，返回不为空的nodes。</li><li>最后交给createRoot方法，生成根节点的结构化数据，就得到了我们的抽象语法树。</li></ol><p>以上就是编译部分的内容，它负责将模板的字符串形式，转化为一个树形结构。抽象语法树在前端很多内容方面都有使用，利用语法树我们能够进行代码的转化和优化等操作。</p><h2 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h2><p>在经过编译得到抽象语法树之后，我们还要进行一次转化，这也是紧随compile之后的步骤，调用了transform函数。transform接收两个参数，第一个是抽象语法树，第二个options中包含诸多的转化辅助函数。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">transform</span>(<span class="hljs-params"><span class="hljs-attr">root</span>: <span class="hljs-title class_">RootNode</span>, <span class="hljs-attr">options</span>: <span class="hljs-title class_">TransformOptions</span></span>) {
  <span class="hljs-keyword">const</span> context = <span class="hljs-title function_">createTransformContext</span>(root, options)
  <span class="hljs-title function_">traverseNode</span>(root, context)
  <span class="hljs-keyword">if</span> (options.<span class="hljs-property">hoistStatic</span>) {
    <span class="hljs-title function_">hoistStatic</span>(root, context)
  }
  <span class="hljs-keyword">if</span> (!options.<span class="hljs-property">ssr</span>) {
    <span class="hljs-title function_">createRootCodegen</span>(root, context)
  }
  <span class="hljs-comment">// finalize meta information</span>
  root.<span class="hljs-property">helpers</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>([...context.<span class="hljs-property">helpers</span>.<span class="hljs-title function_">keys</span>()])
  root.<span class="hljs-property">components</span> = [...context.<span class="hljs-property">components</span>]
  root.<span class="hljs-property">directives</span> = [...context.<span class="hljs-property">directives</span>]
  root.<span class="hljs-property">imports</span> = context.<span class="hljs-property">imports</span>
  root.<span class="hljs-property">hoists</span> = context.<span class="hljs-property">hoists</span>
  root.<span class="hljs-property">temps</span> = context.<span class="hljs-property">temps</span>
  root.<span class="hljs-property">cached</span> = context.<span class="hljs-property">cached</span>

  <span class="hljs-keyword">if</span> (__COMPAT__) {
    root.<span class="hljs-property">filters</span> = [...context.<span class="hljs-property">filters</span>!]
  }
}
</code></pre></div>`,10)),d("ol",null,[s[33]||(s[33]=d("li",null,"转化函数首先创建一个转化上下文，context上有很多方法，在转化的过程中调用。",-1)),d("li",null,[s[30]||(s[30]=m("然后调用traverseNode函数，对node执行不同的transform plugins，主要是一些特别的处理，例")),C(p,{style:{color:"rgb(33, 53, 71)"}},{default:R(()=>s[29]||(s[29]=[m("Suspense，元素的style属性处理等。")])),_:1,__:[29]})]),d("li",null,[C(p,{style:{color:"rgb(33, 53, 71)"}},{default:R(()=>s[31]||(s[31]=[m("这里判断元素是ROOT，就会调用")])),_:1,__:[31]}),s[32]||(s[32]=m("traverseChildren，对children中的node应用traverseNode方法，最终对每个节点应用transform plugins。具体的plugins处理如果有需要，我们将会在后续举例说明。"))]),s[34]||(s[34]=d("li",null,"处理完所有节点之后，将会进入到vue3的一个新的特性步骤：静态提升。关于这部分内容，我们将在下面说明，这里进行统一的静态提升操作。",-1)),s[35]||(s[35]=d("li",null,"接着创建root的codegen之后，完善抽象语法树，退出transform操作。",-1))]),s[43]||(s[43]=x(`<p>事实上，transform操作就是对抽象语法树建立的node，应用不同的转化插件，进一步处理，包括指令，属性等，得到更近一步的节点结构。经历过转化之后，将会经历最后一步：generate。</p><h2 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-label="Permalink to &quot;generate&quot;">​</a></h2><p>在经历过上述步骤之后，我们得到了编译所需的完备的抽象语法树。generate就要开始从抽象语法树到可执行代码块的转化过程。</p><ol><li>经过抽象语法书的转化之后，我们的抽象语法树上有很多的帮助函数helpers，接下来就是基于这些helpers来生成代码块。在生成代码块之前，将会判断几个转化环境，例如需不需要scopeId，以及是不是script setup环境等。</li><li>我们最终生成的是一个函数字符串，经过因为非SSR，所以首先生成一个<code>render : function (xxx) {</code>的函数头。接着使用with(_ctx)，这也标志着代码实际运行时，是利用with来处理ctx参数应用到函数内部的，接下来还会对不同的node类型，直接生成不同的函数调用字符串，进行组合，最后统一闭合。我们上面的代码测试代码最终生成的script block就变成了如下内容：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-string">\`const _Vue = Vue
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = [&quot;onClick&quot;]
const _hoisted_2 = /*#__PURE__*/_createElementVNode(&quot;p&quot;, null, &quot;这是一个测试模板&quot;, -1 /* HOISTED */)

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = _Vue

    return (_openBlock(), _createElementBlock(_Fragment, null, [
      _createTextVNode(_toDisplayString(msg) + &quot; &quot;, 1 /* TEXT */),
      _createElementVNode(&quot;button&quot;, {
        onClick: clickMe,
        class: _normalizeClass([&#39;text-class&#39;])
      }, _toDisplayString(btnName), 11 /* TEXT, CLASS, PROPS */, _hoisted_1),
      _hoisted_2
    ], 64 /* STABLE_FRAGMENT */))
  }
}\`</span>
</code></pre></div><p>我们可以看到，我们的抽象语法树最终变成了一个函数字符串。</p><h2 id="再次回到compile" tabindex="-1">再次回到compile <a class="header-anchor" href="#再次回到compile" aria-label="Permalink to &quot;再次回到compile&quot;">​</a></h2><p>通过上面的处理，我们得到了函数字符串，经过上述步骤之后，我们最终回到compileToFunction函数中来，从compile的结果中取出code，接着生成我们的render函数：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> render = (
    __GLOBAL__ ? <span class="hljs-keyword">new</span> <span class="hljs-title class_">Function</span>(code)() : <span class="hljs-keyword">new</span> <span class="hljs-title class_">Function</span>(<span class="hljs-string">&#39;Vue&#39;</span>, code)(runtimeDom)
  ) <span class="hljs-keyword">as</span> <span class="hljs-title class_">RenderFunction</span>

  <span class="hljs-comment">// mark the function as runtime compiled</span>
  ;(render <span class="hljs-keyword">as</span> <span class="hljs-title class_">InternalRenderFunction</span>).<span class="hljs-property">_rc</span> = <span class="hljs-literal">true</span>

</code></pre></div><p>我们的render就是利用new Function方法，传入code，生成最终render代码。至此，我们的内容就和mount解析中的renderComponentRoot方法形成了闭环，通过调用compile，生成了对应的render函数。</p><h2 id="聊聊静态提升" tabindex="-1">聊聊静态提升 <a class="header-anchor" href="#聊聊静态提升" aria-label="Permalink to &quot;聊聊静态提升&quot;">​</a></h2><p>静态提升是vue3基于性能做出的一个优化点。在diff算法中，要依次对节点进行比较，所以执行的速度取决于需要比较的节点数量。vue2中没有静态提升（大家都这么说，但是我没有看过vue2的源码），这意味着无论节点是何种状态，都需要进行一次比较，而通过上面的测试代码可以看出，我们的p标签内容不包含任何“变量”，这意味着p标签本身是静态的，在dom diff时完全可以跳过，因此提升性能。从上面的生成的编译模板中可以看出，静态节点会被编译为</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> _hoisted_2 = <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title function_">_createElementVNode</span>(<span class="hljs-string">&quot;p&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;这是一个测试模板&quot;</span>, -<span class="hljs-number">1</span> <span class="hljs-comment">/* HOISTED */</span>)
</code></pre></div><p>然后直接在return结果中引用。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>在本章节中，说明了模板的解析与编译功能，看到了模板字符串时如何变成抽象语法树进而再变成渲染函数的。当然，其中还有一些内容没有详细说明，例如指令代码的处理等，如果后续有必要将会对这些细节再加以说明。另外，我们的测试代码部分都是在浏览器下直接运行，而非在打包工具下的代码编写，所以类似于scope部分也一带略过，在主流程全部介绍完毕之后，再用单独章节说明一下sfc部分内容，回头再对这部分内容进行补充。</p>`,16))])}const su=A(Jh,[["render",Kh]]),nu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Fh,default:su},Symbol.toStringTag,{value:"Module"})),au=JSON.parse('{"title":"Vue.js源码系列(二)：mount与第一次渲染","description":"","frontmatter":{"title":"Vue.js源码系列(二)：mount与第一次渲染","summary":"前言最近因为一些事情，心情不怎么美丽，又开始思考一个问题：婚姻究竟为我们带来了什么？比起这些偏社会学的哲学思考，代码确实友好的多，因为它是有答案的。也希望有一天我也能得到上面问题的我自己的答案吧。工作上使用公司的脚手架，感觉不太好用，半成品，找个机会重新做一下吧。本文章节将从mount开始，理...","date":"2023-04-10T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue.js源码系列(二)：mount与第一次渲染.md","filePath":"content/blog/Vue.js源码系列(二)：mount与第一次渲染.md"}'),tu={name:"content/blog/Vue.js源码系列(二)：mount与第一次渲染.md"},eu={class:"language-javascript vp-adaptive-theme"},lu={class:"hljs language-javascript"},pu={class:"language-xml"};function ou(n,s,a,t,e,l){return k(),q("div",null,[s[9]||(s[9]=x(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>最近因为一些事情，心情不怎么美丽，又开始思考一个问题：婚姻究竟为我们带来了什么？比起这些偏社会学的哲学思考，代码确实友好的多，因为它是有答案的。也希望有一天我也能得到上面问题的我自己的答案吧。</p><p>工作上使用公司的脚手架，感觉不太好用，半成品，找个机会重新做一下吧。</p><p>本文章节将从mount开始，理解在createApp得到app实例之后，如何进行挂载。</p><h2 id="mount开始的流程" tabindex="-1">mount开始的流程 <a class="header-anchor" href="#mount开始的流程" aria-label="Permalink to &quot;mount开始的流程&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">      <span class="hljs-title function_">mount</span>(
        <span class="hljs-attr">rootContainer</span>: <span class="hljs-title class_">HostElement</span>,
        <span class="hljs-attr">isHydrate</span>?: <span class="hljs-built_in">boolean</span>,
        <span class="hljs-attr">isSVG</span>?: <span class="hljs-built_in">boolean</span>
      ): <span class="hljs-built_in">any</span> {
        <span class="hljs-keyword">if</span> (!isMounted) {
          <span class="hljs-comment">// #5571</span>
          <span class="hljs-keyword">if</span> (__DEV__ &amp;&amp; (rootContainer <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).<span class="hljs-property">__vue_app__</span>) {
            <span class="hljs-title function_">warn</span>(
              <span class="hljs-string">\`There is already an app instance mounted on the host container.\\n\`</span> +
                <span class="hljs-string">\` If you want to mount another app on the same host container,\`</span> +
                <span class="hljs-string">\` you need to unmount the previous app by calling \\\`app.unmount()\\\` first.\`</span>
            )
          }
          
          <span class="hljs-keyword">const</span> vnode = <span class="hljs-title function_">createVNode</span>(
            rootComponent <span class="hljs-keyword">as</span> <span class="hljs-title class_">ConcreteComponent</span>,
            rootProps
          )
          <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;1. 执行挂载时, 根据传入的根组件对象调用createVNode生成虚拟dom的虚拟node, createVNode&quot;</span>)
          <span class="hljs-comment">// store app context on the root VNode.</span>
          <span class="hljs-comment">// this will be set on the root instance on initial mount.</span>
          vnode.<span class="hljs-property">appContext</span> = context

          <span class="hljs-comment">// HMR root reload</span>
          <span class="hljs-keyword">if</span> (__DEV__) {
            context.<span class="hljs-property">reload</span> = <span class="hljs-function">() =&gt;</span> {
              <span class="hljs-title function_">render</span>(<span class="hljs-title function_">cloneVNode</span>(vnode), rootContainer, isSVG)
            }
          }

          <span class="hljs-keyword">if</span> (isHydrate &amp;&amp; hydrate) {
            <span class="hljs-title function_">hydrate</span>(vnode <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>&lt;<span class="hljs-title class_">Node</span>, <span class="hljs-title class_">Element</span>&gt;, rootContainer <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>)
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-title function_">render</span>(vnode, rootContainer, isSVG)
          }
          isMounted = <span class="hljs-literal">true</span>
          app.<span class="hljs-property">_container</span> = rootContainer
          <span class="hljs-comment">// for devtools and telemetry</span>
          ;(rootContainer <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).<span class="hljs-property">__vue_app__</span> = app

          <span class="hljs-keyword">if</span> (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
            app.<span class="hljs-property">_instance</span> = vnode.<span class="hljs-property">component</span>
            <span class="hljs-title function_">devtoolsInitApp</span>(app, version)
          }

          <span class="hljs-keyword">return</span> <span class="hljs-title function_">getExposeProxy</span>(vnode.<span class="hljs-property">component</span>!) || vnode.<span class="hljs-property">component</span>!.<span class="hljs-property">proxy</span>
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">warn</span>(
            <span class="hljs-string">\`App has already been mounted.\\n\`</span> +
              <span class="hljs-string">\`If you want to remount the same app, move your app creation logic \`</span> +
              <span class="hljs-string">\`into a factory function and create fresh app instances for each \`</span> +
              <span class="hljs-string">\`mount - e.g. \\\`const createMyApp = () =&gt; createApp(App)\\\`\`</span>
          )
        }
      },
</code></pre></div><p>此处就是mount的方法定义，首先调用createVNode获取vnode，rootContainer就是createApp时的参数，rootProps是根节点的props，一般使用的过程中，这个值为null。然后将context绑定在根节点上，然后就要开始调用渲染函数，完毕之后将isMounted变量置为true，保存rootContainer到实例的_container属性上，返回vnode.component的代理，结束。</p><p>从上面的代码中可以看出，mount内部最核心的方法就是render函数，也就是渲染函数。</p><h2 id="核心-render" tabindex="-1">核心：render <a class="header-anchor" href="#核心-render" aria-label="Permalink to &quot;核心：render&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">  <span class="hljs-keyword">const</span> <span class="hljs-attr">render</span>: <span class="hljs-title class_">RootRenderFunction</span> = <span class="hljs-function">(<span class="hljs-params">vnode, container, isSVG</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (vnode == <span class="hljs-literal">null</span>) {
      <span class="hljs-keyword">if</span> (container.<span class="hljs-property">_vnode</span>) {
        <span class="hljs-title function_">unmount</span>(container.<span class="hljs-property">_vnode</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>)
      }
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-title function_">patch</span>(container.<span class="hljs-property">_vnode</span> || <span class="hljs-literal">null</span>, vnode, container, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, isSVG)
    }
    <span class="hljs-title function_">flushPreFlushCbs</span>()
    <span class="hljs-title function_">flushPostFlushCbs</span>()
    container.<span class="hljs-property">_vnode</span> = vnode
  }
</code></pre></div><p>其实这里的这个render函数非常简单，可以将其理解为一个分发器，根据条件不同来决定进行unmount操作或者patch操作。</p><p>在执行完毕之后，调用flush操作，执行回调。如果是初次渲染，则肯定会进入到patch方法中，因此我们只需要关注patch部分的代码。</p><h3 id="更进一步的核心-patch" tabindex="-1">更进一步的核心：patch <a class="header-anchor" href="#更进一步的核心-patch" aria-label="Permalink to &quot;更进一步的核心：patch&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">// @src/packages/runtime-core/src/renderer.ts</span>
  
<span class="hljs-keyword">const</span> <span class="hljs-attr">patch</span>: <span class="hljs-title class_">PatchFn</span> = <span class="hljs-function">(<span class="hljs-params">
    n1,
    n2,
    container,
    anchor = <span class="hljs-literal">null</span>,
    parentComponent = <span class="hljs-literal">null</span>,
    parentSuspense = <span class="hljs-literal">null</span>,
    isSVG = <span class="hljs-literal">false</span>,
    slotScopeIds = <span class="hljs-literal">null</span>,
    optimized = __DEV__ &amp;&amp; isHmrUpdating ? <span class="hljs-literal">false</span> : !!n2.dynamicChildren
  </span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (n1 === n2) {
      <span class="hljs-keyword">return</span>
    }

    <span class="hljs-comment">// patching &amp; not same type, unmount old tree</span>
    <span class="hljs-keyword">if</span> (n1 &amp;&amp; !<span class="hljs-title function_">isSameVNodeType</span>(n1, n2)) {
      anchor = <span class="hljs-title function_">getNextHostNode</span>(n1)
      <span class="hljs-title function_">unmount</span>(n1, parentComponent, parentSuspense, <span class="hljs-literal">true</span>)
      n1 = <span class="hljs-literal">null</span>
    }

    <span class="hljs-keyword">if</span> (n2.<span class="hljs-property">patchFlag</span> === <span class="hljs-title class_">PatchFlags</span>.<span class="hljs-property">BAIL</span>) {
      optimized = <span class="hljs-literal">false</span>
      n2.<span class="hljs-property">dynamicChildren</span> = <span class="hljs-literal">null</span>
    }

    <span class="hljs-keyword">const</span> { <span class="hljs-keyword">type</span>, ref, shapeFlag } = n2
    <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">type</span>) {
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">Text</span>:
        <span class="hljs-title function_">processText</span>(n1, n2, container, anchor)
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">Comment</span>:
        <span class="hljs-title function_">processCommentNode</span>(n1, n2, container, anchor)
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">Static</span>:
        <span class="hljs-keyword">if</span> (n1 == <span class="hljs-literal">null</span>) {
          <span class="hljs-title function_">mountStaticNode</span>(n2, container, anchor, isSVG)
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">patchStaticNode</span>(n1, n2, container, isSVG)
        }
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-title class_">Fragment</span>:
        <span class="hljs-title function_">processFragment</span>(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
        <span class="hljs-keyword">break</span>
      <span class="hljs-attr">default</span>:
        <span class="hljs-keyword">if</span> (shapeFlag &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">ELEMENT</span>) {
          <span class="hljs-title function_">processElement</span>(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          )
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (shapeFlag &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">COMPONENT</span>) {
          <span class="hljs-title function_">processComponent</span>(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          )
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (shapeFlag &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">TELEPORT</span>) {
          ;(<span class="hljs-keyword">type</span> <span class="hljs-keyword">as</span> <span class="hljs-keyword">typeof</span> <span class="hljs-title class_">TeleportImpl</span>).<span class="hljs-title function_">process</span>(
            n1 <span class="hljs-keyword">as</span> <span class="hljs-title class_">TeleportVNode</span>,
            n2 <span class="hljs-keyword">as</span> <span class="hljs-title class_">TeleportVNode</span>,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (__FEATURE_SUSPENSE__ &amp;&amp; shapeFlag &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">SUSPENSE</span>) {
          ;(<span class="hljs-keyword">type</span> <span class="hljs-keyword">as</span> <span class="hljs-keyword">typeof</span> <span class="hljs-title class_">SuspenseImpl</span>).<span class="hljs-title function_">process</span>(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">warn</span>(<span class="hljs-string">&#39;Invalid VNode type:&#39;</span>, <span class="hljs-keyword">type</span>, <span class="hljs-string">\`(<span class="hljs-subst">\${<span class="hljs-keyword">typeof</span> <span class="hljs-keyword">type</span>}</span>)\`</span>)
        }
    }

    <span class="hljs-comment">// set ref</span>
    <span class="hljs-keyword">if</span> (ref != <span class="hljs-literal">null</span> &amp;&amp; parentComponent) {
      <span class="hljs-title function_">setRef</span>(ref, n1 &amp;&amp; n1.<span class="hljs-property">ref</span>, parentSuspense, n2 || n1, !n2)
    }
  }
</code></pre></div><p>从patch开始，我们就要和虚拟dom的diff内容挂钩了，不过在这之前，不妨先通过例子进入到patch内部了解一下。在之前_example.html中，添加新的测试用例文件，JS如下。</p>`,15)),d("div",eu,[s[7]||(s[7]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[8]||(s[8]=d("span",{class:"lang"},"javascript",-1)),d("pre",null,[d("code",lu,[s[2]||(s[2]=d("span",{class:"hljs-comment"},"//template",-1)),s[3]||(s[3]=m(`
<div id=`)),s[4]||(s[4]=d("span",{class:"hljs-string"},'"root"',-1)),s[5]||(s[5]=m(`>
  `)),d("span",pu,[s[0]||(s[0]=d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"div"),m(),d("span",{class:"hljs-attr"},"v-for"),m("="),d("span",{class:"hljs-string"},'"item in list"'),m(">")],-1)),m(`
    `+ts(n.item)+`
  `,1),s[1]||(s[1]=d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"div"),m(">")],-1))]),s[6]||(s[6]=x(`
&lt;/div&gt;

<span class="hljs-comment">//list.js</span>
<span class="hljs-title function_">createApp</span>({
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>]
    <span class="hljs-keyword">return</span> {
      list
    }
  }
}).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#root&#39;</span>)
`,31))])])]),s[10]||(s[10]=x(`<p>其在patch中的流程如下：</p><ol><li>首先n1和n2两个节点进行判断，因为我们是初次渲染，所以n1实际上为空，不会命中n1和n2同时存在的节点处理。</li><li>如果n2.patchFlag等于PatchFlag.BAIL(值为-2)时，会推出压缩优化模式。</li><li>判断n2的节点类型type字段，此时我们的根节点内容会命中到default中，然后节点的shapeFlags和ShapeFlags.COMPONENT相同，进入到processComponent方法中进行处理。</li><li>processComponent中进行节点判断，其中涉及到了<code>&lt;keep-alive /&gt;</code>的处理，但是这不在我们的讨论范围之内。因为节点是第一次渲染，所以命中n1为null的情况，并且非KEPT_ALIVE，调用执行mountComponent方法。</li><li>mountComponent中首先要建立一个实例来管理组件，他最终由createComponentInstance方法创建，如下</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">createComponentInstance</span>(<span class="hljs-params">
  vnode: VNode,
  parent: ComponentInternalInstance | <span class="hljs-literal">null</span>,
  suspense: SuspenseBoundary | <span class="hljs-literal">null</span>
</span>) {
  <span class="hljs-keyword">const</span> type = vnode.<span class="hljs-property">type</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">ConcreteComponent</span>
  <span class="hljs-comment">// inherit parent app context - or - if root, adopt from root vnode</span>
  <span class="hljs-keyword">const</span> appContext =
    (parent ? parent.<span class="hljs-property">appContext</span> : vnode.<span class="hljs-property">appContext</span>) || emptyAppContext

  <span class="hljs-keyword">const</span> <span class="hljs-attr">instance</span>: <span class="hljs-title class_">ComponentInternalInstance</span> = {
    <span class="hljs-attr">uid</span>: uid++,
    vnode,
    type,
    parent,
    appContext,
    <span class="hljs-attr">root</span>: <span class="hljs-literal">null</span>!, <span class="hljs-comment">// to be immediately set</span>
    <span class="hljs-attr">next</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">subTree</span>: <span class="hljs-literal">null</span>!, <span class="hljs-comment">// will be set synchronously right after creation</span>
    <span class="hljs-attr">effect</span>: <span class="hljs-literal">null</span>!,
    <span class="hljs-attr">update</span>: <span class="hljs-literal">null</span>!, <span class="hljs-comment">// will be set synchronously right after creation</span>
    <span class="hljs-attr">scope</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">EffectScope</span>(<span class="hljs-literal">true</span> <span class="hljs-comment">/* detached */</span>),
    <span class="hljs-attr">render</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">proxy</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">exposed</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">exposeProxy</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">withProxy</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">provides</span>: parent ? parent.<span class="hljs-property">provides</span> : <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">create</span>(appContext.<span class="hljs-property">provides</span>),
    <span class="hljs-attr">accessCache</span>: <span class="hljs-literal">null</span>!,
    <span class="hljs-attr">renderCache</span>: [],

    <span class="hljs-comment">// local resolved assets</span>
    <span class="hljs-attr">components</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">directives</span>: <span class="hljs-literal">null</span>,

    <span class="hljs-comment">// resolved props and emits options</span>
    <span class="hljs-attr">propsOptions</span>: <span class="hljs-title function_">normalizePropsOptions</span>(type, appContext),
    <span class="hljs-attr">emitsOptions</span>: <span class="hljs-title function_">normalizeEmitsOptions</span>(type, appContext),

    <span class="hljs-comment">// emit</span>
    <span class="hljs-attr">emit</span>: <span class="hljs-literal">null</span>!, <span class="hljs-comment">// to be set immediately</span>
    <span class="hljs-attr">emitted</span>: <span class="hljs-literal">null</span>,

    <span class="hljs-comment">// props default value</span>
    <span class="hljs-attr">propsDefaults</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,

    <span class="hljs-comment">// inheritAttrs</span>
    <span class="hljs-attr">inheritAttrs</span>: type.<span class="hljs-property">inheritAttrs</span>,

    <span class="hljs-comment">// state</span>
    <span class="hljs-attr">ctx</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">data</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">props</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">attrs</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">slots</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">refs</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">setupState</span>: <span class="hljs-variable constant_">EMPTY_OBJ</span>,
    <span class="hljs-attr">setupContext</span>: <span class="hljs-literal">null</span>,

    <span class="hljs-comment">// suspense related</span>
    suspense,
    <span class="hljs-attr">suspenseId</span>: suspense ? suspense.<span class="hljs-property">pendingId</span> : <span class="hljs-number">0</span>,
    <span class="hljs-attr">asyncDep</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">asyncResolved</span>: <span class="hljs-literal">false</span>,

    <span class="hljs-comment">// lifecycle hooks</span>
    <span class="hljs-comment">// not using enums here because it results in computed properties</span>
    <span class="hljs-attr">isMounted</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">isUnmounted</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">isDeactivated</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">bc</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">c</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">bm</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">m</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">bu</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">u</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">um</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">bum</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">da</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">a</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">rtg</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">rtc</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">ec</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">sp</span>: <span class="hljs-literal">null</span>
  }
  <span class="hljs-keyword">if</span> (__DEV__) {
    instance.<span class="hljs-property">ctx</span> = <span class="hljs-title function_">createDevRenderContext</span>(instance)
  } <span class="hljs-keyword">else</span> {
    instance.<span class="hljs-property">ctx</span> = { <span class="hljs-attr">_</span>: instance }
  }
  instance.<span class="hljs-property">root</span> = parent ? parent.<span class="hljs-property">root</span> : instance
  instance.<span class="hljs-property">emit</span> = emit.<span class="hljs-title function_">bind</span>(<span class="hljs-literal">null</span>, instance)

  <span class="hljs-comment">// apply custom element special handling</span>
  <span class="hljs-keyword">if</span> (vnode.<span class="hljs-property">ce</span>) {
    vnode.<span class="hljs-title function_">ce</span>(instance)
  }

  <span class="hljs-keyword">return</span> instance
}
</code></pre></div><p>实例管理组件所需要的所有属性和方法，因为我们的根组件没有父组件，所以实例的root就是自己，然后将这个实例对象返回即可。接着经过一些dev环境下可能需要的性能测量API配置之外，就要进入到setupComponent方法中初始化props和slots，然后最终调用到setupRenderEffect方法。</p><ol start="6"><li>在上一个步骤中，提到的一个关键的初始化方法，即setupComponent，初始化props和slots，当我们以根节点传入时，这两个对象都是空，具体的组件setup部分在后续会再次进行介绍。</li><li>另一个关键的方法就是setupRenderEffect方法，这是一个核心方法，是实现响应式的核心部分。方法内部定义了一个名为componentUpdateFn的函数，会作为参数传递给响应式的核心方法，代码如下：</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"> <span class="hljs-comment">// create reactive effect for rendering</span>
    <span class="hljs-keyword">const</span> effect = (instance.<span class="hljs-property">effect</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ReactiveEffect</span>(
      componentUpdateFn,
      <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">queueJob</span>(update),
      instance.<span class="hljs-property">scope</span> <span class="hljs-comment">// track it in component&#39;s effect scope</span>
    ))
</code></pre></div><p>关于响应式部分的内容，我们会有单独的章节进行处理，这里先暂时按下不表，先来看看componentUpdateFn这个方法。</p><ol start="8"><li>componentUpdateFn中有两个分支，如果组件没有挂载，则走渲染逻辑，如果组件挂载了，则走更新逻辑。因为到目前为止我们是第一次渲染，所以逻辑部分是渲染。源码如下：</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">componentUpdateFn</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-keyword">if</span> (!instance.<span class="hljs-property">isMounted</span>) {
    <span class="hljs-keyword">let</span> <span class="hljs-attr">vnodeHook</span>: <span class="hljs-title class_">VNodeHook</span> | <span class="hljs-literal">null</span> | <span class="hljs-literal">undefined</span>
    <span class="hljs-keyword">const</span> { el, props } = initialVNode
    <span class="hljs-keyword">const</span> { bm, m, parent } = instance
    <span class="hljs-keyword">const</span> isAsyncWrapperVNode = <span class="hljs-title function_">isAsyncWrapper</span>(initialVNode)

    <span class="hljs-title function_">toggleRecurse</span>(instance, <span class="hljs-literal">false</span>)
    <span class="hljs-comment">// beforeMount hook</span>
    <span class="hljs-keyword">if</span> (bm) {
      <span class="hljs-title function_">invokeArrayFns</span>(bm)
    }
    <span class="hljs-comment">// onVnodeBeforeMount</span>
    <span class="hljs-keyword">if</span> (
      !isAsyncWrapperVNode &amp;&amp;
      (vnodeHook = props &amp;&amp; props.<span class="hljs-property">onVnodeBeforeMount</span>)
    ) {
      <span class="hljs-title function_">invokeVNodeHook</span>(vnodeHook, parent, initialVNode)
    }
    <span class="hljs-keyword">if</span> (
      __COMPAT__ &amp;&amp;
      <span class="hljs-title function_">isCompatEnabled</span>(<span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">INSTANCE_EVENT_HOOKS</span>, instance)
    ) {
      instance.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;hook:beforeMount&#39;</span>)
    }
    <span class="hljs-title function_">toggleRecurse</span>(instance, <span class="hljs-literal">true</span>)

    <span class="hljs-keyword">if</span> (el &amp;&amp; hydrateNode) {
      <span class="hljs-comment">// vnode has adopted host node - perform hydration instead of mount.</span>
      <span class="hljs-keyword">const</span> <span class="hljs-title function_">hydrateSubTree</span> = (<span class="hljs-params"></span>) =&gt; {
        <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
        }
        instance.<span class="hljs-property">subTree</span> = <span class="hljs-title function_">renderComponentRoot</span>(instance)
        <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
        }
        <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`hydrate\`</span>)
        }
        hydrateNode!(
          el <span class="hljs-keyword">as</span> <span class="hljs-title class_">Node</span>,
          instance.<span class="hljs-property">subTree</span>,
          instance,
          parentSuspense,
          <span class="hljs-literal">null</span>
        )
        <span class="hljs-keyword">if</span> (__DEV__) {
          <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`hydrate\`</span>)
        }
      }

      <span class="hljs-keyword">if</span> (isAsyncWrapperVNode) {
        ;(initialVNode.<span class="hljs-property">type</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">ComponentOptions</span>).<span class="hljs-property">__asyncLoader</span>!().<span class="hljs-title function_">then</span>(
          <span class="hljs-comment">// note: we are moving the render call into an async callback,</span>
          <span class="hljs-comment">// which means it won&#39;t track dependencies - but it&#39;s ok because</span>
          <span class="hljs-comment">// a server-rendered async wrapper is already in resolved state</span>
          <span class="hljs-comment">// and it will never need to change.</span>
          <span class="hljs-function">() =&gt;</span> !instance.<span class="hljs-property">isUnmounted</span> &amp;&amp; <span class="hljs-title function_">hydrateSubTree</span>()
        )
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-title function_">hydrateSubTree</span>()
      }
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">if</span> (__DEV__) {
        <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
      }
      <span class="hljs-keyword">const</span> subTree = (instance.<span class="hljs-property">subTree</span> = <span class="hljs-title function_">renderComponentRoot</span>(instance))
      <span class="hljs-keyword">if</span> (__DEV__) {
        <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
      }
      <span class="hljs-keyword">if</span> (__DEV__) {
        <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`patch\`</span>)
      }
      <span class="hljs-title function_">patch</span>(
        <span class="hljs-literal">null</span>,
        subTree,
        container,
        anchor,
        instance,
        parentSuspense,
        isSVG
      )
      <span class="hljs-keyword">if</span> (__DEV__) {
        <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`patch\`</span>)
      }
      initialVNode.<span class="hljs-property">el</span> = subTree.<span class="hljs-property">el</span>
    }
    <span class="hljs-comment">// mounted hook</span>
    <span class="hljs-keyword">if</span> (m) {
      <span class="hljs-title function_">queuePostRenderEffect</span>(m, parentSuspense)
    }
    <span class="hljs-comment">// onVnodeMounted</span>
    <span class="hljs-keyword">if</span> (
      !isAsyncWrapperVNode &amp;&amp;
      (vnodeHook = props &amp;&amp; props.<span class="hljs-property">onVnodeMounted</span>)
    ) {
      <span class="hljs-keyword">const</span> scopedInitialVNode = initialVNode
    <span class="hljs-title function_">queuePostRenderEffect</span>(
    <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">invokeVNodeHook</span>(vnodeHook!, parent, scopedInitialVNode),
    parentSuspense
    )
  }
    <span class="hljs-keyword">if</span> (
    __COMPAT__ &amp;&amp;
    <span class="hljs-title function_">isCompatEnabled</span>(<span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">INSTANCE_EVENT_HOOKS</span>, instance)
    ) {
    <span class="hljs-title function_">queuePostRenderEffect</span>(
    <span class="hljs-function">() =&gt;</span> instance.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;hook:mounted&#39;</span>),
    parentSuspense
    )
  }

    <span class="hljs-comment">// activated hook for keep-alive roots.</span>
    <span class="hljs-comment">// #1742 activated hook must be accessed after first render</span>
    <span class="hljs-comment">// since the hook may be injected by a child keep-alive</span>
    <span class="hljs-keyword">if</span> (
    initialVNode.<span class="hljs-property">shapeFlag</span> &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">COMPONENT_SHOULD_KEEP_ALIVE</span> ||
    (parent &amp;&amp;
    <span class="hljs-title function_">isAsyncWrapper</span>(parent.<span class="hljs-property">vnode</span>) &amp;&amp;
    parent.<span class="hljs-property">vnode</span>.<span class="hljs-property">shapeFlag</span> &amp; <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">COMPONENT_SHOULD_KEEP_ALIVE</span>)
    ) {
    instance.<span class="hljs-property">a</span> &amp;&amp; <span class="hljs-title function_">queuePostRenderEffect</span>(instance.<span class="hljs-property">a</span>, parentSuspense)
    <span class="hljs-keyword">if</span> (
    __COMPAT__ &amp;&amp;
    <span class="hljs-title function_">isCompatEnabled</span>(<span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">INSTANCE_EVENT_HOOKS</span>, instance)
    ) {
    <span class="hljs-title function_">queuePostRenderEffect</span>(
    <span class="hljs-function">() =&gt;</span> instance.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;hook:activated&#39;</span>),
    parentSuspense
    )
  }
  }
    instance.<span class="hljs-property">isMounted</span> = <span class="hljs-literal">true</span>

    <span class="hljs-keyword">if</span> (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
    <span class="hljs-title function_">devtoolsComponentAdded</span>(instance)
  }

    <span class="hljs-comment">// #2458: deference mount-only object parameters to prevent memleaks</span>
    initialVNode = container = anchor = <span class="hljs-literal">null</span> <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// updateComponent</span>
    <span class="hljs-comment">// This is triggered by mutation of component&#39;s own state (next: null)</span>
    <span class="hljs-comment">// OR parent calling processComponent (next: VNode)</span>
    <span class="hljs-keyword">let</span> { next, bu, u, parent, vnode } = instance
    <span class="hljs-keyword">let</span> originNext = next
    <span class="hljs-keyword">let</span> <span class="hljs-attr">vnodeHook</span>: <span class="hljs-title class_">VNodeHook</span> | <span class="hljs-literal">null</span> | <span class="hljs-literal">undefined</span>
    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">pushWarningContext</span>(next || instance.<span class="hljs-property">vnode</span>)
  }

    <span class="hljs-comment">// Disallow component effect recursion during pre-lifecycle hooks.</span>
    <span class="hljs-title function_">toggleRecurse</span>(instance, <span class="hljs-literal">false</span>)
    <span class="hljs-keyword">if</span> (next) {
    next.<span class="hljs-property">el</span> = vnode.<span class="hljs-property">el</span>
    <span class="hljs-title function_">updateComponentPreRender</span>(instance, next, optimized)
  } <span class="hljs-keyword">else</span> {
    next = vnode
  }

    <span class="hljs-comment">// beforeUpdate hook</span>
    <span class="hljs-keyword">if</span> (bu) {
    <span class="hljs-title function_">invokeArrayFns</span>(bu)
  }
    <span class="hljs-comment">// onVnodeBeforeUpdate</span>
    <span class="hljs-keyword">if</span> ((vnodeHook = next.<span class="hljs-property">props</span> &amp;&amp; next.<span class="hljs-property">props</span>.<span class="hljs-property">onVnodeBeforeUpdate</span>)) {
    <span class="hljs-title function_">invokeVNodeHook</span>(vnodeHook, parent, next, vnode)
  }
    <span class="hljs-keyword">if</span> (
    __COMPAT__ &amp;&amp;
    <span class="hljs-title function_">isCompatEnabled</span>(<span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">INSTANCE_EVENT_HOOKS</span>, instance)
    ) {
    instance.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;hook:beforeUpdate&#39;</span>)
  }
    <span class="hljs-title function_">toggleRecurse</span>(instance, <span class="hljs-literal">true</span>)

    <span class="hljs-comment">// render</span>
    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
  }
    <span class="hljs-keyword">const</span> nextTree = <span class="hljs-title function_">renderComponentRoot</span>(instance)
    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`render\`</span>)
  }
    <span class="hljs-keyword">const</span> prevTree = instance.<span class="hljs-property">subTree</span>
    instance.<span class="hljs-property">subTree</span> = nextTree

    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">startMeasure</span>(instance, <span class="hljs-string">\`patch\`</span>)
  }
    <span class="hljs-title function_">patch</span>(
    prevTree,
    nextTree,
    <span class="hljs-comment">// parent may have changed if it&#39;s in a teleport</span>
    <span class="hljs-title function_">hostParentNode</span>(prevTree.<span class="hljs-property">el</span>!)!,
    <span class="hljs-comment">// anchor may have changed if it&#39;s in a fragment</span>
    <span class="hljs-title function_">getNextHostNode</span>(prevTree),
    instance,
    parentSuspense,
    isSVG
    )
    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">endMeasure</span>(instance, <span class="hljs-string">\`patch\`</span>)
  }
    next.<span class="hljs-property">el</span> = nextTree.<span class="hljs-property">el</span>
    <span class="hljs-keyword">if</span> (originNext === <span class="hljs-literal">null</span>) {
    <span class="hljs-comment">// self-triggered update. In case of HOC, update parent component</span>
    <span class="hljs-comment">// vnode el. HOC is indicated by parent instance&#39;s subTree pointing</span>
    <span class="hljs-comment">// to child component&#39;s vnode</span>
    <span class="hljs-title function_">updateHOCHostEl</span>(instance, nextTree.<span class="hljs-property">el</span>)
  }
    <span class="hljs-comment">// updated hook</span>
    <span class="hljs-keyword">if</span> (u) {
    <span class="hljs-title function_">queuePostRenderEffect</span>(u, parentSuspense)
  }
    <span class="hljs-comment">// onVnodeUpdated</span>
    <span class="hljs-keyword">if</span> ((vnodeHook = next.<span class="hljs-property">props</span> &amp;&amp; next.<span class="hljs-property">props</span>.<span class="hljs-property">onVnodeUpdated</span>)) {
    <span class="hljs-title function_">queuePostRenderEffect</span>(
    <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">invokeVNodeHook</span>(vnodeHook!, parent, next!, vnode),
    parentSuspense
    )
  }
    <span class="hljs-keyword">if</span> (
    __COMPAT__ &amp;&amp;
    <span class="hljs-title function_">isCompatEnabled</span>(<span class="hljs-title class_">DeprecationTypes</span>.<span class="hljs-property">INSTANCE_EVENT_HOOKS</span>, instance)
    ) {
    <span class="hljs-title function_">queuePostRenderEffect</span>(
    <span class="hljs-function">() =&gt;</span> instance.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;hook:updated&#39;</span>),
    parentSuspense
    )
  }

    <span class="hljs-keyword">if</span> (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
    <span class="hljs-title function_">devtoolsComponentUpdated</span>(instance)
  }

    <span class="hljs-keyword">if</span> (__DEV__) {
    <span class="hljs-title function_">popWarningContext</span>()
  }
  }
  }
</code></pre></div><ul><li>如果当前实例beforeMount方法存在，先执行beforeMount。</li><li>调用父类的beforeMount函数。</li><li>因为el为null，因此调用renderComponentRoot渲染组件根元素。</li><li>然后调用patch方法，传入的是上一步生成的渲染函数的返回值。</li><li>调用当前实例的mount钩子函数(通过queuePostRenderEffect)。</li><li>调用父组件的mount钩子函数(通过queuePostRenderEffect)。</li><li>如果是keep-alive的缓存组件，则调用activated函数钩子。</li><li>将isMounted标志位置为true。</li></ul><ol start="9"><li>经过上面renderComponentRoot方法得到的root，查看内部属性是这样的<img src="https://im6767.top/yuque/0/2023/png/23007887/1681123683832-18cef397-19fa-4ddf-a3e6-eafdda62c718.png" alt="">能够看到形成了children等属性。我们的模板字符串<code>&lt;div v-for=&quot;xxx&quot;&gt;&lt;/div&gt;</code>是如何变成这样的结构化数据的，这要牵扯到vue内部的compile方法，我们会有一个专门的章节来说明这个过程，现在我们只需要知道已经得到了类似的数据，然后递交给patch方法处理。</li><li>在这次的patch执行中能够看到，这里的类型变成了Fragement，因此执行processFragement函数。在processFragement中，因为n1为空，获取到fragement的开始和结束锚点之后，首先将这两个锚点插入container元素之中，然后执行mountChildren进行子元素挂载。</li><li>mountChildren方法中会对每个子元素调用patch。在我们的示例中，子元素就是div元素，再次进入patch方法，此时因为div是一个原生的ELEMENT，会进入processElement方法进行处理，在processElement方法中，因为是第一次渲染，n1为空，所以直接执行mountElement方法挂载元素。</li><li>mountElement方法中，通过调用hostCreateElement方法，生成实际的DOM元素，在我们的示例中元素的子元素就是一个文本，所以直接执行hostSetElementText方法设置为文本即可，如果元素的子元素是一个数组，那么就递归执行，调用mountChildren方法设置子元素，依次类推...，在组件生成完毕后，调用指令的created钩子函数，调用指令的beforeMount钩子函数，判断是否需要过渡，在以上都执行完毕之后，调用hostInsert方法，将生成的元素插入到container（在这里为父元素）中，调用指令的mounted钩子函数。</li><li>处理完全部的children之后，patch结束，回到我们的componentUpdateFn方法，接着执行mounted钩子函数，如果有activated钩子，则执行activated钩子函数。</li><li>最后，函数执行将会回到mount方法部分，第一次渲染结束。</li></ol><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>在这个章节中，我们介绍了挂载和第一次渲染的逻辑，作为前一个createApp部分的补充。在本文中有一些细节内容没有解释，例如vue在处理模板时，读入的是字符串，是如何通过处理转变为一个结构化对象的，另外组件实例上出现了render方法，render方法是如何生成的。向更深的下一步走，我们将会接触到Diff算法的相关内容，不过在这之前，我们将会用一个章节来解答上面的，模板字符串转化为结构化对象内容的部分。</p><p>从现在的阅读部分来看，我们所面对的数据结构就是一棵树，所以代码中涉及到了很多的递归操作，这在之后的代码中也非常常见。</p>`,14))])}const ru=A(tu,[["render",ou]]),iu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:au,default:ru},Symbol.toStringTag,{value:"Module"})),cu=JSON.parse('{"title":"Vue.js源码系列(五)：单文件组件","description":"","frontmatter":{"title":"Vue.js源码系列(五)：单文件组件","summary":"前言过去一两周处于一种低动力状态，感觉也有些许疲惫，短暂的放纵自己飘荡了一下。也是从这个时候开始，感觉职业焦虑感似乎变得更明显了一些，归根结底可能还是因为想做的太多，能做的却又太少。希望能尽快平复这种状态吧。单文件组件在日常的vue项目开发时，我们通常使用打包工具配合使用单文件组件的形式进行开...","date":"2023-04-24T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue.js源码系列(五)：单文件组件.md","filePath":"content/blog/Vue.js源码系列(五)：单文件组件.md"}'),hu={name:"content/blog/Vue.js源码系列(五)：单文件组件.md"};function uu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>过去一两周处于一种低动力状态，感觉也有些许疲惫，短暂的放纵自己飘荡了一下。</p><p>也是从这个时候开始，感觉职业焦虑感似乎变得更明显了一些，归根结底可能还是因为想做的太多，能做的却又太少。希望能尽快平复这种状态吧。</p><h2 id="单文件组件" tabindex="-1">单文件组件 <a class="header-anchor" href="#单文件组件" aria-label="Permalink to &quot;单文件组件&quot;">​</a></h2><p>在日常的vue项目开发时，我们通常使用打包工具配合使用单文件组件的形式进行开发，代码通常被分为template，script和style三个部分进行构建。从单文件组件到最终打包得到浏览器中能够直接运行的文件，需要对应的插件进行处理，在vue + vite的项目中，官方使用的是@vitejs/plugin-vue插件。本文将会对插件的处理流程做一说明。</p><h3 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h3><p>vite的插件有多个钩子函数，其中transform是在代码转化的过程中调用的钩子。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">transform</span>(<span class="hljs-params">code, id, opt</span>) {
  <span class="hljs-keyword">const</span> ssr = opt?.<span class="hljs-property">ssr</span> === <span class="hljs-literal">true</span>;
  <span class="hljs-keyword">const</span> { filename, query } = <span class="hljs-title function_">parseVueRequest</span>(id);
  <span class="hljs-keyword">if</span> (query.<span class="hljs-property">raw</span> || query.<span class="hljs-property">url</span>) {
    <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">filter</span>(filename) &amp;&amp; !query.<span class="hljs-property">vue</span>) {
    <span class="hljs-keyword">if</span> (!query.<span class="hljs-property">vue</span> &amp;&amp; <span class="hljs-title function_">refTransformFilter</span>(filename) &amp;&amp; options.<span class="hljs-property">compiler</span>.<span class="hljs-title function_">shouldTransformRef</span>(code)) {
      <span class="hljs-keyword">return</span> options.<span class="hljs-property">compiler</span>.<span class="hljs-title function_">transformRef</span>(code, {
        filename,
        <span class="hljs-attr">sourceMap</span>: <span class="hljs-literal">true</span>
      });
    }
    <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-keyword">if</span> (!query.<span class="hljs-property">vue</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">transformMain</span>(
      code,
      filename,
      options,
      <span class="hljs-variable language_">this</span>,
      ssr,
      <span class="hljs-title function_">customElementFilter</span>(filename)
    );
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">const</span> descriptor = query.<span class="hljs-property">src</span> ? <span class="hljs-title function_">getSrcDescriptor</span>(filename, query) : <span class="hljs-title function_">getDescriptor</span>(filename, options);
    <span class="hljs-keyword">if</span> (query.<span class="hljs-property">type</span> === <span class="hljs-string">&quot;template&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-title function_">transformTemplateAsModule</span>(code, descriptor, options, <span class="hljs-variable language_">this</span>, ssr);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (query.<span class="hljs-property">type</span> === <span class="hljs-string">&quot;style&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-title function_">transformStyle</span>(
        code,
        descriptor,
        <span class="hljs-title class_">Number</span>(query.<span class="hljs-property">index</span>),
        options,
        <span class="hljs-variable language_">this</span>,
        filename
      );
    }
  }
}
</code></pre></div><p>方法接收3个参数，code为读取的对应文件中的代码内容的字符串文本，id通常为文件的路径地址名称。</p><ol><li>调用parseVueRequest获取文件请求的参数。例如我们可以用xxx/src/main.ts?vue=true&amp;ssr=true类似的形式传递参数，其中?后面的部分将会作为query传递进入。通常这里为空。</li><li>接着判断是否需要过滤，即根据include和exclude判断是否命中，从而决定后续逻辑的执行与否。</li><li>第一个被transform处理的文件通常是App.vue，进入调用transformMain函数，传入文件名，code文本和当前插件的this等。</li><li>在transform函数中，调用createDescriptor(filename, code, options)生成描述符，createDescriptor中调用compile的parse方法处理SFC。</li><li>parse方法首先生成sourceKey，然后在缓存中进行查找，如果命中缓存，直接返回缓存结果，如果没有命中缓存，则会对应生成描述对象。</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> descriptor = {
  filename,
  source,
  <span class="hljs-attr">template</span>: <span class="hljs-literal">null</span>,
  <span class="hljs-attr">script</span>: <span class="hljs-literal">null</span>,
  <span class="hljs-attr">scriptSetup</span>: <span class="hljs-literal">null</span>,
  <span class="hljs-attr">styles</span>: [],
  <span class="hljs-attr">customBlocks</span>: [],
  <span class="hljs-attr">cssVars</span>: [],
  <span class="hljs-attr">slotted</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">shouldForceReload</span>: <span class="hljs-function"><span class="hljs-params">prevImports</span> =&gt;</span> <span class="hljs-title function_">hmrShouldReload</span>(prevImports, descriptor)
};
</code></pre></div><p>接着调用compile方法生成抽象语法树AST。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> ast = compiler.<span class="hljs-title function_">parse</span>(source, {
  <span class="hljs-comment">// there are no components at SFC parsing level</span>
  <span class="hljs-attr">isNativeTag</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>,
  <span class="hljs-comment">// preserve all whitespaces</span>
  <span class="hljs-attr">isPreTag</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">true</span>,
  <span class="hljs-attr">getTextMode</span>: <span class="hljs-function">(<span class="hljs-params">{ tag, props }, parent</span>) =&gt;</span> {
    <span class="hljs-comment">// all top level elements except &lt;template&gt; are parsed as raw text</span>
    <span class="hljs-comment">// containers</span>
    <span class="hljs-keyword">if</span> ((!parent &amp;&amp; tag !== <span class="hljs-string">&#39;template&#39;</span>) ||
        <span class="hljs-comment">// &lt;template lang=&quot;xxx&quot;&gt; should also be treated as raw text</span>
        (tag === <span class="hljs-string">&#39;template&#39;</span> &amp;&amp;
         props.<span class="hljs-title function_">some</span>(<span class="hljs-function"><span class="hljs-params">p</span> =&gt;</span> p.<span class="hljs-property">type</span> === <span class="hljs-number">6</span> <span class="hljs-comment">/* NodeTypes.ATTRIBUTE */</span> &amp;&amp;
           p.<span class="hljs-property">name</span> === <span class="hljs-string">&#39;lang&#39;</span> &amp;&amp;
           p.<span class="hljs-property">value</span> &amp;&amp;
           p.<span class="hljs-property">value</span>.<span class="hljs-property">content</span> &amp;&amp;
           p.<span class="hljs-property">value</span>.<span class="hljs-property">content</span> !== <span class="hljs-string">&#39;html&#39;</span>))) {
      <span class="hljs-keyword">return</span> <span class="hljs-number">2</span> <span class="hljs-comment">/* TextModes.RAWTEXT */</span>;
    }
    <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-number">0</span> <span class="hljs-comment">/* TextModes.DATA */</span>;
    }
  },
  <span class="hljs-attr">onError</span>: <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
    errors.<span class="hljs-title function_">push</span>(e);
  }
});
</code></pre></div><p>compiler最终指向vue/compile-core内的baseParse方法，回归到了前几篇源码解析中的内容。不同的是，此时我们返回的ast的children对象一般包含三个元素，tag分别是script，style，template(按照字母序排列)。接下来会对三个子元素分别进行处理。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">ast.<span class="hljs-property">children</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">node</span> =&gt;</span> {
  <span class="hljs-keyword">if</span> (node.<span class="hljs-property">type</span> !== <span class="hljs-number">1</span> <span class="hljs-comment">/* NodeTypes.ELEMENT */</span>) {
    <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-comment">// we only want to keep the nodes that are not empty (when the tag is not a template)</span>
  <span class="hljs-keyword">if</span> (ignoreEmpty &amp;&amp;
      node.<span class="hljs-property">tag</span> !== <span class="hljs-string">&#39;template&#39;</span> &amp;&amp;
      <span class="hljs-title function_">isEmpty</span>(node) &amp;&amp;
      !<span class="hljs-title function_">hasSrc</span>(node)) {
    <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-keyword">switch</span> (node.<span class="hljs-property">tag</span>) {
    <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;template&#39;</span>:
      <span class="hljs-keyword">if</span> (!descriptor.<span class="hljs-property">template</span>) {
        <span class="hljs-keyword">const</span> templateBlock = (descriptor.<span class="hljs-property">template</span> = <span class="hljs-title function_">createBlock</span>(node, source, <span class="hljs-literal">false</span>));
        templateBlock.<span class="hljs-property">ast</span> = node;
        <span class="hljs-comment">// warn against 2.x &lt;template functional&gt;</span>
        <span class="hljs-keyword">if</span> (templateBlock.<span class="hljs-property">attrs</span>.<span class="hljs-property">functional</span>) {
          <span class="hljs-keyword">const</span> err = <span class="hljs-keyword">new</span> <span class="hljs-title class_">SyntaxError</span>(<span class="hljs-string">\`&lt;template functional&gt; is no longer supported in Vue 3, since \`</span> +
                                      <span class="hljs-string">\`functional components no longer have significant performance \`</span> +
                                      <span class="hljs-string">\`difference from stateful ones. Just use a normal &lt;template&gt; \`</span> +
                                      <span class="hljs-string">\`instead.\`</span>);
          err.<span class="hljs-property">loc</span> = node.<span class="hljs-property">props</span>.<span class="hljs-title function_">find</span>(<span class="hljs-function"><span class="hljs-params">p</span> =&gt;</span> p.<span class="hljs-property">name</span> === <span class="hljs-string">&#39;functional&#39;</span>).<span class="hljs-property">loc</span>;
          errors.<span class="hljs-title function_">push</span>(err);
        }
      }
      <span class="hljs-keyword">else</span> {
        errors.<span class="hljs-title function_">push</span>(<span class="hljs-title function_">createDuplicateBlockError</span>(node));
      }
      <span class="hljs-keyword">break</span>;
    <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;script&#39;</span>:
      <span class="hljs-keyword">const</span> scriptBlock = <span class="hljs-title function_">createBlock</span>(node, source, pad);
      <span class="hljs-keyword">const</span> isSetup = !!scriptBlock.<span class="hljs-property">attrs</span>.<span class="hljs-property">setup</span>;
      <span class="hljs-keyword">if</span> (isSetup &amp;&amp; !descriptor.<span class="hljs-property">scriptSetup</span>) {
        descriptor.<span class="hljs-property">scriptSetup</span> = scriptBlock;
        <span class="hljs-keyword">break</span>;
      }
      <span class="hljs-keyword">if</span> (!isSetup &amp;&amp; !descriptor.<span class="hljs-property">script</span>) {
        descriptor.<span class="hljs-property">script</span> = scriptBlock;
        <span class="hljs-keyword">break</span>;
      }
      errors.<span class="hljs-title function_">push</span>(<span class="hljs-title function_">createDuplicateBlockError</span>(node, isSetup));
      <span class="hljs-keyword">break</span>;
    <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;style&#39;</span>:
      <span class="hljs-keyword">const</span> styleBlock = <span class="hljs-title function_">createBlock</span>(node, source, pad);
      <span class="hljs-keyword">if</span> (styleBlock.<span class="hljs-property">attrs</span>.<span class="hljs-property">vars</span>) {
        errors.<span class="hljs-title function_">push</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">SyntaxError</span>(<span class="hljs-string">\`&lt;style vars&gt; has been replaced by a new proposal: \`</span> +
                                    <span class="hljs-string">\`https://github.com/vuejs/rfcs/pull/231\`</span>));
      }
      descriptor.<span class="hljs-property">styles</span>.<span class="hljs-title function_">push</span>(styleBlock);
      <span class="hljs-keyword">break</span>;
    <span class="hljs-attr">default</span>:
      descriptor.<span class="hljs-property">customBlocks</span>.<span class="hljs-title function_">push</span>(<span class="hljs-title function_">createBlock</span>(node, source, pad));
      <span class="hljs-keyword">break</span>;
  }
});
</code></pre></div><ol start="6"><li>第一个处理的是script，调用createBlock传入虚拟节点vnode和script代码字符串，返回一个block对象，其中会包含lang，setup等标志属性。因为测试代码中使用了setup属性，所以执行了descriptor.scriptSetup = scriptBlock。</li><li>接下来处理style和template，逻辑大致同6，最终放入到descriptor中的script，style，template属性中。</li><li>根据sourceMap方法生成三部分代码的sourceMap。</li><li>处理cssVars。在vue3中，我们可以在style中使用v-bind绑定script标签中的变量，就是在这一步进行的处理。</li><li>处理::v-slotted，至此，descriptor处理完毕，放入sourceToSFC对象中（也就是SFC描述对象的缓存对象）。</li><li>回到createDescriptor方法中，为descriptor生成id，值为路径与关联值的hash值，缓存当前descriptor。</li><li>接下来回到transformMain内部，调用genScriptCode生成脚本代码，最终指向compileScript，compileScript内部判断语言语法，置入对应的插件（测试代码中使用ts），因为我们使用的是setup的形式，接下来调用所有的插件对代码进行转化，获得抽象语法树，然后针对抽象语法树中的不同语法类型进行转化。在setup形式中，转化的内容和细节还是比较多的，但是相对容易理解，可以在debug时依次进行理解，最终得到我们的script代码字符串，这个字符串最终就是transformMain中调用genScriptCode生成的script。</li><li>接着调用genTemplateCode方法生成template最终的code字符串。调用genStyleCode方法生成style的字符串，也就是css文件的引入路径格式。如果是dev模式下并且开启了hmr，生成hmr相关的代码内容，最后将代码内容交由transformWithEsbuild，使用esbuild进行构建，最终将构建产物返回。</li><li>我们的plugin-vue至此transform处理完毕，其转化结果会由其它插件再进行处理，直到所有的插件处理完毕。</li></ol><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-label="Permalink to &quot;load&quot;">​</a></h3><p>在整个流程中，实际上还会触发到load方法。我们生成的样式文件，最终会变成xxx.vue?vue&amp;type=style&amp;index=0&amp;scoped=7a7a37ab&amp;lang.css这样的id地址，其转化过程中会命中load钩子，load中解析？后面的字符串，形成参数对象，然后进行数据转化，返回所需要的内容。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>本章节主要解析了vueSFC插件的内部逻辑与流程，其中涉及到详细的代码转化部分仅做大致的说明，不过内部流程也不算复杂。在源码阅读的时候，有的时候也会考虑到一个问题：阅读理解应该到哪种程度为止？个人觉得不必太深入，如果有一天会因为某个问题需要更进一步的时候，再去考虑更进一步。</p>`,20)]))}const du=A(hu,[["render",uu]]),ju=Object.freeze(Object.defineProperty({__proto__:null,__pageData:cu,default:du},Symbol.toStringTag,{value:"Module"})),mu=JSON.parse('{"title":"Vue.js源码系列(四)：响应式与Dom Diff","description":"","frontmatter":{"title":"Vue.js源码系列(四)：响应式与Dom Diff","summary":"前言最近看了一些Flutter的介绍，产生了一些兴趣，抽空玩一下试试。我们知道，在vue中，当我们对响应式的变量值进行处理的时候，变化结果会反应在视图上。这其中就涉及到vue核心部分中的响应式实现和视图更新时的整个dom diff过程，本章节会梳理这个过程。测试代码照例，我们构建我们的测试代码...","date":"2023-04-12T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue.js源码系列(四)：响应式与Dom Diff.md","filePath":"content/blog/Vue.js源码系列(四)：响应式与Dom Diff.md"}'),gu={name:"content/blog/Vue.js源码系列(四)：响应式与Dom Diff.md"},fu={class:"language-typescript vp-adaptive-theme"},_u={class:"hljs language-typescript"},yu={class:"language-xml"},bu={class:"language-xml"},vu={class:"language-xml"};function wu(n,s,a,t,e,l){return k(),q("div",null,[s[15]||(s[15]=d("h2",{id:"前言",tabindex:"-1"},[m("前言 "),d("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),s[16]||(s[16]=d("p",null,"最近看了一些Flutter的介绍，产生了一些兴趣，抽空玩一下试试。",-1)),s[17]||(s[17]=d("p",null,"我们知道，在vue中，当我们对响应式的变量值进行处理的时候，变化结果会反应在视图上。这其中就涉及到vue核心部分中的响应式实现和视图更新时的整个dom diff过程，本章节会梳理这个过程。",-1)),s[18]||(s[18]=d("h2",{id:"测试代码",tabindex:"-1"},[m("测试代码 "),d("a",{class:"header-anchor",href:"#测试代码","aria-label":'Permalink to "测试代码"'},"​")],-1)),s[19]||(s[19]=d("p",null,"照例，我们构建我们的测试代码，我们构建一个按钮，在按钮点击时修改一个数组中的值，然后删去一个值，查看这个过程中的代码执行情况，测试代码如下",-1)),d("div",fu,[s[13]||(s[13]=d("button",{title:"Copy Code",class:"copy"},null,-1)),s[14]||(s[14]=d("span",{class:"lang"},"typescript",-1)),d("pre",null,[d("code",_u,[s[6]||(s[6]=d("span",{class:"hljs-comment"},"//template",-1)),s[7]||(s[7]=m(`
  <div id=`)),s[8]||(s[8]=d("span",{class:"hljs-string"},'"root"',-1)),s[9]||(s[9]=m(`>
    `)),d("span",yu,[s[0]||(s[0]=x('<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>',1)),m(`
      `+ts(n.item)+`
    `,1),s[1]||(s[1]=d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"div"),m(">")],-1))]),s[10]||(s[10]=m(`
    `)),d("span",bu,[s[2]||(s[2]=d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"div"),m(">")],-1)),m("状态: "+ts(n.txt),1),s[3]||(s[3]=d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"div"),m(">")],-1))]),s[11]||(s[11]=m(`
    `)),d("span",vu,[s[4]||(s[4]=d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"div"),m(">")],-1)),m("现在共有 "+ts(n.count)+" 项",1),s[5]||(s[5]=d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"div"),m(">")],-1))]),s[12]||(s[12]=x(`
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickMe&quot;</span>&gt;</span>click me to change<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
  &lt;/div&gt;

<span class="hljs-comment">//js</span>
<span class="hljs-title function_">createApp</span>({
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> txt = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;还没有click&#39;</span>);
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">reactive</span>([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>]);
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> list.<span class="hljs-property">length</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">clickMe</span> = (<span class="hljs-params"></span>) =&gt; {
      txt.<span class="hljs-property">value</span> = <span class="hljs-string">&quot;click过了&quot;</span>
      list[<span class="hljs-number">2</span>] = <span class="hljs-number">20</span>;
      list.<span class="hljs-title function_">splice</span>(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>);
    }

    <span class="hljs-keyword">return</span> {
      txt,
      list,
      count,
      clickMe
    }
  }
}).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#root&#39;</span>)
`,69))])])]),s[20]||(s[20]=x(`<h2 id="回到setuprendereffect" tabindex="-1">回到setupRenderEffect <a class="header-anchor" href="#回到setuprendereffect" aria-label="Permalink to &quot;回到setupRenderEffect&quot;">​</a></h2><p>在mount章节提到过，关于响应式部分的绑定是在setupRenderEffect方法中完成的，所以我们将目光锁定到这里。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">    <span class="hljs-comment">// create reactive effect for rendering</span>
    <span class="hljs-keyword">const</span> effect = (instance.<span class="hljs-property">effect</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ReactiveEffect</span>(
      componentUpdateFn,
      <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">queueJob</span>(update),
      instance.<span class="hljs-property">scope</span> <span class="hljs-comment">// track it in component&#39;s effect scope</span>
    ))
</code></pre></div><p>在上述代码中，ReactiveEffect就是vue3中的响应式类，这里将响应式实例绑定在组件实例的effect上，传入的参数componentUpdateFn就是在mount章节中介绍的更新函数。ReactiveEffect的代码如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactiveEffect</span>&lt;T = <span class="hljs-built_in">any</span>&gt; {
  active = <span class="hljs-literal">true</span>
  <span class="hljs-attr">deps</span>: <span class="hljs-title class_">Dep</span>[] = []
  <span class="hljs-attr">parent</span>: <span class="hljs-title class_">ReactiveEffect</span> | <span class="hljs-literal">undefined</span> = <span class="hljs-literal">undefined</span>

  <span class="hljs-comment">/**
   * Can be attached after creation
   * <span class="hljs-doctag">@internal</span>
   */</span>
  <span class="hljs-attr">computed</span>?: <span class="hljs-title class_">ComputedRefImpl</span>&lt;T&gt;
  <span class="hljs-comment">/**
   * <span class="hljs-doctag">@internal</span>
   */</span>
  <span class="hljs-attr">allowRecurse</span>?: <span class="hljs-built_in">boolean</span>
  <span class="hljs-comment">/**
   * <span class="hljs-doctag">@internal</span>
   */</span>
  <span class="hljs-keyword">private</span> <span class="hljs-attr">deferStop</span>?: <span class="hljs-built_in">boolean</span>

  <span class="hljs-attr">onStop</span>?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>
  <span class="hljs-comment">// dev only</span>
  <span class="hljs-attr">onTrack</span>?: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">event</span>: <span class="hljs-title class_">DebuggerEvent</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>
  <span class="hljs-comment">// dev only</span>
  <span class="hljs-attr">onTrigger</span>?: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">event</span>: <span class="hljs-title class_">DebuggerEvent</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">
    <span class="hljs-keyword">public</span> <span class="hljs-attr">fn</span>: () =&gt; T,
    <span class="hljs-keyword">public</span> <span class="hljs-attr">scheduler</span>: <span class="hljs-title class_">EffectScheduler</span> | <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>,
    <span class="hljs-attr">scope</span>?: <span class="hljs-title class_">EffectScope</span>
  </span>) {
    <span class="hljs-title function_">recordEffectScope</span>(<span class="hljs-variable language_">this</span>, scope)
  }

  <span class="hljs-title function_">run</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">if</span> (!<span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">fn</span>()
    }
    <span class="hljs-keyword">let</span> <span class="hljs-attr">parent</span>: <span class="hljs-title class_">ReactiveEffect</span> | <span class="hljs-literal">undefined</span> = activeEffect
    <span class="hljs-keyword">let</span> lastShouldTrack = shouldTrack
    <span class="hljs-keyword">while</span> (parent) {
      <span class="hljs-keyword">if</span> (parent === <span class="hljs-variable language_">this</span>) {
        <span class="hljs-keyword">return</span>
      }
      parent = parent.<span class="hljs-property">parent</span>
    }
    <span class="hljs-keyword">try</span> {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">parent</span> = activeEffect
      activeEffect = <span class="hljs-variable language_">this</span>
      shouldTrack = <span class="hljs-literal">true</span>

      trackOpBit = <span class="hljs-number">1</span> &lt;&lt; ++effectTrackDepth

      <span class="hljs-keyword">if</span> (effectTrackDepth &lt;= maxMarkerBits) {
        <span class="hljs-title function_">initDepMarkers</span>(<span class="hljs-variable language_">this</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-title function_">cleanupEffect</span>(<span class="hljs-variable language_">this</span>)
      }
      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">fn</span>()
    } <span class="hljs-keyword">finally</span> {
      <span class="hljs-keyword">if</span> (effectTrackDepth &lt;= maxMarkerBits) {
        <span class="hljs-title function_">finalizeDepMarkers</span>(<span class="hljs-variable language_">this</span>)
      }

      trackOpBit = <span class="hljs-number">1</span> &lt;&lt; --effectTrackDepth

      activeEffect = <span class="hljs-variable language_">this</span>.<span class="hljs-property">parent</span>
      shouldTrack = lastShouldTrack
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">parent</span> = <span class="hljs-literal">undefined</span>

      <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">deferStop</span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">stop</span>()
      }
    }
  }

  <span class="hljs-title function_">stop</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// stopped while running itself - defer the cleanup</span>
    <span class="hljs-keyword">if</span> (activeEffect === <span class="hljs-variable language_">this</span>) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">deferStop</span> = <span class="hljs-literal">true</span>
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>) {
      <span class="hljs-title function_">cleanupEffect</span>(<span class="hljs-variable language_">this</span>)
      <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">onStop</span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">onStop</span>()
      }
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span> = <span class="hljs-literal">false</span>
    }
  }
}
</code></pre></div><p>constructor中记录了传入的更新方法fn和调度器，调用执行了recordEffectScope方法，该方法的本质是将这个 响应式对象推入到scope的effects之中。响应式对象包含一个run方法和一个stop方法。</p><p>得到响应式对象之后，setupRenderEffect函数中在组件的实例对象上绑定update方法</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-attr">update</span>: <span class="hljs-title class_">SchedulerJob</span> = (instance.<span class="hljs-property">update</span> = <span class="hljs-function">() =&gt;</span> effect.<span class="hljs-title function_">run</span>());
<span class="hljs-comment">//do something...</span>
<span class="hljs-title function_">update</span>()
</code></pre></div><p>接下来立即执行了update，update实际上就是执行上面获得的响应式对象的run方法，而run方法的核心就是执行this.fn，也就是传入的componentUpdateFn方法，来进行组件的更新。在组件完成初始化之后会立即执行一次update，来调用各种钩子。此时页面已经按照预想部分完成了渲染。</p><h2 id="reactive-ref和computed" tabindex="-1">reactive，ref和computed <a class="header-anchor" href="#reactive-ref和computed" aria-label="Permalink to &quot;reactive，ref和computed&quot;">​</a></h2><p>我们在测试代码中使用了composition API，其中包含三个常用的响应式创建方法，分别是reactive，ref和computed。</p><h3 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h3><p>ref方法接受一个参数value，然后调用createRef，传入value参数。createRef首先判断是不是一个ref格式对象，不是则返回new RefImpl(rawValue, shallow)。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">class</span> <span class="hljs-title class_">RefImpl</span>&lt;T&gt; {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">_value</span>: T
  <span class="hljs-keyword">private</span> <span class="hljs-attr">_rawValue</span>: T

  <span class="hljs-keyword">public</span> <span class="hljs-attr">dep</span>?: <span class="hljs-title class_">Dep</span> = <span class="hljs-literal">undefined</span>
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> __v_isRef = <span class="hljs-literal">true</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-attr">value</span>: T, <span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">__v_isShallow</span>: <span class="hljs-built_in">boolean</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">_rawValue</span> = __v_isShallow ? value : <span class="hljs-title function_">toRaw</span>(value)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">_value</span> = __v_isShallow ? value : <span class="hljs-title function_">toReactive</span>(value)
  }

  <span class="hljs-keyword">get</span> <span class="hljs-title function_">value</span>() {
    <span class="hljs-title function_">trackRefValue</span>(<span class="hljs-variable language_">this</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">_value</span>
  }

  <span class="hljs-keyword">set</span> <span class="hljs-title function_">value</span>(<span class="hljs-params">newVal</span>) {
    <span class="hljs-keyword">const</span> useDirectValue =
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">__v_isShallow</span> || <span class="hljs-title function_">isShallow</span>(newVal) || <span class="hljs-title function_">isReadonly</span>(newVal)
    newVal = useDirectValue ? newVal : <span class="hljs-title function_">toRaw</span>(newVal)
    <span class="hljs-keyword">if</span> (<span class="hljs-title function_">hasChanged</span>(newVal, <span class="hljs-variable language_">this</span>.<span class="hljs-property">_rawValue</span>)) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">_rawValue</span> = newVal
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">_value</span> = useDirectValue ? newVal : <span class="hljs-title function_">toReactive</span>(newVal)
      <span class="hljs-title function_">triggerRefValue</span>(<span class="hljs-variable language_">this</span>, newVal)
    }
  }
}
</code></pre></div><ol><li>构造函数中需要保存几个值，第一个是rawValue，也就是原始值，经过toRaw方法获取，因为测试代码中是字符串，所以会直接返回value。</li><li>第二个是value，调用toReactive(value)进行转化。toReactive内部判断value是不是一个对象，如果不是就直接返回value，如果是的话就调用reactive方法处理value，所以可以这么说，ref的最终产物实际上就是reactive。</li></ol><h3 id="reactive" tabindex="-1">reactive <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive&quot;">​</a></h3><p>reactive内部调用createReactiveObject来处理传入的数据。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">createReactiveObject</span>(<span class="hljs-params">
  <span class="hljs-attr">target</span>: <span class="hljs-title class_">Target</span>,
  <span class="hljs-attr">isReadonly</span>: <span class="hljs-built_in">boolean</span>,
  <span class="hljs-attr">baseHandlers</span>: <span class="hljs-title class_">ProxyHandler</span>&lt;<span class="hljs-built_in">any</span>&gt;,
  <span class="hljs-attr">collectionHandlers</span>: <span class="hljs-title class_">ProxyHandler</span>&lt;<span class="hljs-built_in">any</span>&gt;,
  <span class="hljs-attr">proxyMap</span>: <span class="hljs-title class_">WeakMap</span>&lt;<span class="hljs-title class_">Target</span>, <span class="hljs-built_in">any</span>&gt;
</span>) {
  <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isObject</span>(target)) {
    <span class="hljs-keyword">if</span> (__DEV__) {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">warn</span>(<span class="hljs-string">\`value cannot be made reactive: <span class="hljs-subst">\${<span class="hljs-built_in">String</span>(target)}</span>\`</span>)
    }
    <span class="hljs-keyword">return</span> target
  }
  <span class="hljs-comment">// target is already a Proxy, return it.</span>
  <span class="hljs-comment">// exception: calling readonly() on a reactive object</span>
  <span class="hljs-keyword">if</span> (
    target[<span class="hljs-title class_">ReactiveFlags</span>.<span class="hljs-property">RAW</span>] &amp;&amp;
    !(isReadonly &amp;&amp; target[<span class="hljs-title class_">ReactiveFlags</span>.<span class="hljs-property">IS_REACTIVE</span>])
  ) {
    <span class="hljs-keyword">return</span> target
  }
  <span class="hljs-comment">// target already has corresponding Proxy</span>
  <span class="hljs-keyword">const</span> existingProxy = proxyMap.<span class="hljs-title function_">get</span>(target)
  <span class="hljs-keyword">if</span> (existingProxy) {
    <span class="hljs-keyword">return</span> existingProxy
  }
  <span class="hljs-comment">// only specific value types can be observed.</span>
  <span class="hljs-keyword">const</span> targetType = <span class="hljs-title function_">getTargetType</span>(target)
  <span class="hljs-keyword">if</span> (targetType === <span class="hljs-title class_">TargetType</span>.<span class="hljs-property">INVALID</span>) {
    <span class="hljs-keyword">return</span> target
  }
  <span class="hljs-keyword">const</span> proxy = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Proxy</span>(
    target,
    targetType === <span class="hljs-title class_">TargetType</span>.<span class="hljs-property">COLLECTION</span> ? collectionHandlers : baseHandlers
  )
  proxyMap.<span class="hljs-title function_">set</span>(target, proxy)
  <span class="hljs-keyword">return</span> proxy
}
</code></pre></div><ol><li>传入数据首先判断是不是一个对象，或者说复杂类型数据。如果是简单类型，则警告不能作为reactive的有效参数对象。</li><li>接着判断是不是已经是一个proxy对象，如果是的话，则直接返回这个proxy对象。</li><li>判断target的数据类型，这里分为3类，TargetType.COMMON(值为1)表示是一个数组或者普通对象，TargetType.COLLECTION(值为2)则代表以下四种类型：Map，Set，WeakMap，WeakSet之一。最后一种是无效类型(值为0)。如果为无效类型，则直接返回target，否则利用浏览器Proxy API创建一个proxy对象。代理的相关方法在文件baseHandlers.ts中。</li><li>返回proxy对象。</li></ol><h3 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h3><p>computed方法传入的是一个函数getter函数（当然在vue3中还可以是一个定义了getter和setter的对象），最终交由ComputedRefImpl类进行处理。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ComputedRefImpl</span>&lt;T&gt; {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">dep</span>?: <span class="hljs-title class_">Dep</span> = <span class="hljs-literal">undefined</span>

  <span class="hljs-keyword">private</span> _value!: T
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">effect</span>: <span class="hljs-title class_">ReactiveEffect</span>&lt;T&gt;

  <span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> __v_isRef = <span class="hljs-literal">true</span>
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> [<span class="hljs-title class_">ReactiveFlags</span>.<span class="hljs-property">IS_READONLY</span>]: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>

  <span class="hljs-keyword">public</span> _dirty = <span class="hljs-literal">true</span>
  <span class="hljs-keyword">public</span> <span class="hljs-attr">_cacheable</span>: <span class="hljs-built_in">boolean</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">
    <span class="hljs-attr">getter</span>: <span class="hljs-title class_">ComputedGetter</span>&lt;T&gt;,
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">_setter</span>: <span class="hljs-title class_">ComputedSetter</span>&lt;T&gt;,
    <span class="hljs-attr">isReadonly</span>: <span class="hljs-built_in">boolean</span>,
    <span class="hljs-attr">isSSR</span>: <span class="hljs-built_in">boolean</span>
  </span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">effect</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ReactiveEffect</span>(getter, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">if</span> (!<span class="hljs-variable language_">this</span>.<span class="hljs-property">_dirty</span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">_dirty</span> = <span class="hljs-literal">true</span>
        <span class="hljs-title function_">triggerRefValue</span>(<span class="hljs-variable language_">this</span>)
      }
    })
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">effect</span>.<span class="hljs-property">computed</span> = <span class="hljs-variable language_">this</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">effect</span>.<span class="hljs-property">active</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">_cacheable</span> = !isSSR
    <span class="hljs-variable language_">this</span>[<span class="hljs-title class_">ReactiveFlags</span>.<span class="hljs-property">IS_READONLY</span>] = isReadonly
  }

  <span class="hljs-keyword">get</span> <span class="hljs-title function_">value</span>() {
    <span class="hljs-comment">// the computed ref may get wrapped by other proxies e.g. readonly() #3376</span>
    <span class="hljs-keyword">const</span> self = <span class="hljs-title function_">toRaw</span>(<span class="hljs-variable language_">this</span>)
    <span class="hljs-title function_">trackRefValue</span>(self)
    <span class="hljs-keyword">if</span> (self.<span class="hljs-property">_dirty</span> || !self.<span class="hljs-property">_cacheable</span>) {
      self.<span class="hljs-property">_dirty</span> = <span class="hljs-literal">false</span>
      self.<span class="hljs-property">_value</span> = self.<span class="hljs-property">effect</span>.<span class="hljs-title function_">run</span>()!
    }
    <span class="hljs-keyword">return</span> self.<span class="hljs-property">_value</span>
  }

  <span class="hljs-keyword">set</span> <span class="hljs-title function_">value</span>(<span class="hljs-params"><span class="hljs-attr">newValue</span>: T</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">_setter</span>(newValue)
  }
}
</code></pre></div><ol><li>在ComputedRefImpl中，调用了ReactiveEffect方法，绑定了effect，在self._dirty为true的情况下，将会执行triggerRefValue(this)。</li></ol><h2 id="点击按钮-改变数据" tabindex="-1">点击按钮，改变数据 <a class="header-anchor" href="#点击按钮-改变数据" aria-label="Permalink to &quot;点击按钮，改变数据&quot;">​</a></h2><p>接着我们通过点击按钮，使得上面的三个响应式变量发生变化，然后观察执行流程。</p><h3 id="ref-1" tabindex="-1">ref <a class="header-anchor" href="#ref-1" aria-label="Permalink to &quot;ref&quot;">​</a></h3><p>当我们点击按钮，为ref创建出的对象重新赋值时，会执行set value逻辑。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">set</span> <span class="hljs-title function_">value</span>(<span class="hljs-params">newVal</span>) {
    <span class="hljs-keyword">const</span> useDirectValue =
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">__v_isShallow</span> || <span class="hljs-title function_">isShallow</span>(newVal) || <span class="hljs-title function_">isReadonly</span>(newVal)
    newVal = useDirectValue ? newVal : <span class="hljs-title function_">toRaw</span>(newVal)
    <span class="hljs-keyword">if</span> (<span class="hljs-title function_">hasChanged</span>(newVal, <span class="hljs-variable language_">this</span>.<span class="hljs-property">_rawValue</span>)) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">_rawValue</span> = newVal
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">_value</span> = useDirectValue ? newVal : <span class="hljs-title function_">toReactive</span>(newVal)
      <span class="hljs-title function_">triggerRefValue</span>(<span class="hljs-variable language_">this</span>, newVal)
    }
  }
</code></pre></div><ol><li>set value内部会判断新赋的值和原值相比是否发生了改变，如果改变了，会将新的值赋值给_rawValue属性，然后更新_value的值，接着调用triggerRefValue。</li><li>triggerRefValue中执行triggerEffects，利用到ref对象上的依赖。那么ref对象上的依赖是从哪里建立起来的呢？就是在get value的时候</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">  <span class="hljs-keyword">get</span> <span class="hljs-title function_">value</span>() {
    <span class="hljs-title function_">trackRefValue</span>(<span class="hljs-variable language_">this</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">_value</span>
  }

<span class="hljs-comment">//function trackRefValue</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">trackRefValue</span>(<span class="hljs-params"><span class="hljs-attr">ref</span>: <span class="hljs-title class_">RefBase</span>&lt;<span class="hljs-built_in">any</span>&gt;</span>) {
  <span class="hljs-keyword">if</span> (shouldTrack &amp;&amp; activeEffect) {
    ref = <span class="hljs-title function_">toRaw</span>(ref)
    <span class="hljs-keyword">if</span> (__DEV__) {
      <span class="hljs-title function_">trackEffects</span>(ref.<span class="hljs-property">dep</span> || (ref.<span class="hljs-property">dep</span> = <span class="hljs-title function_">createDep</span>()), {
        <span class="hljs-attr">target</span>: ref,
        <span class="hljs-attr">type</span>: <span class="hljs-title class_">TrackOpTypes</span>.<span class="hljs-property">GET</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;value&#39;</span>
      })
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-title function_">trackEffects</span>(ref.<span class="hljs-property">dep</span> || (ref.<span class="hljs-property">dep</span> = <span class="hljs-title function_">createDep</span>()))
    }
  }
}
</code></pre></div><p>trackRefValue调用trackEffects方法将activeEffect加入到ref对象的dep Set中，activeEffect是什么呢？如果我们回到ReactiveEffect的构造中来看，每次run方法被执行时，activeEffect都会被赋值为this，然后被加入到set之中。</p><ol start="3"><li>triggerEffects调用依赖数组中的effect上的方法，如果effect上存在scheduler方法，则调用。实际上，我们的scheduler方法指向了实例化ReactiveEffect时传入的 () =&gt; queueJob(update)，也就是队列执行update方法。这和之前mount章节内容衔接了。</li><li>既然如此我们不妨再啰嗦一句这个queueJob方法</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">queueJob</span>(<span class="hljs-params"><span class="hljs-attr">job</span>: <span class="hljs-title class_">SchedulerJob</span></span>) {
  <span class="hljs-comment">// the dedupe search uses the startIndex argument of Array.includes()</span>
  <span class="hljs-comment">// by default the search index includes the current job that is being run</span>
  <span class="hljs-comment">// so it cannot recursively trigger itself again.</span>
  <span class="hljs-comment">// if the job is a watch() callback, the search will start with a +1 index to</span>
  <span class="hljs-comment">// allow it recursively trigger itself - it is the user&#39;s responsibility to</span>
  <span class="hljs-comment">// ensure it doesn&#39;t end up in an infinite loop.</span>
  <span class="hljs-keyword">if</span> (
    !queue.<span class="hljs-property">length</span> ||
    !queue.<span class="hljs-title function_">includes</span>(
      job,
      isFlushing &amp;&amp; job.<span class="hljs-property">allowRecurse</span> ? flushIndex + <span class="hljs-number">1</span> : flushIndex
    )
  ) {
    <span class="hljs-keyword">if</span> (job.<span class="hljs-property">id</span> == <span class="hljs-literal">null</span>) {
      queue.<span class="hljs-title function_">push</span>(job)
    } <span class="hljs-keyword">else</span> {
      queue.<span class="hljs-title function_">splice</span>(<span class="hljs-title function_">findInsertionIndex</span>(job.<span class="hljs-property">id</span>), <span class="hljs-number">0</span>, job)
    }
    <span class="hljs-title function_">queueFlush</span>()
  }
}
</code></pre></div><p>queueJob方法会将传入的执行逻辑放入一个队列，并且保证这个队列中的不同的job如果针对同一组件，也就是具有相同的id，就将该job位置后移，保证队列的顺序严格按照执行时的添加顺序。然后执行queueFlush，队列执行完毕之后所有的组件即会被update。</p><ol start="5"><li>queueFlush是一个异步操作，利用的是一个Promise.resolve()执行的微任务，这一点和vue2不同，因为vue3的适用版本已经不再考虑一些低版本浏览器，所以不再为其提供降级策略，如果需要降级可以使用polyfill自行处理Promise。</li></ol><h3 id="reactive-1" tabindex="-1">reactive <a class="header-anchor" href="#reactive-1" aria-label="Permalink to &quot;reactive&quot;">​</a></h3><p>reactive的触发部分在创建proxy对象时传入的baseHandler中</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">createSetter</span>(<span class="hljs-params">shallow = <span class="hljs-literal">false</span></span>) {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">set</span>(<span class="hljs-params">
    <span class="hljs-attr">target</span>: <span class="hljs-built_in">object</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-built_in">unknown</span>,
    <span class="hljs-attr">receiver</span>: <span class="hljs-built_in">object</span>
  </span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">let</span> oldValue = (target <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>)[key]
    <span class="hljs-keyword">if</span> (<span class="hljs-title function_">isReadonly</span>(oldValue) &amp;&amp; <span class="hljs-title function_">isRef</span>(oldValue) &amp;&amp; !<span class="hljs-title function_">isRef</span>(value)) {
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    }
    <span class="hljs-keyword">if</span> (!shallow) {
      <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isShallow</span>(value) &amp;&amp; !<span class="hljs-title function_">isReadonly</span>(value)) {
        oldValue = <span class="hljs-title function_">toRaw</span>(oldValue)
        value = <span class="hljs-title function_">toRaw</span>(value)
      }
      <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isArray</span>(target) &amp;&amp; <span class="hljs-title function_">isRef</span>(oldValue) &amp;&amp; !<span class="hljs-title function_">isRef</span>(value)) {
        oldValue.<span class="hljs-property">value</span> = value
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
      }
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-comment">// in shallow mode, objects are set as-is regardless of reactive or not</span>
    }

    <span class="hljs-keyword">const</span> hadKey =
      <span class="hljs-title function_">isArray</span>(target) &amp;&amp; <span class="hljs-title function_">isIntegerKey</span>(key)
        ? <span class="hljs-title class_">Number</span>(key) &lt; target.<span class="hljs-property">length</span>
        : <span class="hljs-title function_">hasOwn</span>(target, key)
    <span class="hljs-keyword">const</span> result = <span class="hljs-title class_">Reflect</span>.<span class="hljs-title function_">set</span>(target, key, value, receiver)
    <span class="hljs-comment">// don&#39;t trigger if target is something up in the prototype chain of original</span>
    <span class="hljs-keyword">if</span> (target === <span class="hljs-title function_">toRaw</span>(receiver)) {
      <span class="hljs-keyword">if</span> (!hadKey) {
        <span class="hljs-title function_">trigger</span>(target, <span class="hljs-title class_">TriggerOpTypes</span>.<span class="hljs-property">ADD</span>, key, value)
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-title function_">hasChanged</span>(value, oldValue)) {
        <span class="hljs-title function_">trigger</span>(target, <span class="hljs-title class_">TriggerOpTypes</span>.<span class="hljs-property">SET</span>, key, value, oldValue)
      }
    }
    <span class="hljs-keyword">return</span> result
  }
}
</code></pre></div><p>创建的set方法在发生类似赋值的操作时，会最终调用到trigger方法，trigger方法最终调用triggerEffects方法，和ref类似。</p><h2 id="中途小结一下" tabindex="-1">中途小结一下 <a class="header-anchor" href="#中途小结一下" aria-label="Permalink to &quot;中途小结一下&quot;">​</a></h2><p>经过上面的说明，已经大致了解了响应式的逻辑过程，简单解释了如何从数据改变到触发组件更新，我们可以大致总结成getter触发时收集依赖，setter触发时创建更新任务并推入更新队列，更新队列在下一个异步（微任务）中执行更新。</p><p>接下来，我们将会对执行更新这一步进行梳理，了解更新时如何在虚拟dom中体现的，又是如何反馈到最终的视图上来的。</p><h2 id="又回到patch" tabindex="-1">又回到patch <a class="header-anchor" href="#又回到patch" aria-label="Permalink to &quot;又回到patch&quot;">​</a></h2><p>当我们点击按钮时，会开始触发更新，操作会回到componentUpdateFn函数中来。</p><ol><li>因为此时组件已经挂载，所以进入updateComponent流程中来，更新流程从root节点开始。</li><li>判断执行beforeUpdate钩子函数，然后根据现有的组件实例，调用renderComponentRoot方法，获得到更新后的tree，名为nextTree，从组件实例instance中提取现在的tree，名为prevTree，然后调用patch方法</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">patch</span>(
  prevTree,
  nextTree,
  <span class="hljs-comment">// parent may have changed if it&#39;s in a teleport</span>
  <span class="hljs-title function_">hostParentNode</span>(prevTree.<span class="hljs-property">el</span>!)!,
  <span class="hljs-comment">// anchor may have changed if it&#39;s in a fragment</span>
  <span class="hljs-title function_">getNextHostNode</span>(prevTree),
  instance,
  parentSuspense,
  isSVG
)
</code></pre></div><ol start="3"><li>判断n2的节点类型，为Fragement，调用processFragement进行处理</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">processFragment</span>(
  n1,
  n2,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
</code></pre></div><ol start="4"><li>从n2中解析出patchFlag，dynamicChildren等属性，因为是update操作，所以n1不为空，判断n1, n2的dynamicChildren都不为空，执行patchBlockChildren进行处理</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">patchBlockChildren</span>(
  n1.<span class="hljs-property">dynamicChildren</span>,
  dynamicChildren,
  container,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds
)
</code></pre></div><ol start="5"><li>patchBlockChildren对newChildren建立for循环，依次获取相同index位置上的oldVNode和newVNode，调用patch进行处理</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">// The fast path for blocks.</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">patchBlockChildren</span>: <span class="hljs-title class_">PatchBlockChildrenFn</span> = <span class="hljs-function">(<span class="hljs-params">
  oldChildren,
  newChildren,
  fallbackContainer,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds
</span>) =&gt;</span> {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; newChildren.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">const</span> oldVNode = oldChildren[i]
    <span class="hljs-keyword">const</span> newVNode = newChildren[i]
    <span class="hljs-comment">// Determine the container (parent element) for the patch.</span>
    <span class="hljs-keyword">const</span> container =
      <span class="hljs-comment">// oldVNode may be an errored async setup() component inside Suspense</span>
      <span class="hljs-comment">// which will not have a mounted element</span>
      oldVNode.<span class="hljs-property">el</span> &amp;&amp;
      <span class="hljs-comment">// - In the case of a Fragment, we need to provide the actual parent</span>
      <span class="hljs-comment">// of the Fragment itself so it can move its children.</span>
      (oldVNode.<span class="hljs-property">type</span> === <span class="hljs-title class_">Fragment</span> ||
       <span class="hljs-comment">// - In the case of different nodes, there is going to be a replacement</span>
       <span class="hljs-comment">// which also requires the correct parent container</span>
       !<span class="hljs-title function_">isSameVNodeType</span>(oldVNode, newVNode) ||
       <span class="hljs-comment">// - In the case of a component, it could contain anything.</span>
       oldVNode.<span class="hljs-property">shapeFlag</span> &amp; (<span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">COMPONENT</span> | <span class="hljs-title class_">ShapeFlags</span>.<span class="hljs-property">TELEPORT</span>))
      ? <span class="hljs-title function_">hostParentNode</span>(oldVNode.<span class="hljs-property">el</span>)!
      : <span class="hljs-comment">// In other cases, the parent container is not actually used so we</span>
      <span class="hljs-comment">// just pass the block element here to avoid a DOM parentNode call.</span>
      fallbackContainer
    <span class="hljs-title function_">patch</span>(
      oldVNode,
      newVNode,
      container,
      <span class="hljs-literal">null</span>,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      <span class="hljs-literal">true</span>
    )
  }
}
</code></pre></div><ol start="6"><li>开始对子节点进行patch，这里有一个需要注意的地方是</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">if</span> (n1 &amp;&amp; !<span class="hljs-title function_">isSameVNodeType</span>(n1, n2)) {
  anchor = <span class="hljs-title function_">getNextHostNode</span>(n1)
  <span class="hljs-title function_">unmount</span>(n1, parentComponent, parentSuspense, <span class="hljs-literal">true</span>)
  n1 = <span class="hljs-literal">null</span>
}
</code></pre></div><p>同级节点如果类型发生了变化，就不再向下比较，而是直接进入新建子树的操作。在这里因为而这时相同的，且第一个子节点是一个v-for属性的div节点，所以仍旧是一个Fragement，进入到processFragement流程中。</p><ol start="7"><li>根据条件判断，进入到patchChildren流程进行处理</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">patchChildren</span>(
  n1,
  n2,
  container,
  fragmentEndAnchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
</code></pre></div><ol start="8"><li>从传入的n1, n2中获取到各自的children为c1，c2，因为我们的v-for在元素上标注了key，因此进入patchKeyedChildren方法进行处理</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">patchKeyedChildren</span>(
  c1 <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>[],
  c2 <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNodeArrayChildren</span>,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
</code></pre></div><ol start="9"><li>patchKeyedChildren中，实现了对有key值的子节点比较。首先用e1，e2变量获取到两个节点数组的最后一个元素的index，然后循环处理，首先处理的是类似于 (a, b) c和 (a, b) d e的情形。</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"> <span class="hljs-keyword">while</span> (i &lt;= e1 &amp;&amp; i &lt;= e2) {
      <span class="hljs-keyword">const</span> n1 = c1[i]
      <span class="hljs-keyword">const</span> n2 = (c2[i] = optimized
        ? <span class="hljs-title function_">cloneIfMounted</span>(c2[i] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>)
        : <span class="hljs-title function_">normalizeVNode</span>(c2[i]))
      <span class="hljs-keyword">if</span> (<span class="hljs-title function_">isSameVNodeType</span>(n1, n2)) {
        <span class="hljs-title function_">patch</span>(
          n1,
          n2,
          container,
          <span class="hljs-literal">null</span>,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">break</span>
      }
      i++
    }
</code></pre></div><p>依次比较同index位置上的两个节点，如果是相同类型，则进入patch部分。patch中命中了ELEMENT的操作，进行processElement逻辑，进而进入到patchElement逻辑中，处理patchBlockChildren，因为此时没有Children节点，所以无操作进行，比较完毕。接着回到patchKeyed中，比较第二个节点，同样也是相同的，执行上述逻辑，然后比较第三个节点。</p><ol start="3"><li>当比较到第三个节点(index为2)时，isSameVNodeType方法比较原节点和现节点，因为二者key值不同，所以不是相同虚拟节点，执行break，跳出循环。</li><li>接着进入下一个循环，下一个循环是从尾部开始同步的，以便处理a (b, c)和d, e, (b, c)这样的情况。</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">    <span class="hljs-keyword">while</span> (i &lt;= e1 &amp;&amp; i &lt;= e2) {
      <span class="hljs-keyword">const</span> n1 = c1[e1]
      <span class="hljs-keyword">const</span> n2 = (c2[e2] = optimized
        ? <span class="hljs-title function_">cloneIfMounted</span>(c2[e2] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>)
        : <span class="hljs-title function_">normalizeVNode</span>(c2[e2]))
      <span class="hljs-keyword">if</span> (<span class="hljs-title function_">isSameVNodeType</span>(n1, n2)) {
        <span class="hljs-title function_">patch</span>(
          n1,
          n2,
          container,
          <span class="hljs-literal">null</span>,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">break</span>
      }
      e1--
      e2--
    }
</code></pre></div><p>我们看到经理过第一波循环之后，i的值变成了2，所以我们会从尾部向i逼近。这次各取尾部的子节点，二者是相同的，进入到patch流程，接下来的步骤类似于步骤9。判断完毕后两个子节点列表各向前再取一个节点比较，依旧相同，再次向前。接着比较到e1为4，e2为3的位置时，两个元素不同，跳出循环。此时我们可以看到指针停止的位置，从上面我们的测试例子中来看，如下，第一行是修改前的数据，第二行是我们点击按钮数据改变后产生的新的虚拟DOM的样子：</p><ul><li>1，2，(3)，4，[5]，6，7</li><li>1，2，(20)，{4}，6，7</li></ul><p>其中括号表示i指针指向的位置，[]表示e1指向的位置，{}表示e2指向的位置。</p><ol start="5"><li>接下来需要处理在中间部分的节点，此时会用i和e1，e2进行比较，在我们的测试用例中，i是比e1，e2小的，所以会进入到最后一个else逻辑中</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> s1 = i <span class="hljs-comment">// prev starting index</span>
<span class="hljs-keyword">const</span> s2 = i <span class="hljs-comment">// next starting index</span>

<span class="hljs-comment">// 5.1 build key:index map for newChildren</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">keyToNewIndexMap</span>: <span class="hljs-title class_">Map</span>&lt;<span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-built_in">symbol</span>, <span class="hljs-built_in">number</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>()
<span class="hljs-keyword">for</span> (i = s2; i &lt;= e2; i++) {
  <span class="hljs-keyword">const</span> nextChild = (c2[i] = optimized
                     ? <span class="hljs-title function_">cloneIfMounted</span>(c2[i] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>)
                     : <span class="hljs-title function_">normalizeVNode</span>(c2[i]))
  <span class="hljs-keyword">if</span> (nextChild.<span class="hljs-property">key</span> != <span class="hljs-literal">null</span>) {
    <span class="hljs-keyword">if</span> (__DEV__ &amp;&amp; keyToNewIndexMap.<span class="hljs-title function_">has</span>(nextChild.<span class="hljs-property">key</span>)) {
      <span class="hljs-title function_">warn</span>(
        <span class="hljs-string">\`Duplicate keys found during update:\`</span>,
        <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(nextChild.<span class="hljs-property">key</span>),
        <span class="hljs-string">\`Make sure keys are unique.\`</span>
      )
    }
    keyToNewIndexMap.<span class="hljs-title function_">set</span>(nextChild.<span class="hljs-property">key</span>, i)
  }
}

<span class="hljs-comment">// 5.2 loop through old children left to be patched and try to patch</span>
<span class="hljs-comment">// matching nodes &amp; remove nodes that are no longer present</span>
<span class="hljs-keyword">let</span> j
<span class="hljs-keyword">let</span> patched = <span class="hljs-number">0</span>
<span class="hljs-keyword">const</span> toBePatched = e2 - s2 + <span class="hljs-number">1</span>
<span class="hljs-keyword">let</span> moved = <span class="hljs-literal">false</span>
<span class="hljs-comment">// used to track whether any node has moved</span>
<span class="hljs-keyword">let</span> maxNewIndexSoFar = <span class="hljs-number">0</span>
<span class="hljs-comment">// works as Map&lt;newIndex, oldIndex&gt;</span>
<span class="hljs-comment">// Note that oldIndex is offset by +1</span>
<span class="hljs-comment">// and oldIndex = 0 is a special value indicating the new node has</span>
<span class="hljs-comment">// no corresponding old node.</span>
<span class="hljs-comment">// used for determining longest stable subsequence</span>
<span class="hljs-keyword">const</span> newIndexToOldIndexMap = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(toBePatched)
<span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i &lt; toBePatched; i++) newIndexToOldIndexMap[i] = <span class="hljs-number">0</span>

<span class="hljs-keyword">for</span> (i = s1; i &lt;= e1; i++) {
  <span class="hljs-keyword">const</span> prevChild = c1[i]
  <span class="hljs-keyword">if</span> (patched &gt;= toBePatched) {
    <span class="hljs-comment">// all new children have been patched so this can only be a removal</span>
    <span class="hljs-title function_">unmount</span>(prevChild, parentComponent, parentSuspense, <span class="hljs-literal">true</span>)
    <span class="hljs-keyword">continue</span>
  }
  <span class="hljs-keyword">let</span> newIndex
  <span class="hljs-keyword">if</span> (prevChild.<span class="hljs-property">key</span> != <span class="hljs-literal">null</span>) {
    newIndex = keyToNewIndexMap.<span class="hljs-title function_">get</span>(prevChild.<span class="hljs-property">key</span>)
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// key-less node, try to locate a key-less node of the same type</span>
    <span class="hljs-keyword">for</span> (j = s2; j &lt;= e2; j++) {
      <span class="hljs-keyword">if</span> (
        newIndexToOldIndexMap[j - s2] === <span class="hljs-number">0</span> &amp;&amp;
        <span class="hljs-title function_">isSameVNodeType</span>(prevChild, c2[j] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>)
      ) {
        newIndex = j
        <span class="hljs-keyword">break</span>
      }
    }
  }
  <span class="hljs-keyword">if</span> (newIndex === <span class="hljs-literal">undefined</span>) {
    <span class="hljs-title function_">unmount</span>(prevChild, parentComponent, parentSuspense, <span class="hljs-literal">true</span>)
  } <span class="hljs-keyword">else</span> {
    newIndexToOldIndexMap[newIndex - s2] = i + <span class="hljs-number">1</span>
    <span class="hljs-keyword">if</span> (newIndex &gt;= maxNewIndexSoFar) {
      maxNewIndexSoFar = newIndex
    } <span class="hljs-keyword">else</span> {
      moved = <span class="hljs-literal">true</span>
    }
    <span class="hljs-title function_">patch</span>(
      prevChild,
      c2[newIndex] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>,
      container,
      <span class="hljs-literal">null</span>,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
    patched++
  }
}

<span class="hljs-comment">// 5.3 move and mount</span>
<span class="hljs-comment">// generate longest stable subsequence only when nodes have moved</span>
<span class="hljs-keyword">const</span> increasingNewIndexSequence = moved
  ? <span class="hljs-title function_">getSequence</span>(newIndexToOldIndexMap)
  : <span class="hljs-variable constant_">EMPTY_ARR</span>
j = increasingNewIndexSequence.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>
<span class="hljs-comment">// looping backwards so that we can use last patched node as anchor</span>
<span class="hljs-keyword">for</span> (i = toBePatched - <span class="hljs-number">1</span>; i &gt;= <span class="hljs-number">0</span>; i--) {
  <span class="hljs-keyword">const</span> nextIndex = s2 + i
  <span class="hljs-keyword">const</span> nextChild = c2[nextIndex] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>
  <span class="hljs-keyword">const</span> anchor =
    nextIndex + <span class="hljs-number">1</span> &lt; l2 ? (c2[nextIndex + <span class="hljs-number">1</span>] <span class="hljs-keyword">as</span> <span class="hljs-title class_">VNode</span>).<span class="hljs-property">el</span> : parentAnchor
  <span class="hljs-keyword">if</span> (newIndexToOldIndexMap[i] === <span class="hljs-number">0</span>) {
    <span class="hljs-comment">// mount new</span>
    <span class="hljs-title function_">patch</span>(
      <span class="hljs-literal">null</span>,
      nextChild,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (moved) {
    <span class="hljs-comment">// move if:</span>
    <span class="hljs-comment">// There is no stable subsequence (e.g. a reverse)</span>
    <span class="hljs-comment">// OR current node is not among the stable sequence</span>
    <span class="hljs-keyword">if</span> (j &lt; <span class="hljs-number">0</span> || i !== increasingNewIndexSequence[j]) {
      <span class="hljs-title function_">move</span>(nextChild, container, anchor, <span class="hljs-title class_">MoveType</span>.<span class="hljs-property">REORDER</span>)
    } <span class="hljs-keyword">else</span> {
      j--
    }
  }
}
</code></pre></div><p>内部会从当前i节点开始循环，结束标志是e2，循环处理新的节点列表中的节点，如果keyToNewIndexMap这个map中没有当前节点的key值，就将当前节点index放入这个map，这其实是为了保证同级比较时不会出现相同key值的节点，同样也能够获取到新的虚拟dom中与现有数据中有相同key节点的对应关系。接下来经过一些初始数据的记录后，如果修改前的节点key值不为空，就从keyToNewIndexMap中获取这个key对应的新节点值，此时存在两种情况，如果新节点中没有对应key值的节点，说明这个节点不再有用，直接卸载节点，在我们的示例中key值为3的节点就是该逻辑。</p><p>接下来继续遍历，此时到了key为4的节点，此时新的vnode数组中有相同key值的数据节点，则对这两个节点执行patch逻辑。</p><p>再接下来继续遍历，此时到了key值为5的节点，此时新的vnode节点中没有相同key值的节点，执行卸载，逻辑同key为3的节点。执行完毕后，遍历到达临界值，退出遍历。</p><p>接下来patch要处理节点移动的情况，但是这在我们的测试代码中没有涉及。节点移动部分的内容涉及到最长递增子序列的获取算法，这在后面将会对这种情况单独进行一次说明。</p><ol start="6"><li>处理完中间节点之后，会对新的vnode节点的中间部分进行处理，从后往前。我们的测试代码中有一个部分将key值改为了20，此时这个节点就会在这里进行处理，视为一个新的节点，执行patch，实际为mount新节点。至此，patchChildren操作结束。</li></ol><p>根据测试代码来看，接下来处理的内容为两个div中的文字改变，相对比较简单，这里不再进行详细解释。</p><h2 id="最长递增子序列" tabindex="-1">最长递增子序列 <a class="header-anchor" href="#最长递增子序列" aria-label="Permalink to &quot;最长递增子序列&quot;">​</a></h2><p>我们在上面的流程追踪中，提到了一种情况是一些节点的移动，虽然在vnode数组中发生了改变，但是实际上仍然能够复用，如何处理这一部分数据？事实上，我们上面流程中，对于两个vnode数组的&quot;掐头去尾&quot;的过程是容易理解的，而执行完头尾部分之后，对于中间内容的操作实际上就是利用最长递增子序列方法。</p><p>实际上为什么要使用最长递增子序列是容易理解的，寻找最佳的移动策略的目的就是尽可能的减少移动的节点。在倒序遍历的过程中，遇到最长递增子序列的节点就不动，遇到非最长递增子序列的节点就移动，可以保证移动次数最少。在源码中，使用的方式是<strong>贪心算法</strong>+<strong>二分查找</strong>。</p><p>为了梳理这部分流程，这里构建新的测试代码：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">createApp</span>({
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> txt = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;还没有click&#39;</span>);
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">reactive</span>([<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]);
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> list.<span class="hljs-property">length</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">clickMe</span> = (<span class="hljs-params"></span>) =&gt; {
      txt.<span class="hljs-property">value</span> = <span class="hljs-string">&quot;click过了&quot;</span>
      <span class="hljs-keyword">const</span> arr = list.<span class="hljs-title function_">splice</span>(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>);
      list.<span class="hljs-title function_">push</span>(...arr);
    }

    <span class="hljs-keyword">return</span> {
      txt,
      list,
      count,
      clickMe
    }
  }
}).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#root&#39;</span>)
</code></pre></div><p>可以看到，我们将key为4的元素截取出来，然后放置在末尾，即将4移动到尾部。</p><ol><li>经过头尾处理之后，新node数组的头部指针在位置4，尾部指针在位置9，newIndexToOldIndexMap数量为6，moved标志位为true。</li><li>接下来newIndexToOldIndexMap经过处理之后值变为[6, 7, 8, 9, 10, 5]，调用getSequence方法获取最长递增子序列。</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">getSequence</span>(<span class="hljs-params"><span class="hljs-attr">arr</span>: <span class="hljs-built_in">number</span>[]</span>): <span class="hljs-built_in">number</span>[] {
  <span class="hljs-keyword">const</span> p = arr.<span class="hljs-title function_">slice</span>()
 <span class="hljs-comment">/*
  * result构建的最长递增子序列的数组，内部的元素是递增元素的对应的下标
  * 初始result中仅存放元素0
  */</span>
  <span class="hljs-keyword">const</span> result = [<span class="hljs-number">0</span>]
  <span class="hljs-keyword">let</span> i, j, u, v, c
  <span class="hljs-keyword">const</span> len = arr.<span class="hljs-property">length</span>
  <span class="hljs-comment">//依次遍历数组</span>
  <span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i &lt; len; i++) {
    <span class="hljs-comment">//arrI位当前遍历位置的元素</span>
    <span class="hljs-keyword">const</span> arrI = arr[i]
    <span class="hljs-comment">//如果当前元素为0, 说明是一个需要新增的元素</span>
    <span class="hljs-keyword">if</span> (arrI !== <span class="hljs-number">0</span>) {
      <span class="hljs-comment">//j为结果的末尾元素</span>
      j = result[result.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>]
    	<span class="hljs-comment">//将当前元素和子元素序列中的中最后一个元素对应的原数组中的值进行比较</span>
      <span class="hljs-comment">//如果当前元素更大, 就将当前元素的下标放入result</span>
      <span class="hljs-comment">//注意, 这里的p记录的是当前元素的前面元素的下标(先记录, 后push(i))；</span>
      <span class="hljs-comment">//通过这个执行可以保证result中保存的下标是递增的</span>
      <span class="hljs-keyword">if</span> (arr[j] &lt; arrI) {
        p[i] = j
        result.<span class="hljs-title function_">push</span>(i)
        <span class="hljs-keyword">continue</span>
      }
      <span class="hljs-comment">//如果当前元素不是更大的，就需要验证这个序列是不是正确的</span>
      u = <span class="hljs-number">0</span>
      v = result.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>
      <span class="hljs-comment">//不断执行二分查找, 最终找到某一项大于当前项</span>
      <span class="hljs-keyword">while</span> (u &lt; v) {
        <span class="hljs-comment">//c位[u, v]的中间位置</span>
        c = (u + v) &gt;&gt; <span class="hljs-number">1</span>
        <span class="hljs-comment">//如果中间元素小于arrI, 说明arrI更大</span>
        <span class="hljs-comment">//此时将区间换为[c + 1, v]</span>
        <span class="hljs-keyword">if</span> (arr[result[c]] &lt; arrI) {
          u = c + <span class="hljs-number">1</span>
        <span class="hljs-comment">//否则区间更换为[u, c];</span>
        } <span class="hljs-keyword">else</span> {
          v = c
        }
      }
      <span class="hljs-comment">//二分查找结束,此时u === v</span>
      <span class="hljs-comment">//理论来讲要将result[u]替换为i</span>
      <span class="hljs-comment">//但是实际执行中可以看到，[6, 7, 8, 9, 10, 5]测试代码下</span>
      <span class="hljs-comment">//5最终小于6, 要用5替换6, 但是实际上5不能替换6</span>
      <span class="hljs-comment">//替换不满足原数组递增</span>
      <span class="hljs-comment">//所以需要回溯来进行纠错</span>
      <span class="hljs-keyword">if</span> (arrI &lt; arr[result[u]]) {
        <span class="hljs-comment">//元素不为第一个元素</span>
        <span class="hljs-keyword">if</span> (u &gt; <span class="hljs-number">0</span>) {
          p[i] = result[u - <span class="hljs-number">1</span>]
        }
        result[u] = i
      }
    }
  }
  <span class="hljs-comment">//回溯实际上就是用前驱索引纠正最长递增子序列中的偏差</span>
  <span class="hljs-comment">//利用到之前定义的p,p中的元素表示应该排在当前元素前面的元素的下标</span>
  <span class="hljs-comment">//然后通过逆序遍历数组p, 完成对result元素的纠正</span>
  u = result.<span class="hljs-property">length</span>
  v = result[u - <span class="hljs-number">1</span>]
  <span class="hljs-keyword">while</span> (u-- &gt; <span class="hljs-number">0</span>) {
    result[u] = v
    v = p[v]
  }
  <span class="hljs-keyword">return</span> result
}
</code></pre></div><p>根据上面的算法获得最长递增子序列之后，接下来进入到move节点的处理。</p><ol start="3"><li>倒序遍历中间部分的vnode数组，首先获取到5，此时5不在最长递增子序列的数组值中，说明这个节点需要move，进入到move方法。</li><li>move方法判断需要移动的节点类型，因为我们需要移动的是div元素，所以执行hostInsert方法，即将这个元素插入到anchor元素之前(即执行insertBefore方法)，这样一个移动操作就完成了。</li></ol><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>至此为止，我们完成了对于vue中响应式以及dom diff的流程梳理。虚拟dom是很多现代前端开发框架的底层实现，它是构建从框架到最终视图更新的桥梁。这里我们的讨论限制在了简单元素的diff，例如组件的diff等并没有再进入更深层次的流程梳理，但实际上的本质是一样的，宏观来看，一个组件本质也是一个节点，只不过是比较复杂的node节点而已。</p><p>在经过响应式和dom diff的讨论之后，vue的核心基本被建立起来了，但是其中仍有很多细节。笔者这里不再过渡关注这些细节，在笔者看来，如非必要，勿增实体是生活哲学，当你需要关注细节的时候，自然会去关注细节。或许在将来某个时候，笔者需要深入细节时，还会补充改文章部分内容。</p>`,88))])}const ku=A(gu,[["render",wu]]),qu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:mu,default:ku},Symbol.toStringTag,{value:"Module"})),Tu=JSON.parse('{"title":"Vue3服务端渲染不完全指北","description":"","frontmatter":{"title":"Vue3服务端渲染不完全指北","summary":"距离上次使用Vue3改造博客已经过去了三四个月，Vue3也经过alpha和rc发布了稳定且正式的版本。博客的服务器配置本身就低，白屏时间确实长的有那么点难受，那不妨试着搞搞SSR，提升下读者体验，也顺道迎合一下SEO。","date":"2020-11-24T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/Vue3服务端渲染不完全指北.md","filePath":"content/blog/Vue3服务端渲染不完全指北.md"}'),Su={name:"content/blog/Vue3服务端渲染不完全指北.md"};function xu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>不堪回首的过往</h2><p>年初博客起步时，心中怀有美好的向往。上帝说，要有光，于是便有了光。可惜我不是上帝，我说要有这样那样的功能，它不会立即就有这样那样的功能。一年下来，博客还是只能写写文章，功能没多大变化，折腾倒是折腾了不少，从Vue2.x到uni-app又到Vue3，这一路心酸旅程这里不再详述，等正儿八经年终小总结的时候再聊聊。无数次想过不如推倒重来，直到有一天看到一篇文章说，程序员不应该是一个完美主义者，这才打消了脑海中的&quot;蠢念头&quot;。临近年关的11月，在Vue3发布了稳定版本一段时间之后，决定把项目用TypeScript重写，顺带改造成SSR。没有丰富的功能，先把底子打好再说。尽管整个过程没有那么顺利，但是最后还是完成了。告一段落的这几天，觉得还是应该记录下整个过程中爬过的坑，和一些自己的疑问点，以免自己再次掉进同样地坑中。</p><h2>准备工作</h2><p>俗话说，工欲善其事，必先利其器。在开始之前，准备工作必不可少。说起服务端渲染，可能首先你要知道服务端渲染是什么，当然，当你决定要进行服务端渲染的时候，你肯定已经了解过服务端渲染的相关概念。关于服务端渲染的改造事宜，我们可以在Vue文档中找到对应的<a href="https://cn.vuejs.org/v2/guide/ssr.html" rel="noopener noreferrer" target="_blank">说明内容</a>，Vue提供了一份全面但不那么涉及到技术细节的服务端渲染指南（后文统称指南），尽管它使用的是&quot;非常深入&quot;四个字来形容本指南。指南首先说明了服务端渲染带来的收益和必须付出的代价，且给出了一些场景下的其它解决方案，请确保认真阅读，再决定是否进行SSR。</p><p><img src="https://www.im6767.top/articlePlates/1606390478828.png"></p><p>请注意，如果你想要的是更加平滑和流畅的服务端构建体验，那么使用Vue官网推荐的工具将是更合适的选择（这点我非常坚信），那么此时你就应该关掉本文，然后开始学习Nuxt.js或者Quasar，或者其他框架。但是很不幸，就如同本文的标题一样，我们采用的是Vue3，在本文截止前，似乎并没有知名的通用框架支持Vue3，他们都处于过渡阶段。所以我们不得不选择从头搭建。尽管重头搭建带来的收益可能会更大，你可能会感觉到更自由，但是过程中你可能面对很多未知，所以，当你在犹豫到底使用通用框架，还是重头开始时，请选择通用框架，毕竟快乐才是生活意义。</p><p>指南中标注了进行服务端渲染所需要的具备的版本条件，注意它给出的是最低版本。Vue3当然高于Vue2.3，但是这恰恰意味着它不一定能用。Vue2.x对应地一些公共插件在Vue3的版本中都会标注next字样，例如vue-router-next，表明这是支持Vue3的版本。后两者都有对应地版本，但是vue-server-renderer这个插件没有。这意味着Vue3的服务端改造并不能使用该插件(当然你也可以尝试一下，会弹出警告：该插件需要的Vue版本是2.3+但是当前Vue的版本是3.0.2，别问我怎么知道的，问就是刚爬出来过)。</p><p><img src="https://www.im6767.top/articlePlates/1606391530867.png"></p><p>好在尤大在Vue3的互动视频中提到过，Vue3使用的是内置的<a href="https://github.com/vuejs/vue-next/tree/master/packages/server-renderer#readme" rel="noopener noreferrer" target="_blank">@vue/server-renderer</a>进行服务端渲染解析。所以我们拥有类似的解决方案，而且可能更好。既然是服务端渲染，我们当然还要选择一个服务端技术。这个不怎么重要，笔者在这里选择了Koa2。具有了基本的技术理解和工具，接下来需要做的就是按照指南的步骤，开始SSR的相关工作。由于指南是针对Vue2.x，所以同构道路上的障碍，应该就是指南和现实之间的差异解决。</p><h2>开始Coding</h2><p>因为我是已经有一个完整的Vue小项目，所以更像是SSR改造。服务端渲染的Vue app更像是同构，代码可以在服务端和客户端同时使用。首先需要明确的一个概念是，在客户端，资源是运行在每个浏览器上的，所以每一个Vue都是一个单独的实例，这没有什么问题。但是服务端渲染则不同，因为所有的服务请求都是由服务器处理的，当你服务运行时，所有的请求都由服务端完成，如果依旧以客户端的形式进行代码构建，那意味着每个请求都对应一个共同的实例，这显然是错误的，会发生实例污染（因为不同的请求导致状态混乱）。所以对于服务端渲染来讲，所有在一个app中使用的公共状态都应该为每一次请求创建一个实例。指南中的做法是提供公用的app.js，里面包含的是一个工厂函数，用于返回实例，然后建立client-entry.js和server-entry.js。个人开发来讲并没有这么做。在2.x版本中，我们使用new Vue({···})创建实例，Vue3中则是使用createApp的形式，所以我们只是建立了main.client.ts和main.server.ts两个入口文件，为客户端/服务端构建编写不同的代码。代码大致如下(注意，仅为代码片段，供说明使用)。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">//main.client.ts</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>
<span class="hljs-keyword">import</span> routerFactory <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./routers&#39;</span>
<span class="hljs-keyword">const</span> app = createApp(App);
<span class="hljs-keyword">let</span> theRouter:Router = routerFactory(<span class="hljs-literal">false</span>)
app.use(theRouter);
theRouter.isReady().then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  app.mount(<span class="hljs-string">&#39;#app&#39;</span>, <span class="hljs-literal">true</span>);\uFEFF
})
<p><span class="hljs-comment"><a href="//main.server.ts" target="_blank" rel="noreferrer">//main.server.ts</a></span>
<span class="hljs-keyword">import</span> { Component, createSSRApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;
<span class="hljs-keyword">import</span> routerFactory <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./routers&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">async</span> (context: <span class="hljs-built_in">any</span>) =&gt;{
    <span class="hljs-keyword">const</span> app = createSSRApp(App);
    <span class="hljs-keyword">const</span> router = routerFactory(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> store: <span class="hljs-built_in">any</span> = storeFactory();
    sync(store, router);
    app.use(router);
    app.use(store, key);
    app.provide(stateSymbol, createState());
    <span class="hljs-keyword">await</span> router.push(context.url);
    <span class="hljs-keyword">await</span> router.isReady();
<span class="hljs-keyword">return</span> app;
}</p>
</pre><p>对于客户端来讲，就是创建了一个单独的实例，对于服务端来讲，暴露出的是一个函数，每当执行这个函数时，都会有新的实例被创建。你应该注意到了，客户端渲染使用的是createSSRApp方法。这其实并没有体现出工厂函数。在上述代码中，我们创建路由时使用了routerFactory，这是一个典型的工厂函数，它的实现是这样的：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> { createRouter, createMemoryHistory, createWebHistory} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">routerFactory</span>(<span class="hljs-params">isServer: Boolean</span>) </span>{ 
    <span class="hljs-keyword">return</span> createRouter({
        <span class="hljs-attr">routes</span>: [<span class="hljs-comment">/*your routes*/</span>],
        <span class="hljs-attr">history</span>:isServer ? createMemoryHistory() : createWebHistory()
        })
</pre><p>可以看到，每次执行，该工厂函数都会返回一个新的路由实例。再结合上面两个入口函数，如果你理解服务端渲染造成的状态污染，那工厂函数的作用你也能够轻易理解。与Vue2.x除了路由创建的不同，vue-router4(我更喜欢vue-router-next这个叫法)新增加了一种模式memoryHistory。关于vue-router的文档中指明，该模式就是为了SSR而创建的。</p><p><img src="https://www.im6767.top/articlePlates/1606401075488.png"></p><p>出于好奇我也在构建过程中使用了一下memoryHistory这个模式。众所周知，hash模式表现为浏览器地址栏地址后跟上#的形式，而history模式则是利用historyAPI进行路由变化，每次改变时都能看到地址栏的地址变化。而memoryHistory则像是“内存中的history”模式。当你进入/回退路由时，一切都表现得和正常一样，但是你看不到地址栏的地址变化。所以我们的路由工厂函数接收一个Boolean的入参，来为客户端创建history模式的路由，而为服务端创建memoryHistory模式的路由。</p><p>到这里我们基本介绍完毕了代码构建的一些组织形式和注意事项。总体来看，区别就是，考虑到服务端渲染，我们的代码就不能只顾及客户端，而是要结合服务端渲染一些特点进行改造。本文非详尽的SSR改造教程，而只是介绍Vue3的SSR和指南中的一些异同点和大致流程。如果和指南对照，我们已经完成了&quot;通用代码的组织&quot;，&quot;源码及目录结构处理&quot;，&quot;vue-router的创建使用&quot;三个部分，其它未介绍事宜基本与指南中一致，如代码的分割、服务端渲染的一些特殊情况处理等。所以如果你旨在参考本文进行服务端改造，请务必结合<a href="https://ssr.vuejs.org/zh/guide/routing.html" rel="noopener noreferrer" target="_blank">指南</a>进行改造处理。</p><h2>转向服务端</h2><p>按照指南，接下来要处理数据的预取和状态。经过上面的路由改造和通用代码的构建，已经具备了渲染静态页面的大致条件，不妨搭建起服务，看看服务端渲染的雏形。这一部分大致与指南中“bundle Renderer指引”章节对应。也就是说我们将这部分内容提前与数据预取进行处理。服务端搭建笔者采用koa2，你当然可以采用express，采用nest，采用egg。服务端渲染对于node生态下的服务端几乎没有要求。</p><p>在项目目录下建立server目录，将服务端相关代码部署在server下，关键代码如下：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;path&quot;</span>);
<span class="hljs-keyword">const</span> Koa = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;koa&quot;</span>);
<span class="hljs-keyword">const</span> koaStatic = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;koa-static&#39;</span>);
<span class="hljs-keyword">const</span> { renderToString } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;@vue/server-renderer&quot;</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>)
<span class="hljs-keyword">const</span> manifest = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;../dist/server/ssr-manifest.json&quot;</span>);
<span class="hljs-keyword">const</span> server = <span class="hljs-keyword">new</span> Koa();
<span class="hljs-keyword">const</span> appPath = path.join(__dirname, <span class="hljs-string">&quot;../dist/server&quot;</span>, manifest[<span class="hljs-string">&quot;app.js&quot;</span>]);
<span class="hljs-keyword">const</span> templateHTML = fs.readFileSync(path.join(__dirname, <span class="hljs-string">&quot;../dist/client&quot;</span>, <span class="hljs-string">&quot;server.index.html&quot;</span>), <span class="hljs-string">&quot;utf-8&quot;</span>);
<span class="hljs-keyword">const</span> serverApp = <span class="hljs-built_in">require</span>(appPath).default;
server.use(koaStatic(<span class="hljs-string">&quot;./dist/client&quot;</span>));
server.use(
  koaStatic(path.join(__dirname, <span class="hljs-string">&quot;../dist&quot;</span>, <span class="hljs-string">&quot;favicon.ico&quot;</span>))
);
server.use(<span class="hljs-keyword">async</span> (context, next)=&gt;{
    <span class="hljs-keyword">const</span> app = <span class="hljs-keyword">await</span> serverApp(context);
    <span class="hljs-keyword">const</span> appContent = <span class="hljs-keyword">await</span> renderToString(app, context);
    context.body = templateHTML.replace(<span class="hljs-string">&quot;&lt;div id=app&gt;&lt;/div&gt;&quot;</span>, <span class="hljs-string">\`&lt;div id=app data-server-rendered=&quot;true&quot;&gt;<span class="hljs-subst">\${appContent}</span>&lt;/div&gt;\`</span>);
    <span class="hljs-keyword">await</span> next();
})
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`
  You can navigate to http://localhost:8080
\`</span>);
server.listen(<span class="hljs-number">8080</span>);
</pre><p>我们手动引入renderToString方法，这个方法就是Vue3的SSR关键——它在服务端生成整个html字符串，即DOM结构。服务端渲染的含义就是由服务端生成DOM结构。当然该方法返回的并不是一个完整的html，你可以打印结果看看，它只会包含id为app内部的部分。这并不奇怪，我们的Vue实例最后会挂载在app下，所以自然渲染包含内部部分。在生成字符串后，我们通过读入模板html，替换id=app的div部分为渲染内容，再将替换完的html发送出去即可。</p><p>从这里开始，Vue3的服务端渲染和Vue2的服务端渲染就开始有诸多不同了。在Vue2.x中，一切都是处理好的，可以利用vue-server-renderer的createBundleRenderer方法，传入模板、clientMainifest，将会自动生成完备的html格式发送，支持preload和prefetch、CSS注入等诸多特性。但是在Vue3当前阶段不支持bundleRenderer：</p><p><img src="https://www.im6767.top/articlePlates/1606627706875.png"></p><p>当然未来肯定会有人做bundleRenderer，只是现阶段没有。所以我们必须手动处理一些bandleRenderer为我们做的事情，这在下面的一些说明中也会提到。在服务端代码构建时，还有一个要注意的是，当路径传入时，我们能够正确得到渲染字符串，但是当资源请求（JS，CSS，image等）被服务器响应时，大概率会报404。我们需要对静态资源做出相应的处理。这里使用了koa-static，在匹配到静态资源后将会返回静态资源。此时，我们关于服务端的代码构建基本已经结束了。不过，服务端代码的执行还要建立在合适的打包构建之后，关于打包构建的注意事项将在后面提到。</p><h2>数据预取与处理</h2><p>经过上面的构建，所有静态部分的内容已经足以展示了，但是这明显不够。在服务端渲染方面，有两个问题必须面对：如何处理数据的获取？页面发送至客户端之后，客户端如何建立起同样地状态？举个实际的例子来讲：本小站进入首页展示的是文章列表，当客户端渲染时，整个过程是：进入页面，加载指示器显示(loading状态)，接口获取数据，加载指示器隐藏（移除loading状态），展示数据。但是在服务端渲染，整个过程就变成了：解析首页组件，获取数据，得到模板字符串，发送至客户端，客户端展示。更确切地，我们应该将整个SSR过程这样看待：客户端进行客户端加载，然后托管服务端渲染的部分。指南在数据处理推荐使用vuex。</p><p>还记得实例状态污染吗？同样要给状态部分构建一个工厂函数。这里有一个注意点：使用Vue3，你可能会用Composition API，Composition API中要获取到vuex的相关状态你必须制定key：</p><p><img src="https://www.im6767.top/articlePlates/1606630375569.png"></p><p>这其实很简单：</p><pre class="ql-syntax" spellcheck="false">//<span class="hljs-type">Vuex</span>.store.js
//暴露出工厂方法和一个key值
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> key:<span class="hljs-type">InjectionKey</span>&lt;<span class="hljs-type">Store</span>&lt;<span class="hljs-type">State</span>&gt;&gt; = <span class="hljs-type">Symbol</span>();
<span class="hljs-keyword">export</span> function storeFactory ():<span class="hljs-type">Store</span>&lt;<span class="hljs-type">State</span>&gt; {
    <span class="hljs-keyword">return</span> createStore&lt;<span class="hljs-type">State</span>&gt;(<span class="hljs-meta">{......}</span>)\uFEFF
}
<p><a href="//client.main.js" target="_blank" rel="noreferrer">//client.main.js</a> <span class="hljs-type">OR</span> server.main.js
app.use(store, key);</p>
<p>//在你使用<span class="hljs-type">Composition</span> <span class="hljs-type">API</span>的组件中
<span class="hljs-keyword">import</span> { key } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../store/api.store&quot;</span>;
 <span class="hljs-keyword">export</span> default defineComponent({
setup(props, context) {
<span class="hljs-keyword">const</span> store = useStore(key);
}
})</p>
</pre><p>没有key值，直接使用useStore()将永远获取到的是undefined。这点我还是比较有疑虑的，为什么是获取不到。个人感觉应该&quot;不包含key值时获取到所有的store，包含key值获取到指定store&quot;，当然纯属个人浅见。</p><p>通过以上我们已经成功引入并使用了vuex，接下来就要利用vuex进行数据改造了。在指南中还使用了一个小工具：vue-router-<span class="hljs-keyword">sync</span>。这个工具的作用就是将vuex绑定在vue-router上，通过获取到vue-router就能够获取到vuex。通过这样的绑定，可以在服务端很容易地完成一些数据预取的参数对应工作。</p><pre class="ql-syntax" spellcheck="false">import { sync } <span class="hljs-keyword">from</span> &#39;vuex-router-sync&#39;
// 同步路由状态(route <span class="hljs-keyword">state</span>)到 store
sync(store, router)
</pre><p>然后按照指南描述的那样，开始在要进行数据存取的组件里编写对应地方法。</p><pre class="ql-syntax" spellcheck="false">export<span class="hljs-built_in"> default </span>defineComponent({
    name:<span class="hljs-string">&#39;articleList&#39;</span>,
    asyncData({store, route}: AsyncProp){
       return store.dispatch(<span class="hljs-string">&#39;fetchArticleList&#39;</span>);
    }
)
</pre><p>上面是一个Composition API的示例编写方法，总之的一个原则就是：将原先页面的数据获取逻辑移入vuex，编写对应地方法，所有需要进行数据获取的地方不再单独调用，而是统一操作vuex的状态，达到同步的目的。数据预取和状态同步是整个SSR过程中最繁琐的部分，特别是原有代码的改造，需要重新设计逻辑，但是并不具有太大的难度，而且很容易理解原理，参考指南进行就可以，这里针对Vue3和指南不同的部分进行一些讲说明：</p><p><img src="https://www.im6767.top/articlePlates/1606631568247.png"></p><p>数据预取部分有三个注意点：</p><ul><li>匹配路由组件的时候，不再是getMatchedComponents，而是新的方法router.currentRoute.value.matched.flatMap，这是vue-router-next规定的。</li><li>如上图代码，指南中调用asyncData时，传入route参数使用的是router.currentRoute，在Vue3中这样写获取不到参数，而是应该是router.currentRoute.value。你可以打印下router.currentRoute，发现它和vue3使用ref()定义的量的格式是一样的，所以请务必.value来获取值(这个问题曾经浪费了我大量时间来找问题)。</li><li>关于context.state = store.state部分，注释说明状态将自动序列化为window.__INITIAL_STATE__注入HTML，这个是bundleRenderer完成的，并不是Vue原生支持。而我们上面提到过，Vue3目前不支持bundleRenderer，所以这部分要手动处理，这个下文会提到，这部分的处理非常简单。</li></ul><p>在注意到上面的事项后，对应Vue3的相关代码构建类似这样：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">async</span> (context: <span class="hljs-built_in">any</span>) =&gt;{
    <span class="hljs-keyword">const</span> app = createSSRApp(App);
    <span class="hljs-keyword">const</span> router = routerFactory(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> store: <span class="hljs-built_in">any</span> = storeFactory();
    sync(store, router);
    app.use(router);
    app.use(store, key);
    <span class="hljs-keyword">await</span> router.push(context.url);
    <span class="hljs-keyword">await</span> router.isReady();
    <span class="hljs-keyword">if</span> (router.currentRoute.value.matched.length === <span class="hljs-number">0</span>) {
        context.throw(<span class="hljs-number">404</span>, <span class="hljs-string">&#39;Not Found&#39;</span>)
    }
    <span class="hljs-keyword">const</span> matchedComponents = router.currentRoute.value.matched.flatMap(<span class="hljs-function"><span class="hljs-params">record</span> =&gt;</span>
        <span class="hljs-built_in">Object</span>.values(record.components)
      )
    <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">await</span> <span class="hljs-built_in">Promise</span>.all(matchedComponents.map(<span class="hljs-function">(<span class="hljs-params">component:<span class="hljs-built_in">any</span></span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (component.asyncData) {
                <span class="hljs-keyword">return</span> component.asyncData({
                    store, 
                    route: router.currentRoute.value
                })
            }
        }))
    } <span class="hljs-keyword">catch</span>(error) {
        <span class="hljs-built_in">console</span>.log(error)
    }
    context.state = store.state;
    <span class="hljs-keyword">return</span> app;
}
</pre><p>基本一致，只是针对Vue的变化做了部分处理。</p><p>既然提到了自动序列化这个问题，我们不妨直接说完。vue SSR服务端和客户端状态如何同步的呢？关键就是这个window.__INITIAL_STATE__部分。当你使用vue2.x进行服务端渲染时，会在HTML中包含这样的字符串：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="hljs-built_in">window</span>.__INITIAL_STATE__={<span class="hljs-string">&quot;key&quot;</span>:<span class="hljs-string">&quot;xxx&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;xxx&quot;</span>}<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</pre><p>试想\uFEFF这样的代码被客户端构建后会变成什么？当然是在window这个全局对象上挂载__INITIAL_STATE__这个对象。然后在client.main.ts中这样：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">if</span> (<span class="hljs-keyword">window</span>.__INITIAL_STATE__) {
    store.replaceState(<span class="hljs-keyword">window</span>.__INITIAL_STATE__);
    <span class="hljs-comment">//代码强迫症, 为了保持生成的html整洁, 在数据同步之后删除script标签</span>
    <span class="hljs-keyword">const</span> <span class="hljs-variable">$initScript</span> = document.querySelector(<span class="hljs-string">&quot;#init-script&quot;</span>);
    <span class="hljs-keyword">if</span> (<span class="hljs-variable">$initScript</span>) {
        <span class="hljs-variable">$initScript</span>.remove();
    }
}
</pre><p>检测到对象存在，客户端就直接将状态同步。就是这么简单。所以我们要做的就是生成上面提到的字符串，这也就是bundleRenderer所做的一部分工作。根据上面的代码，我们将store.state值赋给了context.state，所以在服务端的代码中，我们这样：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> createScriptStore = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">store</span>) </span>{
    <span class="hljs-keyword">const</span> scriptString = <span class="hljs-string">\`&lt;script id = &quot;init-script&quot;&gt;window.__INITIAL_STATE__ = <span class="hljs-subst">\${<span class="hljs-built_in">JSON</span>.stringify(store)}</span>&lt;/script&gt;\`</span>;
    <span class="hljs-keyword">return</span> scriptString;
}
server.use(<span class="hljs-keyword">async</span> (context, next)=&gt;{
    <span class="hljs-keyword">const</span> app = <span class="hljs-keyword">await</span> serverApp(context);
    <span class="hljs-keyword">const</span> appContent = <span class="hljs-keyword">await</span> renderToString(app, context);
    <span class="hljs-keyword">const</span> storeString = createScriptStore(context.state);
    context.body = templateHTML.replace(<span class="hljs-string">&quot;&lt;div id=app&gt;&lt;/div&gt;&quot;</span>, (<span class="hljs-string">\`&lt;div id=app data-server-rendered=&quot;true&quot;&gt;<span class="hljs-subst">\${appContent}</span>&lt;/div&gt;\`</span> + storeString));
    <span class="hljs-keyword">await</span> next();
})
</pre><p>从context.state读取到state，然后处理成script包裹的标签，再拼接在html模板的指定位置就好。</p><p>我是一个有点点代码洁癖的人，当这样的代码被客户端渲染后，势必会有一个script标签，里面有一串长长的代码。我们经常会从控制台查看代码，这样的一个script标签我非常不喜欢。处理它，就像上面代码那样，给script一个id，然后状态同步完直接remove掉，就舒服多了。</p><p>经过数据的预取和状态的同步，SSR改造就基本已经完成了。剩下的就是一些逻辑调整和代码修改。客户端代码预取就按照指南中的步骤，选取合适的方案处理就行，没有什么区别。在整个SSR改造的过程中，确实是数据预取花费的改造时间最多，改造过程中出了很多问题，也更为深入的去了解了一些vue和相关组件的实现，虽然没有窥得全貌，但也是收获颇丰。</p><p>诶嘿，说到这里，不妨给大家推荐一个知乎老哥的帖子，一种更简单地数据获取的方法，asyncData这个方法确实会有一点点繁琐，而这位老哥的方法更具有优势。如果你感兴趣，可以<a href="https://zhuanlan.zhihu.com/p/74248464" rel="noopener noreferrer" target="_blank">点击这里</a>查看。</p><p>顺便再啰嗦几句：如果你查找过一些Vue3的特性文章，你应该看到过这样的说法：Vue3中不需要vuex了，因为inject/和provide提供了类似的功能。在SSR之前，我的项目确实不包含Vuex，因为太简单了，根本不涉及复杂的状态交互，所以inject/provide确实是完美的解决了我的需求。但是由于SSR指南中相关的操作都是基于vuex的，所以为了少走弯路，这次改造我也是引入了vuex。用inject/provide可以吗？当然可以，但是我没有尝试过。</p><h2>构建工具配置</h2><p>Vue3的生态中，带来了更快的vite工具，但是由于我这个项目本身属于改造项目，所以依旧是vue-cli，也就是webpack生态的。关于vite工具下的SSR在github上有一些示例demo，如果你是基于vite构建的，那么下文的内容可能帮不了你，你应该去寻找这些demo来查看如何配置。</p><p>在本小结的内容中，你需要具备系统的webpack知识，了解一些配置的实际作用，这里我贴出相关配置，然后针对一些关键点进行说明：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> ManifestPlugin = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;webpack-manifest-plugin&quot;</span>);
<span class="hljs-keyword">const</span> nodeExternals = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;webpack-node-externals&quot;</span>);
<span class="hljs-keyword">const</span> RUN_ENV = process.env.SSR ? <span class="hljs-string">&quot;server&quot;</span> :<span class="hljs-string">&quot;client&quot;</span>;
<span class="hljs-keyword">const</span> TARGET = process.env.SSR ? <span class="hljs-string">&quot;node&quot;</span> :<span class="hljs-string">&quot;web&quot;</span>;
<span class="hljs-keyword">const</span> LIBRARY_TARGET = process.env.SSR ? <span class="hljs-string">&quot;commonjs2&quot;</span> : <span class="hljs-literal">undefined</span>;
<span class="hljs-keyword">const</span> CSS_EXTRACT = process.env.SSR ? <span class="hljs-literal">false</span> : <span class="hljs-literal">true</span>;
<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">outputDir</span>: <span class="hljs-string">\`./dist/<span class="hljs-subst">\${RUN_ENV}</span>\`</span>,
    <span class="hljs-attr">lintOnSave</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">chainWebpack</span>: <span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span>{
        <span class="hljs-keyword">if</span> (!process.env.SSR) {
            config.devServer.disableHostCheck(<span class="hljs-literal">true</span>);
        }
        <span class="hljs-comment">//client和server通用的构建配置</span>
        config
        .entry(<span class="hljs-string">&quot;app&quot;</span>)
        .clear()
        .add(<span class="hljs-string">\`./src/main.<span class="hljs-subst">\${RUN_ENV}</span>.ts\`</span>);
<p>        config.target(TARGET);
        config.output.libraryTarget(LIBRARY_TARGET);
        config
        .plugin(<span class="hljs-string">&quot;manifest&quot;</span>)
        .use(<span class="hljs-keyword">new</span> ManifestPlugin({ <span class="hljs-attr">fileName</span>: <span class="hljs-string">&quot;ssr-manifest.json&quot;</span> }));</p>
<p>        <span class="hljs-comment">//仅在server中使用的配置项</span>
        <span class="hljs-keyword">if</span> (process.env.SSR) {
            config.externals(nodeExternals({ <span class="hljs-attr">allowlist</span>: <span class="hljs-regexp">/.(css|vue)$/</span> }));
            config.optimization.splitChunks(<span class="hljs-literal">false</span>).minimize(<span class="hljs-literal">false</span>);
            config.plugins.delete(<span class="hljs-string">&quot;hmr&quot;</span>);
            config.plugins.delete(<span class="hljs-string">&quot;progress&quot;</span>);
            config.plugins.delete(<span class="hljs-string">&quot;friendly-errors&quot;</span>);
        }</p>
<p>        config.plugins.delete(<span class="hljs-string">&quot;preload&quot;</span>);
        config.plugins.delete(<span class="hljs-string">&quot;prefetch&quot;</span>);
            
        config.plugin(<span class="hljs-string">&#39;html&#39;</span>)
          .tap(<span class="hljs-function"><span class="hljs-params">args</span> =&gt;</span> {
            args[<span class="hljs-number">0</span>].title = <span class="hljs-string">&quot;六七的小屋&quot;</span>;
            <span class="hljs-keyword">return</span> args;
          })
          <span class="hljs-keyword">return</span> { <span class="hljs-attr">resolve</span>: { <span class="hljs-attr">mainFields</span>: [<span class="hljs-string">&#39;main&#39;</span>, <span class="hljs-string">&#39;module&#39;</span>] } }
      },
       <span class="hljs-attr">css</span>: {
         <span class="hljs-attr">extract</span>: CSS_EXTRACT
       }
    }</p>
</pre><p>既然是同构项目，我们打包肯定要区分客户端环境和服务端环境，不同的环境有不同的打包处理的入口。这里定义一些常量用于不同环境区分。当然你也可以为不同的环境(client，server)建立不同的config文件，最后通过webpack的merge合并起来，这完全由你决定。</p><p>在服务端构建的过程中，我们的libraryTarget要使用commonjs2规范。这里为了方便调试，服务端代码构建关闭了代码压缩，事实上服务端进行代码压缩的必要性也不是很足。关于preload和prefetch的去除仁者见仁智者见智，需不需要都可以，我这里关闭了。</p><p>关于css的提取这个问题，是比较坑的一个问题。vue-cli4中css的提取使用的是mini-css-extract-plugin，但是这个插件对服务端渲染很不友好。它内部插入css样式使用的Document上的方法，由于服务端渲染没有浏览器的对象，会导致报错。关闭它呢，css将不会被单独提出文件，而是包含在js中，然后插入到style标签之间。关于这个问题网上并没有明确的解决方案，大部分人都是直接关闭css的提取。在官方git库下面讨论有几种方案：使用null-style（我没有成功），使用css-loader/locals（我没有成功），使用extract-text-webpack-plugin（我还是没有成功）。这个我也非常好奇，SSR是一个比较常见的需求，但是这个非常常用、被vue-cli纳入默认处理的插件居然不支持。事实上最好的解决方案是，建立一个垫片库，为服务端和客户端构建通用的window和document对象，这样就不至于会报错，等有机会不妨去实现下。</p><p>那这里这个问题怎么办呢？事实上Vue3大可不必被这个问题困扰。因为Vue3本身不支持bundleRenderer，所以SSR返回的只是组模板字符串，内部不包含任何样式，所以CSS提取这个功能对于Vue3的服务端构建没有任何意义，所以就像上面的代码，我们在服务端构建时关闭，客户端构建时开启即可。关于CSS的处理交由客户端来完成。</p><p>到这里，一个完整的Vue SSR基本就结束了。接下来就是打包、运行、调试和解决问题。有人说SSR差不多是Vue学习的最后阶段，但事实上也是具有略微深入的体系了解就可以。本站SSR主要为了两个页面，一个是首页，一个是文章页，旨在带来更好的体验。一个稳定、合适的SSR项目其实还有很多要去做，特别是用于大型项目中，不得不去考虑并发，考虑服务器压力等等，不过这些目前离本站还很遥远，或许这些经验，对于个人来讲，也更多的要寄希望于工作时的一些项目积累。</p><h2>其它问题</h2><p>尽管上面已经提到了一些SSR改造过程中的问题，但是还是不够。这里单独引用一个章节，来记录一些SSR过程中的问题，有一些是到目前为止我还没有解决的。当然以后肯定会去解决，毕竟SSR改造也还没有完成多久。</p><h4>一瞬间的样式错乱</h4><p>当你的SSR改造完成并运行时，不妨盯着你的界面刷新看看，你可能会发现一个现象：有那么一瞬间，你的页面样式是错乱的，然后很快就恢复。尽管这个问题有时候很难察觉，但是略带完美主义倾向的我还是比较厌恶这个一闪而过的现象。为什么会这样？其实这个很容易解释：在客户端代码中，DOM的构建是JS执行时完成的，整个页面加载的过程类似这样：id为app的标签内为空——加载JS——加载样式——DOM构建并展示。而服务端渲染下，过程变为了：返回的HTML已经具有完整的DOM结构——加载JS——加载样式。DOM结构先于样式加载，所以会出现样式错乱的情况。那么解决这个 问题的方法是什么？我们能想到的当然是让样式先加载，但是做起来没那么容易。当CSS提取时，为了较小体积CSS会被分成很多个chunk，然后按需加载，所以势必要由JS来决定加载哪一个CSS，此时无法保证CSS先加载，那么需要将所有CSS打包进入一个文件，然后在HTML页head中引入，这样才能保证CSS优先获取并加载，分包与合包之间有一个取舍关系，而且你要单独处理CSS合包才行。</p><p>不过笔者使用了一个自欺欺人的做法：让id为app的div初始时样式visibility值为hidden，然后再mounted钩子中再改为visible。是的，保证已经挂载完毕，DOM创建后再展示出来就可以，如果你也遇到了这个问题，不妨试试这个方法是不是满足你的要求。</p><h4>服务端打包路径不对应</h4><p>这个问题是目前还遗留的一个问题。</p><p><img src="https://www.im6767.top/articlePlates/1606637426145.png"></p><p>当我执行服务端打包后，生成的js目录是这样的，即所有的js都包含在js文件夹目录下，其中第一个，也就是app.xxx.js是入口文件，但是当运行时，会报错：./js/chunk.xxxx/js没有找到。追踪报错行，会发现入口文件中的加载路径是这样的：</p><p><img src="https://www.im6767.top/articlePlates/1606637615065.png"></p><p>所有的chunk查找都不是基于当前目录，而是指向了./js/chunk.xxx.js。手动修正为./之后正常。这应该是打包路径配置的问题，或者目录结构组织的问题，但是目前还没有确定，暂时的解决方案就是每次打包完手动改下，不过真的很蠢。这个高优先级的问题将会在近期被解决。</p><h4>注意keep-alive</h4><p>使用Vue你肯定见过keep-alive，可以用来缓存组件，但是在Vue3，确切说是Vue3.0.2版本中，使用keep-alive服务端渲染将会报错。解决方案：去掉keep-alive，或者说服务端打包时去掉keep-alive。这个问题我觉得是Vue的问题，所以我特别指明Vue3.0.2版本是有问题的，可能会在未来修复。既然没法使用，跳过就可以了嘛。遇到这个问题我就在想，这不就是个条件编译的需求吗？我可以把keep-alive用条件编译注释，客户端构建就包含该语句，服务端构建就无视该语句，然后并没有找到适合Vue的条件编译工具，等有机会自己撸一个。</p><h4>history模式与a标签跳转</h4><p>请牢记，服务端渲染需要向服务端发送请求，才能够获取页面。如果你是用的是history模式，地址栏地址虽然发生了改变，但事实上不会去服务器请求对应地数据，相当于被客户端托管后，就变成了客户端渲染的App，所以如果你需要跳转的页面是需要服务端渲染的，请直接用a标签加上链接的形式请求。（打开控制台看看，到底有没有返回完整的html页）。</p><h4>请求路径</h4><p>由于我有一个完整的服务端在远程服务器上，所以本地没有运行服务。在服务端渲染的服务中，会发现这样一个问题：服务器会提示类似“.0.0.1/80 connect failed”之类的错误，这是因为在客户端构建中，你的devserver会进行请求转发，但是服务端没有，请求会被默认指向本地的80端口，如果你的80端口没有服务，就会报错。</p><p>解决方案引入http-proxy-middleware中间件在服务端也创建一个转发，把请求转发到该去的地址。但是！！！我安装了http-proxy-middleware后发现整个项目跑不起来了，查看报错后发现，vue-cli内部也使用了这个中间件，但是版本是1.0以下的，如果你安装了新的版本，由于写法的改变，会导致报错，这个比较坑，不过好在也有解决方案，而且更简单。项目中使用的是axios做请求，所以不妨在axios的拦截器中做点手脚，如果是客户端就默认逻辑，如果是服务端就拼写成完完整整带IP端口形式的地址。</p><h2>结束</h2><p>本文到这里差不多就要结束了。这次的服务端改造还是花了不少精力和时间的，特别是有几个晚上被几个恼人的问题弄得心烦意乱的时候。本来是想学学SSR，结果SSR过程中又引出了更多的问题，关于Vue，关于webpack，关于各种plugin和loader。罗翔老师的关于读书的一篇文章里面说， 学习事实上是一个悖论，因为你在求知的路上，愈发感觉到自己无知。这段时间也渐渐进入了一阵学习状态期，大多数时间都放在前端，特别是JS上，最近几天突然感觉到厌倦，多少感觉到有点JS疲劳了。可能是时候放下JS，从深度递归中走出来，走向广度递归一段时间了。</p>`,84)]))}const Cu=A(Su,[["render",xu]]),Pu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Tu,default:Cu},Symbol.toStringTag,{value:"Module"})),Au=JSON.parse('{"title":"WebRTC入门","description":"","frontmatter":{"title":"WebRTC入门","summary":"why在互联网应用中，我们看似可以非常简单的共享信息，传输数据，但是将实现移入到这些传输背后时，绝大多数的通信和信息传递方式都可以抽象成为客户端 - 服务端，而其中最广泛的实现就是面向用户的浏览器和支撑背后运作的服务器。当信息从一端流向另一端时，其中包含繁多的协议处理行为，在这种模式下，跨设备...","date":"2023-08-02T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/WebRTC入门.md","filePath":"content/blog/WebRTC入门.md"}'),Du={name:"content/blog/WebRTC入门.md"};function Eu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2 id="why" tabindex="-1">why <a class="header-anchor" href="#why" aria-label="Permalink to &quot;why&quot;">​</a></h2><p>在互联网应用中，我们看似可以非常简单的共享信息，传输数据，但是将实现移入到这些传输背后时，绝大多数的通信和信息传递方式都可以抽象成为<strong>客户端 - 服务端</strong>，而其中最广泛的实现就是面向用户的浏览器和支撑背后运作的服务器。当信息从一端流向另一端时，其中包含繁多的协议处理行为，在这种模式下，跨设备，多信息种类的传输通信显得相对麻烦。</p><p>WebRTC的诞生很大程度上就是为了解决这个问题，它的目标是建立一种通用方式和平台，可以很轻松的实现点对点的数据通信，从而实现视频通话，音频通话或者P2P文件分享等功能。</p><p>尽管可以说WebRTC可以直接建立端对端的链接，但实际过程中我们仍旧需要一个服务来完成必要的信息交换，原因在下文中会说明。</p><h2 id="聊聊基础-协议" tabindex="-1">聊聊基础-协议 <a class="header-anchor" href="#聊聊基础-协议" aria-label="Permalink to &quot;聊聊基础-协议&quot;">​</a></h2><h3 id="ice" tabindex="-1">ICE <a class="header-anchor" href="#ice" aria-label="Permalink to &quot;ICE&quot;">​</a></h3><p>WebRTC是基于一系列协议完成的，最直接的就是ICE，交互式链接创建，它允许从你的浏览器到对端的浏览器来建立连接，无需中间介质。但是这个过程往往不能直接建立，最大的原因就是现在大多数的终端都在一个局域网中，然后统一对外产生一个公网地址，这个协议就是&quot;网络地址转换&quot;协议，简称NAT，这和IPv4地址空间有限有关，这里不再详细叙述。</p><p>总之就是，大多数情况下没有办法直接通过一个公网地址建立端对端连接。</p><h3 id="stun" tabindex="-1">STUN <a class="header-anchor" href="#stun" aria-label="Permalink to &quot;STUN&quot;">​</a></h3><p>STUN的诞生就是为了解决上述问题，STUN协议的目标是让终端能够确定它们在NAT后面的公共IP和端口，以便可以直接通信。完成这个功能的服务器叫做STUN服务器。STUN工作过程如下：</p><ol><li>设备向STUN服务器发送请求。</li><li>STUN服务器接收到请求后，从中取出设备的IP地址和端口，并将这些信息回复给设备。</li><li>设备收到STUN的回复之后，就知道了它在NAT后面的公共IP地址和端口。</li><li>设备之间就可以通过这些IP地址和端口直接进行点对点连接建立，从而绕过NAT。</li></ol><p>STUN协议的本质就是为了解决NAT穿透，但是某些情况下STUN也无能为力，例如对称NAT协议。对称NAT协议会在每个连接中分配不同的公共IP地址和端口，STUN此时无法进行有效穿透，因此需要额外的解决方案。</p><h3 id="turn" tabindex="-1">TURN <a class="header-anchor" href="#turn" aria-label="Permalink to &quot;TURN&quot;">​</a></h3><p>TURN协议就是为了解决上述的对称NAT协议的问题。它的原理如下：</p><ol><li>设备在启动时发现无法通过STUN穿透NAT，于是尝试使用TURN。</li><li>设备向TURN服务器发送请求，请求TURN服务器充当中继（relay）的角色。</li><li>TURN服务器收到请求后，会在自身与设备之间建立一条虚拟的数据通道（relay channel）。</li><li>设备之间可以通过TURN服务器进行数据传输，数据会经由TURN服务器进行转发。</li><li>这样，即使设备之间无法直接穿透NAT，它们也可以通过TURN服务器进行通信。</li></ol><p>这样就解决了NAT穿透的问题，但是它引入了一个中间服务器，使得端对端链接不那么&quot;端对端&quot;，并且引入中间服务器，势必会增加延迟和带宽消耗，所以ICE协议将STUN和TURN结合使用，首先尝试STUN，如果没有办法则降级至TURN。</p><h2 id="开始构建" tabindex="-1">开始构建 <a class="header-anchor" href="#开始构建" aria-label="Permalink to &quot;开始构建&quot;">​</a></h2><p><strong>提示：尽管WebRTC技术已经相对成熟，但各个浏览器之间的实现仍有差异，因此建议使用相关的适配包。本文旨在梳理流程，因此使用Chrome浏览器下的WebRTC进行构建。</strong></p><hr><h3 id="了解架构" tabindex="-1">了解架构 <a class="header-anchor" href="#了解架构" aria-label="Permalink to &quot;了解架构&quot;">​</a></h3><p>在构建连接的期间，我们需要准备两个端设备，实际上这两个端设备是对等的，但是为了区分，我们将发起方称之为请求端，接受方称之为应答端。同时，为了交换请求端和应答端建立连接时所必需的信息，我们构建一个中间服务器，建立websocket，实现设备建立连接时的信息交换。</p><p>如何让链接双方能够统一信息链接？我们设计一个用来唯一标识一对链接的key值，需要建立链接的双方利用该key进行连接信息的交换。架构大致如下：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1691378079128-b1774792-6700-4c63-a1d3-b60238a05b29.png" alt=""></p><p>请求端和应答端为浏览器，页面中包含两个按钮，<strong>connect</strong>和<strong>message</strong>，前者点击时开始建立WebRTC链接，后者点击负责发送链接建立后的信息。代码如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">//========发送方========</span>
<span class="hljs-comment">/**
 * 初始化RTCPeerConnection实例
 * 传入iceServers参数, 就是我们上面提到的
 * STUN服务的地址
 */</span>
<span class="hljs-keyword">const</span> senderRtcConnection = <span class="hljs-keyword">new</span> <span class="hljs-title class_">RTCPeerConnection</span>({
  <span class="hljs-attr">iceServers</span>: [
    {
      <span class="hljs-attr">urls</span>: [<span class="hljs-string">&#39;stun:stun.12voip.com:3478&#39;</span>]
    }
  ]
});

<span class="hljs-comment">// 绑定icecandidate事件</span>
senderRtcConnection.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;icecandidate&#39;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (e.<span class="hljs-property">candidate</span>) {
    <span class="hljs-comment">//发送candidate, type设置为local, 表示为发送方的candidate</span>
    socket.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;rtc-exchange-icecandidate&#39;</span>, {
      <span class="hljs-attr">key</span>: <span class="hljs-number">123</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;local&quot;</span>,
      <span class="hljs-attr">icecandidate</span>: e.<span class="hljs-property">candidate</span>
    });
  }
})

<span class="hljs-comment">//为请求端connect按钮绑定事件</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">connectClick</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-comment">//创建offer</span>
  <span class="hljs-keyword">const</span> offer = <span class="hljs-keyword">await</span> senderRtcConnection.<span class="hljs-title function_">createOffer</span>();
  <span class="hljs-comment">//将offer设置为本地描述</span>
  <span class="hljs-keyword">await</span> senderRtcConnection.<span class="hljs-title function_">setLocalDescription</span>(offer);
  <span class="hljs-comment">//远程服务通信注册, 并且发送offer</span>
  socket.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;rtc-register&#39;</span>, { offer, <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;123&quot;</span> })
}


<span class="hljs-comment">// 监听获取应答端的answer</span>
socket.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#39;get-answer&#39;</span>, <span class="hljs-title function_">async</span> (e) =&gt; {
  <span class="hljs-comment">//将answer设置为远程描述</span>
  <span class="hljs-keyword">await</span> rtcConnection.<span class="hljs-title function_">setRemoteDescription</span>(e.<span class="hljs-property">answer</span>);
  <span class="hljs-comment">//将应答端的candidate依次添加</span>
  candidates.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">c</span> =&gt;</span> rtcConnection.<span class="hljs-title function_">addIceCandidate</span>(c));
})


<span class="hljs-comment">//========接收方========</span>
<span class="hljs-comment">/**
 * 初始化RTCPeerConnection实例
 * 传入iceServers参数, 就是我们上面提到的
 * STUN服务的地址
 */</span>
<span class="hljs-keyword">const</span> receiverRtcConnection = <span class="hljs-keyword">new</span> <span class="hljs-title class_">RTCPeerConnection</span>({
  <span class="hljs-attr">iceServers</span>: [
    {
      <span class="hljs-attr">urls</span>: [<span class="hljs-string">&#39;stun:stun.12voip.com:3478&#39;</span>]
    }
  ]
});

<span class="hljs-comment">//绑定icecandidate事件</span>
receiverRtcConnection.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;icecandidate&#39;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (e.<span class="hljs-property">candidate</span>) {
    <span class="hljs-comment">//发送candidate, type设置为local, 表示为发送方的candidate</span>
    socket?.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;rtc-exchange-icecandidate&#39;</span>, {
      <span class="hljs-attr">key</span>: <span class="hljs-number">123</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;remote&quot;</span>,
      <span class="hljs-attr">icecandidate</span>: e.<span class="hljs-property">candidate</span>
    });
  }
})

<span class="hljs-comment">/**
 * 为应答端connect按钮绑定事件
 * 建立socket链接之后, 进行注册
 * STUN服务的地址
 */</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">connectClick</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-keyword">const</span> socket = <span class="hljs-title function_">io</span>(<span class="hljs-string">&#39;http://localhost:3000&#39;</span>, {
    <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/socket&#39;</span>
  });
  socket.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;rtc-register&#39;</span>, { <span class="hljs-attr">key</span>: <span class="hljs-number">123</span> })
}

<span class="hljs-comment">// socket上绑定事件, 该事件在应答端连接到中转服务时触发</span>
<span class="hljs-comment">// 触发之后获得发送端的offer</span>
<span class="hljs-comment">// 请注意这里为伪代码, 仅提供思路, 该事件应在websocket实例</span>
<span class="hljs-comment">// 生成之后就绑定</span>
socket.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#39;get-offer&#39;</span>, <span class="hljs-title function_">async</span> (e) =&gt; {
  <span class="hljs-comment">// 设置应答端的offer为远程描述</span>
  <span class="hljs-keyword">await</span> rtcConnection.<span class="hljs-title function_">setRemoteDescription</span>(e.<span class="hljs-property">offer</span>);
  <span class="hljs-comment">// 生成answer并设置为本地描述</span>
  <span class="hljs-keyword">const</span> answer = <span class="hljs-keyword">await</span> rtcConnection.<span class="hljs-title function_">createAnswer</span>();
  <span class="hljs-keyword">await</span> rtcConnection.<span class="hljs-title function_">setLocalDescription</span>(answer);
  <span class="hljs-comment">// 设置完描述后调用addIceCandidate将请求端的candidate依次添加</span>
  candidates.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">c</span> =&gt;</span> rtcConnection.<span class="hljs-title function_">addIceCandidate</span>(c));
  <span class="hljs-comment">// 返回生成的answer</span>
  socket.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;rtc-answer&#39;</span>, { <span class="hljs-attr">key</span>: <span class="hljs-number">123</span>, answer });
});
</code></pre></div><p>通过上述的代码流程，连接基本就可以建立了，当然上述的描述仅包含流程中的关键部分，用以代码化表示主流程，其中省略了部分细节，例如candidate的数据交互，以及异常事件的监听与处理，读者需要根据自身业务情况进行添加，还省略了中转服务websocket的相关逻辑，请按照自己的需求进行处理。</p><h2 id="数据传输" tabindex="-1">数据传输 <a class="header-anchor" href="#数据传输" aria-label="Permalink to &quot;数据传输&quot;">​</a></h2><p>完成连接建立之后，我们就可以通过连接进行数据传输了，其中包含任意形式的数据内容传输。笔者给出一个最简单的场景：文本信息传输。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-comment">// ======请求方======</span>
<span class="hljs-comment">// 创建dataChannel</span>
<span class="hljs-keyword">const</span> dataChannel = senderRtcConnection.<span class="hljs-title function_">createDataChannel</span>(<span class="hljs-string">&quot;channel&quot;</span>);

<span class="hljs-comment">// 可以监听dataChannel事件</span>
<span class="hljs-comment">// open事件将在链接建立后, 通信就绪时触发</span>
dataChannel.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;open&#39;</span>, <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;datachannel open&quot;</span>);
});

<span class="hljs-comment">// 通过dataChannel.send发送文字消息</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">sendClick</span> = (<span class="hljs-params"></span>) =&gt; {
  dataChannel.<span class="hljs-title function_">send</span>(<span class="hljs-string">&#39;hello world&#39;</span>);
}


<span class="hljs-comment">// ======应答方======</span>
receiverRtcConnection.<span class="hljs-property">ondatachannel</span> = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  e.<span class="hljs-property">channel</span>.<span class="hljs-property">onmessage</span> = <span class="hljs-function">(<span class="hljs-params">msg</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(msg); <span class="hljs-comment">// console &#39;hello world&#39;</span>
  };
}


</code></pre></div><p>另外，除却文本信息传输外，我们可能需要更为丰富的信息传输内容，例如视频传输，特别是通过摄像头进行的视频录制与传输，以达到视频通话的目的，代码流程可以如下所示：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code class="hljs language-tsx"><span class="hljs-comment">// ======请求方======</span>
<span class="hljs-comment">// 获取本机的录像权限</span>
navigator.<span class="hljs-property">mediaDevices</span>
  .<span class="hljs-title function_">getUserMedia</span>({ <span class="hljs-attr">video</span>: <span class="hljs-literal">true</span> })
  .<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">localStream</span>) {
    <span class="hljs-comment">// 流数据通过localStream传输到应答端</span>
    localStream.<span class="hljs-title function_">getTracks</span>()
      .<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">track</span> =&gt;</span> senderRtcConnection.<span class="hljs-title function_">addTrack</span>(track, localStream))
  })
  .<span class="hljs-title function_">catch</span>(handleGetUserMediaError);
}
}

<span class="hljs-comment">// ======应答方======</span>
senderRtcConnection.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;track&#39;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&quot;your video element id&quot;</span>).<span class="hljs-property">srcObject</span> = event.<span class="hljs-property">streams</span>[<span class="hljs-number">0</span>];
})

</code></pre></div><p>这样就完成了视频数据的传输和展示。</p><p>实际上，建立双方的连接之后，基于连接上的任意功能构建都会变得简单，可以进行音频，视频的传输，屏幕内容的共享，文件的发送等。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>本文是WebRTC入门的总结，旨在为WebRTC的理解和基本使用进行说明。实际上WebRTC相关技术的发展也有相当长一段时间了，用&quot;新技术&quot;来表达它已经变得不那么准确。WebRTC只是一种技术手段，而利用这样的技术手段，可以解决和实现哪些问题，才是更值得思考的部分吧。</p>`,35)]))}const Nu=A(Du,[["render",Eu]]),Iu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Au,default:Nu},Symbol.toStringTag,{value:"Module"})),Ou=JSON.parse('{"title":"《地球之盐》——这个世界的影集","description":"","frontmatter":{"title":"《地球之盐》——这个世界的影集","summary":"\\"你们是世上的盐。盐若失了味，怎能叫它再咸呢？以后无用，不过丢在外面，被人践踏了\\"。上帝的使徒是地球的盐，他们承载着悲悯与希望。萨尔瓦多用镜头记录人间的苦难，感受这支离破碎荒诞不经的世界。在经历了绝望之后，他懂得了如何修复这个世界和自己的灵魂，成为了上帝的使徒。","date":"2020-08-26T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/《地球之盐》——这个世界的影集.md","filePath":"content/blog/《地球之盐》——这个世界的影集.md"}'),Ru={name:"content/blog/《地球之盐》——这个世界的影集.md"};function Mu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<p><img src="https://www.im6767.top/articlePlates/1598445900379.png"></p><p>《地球之盐》的故事从位于巴西的金矿开始，同样也是人类文明的开始。这些淘金者在巨大的矿坑中搬运着泥沙。没有机械的轰鸣，成千上万的人在这里交谈，工作，将一袋袋泥沙搬运到坑外。这根本就是一个微型社会。他们看起来像是奴隶，但是事实上他们都是自由人，他们只是想变得富有。奴役他们的就是身上背着的沙袋和遥不可及的金子。这样的场景总能使人想起人类文明的起源——金字塔，长城，以及各种宏伟的古代宫殿的修建。它存在于现代文明，却又与其相差甚远。</p><p>这张照片的拍摄者就是塞巴斯蒂昂·萨尔加多，也就是《地球之盐》这部纪录片的核心。 萨尔加多是一个来自巴西的青年，接受过良好的教育，在法国学习经济学。正是经济学让他明白了世界是如何运作的。在生活中他发现摄影为他带来了许多乐趣，于是他和妻子做了一个重大的决定——放弃现有的优厚报酬的工作，转而专职摄影。</p><h2>旅程的开始</h2><p>1977年到1984年，伴随着南美洲&quot;解放神学运动&quot;的兴起，萨尔加多决定去巴西附近的国家看一看。</p><p><img src="https://www.im6767.top/articlePlates/1598448657674.png"></p><p>在这趟踏遍南美洲的旅途中，他见识到了很多不同的民族。</p><p><img src="https://www.im6767.top/articlePlates/1598449317205.png"></p><p>生活节奏超级缓慢的萨拉古罗人。</p><p><img src="https://www.im6767.top/articlePlates/1598449276276.png"></p><p>农耕部落莫艾斯，非常热爱音乐。如果有人能够演奏一门乐器，那么它就可以不用工作。</p><p><img src="https://www.im6767.top/articlePlates/1598449342631.png"></p><p>这趟路程中，让他对世界有了新的认识，而且结识了很多朋友。同样，他也拍摄了很多照片。他开始明白，摄影作品不需要什么言语，只要观察照片，一切都能从他眼中得知。</p><h2>返回巴西</h2><p>生活似乎总是喜欢让自己看起来不太公平。萨尔加多在旅途归来后，很快有了第二个孩子，但是很不幸，一切特征都表明孩子是一个21-三体综合征患者。不久之后，巴西的独裁统治结束了，萨尔加多又回到了巴西，回到了这个他生命开始的地方。</p><p>年轻时出走的他，回来发现父母已经步入暮年。</p><p><img src="https://www.im6767.top/articlePlates/1598449664351.png"></p><p>怀着对世界的好奇和对国家的思念，他想要去看看现在的巴西。于是他选择踏上去巴西北部的旅程。巴西北部的儿童死亡率非常高。</p><p><img src="https://www.im6767.top/articlePlates/1598449781048.png"></p><p>很多孩子在还没有接受洗礼时就去世了，按照宗教，他们没有资格进入天堂。</p><p>同样，如果一个孩子是睁着眼死去的，那么他不能进入天堂，只能永远呆在&quot;边境&quot;地带。反之如果是闭着眼，则可以进入天堂。</p><p>由于儿童死亡率很高，这里的棺材租赁生意非常热闹，每一口棺材可以供十几个儿童使用。</p><p>因为经济发展的缘故，巴西的生态破坏非常严重。大量的树木被砍伐。萨尔加多小时候生活的农场一片葱绿，现在已经是荒山了，水井打不出水，人们被迫离开这里。</p><p><img src="https://www.im6767.top/articlePlates/1598450104050.png"></p><p>正是这样一种落差，让萨尔加多有了新的计划。</p><h2>悲伤的人类</h2><p>1984年，他加入了无国界医生组织，致力于人类救援。这一年，非洲正在经历世纪大饥荒。加上埃塞俄比亚战乱，很多难民无家可归。四千万国民中900万收到饥饿带来的致命威胁。</p><p><img src="https://www.im6767.top/articlePlates/1598450396508.png"></p><p>难民们聚集，食物却少得可怜。</p><p><img src="https://www.im6767.top/articlePlates/1598450519077.png"></p><p>每天都有人死去。活着比死亡更加难以接受。大批人的聚集，导致疾病频发。过度的营养不良导致的脱水使人每天流失大量水分，而又无法补充。</p><p><img src="https://www.im6767.top/articlePlates/1598450655092.png"></p><p>图中的丈夫正在为自己死去的妻子清洗身体，因为按照宗教，要想进入天堂，必须保证身体的清洁。这使得他们会为每一个死去的人清洗身体。每个家庭、每个人都时刻准备着面对死亡，或是他人，或是自己。</p><p>当人们向着下一个营地迁徙时，还有残酷的士兵要射杀难民。在现代武器的火力下，这些人卑微的如同蝼蚁。当他们转移到新的营地时，发现一切没有更好，依旧是没有食物，大多数人都已经绝望。</p><p><img src="https://www.im6767.top/articlePlates/1598450872933.png"></p><p>尽管如此，总有人怀着热情和希望。从这个背影萨尔加多可以看出，这个骨瘦如柴的孤儿，有一种强大的坚毅。</p><p><img src="https://www.im6767.top/articlePlates/1598450978568.png"></p><p>经历这一切之后，萨尔加多意识到自己的工作不仅仅是拍摄照片并且展览，而有着展示世界的伟大责任。</p><h2>地球的悲鸣</h2><p>1991年科威特，萨达姆·侯赛因在战争失利后，采取了清壁政策——他下令点燃了科威特所有的油井。萨尔加多和很多记者都来到了这里。</p><p><img src="https://www.im6767.top/articlePlates/1598451334567.png"></p><p>一时间，整个世界变成了地狱。浓烈的黑烟遮蔽了天空，漆黑一片中却到处闪烁着火光，充斥着爆炸声。</p><p><img src="https://www.im6767.top/articlePlates/1598451393678.png"></p><p>接下来是消防队员们的舞台，也是消防员们的噩梦。</p><p><img src="https://www.im6767.top/articlePlates/1598451439296.png"></p><p>他们用大量的水才能扑灭这些火焰，还要阻止油井的继续喷射，自然资源从未让他们如此绝望。</p><p><img src="https://www.im6767.top/articlePlates/1598451515107.png"></p><p>这些来自加拿大的消防员每天晚上回去都会清洗他们的消防车，即使第二天又会变得一团乌黑。在这样的环境下，很多人被迫背井离乡，但是他们无法携带所有的财产，包括养殖的牲畜。当这一切结束后，人们再次来到这里，一切都与之前不同了，这里已经不能称得上是人间。</p><p><img src="https://www.im6767.top/articlePlates/1598451754983.png"></p><p><img src="https://www.im6767.top/articlePlates/1598451773009.png"></p><p>这些禽鸟的羽毛已经被石油浸透，他们再也无法飞翔了。但是它们什么都没有做错。</p><p><br></p><h2>出埃及记</h2><p>在经历了这些之后，萨尔加多决定要将世间的一切展示出来，引起人类的悲悯之心。1994年，卢旺达总统逝世，一场种族清洗开始了。胡图族人开始对图西族人进行屠杀。萨尔加多加入了难民的队伍，开始他终身难忘的旅程。</p><p><img src="https://www.im6767.top/articlePlates/1598452114798.png"></p><p>在难民营地中，所见之处皆是苦难。数百万人聚集，而且大多数都是女人和小孩——青壮年都被杀害了。在这样的环境中，萨尔加多还是看到了人性中的美丽——母亲对孩子的爱。</p><p>人们总是喜欢将暴力归为原始，认为欠文明的野蛮之地才会发生这样的事。但是1994年处于文明高度发达的欧洲，南斯拉夫的克罗地亚人同样遭受着类似的境遇。</p><p><img src="https://www.im6767.top/articlePlates/1598452349473.png"></p><p>他们不得不出逃躲避灾难，却又要担心在新的地方会被邻居枪杀。</p><p><img src="https://www.im6767.top/articlePlates/1598452416249.png"></p><p>这些事情确实发生在欧洲，也确实发生在二十世纪末。他们昨天还是欧洲社会建设的支柱，今天就被迫逃离这一切。</p><p>萨尔加多这才意识到，这根本就是一个没有结局的故事，他发生在任何一个有人类足迹的地方，无论是在欧洲，非洲还是拉丁美洲，这些悲剧总是在不断上演。</p><p><img src="https://www.im6767.top/articlePlates/1598452585930.png"></p><p>当图西族人反抗成功后，原本发生在图西族人身上的事又发生在了胡图族人身上——大量的胡图族人背井离乡，躲避追杀，逃避战乱。他们聚集在戈马地区。稠密的人口带来了瘟疫，每天都有人死去，尸体堆积成山。</p><p><img src="https://www.im6767.top/articlePlates/1598452746153.png"></p><p>面对这样的场景，人们似乎已经司空见惯，习以为常，没有人再去悼念。</p><p>很多无家可归的人被迫转移进入刚果的热带雨林。即使条件如此糟糕，但是生活还在继续。母亲依旧为她们的孩子洗澡。</p><p><img src="https://www.im6767.top/articlePlates/1598452947014.png"></p><p>还有人在为其他人理发。甚至还有人在收集别人身上的美元。</p><p><img src="https://www.im6767.top/articlePlates/1598453051338.png"></p><p>当然，还有一些人他们在呼吸，却已经神志不清，产生幻想。虽然活着，但是已经被这个世界杀死了。</p><p><br></p><h2>为人类的救赎</h2><p>卢旺达之后，是萨尔加多最后一次旅行。在目睹了人世间的黑暗之后，萨尔加多说自己病了，不是染上了某种瘟疫，而是自己的灵魂受到了折磨。他开始思考，在这一切之后，自己究竟可以做什么。在回到巴西的农场之后，他发现世界的贫瘠就如同人类的社会黑暗一样。于是他决定改变，要将农场恢复成自己小时候的样子。他们开始种树。从一开始只有百分之六十成活，他们也没有放弃，这样一种就是十年。</p><p><img src="https://www.im6767.top/articlePlates/1598453454029.png"></p><p>一切都出乎他的意料，他们获得了巨大的成功。他们将一片干旱的山丘土地，变成了一片森林。</p><p><img src="https://www.im6767.top/articlePlates/1598453512878.png"></p><p>每棵树都来自他，他的妻子和孩子。</p><p>萨尔加多意识到，永恒是可以衡量的，这些树木就是他的永恒。他在人类社会中遭受的一切，都在自然之中找到了慰藉，他的灵魂也得以清洗。</p><h2>创世纪</h2><p>在经历了这些之后，萨尔加多开始转变自己，他决定拍摄一些照片，来强调环保意识。他开始学习和接受达尔文理论，感受这个世界的自然魅力。</p><p><img src="https://www.im6767.top/articlePlates/1598453866537.png"></p><p><img src="https://www.im6767.top/articlePlates/1598453889064.png"></p><p><img src="https://www.im6767.top/articlePlates/1598453904068.png"></p><p>有人劝他不要转换自己的领域，他是一个社会纪实摄影师，而不应该转向风景摄影和动物摄影。但是他知道，这是他最伟大的一个项目。他开始寻找自然和原始，在热带雨林中寻找印第安人的足迹，在北极圈里寻找涅涅茨人的车辙印。在这些自然景观中，他又找到了这个世界的美妙之处。</p><p><br></p><h2>上帝的使徒</h2><p>在萨尔加多游历南美洲的时候，一个传教士朋友曾对他说：&quot;萨尔加多，我觉得你死后一定能进入天堂，有些人是上帝派来监视人间的，而你就是这样的人&quot;。从萨尔加多一生的经历来看，他在经历了人世间的疾苦之后，为人类所犯暴行感到羞愧和懊悔。他曾经说：&quot;<span style="color:rgb(51, 51, 51);">人类不值得活着……很多时候，我且放下摄影机，在杀戮面前哭泣…</span>&quot;。但是幸运的是，他最终找到了治愈自己灵魂的方式——和自然融为一体。</p><p>有人会说，萨尔加多的伟大来自于他放弃了丰厚报酬的工作，而选择了经历这一切。我认为不是这样，我们总是喜欢用放弃来衬托伟大，而萨尔加多的伟大根本就来自于他本身，来自于他内心的善良和理智，和那份旷世的纯净。</p><p><img src="https://www.im6767.top/articlePlates/1598454652553.png"></p><p>如果你对纪录片感兴趣，或者想看看这个世界被你遗忘或者忽视的角落，那么《地球之盐》确实是不错的选择。</p><p>最后，以萨尔加多老爷子的一句话来结束本文：&quot;<strong>当我死的时候，我们种下的森林将会恢复成我出生时的模样，循环得以圆满。这就是我一生的故事</strong>&quot;。</p>',92)]))}const Vu=A(Ru,[["render",Mu]]),$u=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ou,default:Vu},Symbol.toStringTag,{value:"Module"})),Lu=JSON.parse('{"title":"《金刚川》——一部中庸的命题作文","description":"","frontmatter":{"title":"《金刚川》——一部中庸的命题作文","summary":"2020年是抗美援朝战争的七十周年，在这样的大背景下，一部以描述该次战争的电影也应运而生。近日针对这部电影的讨论比较广泛，再者战争片也是自己相对感兴趣类型，所以不大去电影院观影的我也算是凑了一把热闹，看完了这部电影。借此机会，也来谈谈自己对这部电影的一些看法。","date":"2020-10-25T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/《金刚川》——一部中庸的命题作文.md","filePath":"content/blog/《金刚川》——一部中庸的命题作文.md"}'),Hu={name:"content/blog/《金刚川》——一部中庸的命题作文.md"};function zu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>谈谈优点</h2><p>过去我对国产的战争片并没有多大兴趣，并不是故事太差，也不是因为过分塑造英雄主义，仅仅是因为场面保守，不够真实。讲白了，就是拍的有点假。战争机器面前，肉躯太脆弱了。子弹贯穿肉体不大可能是一块血斑，被机枪击中的战士也不大会完整的倒在血泊之中。比较严苛的审核、保守的表达方式和残酷的战争之间的矛盾难以协调，导致多少缺点味道。个人感觉从《红海行动》开始，一些镜头表达开始相对放宽，国产电影中敢于去表达一些血腥镜头。</p><p>在《金刚川》这部电影中，战争是被表现出来了的。无论是&quot;大部队战士在树林中隐蔽时遭遇榴弹炮袭击&quot;这样的&quot;小场面&quot;，还是&quot;两个防空炮阵地和敌机殊死较量&quot;的&quot;大场面&quot;，战争的刻画都带来了应有的紧张感和残酷感。惨肢、尸体和血液 ，这种暴力美学的表达是合格的——尽管可能会引起少数观众不适。</p><p><img src="https://www.im6767.top/articlePlates/1603616813095.gif"></p><p>故事简单但非常明确，战士们要驰援战场，但是核心问题就是这座桥。故事围绕着桥的摧毁——重建——再次摧毁——再次重建展开，在表达战争场面的同时，并没有遗忘这个故事核心。在一些战争片中，过于刻画和表现战争画面，导致电影到达一定时长后，故事的围绕点都快已经被遗忘了，这些战斗到底是为何发生的，导致感觉电影看得很爽，但是不大记得故事。当然，本片的电影导演有三位，管虎、郭帆、路阳，这样的低级错误出现的几率也微乎其微。</p><p>演员演技在线，没有出戏。演员对于一部电影真的很重要。张译、吴京和邓超，老面孔了，前两位戏路就是偏硬的范儿，邓超也出演过战争片。总之没有什么特别大的违和感。</p><p>无论宣传如何拔高，大众的点评如何贬低，个人认为这部电影都是及格的，不至于沦为烂片之列，但是确实不那么出彩。</p><h2>不那么致命的小问题</h2><p>上面说完电影的一些优点，下面可能就要来聊聊缺陷了。当然，无论是这一小结我们想要讨论的小问题，还是下一结我们可能讨论的大问题，都只是个人的一种观点，仅仅是个人观影感受和审美方式，希望不大会影响到你的感受。</p><h4>军事战争爱好者可能并不买账</h4><p>抗美援朝的故事很多，著名战役也不少。本部选择了金城战役，但是事实上金刚川这部分故事在历史事件上和金城战役并没有多大关系。有不少军事战争爱好者都以严谨的态度提到了这个问题，这表明编剧和导演并不完全熟悉和了解抗美援朝战役，或者说没有做好充足的功课。电影的历史观像是&quot;架设在真实历史事件上的不真实事件&quot;。要知道，战争片的观影人群中，还是有很多较为专业的历史爱好者，这多少会影响到影片质量。值得一提的是，不久前上映的《八佰》就因为不符合史实而引来一些争议，《金刚川》又犯下了同样的错误。不过对于大多数普通观影者来讲，问题不大。</p><h4>没那么必要的爱情故事</h4><p>都说爱情是电影永恒不变的主体，电影第一个章节讲了战士刘浩和联络员老乡的故事。作为全电影唯一一段爱情故事，表现得并不成功，我甚至没有记住爱情故事中女主角的名字。在部队隐蔽在山林中的时候，刘浩表示他已经关注这个女孩了，但是这个女孩并不关注他。在第一个章节即将结束时，女孩表示知晓刘浩的名字，故事就结束了。它确实是整个故事的一部分，但少了这一部分，故事丝毫不受影响。</p><p><img src="https://www.im6767.top/articlePlates/1603625841760.png"></p><p>以上是个人觉得电影处理有瑕疵的地方，不过都只是一些小问题，每部电影都有小瑕疵，也并不是每个观众都对某些情节买账，它们不足以影响整个电影的质量。</p><h2>我不喜欢的地方</h2><p>《金刚川》并不优秀。很多媒体介绍电影是催泪之作，但是很遗憾，我本身就是一个泪点很容易崩的人，这部我没有哭，而且整个影院都没有人哭。故事没有问题，但是故事的讲述方式出了问题。</p><p>《金刚川》采用了多视角叙事的方式，讲述一个故事。第一个视角是准备渡江的战士，第二个视角是执行炸桥任务的美国空军士兵，第三个视角是执行架桥任务工兵连队中负责对空防御的战士。一个故事从三个角度讲述，这样的手法在战争片中确实是少见的，是该电影的新颖尝试。但是这种尝试并没有带来意料之外的效果，反而是大大影响了整部作品的质量。无论是从哪个视角，故事讲得未免有点过于完整了。导致三个视角的叙述结束，直观感觉就是事实上一个简短的故事，完整重复了三次。不巧的是，三个章节故事最出彩的讲述角度放在了最后一个，反而让人觉得稀松平常，如果说难听一点，味如嚼蜡。有网友调侃道：重要的事情说三遍。</p><p>放在这部电影里可能更严重。本片宣传时强调管虎，郭帆，路阳联合指导。管虎有《我和我的祖国》，《老炮儿》，郭帆不提别的，《无名之辈》、《流浪地球》。怎么说也多半算是中国电影行业的优等生。但是面对《金刚川》这个教科书式的高考命题作文，优等生仿佛发挥的并不好。审题基本没什么问题，三个人决定写一片分——总结构的作文，三段分一段总，分写的时候看似三个段落，事实上就是一个故事誊抄了三段，顺便一下改了改句子，最后草草点了题。60分的高考作文满分，这样的答卷怕是只有40分吧，严格一点的阅卷人可能只会给到35。</p><p>特别是第二个故事，以美国士兵的讲述部分，我格外的不喜欢。首先是没有任何铺垫开头被击落的美军飞行员和后面进行报复的飞行员到底是怎样一种关系，能够让他愤怒到一次次返回战场想要报仇，整个后半部分开始讲述他们的私人恩怨。当然这也可能是导演本身的情节安排，想要表现战争中个人情绪的变化和矛盾。个人感觉和整体情节不大和谐。影片结尾侦查的美军飞机报告轰炸位置后看到战士们用肉体筑起桥梁，我其实当时非常害怕出现这样的情形：飞行员被感动然后向总部汇报观察错误，不需要轰炸，然后离开。幸运的是没有，如果真的发生了，我可能会给这部影片低于3分的分数。</p><p>最后，关于片尾的雕塑，让我想起了超级英雄们。（是不是有点这样的味道呢？）</p><p><img src="https://www.im6767.top/articlePlates/1603634010074.jpg"></p><h2>说完了</h2><p>总之，《金刚川》是一部中规中矩的电影作品，正如开头讲述的一样，它的诞生和抗美援朝70周年的纪念有直接关系，所以本身就是一部符合主旋律的电影，它无疑是合格的，我给他6.5分。从电影角度来讲，我更愿意把这部电影放在&quot;中国电影长久进步&quot;这个历史阶段。国产电影在近几年来还是有不小进步的（把那些毫无意义的垃圾影视作品排除在外），但是还是不够。去年韩国人的一部《寄生虫》一举拿下奥斯卡最佳影片，属实是羡煞旁人。虽然我们不能说奥斯卡就代表电影评选的最高水平，但是毕竟国产电影离奥斯卡的距离还是有那么点远，希望这些导演们能够在未来带给我们更精彩更高水准的电影作品。什么，你和我提李安导演啊？那对不起，上面的国产电影再限定一下，国产内地电影。</p><p>战争片的最大意义，我想就是通过表现战争，来传达反战思想，告诉人们热爱和珍惜和平。国家安定离不开这些战士们的浴血奉献。在这个纪念日里，我也借此文这个机会，向抗美援朝的战士们，向中国最可爱的人们，致以我最崇高的敬意。愿和平永驻人间吧。</p><p><br></p><p><br></p>',27)]))}const Fu=A(Hu,[["render",zu]]),Ju=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Lu,default:Fu},Symbol.toStringTag,{value:"Module"})),Gu=JSON.parse('{"title":"一些前端杂记","description":"","frontmatter":{"title":"一些前端杂记","summary":"最近日常刷帖获取信息的时候，偶尔能看到一些和技术有关的问题，仔细一想，日常工作中也会有一些细节的实现，还是有一定的记录必要的，所以单独用一些文字记录一下，以便后续查阅。1. 控制并发请求这个问题在挺久以前面试的时候遇到过，当时答的不太好，正好近期又有需求有类似的功能，场景是有一个上传的功能，支...","date":"2023-04-19T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/一些前端杂记.md","filePath":"content/blog/一些前端杂记.md"}'),Wu={name:"content/blog/一些前端杂记.md"};function Uu(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<p>最近日常刷帖获取信息的时候，偶尔能看到一些和技术有关的问题，仔细一想，日常工作中也会有一些细节的实现，还是有一定的记录必要的，所以单独用一些文字记录一下，以便后续查阅。</p><h2 id="控制并发请求" tabindex="-1">控制并发请求 <a class="header-anchor" href="#控制并发请求" aria-label="Permalink to &quot;控制并发请求&quot;">​</a></h2><p>这个问题在挺久以前面试的时候遇到过，当时答的不太好，正好近期又有需求有类似的功能，场景是有一个上传的功能，支持多文件上传，用户选中多个文件执行上传之后，最终呈现（或者说数据设计）是每一个文件对饮表格的一行数据，所以采用实际请求时一个文件进行一次上传的方式，此时就会产生一个问题：当文件比较多的时候，可能会有数十个请求同时进行，需要一定的限制，每次最多允许n个请求同时处理，前端控制调用。实现如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">fetchWithLimit</span> = (<span class="hljs-params">reqs, limit</span>) =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> max = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(reqs.<span class="hljs-property">length</span>, limit);
    <span class="hljs-comment">//存放所有请求完成之后的结果</span>
    <span class="hljs-keyword">const</span> result = [];
    <span class="hljs-keyword">const</span> runReqs = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>();
    <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">genReq</span> = (<span class="hljs-params">index</span>) =&gt; {
      <span class="hljs-comment">// 在fetch的回调中在此添加fetch, 递归调用</span>
      <span class="hljs-keyword">const</span> req = <span class="hljs-title function_">_fetch</span>(reqs[index]).<span class="hljs-title function_">finally</span>(<span class="hljs-function">() =&gt;</span> {
        runReqs.<span class="hljs-title function_">delete</span>(req);
        result.<span class="hljs-title function_">push</span>(req);
        <span class="hljs-keyword">if</span> (count === reqs.<span class="hljs-property">length</span>) {
          <span class="hljs-comment">// 最终的结果返回在这里进行处理</span>
          <span class="hljs-comment">// 这里返回了所有请求的promise</span>
          <span class="hljs-comment">// 也可以获取到结果直接返回结果</span>
          <span class="hljs-comment">// 视需求而定</span>
          <span class="hljs-title function_">resolve</span>(result);
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-title function_">genReq</span>(count);
          count++;
        }
      });
      runReqs.<span class="hljs-title function_">add</span>(req);
    }
    <span class="hljs-comment">//首先处理能够全部并发的reqs</span>
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; max; i++) {
      count++;
      <span class="hljs-title function_">genReq</span>(i);
    }
  })
}
</code></pre></div><h2 id="滚动边界行为" tabindex="-1">滚动边界行为 <a class="header-anchor" href="#滚动边界行为" aria-label="Permalink to &quot;滚动边界行为&quot;">​</a></h2><p>以前也遇到过这个问题，但是怎么解决的给忘了。所谓的滚动边界其实就是，当一个可滚动元素内还有一个可滚动元素的时候，内部的可滚动元素滚动到边界，也就是到头之后，接着会触发祖先元素中的可滚动元素的滚动行为。在某些场景下这个行为还是比较恼人的，解决方法就是一个简单的CSS属性：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code class="hljs language-css"><span class="hljs-attribute">overscroll-behavior</span>: auto; <span class="hljs-comment">/* 默认 */</span>
<span class="hljs-attribute">overscroll-behavior</span>: contain; <span class="hljs-comment">/* 目标值 */</span>
<span class="hljs-attribute">overscroll-behavior</span>: none;
</code></pre></div><p>contain表示滚动到边界的行为不变，祖先滚动元素不会受到滚动链的影响，也就是说到达滚动边界之后不会触发祖先元素的滚动。</p><p>none则会取消滚动到边界的默认行为，并且取消滚动链影响。</p><p>不仅如此，在移动开发的时候会有一些默认的滚动行为可以通过此方式组织。例如在Android上的Chrome，当滚动超过顶部边界，行为会变成下拉刷新页面，此时可以通过设置为none阻止行为。更多用法可以<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior" target="_blank" rel="noreferrer">点击这里</a>查看。</p><h2 id="vue中一次页面卡死" tabindex="-1">Vue中一次页面卡死 <a class="header-anchor" href="#vue中一次页面卡死" aria-label="Permalink to &quot;Vue中一次页面卡死&quot;">​</a></h2><p>在最近一次项目中，完成开发推送到线上的时候，测试发现有一个弹窗功能打开后页面会卡死，而且无法恢复，只能刷新页面，而且屡试不爽。初步看到这个问题时，心里大概有数可能是某个地方发生了循环，导致主线程一直占用，但是这类问题比较难以排查，从开发过程中没有遇到过类似的情形可以推断，存在于业务代码中的硬性错误逻辑的概率不大，很可能是正式环境和测试环境的差异引起的问题，经过不断地对比，发现在使用Element组件的tableV2时，使用cellRender定义了单元格的内容展示</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">node = <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, <span class="hljs-literal">null</span>, [
  <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;自定义url&quot;</span>),
  <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, { <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;text-xs opacity-60 pt-1&quot;</span> }, click_url),
])
</code></pre></div><p>其中展示了url内容，在开发文档的约束中，click_url的数据格式是字符串格式，但是在线上因为部分数据的处理，导致click_url的数据格式变成了数组格式，这导致click_url作为一个引用对象传入后，在虚拟dom的构建中会变成node节点类型，而错误的触发渲染（因为对其改变会触发vue渲染，而渲染时又会改变click_url）。因此这里需要对格式进行处理，针对性的代码处理如下</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">node = <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, <span class="hljs-literal">null</span>, [
  <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;自定义url&quot;</span>),
  <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, { <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;text-xs opacity-60 pt-1&quot;</span> }, <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">isArray</span>(click_url) ? click_url.<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;,&#39;</span>) : click_url),
])
</code></pre></div><p>如上，解决。</p><h2 id="select组件的before-change" tabindex="-1">Select组件的before-change <a class="header-anchor" href="#select组件的before-change" aria-label="Permalink to &quot;Select组件的before-change&quot;">​</a></h2><p>这其实是一个相对简单的场景，在需求实现的过程中，有一个场景如此：现在有一个下拉选择组件ElSelect，在这个组件发生变化的时候，会影响后续表单中的某些默认值变化，该操作需要用户确认，因此我们需要有如下流程：执行select选择 -&gt; 异步询问用户是否决定修改 -&gt; 不执行修改(取消)或者执行修改(确认)。但是实际上大多数的组件仅提供change事件，也就是在选择发生之后进行处理，而无法细粒度到数值改变之前还是之后。因为vue的双向绑定的特性，往往这样的需求实现需要将已经改变为最新的值改变回来，以此模拟&quot;终止改变&quot;的效果，这样就需要处理改变前/后逻辑，相对繁琐。</p><p>综上，一个比较好的处理方式应当是建立事件before-change，该事件作用在change之前，并且before-change和change事件在执行上严格前后顺序，可以中断。基于Element组件，可以给出如下的封装：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript">&lt;template&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select-with__before-change&quot;</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;_selectValue&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;selectChange&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;$attrs&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;first&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;second&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//取消属性继承, 将属性直接传递到内部的ElSelect中进行处理</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">inheritAttrs</span>: <span class="hljs-literal">false</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref, useAttrs, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>([<span class="hljs-string">&#39;modelValue&#39;</span>]);

<span class="hljs-comment">/**
 * 注意, 这里不能将beforeChange加入到, 否则将无法检测到组件是否绑定了
 * 对应事件, 该问题也经常被讨论, 详见https://github.com/vuejs/core/issues/8082
 */</span>
<span class="hljs-keyword">const</span> emit = <span class="hljs-title function_">defineEmits</span>([<span class="hljs-string">&#39;update:modelValue&#39;</span>, <span class="hljs-string">&#39;change&#39;</span>]);

<span class="hljs-keyword">const</span> _selectValue = ref&lt;any&gt;(<span class="hljs-string">&#39;&#39;</span>);

<span class="hljs-comment">// 保证在实际的modelValue变化时能够同步至Select组件的modelValue</span>
<span class="hljs-title function_">watch</span>(<span class="hljs-function">() =&gt;</span> props.<span class="hljs-property">modelValue</span>, <span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> {
  _selectValue.<span class="hljs-property">value</span> = n;
}, { <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span> })

<span class="hljs-keyword">const</span> <span class="hljs-attr">attrs</span>: any = <span class="hljs-title function_">useAttrs</span>();

<span class="hljs-comment">// 在原本ElSelect组件的change事件中处理组件</span>
<span class="hljs-comment">// 如果有onBeforeChange属性, 则执行, 并且支持异步, 以便可以终止该操作</span>
<span class="hljs-comment">// 递交给函数执行的参数是数组, 分别是要改变的新值和当前的旧值</span>
<span class="hljs-comment">// 如果值发生了改变, 改变数值, 并触发组件的change事件</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">selectChange</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params">value: any</span>) =&gt; {
  <span class="hljs-keyword">if</span> (attrs.<span class="hljs-property">onBeforeChange</span>) {
    <span class="hljs-keyword">try</span> {
      <span class="hljs-keyword">await</span> attrs.<span class="hljs-title function_">onBeforeChange</span>([value, props.<span class="hljs-property">modelValue</span>]);
      <span class="hljs-title function_">valueChange</span>(value);
    } <span class="hljs-keyword">catch</span>(e) {
      <span class="hljs-keyword">return</span> ;
    }
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-title function_">valueChange</span>(value);
  }
}

<span class="hljs-keyword">const</span> <span class="hljs-title function_">valueChange</span> = (<span class="hljs-params">value: any</span>) =&gt; {
  <span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;update:modelValue&quot;</span>, value);
  <span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;change&quot;</span>, value);
}

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div><p>至此我们可以通过引用组件并且绑定before-change事件完成整个功能。</p><p>这里有一个细节值得讨论一下，我们知道Vue中事件与属性其实绑定传递写法不同，这与react有差异。但实际上属性和事件并没有本质区别：事件不过是一个函数类型的属性，因此在Vue的相关讨论中，有部分人其实建议二者合并，降低复杂度。在完成本功能时，其实现有的Vue在非API设计的情况下进行功能组装时确实不大方便。按照Vue的文档规范，我们的beforeChange事件当然需要在emit中声明，但是声明后无法知晓&quot;组件实例上究竟有没有绑定这个事件&quot;这件事，因为没有任何地方记录。而且emit还有一个问题就是没有返回值，这意味着我们必须用参数传递的形式实现异步。因此我们在上述代码中的解决方法是，不在emit中声明，这样就可以在$attrs属性上检测到，然后执行对应逻辑。</p><p>所以，个人认为将二者区分可能确实没有必要，需要进行更多的处理。</p><h2 id="深比较两个对象的异同" tabindex="-1">深比较两个对象的异同 <a class="header-anchor" href="#深比较两个对象的异同" aria-label="Permalink to &quot;深比较两个对象的异同&quot;">​</a></h2><p>前几天同事丢给我一个数据，是从第三方获取到的，因为太复杂，为了简便他存储的方式就是把这个巨大的JSON转化成字符串，然后前端转成对象进行数据处理。这真的是一个很复杂的数据，因为数据库中text类型的字段都无法完全容纳这个JSON字符串。</p><p>笔者拿到数据进行数据展示后发现，有的时候会出现数据&quot;重复&quot;的情况，一开始想到既然数据重复，那么直接去重即可，直接对字符串进行比较，发现明明直观上感觉到的两个相同的对象字符串比较却是false，说明其中的某些字段可能是不相同的，于是我需要知道哪些字段不相同，引起的比较有问题。所以这就涉及到一个深比较，记录相异字段的问题，笔者构建的代码如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">findDiffProperties</span> = (<span class="hljs-params">obj1, obj2</span>) =&gt; {
  <span class="hljs-keyword">let</span> diff = {};

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> obj1) {
    <span class="hljs-keyword">if</span> (_.<span class="hljs-title function_">isEqual</span>(obj1[key], obj2[key])) {
      <span class="hljs-keyword">continue</span>;
    }

    <span class="hljs-keyword">if</span> (_.<span class="hljs-title function_">isObject</span>(obj1[key]) &amp;&amp; _.<span class="hljs-title function_">isObject</span>(obj2[key])) {
      <span class="hljs-keyword">const</span> nestedDiff = <span class="hljs-title function_">findDifferentProperties</span>(obj1[key], obj2[key]);
      <span class="hljs-keyword">if</span> (!_.<span class="hljs-title function_">isEmpty</span>(nestedDiff)) {
        diff[key] = nestedDiff;
      }
    } <span class="hljs-keyword">else</span> {
      diff[key] = obj1[key];
    }
  }

  <span class="hljs-keyword">return</span> diff;
}
</code></pre></div><p>从而得到是否有不相同的属性。</p><h2 id="几个比较无聊的问题" tabindex="-1">几个比较无聊的问题 <a class="header-anchor" href="#几个比较无聊的问题" aria-label="Permalink to &quot;几个比较无聊的问题&quot;">​</a></h2><p>第一个问题是给定一个字符串，输出每个字符，当输出到最后一个字符的时候再重头开始。紧接着还给出了一个示例：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> bar = <span class="hljs-title function_">loopString</span>(<span class="hljs-string">&#39;abcd&#39;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">bar</span>(),<span class="hljs-title function_">bar</span>(),<span class="hljs-title function_">bar</span>(),<span class="hljs-title function_">bar</span>(),<span class="hljs-title function_">bar</span>())  <span class="hljs-comment">// a,b,c,d,a</span>
</code></pre></div><p>一看就知道是个高阶函数的问题，最简单的解决方法是：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">loopString</span> = (<span class="hljs-params">str</span>) =&gt; {
  <span class="hljs-comment">//保存字符串</span>
  <span class="hljs-keyword">let</span> temp_str = str;
  <span class="hljs-comment">// 闭包保存当前字符的index</span>
  <span class="hljs-keyword">let</span> index = <span class="hljs-number">0</span>;
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">let</span> len = temp_str.<span class="hljs-property">length</span>;
    <span class="hljs-keyword">const</span> char = temp_str[index];
    index++;
    <span class="hljs-keyword">if</span> (index === len) index = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">return</span> char; 
  }
}
</code></pre></div><p>当然我们也可以稍微复杂一点。输出到最后一个字符再从头开始，这看起来就像是一个圈，所以想到了循环链表：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">loopString</span> = (<span class="hljs-params">str</span>) =&gt; {
  <span class="hljs-comment">//定义一个函数生成链表节点</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">genNode</span> = (<span class="hljs-params">val, next = <span class="hljs-literal">null</span></span>) =&gt; {
    <span class="hljs-keyword">return</span> {
      val, next
    }
  };
  <span class="hljs-keyword">let</span> temp = <span class="hljs-title function_">genNode</span>(str[<span class="hljs-number">0</span>]);
  <span class="hljs-comment">//储存首节点</span>
  <span class="hljs-keyword">let</span> start = temp;
  <span class="hljs-comment">//依次生成各个链表节点</span>
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt; str.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">const</span> node = <span class="hljs-title function_">genNode</span>(str[i]);
    temp.<span class="hljs-property">next</span> = node;
    temp = node;
  }
  <span class="hljs-comment">//首尾相接</span>
  temp.<span class="hljs-property">next</span> = start;
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> val = start.<span class="hljs-property">val</span>;
    start = start.<span class="hljs-property">next</span>;
    <span class="hljs-keyword">return</span> val;
  }
}
</code></pre></div><p>第二个问题是实现链式计算器，举例</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">calc</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">add</span>(<span class="hljs-number">8</span>).<span class="hljs-title function_">minus</span>(<span class="hljs-number">3</span>).<span class="hljs-title function_">mulit</span>(<span class="hljs-number">10</span>).<span class="hljs-title function_">div</span>(<span class="hljs-number">2</span>).<span class="hljs-title function_">getValue</span>() <span class="hljs-comment">//30</span>
</code></pre></div><p>其实就是链式调用，返回自身对象的问题，上手就是一个类。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Calc</span> {
  value = <span class="hljs-number">0</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">val</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> = val;
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;
  }

  <span class="hljs-title function_">add</span>(<span class="hljs-params">val</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> += val;
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;
  }

  <span class="hljs-title function_">minus</span>(<span class="hljs-params">val</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> -= val;
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;
  }

  <span class="hljs-title function_">mulit</span>(<span class="hljs-params">val</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> *= val;
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;
  }

  <span class="hljs-title function_">div</span>(<span class="hljs-params">val</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> /= val;
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;
  }

  <span class="hljs-title function_">getValue</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span>;
  }
}


<span class="hljs-keyword">const</span> <span class="hljs-title function_">calc</span> = (<span class="hljs-params">n</span>) =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Calc</span>(n)
}

</code></pre></div><p>第三个问题，实现一个累加函数的功能，举例</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-title function_">sum</span>(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>)(<span class="hljs-number">2</span>).<span class="hljs-title function_">valueOf</span>() <span class="hljs-comment">// 1 + 2 + 3 + 2</span>
</code></pre></div><p>实际上也是个高阶函数的问题。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">// args存储所有进入的参数</span>
  <span class="hljs-keyword">const</span> args = [...<span class="hljs-variable language_">arguments</span>];
  <span class="hljs-comment">// returnCb用于接受后续参数, 并且返回自身, 以便累计记录</span>
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">returnCb</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> _args = [...<span class="hljs-variable language_">arguments</span>];
    args.<span class="hljs-title function_">push</span>(..._args);
    <span class="hljs-keyword">return</span> returnCb
  }
  <span class="hljs-comment">// valueOf用于求和输出结果</span>
  returnCb.<span class="hljs-property">valueOf</span> = <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> args.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">prev, curr</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> prev + curr
    }, <span class="hljs-number">0</span>)
  }
  <span class="hljs-keyword">return</span> returnCb;
}
</code></pre></div><p>综上，其实是一些比较无聊的问题。</p><h2 id="echarts中的tree的更新" tabindex="-1">Echarts中的Tree的更新 <a class="header-anchor" href="#echarts中的tree的更新" aria-label="Permalink to &quot;Echarts中的Tree的更新&quot;">​</a></h2><p>Echarts中的tree类型的图，本身支持展开/折叠操作，实际有个需求是，可以通过界面按钮进行图表的放大缩小。此时通过解析tree图的设置可以想到，控制图的放大缩小，只需要处理series的zoom属性即可，故会有如下代码：</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre><code class="hljs">const zoomMax = 3
const zoomMin = 0.7

const onZoomPlus = () =&gt; {
  const opt = myChart.getOption() as any;
  myChart.setOption({
    series: [
        {
            zoom: Math.min(opt.series[0].zoom + 0.1, zoomMax),
        }
    ]
  })
}

const onZoomMinus = () =&gt; {
    const opt = myChart.getOption() as any;
  myChart.setOption({
    series: [
        {
            zoom: Math.max(opt.series[0].zoom - 0.1, zoomMin),
        }
    ]
  })
}
</code></pre></div><p>但是当实际进行操作的时候，会注意到一个问题：每次setOption执行之后，tree的展开状态就会发生变化，变成初始化的展开状态，而无法保留期间的节点展开/折叠的状态。这个问题在对应的仓库中有相关issues，例如（<a href="https://github.com/apache/echarts/issues/19289" target="_blank" rel="noreferrer">#19289</a>），有些issue甚至已经是好几年前的了，有人回复会考虑在后续版本中添加对应的功能，但是这个问题依旧没有解决。</p><p>实际上API里面会有一些提示，数据的每个节点可以定义collapsed字段，用以控制初始化的节点展开状态。而在节点展开/折叠之后，我们通过getOption获取到图表的option时，可以查看到这个过程中series中并没有添加collapsed字段，这就导致通过setOption时，option中的series实际上是最开始图表初始化时的series，所以折叠状态会被重置。</p><p>因此可以想到，解决方案之一是，在节点展开/折叠发生后，手动设置collapsed字段，使其可以保存对应的值，以便在setOption时处理正确。tree本身没有监听展开/折叠的事件，因此我们从click入手（当然，如果是其他途径进行控制的，在对应方法中进行处理）。</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre><code class="hljs">  myChart.on(&#39;click&#39;, function (params) {
      if (params.componentType === &#39;series&#39;) {
          (params.data as any).collapsed = !(params.data as any).collapsed;
      }
  });
</code></pre></div><p>此时我们再进行上述提到的操作进行setOption，可以看到折叠状态正确保留。</p>`,52)]))}const Bu=A(Wu,[["render",Uu]]),Yu=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Gu,default:Bu},Symbol.toStringTag,{value:"Module"})),Xu=JSON.parse('{"title":"三言两语聊Git","description":"","frontmatter":{"title":"三言两语聊Git","summary":"git的源代码的自述文件中这样介绍git这个名字：The name \\"git\\" was given by Linus Torvalds when he wrote the very first version. He described the tool as \\"the stupid cont...","date":"2023-03-24T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/三言两语聊Git.md","filePath":"content/blog/三言两语聊Git.md"}'),Zu={name:"content/blog/三言两语聊Git.md"};function Qu(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[s[4]||(s[4]=d("p",null,"git的源代码的自述文件中这样介绍git这个名字：",-1)),d("blockquote",null,[C(p,{style:{color:"rgb(32, 33, 34)"}},{default:R(()=>s[0]||(s[0]=[m('The name "git" was given by Linus Torvalds when he wrote the very first version. He described the tool as "the stupid content tracker" and the name as (depending on your way):')])),_:1,__:[0]}),d("ul",null,[d("li",null,[C(p,{style:{color:"rgb(32, 33, 34)"}},{default:R(()=>s[1]||(s[1]=[m('random three-letter combination that is pronounceable, and not actually used by any common UNIX command. The fact that it is a mispronunciation of "get" may or may not be relevant.')])),_:1,__:[1]})]),d("li",null,[C(p,{style:{color:"rgb(32, 33, 34)"}},{default:R(()=>s[2]||(s[2]=[m(`"global information tracker": you're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room.`)])),_:1,__:[2]})]),d("li",null,[C(p,{style:{color:"rgb(32, 33, 34)"}},{default:R(()=>s[3]||(s[3]=[m("stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.")])),_:1,__:[3]})])])]),s[5]||(s[5]=x(`<p>是的，作者将其称之为&quot;愚蠢的内容跟踪管理器&quot;，但是从2005年开始使用至今，git已然成为了现在世界上最流行的版本控制工具。包括笔者在内的绝大多数计算机行业从业者肯定都或多或少接触过git，但笔者对git的认知仅停留在使用层面，甚至在使用层面都难以称之为&quot;熟练&quot;，本质上是因为很多东西知其然而不知其所以然，特别是面对一些日常开发中可能不经常出现的情况，需要使用到git的一些较低频率的用法时，就显得笨拙而迟钝，所以用三言两语来记录一些git的场景和简单原理，是必要且有用的。</p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>下面一张图片是解析git原理时常见到的一个示意图：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1679747544936-976b140d-7eb3-4c48-b2e0-1bad3a36c9c0.png" alt=""></p><p>四个虚线框的部分就是本地的git仓库，也就是每个项目中的.git文件夹中所描述的内容，它不仅仅是一份代码拷贝，其包含代码，版本，其它程序员工作内容的全部信息。git是分布式的，也就是说，没有网络的情况下，程序员也可以在本地仓库中完成一切操作，如果想要在任意两个git仓库之间进行操作，那么就像是图中那样，利用clone / push / pull进行代码的互相同步即可。</p><h3 id="gitlab-or-github" tabindex="-1">gitlab or github <a class="header-anchor" href="#gitlab-or-github" aria-label="Permalink to &quot;gitlab or github&quot;">​</a></h3><p>git是版本管理工具，gitlab和github则是git分布式网络控制平面的实现，用以进行托管，发现和控制。从上图中我们可以看到，如果ABCD四个git需要进行代码的同步，就需要依次在对应地址的git上响应命令，这个过程显得啰嗦复杂，所以gitlab和github就是建立了&quot;中心仓库&quot;，ABCD四个成员的节点git仓库源自于中心仓库的clone。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1679799342780-2a204f4d-6d41-43f5-ad24-50574e79b6c9.png" alt=""></p><h2 id="看看-git" tabindex="-1">看看.git <a class="header-anchor" href="#看看-git" aria-label="Permalink to &quot;看看.git&quot;">​</a></h2><p>我们的项目中，能够看到顶层路径下的.git目录大致如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript">├─hooks
├─info
├─logs
├─objects
│  ├─info
│  └─pack
└─refs
</code></pre></div><p>在这些文件中，objects中的内容最多，事实上，我们对于git目录下的绝大多数内容都在object中。</p><p>objects中储存的对象有三大类：blob，commit和tree。在git的原理中，有一个关键概念：&quot;每一个commit都是当前git仓库的一个快照&quot;，而commit就是整个对象关系图的入口；tree则用于描述目录结构，每个目录节点是一个tree对象。目录之间，目录文件之间的层级关系会在tree对象内容中体现，而commit会有一个根的tree对象；blob对象就是tree的叶子节点，它包含的内容就是文件的内容。</p><p>无论是blob，commit还是tree，一旦被放入objects之中后，数据就不会发生改变了。即使你commit提交对某个文件产生了变化，git也只是针对最新的文件创建一个blob对象，而不是引用前一个内容来修改它。实际上git的tree对象组织结构式一颗默克尔树(Merkle Tree)。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>事实上我们平时在git的使用中，并不太会去关心.git中的文件存储格式之类的问题，因为git将以上操作和模型都以对应地命令向我们表达出来了，我们使用对应的命令进行查看/操作即可。</p><h3 id="最常用的命令-git-add" tabindex="-1">最常用的命令: git add <a class="header-anchor" href="#最常用的命令-git-add" aria-label="Permalink to &quot;最常用的命令: git add&quot;">​</a></h3><p>说到git add命令，就需要将git的总模型再区分一下，分为工作区，暂存区和版本库。</p><p>当我们执行git add xx时，是将工作区的文件放入暂存区，此时版本库信息是未更新的。暂存区内容位于.git目录的index文件中。我们可以执行git status查看当前git的状态，当我们有文件被放入暂存区时，会有以下输出：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git add .
git status
<span class="hljs-comment"># Your branch is up to date with &#39;origin/feat/v1.0&#39;.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># Changes to be committed:</span>
<span class="hljs-comment">#  (use &quot;git restore --staged &lt;file&gt;...&quot; to unstage)</span>
<span class="hljs-comment">#        modified:   src/views/games/index.vue</span>
<span class="hljs-comment">#</span>
</code></pre></div><p>说明我们暂存区内有对应的修改内容，而这些内容在下一次的commit中将会被提交。</p><p>同样地，依据提示，我们可以通过git restore --staged xxx 来撤销这次操作，将其从暂存区中移除。记住，这里的--staged表示我们撤销的是索引中的内容，git restore还可以从其他内容中进行恢复。</p><p>提交到暂存区是进行提交的前置步骤，可以从中看到文件的更改情况，以便在commit时确认文件的准确无误。</p><h3 id="查看不同-git-diff" tabindex="-1">查看不同: git diff <a class="header-anchor" href="#查看不同-git-diff" aria-label="Permalink to &quot;查看不同: git diff&quot;">​</a></h3><p>通过上面的git status我们看到了提交有文件发生了改变，那么改变的详细信息如何查看？git diff就提供了对应地功能。git diff是为了罗列变化，他可以是工作区树和索引或者版本库中树的变化，也可以是合并产生的变化，也可以是不同的blob对象之间的变化，也可以是磁盘两个文件之间的变化等等。</p><h3 id="提交-git-commit" tabindex="-1">提交：git commit <a class="header-anchor" href="#提交-git-commit" aria-label="Permalink to &quot;提交：git commit&quot;">​</a></h3><p>git commit的作用是创建一个提交，其中包含暂存暂存区的当前内容和描述本次更改的日志消息。通常一个新的提交时HEAD的直接子项，是当前分支的最顶端那一个，提交之后，它就是最顶端的那一个。在执行git commit之前，可以通过命令对暂存区内容进行更改，以便提交到版本库的内容为正确内容。</p><p>当我们commit时，我们需要决定哪些更改是需要被提交的，就需要携带不同的参数。我们可以通过-p参数调用交互式的patch界面来选择哪些内容需要被提交，当然如果你的工作区里包含的内容全部需要被提交时，可以携带 -a参数，这将会自动添加和移除文件，然后提交。</p><p>从commit开始，如果出现错误提交的情况，处理起来就需要相对小心了。如果你对git命令不熟悉，从这里开始就可能会出现一些异常情况，从而导致整个版本库变得凌乱。</p><p>如果你进行了提交，然后立刻就发现了错误，可以使用git reset命令进行恢复。</p><h3 id="重置-git-reset" tabindex="-1">重置：git reset <a class="header-anchor" href="#重置-git-reset" aria-label="Permalink to &quot;重置：git reset&quot;">​</a></h3><p>git reset的功能是将当前的HEAD重置为指定的状态，通俗一点来讲就是将现在的分治的顶部指针指向之前的某个commit。</p><p>git reset命令通常使用有三种参数模式：</p><ol><li><code>git reset --mixed &lt;commit-hash&gt;</code>，这也是直接键入git reset时的默认模式。该命令下的行为是，将原有的提交内容还原，变成未add的状态，如果需要再次commit，需要执行git add 将文件再次写入暂存区，然后执行git commit。</li><li><code>git reset --soft &lt;commit-hash&gt;</code>，这个模式有点类似第一种，在该模式下，只是将commit信息后退了，暂存区和工作目录的内容不变，也就是改动文件仍旧在暂存区，可以直接通过git commit再次提交。</li><li><code>git reset --hard &lt;commit-hash&gt;</code>，在该模式下，会以某个提交的id强制恢复git文件夹的内容和状态，这个commit节点之后的所有提交都会被删除。这是一个相对比较危险的指令，因为这种强制更新会有一些问题，也就是说，该分支虽然在服务器上被重置，但是多个拥有这个分支的人，他们本地的commit版本高于服务器的版本，在他们推送过这个分支之后，被撤销的操作又会回来，所以类似的情况需要对方删除本地对应地分支，重新拉取，以获取最新的commit状态。另外一个问题就是，reset --hard如果出现了问题，是一次错误的操作，就需要通过以下指令恢复：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git relog 	// 复制要恢复的<span class="hljs-built_in">hash</span>
git reset --hard <span class="hljs-built_in">hash</span>
</code></pre></div><p>事实上，git reset应该是一个比较常用的重置功能，在很多场景下都可以使用，不仅是修复一些提交过程中产生的文件错误添加，描述错误等问题，在某些场景下将代码提交，切换到其他分支完成工作后再次恢复继续工作的任务也可以轻松完成。</p><p>我们以一个具体的例子来进行说明，经过6次提交之后，我们得到了从C0-C5六个提交节点，当我们发现最近的三次提交出现问题时，我们可以通过</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git reset C2
</code></pre></div><p>进行commit的撤销动作，其最终会变成如下状态：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698921475653-0ffa707b-12dc-4881-931c-2546cb156cd6.png" alt=""></p><h3 id="另一个还原-git-revert" tabindex="-1">另一个还原：git revert <a class="header-anchor" href="#另一个还原-git-revert" aria-label="Permalink to &quot;另一个还原：git revert&quot;">​</a></h3><p>git revert是另一个比较常见的还原方式，通常在gitlab上进行代码合并发布之后，出现问题时回退就是使用git revert。实际上git revert就是一个反向操作，生成一个新的提交，整个提交的内容是目标提交改变内容的相反操作。例如你在提交1中增加了三行代码，针对提交1进行revert之后，会生成提交2，提交2的改变内容是删除了1增加的三行代码，最新的提交变成了提交2。</p><p>经过上述操作，一次提交的内容就被还原了。</p><p>我们假设这样一个场景，你改动了一段代码，某个地方有点问题，但是这个改动已经被合并进入了master分支并且进行了新版本的发布，此时线上出现了问题，所以管理员进行了还原，使用了git revert将此次代码还原了。</p><p>这个时候就会出现一个问题：你在你的分支上完成了对这个问题的修复，然后再次提交合并到master时，会发现没有对应地代码变动了。这其实是因为，git revert产生的新的提交其实是包含之前的提交的，此时一般可以用三个方法来进行处理：</p><ol><li>对于revert产生的提交再次执行一次revert，产生新的提交就是原先有问题的提交，然后把你改动的代码合并上去即可。</li><li>利用cherry-pick将节点取出来，组成一个新的分支，然后将代码进行提交。</li><li>也可以将自身的分支提交合并成一个提交，这样就创建了一个新的提交，然后再次合并，就不会拒绝新的提交了。</li></ol><p>利用git revert和git reset都可以完成这样的操作，不过git revert是更好的选择，因为git revert产生的是一个新的提交，不会对原有的提交log产生影响。</p><p>既然如此，略微探讨一下git revert，git reset和git restore之间的区别：</p><ol><li>git revert是创建一个新的提交以恢复其它提交造成的更改。</li><li>git restore是从索引中恢复工作树中的文件，git restore并不会更改分支。</li><li>git reset是针对分支的操作，移动HEAD来完成分支中添加和删除提交的操作，这个操作会修改提交记录。</li></ol><p>我们给出一个get revert的简单图示说明。</p><p>当我们某次在master分支上合并了C4提交的时候，我们意识到这次提交是有问题的，此时我们需要撤销这次合并</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git revert C4
</code></pre></div><p>可以看到，master并没有向上指向C3节点，而是向下生成了一个新的节点C4&#39;，而这个提交节点的内容本质上和C3是相同的，从而达到撤销的目的。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698921623314-207fb518-14b4-4d99-93cc-31a109a92545.png" alt=""></p><h3 id="合并-merge" tabindex="-1">合并：merge <a class="header-anchor" href="#合并-merge" aria-label="Permalink to &quot;合并：merge&quot;">​</a></h3><p>以上讲到的无论是add还是commit，其操作对象都是单一分支，在实际使用中，通常要在不同的分支之间进行合并，这个时候就需要git merge进行处理。</p><p><code>git merge &lt;branch&gt;</code> 就是将指定分支合并进入当前分支，这个过程有三种可选模式：</p><ol><li>默认是fast forward模式。fast forward模式就是git判断没有分歧路线时，就直接将目标分支的HEAD移动到最新位置。</li><li>--no-ff强行关闭fast forward模式。简单来讲，关闭fast forward模式就是对要merge的分支HEAD进行了一次复制，创建一个新的commit。</li><li>--squash，合并提交模式。这个也是非常常用的一种模式。当你在你的分支上进行代码开发时，你的commit可能会写的比较随意，特别是需要多次提交时，可能数十个提交最终完成的是同一个任务。如果将这些提交合并到其它分支，其它分支上也会出现数十个提交的log，这会让log记录看起来非常的混乱，此时通过--squash将多个commit通过一个commit统一提交，补充本次提交的commit信息即可。</li></ol><p>这里以一个图解进行说明merge。在一次功能发布之后，我们发现某个线上的功能出现了bug，此时我们基于master分支创建了fix/bug的分支，而master分支可能有(也可能没有)其他提交，因此分支状态会变成如下：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698915863600-7377ce37-fd0e-430c-8d3e-d0e1f1b7f42e.png" alt=""></p><p>从C1节点位置产生了两个分支，分别对应有C2提交和C3提交，当我们bug修复之后，需要将分支与master分支进行合并，我们在master分支上执行命令合并fix/bug</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git checkout master
git merge fix/bug
</code></pre></div><p>执行完毕后节点结果变成如图：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698916226445-dada6660-32b8-47e1-83d8-89758e3437c1.png" alt=""></p><p>可以看到，master分支上多出一个节点C4，master和fix/bug都指向该节点。这是因为merge会产生一个合并节点。此时master向上溯源就包含了所有的变更。</p><p>当我们需要在fix/bug分支上合并master的时候，执行merge，因为master包含fix/bug上的改动，fix/bug会直接指向C5节点。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698917251018-8d01322a-aed1-44d9-86ba-8b6982288cf4.png" alt=""></p><p>直接移动到C5这是因为默认是fast-forward模式，如果是使用--no-ff时，会变成如下状态：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698917660040-4c70dc63-2a64-4f6e-99d1-2ecbaabcd48d.png" alt=""></p><p>正如上面提到的，C7是复制了C6，产生了一个新的commit。</p><h3 id="变基-rebase" tabindex="-1">变基：rebase <a class="header-anchor" href="#变基-rebase" aria-label="Permalink to &quot;变基：rebase&quot;">​</a></h3><p><code>git rebase &lt;branch&gt;</code>的作用就是将一个或多个commit应用到某个路径上。在开发使用的过程中，通常会产生比较多的commit，rebase可以操作这些commit，以达到自己目的。</p><p>这里举个例子来讲，当你在分支上进行开发的时候，可能会产生很多次提交，以便自己进行记录和区分。等到需要提交到远程分支的时候，通常只需要一次提交记录来说明本次提交的内容。如果直接进行push就会把每次的commit都提交，势必会对线上的版本库造成比较大的提交信息污染，此时就可以使用rebase。</p><p>举例来说，当前我们有一个分支有C0到C5六次commit，我们可能需要有如下需求，合并其中某几个提交，把其中某两个提交调换位置，或者说移除某几次提交，这些都可以通过git rebase完成。例如我们需要对C1到C4的commit进行操作，使用如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash">git rebase -i  C1  C4
</code></pre></div><p>这里的 -i是--interactive的简写，通过这个指令可以通过可视化操作的方式进行处理，git提供了以下指令可以操作commit：</p><blockquote><p>pick：保留该commit（缩写:p）</p><p>reword：保留该commit，但我需要修改该commit的注释（缩写:r）</p><p>edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）</p><p>squash：将该commit和前一个commit合并（缩写:s）</p><p>fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）</p><p>exec：执行shell命令（缩写:x）</p><p>drop：我要丢弃该commit（缩写:d）</p></blockquote><p>在例子中，我们将C2放置在C3后面，然后将C4移除，确认后，会变成这样的状态：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1698992451213-1aaf6296-7816-41d0-ab4b-393a15e4f3ce.png" alt=""></p><p>可以看到，rebase的内容会以一个新的路线，按照选择的内容进行处理。</p><p>通常rebase是一个逐步完成的过程，当完成一个commit处理，到下一个的时候，执行git rebase --continue去应用下一个补丁。也或许在rebase过程中，你想取消真个rebase操作，就需要使用git rebase --abort。</p><p>git rebase通常还会使用的一个情形就是，当你在一个比较旧的分支进行开发，当最终要合并到master分支的时候，会发现直接合并会产生冲突，此时就需要使用rebase将master分支与现有的分支进行合并，进行冲突的解决，之后现有的&quot;落后&quot;分支就会和master分支保持一致，就可以进行合并了。</p><h3 id="挑选-cherry-pick" tabindex="-1">挑选：cherry-pick <a class="header-anchor" href="#挑选-cherry-pick" aria-label="Permalink to &quot;挑选：cherry-pick&quot;">​</a></h3><p>cherry-pick和rebase本质上其实并没有太大区别，甚至可以将rebase视为cherry-pick的另外封装。cherry-pick的作用就是将指定的提交应用到某个分支。</p><p>举例来讲，现在我们有两个分支，bugFix和master，两个分支以不同的路径进行开发，现在需要将master分支上的C5这个commit添加到bugFix分支。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-comment"># on branch bugFix</span>
git cherry-pick C5
</code></pre></div><p>执行之后，结果会变成如下：</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1699240230215-be1f8691-2a23-4e21-a37b-f02cc8f495c3.png" alt=""></p><p>可以看到，在bugFix分支后面出现了C5&#39;提交，该提交和C5是一致的。cherry-pick命令还可以将分支名作为选择，执行后会处理该分支上的最新一次提交。</p>`,89))])}const Ku=A(Zu,[["render",Qu]]),sd=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Xu,default:Ku},Symbol.toStringTag,{value:"Module"})),nd=JSON.parse('{"title":"不属于我们的电影记忆：《一秒钟》","description":"","frontmatter":{"title":"不属于我们的电影记忆：《一秒钟》","summary":"\\"一秒钟太短，给老子放一百遍。\\"当荒凉的戈壁、石子路在银幕上展现，风沙和土坯房在光影中交错，思绪已经被老故事灌满。这是西北土地上的电影情节，是属于一些荒凉西北上电影人的记忆，却不属于我们这一代。","date":"2021-02-01T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/不属于我们的电影记忆：《一秒钟》.md","filePath":"content/blog/不属于我们的电影记忆：《一秒钟》.md"}'),ad={name:"content/blog/不属于我们的电影记忆：《一秒钟》.md"};function td(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<p>据说电影《一秒钟》的结局是被篡改过的，原本这个故事有个更符合张艺谋内心表现的结局。不过无论结局如何，《一秒钟》带来的观影体验都是成功的。</p><p>故事从张译饰演的外逃劳改犯开始，为了见自己多年未见的女儿一次，认准了《新闻简报》中会出现自己女儿的他不惜一切代价要让《新闻简报》正常放映。刘浩存饰演的刘闺女则为了自己的弟弟能走出童年中，那一份在大人看来&quot;没什么大不了&quot;的童年阴影，想要获取一截电影胶片。范伟饰演的范电影为了能够保住自己电影放映员的位置，尽力要保证电影的正常放映，并且顺便隐瞒自己的儿子弄坏放映胶片的事实。三个有鲜明目的的人围绕着一卷《新闻简报》展开了一段戏剧性的故事，描述的却是一个时代的&quot;电影情结&quot;。</p><h2>一秒钟不够</h2><p>当外逃的劳改犯张九声在新闻简报中寻找自己的女儿时，他是茫然的。连他自己都不太确定，长大之后的女儿是什么样。后来察觉到那个肩负重物的女孩就是自己的女儿时，张九声恨不得看她一百、一千、一万遍。一秒钟太短，不够。此时的张九声已经是满眼的泪水了。</p><p>&quot;争什么呢？&quot;，这是时代的一问，这么小年纪，和其他人争什么呢？电影前段塑造的张九声为了这一秒钟，央求，威胁，争吵，在此刻都已经化为眼神中的一种疲惫。</p><p><img src="https://www.im6767.top/articlePlates/1612262205502.png"></p><h2>时代的电影情结</h2><p>关于《一秒钟》的故事情节，我就想说到这里。刘闺女对她弟弟的呵护是真诚的，范电影对电影的痴也是真诚的，这些真诚的情感是电影的主题，也是大家能够直观感受到的表现与冲击。</p><p>关于这部电影，给我印象最深的其实是村里村民们对于电影的无限憧憬和向往。</p><p>在我很小的时候，是生活在农村的。印象中那时候也有放映队集体放电影，不过一年也没有几次。那个时候电视已经比较普及了。记忆中最深刻的一次是自己蹲在一块大石头上，拿着两块雪白的大石头互砸，眼中紧盯着碰撞中出现的火星，那天夜里有点小风，天气微微凉，甚至有点冷，漫天都是星星。那天演的是什么？我不大可能还记得住，大人们都在看电影，我们则四处打闹。自那之后，放映队已经完全从我脑海中消失了。</p><p>不过，它依旧活在我父母的记忆里。我经常和父母聊起它们小时候的故事：</p><blockquote>那是一个娱乐设施匮乏但是欢乐常存的时代。黄昏时分的人们聚集在一起聊天，或者说，&quot;喧慌&quot;。在这种单调的娱乐下，放映队可谓是精神布道者。每当有电影要在某个地方放映时，人们是按捺不住的。即使道路的遥远在如今的价值观下，完全不值得那一个半小时电影所带来的快乐，但人们依旧愿意花费上几乎和电影时长同样地时间赶到那里去看电影。他们中的很多人对于这些反复放映的电影中的情节和台词都已经烂熟于心，但是这也阻止不了他们再一次踏上这段电影的&quot;朝圣之路&quot;。</blockquote><p>那些带有时代色彩的电影名在如今和我同龄的人脑海中几乎已经绝迹了：《英雄儿女》，《上甘岭》，《地道战》，《地雷战》，这些电影大多在我后来稍大一些的时候，通过电视又一次向我布道，不过似乎也只是“时代的绝唱”。放映队的历史结束了，一个时代的电影记忆也随之结束了。</p><h2>《英雄儿女》</h2><p>为什么要单独说说《英雄儿女》？因为《一秒钟》电影里观众期待的也是《英雄儿女》。你对这部电影也许会很陌生，不过它其中的一段台词非常非常经典：</p><blockquote>亲爱的首长，同志们，为了胜利，向我开炮！</blockquote><p>去年是抗美援朝战争70周年，也有许多战争献礼片上映，就像《金刚川》。不过和《上甘岭》、《英雄儿女》比起来，金刚川确实差点意思，我觉得，差的这点意思，其实就是时代记忆。</p><p>那个时代是英雄时代，观众喜欢英雄，电影喜欢塑造英雄，尽管物质文化不丰富，但人们对精神文化的渴求不亚于对于吃穿住行的强烈需要，甚至更甚于前者，文化娱乐上的匮乏导致每一部电影作品的含金量都非常高。不仅如此，辅助以特色鲜明的教育，爱国战争类题材的电影早已经在人们心中立下了不可动摇的地位。人们乐此不疲的去发现上一代，甚至是当时经历过，依旧活着的那一代的故事。</p><p>人人都有属于自己的怀旧时刻，当你有兴趣和上一辈，甚至是上上辈的人聊天，聊起他们的童年时，你多半会听到一些条件艰苦，物质匮乏，食不果腹的经历，聊起电影他们也可以和一说上一整个下午。不要以为他们只会和你讲一些革命老片，他们那个时候的文化确实是自由的：我就听起父亲讲过黑泽明的《姿三四郎》，这是黑泽明的处女作，是一个时代的经典；来自南斯拉夫的电影《桥》，熟悉的&quot;啊！朋友再见！&quot;就来自这部电影。这些舶来品确实受到了很高地赞誉，也成为了那一辈人心中永恒的经典。当他们想起这些作品的时候，脑海中应该能浮现出电影中的经典画面。那是属于他们时代的电影记忆。</p><p><img src="https://www.im6767.top/articlePlates/1612443038750.jpg"></p><h2>佳片有约，我的电影启蒙</h2><p>我的电影启蒙是从CCTV电影频道的佳片有约开始的，准确的说是2008年。08年我多大呢？12岁。那一年有三部电影给我留下了难以磨灭的印象，让我堆电影产生了莫名的情愫——那个时代之前，我还是痴迷于动画片的。</p><p>一部是《肖生克的救赎》，这部神作在后来的日子里，被我重复观看了好几次。他们在监狱屋顶上喝啤酒的画面，直到如今都是提到电影两个字，我脑海中出现的第一幅画面。</p><p>第二部是《死亡诗社》，没用的教科书？直接翻开撕掉，或许这才是教育的真谛。</p><p>最后一部是《完美的世界》，也是我最爱的一部电影，也是我只看过唯一一次的电影。我还记得那天晚上电影已经放到了凌晨，客厅的灯光全部关闭，只有电视的灯光照在我的脸上，我和我姐各坐在一个沙发里。我哭的像一个傻逼，又怕自己哭出声丢人，最后视线中已经完全看不到屏幕中的画面了。现在想来，为什么如此感动，都已经有点想不起来，但那种心灵上的冲击，始终伴随我一生。</p><h2>丰富的遗憾</h2><p>当下，电影作为一种普及性娱乐，进入了人们的日常生活。如果说吃饭是当代青年最直接的物质享受，那电影就算是当代青年们最司空见惯的精神&quot;享受&quot;了——虽然有些影视作品的观影体验不怎么能称之为享受。新的技术，巨大的市场需求，兴起的娱乐经济，催生着一批又一批的影视作品。我不评价他们的质量如何，娱乐是一件很个人的事情，你只能说你喜欢或者不喜欢。我有时还能感觉到血脉喷张，却再也没有泪流满面的时候。我的父母已经不怎么喜欢出入电影院，最后一次和他们在影院观看的是《流浪地球》，他们的体验与评价是：很吵闹，很糟糕。突然发现我也在变成这样，大多数时候进出影院都是为了娱乐，仅仅是为了娱乐。</p><p>《挪威的森林》中永泽其人说，理论上不读当世或死后不足三十年作家的书。电影作为起步不久的艺术形式，可能把时间范围缩小一半比较合适。</p><p>写到这里，愈发不知道该写些什么了，不如索性结尾。</p><blockquote>All of life&#39;s riddles are answered in the movies。</blockquote>',30)]))}const ed=A(ad,[["render",td]]),ld=Object.freeze(Object.defineProperty({__proto__:null,__pageData:nd,default:ed},Symbol.toStringTag,{value:"Module"})),pd=JSON.parse('{"title":"不要再被跨域影响你的开发进度了","description":"","frontmatter":{"title":"不要再被跨域影响你的开发进度了","summary":"\\"跨域\\"几乎是每个前端开发者都会遇到的问题，却并不是每一个开发者都能够顺利解决的问题。当工作中其以某种形式表现出来的时候，依旧有人会无从下手。本文将带你理解跨域中更为细节的内容，并给出数个可以解决跨域问题的通用方案，帮助开发者在遇到类似的问题时能够迅速响应，不至于影响开发体验。","date":"2021-03-14T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/不要再被跨域影响你的开发进度了.md","filePath":"content/blog/不要再被跨域影响你的开发进度了.md"}'),od={name:"content/blog/不要再被跨域影响你的开发进度了.md"};function rd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>令人头疼的跨域问题</h2><p>事实上，跨域问题是一个非常容易解决的问题，但是在现实工作中却表现得往往不是这样。在某些情况下，这个问题会浪费开发者大量的工作时间来进行处理，甚至让开发者&quot;无从下手&quot;。</p><p>通常来讲，造成以上问题主要有两个方面的原因：</p><ol><li>对于我们开发者本身来讲，对于跨域的理解仅仅在于教科书式的理论阶段。即提到跨域的解决，大多数人都能提出几个名词，例如JSONP，CORS等，但是在实际工作中没有亲身解决过这样的问题，或者说按照网上查找的解决方案解决过，但是对于跨域这个问题没有系统的思考。这样的局限来自我们自身，往往是我们开发者技术能力的短板的体现。</li><li>跨域这个问题本身很有意思，在前后端分离的模式下，你很难将它归结为一个&quot;前端问题&quot;还是&quot;后端问题&quot;，这导致问题发生时， 双方都认为是对方应该解决这个问题，而让问题无处开始——我们都希望对方来解决这个问题。这种情况下取决于你是哪种性格：利己主义还是利他主义。</li></ol><p>我不喜欢从一个问题去做出某个结论，例如不会解决跨域问题说明你是一个初级前端等等，但在本文开始之前，请明确，开发中遇到的跨域问题，是一个前端能够解决的问题。</p><h2>跨域啊跨域</h2><p>我们平时开发中所说的跨域问题，到底是指什么？</p><p>域(domain)实际上是网络应用的范围。在这个范围内的用户可以访问相关内容，而不在域中的用户则受到规则限制或完全剥夺访问权限，从而起到保护资源的作用。浏览器判断是否处于同域所遵循的规则称之为浏览器的&quot;同源策略&quot;。</p><p>同源的概念想必作为前端开发者大家都非常熟悉，协议，域名，端口三者相同，则浏览器认为在同域，否则资源的访问会被限制。如果一个请求被同源策略限制，通常能够在浏览器的控制台中看到类似如下的错误信息：</p><p><img src="https://www.im6767.top/articlePlates/1615712835116.png"></p><p>根据以上文字，我们能够发现哪些有用的信息？</p><p>首先我们能够知道，同源策略是浏览器的，同源策略是浏览器的，同源策略是浏览器的。很多人对此概念非常熟悉，但仍旧能够提出一个令人崩溃的问题：&quot;为什么postman这个工具能够正常访问请求，但是到代码里就不行了呢？&quot;，如果你仍旧有这个疑问，那么请把前面那句话再读三遍，你的代码是运行在浏览器中，而不是postman中，同源策略是浏览器的，而不是postman的，所以，通过postman模拟请求，是不会有跨域问题的。</p><p>其次我们提出这样一个问题：在被同源策略限制的情况下，这个请求到底有没有被发出去呢？这里我直接告诉你答案，发出去了。我们可以用抓包工具来验证我们的答案。</p><p><img src="https://www.im6767.top/articlePlates/1615713404600.png"></p><p>我们可以看到，请求正确发出，并且正确返回，却没有在浏览器内正确响应，依旧是那句话，同源策略是浏览器的，所以这一切都是由浏览器的安全规则在帮你限制，这个请求只不过是到达浏览器的时候被处理了，而不是其他途径处理。所以我们不妨用一个粗略的图表示这个过程。</p><p><img src="https://www.im6767.top/articlePlates/1615713878028.png"></p><p>当请求进入到浏览器中时，先经过同源策略的相关判断(包括请求头中的字段判断)，从而将正确/错误的响应结果返回给JS引擎。</p><p>更多的跨域知识细节这里不再赘述，如果有兴趣可以自行去寻找对应地文章或者直接阅读标准文档。</p><h2>解决跨域问题</h2><p>我们可以设想这样一个场景：在前后端分离的模式下，后端开发人员的服务部署在自己的电脑上，前端开发人员在自己电脑上开发，接着前后端要进行接口对接，以便双方做出一些更改。我们就以该场景来给出一些解决方案。</p><h4>JSONP</h4><p>当我们查找关于跨域问题的解决方案时，肯定能够看到JSONP。作为一种&quot;古老&quot;的解决方案，事实上我在实际中一次都没有使用过。JSONP有点怪异(个人感觉)，它实际上就是利用&lt;script&gt;标签不会有跨域问题的特性，来进行跨域请求。看一个例子：</p><pre class="ql-syntax" spellcheck="false">//script标签不会跨域
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://www.im6767.top/api/articleList?callback=setArticleList&quot;</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
<p><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setArticleList</span>(<span class="hljs-params">data</span>) </span>{
<span class="hljs-built_in">console</span>.log(data);
}\uFEFF
\uFEFF<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></p>
</pre><p>以上就是\uFEFFJSONP实现原理的简单示例，我们只要保证上面的script返回内容调用setArticleList即可。请注意，JSONP是需要后端配合的，后端需要解析参数，获取到callback，然后组织数据：</p><pre class="ql-syntax" spellcheck="false">router.get(<span class="hljs-string">&quot;/articleList&quot;</span>, (ctx) =&gt; {
    var <span class="hljs-function"><span class="hljs-keyword">func</span> = <span class="hljs-title">ctx</span>.<span class="hljs-title">request</span>.<span class="hljs-title">query</span>.<span class="hljs-title">callback</span>;</span>
    let jsonpStr = \`\${<span class="hljs-function"><span class="hljs-keyword">func</span>}<span class="hljs-params">(<span class="hljs-string">&quot;jsonp success&quot;</span>)</span>\`</span>
    console.<span class="hljs-built_in">log</span>(jsonpStr)
    ctx.type = <span class="hljs-string">&#39;text/javascript&#39;</span><span class="hljs-comment">;</span>
    ctx.body = jsonpStr<span class="hljs-comment">;</span>
})<span class="hljs-comment">;</span>
</pre><p>上面是基于Koa2的一个后端接口示例。可以看到，最后返回的是一个text/javascript类型的&quot;文件&quot;，内容为执行传入的callback，\uFEFF然后返回。客户端接收到之后插入一个script标签，就可以执行对应地方法。如果使用jQuery，那么客户端这边的代码如下：</p><pre class="ql-syntax" spellcheck="false">$.ajax({
   url : <span class="hljs-string">&#39;http://localhost:3000/articleList?callback=setArticleList&#39;</span>,
   dataType : <span class="hljs-string">&#39;jsonp&#39;</span>,
   <span class="hljs-built_in">type</span> : <span class="hljs-string">&#39;get&#39;</span>,
   success : <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(res)</span></span>{
       console.<span class="hljs-built_in">log</span>(res);
   },
   <span class="hljs-built_in">error</span>: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(error)</span></span> {
       console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">error</span>);
   }
});
</pre><p>简单总结和分析一下JSONP。JSONP的方式实现跨域有他的优势，就是不受浏览器限制，早期版本的IE也可以使用。无非就是利用script的特殊性绕过同源限制。缺陷也显而易见，这个方案需要前后端一同配合，而且很别扭，要约定各种方法名，更致命的是，由于其实现方式的特殊性，导致它只能用于GET请求。</p><h4>CORS</h4><p>cross-origin resource sharing，即跨域资源共享。CORS需要浏览器和服务器同时支持才可以，且主要设置基本都在服务器那边。我通常会说，CORS是需要前端开发、网站管理员(通常指向运维)、后端开发都应该熟悉的知识点。</p><p>通常CORS中的请求被分为简单请求和复杂请求。简单请求需要满足的以下条件：</p><ol><li>请求方式是GET，HEAD，POST请求三者之一。</li><li>Content-Type是text/plain，multipart/form-data，application/x-www-form-urlencoded三者之一。</li></ol><p>简单请求的情况下，浏览器发送的请求header中会携带origin请求字段，说明请求的源。</p><p>服务器收到后，发现该源被允许跨域请求，在返回的header总携带Access-Control-Allow-Origin属性，值为允许的源地址。</p><p><img src="https://www.im6767.top/articlePlates/1615892478203.png"></p><p>浏览器此时会进行判断，如果源不在头部Access-Control-Allow-Origin给出的值中，则会给出错误信息，通常是什么&quot;Access-Control-Alllow-Origin&quot; not equal to什么什么，此时说明处理有问题。</p><p>复杂请求会多出一个步骤，浏览器会自动先发送一个类型为options的请求，如果发现服务器支持该请求，才会将真正的请求发送给后端，否则直接抛出错误。</p><p>如果预检请求成功 ，会在头部多返回几个字段，通常是Access-Control-Allow-Headers，Access-Control-Allow-Methods，Access-Control-Allow-Origin，他们分别表示实际请求会携带的header字段，服务器支持的请求方法，服务器允许哪个源的请求。之后才会发送真正的请求。</p><p>这一点非常重要，而且就我现在目前工作中能够看到，很多人对于这一点都不熟悉，以至于遇到类似的问题都犯了难。具体表现在：</p><ol><li>前端开发看到xxxx-origin就说自己遇到跨域啦，要后端解决。</li><li>后端看完日志什么的就说，你这请求完全没有到我的服务嘛。</li><li>前端说你看我截图，就是你有问题。</li><li>后端postman试了试，说一切正常啊，就是你的问题。</li><li>然后双方陷入长久的争执。</li></ol><p>所以说，CORS应该是一个前端开发和后端开发都应该熟悉的概念才可以。对于前端来讲，遇到预检请求最好的方式就是使用抓包工具，实际抓取options请求看看返回的到底是什么。对于后端来讲，要知道有options请求会先过来，因此对options请求要正确放行，而不是只关注到自己的GET，POST请求。再者前端还需要根据返回的header去分析自己的请求中携带的内容是否满足跨域通行条件。</p><p>总的来说，CORS是偏向于服务器端解决的方案，需要服务器进行对应的设置，这里给出基于nodejs的一份简单设置。</p><pre class="ql-syntax" spellcheck="false">app.<span class="hljs-keyword">all</span>(<span class="hljs-string">&#39;*&#39;</span>,<span class="hljs-keyword">function</span> (req, res, next) {
  res.<span class="hljs-keyword">header</span>(<span class="hljs-string">&#39;Access-Control-Allow-Origin&#39;</span>, <span class="hljs-string">&#39;*&#39;</span>);
  res.<span class="hljs-keyword">header</span>(<span class="hljs-string">&#39;Access-Control-Allow-Headers&#39;</span>, <span class="hljs-string">&#39;Content-Type, Content-Length, Authorization, Accept, X-Requested-With&#39;</span>);
  res.<span class="hljs-keyword">header</span>(<span class="hljs-string">&#39;Access-Control-Allow-Methods&#39;</span>, <span class="hljs-string">&#39;PUT, POST, GET, DELETE, OPTIONS&#39;</span>);
  <span class="hljs-keyword">if</span> (req.<span class="hljs-keyword">method</span> == <span class="hljs-string">&#39;OPTIONS&#39;</span>) {
      res.send(<span class="hljs-number">200</span>);
  }
  <span class="hljs-keyword">else</span> {
    next();
  }
});
</pre><p>让我们回到文章开始提到的那个场景，前后端要在各自的机器上进行调试。我不喜欢以上两种处理方式，因为作为一个前端，要解决这个问题还要去和后端解释，要看后端的脸色，我非常不喜欢。</p><blockquote>我大老远赶来，就是为了看他的脸色？</blockquote><p>当然，不管你喜欢不喜欢，CORS都是需要掌握，并且了解处理方式的。那么针对上面那个场景，有没有更省心的处理方式呢？答案就是有，还不只一个。</p><h4>Nodejs的生态</h4><p>如果你是一个前端开发，nodejs你一定了解。我们通常开发都会启动一个本地服务，然后在服务中运行我们的代码。你可以使用一个具有服务代理功能的本地服务，例如browsersync，然后配置好代理，直接运行就好。</p><pre class="ql-syntax" spellcheck="false">BrowserSync.init({
    <span class="hljs-attribute">port</span>: <span class="hljs-number">4000</span>,
    <span class="hljs-attribute">notify</span>: false,
    <span class="hljs-attribute">middleware</span>: proxyTable,  <span class="hljs-comment">//这里就是你的代理列表</span>
    <span class="hljs-attribute">logFileChanges</span>: false,
    <span class="hljs-attribute">ghostMode</span>: false,
    <span class="hljs-attribute">scriptPath</span>: function (path) {
        return <span class="hljs-string">&#39;/socket&#39;</span> + path;
    }
});
</pre><p>需要一些很基本的Nodejs的知识就能够搞定，也是非常非常方便。</p><h4>利用nginx</h4><p>nginx也是非常值得一学，而且有很多内容的。nginx在linux和window上都有非常广泛的用途，但是只要掌握几个基本的配置用法，就能够应付这个场景。</p><p>下载安装并运行nginx，如果你是windows系统将更加方便，有直接可用的可执行文件，接着打开nginx安装目录下conf/nginx.conf，这里就是nginx的配置文件。举例来讲，如果我们的机器IP是192.168.4.20，后端同事的服务IP是192.168.4.25，这个时候直接从本地访问后端同事的服务肯定是跨域的，我们在nginx中做如下配置：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-section">server</span> {
    <span class="hljs-attribute">listen</span>      <span class="hljs-number">4002</span>;
     <span class="hljs-attribute">server_name</span> localhost;
    <span class="hljs-comment">#access_log  logs/host.access.log  main;</span>
    <span class="hljs-attribute">location</span> /api {
       <span class="hljs-attribute">proxy_pass</span> http://192.168.4.25;
      <span class="hljs-attribute">add_header</span> Access-Control-Allow-Origin *;
      <span class="hljs-attribute">add_header</span> Cache-Control <span class="hljs-literal">no</span>-cache;
   }
}
</pre><p>接着./nginx -s reload重新读取下配置就可以。我们可以粗略看下配置的含义，当我们请求localhost:4002，并且匹配到/api路径的时候，请求会被代理至192.168.4.25，并且添加一些自定义的头部信息。所以，我们顺手改造一下我们的接口地址，改为http://localhost:4002/api/xxx即可。对于简单请求和复杂请求都可以这样处理，只要符合CORS的原则就行，通过自定义header的方式，我们完全可以自己解决跨域问题。</p><h4>非常好用的fiddler</h4><p>作为常用的代理抓包工具，fiddler提供了异常丰富的工具，包括对请求和响应的自由修改和定义。事实上通过上面几种方式我们能够大致总结，想要自我绕过跨域，或者说解决跨域，就是要让请求符合CORS的规则。例如fiddler解决的思路就是，通过修改response和request的header，使得浏览器放行请求。</p><p><img src="https://www.im6767.top/articlePlates/1616495210802.png"></p><p>如图，一个正常的跨域请求，在未经过任何处理的情况下，浏览器会提示CORS错误。接下来，我们启动fiddler，然后在Rules下Customize Rules中找到OnPeekAtResponseHeaders，我们在这里可以通过代码修改返回体中的一些内容。笔者选择在其中加入这样的代码：</p><pre class="ql-syntax" spellcheck="false">if (oSession.fullUrl.Contains(<span class="hljs-string">&quot;/xxx/list&quot;</span>)) {
    oSession.oResponse[<span class="hljs-string">&quot;Access-Control-Allow-Origin&quot;</span>]=<span class="hljs-string">&quot;*&quot;</span><span class="hljs-comment">;</span>
</pre><p>\uFEFF之后我们再做请求，发现此时已经正确携带了相关头部信息，请求也能正确处理了。</p><h2>总结</h2><p>跨域问题的解决很简单，在理解了相关原理后，通过必要的步骤进行处理即可。当然，其解决方案远不止上面罗列的几种形式，并且需要注意，以上方案等仅做测试使用，即使是nginx的方案。在生产环境中的跨域问题的解决，远比上面的简易方案要考虑的更多。不过通常生产环境的跨域问题会有更加专业的人士负责处理。希望本文可以帮到你，拯救你可能浪费的时间。</p>`,63)]))}const id=A(od,[["render",rd]]),cd=Object.freeze(Object.defineProperty({__proto__:null,__pageData:pd,default:id},Symbol.toStringTag,{value:"Module"})),hd=JSON.parse('{"title":"东京街头圣诞夜的奇迹","description":"","frontmatter":{"title":"东京街头圣诞夜的奇迹","summary":"我们都是这个世界的流浪者，我们永远向往内心深处的归宿。","date":"2021-08-02T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/东京街头圣诞夜的奇迹.md","filePath":"content/blog/东京街头圣诞夜的奇迹.md"}'),ud={name:"content/blog/东京街头圣诞夜的奇迹.md"};function dd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x("<p>你是否对家庭这个词语有颇为独到的见解？你是否对孩子这个词语有自己的感受？我们距离这样的问题很远，却又是经历者——我们或许还没有组建自己的家庭，但却确实是一个家庭的一份子；我们已经不是小孩，也或许还没有自己的小孩，但我们曾经也是一个小孩。我们从未想过这些身份为我们带来了什么 ，又有什么意义。</p><p>《东京教父》是朋友力荐的一部影视作品，虽然是一部十多年前的作品，但仍旧能带来一种到达内心深处的温暖和欣慰。</p><h3>怪异三人众</h3><p>主角的组合非常有趣：三个流浪汉，一个经历了人生变故的大叔，一个心理性别为女性的男子，一个离家出走的女孩，他们共同行动，在东京的街头想方设法满足自己最低的生活要求。在圣诞夜的前夕，他们捡到了一个婴儿，这个怪异的组合中又添加了一个脆弱的生命，故事也开始围绕这个婴儿展开。</p><h3>各自的故事</h3><p>三个人都有一个围绕家庭的故事：</p><p>中年大叔爱好赌博，欠有外债后离家。他不愿意承认自己的过去，谎称自己是一个自行车手，为了赚钱打假赛，从而丧失比赛资格。我们通常将这种行为认为是&quot;可谅解&quot;的，他将一切都从自己身上抹去，说自己的女儿亡故。我们不应该评价这种行为的正确与否，但是它真的很有效，让人可以从自我过错中减轻负担，从而面对更糟糕的生活。</p><p>心理性别为女性的男子则是一个酒吧歌手，因为脾气暴躁殴打了侮辱她的顾客，不愿意为酒吧带来麻烦于是离开了酒吧。他有一个爱人，但是爱人不久之后就离世了，种种遭遇让她成为了一个流浪者。收留婴儿并取名为清子，实际上源自于她内心的母爱情结。</p><p>离家出走的女孩则是因为刺伤了自己身为警察的父亲，为了逃避自己的父母，选择了流浪。</p><p>如果我们勉强将中年大叔称之为多数派，那么离家出走的女孩属于少数派，心理性别为女性的男士则可以称为亚文化成员。这种来自不同分类圈的人士又同样是社会底层的一个缩影。他们因为种种原因对“家庭”产生隔阂。</p><h3>遇见天使</h3><p>清子是一个圣诞夜的奇迹。作为一个弃婴的她，被三个流浪汉收养。三个连自己生活都没有办法保证的人，却为了她的温饱而奔波，为了寻找她的父母而踏上旅途。在旅途中，三个人奇迹般的遇到了自己的曾经，自己的女儿，自己的父亲，自己以前的朋友。清子给了他们一个机会，与过去的自己和解。每一个流浪的个体，最终却都为了归属与某个家庭，而踏上了自己的寻回之路。</p><p>为了家庭而踏上流浪之路，最终又在流浪之路上回到家庭。我们都渴望一段抛弃一切的流浪人生，但最终又不得不回到内心深处的那一块始终存在的温暖，这就是家庭带来的意义——你不会永远流浪，迷失在这个世界中，因为它始终存在。</p><h3>孩子</h3><p>新生命的诞生是家庭的重要补充，也是填补&quot;完整&quot;的重要一环。对于主流文化中的家庭来讲，孩子带来的是一种家庭希望和责任，当然这里我们不去讨论那些非主流家庭文化的部分。影片中的三人行加上清子，就是一个普通底层家庭的真实缩影，在这个缩影中的三个人，他们从孩子身上找回自我。我无法理解他们的真实感受，因为我没有同样的经历，我没有经历过家庭危机。</p><p>我的姐姐刚生下自己的孩子不久，最近我没有和她见过面，但是从聊天交谈中能够感受到，新生命的诞生带给她的绝对是一种正面感觉，是一种向上的能量。如果从宗教角度解释这件事情，那么他们或许就是上帝派往人间传播幸福的天使。</p><h3>不做路人</h3><p>我们在别人的故事中永远是路人，就像电影中的路人那样。我时刻告诫自己，要善良。当三人众带着清子流浪，找回她的父母的时候，路人大多的想法是：“这样的一行人，根本不配养育孩子。”</p><p>我很苦恼的是，这部03年的电影作品，却真真切切的反映着当下我们社会洪流中的一种声音：为生养孩子这件事设置门槛，为不达到这个荒唐门槛的人陈设种种负面声音。</p><blockquote>“流浪汉还养孩子。”</blockquote><p>社会文化开始为生育这件事添加门槛，如果你没有外界看来应有的经济能力和保障，你就不应该考虑要孩子这件事。</p><p>从未来考虑或者说生活幸福角度来讲，这样的说法也有道理，但这绝不应该成为限制别人的理由。人生而享有的权利和自由中，生育权绝对是包含在其中的一个部分。人都有选择如何度过自己一生的权利。</p><p>我在生活中特别讨厌这样的路人。他们可以对一件事情大肆发表自己的看法，而从不会考虑他人的感受。当话题的利益和他无关时，她不会对自己的任何语言负责，但是当利益的相关者是自己的时候，他们又能表现出一种被害者的可怜模样。伪善是比恶人更可恶的存在。</p><h3>写在最后</h3><p>零碎时间拼接起来的称不上影评的影评。我对影片的导演了解甚少，不过从别人对这部影片的评价来看，她有很高的声望。</p><p>我对日本动漫电影系列的接触不多，看过的每一部都有一些奇怪的感受。就例如看《千与千寻》时候感受到的是一种发自内心的恐惧感。</p><p>东京教父给我的是一种失落的温暖感。为什么明明内心还是向往那个家庭，却只有在经历一些事情后才有勇气去面对。</p><p>我希望每个人，包括自己，都能勇敢面对内心的期待。</p><p>还有，永远不要成为自己讨厌的路人。</p>",29)]))}const jd=A(ud,[["render",dd]]),md=Object.freeze(Object.defineProperty({__proto__:null,__pageData:hd,default:jd},Symbol.toStringTag,{value:"Module"})),gd=JSON.parse('{"title":"从0到1的页面展示之旅","description":"","frontmatter":{"title":"从0到1的页面展示之旅","summary":"不久之前有同事问到关于浏览器渲染相关的一些问题，交流过后发现两个人都有点一知半解，于是乎决定合作完成一篇简单地文章，来补充相关知识。","date":"2021-12-23T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/从0到1的页面展示之旅.md","filePath":"content/blog/从0到1的页面展示之旅.md"}'),fd={name:"content/blog/从0到1的页面展示之旅.md"};function _d(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>大致流程</h2><p>1，URL解析</p><p>2，DNS查询</p><p>3，TCP连接</p><p>4，处理请求</p><p>5，渲染页面</p><h2>一、URL解析：</h2><p>一切是从浏览器的地址栏键入地址开始。我们通常称作的URL地址，全称叫做<span style="color:rgb(51, 51, 51);">Uniform Resource Locator，统一资源定位器，它表示一个信息资源在网络上唯一的地址，其通常由三部分组成：协议，主机域名，端口。最常见的协议就是HTTP和HTTPS，这二者是使用最为广泛的协议，另外本地文件协议(file:///)和FTP(ftp://)协议也较为常见。地址栏键入地址之后，浏览器根据不同的协议，执行对应的资源访问逻辑，在HTTP和HTTPS协议下，通常就要进行DNS解析了。</span></p><p><span style="color:rgb(51, 51, 51);">补充：URL整体有6个部分，协议，主机名，域名，端口，路径，以及文件名； http默认端口为80，https默认端口号为443,ftp的默认端口号是21</span></p><p><span style="color:rgb(51, 51, 51);">参数加密是用encodeURIComponent,解密是encodeURIComponent，加密一次和加密二次出来的结果不一样，加密几次就需要解密几次，例如：</span></p><p><code style="background-color:rgba(0, 0, 0, 0.06);">encodeURIComponent(&#39;house_id=5&#39;) // &#39;house_id%3D5&#39;</code></p><p><code style="background-color:rgba(0, 0, 0, 0.06);">encodeURIComponent(encodeURIComponent(&#39;house_id=5&#39;)) //&#39;house_id%253D5&#39;</code></p><p><code style="background-color:rgba(0, 0, 0, 0.06);">decodeURIComponent(&#39;house_id%3D5&#39;) //&#39;house_id=5&#39;</code></p><p><code style="background-color:rgba(0, 0, 0, 0.06);">decodeURIComponent(&#39;house_id%253D5&#39;) //&#39;house_id%3D5&#39; </code></p><p><br></p><h2>二、DNS查询</h2><p>确定协议后，接下来就要开始对应地资源请求了。我们要与哪一个资源服务器建立链接来获取资源？换而言之，我们需要请求的资源在哪里？此时需要解析和处理URL中的主机域名部分。</p><p>我们知道，在网络中，众多的服务器是通过IP地址一一对应的，我们需要找到资源对应的服务器IP地址，才可以访问到指定资源。但我们键入的URL中往往不包含IP信息，例如https://www.google.com，这时就需要DNS服务器来进行域名到IP地址的对应。</p><blockquote><strong style="color:rgb(32, 33, 34);">域名系统</strong><span style="color:rgb(32, 33, 34);">（英语：</span><strong style="color:rgb(32, 33, 34);">D</strong><span style="color:rgb(32, 33, 34);">omain </span><strong style="color:rgb(32, 33, 34);">N</strong><span style="color:rgb(32, 33, 34);">ame </span><strong style="color:rgb(32, 33, 34);">S</strong><span style="color:rgb(32, 33, 34);">ystem，缩写：</span><strong style="color:rgb(32, 33, 34);">DNS</strong><span style="color:rgb(32, 33, 34);">）是</span>互联网<span style="color:rgb(32, 33, 34);">的一项服务。它作为将</span>域名<span style="color:rgb(32, 33, 34);">和</span>IP地址<span style="color:rgb(32, 33, 34);">相互</span>映射<span style="color:rgb(32, 33, 34);">的一个</span>分布式数据库<span style="color:rgb(32, 33, 34);">，能够使人更方便地访问</span>互联网<span style="color:rgb(32, 33, 34);">。</span></blockquote><p>在此之前，需要明确一点：通常情况下，DNS中的域名到IP的映射是不会频繁改变的，而基于DNS服务器的域名解析是需要网络资源消耗的。为了减少DNS服务器查询时的网络消耗对整个资源访问的影响，通常会建立缓存。</p><p>因此当浏览器地址栏的URL键入并确定时，首先浏览器会在浏览器本地的DNS缓存中进行查找，如果该地址命中了缓存，将直接对缓存对应地IP地址发起请求，DNS解析结束。</p><p>如果没有命中缓存，接着浏览器将会对外执行DNS查询，此时过程被操作系统接管。以windows操作系统为例，windows首先会从hosts文件中查找对应地映射关系，如果查找到，对对应地IP地址发起请求，DNS解析结束。</p><p>如果hosts中没有对应关系，windows系统内部也建立着DNS缓存信息，此时将会在操作系统的缓存信息中查找，如果地址，命中了缓存，将直接对缓存对应地IP地址发起请求，DNS解析结束。</p><p>当然，如果浏览器DNS缓存和系统DNS缓存都没有命中，那么将不得不与DNS服务器通信，来获取对应地IP地址。此时会查找TCP/IP参数中设置的首选DNS服务器，服务器收到查询请求时，如果自身包含对应地映射关系，则返回结果给发起方，DNS解析结束。</p><p>如果首选DNS服务器也没有命中，此时分为两种情况：</p><ol><li>如果DNS服务器没有设置转发模式，就把请求发送至根DNS服务器，根DNS服务器会判断域名是谁来授权管理，然后返回负责该域名服务器的一个IP，首选DNS服务器收到IP信息后，就会联系IP对应地服务器。此时对应武器如果无法解析，就会找到下一级DNS服务器，一直重复上述行为，直到找到映射关系，然后将信息返回给首选DNS服务器，首选DNS服务器返回请求发起方。</li><li>如果设置了转发模式，首选DNS服务器就会把请求转发给自己的上一级DNS服务器，由上一级DNS服务器完成解析，如果上一级DNS服务器也不能解析，或者再向上传递，或者进入未设置转发模式的步骤，进行重复，直到得到结果，然后将信息返回给首选DNS服务器，首选DNS服务器返回请求发起方。</li></ol><p>在完成域名解析之后，我们就得到了对应服务器的IP地址，接下来就可以对服务器发起正式请求了。</p><h2>三，TCP连接</h2><p>定义：为实现数据的可靠传输，TCP要在应用进程间建立传输连接。它是在两个传输用户之间建立一种逻辑联系，使得通信双方都确认对方为自己的传输连接端点。</p><h4>建立连接：</h4><p>建立连接前，服务器端首先被动打开其熟知的端口，对端口进行侦听。当客户端要和服务器建立连接时，发起一个主动打开端口的请求（该端口一般为临时接口）；然后进入三次握手的过程。</p><p><img src="https://www.im6767.top/articlePlates/1640268093086.png"></p><p>第一次握手：客户端的TCP向服务器发出请求报文段，其首部中的同步比特SYN应置为1，并选择序号x，表明传送数据时的第一个字节的序号是x（设置初始段序号SEQ = x ，例如SEQ = 26500）</p><p>第二次握手：服务器的TCP收到连接请求报文段后，如同意，则发回确认的报文段，服务器在确认报文段中应将ACK置为1，其确认号ack应为x+1（ACK 26501）,同时也给出自己的选择序号y (设置初始段序号SEQ = y ，例如SEQ = 29 010)</p><p>第三次握手：客户端收到报文段后，向服务器给出确认，其确认号应为y+1（ACK 29011）客户端的TCP通知上层应用进程，连接已经建立。</p><p>当服务器收到客户端的确认报文后，也通知其上层应用进程，连接已经建立。</p><p><br></p><h4>释放连接：</h4><p>数据传输结束后，通信双方可以释放连接。</p><p><br></p><h4>四次挥手：</h4><p><img src="https://www.im6767.top/articlePlates/1640268121332.png"></p><p>第一次挥手：客户端向服务器端发送关闭的报文，其同步比特FIN应置为1，并选择序号u</p><p>第二次挥手：服务器收到关闭的报文后，向客户端发回一个ACK,确认序号为u+1,并发送一个序号v</p><p>第三次挥手：服务器关闭与客户端的连接，并发送一个FIN给客户端，确认序号为u+1.序号为w</p><p>第四次挥手：客户端收到报文后，向服务器发送确认报文w+1。</p><p><br></p><h4>HTTPS</h4><p>这里我们不妨对HTTPS进行一个简要扩充。</p><p>HTTP/HTTPS是网络模型中的最高层应用层的协议，HTTPS是对HTTP的增强，其主要目的是以下三个方面：隐私保护，数据完整性校验，身份验证。我们可以认为，HTTPS就是 HTTP + SSL/TLS。</p><blockquote>SSL和TLS是位于TCP传输层协议和HTTP应用层之间的协议，信息在由HTTP层到TCP层时，通过SSL/TLS进行加密。</blockquote><blockquote>现在SSL基本已经不被使用了，绝大多数使用的是TLS1.2或者TLS1.3。在Chrome 81版本之后，TLS1.0和TLS1.1也基本不被支持。</blockquote><p>当TCP连接已经建立完毕后，客户端发起TLS握手的第一步，发送ClientHello消息给服务器，ClientHello消息包括</p><ol><li class="ql-indent-1">客户端支持的SSL/TLS版本</li><li class="ql-indent-1">客户端支持的加密套件</li><li class="ql-indent-1">session id(如果有)</li><li class="ql-indent-1">随机数client-random</li></ol><p>服务器收到ClientHello之后，会返回ServerHello消息，其中包括</p><ol><li class="ql-indent-1">服务器支持的最高SSL/TLS版本</li><li class="ql-indent-1">服务器选择的加密套件</li><li class="ql-indent-1">随机数server-random</li><li class="ql-indent-1">会话session id</li></ol><blockquote>session id一般存储当前握手的信息，避免重复握手，提升效率。</blockquote><p>紧接着，服务器向客户端发送服务器的安全证书。</p><p>客户端收到服务器的安全证书，将会对安全证书进行验证。</p><p>我们的操作系统和浏览器中有一组可信任的CA，其中包含对应地公钥。当访问目标网站，目标网站会发给我们它的证书，其中包含颁发机构的签名和服务器公钥。</p><p>浏览器会用哈希函数对明文信息摘要进行哈希计算，得到哈希值，然后用根CA的公钥对证书的签名做解密，得到另一个哈希值，二者相等说明证书没有被篡改。这是为了防止中间人攻击。如果证书被篡改了，哈希值就会不同，说明这个请求不安全，当然这其中包含的详细步骤更多，例如要判断整数中的服务器名称合法性和证书的有效期。</p><p>如果验证通过，客户端产生随机数pre-master，用于秘钥交换。</p><blockquote>秘钥交换的过程大致如下：</blockquote><blockquote>1.客户端用服务器证书中的服务器公钥生成密文发送给服务器。（算法就是服务端选择的加密套件中的秘钥交换算法）</blockquote><blockquote>2.客户端用server-random + client-random + pre-master计算出对称秘钥master-secret.</blockquote><blockquote>3.服务器收到后，用服务器的私钥解密密文，得到pre-master。</blockquote><p>服务器持有私钥，可以解密得到pre-master，完成后就只有客户端和服务器双方知道pre-master，服务器利用pre-master也可以计算出master-secret，利用master-secret就可以完成信息的加解密。</p><p>此时客户端用master-secret加密一条&quot;握手完成&quot;的数据给服务器。</p><p>服务器收到后解密，解密完成后也发送一条&quot;握手完成&quot;的消息。</p><p>当双方都正确解密后，就开始利用这个master-secret加解密通信。</p><blockquote>HTTPS带来的负面作用也显而易见：相较于HTTP，它可能有更大的网络开销和计算开销。不过比起数据安全，这些损耗依旧值得。</blockquote><p><br></p><h4>SPDY和HTTP3</h4><p>写到了这里，我们不妨再用简单的篇幅谈谈HTTP3。</p><p>SPDY是HTTP3的前身，我们不再进行区分，这里统一以HTTP3进行相关内容介绍。</p><p>HTTP1.1和HTTP2是基于TCP协议的，TCP协议是有状态的协议，所以要建立连接。基于TCP协议的HTTP协议有很多痛点问题无法解决，所以HTTP3协议就是为了解决TCP的短板问题。</p><p>HTTP3协议不需要握手，它在传输层是基于UDP建立的，取代了TCP，SSL/TLS协议。</p><p><img src="https://www.im6767.top/articlePlates/1640268270305.jpg"></p><p>相较于HTTP1.1和HTTP2，它带来更小的连接性能损耗。</p><p><img src="https://www.im6767.top/articlePlates/1640268285564.jpg"></p><p><br></p><p><br></p><p><br></p><h2>四，处理请求</h2><p>当TCP连接建立之后，客户端和服务器就可以进行通信，进行信息资源交换了。通常，客户端和服务器的通信是通过请求——响应的模式进行的，客户端负责发起请求，服务器负责响应请求，不过这也不是绝对的，通过技术手段，我们也可以实现服务器发起请求，客户端响应请求(SSE)和客户端服务器的完全双向通信(webSocket)。不过介于本文是针对页面渲染，我们着重讨论最常见的形式。</p><p>资源几乎全部是GET请求（起码我没见过其他形式的），请求包括请求行，请求头和请求体三部分内容。</p><blockquote>如果我们更客观和严格的来讲，HTTP1.0之后的请求包含三个部分，对于HTTP0.9来说，它只有一个请求行。不过0.9过于古老了，我们不再单独讨论。</blockquote><p>请求行包括三个部分：请求方法，URL字段和HTTP协议版本，之间用空格分隔。例如 GET /index.html HTTP/1.1。</p><p>服务器接收到请求行之后，可以知道所需要的请求的内容，但是对于如何将这些信息返回，服务器需要更多信息，这些信息就来源于请求头。</p><p>我们以一个请求头为例：</p><p><em style="color:rgba(0, 0, 0, 0.7);">accept: text/html</em></p><p><em style="color:rgba(0, 0, 0, 0.7);">accept-encoding: gzip</em></p><p><em style="color:rgba(0, 0, 0, 0.7);">accept-Charset: utf-8</em></p><p><em style="color:rgba(0, 0, 0, 0.7);">accept-language: zh-CN,zh</em></p><p>第一行说明，客户端希望获得一个html文件。</p><p>第二行说明，客户端希望服务器采用gzip压缩文件。</p><p>第三行说明：客户端希望文件是utf-8编码格式的。</p><p>第四行说明，客户端希望文件是中文编码的。</p><p>由于资源获取是GET请求，我们通常认为GET请求的请求体是空的(或者不存在请求体)，一个资源请求所包含的内容基本就结束了。</p><p>服务器接收到上述信息后，开始准备相应数据，不过并不是所有的请求都会按照请求头的方式相应，请务必理解，请求头中某些字段的配置是&quot;建议&quot;而不是&quot;必须&quot;。</p><p>服务器准备好相应数据后，同样会发送响应头给客户端，其中包含关于响应的一些配置信息，例如：</p><blockquote><span style="color:rgba(0, 0, 0, 0.7);">content-encoding: br</span></blockquote><blockquote><span style="color:rgba(0, 0, 0, 0.7);">content-type: text/html; charset=UTF-8</span></blockquote><p>浏览器接收到后，会以br的方式解压文件，按照UTF-8的形式编码文件，最后展示。</p><p>以上就是一个请求的基本处理流程。网页加载的第一个请求文件都是HTML文件，接着浏览器解析HTML文件，按照一定的规则去进行其他请求，例如脚本文件JS，样式文件CSS，图片资源等等。这些资源的请求都大同小异，无非就是按照不同的类型进行请求与响应，更为具体的请求细节与HTTP相关知识有关，在文末，我们将给出一篇略微全面的文章，针对HTTP相关内容进行了解，有兴趣的话可以参考。</p><p>事实上，资源请求的处理要比这情形更多。在B/S架构的系统构建中，我们通常对于网络请求有一种莫名的担忧——因为网络的开销实在是太大了，所以会有很多的缓存策略来降低网络开销。接下来了解一下前端相关的缓存机制。</p><p><br></p><h3>资源缓存</h3><p>缓存是一种常见的性能优化方式，减少计算损耗和I/O损耗。缓存的核心非常简单——数据在可接受时间范围内不会频繁改变，可以在一定时间内复用。页面展现相关的静态资源其实并不会频繁更新，因此具有缓存的可能性。</p><p>缓存是由资源提供方决定的，也就是服务器的返回内容。返回的响应头中包含缓存的相关控制信息，浏览器根据相关内容执行缓存策略。一般地，我们将缓存分为强缓存和协商缓存两种。</p><h4>强缓存</h4><p>响应头中，和强缓存有关的字段有三个，分别是expires，Cache-Control和pragma。</p><p><strong>expires</strong></p><p>expires的值通常是一个时间戳，意思是如果下次需要请求该资源，没有到达过期时间，浏览器直接使用缓存资源即可，如果已经过期，则正常请求。</p><p>expires的过期时间是根据客户端时间判断的，而客户端本地时间可以修改，所以该情况下缓存时间并不准确。</p><p><strong>Cache-Control</strong></p><p>Cache-control是HTTP1.1中的强缓存控制手段，取值为：</p><ol><li class="ql-indent-1">public 资源客户端和代理服务器都可以缓存</li><li class="ql-indent-1">privite 资源只允许客户端缓存</li><li class="ql-indent-1">no-cache 客户端允许缓存资源，不过是否缓存需要协商缓存验证</li><li class="ql-indent-1">no-store 无论如何都不缓存</li><li class="ql-indent-1">max-age 缓存的有效时长</li></ol><p>特别是最后一个max-age，它的出现解决了expires缓存时间不准确的问题，因为它是相对时间，而非expires一样使用绝对时间。</p><p><strong>pragma</strong></p><p>pragma目前只有一个可选值：<span style="color:rgb(51, 51, 51);">no-cache，和Cache-Control中的no-cache行为一致。</span></p><p><span style="color:rgb(51, 51, 51);">这里有个问题，如果这三个属性值都存在呢？这种情况下，Cache-Control的优先级是最高的。</span></p><blockquote><span style="color:rgb(51, 51, 51);">原因实际上和HTTP的历史有关。expires和pragma是HTTP1.0时出现的，Cache-Control则是HTTP1.1时出现的。更新的标准应该比更旧的标准有更高的优先级，这样才能保证功能正常。</span></blockquote><p><span style="color:rgb(51, 51, 51);">我们从强缓存可以看出，他提供的功能只有，要么使用缓存，要么不使用缓存。在使用缓存的情况下，一切以时间为作用界限，时间内命中缓存，时间外则不使用缓存，这就是强缓存的概念——它只和时间有关。在命中强缓存的情况下，客户端不再发送任何请求，而是直接取用本地缓存的数据，这样极大的减小了网络I/O的开销，提高了性能。不过强缓存带来的缺点也显而易见：在指定的缓存时间内，如果文件版本发生变化，则无法获取到最新的更新，这样提高了缓存版本与实际版本不一致的风险。为了解决这个问题，HTTP1.1还引入了协商缓存机制。</span></p><h4>协商缓存</h4><p>协商缓存通常和304状态码相关联。</p><p>当没有命中强缓存时，浏览器会发送实际的请求给服务端，其中携带缓存相关的标识，由服务器决定返回内容。</p><p><strong>Last-Modified / If-Modified-Since</strong></p><p>Last-Modified是response Header中的字段，表明该资源在服务器上最后被修改的时间。If-Modified-Since则是下一次请求相同资源时，request Header中的字段。服务器接收到请求后，如果发现reuqest的heade中有对应字段，就会拿本地对应地资源修改时间和If-Modified-Since字段进行比较，如果修改时间大于该字段，说明文件有改变，返回资源内容，状态码200；否则说明该文件没有更新，可以直接使用缓存文件，返回状态码304。</p><p><br></p><p><strong>Etag / If-None-Match</strong></p><p>Etag是服务器为资源文件生成的唯一标识。Etag是response header中的字段，If-None-Match则是下一次请求相同资源时，request Header中的字段。服务器接收到请求后，会用本地对应资源的标识符和请求头中的If-None-Match进行比较，如果二者不同，说明文件发生了变化，返回资源内容，状态码200；否则说明该文件没有更新，可以直接使用缓存文件，返回状态码304。</p><p>如果二者同时出现呢？<strong>Etag / If-None-Match的优先级是大于Last-Modified / If-Modified-Since的，</strong>二者同时出现，前者会将后者覆盖。</p><blockquote>事实上，Etag的出现是为了弥补Last-Modified的一些不足。设想这样一种场景，如果一个文件，短时间内多次改变，那么Last-Modified就会在每次改变之后更新，如果这个文件改变之后又会变成了原先的样子，那么使用Last-Modified的协商缓存还是会重新请求这个资源，尽管该资源和浏览器缓存中的一致。而Etag是基于文件内容成的，相同文件拥有相同的Etag。由此来看，Etag更接近于&quot;文件发生变化时缓存生效&quot;这个概念。</blockquote><p>我希望你不会问出这样一个问题：既然已经有了协商缓存，还要强缓存干什么呢？</p><p>协商缓存是需要进行请求发送的，尽管304请求很小，网络开销不大，但是还是产生了实际的网络开销，还是会受到网络环境的影响。所以没有完美的缓存策略，只有最适合的缓存策略:D</p><p><br></p><h4>其它缓存</h4><p>我们上文提到的缓存共有的特点是，他们是通过请求头，服务器和客户端约定完成的，实际上还有其他的一些缓存方式，其中Service Worker中的缓存则提供了更为灵活地功能，他允许我们使用代码的方式控制缓存内容和缓存的使用方式。</p><p>Service Worker已经不算是一项新的功能，在很多地方都有使用。提到它的原因是，他在我们的浏览器和服务器之间增加了一道代理，使得我们可以对经过代理的资源进行处理。所以在有Service Worker的应用中，资源获取是由客户端经过Service Worker再到达服务器，返回也是，服务器经由Service Worker再到达客户端。</p><p><br></p><h2>五，渲染页面</h2><p>在资源已经成功获取完毕之后，浏览器就要开始解析文件并渲染页面。</p><p>浏览器渲染：客户端（浏览器）解析HTML内容并渲染出来，浏览器接受到数据包后的解析流程：</p><p>1，构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象</p><p>2，构建CSS规则树：生成CSS规则树（CSS Rule Tree）</p><p>3，构建render树：WEB浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）</p><p>4，布局（Layout）：计算出每个节点在屏幕中的位置</p><p>5，绘制（Painting）：即遍历render树，并使用UI后端绘制每个节点。</p><p><img src="https://www.im6767.top/articlePlates/1640268423691.png"></p><p>JS引擎解析过程：调用js引擎执行js代码（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO,作用域链，回收机制等等）</p><p><br></p><p>1，创建window对象：window对象也叫全局执行环境，当页面产生时就被创建，所有的全局变量和函数都属于window的属性和方法，而DOM Tree也会映射在window的doucment对象上。当关闭网页或者关闭浏览器时，全局执行环境会被销毁。</p><p>2，加载文件：完成js引擎分析它的语法与词法是否合法，如果合法进入预编译</p><p>3，预编译：在预编译的过程中，浏览器会寻找全局变量声明，把它作为window的属性加入到window对象中，并给变量赋值为&#39;undefined&#39;；寻找全局函数声明，把它作为window的方法加入到window对象中，并将函数体赋值给他（匿名函数是不参与预编译的，因为它是变量）。而变量提升作为不合理的地方在ES6中已经解决了，函数提升还存在。</p><p>4，解释执行：执行到变量就赋值，如果变量没有被定义，也就没有被预编译直接赋值，在ES5非严格模式下这个变量会成为window的一个属性，也就是成为全局变量。string、int这样的值就是直接把值放在变量的存储空间里，object对象就是把指针指向变量的存储空间。函数执行，就将函数的环境推入一个环境的栈中，执行完成后再弹出，控制权交还给之前的环境。JS作用域其实就是这样的执行流机制实现的。</p><p><br></p><p>我们将整个渲染过程分为以上五个部分，这有助于我们理解整个页面的渲染和初始化过程，但是不幸的是其中的每个过程所涉及的细节都比我们想象的要多。不过，对每个过程做一个略微深入的理解和学习并不需要花费太长时间，所以我们将略微深入的探讨每个过程。</p><p><br></p><h4>构建DOM树</h4><p>DOM的构建是增量构建的。HTML文档被解析后，现将字节转化成字符，之后变成DOMtoken，DOMtoken变成节点，节点组织成DOM树。DOMtoken实际上是一种描述方式。单个的DOM节点以开始标签token开始，以结束标签token结束。节点中包含其对应地HTML元素所有的信息，这些信息就是通过DOMtoken描述的。节点根据DOMtoken的层次接口依次连接，生成DOM树。如果一组的开始和结束标签之间有另一组开始和结束标签，则说明该节点内部有一个节点，根据这样的描述规则，最终生成DOM树。</p><p>当解析器解析DOM树时，会解析到一些资源。如果是非阻塞资源，例如图片等，浏览器会进行资源请求，接着继续解析。当遇到阻塞资源，例如script标签（不包含async和defer属性），会停止渲染，等待阻塞资源的返回和执行。</p><blockquote>这个过程是不是听起来有点愚蠢？资源请求前提是DOM树的构建，而二者其实并没有特别强烈的关联。当然开发者明显也意识到了这个问题，现代浏览器基本都实现了<strong>预加载扫描器</strong>。预加载扫描器会解析可用的内容，并且对资源优先级进行排序，然后按照优先级先后请求资源。在预加载扫描器的帮助下，HTML解析到需要加载的资源时，这些资源或许已经处于可用状态，就可以直接使用，减少了阻塞时间。</blockquote><p><br></p><h4>构建CSS规则树</h4><p>DOM包含页面所有的内容，CSSOM包含所有的样式，即如何展示DOM的信息。</p><blockquote>CSSOM全称是CSS Object Model，CCS对象模型。它是将CSS样式表对象化的表示，并且提供了一些API来操作CSS样式。</blockquote><p>CSSOM树的构建和DOM树的构建基本一致：读取CSS文档，将字节转为字符，确定tokens，将tokens转化为节点，以节点构建CSSOM树。</p><p>不过需要注意的是，CSSOM树的构建是依赖于DOM树的构建的，因为我们知道CSS样式有一个最大的特性就是继承，对于每一个元素的最终样式，浏览器都是从该节点的最上层节点开始，通过递归不断地向下更新更加具体的规则，最终得出完整结果，这个就是CSS构建的向下级联的含义。</p><p>CSSOM树的构建和DOM树还有不同点是，DOM树的构建是增量的，而CSS不是，CSS的渲染是阻塞的，因为CSS的规则可以被覆盖，所以必须等到接受完之后统一解析才可以。</p><blockquote>你会不会有这样的疑问，为什么不将DOM树和CSSOM树用一个树进行表达，他们的构建过程是如此的相似？这样做我们甚至可以通过Element访问到相关的CSS所有信息？</blockquote><blockquote>实际上，将二者分开是为了&quot;单一职责原则&quot;。HTML的DOM树应当只承担语义职能，CSSOM承担表现职能。</blockquote><p><br></p><h4>构建render（渲染）树</h4><p>将DOM树和CSSOM树合并，就组成了渲染树。浏览器会检查每个节点，确定应用的CSS规则，构成渲染树。</p><blockquote>只有可见元素会被添加到渲染树。如果一个元素的样式设置display: none，那么它和它的后代都不会出现在渲染树上。</blockquote><p><br></p><h4>布局</h4><p>渲染树被创建之后，就具备了布局的可能。布局是取决于屏幕尺寸的，布局决定在哪里和如何放置元素。布局决定元素的宽，高与元素之间的相关性。</p><blockquote>视窗地宽度决定画面宽度。浏览器默认的全屏宽度是960px，这似乎和我们认知不同。是的，我们通常会写入&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;，此后全屏宽度就是设备宽度。</blockquote><p><br></p><h4>绘制</h4><p>绘制是页面渲染的最后一步。布局完成后，就可以绘制元素的像素了。在页面加载时，整个屏幕被绘制出来，以后，只有改变中受影响的屏幕区域会被重绘。为了保证性能，浏览器尽可能的绘制只需要绘制的最小区域。将节点转化为屏幕上的实际像素的过程就被称为绘制(或者栅格化)。如果你使用Chrome浏览器，你可以通过对应地工具观察到整个过程：</p><p><img src="https://www.im6767.top/articlePlates/1640268697972.png"></p><h1>写在最后</h1><p>至此，本文画上了一个句号。关于页面的加载和渲染涉及到的内容很多，从计算机网络到计算机图形学，如果将每一个细节全部详细描述，恐怕需要一本书的体量才能完成，有些甚至超出了前端开发的范畴，因此本文到目前还来还是略显粗糙，遗漏了很多精华的细节部分。另外，涉及到的实践内容欠缺，使得文章略显空洞。但是不得不承认，对浏览器渲染过程的了解在前端代码开发中有重要意义，特别是性能优化方面。如果有机会和精力，或许笔者会对每个部分再做进一步的补充。</p>',186)]))}const yd=A(fd,[["render",_d]]),bd=Object.freeze(Object.defineProperty({__proto__:null,__pageData:gd,default:yd},Symbol.toStringTag,{value:"Module"})),vd=JSON.parse('{"title":"从HTTP/0.9到HTTP/3","description":"","frontmatter":{"title":"从HTTP/0.9到HTTP/3","summary":"从万维网WWW出现，到如今成为Internet上最大的信息系统，其背后拥有一整套的协议和标准，来推动其蓬勃发展。HTTP超文本传输协议就是其中重要的一环。时至今日，HTTP迎来了新的版本HTTP3。本文将以HTTP协议的发展历史为导引，来了解整个HTTP协议的发展历程，并且略微深入的探讨HTTP相关原理。","date":"2020-06-17T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/从HTTP-0.9到HTTP-3.md","filePath":"content/blog/从HTTP-0.9到HTTP-3.md"}'),wd={name:"content/blog/从HTTP-0.9到HTTP-3.md"};function kd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>HTTP历史发展图鉴</h2><p><img src="https://www.im6767.top/articlePlates/1592398280854.png"></p><p>HTTP协议从诞生到如今，已经成为浏览器最重要和使用最多的协议。从1991年诞生的HTTP0.9开始，HTTP伴随着互联网技术的不断发展，自身也不断完善，经历了HTTP/1.0，HTTP/1.1，SPDY，HTTP/2，以及面向未来的HTTP/3数个版本。接下来将针对几个HTTP版本，进行介绍。</p><p><br></p><h2>协议的开始——HTTP/0.9</h2><p>互联网发展的早期，其网络使用并不像我们现在这样丰富。1991年提出的HTTP协议作用非常明确：传输网络之间的HTML超文本，所以其被称为<strong>超文本传输协议</strong>，它的实现原则同样简单：从客户端发送请求，服务端响应请求。所以基于最简单的请求—响应模式。</p><p>HTTP协议本身就是基于TCP协议的，为了便于理解，我们以图示的方式理解整个过程。</p><p><img src="https://www.im6767.top/articlePlates/1592402560647.png"></p><ul><li>基于TCP的HTTP协议根据IP地址，端口号等，通过TCP的三次握手过程建立连接。</li><li>连接建立好后，会发送一个请求，如GET/xx.html来获取xx.html。</li><li>服务器接收到请求，读取所需的html文件，以ASCII字符流形式返回给客户端。</li><li>等到html文档传输完成之后，断开连接。</li></ul><p><br></p><p>HTTP/0.9真的很简单，就是用来传输体积很小的HTML文件，所以HTTP/0.9的实现有以下三个特点：</p><ul><li>第一个是只有一个请求行，并<strong>没有HTTP请求头和请求体</strong>，因为简单，所以无需其他信息就可以获取到所需资源。</li><li>第二个是服务器也没有返回头信息，只需要传输请求内容给客户端就可以。</li><li>第三个是返回的文件内容是以ASCII字符流来传输的，因为都是HTML格式的文件，所以使用ASCII字节码来传输是最合适的。</li></ul><p>正是因为HTTP/0.9简单，所以它只支持三种请求方式：GET，POST，HEAD。</p><p>现在的服务器依旧支持响应HTTP/0.9。</p><h2>活跃的开始—HTTP/1.0</h2><p>HTTP/0.9的目的非常简单，就是传输HTML文档。当然，那时候也没有其他东西要传输，所以HTTP/0.9完美的完成了任务。但是，随着1994年网景公司推出Nigator，第一款真正意义上的浏览器之后，浏览器需要展示的就不仅仅是HTML文档，而包含JS，CSS，图片，音频文件等等，所以HTTP/1.0一个重要的任务就是要支持多种文件类型。不仅如此，不同文件意味着编码不同，所以，HTTP/1.0还要支持多种编码格式。</p><p>要支持多种类型的文件，有几个问题是对应必须解决的：</p><ul><li>浏览器需要知道服务端返回的是什么类型的数据，以便根据不同的数据类型做出不同的动作。</li><li>某些文件的尺寸可能是巨大的，为了提升传输性能，服务器需要对数据进行压缩，然后传输，对应地，浏览器需要知道压缩方式，以便解压。</li><li>万维网的使用是全球性的，所以需要解决国际化问题。服务器对不同地区提供不同的语言版本，此时需要浏览器告诉服务器所需语言。</li><li>如上文提到的，不同文件存在不同的编码格式，即使是同一类型文件也具有不同的编码格式，问了能够准确读取和展示文件，浏览器需要知道文件类型。</li></ul><p>HTTP/1.0最大的改进就是引入的请求头。我们同样以图示的方式来看HTTP/1.0的请求流程。</p><p><img src="https://www.im6767.top/articlePlates/1592491824346.jpg"></p><p>以一个请求头为例：</p><blockquote><em>accept: text/html</em></blockquote><blockquote><em>accept-encoding: gzip</em></blockquote><blockquote><em>accept-Charset: utf-8</em></blockquote><blockquote><em>accept-language: zh-CN,zh</em></blockquote><p>第一行表示希望服务器返回html格式的文件，第二行表示希望服务器采用gzip压缩文件。第三行表示希望返回的文件是UTF-8编码的，第四行表示希望获得的文件语言版本是中文的。</p><p>服务器接收到请求，会根据请求头信息准备所需数据。但是有时候也会有例外，例如，浏览器期望得到gizp压缩的文件，但是服务器只支持br压缩，那么服务器可能会返回对应压缩格式的文件，返回体可能如下：</p><blockquote>content-encoding: br</blockquote><blockquote>content-type: text/html; charset=UTF-8</blockquote><p>浏览器收到后，会以br的方式解压文件，按照UTF-8的编码要求处理文件，最后展示。这就是一个HTTP/1.0请求最基本的流程。</p><p>总之，HTTP/1.0最大的进步就是，它开始支持多文件的传输，使得网页的展示内容更加丰富，而不仅限于简单地html文档。HTTP/1.0还有很多重要的特性支持，例如我们熟悉的状态码，基于浏览器的缓存机制，并且开始携带系统以及浏览器的版本信息，以便统计用户信息。</p><p>说起缓存，我们通常将前端缓存分为强缓存和协商缓存。<span style="color:rgb(51, 51, 51);">在HTTP1.0中主要使用header里的If-Modified-Since，Expires来做为缓存判断的标准。</span></p><h2>称霸一时—HTTP/1.1</h2><p>WWW万维网的发展速度出乎人的意料。仅仅成为标准的HTTP/1.0在三四年的时间内，这个标准就开始面临一些问题，而这些问题很大一部分就是标准制定时的分歧点。所以有人会称HTTP/1.0是一个匆忙的协议。HTTP/1.1就是在HTTP/1.0基础上进行了大量的改进。</p><p><strong>持久连接</strong></p><p>HTTP/1.0的每一次连接建立，都要经历TCP连接的建立，HTTP信息传输，TCP连接的断开三个过程，如图所示。</p><p><img src="https://www.im6767.top/articlePlates/1593229939039.png"></p><p>这在页面文件不大的时候没有什么问题，但是随着页面内容丰富，可能包含很多的静态文件，那么在下载每个文件的时候都要经历上述过程，这无疑增大了服务器的开销。为了节省这一部分性能，HTTP/1.1采用了建立持久化连接的方式，如图所示</p><p><img src="https://www.im6767.top/articlePlates/1593233810935.png"></p><p>图片比较来看，改进后的HTTP请求觉少了TCP连接建立和断开的次数，减少请求时间的同时，也降低了服务器的开销。HTTP/1.1的持久连接是默认开启的。但是需要注意的是，允许建立的持久连接数量并不是无限的，现代浏览器一般允许最多同时建立<strong>6个连接</strong>。</p><p><strong>夭折的HTTP管道化</strong></p><p>HTTP/1.1实现了持久连接，但是这样的连接方式还有一点问题，就是会遇到队头阻塞问题。什么是队头阻塞？我们以上图为例，可以看到，尽管一次持久连接达到了多个资源同时请求的目的，但是这些请求依旧是有先后顺序的，如果这个队列中某个请求因为某种原因阻塞了，那么后续的请求也要跟着等待。为了解决这个问题，提出了管道化。</p><p>管道化的基本思想是，将多个HTTP请求整合，然后提交给服务器。从前端角度来看，尽管请求可以同时发送，但是资源的处理是有一定先后顺序的，所以服务器依旧要按照一定的顺序来响应请求，然后给出响应。很多现代浏览器都实现了管道化，但是由于性能不佳和服务器支持度层次不齐的缘故，这个特性始终是默认关闭的，被遗忘在浏览器的某个角落。</p><p><strong>支持虚拟主机</strong></p><p>HTTP/1.0的时代，一个域名绑定一个唯一的IP地址，所以一台主机只能支持一个域名。随着计算机技术发展，计算机性能的提高，虚拟主机技术发展，往往一台物理主机可以对应多个虚拟主机。为了提供支持，HTTP/1.1请求头添加了Host字段，表明当前的请求域名，以便服务器做出对应地处理。</p><p><strong>对动态生成的内容提供了支持</strong></p><p>在设计HTTP/1.0时，需要在响应头中设置完整的数据大小，如Content-Length: 901，这样浏览器就可 以根据设置的数据大小来接收数据。不过随着服务器端的技术发展，很多⻚面的内容都是动态生成的，因此在传输数据之前并不知道最终的数据大小，这就导致了浏览器不知道何时会接收完所有的文件数据。</p><p>HTTP/1.1通过引入Chunk transfer机制来解决这个问题，服务器会将数据分割成若干个任意大小的数据块，每个数据块发送时会附上上个数据块的⻓度，最后使用一个零⻓度的块作为发送数据完成的标志。这样就提供了对动态内容的支持。</p><p><strong>支持客户端Cookie和其它安全机制</strong></p><p>这部分内容很多，Cookie的携带，以及签名验证等，不做详细赘述。</p><p><strong>支持协商缓存</strong></p><p>HTTP/1.1为缓存提供了更多选择，<span style="color:rgb(51, 51, 51);">引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。</span></p><p>总的来说，HTTP/1.1在HTTP/1.0上做了诸多完善，使其变得全面并且可靠。直到如今，HTTP/1.1仍旧是主流的协议版本，尽管现代Web应用变得更加复杂和巨大，但是HTTP/1.1任然能够应付绝大多数场景。</p><h2>迈向新的时代—SPDY</h2><p>HTTP/1.1展现出它独特生命力的同时，其不足点也在逐步浮现。HTTP/1.1在长久使用中，暴露出以下几个问题：</p><p><strong>1.HTTP/1.1需要经历&quot;慢启动&quot;</strong></p><p>什么是慢启动？慢启动是指，TCP握手建立连接后，进入数据传输的状态，但是此时网络状况如何是一个未知因素。我们可以选择以一个保守的速度去完成这个请求，一次只发送一个单位的数据，但是这样很容易浪费网络资源，速度很慢。我们也可以选择一个非常激进的速度去完成请求，一次发送全部单位的数据，但是这又会阻塞网络，特别是网络状况本身就不好的情况下，一次进入大量的数据更是让网络状况雪上加霜。那么如何适应这个过程呢？TCP实现的拥塞控制是这样做的：先发送1个单位的数据，收到确认后发送2个单位的数据，然后是4个，然后是8个，16个······指数增加。这个过程实际上是在测试网络的拥塞程度，当达到慢网络的阈值后，就会进入线性增长。这个过程有点像火车启动，需要经历从慢到快的过程。网络中通常TCP建立后需要请求的资源是HTML和核心的CSS，JS，这些文件通常本身就不大，但是恰好又是慢速发送，所以无形中增加了首页渲染的时间。</p><p><strong>2.多个TCP请求带来的网络竞争问题</strong></p><p>根据上文提到的，现代浏览器允许建立6个连接(针对一个服务器)，那么一种显而易见的资源加载优化方式就是，利用CDN服务器，将资源部署在不同服务器，这样每个服务器就可以单独建立连接，实现资源获取。举例来讲，将前端静态资源放在3个CDN服务器上，这样就能够建立3*6=18个TCP连接处理，但是这样的优化方式有一个显而易见的问题，网络带宽一般是固定的，TCP请求之间会互相竞争，当达到带宽瓶颈时，就需要降速，如果此时降速的是关键CSS和JS的获取连接，那么就会影响这些关键资源的获取。</p><p><strong>3.HTTP/1.1没能解决的队头阻塞的问题</strong></p><p>尽管HTTP/1.1认识到队头阻塞问题的存在，但是始终没有能够完美解决。前部资源的阻塞还是会影响后续资源的获取，从而影响页面加载。</p><p><strong>4.重复的HTTP请求头</strong></p><p>在前端开发中，我们的请求总是要携带一定的头部信息，例如Cookie等。这些头部一般不会变化，而且有时候很大，特别是Cookie中信息很复杂的时候。每次携带冗余信息显得不够优雅，而且增加了网络负担。</p><p>为了解决这些问题，很多科技公司开始着手改进HTTP/1.1。2009年，Google提出了一项实验性的协议SPDY，旨在开发者不修改当前网站实现的前提下，提高页面加载速度。SPDY提出后，Chrome、Firefox、Opera等主流浏览器先后给出了实现，很多大型网站（如Google、Twitter、Facebook等）分别提供了其对SPDY会话的实现。2012年，HTTP-WG提出了在SPDY基础上构建HTTP/2的草案，2013年给出了第一个对HTTP/2的实现，自此HTTP/2、SPDY并行发展，在客户端和服务器上进行了广泛可靠的测试。所以，SPDY是HTTP/2的前身。</p><h2>从实验成为标准—HTTP/2</h2><p>2015年，Google公司放弃了对SPDY的后续支持，HTTP/2作为最终的结果取代了SPDY，成为了新的标准。那么HTTP/2的主要改进点是什么？如何解决上面提到的问题？</p><p>即使上文多次提到TCP连接的问题，但是HTTP协议依旧是建立在TCP协议之上的，我们无法摆脱TCP协议的根本缺点，只能想办法去规避这些问题。HTTP/2的协议包含很多内容，但是刨除其它细节，我们可以这样概述HTTP/2：保证一个域名只创建一个TCP连接；想办法消除队头阻塞的问题。因此，HTTP/2提出了多路复用技术，如图所示：</p><p><img src="https://www.im6767.top/articlePlates/1593240323194.png"></p><p>图中每个请求会携带一个ID。客户端，也就是浏览器可以随时将请求一帧一帧的发送到服务器，服务器接收到后，将同一个请求的帧再组合起来，然后根据请求准备内容，先将对应地请求头也以帧的形式发送，然后发送请求数据。整个过程是可以随意发送的。当浏览器接收到信息后，将相同ID的内容全部组合，即可得到请求内容。分帧发送另一个好处是，帧可以带有优先级，如果服务器遇到优先级较高的请求，就会优先处理，这样即使是一个TCP请求，关键的CSS和JS等也能够得到优先处理，保证获取顺序。</p><p>HTTP/2的上述实现原理如图所示：</p><p><img src="https://www.im6767.top/articlePlates/1593241103944.jpg"></p><ul><li>首先，浏览器准备好请求数据，包括了请求行、请求头等信息，如果是POST方法，那么还要有请求体。</li><li>这些数据经过二进制分帧层处理之后，会被转换为一个个带有请求ID编号的帧，通过协议栈将这些帧发送 给服务器。</li><li>服务器接收到所有帧之后，会将所有相同ID的帧合并为一条完整的请求信息。</li><li>然后服务器处理该条请求，并将处理的响应行、响应头和响应体分别发送至二进制分帧层。</li><li>同样，二进制分帧层会将这些响应数据转换为一个个带有请求ID编号的帧，经过协议栈发送给浏览器。</li><li>浏览器接收到响应帧之后，会根据ID编号将帧的数据提交给对应的请求。</li></ul><p>通过引入二进制分帧层，HTTP/2实现了多路复用。这里有一个细节需要注意，二进制头部帧和数据帧采用的是不同的编码压缩方式。前面提到HTTP/1.1会发送冗余的头部信息，HTTP/2针对头部采用了一种特殊的压缩方式—Hpack。它的基本原理是，重用当前连接中之前请求的头部，只发送新加的或者更改的头部信息，以便降低头部大小。其实现原理也非常简单，有兴趣者可以自行查阅一下。</p><p>HTTP/2还有一个特点是，支持Server Push。Server Push是指，允许在请求没有发生的时候，服务器主动响应请求。例如，当请求index.html时，服务器判断其中包含index.css和index.js，那么允许在发送index.html的同时，开始传输index.css和index.js的内容，以便降低请求时间。</p><p>HTTP/2还有很多其它特性，这里不做一一介绍。HTTP/2之所以能够成为标准，很大一个原因是对于开发者基本是无感知的。开发者仍旧可以携带自己想要的头信息，传输Cookie，使用缓存等。仅仅是传输方式发生了改变，我们无需为了HTTP/2重新构建页面，降低了推广阻力。但是HTTP/2也不是那么美好。2015年成为标准以来，HTTP/2的使用还是不够广泛。一些大的互联网公司支持了HTTP/2，但是绝大部分网络资源都还是依靠着HTTP/1.1，因此拥抱HTTP/2仍旧是一个漫长的过程。</p><h2>讲讲题外话—HTTPS</h2><p>HTTP协议下的传输有几个显著的问题，直接影响安全：1.通信内容为明文，容易被监听。2.整个请求过程不验证通信双方的身份，很容易遭遇伪装。3.无法验证报文的完整性，有可能会被篡改内容。为了解决上述问题，提出了更高安全级别的HTTPS协议。通常可以认为，<span style="color:rgb(51, 51, 51);">HTTP+加密+认证+完整性保护 = HTTPS。通常使用HTTPS协议时，就是在HTTP和TCP层之间架设一层加密层，SSL或者TLS层。HTTPS协议通常不认为是属于某个HTTP协议的版本，因为他只是在协议层之间架设加密层，理论来讲任何HTTP版本的协议都是可以支持HTTPS的。但是HTTPS恰恰成为了HTTP/2推广路上的一个不可避免的问题。</span></p><p><span style="color:rgb(51, 51, 51);">我们略微深入了解一下HTTPS的实现原理：</span></p><p><span style="color:rgb(51, 51, 51);">HTTPS事实上就是利用三种加密算法保证身份安全，内容加密，完整性校验。其原理如图：</span></p><p><img src="https://www.im6767.top/articlePlates/1594651020408.png"></p><p>这其中涉及到三种常见的加密方式，在身份验证中，采用非对称加密，客户端掌握公钥，服务端掌握私钥，客户端的信息只能由客户端来解密，在整个过程中，客户端向服务端发送唯一信息。</p><p>内容加密中，服务端和客户端使用相同的秘钥，服务端负责维护多个秘钥。不同的客户端拥有不同的秘钥。然后服务端和客户端利用相同的秘钥进行加解密。</p><p>散列算法则用来计算内容的散列值，以便确认发送和接受信息相同。</p><p><span style="color:rgb(51, 51, 51);">目前，各大浏览器厂商都只实现了基于SSL的HTTP/2，这意味着，HTTPS在逐渐被搬上银幕，成为未来协议的标配，&quot;不安全&quot;的协议将无法享受最新的技术成果。所以，HTTPS的升级，成为HTTP/2的一个预先要求。然而，HTTPS需要申请CA证书，免费的证书很少，这意味着为了更好地安全，需要花费资金。不仅如此，HTTPS因为要协商秘钥，因此会增加部分数据的传输，某种程度上也会对连接产生一定的性能影响。所以，HTTPS不会成为一些中小网站的选择。</span></p><h2><span style="color:rgb(51, 51, 51);">未来已经到来—HTTP/3</span></h2><p>相较于HTTP/1.1，HTTP/2已经大大改善了HTTP/1.1带来的问题。但是HTTP/2依旧是基于TCP协议的，TCP协议具有的一些痛点无法避免。我们知道，和TCP同级的还有UDP协议，但是因为UDP协议的一些特点，使得UDP协议用途一直不大广泛。UDP是一种无连接的协议，UDP有不提供数据包分组、组装和不能对数据包进行排序的缺点，也就是说，当报文发送之后，是无法得知其是否安全完整到达的。UDP不像TCP协议，必须经过握手建立连接之后才可以发送数据，它可以随时发送，并且只是报文的搬运工，不进行任何报文的拆分和拼装工作。这就说明UDP的信息传输是&quot;不可靠&quot;的，发送数据不关心对方是否已经收到。这在丢包率比较高的网络中可能会造成响应不应答的情况。但是UDP有TCP协议无法比拟的性能优势，Google公司就看中了这一点，开发了基于UDP的的新的传输层协议，命名为QUIC，希望其能够替代TCP协议，使得网络传输更加高效。后来，基于QUIC协议的HTTP协议被正式命名为HTTP/3。</p><p><strong>1.简单了解QUIC协议</strong></p><p><img src="https://www.im6767.top/articlePlates/1593245767475.jpg"></p><p>QUIC取代了TCP，SSL/TLS的部分，但是QUIC本质上是传输层协议，HTTP是应用层协议。理论来讲，任何应用层协议都可以使用QUIC协议。而基于QUIC协议的HTTP协议被称为HTTP/3。按照上述观点，HTTP/3协议本身的特点，就是QUIC的特点。我们通过对比基于TCP协议实现的HTTP/2和基于QUIC实现的HTTP/3来说明其特点。</p><p><strong>1)0-RTT或1-RTT建立连接</strong></p><p><img src="https://www.im6767.top/articlePlates/1593247484933.jpg"></p><p>上图是HTTP/2和HTTP/3建立连接示意图。在HTTP/2中，TCP握手建立连接需要1RTT，假设使用TLS1.3，将会进行一次TLS握手，需要1RTT，接下来传输数据需要1RTT。比较而言，HTTP/3在建立连接的同事处理秘钥数据，将会有1RTT，接下来传输数据需要1RTT，但是HTTP/3更优秀的地方在于后续连接是0RTT的，TCP则会重复上述过程。QUIC在第一次建立连接时就携带数据，采用DH秘钥交换算法保证数据安全，如果服务器缓存了秘钥，那么之后的连接建立不再需要通信获取秘钥，这样后续连接的建立过程就是0RTT。</p><p><strong>2)连接可以迁移</strong></p><p>TCP连接基于四个因素，源IP，源端口，目标IP，目标端口。当其中任何一个因素发生变化，那么就需要重新建立TCP连接。QUIC则不同，它的实现基于一个64位的随机数而不是这四个因素，这个随机数被称为connectID，只要该ID不变，那么连接就是可用的。</p><p><strong>3)解决TCP的队头阻塞</strong></p><p>我们提到过，HTTP/2解决了队头阻塞的问题，但是那是应用层层面的，实际上TCP层也会出现队头阻塞。我们以图示来描述这个问题。</p><p><img src="https://www.im6767.top/articlePlates/1593250466837.jpg"></p><p>通过该图，我们知道在HTTP/2中，多个请求是跑在一个TCP管道中的，如果其中任意一路数据流中出现了丢包的情况，那么就会阻塞该TCP连接中的所有请求。这不同于HTTP/1.1，使用HTTP/1.1时，浏览器为每个域名开启了6个TCP连接，如果其中的1个TCP连接发生了队头阻塞，那么其他的5个连接依然可以继续传 输数据。所以随着丢包率的增加，HTTP/2的传输效率也会越来越差。有测试数据表明，当系统达到了2%的丢包率 时，HTTP/1.1的传输效率反而比HTTP/2表现得更好。</p><p>从QUIC角度来讲，QUIC基于的是UDP协议，UDP在数据接收一端没有处理顺序，所以丢包的也不会影响后续数据的传输。</p><p><strong>3)基于UDP协议的网络拥塞控制</strong></p><p>UDP是简单的协议，但是QUIC基于UDP实现了更加优秀的、功能类似于TCP的拥塞控制策略，使得UDP在网络传输方面的功能健全性不负于TCP，并且良好的保持了UDP的性能。</p><p><strong>2.总结一下HTTP/3</strong></p><p>QUIC 丢掉了 TCP、TLS 的包袱，基于 UDP，并对 TCP、TLS、HTTP/2 的经验加以借鉴、改进，实现了一个安全高效可靠的 HTTP 通信协议。凭借着 0 RTT 建立连接、平滑的连接迁移、基本消除了队头阻塞、改进的拥塞控制和流量控制等优秀的特性，QUIC 在绝大多数场景下获得了比 HTTP/2 更好的效果。</p><h2>写在最后</h2><p>作为计算机网络的重要一环，HTTP协议庞大且复杂。基于TCP协议的HTTP协议逐步完善和发展，但是也遇到了不少的问题，很多问题是TCP协议带来的先天不足。但是，TCP协议作为老牌的计算机网络协议之一，其改动面领着巨大的、不可预见的问题，所以出现了QUIC，一种新的协议来弥补TCP的先天不足。在HTTP/1.1依旧处于霸主地位的今天，HTTP/2还在稳步推进，HTTP/3则因为底层协议改变的问题，其还面领着诸多挑战。</p>',105)]))}const qd=A(wd,[["render",kd]]),Td=Object.freeze(Object.defineProperty({__proto__:null,__pageData:vd,default:qd},Symbol.toStringTag,{value:"Module"})),Sd=JSON.parse('{"title":"你的代码真的健康吗？","description":"","frontmatter":{"title":"你的代码真的健康吗？","summary":"作为前端开发，我们似乎常常忽略内存问题。现代浏览器引擎的内存回收机制完全是自动的，浏览器也不再暴露出内存回收的相关方法，但这并不意味着我们不需要了解内存机制。你的代码存在\\"内存泄露\\"吗？它一定是健康的吗？","date":"2020-09-07T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/你的代码真的健康吗？.md","filePath":"content/blog/你的代码真的健康吗？.md"}'),xd={name:"content/blog/你的代码真的健康吗？.md"};function Cd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>V8与Chrome</h2><p class="ql-align-justify">    2008年V8的第一个版本随着Chrome的发布出现在世人面前，JavaScript才算是真正摆脱”玩具语言”的绰号。在此之前，JavaScript引擎都是将代码解释执行。基于C++开发的V8引擎则直接将代码编译成为原生的机器码，基于底层的优化使得JS程序在V8的引擎下运行速度非常接近于成熟的传统语言。不仅如此，基于C++的开发使其能够运行在不同环境，JS也顺势跳出了浏览器的束缚，Node.js迅速占据了服务端开发的很大一块蛋糕。</p><p class="ql-align-justify">    但是，无论V8为JS带来了多大的机会，浏览器环境始终是JS最大的舞台。V8最早被嵌入在Chrome中，使得Chrome大放光彩，成为前端开发者最喜欢的浏览器。随着Chrome的一个个版本迭代，V8也不断优化升级，两者似乎已经融为一体。</p><p class="ql-align-justify">    在JavaScript编程过程中，开发者基本是”自由”的，数据类型，内存分配，内存回收等概念被逐渐弱化，都依赖于V8引擎的内部机制完成，但是自由的代价就是，弱化的概念很容易被开发者忽视，不必刻意关注变成了不关注，最终导致很多问题的发生。在这里，我们主要针对内存问题进行了解和剖析，在能够简单了解内存机制的同时，审视自己的代码是否存在问题，没有问题的情况下，如何做到避免问题；存在问题的情况下，了解为何会出现这样的问题，以及如何解决问题。</p><p class="ql-align-justify"><strong>     </strong><strong style="color:rgb(255, 0, 0);">特别注意，以下讨论及分析皆基于浏览器端的JavaScript，特别是Chrome浏览器，服务端或其他浏览器仅提供做原理性参考，不进行差异性解释。</strong></p><h2>自由并不意味着无限</h2><p><span style="color:rgb(26, 26, 26);">JavaScript和Java是没有关系的两个语言，但是不得不承认，JavaScript和Java有很多的相似性。Java运行基于JVM，JVM对象分配是在堆内存中完成的，JavaScript同样也是在堆内存中完成。Chrome本身作为一款应用软件，其内存的使用就不应当是无止境的，因此依赖于Chrome环境的JS能够使用的内存也是有限的，32位操作系统中大约为700MB，64位操作系统中大约为1400MB。有限的空间内要持续运行程序，就必须在某个节点上，将内存更新(释放)，腾出更多的空间来做更多的事。</span></p><h2>Chrome的内存管理</h2><p class="ql-align-justify">内存管理要做的事是非常简单并且明确的：分配内存和释放内存。我们在这里着重关注释放内存部分。</p><p class="ql-align-justify">释放内存目标即将”不再使用”的内存在”恰当的时机”进行释放。显然地，这里面临两个问题：如何确定内存”不再使用”，什么时机算是恰当时机？接下来略微深入了解下这两个问题。</p><p class="ql-align-justify">如何定义”不再使用”？在这个问题上，通常采用引用计数法和标记-清除法。这两种算法原理都是易于理解的。</p><p class="ql-align-justify">引用计数法的原则是，当该对象(也可能被称作变量)被引用时，就对应计数+1，断开引用时就对应计数-1。每当GC操作时，就将计数为0的部分全部清理。有许多语言采用该方案进行对象标记，例如python和PHP。早期许多浏览器例如IE，Opera都使用这种方案来进行标记。但是很快就遇到了一个问题: 循环引用。A→B→C→D→A，此时每个对象都有引用，就永远都无法被回收了。这也是早期Opera和IE占用内存广为诟病的原因之一。为了解决这个问题，就需要有专门的算法来排查循环引用的问题。</p><p class="ql-align-justify">标记-清除法如同名称，将整个过程分为标记和清除两个部分：</p><p class="ql-align-justify">标记(Marking)：遍历堆内存中所有对象，将所有可到达的对象标记为活跃对象。</p><p class="ql-align-justify">清除(Sweeping)：清除保证不可达对象在之后进行内存的重新分配时能够重新利用。</p><p class="ql-align-justify">过程十分简单，但是可能会引出两个基本的问题：标记阶段是否遍历所有使用的内存对象？清除阶段是否是将对象所占用的内存数据清空？</p><p class="ql-align-justify">标记-清除法避免了引用计数法中可能出现的循环引用造成的内存无法回收的问题。更多的语言内存回收都是采用这种方式，例如Java的虚拟机JVM，和我们要讨论的V8引擎下的JavaScript。尽管JVM和V8实现的内存管理方案更为全面，但本质思想就是这些。</p><p class="ql-align-justify">标记-清除法带来了另外一个问题：在整个过程中，所有的线程工作都必须停止，因为代码的运行无时无刻不在改变着引用，这样的状态下无法进行标记。因此在GC过程中，所有的代码都暂时停止工作，直到GC完成。这被称作一次全暂停。</p><p class="ql-align-justify">内存管理的目标和方法简单易懂，但是实际上在整个过程中有许多问题有待解决。JS就有一个不得不面对的问题，每次GC过程都要造成一次全暂停，这对于程序运行是”不可忍受”的———全部工作停下来等待一件事的完成，在及时性要求很高的场景下(例如游戏)，暂停影响就不那么友好了。因此如何高效的执行一次GC，就成了一个值得解决的问题。</p><p class="ql-align-justify">很显然，针对所有使用内存的对象进行无差别处理并不是高效的方案，因此，在漫长的内存管理方式演变过程中，开发人员逐渐发现，程序中的变量总体可分为两个部分：</p><p class="ql-align-justify"><br></p><ol><li>多数的对象生命周期很短，他们立即就会无用，或者很快就会无用。</li><li>部分对象存在时间很长。</li></ol><p class="ql-align-justify">这就是分代假设。V8将内存分为年轻代(Young)和老年代(Old)两部分，不同的部分采用不同的算法进行处理。针对于年轻代，采用Scavenge算法，对于老年代，则采用标记-清除法和标记-整理算法。</p><h2>标记-清除法和标记-整理算法</h2><p class="ql-align-justify">在经过Scavenge算法的淘洗后，进入老年代的对象大多数为存活时间长的对象，对于这些对象，采用标记-清除法和标记-整理算法进行回收。标记-清除法即对老年代的对象进行遍历，标记活着的对象，清理过程中清除未被标记的对象。标记-清除法执行后，内存空间很可能会出现不连续的状态，这些内存片段尽管可以使用，但是会为内存分配带来麻烦。举个显而易见的例子，当此时程序需求一块较大的内存来分配给一个大对象，但是已经被清理出的内存碎片无法满足本次分配，则必须执行一次GC，以清理出足够的空间满足本次分配。因此还需要标记-整理算法来将内存合并。标记整理算法在老生代的GC过程中，每当对象被回收，就将存活的对象移动向一端，移动完成后清理边界外部内存。</p><p class="ql-align-justify">可以看出，Scavenge算法主要针对存活对象，标记-清除算法主要针对非存活对象。</p><p class="ql-align-justify">以上方案保证的是如何更高效率的执行完GC过程，但是GC过程中造成的全停顿依旧没有根本解决。为了使得GC更加静默、不易被感知，GC过程还和增量标记，平行标记，并发标记等等结合。本文至此已做足够的相关内容铺设，剩余内容逐渐偏离实用范畴，不再做详细赘述。</p><p class="ql-align-justify">总的来说，没有完美的内存方案，以V8采用的分代假设思想来看，其应对存活周期处于中等(既不是立即消失，也不是长久实用)的对象依旧无法高效回收。事实上，只有开发者自身能够确切的知道对象何时应当被创建，何时应当被回收，因此内存相关知识和运作规律对开发者而言还是非常有意义。</p><p class="ql-align-justify"><br></p><h2>错误不可避免</h2><p class="ql-align-justify">随着代码数量的增加和系统的庞大，JS代码中的内存问题是不可避免的。即使是老练的开发者也难以避免忽视某些问题而造成内存泄漏问题。在具有内存回收机制的JavaScript中，我们不必过多关注于内存是如何释放的，我们只需要让代码尽可能去符合V8的内存管理机制，剩下的，都交给V8去解决吧。</p><p><br></p><h2>检查下自己的代码</h2><p>我们从刚才的介绍中能够大致了解到浏览器的内存分配与回收机制，本章节不会再去详细介绍内存问题的类型，以及为什么造成内存问题，而是提供通用的排查方案和手段，将抽象的内存问题转化成实际的代码问题。也就是说，我们的讨论重点不再是”<strong>为什么会出现内存问题</strong>”，而是<strong>”是否真的存在内存问题”</strong>和<strong>”问题出在哪里”</strong>。但是前者对于后面的讨论至关重要。</p><p>本文部分名词会以<strong>*</strong>标注，表示该内容为浏览器内存管理的一些关键概念或者知识点。了解他们对于深入理解内存管理的相关内容有重要帮助。</p><p><strong>开发者工具中的Performance</strong></p><p>Performance工具记录的是运行时状态，它将整个过程可视化，以时间维度展示代码运行时的整个过程。这里不再详细赘述如何获取一次执行时的Performance记录，需要强调的是我们需要勾选上方设置栏中的Memory</p><p><img src="https://www.im6767.top/articlePlates/1599487953196.png"></p><p>这里特别声明一下这个”垃圾桶”图标，我们可以在多个面板上看到它。本文后续将该图标成为“GC按钮“，它的作用是执行一次GC，也就是内存回收。我们通常建议在每次排查，获取数据之前都手动执行一次GC，排除那些可回收的内存对排查造成的干扰。</p><p>当我们获取到一次执行时的performance记录时，我们聚焦下方的内存部分的折线图，它通常是这个样子。由于我们讨论以JS内存为主，我们仅勾选JS Heap（堆内存）<strong>*</strong>，观察它的变化。</p><p><img src="https://www.im6767.top/articlePlates/1599487968046.png"></p><p>我们可以注意到折线是有升有降的，上升说明有新的内存在分配，例如定义了变量，或者循环中使用了中间数组等。下降说明内存在回收。由于浏览器并没有暴露出手动的内存回收方法（部分IE版本提供了，但是大多数浏览器都不支持手动回收内存），我们无法感知或者控制GC的时机，这取决于浏览器的内存回收机制。但是在performance的火焰图部分，我们能够看到GC的过程。而且可以肯定，每次折线图的下降都会对应至少一次GC操作。如下图。(Minor GC<strong>*</strong>，Major GC<strong>*</strong>, <strong> </strong>DOM GC<strong>*</strong>)</p><p><img src="https://www.im6767.top/articlePlates/1599488011762.png"></p><p>所以，当我们的折线图逐渐上升，但是通过GC没有明显下降时，就要引起你的注意了，很可能产生了内存泄漏。就像上面折线图那样。</p><p>上面提到的检测均是以某一次Record为准，那如果我们想要实时观察内存、CPU等的变化时，我们该怎么做？</p><p>在开发者工具的More Tools中有performance monitor工具，他可以实时反映数据变化情况。观察的原则和上面的一样，关注JS heap折线是不是呈现出不合理的上升趋势。</p><p><img src="https://www.im6767.top/articlePlates/1599488087641.png"></p><p><strong>Performance API</strong></p><p>上面提到的开发者工具是以可视化的形式展现内存变化，有时候我们更希望获取到内存使用的具体数值，并且是通过代码的形式获得，我们可以利用浏览器提供的performance API<strong>*</strong>来完成。</p><p><img src="https://www.im6767.top/articlePlates/1599488132915.png"></p><p>我们在控制台打印performance（该属性挂载在window上），可以获得有关性能的相关信息。如图。</p><p>该API提供很多的性能指标，由于我们是针对内存问题的排查，我们只需要关注memory属性，从中获取到指定信息。</p><p>Memory包含三个属性，没有其他的方法。</p><p><strong>JsHeapSizeLimit</strong>是指js堆内存的上限，这个是浏览器决定的，表示你能够使用的最大的堆内存。</p><p><strong>TotalJSHeapSize</strong>是指目前浏览器分配的JS堆总大小，这个是动态变化的，但其上限不会超过JsHeapSizeLimit。</p><p><strong>UsedJSHeapSize</strong>是指目前已经使用的js堆总大小，这个就是我们的程序占用的js堆大小。</p><p>通过监控上述数值，我们也可以获取到相关的内存信息。一个示例的测试方法是，我们可以在测试代码中构建一个定时器，每隔指定时间（一分钟或者数十秒）打印记录一次usedJSheapSize，在此期间进行页面操作或者运行代码，观察数值的上升和下降是否符合自己的预期，来确定是否发生内存问题。如果较长时间的使用中发现，该数值总是呈现上升趋势，没有下降，那么就要小心了，你的代码中很有可能出现了内存问题。</p><p><strong style="color:rgb(255, 0, 0);">但是请注意：尽管performance API已经是一个标准API，但是memory属性只是Chrome浏览器的单独实现。无法保证其他浏览器下可以获取到该字段，因此尽量避免在非测试环境中使用这个非标准的属性。</strong></p><p><strong>内存查看专用的工具--Memory</strong></p><p>Memory是一个完整的内存查看的工具，它可以从多种形式展示内存使用的情况，无论是动态还是静态，它都可以提供数据。使用该工具可以有多种途径来确定”是否有内存问题”，这里我只介绍一种最为简单快捷的方式——获得操作前和操作后两次内存的快照，比较快照显示的内存使用大小，判断是否有内存问题。</p><p><img src="https://www.im6767.top/articlePlates/1599488263707.png"></p><p>我们在操作前依照上图获取一次快照。然后进行必要的测试操作，完毕后再次获取一次快照。</p><p><img src="https://www.im6767.top/articlePlates/1599488304447.png"></p><p>观察两次快照的内存大小，如果比自己预期的增长要高得多，那就要当心了，内存问题已经发生。</p><h2><strong>中途小结一下</strong></h2><p>好了，我们要讨论的两大问题中的第一个，“<strong>是否真的存在内存问题</strong>”到此已经结束了。看似提供了三个方法，事实上它们都遵循一个基本原则：操作闭环后，观察经过GC的内存是不是呈现出不断增长的趋势。我们只是提供了三种形式来观察这种变化，所以本质上他们只是一个方法。为了在内存问题的排查中保持清醒的头脑，这里强调一下，即使大部分人都不会犯这个愚蠢的错误：内存泄露的表现是自己意料之外的内存增长，而并不是内存增长一定发生内存泄露。假若你执行了一段代码，代码的作用是向页面添加DOM元素，那么操作前后内存肯定会增长，因为这些DOM元素确实新增了。但是当你排查发现经过操作后，不仅增加了DOM元素，似乎还有一个代码运行时的中间数组经过GC后也没有释放，但是它确实不应该存在，这才是发生了内存泄露。</p><p><br></p><h2><strong>问题出在哪里？</strong></h2><p>我们仅仅意识到有内存问题是不够的，我们需要解决它。在本小结中，我们将重点介绍Memory面板的一些使用细节，说明一些字段的含义，以及如何从中获取到线索，以便缩小排查范围，了解造成内存问题的准确原因。在最后，我们演示一两个问题，来说明如何从这些实际的数据，定位到代码的问题。</p><p>在了解本小节之前，希望你已经具有对“浏览器检测内存回收机制”的基本理解，具有对“哪些行为或者代码可能造成内存泄漏”的基本概念。以便当可疑的内存占用出现时，能够正确判断它是否是由于内存泄露造成的。</p><p><strong>内存快照——Heap snapshot</strong></p><p>当我们选择Memory提供的第一个选项时，我们获取到的记录就是一次堆内存的快照。下面小字对他的介绍是，堆快照显示存在于页面中的JavaScript对象和相关DOM节点之间的内存分布情况。</p><p><img src="https://www.im6767.top/articlePlates/1599488412743.png"></p><p>也就是说，快照记录的是记录时刻内存中的JS对象和DOM节点的内存分布。</p><p>我们获取一次快照，然后点击它，就能够得到本次内存快照的详细信息。</p><p><img src="https://www.im6767.top/articlePlates/1599488430983.png"></p><p>我们可以通过展开分类展示列表，详细的看到包含的内容。从这个视角，你可能会对代码有一个新的认识。</p><p>然而这个看多了会很头疼。会发现很多展开都包含成千上万条数据，即使不做逐个分析也非常庞大。我们有时候只去观察变化部分，就可以做一个对比。</p><p>通过操作前获取一次快照，操作后获取一次快照，我们对比两次快照，聚焦于”增加”部分，可以有效地缩小排查范围。如图</p><p><img src="https://www.im6767.top/articlePlates/1599488467175.png"></p><p>然后根据右侧，关注Size Delta<strong>*</strong>为正的部分数据，这些表示变化量是增加的。泄露的内存很有可能包含其中。 </p><p>关于上图中的1,2标识中的其它选项这里不做详细解释，可以在使用中切换体会。总的来说快照部分的很多选项上都可以悬浮鼠标获得对应字段的解释，使用还是比较方便易懂的。</p><p><strong>时间线上观察内存的分配——Allocation instrumentation on timeline</strong></p><p>内存快照是静态的。他就像一张照片一样记录下瞬时的状态。有时我们更希望拍摄视频，查看到动态的内存分配。Allocation instrumentation on timeline就提供了这样的功能。Chrome官方对于其的解释是：分配时间线随时间变化检测JavaScript内存分配情况，展示出来。在记录了配置文件之后，你可以选择一个时间间隔，查看其中的内存分配和在记录结束前仍然存在的对象。使用此记录文件可分离内存泄漏。</p><p><img src="https://www.im6767.top/articlePlates/1599488561481.png"></p><p>我们选择这个记录方式，然后开始。在页面操作后，停止记录。然后查看获取到的记录内容。（该方式获取到的内存记录生成会非常消耗时间，不建议利用这种方式监控长时间的操作）</p><p><img src="https://www.im6767.top/articlePlates/1599488594654.png"></p><p>上方红框标记出的位置就是一个时间轴，这个以时间为轴的柱状图中，能够看到有灰色柱和蓝色柱两部分。灰色柱表示某时刻执行时分配的内存数量，蓝色柱表示执行结束处后依旧存在的内存数量。那我们可以简单的推算出释放的内存就是灰色柱高减去蓝色柱高。当你的测试代码运行时，发现有蓝色柱存在，那么就要检查一下，这部分占用是否和你预想的一致。检查也非常简单，我们通过调整时间轴，聚焦某一段时间，或者某个柱状部分，然后在下方查看该时段的内存状态，排查并且分离出异常部分。下图给出一个使用步骤图示。</p><p><img src="https://www.im6767.top/articlePlates/1599488627620.png"></p><p>这种内存的查看方式一个典型的特点就是，可以以时间范围缩小，聚焦于某个时段的某个操作来进行排查。相较于内存快照的方式，它包含的内存对象相对较少，很显然，从数十个内存占用中找到问题远比成千上万个内存占用中找到问题要容易的多。</p><p><strong>开销最小，性能最快——Allocation sampling</strong></p><p>无论采用上面提到的哪一种情况，当内存情况复杂时，生成记录文件都要花费很长时间。特别是使用时间轴的方式来记录长时间操作，生成记录所用时间肯定会让你感到痛苦。这里Chrome提供了另一种抽样方式，允许你进行长时间的操作，然后记录内存相关数据。对内存泄露问题排查来讲，上面两种方式已经能够应付所有问题了，对于这最后一种记录方式，笔者这里不再详述，有兴趣可以自行使用体会。有趣的是，在这种模式下，火焰图能够告诉你你的某个方法执行时将会使用多大的内存，或许这可以帮助你对你的代码有全新的认识。</p><h2><strong>再小结一下</strong></h2><p>到这里我们已经介绍完了关于定位内存泄漏的常用外部工具。它解决两个问题：</p><p>1. 没有释放的，导致内存问题的到底是什么？</p><p>2. 是哪里的代码生成了这个造成内存泄漏的内容？</p><p>这里有一些比较实用的内容和经验：</p><p>在常见的内存泄漏的介绍文章中，大多数会提到“闭包”和“DOM节点”，我们针对这两种情况进行特别关注。</p><p><img src="https://www.im6767.top/articlePlates/1599488700615.png"></p><p>闭包容易产生内存泄漏，这取决于JS的语言特性和闭包的原理，所以可以优先关注，看看闭包这个集合里是不是包含内存泄漏问题。</p><p>另一个是指游离的DOM节点，指的是在代码中被JS引用，但是却不出现在DOM树中的节点。它们通常以Detached xxxElement的形式被标记，创建一个DOM节点，却又不去展示它，那确实需要搞清楚它是不是真的需要”存在”。</p><p>当你解决了“问题出在哪里“这个问题后，下面就是实际去解决这些问题了。如何解决问题已经超出了本章节的讨论，那需要去了解前文提到的”浏览器内存机制”和“常见的引起内存泄漏的问题”。下面笔者将以两个简单的实际操作示例来演示内存泄漏排查的过程，希望能够对你有所帮助。</p><h2>第一个例子</h2><p>我们打开performance，勾选memory，开始记录页面，然后在页面中进行操作(这里我执行了表格的数据切换和呼出我们右键菜单的操作)，操作一定时间后，停止本次记录。生成记录图。</p><p><img src="https://www.im6767.top/articlePlates/1599488839114.png"></p><p>从图中可以看出JS Heap的内存曲线是处于上升趋势的，经过了多次GC操作，但是都没有恢复到操作初始状态，再去回想自己的操作过程，其中只涉及到右键操作和数据切换，并没有出现向页面添加新内容的操作（也就是说，在本次操作过程中，理论来讲都是临时数据的存储和运算，用后都应该被释放），但是内存确实增加了。可以判断其出现了内存泄漏。</p><p>我们通过获取操作前和操作后的两次快照进行查看。<img src="https://www.im6767.top/articlePlates/1599488883155.png"></p><p>可以看到操作前后产生了大量的游离的DIV节点，造成了无法释放的内存占用，这就是导致内存泄漏的具体内容。既然是游离的DOM节点被JS引用，那么我们想办法使其正常释放即可，在合适的节点断开JS和节点之间的引用关系。修改之后我们再来用修改后的代码重复上述过程，取得两次快照对比，能够发现内存正确释放了。</p><h2>第二个例子</h2><p>因为上述举例设计到一个UI组件库的内部组件实现，游离的节点和代码之间的关系过于抽象了，对于读者来讲可能依旧不大明白。接下来笔者从一个非常简单的代码片段入手，略带深入性的探讨一下内存排查的表现和细节。</p><p><img src="https://www.im6767.top/articlePlates/1599488970904.png"></p><p>该代码段的理解不具有难度。笔者设计了一个按钮，点击按钮将会模拟进行一次AJAX请求的发送，然后利用console.log语句打印出返回的结果，测试看内容是否正确，最后再利用load方法使用(由于这里没有定义load方法，我们注释，表示后续该数据会正常使用)。在开始前，可以思考一下，这里是否存在内存泄漏？如果有，是什么造成了内存泄漏？我们利用第二种方式，即通过时间线的形式查看内存泄漏，记录开始后，我们点击按钮10次，然后停止。</p><p><img src="https://www.im6767.top/articlePlates/1599489006410.png"></p><p>所以，上面这段代码是”存在”内存泄漏的。我们还是为”存在”打上了引号，因为如果你的代码就是要实现单纯的console.log输出内容，那么这也不一定是一个内存泄漏。但是如果你只是为了验证数据是否正确，或者只是想看看res长什么样，只是没想到会造成内存泄漏的话，那这就是一个问题了。<strong>内存是不是泄漏完全取决于你的代码，它不是绝对的对与错。</strong></p><p>那么造成这次内存泄漏的原因是什么？从上图可以看出，本应该用后即回收的res由于被console.log调用了，于是从GC roots开始，下一级找到DevTools时，检测到了console方法与其有引用关系，所以它就不会被回收。这样，当我们的语句中包含一万个console时，这些数据还是始终存在，特别是console特别复杂的内容时。<strong>回头想想你的代码，如果里面还包含测试用的console语句没有被清理，是不是也觉得问题好像比你想象的严重一些。</strong></p><p>根据上面的阐述，我们是不是可以肯定使用者如果使用了这样的代码就一定会造成内存泄漏？当然作为开发者我们到这一步确实可以这样认为，然后解决它。但是更进一步，你可能会和笔者一样怀疑这样一个问题：在正常使用中，绝大部分的用户不会调出控制台，那么如果用户端没有控制台的话，DevTools和泄漏的变量之前引用关系还存在吗？如果不存在是不是意味着可以正常使用中本身是可以被正确回收的？那我们就需要模拟用户，在不利用DevTools的情况下验证内存是否增大。OHOH，从上文来看，没有开发者工具我们完全束手无策。其实并不是，这里再提示一下，在Chrome浏览器中使用shift + ESC可以呼出Chrome的任务管理器。经过测试可以知道：在没有DevTools的情况下，GC依旧要去查找DevTools中的引用关系。这种测试方式，是不是让你想起了<strong>控制变量法*</strong>?在内存问题排查中，<strong>尽量做到操作隔离，避免复杂的环境、条件和操作干扰你的排查，以便快速定位问题，得到有说服力的结论。这个普适性的原则可以用于任何问题的解决。</strong></p><h2><strong>写在最后</strong></h2><p>到此为止，我们已经获得了基本的排查内存泄漏所需的方法和能力，接下来就是运用到自己的实际代码中了。排查仅仅是开始的第一步，具体的解决才是重点内容。依旧要重复一句话：“内存的排查是一个实际问题，实践意义远大于理论意义。”尽管有的时候内存问题很难暴露出来被开发者注意到，但是问题的存在和问题的暴露与否之间没有必然联系。你见, 或者不见它, 它就在那里, 不悲不喜。</p>',118)]))}const Pd=A(xd,[["render",Cd]]),Ad=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Sd,default:Pd},Symbol.toStringTag,{value:"Module"})),Dd=JSON.parse('{"title":"元素remove和mouseenter的怪癖\\"BUG\\"","description":"","frontmatter":{"title":"元素remove和mouseenter的怪癖\\"BUG\\"","summary":"2021年开年就遇到一个诡异的问题：移除子元素会触发到父元素的mouseenter事件。排除了一切可能的JS代码逻辑中的问题，逐渐意识到这可能是浏览器行为的\\"怪癖\\"，既然chrome是开源的，不妨深入chrome内部，在探究问题的同时，窥探一下浏览器的内部世界。","date":"2021-01-24T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/元素remove和mouseenter的怪癖\\"BUG\\".md","filePath":"content/blog/元素remove和mouseenter的怪癖\\"BUG\\".md"}'),Ed={name:'content/blog/元素remove和mouseenter的怪癖"BUG".md'};function Nd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>诡异的问题</h2><p>在工作中遇到这样一个问题：一个场景是当鼠标移入某个元素时，元素左上角需要显示一个关闭的x，鼠标移出某个元素时关闭的x消失。手头的这份代码的实现原理是，当鼠标移入指定元素时，触发mouseenter事件，将x的元素append进DOM树，鼠标移出后，触发mouseleave事件，将x元素remove。咱们暂且不去评论这个下等马的实现方式。在这段逻辑中有一个比较特别的地方，目标元素内部还有一个子元素，当这个子元素被点击时，需要移除掉，这个时候诡异的事情就发生了，当鼠标移入目标元素，到子元素上时，点击子元素，子元素移除(Element.remove())，此时鼠标移出父元素，右上角的X没有消失。</p><p>通过测试发现，mouseenter和mouseleave确实都正确触发了，但是这个x确实还在。再经过仔细的观察和对比发现，其实并不是x没有移除，而是mouseenter事件在子元素移除后，又触发了一次，导致产生了两个x元素，当mouseleave的时候，预想中的那一个被正确移除了，但是额外的那个依旧存在，这时问题的本质就出现了：子元素移除，会触发父元素上绑定的mouseenter事件。为了验证自己的推测，笔者写了一个简单的测试页面，结果如图：</p><p><img src="https://www.im6767.top/articlePlates/1611496612387.gif"></p><p>注意看控制台信息，当鼠标移入红色背景色的元素时，触发到了mouseenter事件，右侧控制台打印出一条信息。当左上角子元素移除时，控制台信息数量变成了2。如果你有兴趣，可以自己写测试页面测试一下。由于此测试页面不具有理解难度，这里不再给出测试步骤。</p><p>这个显然和我的认知冲突，我尝试查找了很多文档和论坛，几乎没有地方提到过这个细节。出于好奇我在火狐和IE上同样运行了测试代码，结果火狐和chrome行为保持一致，而IE和我的预想是相同的，仅仅在鼠标移入父元素时触发了一次，子元素移除并没有触发。这是一个和浏览器具体实现密切相关的问题，但是确实没有办法得到一个对此行为的合理解释。当从已知的途径中无法得到正确的解释，我不得不自己去探求其更深一层的原因了。</p><h2>宇宙第一浏览器——chrome</h2><p>作为全宇宙最好用的浏览器，chrome的开源就是其最大的特点，因此笔者决定从chrome源码中寻找答案。关于如何正确处理chrome源码的相关资料很多，但是大多都显得笼统和简略，对于熟练的C++开发者来讲没有难度，但是对于诸如我们这样的入门者这些资料显得过时和粗略了。笔者这里借助这个机会，记录下自己在整个过程中的关键步骤，以供参考，帮助有类似需求的人完成chrome的源码编译。请注意，以下内容均在windows10系统环境下完成，mac等非windows环境下仅供参考。</p><h4>Visual Studio 2019</h4><p>关于IDE的选择当然是Visual Studio，这也是google官方推荐的IDE。不得不说微软毕竟是微软，真的很会做IDE。这部分没什么好说的，进入官网或者<a href="https://visualstudio.microsoft.com/zh-hans/vs/" rel="noopener noreferrer" target="_blank">点击这里</a>下载最新版本的Visual Studio，然后安装。一般不用做什么改动，按照默认一步一步往下就可以。一般不建议更换安装路径，避免编译时找不到文件。</p><h4>depot_tools</h4><p>depot_tools是google提供的一个集成化的工具，用来辅助代码获取等工作。<a href="https://storage.googleapis.com/chrome-infra/depot_tools.zip" rel="noopener noreferrer" target="_blank">点击这里</a>下载压缩包，完成后解压，任意路径都可以。例如解压到E:\\chrome下。接着要将其添加进入环境变量Path中。特别注意请将该路径放置在环境变量的最前面，如果你的电脑中安装了python的相关环境，一定要放在他们的之前。然后在系统环境变量中添加<span style="color:rgb(51, 51, 51);">DEPOT_TOOLS_WIN_TOOLCHAIN，值为0。最后进入depot_tools的安装目录，cmd中执行gclient即可。</span></p><h4>前置条件</h4><p>以上和以下步骤需要有的前提条件需要说明：第一，你需要有良好的网络环境，这个是指在通过工具能保持一定网速、长时间不间断的访问谷歌，否则接下来的步骤会让你抓狂。第二，你需要有一台配置过得去的PC，配置决定你所花费的时间。第三，你需要有足够的忍耐度，失败是不可避免的，新东西的探究是建立在快乐的基础上，如果失败容易让你暴躁，那么请不要再继续尝试下面的步骤了。</p><h4>获取代码</h4><p>接下来就是要开始获取chrome浏览器的源代码了。在gclient成功之后，我们创建新的目录</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">mkdir</span> chromium &amp;&amp; <span class="hljs-built_in">cd</span> chromium
</pre><p>接着</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-attribute">fetch</span> --<span class="hljs-literal">no</span>-history chromiumn
</pre><p>注意--no-histroy，这表明你不需要历史版本的代码，只需要获取最新的chrome，这将很大程度上减少你需要获取的代码。接着就是漫长的等待，取决于你的网速快慢。一般需要获取的内容大小是4个多G，获取过程分为两个部分，从控制台的输出内容中就能看出，第一阶段显示进度，这个过程是不能停止的。假如发生了断网、或者你结束了进程、或者电脑重启等等，你将只能重复上述步骤，重新来过，笔者在这个过程中下载了6次才完成。第二个阶段将会获取很多文件内容，不知道为何这个过程失败的几率更大， 一般都是因为网络返回400引起的，这个时候如果出现了错误，可以使用gclient sync同步就可以了，不必要再去fetch来经历痛苦的下载。</p><p>下载完毕后，将会自动生成src文件夹，我们进入src目录。</p><h4>生成编译文件</h4><p><span style="color:rgb(51, 51, 51);">Chromium使用Ninja作为编译工具,使用GN生成.ninja配置文件</span></p><p><span style="color:rgb(51, 51, 51);">输入如下gn args命令,在out\\mybuild目录下创建编译所需配置文件</span></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">gn</span> <span class="hljs-built_in">args</span> out\\mybuild
</pre><p>执行完毕后，将会打开一个记事本文件，将以下内容粘贴进入，保存。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-attr">use_jumbo_build</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">enable_nacl</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">target_cpu</span> = <span class="hljs-string">&quot;x64&quot;</span>
<span class="hljs-attr">symbol_level</span> = <span class="hljs-number">2</span>
<span class="hljs-attr">blink_symbol_level</span>= <span class="hljs-number">2</span>
<span class="hljs-attr">is_debug</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">ffmpeg_branding</span> = <span class="hljs-string">&quot;Chrome&quot;</span>
<span class="hljs-attr">proprietary_codecs</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">is_component_build</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">dcheck_always_on</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">is_official_build</span> = <span class="hljs-literal">false</span>
</pre><p>略微解释一下上面的内容。这些是编译的一些参数，其中比较关键的有三个地方：symbol_level，blink_symbol_level和is_debug。symbol_level和blink_symbol_level分别有三个值：0,1,2，他们的区别是，0的时候不生成调试符号，此时代码编译速度是最快的。1代表调试符号不包含源代码信息，不能进行源代码级别的调试，编译速度稍慢。2代表完整的调试符号，可以进行源代码级别的调试，编译速度是最慢的。一般网上给出的推荐配置都是0，这个比较坑，你有可能在经历了漫长编译，终于兴致勃勃的打开了代码，打上断点，发现IDE提示你无法命中断点。而blink_symbol_level则是指是调试blink的等级。blink在你对chrome代码稍有了解后你就会发现，和前端知识中相关的精华部分，都是blink部分的内容，例如DOM树，例如各种事件等等，所以如果需要调试底层的实现，这两个都需要设置为2。is_debug如果为true，编译为debug版本，会有调试信息输出，否则是release版本。上述配置是笔者编译时使用的配置，可以作为推荐参考，从笔者使用来看，该有的都有了。更多的关于编译相关的配置，可以参考google官方<a href="https://www.chromium.org/developers/gn-build-configuration" rel="noopener noreferrer" target="_blank">配置说明</a>或者<a href="https://gclxry.com/article/chromium-build-args/" rel="noopener noreferrer" target="_blank">这篇博客</a>。</p><h4>开始编译</h4><p>编译使用Ninja命令进行处理</p><pre class="ql-syntax" spellcheck="false">ninja -j <span class="hljs-number">6</span> -C <span class="hljs-keyword">out</span>/mybuild chrome
</pre><p>命令中-j后面的数字表示编译时使用的进程数，越多编译速度越快，但是低配电脑使用多进程可能出错。个人经验PC有几个核心就使用几个线程，笔者的电脑是6核，所以这里使用6。</p><p>编译过程非常漫长，笔者编译使用了五个半小时左右。不过编译过程是允许增量编译的，可以中途停止，或者出现报错后，解决完错误，再次使用上述命令继续编译。</p><h4>查看编译结果</h4><p>如果上述过程都顺利完成，在out/mybuild目录下就可以找到chrome.exe，就是我们编译生成的浏览器了，愉快的运行它试试吧。如果在整个过程中遇到了问题，你需要在网上找找答案，因为笔者整个过程顺利的完成了，并没有遇到太多的困难。顺便说一句，百度能找到的答案确实有限，或许google才是你需要的。</p><h4>开始调试chrome</h4><p>chrome代码的调试我们使用第一步下载的Visual Studio， 打开代码路径，生成解决方案。在这之前我强烈推荐使用gn的命令行工具进行解决方案的生成，Visual Studio在打开调试chrome时，真的很容易卡死，闪退。</p><pre class="ql-syntax" spellcheck="false">gn gen --ide=vs <span class="hljs-keyword">out</span>\\<span class="hljs-keyword">Default</span>
</pre><p>运行上述命令，将会针对Visual Studio生成解决方案。完成后，使用Visual Studio打开out\\Default下的all.sln即可。这样生成的模块非常非常多，以至于每次运行项目时Visual Studio都会加载9000多个模块，花费数分钟乃至数十分钟，且非常非常容易闪退。如果你对chrome源码有了更多的理解，你可以使用filter来过滤掉自己不关注的代码部分，而只是生成自己关注部分的模块，来提升体验，对于笔者这样的新手，不得不忍受上述问题了。</p><p>好了，关于chrome源码编译部分的内容到此结束，如果你需要更多更详细的内容，可以参考<a href="https://chromium.googlesource.com/chromium/src/+/master/docs/windows_build_instructions.md" rel="noopener noreferrer" target="_blank">google官方给出的chrome构建指南</a>来获取相关信息。</p><h2>开始探索BUG</h2><p>运行我们编译的chrome，使用chrome打开我们用于探究问题的测试页面。然后我们在chrome中按下Shift+Esc呼出chrome的控制台，查看下当前测试页面所对应的进程ID。</p><p><img src="https://www.im6767.top/articlePlates/1611667118921.png"></p><p>然后在Visual Studio中，&quot;调试&quot;→&quot;附加到进程&quot;选择对应进程ID的进程，点击&quot;附加&quot;。</p><p><img src="https://www.im6767.top/articlePlates/1611667670483.png"></p><p>然后就可以愉快的在代码中打断点调试了。那么如何确定自己的断点要打在什么位置呢？这个就需要自己分析了，这里提供一个google官方的code search工具，<a href="https://source.chromium.org/chromium" rel="noopener noreferrer" target="_blank">点击这里</a>查看。在这里你可以搜索关键词，结果将会为你展示相关代码所在的文件位置。例如，在本次试验中实际上有两个关键操作：removeChild和mouseenter，可以通过code search工具来搜索这两个关键词，找到对应地代码位置，然后转向我们的本地代码，搜索打开对应地文件，打上断点，操作页面进入断点，然后一步一步发现线索。</p><p>code search开始使用时大概率是懵逼的，因为chrome实在是太庞大了。很多C++相关熟练开发人员都表示，chrome整个项目庞大到学习起来很吃力。我们作为了解者，并不需要深入理解，窥其一隅即可。</p><p>在上面提到的这个怪异的行为中，为了排除其他事件干扰，我使用了一个比较好用的办法：找到了preventDefault方法的内部实现，然后在测试代码中mouseenter事件中调用了e.preventDeault()，成功命中了断点，然后一步步向上追踪。具体的debug过程不再详细叙述，直接进入结果。最终我们追踪至web_frame_widget_impl.cc中：</p><pre class="ql-syntax" spellcheck="false">void WebFrameWidgetImpl::BeginMainFrame(base::TimeTicks last_frame_time) {
  TRACE_EVENT1(<span class="hljs-string">&quot;blink&quot;</span>, <span class="hljs-string">&quot;WebFrameWidgetImpl::BeginMainFrame&quot;</span>, <span class="hljs-string">&quot;frameTime&quot;</span>,
               last_frame_time);
  DCHECK(!last_frame_time.is_null());
  CHECK(LocalRootImpl());
<p>  <span class="hljs-comment">// Dirty bit on MouseEventManager is not cleared in OOPIFs after scroll</span>
  <span class="hljs-comment">// or layout changes. Ensure the hover state is recomputed if necessary.</span>
  LocalRootImpl()
      -&gt;GetFrame()
      -&gt;GetEventHandler()
      .RecomputeMouseHoverStateIfNeeded();</p>
<p>  <span class="hljs-comment">// Adjusting frame anchor only happens on the main frame.</span>
  <span class="hljs-keyword">if</span> (ForMainFrame()) {
    <span class="hljs-keyword">if</span> (LocalFrameView* view = LocalRootImpl()-&gt;GetFrameView()) {
      <span class="hljs-keyword">if</span> (FragmentAnchor* anchor = view-&gt;GetFragmentAnchor())
        anchor-&gt;PerformPreRafActions();
    }
  }</p>
<p>  base::Optional&lt;LocalFrameUkmAggregator::ScopedUkmHierarchicalTimer&gt; ukm_timer;
  <span class="hljs-keyword">if</span> (WidgetBase::ShouldRecordBeginMainFrameMetrics()) {
    ukm_timer.emplace(LocalRootImpl()
                          -&gt;GetFrame()
                          -&gt;View()
                          -&gt;EnsureUkmAggregator()
                          .GetScopedTimer(LocalFrameUkmAggregator::kAnimate));
  }</p>
<p>  PageWidgetDelegate::Animate(*GetPage(), last_frame_time);
  <span class="hljs-comment">// Animate can cause the local frame to detach.</span>
  <span class="hljs-keyword">if</span> (!LocalRootImpl())
    <span class="hljs-keyword">return</span>;</p>
<p>  GetPage()-&gt;GetValidationMessageClient().LayoutOverlay();
}</p>
</pre><p>关键就是在第一处注释那里：为了确保hover <span class="hljs-keyword">state</span>计算正确，将会在layout change之后重新执行相关逻辑。下面的代码中RecomputedMouseHoverStateIfNeeded()方法中会触发mouseenter事件。据此我们可以得到如下猜测：布局改变，为了hover等状态正确实现，将会重新计算hover state，这期间触发了mouseenter。也就是说，当布局改变时，会重新计算一下布局改变区域内鼠标位置，和鼠标位置相关元素上的mouseenter事件会被触发，这是因为mouseenter的实现原理造成的。(略微说明一下，事实上浏览器计算hover或者mouseenter事件都基本是一个思路：鼠标移动的时候判断鼠标位置，当鼠标位置和某个元素重合，或者边界区域发生运动时，触发对应地事件)。我们是否可以通过前端来观察到这个过程，或者初步验证我们的结果？答案是可以，利用浏览器调试工具中的performance：</p><p><img src="https://www.im6767.top/articlePlates/1611670036417.png"></p><p>是不是和我们的推断很一致呢？那我们组织语言，可以对以上问题得到这样一个总结：<strong>当发生布局改变时，浏览器会在必要的情况下重新计算hover state，这导致相关联元素上如果绑定了mouseenter事件，将会被浏览器触发。</strong>如果感兴趣，你可以在body等元素上都绑定mouseenter事件，会发现他们将会被依次触发。而且他们的触发也会有先后顺序。这里卖个关子，大家可以写代码自己测试一下，至于为什么先后顺序是这样，实际上没有太多意义，不过源码会回答你这个问题:D</p><h2>结束吧</h2><p>事实上，这个问题到底是不是一个BUG呢？笔者个人观点依旧认为这是一个BUG。因为从主观认知来讲，鼠标确实始终没有离开目标元素，所以根本不存在再次进入元素的说法，也就不应该触发mouseenter了。令人遗憾的是，当笔者准备去chrome提交BUG的地方进行询问时，被告知需要注册google账号，但是我的手机号无法收到验证码。事实上笔者一开始就打算提个问题问问，但是由于没办法注册账号，才走上了源码这条路，但是最后发现还是需要有人解答这个问题。是时候通过其他渠道获取一个谷歌账号，问问这个问题了，或许自己真的是这个问题的第一个提出者。</p><p>另外，比起上面BUG的追踪，更让我感慨的是chrome源码的魅力。笔者是一个C++纯菜鸟，能力只能达到读读代码的程度，但是在chrome这个庞大的项目上的阅读，反而没有感受到太大的压力。比起chrome这个项目，自己平时构建的代码简单的如同玩具。站在巨人的肩膀上，愈发感觉到自己的渺小和无知。希望自己有足够的时间、能力和精力，打破浏览器构筑的环境壁垒，进入到浏览器的内部，来看看我们熟知的各种API更为底层的实现。</p><p><br></p>`,56)]))}const Id=A(Ed,[["render",Nd]]),Od=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Dd,default:Id},Symbol.toStringTag,{value:"Module"})),Rd=JSON.parse('{"title":"内联元素间不怎么引人注意的\\"间隙\\"","description":"","frontmatter":{"title":"内联元素间不怎么引人注意的\\"间隙\\"","summary":"工作中同事遇到一个代码样式差异的问题，进行过压缩和没有进行过压缩的html文件表现不一致——一些元素之间出现了意料之外的间隙。同事一眼就指出问题所在，自己却信誓旦旦说不会有这样的问题，结果确实是自己错了。既然是\\"打脸时刻\\"，那确实是应该好好记录下来。","date":"2020-12-27T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/内联元素间不怎么引人注意的\\"间隙\\".md","filePath":"content/blog/内联元素间不怎么引人注意的\\"间隙\\".md"}'),Md={name:'content/blog/内联元素间不怎么引人注意的"间隙".md'};function Vd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>不容易注意到的细节</h2><p>我们直接从一段很普通的html代码入手：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;&lt;<span class="hljs-name">span</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;&lt;<span class="hljs-name">span</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>一个块级元素中包含两个内联元素，它在浏览器中的表现是什么样的呢？任何一个前端开发都能很快想象出它的样子：</p><p><img src="https://www.im6767.top/articlePlates/1609054318433.png"></p><p>符合我们的预期。但是这样的代码有点&quot;奇怪&quot;。当然我这里的奇怪是带有个人感情色彩的奇怪，并不是指它“不合规矩”。它们是一行的。也就是说，所有的html标签都在一行代码中完成，有点扁平了。通常，我们可能会将代码写成这样，以便于拥有更好的层次感：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>笔者在此不讨论两种写法在代码可读性上的优势和劣势，只是从个人浅薄的开发经验中得出，大多数前端开发都喜欢后者这种书写格式，尽管有些代码中两种书写方式都能见到。从表面来看，这两种方式并没有多大区别，你的脑海中能想象它的样子吗？</p><p><img src="https://www.im6767.top/articlePlates/1609056631277.png"></p><p>事实上它的样子是上面这样。有注意到不同吗？是的，在hello!的感叹号后面，多出了一个小的间隙。在给出答案以前，你是不是知道这样的写法确实会导致一个间隙的出现？如果你不知道，那么很遗憾，你对于html的了解程度可能和笔者一样半斤八两，更难听点，和我一样无知。</p><p>是的，我也是第一次注意到这二者代码之间的差异。日常中其实两者代码书写都能见到。如果经过html压缩的代码，形式一般都是上面那种，而开发中的书写的代码是下面这种。当相邻的内联元素代码构建时不在同一行，或者说中间具有一个换行时，两个元素之间会出现一个细小的间隙。</p><h2>间隙的本质</h2><p>这个间隙到底是什么？其实很容易对这个现象做出一个合理的猜测：是一个空格。这个证明非常容易，我们可以使用文本选中大法：</p><p><img src="https://www.im6767.top/articlePlates/1609163261261.jpg"></p><p>中间的间隙区域是可以单独选中的，说明它确实是一个&quot;字符&quot;而非padding或者margin产生的布局间隙。如果还不相信可以复制粘贴一下，就会发现确实是一个空格。也就是说，在html中，标签间的换行会产生一个空格，空格使得元素之间出现间隙，内联元素之间可以明显观察到这个间隙。</p><p>多半情况下我们不会注意到这个间隙，就如同上面的例子。既然我们想打印hello! Cyberpunk!，通常的做法是这样：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>hello! Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>文本\uFEFF在一个内敛标签中全部处理完毕，两个独立的单词之间手动打上一个空格。你也许会想让两个单词显示不同的颜色而包含在两个内敛标签中，然后设计样式，但是因为两个单词之间确实需要一个空格，所以也会手动打上一个空格。除非你有一天突然想让一个单词中某一两个字母有不同的颜色，才会去分别用内敛元素包裹他们，同时你还要换行，似乎满足这些条件的场景很少，所以大多数人都不会注意到这个问题。</p><p>有一个比较常见的场景可能会有这样的情况：两个img元素不出现在同一行的时候，这种情况下就比较明显了。</p><p><img src="https://www.im6767.top/articlePlates/1609164687424.jpg"></p><p class="ql-align-center"><em>(上方为img元素处于同一行，下方为img元素不处于同一行)</em></p><p>更进一步地，笔者在Chrome，Firefox和IE6以上的各个版本都进行了尝试，所有浏览器的表现都是一致的，有一条间隙。</p><h2>解决问题</h2><p>探究到了间隙的本质事实上是一个空白字符，那么如何消灭这个空白呢？事实上有很多人都遇到过这个问题，而且给出了很多解决方案，我们在这里简单总结一下。</p><h4>巧妙地书写方式</h4><p>第一种是利用一些特别的书写方式规避这个问题，如下：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>
    \uFEFF&gt;&lt;<span class="hljs-name">span</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
\uFEFF<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>或者这样：</p><pre class="ql-syntax" spellcheck="false">\uFEFF<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-comment">&lt;!--
 \uFEFF--&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
\uFEFF<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>既保持了一定的代码可读性，又消除了这个间隙，而且没什么副作用。如果硬要说有的话，应该就是写法会有一些奇怪。</p><h4>让空白字符咻！消失！</h4><p>既然我们已经探究到了空白字符的本质是一个空白字符，那么让字符消失最好的方法是什么？是的，设置font-size为0就可以了。没有大小它就不会占格子。不过要注意，font-size是一个可继承的属性，我们在设置p标签上的font-size时，会影响到span标签的font-size，所以针对span我们还需要单独设置合适的font-size。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size:0;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size:16px;&quot;</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size:16px;&quot;</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>这样就消除了间隙。\uFEFF笔者这里使用行内样式进行设置，我们同样可以定义类名配合CSS解决，这里不再具体叙述。不过这种改法有一个明显的副作用：破坏了字体的继承性，需要使用额外的代码和样式来控制，如果你有点追求完美的解决方案，这个方案显然有一点点刺眼。</p><h4>利用margin的负值消除</h4><p>margin设置负值可以减小元素间隙，所以我们可以巧妙通过负值来完成这个工作。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>hello!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left:-5px;&quot;</span>&gt;</span>Cyberpunk!<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</pre><p>这个-5px是笔者经过测试得到的一个大致数值。不过这个解决方案可谓是所有解决方案中的下等马。一个原因是我们得到的只是估计值，作为估计值就必须面临估计不准确的情况，只是肉眼上看起来消除了间隙而已。另一个原因是这个估计值很容易被影响：当字体大小发生变化时，这里的数值也需要对应发生变化；如果字体不同，例如等宽字体和非等宽字体，所需要的数值也是不一样的。总的来说，利用margin负值属于&quot;硬凑&quot;方法，不够灵活。</p><h2>不成问题的问题</h2><p>所以，这个问题到这里就结束了。这确实是一个不是什么问题的问题。我被这个问题惊异到的原因是，我试图将一个老的项目进行自动化处理，其中一项就是html压缩。这样看来，html压缩带来的一个隐患就是布局可能会和原来不同。所以说，改动还是要谨慎啊。有人提到很久之前CSS有关于此问题的提案，建议以某种CSS属性来消除这个间隙，但是很遗憾目前为止没有任何一个浏览器实现该提案。不过，只要明白其中的问题，寻找合适的解决方案，还是能够很好地规避这个问题:D</p>`,40)]))}const $d=A(Md,[["render",Vd]]),Ld=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Rd,default:$d},Symbol.toStringTag,{value:"Module"})),Hd=JSON.parse('{"title":"初识Flutter与\\"月知\\"","description":"","frontmatter":{"title":"初识Flutter与\\"月知\\"","summary":"有需求就会有解决几个月以前，和女友聊天，偶然看到她使用的一款用来记录女生生理周期的App，和现在大多App一样，充满了广告。从开屏到进入界面，五花八门的广告一直出现，我看着都头疼。虽然实际上有蛮多的替代软件可以选，但是它们不是功能太重就是广告也多，而需求的根本是：简洁，易用的App功能。既然如...","date":"2023-07-07T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/初识Flutter与\\"月知\\".md","filePath":"content/blog/初识Flutter与\\"月知\\".md"}'),zd={name:'content/blog/初识Flutter与"月知".md'};function Fd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2 id="有需求就会有解决" tabindex="-1">有需求就会有解决 <a class="header-anchor" href="#有需求就会有解决" aria-label="Permalink to &quot;有需求就会有解决&quot;">​</a></h2><p>几个月以前，和女友聊天，偶然看到她使用的一款用来记录女生生理周期的App，和现在大多App一样，充满了广告。从开屏到进入界面，五花八门的广告一直出现，我看着都头疼。虽然实际上有蛮多的替代软件可以选，但是它们不是功能太重就是广告也多，而需求的根本是：简洁，易用的App功能。既然如此，我们动手解决。</p><h2 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h2><p>这个需求当然可以有一万种解法，web，小程序等，但是我更倾向于App，是因为我没写过，正好借此机会玩一玩Flutter。其实关于Flutter或者Dart中文资料的探讨并不多，好在官方文档还算详细，顺着跑就行。</p><p>安装Flutter，Dart，笔者的目标设备是安卓，所以还需要安装Android Studio。一些环境变量的配置这里就不再多说，和大多数的语言配置大致相同，Flutter的环境变量配置好之后，其提供了Flutter Doctor命令进行开发前的相关检测，如果你缺少某个模块或者配置，该环节会进行提示，对应进行处理即可。小提示：基于安卓的开发还需要运行Android Studio进行部分必要的内容下载。</p><p>准备OK之后选择IDE，笔者使用VScode，也可以直接用Android Studio或者其它，安装好必要的插件之后，在VScode的Command中键入flutter，将会提示可以选择Flutter: New Project，新建项目即可。这里有一些插件以及包可能获取错误，需要使用对应的镜像加速地址处理。</p><p>完成之后，会生成基本的目录结构</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1689240583178-cacf7619-0f7f-4b7f-a6ce-6cd7082d376b.png" alt=""></p><p>不同的平台生成工具在对应不同的目录下，我们实际开发的代码位于lib中。在lib里，目录结构类似于前端开发结构，笔者这里建立了components（存储公共组件），screens（存储页面）, store（共享数据），utils（公用方法与内容）。main.dart就是主入口。了解代码目录的组成结构之后，就可以进行对应地开发了。</p><h2 id="dart和material" tabindex="-1">Dart和Material <a class="header-anchor" href="#dart和material" aria-label="Permalink to &quot;Dart和Material&quot;">​</a></h2><p>flutter的官方语言是Dart，虽然有人说Dart是类javascript的语言，但是从笔者感觉来看还是比较大的，可能接近typescript的说法更准确一些。Material则是google为flutter构建页面推出的一个框架包，内部包含了很多基本结构框架和组件，可以使用。</p><p>如果你是一个React的开发者，其实flutter的开发并不复杂。对于前端来讲，界面结构的布局是由html文档和css样式组成的，他们是一种结构化的文档文本格式，组合形成界面结构。而在flutter则是用组件进行嵌套，有点像是手写DOM树结构的感觉，刚开始可能会觉得别扭，但是相对是容易理解且易上手的，例如也有熟悉的flex布局等。不过样式控制不像前端这样分离，而是组合进了组件之中，并且不同的布局方式不是改变组件的属性，而是直接使用对应组件。举例来说，前端中使用flex布局需要在对应的元素上修改display样式为flex，但是在flutter中则是使用Flex(...)组件进行布局，且布局组件上不能直接应用例如背景色之类的，而是需要Container之类的容器包裹，然后设置Container的样式属性等等......。不过其布局逻辑和web前端的逻辑基本类似，这也有助于很快上手Flutter。</p><p>还有一些细节，例如在flutter中，对于元素超出父元素的溢出情况，通常是作为异常进行处理，而非前端开发中那样，可以通过样式属性进行控制。</p><h2 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h2><p>和Nodejs类似，Flutter，更准确的说是Dart，也有自己的一套包管理系统，pub。通过flutter pub add等命令可以添加所需要的依赖包，依赖管理和部分配置在pubspec.yaml中，类似于前端的package.json文件。下载对应的包后，通过import导入就可以使用，这和绝大多数语言的包管理机制类似。</p><h2 id="月知" tabindex="-1">月知 <a class="header-anchor" href="#月知" aria-label="Permalink to &quot;月知&quot;">​</a></h2><p>对flutter熟悉之后，接下来就建立一个项目进行练手，也就是为了解决上面最开始的需求问题。实际上这个问题的需求很容易整理：一个日历，能够根据时间标记出周期以及周期内的一些状态。代码开发这里不再列举，如果有需要过段时间链接到github时可以自取，因为笔者此时也是一个新手，所以代码可能不太符合规范要求，见谅。</p><p>在flutter进行android开发时调试有两种方式：利用android的虚拟机或者利用实际的android设备，如果你有对应设备，当然建议使用后者。正确连接安卓设备后，运行命令flutter run可以在android设备上运行调试模式的app。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1689651841188-eb0cc3b6-a5e9-46d1-a7df-085fea180d15.png" alt=""></p><p>当然整个页面构建的过程中按照对应的语法进行处理即可，笔者开发的过程中没有遇到特别难以处理的问题，大多数是一些新的知识结构学习的问题。</p><p>需要注意的是，在安卓设备方面，关于不同尺寸设备适应的问题实际上比前端要更为繁杂一些，现在不同的移动设备显示分辨率规格较多，但是大致的处理思路是相同的，如果有需要，请按照安卓开发的设备适配方案进行处理。</p><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><p>笔者用了三个周末时间完成了对应的开发和调试，一个简单版本的app就完成了，起名月知。替换app图标之后，运行flutter build apk --release，得到发布的包，安装，完成！</p><p>试用了一下，还是满足她的需求的，而且启动快速无广告，简洁可以自定义，ok的。</p>',24)]))}const Jd=A(zd,[["render",Fd]]),Gd=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Hd,default:Jd},Symbol.toStringTag,{value:"Module"})),Wd=JSON.parse('{"title":"前端与图形学——SVG","description":"","frontmatter":{"title":"前端与图形学——SVG","summary":"前端总是和图片、文字有千丝万缕的关系。在众多的图片类型中，SVG似乎表现得\\"与众不同\\"一些。或许是因为SVG天生就是W3C制定开发的，这个XML格式定义的图像格式文件和前端完美兼容，用它作为前端图形学的第一步非常合适。","date":"2020-09-17T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/前端与图形学——SVG.md","filePath":"content/blog/前端与图形学——SVG.md"}'),Ud={name:"content/blog/前端与图形学——SVG.md"};function Bd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>简单聊聊SVG</h2><p>需要明确的是，SVG是一种图形格式。他是W3C制定的，利用XML语法定义的2D矢量图形格式。XML意味着JavaScript可以对它进行交互操作，并且可以利用CSS来控制它的样式效果，就像是写一个普通页面一样简单。不仅如此，SVG是矢量图形，其可以无限扩展。无论是多大的尺寸，也不必担心它会失真，所以其在很多绘图场景都有良好的表现。SVG是开源的，其出现对标了闭源的Flash这一在曾经无比辉煌的技术。然而随着多个浏览器厂商宣布暂停对Flash技术的支持，标志着Flash的时代已经过去，而SVG却被完美兼容使用至今。在浏览器日益强大的今天，基于浏览器已经能够创建出强大的图像，也发展出前端图形学。在图形学的学习之路上，或许SVG将会是一个很好的开始，因为它简单、强大、稳定并且具有良好的使用场景。</p><h2>直接开始</h2><p>在开始之前，我们默认掌握了HTML的知识，当然，作为前端开发者，这点是毋庸置疑的。当然我们还需要基本的XML的了解。XML非常容易理解和学习，并且拥有广阔的使用场景。它的学习总能让你想起HTML。XML有多种引入方式，你可以单独创建SVG格式文件，利用&lt;iframe&gt;或者&lt;object&gt;标签引入它。在HTML5被广泛支持的今天，最简单的引入方式就是直接使用SVG标签，放心，很多浏览器都支持这样使用。</p><pre class="ql-syntax" spellcheck="false">&lt;svg version=<span class="hljs-string">&quot;1.1&quot;</span>
     baseProfile=<span class="hljs-string">&quot;full&quot;</span><span class="hljs-built_in">width</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">&quot;200&quot;</span>
     xmlns=<span class="hljs-string">&quot;http://www.w3.org/2000/svg&quot;</span>&gt;
  &lt;<span class="hljs-built_in">text</span> x=<span class="hljs-string">&quot;150&quot;</span> y=<span class="hljs-string">&quot;125&quot;</span> font-<span class="hljs-built_in">size</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-built_in">text</span>-anchor=<span class="hljs-string">&quot;middle&quot;</span> <span class="hljs-built_in">fill</span>=<span class="hljs-string">&quot;black&quot;</span>&gt;SVG&lt;/<span class="hljs-built_in">text</span>&gt;
&lt;/svg&gt;
</pre><p>按照上例代码，我们就创建了一个SVG图。我们分析看看这个简单地SVG标签所包含的信息，对它有一个初步了解。</p><p>首先是像其它HTML标签一样，一个完整的&lt;svg&gt;标签，注意它是一个闭合标签。实例代码中包含几个属性：</p><ol><li>version表示svg应该遵守的标准规范，svg目前广泛使用的是1.1版本，这也是W3C推荐使用的版本，当然也可以指定1.0。</li><li>baseProfile也是一个svg标签特有的属性，它表示svg的作者认为的正确渲染图片内容所需要的最小svg语言描述。这个属性较为晦涩难懂。我们可以将其简单地理解为：表达你的渲染观点。它通常包含四个可选值，分别是none(作者并未设置表达观点)，full(正常概述，适合于PC)，basic(轻量级概述，适合于PDA)，tiny(更轻量级概述，适合于手机等设备)</li><li>width和height和其他HTML元素的对应属性含义相同，在用户的坐标系统中标识出宽度和高度。</li><li>xmlns是指XML Namespace，是为了避免svg解析时元素名冲突的问题。</li></ol><p>以上就是svg标签中带有的属性。svg可能略显复杂，其复杂度主要体现在繁多的属性和属性值很难记忆，但通常都容易理解。我们不需要记忆每一种属性，在需要使用时查询手册就可以。</p><h2>重点在SVG标签内部</h2><p>SVG内部就是我们要绘图的重点区域。SVG预先设定了一些形状以便使用者快速使用和操作，通过这些预先设定的形状，我们足以构建出丰富的效果。</p><ul><li>矩形 &lt;rect&gt;</li><li>圆形 &lt;circle&gt;</li><li>椭圆 &lt;ellipse&gt;</li><li>线条 &lt;line&gt;</li><li>折线 &lt;polyline&gt;</li><li>多边形 &lt;polygon&gt;</li><li>路径 &lt;path&gt;</li></ul><p>幸运的是，这些形状的使用非常简单且强大。笔者依次简单介绍他们的使用。这里，我们将上述的形状分为&quot;规则形状&quot;和&quot;不规则形状&quot;进行介绍。</p><h3>规则形状</h3><pre class="ql-syntax" spellcheck="false">&lt;svg&gt;
  &lt;<span class="hljs-built_in">rect</span> x=<span class="hljs-string">&quot;0&quot;</span> y=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-built_in">fill</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;SVG&lt;/<span class="hljs-built_in">rect</span>&gt;
  &lt;<span class="hljs-built_in">rect</span> x=<span class="hljs-string">&quot;0&quot;</span> y=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">&quot;250&quot;</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">&quot;30&quot;</span> style=<span class="hljs-string">&quot;fill:yellow;stroke-width:1;stroke:rgb(0,0,0)&quot;</span>&gt;SVG&lt;/<span class="hljs-built_in">rect</span>&gt;
    &lt;<span class="hljs-built_in">circle</span> cx=<span class="hljs-string">&quot;100&quot;</span> cy=<span class="hljs-string">&quot;50&quot;</span> r=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-built_in">stroke</span>=<span class="hljs-string">&quot;black&quot;</span> <span class="hljs-built_in">stroke</span>-<span class="hljs-built_in">width</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-built_in">fill</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;&lt;/<span class="hljs-built_in">circle</span>&gt;
  &lt;ellipse cx=<span class="hljs-string">&quot;300&quot;</span> cy=<span class="hljs-string">&quot;150&quot;</span> rx=<span class="hljs-string">&quot;200&quot;</span> ry=<span class="hljs-string">&quot;80&quot;</span> style=<span class="hljs-string">&quot;fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2&quot;</span>&gt;&lt;/ellipse&gt;
    &lt;<span class="hljs-built_in">line</span> x1=<span class="hljs-string">&quot;0&quot;</span> y1=<span class="hljs-string">&quot;0&quot;</span> x2=<span class="hljs-string">&quot;300&quot;</span> y2=<span class="hljs-string">&quot;300&quot;</span> style=<span class="hljs-string">&quot;stroke:rgb(99,99,99);stroke-width:2&quot;</span>&gt;&lt;/<span class="hljs-built_in">line</span>&gt;
  &lt;/svg&gt;
</pre><p>在&quot;规则形状&quot;的分类中，包含矩形，圆形，椭圆三个部分。他们都特指具体的形状，或者可以说他们的图形构建方式都是&quot;统一的&quot;。上述是构建三种形状的示例代码。仔细思考，当我们去绘制矩形，圆，椭圆这些特定形状的时候，我们需要确定什么？无非是&quot;位置&quot;和&quot;尺寸&quot;。所以，这一类图形绘制最主要的也是这两个要素。</p><p>对于矩形来讲，属性x，y是指矩形的左侧、顶端位置，width和height则是矩形的宽高。在这些属性确定的情况下，我们足以创建一个特定的矩形。</p><p>椭圆和圆则略有不同。对于圆来讲，其位置的确定总是和圆心有关。所以cx和xy构成了圆的圆心位置，剩下的r或者rx、ry则是圆或者椭圆的半径值。例如上述举例中的circle标签属性表示，创建一个圆，圆心位置距离左边界100px，距离上边界50px，圆心和半径确定的情况下，我们也足以确定一个特定的圆形。</p><p>线条(线段)更为简单。两点确定一条线段，所以我们只需要[x1，y1]和[x2，y2]两个点坐标即可绘制一条线条。</p><p>除此之外，我们还看到了fill属性和style属性。fill表示图形内部的颜色，我们称这一类属性为外观属性。style属性和HTML标签的style属性用法相同，他允许用CSS样式表的形式来设置外观。所以我们能够看到在style中我们也可以设置fill等属性。绝大多数的外观属性都可以转化成style中的样式。和HTML不同的是，HTML中已经不再建议用属性的方式设置样式，但是svg则没有要求。类似fill的还有stroke(边框外观)，更多的属性可以<a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute" rel="noopener noreferrer" target="_blank">通过点击</a>这里查看。总之，属性的设置和HTML并没有多大区别。</p><h3>不规则形状</h3><p>折线，多边形和路径我们分归至不规则形状。我们同样给出一个包含这三种形式的代码示例</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-string">&lt;svg</span> <span class="hljs-string">width</span> <span class="hljs-string">=</span> <span class="hljs-string">&quot;600&quot;</span> <span class="hljs-string">height</span> <span class="hljs-string">=</span> <span class="hljs-string">&quot;600&quot;&gt;</span>
    <span class="hljs-string">&lt;polyline</span> <span class="hljs-string">points=&quot;0,0</span> <span class="hljs-number">0</span><span class="hljs-string">,40</span> <span class="hljs-number">40</span><span class="hljs-string">,40</span> <span class="hljs-number">40</span><span class="hljs-string">,80</span> <span class="hljs-number">80</span><span class="hljs-string">,120&quot;</span> <span class="hljs-string">style=&quot;fill:white;stroke:red;stroke-width:2&quot;/&gt;</span>
  <span class="hljs-string">&lt;polygon</span> <span class="hljs-string">points=&quot;220,100</span> <span class="hljs-number">300</span><span class="hljs-string">,210</span> <span class="hljs-number">170</span><span class="hljs-string">,250</span> <span class="hljs-number">123</span><span class="hljs-string">,234&quot;</span>  <span class="hljs-string">style=&quot;fill:#cccccc;stroke:#000000;stroke-width:1&quot;/&gt;</span>
  <span class="hljs-string">&lt;path</span> <span class="hljs-string">d=&quot;M153</span> <span class="hljs-number">334</span>
      <span class="hljs-string">C153</span> <span class="hljs-number">334</span> <span class="hljs-number">151</span> <span class="hljs-number">334</span> <span class="hljs-number">151</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C151</span> <span class="hljs-number">339</span> <span class="hljs-number">153</span> <span class="hljs-number">344</span> <span class="hljs-number">156</span> <span class="hljs-number">344</span>
    <span class="hljs-string">C164</span> <span class="hljs-number">344</span> <span class="hljs-number">171</span> <span class="hljs-number">339</span> <span class="hljs-number">171</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C171</span> <span class="hljs-number">322</span> <span class="hljs-number">164</span> <span class="hljs-number">314</span> <span class="hljs-number">156</span> <span class="hljs-number">314</span>
    <span class="hljs-string">C142</span> <span class="hljs-number">314</span> <span class="hljs-number">131</span> <span class="hljs-number">322</span> <span class="hljs-number">131</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C131</span> <span class="hljs-number">350</span> <span class="hljs-number">142</span> <span class="hljs-number">364</span> <span class="hljs-number">156</span> <span class="hljs-number">364</span>
    <span class="hljs-string">C175</span> <span class="hljs-number">364</span> <span class="hljs-number">191</span> <span class="hljs-number">350</span> <span class="hljs-number">191</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C191</span> <span class="hljs-number">311</span> <span class="hljs-number">175</span> <span class="hljs-number">294</span> <span class="hljs-number">156</span> <span class="hljs-number">294</span>
    <span class="hljs-string">C131</span> <span class="hljs-number">294</span> <span class="hljs-number">111</span> <span class="hljs-number">311</span> <span class="hljs-number">111</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C111</span> <span class="hljs-number">361</span> <span class="hljs-number">131</span> <span class="hljs-number">384</span> <span class="hljs-number">156</span> <span class="hljs-number">384</span>
    <span class="hljs-string">C186</span> <span class="hljs-number">384</span> <span class="hljs-number">211</span> <span class="hljs-number">361</span> <span class="hljs-number">211</span> <span class="hljs-number">334</span>
    <span class="hljs-string">C211</span> <span class="hljs-number">300</span> <span class="hljs-number">186</span> <span class="hljs-number">274</span> <span class="hljs-number">156</span> <span class="hljs-number">274</span><span class="hljs-string">&quot;
    style=&quot;fill:white;stroke:red;stroke-width:2&quot;/&gt;</span>
<span class="hljs-string">&lt;/svg&gt;</span>
</pre><p>\uFEFF折线和多边形具有points属性，它定义了绘制的坐标数列。在polyline中，将依次连接points中的每个坐标点，形成曲折的线段。points中的坐标x和y通常以逗号隔开，尽管这不是必须如此。</p><p>创建多边形时，肯定是需要闭合的，所以与polyline不同，polygon则会连接做标数列中的最后一个坐标和第一个坐标，形成闭合形状。其他的外观属性和上面提到的规则形状中的外观属性设置别无二致，</p><p>路径就略显繁琐了。如果没有svg编辑器，复杂的路径构建肯定会让人感到痛苦。上述示例代码中的path构建了一个螺旋线，你可以将代码拷贝至本地代码查看效果。</p><p>路径中允许使用以下命令创建路径</p><ul><li>M = moveto（移动至某个坐标，类似于先移动至起点，是必须存在的）</li><li>L = lineto(直线连接坐标)</li><li>H = horizontal lineto(x沿着x轴移动一段位置)</li><li>V = vertical lineto(y沿着y轴移动一段位置)</li><li>C = curveto(三次贝塞尔曲线)</li><li>S = smooth curveto(简化的贝塞尔曲线)</li><li>Q = quadratic Bézier curve(二次贝塞尔曲线)</li><li>T = smooth quadratic Bézier curveto(简化的二次贝塞尔曲线)</li><li>A = elliptical Arc(椭圆弧)</li><li>Z = closepath(闭合路径，从终点到起点以直线连接闭合)</li></ul><p>其中的很多命令都需要一定的数学基础，抛开这些不讲，路径的绘制还是相当繁琐。所以大多数时候用svg编辑器来完成绘制工作即可。</p><p>以上就是在svg内绘制图形的基础内容，当然还有很多标签即特性没有涉及，例如在svg中绘制文本，使用text标签就可以。总体来讲，svg就是用XML标签说明图片该怎么画，然后让浏览器来绘制即可。在这样的特性下，svg获得了很多特性，例如文件体积小，可以随意放大缩小不失真，图片内容可操作，可搜索等。在前端可视化的领域中，特别是地图信息的展示，svg的用途还是非常广泛的。</p><h2>一个简单的SVG实践</h2><p>作为增强用户体验的工具，SVG在构建简单视图的基础上增加了强大的视觉效果，例如滤镜、动画等。特别是动画效果，为svg创造了无限可能。关于滤镜和动画效果的内容非常有趣，但也显得有一些难度，作为入门文章，这里不再进行详细叙述。如果有机会，笔者将另起文章详细解释。</p><p>现在很多APP或者网页都会使用&quot;骨架屏&quot;技术，即页面尚未加载完成之前，渲染出页面的大致骨架，弱化白屏时间带来的负面体验。本小站也有骨架屏的体现，如果你点开文章加载比较缓慢时，能够看到灰色的站位色块。实现骨架屏有很多种方式，可以利用gif图，在react或者vue中，完全可以自己构建骨架屏对应地组件。但是gif图容易很大，react或者vue还是面领着需要先加载组件的问题，所以这种情况下选用svg图绝对是一个不错的选择。这里向大家推荐一个小工具，可以可视化的创建合适自己的骨架屏。点击<a href="https://skeletonreact.com/" rel="noopener noreferrer" target="_blank">这里查看</a>。</p><p>通过创建骨架屏的过程，了解svg的组成，和一些较为高级的使用技巧，也是一个不错的选择。</p>`,34)]))}const Yd=A(Ud,[["render",Bd]]),Xd=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Wd,default:Yd},Symbol.toStringTag,{value:"Module"})),Zd=JSON.parse('{"title":"前端与图形学——贝塞尔曲线","description":"","frontmatter":{"title":"前端与图形学——贝塞尔曲线","summary":"在计算机中绘制图形是痛苦的，特别是曲线的绘制。当你握着鼠标在屏幕上绘制出颤颤巍巍的曲线时，你一定怀念纸笔时代的自由。如何在电脑上绘制曲线？或者说如何用简洁的公式描述曲线？Pierre Bézier给出了强大的数学工具。在前端开发的过程中，你总是绕不开贝塞尔曲线，它简洁、优美而又强大。","date":"2020-10-15T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/前端与图形学——贝塞尔曲线.md","filePath":"content/blog/前端与图形学——贝塞尔曲线.md"}'),Qd={name:"content/blog/前端与图形学——贝塞尔曲线.md"};function Kd(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>贝塞尔曲线</h2><p>贝塞尔曲线是在1962年由法国工程师皮埃尔·贝塞尔(Pierre Bézier)广泛宣传和使用的数学工具。它主要用于进行汽车的主体设计。事实上1959年就有人根据伯恩斯坦多项式进行了图形化改造，试图通过控制少量的点，就能够生成平滑的曲线。到现在，贝塞尔曲线被计算机广泛用于曲线的绘制，甚至用于描述过渡状态。本文将简单介绍一下贝塞尔曲线。放心，尽管贝塞尔曲线的理解确实需要一定的数学基础，但它远比想象中的容易理解。</p><h2>一阶贝塞尔曲线</h2><p>我们从贝塞尔曲线最简单的形式开始。也就是一阶的贝塞尔曲线。对于一阶贝塞尔曲线，可以看到它是一条线段。</p><p><img src="https://www.im6767.top/articlePlates/1602770496068.webp"></p><p>这条直线是如何绘制出来的呢？一阶的贝塞尔曲线绘制的公式是:</p><p><img src="https://www.im6767.top/articlePlates/1602993340875.png"></p><p>P<sub>0</sub>和P<sub>1</sub>是起点和终点的坐标，就是图中左上和右下两个点的坐标，B<sub>1</sub>(t)是随着时间变化下图中移动的点的坐标。t就是时间。上面的绘制公式是如何推导出来的呢？一个较为容易理解的过程是这样的：</p><p>从P<sub>0</sub>到P<sub>1</sub>点之间的距离是P <sub>1</sub>-P <sub>0</sub>（当然从物理角度来讲，我们更应该称之为&quot;路程&quot;）。如果速度是v，时间是t，那么整个运动可以用公式来表示，<img src="https://www.im6767.top/articlePlates/1602993380012.png">所以我们能够由此推得v就等于等式左边除以t。</p><p>我们设中间移动点的坐标为P<sub>i</sub>，那么P<sub>i</sub>到起点P<sub>0，</sub>经过t<sub>0</sub>时间的路程应该是</p><p><img src="https://www.im6767.top/articlePlates/1603002641653.png">也就是我们上面得到的一阶贝塞尔曲线绘制的公式。我见可以简单理解为，一阶贝塞尔曲线就是沿着起点和终点，匀速运动走过的路径。好像叫它曲线也有点不大合理，因为他确实是直的。</p><p><br></p><h2>二阶贝塞尔曲线</h2><p>上面我们对一阶贝塞尔曲线进行了简单地讨论，但是这种描述似乎和我们想象的不一样。既然是曲线，一阶却绘制的是线段。这个问题在二阶的贝塞尔曲线中的讨论就会变得不同。同样地，我们首先给出一个二阶贝塞尔曲线的绘制图。</p><p><img src="https://www.im6767.top/articlePlates/1603007678714.gif"></p><p>图中红色的曲线就是我们绘制出的贝塞尔曲线，怎么样，它是不是有点像一条抛物线？我们先用文字简单描述一下二次贝塞尔曲线：从图中我们可以看到，我们首先定义两条线段，P<sub>0</sub>P<sub>1</sub>和P<sub>1</sub>P<sub>2</sub>，设P<sub>0</sub>P<sub>1</sub>上移动的点为Q<sub>0</sub>，P<sub>1</sub>P<sub>2</sub>上移动的点为Q<sub>1</sub>，Q<sub>0</sub>Q<sub>1</sub>组成一条线段。P<sub>i</sub>是Q<sub>0</sub>Q<sub>1</sub>上的一点。曲线就是随着变化一系列P<sub>i</sub>组成的点。它们只要满足一定的关系即可，那么关系是什么呢？这就是曲线绘制的关键：</p><p><img src="https://www.im6767.top/articlePlates/1603008901897.png">很难将上述比例式和动图联系起来？那可以试试下面这张图，我们截取某时刻的画面，来理解比例关系：<img src="https://www.im6767.top/articlePlates/1603009462720.png">这样，曲线图的绘制过程就大致如上图。仿照一阶的贝塞尔曲线，我们给出二阶的贝塞尔曲线推导：<img src="https://www.im6767.top/articlePlates/1603010335747.png">简单地多项式知识，并不涉及非常复杂的数学概念，是不是很简洁呢？</p><h2>三阶、四阶贝塞尔曲线</h2><p>通过针对一阶和二阶贝塞尔曲线的讨论，已经能够明白贝塞尔曲线的基本原理，更高阶的贝塞尔曲线绘制不过是控制点更多，计算看起来更加复杂一些而已，但是原理没有任何变化。这里笔者直接给出一个三阶贝塞尔曲线和一个四阶贝塞尔曲线的绘制过程。</p><p class="ql-align-center"><img src="https://www.im6767.top/articlePlates/1603010823058.gif"><em>（三阶贝塞尔曲线）</em></p><p class="ql-align-center"><img src="https://www.im6767.top/articlePlates/1603010852541.webp"><em>（四阶贝塞尔曲线）</em></p><p>是不是看起来有点意思呢？</p><h2>更高阶的贝塞尔曲线</h2><p>理论来讲，贝塞尔曲线可以是无限阶的，像二阶的推导可以从一阶中获得，三阶的推导和二阶也有关系，四阶也与三阶有关系，等等，这样的嵌套关系是不是很熟悉？没错，这说明算法实现贝塞尔曲线的方法可以是递归的。数学是不甘心像上文这样描述的，它总是用最简洁的公式概括一切情况。所以贝塞尔曲线的通项公式如下：</p><p><img src="https://www.im6767.top/articlePlates/1603011877326.png"></p><p><br></p><p>通常我们见到的贝塞尔曲线不大会超过三阶。贝塞尔曲线还有很多数学性质，由于本文仅做原理性介绍，不再深入探讨它的数学性质，有兴趣者可以查阅相关资料，探究更加细致的曲线知识。</p><h2>最后</h2><p>在本博客的另一篇关于SVG图的文章介绍中，就提到了贝塞尔曲线。和更多的数学、计算机工具结合，贝塞尔曲线会变得更加强大。前端开发中，很多图形绘制都会牵扯到该曲线。尽管我们了解了其组成，但是根据数个点生成曲线的过程还是有点复杂了，很难在脑海中具象化整个过程。庆幸的是一些网站提供了比较方便的工具，可以利用可视化的方式获取到贝塞尔曲线，以方便开发者构建对应地代码。如果你需要绘制贝塞尔曲线，不妨试试它们。文中曲线绘制的动态图均来自网络(看来大多数的相关文章使用的都是这几张动态图，不过做的是真的不错)。</p>',29)]))}const sj=A(Qd,[["render",Kd]]),nj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Zd,default:sj},Symbol.toStringTag,{value:"Module"})),aj=JSON.parse('{"title":"前端工作相关的杂记（一）","description":"","frontmatter":{"title":"前端工作相关的杂记（一）","summary":"新的一年开始了，又到了招聘高峰期，相信有很多小伙伴已经在准备跳槽了，也有很多小伙伴要准备面试别人。无论是哪一种情况，基础能力的考察都是必须经历的一个环节，大多数情况下，考察分为能力的深度和广度两个部分，俗话说知识常学常新，这里记录一下我们可能会在面试或者笔试中遇到的问题，看看能不能收获一些新的启发。","date":"2021-02-28T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/前端工作相关的杂记（一）.md","filePath":"content/blog/前端工作相关的杂记（一）.md"}'),tj={name:"content/blog/前端工作相关的杂记（一）.md"};function ej(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>介绍</h2><p>本文章，准确的说是本系列的文章用于记录一些前端相关的问题，不再进行详细分类，针对一些有异议的问题会进行一定深度的讨论。大多数问题都很基本，或者说很平常，对于有些人来讲易如反掌；也或许有一些问题容易混淆，或者不曾关注。无论何种情况，希望本文可以给你的前端学习带来一点点作用。</p><h3>.call, apply和.bind与模拟</h3><p>说起.call和.apply，大家都知道是用来改变this指向的，属于Function.prototype上的方法，他们实现的效果完全一致，不同点在于传参的方式不同。接下来直接模拟，也就是手写一个call方法。</p><pre class="ql-syntax" spellcheck="false">Function.prototype.call67 = <span class="hljs-function"><span class="hljs-keyword">function</span> </span>(<span class="hljs-keyword">new</span><span class="hljs-type">This</span>) {
    <span class="hljs-comment">//注意, 如果没有传参或者传入的为空值, 则指向window</span>
    let _new<span class="hljs-type">This</span> = <span class="hljs-keyword">new</span><span class="hljs-type">This</span> || window;
    let func = <span class="hljs-string">&quot;__newFunc__&quot;</span>;
    <span class="hljs-comment">//新对象上新增方法, 并让它等于this</span>
    _new<span class="hljs-type">This</span>[func] = <span class="hljs-built_in">this</span>;
    <span class="hljs-comment">/*
    *处理传入的参数, 根据call的特点, 除第一个参数外
    *其他参数都是调用方法时需要传入的参数
    *注意arguments不是数组, 而是一个类数组
    */</span>
    let arg = [...arguments].splice(<span class="hljs-number">1</span>);
    <span class="hljs-comment">//直接执行新增的这个方法</span>
    let result = _new<span class="hljs-type">This</span>[func](...arg);
    <span class="hljs-comment">//记得用完删除绑定的方法</span>
       delete _new<span class="hljs-type">This</span>[func];
     <span class="hljs-comment">//返回结果</span>
     <span class="hljs-keyword">return</span> result;
  }
</pre><p>上面这个粗糙的实现有几个显而易见的问题：</p><ol><li>扩展用算符是ES6的语法，显然这个实现不够&quot;低级&quot;。</li><li>新对象上新增方法命名直接等于__newFunc__，如果有重名方法将会有问题。</li></ol><p>解决第一个问题，就是避免使用ES6的语法，为ES6语法创建几个垫片。第二个问题的解决方法，避免重复首先想到的就是Symbol，但是Symbol也是一个ES6语法，所以从call的模拟实现来看，我们需要找到扩展用算符和Symbol的替代方案。这个相对简单，这里不再列举，用实现的替代方案替代上面的几个关键地方即可。</p><p>call模拟完毕，apply就很简单了，直接给出模拟代码：</p><pre class="ql-syntax" spellcheck="false">Function.prototype.apply67 = <span class="hljs-function"><span class="hljs-keyword">function</span> </span>(<span class="hljs-keyword">new</span><span class="hljs-type">This</span>) {
    <span class="hljs-comment">//注意, 如果没有传参或者传入的为空值, 则指向window</span>
    let _new<span class="hljs-type">This</span> = <span class="hljs-keyword">new</span><span class="hljs-type">This</span> || window;
    let func = <span class="hljs-string">&quot;__newFunc__&quot;</span>;
    <span class="hljs-comment">//新对象上新增方法, 并让它等于this</span>
    _new<span class="hljs-type">This</span>[func] = <span class="hljs-built_in">this</span>;
    <span class="hljs-comment">/*
    *处理传入的参数, 根据apply的特点, 除第一个参数外
    *第二个参数是数组形式的参数列表
    *注意arguments不是数组, 而是一个类数组
    */</span>
    let arg = [...arguments];
    <span class="hljs-comment">//直接执行新增的这个方法</span>
    let result = _new<span class="hljs-type">This</span>[func](...arg[<span class="hljs-number">1</span>]);
    <span class="hljs-comment">//记得用完删除绑定的方法</span>
    delete _new<span class="hljs-type">This</span>[func];
    <span class="hljs-comment">//返回结果</span>
    <span class="hljs-keyword">return</span> result;
}
</pre><p>我们同样只需要处理ES6部分语法即可。</p><p>bind和call还有apply有些区别。直观上来讲，call和apply有种&quot;绑定this并调用&quot;的感觉，而bind则是&quot;绑定&quot;。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">Function</span>.prototype.bind67 = <span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
  <span class="hljs-keyword">let</span> _this = <span class="hljs-keyword">this</span>;
  <span class="hljs-keyword">let</span> ctx = [...arguments].shift();
  <span class="hljs-keyword">let</span> args = [...arguments].slice(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>() </span>{
      _this.apply(ctx, args);
  }
}
</pre><p>一个.bind的简单实现就如上面，当然还有一些细节需要处理，例如对一些边界情形的判断等。类似这种模拟的强大实现建议阅读专门的polyfill，将有完备的实现细节，这里不再详细赘述啦。</p><p><br></p><h3>var和let，const的区别</h3><p>经典问题，区别多多少少大家都知道点，但是还是会遗漏一些细节，主要是理论知识储备吧。</p><ol><li>var会有变量提升的问题，let/const没有。</li><li>let和const有块级作用域的概念，var没有。</li><li>let和const‘’有&quot;暂时性死区&quot;的概念，也就是在代码块内，let声明变量之前，该变量不可用。</li><li>let和const不允许重复声明，相同作用域内不能声明同一个变量。</li><li>const声明时必须赋初始值。</li></ol><p>差不多就这些。至于暂时性锁区啊，块级作用域之类的概念，自行学习即可。简单问题，概念考察，ES6的细节关注度。</p><p><br></p><h3>深浅拷贝问题</h3><p>经典问题，而且比较麻烦，边界和特殊情况比较多，一个完备的深浅拷贝实现还是比较有挑战的。</p><p>先说下深浅拷贝的区别。深浅拷贝都是复制，浅拷贝仅仅复制引用，进行操作会互相影响。深拷贝则重新分配了内存地址，只是值相同，事实上是完全不同的两个对象。</p><p>浅拷贝比较经典的方式就是Object.assign({}, obj)，通过assign方法可以合并对象，相同的属性后者覆盖前者，如果第一个参数是个空对象，则实现的就是浅拷贝的形式，当然还有其他各种方法，保证拷贝前后引用关系依旧不变，就是浅拷贝。</p><p>深拷贝则是更常见，且更迫切需要的一个需求。通常来讲提到深拷贝，大家习惯性的能够想到的就是JSON.stringify和JSON.parse，而且大多数时候大家确实也会这么做，但是这个方法并不完美。对于一些特殊的数据形式会出现错误或者遗漏。在这里，我们先定义一个包含常见的JS数据类型的对象。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">let</span> deepObj = {
  <span class="hljs-attr">num</span>: <span class="hljs-number">123</span>,
   <span class="hljs-attr">str</span>: <span class="hljs-string">&quot;I&#39;m string&quot;</span>,
  <span class="hljs-attr">null</span>: <span class="hljs-literal">null</span>,
  <span class="hljs-attr">undefined</span>: <span class="hljs-literal">undefined</span>,
  <span class="hljs-attr">regexp</span>: <span class="hljs-regexp">/\\d+/</span>,
  <span class="hljs-attr">date</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),
  <span class="hljs-attr">symbol</span>: <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">&quot;obj&quot;</span>),
  <span class="hljs-attr">func</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>() </span>{
     <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;deepObj&quot;</span>)
  },
  <span class="hljs-attr">obj</span>: {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;level2Obj&quot;</span>,
    <span class="hljs-attr">level2Obj</span>: {
        <span class="hljs-attr">level</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">level3Obj</span>: {
          <span class="hljs-attr">otherFunc</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
              <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;I&#39;m level3 function&quot;</span>);
          }
        }
      }
  }
  }
</pre><p>然后我们通过JSON.parse(JSON.stringify(deepObj))发生了哪些变化。</p><p><img src="https://www.im6767.top/articlePlates/1616929594660.png"></p><p>从上面可以看到几个基本变化：</p><ol><li>时间对象变成了字符串。</li><li>属性值undefined的属性没了。</li><li>regexp正则对象和原来不一样了，变成了一个空对象。</li><li>对象的方法都没了。</li><li>Symbol类型的数据也没了。</li></ol><p>如上，JSON.stringify/JSON.parse不够好使，如果想要更全面的深拷贝，则需要重新设计。就依据给出的测试示例，我们考虑设计实现一个自己的深浅拷贝的方法，节省时间，我们直接贴出代码，不再进行额外的说明补充。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> deepCopy = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">target</span>) </span>{
    <span class="hljs-keyword">let</span> obj = <span class="hljs-built_in">Object</span>.create(target.getPrototypeOf(target));
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> target) {
        <span class="hljs-keyword">let</span> value = target[key];
        <span class="hljs-keyword">let</span> dataType = <span class="hljs-built_in">Object</span>.prototype.toString.call(value).slice(<span class="hljs-number">8</span>, <span class="hljs-number">-1</span>);
        <span class="hljs-keyword">switch</span> (dataType) {
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;String&quot;</span>: <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Number&quot;</span>: <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Null&quot;</span>: <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Undefined&quot;</span>: <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Symbol&quot;</span>:
                obj[key] = value;
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Object&quot;</span>:
                <span class="hljs-comment">//注意克隆时候的原型处理</span>
                obj[key] = <span class="hljs-built_in">Object</span>.create(<span class="hljs-built_in">Object</span>.getPrototypeOf(value));
                deepCopy(obj[key], value);
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Array&quot;</span>:
                <span class="hljs-comment">//数组处理这里有一个特殊情况, 使用正则表达式的exec方法</span>
                <span class="hljs-comment">//返回的对象也是一个数组, 但和平时的数组相比, 其多了几个属性</span>
                <span class="hljs-comment">//包括index和input</span>
                obj[key] = [];
                <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Object</span>.hasOwnProperty.call(value, <span class="hljs-string">&#39;index&#39;</span>)) {
                    obj.index = value.index;
                }
                deepCopy(obj[key], value);
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Date&quot;</span>:
                obj[key] = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(value);
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;RegExp&quot;</span>:
                obj[key] = <span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(value);
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Function&quot;</span>:
                <span class="hljs-comment">//函数的copy是一个很奇怪的情形</span>
                <span class="hljs-comment">//通过 eval和new Function处理?</span>
                <span class="hljs-comment">//通过bind处理?</span>
                <span class="hljs-comment">//实际上应该没有这么奇怪的用法</span>
                <span class="hljs-keyword">break</span>;
                <span class="hljs-comment">//这里还有一些其他的数据类型, 例如Map, Set, ArrayBuffer等等等...</span>
                <span class="hljs-comment">//这里只针对常见的数据类型进行处理</span>
                <span class="hljs-comment">//要写一个完备的深拷贝也要写好多东西, 边界情况等</span>
            <span class="hljs-keyword">default</span>:
                <span class="hljs-built_in">console</span>.warn(<span class="hljs-string">&quot;unknown datatype&quot;</span>);
        }
    }
    <span class="hljs-keyword">return</span> obj;
}
</pre><p>还是偷了懒，没有写完，当做伪代码看吧。主要两个问题：第一个，数据类型不够全面，Map，Set，ArrayBuffer等数据类型没有明确处理。第二个，对于输入数据的类型处理不够全面，例如输入的不是对象，而是简单的数据类型，也要进行处理等。当然我通常将这种行为称之为&quot;不重复造轮子&quot;。</p><p>在现在的前端代码工具中，一般都会有自己的拷贝方法，例如jQuery的extend，Vue的extend等，他们会针对自身的数据特点进行拷贝。如果想要了解更为详细的数据深浅拷贝的一些实现，建议自行阅读一些工具方法库，例如lodash.js等。</p><h3>RGBA和opactiy的区别</h3><p>刚看到这个问题的时候我满头问号，这俩玩意不压根就不是一个东西吗？难道就是因为RGBA的A可以调整透明度，就和opacity扯上关系了？</p><p>我面对这个问题的回答应该是：RGBA是一个属性值，用于调整对应属性的颜色以及透明度。也就是说RGBA调整的是对应属性的透明度。而opacity是指本身是一个属性，所以opacity调整的是元素的透明度。总结：RGBA是单一属性的调整，opacity是元素的调整。</p><p>然后查找了下资料，大致没有问题，只不过opacity有继承性，子元素会继承父元素的opacity，rgba没有。</p><p>感觉是很无聊的问题。</p><h3>box-sizing的各属性值与区别</h3><p>box-sizing，也算是比较常见，通常设置的属性就是border-box和content-box，默认值是content-box。这个其实关乎到标准盒模型。这个让我说区别，我觉得官方的话也不大会讲，我的直观感受就是其决定元素宽高的作用范围。content-box决定宽高应用于内容框，border-box决定宽高应用于边框。后者比前者多包含一层内边距和边框的宽度。当然和大多数属性一样，其还有一个属性值是inherit，这个没什么好讲的。</p><p>有一些和样式相关的诡异问题就和box-sizing有关。我记得在我还是一个前端萌新的时候，有一次利用jQuery的show和hide实现过渡效果，能够看到在hide动画开始时，元素会有一个明显的高度跳动。就是会突然变得更高一点，然后折叠起来。通过设置元素的box-sizing为border-box就恢复正常，很神奇，至此之后对于这个属性产生了很强的记忆。</p><h3>前端模块化中的AMD，commonJS，UMD和ESM</h3><p>这是个前端发展的历史问题，比较偏向于知识面的考察和前端相关规范的了解。</p><p>提起commonJS就会想起Node.js。通常会说commonJS是前端模块化的爹。commonJS作为一个项目，是为了约定JS在浏览器环境之外创建模块的规范。Node.js因为运行在服务端的缘故，导致其必须拥有模块化，来处理复杂的功能逻辑。至此Node.js和commonJS结合，互相补足，成为开发主流。commonJS并不是前端。commonJS有几个显著的特点：</p><ol><li>一个文件是一个模块，有自己的作用域。模块内部的内容无法被外部访问，其归属模块私有。</li><li>exports是module上的一个属性，保存的是当前模块需要导出的内容；模块的加载需要使用require，require加载到的模块的值就是模块导出的值。</li><li>commonJS的模块加载是同步的。</li></ol><p>commonJS的模块加载是同步的，这在服务端没什么问题，但是如果是浏览器端，问题可就大了，因为浏览器中资源加载依赖于网络环境，如果长时间加载必然导致浏览器等待资源响应导致卡顿，那么要在浏览器环境中实现模块化，就需要其他方案。</p><p>AMD就是在这种环境下产生的方案。AMD即&quot;异步模块定义&quot;，是requireJS推广的时候的规范。其标志性的就是define定义模块，requirejs来组织或者说获取模块。说实话现在对AMD方案的使用已经变得比较少了，起码我开发过程中接触的是真的不多。它的提出就是用来解决客户端下的模块加载，但是写法有点啰嗦，不如commonJS好使。</p><p>有了commonJS和AMD两种不同的规范，按理来说已经能够解决模块化的问题，为什么会出现UMD？实际上UMD的出现就是为了解决一种场景：一套代码既想要在commonJS规范下使用，又要在AMD规范下使用。UMD就是AMD和commonJS的统一规范，一套代码，多场景使用。缺点就是写法真的很复杂。在webpack或者rollup中，该方案通常作为备用方案。</p><p>ESM就是ES module，即ES6提出的规范化模块系统。这个应该是现在前端开发者最常使用的方式，其典型的特征就是 import xxx from &quot;./xxx&quot; 这种形式。ESM作为ECMA script提出的标准，肯定会成为前端模块化的执行标准。现代浏览器中可以通过script标签，type=module属性，直接支持ES6的模块化，连Node.js也开始支持ESM的写法。需要注意的一些就是，大多数ESM使用都配合诸如webpack之类的工具，事实上ESM的写法标准更为严格，而webpack由于插件的简化辅助，在某些写法和标准上面与ESM略有不同。</p><p>小结一下：这些问题应该作为前端发展历史了解，个人感觉强行记忆意义不大，更多的commonJS和ESM使用过程中的一些用法问题细节等反而是需要注意的，但也无需刻意注意——毕竟开发脱离了实际场景和问题来探讨，就是耍流氓嘛。</p><h3>一道正则题</h3><pre class="ql-syntax" spellcheck="false">Write regexp to <span class="hljs-keyword">replace</span> <span class="hljs-keyword">all</span> words <span class="hljs-keyword">at</span> the <span class="hljs-keyword">end</span> <span class="hljs-keyword">of</span> the line, which <span class="hljs-keyword">start</span> <span class="hljs-keyword">with</span> <span class="hljs-string">&#39;a&#39;</span> letter, <span class="hljs-keyword">with</span> the same words but <span class="hljs-keyword">starting</span> <span class="hljs-keyword">with</span> <span class="hljs-string">&#39;b&#39;</span>. <span class="hljs-keyword">For</span> example:
original <span class="hljs-keyword">string</span>:
&gt; <span class="hljs-string">&#39;abb\\nabb \\t\\taabbb \\t\\nabb abb aaabbbb&#39;</span>
<p>“abb
abb aabbb
abb abb aaabbbb”</p>
<p><span class="hljs-keyword">result</span> <span class="hljs-keyword">string</span>:
&gt; <span class="hljs-string">&#39;bbb\\nabb \\t\\tbabbb \\t\\nabb abb baabbbb&#39;</span>;</p>
<p>&quot;bbb
abb babbb
abb abb baabbbb&quot;</p>
</pre><p>是的，题目是英文的，刚开始读我没太读懂这啥玩意，a开头，还需要行结尾。结合示例和题干，还是比较容易理解的：写一个正则表达式，替换所有在行末尾的以a开头的单词，将开头的a替换为b。简单正则，考察几个和正则有关的内容吧，无非就是匹配字符串结束，匹配换行，匹配指定格式的字符片段。没啥好分析的，直接上个代码。</p><pre class="ql-syntax" spellcheck="false"> <span class="hljs-keyword">var</span> reg = <span class="hljs-regexp">/(a)(\\w*)(\\n|$)/g</span>;
 <span class="hljs-keyword">var</span> str = <span class="hljs-string">\`abb
         abb aabbb
         abb abb aaabbbb\`</span>;
 str.replace(reg, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">match, p1, p2, p3, offset, string</span>)</span>{
   <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;b&#39;</span> + p2 + p3;
 });
</pre><p>结束。</p><h3>函数柯里化</h3><p>说起函数柯里化，就想起了经典的柯里化考题：实现一个柯里化函数，能够达成如下的运行效果：add(1)(2) = 3，add(1)(2,3)(4) = 10。这个是我毕业后第一次笔试遇到的一个经典考题，当时的我还是很震惊的，这啥玩意，还能这么搞吗？仔细想了想觉得return出函数还是可以实现连续调用的，但是怎么能实现最后输出值呢？当时并没有做出来，后来才知道柯里化这个东西。感觉还是理解的不够深，自己不够灵活。下面就给出一个实现，其实整个代码很简单，还是很容易理解的。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span> () </span>{
  <span class="hljs-comment">//保存入参</span>
  <span class="hljs-keyword">let</span> args = [...arguments];
  <span class="hljs-comment">//定义内部的add方法, 该方法保存后面的入参</span>
  <span class="hljs-keyword">let</span> innerAdd = <span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
    args.push(...arguments);
    <span class="hljs-keyword">return</span> innerAdd;
  }
  <span class="hljs-comment">//注意, 这里就是最后能&quot;输出结果&quot;的秘诀</span>
  <span class="hljs-comment">//改写方法的toString, 利用类型转换输出结果</span>
  innerAdd.toString = <span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
    <span class="hljs-keyword">return</span> args.reduce(<span class="hljs-function">(<span class="hljs-params">a,b</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> a + b;
    })
  }
  <span class="hljs-comment">//把内部的方法返回</span>
  <span class="hljs-keyword">return</span> innerAdd;
}
</pre><p>这个技术技巧在很多地方都可以见到。函数柯里化实际上就是把接收多个参数的函数变成接受单一参数的函数。函数柯里化提供了缓存的能力，能够简化一些场景。函数柯里化在JS中和闭包、bind、call等特性相关，其知识点的考察还是比较广泛的，涵盖到很多JS的语言特点。</p><h3>CSS画正方形</h3><p>问，如何画出一个边长是父元素宽度一半的正方形？</p><p>没什么用的简单题，看到之后就应该明白把握那些基于宽度计算的属性来完成，例如margin，padding啦。这个题padding就可以。首先设置元素本身的宽度是50%，横向就处理完了，然后padding-top和padding-bottom的值各为25%就可以了，当然也可以单纯的padding-top或者padding-bottom设置为50%。当然为了健壮一点还建议line-height设置为0，因为如果中间出现字符就又会算上对应地字符高度。</p><p>类似的问题还可以延伸，如何实现宽高自适应的正方形啦，如何实现宽高比不变的自适应矩形啦，原理差不多，关键就是了解padding在垂直方向上的数值计算基准是以width为准计算的。</p>`,64)]))}const lj=A(tj,[["render",ej]]),pj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:aj,default:lj},Symbol.toStringTag,{value:"Module"})),oj=JSON.parse('{"title":"回首可叹，未来可期","description":"","frontmatter":{"title":"回首可叹，未来可期","summary":"2020年伊始，这似乎注定是不太平静的一年。在这阴蒙的日子，也终于是把博客更新到了2.0版本。回头看看之前写的博客，幼稚的自己都有点脸红，所以全部藏起来，一切都试着从头来过吧。","date":"2020-04-03T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/回首可叹，未来可期.md","filePath":"content/blog/回首可叹，未来可期.md"}'),rj={name:"content/blog/回首可叹，未来可期.md"};function ij(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>一切从零开始</h2><p>2020年的伊始，一切从头开始。这一年开始就注定不太美好。从一场病疫开始，整个世界似乎都乱成了一团。周围总是有种忧心忡忡的味道。曾经看到过这样一句话，如果问今年最大的愿望是什么，就是让2020重头来过。</p><p>当然，2020不会重头来过。回想起来，至今工作也已经有一年半载，因为工作的缘故，我没有那么多机会选择所学所做之事。在这个<span style="color:rgb(230, 0, 0);">Vue</span>，<span style="color:rgb(230, 0, 0);">React</span>纷纷Yes的时代，我还徜徉在<span style="color:rgb(230, 0, 0);">jQuery</span>的大海之中。这一年事实上就在各种犯错误和解决自己的错误中摸爬滚打。维护和扩展着一套以jQuery为核心的架构体系，自己的缺陷和不足也很容易在工作中被无限放大。但所幸在这磕绊崎岖的道路上，依旧是收获到了一些不为人所知的知识和理解。平时我也混迹在很多技术群中，能看到太多的人企图以一朝一夕之力成为万人敬仰之神，也有些三教九流之辈以为自己窥视天地全貌，侃侃而谈技术的未来发展和漏洞百出的见解，但是最重要的是，也有许多年轻的大神，让人不得不钦佩和羡慕。</p><p>年初公司使用Sonar进行代码质量管理，要求修正自己&quot;杰作&quot;中的问题，回头看看过去的自己，竟然觉得好笑。任意的缩进，不知所云的注释，甚至是愚蠢至极的BUG。但是转念一想，能嘲笑过去的自己，大概说明现在自己也站在了更高的台阶上吧。</p><p>去年年中的时候，心血来潮搭建了个人的第一个博客，陆陆续续也写了七八篇文章，大多数是自己工作中的一些BUG和细节记录，多显得幼稚和肤浅，这次也决定永久珍藏，再不面世。</p><p>疫情的阴霾让经济也不明朗，未来的路走向何方也变得颇有些迷茫。但是自己能做的，就是沉淀自己。过去为自己制定了很多计划，大多数都是半途而废。隐约觉得是时候重新出发，踏上未来的路。</p><h2>博客搭建</h2><p>这次博客的2.0版本决定不再像上次那样花里胡哨，连这次色系都选择了黑白灰，尝试简约主义，当然，这肯定不是为了偷懒~。搭建所用的技术大致如下:</p><blockquote>前端：<em>Vue，uni-app</em></blockquote><blockquote>后端：<em>Node.js，Koa2</em></blockquote><blockquote>数据库：<em>MySQL</em></blockquote><blockquote>其它：各种UI库</blockquote><p>是的，这次将重心放在了移动端的体验与开发上。是准备PC端单独设计一套的，当然这个坑要不要填还另说。本身自己移动端内容开发相对欠缺，所以这次找了uni-app这个玩具来体验一把。</p><p>这里我不得不吐槽一下uni-app。我本身没有接触过这种多端开发的工具，uni-app是第一个。一方面是因为它的文档和社区相对友好一些，另一方面是因为公司内部也在使用uni-app做多端开发，当然更重要的是，本身uni-app的设计思路和开发都更贴合于Vue，所以选择了它。但是实际使用中也能看到此类工具的一些明显的弊端：</p><ol><li>求同尚可，存异不足。毕竟是向多个平台统一处理，只能尽可能兼容各种平台和工具，不得不抛弃一些差异，但是作为一个习惯前端开发的人，很多前端的特性丢失，但app原生部分能力又不足，导致涉及到二者之间的差异部分就比较难以处理。就拿Vue的嵌套路由来讲，很难找到app端和H5双方的一个平衡方案。</li><li>小坑小点非常多。开发过程中不得不时刻关注H5和app之间的差异，很容易陷入兼容问题之中。</li><li>生态还是不够完善。当然这也不能属于一个缺点，因为毕竟不像web发展，没有成熟到有那么多现成的方案，但是对于初学者来讲，没有现成的组件，劝退很多胶水程序员。</li></ol><p>但是，毕竟具有特点，也就具有缺点，充分了解到一款工具的优势和劣势，也是非常重要的。</p><p>后端本来想要尝试<em>nest.js，</em>但是转念一想，既然从用户到产品到设计到开发都只有我一个人，干脆自由点儿放开了造。</p><p>本身就是个小站儿，技术栈也是司空见惯，具体细节这里就不再啰嗦。</p><h2>再来点什么</h2><p>第一篇文章为什么这么多字儿，那大概是因为自己连图片上传都还没有写吧。就是前端有了个样儿，管理端能够增删改查，我就开始撸下这第一篇博文，甚至连展示样式都是自己边写边调。说来也挺舒服，上班Coding工作，下班Coding自己的小玩意，晚上梦里也Coding。其实我算不上一个Coding狂，不过是想在键盘的噼里啪啦声中找到点新的东西。</p><p>仔细想想，好像还真的想在搞点什么，搞个游戏，搞个图片库，写几篇影评吧。前者也算是精进一下技术，后者算是Remember一下生活。</p><h2>未来的路</h2><p>还有不到20天，自己就24了。两个12年已经悄悄地从生活中溜走，我时常思考未来，却又是一个不愿意做计划的人。到这年纪，似乎大人们也开始关心你的未来，关心你即将面对的一切。这最近的几年来，自己也在发生着变化，情绪更加平静，习惯并且乐于接受孤独，思索现实，虚构远方，窘于社交。有时候觉得自己变得有些麻木和无感，疲倦于各种娱乐活动，反而喜欢一个人看看书之类的。或许这也是一种成长吧。</p><p>离开了家，在这个城市过着独自一人的生活。我始终有种被这座在城市排斥的感觉。每当走在下班的路上，我都在想，明天是什么样，明年又是什么样呢？25,26岁的自己，依旧会走在这条路上吗？</p><p>我站在现在的十字路口，思考通向未来的路。</p>',25)]))}const cj=A(rj,[["render",ij]]),hj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:oj,default:cj},Symbol.toStringTag,{value:"Module"})),uj=JSON.parse('{"title":"域名证书自动化和一些问题","description":"","frontmatter":{"title":"域名证书自动化和一些问题","summary":"要使用https，则必须为域名配备证书。通常我们会选择云服务器厂商提供的证书相关的管理服务，直接购买，绑定解析就可以，省时省力。证书也有收费和免费的可以选择，收费证书固然省时省力，不过像笔者这样的个人用户当然是选择免费的。以阿里云为例，之前的免费证书有效期为1年，到期之后需要重新购买绑定，一年...","date":"2024-05-29T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/域名证书自动化和一些问题.md","filePath":"content/blog/域名证书自动化和一些问题.md"}'),dj={name:"content/blog/域名证书自动化和一些问题.md"};function jj(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[s[4]||(s[4]=d("p",null,"要使用https，则必须为域名配备证书。通常我们会选择云服务器厂商提供的证书相关的管理服务，直接购买，绑定解析就可以，省时省力。证书也有收费和免费的可以选择，收费证书固然省时省力，不过像笔者这样的个人用户当然是选择免费的。以阿里云为例，之前的免费证书有效期为1年，到期之后需要重新购买绑定，一年一次并不是高频操作，也能够接受。但是最新的政策免费证书只有三个月有效期了，三个月操作一次，我不接受。于是乎不如尝试一下一些自动化方案，比如certBot。",-1)),s[5]||(s[5]=d("h2",{id:"certbot",tabindex:"-1"},[m("certBot "),d("a",{class:"header-anchor",href:"#certbot","aria-label":'Permalink to "certBot"'},"​")],-1)),d("p",null,[s[2]||(s[2]=m("certBot是一个开源的软件，可以自动化获取到由")),C(p,{style:{color:"rgb(13, 13, 13)"}},{default:R(()=>s[0]||(s[0]=[m("Let’s Encrypt 颁发的 SSL/TLS 证书，可以方便快速地管理https所需的证书。他的官网可以")])),_:1,__:[0]}),s[3]||(s[3]=d("a",{href:"https://certbot.eff.org/",target:"_blank",rel:"noreferrer"},"点击这里",-1)),C(p,{style:{color:"rgb(13, 13, 13)"}},{default:R(()=>s[1]||(s[1]=[m("查看。笔者使用的是ubuntu系统，并且使用nginx作为web服务器，所以相关内容记录也以该组合为例。")])),_:1,__:[1]})]),s[6]||(s[6]=x(`<h3 id="_1-准备好certbot" tabindex="-1">1.准备好certBot <a class="header-anchor" href="#_1-准备好certbot" aria-label="Permalink to &quot;1.准备好certBot&quot;">​</a></h3><p>首先官网推荐使用snap进行certBot的安装，因为笔者的云服务器ubuntu 22.x中已经安装了snapd，所以直接进行certBot的下载。如果其他的系统没有，你有两个选择：</p><ol><li>先安装snapd，然后进行后续步骤。</li><li>使用诸如yum, dnf或者apt等方式进行安装。</li></ol><p>键入命令，安装certBot：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> snap install--classic certbot
</code></pre></div><p>接着为了保证certbot命令能够正常执行，还需要进行链接：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> <span class="hljs-built_in">ln</span> -s /snap/bin/certbot /usr/bin/certbot
</code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><h3 id="_2-和nginx进行集成" tabindex="-1">2.和nginx进行集成 <a class="header-anchor" href="#_2-和nginx进行集成" aria-label="Permalink to &quot;2.和nginx进行集成&quot;">​</a></h3><p>笔者的服务器网关证书管理通过nginx进行管理，所以直接使用命令，使其自动配置nginx即可。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> certbot --nginx
</code></pre></div><p>运行之后可能会有一些选择，例如让你填写邮箱等，按照需求填写即可。另外如果你的nginx配置文件中包含不止一个域名，则会有提示进行选择，选择所需要的域名进行配置。</p><p>因为certBot是自动检测配置文件并写入配置的，有的时候会和预期不一致，特别是你自定义了安装位置的情况下。此时需要指定安装位置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> certbot --nginx --nginx-server-root /etc/nginx/***
</code></pre></div><p>完成配置后，可以访问该域名，查看证书信息以验证证书是否生效。</p><h3 id="_3-自动更新" tabindex="-1">3.自动更新 <a class="header-anchor" href="#_3-自动更新" aria-label="Permalink to &quot;3.自动更新&quot;">​</a></h3><p>同样地，certBot颁布的证书有效期也为3个月，但这不意味着我们每隔三个月就要进行类似的操作一次。certBot提供了定期的自动更新功能，当你通过上述方式添加域名之后，certBot会自动创建定时任务，更新证书。</p><h2 id="一些问题" tabindex="-1">一些问题 <a class="header-anchor" href="#一些问题" aria-label="Permalink to &quot;一些问题&quot;">​</a></h2><p>certBot会自动写入nginx配置文件，一切看起来似乎都很美好，但是也会带来一些潜在的问题。一个很有意思的更改就是当你访问时使用的是http而非https协议时，nginx的配置会是</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code class="hljs language-bash"><span class="hljs-keyword">if</span> (<span class="hljs-variable">$host</span> = www.xxx.xxx) {
        <span class="hljs-built_in">return</span> 301 https://$host<span class="hljs-variable">$request_uri</span>;
    } <span class="hljs-comment"># managed by Certbot</span>
</code></pre></div><p>看似没有什么问题，通过301进行重定向到https协议，但是如果你之前调用接口中使用的是http，则可能会导致参数丢失（特指POST， 因为POST接口通常在body内携带内容）。这一点要注意。</p><p>另外如果你使用的https服务对外提供接口调用（类似对外开放API），则certBot生成SSL证书可能会导致握手错误，这是因为certBot生成的证书是由Let&#39;s Encrypt颁发的，其基于DST Root CA X3产生交叉签名，而DST Root CA X3在2021年9月已经过期，这导致一些较旧版本的设备/包等会认为该证书不安全。如果遇到类似的情况，则需要升级设备/包或者更换其他证书，更多信息可参考<a href="https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/" target="_blank" rel="noreferrer">这里</a>。</p>`,22))])}const mj=A(dj,[["render",jj]]),gj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:uj,default:mj},Symbol.toStringTag,{value:"Module"})),fj=JSON.parse('{"title":"我也是个年轻人，我心情也不太好","description":"","frontmatter":{"title":"我也是个年轻人，我心情也不太好","summary":"你也会偶尔讨厌这个操蛋的世界吗？","date":"2021-07-18T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/我也是个年轻人，我心情也不太好.md","filePath":"content/blog/我也是个年轻人，我心情也不太好.md"}'),_j={name:"content/blog/我也是个年轻人，我心情也不太好.md"};function yj(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h3>自我</h3><p>事情是这周三开始的。</p><p>我像往常一样出门跑步，那天和往常没什么区别，天气依旧燥热，心情依旧称不上美丽。</p><p>天气原因，最近已经把跑步里程限制在了三公里，结束后我像往常一样散步休息，走了一圈半之后，我突然开始大哭。当然我并没有哭出声，只是眼泪开始泛滥，夺眶而出。幸好是漆黑的夜晚，加上跑步之后满头大汗，尽管有几个路人在路过我的时候投来异样的眼光，但是他们肯定没有起疑，而且这样的情绪持续了几分钟，就慢慢恢复了平静。</p><p>我被我自己吓坏了。长久以来，我已经意识到自己有很长一段时间情绪处于相对低谷，但我仍然觉得在可接受的范围之内，通过自我调节就可以慢慢恢复，不过这次失控让我不再抱有乐观精神。我开始思考问题的根源到底在哪里。</p><p>渐渐地我发现，身边的一切都变得毫无意义。我的个人生活，我的家庭生活，工作生活，都失去了意义，我成了流浪在自己生活里的流浪者。而这一切似乎一瞬间就发生了。</p><p>我想向别人解释这一切，看看能不能从别人的口中得到答案，但是我最后忍住了。我大概能够猜出别人的回答：出门走走，找点乐子，自我调节。</p><p>鲁迅说，人类的悲欢并不相通，我只觉得他们吵闹。感同身受这个东西本身就不存在，没有人能够切实理解他人的感受。让我感到不安的是，我怕这样的日子会永远持续，以后都是这样了，而且全世界只有我一个人是这样的。</p><p>之后的生活中，我努力让自己表现得像一个正常人，正常工作，正常生活，但是内心永远埋藏着这样一颗定时炸弹，我永远不知道下一次它爆发是什么时候，只能祈祷不会发生在正在工作的时间里。</p><p>周末的时候，朋友开玩笑说有一本书很适合你，名字叫做《我是个年轻人，我心情不太好》，出于好奇就开始读读，结果我得到了莫大的安慰，作者经历了和我一样的日子，一样的困惑，一样的苦恼，一样的无意义。我很高兴我不是这个世界上唯一有这种感觉的人。</p><p>很幸运，这个世界上有这样一个人，虽然他和我国籍不同，但是在我们25岁时，我们都经历着同样的痛苦。</p><p>在我24岁时，我觉得一切都刚开始，我对当下的生活满足，觉得这样平淡正常的人生很舒服，生活的稳定感和踏实感让我无忧无虑。</p><p>25岁，这一切就都消失了。</p><h3>重复</h3><p>在我早上睁开眼睛的时候，我就觉得今天大概率是被虚度的一天。每天都是这样，只不过今天我认真思考了这个问题。</p><p>我颇有些失望，今天才刚刚开始啊，甚至有很多人在此时还没有睁开眼睛。</p><p>有人会说，你今天会上班，会有工作要做，有问题等待你处理，这是全新的一天呐，即使不够美好，但也足够充实。是的，我的生活每一天都像这样充实：早上六点半自然醒来，然后在七点二十的时候正式起床，洗漱，八点二十的时候出门，买上一份早点，它们不过是包子、馒头、茶叶蛋或者豆浆的几种组合，这完全取决于在我去早餐店门口时脑子里想到的是哪些食物。然后穿过一个天桥和三个十字路口，在八点五十分以前到达公司，接着吃完早点开始工作。有一个一个问题冒出来，有些有点意思，有些则很无聊，有各式各样的人找你，然后你需要一一回应。到12点去楼下吃饭，然后溜达一圈，休息到下午1点10分继续开始工作，有时候精神饱满，有时候略显困倦，然后到下午6点左右，准备下班，吃饭，然后回家。休息大概一个小时左右，换上运动装出门跑步，一小时后回来，洗完澡之后阅读一会，接着在不晚于11点时睡觉。</p><p>我对于时间的拿捏很到位，以上的时间误差不会超过10分钟。其中的变数不多，虽然每天交流的人不同，但反反复复总是那些叫得上名字的人；处理的问题也不尽相同，但是如果仔细分分类，就会发现还是被限定在一个很有限的范围。</p><p>如果用这样的方式思考过去的两年我的生活，每一天都是如此。</p><p>我想我意识到了问题的所在，我需要变化，起码是看到变化。我迫不及待的想要知道今天和过去的日子有什么不同，哪怕一点也好。</p><p>我今天有和另一个小组的测试同事说话，当然她是个姑娘，上班路上见到过几次。我觉得她是个好人，但这没什么理由，你让我证明我的观点，我什么都拿不出来，但是我就是觉得她是个好人。</p><p>应该还很有趣，我之前没有和她说过话，不过这并不影响我对她的印象。当然如果他是个男士，我大概率不会在这里提到她。这可能是我和她唯一一次说话了，但是我内心也没什么感觉。</p><p>你不应该问我为什么男士我就不会提起，因为这是个傻逼问题，我对于傻逼问题的容忍程度很低，但我之前不是这样。</p><p>我还遇到了自己心爱的姑娘，遇到她的时候她没有扎起头发，而是蓬松的披在肩后。她没有和我打招呼，我也没有第一时间注意到她，不过在回到办公室的路上我就走在她的后面，我觉得她是一个好人。</p><p>比上面那个女生好，好得多。这也没什么理由，纯粹是我的感觉。</p><p>下班之后我决定认认真真解决一个问题，于是拿起笔在纸上写写画画，写下了几个数学公式，还进行了推导，这时候我还是挺开心的，好久没有认真做过这样的事情了。不过很遗憾，没过多久的下班路上，我就意识到自己的推导是错误的，我的心情又不好了，我觉得我很笨。</p><p>一天大概就这么过去了，如我所愿，今天确实是被虚度的一天。</p><p>我非常相信墨菲定律：如果一件事有变坏的可能，即使发生的可能性很小，但是它终将在将来的某一个时刻发生。</p><p>我希望最坏的那一天晚一些到来。</p><h3>时间</h3><p>《我是个年轻人，我心情不太好》的作者意识到，造成这一切问题的，是时间。我应该记得他的名字，因为他的书名起的确实不怎么样，称他是那本书的作者要打很多字。</p><p>Erlend Loe读了关于时间的一本书，这让他感到有些不舒服。很显然我也读到过关于时间的书，虽然那已经是去年的事情了，《时间的秩序》。</p><p>我想，我们和时间最直接相关的地方，就是年龄了。我刚过完自己二十五岁生日不久，但这一切都和我想象的不同。当我在蛋糕的蜡烛面前许愿时，我在几秒钟内迅速扫过了自己大脑的每一个角落，最后无奈地得出一个结论：我没有任何愿望。我觉得这并没有什么问题，因为过生日许下的愿望也不一定会实现，只是一个无聊的仪式罢了。况且我当时，嗯，满脑子只有一个人:D。</p><p>过生日最令人难过的地方就是你无法拒绝它，因为它总是在一年之后的那一天准时到来，提醒你你的年纪又要加一，暗示你你的生活中有些东西正在加速到来，我真的不想迎接它们。我对我的年纪感到不满意，我希望我可以大两岁，或者干脆再小三四岁，这样我就可以无所顾虑的爱我所爱的人和被她所爱，亦或者彻底打消爱她的念头。</p><p>我一直觉得时间的流逝是不均匀的。有的时候白天过得很慢，有的时候夜晚又很慢。以前的时候时间很慢，现在很快。我想绝大多数人都注意到了这一点，但是大家都怀有一个错误的观念：是生活节奏变快了，而不是时间流逝变快了。我迫不及待的想听到有一个物理学家发表证明，时间的流逝速度确实有改变的迹象。</p><p>我喜欢《时间的秩序》，是因为我喜欢科幻。那些幻想再配上科学，是一种理性的浪漫。</p><p>Erlend Loe显然没有我有文化，尽管他是一个研究生。他不能接受时间会受到重力影响的这件事。重力（加速度）越大，时间流逝的越慢。他显然没有看过《星际穿越》，那么他也体会不到我在看到他们在巨大引力的星球上执行了一小时的任务，却已经是地球历法的23年时，内心的那种兴奋感。我不懂相对论，但是我对这件事深信不疑。是的，世界就是这样的，有些东西你不必理解，因为理解也不能够改变它运行的规则，接受就好。</p><p>我有时候觉得这不公平，因为我的家乡海拔不低，这说明我们的时间流逝的要比靠近海岸边的人们快一些，这是不是说明，无形中我们的寿命就要短？从一出生开始，我们就注定要比某些人少活个几秒或者几分钟，这足以让有些人感到绝望了。</p><p>我还喜欢另一个显而易见的理论，就是现在压根不存在，我不知道这样的描述是否正确。如果我们将眼界放到宇宙星球之间，如果有一颗星球离你有一光年的距离，那么你现在看到的它其实已经是一年前它就发出的光了，更要命的是，如果你有一个朋友在那颗星球上，当你给他打电话时，他要一年以后才能听到你分享的今天发生的有趣故事。</p><p>幸好我只有地球上的朋友，而且没有外国朋友，不过每次和朋友面对面谈话的时候，我也会想起，现在的它已经是1/<span style="color:rgb(51, 51, 51);">299792458秒之前的她了，那么她现在是什么样呢，我永远无法知道，因为她的现在，永远是我的未来。</span></p><p>不过不必担心，我们有时候甚至可以发上一小时呆，这1/<span style="color:rgb(51, 51, 51);">299792458秒，对人生丝毫没有影响。</span></p><p>里面还有一些理论我不喜欢，例如他说时间是有最小刻度的，也就是普朗克时间，<span style="color:rgb(18, 18, 18);">0.0000000000000000000000000000000000000000001秒。也就是说，没有比这更短的时间。</span></p><p><span style="color:rgb(18, 18, 18);">这让我很头疼，因为时间是连续的这件事，我从小就知道，而且认同，但是你非要告诉我如果足够微观，那么时间就是从一个0.0000000000000000000000000000000000000000001秒到下一个0.0000000000000000000000000000000000000000001秒，我不理解，但是我也没办法反驳。</span></p><p><span style="color:rgb(18, 18, 18);">如果我质问作者，他肯定会向我解释这个理论是正确的，并且搬出一大套理论和数学公式来证明他的理论，我可能连一个字也看不懂，想到这里我更生气，即使他在理论里加上无数个错误的假设条件，我也无法反驳，因为我只能被他牵着鼻子走。他们对这个世界的了解真的比我多得多，他们一定没有这么多烦恼。</span></p><p>我决定开始接受这个理论，并且无条件的相信这些理论的提出者是对的。我好像找到了一种简单的生活方式和解决我的问题的答案，就是无条件的信任别人的理论，然后在这些理论上生活。</p><p>不过这个念头产生的下一秒，我就打消了。因为不是人人都严谨缜密，富有智慧，再者大多数人都喜欢说狂言妄语，有些话虽然说出口，连他们自己心里都未必吃的准是不是对的。</p><p>显然这样的方式不能解决我的问题。</p><p>问题是出在我对时间了解的不够多吗？看来也不是，有很多人压根没想过这些，但是他们的心情比我好得多。这些没什么用的理论也没有改变我的生活，除了让我觉得，周围的一切运作的不那么流畅，总感觉我们所有的东西都一卡一卡的，因为时间有最小值。</p><h3>写日记</h3><p>我有一个朋友，他和我对写日记这件事有相同的看法：写日记的人都是傻逼。</p><p>姜文的《邪不压正》里也有一段关于日记的对话，我觉得很有意思：</p><blockquote>你写日记吗？</blockquote><blockquote>我不写</blockquote><blockquote>我也不写。</blockquote><blockquote>谁把心里话写在日记里</blockquote><blockquote>能写出来的叫心里话吗？</blockquote><blockquote>下贱。</blockquote><p>而我现在却做着差不多的事情，把脑子里涌现出的想法一个一个记下来，看看能不能找到我想要的答案。</p><p>我以为文字就是要让别人看的，所有艺术作品都是。当我读到《月亮与六便士》中思特里克兰德将绘有毕生心血的作品毁之一炬的时候，我生气极了，好人就应该有好报，就应该被理解，我认为这是天经地义的。人人都觉得他是个怪人，但是他很厉害，很好。</p><p>freak，很多地方都能听到这个单词，而且要大声的讲，freak！！</p><p>我觉得我也是一个freak。起码也很怪。我真的不喜欢写日记，但是我确实现在在做类似的事情。我会说写日记的人都是傻逼，其实并不是说我觉得写日记的人都是傻逼，我想表达的意思其实是我如果自己写日记，那么我绝对是个傻逼。我希望你如果是一个写日记的人，请不要觉得我这个人很坏，有问题，我对写日记这种事情抱有完全的中立态度，只要人们喜欢，他们就应该做自己喜欢的事，要不就会像我这样，不知道应该做些什么。</p><p>我如果写日记(当然那种事不会发生)，我想我会写一些内心的东西，和我完全不同的东西，因为我越来越觉得我和我的思想是两种不同的人。</p><p>哈，我明白了，这也是一个问题。我的躯体圈养着我的灵魂，然后以令人窒息的方式束缚着它。我从没有完全表达或者释放过我自己，某些情况下是一件好事，因为这让别人觉得我这个人还行。如果他们真正的了解我，就不再那么想了。</p><p>心情和躯体无关，它是思想上的事情，所以很有可能是因为我的灵魂想出来透透气，所以心情才不太好。</p><p>不过显然它被关了太久，已经不知道如何出来了，完全没有一丢丢要出来的意思。</p><p>暂时把它记下来吧，等到哪天它真的想要出来的时候，我会看看是不是它让我心情不太好。</p><p>真糟糕啊，我还没有找到一个答案，却发现了更多的问题。</p><h3>别人的看法</h3><p>我经常提醒自己，别人对我的看法一点都不重要，因为这既不能决定我是怎样一个人，也不能改变我是怎样一个人。况且如果你仔细观察别人，理解到他们思想的荒谬夸张，感情的琐碎无聊，你就会明白重视他们的看法是给了他们过高的尊严。</p><p>我明白这些道理，但是我觉得别人的看法可能会帮助我寻找问题，所以我决定重新审视一下自己，然后听听别人怎么说。</p><p>我找了一张纸，将自我感觉的优缺点分开罗列。</p><blockquote><strong>优点：</strong></blockquote><blockquote>利他型人格</blockquote><blockquote>冷静</blockquote><blockquote>没有大的恶习（酗酒，吸毒，嫖娼）</blockquote><blockquote>谦虚</blockquote><blockquote>能有好的想法</blockquote><blockquote>运气好</blockquote><blockquote>清醒</blockquote><blockquote><strong>缺点：</strong></blockquote><blockquote>自卑</blockquote><blockquote>不够果断</blockquote><blockquote>贪心</blockquote><blockquote>不会拒绝</blockquote><blockquote>不会放弃</blockquote><blockquote>对有些事情执着（缺心眼）</blockquote><blockquote>总是想要得到答案</blockquote><blockquote>自以为是</blockquote><blockquote>喜欢观察别人</blockquote><blockquote>嫉妒心强</blockquote><p>我不想再往下写了，我明白是我自己不大喜欢我自己。如果通过简单地加减法来判断自己，我应该是一个坏人，或者烂人。十条缺点，七条缺点，那我是一个获得了-3分的人，这个分数不怎么好。更糟糕的是，这些问题都是主观问题，而且是从一出生就带着的问题，应该是改不掉了。</p><p>我觉得不只上面这些，如果我想，我可以写满一整张纸，然后再把他们撕得粉碎，但这样做没有任何益处，因为这些问题不会随着纸张的粉碎而消失。</p><p>我想听听其他人的意见，我突然就有了一个愚蠢的计划，找不同的人，听听他们对我的意见，什么都行。</p><p>这个行为可真够傻逼的，大多数人都会觉得我在开玩笑，然后回复我另一个玩笑，或者干脆直接问我，你是不是有什么毛病。</p><p>也有人会采取最明智的选择，避免回答或者拒绝回答。</p><p>说真的，我觉得我想要知道这些，而且想要知道真正的回答，而不是带有顾虑的文字，这没什么意义。如果有人说你可真是一个烂人，我觉得我还是蛮开心的，起码有人和我想法相同，我可能会对他说，你说的对极了，你是为数不多的聪明人。</p><p>于是我先找了一位共处的同事，和一个老朋友。以下是他们的回答：</p><p><img src="https://www.im6767.top/articlePlates/1626829600294.jpg"></p><p>不多，应该确实是他的想法，不过总觉得他话说了一半，这也可以理解，如果是我，我也不会讲出来另一半。</p><p><img src="https://www.im6767.top/articlePlates/1626829810958.jpg"></p><p>挺纠结一个人，说的很委婉，但是我觉得没什么问题，我确实有够纠结的，很有行动力这件事儿我没有感觉出来，但是就这样吧，毕竟是特别好的朋友。但是我觉得这个不是造成我问题的问题。</p><p>还好，我决定扩大范围，再问几个朋友。</p><p><img src="https://www.im6767.top/articlePlates/1626843222938.jpg"></p><p>我有些犹豫了，就像她说的，她的反馈对我没有多大的帮助，而且这些评价也确实不会让我变得更好或者更坏。不过她不想，我完全理解，人不应该做自己不想或者不喜欢的事，归根结底，是我不应该问这个问题，提出这个要求。是我的问题。</p><p>可是我想不到别的方法，而且我不讨厌这个问题，也或许其他人的回复可以让我有所发现，所以我还是决定继续问下去。</p><p><img src="https://www.im6767.top/articlePlates/1626915632952.jpg"></p><p>前同事相关，文字最多的答复。</p><p>冷漠，冷血，是的，我很同意，是聪明人。我意识到，对生活周遭事物的漠不关心，可能要比我预想的持续时间更长一些。可我以前真的不这样。</p><p>我索性将其归结为年岁带来的变化，但这个解释我自己也不太认同，因为年岁变化是稳定的，人人都会经历年岁的增长，但是他们确实不这样，他们就不冷漠，非常热忱。问题还是出在我这里。</p><p>讨厌计划，没有问题，我确实讨厌计划，是因为我没有做出过满意的计划，总有一些计划之外的东西。我有点完美主义情绪，如果事情和自己发展的不一样，我就会生闷气，觉得接下来的一切都不正常了，所以除非非常有必要，我可能真的不会去做计划。</p><p>难以走进，这个问题我没有想过，从来没有。我觉得这是她这么认为的，仅仅只有她有这种感觉，不过我还有一个朋友也有类似的看法，看来这也是一个问题。</p><p>我总认为得有一点距离，我不知道如何维持绝对的亲密关系，索性给自己留下一点空间，将这条红线画得稍远一点。</p><p>我不觉得距离有什么错，我也不会向别人表达真我，除非我真的很信任ta，而ta也同样信任我。以相同的标准交换，我觉得这没什么问题。</p><p>自己难以走出，这显而易见，否则我不会问出这些傻逼的问题，为什么我要弄明白是什么让我变成了现在这样，这个问题的答案或许就和生活中其它的一切一样无意义，但是我仍旧被困在这个问题里。</p><p>我隐约觉得，我生活中的一切都应该停一停，直到我解决这个问题为止。</p><p>以上，对这位朋友辛苦码字表示感谢。</p><p><img src="https://www.im6767.top/articlePlates/1626930924795.png"></p><p>我很高兴这个世界上又少了一个我这样的人。好在情绪没有守恒定律，这个世界上可以每个人都有好心情，而不用担心你的快乐必定会有另一个会感到悲伤。</p><p>但是我这样的人确实不好，如果没有特别的理由，我很不希望有人会变得和我一样。</p><p>思虑过度，这个问题我也确实有，我自己明白。但我放弃去解决这个问题，我不知道有没有人能够完全控制自己的思想，反正我不行，我永远被自己的思想牵着鼻子走。我不知道如何让脑袋停止思考一些事情，它们总是在你大脑运作的每一个时刻冒出来，非要折磨你解决它为止。</p><p>我怀疑我天生带有基因缺陷，才使我丧失了这种能力，可惜现代医学还是不够发达，涉及到基因的问题人类显然还是像个白痴一样。我开始后悔没有从一开始就意识到自己的基因缺陷，这样我可能会努力成为一个生物基因学科学家，然后想想办法治疗自己。</p><p>不过这个想法很蠢，因为现在的我连有没有生物基因这个学科都不敢肯定。</p><p>我有点绝望，我预感到，问题的终极答案可能根本就是一个不可解决的问题，我可能要永远保持这种状态了。</p><p><img src="https://www.im6767.top/articlePlates/1626954442817.jpg"></p><p>大家的答案似乎确实这么简单，出去走走，做出改变，远离一些东西。</p><p>我很高兴仍旧有人可以认真回答我提出的傻逼问题，帮助我来寻找问题的根源。</p><p>有一点独，我不确定这是一件好事还是一件坏事。我从发自内心觉得，人类社会之所以创造出快乐，就是因为relationship，离开了人际关系，这个世界的运转和机械就没有什么不同了。</p><p>不过我从这种关系中获得的感觉并不很好。我想把一切都维持在一个平衡之中，不允许出现任何失衡的情况，但在人际关系方面这样的平衡非常困难，所以我认为这是复杂的事情，复杂的事情就是很难以处理。</p><p>这个人很冷，不够热。这或许是大家对我的看法。</p><p>这就是根本问题吗？我突然没了想法。</p><p>那些被我问题打扰的人，某种程度上都是被挑选过的，我依旧会衡量他们，保证这个问题不会让他们感到厌烦，不大会干扰到他们的生活，并且他们的回答可能对我有利。</p><p>是的，潜意识条件还是决定了一些人选。</p><p>还有一些人，我非常想了解他们的看法，不过还是算了吧，我觉得他们的回答可能会让我更加不愉快，我有点儿恐惧他们的答案。</p><p>这个问题有可能就是根本问题，我也如此希望。我需要想一想，好好想一想。</p><h3>不拒绝，去接受，试着解决</h3><p>有些人很有思想，他们的灵魂很丰满，而不是单调幼稚的躯壳，我很喜欢这样的人。</p><p>很显然，小王就是这样的人，很棒。</p><p>昨天有朋友过生日，邀请参加生日活动，内容是剧本杀，我接受了。</p><p>我以为我会拒绝，因为这段日子我没心情，对一切都没什么兴趣。</p><p>再者剧本杀这种东西不大适合我，因为本质上我是一个无趣的人，一个冷人，然而很明显，这种活动是热人参加的，而且大多都是陌生人。</p><p>即使抛开主观原因，也有一大堆客观原因可以拒绝，例如台风烟花就要来了，雨下的很大，出行很不方便。</p><p>长桌，九个人，一个有那么一点离谱剧本。</p><p>大家都很和善，也不难融入。有一个姑娘很有趣，我喜欢她的头发颜色，她确实有那么点成团偶像的意思，是一个游戏老手，我觉得她很有意思。</p><p>有一个男生很像我一个朋友，特别是他歪着头说话的时候，语速不快，我挺喜欢他。</p><p>有一个男生偏沉默，不怎么说话，我试着和他多聊聊，但是他反应不多，我觉得他可能不喜欢我，我说不出来原因，也没有什么问题，每个人都有自己不喜欢的人，很多时候也没有理由。</p><p>说真的，我挺喜欢这个过程，当结束的时候我发现，在这六个小时里，我的心情确实变好了，脑袋中的怪想法也暂时消失了，找到了久违的放空时刻，哪怕只有短暂的6个小时。</p><p>结束之后，我和小王同学决定就近吃完饭再回家。她带我去吃一家海鲜餐厅，不大，也不是很显眼的位置，不过我喜欢这种地方。</p><p>简单地几样菜，合胃口，粥也好喝。</p><p>我一直想了解她，就是想，也没有什么理由。</p><p>她喜欢看电影，我也喜欢，而且我们看过很多相似类型的电影，一些别人不太关注的类型。</p><p>她喜欢阅读，我也喜欢，我们在阅读这件事上也保持有一定的偏好，我觉得太棒了，她读过的比我多，我有点嫉妒她。</p><p>她在很多事情上和我保持有同样地看法和意见，但她似乎一下子就能从事情看到问题所在，我却要想好久，我很羡慕她。</p><p>她喜欢话剧，喜欢古典文学，喜欢思考，同时也接受新事物。关键是，她还有和她想法和爱好非常一致的朋友。</p><p>我目前经历的一切，她表示理解，或许是因为她有类似的经历，我想从她那里得到答案，到底是哪里出了问题，渐渐地我突然发现，问题似乎就出在，我想知道问题在哪里这件事上——问题是什么并不重要，重要的是需要解决它。</p><p>我明白了一个可能是显而易见的道理，有些问题即使你不知道为何发生，也可以着手去解决它。即使感到焦虑，感到失败，感到痛苦，这样的日子和感觉什么时候会消失，这个问题没人能够回答，只有时间和距离能够给你答案，我所要做的，就是如何熬过这段时间。我不喜欢做计划，我也不会为这件事做计划，我所要做的，就是着手开始改变，哪怕只有一点点。</p><p>她对我正在阅读的东西提出了批评，用情绪对抗情绪是一种好方法，情绪不好的时候，就应该阅读快乐的东西，那些忧伤的文字，留到心情好的时候去读，我完全接受。尝试转移自己的注意力，例如用运动来填补自己，我完全接受。</p><p>我喜欢她的意见，因为这和别人给出的答案不一样，我觉得很新鲜，我可以不反对的接受她给出的所有意见，因为我觉得这没有什么问题，她是个好人，起码在这件事上，她没有坏心眼，我喜欢这种踏实感。</p><p>她让我明白，在我寻找问题的过程中，我将眼光完全放在了那些问题上，完全无视了生活中的那些小快乐，而这些小快乐的聚集，才是一天心情中的大快乐。</p><p>我特别喜欢她给我提供的方法：每天记录自己生活中的可爱瞬间，不要繁杂，简单就好，试着从这些东西中找到问题的解决之道。</p><blockquote>今天参加了朋友的生日聚会，感觉不错，蛋糕也挺好吃，草莓酸的够过瘾。</blockquote><blockquote>和小王同学的闲聊太棒了，这是三个月以来最棒的一次聊天。</blockquote><blockquote>晚上朋友发了一条微信状态，用的是我写给她的祝贺明信片上的话，我觉得她对这份礼物感到满意，我很高兴，顺便点了赞。</blockquote><blockquote>小王同学和我分享了她的可爱瞬间记录，我觉得她可太棒了。</blockquote><p>嗯，感觉不错。</p><p>在昨天那个风雨交替的日子里，我的生活放晴了一段时间。</p><p>不拒绝，去接受，试着解决，这是台风来的前一天，我学到的一切。</p><h3>不是清空，而是填满</h3><p>我花了很久时间消化从上一次聊天中得到的有用信息。</p><p>如果你对数学和物理感到有兴趣，你一定无法抗拒将复杂的道理简化成一个公式带来的惊喜快感，用简洁的表达来阐述对生活与生命的发现，这是我无法抵抗的魅力。</p><p>可惜我的大脑无法很好地胜任这个工作，我需要用很长的时间来思考，试图从一切繁杂的信息中提取出最简单的内容。</p><p>幸好聊天的内容不是那么复杂，经过思考仍旧能够获得想要的答案：</p><blockquote>重要的不是清空，而是填满。</blockquote><p>我想知道问题的出发点，然后将它踢出自己的脑袋。</p><p>我觉得我的脑袋像一个垃圾桶，有太多的无用信息一直堆放在里面，我觉得是这些造成了现在的问题，我想把他们丢掉。我多想自己的脑袋里也有一个Delete键，可以一键删除所有自己不想要的东西，给自己的脑袋腾点空间出来。</p><p>每天早上丢掉的问题，在晚上又会原封不动的回到自己原先的地方，然后等待第二天的清空，如此重复。</p><p>&quot;你应该投入到某件事中，转移注意力，以此来抵抗冒出的怪想法。&quot;</p><p>我完全走反了这条路。一切问题的关键不是清空所有，而是用其他事情来填满自己。</p><p>生活如此，感情也是。</p><h3>抽象与具象</h3><blockquote>陀思妥耶夫斯基告诉我们</blockquote><blockquote>要爱具体的人</blockquote><blockquote>不要总是想着爱抽象的人</blockquote><blockquote>知识分子的一个经常性的倾向</blockquote><blockquote>就是我们喜欢抽象概念</blockquote><blockquote>我们胜过具象的事物</blockquote><blockquote>但是一个越爱抽象人的人</blockquote><blockquote>往往越难对具体的人表现关爱</blockquote><blockquote>因为抽象的人是美好的</blockquote><blockquote>抽象的人存在于理念之中</blockquote><blockquote>但具体的人都是有缺陷的</blockquote><blockquote>所以这就是为什么</blockquote><blockquote>你越是感到抽象人的美好</blockquote><blockquote>你越会发现具体人</blockquote><blockquote>你身边人的可恶可鄙可耻</blockquote><blockquote>但是真正的爱</blockquote><blockquote>一定是对具体人的爱</blockquote><blockquote>所以这就是为什么</blockquote><blockquote>在现代社会人会越来越孤独</blockquote><blockquote>因为你的朋友圈越来越多</blockquote><blockquote>你感觉认识你的人和你认识的人越来越多</blockquote><blockquote>你甚至可以跟3000公里以外的人聊天</blockquote><blockquote>但是你却跟你身边的人没有话聊</blockquote><blockquote>而真正的感情</blockquote><blockquote>一定是要投入时间的</blockquote><blockquote>真正的情感</blockquote><blockquote>一定是附着在一个具体人的对象</blockquote><blockquote>所以我们需要有抽象</blockquote><blockquote>我们更需要有具象</blockquote><blockquote>抽象是对自己的</blockquote><blockquote>抽象不是对别人的</blockquote><blockquote>当你看到了人的美好</blockquote><blockquote>你要努力让自己变得美好</blockquote><blockquote>而不要因为人的美好</blockquote><blockquote>就要强求你身边的人变得美好</blockquote><blockquote>因为连你自己都不美好</blockquote><blockquote>你为什么要强求别人呢</blockquote><blockquote>你自己都做不到</blockquote><blockquote>你为什么要强求别人呢</blockquote><blockquote>但你看到了抽象的美好</blockquote><blockquote>它提供了一个标本</blockquote><blockquote>来改造你自己</blockquote><blockquote>让你自己能够更关心你身边的人 ​</blockquote><h3>自由的风和日落黄昏</h3><p>昨日就计划今天出门骑行，不知不觉中就成了一个目标。中午的时候太阳很毒，我有点拿不定主意，这样出门的体验肯定不太好，况且可能会中暑。我开始查找资料，例如：夏天高温可以室外骑行吗？夏天高温出门运动肯定会中暑吗？中暑有什么后果？</p><p>会死。</p><p>大概什么样的疾病都有可能造成这个后果。</p><p>中暑轻则乏力，重则休克死亡。甚至有人给出了中暑的预测表，我对照着查了一下，36度的环境温度，空气湿度50%，体感33度，是高风险中暑状态。</p><p>我开始感觉到沮丧，索性倒头开始睡觉。空调一直发出细微的嗡嗡声，就在这样的声音中，小憩了大概30分钟。其实也没有怎么睡着，我一直在想怎么度过接下来的十个小时，我不能让自己闲下来，否则那些让情绪变坏的念头会迅速侵占我的大脑，这让我感到恐惧。</p><p>我到底在顾虑什么？我想。想要回家，却考虑机票太贵；想要大醉，却害怕出糗；想要自由，却担心太热，或是太冷，太晴，或是大雨；想要离职，却恐惧未来。我好像总想找到一种方式，让自己失去的最少，但是获得的最多。说白了，就是贪心，这种顾此失彼的心态让我无法感受到百分百的快乐，我决定抛下这些生命不可承受之重。</p><p>我立即从床上起来，穿戴好装备，确定好路线后开始向目的地进发。</p><p>风永远是自由的，我在和太阳赌气。天气很热，我骑得很快，我想看看自己到底有几斤几两。我不断的加速，争取在每个红灯到来之前冲过路口，因为我知道走过这些红绿灯，接下来的路程将畅行无阻。进入西湖风景区以后，车辆明显减少，其他的骑友也变得多了起来。我决定从灵隐路到云溪竹径。</p><p>从灵隐开始，出现了不小的一段上坡路，我开始感到吃力——因为骑行节奏变化带来的不适感。我不得不站起来开始摇车，但是效果也不明显，车已经到了快要失去速度的地步，我的膝盖有挤压般的疼痛，但是我不想停车。</p><p>我就是不想，我要骑完全程，骑完的意思是，只要是移动状态，那么就应该是在骑行状态的，而不是在推车，我不想放弃。好在这段坡道虽然有点陡，但是不长，我还是顺利摇到了坡顶，接下来是一段下坡路，我索性松开了刹车，让自己自由的驰骋在马路上。</p><p>这一刻我是自由的，风在我耳边呼啸。法喜寺附近人很多，大多是男女情侣，身着汉服，我有点羡慕他们，就是羡慕，没有什么理由。</p><p>好景不长，又一段更长的上坡出现了，我又不得不开始摇车。真长啊这段坡，经过前一段坡道后，我的膝盖明显不想再承受类似的压力，它有点想要放弃。</p><p>我在逼迫它工作，疼痛感让我难受，我觉得我不行了，我必须下车推行。这个时候，我担心的时刻又出现了，眼泪开始不由自主的往下掉，一种挫败感和失落感迅速侵占了我大脑的每一个角落，我看不清前面的路，所以我乖乖选择了下车。周围有很多人，我尽量理他们远点，开始推行。这次的爆发也并没有持续多长时间，很快就恢复了平静，推到坡顶，我发现接下来是一段隧道。</p><p>说到隧道，我可能有轻微的幽闭恐惧症，在隧道中的骑行让我觉得可怕，风道的声音像怪物的咆哮，我脑海中想起了克苏鲁，我加快了骑行步伐，甚至忘却了不适感。</p><p>接下来的4公里左右骑行道路无比舒服，因为全程下坡，车也很少，我几乎没有减速，全程狂飙。我的心情好极了，在一座桥上看到右侧的茶山和太阳，我觉得一切的疼痛都是值得的，哪怕只能看一眼这样的景色。</p><p>身体的疲劳感居然可以带来精神的愉悦感，有那么一瞬间我觉得我是这个世界上唯一的人，我拥有整个世界。</p><p>我开始奇怪，现在的自己居然可以如此之快的进行情绪的转化，可以在崩溃之后迅速建立起对生活和世界的热爱。</p><p>云溪竹径有很多游客，大多是年轻人，汉服，照相机基本是标配，我也喜欢看她们，我觉得很有趣，大家对一件事情产生兴趣，然后产生美，然后记录美，世界就是这么美起来的，不是吗？但是我又觉得普通，每个人都普通。她很美，很漂亮，身材很棒，声线好听，但是很普通。对，但是很普通。</p><p>落俗，我觉得我在嫉妒他们，但是又觉得不是。我觉得是因为思想不够丰满。休息时听到了他们的言谈，这是他们的思想的外露，很普通，和大多数人没什么区别，漏洞百出。</p><p>太阳落的很快，我想要在晚饭时间之前回到住所，所以大致休息了半小时之后，我开始跨上返程的路。我有点发愁，因为享受过下坡的快感，我知道返程就要经历上坡，我决定适当放缓速度。</p><p>路上的骑行者也多了起来，他们大多在太阳落山之后才行动，享受夜晚骑行带来的快乐。我做不到，我的住所离西湖比较远。我突然觉得，享受自由这件事儿，还是被加上了一些条件，你还是要做出一些选择，被环境所限定的一些选择。</p><p>回来的时候赶上晚高峰，人很多，大多数人带着安全头盔，从事建筑工作的那种，数量多的出乎我的意料。</p><p>我总是对这些体力劳动者持有一种喜爱和可怜的情感。喜爱源自于自己的生活经历，&quot;大多数&quot;群体自始至终给我更多的安全感。可怜是因为那一点社会的不公平，我绝不认为工作有高低贵贱之分，但是社会给与他们的回报和舆论地位让我觉得心酸。</p><p>在路口的时候，我看到了日落。</p><p><img src="https://www.im6767.top/articlePlates/1630494320967.jpg"></p><p>我喜欢日落，大概和小王子一样喜欢。小王子一天能看44次日落，我不行，我每天只能看到一次，还要是在晴天的时候。</p><p>我停留在十字路口，望着日落和云层出神，脑袋里想起了《日落大道》：</p><blockquote>我们寻找在这条路的中间</blockquote><blockquote>我们迷失在这条路的两端</blockquote><p>家乡的日落和杭州日落的不同在于风，家乡日落时，气温有明显的下降，配上傍晚的风，让人感觉舒服，杭州的日落时分还是很热。</p><p>没有了温暖的日落，我是不是真的还有活在这世界上的勇气呢？我不知道这个问题的答案，但我知道，这世界上也有很多人在和我一样拼命寻找什么东西，但却真的忘了停下来抬头看一眼落日。</p><p>我还是没能解决我自己的问题。在忙碌时，我可以忘却一切的烦恼，但是当这段时间过去，一切不愿意回忆的东西又会重新涌上脑袋。</p><p>有的时候已经到了每天一睁眼，就开始但又和恐惧这种状态，害怕它随时占有我。</p><p>我需要，尽快的，解决这个问题。</p><h3>我很愚蠢</h3><p>对于愚蠢我一直无法忍受，不管是别人还是自己。我尽量保证自己不说愚蠢的话，因为我觉得有人和我一样讨厌愚蠢，我不想影响他们的心情。</p><p>我觉得这个世界真的经不起推敲，如果你以比较严格的眼光去观察这个世界，你会发现愚蠢占大多数。</p><p>我知道这样是不对的，我们应该喜欢具象的世界，而不应该以抽象约束具象，但是我还是难以忍受。我觉得奇怪的是，有人其实意识不到自己的愚蠢。</p><p>是我的问题，我想。我以一种愚蠢的方式生活在这个世界，所以总觉得有很多愚蠢，但是没有人教过我应该怎样看世界。从来没有。</p><p>以前的我总是想要消灭愚蠢，当然我是说那些在我的认知世界中的愚蠢，于是我喜欢与它们搏斗。当听到愚蠢的言论时，我便和它的主人争论起来，想要让他意识到这样的行为或者言语是愚蠢的，有的时候争得面红耳赤，甚至为此发了脾气。但是在不久的将来，同样愚蠢的话语还是会从他的口中说出来，所以愚蠢是消灭不了的。</p><p>当自己达到自己的认知天花板时，如果还不抱有敬畏与谦虚之心，接下来的行为就会变得愚蠢。</p><p>既然愚蠢消灭不了，那么让他离我越远越好，越远越好。</p><p>有的时候听的不耐烦，我便开始赞同他们的看法，恩，是的，非常对。不让大脑去思考他们所说的一切，只管承认他们，我只希望他们能快点闭嘴，还我一点清静。</p><p>大多数人在得到被肯定的满足后就会停止他们的愚蠢，我喜欢这样的人，他们容易满足。</p><p>还有一部分人则不这样，他们可能更聪明，因为他们似乎觉得你不是打心底承认他们，他们就开始气急败坏了，开始被自己的愚蠢控制，于是对你冷嘲热讽一般才肯罢休，而这么做仅仅是为了满足心中那点可怜的欢愉。</p><p>每次看到这样的人，我就觉得好笑，思想浅薄到近乎裸奔，但自己却觉得自己身着盛装。</p><p>但是这样的人不坏，因为我们大多数都是蠢蛋，你如果非要把自己归在蠢蛋里稍微聪明点的那一类，那我也同意。</p><p>我在想，我以为自己看到了愚蠢，其实这也是一种愚蠢。</p><p>这是一句废话，所以说这样的废话就是愚蠢。</p>',272)]))}const bj=A(_j,[["render",yj]]),vj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:fj,default:bj},Symbol.toStringTag,{value:"Module"})),wj=JSON.parse('{"title":"我将尽力遗忘这一年","description":"","frontmatter":{"title":"我将尽力遗忘这一年","summary":"我被困在这段时间，奋力挣扎。","date":"2021-12-02T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/我将尽力遗忘这一年.md","filePath":"content/blog/我将尽力遗忘这一年.md"}'),kj={name:"content/blog/我将尽力遗忘这一年.md"};function qj(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>或许开始就是错误</h2><p>2020年，我觉得一切都在变好。平稳的生活节奏，更加舒适自然的社交关系，生活中的一切都在朝着自己期待的方向发展。我总觉得我本质上是一个幸运的人，因为我的生活中没有过“最糟糕”的时刻，一切事物都没有走向最坏的一步。我对这种生活的平衡感到意外的满意，它舒适到让你丧失了对外界生活的一切期待，让你觉得永远停留在此时是值得的选择。</p><p>可惜这一切消失的很快。</p><h2>爱与向往</h2><p>在我短暂的20多年生命时光里，我逐渐意识到，所有的悲伤与不快乐，都来自自己生活内容的丢失。</p><p>从去年的某个时刻开始，我意识到我可能遇到了人生中最想要得到的一个人。我本身是一个无可救药的理智情感主义者，她开始充斥在我大脑的每个角落。我开始在自己的生活中寻找和安插关于她的一切，我在观察她，观察这个令我着迷的个体。我也习惯观察其他人，总是能在观察中发现个体的缺陷，然后为TA贴上&quot;非完美个体&quot;的标签。请原谅我的这种鲁莽行为，并且请理解，“非完美个体”绝对是一个理智的，不参杂感情的中性标签，因为我也会给自己贴上类似的标签，顺便说一句，我给自己贴上的标签，远比“非完美个体”更加可能让你感觉到不适与生气。</p><p>我却只能给她贴上“完美个体”的标签。</p><p>我开始给她生活中创造惊喜，开始尝试融入她的生活，然后很快就变的不可收拾。我开始希望我的一切都和她有关。发现在她的生活中出现其他人的身影的时候，我会变的低沉失落。当我发现她似乎和我有同样想法的时候，我决定更近地迈出一步。</p><p>经历了一些波折之后，在我25岁生日当天，我拥有了她。不过很快就结束了这一切。</p><p>我觉得是她太完美了，而我是有瑕疵的。而且我本身是一个不太会去处理亲密关系的人。在后来朋友推荐一本叫做亲密关系的社会学研究书籍中，我意识到我是一个介于痴迷型和疏离型人格的人，在希望的到亲密关系的同时，在怀疑对方和我的情感不对等，也会害怕亲密关系会对自我造成伤害。这种心理给她造成了比较严重的心理负担。亲密关系中的人格可以互补调整，但这需要时间，可惜我没有得到类似的机会。</p><p>我对她，对这段经历的期望太高太高了，以至于当我落地的时候，我摔的很惨。在回忆并且敲击这些文字的时候，我依然没有从中走出来。不久之后我意识到，她可能已经进入另一段经历，我决定不再去打扰她了，退出她的生活才是对她的最大尊重。</p><p>我花了很长时间去讲她从我的生活中抹去，但是至今也没有完成这个工作。不过现在，我们的生活交集已经完全消失，不妨让时间去解决一切问题。</p><p>在结束这个段落之前，我问自己，我现在又对她有多少感情呢？我觉得答案是：和开始时一样多。</p><p>有些遗憾，真的会是一生的遗憾啊。</p><p><img src="https://www.im6767.top/articlePlates/1650098330795.jpeg"></p><p class="ql-align-center">（封存关于你的一切）</p><h2>坠落</h2><p>在书写《我也是个年轻人，我心情也不太好》时，我已经觉得自己变了。我开始对生活感到沮丧，感到慌张。四月多时，有几个同事离职了，开始了新的生活，我开始思考这种改变。我发现我对生活的改变似乎有一种恐惧感，因为我怕变得更糟。我现在过的很舒服。随着公司人员流动和部分制度的调整，我开始找不到工作节奏，工作也开始变得一团糟。逐渐我发现我的心理可能真的出了问题，我开始寻求心理治疗，医生给出的诊断结果是不良状态，需要调整。在长久的丧失工作成就感之后，我得到了一个改变的机会，有机会去公司的其它小组，来给生活一点不一样的东西。我带着逃离她和寻找新的工作节奏的目的，加入了新的公司小组。我拼命熟悉和处理新的工作内容，解决问题，我提醒自己要用热情迎接新的内容，要改变，要做出一些成绩，要有成就。</p><p>不过这样的心态没有持续太久。我觉得新的工作小组是有问题的，它的工作节奏非常奇怪，我遇到的工作阻力大于动力。很快我觉得我的生活状态又回到了开始时的样子。</p><p>有一天，我看到新来的两个同事在我旁边讨论工作问题，他们的言语与眼神中有一种情绪，让我感受到一种冲击力。我发现这就是我丢失，想要寻找的东西。</p><p>我突然明白，工作不是目的，工作是过程。我不应该毫无目的坠落，寻找节奏和本源才是当务之急，这个舒适到丧失外界期待的环境中不再有我所追求的东西了。尽管我不知道我所寻找的东西在哪里，但肯定不再这里。所以离开变成了不愿经历但是必须经历的内容。</p><h2>交个朋友和朋友的朋友</h2><p>今年遇到了很多很不错的朋友，一些是公司测试的小伙伴交际圈里面的，一些是新的小组的同事。Y是新小组的测试，一个姑娘。我如果是被评价为比较冷的人，那么她就是可以被评价为比较热的人。在新小组的工作过程中，我发现她是容易相处的，拥有有趣灵魂的普通人。有一天她让我评价她，我的评价是，很普通:D，我对她，对这个评价进行了一些解释。这绝对是一个中性偏褒义的评价。</p><p>在她的交际圈中认识了G。我觉得G是一个和她很像的人，我是指社交方面。可能是因为亲密朋友的关系，她们有比较高的同质性。她们和我的固有社交圈风格截然不同，这种差异感让我觉得有趣。</p><p>我现在似乎很少能够感到有趣感，但是在和她们的社交相处中却能找到类似的感觉，我在尝试进入“现代社交”，这在之前我是非常不擅长的。长久以来，除了和之前非常要好的老朋友，我很少能够毫无负担感的享受社交关系，但是在和她们的社交相处中，我拥有类似的感觉。</p><p>其他的社交关系嘛，在其他的博文中已经说过了，不再赘述。</p><p>另：关于G，我开始对她感到好奇。</p><h2>家庭生活</h2><p>今年关于家庭，有两个不错的变化。</p><p>第一个就是我当舅舅了，这绝对是值得纪念的一件事情。国庆节回去的时候第一次见到他，真真是个可爱的小家伙。我开始意识到孩子这个词汇所带来的社会意义，他确实是家庭中非常有趣的组成部分。老爸老妈也经常会逗他。小朋友的笑容是真的能够治愈生活不快乐的部分。也是在这个时候，我突然觉得我姐变成了一个大人。当然我不是指她之前是一个小孩，而是她因为母亲这个标签而变得成熟。</p><p>第二个就是父母决定扩大家中生意的生产规模。这是一个影响家庭的重大决定，因为是要有比较大的经济投入的，父母向来对类似的决定持有非常谨慎和保守的态度。就我个人来讲，我对他们的决定表示非常支持。我的观点是，无论处于什么样的年纪，都有选择自己生活的权利。他们仍旧对生活充满热情，有去做事情的动力，我非常支持他们。我觉得丧失对生活的追求和冲动，远比其他一切来的可怕。</p><h2>关于自己</h2><p>今年的我感觉到被生活困住了，进入了工作倦怠期，失去了生活的热情，丧失了正能量。</p><p>但是好在也有些变化，有了新的感悟和心得成长。没有变成一个懒散的人，很多好的习惯还是保留了下来。</p><p>变得更加自律，更有方向感，处理事物的能力也变强了。学习也有了一定的进展。</p><p>对于自己的进步状态，还是相对满意的。</p><h2>关于未来</h2><p>我想，我应该对现在说再见了。明年我应该会和当下脱离关系，在新的环境新的地点开始新的生活。我会尽量忘却那些需要忘却的东西，去追寻陌生和未知。或许明年我会做一些不同的事情，来解决必须先弄明白的事情，生活的意义和方向。</p><p>关于2022，我希望自己能够更自私一些，更独立一些，更热一些，更果断一些。</p><p>要爱，要追求，要前进！</p>',40)]))}const Tj=A(kj,[["render",qj]]),Sj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:wj,default:Tj},Symbol.toStringTag,{value:"Module"})),xj=JSON.parse('{"title":"搞定chrome扩展开发热更新","description":"","frontmatter":{"title":"搞定chrome扩展开发热更新","summary":"如果你要开发chrome扩展，那么随着功能的庞大，你的体验会直线下降——依赖于chrome的本地文件系统的插件文件无法热更新，你可能需要不断的刷新，重新打开扩展。不过当你看到这篇文章时，以上问题就不存在了。","date":"2022-04-27T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/搞定chrome扩展开发热更新.md","filePath":"content/blog/搞定chrome扩展开发热更新.md"}'),Cj={name:"content/blog/搞定chrome扩展开发热更新.md"};function Pj(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<p>似乎有好一段时间没有更新过新的文章，笔者这段时间终于迈出了久违的一步，从之前的舒适圈里跳了出来。前一段时间也是各种奔波忙碌，中间经过了一段短暂时间的休息，然后进入了新的工作状态。生活还是要前进前进，文章还是要更新更新。话不多说进入正题。</p><h2>起因</h2><p>进入新的工作岗位，经过短暂的工作环境熟悉之后，上手了第一个小任务——对公司开发的一个浏览器插件进行功能维护。当然这也是我第一次写chrome的扩展，好在有之前的代码，功能逻辑梳理清楚之后，在指定的位置进行代码添加即可。</p><p>写代码当然是要经历调试和修改的，是一个不断调整的过程。笔者这里不详细介绍如何进行浏览器扩展开发，只对它的加载方式进行说明：在chrome扩展页面中，开启开发者模式，然后选择<strong>&quot;加载已解压的扩展程序&quot;</strong>，选择你开发插件完整的目录（需要包含HTML，JS，CSS，图片等文件），这是一个指向本地的文件路径，此时就可以在扩展中看到自己的插件了。</p><p>第一个面临的问题出现了：如果要进行插件的开发，那意味着要不断的进行打包，将结果写入指定目录，例如dist，然后在浏览器插件管理页面刷新指定插件，让它读取到最新的文件，然后再打开插件，这听起来真的很糟糕。</p><h2>优美一点</h2><p>以上的问题迟早会让你感到绝望。你要不断的去打包文件，刷新插件，然后观看成果，如果有问题，再次修改，打包，刷新插件，观看成果，然后重复这个步骤。</p><p>顺便说一句，笔者面对这个问题时，整个项目搭建是Webpack + React。</p><p>能想到的最简单的方式是什么？对，利用watch去监听开发目录，如果有文件变动自己去进行打包，然后手动刷新插件，观看成果。</p><p>是的，你解放了一点点自己的工作：你不再需要手动打包了，少了一个步骤。不过当你的项目变得庞大，文件变得多起来的时候，痛苦是加倍的：打包消耗的时间太长了，如果你比较频繁的改动某个功能，你花在修改上的时间可能只需要数秒钟，但是打包却消耗数十秒，基本没有开发体验。</p><h2>再优美一点</h2><p>能不能更好？答案肯定是可以的。通常webpack在开发模式中，会提供一个本地服务器，webpack的配置中，devServer下面的devMiddleware提供了一个配置项：</p><pre class="ql-syntax" spellcheck="false">module.exports = {<span class="hljs-string">devServer:</span> {<span class="hljs-string">devMiddleware:</span> {<span class="hljs-string">index:</span> <span class="hljs-literal">true</span>,<span class="hljs-string">mimeTypes:</span> { <span class="hljs-string">phtml:</span> <span class="hljs-string">&#39;text/html&#39;</span> },<span class="hljs-string">publicPath:</span> <span class="hljs-string">&#39;/publicPathForDevServe&#39;</span>,<span class="hljs-string">serverSideRender:</span> <span class="hljs-literal">true</span>,<span class="hljs-comment">/* 就是这个, 将文件写入磁盘 */</span>\uFEFF
<span class="hljs-symbol">      writeToDisk:</span> <span class="hljs-literal">true</span>,},},
};\uFEFF
</pre><p>在webpack的热更服务中，生成的文件是在内存中的，而通过writeToDisk则可以将内存中的文件写入到磁盘中。一个新的思路诞生了：通过开启这个配置，将文件写入到磁盘内，然后让插件的位置指向写入的文件路径。</p><p>在这种情况下，我们既能够享受热更本身带来的加载优化，也能够达到我们的目的。我们不再需要去写watch监听目录，因为这一切webpack已经帮我们做好了。开发似乎变得优美了起来：不写代码，效率更高。</p><h2>还不够</h2><p>尽管比起一开始的开发，我们似乎已经舒服了不少，但是整个开发过程仍然让人抓狂：</p><ol><li>webpack虽然好用，但是它的热更新效率可不怎么样，你有试过有很多包的项目开发吗？热更的效率绝对会让你感到绝望。（当然它某种程度上提高了开发人员的幸福程度，毕竟在热更的时候，你完全可以摸鱼）</li><li>文件写入了磁盘，但是插件并不知道文件发生了更新，我们仍然需要手动刷新插件才可以让它获取到最新的内容，愚蠢。</li></ol><p>我们需要继续思考一下如何解决这个问题。</p><h2>逐个解决，再快一点</h2><p>我们当然可以优化webpack的热更效率，但是笔者不会这么做。优化webpack的热更效率是一个比较麻烦的工作，而且所得到的提升远不及自己的预期。</p><p>笔者推荐使用vite。</p><p><img src="https://www.im6767.top/articlePlates/1651114601663.jpg"></p><p>作为下一代前端开发与构建工具，vite一个很重要的特性就是极高的热更新效率，因为它基于浏览器本身对module模式的支持和底层的esbuild的快速。如今的vite已经不新鲜了，它也在不断壮大，并且对主流的技术框架都有了完美的支持。</p><p>那么我们不妨直接使用vite！</p><h2>我不想要手动刷新了</h2><p>我们开始想办法解决第二个问题。分析原因其实很容易知道，在前端开发中的热更新工作都是在一个&quot;服务&quot;中完成的，大致原理就是在服务和前端页面之间建立双向通信，发生文件更改之后，将修改信息推至前端，前端页面进行相对应的替换更新。</p><p>但是我们的插件不是基于一个服务，而是基于本地文件系统，所以二者无法集成。</p><p>搜索资料能够发现，很多人都想到了一个方式：在文件中自己构建一个webSocket服务，和启动的服务建立通信，当本地文件发生更改之后，调用浏览器为扩展提供的刷新方法，整个刷新插件，达到实时更新的目的。</p><p>99.999999%的人认为很酷，市面上通用的解决方案都是这个方案的变种，人们在欢呼终于解决了这个问题，但是它仍然有一点点不能算是小问题的问题：</p><ol><li>文件更新之后，整个插件文件是整体刷新的，相当于页面进行了reload。我们可能会丢失很多信息，例如你的扩展中有很多页面，你需要进入首页拿到信息，再进入菜单拿到权限，再进入你修改的页面进行调试，但是当你修改了你页面中的一个小部分之后，你的页面重新加载了，你仍然需要进入首页拿到信息，再进入菜单拿到权限，再进入你的修改页面......假如你调试的是一个复杂的表单，你可能需要先填写数十个筛选项，这样的刷新之后你又要重新开始。</li><li>我们刚刚解决的热更效率的问题，在这样的模式下瞬间破灭了：因为vite的快速一个很大的原因就是只会加载所需要的部分，而不是整体先进行加载，所以当我们启动一个vite服务之后，它实际上一开始什么都不会生成。一方面vite本身不提供将模块写入本地文件的方式，另一方面也没法提供，因为文件不使用的时候不会生成，连vite也不知道要生成什么。</li></ol><p>第二个问题实际上是有解的，即然webpack提供写入磁盘的能力，vite也可以通过插件。你完全可以通过自己完成一个插件，将文件写入到磁盘里。这个动作可以在本地服务器返回文件的时候完成，因为只有在请求收到之后，vite才会进行构建，然后返回结果。那如何请求呢？你可以有另一个服务，向vite服务发送请求......</p><p>我不再喜欢这个方案了，为了一个小问题，我们可能会遇到更多的问题。我们引入的工具越来越多，但是都不能完美和问题契合。</p><h2>代理</h2><p>那么如何能完成这样一个工作：看起来是在请求一个文件，但是实际上请求的是另一个文件？</p><p>在这个实际场景中，就是如何能看起来是在请求本地的文件系统中的文件，但是实际上请求的是vite服务中的同名文件？</p><p>很容易想到这就是&quot;代理&quot;的功能。我想到了Fiddler，很常用的具有代理功能的工具，不顾我没有尝试使用Fiddler，所以我不确定它能不能捕捉到chrome发送给本地文件系统中的请求，如果可以捕捉到，那么完全可以让它指向vite服务中的同名文件。</p><p>我没有使用Fiddler的原因是，Fiddler是一个单独的应用，是不可控的。你在使用工具的时候，如果有另一个人告诉你，你用我的工具时，必须使用另一个工具，而他根本不知道你会不会使用另一个工具，这产生了工具依赖的强耦合。</p><p>在进行扩展的调试时，我发现事实上它就是一个在特殊作用环境内的普通前端页面，那么是不是普通的浏览器API在内部也是同样生效的呢？我想到了serviceWorker这个天然的可编程前端代理。</p><h2>开始实现</h2><p>我们利用vite的脚手架工具创建一个初始的react项目，以便测试。首先我们启动项目后，将启动生成的html文件拉取下来，创建成为我们自己的html文件，让扩展读取这一份html文件，它大致长这个样子：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/@vite/client&quot;</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span>
        <span class="hljs-keyword">import</span> RefreshRuntime <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@react-refresh&quot;</span>
        RefreshRuntime.injectIntoGlobalHook(<span class="hljs-built_in">window</span>)
        <span class="hljs-built_in">window</span>.$RefreshReg$ = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}
        <span class="hljs-built_in">window</span>.$RefreshSig$ = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-function">(<span class="hljs-params">type</span>) =&gt;</span> type
        <span class="hljs-built_in">window</span>.__vite_plugin_react_preamble_installed__ = <span class="hljs-literal">true</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>
    \uFEFF<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;image/svg+xml&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/src/favicon.svg&quot;</span> /&gt;</span>
    \uFEFF<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Vite App<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
\uFEFF<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span>
    <span class="hljs-comment">/* 撑开扩展展示的页面 */</span>
    body, html {
      <span class="hljs-attribute">width</span>: <span class="hljs-number">350px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
    }
<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;root&quot;</span>&gt;&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/src/main.tsx&quot;</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</pre><p>为了能够让文件访问到我们的资源路径，我们在所有的script标签src前加上我们的服务前缀。vite默认的端口号是3000，所以我们全部添加上http://localhost:3000。这里需要注意的是，中间有一个内联的脚本，脚本中from了/@react-refresh，我们也要为它加上前缀，变成import xxx from &quot;http://localhost:3000/@react-refresh&quot;。</p><p>接着我们要添加我们的serviceWorker脚本。笔者构建了injection.js，在html页面中进行引入，injection.js内部代码如下：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">// injection.js\uFEFF</span>
<span class="hljs-keyword">if</span> (<span class="hljs-string">&#39;serviceWorker&#39;</span> <span class="hljs-keyword">in</span> navigator) {
  <span class="hljs-comment">/* 当页面加载完成就创建一个serviceWorker */</span><span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">&#39;load&#39;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> () </span>{
      <span class="hljs-comment">/* 创建并指定对应的执行内容 *//* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里，我们指定了 &#39;/&#39;，表示 根网域下的所有内容。这也是默认值。 */</span>
      navigator.serviceWorker.register(<span class="hljs-string">&#39;./serviceWorker.js&#39;</span>, {<span class="hljs-attr">scope</span>: <span class="hljs-string">&#39;./&#39;</span>})
          .then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">registration</span>) </span>{
              <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;ServiceWorker registration successful with scope: &#39;</span>, registration.scope);
          })
          .catch(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">err</span>) </span>{
              <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;ServiceWorker registration failed: &#39;</span>, err);
          });
      });
  }
</pre><p>然后我们要构建我们的serviceWorker。这里不再进行详细的解释serviceWorker的工作原理和开发，直接上代码：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-regexp">//</span> serviceWorker.js
<span class="hljs-keyword">this</span>.addEventListener(<span class="hljs-string">&#39;install&#39;</span>, function (event) {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;install success!&quot;</span>)
});
<p><span class="hljs-keyword">this</span>.addEventListener(<span class="hljs-string">&#39;fetch&#39;</span>, <span class="hljs-function"><span class="hljs-params">(event)</span> =&gt;</span> {
let matchList = event.request.url.match(<span class="hljs-regexp">/chrome-extension://flacfclehibkcmeecdfhnpndcfegamek/(.*)/</span>)
<span class="hljs-keyword">if</span> (matchList &amp;&amp; matchList[<span class="hljs-number">1</span>].indexOf(<span class="hljs-string">&quot;index.html&quot;</span>) === - <span class="hljs-number">1</span>) {
<span class="hljs-built_in">console</span>.log(event.request.url)
requestContent = <span class="hljs-string">&quot;<a href="http://localhost:3000/" target="_blank" rel="noreferrer">http://localhost:3000/</a>&quot;</span> + matchList[<span class="hljs-number">1</span>];
event.respondWith(
fetch(requestContent).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">(res)</span> =&gt;</span> {
<span class="hljs-keyword">return</span> res;
}).<span class="hljs-keyword">catch</span>(<span class="hljs-function"><span class="hljs-params">(err)</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(err)
})
)
}
})</p>
</pre><p>代码很简单，所做的事情就是拦截请求，然后匹配request的url，将其转向http://localhost:3000，得到结果后返回给前台请求。这里的chrome-extension: xxxxx取决于你的插件编号，自行替换即可，或者你也可以改成更为通用的正则匹配形式。</p><p>基本的代理功能就完成了。接下来看看效果。</p><p><img src="https://www.im6767.top/articlePlates/1651201574430.jpg"></p><p>空白一片！切入控制台看看错误：</p><blockquote>Refused to execute inline script because it violates the following Content Security Policy directive: &quot;script-src &#39;self&#39; http://localhost:3000/&quot;. Either the &#39;unsafe-inline&#39; keyword, a hash (&#39;sha256-HXMlWsq+oNLZssobp+7fA5nLeXdM2SRYQaP17p5P6Ws=&#39;), or a nonce (&#39;nonce-...&#39;) is required to enable inline execution.</blockquote><p>翻译一下就是，我们在页面中通过script直接内联写入的脚本是不允许执行的，除非设置允许。chrome扩展的安全规则更为严格，所以我们需要进行对应的配置。</p><p>接下来你可能会遇到第一个坑：按照错误提示，你可以设置unsafe-inline，特定的hash值，或者nonce-特定的编号。即然脚本都是自己写的，我们直接设置unsafe-inline，允许内部所有的内联脚本执行就行。</p><p>然后你就会发现无效。查询了很多资料之后，在一个老外的回答中得知，在扩展中，从某个特定的chrome浏览器版本开始，扩展不再支持unsafe-inline，但是报错信息中没有剔除，所以为了保险起见，你需要使用后面的形式。笔者这里使用hash值，添加进manifest.json。</p><pre class="ql-syntax" spellcheck="false">  &quot;content_security_policy&quot;: &quot;<span class="hljs-keyword">script-src</span> <span class="hljs-string">&#39;self&#39;</span> http://localhost:3000/ <span class="hljs-string">&#39;sha256-HXMlWsq+oNLZssobp+7fA5nLeXdM2SRYQaP17p5P6Ws=&#39;</span>; <span class="hljs-keyword">object-src</span> <span class="hljs-string">&#39;self&#39;</span>;<span class="hljs-keyword">img-src</span> http://localhost:3000&quot;
</pre><p>注意，这个hash值是根据内联代码计算出来的，如果你的内联代码产生了变动，就会生成新的hash值，你需要在这里进行对应的替换。所以如果你的内联脚本可能发生变化，那非常建议使用nonce-特定编号的形式，具体请自行查阅Content-Security-Policy这个html的属性。</p><p>添加完毕之后，我们重新加载插件，再次看看效果：</p><p><img src="https://www.im6767.top/articlePlates/1651203330310.jpg"></p><p>首先查看我们serviceWorker，很幸运，它正确安装了，然后我们再试试我们的插件页面：</p><p><img src="https://www.im6767.top/articlePlates/1651203454553.jpg"></p><p>也已经能够正确展示了，那热更新如何呢？</p><p>bingo!到此为止，我们完成了我们想要的功能。<img src="https://www.im6767.top/articlePlates/1651204395493.gif"></p><h2>观察并思考</h2><p>综上来看，我们的功能已经和预想中的一样了，不过似乎还是有一些地方不够方便，值得改进：</p><ol><li>我们要手动扒拉启动后的html文件，它不能够“自动生成”，虽然它是很少改变的，但是仍然有改变的可能，我不喜欢这个手动的过程。</li><li>无法预测的内联脚本。实际上我们项目中提供的基本的html只有一个，也就是index.html，他内部只有一个src/main.tsx的脚本引入。然而我们从生成的服务中获取到的index.html中有不少的内联脚本，这些内联脚本大多是由框架生成的，比如示例代码中的内联脚本，可能会生成哪些内联脚本这件事情也无法预测，并且内联脚本的使用又有很多安全限制，这一定程度上增加了变动的可能性，我们可能要注意观察生成的服务中获取到的index.html是不是包含了更多的其他内容，否则就要修改它。</li></ol><p>其实面对以上的问题笔者也尝试过一些方案：例如上面提到的内联脚本的改动，笔者想利用plugin去修改插入dom中的内容，但是没有成功，对内部代码流程进行追踪之后发现，vite中插件对于html的修改，如果是以数组或者对象的形式处理，后续处理的插件是无法获取到前一个组件的结果的，所以无法修改。另外关于路径的某些配置，在整个插件内部是被写死的，也没有办法很好的处理，所以都没有找到很美好的解决方案。</p><h2>写在最后</h2><p>至此，我们关于chrome扩展的带热更开发功能的设计与实现基本就结束了，至于它的意义，就是以一种可行的新的方式来提升chrome扩展开发的效率，而这种方式相较于网络上广为流传的提效版本更加优秀，它拥有更小的构建改动和更优的使用开发体验。其思路和开发的关键点就是使用serviceWorker进行中转代理。</p><p>不过，在实际的开发中，笔者需要面临的问题更多，如何将旧的代码迁移至新的模式中，如何对各种功能点进行重新的测试和覆盖，如何保证在现有代码构建中工具的使用没有任何问题？尽管仍然有上面这些问题，但是它带来的便捷性还是值得肯定和借鉴的。</p>`,70)]))}const Aj=A(Cj,[["render",Pj]]),Dj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:xj,default:Aj},Symbol.toStringTag,{value:"Module"})),Ej=JSON.parse('{"title":"数字格式处理","description":"","frontmatter":{"title":"数字格式处理","summary":"在前端的数据展示中，必然涉及到很多的数字处理内容，例如小数位数的处理，百分数转化，货币金额的千分位分割符等，甚至是以上多种格式的组合。通常我们构建自己的数字格式化方法，内容相对繁琐，特别是涉及到一些国际化的问题时，复杂度就会陡然上升。也可以直接使用成熟的包来完成任务，但是往往发现需要多个包进行...","date":"2024-01-17T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/数字格式处理.md","filePath":"content/blog/数字格式处理.md"}'),Nj={name:"content/blog/数字格式处理.md"};function Ij(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[s[33]||(s[33]=x(`<p>在前端的数据展示中，必然涉及到很多的数字处理内容，例如小数位数的处理，百分数转化，货币金额的千分位分割符等，甚至是以上多种格式的组合。通常我们构建自己的数字格式化方法，内容相对繁琐，特别是涉及到一些国际化的问题时，复杂度就会陡然上升。也可以直接使用成熟的包来完成任务，但是往往发现需要多个包进行方法组合才能完成最终需求。实际上大多数浏览器支持<strong>Intl.NumberFormat</strong>构造函数，以方便快速进行数据处理。</p><h2 id="单纯的数字" tabindex="-1">单纯的数字 <a class="header-anchor" href="#单纯的数字" aria-label="Permalink to &quot;单纯的数字&quot;">​</a></h2><p>Intl.NumberFormat构造函数实例化时接受两个参数，第一个是地区编号，locale是BCP 47的语言编号或者Intl.Locale的实例的字符串，用以设置区域。而第二个参数options则是一些配置选项对象。其中style代表需要处理成的目标数据格式。这里我们设置decimal(也是默认值)。然后研究一些和数字有关的配置选项。请注意，本质上JS是不区分&quot;整数&quot;和&quot;浮点数&quot;的，但是数字格式展示时往往涉及到展示成&quot;整数&quot;还是&quot;浮点数&quot;的问题，因此在后续进行整数和小数(浮点数)的讨论时，整数表示不带小数部分的浮点数。</p><h3 id="minimumintegerdigits" tabindex="-1">minimumIntegerDigits <a class="header-anchor" href="#minimumintegerdigits" aria-label="Permalink to &quot;minimumIntegerDigits&quot;">​</a></h3><p>该属性控制整数部分的最小位数。如果整数部分位数小于该配置，则会向前(或者向左)填充0，以便达到指定长度。默认值是1。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2024.0117</span>
<span class="hljs-comment">//设置minimumIntegerDigits为6</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;decimal&#39;</span>, <span class="hljs-attr">minimumIntegerDigits</span>: <span class="hljs-number">6</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;002,024.012&#39;</span>
</code></pre></div><p>可以看到输出了字符串，其有三个特质：</p><ol><li>添加了千分位符&#39;,&#39;以区分数位，这是因为设置了区域为en-US，以该区域数据进行输出时，会自动添加千位分割符。</li><li>因为配置了minimumIntegerDigits为6，而num整数部分只有2024，所以用0向左补齐，整数部分变为&#39;002,024&#39;。</li><li>小数四舍五入到了三位，这是因为默认配置引起的，后面会提到。</li></ol><p>所以综上，minimumIntegerDigits作用就是控制整数部分的格式化内容，需要注意的是，该参数有限制，需要为整数，且值为1到21。</p><h3 id="minimumfractiondigits" tabindex="-1">minimumFractionDigits <a class="header-anchor" href="#minimumfractiondigits" aria-label="Permalink to &quot;minimumFractionDigits&quot;">​</a></h3><p>该属性控制小数部分的最小位数。纯数字和百分比情况下默认值是0货币格式会参考货币代码表给出的单位标准，如果没有的话默认为2。如果小数部分位数小于该配置，则会末尾（向右）填充0，以便达到指定长度。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2024.0117</span>
<span class="hljs-comment">//设置minimumFractionDigits为6</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;decimal&#39;</span>, <span class="hljs-attr">minimumFractionDigits</span>: <span class="hljs-number">6</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;2,024.011700&#39;</span>
</code></pre></div><p>可以看到最终给出的结果小数位数变成了6位，这个配置和上面提到的整数补位相关的配置非常相似。注意，这里的参数也有限制，需要为整数，值为0到20。</p><h3 id="maximumfractiondigits" tabindex="-1">maximumFractionDigits <a class="header-anchor" href="#maximumfractiondigits" aria-label="Permalink to &quot;maximumFractionDigits&quot;">​</a></h3><p>该属性控制使用的最大小数位数，不过因为会有minimumFractionDigits也可以控制小数位数，所以二者配置有可能冲突，因此在两个配置起冲突的时候，以二者中较大值为准。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2024.0117</span>
<span class="hljs-comment">//设置maximumFractionDigits为2</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;decimal&#39;</span>, <span class="hljs-attr">maximumFractionDigits</span>: <span class="hljs-number">2</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;2,024.01&#39;</span>
</code></pre></div><p>可以看到最终给出的结果小数位数变成了2位，且会根据四舍五入的方式进行近似。注意，这里的参数也有限制，需要为整数，值为0到20。此外不同style配置下默认值不同，规则和minimumFractionDigits类似。</p><p>通过该参数，我们可以将一个数字转化成&quot;整数&quot;，也就是将该值设置成0。</p><h3 id="minimumsignificantdigits" tabindex="-1">minimumSignificantDigits <a class="header-anchor" href="#minimumsignificantdigits" aria-label="Permalink to &quot;minimumSignificantDigits&quot;">​</a></h3><p>该参数控制得是数字位数，这个听起来似乎有点别扭。通过上面的两个参数，可以知道他们的控制部分分别是整数和小数，而minimumSignificantDigits则以数字总体作为范畴进行处理。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2024.0117</span>
<span class="hljs-comment">//设置minimumSignificantDigits为12</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;decimal&#39;</span>, <span class="hljs-attr">minimumSignificantDigits</span>: <span class="hljs-number">12</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;2,024.01170000&#39;</span>
</code></pre></div><p>当设置该参数时，如果数字本身的位数大于该参数，则不会有变化。如果小于该位数，会末尾（向右）补0，以便数字长度达到规定要求。</p><h3 id="maximumsignificantdigits" tabindex="-1">maximumSignificantDigits <a class="header-anchor" href="#maximumsignificantdigits" aria-label="Permalink to &quot;maximumSignificantDigits&quot;">​</a></h3><p>该参数和上面的minimumSignificantDigits基本一致，区别在于它控制的是最大的数字位数，这个不太好理解。按照我们举例的数据来说，如果2024.0117，设置该参数为2，那么如何控制&quot;该数字最大有效位数为2位&quot;呢？看例子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2024.0117</span>
<span class="hljs-comment">//设置maximumSignificantDigits为2</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;decimal&#39;</span>, <span class="hljs-attr">maximumSignificantDigits</span>: <span class="hljs-number">2</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;&#39;2,000&#39;</span>
</code></pre></div><p>可以看到数字被化为了2000，如果是3的话则为2020，5的话则为2024，6的话则为2024.01。也就是说，该参数会从左向右，达到位数后，后一位进行四舍五入，最终给出结果。如果你想要在给出的结果上保留小数位数，同时添加上面控制小数的参数，进行组合使用即可。</p><p>这个属性也很好用，特别是一些大数据展示的时候，通常关注数量级数，对末尾精细结果不那么敏感，可以通过该属性有效显示。</p><h3 id="如何处理冲突" tabindex="-1">如何处理冲突 <a class="header-anchor" href="#如何处理冲突" aria-label="Permalink to &quot;如何处理冲突&quot;">​</a></h3><p>这里的冲突是指如果上述四个属性同时进行了设置，但是相互之间具有冲突的话，如何进行取舍。这里可以通过roundingPriority属性进行控制，roundingPriority包含三个可选值：</p><ol><li>auto：有效数字结果。</li><li>morePrecision：精度更高的结果。</li><li>lessPrecision：精度更低的结果。</li></ol><p>需要注意的是roundingPriority属性需要的浏览器版本较高，如果需要使用时请务必关注版本实现。</p><h2 id="百分比" tabindex="-1">百分比 <a class="header-anchor" href="#百分比" aria-label="Permalink to &quot;百分比&quot;">​</a></h2><p>通常情况下，利用纯数字的处理方式，可以解决90%以上的问题，包括百分比。因为理论上来讲，百分比就是小数进行对应的数位放大之后，添加百分号组成的字符串。但是Intl.NumberFormat仍旧提供了百分比的直接转化与展示，可以帮助你省去中间的一些步骤。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">0.45327922</span>
<span class="hljs-comment">//设置style为percent</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;percent&#39;</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;45%&#39;</span>
</code></pre></div><p>如图，我们只需要设置style为percent，然后传入指定的小数进行格式化就行，例如上面这个例子，转化为45%。我们同样可以为转化结果设置精确度，这与数字处理并无太大区别。例如我们希望转化后的百分数始终保留两位小数，代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">0.45327922</span>
<span class="hljs-comment">//设置style为percent</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;percent&#39;</span>, <span class="hljs-attr">minimumFractionDigits</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">maximumFractionDigits</span>: <span class="hljs-number">2</span> })
formatter.<span class="hljs-title function_">format</span>(num)  <span class="hljs-comment">// &#39;45.33%&#39;</span>
</code></pre></div><p>其他配置可根据上面的纯数字部分内容自行调整。</p><h2 id="货币金额" tabindex="-1">货币金额 <a class="header-anchor" href="#货币金额" aria-label="Permalink to &quot;货币金额&quot;">​</a></h2><p>货币本身是一个与国家相关的属性，所以当我们style设置为currency时，应当始终设置currency属性，其可能得值为ISO 4217标准中的货币代码，可以据此获得参考：<a href="https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes" target="_blank" rel="noreferrer">点击这里</a>。例如下图给出两个示例，分别以CNY(人民币)和USD(美元)进行数据展示。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2023.456</span>
<span class="hljs-comment">//设置style为currency</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">USDFormatter</span> = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;currency&#39;</span>, <span class="hljs-attr">currency</span>: <span class="hljs-string">&#39;USD&#39;</span> });
<span class="hljs-keyword">const</span> <span class="hljs-title class_">CNYFormatter</span> = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;currency&#39;</span>, <span class="hljs-attr">currency</span>: <span class="hljs-string">&#39;CNY&#39;</span> });
<span class="hljs-title class_">USDFormatter</span>.<span class="hljs-title function_">format</span>(num)   <span class="hljs-comment">// &#39;$2,023.46&#39;</span>
<span class="hljs-title class_">CNYFormatter</span>.<span class="hljs-title function_">format</span>(num)   <span class="hljs-comment">// &#39;CN¥2,023.46&#39;</span>
</code></pre></div><p>可以看到添加了对应的货币符号。</p><p>和货币金额有关的另一个属性是currencyDisplay，控制货币显示的格式。像上面金额前面出现的$，CN￥等就是该属性控制的。可选值有以下几个：</p><ol><li>code：使用的是ISO货币代码。</li><li>symbol：使用本地化的货币符号，这个是默认值。</li><li>narrowSymbol：使用更简略的符号，例如是￥而不是CN￥。</li><li>name：使用本地化名称，例如上述例子中，currency为CNY时，则为2,023.46 Chinese yuan。</li></ol><h2 id="单位数字" tabindex="-1">单位数字 <a class="header-anchor" href="#单位数字" aria-label="Permalink to &quot;单位数字&quot;">​</a></h2><p>单位数字是指带单位的数据，例如常见的2kg, 3km, 1024bytes等。通过设置style为unit可以实现该类数据的处理。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> num = <span class="hljs-number">2023.456</span>
<span class="hljs-comment">//设置style为unit</span>
<span class="hljs-keyword">const</span> formatter = <span class="hljs-title class_">Intl</span>.<span class="hljs-title class_">NumberFormat</span>(<span class="hljs-string">&#39;en-US&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;unit&#39;</span>, <span class="hljs-attr">unit</span>: <span class="hljs-string">&#39;kilogram&#39;</span> });
formatter.<span class="hljs-title function_">format</span>(num) <span class="hljs-comment">// &#39;2,023.456 kg&#39;</span>

</code></pre></div><p>支持的单位可以在这里查到<a href="https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers" target="_blank" rel="noreferrer">点击查看所有单位</a>。</p><p>单位的展示格式也可以用unitDisplay来控制，一般指的是完全单位还是缩写。</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>其实到这里关于该API的常规用法就已经结束了，剩余一些API的配置属性这里顺便提一下。</p>`,50)),d("ol",null,[d("li",null,[s[29]||(s[29]=m("roundingIncrement控制舍入增量，可能值为")),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[0]||(s[0]=[m("1")])),_:1,__:[0]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[1]||(s[1]=[m(", ")])),_:1,__:[1]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[2]||(s[2]=[m("2")])),_:1,__:[2]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[3]||(s[3]=[m(", ")])),_:1,__:[3]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[4]||(s[4]=[m("5")])),_:1,__:[4]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[5]||(s[5]=[m(", ")])),_:1,__:[5]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[6]||(s[6]=[m("10")])),_:1,__:[6]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[7]||(s[7]=[m(", ")])),_:1,__:[7]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[8]||(s[8]=[m("20")])),_:1,__:[8]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[9]||(s[9]=[m(", ")])),_:1,__:[9]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[10]||(s[10]=[m("25")])),_:1,__:[10]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[11]||(s[11]=[m(", ")])),_:1,__:[11]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[12]||(s[12]=[m("50")])),_:1,__:[12]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[13]||(s[13]=[m(", ")])),_:1,__:[13]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[14]||(s[14]=[m("100")])),_:1,__:[14]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[15]||(s[15]=[m(", ")])),_:1,__:[15]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[16]||(s[16]=[m("200")])),_:1,__:[16]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[17]||(s[17]=[m(", ")])),_:1,__:[17]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[18]||(s[18]=[m("250")])),_:1,__:[18]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[19]||(s[19]=[m(", ")])),_:1,__:[19]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[20]||(s[20]=[m("500")])),_:1,__:[20]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[21]||(s[21]=[m(", ")])),_:1,__:[21]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[22]||(s[22]=[m("1000")])),_:1,__:[22]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[23]||(s[23]=[m(", ")])),_:1,__:[23]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[24]||(s[24]=[m("2000")])),_:1,__:[24]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[25]||(s[25]=[m(", ")])),_:1,__:[25]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[26]||(s[26]=[m("2500")])),_:1,__:[26]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[27]||(s[27]=[m(", 和")])),_:1,__:[27]}),C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[28]||(s[28]=[m("5000。")])),_:1,__:[28]})]),d("li",null,[C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[30]||(s[30]=[m("roundingMode控制如何进行四舍五入，这有点像调用Math.ceil和Math.floor进行数位取舍。可选值挺多的，自行查阅吧，按照需求选用。")])),_:1,__:[30]})]),d("li",null,[C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[31]||(s[31]=[m("useGrouping控制是否使用分组分隔符，也就是千位分隔符。")])),_:1,__:[31]})]),d("li",null,[C(p,{style:{color:"rgb(27, 27, 27)"}},{default:R(()=>s[32]||(s[32]=[m("signDisplay控制符号的显示，也就是正负号。")])),_:1,__:[32]})])])])}const Oj=A(Nj,[["render",Ij]]),Rj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ej,default:Oj},Symbol.toStringTag,{value:"Module"})),Mj=JSON.parse('{"title":"有点特殊的iframe标签","description":"","frontmatter":{"title":"有点特殊的iframe标签","summary":"尽管在三大框架统治下，iframe标签已经沦为了\\"不推荐使用\\"的标签，但是因为历史原因，依旧有庞大数量的项目使用了iframe进行构建，并且需要维护。我就遇到了这样一个项目，在处理iframe的时候，发现了一些iframe特别的地方。","date":"2020-05-30T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/有点特殊的iframe标签.md","filePath":"content/blog/有点特殊的iframe标签.md"}'),Vj={name:"content/blog/有点特殊的iframe标签.md"};function $j(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>问题的起因</h2><p>在公司的构建项目中，因为采用的是比较老旧的结构，页面的构建很多采用iframe实现。iframe有一个很大的问题就是，其加载必须经历一个完整的页面加载周期：从资源加载，到页面渲染。所以当iframe用以实现菜单切换显示内容，而页面又比较复杂的时候，切换必定会带来一定时间的空白期，这非常影响用户体验。为了尽可能的消除iframe带来的体验影响，结合公司项目，我想，是不是能够在页面中构建一个iframe，然后事先将一些公用的CSS，JS先加载好，这样当需要加载某个页面的时候，直接通过某种方法将HTML写入到body部分，然后再插入页面独有的JS和CSS，这样就能节省出巨大的公用CSS和JS加载所需的时间？这就是问题的开始。</p><h2>没那么简单</h2><p>我的方案是：在iframe的window上挂载三个方法，分别是loadHTML，loadJS和loadCSS。iframe中是一个空body的，只有基本结构的HTML文档。这样我就可以在，需要加载文档的时候，通过这三个方法，读入所需的HTML，JS和CSS，然后将这个隐藏的iframe移动到指定的<strong>节点</strong>下，显示它。然后，我发现当iframe移动节点之后，我的iframe又变成了最初的样子！总体的思路如下</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">hmtl</span>&gt;&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span> = <span class="hljs-string">&quot;div1&quot;</span>&gt;&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;target&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;test.html&quot;</span>&gt;&lt;/<span class="hljs-name">iframe</span>&gt;</span>
\uFEFF   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span> = <span class="hljs-string">&quot;div2&quot;</span>&gt;</span>
\uFEFF   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> 
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
\uFEFF      <span class="hljs-comment">//div元素1var </span>
     $div1 = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;div1&quot;</span>);    
      <span class="hljs-comment">//iframe元素var </span>
     \uFEFF$iframe = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;target&quot;</span>);
      <span class="hljs-comment">//div元素2</span>
       \uFEFF<span class="hljs-keyword">var</span> $div2 = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;div2&quot;</span>);
      <span class="hljs-comment">//触发iframe的方法，生成文档(向iframe内部文档插入div标签)</span>
      $iframe.contentWindow.loadHTML(<span class="hljs-string">&quot;&lt;div&gt;Hello World&lt;/div&gt;&quot;</span>)\uFEFF;
      <span class="hljs-comment">//把iframe从div1中移入到div2中</span>
      $div2\uFEFF.appendChild($iframe);
  <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\uFEFF
</pre><p>结果就是，执行最后一步appendChild之后，原本已经生成好文档的iframe又会被复原。尽管它正确的移动到了div2中。</p><h2>直奔结论</h2><p>iframe节点有别于其它常规的节点，当iframe被从文档中抽出（卸载）的时候，文档将会被销毁，再次插入到某个节点后，再执行文档的加载。对于HTML文档来讲，iframe标签是一个很重的标签，所以为了使浏览器具有更好的性能，就需要&quot;牺牲&quot;一部分标签的性能。</p>`,8)]))}const Lj=A(Vj,[["render",$j]]),Hj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Mj,default:Lj},Symbol.toStringTag,{value:"Module"})),zj=JSON.parse('{"title":"没有那么好，也没有那么糟","description":"","frontmatter":{"title":"没有那么好，也没有那么糟","summary":"从舒适圈内到圈外六七终于在春节开始之前提出了离职。在做决定这件事情上，他表现得一直不太果断，同样包括这次。有很多人劝他放弃，再想想，理由包括\\"裸辞压力很大\\"，\\"行情不好工作不好找\\"，\\"才干了几年不建议跳槽\\"等等等等。但是简单思考一下就会发现，有些人不过是喜欢给出建议而已，他们以此来表达自己的主...","date":"2023-03-11T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/没有那么好，也没有那么糟.md","filePath":"content/blog/没有那么好，也没有那么糟.md"}'),Fj={name:"content/blog/没有那么好，也没有那么糟.md"},Jj={id:"从舒适圈内到圈外",tabindex:"-1"};function Gj(n,s,a,t,e,l){const p=Os("font");return k(),q("div",null,[d("h2",Jj,[C(p,{style:{color:"rgb(51, 51, 51)"}},{default:R(()=>s[0]||(s[0]=[m("从舒适圈内到圈外")])),_:1,__:[0]}),s[1]||(s[1]=m()),s[2]||(s[2]=d("a",{class:"header-anchor",href:"#从舒适圈内到圈外","aria-label":'Permalink to "<font style="color:rgb(51, 51, 51);">从舒适圈内到圈外</font>"'},"​",-1))]),s[3]||(s[3]=x('<p>六七终于在春节开始之前提出了离职。在做决定这件事情上，他表现得一直不太果断，同样包括这次。有很多人劝他放弃，再想想，理由包括&quot;裸辞压力很大&quot;，&quot;行情不好工作不好找&quot;，&quot;才干了几年不建议跳槽&quot;等等等等。但是简单思考一下就会发现，有些人不过是喜欢给出建议而已，他们以此来表达自己的主观看法，当你再仔细问为什么的时候，得到的答复大多是&quot;我听说&quot;，&quot;我有个朋友&quot;之类开头的句式，完全的因果论思维。况且还有些人，他希望你永远过的不好，所以他们的意见甚至带一些恶意在其中，于是他决定给自己一个建议，就是尽量不要听取别人的建议。</p><p>接下来他开始准备简历，投递，面试，复盘，投递，面试，复盘......，尽管如很大一部分人所说的那样，这个行业的面试确实时有一些问题的，呆板的问答，但是他还是逐渐筛选出了一些字面意义上的待选公司。最终他选择了一个具有&quot;外企背景&quot;的公司。一方面是因为他觉得工作比重太大的生活是他不能接受的，而听起来这家公司可以得到自己想要的生活工作平衡；另一方面是因为和他对接事宜的猎头在这个过程中也付出了很多，这让他觉得接受offer同样是可以让她得到好处的，是一种不太常规意义上的&quot;多人获利&quot;，他觉得OK。至于平台大小，他暂时觉得没有那么重要，他希望自由，且有创造力的工作。</p><p>在那些行业的跳槽神话中，他的经历显得普普通通，他不过是有些倦怠，需要从一个环境中走出来，走入到另一个环境中去。应有的工资涨幅和一个能够更激发自己创造力的环境，就是自己的目标。他似乎也不知道未来的路应该如何走，通向哪里，他不过是那种，与其在路口观望，不如先走下去的人而已。</p><h2 id="同频共振" tabindex="-1">同频共振 <a class="header-anchor" href="#同频共振" aria-label="Permalink to &quot;同频共振&quot;">​</a></h2><p>在年末，出于巧合，六七遇到了一个姑娘。在交友这件事情上，他一向是挑剔的，他并不对生活感到孤独，但是却总觉得内心有一部分的情绪价值是空缺的，这让他觉得自身不完整。碌碌的朋友无聊且乏味，他需要一块契合缺失部分的拼图。</p><p>他和她有很多相似点，无论是精神上还是生活上，有的时候他觉得，她在生活的镜子中找到了另一个性别版本的自己。他很喜欢也很享受她带来的情绪价值，他感觉现在的他是完整的。当他和她交流的时候，他发现自我的思维模式时不同的，活跃且舒适。他一直不知道，如何用一个词来描述这种状态，直到她说出&quot;同频共振&quot;四个字。是的，同频，这是个很有意思的词语，就像是物理意义上的两个波，频率是相同的，这意味着可以相互接收与交流。他们谈论人生，审视自我，分享精神世界和自我情感，从而彼此了解，在亲密关系的建立方面，他们没有遇到障碍，他们很容易就到达了一个又一个的了解点。于是乎，六七决定去见她一面。</p><p>他们不在同一个城市，她在成都，恰好去成都的时候，是疫情放开，传染高峰到达的时候，成都作为先迈入疫情快速传播时期的城市，可以说是异常冷清，但好在是相对开放的政策没有带来出行上的阻力，于是乎他们相见了。这是一个从抽象到具象的过程。六七知道，一个人可以和一个不在自己身边的抽象形象产生感情，但是最终还是变成具象。</p><p>抽象是具象的超越向往，具象是抽象的实际表达。</p><p>他当然是紧张的，因为他之前一直觉得，和抽象的人产生某种情愫是偏离现实幼稚行为，而因为虚无的抽象事物而去追逐具象对他来讲又很遥远。当他见到她，抽象和具象合而为一的时候，一个他心目中从未有过的统一形象确实出现了，而且就在眼前。他不再吝啬和羞于表达自我，而且产生了牢固的占有欲。他实际的碰触到了他，抽象得到了实现，具象得到了升华。</p><p>他发现她是真实的，而非漂浮的。他对生活一直有一种架空感——生活一直有一种漂浮感，以至于周围具象的人似乎都不真实，或多或少漂浮在空中，追逐和喜欢着那些在他看来饶无意义的事物，且无法和他思想对应。但她不是，他觉得她像小麦，不过现在在他心中似乎还是一个麦苗，她是依托和生长在土地中的。六七童年的农村生活时间并不长，在他的脑海里，印象最深的植物就是小麦，因为成片的嫩绿，和成熟之后的麦黄，是启蒙了他的物质世界的色彩。她也在启蒙和驯化他。</p><p>蒲公英。他有一天突然想到现在的自己和周围的人，其实是蒲公英的种子而已，无限的漂浮。</p><p>他觉得她是独特的，他觉得和她的关系中，有一种超越性的情感在里面，他爱她，如此。</p><p>他有种感觉，可能那个使他变得完整的另一片拼图，此时正在和他产生交集。他想牢牢地占有这一切，并且他想有一个更长久的未来。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1678620664326-97f7cb99-6130-4edb-a79b-05c7f8c90ff4.png" alt=""></p><h2 id="消散的疫情" tabindex="-1">消散的疫情 <a class="header-anchor" href="#消散的疫情" aria-label="Permalink to &quot;消散的疫情&quot;">​</a></h2><p>当六七在十月假期奔波在老家和杭州的时候，他还是真真切切的感受到了疫情出行带来的影响。每当人流变大的敏感时期，各地的疫情政策也会变得扑朔迷离——特别是当他住在一个小城的时候。</p><p>在还算平稳的度过了一周的时间，他准备回到杭州工作，出发前一天通知可能要进行全员的核酸检测，但是官方没有发布消息，他选择自己去做核酸，48h，有备无患。然而当他来到医院门口，早就排起了长队，他也加入其中。医院人员维持着秩序，队伍的推进也很缓慢。小城十月清早的天是寒冷的，只有在太阳下才能取得一点温暖，他就这样和很多人一样在太阳下排队了两个小时，然后在即将要完成核酸的时候，医院准时关上了门，她们下班了，停止了。事先并没有任何通知，而是任由人员排队，等待。他和大多数人一样是气愤的，但是他知道面对工作人员摆烂的态度，任何的宣泄都无济于事，所以他决定离开。</p><p>他去了另一家医院，排队，然后核酸，然后回家。局势变得越发不明朗，很多消息说要封闭城市了，而他的航班也一次一次被取消。小城没有直飞的航班，就必须买中转，但是中转航班每次都取消半程，这意味着另外半程就必须支付费用才可以取消，这其中就很多的付费成本，但是没有人会帮他解决，他需要自掏腰包。他有些不理解，中转城市一直在取消航班，封闭，但是却没有消息确诊。他觉得自己被蒙在鼓里。</p><p>他突然意识到，他喜爱的小城确实是不够方便的。昂贵的机票，12h才出结果的核酸证明，几乎不存在的网约车，甚至是好多天才能到达的快递。他以前是无条件爱它的，但是它现在觉得有点遗憾。</p><p>这样的出行经历在过去的两年里频繁发生，但是在12月的时候戛然而止了。一切的管控措施都突然松绑，这也是他为什么能在12月前往成都，见到同频共振的人了。</p><p>那么代价是什么呢？出现了疫情流行，他也没能幸免。在医药物质确实短缺的情况下，他知道也只能自我承受，另一方面尽自己的努力帮助他人。好在公司是分配了一些药品的，能够简单的度过，但是也有几个夜晚他的喉咙确实不舒服，以至于无法入睡。他最担心的不是自己，而是父母。他希望一切由自己承受，而家人可以幸运的躲开这一切。不过这是个美好的愿望，家人也有中招，但是所幸病程都不严重，在春节到来之前，一切似乎都又恢复了正规。大家开始以一种平淡的语气来讨论这场疫情，似乎它一直是如此的平淡。现在，六七感觉到，他确实是更自由了。</p><h2 id="读书" tabindex="-1">读书 <a class="header-anchor" href="#读书" aria-label="Permalink to &quot;读书&quot;">​</a></h2><p>六七是想把读书作为一种习惯的，今年他读完了《基督山伯爵》，一本可能大多数初高中生就阅读过的书籍，复仇的故事，他喜欢。</p><p>另一本是《第二性》。关于这本书，他感觉有很多想法，他以一种男性视角来看待女性存在主义作品，其中有很多的观点碰撞，是他喜欢的。思想是一种武器，而不仅仅是一种思维，他感觉到，他比以往更多的了解一点这个世界了。</p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>一年的时光其实有很多东西可以记录，但当提笔时，却又觉得如此的平常。如果说2021年六七是困顿的，那么2022年六七认为是走出阴霾，回归正常的一年。他不认为自己实现了更大的成就，不认为自己得到了多么丰富的见解，只是他觉得现在所走的道路是没有问题的，因为自己的内心平静。</p><p>事实上，这大多数功劳来自于同频共振的人，她提供了他所需要的情绪价值。另一方面，他觉得生活也没有那么糟糕。旧的生活圈子使他厌烦，而且那些所谓的朋友和他确实不是一类人。今年的他更关注于&quot;自我&quot;，对他来说，未来的路通往何处，似乎变得次要，而当下他更想知道，他所需要和追求的，到底是什么，或许，在新的一个365天，他可以找到答案。</p>',27))])}const Wj=A(Fj,[["render",Gj]]),Uj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:zj,default:Wj},Symbol.toStringTag,{value:"Module"})),Bj=JSON.parse('{"title":"简单搞定深色模式","description":"","frontmatter":{"title":"简单搞定深色模式","summary":"为了保(bing)护(wu)视(luan)力(yong)，很多应用都提供了深色模式，旨在光线不好的情况下提供更好的使用体验，这在一些以阅读为主要功能的APP中更为常见。本站就进行了基于深色的功能改造，这里对此进行一个记录。","date":"2021-08-09T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/简单搞定深色模式.md","filePath":"content/blog/简单搞定深色模式.md"}'),Yj={name:"content/blog/简单搞定深色模式.md"};function Xj(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h3>定制永远是最佳体验</h3><p>如果你刚刚开始一个新的应用构建，而且已经想要为你的应用添加深色模式，那么定制将是最佳选择。我们可以为自己的应用写light和dark两种样式，功能切换只需要应用两套样式即可。这样做的最大好处就是可以让每一个细节都有最好的体验。特别地，利用less/scss等css编译工具可以很容易的构建出两套样式，实现自己应用的最佳体验。</p><h3>CSS3 filter</h3><p>通常我们没有办法在一开始就考虑到可能需要深色模式，于是乎就要在现在已经构建完成的应用上添加深色模式功能。显然再单独为此写一套样式对开发来讲是噩梦般的体验，特别是应用项目中的CSS样式管理的还不是很好的时候。所以我们希望找到一个改动量最少的方案来完成我们所需要的效果。</p><p>filter是CSS3中的一个样式属性，中文译为滤镜。滤镜通常是为了作用于图片，也就是img标签，但是其本身并没有强制限制作用元素。filter有一个属性值是invert，用于反转输出图像。我们不妨将反转简单理解成黑的输出成白的，白的输出成黑的。你可以在任何一个页面的body元素上设置filter: invert(1)试一试，就会发现实现了反转。invert取值为0-1，我们可以调整数值来达到自己想要的深色模式效果。</p><p>但是这样的效果会有一个问题：图片会变得很奇怪。因此我们需要为图片单独设置一个CSS样式，避免其受到filter的影响。</p><p>配合<span style="color:rgb(32, 33, 36);">transition，可以实现比较好的深色模式过渡体验。如图。</span></p><p><img src="https://www.im6767.top/articlePlates/1628767511931.gif"></p><h3>CSS3 mix-blend-mode</h3><p>mix-blend-mode是CSS3的新属性，相对冷门。mix-blend-mode提供了混合模式，以便实现更好页面展示效果。该属性有很多属性值，其中difference可以实现反色效果。我们可以建立一个全局的元素，让其可以覆盖住你的应用，然后设置这个遮罩元素的mix-blend-mode值为difference，之后只需要控制这个元素的位置或者宽高就可以了。当然，为了避免这个遮罩元素影响操作，还需要配合pointer-events使用，同时要注意层级。本站就是用这种方式实现了深色模式，想要体验效果可以戳右上角工具箱，通过太阳和月亮的图标进行切换。</p><h3>利弊</h3><p>三种方式利弊如何？</p><p>第一种能够实现完全的自定义，能够为不同的元素设置不同的深色效果，如果你注重绝佳的体验，那么定制将是最好的方式。</p><p>第二种和第三种方式胜在简单，几行代码搞定，对于已经构建成熟的项目颇为有用。这二者还有区别，由于mix-blend-mode的标准更新，所以兼容性更差。如果你对兼容性有一定要求，那么filter应该是比mix-blend-mode更好的选择。</p><h3>插件插件</h3><p>当然，你如果是一个不重复造轮子的开发者（像我一样），这里有一款插件darkmode.js非常适合直接引入并使用。其内部实现其实就是通过mix-blend-mode实现的，也是本站引入并使用的插件。当然，实现深色模式还有不少其它方法，也欢迎提出并讨论。</p>',16)]))}const Zj=A(Yj,[["render",Xj]]),Qj=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Bj,default:Zj},Symbol.toStringTag,{value:"Module"})),Kj=JSON.parse('{"title":"聊聊前端相关的小知识","description":"","frontmatter":{"title":"聊聊前端相关的小知识","summary":"前端这个工种发展到今天，所能完成的事情也越来越多。得益于浏览器的不断更新，一些新的功能也在不断地增加，利用这些功能，可以实现不错的效果。即使有些功能也许永远不会用到，但是了解他们，可以在某些情形下，为解决某个特定的问题提供更便捷的思路。","date":"2021-08-14T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/聊聊前端相关的小知识.md","filePath":"content/blog/聊聊前端相关的小知识.md"}'),sm={name:"content/blog/聊聊前端相关的小知识.md"};function nm(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h3>CSS place-content</h3><p>众所周知，CSS里有一个经典的问题就是实现垂直水平居中。实现垂直水平居中有很多方式，其中一个常见的解决方案就是使用flex布局，然后添加对应地CSS属性，例如：</p><pre class="ql-syntax" spellcheck="false">.center {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">align-content</span>: center;
}\uFEFF
</pre><p>如果我们利用place-content属性，就可以简写成下面这样：</p><pre class="ql-syntax" spellcheck="false">.center {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">place-content</span>: center;
}\uFEFF
</pre><p>也就是说place-content就是align-content和justify-content的合并写法。它的属性值还有很多，具体可以自行查询。</p><p>该属性在flex和grid布局下都可以使用，只不过它的浏览器支持版本并没有那么美好，chrome从59版本开始支持这个属性。</p><p><strong>小结：用处也有，但不大，毕竟也可以使用两个分开的属性完成相同的工作。</strong></p><h3><strong>用户在不在摸鱼？</strong></h3><p>自动播放音视频确实是一件让人不爽的事情。很久以前我就对自动播放这件事有很大的意见，为什么浏览器会不经过用户同意自动播放脚本指定的视频或者音频？不过这个问题已经被很多浏览器厂商重视，并进行了实现。如果你注意过一些常见的视频网站或者直播网站，你会发现当你通过连接跳转到页面上时，一开始音频和视频是无法播放的，除非你在对应的tab页面中完成了“交互”，事实上，这个问题引申出来的一个需求是，如何知道用户有没有在操作页面，从而进行某些数据采集的操作？</p><p>通常我们的做法是在页面上绑定事件，例如鼠标点击事件等，然后配合定时器去检测定时器期间有没有发生过点击操作。我们需要有一个变量来记录是否发生过点击，设计逻辑重置其状态。这样的设计方案通常会有几个问题：</p><ol><li>全局捕获事件受到事件的机制影响，如果阻止冒泡等，可能导致无法监听到某些操作。</li><li>frame中相对独立的执行环境导致事件无法被监听到，想要解决的话必须在frame中的脚本中也添加同样地功能。</li></ol><p>从chrome 72版本开始，User Activation API提供了相对方便的API。该属性挂载在navigator上。我们检测和打印该属性，能够得到两个值。</p><p>hasBeenAcitve表示该页面是否发生过&quot;用户激活&quot;行为。</p><p>isActive表示在windows周期内是否发生过&quot;用户激活&quot;。</p><p>前者可以用来检测用户是否在打开页面之后使用过页面，后者则可以确认用户在一定周期内有没有在使用页面。</p><p><strong>小结：没什么用，特别是第二个属性，关于这个特性网上几乎没有（指国内）说明，而且个人使用测试来讲这个第二个属性的表现相当诡异，不过这个API可以带给我们一些产品角度的思考：某些功能，我们是否应该绕过用户进行执行？就例如首页展示视频，现在在浏览器的限制下，刚刚开启的页面，没有“用户激活”的情况下，浏览器是阻止其播放的，网上为了绕过这个限制，有很多很奇怪的做法，而浏览器为了让阻止播放这件事始终有效，又去不断地让这些奇怪的做法失效，最终变成了一场猫鼠游戏。作为产品，设计功能时尊重用户的选择的权利，或许是一种优雅的表现。</strong></p><h3>&lt;ol&gt;和&lt;ul&gt;：我们更强大了</h3><p>网页的功能归根结底就是进行图文信息的展示，而图文信息的展示有一种常见的展示形式——列表。</p><p>通常我们通过ol和ul实现的有序和无序列表样式是项目前面有一个黑点和数字，但是在很多时候我们会觉得这个样式不大好看，我们会选择通过list-style-type去定义项目前的序号标，但是这样的修改还是会比较麻烦：如果我们仅仅是想要调整一下序号标的颜色，或者改变一下它的大小，事情就会变得麻烦起来。我们可能会考虑让&lt;li&gt;标签设置一个字体颜色或者字体大小，以改变序号标的样式，然后将战士的文字用另一个标签包裹，单独设置样式。</p><p>通过以上方式进行设置会很麻烦，因为你有可能会遇到对齐问题，以后的CSS样式维护的问题等。</p><p>::marker伪元素的诞生让这个问题变得很方便。::marker可以作用在任何display属性值为list-item的元素上面，然后我们为伪元素单独设置样式即可，例如：</p><p><img src="https://www.im6767.top/articlePlates/1628941647182.png"></p><p>很方便。</p><p><strong>小结：方便归方便，但是兼容性问题要了老命：IE全线不支持，Safari上的兼容性也很差，就连chrome也只有86版本以上的浏览器才完美支持。毕竟是新的标准。如果你是新的浏览器，打开审查ul列表，会发现list-item的部分已经变成了::marker伪元素。未来会有大作用，不过当下还是多写点代码吧。</strong></p><h3>我很喜欢的media Session</h3><p>media Session是我很早以前就知道的功能，也是我浏览器里最喜欢的一个功能，没有什么原因，就是觉得很好用。</p><p>你肯定在手机上听过歌，听歌的时候如果想要切换歌曲，你会怎么做？很简单，自顶部向下滑动，在通知栏中有APP的相关功能界面，可以进行音乐切换，播放和暂停。</p><p><img src="https://www.im6767.top/articlePlates/1628942478401.png"></p><p>没错，media Session就是浏览器提供的这个功能。你在PC端肯定也见过类似的东西，它通常在右上角出现：</p><p><img src="https://www.im6767.top/articlePlates/1628942607389.png"></p><p>真的很COOOOOOOOOOOOOOOOOOOL！这些通过media Session都可以完成。事实上，media Session是为了增强浏览器的移动端体验而设计的。</p><p>它的使用也很简单。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">//显示样式定义</span>
<span class="hljs-keyword">if</span> (<span class="hljs-string">&quot;mediaSession&quot;</span> <span class="hljs-keyword">in</span> navigator) {
  navigator.mediaSession.metadata = <span class="hljs-keyword">new</span> MediaMetadata({
<span class="hljs-symbol">    title:</span> <span class="hljs-string">&#39;xxx&#39;</span>,
<span class="hljs-symbol">    artist:</span> <span class="hljs-string">&#39;xxxx&#39;</span>,
<span class="hljs-symbol">    album:</span> <span class="hljs-string">&#39;xxxx&#39;</span>,
<span class="hljs-symbol">    artwork:</span> [
      { <span class="hljs-string">src:</span> <span class="hljs-string">&#39;your img url&#39;</span>,   <span class="hljs-string">sizes:</span> <span class="hljs-string">&#39;96x96&#39;</span>,   <span class="hljs-string">type:</span> <span class="hljs-string">&#39;image/png&#39;</span> },
      { <span class="hljs-string">src:</span> <span class="hljs-string">&#39;your img url&#39;</span>, <span class="hljs-string">sizes:</span> <span class="hljs-string">&#39;128x128&#39;</span>, <span class="hljs-string">type:</span> <span class="hljs-string">&#39;image/png&#39;</span> },
    ]
  });
}
<p><span class="hljs-comment">//按钮点击逻辑</span>
navigator.mediaSession.setActionHandler(<span class="hljs-string">&quot;previoustrack&quot;</span>, () =&gt; {
<span class="hljs-comment">// Play previous track.</span>
});</p>
<p>navigator.mediaSession.setActionHandler(<span class="hljs-string">&quot;nexttrack&quot;</span>, () =&gt; {
<span class="hljs-comment">// Play next track.</span>
});</p>
</pre><p>如果你想要的整蛊，完全可以将按钮点击逻辑乱写一团：例如上一首点击实际上是暂停播放，下一首是上一首等。</p><p>不过有一点需要注意，media session是为了增强体验，增强体验！你的页面中应当还是有完整的音频、视频控制功能，防止没有media Session API的浏览器无法终止/开始媒体播放。</p><p><strong>小结：这可能是本文唯一有用的东西了：D，但是它也有问题：国内的安卓系统魔改的情况比较多，有些浏览器无法正确展示meida session，就连chrome本身在安卓上都有可能无法在状态栏里展示mieda session.....</strong></p><h3>从视觉到触觉</h3><p>长久以来，前端提供的反馈都是视觉层面的。例如告知用户发生了错误，通常采用弹出一个警告框的形式；有时为了增强体验，可能会转化为声音信号：在某些操作后给出提示音。现在不妨推荐给你一个新的途径：通过触觉进行反馈。</p><p>bingo! vibration API就是提供这样的功能。震动，对，就是指手机上的线性马达。直接调用<span style="color:rgb(34, 34, 34);">window.navigator.vibrate(duration)就可以实现震动指定时间。这个也比较有用，可以在某些移动端的操作后提供震动反馈。</span></p><p><span style="color:rgb(34, 34, 34);">是的，如果你想写一个移动端的手机游戏，那么不妨试试在碰撞、破碎等场景下适当的提供一下震动反馈，或许会让你的应用加分。</span></p><p><strong style="color:rgb(34, 34, 34);">小结：也算是有用吧，可以为应用锦上添花，不过不要指望用这个api作恶。它和media类似，在没有用户激活状态时是不会触发的。</strong></p><h3><span style="color:rgb(34, 34, 34);">框架害人！</span></h3><p>如果我问你，我现在要绑定一个只触发一次的事件，要如何做？我大致可以猜测到你给出的答案：</p><ol><li>jquery提供了.once方法绑定事件。</li><li>Vue下可以@click.once进行处理。</li></ol><p>如果不允许使用框架，用JS原生该如何解决？</p><p>我不清楚你是不是会想到如下方法：</p><pre class="ql-syntax" spellcheck="false">btn.addEventListener(<span class="hljs-string">&quot;click&quot;</span>, <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span> {
    //doSomething.....
   btn.removeEventListener(<span class="hljs-string">&quot;click&quot;</span>);
});
</pre><p>完全可以，但没有必要。</p><p>addEventListener很早以前就可以接收第三个参数了，而且第三个参数拥有很多属性，其中一个就是once。所以完全可以改写成下面这样。</p><pre class="ql-syntax" spellcheck="false">btn.addEventListener(<span class="hljs-string">&quot;click&quot;</span>, <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span> {
    //doSomething.....
}, {once: <span class="hljs-literal">true</span>});
</pre><p>不用再去考虑可能出现错误解绑或者其他的问题，还能少敲几个字母。</p><p><strong>小结：只触发一次这种事说实话平时没怎么写过，可能是自己见过的场景还不够多吧。不过不用手动解绑事件监听器这个还是很好用的，因为解绑有的时候会不小心把其他的也给解绑了（没有指定处理函数的话）。也没什么用，因为这些东西框架都已经帮你做好了，直接使用就行，只不过框架写多了，很容易忘了底层到底是怎么做到的。</strong></p><h3>加个滤镜</h3><p>有时候想给自己的页面换个风格？不妨试试滤镜效果。CSS3中有很多非常好用属性，可能因为平时用的比较少而忽略，特别是工作中对页面的极致表现要求不那么高的时候。关于这个滤镜部分有两个很有意思的属性值，filter和mix-blend-mode，关于这两个的一个简单使用请参考另一篇文章：<a href="https://www.im6767.top/article/41" rel="noopener noreferrer" target="_blank">点击这里</a></p><h3>取消请求</h3><p>AbortController是一个实验性质的API，用于中断资源请求。使用起来也很简单，我们以MDN上的一个示例来看：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> controller = <span class="hljs-keyword">new</span> AbortController();
<span class="hljs-keyword">let</span> <span class="hljs-keyword">signal</span><span class="hljs-string"> </span>= controller.signal;
<p><span class="hljs-keyword">const</span> downloadBtn = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.download&#39;</span>);
<span class="hljs-keyword">const</span> abortBtn = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.abort&#39;</span>);</p>
<p>downloadBtn.addEventListener(<span class="hljs-string">&#39;click&#39;</span>, fetchVideo);</p>
<p>abortBtn.addEventListener(<span class="hljs-string">&#39;click&#39;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>() </span>{
controller.abort();
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;Download aborted&#39;</span>);
});</p>
<p><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fetchVideo</span>() </span>{
<span class="hljs-comment">//...</span>
fetch(<span class="hljs-built_in">url</span>, {<span class="hljs-keyword">signal</span><span class="hljs-string">}).then</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">response</span>) </span>{
<span class="hljs-comment">//...</span>
}).catch(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
reports.textContent = <span class="hljs-string">&#39;Download error: &#39;</span> + e.message;
})
}</p>
</pre><p>是不是有点像axios中的cancelToken？这个从chrome 66版本开始支持的API某种程度上提供了所有资源加载的控制。你以前是否觉得中断一个脚本或者图片等资源的加载无从下手？现在浏览器为你提供了思路。</p><p>特别地，如果（这部分我还没有验证过）在serviceWorker中能够使用，将会很大程度上增强PWA的能力。</p><p><strong>小结：其实也用处不大。一者绝大多数的框架中都已经给你封装好了取消操作，直接调用相关API就行。二者资源请求的取消似乎应用场景也不那么明显。</strong></p><h3>随机与加密</h3><p>前端有些时候也需要涉及加密场景。最常见的是MD5算法，用于进行密码的混淆，防止明文泄露，除此之外似乎加密这件事离我们还比较遥远。换句话说，我们前端通常遇到的加密等是为了鉴权，MD5就是为了比对数据是否一致，所以无法还原原文。如果你有某些场景需要进行密文的还原，就需要借助其他的算法，对称加密和非对称加密的一些算法。例如一些文本消息，对安全性有一定要求的，就需要这样来做。实际上，浏览器提供了加解密相关的API，内部实现了一些常见的加解密算法的源算法，以便于前端开发者调用。相关的API和属性都挂载在window.crypto上。</p><p><img src="https://www.im6767.top/articlePlates/1628995673147.jpg"></p><p>getRandomValues可以生成随机数，如果你的加解密涉及到秘钥的生成，则可以尝试该方法。</p><p>subtle属性上则有各个加密方法对应的常见功能，例如秘钥、签名的验证，加密和解密等。如果你的功能中确实需要数据的加解密，不妨直接调用浏览器的API来搞定这件事。</p><p><strong>小结：没用。没用不是因为加解密没用，而是加解密相关的东西非常庞大，绝不是加密和解密这么简单。</strong></p><p><img src="https://www.im6767.top/articlePlates/1628996076978.jpg"></p><p><strong>说它没用，大概是因为自己流下了无能的泪水。</strong></p><h3>写在最后</h3><p>有的时候觉得前端这个工作真的，也蛮无聊的。我在想，是不是不应该称呼自己是程序员，或者开发工程师，感觉配不上。仔细想想，我发现我自己的定位其实是一个：API调用员。每当一些新的技术，功能，玩意儿出现的时候，有时候会去看看它的设计思路和简单地实现，就像media Session一样，表面上几行代码就能搞定，实际上为了实现这个功能，涉及到的进程之间的处理相当繁琐，但是这些东西大多都被屏蔽在了底层。另外一种感觉就是，Chrome是不是该停一停了，它不断地将一些作为实验性质的功能推送到正式版本，有些在将来大有作用，有些则发现不好用，然后废弃。而我们这些API调用员则要不断地为这些新功能，新特性去兼容，去处理自己的代码。chrome每一个版本推送，更新日志里都有新东西，如果遇到类似80-90版本的改变，列表长的要命。难道不是时候该慢下来了吗？</p>`,71)]))}const am=A(sm,[["render",nm]]),tm=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Kj,default:am},Symbol.toStringTag,{value:"Module"})),em=JSON.parse('{"title":"聊聊排序算法","description":"","frontmatter":{"title":"聊聊排序算法","summary":"排序问题一直是程序编写的常见问题，也是程序员必点的技能点。排序算法很多，也各有特点。尽管有关排序的文章很多，但是这里，我还是想啰嗦两句。","date":"2020-06-29T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/聊聊排序算法.md","filePath":"content/blog/聊聊排序算法.md"}'),lm={name:"content/blog/聊聊排序算法.md"};function pm(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>8000个元素的数组排序问题</h2><p>最近在工作中遇到这样一个问题：表格有8000条数据，当前端进行排序的时候，整个浏览器就傻掉了。当开着调试工具测试了一下之后，花费了大概35秒左右的时间，这个速度真的是非常非常难以忍受。简单查看源码，使用的是插入排序，怪不得大数据量简直是噩梦。作为新手的我要解决这个问题，却没有想到结果令我怀疑人生。所以借此机会，好好来聊一聊我们所知道的和不知道的排序算法。</p><h2>准备工作</h2><p>本文所涉及到的排序实例，均以数组<strong>[5,2,4,6,1,3,7]</strong>进行举例说明。</p><h2>从插入排序开始</h2><p>插入排序应该是最简单的排序方式了，它就是将一个记录插入到有序表，从而生成一个数量加1的有序表。开始时，一般将左侧第一个数看作是一个有序数组，其余的n-1根据数值大小排序进入这个有序数组之中。</p><p>我们从一个图示来看这个排序方式，开始时我们拥有一个初始数组，并且默认左侧第一个为有序的。</p><p><img src="https://www.im6767.top/articlePlates/1596945818148.png"></p><p>第一次时我们从第二个元素开始，与有序数组的元素从右向左(也可以从左向右)进行一次比较，2与5进行一次比较，2小于5，则将5向后移动一位。这个时候有序数组已经比较完毕，就将2插入到5的前面(第一个位置)。</p><p><img src="https://www.im6767.top/articlePlates/1596949105513.png"></p><p>第二次时从第三个元素开始，与有序数组从右至左比较，4与5比较，4小于5，则将5后移一位，4再和2比较，4大于2。因为此时我们能够保证左侧已经是有序的，所以直接插入在2后面的位置即可，无须再进行比较。</p><p><img src="https://www.im6767.top/articlePlates/1596949468248.png"></p><p>第三次从第四个元素开始，与有序数组从右至左比较，6与5比较，6大于5，左侧已经保证有序，则将6排在5的后面，即位置不动。</p><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvgAAABfCAYAAACdpLOcAAAgAElEQVR4Ae2d34sdRdPH8y/lRCOYVzGESPTxB8jCaxIwLARvAiaKPy5ExCASshgxRNzjD1CjXoliLvxx4XNhFPRChH0uFHyjeKEP7KpoFEQE+6Un22d7uqema6a6p2ay34XlzFRPTdV8PzXddWbPSXYYY8zly5ftS6+fH374oZefdZLE1fLF9fJxazGSxAVf8KUUkNSVli/qmaIZ27UYSeKCb8yRskh01vIFX4pmbNdiJIlbmu8OK9OYE4wxXrFIcpb4lgaC6wVfqgYoO+qZUia24/6NNaEskrrS8gVfimZs12IkiQu+MUfKItFZyxd8KZqxncMIDX6sW6sFBdgqT22QU4A1B29Hyxd8PQiJTS1Gkrjgm4DqDUt01vIFXw9gYlOLkSQu+CagesMSnbV8wdcDmNjkMEKDnxAxHEYBhorQ+5wCpLy1fMGXIhLbtRhJ4oJvzJGySHTW8gVfimZs12IkiQu+MUfKItFZyxd8KZqxncNohz1I8muBSPyn5ovrldXL2HmDL/iOvUa75Id6Rj13qZexH4t6Rj2PvUa75Fe6nvEEP35j1GqxQPr+WPB9f7R8cb18YlqMJHHBF3wpBSR1peWLeqZoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ4jNPgJEcNhFGCoCL3PKUDKW8sXfCkisV2LkSQu+MYcKYtEZy1f8KVoxnYtRpK44BtzpCwSnbV8wZeiGds5jNDgx7q1WlCArfLUBjkFWHPwdrR8wdeDkNjUYiSJC74JqN6wRGctX/D1ACY2tRhJ4oJvAqo3LNFZyxd8PYCJTQ6jHfYgya8FIvGfmi+uV1YvY+cNvuA79hrtkh/qGfXcpV7GfizqGfU89hrtkl/pesYT/MS7pHDYAun7Y8H3/dHyxfXyiWkxksQFX/ClFJDUlZYv6pmiGdu1GEnigm/MkbJIdNbyBV+KZmznMEKDH+vWakEBtspTG+QUYM3B29HyBV8PQmJTi5EkLvgmoHrDEp21fMHXA5jY1GIkiQu+CajesERnLV/w9QAmNjmMJt3g/76+bj6Zz82LS0vVr922ttQPRxjqHChASpnYLtFZyxd8Y46URYuRJC74UjRju0RnLV/wjTlSFi1GkrjgS9GM7RKdtXzBN+ZIWTiMJtvg//fbb8355WVzcXXVbFy6VP3abWu7nGjyOcJQoqIAKWViu0RnLV/wjTlSFi1GkrjgS9GM7RKdtXzBN+ZIWbQYSeKCL0Uztkt01vIF35gjZeEwmmyD/+9z56rmPrz4i/N5o90/jiOMf7y/jQL01Wjfluis5Qu+7Uz9US1Gkrjg6xNs35borOULvu1M/VEtRpK44OsTbN+W6KzlC77tTP1RDqPBGvyjR4+a2WyW7ff0vn3VU3v/gu22fZp/au/ebHF27tyZ7Vw5rz91LuSdr9ZSWttx6A29OXVij7FzYZcfzkROnW8qC2bu9YHLQnoc7nvc95waQp2gTjh1Yo/hrg+cdWGwBp97cdzjhmrwufnguGFvYOgNvadcA1RD3mTnTORNftY2lQZ/yiyRO+Yi1ABqIGcNUPO5b+esC4M3+LvmxuT4PXG8+aM49iM6J46vZolh83TQcuQ85Dmmnre5914zpV+nt38DTmEbeQ9LqY/enImcuoqpNfhDzpE5YjmeOc415DmQd54+hMvM6U3dp2O1I+9hyXTRm7MuTLbB33Nm3Zw7uGxsQ7/4ku18bp69e9nYMe6NlzrOCZ46bmzjU897Ss29zdXpPex0II+GvOUadjlDH705EzmVAxr8so2c4zm2+T+VD/IuWxeh/k5v6j4dqx15D0umi96cdWGyDb69gWwjb5/Wn/rXkjl921K1nbO5tzGc4OENO/b9qeeNBn+YicXVyTDR8kXZTnlzJnJKWTT4ZRs5V4djXw/C/JB32bqg9Kbu07HaXZ2MNT8qr+2QN2ddmHSDH95EJfZdoZQ4d8lzTj1vNPjU1JXX7uok71nLn2075c2ZyCnF0eCXbeRcHZacy0ucG3mXrYuQmdObuk/Hakfew5LpojdnXUCDn/hOgBM8vGHHvj/1vNHgDzOxuDoZJlq+KNspb85ETimLBr9sI+fqcOzrQZgf8i5bF5Te1H06Vrurk7HmR+W1HfLmrAto8NHgZ/u+Qjip9dlf3Jj4ki01d2W1L/TOetbyJ9tOeXMmckpxNPhlGzlXh33mOk0f5F22LkK2Tm/qPh2rHXkPS6aL3px1AQ0+Gnw0+BneTHS5MYedMtqjIe92fXKP9tGbM5FTeaLBL9vIOZ5hQzf2feRdti5C/k5v6j4dqx15D0umi96cdWGHPUjyaxcQjr9LPCz8se8jb6WJMEPTPeTHfFydDDsdyKMhb7mGXc7g9ObMmTmO4c7POWJJzuF0Gft6EOaHvHXWh5DD2PddnXSZK8ZwLPIeloLTWzKX+r54go8n+HiCn+HNhLsxh50O5NGQt1zDLmfoo7edsPv+4Al+2QbU8Rx7gxnmh7zL1gWld9/7WMvP1YlW/L5xt0PenHUBDT4afDT4aPD7zqNqftthAnficiZyd2z4iga/bCPn6jBs6Ma+j7zL1kXI3+kd3p9j30fewxLqojdnXUCDjwYfDT4a/GFnsQzRukyEGcJlO0WfvDkTOZUgGvyyjZzjGTZ0Y99H3mXrIuTv9Kbu07HakfewZLrozVkX0OCjwUeDjwZ/2FksQ7QuE2GGcNlO0SdvzkROJYgGv2wj53iGDd3Y95F32boI+Tu9qft0rHbkPSyZLnpz1gU0+Gjw0eCjwR92FssQrctEmCFctlP0yZszkVMJosEv28g5nmFDN/Z95F22LkL+Tm/qPh2rHXkPS6aL3px1AQ0+Gnw0+Gjwh53FMkTrMhFmCJftFH3y5kzkVIJo8Ms2co5n2NCNfR95l62LkL/Tm7pPx2pH3sOS6aI3Z11Ag48GHw0+GvxhZ7EM0bpMhBnCZTtFn7w5EzmVIBr8so2c4xk2dGPfR95l6yLk7/Sm7tOx2pH3sGS66M1ZFybe4G+Y2R0z40SZzVbMLNGwhzdeat+dO3Vc7/GTK1fyP5l3wimS9zMXPK03dX9gI+sbBJd3iX/Dfu2AVys33WU2MjT2Ls9F3kXmgw1z4dgxc2Ej/8lL5b224ml97ILJnXr2vDcumGMzL2dve2Utn+598uZM5FSG27vBx/pArUuuDqnxXvYB14de+SV6g9kR7/6/40LWXsLpTd2nMjvWh1C/7HqPcH3grAvFG/zL6+vm4nxuTu3da07v22dOHJ+bPWfWszSFsweOmZnXGFc3aKYb0+Zocy2R99bk5C1A3nVsjfdv+l2B5zjX4hzVBJ7/TdTi/HOzeAPhGuc8r8vmwk0zMztwyOQ5373ReZze4UQj3l9MLBNq8NdWzFZTbBefmTmW+d1JMb19YGsrZpb5zUmfvDkTuZ+2v72dG/yS64ObsxxPt5/3FetDqGcZvTd1PrKWpS8Jc7b7Lm//3syyjfWhUcZievvRlNcHzrpQtMH/fX3dnF9eNhdXV83GpUvVr91+9u7lbE1+7WbK1IDa5v7cwYa8/3fZ/E+mNydV3vbp/ZGpPcGfYIN/6ICZZX5iH75RKDKh2AlktmLWzJpZmU2owfcnQWNM9TR/q+MPRvvtFtG7lkoZzfvkzZnIa6l7O9u5wa+tDfbpbab1wT+v4+nbsm1jfYga7iJ6W50zPRik2Lu8vVtTvon1gdSwiN61aPrrA2ddKNrgfzKfV819TRdjqif6J46vRjcvdXOw7dXHXeQNqH1yb9+IhD/2ek7clyvvNTObHTOzZ+zrrPaXCPb1tvzJ0RV4jnMtzjHkRJjx4zP2oznH7lqOnrqHTbpk3+kd1kye/TKTic2tbN42QpncS+e9ceGYmWV+U9JXb85ETtUZGnzvr6CZ1ofFfOg9mfVtebaxPjTp6O77prG+tuov/5k/ahrm4vKm7lOZvcwc23e+6nYtZXIvq7cxY1gfOOtC0Qb/xaWl6ql9CNw+zT/1r6XMDf5mo5zhRj19W0vet+bJe2tSmViD7302ucRTj8WNma3Bv/LxnJVDh8yKl/vKofhjNmjwwzu1//7WZ/DtXyDy/yzqJP+pi70psan2yZszkVMyoMF3DX6+9cFv3hxP35ZjG+uD41Z/za/35sdzTm7Wh1sjCn1klrpPZfYyTXLf+YpzLVgfmlVy9d08Wrdy1oWro8F3X+7J9Bm64g1+7Un4hBr82l8MynxucVHgmRv82eyAWXPntB/Zmd1kLizna/IXedfvwUx705vAty7c5j6tz+BXT2cyf/be6dGnTjgTuTt/+IoG3300Z2ZmmdYHv4F3PH2beBvrA/nwL7/e7nsO3l/+q7/02L+u199cSLi6vMP7M88+1odQx5J6j2V94KwLRRv8IT6iU32RKvNHXIp+RKd6M+JPHlNt8I3ZVfBP3pKn6XVf9wTfb+abbP549+2SE0qpj7nYSbFs3pvT7uKzouE03H+/XN5lvhTsrrRP3pyJ3J0/fN3uDX6J9cFv9BxP3ybaxvpANvdW1+x6z90TfL+Zb7L54923Xd7h/Zlnf8oNfvUlrc3vmuVRw56lnN7jWR8468IOuwDYA+1r7t//+89/zKtHjlSfuV98yXY+z/cl2wINpp1EFl+ync+3vhy8mbf0S7aLBcf9KdB/zfhFH1fgosWm9sS+YVIroL/Lu96kd2+4ff/4M/ho8N1UutDbGUq8Kv9rA50uqfpXKcp8rMjm4fTuMteWmp9TOUjidvV1umSdrwrMT2F+ufPG+tCwznjrUG69Lc+tj0O52Gjw3Zzp9Hb7RV6xPixkdXqn5mY7zpljiz7Bt1lX/0zm6qr3z02uZvoXdDZvwgyfuQ8nbbt/5Z/JLJG3m0Tc63Se4M+e8f/N+828M//Z2xW436CLt6uP5Gx9RGfjrptM7SM77qM7gtdF3otbNefGtJ7QrK34DfK0PqJT8s+vtiL61ImdyPv+2IWg748kbldfp0vTXNzPVnZ9cDnlz9utC+4V64PT2r4W0Tt4I3jlTZb3kR3vDYafS5dtl3ffe7HdD+tDqE8pvce0PnDm2OINvhPeCd7lpmg/dnMC95+Au+2MX5DJn7ebuN3rdCbwKx/J8f4zkAJvrpze4qY+bNarJt/lvtXs54qzyNsVfNbXaU3gVz5S5LTO//l7K20pvUv8k55+KfTJmzOR+zH87W3f4Ls1wX/F+rC4f9rXWLdGMV+rRnnrvp8VXB+y5m0b+FrueZt7m2uf+96/j9u3sT6E+pTSe0zrA2ddmHCDz5x0hO++XaFkn1CEeaXymXreuRrvoc7j9A4nmrHvI+9hCfXRmzORU1exfRt8rA9ta4Srw7Zjxjg29byp+3Ssdqf3WPOj8toOeXPWBTT4iUbbFcoYJ7u2nKae91CNea44Tm9qwhmrHXkPS6aP3pyJnLoKNPhlG33Hs20uHuMY8i5bFyFzpzd1n47VjryHJdNFb866gAYfDX7rv1oQTlSl9xcFHn7EZuT7i7yHnQ/E0ZC3WMJOJ+ijN2cip5JAg1+2kXM8S8+Luc+PvMvWRcjL6U3dp2O1I+9hyXTRm7MuoMFHg48GP8Obhy435rBTRns05N2uT+7RPnpzJnIqTzT4ZRs5xzNs6Ma+j7zL1kXI3+lN3adjtSPvYcl00ZuzLqDBR4OPBh8N/rCzWIZoXSbCDOGynaJP3pyJnEoQDX7ZRs7xDBu6se8j77J1EfJ3elP36VjtyHtYMl305qwLaPDR4KPBR4M/7CyWIVqXiTBDuGyn6JM3ZyKnEkSDX7aRczzDhm7s+8i7bF2E/J3e1H06VjvyHpZMF7056wIafDT4aPDR4A87i2WI1mUizBAu2yn65M2ZyKkE0eCXbeQcz7ChG/s+8i5bFyF/pzd1n47VjryHJdNFb866gAYfDT4afDT4w85iGaJ1mQgzhMt2ij55cyZyKkE0+GUbOcczbOjGvo+8y9ZFyN/pTd2nY7Uj72HJdNGbsy6gwUeDjwYfDf6ws1iGaF0mwgzhsp2iT96ciZxKEA1+2UbO8QwburHvI++ydRHyd3pT9+lY7ch7WDJd9OasC2jw0eCjwUeDP+wsliFal4kwQ7hsp+iTN2cipxJEg1+2kXM8w4Zu7PvIu2xdhPyd3tR9OlY78h6WTBe9OesCGnw0+Gjw0eAPO4tliNZlIswQLtsp+uTNmcipBNHgl23kHM+woRv7PvIuWxchf6c3dZ+O1Y68hyXTRW/OujDpBn/PmXVz4vjcnLp1yZy+banatrbw5pLsO8El59DwnXreuf6H2aHO4/QedjqQR0Pecg27nKGP3pyJnMoBDX7ZRs7x1JjjJTGRd9m6CNk4van7dKx25D0smS56c9aFHfYgya9dQDj+LvGw8Pvu20b+3MFlc3F11WxculT92u1n7142OZv83Hn3vd6uflPPe6jGPFccp/ew04E8GvKWa9jlDE5vzpyZ4xju/JwjluQcTpeu85z28chbp1HW5t41vquTLnPFGI5F3sNScHpL5lLfd7JP8O2Te9vQhz8X53Nz4vhqtqf4TvCuN7T28VPPO1fjPdR5nN5hPY59H3kPS6iP3nbC7vuDJ/hlG1DHU3u+7xofeZeti5CH07vvfazlh7yHVb6L3px1YfAG312A9PX0vn3VU/tQfvs0/9TevUZ6fvjPoOEMGuA+KFMD4bzVts+ZyCn/qTX4qLcy9QZdoStqYDo1QM3nvp2zLgzW4B89ejRrwzhUg79z586seQ91k11teWtfj4vvXkOOlD08bmz7yHv4Sd/OhV1+OBM5db6pNPi514eh7jPcP8PeP9AbenPu7anWib027vrAWRcGa/CbFiBOgk1+1vbvc+fIj+g0fXTHP48k7lQWzKvteh9//HHz5Zdf+pdFbpfge/jw4eqN3ldffVUkriRniS/qmcQZDUh01vIF3wgjadBiJIkLviTOaECis5Yv+EYYSYMWI0nc0nwn2+D/99tvzfnlZfPJfL74kq3dtrbL6+tkEdiBMQOhEpfkLPEtXYDc6z179qzZs2cPq8kvcb0HDhyoGvz1ltqSxNXyHQtfqg6a7BKtcL1NijbbJDpr+YJvM8smqxYjSVzwbSLZbJPorOULvs0sm6wcRpNt8O3F/b6+Xj3Ff3Fpydhf++Te2lI/HGGoc6AAKWViu0Tn0PfVV1+tGmxOkx/6xpnRForv7t27za5du8zff/9NOkviavlS10tepDeglbMkLq7XA5jYlOis5Qu+CajesBYjSVzw9QAmNiU6a/mCbwKqN8xhNOkG37vWTpscYagTogApZWK7ROfQ94UXXlh8FyLV5Ie+cWa0pYnvzz//XMXev38/7Sj8y5AkZ4lv0/W2XqQ3KImr5Yvr9QAmNrUYSeKCbwKqNyzRWcsXfD2AiU0tRpK44JuA6g1zdEaD7wnG2UQBclS6cgynAKmzhb5nzpxZNPj2iyhtTX7oS8Vosjfx/fDDD6vYDz/8cJPLwiaJq+XbdL2LC0psaOUsiYvrTUD1hiU6a/mCrwcwsanFSBIXfBNQvWGJzlq+4OsBTGxyGKHBT4gYDqMAQ0XofU4BUt6hr/2SrftmvHulmvzQl4rRZG/i+8QTT1QN/ltvvdXksrBJ4mr5Nl3v4oISG1o5S+LiehNQvWGJzlq+4OsBTGxqMZLEBd8EVG9YorOWL/h6ABObHEZo8BMihsMowFARep9TgJR36Hvq1Klag9/W5Ie+VIwmexPfm2++uWrwv//++yaXhU0SV8u36XoXF5TY0MpZEhfXm4DqDUt01vIFXw9gYlOLkSQu+CagesMSnbV8wdcDmNjkMEKDnxAxHEYBhorQ+5wCpLxD3zfffDNq8KkmP/SlYjTZQ76ffvpp1dzfcsstTYfXbJK4Wr7h9dYuKLGjlbMkLq43AdUbluis5Qu+HsDEphYjSVzwTUD1hiU6a/mCrwcwsclhhAY/IWI4jAIMFaH3OQVIeYe+n332Wa3Bt5/Dtw1+U5Mf+lIxmuwh3yNHjlQNvv2Sb+pHElfLN7ze1DX641o5S+Lien2C7dsSnbV8wbedqT+qxUgSF3x9gu3bEp21fMG3nak/ymGEBt9XjLGNAmSItHkIpwCps4W+9l+yufbaa6tm2/+f7Jqa/NCXitFk9/l+/vnnVby9e/eaP/74o+nwmk0SV8vXv97axTB2tHKWxMX1MsBuHiLRWcsXfMGXUkCrJiVxUc8Uzdgu0VnLtzRfNPhxnbRaSgOhgl+tBdjleh955JGq4XZNvXt1Df8DDzxgvv766yz/kZn99+7vueeeKt4rr7xCpVmzazGSxEU91xC27kh01vIF31aktUEtRpK44FtD2Loj0VnLF3xbkdYGtRhJ4pbmu8MmJ/m1CUr8p+aL65XVi4S3faLuPpLjXm1zf99995kvvvgiSx06vo899ljV3N96663G/u+1krzH7Ouud8w55swN16t3/+bkSJ0LfMGXqo0p2lHPqGdJ3eIJfu09YHrH3nB9fyyovj9avmO73gMHDlSNt23s77///uqJfaipRCt7vefPn69iXH/99Y3nD+O5fUlcLd+x8XVatr1KtML1tilbH5PorOULvnWGbXtajCRxwbeNaH1MorOWL/jWGbbtcRihwW9TsGEMBdggCmHiFCDhWj0xbxp76KGHjG287RP8s2fPNh1C+jYeHBife+45c80111QNvv0Prrr8lLheTnxJXNQzR+Erx0h01vIFX/ClFNCqSUlc1DNFM7ZLdNbyBd+YI2XhMEKDT6lH2FGAhDANZk4BNrhVJsrX2tfW1szu3burJvzkyZPGfl7e/6F8/WPC7b/++ss8+uiji78OzOfz8JDkfp+47qRavqhnRyD9qsVIEhd801zdERKdtXzB19FLv2oxksQF3zRXd4REZy3f0nzR4LvqYL6WBkKlcbUWYN/r/fjjj80NN9xQNeTLy8vmm2++WZyqi1b//POPef/9983tt99eneu6664z77777uJcXTa6xA3Pq+WLeg5J0PtajCRxwZfmGY5IdNbyBd+QIr2vxUgSF3xpnuGIRGct39J80eCHVZLYLw2ECn+1FqDkei9dumTuuOOOqjHftWuXsf/Kjv2PqX755RfqtAv7jz/+aN555x1z8ODBxVP7/fv3m48++mhxTNcNLUaSuKhnPmWJzlq+4Au+lAJaNSmJi3qmaMZ2ic5avuAbc6QsHEZo8Cn1CDsKkBCmwcwpwAa3ysT1/fPPP81LL71kbrzxxkWjbrftv4Jj7W+88YZ5++23zeuvv26efvpp8+CDD5o777xzcaz9sq49/vnnnze//fabAV+KSGznMoo9jeh7EpK44NtEo9km0VnLF3ybWTZZtRhJ4oJvE8lmm0RnLV/wbWbZZOUwQoPfpFyLDQXYIk4wxCnAwGWx29X3119/Naurq+bQoUO15t39G/nhq33if/jwYfPyyy9Xjb0LDL5OifRrV0b+GbV8wden0L6txUgSF3zbmfqjEp21fMHXJ9i+rcVIEhd825n6oxyd0eD7ijG2UYAMkTYP4RQgdTaJ73fffWc++OAD89prr5lz586ZJ5980jz11FPVtrW999575qeffmoMDb6NsjQaJYy0fMG3EWWjUYuRJC74NqJsNEp01vIF30aUjUYtRpK44NuIstHI0RkNfqN0tBEFSGsTjnAKMPRx+1q+4OsIpF+1GEnigm+aqztCorOWL/g6eulXLUaSuOCb5uqOkOis5Qu+jl76lcMIDX5ax9oRKMCaHK07nAKkTqDlC74UkdiuxUgSF3xjjpRForOWL/hSNGO7FiNJXPCNOVIWic5avuBL0YztHEZo8GPdWi0owFZ5aoOcAqw5eDtavuDrQUhsajGSxAXfBFRvWKKzli/4egATm1qMJHHBNwHVG5borOULvh7AxCaHERr8hIjhMAowVITe5xQg5a3lC74UkdiuxUgSF3xjjpRForOWL/hSNGO7FiNJXPCNOVIWic5avuBL0YztHEZo8GPdWi0owFZ5aoOcAqw5eDtavuDrQUhsajGSxAXfBFRvWKKzli/4ejE2yekAAACJSURBVAATm1qMJHHBNwHVG5borOULvh7AxCaHERr8hIjhMAowVITe5xQg5a3lC74UkdiuxUgSF3xjjpRForOWL/hSNGO7FiNJXPCNOVIWic5avuBL0YztHEY77EGSXwtE4j81X1yvrF7Gzht8wXfsNdolP9Qz6rlLvYz9WNQz6nnsNdolv9L1/P/0rNtLtb1n4QAAAABJRU5ErkJggg=="></p><p>重复进行上面的步骤，直到扫描到最后一个元素为止，所得到的就是最终的排序数组。</p><p><img src="https://www.im6767.top/articlePlates/1596949908900.png"></p><p>整个过程是不是有点像你打扑克牌的时候，每次摸到牌插入到合适位置。</p><p>下面给出插入排序的一个简单实现</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Insertion</span><span class="hljs-params">(arr)</span> {</span>
  let len = arr.<span class="hljs-built_in">length</span>;
  let preIndex, current;
  <span class="hljs-keyword">for</span> (let <span class="hljs-built_in">i</span> = <span class="hljs-number">1</span>; <span class="hljs-built_in">i</span> &lt; len; <span class="hljs-built_in">i</span>++) {
    preIndex = <span class="hljs-built_in">i</span> - <span class="hljs-number">1</span>;
    current = arr[<span class="hljs-built_in">i</span>];
    <span class="hljs-keyword">while</span> (preIndex &gt;= <span class="hljs-number">0</span> &amp;&amp; current &lt; arr[preIndex]) {
      arr[preIndex + <span class="hljs-number">1</span>] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + <span class="hljs-number">1</span>] = current;
  }
  <span class="hljs-keyword">return</span> arr;
}
</pre><p><br></p><h2>快速排序可能是最常用的排序</h2><p>如果有一天，面试官让你手写一个排序算法，那么快速排序似乎是这个问题最标准的答案——这似乎是排序问题中最万能的答案，因为快速排序似乎意味着&quot;反正不可能最糟糕的&quot;算法。</p><p>快速排序采用了&quot;分治法&quot;的思想。我们可以认为，分治法就是将一个不易解决的大问题，分解成若干容易解决的小问题，然后依次处理小问题，最终使得整个问题被解决。在快速排序中，大问题就是如何得到一个已经排序的数组，为了解决这个问题，我们将其分为以下步骤进行解决：</p><ol><li>先取出一个数，作为基数。</li><li>进行数据的分区，把比这个数小的全部放在它左边，比这个数大的全部放在它右边。</li><li>对左右分区重复上面两步。</li></ol><p>同样地，我们以图示来看看快速排序的思想实现：</p><p>我们取第一个数为基数，扫描过程从两头分别开始。初始时基数为N = 5，i = 0，j = 6;</p><p><img src="https://www.im6767.top/articlePlates/1597067142846.png"></p><p>从最后一位往前找，第一次找到7，大于5，再次往前，j -1，找到3，小于5，此时符合条件，我们将3移动到基数5原先的位置</p><p><img src="https://www.im6767.top/articlePlates/1597067461553.png"></p><p>当我们移动3之后，原先3的位置也需要一个数位进行填充，我们再次从i的开始向后找一个大于基数的的数。当i = 3的时候，找到符合条件的数6，此时将6移动至空位，此时i等于3。</p><p>同样地，移动后序号为3的位置又出现了一个空位，此时再重复上述步骤，从j开始向前寻找。j到4的位置时，值为1，小于5，满足条件，将1移动至空位，j等于4。<img src="https://www.im6767.top/articlePlates/1597068081264.png"></p><p>此时又该移动i，i向后移动一位，此时i与j相等（碰头了），一趟结束。此时将5放入空缺位置。</p><p><img src="https://www.im6767.top/articlePlates/1597068253853.png"></p><p>这时候能够看出，数组[4]位置左侧的都小于刚才取到的基数5，右侧的都大于基数5。所以下一步，我们可以将0-3认为是一个数组，5-6认为是另一个数组，再执行上述步骤。</p><p>快速排序是被提问最多的算法，因为它具有良好的性能(后续会讲到)。当然，我们选择第一个数作为基准没什么问题，但是通常来讲，我们更习惯于取中间一位作为基准进行比较(为什么?)。</p><p>整个过程就是把一个问题不断不断细分，然后针对每一个细分的分支重复我们的步骤，直到得到结果。关于快速排序的具体实现很多，这里列举阮一峰老师的一份快速排序的代码实现。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> <span class="hljs-built_in">quickSort</span> = function(arr) {
　　<span class="hljs-keyword">if</span> (arr.length &lt;= <span class="hljs-number">1</span>) { <span class="hljs-keyword">return</span> arr; }
　　<span class="hljs-keyword">var</span> pivotIndex = <span class="hljs-type">Math</span>.floor(arr.length / <span class="hljs-number">2</span>);
　　<span class="hljs-keyword">var</span> pivot = arr.splice(pivotIndex, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>];
　　<span class="hljs-keyword">var</span> <span class="hljs-keyword">left</span> = [];
　　<span class="hljs-keyword">var</span> <span class="hljs-keyword">right</span> = [];
　　<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; arr.length; i++){
　　　　<span class="hljs-keyword">if</span> (arr[i] &lt; pivot) {
　　　　　　<span class="hljs-keyword">left</span>.push(arr[i]);
　　　　} <span class="hljs-keyword">else</span> {
　　　　　　<span class="hljs-keyword">right</span>.push(arr[i]);
　　　　}
　　}
　　<span class="hljs-keyword">return</span> <span class="hljs-built_in">quickSort</span>(<span class="hljs-keyword">left</span>).concat([pivot], <span class="hljs-built_in">quickSort</span>(<span class="hljs-keyword">right</span>));
};
</pre><p><br></p><h2>分治的另一个典型:归并算法</h2><p>既然提到了分治法，就不得不提到这一思想下的另一个排序算法：归并。归并是分治法思想的一个典型实现。归并就是通过将数组拆分成n/2个元素的子序列，对子序列进行排序，然后合并排序后的结果。我们再次以图示来理解归并排序。</p><p><img src="https://www.im6767.top/articlePlates/1597145710090.png"></p><p>归并排序的分治非常明显，完美的呈现出&quot;分&quot;和&quot;治&quot;两部分内容。在分的过程中，将一个数组先分成两份，然后再次分割成四个，再次分割······直到元素都成为单独的元素，然后开始合并。</p><p>&quot;分&quot;的过程实现比较简单，我们不再赘述，主要集中于&quot;治&quot;的过程实现。&quot;治&quot;事实上就是将有序子序列合并起来，变成有序序列。我们举例其中一个序列的合并来说明整个合并规则。（以[2,5]和[4,6]两个序列合并为例）。</p><p><img src="https://www.im6767.top/articlePlates/1597147042130.png"></p><p>依次以两个数组的第一个元素为开始，进行比较。当 i = 0时，左侧第一个序列的值小于右侧序列第一个元素，则将左侧第一个序列值放入排序数组的第一个位置，i+1</p><p>第二次比较时，i指向的元素大于j的第一个元素，则将j指向的序列值放入排序数组的第二个位置。j+1。第三次比较时，此时i指向的元素小于j指向的元素，则将i指向的元素放入排序树组第二个位置。最后，只剩下j指向的元素，则放入排序数组最后一个位置。一次合并结束。</p><p>通过上述的合并过程，我们最终保证自己得到的是有序数组。归并排序是一个典型的分治思想的实现，他将一个大数组的排序最终拆解成单个元素，然后从少到多依次排序归并，最终获得排序数组。</p><h2>怀疑人生—Tim Peters教你排序</h2><p>Tim Peters是一个python大牛，在2002年时他实现了一个算法，在python中使用，很快就成为python的标准排序方法。不仅如此，随后Java、android等多个平台都将该算法规定为其默认排序算法，其中也包括v8的JS引擎。我们所熟知的array.sort内部即是一个timsort算法。<strong>(注意，当你查阅百度等资料，有不少信息会告诉你array.sort本质是快速排序，这些说法都是有误的，V8 7.0版本之后，排序算法就更换为timsort)。</strong>接下来也是本文重点，了解timort算法。</p><p>timsort排序算法本质上是一种混合算法，它包含归并排序和插入排序。timsort算法源自一个假设：处理的数据大多数情况是近似有序或者片段有序的。仔细想想，这个假设其实非常符合生活实际。尽管我们讨论数组排序喜欢用全随机的数组，但是实际问题中，很多数据其实都有某种顺序。timsort就是利用这个假设，按照升序和严格降序的规则，将数组分解成很多个run，升序run保持不变，降序run就翻转，最终得到若干个升序的run。</p><p><strong>算法实现：</strong></p><p>扫描数组，分解成run，升序不变，严格降序翻转。 run就类似于我们上文提到的归并排序中的一个序列，如图</p><p><img src="https://www.im6767.top/articlePlates/1597157364381.png"></p><p>此时包含数个run，而且长短可能不一致。</p><p>timsort算法要选取一个最小的run值。我们称这个最小的run为minrun。minrun是划分run的重要参考。如果一个run小于minrun，就要扩充minrun，即将后面的元素移入这个run中，直到run符合minrun大小。所以，如果一个数组的元素个数是N，我们能够得到的run的个数就是N/minrun。此时会出现两种情况:</p><ul><li>N/minrun正好是2的整数次幂，整个归并过程会是&quot;完美&quot;的。如上图归并排序，每一层都有两个等长序列。</li><li>如果N/minrun正好比2的某个整数次幂大一点点，那么最后就可能会出现一个超长的run和一个超短的run合并，此时是最糟糕的情况。</li></ul><p>因此选择minrun的时候，尽可能要使得minrun能够让N/minrun刚好是2的整数次幂，或者比2的整数次幂稍小一些。timsort实现中，当元素个数小于64时，minrun的个数就是数组长度。这意味着元素个数小于64，只会有一个run。此时采用插入排序即可。（二分插入排序）。</p><p>当元素个数大于64，插入排序就不太合适了，我们就要设置多个run，来进行归并。既然要多个run，就像上面提到的，就要确定run的长度。为了符合N/minrun的结果正好是2的整数次幂，或者比2的整数次幂略小，timsort选择的minrun在32-64之间。那么具体如何选择minrun呢？提到2的整数次幂，其实有一个东西和其息息相关，就是二进制。timsort就是利用二进制来解决这个问题。</p><p>timsort取数组长度二进制表示的前六位，如果其余的二进制位被设置，则+1。我们来举例说明:</p><p>1.如果需要排序的数组长度是167，其二进制是10100111，取前六位是101001(十进制是41)，其余的二进制位是11，被设置了，所以minrun确定为42。此时167/42 = 3.976，略微小于2^2 = 4，符合条件。</p><p>2.如果需要排序的数组长度是1856，其二进制是11101000000，取前六位是111010(十进制是58)，其余的二进制位是00000，没有被设置，所以minrun确定为58。此时1856/58 = 32,正好是2^5 = 32，符合条件。</p><p>接下来对第一步生成的数个run开始进行处理。依次对比每一个run，如果run的长度小于minrun，则利用插入排序扩充run的值，直到run的长度等于minrun的值。</p><p>处理完run之后，接下来就是要归并这些run。从这一步开始，事实上我们就能够大致猜测出为什么要去规定minrun。timsort的一个原则是，要尽量避免归并一些长度差值很大的run，近似或相同长度的run合并，能够使得整个排序过程的复杂度稳定。那么如何避免长度差值很大的run合并呢？timsort采用压栈与比较的方式进行。</p><p>先将runX，runY，runZ依次压入栈中，然后进行一次比较，如果满足如下关系之一，则runY和较小的一个run进行合并:</p><ul><li>X&gt;Y+Z</li><li>Y&gt;Z</li></ul><p><img src="https://www.im6767.top/articlePlates/1597234798769.png"></p><p>然后将结果再次放入栈中。通过不断地在栈中比较，合并run，最终只剩下一次完整的数据，就得到了我们的所需要的排序结果。需要注意的是，run只能和相邻的run进行合并。合并算法就是插入排序，为了提升效率，使用了二分插入排序，即用二分法进行查找合适位置，然后插入。</p><p><strong>谈谈进一步优化</strong></p><p>上文提到采用二分插入排序，是利用二分法查找合适位置。事实上timsort并不总是采用二分查找法，当需要合并的run很长的时候，二分查找法也不一定能够获得很好地效率，所以合并的过程还使用Galloping Mode(又被称为倍增搜寻法)。简单来讲即以2的n次方进行比较，确定位置后在<span style="color:rgb(26, 26, 26);">2^n-1到2^(n+1)-1区间内做二分查找。总之，倍增搜寻是为了提高合并过程中查找合适插入位置的效率。</span></p><p><span style="color:rgb(26, 26, 26);">综上所述我们可以看到，timsort是一个完备的&quot;工业排序&quot;方法，即它的出现就是为了应对实际情况。他不是一个单一的排序算法，而是一系列特定场景下的优秀解决方案的混合。它融合了插入排序，归并排序，二分查找以及倍增查找等算法，提升排序的效率。</span></p><p><span style="color:rgb(26, 26, 26);">这里不再附上timsort的算法的具体实现，因为我还没有写完。timsort算法有很多细节需要实现，这里也做一个记录，以便日后完成代码后贴出。</span></p><h2>做个对比看看结果</h2><p>既然我们介绍了四种排序算法，那么他们之间的效率又是如何？既然开头提到了8000个数据的排序，那我们就以8000个数据来看看这四种算法的排序性能。我们不再逐个分析四种算法的时间复杂度，直接给出他们的时间复杂度表。</p><p><img src="https://www.im6767.top/articlePlates/1597237777517.png"></p><p>从图中能够看到，在任何情况，timsort都拥有四种算法中最好的时间性能。</p><p>我们再用代码实际测试下，在8000个随机数组成的数组中排序的情况。我们用代码生成一个包含8000个数的数组，然后分别用四种排序算法进行排序，利用console.time来记录所花费的绝对时间，结果如图：</p><p><img src="https://www.im6767.top/articlePlates/1597239292435.png"></p><p>用一句话来形容timsort就是：快的可怕。</p><h2>有些细节还想谈谈</h2><p>排序有很多指标，包括时间复杂度，空间复杂度，还有一个重要的指标就是稳定性。稳定性是指，在排序过程中，不去改变其原先具有的相对次序。举例来讲，如果一个数组中第五位和第六位元素相同，假设都是数字5，在整个排序过程中，无论经历何种步骤，位于第六位的元素始终在位于第五位的元素的右边，这个排序算法就是稳定的。在排序算法中，稳定性有时比时间复杂度和空间复杂度更为重要。这就是为何在timsort中，我们提到&quot;严格降序翻转&quot;，即a[n]&gt;a[n+1]时翻转，而不包括相等的情况，就是为了保证稳定性。按照这个思路，你是否已经知道，插入排序中为什么通常遍历左侧有序序列时要从右至左了吧？</p><p>除此之外，所讲到的排序都是指排序的一般实现，可以认为是基本原理。事实上，日常中见到的排序多多少少都会与上文标准实现有所差别，因为会有一些优化细节的差异。很多算法实现都有递归实现和非递归实现的版本，但是，这里提醒一下，在js中使用过深的递归会有意料之外的问题。</p><h2>暂时就到这里吧</h2><p>排序算法很多，因为时间原因，这里也没有且全部列举，例如可能是大多数程序员接触到的第一个排序法，冒泡排序就没有涉及。当然本文重点也不是去重复各个排序算法的差异和优势，而是为了略微深入一点点来了解js的数组sort方法的实现。如果通过本文，当有一天有人问起你，嘿，为什么array.sort这么快的时候，你不再回答&quot;我不知道&quot;，或者想当然的说:&quot;难道不是v8底层很快？&quot;，而是告诉他，&quot;tim peters知道这个问题的答案&quot;，那我很高兴本文还是帮到了你。</p><p>甚至可能，有一天面试官让你写个排序算法的时候，你也能够让他&quot;怀疑人生&quot;。</p>`,84)]))}const om=A(lm,[["render",pm]]),rm=Object.freeze(Object.defineProperty({__proto__:null,__pageData:em,default:om},Symbol.toStringTag,{value:"Module"})),im=JSON.parse('{"title":"讨论&实践——Vite, Webpack, Rollup and More","description":"","frontmatter":{"title":"讨论&实践——Vite, Webpack, Rollup and More","summary":"在前端生态已经汪洋般完善的今天，关于前端工程化相关的工具不断涌现，都旨在为前端应用构建带来更多的方案。其实在笔者看来，作为基础工具，实际上大多数情况下，对于他们的选择不再是讨论能不能，而是更适合和更好。这当然得根据实际的技术业务情况来看，你是更倾向于更小的技术债务，还是需要更高的性能？然后去选...","date":"2023-03-28T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/讨论&实践——Vite, Webpack, Rollup and More.md","filePath":"content/blog/讨论&实践——Vite, Webpack, Rollup and More.md"}'),cm={name:"content/blog/讨论&实践——Vite, Webpack, Rollup and More.md"};function hm(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<p>在前端生态已经汪洋般完善的今天，关于前端工程化相关的工具不断涌现，都旨在为前端应用构建带来更多的方案。其实在笔者看来，作为基础工具，实际上大多数情况下，对于他们的选择不再是讨论能不能，而是更适合和更好。这当然得根据实际的技术业务情况来看，你是更倾向于更小的技术债务，还是需要更高的性能？然后去选择更贴合的工具。</p><h2 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h2><p>在之前的web开发之中，一个scrpit标签对应一个js脚本，如果需要完成完整的代码逻辑，就需要全部放进js脚本之中，通常一个项目构建完毕之后，会出现一个成千上万行代码的js文件，将所有的代码放置在一个文件中会带来诸多的问题，另外，单一文件构建大的项目完全无法维护，所以就需要能够模块化的编写js。</p><p>这个时候出现了模块的需求，但是模块之间是要有加载顺序的，所以就需要一个系统能够解决模块组织的问题，就出现了各种早期的工具，grunt, gulp等，但是这种情况下仍然存在一些其他的问题：延迟加载，无用代码的移除，快速地文件重建等，此时就需要一个捆绑器和加载器来完成这些工作，webpack就是在这个场景下诞生的。</p><p><img src="https://im6767.top/yuque/0/2023/png/23007887/1680011660503-bec6496d-1d98-4c5f-9331-7e22c5af9caf.png" alt=""></p><p>webpack是bundle概念的打包器，正如图中这样，不同的文件都被视为一个一个的module，webpack通过分析这些module的依赖关系，进行组织，最终形成不同的资源文件。webpack有诸多配置，都是为了增强和完善这个加载打包的过程。</p><p>通常来讲，webpack通过指定的入口，开始构建内部的依赖关系图，然后调用loader和plugin进行处理，最后将文件输出，整个流程如下：</p><ol><li>初始化参数，将shell参数和webpack.config.js中的参数合并，形成最后的配置结果。</li><li>用1中的参数初始化compiler对象，注册所有配置的插件，插件会监听webpack生命周期中的事件节点，从而执行对应的动作，执行对象的run方法开始执行编译。</li><li>从配置的entry入口，解析文件构建AST语法树，找出依赖，递归查找。</li><li>递归的过程中，根据文件类型和loader配置，调用所有的loader对其进行转化，再找出模块依赖的模块，然后再次递归执行，直到所有文件都经过了这个步骤的处理。</li><li>递归结束后，得到文件的结果，其中包含每个模块和他们之间的依赖关系，生成代码。</li><li>将代码写入到文件系统。</li></ol>',8)]))}const um=A(cm,[["render",hm]]),dm=Object.freeze(Object.defineProperty({__proto__:null,__pageData:im,default:um},Symbol.toStringTag,{value:"Module"})),jm=JSON.parse('{"title":"过去，是为了更好的开始","description":"","frontmatter":{"title":"过去，是为了更好的开始","summary":"2020年已经只剩下尾巴，无论我有多么不情愿，2021年确实要来了。这个二十一世纪二十年代的第一年，多少带点灰蒙蒙的戏剧色彩。我试图问自己，在这个不怎么寻常的一年，生活到底是幸，还是不幸；自己到底是逆流而上，还是顺流而退；生活节奏是井井有条，还是一团糟呢？是时候回顾总结一下，来给这2020年画上完整的句号了。","date":"2020-12-13T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/过去，是为了更好的开始.md","filePath":"content/blog/过去，是为了更好的开始.md"}'),mm={name:"content/blog/过去，是为了更好的开始.md"};function gm(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x('<h2>Surprise!</h2><p>在回忆开始之前，先说点题外话。本小站的第一个音乐播放器上线啦！页面右上角的音乐图标点击，就可以唤起音乐播放器，使用简单。当然啦，还有一些不那么影响使用体验的bug还没有修复完毕，不过正常的音乐播放是没什么问题。如果点击了播放没有声音，请耐心等待一会，本小站带宽有限，让它加载一会~。在阅读文章感觉枯燥的时候，不妨试着来点音乐，目前可以播放的音乐也是笔者在码字的时候觉得不错，添加进去的。随着完善，以后会在文章中分享一些音乐，希望笔者的分享，你也能够喜欢。</p><h2>HO!糟糕的开头</h2><p>1月21日是我放假回家过年的日子。前一天晚上同事们说，似乎有一场疾病已经开始蔓延，准备口罩是明智的选择。晚上回家路上去药店顺手买了一包，店主还很疑惑：“为什么今天大家都来买口罩”。第二天抵达火车站的时候，大约只有三分之一的人带着口罩。密集的队伍里时不时有人咳嗽两声，在寒冷的冬天这情况太常见了，一切都还是那么正常。顺利登车，然后横跨几乎整个中国，回到家乡。接下来几天情况急转直下，一场灾难开始了。确诊，疑似，死亡，每天都在这些数字中惶惶不可终日。“冷清”是2020年春节最大特点，每个人都是这场灾难的受害者。</p><p>还有更糟糕的吗？有！巧合的是，在这个节骨眼上老爸病了；更巧合的是，也是肺炎。然后就在最不应该去医院的关键时候，必须去医院。接着又是母上大人身体不舒服，也得去医院。好么，每天都在匆匆忙忙中度过，吃药，测温，关注状态。不过所幸是都不是什么大问题，起码和疫情没什么关系。在经历了短暂的节奏脱轨之后，生活还是慢慢的恢复了正常。因为疫情的原因，返程时间被一拖再拖。在持续了相当长一段时间的远程办公后，终于是在疫情相对趋于平稳的情况下返回了杭州，开始了正常的上下班生活。</p><p>这就是2020年的开头。</p><p>在这个糟糕的开头中，我的生活到底是怎样的呢？我觉得还是幸运的吧。在这场疫情中，我们处于一个&quot;世外桃源&quot;之中，当地没有病例，生活都还算正常。我们没有经历其他人被迫要经历或者正在经历的事情。生死这件事儿，还是离我们很遥远。这段时间最大的感触就是，你所爱的人身体健康，才是最大的幸福。这么一讲，2021年第一个愿望已经有了：愿每个生命，都足够幸运。</p><p><img src="https://www.im6767.top/articlePlates/1607844342538.jpg"></p><p class="ql-align-center"><em>（附图感谢远程办公期间陪伴我的喵子——CoCo）</em></p><h2>生活中的一道闪光</h2><p>疫情期间，在杭州的一段生活时间是枯燥的。上班，下班，然后再上班，再下班。乏味的生活会一点点积攒内心的负面情绪，然后到达阈值的之后爆发出来。在返回杭州工作时的很长一段时间内，我就有这样的感觉。我固然是个不愿意变化的人，但这也仅限于大的变动。如果生活总是，总是一成不变，每一天都和昨天一样，那未免有点太恐怖了（《恐怖游轮》了解一下）。一个巧合的机会，认识了一个坦率、直白、和我性格迥异，但是似乎更会生活的人。</p><p>她叫Mia，是的，女生。Mia这个名字可就有意思了，这确实是她的本名（汉语对应“米娅”两个字）。我很喜欢《爱乐之城》，里面的女主角也叫Mia。An English teacher，蒙古族姑娘，外向随和，不那么传统，无论是外在还是内在。</p><p>我是一个传统的人，我父母也是，我朋友几乎也都是（也可能不是，但是表现出来的基本都是传统的一面），所以对于一些非传统思想可能只有耳闻，且带有一定的偏见，目光也只局限于传统的这半边，总是用离经叛道去形容另一种生活状态。</p><p>最有印象的一次记忆就是在西湖边的长椅上了，白堤，北入口，湖边明显有一个台阶旁的长椅。听陌生人讲故事真的是蛮有意思的一件事，每个人的生活经历都值得一提。她讲起关于自己，关于生活，关于爱情，然后一口接着一口抽着烟，那天晚上我也是第一次抽烟(当然也很大概率是最后一次)。内容什么的不便多提，总之是一个有趣的灵魂的精彩半生。</p><p>她还是一个喜欢脱口秀的人，会自己去参加开放麦，自己组织和准备段子。比起她的生活节奏，我的生活开始变得黯淡，不再那么舒适了。</p><p>为什么要提到她呢？因为她和我截然相反，我甚至觉得没有一点相同之处，但是正是这种不同，让我看到了生活中的更多可能性。更关注自我，更愿意尝试，更怪异，更敢于融入自己曾经排斥的团体，更接纳不同的思想。</p><p>这依旧是发生在春天的一个插曲，不过给我的生活轨迹带来了一丝丝改变。现在呢？又已经是两个陌生人了。这枯燥生活中的一道短暂的光，恍如一场梦。</p><p><img src="https://www.im6767.top/articlePlates/1607847821165.jpg"></p><p class="ql-align-center"><em>（尽管每天都在上下班路上，但是总有一丝惊喜和美好，让这段路值得去走）</em></p><h2>老友、青岛、上海</h2><p>今年的五一假期机票异常的便宜，趁着这次机会，去了一趟青岛。没错，关于青岛的详细内容在早些时候的游记文章中有所记录，大致就是见见老友叙叙旧，看看景色吃吃饭，因为疫情的缘故，很多景点都处于closed状态。由于自身也是臭毛病不少，加上交友习惯和轻微社恐，也没有大把大把的朋友，经过时光淘洗的就那么几个，所以更需要联络联络。</p><p>之后呢因为姐来上海的缘故，又去了一次上海。这也是今年唯一一次去上海，上海也有俩朋友，但是只见到一个，另一个没能给个薄面儿，不过问题不大。这也没什么正儿八经好展开的，就是蹭吃蹭喝。</p><p>至此，生活终于回归正轨。如果说五月之前一团糟的话，五月就是转运月了。也可能是因为放下一些负担的缘故。如果让我选择2020年某个时间回去的话，那我一定选择2020年5月。</p><p>嘿，耳机里现在响起的正好是郝云的这首《去大理》，不妨右上角音乐播放试试这首歌。</p><h2>离世</h2><p>7月2日我收到的消息：奶奶去世。挺突然的，之前没有人给我讲任何征兆或者不适，然后就这么发生了。买好了当晚的机票，办好请假手续后当晚就直接奔赴上海乘飞机返乡了。坐在虹桥候机大厅的时候，我突然觉得有点可笑。自己一个人在杭州生活，工作，这种联系，亲人之间的沟通和了解变得过于遥远了，以至于我从未为这些事感到悲伤。我知道离世是一件足以让人悲伤的事，但是我麻木得像一块木头。</p><p>我几乎没有参加过葬礼。很小的时候经历过，然后就是现在。去年外婆过世，我只有一点伤心，谈不上悲伤。现在也是。你完全可以说我是冷血动物，说我没有感情，但是事实就是这样。</p><p>有一半的原因是我的生死观：生没有什么值得庆幸的，死也没有什么值得遗憾和惊讶的，这是生命过程中再正常不过的两个阶段。与其为无法决定的事物感到悲伤，不如珍惜眼前。我甚至可以说：人出生，就是为了死。</p><p>那另一半原因呢？我不知道。我隐约觉得该归罪于这该死的生活，让我变得麻木和无奈，冷血和无情，冷漠和疏远。又觉得该归罪于自身，总是平静，感受不到情绪。</p><p>参加葬礼，盖棺，埋葬，祭奠。这一份不那么浓厚的哀思就寄托在这里吧。我很喜欢之前一篇文章中的一句话，这里就以这句话结尾吧：“她活过了，她扎扎实实的活过了”。</p><h2>谈谈工作</h2><p>不知道从什么时候起，我发现熟悉的同事们开始离开了，一个接一个。有很多和我同一届进来的同事都不见了。从公司来讲，有人离职可太正常了，毕竟大家都是具有自由选择权的劳动者。为什么离开呢？大概是有了更好的选择，更高的薪资，更大的平台，更强的实力。为什么他们都更好，而自己却依旧原地踏步呢？</p><p>我试图从别人身上找到答案，我去询问我的朋友们，他们反问我你为什么不离开呢？我给出了很多理由，结果有人说：不要再给自己找借口了，你就是不想跳出舒适圈。</p><p>我以前想，工作就是尽可能的积累经验，提升自己的实践能力，将理论转变为实际应用。于是我努力理解工作中所用技术，沉淀与积累，遇到问题尽可能去解决，我明白工作中使用的技术框架实际上有不少问题，但是我相信总有一天能够全部处理完毕。但是不知道从什么时候开始我感到厌烦了，我发现问题一个接着一个，没有尽头。有些问题我开始得不到答案，我不得不去在茫茫的搜索引擎中寻找线索，没有人能够给我有价值的启发。我不得不任由某些问题存在，而无法修正。在这份维护性不大好的项目中，我总是因为修改某些东西而引起一系列问题。</p><p>我是一个利他型人格，如果一个问题和我有关，我会认为他就是我的问题。我希望的工作氛围是简单的，“帮助他人，成就自己”。我欣赏每位同事身上的优点，但也很不巧，我似乎也能看到他们身上的缺点。很遗憾，在我所在的工作环境中，是利己主义者居多的，这让我感到疲倦。性格里的一些东西会让自己觉得和有些同事不怎么能够融入起来。</p><p>当你在一个地方待着，感到十分舒适的时候，就说明你该换下一个地方了。我在工作中有很多收获，但这固然不够。技术的陈旧让我不得不花额外的时间去补足其他人在日常工作中就能够获得的知识与经验。我所担心的是，目前的工作氛围，正在让我，和我的同事们，丧失职业竞争力，在舒适的温床中慢慢枯萎。</p><p>和昔日的室友聊起天，大家似乎都在考虑新的工作，新的开始，而跳槽的同事们也都有了更好的薪资。从周围的同事离开开始，从和室友们聊天开始，一个意念的种子也在我脑海中萌发了——如果当前现状没有改变，是时候离开了。我深知自己和周围同事们在某些方面的差距，他们有能力和时间慢慢向前，而我没有，我必须足够努力，才能让自己勉强看起来不那么费力。</p><p>我其实很恐惧跳出舒适圈，进入下一阶段的未知的未来。但是这似乎别无选择。这些美好的过去，或许是为了更好的开始。</p><p><img src="https://www.im6767.top/articlePlates/1607863477013.jpg"></p><p class="ql-align-center"><em>（十一假期回家翻到的老友送的卡片，决定把它放在钱包里随身携带）</em></p><h2>一年的终末</h2><p>今年年终一段时间学习劲头还挺足，日子过得还不错。年初失去的状态慢慢恢复回来了。Coding，Reading，Running，节奏的生活带来的舒适感充盈自己。或许还有Playing？年末这个月和几个同事儿趁着周末机会出去闹腾了几次，说玩逗乐，也还挺好。周围的同事们不可不谓之可爱。很多时候我们总是局限于眼前的事物，反而忽略人与人之间的联系。这种Relationship才是构建社会的关键纽带。</p><p>我比较喜欢观察周围的同事们，看到每个人的性格特点，脾气和情绪，有那么一两个同事真的是金子般的发光，有让人羡慕的能力，能够处理好我处理不好的事情。我很喜欢几个具有明显利他型人格的同事，俗话说：见贤思齐焉，见不贤而内自省也。真希望有一天，也能够想TA们一样强大吧。</p><p>一年时光的回忆差不多就结束了。365天，能记住的事儿却也只有五六件。现在这年岁，越来越感到时间的珍贵。有的时候觉得，日子过得也舒舒服服，生活也没那么遭。有的时候又丧到底，想逃离这操蛋的生活。键盘噼里啪啦的响，脑袋里也是一团糟，回忆伤身，适可而止。那这一年，自己到底有什么收获，又有什么遗憾呢？</p><h2>关于阅读</h2><p>嘿，这是正儿八经今年感觉做的最好的一件事了。从去年年末开始，每天都坚持读会书，渐渐的变成了习惯，不知不觉就看了一年。不得不说读书这件事儿，确实有一种独特的魅力，让你感到一种由内而外的平静和持续不断的思考的喜悦。本来想着写几篇读后感，也由于种种原因停留在了打算阶段。趁着这次机会，不妨简单谈谈今年在阅读上的收获。</p><h4>马尔克斯：《霍乱时期的爱情》</h4><p>提到老马肯定要提起《百年孤独》和《霍乱时期的爱情》。当然，我会去阅读后者，完全是因为前者。大学时候读《百年孤独》读的如痴如醉，&quot;家族的第一个人被捆在树上，最后一个人正在被蚂蚁吃掉&quot;，当读到这里的时候，我的内心有一种意想不到的感觉，我完全被这样一个故事给迷住了。原谅我文化程度不高，但是我相信你也有过这样的感觉，一种根本无法用语言去形容的感觉。</p><p>正是因为这种感觉，我开始读《霍乱时期的爱情》。这次他带给我的不是一种文学的冲击，而是思考，关于爱情的思考。乌尔比诺和费尔明娜的婚姻是现实且理性的。他们五十三年的婚姻生活中充满的是琐碎的吵吵闹闹，但是时间已经将他们打磨成了最为契合的一对。乌尔比诺医生说：&quot;<span style="color:rgb(18, 18, 18);">对于一对恩爱夫妻，最重要的不是幸福，而是稳定。</span>&quot;这是一种平淡但是真实牢固的爱情。</p><blockquote>像他那样一个天主教的卫士，向她提供的竟然仅限于世俗的好处:安全感、和谐和幸福，这些东西一旦相加，或许看似爱情，也几乎等于爱情，但他们终究不是爱情。</blockquote><p>这就是作者的看法。作者认为这不是爱情。<span style="color:rgb(18, 18, 18);">阿里萨拥有的是火一样的热情，浪漫，但是他地位低下。乌尔比诺则代表的是学识渊博，受人尊敬，举止得体。在阿里萨火一样的热烈爱情中，乌尔比诺则更像水流，稳定而长久。</span></p><p>我赞赏阿里萨终其一生的爱情，即使在费尔明娜已婚后的日子里，他放荡风流，但是内心始终爱着她，这份在他生涯中的爱情，卑微的让人心疼，但最终他得到了她。</p><blockquote>在五十三年七个月零十一天以来的日日夜夜，弗洛伦蒂诺·阿里萨一直都准备好了答案。</blockquote><blockquote>“一生一世。”他说。</blockquote><p>他爱的是她的什么呢？我很难描述出来，但这确实是爱情。</p><p>乌尔比诺医生从树上坠落，弥留之际拼尽全力对费尔明娜说：&quot;我爱你&quot;。这也是爱情。不过，我更喜欢的是乌尔比诺医生的平静的爱情，淡雅而稳定。或许，这也是因为<span style="color:rgb(18, 18, 18);">爱是一场博弈，必须保持永远与对方不分伯仲、势均力敌，才能长此以往地相依相息吧。</span></p><p>在爱情中，我总是&quot;阿里萨&quot;，所以这也是我羡慕&quot;乌尔比诺式&quot;爱情的重要原因。嘿，心里正好有这样一个人，令我着迷，神魂颠倒，哈哈哈哈。这里以一首诗《路人》，送给她。2021年第二个愿望：愿她永远平安喜乐。</p><blockquote><em style="color:rgb(18, 18, 18);">我的宿命分两段，</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">未遇见你时，和遇见你以后。</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">你治好我的忧郁，而后赐我悲伤。</em><em style="color:rgb(255, 255, 255);">Y</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">忧郁和悲伤之间的片刻欢喜，</em><em style="color:rgb(255, 255, 255);">2</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">透支了我生命全部的热情储蓄。</em><em style="color:rgb(255, 255, 255);">5</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">想饮一些酒，让灵魂失重，好被风吹走。</em><em style="color:rgb(255, 255, 255);">5</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">可一想到终将是你的路人，</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">便觉得，沦为整个世界的路人。</em></blockquote><blockquote><em style="color:rgb(18, 18, 18);">风虽大，都绕过我灵魂。</em></blockquote><p>好了，关于《霍乱时期的爱情》就到这里，这确实是2020年我觉得读到的最棒的一本书了。文学著作毕竟是文学著作，其中包含的韵味更加绵柔悠长。</p><h4>李银河：《性学入门》，《女性主义》，《虐恋亚文化》和《同性恋亚文化》</h4><p>我是因为王小波才去了解李银河的。当然并不是《爱你就像爱生命》，那本我没有读完。王小波我喜欢《沉默的大多数》，他以一种特别的，略带讽刺的话语方式评论社会，并引申一些道理。我很喜欢里面两种态度，没有什么理由。</p><p>第一是关于沉默，沉默不是怯弱，而是一种智慧。在滔滔不绝中讲出漏洞百出的废话才是愚蠢。我们周围有太多这样的人，掌握了粗浅的原则，就以为无所不知，对世界和生活妄加猜测，结果使得更多的人也纷纷效仿，整个世界深受其害。我选择沉默，是因为我知道话语的重量，知道我为什么沉默。</p><blockquote>我选择沉默的主要原因之一:从话语中，你很少能学到人性，从沉默中却能。假如还想学得更多，那就要继续—声不吭。</blockquote><p>第二是另一句话：</p><blockquote>凡人都热爱异性，因为我自己就是这样的。我很喜欢女孩子，不管她漂亮不漂亮。我也很喜欢和女孩子交往--这仅仅是因为她是异性。我不认为这是罪恶的念头。</blockquote><p>关于王小波，我还有很多要讲，但是那已经是去年读过的文章了，让我说回李银河和她的性学研究。</p><p>性，在中国总是带有负面色彩，无论你是否承认，这种避而不谈的性氛围造就了保守的性环境——暂且不论这种环境是好还是坏。《性学入门》中提到，人类发展历史上，没有任何一件事像性一样，几乎人人都会经历，但是大家都将其视为肮脏和负面事物。性学是一门历史悠久且关联广泛的学术，它囊括生物生理学，社会学，哲学，历史学，心理学，计生学等等。在这本大纲式的著作中，以客观务实的社会学角度出发，逐步阐述了性学相关内容，广泛但不深入，更像是一本概论和导引。性学的发展在历史发展长河中有举足轻重的作用，被认为是现代学术。前不久读完的《第三帝国的到来》中，德国纳粹党在进行社会思想清洗中，将性学研究和超现实主义视为“糟粕思想和艺术，是思想的混乱和颠覆”。近现代，性学越来越受到重视，且衍生出很多主义。总的来说，《性学入门》是严肃的，这部作品的阅读让我产生了不小的兴趣，从而继续阅读了李银河的其它作品。</p><p>女性主义成为当前社会不可忽视的一股力量，特别是在中国。女权的发展在近几年来在中国迅速发展，女性权利进入舆论视野。但是比较遗憾的是，中国的女权正在走向意料之外的道路，甚至有点沦为笑柄的意思。我不喜欢网络上所谓的女权主义者，她们在追逐自我权利的时候，不断的营造一种对立和割裂。既然自己代表女权，那中国的女权发展现状如何呢？中国之前有没有女权运动？自己又属于哪种女权主义者呢？社会女权主义还是自由女权主义？亦或是酷儿主义？我觉得很少有人能够回答这样的问题。</p><p>如果一个人不知道牛顿运动定律而声称自己是物理学家，大家会认为他是个傻子，但是如果一个人弄不清楚女权主义，却仍然可以理所应当的引领话语权，吸引大批人追随自己的观点，这对女权运动来讲是可悲的。我绝对是一个女权主义者，而且是一个自由女权主义者，我接受和欣赏酷儿主义，我希望中国的女性主义发展不会误入愚蠢的前途。</p><p>虐恋(SM)和同性恋应该是两种常见的亚文化了。想必在我们身边，虐恋听闻的并不多，但是比例确实要 比你想象的高。这是一种私人的爱好和行为，应当给予尊重(任何不干涉和影响他人的思想和行为，起码算不上错误)。虐恋文化历史悠久，很多的文学作品中都有体现，有些人出于占有欲和统治欲，有一些则是对一些精神和肉体上的疼痛的痴爱。相较于虐恋文化，同性恋文化更为普遍，且有更大的社会影响。作者在这里主要探讨了男同性恋的问题，而且实际调查中的比例也远高于大众预期。我对同性恋，无论是男同性恋和女同性恋都保持中立态度，但是我很支持对于同性恋问题的重视和更广泛更大众的讨论——隐晦，避而不谈的同性恋文化讨论氛围正在造成一种灾难。在中国，有不少女性嫁给了自己的丈夫后，才发现自己的丈夫有同性恋倾向，又由于中国传统的婚姻文化，羞耻于改变这样的状态，而陷入长久的精神和肉体的折磨中。所以某些情况下，我们是不是应该思考，我们出于某种原因避免的问题，反而在造成一个更大的问题。</p><p>李银河的这几本书是严肃的，它们当然属于科学范畴，值得认真对待。不过传统和历史没有那么容易改变，起码需要足够长的时间。不过总有人要发出第一声，在性科学方面，李银河的这一声非常响亮。这四本书是今年读过的最严肃的文字，所以在此啰嗦了几句。</p><h4>其他</h4><p>其他还有什么呢？还有小说《小妇人》，德国历史《第三帝国的到来》和正在读的人类发展史《枪炮、玫瑰和钢铁》。差点忘了，还有好些个技术相关的书籍，不过对那些东西多少有点疲倦，就不再列举了。总的来说，今年在阅读这件事上，我给自己90分，希望这个习惯明年还能继续保持。最后，以罗翔老师的一句话，给阅读这一章节结个尾：</p><blockquote>在我看来，读书的真正目的是追求智慧，而非单纯的知识。从表面上来看，读书是一个悖论：让你在求知的过程中越来越觉得自己无知。这就像苏格拉底所说的“承认自己的无知才是开启智慧的大门”。</blockquote><h2>关于自己</h2><p>不知不觉又啰嗦了这么多，关于阅读之后？还想关于电影，关于......，在加班的时候写这些，心情多少有点焦躁。跳过其他的关于吧，直接谈谈自己。</p><p>谈谈自己永远是个沉重的话题。今年的我和去年的我相比，似乎也没多大变化。关于杭州这座城市，有了一些新的认识：它也没有想象中那么可怕。去年相当长一段时间内，我厌恶每天重复的上下班那条路，觉得它压抑，单调，乏味。两旁的建筑拒绝着我，整个城市都想把我抛出去。但是今年有点觉得，嘿，这条路也还蛮可爱的嘛。</p><p>如果说过去的自己算不上活泼，那么今年的自己就更加沉默了，不过沉默也不算一件坏事嘛。新同事新面孔来到公司，突然觉得生活没有以前那么慢了，周遭的环境逼着你要不断地往前走，起码也得往前看。舒适圈里呆久了，多少有点狂妄自大，者必须得是下一年改掉的第一个臭毛病。</p><p>去年的时候感觉时间特多，日子特舒服，好想就这样一辈子混吃等死，反而到了今年特想给去年的自己俩大耳刮子。梦醒了，还是得上路。</p><p>工作和技术？对不起，我羞愧的张不开嘴。今年其实有不少的知识积累，但是自己觉得远远不够。一方面是受制于工作，没办法紧随时代潮流，跟上技术发展显得吃力。另一方面不像学生时代，有大把的时间去学习，属于自己生活的时间太宝贵了。这不，这个小破站儿还是个小破站儿，没太多新鲜玩意。明年一定得有点长进，毕竟咱还得吃这碗饭呢。</p><h2>最后</h2><p>就到这里吧。写到现在， 已经成了一篇不怎么像年终总结的年终总结。个人特点，写东西比较话痨，字儿比较多。年初时我说，我站在人生的十字路口，思考通向未来的路，看这样子我在十字路口思考了一年，不过不同的是，这次我已经有了方向，开始前进。2020年就快结束了，我还有最后一个计划没有完成，愿这个计划能为2020年画上圆满的句号吧。</p><p>关于2021？我还没计划好。我依旧是一个不大擅长，也不喜欢做计划的人。2021年的事儿，就留到2021年再去计划吧。加油！六七！</p><p><br></p>',92)]))}const fm=A(mm,[["render",gm]]),_m=Object.freeze(Object.defineProperty({__proto__:null,__pageData:jm,default:fm},Symbol.toStringTag,{value:"Module"})),ym=JSON.parse('{"title":"鸭子和池塘和蒙特卡洛","description":"","frontmatter":{"title":"鸭子和池塘和蒙特卡洛","summary":"曾几何时和几个朋友讨论一个把鸭子丢进圆形池塘的问题，当时为了快速求解顺手撸了一个测试代码。事发偶然，最近在看文章的时候看到了蒙特卡洛算法，仔细一想，嘿，好像这随手撸的代码，还真有那么回事儿。乘这个机会，就来简单说说蒙特卡洛算法。","date":"2020-09-23T00:00:00.000Z"},"headers":[],"relativePath":"content/blog/鸭子和池塘和蒙特卡洛.md","filePath":"content/blog/鸭子和池塘和蒙特卡洛.md"}'),bm={name:"content/blog/鸭子和池塘和蒙特卡洛.md"};function vm(n,s,a,t,e,l){return k(),q("div",null,s[0]||(s[0]=[x(`<h2>故事从鸭子开始</h2><p>有一天群里一朋友抛出一个问题，说有一个圆形池塘，把四只鸭子丢进去，问四只鸭子在同一个半圆内的概率。这是一个初中奥数比赛的题目。暂且不说可怜的鸭鸭到底做错了什么非要被丢进池塘，但是这个问题还是蛮有意思。我数学不大好，但我看完题目就给出了正确答案，也是所有概率问题的正确答案：二分之一。要么在一个半圆，要么不在一个半圆呗。也不知道伯努利老人家的棺材板还压不压得住，不过他老人家的大数理论我还是记住了：<strong>试验条件不变，大量重复试验的频率近似等于它的概率。</strong>不就是大量的事儿嘛，开始模拟。</p><h2>分析与设计</h2><p>既然要模拟整个过程，我们需要准备的有：</p><ul><li>四只耐摔一点的小鸭子。</li><li>具有强大拍摄功能的无人机。</li><li>尺寸合适的圆形池塘一处。</li></ul><p>这明显不够优雅。我们有的只是一块屏幕、一个键盘。</p><p>既然是圆形池塘，我们首先就创造一个圆形池塘。</p><p><img src="https://www.im6767.top/articlePlates/1600867751864.png"></p><p>思考后能够知道，四只鸭子处于同一个半圆内，和鸭子到圆心的距离无关，只和四只鸭子的角度有关，所以我们采用弧度制，大致建立坐标</p><p><img src="https://www.im6767.top/articlePlates/1600868106819.png"></p><p>然后开始丢鸭子。我们知道鸭子丢进这个池塘里，它的弧度表示必定在[0,2π)之间(包括0但不包括2π)，所以我们生成四个位于0到2π之间的随机数，表示四只鸭子的坐标。</p><p><img src="https://www.im6767.top/articlePlates/1600868426595.png"></p><p>如何知道四只鸭子在同一个半圆里呢？这大概是这个问题唯一的难点。判断方法有很多种，我选择的方法是：<strong>依次以某一只鸭子为起点，顺时针方向扫过一个半圆区域，判断另外三只鸭子是否在这个半圆区域内。如果有，则视为一次&quot;成功模拟&quot;，如果四只鸭子都进行扫描，没有满足的情况 ，则视为一次&quot;失败模拟&quot;。</strong></p><p>这里有一点点需要注意的地方，判断的时候需要分两种情况。</p><p>第一种，扫描起点的鸭子位于0~π之间，这时以该鸭子扫过的半圆区域肯定不会超过2π，所以失败模拟的情况是<strong>目标鸭子的坐标小于起点鸭子的坐标或者大于起点鸭子+π后的坐标。</strong></p><p>第二种，扫描起点的鸭子位于π到2π之间，这时处理就会略微麻烦一些。由于以该鸭子扫过的半圆区域会经过原地点，所以失败模拟的情况是<strong>目标鸭子的坐标小于起点鸭子的坐标并且大于起点鸭子起点鸭子坐标+π-2π后的坐标。</strong></p><p>千万不要被两种情况绕晕了！事实上你如果理解上面的模拟过程，也可以轻易的想到这两个问题，或许也可以试试拿出纸笔，亲自画一画。</p><h2>开始撸代码</h2><p>有了以上设计过程，代码的编写就变得简单容易了，这里直接贴上当时的测试代码</p><pre class="ql-syntax" spellcheck="false">//池塘丢鸭子算法,入参为实验次数
function duckInPool (times) {
    //定义π的值
    const PI = 3.1415926535;
    //存储四只鸭子位置信息的数组
    let duckPositionList = [],
    //记录四只鸭子位于同一个半圆的次数
        inSemicicle = 0,
    //中间转换变量
        isInSemicicle = false;
    //执行入参次数模拟
    for (let i = 0 ; i &lt; times; i++) {
        //每次模拟初始化数据
        isInSemicicle = false;
        duckPositionList = [];
        //随机模拟获取四只鸭子的位置
        for (let j = 0; j &lt; 4; j++) {
            let duckPosition = {
                position: 0,
                clockwiseSemicircle: 0
            };
            //鸭子的位置(弧度制)
            duckPosition.position = Math.random() * 2 * PI;
            //这里直接标记算出后面正向扫描半圆的弧度上限值
            duckPosition.clockwiseSemicircle = duckPosition.position + PI;
            //将鸭子位置放入数组
            duckPositionList.push(duckPosition);
        }
        /**
         *判断四只鸭子是否处于同一半圆
         *以每只鸭子为起点, 顺时针扫描最大半圆区域
         *如果某次扫描区间内包含另外三只鸭子, 则此时四只鸭子处于同一半圆, 结束扫描
         *并将中间量的标记状态转化为true
         */
        isInSemicicle = duckPositionList.some((item, index, list)=&gt;{
            //这里扫描时跳过自己
            for (let f = 0; f &lt; 4; f++) {
                if( f === index) {
                    continue;
                }
                //如果起点鸭子弧度大于π, 则半圆将会扫过起点, 判断弧度要减去2π
                if (item.position &gt; PI) {
                    if (list[f].position &gt; item.clockwiseSemicircle - 2 * PI &amp;&amp; list[f].position &lt; item.position) {
                        return false;
                    }
                //如果起点鸭子弧度小于π, 则半圆不会扫过起点
                } else {
                    if (list[f].position &gt; item.clockwiseSemicircle || list[f].position &lt; item.position) {
                        return false;
                    }
                }
            }
            return true;
        });
        //如果一趟扫描中间量为true, 则四只鸭子位于了同一半圆, 统计次数+1
        if (isInSemicicle) {
            inSemicicle++;
        }
    }
    //返回结果
    return inSemicicle / times;
}
</pre><p>当然，这个小算法还有很大的优化空间，如果你确切的理解了计算过程，你会发现有几处计算显得&quot;毫无必要&quot;。</p><h2>开始丢鸭子</h2><p>我们直接调用上面的方法，模拟10、100、1,000、10,000、100,000、1,000,000、10,000,000次，看看得到的结果</p><p><img src="https://www.im6767.top/articlePlates/1600870706797.png"></p><p>结合开始提到的大数理论，我们能够有力的推测，答案是1/2。</p><h2>蒙特卡洛算法</h2><p>蒙特卡洛不是一个人名，而是摩洛哥公国的一座城市。蒙特卡洛算法事实上就是统计模拟法，著名的计算圆周率的投针实验就是使用该方法的典型代表。而城市蒙特卡洛也被称作&quot;赌博之城&quot;，似乎也和概率息息相关。该算法是指使用随机数（或更常见的伪随机数）来解决很多计算问题的方法。将所求解的问题同一定的概率模型相联系，用电子计算机实现统计模拟或抽样，以获得问题的近似解。在物理和经济学方面有广泛应用。(例如模拟粒子运动和位置，模拟经济变化等)，我们的丢鸭子试验事实上也是一个蒙特卡洛算法。它一般包括三个过程：</p><ol><li>构造模拟过程(就像我们上文提到的分析设计)。</li><li>实现概率的分布抽样(事实上就是上文的随机位置产生过程)。</li><li>建立获取估计量(即我们最后得到的结果，他们都不严格等于0.5，但是我们从估计量分析可以认为解是0.5)。</li></ol><p>一个简单的问题，里面多少包含的思想的的确确有点意思。</p><h2>好像还不够美</h2><p>尽管我们得到了这个问题的统计解，但是多少还是差点意思。因为无论模拟多少次，我们总是得到一个无限接近于正确值的值，而永远不是严格等于正确值，就如同你无限接近真理，却总是无法摸到真理。虽然我不大擅长数学，也对数学符号避之不及，但是还是想看看他的解析解到底如何得到。</p><p>设四个点为 C₁ , C₂ , C₃ , C₄ 分别位于直径 A₁B₁ , A₂B₂ , A₃B₃ , A₄B₄ 上。不妨设四条直径各不相同，且四个点都不在圆心 O 处。</p><p><img src="https://www.im6767.top/articlePlates/1600872025330.jpg"></p><p>易得 Cₘ 位于半径 OAₘ 与半径 OBₘ 的概率都是 1/2 ，而 C₁ , C₂ , C₃ , C₄ 共半圆等价于所在的四条半径相邻！</p><p>于是转化为了古典概型：在四条直径中各选一条半径，则四条半径相邻的概率是？</p><p>用古典概型公式：</p><p>P = Ω / Ω₀ = (2×4) / (2^4) = 1/2</p><p>哈，这就是他的一个解析解。确实是1/2。当然得到这个答案的大神并不是我，但是这个解法确实很厉害。</p><p>(我属于复习了大半天试图用微积分解的那种)</p><h2>优雅！</h2><p>开头我们提到过，这是一个初中数学竞赛题，编程=作弊，微积分=超纲，古典概型也是高中知识，那么初中知识如何解答呢？下面一个是网上一个老师贴出学生的解答：</p><p><img src="https://www.im6767.top/articlePlates/1600872465033.png"></p><p>总结：敲键盘的手，微微颤抖。他甚至告诉了我，如果丢n只鸭子该如何解。优雅！</p><h2>最后</h2><p>本文到这里事实上就结束了。我是敲代码的，旨在介绍一下统计解和浅显的解释一下蒙特卡洛算法。其实很多概率问题，都可以写代码来模拟，蒙特卡洛算法的思想能够方便的解决生活中的很多问题，成为程序员的一个有力武器。如果你看完本文产生了一点兴趣，那么不妨试试下面这个丢鸭子的问题：</p><p>两只鸭子，丢进一个圆形池塘，这两只鸭子之间的距离小于圆半径的概率是多少？</p>`,46)]))}const wm=A(bm,[["render",vm]]),km=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ym,default:wm},Symbol.toStringTag,{value:"Module"}));var nl=typeof global=="object"&&global&&global.Object===Object&&global,qm=typeof self=="object"&&self&&self.Object===Object&&self,ua=nl||qm||Function("return this")(),cn=ua.Symbol,al=Object.prototype,Tm=al.hasOwnProperty,Sm=al.toString,mn=cn?cn.toStringTag:void 0;function xm(n){var s=Tm.call(n,mn),a=n[mn];try{n[mn]=void 0;var t=!0}catch{}var e=Sm.call(n);return t&&(s?n[mn]=a:delete n[mn]),e}var Cm=Object.prototype,Pm=Cm.toString;function Am(n){return Pm.call(n)}var Dm="[object Null]",Em="[object Undefined]",te=cn?cn.toStringTag:void 0;function da(n){return n==null?n===void 0?Em:Dm:te&&te in Object(n)?xm(n):Am(n)}function ja(n){return n!=null&&typeof n=="object"}var Nm="[object Symbol]";function tt(n){return typeof n=="symbol"||ja(n)&&da(n)==Nm}function tl(n,s){for(var a=-1,t=n==null?0:n.length,e=Array(t);++a<t;)e[a]=s(n[a],a,n);return e}var ma=Array.isArray,ee=cn?cn.prototype:void 0,le=ee?ee.toString:void 0;function el(n){if(typeof n=="string")return n;if(ma(n))return tl(n,el)+"";if(tt(n))return le?le.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function ll(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}var Im="[object AsyncFunction]",Om="[object Function]",Rm="[object GeneratorFunction]",Mm="[object Proxy]";function pl(n){if(!ll(n))return!1;var s=da(n);return s==Om||s==Rm||s==Im||s==Mm}var ka=ua["__core-js_shared__"],pe=function(){var n=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Vm(n){return!!pe&&pe in n}var $m=Function.prototype,Lm=$m.toString;function Hm(n){if(n!=null){try{return Lm.call(n)}catch{}try{return n+""}catch{}}return""}var zm=/[\\^$.*+?()[\]{}|]/g,Fm=/^\[object .+?Constructor\]$/,Jm=Function.prototype,Gm=Object.prototype,Wm=Jm.toString,Um=Gm.hasOwnProperty,Bm=RegExp("^"+Wm.call(Um).replace(zm,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ym(n){if(!ll(n)||Vm(n))return!1;var s=pl(n)?Bm:Fm;return s.test(Hm(n))}function Xm(n,s){return n==null?void 0:n[s]}function ol(n,s){var a=Xm(n,s);return Ym(a)?a:void 0}var Zm=9007199254740991,Qm=/^(?:0|[1-9]\d*)$/;function Km(n,s){var a=typeof n;return s=s??Zm,!!s&&(a=="number"||a!="symbol"&&Qm.test(n))&&n>-1&&n%1==0&&n<s}function sg(n,s){return n===s||n!==n&&s!==s}var ng=9007199254740991;function rl(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ng}function ag(n){return n!=null&&rl(n.length)&&!pl(n)}var tg=Object.prototype;function eg(n){var s=n&&n.constructor,a=typeof s=="function"&&s.prototype||tg;return n===a}function lg(n,s){for(var a=-1,t=Array(n);++a<n;)t[a]=s(a);return t}var pg="[object Arguments]";function oe(n){return ja(n)&&da(n)==pg}var il=Object.prototype,og=il.hasOwnProperty,rg=il.propertyIsEnumerable,ig=oe(function(){return arguments}())?oe:function(n){return ja(n)&&og.call(n,"callee")&&!rg.call(n,"callee")};function cg(){return!1}var cl=typeof exports=="object"&&exports&&!exports.nodeType&&exports,re=cl&&typeof module=="object"&&module&&!module.nodeType&&module,hg=re&&re.exports===cl,ie=hg?ua.Buffer:void 0,ug=ie?ie.isBuffer:void 0,dg=ug||cg,jg="[object Arguments]",mg="[object Array]",gg="[object Boolean]",fg="[object Date]",_g="[object Error]",yg="[object Function]",bg="[object Map]",vg="[object Number]",wg="[object Object]",kg="[object RegExp]",qg="[object Set]",Tg="[object String]",Sg="[object WeakMap]",xg="[object ArrayBuffer]",Cg="[object DataView]",Pg="[object Float32Array]",Ag="[object Float64Array]",Dg="[object Int8Array]",Eg="[object Int16Array]",Ng="[object Int32Array]",Ig="[object Uint8Array]",Og="[object Uint8ClampedArray]",Rg="[object Uint16Array]",Mg="[object Uint32Array]",Q={};Q[Pg]=Q[Ag]=Q[Dg]=Q[Eg]=Q[Ng]=Q[Ig]=Q[Og]=Q[Rg]=Q[Mg]=!0;Q[jg]=Q[mg]=Q[xg]=Q[gg]=Q[Cg]=Q[fg]=Q[_g]=Q[yg]=Q[bg]=Q[vg]=Q[wg]=Q[kg]=Q[qg]=Q[Tg]=Q[Sg]=!1;function Vg(n){return ja(n)&&rl(n.length)&&!!Q[da(n)]}function $g(n){return function(s){return n(s)}}var hl=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wn=hl&&typeof module=="object"&&module&&!module.nodeType&&module,Lg=wn&&wn.exports===hl,qa=Lg&&nl.process,ce=function(){try{var n=wn&&wn.require&&wn.require("util").types;return n||qa&&qa.binding&&qa.binding("util")}catch{}}(),he=ce&&ce.isTypedArray,Hg=he?$g(he):Vg,zg=Object.prototype,Fg=zg.hasOwnProperty;function Jg(n,s){var a=ma(n),t=!a&&ig(n),e=!a&&!t&&dg(n),l=!a&&!t&&!e&&Hg(n),p=a||t||e||l,o=p?lg(n.length,String):[],r=o.length;for(var i in n)Fg.call(n,i)&&!(p&&(i=="length"||e&&(i=="offset"||i=="parent")||l&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||Km(i,r)))&&o.push(i);return o}function Gg(n,s){return function(a){return n(s(a))}}var Wg=Gg(Object.keys,Object),Ug=Object.prototype,Bg=Ug.hasOwnProperty;function Yg(n){if(!eg(n))return Wg(n);var s=[];for(var a in Object(n))Bg.call(n,a)&&a!="constructor"&&s.push(a);return s}function Xg(n){return ag(n)?Jg(n):Yg(n)}var Zg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qg=/^\w*$/;function Kg(n,s){if(ma(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||tt(n)?!0:Qg.test(n)||!Zg.test(n)||s!=null&&n in Object(s)}var An=ol(Object,"create");function sf(){this.__data__=An?An(null):{},this.size=0}function nf(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}var af="__lodash_hash_undefined__",tf=Object.prototype,ef=tf.hasOwnProperty;function lf(n){var s=this.__data__;if(An){var a=s[n];return a===af?void 0:a}return ef.call(s,n)?s[n]:void 0}var pf=Object.prototype,of=pf.hasOwnProperty;function rf(n){var s=this.__data__;return An?s[n]!==void 0:of.call(s,n)}var cf="__lodash_hash_undefined__";function hf(n,s){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=An&&s===void 0?cf:s,this}function Gs(n){var s=-1,a=n==null?0:n.length;for(this.clear();++s<a;){var t=n[s];this.set(t[0],t[1])}}Gs.prototype.clear=sf;Gs.prototype.delete=nf;Gs.prototype.get=lf;Gs.prototype.has=rf;Gs.prototype.set=hf;function uf(){this.__data__=[],this.size=0}function ga(n,s){for(var a=n.length;a--;)if(sg(n[a][0],s))return a;return-1}var df=Array.prototype,jf=df.splice;function mf(n){var s=this.__data__,a=ga(s,n);if(a<0)return!1;var t=s.length-1;return a==t?s.pop():jf.call(s,a,1),--this.size,!0}function gf(n){var s=this.__data__,a=ga(s,n);return a<0?void 0:s[a][1]}function ff(n){return ga(this.__data__,n)>-1}function _f(n,s){var a=this.__data__,t=ga(a,n);return t<0?(++this.size,a.push([n,s])):a[t][1]=s,this}function hn(n){var s=-1,a=n==null?0:n.length;for(this.clear();++s<a;){var t=n[s];this.set(t[0],t[1])}}hn.prototype.clear=uf;hn.prototype.delete=mf;hn.prototype.get=gf;hn.prototype.has=ff;hn.prototype.set=_f;var yf=ol(ua,"Map");function bf(){this.size=0,this.__data__={hash:new Gs,map:new(yf||hn),string:new Gs}}function vf(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function fa(n,s){var a=n.__data__;return vf(s)?a[typeof s=="string"?"string":"hash"]:a.map}function wf(n){var s=fa(this,n).delete(n);return this.size-=s?1:0,s}function kf(n){return fa(this,n).get(n)}function qf(n){return fa(this,n).has(n)}function Tf(n,s){var a=fa(this,n),t=a.size;return a.set(n,s),this.size+=a.size==t?0:1,this}function Us(n){var s=-1,a=n==null?0:n.length;for(this.clear();++s<a;){var t=n[s];this.set(t[0],t[1])}}Us.prototype.clear=bf;Us.prototype.delete=wf;Us.prototype.get=kf;Us.prototype.has=qf;Us.prototype.set=Tf;var Sf="Expected a function";function et(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new TypeError(Sf);var a=function(){var t=arguments,e=s?s.apply(this,t):t[0],l=a.cache;if(l.has(e))return l.get(e);var p=n.apply(this,t);return a.cache=l.set(e,p)||l,p};return a.cache=new(et.Cache||Us),a}et.Cache=Us;var xf=500;function Cf(n){var s=et(n,function(t){return a.size===xf&&a.clear(),t}),a=s.cache;return s}var Pf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Af=/\\(\\)?/g,Df=Cf(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Pf,function(a,t,e,l){s.push(e?l.replace(Af,"$1"):t||a)}),s});function Ef(n){return n==null?"":el(n)}function Nf(n,s){return ma(n)?n:Kg(n,s)?[n]:Df(Ef(n))}function If(n){if(typeof n=="string"||tt(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Of(n,s){s=Nf(s,n);for(var a=0,t=s.length;n!=null&&a<t;)n=n[If(s[a++])];return a&&a==t?n:void 0}function Rf(n,s,a){var t=n==null?void 0:Of(n,s);return t===void 0?a:t}function Mf(n,s){return tl(s,function(a){return n[a]})}function Vf(n){return n==null?[]:Mf(n,Xg(n))}var $f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ul={exports:{}};(function(n,s){(function(a,t){n.exports=t()})($f,function(){var a=1e3,t=6e4,e=36e5,l="millisecond",p="second",o="minute",r="hour",i="day",c="week",h="month",u="quarter",j="year",g="date",v="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var y=["th","st","nd","rd"],_=f%100;return"["+f+(y[(_-20)%10]||y[_]||y[0])+"]"}},D=function(f,y,_){var S=String(f);return!S||S.length>=y?f:""+Array(y+1-S.length).join(_)+f},X={s:D,z:function(f){var y=-f.utcOffset(),_=Math.abs(y),S=Math.floor(_/60),w=_%60;return(y<=0?"+":"-")+D(S,2,"0")+":"+D(w,2,"0")},m:function f(y,_){if(y.date()<_.date())return-f(_,y);var S=12*(_.year()-y.year())+(_.month()-y.month()),w=y.clone().add(S,h),N=_-w<0,M=y.clone().add(S+(N?-1:1),h);return+(-(S+(_-w)/(N?w-M:M-w))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M:h,y:j,w:c,d:i,D:g,h:r,m:o,s:p,ms:l,Q:u}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},U="en",Z={};Z[U]=P;var O="$isDayjsObject",es=function(f){return f instanceof cs||!(!f||!f[O])},F=function f(y,_,S){var w;if(!y)return U;if(typeof y=="string"){var N=y.toLowerCase();Z[N]&&(w=N),_&&(Z[N]=_,w=N);var M=y.split("-");if(!w&&M.length>1)return f(M[0])}else{var B=y.name;Z[B]=y,w=B}return!S&&w&&(U=w),w||!S&&U},$=function(f,y){if(es(f))return f.clone();var _=typeof y=="object"?y:{};return _.date=f,_.args=arguments,new cs(_)},L=X;L.l=F,L.i=es,L.w=function(f,y){return $(f,{locale:y.$L,utc:y.$u,x:y.$x,$offset:y.$offset})};var cs=function(){function f(_){this.$L=F(_.locale,null,!0),this.parse(_),this.$x=this.$x||_.x||{},this[O]=!0}var y=f.prototype;return y.parse=function(_){this.$d=function(S){var w=S.date,N=S.utc;if(w===null)return new Date(NaN);if(L.u(w))return new Date;if(w instanceof Date)return new Date(w);if(typeof w=="string"&&!/Z$/i.test(w)){var M=w.match(b);if(M){var B=M[2]-1||0,ns=(M[7]||"0").substring(0,3);return N?new Date(Date.UTC(M[1],B,M[3]||1,M[4]||0,M[5]||0,M[6]||0,ns)):new Date(M[1],B,M[3]||1,M[4]||0,M[5]||0,M[6]||0,ns)}}return new Date(w)}(_),this.init()},y.init=function(){var _=this.$d;this.$y=_.getFullYear(),this.$M=_.getMonth(),this.$D=_.getDate(),this.$W=_.getDay(),this.$H=_.getHours(),this.$m=_.getMinutes(),this.$s=_.getSeconds(),this.$ms=_.getMilliseconds()},y.$utils=function(){return L},y.isValid=function(){return this.$d.toString()!==v},y.isSame=function(_,S){var w=$(_);return this.startOf(S)<=w&&w<=this.endOf(S)},y.isAfter=function(_,S){return $(_)<this.startOf(S)},y.isBefore=function(_,S){return this.endOf(S)<$(_)},y.$g=function(_,S,w){return L.u(_)?this[S]:this.set(w,_)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(_,S){var w=this,N=!!L.u(S)||S,M=L.p(_),B=function(Ms,hs){var Ds=L.w(w.$u?Date.UTC(w.$y,hs,Ms):new Date(w.$y,hs,Ms),w);return N?Ds:Ds.endOf(i)},ns=function(Ms,hs){return L.w(w.toDate()[Ms].apply(w.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(hs)),w)},ls=this.$W,rs=this.$M,ms=this.$D,Bs="set"+(this.$u?"UTC":"");switch(M){case j:return N?B(1,0):B(31,11);case h:return N?B(1,rs):B(0,rs+1);case c:var Rs=this.$locale().weekStart||0,un=(ls<Rs?ls+7:ls)-Rs;return B(N?ms-un:ms+(6-un),rs);case i:case g:return ns(Bs+"Hours",0);case r:return ns(Bs+"Minutes",1);case o:return ns(Bs+"Seconds",2);case p:return ns(Bs+"Milliseconds",3);default:return this.clone()}},y.endOf=function(_){return this.startOf(_,!1)},y.$set=function(_,S){var w,N=L.p(_),M="set"+(this.$u?"UTC":""),B=(w={},w[i]=M+"Date",w[g]=M+"Date",w[h]=M+"Month",w[j]=M+"FullYear",w[r]=M+"Hours",w[o]=M+"Minutes",w[p]=M+"Seconds",w[l]=M+"Milliseconds",w)[N],ns=N===i?this.$D+(S-this.$W):S;if(N===h||N===j){var ls=this.clone().set(g,1);ls.$d[B](ns),ls.init(),this.$d=ls.set(g,Math.min(this.$D,ls.daysInMonth())).$d}else B&&this.$d[B](ns);return this.init(),this},y.set=function(_,S){return this.clone().$set(_,S)},y.get=function(_){return this[L.p(_)]()},y.add=function(_,S){var w,N=this;_=Number(_);var M=L.p(S),B=function(rs){var ms=$(N);return L.w(ms.date(ms.date()+Math.round(rs*_)),N)};if(M===h)return this.set(h,this.$M+_);if(M===j)return this.set(j,this.$y+_);if(M===i)return B(1);if(M===c)return B(7);var ns=(w={},w[o]=t,w[r]=e,w[p]=a,w)[M]||1,ls=this.$d.getTime()+_*ns;return L.w(ls,this)},y.subtract=function(_,S){return this.add(-1*_,S)},y.format=function(_){var S=this,w=this.$locale();if(!this.isValid())return w.invalidDate||v;var N=_||"YYYY-MM-DDTHH:mm:ssZ",M=L.z(this),B=this.$H,ns=this.$m,ls=this.$M,rs=w.weekdays,ms=w.months,Bs=w.meridiem,Rs=function(hs,Ds,dn,Nn){return hs&&(hs[Ds]||hs(S,N))||dn[Ds].slice(0,Nn)},un=function(hs){return L.s(B%12||12,hs,"0")},Ms=Bs||function(hs,Ds,dn){var Nn=hs<12?"AM":"PM";return dn?Nn.toLowerCase():Nn};return N.replace(T,function(hs,Ds){return Ds||function(dn){switch(dn){case"YY":return String(S.$y).slice(-2);case"YYYY":return L.s(S.$y,4,"0");case"M":return ls+1;case"MM":return L.s(ls+1,2,"0");case"MMM":return Rs(w.monthsShort,ls,ms,3);case"MMMM":return Rs(ms,ls);case"D":return S.$D;case"DD":return L.s(S.$D,2,"0");case"d":return String(S.$W);case"dd":return Rs(w.weekdaysMin,S.$W,rs,2);case"ddd":return Rs(w.weekdaysShort,S.$W,rs,3);case"dddd":return rs[S.$W];case"H":return String(B);case"HH":return L.s(B,2,"0");case"h":return un(1);case"hh":return un(2);case"a":return Ms(B,ns,!0);case"A":return Ms(B,ns,!1);case"m":return String(ns);case"mm":return L.s(ns,2,"0");case"s":return String(S.$s);case"ss":return L.s(S.$s,2,"0");case"SSS":return L.s(S.$ms,3,"0");case"Z":return M}return null}(hs)||M.replace(":","")})},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(_,S,w){var N,M=this,B=L.p(S),ns=$(_),ls=(ns.utcOffset()-this.utcOffset())*t,rs=this-ns,ms=function(){return L.m(M,ns)};switch(B){case j:N=ms()/12;break;case h:N=ms();break;case u:N=ms()/3;break;case c:N=(rs-ls)/6048e5;break;case i:N=(rs-ls)/864e5;break;case r:N=rs/e;break;case o:N=rs/t;break;case p:N=rs/a;break;default:N=rs}return w?N:L.a(N)},y.daysInMonth=function(){return this.endOf(h).$D},y.$locale=function(){return Z[this.$L]},y.locale=function(_,S){if(!_)return this.$L;var w=this.clone(),N=F(_,S,!0);return N&&(w.$L=N),w},y.clone=function(){return L.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),os=cs.prototype;return $.prototype=os,[["$ms",l],["$s",p],["$m",o],["$H",r],["$W",i],["$M",h],["$y",j],["$D",g]].forEach(function(f){os[f[1]]=function(y){return this.$g(y,f[0],f[1])}}),$.extend=function(f,y){return f.$i||(f(y,cs,$),f.$i=!0),$},$.locale=F,$.isDayjs=es,$.unix=function(f){return $(1e3*f)},$.en=Z[U],$.Ls=Z,$.p={},$})})(ul);var Hf=ul.exports;const Ta=Lf(Hf),zf={class:"px-6 h-full overflow-auto",ref:"scroll"},Ff={class:"my-6 border-b border-gray-300 py-4"},Jf={class:"flex flex-col gap-2"},Gf={class:"tracking-wider hover:text-teal-500 transition-colors hover:underline underline-offset-8 w-fit"},Wf=["href"],Uf={class:"text-zinc-500 line-clamp-3"},Bf={class:"flex items-center gap-3"},Yf={class:"bg-gray-400 text-gray-100 px-2 py-1 rounded flex items-center gap-1 text-sm"},Xf={class:"pb-8 flex justify-end gap-3 pr-8 box-border"},Zf="/content/blog/",Qf=ks({__name:"ArticleList",setup(n){const s=Cs([]);Ws(async()=>{s.value=Vf(Object.assign({"/content/blog/2020五月初青岛游·见·闻.md":Vc,"/content/blog/Chrome一个关于setTimeout的BUG.md":Fc,"/content/blog/Echarts之dataset.md":Bc,"/content/blog/Event and Event Loop.md":Kc,"/content/blog/GraphQL: 从认知到实践.md":eh,"/content/blog/JSON Web Token和SSO.md":ch,"/content/blog/Monaco-Editor和Dan.md":mh,"/content/blog/More About Performance.md":bh,"/content/blog/React源码系列(一)：React与createRoot.md":Th,"/content/blog/React源码系列(二): Render.md":Ah,"/content/blog/Vite Out Of Memory.md":Oh,"/content/blog/Vue.js源码系列(一)：工程与createApp.md":zh,"/content/blog/Vue.js源码系列(三)：模板解析与编译.md":nu,"/content/blog/Vue.js源码系列(二)：mount与第一次渲染.md":iu,"/content/blog/Vue.js源码系列(五)：单文件组件.md":ju,"/content/blog/Vue.js源码系列(四)：响应式与Dom Diff.md":qu,"/content/blog/Vue3服务端渲染不完全指北.md":Pu,"/content/blog/WebRTC入门.md":Iu,"/content/blog/《地球之盐》——这个世界的影集.md":$u,"/content/blog/《金刚川》——一部中庸的命题作文.md":Ju,"/content/blog/一些前端杂记.md":Yu,"/content/blog/三言两语聊Git.md":sd,"/content/blog/不属于我们的电影记忆：《一秒钟》.md":ld,"/content/blog/不要再被跨域影响你的开发进度了.md":cd,"/content/blog/东京街头圣诞夜的奇迹.md":md,"/content/blog/从0到1的页面展示之旅.md":bd,"/content/blog/从HTTP-0.9到HTTP-3.md":Td,"/content/blog/你的代码真的健康吗？.md":Ad,'/content/blog/元素remove和mouseenter的怪癖"BUG".md':Od,'/content/blog/内联元素间不怎么引人注意的"间隙".md':Ld,'/content/blog/初识Flutter与"月知".md':Gd,"/content/blog/前端与图形学——SVG.md":Xd,"/content/blog/前端与图形学——贝塞尔曲线.md":nj,"/content/blog/前端工作相关的杂记（一）.md":pj,"/content/blog/回首可叹，未来可期.md":hj,"/content/blog/域名证书自动化和一些问题.md":gj,"/content/blog/我也是个年轻人，我心情也不太好.md":vj,"/content/blog/我将尽力遗忘这一年.md":Sj,"/content/blog/搞定chrome扩展开发热更新.md":Dj,"/content/blog/数字格式处理.md":Rj,"/content/blog/有点特殊的iframe标签.md":Hj,"/content/blog/没有那么好，也没有那么糟.md":Uj,"/content/blog/简单搞定深色模式.md":Qj,"/content/blog/聊聊前端相关的小知识.md":tm,"/content/blog/聊聊排序算法.md":rm,"/content/blog/讨论&实践——Vite, Webpack, Rollup and More.md":dm,"/content/blog/过去，是为了更好的开始.md":_m,"/content/blog/鸭子和池塘和蒙特卡洛.md":km})).map(j=>Rf(j,"__pageData.frontmatter")).sort((j,g)=>Ta(g.date).unix()-Ta(j.date).unix()),js(p,j=>{o.value=j},{immediate:!0})});const a=ps(()=>s.value.length),t=()=>{const j=document.querySelector("#main");j==null||j.scrollTo({top:0,behavior:"smooth"})},e=Ns(1),l=Ns(10),p=be("page",1),{currentPage:o,currentPageSize:r,pageCount:i,prev:c,next:h}=Jl({total:a,pageSize:l,page:e,onPageChange:t});js(o,j=>{p.value=j});const u=ps(()=>s.value.slice((o.value-1)*r.value,(o.value-1)*r.value+r.value));return(j,g)=>(k(),q("div",zf,[(k(!0),q(za,null,Fa(G(u),v=>(k(),q("div",Ff,[d("div",Jf,[d("h3",Gf,[d("a",{href:`${Zf}${v.title}`,class:"no-underline relative"},[m(ts(v.title)+" ",1),C(G(lp),{class:"inline p-0.5",size:33})],8,Wf)]),d("div",Uf,ts(v.summary),1),d("div",Bf,[d("div",Yf,[C(G(tp),{size:16}),d("span",null,ts(G(Ta)(v.date).format("YYYY-MM-DD")),1)])])])]))),256)),d("div",Xf,[G(o)!==1?(k(),q("button",{key:0,class:"border p-2 rounded cursor-pointer hover:bg-teal-400 transition-colors",onClick:g[0]||(g[0]=(...v)=>G(c)&&G(c)(...v))},"上一页")):Zn("",!0),G(o)!==G(i)?(k(),q("button",{key:1,class:"border p-2 rounded cursor-pointer hover:bg-teal-400 transition-colors",onClick:g[1]||(g[1]=(...v)=>G(h)&&G(h)(...v))},"下一页")):Zn("",!0)])],512))}}),s_={Layout:nn(Kp,null,{sidebar:nn(Ul),header:nn(Ql)}),enhanceApp({app:n}){n.component("HomePage",Nc),n.component("ArticleList",Qf)}};export{Sd as $,Ou as A,Vu as B,zc as C,Lu as D,Uc as E,Fu as F,th as G,Gu as H,Bu as I,ih as J,Xu as K,Ku as L,jh as M,nd as N,ed as O,pd as P,id as Q,s_ as R,hd as S,jd as T,gd as U,Ih as V,Nu as W,yd as X,vd as Y,qd as Z,$c as _,Ic as __pageData,Jc as a,Pd as a0,Dd as a1,Id as a2,Rd as a3,$d as a4,Hd as a5,Jd as a6,Wd as a7,Yd as a8,Zd as a9,um as aA,jm as aB,fm as aC,ym as aD,wm as aE,sj as aa,aj as ab,lj as ac,oj as ad,cj as ae,uj as af,mj as ag,fj as ah,bj as ai,wj as aj,Tj as ak,xj as al,Aj as am,Ej as an,Oj as ao,Mj as ap,Lj as aq,zj as ar,Wj as as,Bj as at,Zj as au,Kj as av,am as aw,em as ax,om as ay,im as az,Yc as b,Qc as c,sh as d,Mc as default,lh as e,hh as f,gh as g,yh as h,vh as i,qh as j,Sh as k,Ph as l,Dh as m,Rh as n,Hh as o,Fh as p,su as q,au as r,ru as s,cu as t,du as u,mu as v,ku as w,Tu as x,Cu as y,Au as z};
