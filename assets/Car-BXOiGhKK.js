import{f as ue,j as s,u as p,r as G,g as ct,h as ut,i as dt,k as ft,a as pt,b as ht,l as mt}from"./index-eqNzIk9h.js";const vt=e=>e.filter.inputValue,Ae=e=>e.filter.equipment,yt=e=>e.filter.type,Le=e=>e.cars.cars,bt=e=>e.cars.favourites,$e=ue([Le,vt,Ae],(e,t)=>e.filter(n=>{const{car:r}=n,a=r.name.toLowerCase(),l=r.location.toLowerCase();return a.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),gt=ue([Le,Ae],(e,t)=>e.filter(({car:n})=>{const{transmission:r,details:a}=n,l=[r];return Object.entries(a).forEach(([m,i])=>{i!==0&&l.push(m.toLowerCase())}),t.every(m=>l.includes(m))})),xt=ue([$e,yt],(e,t)=>t.length===0?e:e.filter(n=>{const{car:r}=n,a=r.form.toLowerCase();return t.some(l=>a.includes(l.toLowerCase()))})),vo=ue([$e,gt,xt],(e,t,n)=>e.filter(r=>t.includes(r)&&n.includes(r))),wt="/campers/assets/sprite-SW9Tt7Df.svg",xe=({styles:e,width:t,height:n,iconId:r})=>s.jsx(s.Fragment,{children:s.jsx("svg",{style:e,width:t,height:n,children:s.jsx("use",{href:`${wt}#${r}`})})}),Ct=p.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};
`,Ue=p.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,Ot=p.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,_t=p.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,_e=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,St=p.button`
  border: none;
  background-color: transparent;
`,Et=p.div`
  display: flex;
  gap: 16px;
`;p.p``;const Mt=p.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,Tt=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,Rt=p.button`
  width: 166px;
  height: 56px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: ${e=>e.theme.radius.xlg};
  border: none;
  color: ${e=>e.theme.colors.buttonText};
  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`;var me={exports:{}},I={},ke={exports:{}},jt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pt=jt,Nt=Pt;function Ie(){}function We(){}We.resetWarningCache=Ie;var Ft=function(){function e(r,a,l,m,i,b){if(b!==Nt){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:We,resetWarningCache:Ie};return n.PropTypes=n,n};ke.exports=Ft();var He=ke.exports,ve={exports:{}},P={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function l(h,y){return y.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function m(h){var y=h.offsetWidth<=0&&h.offsetHeight<=0;if(y&&!h.innerHTML)return!0;try{var x=window.getComputedStyle(h),S=x.getPropertyValue("display");return y?S!==r&&l(h,x):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var y=h,x=h.getRootNode&&h.getRootNode();y&&y!==document.body;){if(x&&y===x&&(y=x.host.parentNode),m(y))return!1;y=y.parentNode}return!0}function b(h,y){var x=h.nodeName.toLowerCase(),S=a.test(x)&&!h.disabled||x==="a"&&h.href||y;return S&&i(h)}function v(h){var y=h.getAttribute("tabindex");y===null&&(y=void 0);var x=isNaN(y);return(x||y>=0)&&b(h,!x)}function g(h){var y=[].slice.call(h.querySelectorAll("*"),0).reduce(function(x,S){return x.concat(S.shadowRoot?g(S.shadowRoot):[S])},[]);return y.filter(v)}e.exports=t.default})(ye,ye.exports);var qe=ye.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=$t;P.log=Ut;P.handleBlur=J;P.handleFocus=Z;P.markForFocusLater=kt;P.returnFocus=It;P.popWithoutFocus=Wt;P.setupScopedFocus=Ht;P.teardownScopedFocus=qt;var Dt=qe,At=Lt(Dt);function Lt(e){return e&&e.__esModule?e:{default:e}}var B=[],q=null,be=!1;function $t(){B=[]}function Ut(){}function J(){be=!0}function Z(){if(be){if(be=!1,!q)return;setTimeout(function(){if(!q.contains(document.activeElement)){var e=(0,At.default)(q)[0]||q;e.focus()}},0)}}function kt(){B.push(document.activeElement)}function It(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{B.length!==0&&(t=B.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Wt(){B.length>0&&B.pop()}function Ht(e){q=e,window.addEventListener?(window.addEventListener("blur",J,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",J),document.attachEvent("onFocus",Z))}function qt(){q=null,window.addEventListener?(window.removeEventListener("blur",J),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",J),document.detachEvent("onFocus",Z))}var ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var n=qe,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function m(i,b){var v=(0,r.default)(i);if(!v.length){b.preventDefault();return}var g=void 0,h=b.shiftKey,y=v[0],x=v[v.length-1],S=l();if(i===S){if(!h)return;g=x}if(x===S&&!h&&(g=y),y===S&&h&&(g=x),g){b.preventDefault(),g.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),V=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(V){var W=v.indexOf(S);if(W>-1&&(W+=h?-1:1),g=v[W],typeof g>"u"){b.preventDefault(),g=h?x:y,g.focus();return}b.preventDefault(),g.focus()}}e.exports=t.default})(ge,ge.exports);var Bt=ge.exports,N={},zt=function(){},Kt=zt,j={},Be={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Be);var Vt=Be.exports;Object.defineProperty(j,"__esModule",{value:!0});j.canUseDOM=j.SafeNodeList=j.SafeHTMLCollection=void 0;var Yt=Vt,Xt=Gt(Yt);function Gt(e){return e&&e.__esModule?e:{default:e}}var de=Xt.default,Jt=de.canUseDOM?window.HTMLElement:{};j.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};j.SafeNodeList=de.canUseDOM?window.NodeList:{};j.canUseDOM=de.canUseDOM;j.default=Jt;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=nn;N.log=on;N.assertNodeList=ze;N.setElement=rn;N.validateElement=we;N.hide=an;N.show=sn;N.documentNotReadyOrSSRTesting=ln;var Zt=Kt,Qt=tn(Zt),en=j;function tn(e){return e&&e.__esModule?e:{default:e}}var T=null;function nn(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function on(){}function ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function rn(e){var t=e;if(typeof t=="string"&&en.canUseDOM){var n=document.querySelectorAll(t);ze(n,t),t=n}return T=t||T,T}function we(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Qt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function an(e){var t=!0,n=!1,r=void 0;try{for(var a=we(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var m=l.value;m.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function sn(e){var t=!0,n=!1,r=void 0;try{for(var a=we(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var m=l.value;m.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function ln(){T=null}var z={};Object.defineProperty(z,"__esModule",{value:!0});z.resetState=cn;z.log=un;var Y={},X={};function Se(e,t){e.classList.remove(t)}function cn(){var e=document.getElementsByTagName("html")[0];for(var t in Y)Se(e,Y[t]);var n=document.body;for(var r in X)Se(n,X[r]);Y={},X={}}function un(){}var dn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},fn=function(t,n){return t[n]&&(t[n]-=1),n},pn=function(t,n,r){r.forEach(function(a){dn(n,a),t.add(a)})},hn=function(t,n,r){r.forEach(function(a){fn(n,a),n[a]===0&&t.remove(a)})};z.add=function(t,n){return pn(t.classList,t.nodeName.toLowerCase()=="html"?Y:X,n.split(" "))};z.remove=function(t,n){return hn(t.classList,t.nodeName.toLowerCase()=="html"?Y:X,n.split(" "))};var K={};Object.defineProperty(K,"__esModule",{value:!0});K.log=vn;K.resetState=yn;function mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ke=function e(){var t=this;mn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new Ke;function vn(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function yn(){se=new Ke}K.default=se;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=wn;Ce.log=Cn;var bn=K,gn=xn(bn);function xn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,R=void 0,k=[];function wn(){for(var e=[_,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=R=null,k=[]}function Cn(){console.log("bodyTrap ----------"),console.log(k.length);for(var e=[_,R],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ee(){k.length!==0&&k[k.length-1].focusContent()}function On(e,t){!_&&!R&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ee),R=_.cloneNode(),R.addEventListener("focus",Ee)),k=t,k.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(_.parentElement&&_.parentElement.removeChild(_),R.parentElement&&R.parentElement.removeChild(R))}gn.default.subscribe(On);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a=function(){function f(d,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,w,o){return w&&f(d.prototype,w),o&&f(d,o),d}}(),l=G,m=He,i=te(m),b=P,v=fe(b),g=Bt,h=te(g),y=N,x=fe(y),S=z,F=fe(S),V=j,W=te(V),et=K,Oe=te(et);function fe(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(d[w]=f[w]);return d.default=f,d}function te(f){return f&&f.__esModule?f:{default:f}}function tt(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function nt(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function ot(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var pe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},rt=function(d){return d.code==="Tab"||d.keyCode===9},at=function(d){return d.code==="Escape"||d.keyCode===27},ne=0,he=function(f){ot(d,f);function d(w){tt(this,d);var o=nt(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,A=c.bodyOpenClassName,L=c.parentSelector,oe=L&&L().ownerDocument||document;A&&F.remove(oe.body,A),C&&F.remove(oe.getElementsByTagName("html")[0],C),E&&ne>0&&(ne-=1,ne===0&&x.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(v.returnFocus(o.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),Oe.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(v.setupScopedFocus(o.node),v.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){rt(c)&&(0,h.default)(o.content,c),o.props.shouldCloseOnEsc&&at(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":r(O))==="object"?O:{base:pe[c],afterOpen:pe[c]+"--after-open",beforeClose:pe[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,A=o.parentSelector,L=A&&A().ownerDocument||document;C&&F.add(L.body,C),E&&F.add(L.getElementsByTagName("html")[0],E),O&&(ne+=1,x.hide(c)),Oe.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,A=o.children,L=O?{}:C.content,oe=E?{}:C.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},oe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},it=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(it,A);return this.props.overlayElement(st,lt)}}]),d}(l.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(W.default),i.default.instanceOf(V.SafeHTMLCollection),i.default.instanceOf(V.SafeNodeList),i.default.arrayOf(i.default.instanceOf(W.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=he,e.exports=t.default})(ve,ve.exports);var _n=ve.exports;function Ve(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ye(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Xe(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ve.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;function Sn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var l=e.displayName||e.name,m=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+m+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ve,t.componentWillReceiveProps=Ye),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Xe;var i=t.componentDidUpdate;t.componentDidUpdate=function(v,g,h){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,v,g,y)}}return e}const En=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Sn},Symbol.toStringTag,{value:"Module"})),Mn=ct(En);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tn=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ge=G,ie=Q(Ge),Rn=ut,le=Q(Rn),jn=He,u=Q(jn),Pn=_n,Te=Q(Pn),Nn=N,Fn=An(Nn),D=j,Re=Q(D),Dn=Mn;function An(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Q(e){return e&&e.__esModule?e:{default:e}}function Ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function $n(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Un=I.portalClassName="ReactModalPortal",kn=I.bodyOpenClassName="ReactModal__Body--open",$=D.canUseDOM&&le.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Ne=function(){return $?le.default.createPortal:le.default.unstable_renderSubtreeIntoContainer};function re(e){return e()}var ee=function(e){$n(t,e);function t(){var n,r,a,l;Ln(this,t);for(var m=arguments.length,i=Array(m),b=0;b<m;b++)i[b]=arguments[b];return l=(r=(a=je(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!$&&le.default.unmountComponentAtNode(a.node);var v=re(a.props.parentSelector);v&&v.contains(a.node)?v.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(v){a.portal=v},a.renderPortal=function(v){var g=Ne(),h=g(a,ie.default.createElement(Te.default,Me({defaultStyles:t.defaultStyles},v)),a.node);a.portalRef(h)},r),je(a,l)}return Tn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){$||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var r=re(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=re(r.parentSelector),l=re(this.props.parentSelector);return{prevParent:a,nextParent:l}}},{key:"componentDidUpdate",value:function(r,a,l){if(D.canUseDOM){var m=this.props,i=m.isOpen,b=m.portalClassName;r.portalClassName!==b&&(this.node.className=b);var v=l.prevParent,g=l.nextParent;g!==v&&(v.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!i)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),l=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);l?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-a)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!$)return null;!this.node&&$&&(this.node=Pe("div"));var r=Ne();return r(ie.default.createElement(Te.default,Me({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Fn.setElement(r)}}]),t}(Ge.Component);ee.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Re.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Re.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ee.defaultProps={isOpen:!1,portalClassName:Un,bodyOpenClassName:kn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ie.default.createElement("div",t,n)},contentElement:function(t,n){return ie.default.createElement("div",t,n)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Dn.polyfill)(ee);I.default=ee;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=I,r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}t.default=r.default,e.exports=t.default})(me,me.exports);var In=me.exports;const Je=dt(In);var U=256,Ze=[],Fe=256,ae;for(;U--;)Ze[U]=(U+256).toString(16).substring(1);function ce(e){var t=0,n=e||11;if(!ae||U+n>Fe*2)for(ae="",U=0;t<Fe;t++)ae+=Ze[Math.random()*256|0];return ae.substring(U,U+++n)}const Wn=p.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,Hn=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,qn=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Bn=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,zn=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Kn=p.p`
  color: ${e=>e.theme.colors.grey};
`,Vn=p.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Yn=ft`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,De=p.button`
  position: relative;
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
  border: none;
  background-color: transparent;
  padding-bottom: 24px;

  &.isOpen {
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -3px;
      width: 85px;
      height: 5px;
      background-color: ${e=>e.theme.colors.red};
      animation: ${Yn} 0.3s ease-out forwards;
    }
  }
`,Xn=p.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,Gn=p.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,Qe=({details:e})=>{const t=(a,l)=>a==="beds"||a==="hob"||a==="airConditioner"?l:l===1?"":l,n=(a,l)=>a==="beds"?l===1?"bed":a:a==="airConditioner"?r(a):a,r=a=>{const l=a.charAt(0).toUpperCase()+a.slice(1,3),m=a.slice(3).toLowerCase();return l+" "+m};return s.jsx(s.Fragment,{children:Object.entries(e).map(([a,l])=>l===0?s.jsx("div",{style:{display:"none"}},ce()):s.jsxs(Xn,{children:[s.jsx(xe,{width:20,height:20,iconId:a==="bathroom"?"toilet":a.toLowerCase()}),s.jsxs(Gn,{children:[t(a,l)," ",n(a,l)]})]},ce()))})},Jn=p.div``,Zn=p.div`
  width: 430px;
`,Qn=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,eo=p.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,to=p.div`
  margin-top: 24px;
`,H=p.div`
  display: flex;
  justify-content: space-between;
`,M=p.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,no=({car:e})=>{const t="not specified";return s.jsx(Jn,{children:s.jsxs(Zn,{children:[s.jsx(Qn,{children:s.jsx(Qe,{details:e.details})}),s.jsx(eo,{children:"Vehicle details"}),s.jsxs(to,{children:[s.jsxs(H,{children:[s.jsx(M,{children:"Form"}),s.jsx(M,{children:e.form||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Length"}),s.jsx(M,{children:e.length||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Width"}),s.jsx(M,{children:e.width||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Height"}),s.jsx(M,{children:e.height||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Tank"}),s.jsx(M,{children:e.tank||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Consumption"}),s.jsx(M,{children:e.consumption||t})]})]})]})})},oo=p.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,ro=p.li``,ao=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,so=p.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 15px 21px;

  font-size: ${e=>e.theme.fonts.bigSize};
  font-weight: ${e=>e.theme.fonts.bold};

  color: ${e=>e.theme.colors.red};
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.rewiewLogo};
`,io=p.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,lo=p.div``,co=p.p``,uo=({reviews:e})=>s.jsx("div",{children:s.jsx(oo,{children:e.map(t=>(console.log(t),s.jsxs(ro,{children:[s.jsxs(ao,{children:[s.jsx(so,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),s.jsxs(lo,{children:[s.jsx(io,{children:t.reviewer_name?t.reviewer_name:"anonim"}),s.jsx("div",{})]})]}),s.jsx(co,{children:t.comment})]},ce())))})}),fo={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Je.setAppElement("#root");const po=({modalIsOpen:e,closeModal:t,car:n})=>{const[r,a]=G.useState(!1);return G.useEffect(()=>{const l=document.body.style.overflow;if(e){const m=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${m}px`}else{const m=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,m*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),s.jsx(Je,{isOpen:e,onRequestClose:t,style:fo,contentLabel:"Car Modal",children:s.jsxs("div",{children:[s.jsx(Wn,{onClick:()=>t(),children:s.jsx(xe,{width:32,height:32,iconId:"close"})}),s.jsx(Hn,{children:n.name}),s.jsxs(qn,{children:[s.jsxs("p",{children:[n.rating," ",s.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:n.location})]}),s.jsxs(Bn,{children:["€",n.price,".00"]}),s.jsx(zn,{children:n.gallery.map(l=>s.jsx(Ue,{$bgImage:l},ce()))}),s.jsx(Kn,{children:n.description}),s.jsxs(Vn,{children:[s.jsx(De,{onClick:()=>a(!r),className:r?"":"isOpen",children:"Features"}),s.jsx(De,{onClick:()=>a(!r),className:r?"isOpen":"",children:"Reviews"})]}),r?s.jsx(uo,{reviews:n.reviews||[]}):s.jsx(no,{car:n})]})})},ho=e=>pt(bt).some(n=>n.car._id===e),yo=({car:e})=>{const[t,n]=G.useState(!1),r=ht();function a(){n(!0)}function l(){n(!1)}const m=b=>{r(mt(b))},i=ho(e._id);return s.jsxs(Ct,{children:[s.jsx(Ue,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),s.jsxs("div",{children:[s.jsxs(Ot,{children:[s.jsx(_e,{children:e.name}),s.jsxs(_t,{children:[s.jsxs(_e,{children:["€",e.price,".00"]}),s.jsx(St,{onClick:()=>m(e._id),children:s.jsx(xe,{width:24,height:24,iconId:i?"heart-red":"heart"})})]})]}),s.jsxs(Et,{children:[s.jsxs("p",{children:[e.rating," ",s.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:e.location})]}),s.jsx(Mt,{children:e.description}),s.jsx(Tt,{children:s.jsx(Qe,{details:e.details})}),s.jsx(Rt,{onClick:()=>a(),children:"Show more"})]}),s.jsx(po,{modalIsOpen:t,closeModal:l,car:e})]})};export{yo as C,xe as I,bt as a,vo as s};
