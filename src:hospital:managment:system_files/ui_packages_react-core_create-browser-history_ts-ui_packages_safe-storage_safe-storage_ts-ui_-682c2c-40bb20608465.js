"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c"],{21605:(e,t,r)=>{r.d(t,{y:()=>i});var n=r(74848),a=r(96540),o=r(31481);function i({children:e,appName:t,category:r,metadata:i}){let l=(0,a.useMemo)(()=>({appName:t,category:r,metadata:i}),[t,r,i]);return(0,n.jsx)(o.I.Provider,{value:l,children:e})}try{i.displayName||(i.displayName="AnalyticsProvider")}catch{}},31481:(e,t,r)=>{r.d(t,{I:()=>n});let n=(0,r(96540).createContext)(null)},27756:(e,t,r)=>{let n;function a(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function o(){return n?.locale??"en-US"}r.d(t,{JK:()=>o,_$:()=>a}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},5728:(e,t,r)=>{r.d(t,{G:()=>a,K:()=>o});var n=r(97156);let a=n.XC?.readyState==="interactive"||n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),o=n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.cg?.addEventListener("load",e)})},97564:(e,t,r)=>{r.d(t,{G7:()=>s,XY:()=>c,fQ:()=>l});var n=r(5225),a=r(27756);function o(){return new Set((0,a._$)().featureFlags.map(e=>e.toLowerCase()))}let i=r(97156).X3?o:(0,n.A)(o);function l(){return Array.from(i())}function s(e){return i().has(e.toLowerCase())}let c={isFeatureEnabled:s}},67726:(e,t,r)=>{r.d(t,{l:()=>n});let n=()=>void 0},92812:(e,t,r)=>{r.d(t,{B:()=>n});let n=(0,r(96540).createContext)(null)},51261:(e,t,r)=>{r.d(t,{z:()=>a});var n=r(45588);function a(e={}){let t;let r=(0,n.zR)({...e,v5Compat:!0}),a=[],o=!1;function i(e){if(a.length>0)for(let t of a)t({retry(){e()}});else e()}return r.listen(e=>{if(o){o=!1;return}if(e.action===n.rc.Pop&&a.length&&null!==e.delta&&a.length>0){let t=e.delta;for(let e of(o=!0,r.go(-1*t),a))e({retry(){r.go(t)}})}else t?.(e)}),{get action(){return r.action},get location(){return r.location},createHref:e=>r.createHref(e),createURL:e=>r.createURL(e),encodeLocation:e=>r.encodeLocation(e),push(e,t){i(()=>r.push(e,t))},replace(e,t){i(()=>r.replace(e,t))},go(e){i(()=>r.go(e))},listen(e){if(t)throw Error("A history only accepts one active listener");return t=e,()=>{t=void 0}},block:e=>(a.push(e),()=>{a=a.filter(t=>t!==e)})}}},79461:(e,t,r)=>{r.d(t,{z:()=>n});let n={"Workers not ready":"Alloy is warming its workers. This is expected during deploys and should resolve shortly."}},76457:(e,t,r)=>{let n;r.d(t,{A:()=>l});var a=r(96540);let o=globalThis.document;function i(e){return{colorMode:function(e){switch(e){case"light":return"day";case"dark":return"night";default:return"auto"}}(e.colorMode),dayScheme:e.lightTheme,nightScheme:e.darkTheme}}let l=o?function(){let{documentElement:e}=o,[t,r]=(0,a.useState)(()=>i(e.dataset));return(0,a.useEffect)(()=>{let t=new MutationObserver(()=>r(i(e.dataset)));return t.observe(e,{attributes:!0,attributeFilter:["data-color-mode","data-light-theme","data-dark-theme"]}),()=>t.disconnect()},[e]),t}:function(){return i(n||{})}},14740:(e,t,r)=>{r.d(t,{k:()=>i,v:()=>l});var n=r(5225),a=r(97156);let o=(0,n.A)(function(){return a.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,n.A)(function(){return"enterprise"===o()}),l="webpack"},74572:(e,t,r)=>{r.d(t,{A:()=>i,D:()=>l});var n=r(97156),a=r(51528);let o=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},r=n.cg,i=e=>e,l=e=>e){let s;try{if(!r)throw Error();s=r[e]||new o}catch{s=new o}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,a.i)({incrementKey:e})}function d(e){try{if(s.removeItem(e),t.ttl){let t=`${e}:expiry`;s.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let r=s.getItem(e);if(!r)return null;let n=`${e}:expiry`,a=Number(s.getItem(n));if(a&&t>a)return d(e),d(n),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(r)}catch(e){return null}},setItem:function(e,r,n=new Date().getTime()){try{if(s.setItem(e,l(r)),t.ttl){let r=`${e}:expiry`,a=n+t.ttl;s.setItem(r,a.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:s.clear,key:s.key,get length(){return s.length}}}function l(e){return i(e,{throwQuotaErrorsOnSet:!1},n.cg,JSON.parse,JSON.stringify)}},97156:(e,t,r)=>{r.d(t,{KJ:()=>n.KJ,Kn:()=>a.Kn,X3:()=>n.X3,XC:()=>a.XC,cg:()=>a.cg,fV:()=>a.fV,g5:()=>n.g5});var n=r(15572),a=r(86733)},86733:(e,t,r)=>{r.d(t,{Kn:()=>o,XC:()=>n,cg:()=>a,fV:()=>i});let n="undefined"==typeof document?void 0:document,a="undefined"==typeof window?void 0:window,o="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:"",href:""}:location},15572:(e,t,r)=>{r.d(t,{KJ:()=>o,X3:()=>a,g5:()=>i});var n=r(86733);let a=void 0===n.XC,o=!a;function i(){return!!a||!!n.XC.querySelector('react-app[data-ssr="true"]')}},51528:(e,t,r)=>{r.d(t,{X:()=>m,i:()=>c});var n=r(97156),a=r(5728),o=r(14740),i=r(97564),l=r(70170);let s=[];function c(e,t=!1,r=.5){if(!0!==(0,i.G7)("BROWSER_STATS_DISABLED")){if(r<0||r>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!n.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=o.v,Math.random()<r&&s.push(e),t?f():d()}}let u=null,d=(0,l.n)(async function(){await a.K,null==u&&(u=window.requestIdleCallback(f))},5e3);function f(){if(u=null,!s.length)return;let e=n.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],r=e.map(e=>JSON.stringify(e));for(;r.length>0;)t.push(function(e){let t=e.shift(),r=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let a=e.shift();r.push(a),n+=t}else break}return r}(r));return t}(s))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);s=[]}}function m(){return!!n.XC?.head?.querySelector('meta[name="user-staff"]')?.content}n.XC?.addEventListener("pagehide",f),n.XC?.addEventListener("visibilitychange",f)},59840:(e,t,r)=>{r.d(t,{m:()=>o});var n=r(96540),a=r(97156);function o(e,t){a.KJ&&(0,n.useLayoutEffect)(e,t)}},73272:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(59840),a=r(96540);function o(){let e=(0,a.useRef)(!1),t=(0,a.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},83784:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(73272),a=r(96540);let o=function(e){let t=(0,n.A)(),[r,o]=(0,a.useState)(e);return[r,(0,a.useCallback)(e=>{t()&&o(e)},[t])]}},49107:(e,t,r)=>{r.d(t,{Q:()=>i});var n=r(74848),a=r(96540),o=r(92812);function i({routes:e,history:t,children:r}){let i=(0,a.useMemo)(()=>({routes:e,history:t}),[e,t]);return(0,n.jsx)(o.B.Provider,{value:i,children:r})}try{i.displayName||(i.displayName="AppContextProvider")}catch{}},36165:(e,t,r)=>{r.d(t,{U:()=>h});var n=r(74848),a=r(47831),o=r(48378),i=r(76457),l=r(96540),s=r(15033),c=r(97564);function u({children:e}){let t=(0,c.fQ)(),r=l.useMemo(()=>{let e={};for(let r of t)r.startsWith("primer_react_")&&(e[r]=!0);return e},[]);return(0,n.jsx)(s.g,{flags:r,children:e})}try{u.displayName||(u.displayName="PrimerFeatureFlags")}catch{}var d=r(54156),f=r(21605);let m={};function h({appName:e,children:t,wasServerRendered:r}){let{colorMode:l,dayScheme:s,nightScheme:c}=(0,i.A)();return(0,n.jsx)(a.D3,{wasServerRendered:r,children:(0,n.jsx)(f.y,{appName:e,category:"",metadata:m,children:(0,n.jsx)(u,{children:(0,n.jsx)(o.NP,{colorMode:l,dayScheme:s,nightScheme:c,preventSSRMismatch:!0,children:(0,n.jsx)(d.k6,{children:t})})})})})}try{h.displayName||(h.displayName="BaseProviders")}catch{}},17857:(e,t,r)=>{r.d(t,{h:()=>y});var n=r(74848),a=r(96540),o=r(54156),i=r(59857),l=r(65556),s=r(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},u={info:(0,n.jsx)(i.InfoIcon,{}),success:(0,n.jsx)(i.CheckIcon,{}),error:(0,n.jsx)(i.StopIcon,{})},d=({message:e,timeToLive:t,icon:r,type:o="info",role:i="log"})=>{let[d,f]=a.useState(!0),{safeSetTimeout:m}=(0,l.A)();return(0,a.useEffect)(()=>{t&&m(()=>f(!1),t-300)},[m,t]),(0,n.jsx)(s.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${c[o]} ${d?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${o}`,role:i,children:[(0,n.jsx)("span",{className:"Toast-icon",children:r||u[o]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{d.displayName||(d.displayName="Toast")}catch{}function f(){let{toasts:e,persistedToast:t}=(0,a.useContext)(o.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(d,{message:e.message,icon:e.icon,timeToLive:o.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(d,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{f.displayName||(f.displayName="Toasts")}catch{}var m=r(79461);function h({ssrError:e}){let{addToast:t}=(0,o.Y6)(),r=m.z[e.textContent||""];return(0,a.useEffect)(()=>{r||t({type:"error",message:"SSR failed, see console for error details (Staff Only)"})},[]),null}try{h.displayName||(h.displayName="SSRErrorToast")}catch{}function y({ssrError:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),e&&(0,n.jsx)(h,{ssrError:e})]})}try{y.displayName||(y.displayName="CommonElements")}catch{}},47831:(e,t,r)=>{r.d(t,{D3:()=>c,O8:()=>n,xd:()=>s});var n,a=r(74848),o=r(96540),i=r(97156),l=r(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(n||(n={}));let s=(0,o.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[r,n]=(0,o.useState)(()=>i.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,l.m)(()=>{"ClientRender"!==r&&n("ClientRender")},[r]),(0,a.jsx)(s.Provider,{value:r,children:t})}try{s.displayName||(s.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,r)=>{r.d(t,{Qn:()=>s,T8:()=>u,Y6:()=>f,k6:()=>d});var n=r(74848),a=r(65556),o=r(96540),i=r(67726),l=r(83784);let s=5e3,c=(0,o.createContext)({addToast:i.l,addPersistedToast:i.l,clearPersistedToast:i.l}),u=(0,o.createContext)({toasts:[],persistedToast:null});function d({children:e}){let[t,r]=(0,l.A)([]),[i,d]=(0,o.useState)(null),{safeSetTimeout:f}=(0,a.A)(),m=(0,o.useCallback)(function(e){r([...t,e]),f(()=>r(t.slice(1)),s)},[t,f,r]),h=(0,o.useCallback)(function(e){d(e)},[d]),y=(0,o.useCallback)(function(){d(null)},[d]),p=(0,o.useMemo)(()=>({addToast:m,addPersistedToast:h,clearPersistedToast:y}),[h,m,y]),g=(0,o.useMemo)(()=>({toasts:t,persistedToast:i}),[t,i]);return(0,n.jsx)(c.Provider,{value:p,children:(0,n.jsx)(u.Provider,{value:g,children:e})})}function f(){return(0,o.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{u.displayName||(u.displayName="InternalToastsContext")}catch{}try{d.displayName||(d.displayName="ToastContextProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c-22f0cf24ff3d.js.map