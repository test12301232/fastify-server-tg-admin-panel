import{Q as a}from"./QInput-6860a998.js";import{Q as u}from"./QBtn-0e6d397d.js";import{d as c,a as p,n as m,a3 as v,e as t,b as f,k as r,h as _,o as g,g as I,p as V,i as b,f as S,_ as y}from"./index-06f4354f.js";import{u as U}from"./use-key-composition-a98e307f.js";import{T as h}from"./ToolsService-2c85bfb7.js";import"./focus-manager-e79c27be.js";import"./use-dark-70e23e67.js";import"./uid-6a237b22.js";const x=l=>(V("data-v-8c039aab"),l=l(),b(),l),T=x(()=>S("h5",{class:"title"},"Настроить интеграцию с Google",-1)),G=c({__name:"ToolsGoogle",setup(l){const e=p({serviceUser:"",servicePrivateKey:"",sheetId:"",folderId:""}),n=m(()=>!e.serviceUser&&!e.servicePrivateKey&&!e.sheetId&&!e.folderId||i.value),{f:d,loading:i}=U({fn:()=>h.setGoogleServiceAccountSettings(e).then(()=>{e.serviceUser="",e.servicePrivateKey="",e.sheetId="",e.folderId=""}),successMsg:"Сохранено",alert:!0});return(K,o)=>(g(),v("form",{class:"form",onSubmit:o[4]||(o[4]=_((...s)=>r(d)&&r(d)(...s),["prevent"]))},[T,t(a,{class:"input",modelValue:e.serviceUser,"onUpdate:modelValue":o[0]||(o[0]=s=>e.serviceUser=s),outlined:"",label:"Service account user"},null,8,["modelValue"]),t(a,{class:"input",modelValue:e.servicePrivateKey,"onUpdate:modelValue":o[1]||(o[1]=s=>e.servicePrivateKey=s),outlined:"",label:"Service account private key"},null,8,["modelValue"]),t(a,{class:"input",modelValue:e.sheetId,"onUpdate:modelValue":o[2]||(o[2]=s=>e.sheetId=s),outlined:"",label:"Sheet id"},null,8,["modelValue"]),t(a,{class:"input",modelValue:e.folderId,"onUpdate:modelValue":o[3]||(o[3]=s=>e.folderId=s),outlined:"",label:"Folder id"},null,8,["modelValue"]),t(u,{type:"submit",loading:r(i),disable:r(n),color:"primary"},{default:f(()=>[I("Сохранить")]),_:1},8,["loading","disable"])],32))}});const M=y(G,[["__scopeId","data-v-8c039aab"]]);export{M as default};
