import{_ as e,l as a,s as l,S as o,j as d,g as s}from"./d-text-icon.995c3277.js";import{f as t,D as u,aB as n,aC as i,o as c,a as r,j as m,k as p,u as f,d as b,F as v,q as g,x,s as C,t as V,h as _,aD as h,R as y,aE as k,aF as w,ao as S}from"./vendor.d7d62f29.js";import{_ as T}from"./d-color.86fd4f36.js";const j={class:"popup-body p20"},A={class:"icon-preview"},I={class:"icon-preview-body"};var U=e({setup(e){const S=t({navConfig:a.get("navConfig")||[],menuActiveId:"1",addSuccess:!1}),U=t({type:"",id:"",url:"",name:"",src:"",type:"text",iconText:"A",backgroundColor:l()});return u((()=>{chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){console.log(e),U.url=e[0].url,U.name=e[0].title||"",U.iconText=U.name.substring(0,3)}))})),(e,l)=>{const t=y,u=n,q=d,D=k,F=w,z=T,B=s,E=i;return c(),r("div",j,[m(E,{onSubmit:l[6]||(l[6]=_((()=>{}),["prevent"])),model:f(U),size:"small","label-width":"80px","label-position":"left"},{default:p((()=>[m(u,{label:"地址",required:""},{default:p((()=>[m(t,{autofocus:"",modelValue:f(U).url,"onUpdate:modelValue":l[0]||(l[0]=e=>f(U).url=e),placeholder:"https://"},null,8,["modelValue"])])),_:1}),m(u,{label:"名称",required:""},{default:p((()=>[m(t,{modelValue:f(U).name,"onUpdate:modelValue":l[1]||(l[1]=e=>f(U).name=e),maxlength:"30",placeholder:"网站名称"},null,8,["modelValue"])])),_:1}),m(u,{label:"",style:{"margin-bottom":"0"}},{default:p((()=>[b("div",A,[b("div",I,[m(q,{bgColor:f(U).backgroundColor,text:f(U).iconText},null,8,["bgColor","text"])])])])),_:1}),m(u,{label:"分组"},{default:p((()=>[m(F,{"popper-class":"popup-group-select",modelValue:f(S).menuActiveId,"onUpdate:modelValue":l[2]||(l[2]=e=>f(S).menuActiveId=e)},{default:p((()=>[(c(!0),r(v,null,g(f(S).navConfig,(e=>(c(),x(D,{key:e.id,value:e.id,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(u,{label:"图标文字"},{default:p((()=>[m(t,{placeholder:"请输入图标文字",maxlength:"6",modelValue:f(U).iconText,"onUpdate:modelValue":l[3]||(l[3]=e=>f(U).iconText=e)},null,8,["modelValue"])])),_:1}),m(u,{label:"图标背景"},{default:p((()=>[m(z,{modelValue:f(U).backgroundColor,"onUpdate:modelValue":l[4]||(l[4]=e=>f(U).backgroundColor=e)},null,8,["modelValue"])])),_:1}),m(u,{label:""},{default:p((()=>[m(B,{disabled:f(S).addSuccess,type:"primary",size:"small",style:{width:"120px"},onClick:l[5]||(l[5]=e=>(S.navConfig.find((e=>S.menuActiveId===e.id)).children.push(h.exports.cloneDeep(U)),a.set("navConfig",S.navConfig),o("navConfig",800),S.addSuccess=!0,void setTimeout((()=>{window.close()}),1e3)))},{default:p((()=>[C(V(f(S).addSuccess?"添加成功":"确 定"),1)])),_:1},8,["disabled"])])),_:1})])),_:1},8,["model"])])}}},[["__scopeId","data-v-3a7dacf7"]]);S({setup:e=>(e,a)=>(c(),x(U))}).mount("#popup");