var e=Object.defineProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(a,n,t)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{_ as o}from"./d-dialog.742c36de.js";import{f as s,o as c,a as l,F as p,q as r,d,j as u,k as m,x as _,z as f,e as y,aI as g,t as v,u as h,s as D,az as b,c as j,G as k,R as A,aE as E,aF as w,Q as z,aY as I,aZ as O,aP as L,g as P,l as T,a_ as V,J as x,a$ as C,b as R,E as $}from"./vendor.d7d62f29.js";import"./el-skeleton-item.d8d32b1b.js";import{_ as S}from"./d-empty.f47cf15a.js";import"./el-card.c716b62c.js";import{_ as M,g as U,b as q,a as F,o as G}from"./d-text-icon.995c3277.js";import{u as K,c as J}from"./main.0c516264.js";import{_ as H,a as N}from"./addToDesk.8882d32e.js";import{C as Q}from"./CustomAdd.548a22f5.js";import"./d-color.86fd4f36.js";import"./el-progress.efb3e4c2.js";import"./ossClient.9167d04d.js";const W={class:"app-icon-wrap"},Y={class:"app-icon-body d-flex"},Z=["onClick"],B={class:"d-cell"},X={class:"app-icon-title"},ee=["title"],ae=D("添加到桌面");var ne=M({props:{size:String},emits:["addToDesk"],setup(e,{emit:a}){const n=e,t=K(),i=e=>{let a=e.replace("app-","");return y((()=>function(e){switch(e){case"../../DialogApp/app/bookmarks/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.E}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/calendar/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.F}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/daysMatter/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.j}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/ip/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.G}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/music/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.H}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/notes/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.I}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/remai/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.J}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/robot/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.K}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/stock/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.L}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/todo/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.M}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/topsearch/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.N}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/wallpaper/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.O}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);case"../../DialogApp/app/weather/icon/icon.vue":return J((()=>import("./main.0c516264.js").then((function(e){return e.P}))),["assets/main.0c516264.js","assets/d-text-icon.995c3277.js","assets/vendor.d7d62f29.js"]);default:return new Promise((function(a,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../../DialogApp/app/${a}/icon/icon.vue`)))},o=s({appList:[]});let D=(new Date).getTime();return fetch(`./json/widgeIconList.json?t=${D}`).then((e=>e.json())).then((e=>{o.appList=e||[]})),(e,s)=>{const y=H,D=U;return c(),l("div",W,[(c(!0),l(p,null,r(h(o).appList,(o=>(c(),l("div",{class:"app-icon-item d-border-radius",key:o.component},[d("div",Y,[u(y,g({class:"mr15",size:n.size},e.$attrs),{default:m((()=>[d("span",{onClick:e=>function(e){t.setDialogApp(e.component)}(o),class:"d-pointer"},[(c(),_(f(i(o.component)),{size:n.size},null,8,["size"]))],8,Z)])),_:2},1040,["size"]),d("div",B,[d("h4",X,v(o.name),1),d("div",{class:"app-icon-desc f12",title:o.description},v(o.description),9,ee),u(D,{size:"mini",onClick:e=>function(e){e.type="component",e.size=n.size;let t=b(e);delete t.description,a("addToDesk",t)}(o)},{default:m((()=>[ae])),_:2},1032,["onClick"])])])])))),128))])}}},[["__scopeId","data-v-da65d6dc"]]);const te={class:"d-layout hfull app-add-icon",style:{color:"rgba(var(--alpha-color), 0.7)"}},ie={class:"d-layout-aside category-wrap"},oe={class:"category-body d-scrollbar-hide"},se=["onClick"],ce={class:"hfull p10 d-layout-content"},le=D(" 图标尺寸预览: "),pe={class:"d-inline"},re=["onClick"],de={class:"d-inline f12 ml20 mr10"},ue={class:"icon-wrap"},me={key:2,class:"icon-body d-scrollbar"},_e={class:"icon-item-top d-flex-y"},fe={class:"icon-title d-cell d-elip"},ye=["href"],ge=["title"],ve={class:"ar mt5"},he=D("添加"),De=D("点击加载更多..");var be=M({setup(e,{expose:f}){const y=q(),g=K(),D=s({categoryData:[{name:"自定义图标",type:"custom"},{name:"组件商店",type:"widget"},{name:"热门",type:""},{name:"应用",type:"app"},{name:"新闻",type:"news"},{name:"音乐视频",type:"music"},{name:"购物",type:"shopping"},{name:"社交/博客",type:"social"},{name:"娱乐",type:"entertainment"},{name:"数码科技",type:"tech"},{name:"阅读",type:"read"},{name:"图片",type:"photos"},{name:"体育/旅行",type:"sports"},{name:"生活",type:"life"},{name:"教育/招聘",type:"education"},{name:"金融",type:"finance"},{name:"其他",type:"others"}],loading:!1,iconSize:"small"});let b=j({get:()=>g.menuActiveId||"",set(e){g.menuActiveId=e}});const M=s({type:"widget",page:1,lang:"zh",name:"",source:"itab"});f({open:"open"});const J=k(H,500);function H(e){e?(D.loading=!0,M.page=1,D.iconData=[]):M.page++,M.name&&(M.type="search");const o=((e,o)=>{for(var s in o||(o={}))n.call(o,s)&&i(e,s,o[s]);if(a)for(var s of a(o))t.call(o,s)&&i(e,s,o[s]);return e})({},M);"search"==o.type&&(o.type=""),F.getWebsiteList(o).then((a=>{let n=a.data||[];D.iconData=e?n:[...D.iconData,...n]})).finally((()=>{D.loading=!1}))}function W(e){if(e._id&&F.websiteUse({_id:e._id}),e._id){let a=["id","url","type","name","src"].reduce(((a,n)=>(a[n]=e[n]||"",a)),{});a.type="icon",N(a)}else N(e)}return(e,a)=>{const n=A,t=E,i=w,s=z,f=$,g=U,j=I,k=S,q=O,F=o,K=L("focus");return c(),_(F,{height:"600px",title:""},{default:m((()=>[d("div",te,[d("div",ie,[d("h2",null,v(e.$t("addIcon")),1),d("ul",oe,[(c(!0),l(p,null,r(h(D).categoryData,(e=>(c(),l("p",{onClick:a=>function(e){M.type=e.type,M.page=1,M.name="",H(!0)}(e),class:P([{active:h(M).type==e.type},"category-item"]),key:e.type},v(e.name),11,se)))),128))])]),d("div",ce,[d("div",null,[d("div",{class:P([{active:"widget"==h(M).type},"d-inline widget-size d-elip"])},[le,d("div",pe,[(c(),l(p,null,r([{value:"mini",name:"小"},{value:"small",name:"中"},{value:"medium",name:"大"}],(e=>d("span",{key:e.value,class:P(["mr10 text-hover",{"text-active":h(D).iconSize==e.value}]),onClick:a=>h(D).iconSize=e.value},v(e.name),11,re))),64))])],2),T(u(n,{autofocus:"autofocus",modelValue:h(M).name,"onUpdate:modelValue":a[0]||(a[0]=e=>h(M).name=e),class:"icon-ipnut",style:{width:"200px"},size:"mini",onKeydown:h(J),placeholder:e.$t("setting_search"),"prefix-icon":h(V),clearable:""},null,8,["modelValue","onKeydown","placeholder","prefix-icon"]),[[K,!0]]),d("div",de,v(e.$t("targetGroup")),1),u(i,{modelValue:h(b),"onUpdate:modelValue":a[1]||(a[1]=e=>x(b)?b.value=e:b=e),style:{width:"100px"},size:"mini",placeholder:"group"},{default:m((()=>[(c(!0),l(p,null,r(h(y),(e=>(c(),_(t,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),d("div",ue,["custom"==h(M).type?(c(),_(Q,{key:0,onAddCustomIcon:W})):"widget"==h(M).type?(c(),_(ne,{key:1,onAddToDesk:W,size:h(D).iconSize},null,8,["size"])):(c(),l("section",me,[u(q,{loading:h(D).loading,rows:3,count:1,animated:""},{default:m((()=>[(c(!0),l(p,null,r(h(D).iconData,(e=>(c(),_(j,{class:"icon-item","body-style":{padding:"16px 10px"},shadow:"hover",key:e._id},{default:m((()=>[d("div",_e,[u(s,{size:36,class:"icon-img",src:h(G)(e.src,36)},null,8,["src"]),d("h5",fe,v(e.name),1),d("a",{class:"icon-url",target:"_blank",href:e.url,ref_for:!0,ref:"nofollow"},[u(f,{size:"16"},{default:m((()=>[u(h(C))])),_:1})],8,ye)]),d("div",{class:"icon-item-desc",title:e.description},v(e.description||"暂无描述"),9,ge),d("div",ve,[u(g,{onClick:a=>W(e),size:"mini"},{default:m((()=>[he])),_:2},1032,["onClick"])])])),_:2},1024)))),128)),"search"!=h(M).type?(c(),_(g,{key:0,size:"small",onClick:a[2]||(a[2]=e=>H(!1))},{default:m((()=>[De])),_:1})):R("",!0),h(D).loading||h(D).iconData.length?R("",!0):(c(),_(k,{key:1}))])),_:1},8,["loading"])]))])])])])),_:1})}}},[["__scopeId","data-v-2dc1f627"]]);export{be as default};
