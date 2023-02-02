/*! For license information please see logics_19.js.LICENSE.txt */
(()=>{"use strict";const t="splide",n=`data-${t}`;function e(t){t.length=0}function i(t){return!c(t)&&"object"==typeof t}function o(t){return Array.isArray(t)}function s(t){return"string"==typeof t}function r(t){return void 0===t}function c(t){return null===t}function a(t){return t instanceof HTMLElement}function l(t){return o(t)?t:[t]}function u(t,n){l(t).forEach(n)}function d(t,n){return t.indexOf(n)>-1}function f(t,n){return t.push(...l(n)),t}const h=Array.prototype;function g(t,n,e){return h.slice.call(t,n,e)}function p(t,n,e){t&&u(n,(n=>{n&&t.classList[e?"add":"remove"](n)}))}function m(t,n){p(t,s(n)?n.split(" "):n,!0)}function v(t,n){u(n,t.appendChild.bind(t))}function b(t,n){u(t,(t=>{const e=n.parentNode;e&&e.insertBefore(t,n)}))}function y(t,n){return a(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function w(t,n){return t?g(t.children).filter((t=>y(t,n))):[]}function _(t,n){return n?w(t,n)[0]:t.firstElementChild}function k(t,n,e){if(t){let i=Object.keys(t);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const o=i[e];if("__proto__"!==o&&!1===n(t[o],o))break}}return t}function x(t){return g(arguments,1).forEach((n=>{k(n,((e,i)=>{t[i]=n[i]}))})),t}function C(t,n){return k(n,((n,e)=>{o(n)?t[e]=n.slice():i(n)?t[e]=C(i(t[e])?t[e]:{},n):t[e]=n})),t}function E(t,n){t&&u(n,(n=>{t.removeAttribute(n)}))}function S(t,n,e){i(n)?k(n,((n,e)=>{S(t,e,n)})):c(e)?E(t,n):t.setAttribute(n,String(e))}function A(t,n,e){const i=document.createElement(t);return n&&(s(n)?m(i,n):S(i,n)),e&&v(e,i),i}function P(t,n,e){if(r(e))return getComputedStyle(t)[n];if(!c(e)){const{style:i}=t;e=`${e}`,i[n]!==e&&(i[n]=e)}}function L(t,n){P(t,"display",n)}function z(t,n){return t.getAttribute(n)}function B(t,n){return t&&t.classList.contains(n)}function D(t){return t.getBoundingClientRect()}function N(t){u(t,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}))}function T(t){return _((new DOMParser).parseFromString(t,"text/html").body)}function I(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function j(t,n){return t&&t.querySelector(n)}function M(t,n){return g(t.querySelectorAll(n))}function F(t,n){p(t,n,!1)}function R(t){return s(t)?t:t?`${t}px`:""}function O(n,e=""){if(!n)throw new Error(`[${t}] ${e}`)}function q(t){setTimeout(t)}const W=()=>{};function X(t){return requestAnimationFrame(t)}const{min:H,max:Y,floor:G,ceil:J,abs:U}=Math;function Z(t,n,e,i){const o=H(n,e),s=Y(n,e);return i?o<t&&t<s:o<=t&&t<=s}function K(t,n,e){const i=H(n,e),o=Y(n,e);return H(Y(i,t),o)}function Q(t){return+(t>0)-+(t<0)}function V(t,n){return u(n,(n=>{t=t.replace("%s",`${n}`)})),t}function tt(t){return t<10?`0${t}`:`${t}`}const nt={};const et="mounted",it="ready",ot="move",st="moved",rt="shifted",ct="click",at="slide:keydown",lt="refresh",ut="updated",dt="resize",ft="resized",ht="repositioned",gt="scroll",pt="scrolled",mt="destroy",$t="navigation:mounted",vt="lazyload:loaded";function bt(t){const{event:n}=t,e={};let i=[];function o(t,n,e){s(t,n,((t,n)=>{i=i.filter((i=>!!(i[0]!==t||i[1]!==n||e&&i[2]!==e)||(t.removeEventListener(n,i[2],i[3]),!1)))}))}function s(t,n,e){u(t,(t=>{t&&n.split(" ").forEach(e.bind(null,t))}))}function r(){i=i.filter((t=>o(t[0],t[1]))),n.offBy(e)}return n.on(mt,r,e),{on:function(t,i,o){n.on(t,i,e,o)},off:function(t){n.off(t,e)},emit:n.emit,bind:function(t,n,e,o){s(t,n,((t,n)=>{i.push([t,n,e,o]),t.addEventListener(n,e,o)}))},unbind:o,destroy:r}}function yt(t,n,e,i){const{now:o}=Date;let s,r,c=0,a=!0,l=0;function u(){if(!a){const r=o()-s;if(r>=t?(c=1,s=o()):c=r/t,e&&e(c),1===c&&(n(),i&&++l>=i))return d();X(u)}}function d(){a=!0}function f(){cancelAnimationFrame(r),c=0,r=0,a=!0}return{start:function(n){!n&&f(),s=o()-(n?c*t:0),a=!1,X(u)},rewind:function(){s=o(),c=0,e&&e(c)},pause:d,cancel:f,set:function(n){t=n},isPaused:function(){return a}}}function wt(t,n){let e;return function(){e||(e=yt(n||0,(()=>{t.apply(this,arguments),e=null}),null,1),e.start())}}const _t="ttb",kt={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};const xt=t,Ct=`${t}__slider`,Et=`${t}__track`,St=`${t}__list`,At=`${t}__slide`,Pt=`${At}--clone`,Lt=`${At}__container`,zt=`${t}__arrows`,Bt=`${t}__arrow`,Dt=`${Bt}--prev`,Nt=`${Bt}--next`,Tt=`${t}__pagination`,It=`${t}__progress`,jt=`${It}__bar`,Mt=`${t}__autoplay`,Ft=`${t}__play`,Rt=`${t}__pause`,Ot="is-active",qt="is-prev",Wt="is-next",Xt="is-visible",Ht="is-loading",Yt=[Ot,Xt,qt,Wt,Ht],Gt={slide:At,clone:Pt,arrows:zt,arrow:Bt,prev:Dt,next:Nt,pagination:Tt,page:`${Tt}__page`,spinner:`${t}__spinner`},Jt="role",Ut="aria-controls",Zt="aria-current",Kt="aria-label",Qt="aria-hidden",Vt="tabindex",tn="aria-orientation",nn=[Jt,Ut,Zt,Kt,Qt,tn,Vt,"disabled"],en="slide",on="loop",sn="fade";const rn=`${n}-interval`,cn={passive:!1,capture:!0},an="touchmove mousemove",ln="touchend touchcancel mouseup",un=["Left","Right","Up","Down"],dn=`${n}-lazy`,fn=`${dn}-srcset`,hn=`[${dn}], [${fn}]`,gn=[" ","Enter","Spacebar"];var pn=Object.freeze({__proto__:null,Options:function(t,e,i){const o=wt(l);let s,r,c;function a(t){t&&removeEventListener("resize",o)}function l(){const n=(e=t=>t[1].matches,g(r).filter(e)[0]||[]);var e;n[0]!==c&&function(n){const e=i.breakpoints[n]||s;e.destroy?(t.options=s,t.destroy("completely"===e.destroy)):(t.state.is(5)&&(a(!0),t.mount()),t.options=e)}(c=n[0])}return{setup:function(){try{C(i,JSON.parse(z(t.root,n)))}catch(t){O(!1,t.message)}s=C({},i);const{breakpoints:e}=i;if(e){const t="min"===i.mediaQuery;r=Object.keys(e).sort(((n,e)=>t?+e-+n:+n-+e)).map((n=>[n,matchMedia(`(${t?"min":"max"}-width:${n}px)`)])),l()}},mount:function(){r&&addEventListener("resize",o)},destroy:a}},Direction:function(t,n,e){return{resolve:function(t,n){const{direction:i}=e;return kt[t]["rtl"!==i||n?i===_t?0:-1:1]||t},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(n,i,o){const{on:s}=bt(n),{root:r}=n,c={},a=[];let l,u,d,h;function g(){!function(){u=_(r,`.${Ct}`),d=j(r,`.${Et}`),h=_(d,`.${St}`),O(d&&h,"A track/list element is missing."),f(a,w(h,`.${At}:not(.${Pt})`));const t=b(`.${Mt}`),n=b(`.${zt}`);x(c,{root:r,slider:u,track:d,list:h,slides:a,arrows:n,autoplay:t,prev:j(n,`.${Dt}`),next:j(n,`.${Nt}`),bar:j(b(`.${It}`),`.${jt}`),play:j(t,`.${Ft}`),pause:j(t,`.${Rt}`)})}(),function(){const n=r.id||`${e=t}${tt(nt[e]=(nt[e]||0)+1)}`;var e;r.id=n,d.id=d.id||`${n}-track`,h.id=h.id||`${n}-list`}(),m(r,l=y())}function p(){[r,d,h].forEach((t=>{E(t,"style")})),e(a),F(r,l)}function $(){p(),g()}function v(){F(r,l),m(r,l=y())}function b(t){return _(r,t)||_(u,t)}function y(){return[`${xt}--${o.type}`,`${xt}--${o.direction}`,o.drag&&`${xt}--draggable`,o.isNavigation&&`${xt}--nav`,Ot]}return x(c,{setup:g,mount:function(){s(lt,$,8),s(ut,v)},destroy:p})},Slides:function(t,n,i){const{on:o,emit:r,bind:c}=bt(t),{slides:f,list:h}=n.Elements,g=[];function $(){f.forEach(((t,n)=>{x(t,n,-1)}))}function w(){A((t=>{t.destroy()})),e(g)}function k(){w(),$()}function x(n,e,i){const o=function(t,n,e,i){const{on:o,emit:s,bind:r,destroy:c}=bt(t),{Components:a,root:l,options:u}=t,{isNavigation:d,updateOnMove:f}=u,{resolve:h}=a.Direction,g=z(i,"style"),m=e>-1,$=_(i,`.${Lt}`),v=u.focusableNodes&&M(i,u.focusableNodes);let b;function y(){const o=m?e:n,s=V(u.i18n.slideX,o+1),r=t.splides.map((t=>t.splide.root.id)).join(" ");S(i,Kt,s),S(i,Ut,r),S(i,Jt,"menuitem"),x(C())}function w(){b||k()}function k(){if(!b){const{index:e}=t;x(C()),function(t){const n=!t&&!C();S(i,Qt,n||null),S(i,Vt,!n&&u.slideFocus?0:null),v&&v.forEach((t=>{S(t,Vt,n?-1:null)})),t!==B(i,Xt)&&(p(i,Xt,t),s(t?"visible":"hidden",A))}(function(){if(t.is(sn))return C();const n=D(a.Elements.track),e=D(i),o=h("left"),s=h("right");return G(n[o])<=J(e[o])&&G(e[s])<=J(n[s])}()),p(i,qt,n===e-1),p(i,Wt,n===e+1)}}function x(t){t!==B(i,Ot)&&(p(i,Ot,t),d&&S(i,Zt,t||null),s(t?"active":"inactive",A))}function C(){const{index:i}=t;return i===n||u.cloneStatus&&i===e}const A={index:n,slideIndex:e,slide:i,container:$,isClone:m,mount:function(){m||(i.id=`${l.id}-slide${tt(n+1)}`),r(i,"click keydown",(t=>{s("click"===t.type?ct:at,A,t)})),o([lt,ht,rt,st,pt],k),o($t,y),f&&o(ot,w)},destroy:function(){b=!0,c(),F(i,Yt),E(i,nn),S(i,"style",g)},update:k,style:function(t,n,e){P(e&&$||i,t,n)},isWithin:function(e,i){let o=U(e-n);return m||!u.rewind&&!t.is(on)||(o=H(o,t.length-o)),o<=i}};return A}(t,e,i,n);o.mount(),g.push(o)}function C(t){return t?L((t=>!t.isClone)):g}function A(t,n){C(n).forEach(t)}function L(t){return g.filter("function"==typeof t?t:n=>s(t)?y(n.slide,t):d(l(t),n.index))}return{mount:function(){$(),o(lt,k),o([et,lt],(()=>{g.sort(((t,n)=>t.index-n.index))}))},destroy:w,update:function(){A((t=>{t.update()}))},register:x,get:C,getIn:function(t){const{Controller:e}=n,o=e.toIndex(t),s=e.hasFocus()?1:i.perPage;return L((t=>Z(t.index,o,o+s-1)))},getAt:function(t){return L(t)[0]},add:function(t,n){u(t,(t=>{if(s(t)&&(t=T(t)),a(t)){const e=f[n];e?b(t,e):v(h,t),m(t,i.classes.slide),function(t,n){const e=M(t,"img");let{length:i}=e;i?e.forEach((t=>{c(t,"load error",(()=>{--i||n()}))})):n()}(t,r.bind(null,dt))}})),r(lt)},remove:function(t){N(L(t).map((t=>t.slide))),r(lt)},forEach:A,filter:L,style:function(t,n,e){A((i=>{i.style(t,n,e)}))},getLength:function(t){return t?f.length:g.length},isEnough:function(){return g.length>i.perPage}}},Layout:function(t,n,e){const{on:o,bind:s,emit:r}=bt(t),{Slides:c}=n,{resolve:a}=n.Direction,{root:l,track:u,list:d}=n.Elements,{getAt:f}=c;let h,g;function p(){g=null,h=e.direction===_t,P(l,"maxWidth",R(e.width)),P(u,a("paddingLeft"),$(!1)),P(u,a("paddingRight"),$(!0)),m()}function m(){const t=D(l);g&&g.width===t.width&&g.height===t.height||(P(u,"height",function(){let t="";return h&&(t=v(),O(t,"height or heightRatio is missing."),t=`calc(${t} - ${$(!1)} - ${$(!0)})`),t}()),c.style(a("marginRight"),R(e.gap)),c.style("width",(e.autoWidth?"":R(e.fixedWidth)||(h?"":b()))||null),c.style("height",R(e.fixedHeight)||(h?e.autoHeight?"":b():v())||null,!0),g=t,r(ft))}function $(t){const{padding:n}=e,o=a(t?"right":"left");return n&&R(n[o]||(i(n)?0:n))||"0px"}function v(){return R(e.height||D(d).width*e.heightRatio)}function b(){const t=R(e.gap);return`calc((100%${t&&` + ${t}`})/${e.perPage||1}${t&&` - ${t}`})`}function y(t,n){const e=f(t);if(e){const t=D(e.slide)[a("right")],i=D(d)[a("left")];return U(t-i)+(n?0:w())}return 0}function w(){const t=f(0);return t&&parseFloat(P(t.slide,a("marginRight")))||0}return{mount:function(){p(),s(window,"resize load",wt(r.bind(this,dt))),o([ut,lt],p),o(dt,m)},listSize:function(){return D(d)[a("width")]},slideSize:function(t,n){const e=f(t||0);return e?D(e.slide)[a("width")]+(n?0:w()):0},sliderSize:function(){return y(t.length-1,!0)-y(-1,!0)},totalSize:y,getPadding:function(t){return parseFloat(P(u,a("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,i){const{on:o,emit:r}=bt(t),{Elements:c,Slides:a}=n,{resolve:l}=n.Direction,u=[];let d;function h(){(d=y())&&(function(n){const e=a.get().slice(),{length:o}=e;if(o){for(;e.length<n;)f(e,e);f(e.slice(-n),e.slice(0,n)).forEach(((s,r)=>{const l=r<n,d=function(n,e){const o=n.cloneNode(!0);return m(o,i.classes.clone),o.id=`${t.root.id}-clone${tt(e+1)}`,o}(s.slide,r);l?b(d,e[0].slide):v(c.list,d),f(u,d),a.register(d,r-n+(l?0:o),s.index)}))}}(d),r(dt))}function g(){N(u),e(u)}function p(){g(),h()}function $(){d<y()&&r(lt)}function y(){let{clones:n}=i;if(t.is(on)){if(!n){const e=function(t,n){if(s(n)){const e=A("div",{style:`width: ${n}; position: absolute;`},t);n=D(e).width,N(e)}return n}(c.list,i[l("fixedWidth")]);n=(e&&J(D(c.track)[l("width")]/e)||i[l("autoWidth")]&&t.length||i.perPage)*(i.drag?(i.flickMaxPages||1)+1:2)}}else n=0;return n}return{mount:function(){h(),o(lt,p),o([ut,dt],$)},destroy:g}},Move:function(t,n,e){const{on:i,emit:o}=bt(t),{slideSize:s,getPadding:c,totalSize:a,listSize:l,sliderSize:u}=n.Layout,{resolve:d,orient:f}=n.Direction,{list:h,track:g}=n.Elements;let p;function m(){k()||(n.Scroll.cancel(),$(t.index),o(ht))}function $(t){v(y(t,!0))}function v(n,e){if(!t.is(sn)){const i=e?n:function(n){if(t.is(on)){const t=f(n-w()),e=x(!1,n)&&t<0,i=x(!0,n)&&t>0;(e||i)&&(n=b(n,i))}return n}(n);h.style.transform=`translate${d("X")}(${i}px)`,n!==i&&o(rt)}}function b(t,n){const e=t-_(n),i=u();return t-f(i*(J(U(e)/i)||1))*(n?1:-1)}function y(n,i){const o=f(a(n-1)-function(t){const{focus:n}=e;return"center"===n?(l()-s(t,!0))/2:+n*s(t)||0}(n));return i?function(n){return e.trimSpace&&t.is(en)&&(n=K(n,0,f(u()-l()))),n}(o):o}function w(){const t=d("left");return D(h)[t]-D(g)[t]+f(c(!1))}function _(t){return y(t?n.Controller.getEnd():0,!!e.trimSpace)}function k(){return t.state.is(4)&&e.waitForTransition}function x(t,n){n=r(n)?w():n;const e=!0!==t&&f(n)<f(_(!1)),i=!1!==t&&f(n)>f(_(!0));return e||i}return{mount:function(){p=n.Transition,i([et,ft,ut,lt],m)},destroy:function(){E(h,"style")},move:function(i,s,r,c){if(!k()){const{set:a}=t.state,l=w();i!==s&&(p.cancel(),v(b(l,i>s),!0)),a(4),o(ot,s,r,i),p.start(s,(()=>{a(3),o(st,s,r,i),"move"===e.trimSpace&&i!==r&&l===w()?n.Controller.go(i>r?">":"<",!1,c):c&&c()}))}},jump:$,translate:v,shift:b,cancel:function(){v(w()),p.cancel()},toIndex:function(t){const e=n.Slides.get();let i=0,o=1/0;for(let n=0;n<e.length;n++){const s=e[n].index,r=U(y(s,!0)-t);if(!(r<=o))break;o=r,i=s}return i},toPosition:y,getPosition:w,getLimit:_,isBusy:k,exceededLimit:x}},Controller:function(t,n,e){const{on:i}=bt(t),{Move:o}=n,{getPosition:c,getLimit:a}=o,{isEnough:l,getLength:u}=n.Slides,d=t.is(on),f=t.is(en);let h,g,p,m=e.start||0,$=m;function v(){h=u(!0),g=e.perMove,p=e.perPage,m=K(m,0,h-1)}function b(t,e,i,s,r){const c=e?t:A(t);n.Scroll.scroll(e||i?o.toPosition(c,!0):t,s,(()=>{P(o.toIndex(o.getPosition())),r&&r()}))}function y(t){return _(!1,t)}function w(t){return _(!0,t)}function _(t,n){const e=g||(L()?1:p),i=k(m+e*(t?-1:1),m);return-1!==i||!f||(o=c(),s=a(!t),1,U(o-s)<1)?n?i:C(i):t?0:x();var o,s}function k(t,n,i){if(l()){const o=x();t<0||t>o?t=Z(0,t,n,!0)||Z(o,n,t,!0)?E(S(t)):d?g||L()?t:t<0?-(h%p||p):h:e.rewind?t<0?o:0:-1:i||t===n||(t=g?t:E(S(n)+(t<n?-1:1)))}else t=-1;return t}function x(){let t=h-p;return(L()||d&&g)&&(t=h-1),Y(t,0)}function C(t){return d?l()?t%h+(t<0?h:0):-1:t}function E(t){return K(L()?t:p*t,0,x())}function S(t){return L()||(t=Z(t,h-p,h-1)?h-1:t,t=G(t/p)),t}function A(t){const n=o.toIndex(t);return f?K(n,0,x()):n}function P(t){t!==m&&($=m,m=t)}function L(){return!r(e.focus)||e.isNavigation}return{mount:function(){v(),i([ut,lt],v,9)},go:function(t,n,i){const r=function(t){let n=m;if(s(t)){const[,e,i]=t.match(/([+\-<>])(\d+)?/)||[];"+"===e||"-"===e?n=k(m+ +`${e}${+i||1}`,m,!0):">"===e?n=i?E(+i):y(!0):"<"===e&&(n=w(!0))}else n=d?t:K(t,0,x());return n}(t);if(e.useScroll)b(r,!0,!0,e.speed,i);else{const t=C(r);t>-1&&!o.isBusy()&&(n||t!==m)&&(P(t),o.move(r,t,$,i))}},scroll:b,getNext:y,getPrev:w,getAdjacent:_,getEnd:x,setIndex:P,getIndex:function(t){return t?$:m},toIndex:E,toPage:S,toDest:A,hasFocus:L}},Arrows:function(t,n,e){const{on:i,bind:o,emit:s}=bt(t),{classes:r,i18n:c}=e,{Elements:a,Controller:l}=n;let u,d=a.arrows,f=a.prev,h=a.next;const g={};function p(){if(e.arrows&&(f&&h||(d=A("div",r.arrows),f=m(!0),h=m(!1),u=!0,v(d,[f,h]),b(d,_("slider"===e.arrows&&a.slider||t.root)))),f&&h)if(g.prev)L(d,!1===e.arrows?"none":"");else{const{id:t}=a.track;S(f,Ut,t),S(h,Ut,t),g.prev=f,g.next=h,function(){const{go:t}=l;i([et,st,ut,lt,pt],$),o(h,"click",(()=>{t(">",!0)})),o(f,"click",(()=>{t("<",!0)}))}(),s("arrows:mounted",f,h)}}function m(t){return T(`<button class="${r.arrow} ${t?r.prev:r.next}" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"}" />`)}function $(){const n=t.index,e=l.getPrev(),i=l.getNext(),o=e>-1&&n<e?c.last:c.prev,r=i>-1&&n>i?c.first:c.next;f.disabled=e<0,h.disabled=i<0,S(f,Kt,o),S(h,Kt,r),s("arrows:updated",f,h,e,i)}return{arrows:g,mount:function(){p(),i(ut,p)},destroy:function(){u?N(d):(E(f,nn),E(h,nn))}}},Autoplay:function(t,n,e){const{on:i,bind:o,emit:s}=bt(t),r=yt(e.interval,t.go.bind(t,">"),(function(t){const{bar:n}=a;n&&P(n,"width",100*t+"%"),s("autoplay:playing",t)})),{isPaused:c}=r,{Elements:a}=n;let l,u,d;function f(t){const n=t?"pause":"play",i=a[n];i&&(S(i,Ut,a.track.id),S(i,Kt,e.i18n[n]),o(i,"click",t?g:h))}function h(){c()&&n.Slides.isEnough()&&(r.start(!e.resetProgress),u=l=d=!1,s("autoplay:play"))}function g(t=!0){c()||(r.pause(),s("autoplay:pause")),d=t}function p(){d||(l||u?g(!1):h())}function m(){const i=n.Slides.getAt(t.index);r.set(i&&+z(i.slide,rn)||e.interval)}return{mount:function(){const{autoplay:t}=e;t&&(f(!0),f(!1),function(){const{root:t}=a;e.pauseOnHover&&o(t,"mouseenter mouseleave",(t=>{l="mouseenter"===t.type,p()})),e.pauseOnFocus&&o(t,"focusin focusout",(t=>{u="focusin"===t.type,p()})),i([ot,gt,lt],r.rewind),i(ot,m)}(),"pause"!==t&&h())},destroy:r.cancel,play:h,pause:g,isPaused:c}},Cover:function(t,n,e){const{on:i}=bt(t);function o(t){n.Slides.forEach((n=>{const e=_(n.container||n.slide,"img");e&&e.src&&s(t,e,n)}))}function s(t,n,e){e.style("background",t?`center/cover no-repeat url("${n.src}")`:"",!0),L(n,t?"none":"")}return{mount:function(){e.cover&&(i(vt,((t,n)=>{s(!0,t,n)})),i([et,ut,lt],o.bind(null,!0)))},destroy:function(){o(!1)}}},Scroll:function(t,n,e){const{on:i,emit:o}=bt(t),{Move:s}=n,{getPosition:r,getLimit:c,exceededLimit:a}=s;let l,u;function d(){const n=r(),e=s.toIndex(n);Z(e,0,t.length-1)||s.translate(s.shift(n,e>0),!0),u&&u(),o(pt)}function f(){l&&l.cancel()}function h(){l&&!l.isPaused()&&(f(),d())}return{mount:function(){i(ot,f),i([ut,lt],h)},destroy:f,scroll:function n(i,h,g,p){const m=r();let $=1;var v;h=h||(v=U(i-m),Y(v/1.5,800)),u=g,f(),l=yt(h,d,(o=>{const l=r(),u=(m+(i-m)*function(t){const{easingFunc:n}=e;return n?n(t):1-Math.pow(1-t,4)}(o)-r())*$;var d;s.translate(l+u),t.is(en)&&!p&&a()&&($*=.6,U(u)<10&&(d=a(!1),n(c(!d),600,null,!0)))}),1),o(gt),l.start()},cancel:h}},Drag:function(t,n,e){const{on:o,emit:s,bind:r,unbind:c}=bt(t),{Move:a,Scroll:l,Controller:u}=n,{track:d}=n.Elements,{resolve:f,orient:h}=n.Direction,{getPosition:g,exceededLimit:p}=a;let m,$,v,b,w,_,k,x,C,E=!1;function S(){const{drag:t}=e;M(!t),w="free"===t}function A(t){if(!x){const{noDrag:n}=e,i=j(t);n&&y(t.target,n)||!i&&t.button||(a.isBusy()?I(t,!0):(C=i?d:window,v=null,b=null,k=!1,r(C,an,P,cn),r(C,ln,L,cn),a.cancel(),l.cancel(),z(t)))}}function P(n){if(b||s("drag"),b=n,n.cancelable){const o=N(n)-N($);if(_){a.translate(m+function(n){return n/(E&&t.is(en)?5:1)}(o));const e=T(n)-T($)>200,i=E!==(E=p());(e||i)&&z(n),s("dragging"),k=!0,I(n)}else{let{dragMinThreshold:t}=e;t=i(t)?t:{mouse:0,touch:+t||10},_=U(o)>(j(n)?t.touch:t.mouse),D()&&I(n)}}}function L(i){c(C,an,P),c(C,ln,L);const{index:o}=t;if(b){if(_||i.cancelable&&D()){const s=function(n){if(t.is(on)||!E){const t=$===b&&v||$,e=N(b)-N(t),i=T(n)-T(t),o=T(n)-T(b)<200;if(i&&o)return e/i}return 0}(i),r=function(t){return g()+Q(t)*H(U(t)*(e.flickPower||600),w?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(s);w?u.scroll(r):t.is(sn)?u.go(o+h(Q(s))):u.go(u.toDest(r),!0),I(i)}s("dragged")}else w||g()===a.toPosition(o)||u.go(o,!0);_=!1}function z(t){v=$,$=t,m=g()}function B(t){!x&&k&&I(t,!0)}function D(){return U(N(b)-N($))>U(N(b,!0)-N($,!0))}function N(t,n){return(j(t)?t.touches[0]:t)[`page${f(n?"Y":"X")}`]}function T(t){return t.timeStamp}function j(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function M(t){x=t}return{mount:function(){r(d,an,W,cn),r(d,ln,W,cn),r(d,"touchstart mousedown",A,cn),r(d,"click",B,{capture:!0}),r(d,"dragstart",I),o([et,ut],S)},disable:M,isDragging:function(){return _}}},Keyboard:function(t,n,e){const{on:i,bind:o,unbind:s}=bt(t),{root:r}=n.Elements,{resolve:c}=n.Direction;let l,u;function f(){const{keyboard:t="global"}=e;t&&("focused"===t?(l=r,S(r,Vt,0)):l=window,o(l,"keydown",m))}function h(){s(l,"keydown"),a(l)&&E(l,Vt)}function g(){u=!0,q((()=>{u=!1}))}function p(){h(),f()}function m(n){if(!u){const{key:e}=n,i=d(un,e)?`Arrow${e}`:e;i===c("ArrowLeft")?t.go("<"):i===c("ArrowRight")&&t.go(">")}}return{mount:function(){f(),i(ut,p),i(ot,g)},destroy:h}},LazyLoad:function(t,n,e){const{on:i,off:o,bind:s,emit:r}=bt(t),c="sequential"===e.lazyLoad;let a=[],l=0;function u(){f(),d()}function d(){n.Slides.forEach((t=>{M(t.slide,hn).forEach((n=>{const i=z(n,dn),o=z(n,fn);if(i!==n.src||o!==n.srcset){const s=e.classes.spinner,r=n.parentElement,c=_(r,`.${s}`)||A("span",s,r);S(c,Jt,"presentation"),a.push({_img:n,_Slide:t,src:i,srcset:o,_spinner:c}),!n.src&&L(n,"none")}}))})),c&&p()}function f(){l=0,a=[]}function h(){a=a.filter((n=>{const i=e.perPage*((e.preloadPages||1)+1)-1;return!n._Slide.isWithin(t.index,i)||g(n)})),a.length||o(st)}function g(t){const{_img:n}=t;m(t._Slide.slide,Ht),s(n,"load error",(n=>{!function(t,n){const{_Slide:e}=t;F(e.slide,Ht),n||(N(t._spinner),L(t._img,""),r(vt,t._img,e),r(dt)),c&&p()}(t,"error"===n.type)})),["src","srcset"].forEach((e=>{t[e]&&(S(n,e,t[e]),E(n,"src"===e?dn:fn))}))}function p(){l<a.length&&g(a[l++])}return{mount:function(){e.lazyLoad&&(d(),i(lt,u),c||i([et,lt,st,pt],h))},destroy:f}},Pagination:function(t,n,i){const{on:o,emit:s,bind:r,unbind:c}=bt(t),{Slides:a,Elements:l,Controller:u}=n,{hasFocus:d,getIndex:f}=u,h=[];let g;function p(){$(),i.pagination&&a.isEnough()&&(function(){const{length:n}=t,{classes:e,i18n:o,perPage:s}=i,c="slider"===i.pagination&&l.slider||l.root,u=d()?n:J(n/s);g=A("ul",e.pagination,c);for(let t=0;t<u;t++){const n=A("li",null,g),i=A("button",{class:e.page,type:"button"},n),c=a.getIn(t).map((t=>t.slide.id)),l=!d()&&s>1?o.pageX:o.slideX;r(i,"click",v.bind(null,t)),S(i,Ut,c.join(" ")),S(i,Kt,V(l,t+1)),h.push({li:n,button:i,page:t})}}(),s("pagination:mounted",{list:g,items:h},b(t.index)),y())}function $(){g&&(N(g),h.forEach((t=>{c(t.button,"click")})),e(h),g=null)}function v(t){u.go(`>${t}`,!0,(()=>{const n=a.getAt(u.toIndex(t));var e;n&&((e=n.slide).setActive&&e.setActive()||e.focus({preventScroll:!0}))}))}function b(t){return h[u.toPage(t)]}function y(){const t=b(f(!0)),n=b(f());t&&(F(t.button,Ot),E(t.button,Zt)),n&&(m(n.button,Ot),S(n.button,Zt,!0)),s("pagination:updated",{list:g,items:h},t,n)}return{items:h,mount:function(){p(),o([ut,lt],p),o([ot,pt],y)},destroy:$,getAt:b,update:y}},Sync:function(t,n,i){const{list:o}=n.Elements,s=[];function r(){t.splides.forEach((n=>{var e;!n.isParent&&(e=n.splide,[t,e].forEach((n=>{const i=bt(n),o=n===t?e:t;i.on(ot,((t,n,e)=>{o.go(o.is(on)?e:t)})),s.push(i)})))})),i.isNavigation&&function(){const n=bt(t),{on:e}=n;e(ct,l),e(at,u),e([et,ut],a),S(o,Jt,"menu"),s.push(n),n.emit($t,t.splides)}()}function c(){E(o,nn),s.forEach((t=>{t.destroy()})),e(s)}function a(){S(o,tn,i.direction!==_t?"horizontal":null)}function l(n){t.go(n.index)}function u(t,n){d(gn,n.key)&&(l(t),I(n))}return{mount:r,destroy:c,remount:function(){c(),r()}}},Wheel:function(t,n,e){const{bind:i}=bt(t);function o(i){if(i.cancelable){const{deltaY:o}=i;if(o){const s=o<0;t.go(s?"<":">"),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&I(i)}}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,cn)}}}});const mn={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:Gt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function $n(t,n,e){const{on:i}=bt(t);return{mount:function(){i([et,lt],(()=>{q((()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)}))}))},start:function(t,e){const{track:i}=n.Elements;P(i,"height",R(D(i).height)),q((()=>{e(),P(i,"height","")}))},cancel:W}}function vn(t,n,e){const{bind:i}=bt(t),{Move:o,Controller:s}=n,{list:r}=n.Elements;let c;function a(){l("")}function l(t){P(r,"transition",t)}return{mount:function(){i(r,"transitionend",(t=>{t.target===r&&c&&(a(),c())}))},start:function(n,i){const r=o.toPosition(n,!0),a=o.getPosition(),u=function(n){const{rewindSpeed:i}=e;if(t.is(en)&&i){const t=s.getIndex(!0),e=s.getEnd();if(0===t&&n>=e||t>=e&&0===n)return i}return e.speed}(n);U(r-a)>=1&&u>=1?(l(`transform ${u}ms ${e.easing}`),o.translate(r,!0),c=i):(o.jump(n),i())},cancel:a}}const bn=class{constructor(t,n){this.event=function(){let t={};function n(n,i){e(n,((n,e)=>{const o=t[n];t[n]=o&&o.filter((t=>t._key?t._key!==i:i||t._namespace!==e))}))}function e(t,n){l(t).join(" ").split(" ").forEach((t=>{const e=t.split(".");n(e[0],e[1])}))}return{on:function(n,i,o,s=10){e(n,((n,e)=>{t[n]=t[n]||[],f(t[n],{_event:n,_callback:i,_namespace:e,_priority:s,_key:o}).sort(((t,n)=>t._priority-n._priority))}))},off:n,offBy:function(e){k(t,((t,i)=>{n(i,e)}))},emit:function(n){(t[n]||[]).forEach((t=>{t._callback.apply(t,g(arguments,1))}))},destroy:function(){t={}}}}(),this.Components={},this.state=function(t){let n=1;return{set:function(t){n=t},is:function(t){return d(l(t),n)}}}(),this.splides=[],this._options={},this._Extensions={};const e=s(t)?j(document,t):t;O(e,`${e} is invalid.`),this.root=e,C(mn,bn.defaults),C(C(this._options,mn),n||{})}mount(t,n){const{state:e,Components:i}=this;return O(e.is([1,5]),"Already mounted!"),e.set(1),this._Components=i,this._Transition=n||this._Transition||(this.is(sn)?$n:vn),this._Extensions=t||this._Extensions,k(x({},pn,this._Extensions,{Transition:this._Transition}),((t,n)=>{const e=t(this,i,this._options);i[n]=e,e.setup&&e.setup()})),k(i,(t=>{t.mount&&t.mount()})),this.emit(et),m(this.root,"is-initialized"),e.set(3),this.emit(it),this}sync(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._Components.Sync.remount(),t.Components.Sync.remount()),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,20),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...g(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(lt),this}destroy(t=!0){const{event:n,state:i}=this;return i.is(1)?n.on(it,this.destroy.bind(this,t),this):(k(this._Components,(n=>{n.destroy&&n.destroy(t)}),!0),n.emit(mt),n.destroy(),t&&e(this.splides),i.set(5)),this}get options(){return this._options}set options(t){const{_options:n}=this;C(n,t),this.state.is(1)||this.emit(ut,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let yn=bn;yn.defaults={},yn.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5};class wn{get(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){return localStorage.getItem(t)}}set(t,n){localStorage.setItem(t,n.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("demontage",!1),this.set("windows_installtion",0),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(t){const n={};for(const e in t)"length"!==e&&"costPerMetre"!=e&&("true"!==String(t[e])?"false"!==String(t[e])?isFinite(Number(t[e]))?n[e]=Number(t[e]):n[e]=t[e]:n[e]=0:n[e]=1);return JSON.stringify(n)}}var _n,kn=(t=>(t.Cozy="cozy",t.Japandi="japandi",t.Modern="modern",t.Fusion="fusion",t.NeoClassic="neoclassic",t))(kn||{});(_n=kn||(kn={})).fromString=function(t){return"cozy"===t?"cozy":"japandi"===t?"japandi":"neoclassic"===t?"neoclassic":"modern"===t?"modern":"fusion"===t?"fusion":"cozy"},_n.fromNumber=function(t){return 0===t?"cozy":1===t?"japandi":2===t?"fusion":3===t?"modern":"neoclassic"},$((function(){const t=$(window).width();$(".choiceactive.card").toggleClass("choiceActiveBorder"),$("#laminat").prop("checked",!0);const n={arrows:!1,pagination:!1,speed:550,flickPower:400,breakpoints:{480:{pagination:!0,speed:650}}},e=(new wn,new yn(".slider-container.splide",n));if(e.mount(),$("input").each((function(){$(this).attr("name",$(this).data("name"))})),$(".slider-wrapper.splide").length){$(".fact-link").on("click",(function(){$(this).is(".active")||($(".fact-container.active").removeClass("active"),$(".fact-container").eq($(this).index()).addClass("active"),$(".fact-link.active").removeClass("active"),$(this).addClass("active"))})),$(".tab-new").on("click",(function(){if($(this).is(".active"))return;let t=$(this).index();$(".tab-new.active").removeClass("active"),$(this).addClass("active"),$(".slider-image-new").removeClass("active"),$(".slider-image-new").each((function(){$(this).index()==t&&$(this).addClass("active")}));const n=kn.fromNumber(t);$(".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide.${n}, .specification-${n}.color-1`).toggle(!0),$(".calculator-slide.splide__slide .calculator-slide").eq(t).toggle(!0),$(".calculator-tab.w--current").removeClass("w--current"),$(".calculator-tab").eq(t).addClass("w--current"),$(".color-tab.active, .slide-nav.active").removeClass("active"),$(".div-block-14 .color-tab").each((function(){0==$(this).index()&&$(this).addClass("active")})),e.refresh()}));const i=new yn(".slider-wrapper.splide",n);i.mount(),i.on("move",(()=>setTimeout((()=>{$(".splide__list").css("height",$(".splide__slide.is-active .active img").css("height"))}),t>480?550:750))),$(".splide__list").css("height",$(".splide__slide.is-active .active img").css("height")),$(".slick-btn-prev, .slick-btn-next").on("click",(function(){let t=i.index,n="",e="";switch($(".slick-btn-prev, .slick-btn-next").removeClass("disabled"),0==$(this).index()?(i.go("<"),t---1==0&&$(this).addClass("disabled")):(i.go(">"),1+t++==4&&$(this).addClass("disabled")),t){case 0:n="",e="Дивитись спальню";break;case 1:n="Дивитись вітальню",e="Дивитись кухню";break;case 2:n="Дивитись спальню",e="Дивитись душ";break;case 3:n="Дивитись кухню",e="Дивитись ванну";break;case 4:n="Дивитись душ",e="";break;default:return}$(".slick-prev-text").html(n),$(".slick-next-text").html(e)}))}$(".calculator-tab").on("click",(function(){const t=$(this).index(),n=kn.fromNumber(t);$(".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide.${n}, .specification-${n}.color-1`).toggle(!0),$(".calculator-slide.splide__slide .calculator-slide").eq(t).toggle(!0),$(".calculator-tab.w--current").removeClass("w--current"),$(`.calculator-tab:eq(${t})`).addClass("w--current"),$(".color-tab.active, .slide-nav.active").removeClass("active"),$(".tab-new").eq(t).trigger("click"),$(".div-block-14 .color-tab").each((function(){0==$(this).index()&&$(this).addClass("active")})),e.refresh()})),$(".increment-field .increment").on("click",(function(){$(this).siblings(".increment-input").length<=0&&$(this).siblings(".increment-input").val(0)})),$("#wf-form-consult").on("submit",(t=>{if($("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox").toggle(!1):$(".warning.agreementcheckbox").toggle(!0),$("#phone").val()?$(".warning.inputs.phone").toggle(!1):$(".warning.inputs.phone").toggle(!0),$("#name").val()?$(".warning.inputs.name").toggle(!1):$(".warning.inputs.name").toggle(!0),$(".warning").is(":visible"))return t.preventDefault(),!1;{t.preventDefault();let n=$("#submitBtn").html();$("#submitBtn").html("Зачекайте...");const e=new FormData($("#wf-form-consult").get(0));fetch("https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec",{method:"POST",body:e}).then((()=>{$("#submitBtn").html(n)})).catch((t=>console.error("Error!",t.message))).finally((()=>{window.location.href.includes("/ru")?window.location.assign("/ru/kdyakuiemo"):window.location.assign("/kdyakuiemo")}))}})),$(".choice").on("click",(function(t){if(!$("#appliancesBool").is(":checked"))return t.preventDefault(),$(".choiceActive").toggleClass("choiceActive"),void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");$(this).hasClass("choiceActive")||($(".choiceActive").removeClass("choiceActive"),$(".choiceActiveBorder").removeClass("choiceActiveBorder"),$(this).addClass("choiceActive"),$(this).parent().addClass("choiceActiveBorder"),$("#node").is(":checked")&&$("#appliances").prop("checked","checked"))})),$("#node").on("change",(function(){$("#node").is(":checked")&&$(".choiceActive").length&&($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"))})),$("#appliancesBool").on("change",(function(){$(this).is(":checked")&&!$(".choiceActiveBorder").length&&($(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"))})),$(".hover-text").on("click",(function(){let t=$(this);t.siblings(".hover-modal").css("display","flex"),0==parseInt(t.siblings(".hover-modal").css("opacity"))?(function(t){const n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}(t.siblings(".hover-modal").get(0))||$([document.documentElement,document.body]).animate({scrollTop:t.siblings(".hover-modal").offset().top-96},450),t.siblings(".hover-modal").animate({bottom:42,opacity:1},200,"swing")):t.siblings(".hover-modal").animate({bottom:12,opacity:0},200,(function(){t.siblings(".hover-modal").toggle(!1)}))})),$(".submit-container .button").on("click",(function(t){t.preventDefault(),window.open($('.calculator-btn:not([style*="display: none"]) a').data("href"),"_blank")})),$(".closing-btn").on("click",(function(){let t=$(this);t.parent(".hover-modal").animate({bottom:12,opacity:0},200,(function(){t.parent(".hover-modal").toggle(!1)}))})),t<=480&&$(".tab-new").eq(1).trigger("click"),t>=992&&($(".preview-image, .blackbg-text").on({mouseenter:()=>$(".video-cursor").css("opacity",1),mouseleave:()=>$(".video-cursor").css("opacity",0)}),$(".project-link-image").on({mouseenter:()=>$(".project-dot").css("opacity",1),mouseleave:()=>$(".project-dot").css("opacity",0)}),$(".arrow-right").on({mouseenter:()=>$(".small-hover.right").css("opacity",1),mouseleave:()=>$(".small-hover.right").css("opacity",0)}),$(".arrow-left").on({mouseenter:()=>$(".small-hover.left").css("opacity",1),mouseleave:()=>$(".small-hover.left").css("opacity",0)}),$(".color-tab").on("click",(function(){let t=$(this).index(),n=$(".calculator-tab.w--current").index();const e=kn.fromNumber(n);$(this).not(".active")&&($(".color-tab.active").removeClass("active"),$(".div-block-14 .color-tab").each((function(){$(this).index()==t&&$(this).addClass("active")})),$(".color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide .color-${t+1}, .wrap-border.calculator-btn.specification-${e}.color-${t+1}`).toggle(!0))})),$(".calculator-slider-option").on("click",(function(){$(".calculator-slider-option.active").removeClass("active"),$(this).addClass("active"),e.go(parseInt($(this).data("slider-index")))})),$(".calculator-arrow").on("click",(function(){$(this).is(".arrow-right")?e.go(">"):e.go("<"),$(".calculator-slider-option.active").removeClass("active"),$(`.calculator-slider-option:eq(${e.index})`).addClass("active")})),$("form input").on("keydown",(t=>{"Enter"==t.key&&t.preventDefault()}))),t<=767&&($(".star").on("mouseleave",(function(){$(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")})),$(".image-price").on("click",(function(){$(this).is(".active")&&($(this).siblings(".star").removeClass("hidden"),$(this).removeClass("active"))})),$(".star").on("click",(function(){$(this).is(".hidden")?($(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")):($(this).addClass("hidden"),$(this).siblings(".image-price").removeClass("active"))})))}))})();