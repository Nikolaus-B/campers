import{c as ct,j as r,u,r as G,g as ut,a as dt,b as pt,h as ft,d as ht,e as mt,f as vt}from"./index-BUe3jmE7.js";const yt=e=>e.filter.inputValue,gt=e=>e.cars.cars,bt=ct([gt,yt],(e,t)=>e.filter(n=>{const{car:a}=n,s=a.name.toLowerCase(),l=a.location.toLowerCase();return s.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),xt="/campers/assets/sprite-B_6kXXJs.svg",de=({styles:e,width:t,height:n,iconId:a})=>r.jsx(r.Fragment,{children:r.jsx("svg",{style:e,width:t,height:n,children:r.jsx("use",{href:`${xt}#${a}`})})}),wt=u.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};
`,ke=u.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,Ct=u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Ot=u.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,_e=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,_t=u.div`
  display: flex;
  gap: 16px;
`;u.p``;const St=u.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,Et=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,jt=u.button`
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
`;var ve={exports:{}},W={},Ue={exports:{}},Mt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tt=Mt,Rt=Tt;function Ie(){}function We(){}We.resetWarningCache=Ie;var Pt=function(){function e(a,s,l,y,i,x){if(x!==Rt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:We,resetWarningCache:Ie};return n.PropTypes=n,n};Ue.exports=Pt();var He=Ue.exports,ye={exports:{}},P={},ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",s=/input|select|textarea|button|object|iframe/;function l(h,v){return v.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function y(h){var v=h.offsetWidth<=0&&h.offsetHeight<=0;if(v&&!h.innerHTML)return!0;try{var b=window.getComputedStyle(h),S=b.getPropertyValue("display");return v?S!==a&&l(h,b):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var v=h,b=h.getRootNode&&h.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function x(h,v){var b=h.nodeName.toLowerCase(),S=s.test(b)&&!h.disabled||b==="a"&&h.href||v;return S&&i(h)}function m(h){var v=h.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&x(h,!b)}function g(h){var v=[].slice.call(h.querySelectorAll("*"),0).reduce(function(b,S){return b.concat(S.shadowRoot?g(S.shadowRoot):[S])},[]);return v.filter(m)}e.exports=t.default})(ge,ge.exports);var qe=ge.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Ft;P.log=$t;P.handleBlur=Z;P.handleFocus=Q;P.markForFocusLater=Lt;P.returnFocus=kt;P.popWithoutFocus=Ut;P.setupScopedFocus=It;P.teardownScopedFocus=Wt;var Nt=qe,At=Dt(Nt);function Dt(e){return e&&e.__esModule?e:{default:e}}var z=[],B=null,be=!1;function Ft(){z=[]}function $t(){}function Z(){be=!0}function Q(){if(be){if(be=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,At.default)(B)[0]||B;e.focus()}},0)}}function Lt(){z.push(document.activeElement)}function kt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{z.length!==0&&(t=z.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Ut(){z.length>0&&z.pop()}function It(e){B=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function Wt(){B=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var xe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=qe,a=s(n);function s(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function y(i,x){var m=(0,a.default)(i);if(!m.length){x.preventDefault();return}var g=void 0,h=x.shiftKey,v=m[0],b=m[m.length-1],S=l();if(i===S){if(!h)return;g=b}if(b===S&&!h&&(g=v),v===S&&h&&(g=b),g){x.preventDefault(),g.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Y=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Y){var H=m.indexOf(S);if(H>-1&&(H+=h?-1:1),g=m[H],typeof g>"u"){x.preventDefault(),g=h?b:v,g.focus();return}x.preventDefault(),g.focus()}}e.exports=t.default})(xe,xe.exports);var Ht=xe.exports,N={},qt=function(){},Bt=qt,R={},Be={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Be);var zt=Be.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Vt=zt,Kt=Yt(Vt);function Yt(e){return e&&e.__esModule?e:{default:e}}var pe=Kt.default,Xt=pe.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=pe.canUseDOM?window.NodeList:{};R.canUseDOM=pe.canUseDOM;R.default=Xt;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=en;N.log=tn;N.assertNodeList=ze;N.setElement=nn;N.validateElement=we;N.hide=on;N.show=rn;N.documentNotReadyOrSSRTesting=an;var Jt=Bt,Gt=Qt(Jt),Zt=R;function Qt(e){return e&&e.__esModule?e:{default:e}}var M=null;function en(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function tn(){}function ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function nn(e){var t=e;if(typeof t=="string"&&Zt.canUseDOM){var n=document.querySelectorAll(t);ze(n,t),t=n}return M=t||M,M}function we(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Gt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function on(e){var t=!0,n=!1,a=void 0;try{for(var s=we(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var y=l.value;y.setAttribute("aria-hidden","true")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function rn(e){var t=!0,n=!1,a=void 0;try{for(var s=we(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var y=l.value;y.removeAttribute("aria-hidden")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function an(){M=null}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.resetState=sn;V.log=ln;var X={},J={};function Se(e,t){e.classList.remove(t)}function sn(){var e=document.getElementsByTagName("html")[0];for(var t in X)Se(e,X[t]);var n=document.body;for(var a in J)Se(n,J[a]);X={},J={}}function ln(){}var cn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},un=function(t,n){return t[n]&&(t[n]-=1),n},dn=function(t,n,a){a.forEach(function(s){cn(n,s),t.add(s)})},pn=function(t,n,a){a.forEach(function(s){un(n,s),n[s]===0&&t.remove(s)})};V.add=function(t,n){return dn(t.classList,t.nodeName.toLowerCase()=="html"?X:J,n.split(" "))};V.remove=function(t,n){return pn(t.classList,t.nodeName.toLowerCase()=="html"?X:J,n.split(" "))};var K={};Object.defineProperty(K,"__esModule",{value:!0});K.log=hn;K.resetState=mn;function fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ve=function e(){var t=this;fn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Ve;function hn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function mn(){ie=new Ve}K.default=ie;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=bn;Ce.log=xn;var vn=K,yn=gn(vn);function gn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,T=void 0,I=[];function bn(){for(var e=[_,T],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=T=null,I=[]}function xn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,T],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Ee(){I.length!==0&&I[I.length-1].focusContent()}function wn(e,t){!_&&!T&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ee),T=_.cloneNode(),T.addEventListener("focus",Ee)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(_.parentElement&&_.parentElement.removeChild(_),T.parentElement&&T.parentElement.removeChild(T))}yn.default.subscribe(wn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(p,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,c.key,c)}}return function(p,w,o){return w&&f(p.prototype,w),o&&f(p,o),p}}(),l=G,y=He,i=ne(y),x=P,m=fe(x),g=Ht,h=ne(g),v=N,b=fe(v),S=V,A=fe(S),Y=R,H=ne(Y),et=K,Oe=ne(et);function fe(f){if(f&&f.__esModule)return f;var p={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(p[w]=f[w]);return p.default=f,p}function ne(f){return f&&f.__esModule?f:{default:f}}function tt(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function nt(f,p){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:f}function ot(f,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);f.prototype=Object.create(p&&p.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(f,p):f.__proto__=p)}var he={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},rt=function(p){return p.code==="Tab"||p.keyCode===9},at=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,me=function(f){ot(p,f);function p(w){tt(this,p);var o=nt(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,$=c.bodyOpenClassName,L=c.parentSelector,re=L&&L().ownerDocument||document;$&&A.remove(re.body,$),C&&A.remove(re.getElementsByTagName("html")[0],C),E&&oe>0&&(oe-=1,oe===0&&b.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),Oe.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){rt(c)&&(0,h.default)(o.content,c),o.props.shouldCloseOnEsc&&at(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":a(O))==="object"?O:{base:he[c],afterOpen:he[c]+"--after-open",beforeClose:he[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return s(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,$=o.parentSelector,L=$&&$().ownerDocument||document;C&&A.add(L.body,C),E&&A.add(L.getElementsByTagName("html")[0],E),O&&(oe+=1,b.hide(c)),Oe.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,$=o.children,L=O?{}:C.content,re=E?{}:C.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},it=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(it,$);return this.props.overlayElement(st,lt)}}]),p}(l.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(H.default),i.default.instanceOf(Y.SafeHTMLCollection),i.default.instanceOf(Y.SafeNodeList),i.default.arrayOf(i.default.instanceOf(H.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=me,e.exports=t.default})(ye,ye.exports);var Cn=ye.exports;function Ke(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ye(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function Xe(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Ke.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;function On(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,s=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),n!==null||a!==null||s!==null){var l=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ke,t.componentWillReceiveProps=Ye),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Xe;var i=t.componentDidUpdate;t.componentDidUpdate=function(m,g,h){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,m,g,v)}}return e}const _n=Object.freeze(Object.defineProperty({__proto__:null,polyfill:On},Symbol.toStringTag,{value:"Module"})),Sn=ut(_n);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},En=function(){function e(t,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Je=G,le=ee(Je),jn=dt,ce=ee(jn),Mn=He,d=ee(Mn),Tn=Cn,Me=ee(Tn),Rn=N,Pn=An(Rn),F=R,Te=ee(F),Nn=Sn;function An(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function Dn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Re(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Fn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $n=W.portalClassName="ReactModalPortal",Ln=W.bodyOpenClassName="ReactModal__Body--open",k=F.canUseDOM&&ce.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Ne=function(){return k?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){Fn(t,e);function t(){var n,a,s,l;Dn(this,t);for(var y=arguments.length,i=Array(y),x=0;x<y;x++)i[x]=arguments[x];return l=(a=(s=Re(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),s),s.removePortal=function(){!k&&ce.default.unmountComponentAtNode(s.node);var m=ae(s.props.parentSelector);m&&m.contains(s.node)?m.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(m){s.portal=m},s.renderPortal=function(m){var g=Ne(),h=g(s,le.default.createElement(Me.default,je({defaultStyles:t.defaultStyles},m)),s.node);s.portalRef(h)},a),Re(s,l)}return En(t,[{key:"componentDidMount",value:function(){if(F.canUseDOM){k||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var a=ae(this.props.parentSelector);a.appendChild(this.node),!k&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=ae(a.parentSelector),l=ae(this.props.parentSelector);return{prevParent:s,nextParent:l}}},{key:"componentDidUpdate",value:function(a,s,l){if(F.canUseDOM){var y=this.props,i=y.isOpen,x=y.portalClassName;a.portalClassName!==x&&(this.node.className=x);var m=l.prevParent,g=l.nextParent;g!==m&&(m.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!k&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),l=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);l?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-s)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!k)return null;!this.node&&k&&(this.node=Pe("div"));var a=Ne();return a(le.default.createElement(Me.default,je({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Pn.setElement(a)}}]),t}(Je.Component);te.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Te.default),d.default.instanceOf(F.SafeHTMLCollection),d.default.instanceOf(F.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Te.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};te.defaultProps={isOpen:!1,portalClassName:$n,bodyOpenClassName:Ln,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return le.default.createElement("div",t,n)},contentElement:function(t,n){return le.default.createElement("div",t,n)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Nn.polyfill)(te);W.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=W,a=s(n);function s(l){return l&&l.__esModule?l:{default:l}}t.default=a.default,e.exports=t.default})(ve,ve.exports);var kn=ve.exports;const Ge=pt(kn);var U=256,Ze=[],Ae=256,se;for(;U--;)Ze[U]=(U+256).toString(16).substring(1);function ue(e){var t=0,n=e||11;if(!se||U+n>Ae*2)for(se="",U=0;t<Ae;t++)se+=Ze[Math.random()*256|0];return se.substring(U,U+++n)}const Un=u.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,In=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Wn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Hn=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,qn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Bn=u.p`
  color: ${e=>e.theme.colors.grey};
`,zn=u.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Vn=ft`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,De=u.button`
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
      animation: ${Vn} 0.3s ease-out forwards;
    }
  }
`,Kn=u.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,Yn=u.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,Qe=({details:e})=>{const t=(s,l)=>s==="beds"||s==="hob"||s==="airConditioner"?l:l===1?"":l,n=(s,l)=>s==="beds"?l===1?"bed":s:s==="airConditioner"?a(s):s,a=s=>{const l=s.charAt(0).toUpperCase()+s.slice(1,3),y=s.slice(3).toLowerCase();return l+" "+y};return r.jsx(r.Fragment,{children:Object.entries(e).map(([s,l])=>l===0?r.jsx("div",{style:{display:"none"}},ue()):r.jsxs(Kn,{children:[r.jsx(de,{width:20,height:20,iconId:s==="bathroom"?"toilet":s.toLowerCase()}),r.jsxs(Yn,{children:[t(s,l)," ",n(s,l)]})]},ue()))})},Xn=u.div``,Jn=u.div`
  width: 430px;
`,Gn=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,Zn=u.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,Qn=u.div`
  margin-top: 24px;
`,q=u.div`
  display: flex;
  justify-content: space-between;
`,j=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,eo=({car:e})=>{const t="not specified";return r.jsx(Xn,{children:r.jsxs(Jn,{children:[r.jsx(Gn,{children:r.jsx(Qe,{details:e.details})}),r.jsx(Zn,{children:"Vehicle details"}),r.jsxs(Qn,{children:[r.jsxs(q,{children:[r.jsx(j,{children:"Form"}),r.jsx(j,{children:e.form||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Length"}),r.jsx(j,{children:e.length||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Width"}),r.jsx(j,{children:e.width||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Height"}),r.jsx(j,{children:e.height||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Tank"}),r.jsx(j,{children:e.tank||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Consumption"}),r.jsx(j,{children:e.consumption||t})]})]})]})})},to=u.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,no=u.li``,oo=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,ro=u.p`
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
`,ao=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,so=u.div``,io=u.p``,lo=({reviews:e})=>r.jsx("div",{children:r.jsx(to,{children:e.map(t=>(console.log(t),r.jsxs(no,{children:[r.jsxs(oo,{children:[r.jsx(ro,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),r.jsxs(so,{children:[r.jsx(ao,{children:t.reviewer_name?t.reviewer_name:"anonim"}),r.jsx("div",{})]})]}),r.jsx(io,{children:t.comment})]},ue())))})}),co={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ge.setAppElement("#root");const uo=({modalIsOpen:e,closeModal:t,car:n})=>{const[a,s]=G.useState(!1);return G.useEffect(()=>{const l=document.body.style.overflow;if(e){const y=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${y}px`}else{const y=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,y*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),r.jsx(Ge,{isOpen:e,onRequestClose:t,style:co,contentLabel:"Car Modal",children:r.jsxs("div",{children:[r.jsx(Un,{onClick:()=>t(),children:r.jsx(de,{width:32,height:32,iconId:"close"})}),r.jsx(In,{children:n.name}),r.jsxs(Wn,{children:[r.jsxs("p",{children:[n.rating," ",r.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:n.location})]}),r.jsxs(Hn,{children:["€",n.price,".00"]}),r.jsx(qn,{children:n.gallery.map(l=>r.jsx(ke,{$bgImage:l},ue()))}),r.jsx(Bn,{children:n.description}),r.jsxs(zn,{children:[r.jsx(De,{onClick:()=>s(!a),className:a?"":"isOpen",children:"Features"}),r.jsx(De,{onClick:()=>s(!a),className:a?"isOpen":"",children:"Reviews"})]}),a?r.jsx(lo,{reviews:n.reviews||[]}):r.jsx(eo,{car:n})]})})},po=({car:e})=>{const[t,n]=G.useState(!1);function a(){n(!0)}function s(){n(!1)}return r.jsxs(wt,{children:[r.jsx(ke,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),r.jsxs("div",{children:[r.jsxs(Ct,{children:[r.jsx(_e,{children:e.name}),r.jsxs(Ot,{children:[r.jsxs(_e,{children:["€",e.price,".00"]}),r.jsx(de,{width:24,height:24,iconId:"heart"})]})]}),r.jsxs(_t,{children:[r.jsxs("p",{children:[e.rating," ",r.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:e.location})]}),r.jsx(St,{children:e.description}),r.jsx(Et,{children:r.jsx(Qe,{details:e.details})}),r.jsx(jt,{onClick:()=>a(),children:"Show more"})]}),r.jsx(uo,{modalIsOpen:t,closeModal:s,car:e})]})},fo=u.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,ho=u.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,mo=u.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.loadMoreBorderColor};
  border-radius: ${e=>e.theme.radius.xlg};

  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,vo=()=>{const e=ht(bt);return r.jsxs(fo,{children:[r.jsx(ho,{children:e.map(t=>r.jsx(po,{car:t.car},t.id))}),r.jsx(mo,{children:"Load more"})]})},yo=u.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;
  max-width: 128px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.sm};
  background-color: transparent;
  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${e=>e.theme.colors.red};
  }

  &.isSelected {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,go=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,D=({id:e,iconType:t,text:n})=>r.jsx(yo,{onClick:()=>console.log(n),children:r.jsxs(go,{children:[r.jsx(de,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),r.jsx("p",{children:n})]})}),bo=u.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,xo=u.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,wo=u.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,Fe=u.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,$e=u.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,Le=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,Co=u.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: ${e=>e.theme.radius.xlg};
  border: none;
  color: ${e=>e.theme.colors.buttonText};

  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`,Oo=()=>{const e=mt();return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(bo,{children:"Location"}),r.jsx(xo,{onChange:t=>e(vt(t.target.value)),name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),r.jsx(wo,{children:"Filters"}),r.jsxs("div",{children:[r.jsx(Fe,{children:"Vehicle equipment"}),r.jsx($e,{}),r.jsxs(Le,{children:[r.jsx(D,{id:"ac",iconType:"equipment",text:"AC"}),r.jsx(D,{id:"automatic",iconType:"equipment",text:"Automatic"}),r.jsx(D,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),r.jsx(D,{id:"tv",iconType:"equipment",text:"TV"}),r.jsx(D,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),r.jsx(Fe,{children:"Vehicle type"}),r.jsx($e,{}),r.jsxs(Le,{children:[r.jsx(D,{id:"van",iconType:"vehicle",text:"Van"}),r.jsx(D,{id:"fully-integrated",iconType:"vehicle",text:"Fully Integrated"}),r.jsx(D,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),r.jsx(Co,{children:"Search"})]})};function So(){return r.jsxs("section",{className:"container",children:[r.jsx(Oo,{}),r.jsx(vo,{})]})}export{So as default};
