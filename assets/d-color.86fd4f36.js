import{c as e,aG as a,o,a as t,t as l,b as s,F as n,q as r,g as c,n as d,u,x as i}from"./vendor.d7d62f29.js";import{S as p}from"./d-text-icon.995c3277.js";const m={class:"d-color d-flex-between"},f={key:0,class:"mr20 d-sub"},y=["onClick"],b={props:{modelValue:{type:String,required:!0},colors:{type:Array,default:[]},custom:{type:Boolean,default:!0},async:{type:Boolean,default:!1},title:String},emits:["update:modelValue","change"],setup(b,{emit:g}){const V=b,k=["#1890ff","#2ecc71","#33c5c5","#9b59b6","#f1c40f","#e67e22","#e74c3c","transparent"],C=e((()=>V.colors.length?V.colors:k));function x(e){g("update:modelValue",e),g("change",e),V.async&&p("baseConfig")}return(e,p)=>{const g=a;return o(),t("div",m,[b.title?(o(),t("p",f,l(b.title),1)):s("",!0),(o(!0),t(n,null,r(u(C),(e=>(o(),t("span",{class:c(["d-color-item",{colorTransparent:"transparent"===e}]),onClick:a=>x(e),key:e,style:d([{backgroundColor:e},{borderColor:V.modelValue==e?"transparent"==e?"#dad6d6":e:"transparent"}])},null,14,y)))),128)),V.custom?(o(),i(g,{key:1,modelValue:b.modelValue,"onUpdate:modelValue":x,size:"mini"},null,8,["modelValue"])):s("",!0)])}}};export{b as _};
