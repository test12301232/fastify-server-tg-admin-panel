import{T as ce}from"./ToolsLayout-cfc975f8.js";import{v as ne,r as h,n as S,V as de,Y as se,M as me,q as N,m as fe,L as ve,Z as pe,d as T,aC as _e,o as E,a3 as ge,e as p,b as F,Q as q,g as L,k as _,h as O,_ as j,w as J,c as B,a as be,u as ye,f as ie,p as Se,i as he}from"./index-9de4a442.js";import{Q as xe}from"./QChip-f36d90d5.js";import{f as Fe,c as Ve,g as we,i as Ae,h as Ce,j as Ne,k as le,u as M}from"./use-key-composition-20c01320.js";import{u as ze,Q as $}from"./QInput-dc0f1e6f.js";import{h as Ie}from"./format-7389883c.js";import{Q as W}from"./QBtn-c600b51e.js";import{T as Y}from"./ToolsService-7c991fd9.js";import{Q as ee,V as I}from"./QForm-6730ad9c.js";import"./QLayout-7e677f3e.js";import"./scroll-481bd017.js";import"./uid-6a237b22.js";import"./focus-manager-e79c27be.js";function z(e,s,u,l){const i=[];return e.forEach(c=>{l(c)===!0?i.push(c):s.push({failedPropValidation:u,file:c})}),i}function Q(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),se(e)}const ke={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Pe=["rejected"];function Te({editable:e,dnd:s,getFileInput:u,addFilesToQueue:l}){const{props:i,emit:c,proxy:d}=ne(),v=h(null),V=S(()=>i.accept!==void 0?i.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),t=S(()=>parseInt(i.maxFiles,10)),m=S(()=>parseInt(i.maxTotalSize,10));function b(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&de(a);else{const w=u();w&&w!==a.target&&w.click(a)}}function D(a){e.value&&a&&l(null,a)}function K(a,w,k,P){let o=Array.from(w||a.target.files);const x=[],C=()=>{x.length>0&&c("rejected",x)};if(i.accept!==void 0&&V.value.indexOf("*/")===-1&&(o=z(o,x,"accept",r=>V.value.some(g=>r.type.toUpperCase().startsWith(g)||r.name.toUpperCase().endsWith(g))),o.length===0))return C();if(i.maxFileSize!==void 0){const r=parseInt(i.maxFileSize,10);if(o=z(o,x,"max-file-size",g=>g.size<=r),o.length===0)return C()}if(i.multiple!==!0&&o.length>0&&(o=[o[0]]),o.forEach(r=>{r.__key=r.webkitRelativePath+r.lastModified+r.name+r.size}),P===!0){const r=k.map(g=>g.__key);o=z(o,x,"duplicate",g=>r.includes(g.__key)===!1)}if(o.length===0)return C();if(i.maxTotalSize!==void 0){let r=P===!0?k.reduce((g,G)=>g+G.size,0):0;if(o=z(o,x,"max-total-size",g=>(r+=g.size,r<=m.value)),o.length===0)return C()}if(typeof i.filter=="function"){const r=i.filter(o);o=z(o,x,"filter",g=>r.includes(g))}if(i.maxFiles!==void 0){let r=P===!0?k.length:0;if(o=z(o,x,"max-files",()=>(r++,r<=t.value)),o.length===0)return C()}if(C(),o.length>0)return o}function X(a){Q(a),s.value!==!0&&(s.value=!0)}function f(a){se(a),(a.relatedTarget!==null||me.is.safari!==!0?a.relatedTarget!==v.value:document.elementsFromPoint(a.clientX,a.clientY).includes(v.value)===!1)===!0&&(s.value=!1)}function R(a){Q(a);const w=a.dataTransfer.files;w.length>0&&l(null,w),s.value=!1}function Z(a){if(s.value===!0)return N("div",{ref:v,class:`q-${a}__dnd absolute-full`,onDragenter:Q,onDragover:Q,onDragleave:f,onDrop:R})}return Object.assign(d,{pickFiles:b,addFiles:D}),{pickFiles:b,addFiles:D,onDragover:X,onDragleave:f,processFiles:K,getDndNode:Z,maxFilesNumber:t,maxTotalSizeNumber:m}}const Ee=fe({name:"QFile",inheritAttrs:!1,props:{...Fe,...Ve,...ke,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...we,...Pe],setup(e,{slots:s,emit:u,attrs:l}){const{proxy:i}=ne(),c=Ae(),d=h(null),v=h(!1),V=Ce(e),{pickFiles:t,onDragover:m,onDragleave:b,processFiles:D,getDndNode:K}=Te({editable:c.editable,dnd:v,getFileInput:te,addFilesToQueue:ae}),X=ze(e),f=S(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),R=S(()=>le(f.value)),Z=S(()=>f.value.map(n=>n.name).join(", ")),a=S(()=>Ie(f.value.reduce((n,y)=>n+y.size,0))),w=S(()=>({totalSize:a.value,filesNumber:f.value.length,maxFiles:e.maxFiles})),k=S(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:V.value,...l,id:c.targetUid.value,disabled:c.editable.value!==!0})),P=S(()=>"q-file q-field--auto-height"+(v.value===!0?" q-file--dnd":"")),o=S(()=>e.multiple===!0&&e.append===!0);function x(n){const y=f.value.slice();y.splice(n,1),r(y)}function C(n){const y=f.value.findIndex(n);y>-1&&x(y)}function r(n){u("update:modelValue",e.multiple===!0?n:n[0])}function g(n){n.keyCode===13&&pe(n)}function G(n){(n.keyCode===13||n.keyCode===32)&&t(n)}function te(){return d.value}function ae(n,y){const A=D(n,y,f.value,o.value),H=te();H!=null&&(H.value=""),A!==void 0&&((e.multiple===!0?e.modelValue&&A.every(re=>f.value.includes(re)):e.modelValue===A[0])||r(o.value===!0?f.value.concat(A):A))}function U(){return[N("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function oe(){if(s.file!==void 0)return f.value.length===0?U():f.value.map((y,A)=>s.file({index:A,file:y,ref:this}));if(s.selected!==void 0)return f.value.length===0?U():s.selected({files:f.value,ref:this});if(e.useChips===!0)return f.value.length===0?U():f.value.map((y,A)=>N(xe,{key:"file-"+A,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{x(A)}},()=>N("span",{class:"ellipsis",textContent:y.name})));const n=e.displayValue!==void 0?e.displayValue:Z.value;return n.length>0?[N("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:U()}function ue(){const n={ref:d,...k.value,...X.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:ae};return e.multiple===!0&&(n.multiple=!0),N("input",n)}return Object.assign(c,{fieldClass:P,emitValue:r,hasValue:R,inputRef:d,innerValue:f,floatingLabel:S(()=>R.value===!0||le(e.displayValue)),computedCounter:S(()=>{if(e.counterLabel!==void 0)return e.counterLabel(w.value);const n=e.maxFiles;return`${f.value.length}${n!==void 0?" / "+n:""} (${a.value})`}),getControlChild:()=>K("file"),getControl:()=>{const n={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(n,{onDragover:m,onDragleave:b,onKeydown:g,onKeyup:G}),N("div",n,[ue()].concat(oe()))}}),Object.assign(i,{removeAtIndex:x,removeFile:C,getNativeElement:()=>d.value}),ve(i,"nativeEl",()=>d.value),Ne(c)}}),je=T({__name:"AccountSetAvatar",setup(e){const s=h(null),u=h(null);_e(()=>{u.value&&(s.value=new FormData,s.value.append("avatar",u.value))});const{f:l,loading:i}=M({fn:()=>Y.setAvatar(s.value).then(()=>u.value=null),successMsg:"Изменено",alert:!0});return(c,d)=>(E(),ge("form",{class:"form",onSubmit:d[1]||(d[1]=O((...v)=>_(l)&&_(l)(...v),["prevent"]))},[p(Ee,{class:"form_input",modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=v=>u.value=v),label:"Аватар",outlined:"",accept:"image/jpeg, image/png","use-chips":""},{append:F(()=>[p(q,{name:"attach_file"})]),_:1},8,["modelValue"]),p(W,{class:"form_button",type:"submit",color:"primary",loading:_(i),disable:!u.value},{default:F(()=>[L("Изменить")]),_:1},8,["loading","disable"])],32))}});const De=j(je,[["__scopeId","data-v-552fa270"]]),Re=T({__name:"AccountSetName",props:{name:null},setup(e){const s=e,u=h(null),l=h(s.name),i=h(!1),{f:c,loading:d,error:v}=M({fn:()=>Y.setNewName(l.value).then(()=>{setTimeout(()=>{var t;v.value="",(t=u.value)==null||t.reset()})}),successMsg:"Изменено",alert:!0}),V=[t=>I.required(t)||"Это обязательное поле",t=>I.lengthInterval(3,30)(t)||"Имя должно содержть от 3 до 30 символов"];return J(l,async()=>{var t;i.value=await((t=u.value)==null?void 0:t.validate())&&!d.value||!1}),(t,m)=>(E(),B(ee,{class:"form",ref_key:"formRef",ref:u,onSubmit:O(_(c),["prevent"])},{default:F(()=>[p($,{class:"form_input",modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=b=>l.value=b),label:"Имя",outlined:"",rules:V,error:!!_(v),"error-message":_(v),"lazy-rules":""},null,8,["modelValue","error","error-message"]),p(W,{class:"form_button",type:"submit",color:"primary",disable:!i.value,loading:_(d)},{default:F(()=>[L("Изменить")]),_:1},8,["disable","loading"])]),_:1},8,["onSubmit"]))}});const Ue=j(Re,[["__scopeId","data-v-4d4b0dbc"]]),Qe=T({__name:"AccountSetEmail",props:{email:null},setup(e){const s=e,u=h(null),l=h(s.email),i=h(!1),{f:c,loading:d,error:v}=M({fn:()=>Y.setNewEmail(l.value).then(()=>{setTimeout(()=>{var t;l.value="",(t=u.value)==null||t.reset()},0)}),successMsg:"Изменено",alert:!0}),V=[t=>I.required(t)||"Это обязательное поле",t=>I.isEmail(t)||"Введите корректный е-мэйл"];return J(l,async()=>{var t;i.value=await((t=u.value)==null?void 0:t.validate())&&!d.value||!1}),(t,m)=>(E(),B(ee,{class:"form",ref_key:"formRef",ref:u,onSubmit:O(_(c),["prevent"])},{default:F(()=>[p($,{class:"form_input",modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=b=>l.value=b),label:"Е-мэйл",outlined:"",rules:V,error:!!_(v),"error-message":_(v),"lazy-rules":""},{append:F(()=>[p(q,{name:"email"})]),_:1},8,["modelValue","error","error-message"]),p(W,{class:"form_button",type:"submit",color:"primary",disable:!i.value,loading:_(d)},{default:F(()=>[L("Изменить")]),_:1},8,["disable","loading"])]),_:1},8,["onSubmit"]))}});const qe=j(Qe,[["__scopeId","data-v-281a0c3e"]]),$e=T({__name:"AccountSetPassword",setup(e){const s=h(null),u=h(!1),l=be({new:{value:"",visible:!1},old:{value:"",visible:!1}}),{f:i,loading:c,error:d}=M({fn:()=>Y.setNewPassword(l.new.value,l.old.value).then(()=>{l.new.value="",l.old.value="",setTimeout(()=>{var t,m;d.value="",(t=s.value)==null||t.reset(),(m=s.value)==null||m.resetValidation()},0)}),successMsg:"Изменено",alert:!0}),v=[t=>I.required(t)||"Это обязательное поле",t=>I.lengthInterval(6,20)(t)||"Пароль должен содержать от 6 до 20 символов"];J(()=>l.new.value,async()=>{var t;u.value=await((t=s.value)==null?void 0:t.validate())&&!c.value||!1});function V(t){l[t].visible=!l[t].visible}return(t,m)=>(E(),B(ee,{class:"form",ref_key:"formRef",ref:s,onSubmit:O(_(i),["prevent"])},{default:F(()=>[p($,{class:"form_input",modelValue:l.old.value,"onUpdate:modelValue":m[1]||(m[1]=b=>l.old.value=b),label:"Старый пароль",outlined:"",type:l.old.visible?"text":"password","lazy-rules":"",error:!!_(d),"error-message":_(d)},{append:F(()=>[p(q,{name:l.old.visible?"visibility":"visibility_off",onClick:m[0]||(m[0]=b=>V("old"))},null,8,["name"])]),_:1},8,["modelValue","type","error","error-message"]),p($,{class:"form_input",modelValue:l.new.value,"onUpdate:modelValue":m[3]||(m[3]=b=>l.new.value=b),label:"Новый пароль",outlined:"",type:l.new.visible?"text":"password",rules:v,"lazy-rules":""},{append:F(()=>[p(q,{name:l.new.visible?"visibility":"visibility_off",onClick:m[2]||(m[2]=b=>V("new"))},null,8,["name"])]),_:1},8,["modelValue","type"]),p(W,{class:"form_button",type:"submit",color:"primary",loading:_(c),disable:!u.value},{default:F(()=>[L("Изменить")]),_:1},8,["loading","disable"])]),_:1},8,["onSubmit"]))}});const Le=j($e,[["__scopeId","data-v-bdfe5918"]]),Oe=e=>(Se("data-v-12e8c5c5"),e=e(),he(),e),Be={class:"container"},Me=Oe(()=>ie("h5",{class:"title"},"Настройки аккаунта",-1)),We=T({__name:"Account",setup(e){const s=ye();return(u,l)=>(E(),B(ce,{title:"Аккаунт"},{default:F(()=>[ie("div",Be,[Me,p(De),p(Ue,{name:_(s).user.name},null,8,["name"]),p(qe,{email:_(s).user.email},null,8,["email"]),p(Le)])]),_:1}))}});const it=j(We,[["__scopeId","data-v-12e8c5c5"]]);export{it as default};
