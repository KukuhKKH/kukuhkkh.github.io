(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{289:function(e,t,a){Promise.resolve().then(a.bind(a,1079)),Promise.resolve().then(a.bind(a,9770)),Promise.resolve().then(a.bind(a,9133)),Promise.resolve().then(a.bind(a,2880)),Promise.resolve().then(a.bind(a,6064)),Promise.resolve().then(a.t.bind(a,7616,23)),Promise.resolve().then(a.t.bind(a,2162,23))},9770:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(4503);a(5137);var i=a(941),o=a(481),n=a(3133),s=a.n(n),l=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=function e(t){var a,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(r=e(t[a]))&&(i&&(i+=" "),i+=r);else for(a in t)t[a]&&(i&&(i+=" "),i+=a)}return i}(e))&&(r&&(r+=" "),r+=t);return r},c=a(2880);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:a}=(0,c.useActiveSectionContext)();return(0,r.jsxs)("header",{className:"z-[999] relative",children:[(0,r.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,r.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,r.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:o.Ok.map(o=>(0,r.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,r.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===o.name}),href:o.hash,onClick:()=>{t(o.name),a(Date.now())},children:[o.name,o.name===e&&(0,r.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},o.hash))})})]})}},9133:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var r=a(4503),i=a(6064);a(5137);var o=a(4839);function n(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,r.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,r.jsx)(o.eSY,{}):(0,r.jsx)(o.s1t,{})})}},2880:function(e,t,a){"use strict";a.r(t),a.d(t,{ActiveSectionContext:function(){return o},default:function(){return n},useActiveSectionContext:function(){return s}});var r=a(4503),i=a(5137);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[a,n]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,r.jsx)(o.Provider,{value:{activeSection:a,setActiveSection:n,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},6064:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n},useTheme:function(){return s}});var r=a(4503),i=a(5137);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[a,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(n(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(n("dark"),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(o.Provider,{value:{theme:a,toggleTheme:()=>{"light"===a?(n("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(n("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},481:function(e,t,a){"use strict";a.d(t,{$c:function(){return s},Ok:function(){return n},nD:function(){return l},ZU:function(){return c}});var r=a(5137),i=a(807),o=a(6627);let n=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],s=[{title:"Graduated Informatic Engineering",location:"UIN Malang",description:"I interned at the UIN Malang rectorate for 1 year",icon:r.createElement(o.qWM),date:""},{title:"Full-Stack Developer",location:"Sharfin.id",description:"I worked as a full-stack developer for 1 years. I also upskilled to learn vue.js.",icon:r.createElement(i.l80),date:"2019 - 2021"},{title:"Full-Stack Developer",location:"GubukIT, Malang",description:"I worked as a full-stack developer for 1 year. I also upskilled to learn nuxt.js.",icon:r.createElement(i.VI),date:"2021 - 2023"},{title:"Backend Developer",location:"PT. Jalin Mayantara Indonesia, Malang",description:"I'm now a backend developer. My stack includes PHP, Laravel, MariaDB, Gitlab CI/CD, Docker and Elasticsearch",icon:r.createElement(i.lMi),date:"2023 - Present"}],l=[{title:"Management Notification",description:"This is a project for managing notifications. I was the backend developer.",tags:["PHP","Laravel","Firebase","MySQL"],imageUrl:{src:"/_next/static/media/firebase.59206a96.png",height:905,width:1892,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEUcHBwlJCReXVw6OTgvLy9OTU1OTk4ChFQqAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIElEQVR4nGNgZQIDNgYGFmZmZmZGBgYwiwVEM4IAAwMABVEAPGYrNDIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},{title:"Diklat KSPS",description:"This is a project for the diklat KSPS (Kepala Sekolah dan Pengawas Sekolah). I was the backend developer",tags:["Laravel","Java","Vue","PrimeVue","Tailwind","MariaDB"],imageUrl:{src:"/_next/static/media/ksps.de413df2.png",height:5618,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAHlBMVEXw8fL9/f7Z293EyMzBwcHl5uadl47m4t6WmZz9+vfn2Sx7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXHyREAMAgDscXmCP03nEE/IQsR5DNoiF24d1KuDwSgAFJFddTqAAAAAElFTkSuQmCC",blurWidth:3,blurHeight:8}},{title:"PPDB Sekolah",description:"This is a project for the PPDB (Penerimaan Peserta Didik Baru). I was the backend developer.. It has features like registration, login, and payment.",tags:["Laravel","Vue","PrimeVue","Tailwind","MySQL"],imageUrl:{src:"/_next/static/media/ppdb.35513911.png",height:4176,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAM1BMVEX9/f16faljZpxoaGj29vbk5ezs5+rSw8r27vD07fBGRkfc2d+klJn73eLomKbAwNS3t8rmm0yCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAjAsIIMxfn/tSb0kQssBrsbnAyQ+wT1VOZ0p7WqDxE1ANfLb6Q0AAAAAElFTkSuQmCC",blurWidth:4,blurHeight:8}}],c=["HTML","CSS","PHP","Laravel","JavaScript","TypeScript","Vue","Nuxt.js","Node.js","Docker","Linux","Git","Gitlab CI/CD","GraphQL","Apollo","MySQL","MariaDB","PostgreSQL","MongoDB","Framer Motion"]},7616:function(){},2162:function(e){e.exports={style:{fontFamily:"'__Inter_cc7fef', '__Inter_Fallback_cc7fef'",fontStyle:"normal"},className:"__className_cc7fef"}},1079:function(e,t,a){"use strict";let r,i;a.r(t),a.d(t,{CheckmarkIcon:function(){return z},ErrorIcon:function(){return F},LoaderIcon:function(){return Q},ToastBar:function(){return ee},ToastIcon:function(){return K},Toaster:function(){return ei},default:function(){return eo},resolveValue:function(){return E},toast:function(){return _},useToaster:function(){return $},useToasterStore:function(){return B}});var o,n=a(5137);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",r="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+n+";":r+="f"==o[1]?m(n,o):o+"{"+m(n,"k"==o[1]?"":t)+"}":"object"==typeof n?r+=m(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(o,n):o+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,i)=>{var o;let n=f(e),s=p[n]||(p[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!p[s]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,a?"":"."+s)}let l=a&&p.g?p.g:null;return a&&(p.g=p[s]),o=p[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),s},g=(e,t,a)=>e.reduce((e,r,i)=>{let o=t[i];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function A(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}A.bind({g:1});let b,y,v,x=A.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;a.p=Object.assign({theme:y&&y()},s),a.o=/ *go\d+/.test(l),s.className=A.apply(a,r)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),b(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,I=(r=0,()=>(++r).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},S=new Map,M=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),T({type:4,toastId:e})},1e3);S.set(e,t)},P=e=>{let t=S.get(e);t&&clearTimeout(t)},j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?j(e,{type:1,toast:a}):j(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?M(r):e.toasts.forEach(e=>{M(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},D=[],N={toasts:[],pausedAt:void 0},T=e=>{N=j(N,e),D.forEach(e=>{e(N)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B=(e={})=>{let[t,a]=(0,n.useState)(N);(0,n.useEffect)(()=>(D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},O=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||I()}),V=e=>(t,a)=>{let r=O(t,e,a);return T({type:2,toast:r}),r.id},_=(e,t)=>V("blank")(e,t);_.error=V("error"),_.success=V("success"),_.loading=V("loading"),_.custom=V("custom"),_.dismiss=e=>{T({type:3,toastId:e})},_.remove=e=>T({type:4,toastId:e}),_.promise=(e,t,a)=>{let r=_.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(_.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{_.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{T({type:1,toast:{id:e,height:t}})},U=()=>{T({type:5,time:Date.now()})},$=e=>{let{toasts:t,pausedAt:a}=B(e);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&_.dismiss(t.id);return}return setTimeout(()=>_.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,n.useCallback)(()=>{a&&T({type:6,time:Date.now()})},[a]),i=(0,n.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:o}=a||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:U,endPause:r,calculateOffset:i}}},F=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Q=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,z=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=w("div")`
  position: absolute;
`,R=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(X,null,t):t:"blank"===a?null:n.createElement(R,null,n.createElement(Q,{...r}),"loading"!==a&&n.createElement(G,null,"error"===a?n.createElement(F,{...r}):n.createElement(z,{...r})))},Z=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,W=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Y=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(a),W(a)];return{animation:t?`${x(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?q(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(K,{toast:e}),s=n.createElement(J,{...e.ariaProps},E(e.message,e));return n.createElement(Y,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,m.p=void 0,b=o,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let o=n.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:o,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=$(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,s=ea(o,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return n.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:s},"custom"===a.type?E(a.message,a):i?i(a):n.createElement(ee,{toast:a,position:o}))}))},eo=_}},function(e){e.O(0,[504,943,465,932,929,215,744],function(){return e(e.s=289)}),_N_E=e.O()}]);