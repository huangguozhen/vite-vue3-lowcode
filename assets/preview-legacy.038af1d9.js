!function(){var e=document.createElement("style");e.innerHTML="body::-webkit-scrollbar{width:0}\n",document.head.appendChild(e),System.register(["./preload-helper-legacy.766d752c.js"],(function(e,t){"use strict";var o,a,n,r,c,l,s,i,p,u,d,f,g,h,m,v;return{setters:[function(e){o=e.d,a=e.r,n=e.al,r=e.aj,c=e.w,l=e.m,s=e.s,i=e.v,p=e.e,u=e.an,d=e.W,f=e.a3,g=e.a4,h=e.a5,m=e.X,v=e.Y}],execute:function(){var A=o({name:"App",setup(){const e=a(),t=n(),o=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY)),l=Object.keys(o.pages).filter((e=>!o.pages[e].config.keepAlive));return console.log("notNeedcachePages:",l),c((()=>t.path),(t=>{if(l.includes(t)){const o=e.value?.$?.__v_cache;console.log("keep-alive cache",t,o),o.delete(t)}})),{keepAliveRef:e}}});A.render=function(e,t,o,a,n,r){const c=l("router-view");return p(),s(c,null,{default:i((({Component:e,route:t})=>[(p(),s(u,{ref:"keepAliveRef"},[(p(),s(d(e),{key:t.path}))],1536))])),_:1})};const y=[{path:"/:pathMatch(.*)*",component:()=>h((()=>t.import("./preview-legacy.4e5a9570.js")),void 0)}],_=e("r",f({history:g(),routes:y})),b=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY));_.beforeEach((e=>(document.title=b?.pages?.[e.path]?.title??document.title,!0)));const k=m(A);v(k),k.config.globalProperties.$$refs={},window.$$refs=k.config.globalProperties.$$refs,k.use(_).mount("#app")}}}))}();
