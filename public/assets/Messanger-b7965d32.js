import{Q as xe}from"./QDialog-bb3d94e8.js";import{Q as G,R as F,p as Ye}from"./QBtn-0e6d397d.js";import{Q as Xe,c as We,b as Je,a as Ke,d as Ze,e as be,f as et}from"./QLayout-579f38f1.js";import{c as tt,Q as se,b as E,a as at}from"./QCardSection-99246931.js";import{r as y,d as H,o as m,c as k,b as t,g as x,a2 as w,a3 as q,k as c,a4 as ce,a1 as V,a0 as D,_ as R,u as K,e,f as Q,E as L,Q as U,a5 as lt,aG as Z,n as z,aH as A,ax as Me,w as W,aa as N,a9 as J,m as we,q as M,ac as nt,ae as rt,af as st,D as ot,X as ut,v as it,B as Ie,aI as qe,p as de,i as ve,l as Qe,s as ct}from"./index-06f4354f.js";import{Q as T,a as C}from"./selection-9c6333d4.js";import{Q as Y}from"./QList-86951a94.js";import{Q as ee}from"./QInput-6860a998.js";import{b as P,Q as Te}from"./QItemLabel-c04f9aef.js";import{u as re}from"./use-key-composition-a98e307f.js";import{u as dt,a as vt}from"./use-dark-70e23e67.js";import{T as ye}from"./TouchPan-ce722b71.js";import{b as ne}from"./format-7389883c.js";import{e as oe,s as Ce}from"./scroll-5c350fea.js";import{C as ie}from"./ClosePopup-813dc9c9.js";import{Q as mt}from"./QLinearProgress-4e78b85f.js";import{s as _t}from"./MessangerVoiceMessage.vue_used_vue_type_style_index_0_lang.module-d9c496ba.js";import{Q as Ve}from"./QCardActions-d56640d6.js";import"./use-prevent-scroll-ecde5974.js";import"./use-timeout-a2c402f4.js";import"./use-tick-e34f402d.js";import"./focus-manager-e79c27be.js";import"./uid-6a237b22.js";class me{static convertDay(n){return n<10?`0${n}`:n}static convertMonth(n){return n+1<10?`0${n+1}`:n+1}static convertYear(n){return n}static convertHours(n){return n<10?`0${n}`:n}static convertMinutes(n){return n<10?`0${n}`:n}static timeStruct(n){return{year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hours:n.getHours(),minutes:n.getMinutes()}}static showFilteredDate(n){const r=new Date,s=this.timeStruct(r),_=this.timeStruct(n);return s.year===_.year&&s.month===_.month&&s.day===_.day?`${this.convertHours(_.hours)}:${this.convertMinutes(_.minutes)}`:`${this.convertDay(_.day)}.${this.convertMonth(_.month)}.${this.convertYear(_.year)}`}}function ft(){const a=y(null),n=y(null),r=y(null),s=y(!1);async function _(){a.value=await navigator.mediaDevices.getUserMedia({audio:!0}),n.value=new MediaRecorder(a.value,{audioBitsPerSecond:128e3}),n.value.onstart=()=>s.value=!s.value,n.value.onstop=()=>s.value=!s.value,n.value.ondataavailable=u=>{r.value=new File([u.data],"audio.ogg")},n.value.start()}function h(){var u,l,p;(u=n.value)==null||u.stop(),r.value=null,(p=(l=a.value)==null?void 0:l.getTracks().at(0))==null||p.stop()}return{mediaRecorder:n,isRecording:s,voiceMessage:r,startRecording:_,stopRecording:h}}const ht=["src"],pt=H({__name:"UserAvatar",props:{avatar:null,name:null,size:{default:"45px"},color:{default:"secondary"}},setup(a){return(n,r)=>(m(),k(tt,{class:D(n.$style.avatar),size:a.size,color:a.color},{default:t(()=>[x(w(a.avatar?"":a.name.slice(0,1)),1),a.avatar?(m(),q("img",{key:0,src:`${c(ce).SERVER_URL}/avatars/${a.avatar}`},null,8,ht)):V("",!0)]),_:1},8,["class","size","color"]))}}),gt="_avatar_1dacu_1",bt={avatar:gt},yt={$style:bt},X=R(pt,[["__cssModules",yt]]),Ct={class:"user_name"},St={class:"user_status"},kt=H({__name:"ChatLayout",emits:["openCreateGroup"],setup(a,{emit:n}){const r=K(),s=y(!1);function _(){s.value=!s.value}return(h,u)=>(m(),k(Xe,{class:D(c(r).currentTheme==="dark"?"dark":"light"),view:"hHh lpR fFf"},{default:t(()=>[e(Ke,{class:"header",bordered:""},{default:t(()=>[e(We,null,{default:t(()=>[e(G,{icon:"menu",dense:"",flat:"",round:"",onClick:_}),e(Je,null,{default:t(()=>[x("Мессенджер")]),_:1})]),_:1})]),_:1}),e(at,{modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=l=>s.value=l),side:"left",overlay:"",bordered:""},{default:t(()=>[e(Y,{class:"list"},{default:t(()=>[e(se,{class:"user_info"},{default:t(()=>[e(E,null,{default:t(()=>[e(X,{name:c(r).user.name,avatar:c(r).user.avatar},null,8,["name","avatar"]),Q("div",Ct,w(c(r).user.name),1),Q("div",St,w(c(r).user.status),1)]),_:1})]),_:1}),L((m(),k(T,{class:"list_item",clickable:"",tag:"a",to:"/","active-class":"active"},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(U,{name:"home"})]),_:1}),e(C,null,{default:t(()=>[x("На главную")]),_:1})]),_:1})),[[F]]),L((m(),k(T,{class:"list_item",clickable:"",tag:"a",to:"/account","active-class":"active"},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(U,{name:"account_circle"})]),_:1}),e(C,null,{default:t(()=>[x("Аккаунт")]),_:1})]),_:1})),[[F]]),L((m(),k(T,{class:"list_item",clickable:"","active-class":"active",onClick:u[0]||(u[0]=l=>[n("openCreateGroup"),_()])},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(U,{name:"note_add"})]),_:1}),e(C,null,{default:t(()=>[x("Создать группу")]),_:1})]),_:1})),[[F]])]),_:1})]),_:1},8,["modelValue"]),e(Ze,{style:{height:"100vh"}},{default:t(()=>[lt(h.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["class"]))}});const zt=R(kt,[["__scopeId","data-v-4c8507d0"]]),$t={class:"chats"},xt={key:0,class:"text-center"},Mt={style:{display:"flex","align-items":"center"}},wt={key:0,class:"unread_count"},It=H({__name:"MessangerChatsList",props:{currentChatId:null,chats:null},setup(a){const n=K(),r=Z(),s=y(""),_=z(()=>r.chatsList.reduce((i,f)=>[...i,new Date(f.updatedAt)],[])),{f:h,data:u,loading:l}=re({fn:A.findUsers}),p=Me.throttleDecorator(h,1e3);W(s,(i,f)=>{i?p(s.value):u.value=[]});async function S(i){const f=await A.createChat([n.user._id,i]),o=r.chatsList.find(g=>g._id===f.data._id);o?(r.currentChatId=o._id,r.onOpenChat(o._id)):r.chatsList.push(f.data),s.value=""}return(i,f)=>(m(),q("div",$t,[e(ee,{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=o=>s.value=o),label:"Поиск",outlined:"",dense:"",clearable:""},null,8,["modelValue"]),s.value?(m(),k(Y,{key:0,class:"chats_list"},{default:t(()=>{var o;return[(o=c(u))!=null&&o.length?V("",!0):(m(),q("h6",xt,"Ничего не найдено")),(m(!0),q(N,null,J(c(u),g=>L((m(),k(T,{clickable:"",onClick:v=>S(g._id)},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(X,{name:g.name,avatar:g.avatar},null,8,["name","avatar"])]),_:2},1024),e(C,null,{default:t(()=>[x(w(g.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[F]])),256))]}),_:1})):V("",!0),s.value?V("",!0):(m(),k(Y,{key:1,class:"chats_list"},{default:t(()=>[(m(!0),q(N,null,J(a.chats,(o,g)=>L((m(),k(T,{class:"list_item",clickable:"","active-class":c(n).currentTheme==="dark"?"active_dark":"active_light",active:a.currentChatId===o._id,onClick:v=>c(r).onOpenChat(o._id)},{default:t(()=>[e(C,{avatar:""},{default:t(()=>{var v,I;return[e(X,{name:o.type==="dialog"?o.companion.name:((v=o.group)==null?void 0:v.title)||"",avatar:o.type==="dialog"?o.companion.avatar:((I=o.group)==null?void 0:I.avatar)||""},null,8,["name","avatar"])]}),_:2},1024),e(C,null,{default:t(()=>[e(P,null,{default:t(()=>{var v;return[x(w(o.type==="dialog"?o.companion.name:(v=o.group)==null?void 0:v.title),1)]}),_:2},1024),e(P,{caption:"",lines:"2"},{default:t(()=>{var v,I;return[x(w(o.messages.length?(I=(v=o==null?void 0:o.messages)==null?void 0:v.at(-1))==null?void 0:I.text:"Еще нет сообщений"),1)]}),_:2},1024)]),_:2},1024),e(C,{side:"",top:"",bottom:""},{default:t(()=>[e(P,{caption:""},{default:t(()=>{var v,I,B;return[Q("div",Mt,[o.type==="dialog"&&((I=(v=o.messages)==null?void 0:v.at(-1))==null?void 0:I.author)===c(n).user._id?(m(),k(U,{key:0,name:(B=o.messages.at(-1))!=null&&B.read.includes(o.companion._id)?"mdi-check-all":"mdi-check",style:{"padding-right":"5px"}},null,8,["name"])):V("",!0),Q("div",null,w(`${c(me).showFilteredDate(c(_)[g])}`),1)]),o.unread?(m(),q("div",wt,[Q("span",null,w(o.unread),1)])):V("",!0)]}),_:2},1024)]),_:2},1024)]),_:2},1032,["active-class","active","onClick"])),[[F]])),256))]),_:1}))]))}});const qt=R(It,[["__scopeId","data-v-0c324258"]]),Ue=we({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(a,{slots:n}){const r=z(()=>a.sent===!0?"sent":"received"),s=z(()=>`q-message-text-content q-message-text-content--${r.value}`+(a.textColor!==void 0?` text-${a.textColor}`:"")),_=z(()=>`q-message-text q-message-text--${r.value}`+(a.bgColor!==void 0?` text-${a.bgColor}`:"")),h=z(()=>"q-message-container row items-end no-wrap"+(a.sent===!0?" reverse":"")),u=z(()=>a.size!==void 0?`col-${a.size}`:""),l=z(()=>({msg:a.textHtml===!0?"innerHTML":"textContent",stamp:a.stampHtml===!0?"innerHTML":"textContent",name:a.nameHtml===!0?"innerHTML":"textContent",label:a.labelHtml===!0?"innerHTML":"textContent"}));function p(i){return n.stamp!==void 0?[i,M("div",{class:"q-message-stamp"},n.stamp())]:a.stamp?[i,M("div",{class:"q-message-stamp",[l.value.stamp]:a.stamp})]:[i]}function S(i,f){const o=f===!0?i.length>1?g=>g:g=>M("div",[g]):g=>M("div",{[l.value.msg]:g});return i.map((g,v)=>M("div",{key:v,class:_.value},[M("div",{class:s.value},p(o(g)))]))}return()=>{const i=[];n.avatar!==void 0?i.push(n.avatar()):a.avatar!==void 0&&i.push(M("img",{class:`q-message-avatar q-message-avatar--${r.value}`,src:a.avatar,"aria-hidden":"true"}));const f=[];n.name!==void 0?f.push(M("div",{class:`q-message-name q-message-name--${r.value}`},n.name())):a.name!==void 0&&f.push(M("div",{class:`q-message-name q-message-name--${r.value}`,[l.value.name]:a.name})),n.default!==void 0?f.push(S(Ye(n.default()),!0)):a.text!==void 0&&f.push(S(a.text)),i.push(M("div",{class:u.value},f));const o=[];return n.label!==void 0?o.push(M("div",{class:"q-message-label"},n.label())):a.label!==void 0&&o.push(M("div",{class:"q-message-label",[l.value.label]:a.label})),o.push(M("div",{class:h.value},i)),M("div",{class:`q-message q-message-${r.value}`},o)}}}),Se=["vertical","horizontal"],ue={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ke={prevent:!0,mouse:!0,mouseAllDir:!0},ze=a=>a>=250?50:Math.ceil(a/5),De=we({name:"QScrollArea",props:{...dt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(a,{slots:n,emit:r}){const s=y(!1),_=y(!1),h=y(!1),u={vertical:y(0),horizontal:y(0)},l={vertical:{ref:y(null),position:y(0),size:y(0)},horizontal:{ref:y(null),position:y(0),size:y(0)}},{proxy:p}=it(),S=vt(a,p.$q);let i=null,f;const o=y(null),g=z(()=>"q-scrollarea"+(S.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=z(()=>{const d=l.vertical.size.value-u.vertical.value;if(d<=0)return 0;const b=ne(l.vertical.position.value/d,0,1);return Math.round(b*1e4)/1e4}),l.vertical.thumbHidden=z(()=>(a.visible===null?h.value:a.visible)!==!0&&s.value===!1&&_.value===!1||l.vertical.size.value<=u.vertical.value+1),l.vertical.thumbStart=z(()=>l.vertical.percentage.value*(u.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=z(()=>Math.round(ne(u.vertical.value*u.vertical.value/l.vertical.size.value,ze(u.vertical.value),u.vertical.value))),l.vertical.style=z(()=>({...a.thumbStyle,...a.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=z(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=z(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=z(()=>{const d=l.horizontal.size.value-u.horizontal.value;if(d<=0)return 0;const b=ne(Math.abs(l.horizontal.position.value)/d,0,1);return Math.round(b*1e4)/1e4}),l.horizontal.thumbHidden=z(()=>(a.visible===null?h.value:a.visible)!==!0&&s.value===!1&&_.value===!1||l.horizontal.size.value<=u.horizontal.value+1),l.horizontal.thumbStart=z(()=>l.horizontal.percentage.value*(u.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=z(()=>Math.round(ne(u.horizontal.value*u.horizontal.value/l.horizontal.size.value,ze(u.horizontal.value),u.horizontal.value))),l.horizontal.style=z(()=>({...a.thumbStyle,...a.horizontalThumbStyle,[p.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=z(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=z(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=z(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),I=[[ye,d=>{he(d,"vertical")},void 0,{vertical:!0,...ke}]],B=[[ye,d=>{he(d,"horizontal")},void 0,{horizontal:!0,...ke}]];function O(){const d={};return Se.forEach(b=>{const $=l[b];d[b+"Position"]=$.position.value,d[b+"Percentage"]=$.percentage.value,d[b+"Size"]=$.size.value,d[b+"ContainerSize"]=u[b].value}),d}const _e=nt(()=>{const d=O();d.ref=p,r("scroll",d)},0);function fe(d,b,$){if(Se.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Ce:oe)(o.value,b,$)}function He({height:d,width:b}){let $=!1;u.vertical.value!==d&&(u.vertical.value=d,$=!0),u.horizontal.value!==b&&(u.horizontal.value=b,$=!0),$===!0&&te()}function Re({position:d}){let b=!1;l.vertical.position.value!==d.top&&(l.vertical.position.value=d.top,b=!0),l.horizontal.position.value!==d.left&&(l.horizontal.position.value=d.left,b=!0),b===!0&&te()}function Pe({height:d,width:b}){l.horizontal.size.value!==b&&(l.horizontal.size.value=b,te()),l.vertical.size.value!==d&&(l.vertical.size.value=d,te())}function he(d,b){const $=l[b];if(d.isFirst===!0){if($.thumbHidden.value===!0)return;f=$.position.value,_.value=!0}else if(_.value!==!0)return;d.isFinal===!0&&(_.value=!1);const j=ue[b],le=u[b].value,je=($.size.value-le)/(le-$.thumbSize.value),Ee=d.distance[j.dist],Ne=f+(d.direction===j.dir?1:-1)*Ee*je;ge(Ne,b)}function pe(d,b){const $=l[b];if($.thumbHidden.value!==!0){const j=d[ue[b].offset];if(j<$.thumbStart.value||j>$.thumbStart.value+$.thumbSize.value){const le=j-$.thumbSize.value/2;ge(le/u[b].value*$.size.value,b)}$.ref.value!==null&&$.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function Fe(d){pe(d,"vertical")}function Ge(d){pe(d,"horizontal")}function te(){s.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,s.value=!1},a.delay),a.onScroll!==void 0&&_e()}function ge(d,b){o.value[ue[b].scroll]=d}function Be(){h.value=!0}function Oe(){h.value=!1}let ae=null;return W(()=>p.$q.lang.rtl,d=>{o.value!==null&&oe(o.value,Math.abs(l.horizontal.position.value)*(d===!0?-1:1))}),rt(()=>{ae={top:l.vertical.position.value,left:l.horizontal.position.value}}),st(()=>{if(ae===null)return;const d=o.value;d!==null&&(oe(d,ae.left),Ce(d,ae.top))}),ot(_e.cancel),Object.assign(p,{getScrollTarget:()=>o.value,getScroll:O,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:fe,setScrollPercentage(d,b,$){fe(d,b*(l[d].size.value-u[d].value)*(d==="horizontal"&&p.$q.lang.rtl===!0?-1:1),$)}}),()=>M("div",{class:g.value,onMouseenter:Be,onMouseleave:Oe},[M("div",{ref:o,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[M("div",{class:"q-scrollarea__content absolute",style:v.value},ut(n.default,[M(be,{debounce:0,onResize:Pe})])),M(et,{axis:"both",onScroll:Re})]),M(be,{debounce:0,onResize:He}),M("div",{class:l.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:Fe}),M("div",{class:l.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:Ge}),L(M("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),I),L(M("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),B)])}}),Qt={key:0},Tt={key:1,class:"recording"},Vt=H({__name:"MessangerInput",setup(a){const n=Z(),r=y(""),s=y(null),{voiceMessage:_,isRecording:h,startRecording:u,stopRecording:l}=ft();W(_,()=>{_.value&&(s.value=new FormData,s.value.append("audio",_.value))});async function p(){const i=await A.saveMessage(n.currentChatId,r.value);n.currentChat.messages.push(i.data),n.currentChat.updatedAt=i.data.createdAt,r.value=""}async function S(){const i=await A.saveAudioMessage(s.value,n.currentChatId);n.currentChat.messages.push(i.data),n.currentChat.updatedAt=i.data.createdAt,s.value=null}return(i,f)=>(m(),k(ee,{class:"input",modelValue:r.value,"onUpdate:modelValue":f[2]||(f[2]=o=>r.value=o),outlined:"","label-slot":"",loading:c(h),readonly:c(h)},{label:t(()=>[c(h)?(m(),q("div",Tt,"Идет запись... ")):(m(),q("div",Qt,"Написать сообщение"))]),append:t(()=>[e(U,{class:"send",name:c(h)?"mic_off":"mic",onClick:f[0]||(f[0]=o=>c(h)?c(l)():c(u)())},null,8,["name"]),e(U,{class:"send",name:"send",onClick:f[1]||(f[1]=o=>s.value?S():p())})]),_:1},8,["modelValue","loading","readonly"]))}});const Le=R(Vt,[["__scopeId","data-v-58a81073"]]),Ut=["src"],Dt=H({__name:"MessangerVoiceMessage",props:{src:null},setup(a){const n=y(null),r=y(!1),s=y(0),_=y(0),h=y(0);Ie(()=>{n.value&&(n.value.onplay=()=>r.value=!0,n.value.onpause=()=>r.value=!1,n.value.ontimeupdate=l=>{const p=l.target,{duration:S,currentTime:i}=p;h.value=(S/100).toFixed(2).replace(".",":"),_.value=(i/100).toFixed(2).replace(".",":"),s.value=Math.round(i*100/S)/100,console.log(S,i)},n.value.onended=()=>s.value=0)});function u(){var l,p;r.value?(l=n.value)==null||l.pause():(p=n.value)==null||p.play()}return(l,p)=>(m(),q(N,null,[Q("audio",{ref_key:"audio",ref:n,src:a.src,preload:"metadata",volume:1},null,8,Ut),Q("div",{class:D(l.$style.audio)},[e(U,{name:r.value?"stop_circle":"play_circle",onClick:u,size:"40px",color:"amber-6"},null,8,["name"]),Q("div",{class:D(l.$style.audio_info)},[e(mt,{value:s.value,"instant-feedback":"",color:"pink",class:D(l.$style.audio_progress)},null,8,["value","class"]),Q("div",{class:D(l.$style.audio_time)},w(_.value+" / "+h.value),3)],2)],2)],64))}}),Lt={$style:_t},Ae=R(Dt,[["__cssModules",Lt]]),At={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ht={style:{padding:"0 10px 0 0"}},Rt=H({__name:"MessangerDialog",props:{currentChatId:null,currentChat:null},setup(a){const n=a,r=K(),s=Z(),_=y(null),h=z(()=>n.currentChat.messages),u=z(()=>h.value.reduce((p,S)=>[...p,new Date(S.createdAt)],[]));W(h,()=>{setTimeout(()=>{var S,i;const p=(S=_.value)==null?void 0:S.getScroll();(i=_.value)==null||i.setScrollPosition("vertical",(p==null?void 0:p.verticalSize)||0)},0)},{deep:!0,immediate:!0});async function l(){await A.deleteChat(n.currentChatId),s.chatsList=s.chatsList.filter(p=>p._id!==n.currentChatId),s.currentChatId=""}return(p,S)=>(m(),q("div",{class:D(["dialog",c(r).currentTheme==="dark"?"dialog_dark":"dialog_light"])},[e(T,{class:"dialog_name"},{default:t(()=>[e(C,{class:"back",avatar:""},{default:t(()=>[e(G,{dense:"",round:"",icon:"arrow_back",color:"primary",onClick:S[0]||(S[0]=i=>c(s).currentChatId="")})]),_:1}),e(C,{style:{display:"block"}},{default:t(()=>[e(P,null,{default:t(()=>[x(w(a.currentChat.companion.name),1)]),_:1}),e(P,{caption:""},{default:t(()=>[x(w(a.currentChat.companion.status),1)]),_:1})]),_:1}),e(C,{side:""},{default:t(()=>[e(G,{icon:"more_vert",round:"",dense:""},{default:t(()=>[e(Te,null,{default:t(()=>[e(Y,{bordered:""},{default:t(()=>[L((m(),k(T,{class:"text-red",clickable:"",onClick:l},{default:t(()=>[e(C,{avatar:"",style:{"padding-right":"10px","min-width":"0"}},{default:t(()=>[e(U,{name:"delete"})]),_:1}),e(C,null,{default:t(()=>[x("Удалить чат")]),_:1})]),_:1})),[[F],[ie]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(De,{class:"dialog_content",delay:"1200",ref_key:"dialogRef",ref:_},{default:t(()=>[(m(!0),q(N,null,J(c(h),(i,f)=>{var o;return m(),k(Ue,{text:[i.text],sent:i.author===c(r).user._id,key:i._id,style:{padding:"0 20px"},"bg-color":i.author===c(r).user._id?"primary":"seconary","text-color":"white"},qe({stamp:t(()=>[Q("div",At,[Q("div",Ht,w(c(me).showFilteredDate(c(u)[f])),1),i.author===c(r).user._id?(m(),k(U,{key:0,name:i.read.includes(a.currentChat.companion._id)?"mdi-check-all":"mdi-check"},null,8,["name"])):V("",!0)])]),_:2},[((o=i.attachments.at(0))==null?void 0:o.type)==="audio"?{name:"default",fn:t(()=>{var g;return[e(Ae,{src:`${c(ce).SERVER_URL}/audio/${(g=i.attachments.at(0))==null?void 0:g.name}`},null,8,["src"])]}),key:"0"}:void 0]),1032,["text","sent","bg-color"])}),128))]),_:1},512),a.currentChatId?(m(),k(Le,{key:0,style:{margin:"5px"}})):V("",!0)],2))}});const $e=R(Rt,[["__scopeId","data-v-089d9f70"]]),Pt=a=>(de("data-v-a9a9a510"),a=a(),ve(),a),Ft=Pt(()=>Q("div",{class:"title text-h6 text-center"},"Добавить в группу",-1)),Gt={key:0,class:"text-center"},Bt=H({__name:"MessangerGroupAddUser",props:{chat_id:null},setup(a){const n=a,r=y(""),s=y(null),{f:_,data:h,loading:u}=re({fn:A.findUsers}),l=Me.throttleDecorator(_,1e3),{f:p,loading:S}=re({fn:()=>{var f;return A.addUserToGroup(n.chat_id,(f=s.value)==null?void 0:f._id)},successMsg:"Пользователь добавлен в чат",alert:!0});W(r,(f,o)=>{f?(l(r.value),s.value=null):h.value=[]});function i(f){s.value=f,r.value=""}return(f,o)=>(m(),k(se,{class:"add"},{default:t(()=>[e(E,null,{default:t(()=>[Ft,e(ee,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=g=>r.value=g),loading:c(u),label:"Имя или логин",clearable:"",dense:""},null,8,["modelValue","loading"])]),_:1}),e(E,{style:{padding:"0"}},{default:t(()=>{var g;return[e(Y,null,{default:t(()=>[s.value?(m(),k(T,{key:1,"active-class":"active",active:!!s.value,clickable:"",onClick:o[1]||(o[1]=v=>s.value=null)},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(X,{name:s.value.name,avatar:s.value.avatar},null,8,["name","avatar"])]),_:1}),e(C,{side:""},{default:t(()=>[e(P,null,{default:t(()=>[x(w(s.value.name),1)]),_:1}),e(P,null,{default:t(()=>[x(w(s.value.login),1)]),_:1})]),_:1})]),_:1},8,["active"])):(m(!0),q(N,{key:0},J(c(h),v=>L((m(),k(T,{clickable:"",onClick:I=>i(v)},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(X,{name:v.name,avatar:v.avatar},null,8,["name","avatar"])]),_:2},1024),e(C,{side:""},{default:t(()=>[e(P,null,{default:t(()=>[x(w(v.name),1)]),_:2},1024),e(P,null,{default:t(()=>[x(w(v.login),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[F]])),256))]),_:1}),!((g=c(h))!=null&&g.length)&&r.value?(m(),q("div",Gt,"Не найдено ни одного человека")):V("",!0)]}),_:1}),e(Ve,{align:"center"},{default:t(()=>[e(G,{color:"primary",disable:!s.value,loading:c(S),onClick:c(p)},{default:t(()=>[x("Добавить")]),_:1},8,["disable","loading","onClick"])]),_:1})]),_:1}))}});const Ot=R(Bt,[["__scopeId","data-v-a9a9a510"]]),jt=a=>(de("data-v-b4551ae5"),a=a(),ve(),a),Et=jt(()=>Q("div",{class:"title text-h5 text-center"},"Информация о группе",-1)),Nt=H({__name:"MessangerGroupInfo",props:{avatar:null,name:null,chat_id:null},setup(a){const n=a,r=y(""),{f:s,loading:_,data:h}=re({fn:A.getUsersListInChat}),u=z(()=>{var p;return(p=h.value)==null?void 0:p.filter(S=>S.name.includes(r.value)||S.login.includes(r.value))});Ie(()=>s(n.chat_id));function l(p){var S;A.removeUserFromGroup(n.chat_id,p),h.value=(S=h.value)==null?void 0:S.filter(i=>i._id!==p)}return(p,S)=>(m(),k(se,{class:"info"},{default:t(()=>[e(E,null,{default:t(()=>[Et]),_:1}),e(E,null,{default:t(()=>[e(T,null,{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(X,{avatar:a.avatar,name:a.name},null,8,["avatar","name"])]),_:1}),e(C,{class:"text-h5"},{default:t(()=>[x(w(a.name),1)]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(T,null,{default:t(()=>[e(C,{class:"text-center text-h6 q-mb-sm"},{default:t(()=>[x("Список участников")]),_:1})]),_:1}),e(ee,{class:"q-mb-sm",modelValue:r.value,"onUpdate:modelValue":S[0]||(S[0]=i=>r.value=i),label:"Найти",outlined:"",dense:""},null,8,["modelValue"]),e(Y,null,{default:t(()=>{var i;return[(m(!0),q(N,null,J(c(u),f=>(m(),k(T,{key:f._id,clickable:""},{default:t(()=>[e(C,{avatar:""},{default:t(()=>[e(X,{name:f.name||"",avatar:f.avatar||""},null,8,["name","avatar"])]),_:2},1024),e(C,null,{default:t(()=>[x(w(f.name),1)]),_:2},1024),e(C,{side:""},{default:t(()=>[e(U,{name:"delete",onClick:o=>l(f._id)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),!c(_)&&!((i=c(u))!=null&&i.length)?(m(),k(T,{key:0},{default:t(()=>[e(C,{class:"text-center"},{default:t(()=>[x("Ничего не найдено")]),_:1})]),_:1})):V("",!0)]}),_:1})]),_:1})]),_:1}))}});const Yt=R(Nt,[["__scopeId","data-v-b4551ae5"]]),Xt={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Wt={style:{padding:"0 10px 0 0"}},Jt=H({__name:"MessangerGroup",props:{currentChatId:null,currentChat:null},setup(a){const n=a,r=K(),s=Z(),_=y("add_user"),h=y(null),u=y(!1),l=z(()=>n.currentChat.messages),p=z(()=>l.value.reduce((o,g)=>[...o,new Date(g.createdAt)],[])),S=z(()=>{switch(_.value){case"add_user":return Ot;case"info":return Yt}});W(l,()=>{setTimeout(()=>{var g,v;const o=(g=h.value)==null?void 0:g.getScroll();(v=h.value)==null||v.setScrollPosition("vertical",(o==null?void 0:o.verticalSize)||0)},0)},{deep:!0,immediate:!0});function i(o){_.value=o,u.value=!u.value}async function f(){await A.leaveChat(n.currentChatId),s.chatsList=s.chatsList.filter(o=>o._id!==n.currentChatId),s.currentChatId=""}return(o,g)=>(m(),q("div",{class:D(["group",c(r).currentTheme==="dark"?"group_dark":"group_light"])},[e(xe,{modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=v=>u.value=v)},{default:t(()=>{var v,I;return[(m(),k(Qe(c(S)),{chat_id:a.currentChatId,avatar:(v=a.currentChat.group)==null?void 0:v.avatar,name:(I=a.currentChat.group)==null?void 0:I.title},null,8,["chat_id","avatar","name"]))]}),_:1},8,["modelValue"]),e(T,{class:"group_title"},{default:t(()=>[e(C,{class:"back",avatar:""},{default:t(()=>[e(G,{icon:"arrow_back",color:"primary",dense:"",round:"",onClick:g[1]||(g[1]=v=>c(s).currentChatId="")})]),_:1}),e(C,{style:{display:"block"}},{default:t(()=>[e(P,null,{default:t(()=>{var v;return[x(w((v=a.currentChat.group)==null?void 0:v.title),1)]}),_:1})]),_:1}),e(C,{side:"",style:{display:"flex","flex-direction":"row"}},{default:t(()=>{var v;return[(v=c(s).currentChat.group)!=null&&v.roles.creator.includes(c(r).user._id)?(m(),k(G,{key:0,icon:"person_add",color:"primary",dense:"",round:"",onClick:g[2]||(g[2]=I=>i("add_user"))})):V("",!0),e(G,{icon:"more_vert",round:"",dense:""},{default:t(()=>[e(Te,null,{default:t(()=>[e(Y,{bordered:""},{default:t(()=>[L((m(),k(T,{clickable:"",onClick:g[3]||(g[3]=I=>i("info"))},{default:t(()=>[e(C,{avatar:"",style:{"padding-right":"10px","min-width":"0"}},{default:t(()=>[e(U,{name:"info"})]),_:1}),e(C,null,{default:t(()=>[x("Информация о группе")]),_:1})]),_:1})),[[F],[ie]]),L((m(),k(T,{class:"text-red",clickable:"",onClick:f},{default:t(()=>[e(C,{avatar:"",style:{"padding-right":"10px","min-width":"0"}},{default:t(()=>[e(U,{name:"logout"})]),_:1}),e(C,null,{default:t(()=>[x("Покинуть группу")]),_:1})]),_:1})),[[F],[ie]])]),_:1})]),_:1})]),_:1})]}),_:1})]),_:1}),e(De,{class:"group_content",delay:"1200",ref_key:"dialogRef",ref:h},{default:t(()=>[(m(!0),q(N,null,J(c(l),(v,I)=>{var B;return m(),k(Ue,{text:[v.text],sent:v.author===c(r).user._id,key:v._id,style:{padding:"0 20px"},"bg-color":v.author===c(r).user._id?"primary":"seconary","text-color":"white"},qe({name:t(()=>[x(w(v.author===c(r).user._id?"Я":a.currentChat.users.filter(O=>O._id===v.author)[0].name),1)]),stamp:t(()=>[Q("div",Xt,[Q("div",Wt,w(c(me).showFilteredDate(c(p)[I])),1),v.author===c(r).user._id?(m(),k(U,{key:0,name:v.read.length>1?"mdi-check-all":"mdi-check"},null,8,["name"])):V("",!0)])]),_:2},[((B=v.attachments.at(0))==null?void 0:B.type)==="audio"?{name:"default",fn:t(()=>{var O;return[e(Ae,{src:`${c(ce).SERVER_URL}/audio/${(O=v.attachments.at(0))==null?void 0:O.name}`},null,8,["src"])]}),key:"0"}:void 0]),1032,["text","sent","bg-color"])}),128))]),_:1},512),a.currentChatId?(m(),k(Le,{key:0,style:{margin:"5px"}})):V("",!0)],2))}});const Kt=R(Jt,[["__scopeId","data-v-bd9f2667"]]),Zt=a=>(de("data-v-90b6db1c"),a=a(),ve(),a),ea=Zt(()=>Q("div",{class:"text-h5 text-center q-pb-md"},"Создать группу",-1)),ta=H({__name:"MessangerFormCreateGroup",setup(a){const n=K(),r=y("");async function s(){const _=await A.createGroup([n.user._id],r.value);console.log(_)}return(_,h)=>(m(),k(se,{class:"content"},{default:t(()=>[e(E,null,{default:t(()=>[ea,e(ee,{modelValue:r.value,"onUpdate:modelValue":h[0]||(h[0]=u=>r.value=u),label:"Название"},null,8,["modelValue"])]),_:1}),e(Ve,{align:"center"},{default:t(()=>[e(G,{color:"primary",onClick:s},{default:t(()=>[x("Создать")]),_:1})]),_:1})]),_:1}))}});const aa=R(ta,[["__scopeId","data-v-90b6db1c"]]),la={class:"container"},na=H({__name:"Messanger",setup(a){K();const n=Z(),r=y(!1),s=ct($e);W(()=>n.currentChat.type,(h,u)=>{switch(h){case"dialog":s.value=$e;break;case"group":s.value=Kt;break}});function _(){console.log("create"),r.value=!r.value}return(h,u)=>(m(),k(zt,{onOpenCreateGroup:_},{default:t(()=>[Q("div",la,[e(xe,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=l=>r.value=l)},{default:t(()=>[e(aa)]),_:1},8,["modelValue"]),e(qt,{"current-chat-id":c(n).currentChatId,chats:c(n).chatsList,class:D(c(n).currentChatId?"hide":"not_hide")},null,8,["current-chat-id","chats","class"]),c(n).currentChatId?(m(),k(Qe(c(s)),{key:1,"current-chat-id":c(n).currentChatId,"current-chat":c(n).currentChat,class:D(c(n).currentChatId?"not_hide":"hide")},null,8,["current-chat-id","current-chat","class"])):(m(),q("div",{key:0,class:D(["dialog_not_selected",c(n).currentChatId?"not_hide":"hide"])},"Выберите, кому вы бы хотели написать",2))])]),_:1}))}});const wa=R(na,[["__scopeId","data-v-451f8340"]]);export{wa as default};
