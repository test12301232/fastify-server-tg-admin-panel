import{n as g,J as R,r as k,K as me,L as ge,q as w,T as ve,M as U,N as he,m as be,w as I,D as we,O as N,t as qe,v as ye}from"./index-06f4354f.js";import{u as ke,a as pe,b as Ee,c as xe,d as Pe}from"./use-prevent-scroll-ecde5974.js";import{u as Ce}from"./use-timeout-a2c402f4.js";import{u as Se}from"./use-tick-e34f402d.js";import{r as j,a as _e,b as Te}from"./focus-manager-e79c27be.js";import{g as P,c as Be}from"./QBtn-0e6d397d.js";const $e={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function De(e,n=()=>{},o=()=>{}){return{transitionProps:g(()=>{const s=`q-transition--${e.transitionShow||n()}`,a=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let Fe=1,Me=document.body;function He(e,n){const o=document.createElement("div");if(o.id=n!==void 0?`q-portal--${n}--${Fe++}`:e,R.globalNodes!==void 0){const s=R.globalNodes.class;s!==void 0&&(o.className=s)}return Me.appendChild(o),o}function Oe(e){e.remove()}const C=[];function Ye(e){return C.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function Le(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return P(e)}else if(e.__qPortal===!0){const o=P(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(n),o):e}e=P(e)}while(e!=null)}function Ze(e,n,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Le(e,n);continue}e.hide(n)}e=P(e)}}function ze(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ke(e,n,o,s){const a=k(!1),m=k(!1);let l=null;const u={},d=s==="dialog"&&ze(e);function c(f){if(f===!0){j(u),m.value=!0;return}m.value=!1,a.value===!1&&(d===!1&&l===null&&(l=He(!1,s)),a.value=!0,C.push(e.proxy),_e(u))}function r(f){if(m.value=!1,f!==!0)return;j(u),a.value=!1;const b=C.indexOf(e.proxy);b!==-1&&C.splice(b,1),l!==null&&(Oe(l),l=null)}return me(()=>{r(!0)}),e.proxy.__qPortal=!0,ge(e.proxy,"contentEl",()=>n.value),{showPortal:c,hidePortal:r,portalIsActive:a,portalIsAccessible:m,renderPortal:()=>d===!0?o():a.value===!0?[w(ve,{to:l},o())]:void 0}}const v=[];let q;function Qe(e){q=e.keyCode===27}function Ae(){q===!0&&(q=!1)}function Re(e){q===!0&&(q=!1,he(e,27)===!0&&v[v.length-1](e))}function J(e){window[e]("keydown",Qe),window[e]("blur",Ae),window[e]("keyup",Re),q=!1}function Ie(e){U.is.desktop===!0&&(v.push(e),v.length===1&&J("addEventListener"))}function G(e){const n=v.indexOf(e);n>-1&&(v.splice(n,1),v.length===0&&J("removeEventListener"))}const h=[];function X(e){h[h.length-1](e)}function Ne(e){U.is.desktop===!0&&(h.push(e),h.length===1&&document.body.addEventListener("focusin",X))}function W(e){const n=h.indexOf(e);n>-1&&(h.splice(n,1),h.length===0&&document.body.removeEventListener("focusin",X))}let x=0;const je={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},V={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},et=be({name:"QDialog",inheritAttrs:!1,props:{...ke,...$e,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...pe,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:s}){const a=ye(),{proxy:{$q:m}}=a,l=k(null),u=k(!1),d=k(!1);let c=null,r=null,f,b;const F=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:M}=Pe(),{registerTimeout:H}=Ce(),{registerTick:Y,removeTick:O}=Se(),{transitionProps:Z,transitionStyle:L}=De(e,()=>V[e.position][0],()=>V[e.position][1]),{showPortal:z,hidePortal:K,portalIsAccessible:ee,renderPortal:te}=Ke(a,l,fe,"dialog"),{hide:p}=Ee({showing:u,hideOnRouteChange:F,handleShow:se,handleHide:ue,processOnMount:!0}),{addToHistory:ne,removeFromHistory:oe}=xe(u,p,F),ie=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${je[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=g(()=>u.value===!0&&e.seamless!==!0),ae=g(()=>e.autoClose===!0?{onClick:re}:{}),le=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,s.class]);I(()=>e.maximized,t=>{u.value===!0&&T(t)}),I(E,t=>{M(t),t===!0?(Ne(B),Ie(_)):(W(B),G(_))});function se(t){ne(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,T(e.maximized),z(),d.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Y(y)):O(),H(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:i,bottom:$}=document.activeElement.getBoundingClientRect(),{innerHeight:A}=window,D=window.visualViewport!==void 0?window.visualViewport.height:A;i>0&&$>D/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-D,$>=A?1/0:Math.ceil(document.scrollingElement.scrollTop+$-D/2))),document.activeElement.scrollIntoView()}b=!0,l.value.click(),b=!1}z(!0),d.value=!1,o("show",t)},e.transitionDuration)}function ue(t){O(),oe(),Q(!0),d.value=!0,K(),r!==null&&(((t&&t.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),H(()=>{K(!0),d.value=!1,o("hide",t)},e.transitionDuration)}function y(t){Te(()=>{let i=l.value;i===null||i.contains(document.activeElement)===!0||(i=(t!==""?i.querySelector(t):null)||i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function S(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):y(),o("shake");const i=l.value;i!==null&&(i.classList.remove("q-animate--scale"),i.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,l.value!==null&&(i.classList.remove("q-animate--scale"),y())},170))}function _(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&S():(o("escapeKey"),p()))}function Q(t){c!==null&&(clearTimeout(c),c=null),(t===!0||u.value===!0)&&(T(!1),e.seamless!==!0&&(M(!1),W(B),G(_))),t!==!0&&(r=null)}function T(t){t===!0?f!==!0&&(x<1&&document.body.classList.add("q-body--dialog"),x++,f=!0):f===!0&&(x<2&&document.body.classList.remove("q-body--dialog"),x--,f=!1)}function re(t){b!==!0&&(p(t),o("click",t))}function ce(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?p(t):e.noShake!==!0&&S(t.relatedTarget)}function B(t){e.allowFocusOutside!==!0&&ee.value===!0&&Be(l.value,t.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:y,shake:S,__updateRefocusTarget(t){r=t||null}}),we(Q);const de=m.platform.is.ios===!0||m.platform.is.safari?"onClick":"onFocusin";function fe(){return w("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...s,class:le.value},[w(N,{name:"q-transition--fade",appear:!0},()=>E.value===!0?w("div",{class:"q-dialog__backdrop fixed-full",style:L.value,"aria-hidden":"true",tabindex:-1,[de]:ce}):null),w(N,Z.value,()=>u.value===!0?w("div",{ref:l,class:ie.value,style:L.value,tabindex:-1,...ae.value},qe(n.default)):null)])}return te}});export{et as Q,De as a,Ke as b,Ze as c,Ne as d,G as e,Ie as f,Ye as g,Le as h,C as p,W as r,$e as u};