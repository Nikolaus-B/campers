import{c as de,j as r,u,r as z,g as ht,a as mt,b as vt,h as yt,d as gt,e as Ue,t as bt,f as xt,i as wt}from"./index-wqV8pMBF.js";const Ct=e=>e.filter.inputValue,Ie=e=>e.filter.equipment,Ot=e=>e.filter.type,We=e=>e.cars.cars,He=de([We,Ct,Ie],(e,t)=>e.filter(n=>{const{car:a}=n,s=a.name.toLowerCase(),l=a.location.toLowerCase();return s.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),_t=de([We,Ie],(e,t)=>e.filter(({car:n})=>{const{transmission:a,details:s}=n,l=[a];return Object.entries(s).forEach(([m,i])=>{i!==0&&l.push(m.toLowerCase())}),t.every(m=>l.includes(m))})),St=de([He,Ot],(e,t)=>t.length===0?e:e.filter(n=>{const{car:a}=n,s=a.form.toLowerCase();return t.some(l=>s.includes(l.toLowerCase()))})),Et=de([He,_t,St],(e,t,n)=>e.filter(a=>t.includes(a)&&n.includes(a))),jt="/campers/assets/sprite-SW9Tt7Df.svg",pe=({styles:e,width:t,height:n,iconId:a})=>r.jsx(r.Fragment,{children:r.jsx("svg",{style:e,width:t,height:n,children:r.jsx("use",{href:`${jt}#${a}`})})}),Tt=u.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};
`,qe=u.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,Mt=u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Rt=u.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,Se=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,Ft=u.div`
  display: flex;
  gap: 16px;
`;u.p``;const Pt=u.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,Nt=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,At=u.button`
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
`;var ye={exports:{}},W={},Be={exports:{}},Dt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lt=Dt,$t=Lt;function ze(){}function Ke(){}Ke.resetWarningCache=ze;var kt=function(){function e(a,s,l,m,i,x){if(x!==$t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ke,resetWarningCache:ze};return n.PropTypes=n,n};Be.exports=kt();var Ve=Be.exports,ge={exports:{}},F={},be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",s=/input|select|textarea|button|object|iframe/;function l(h,y){return y.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function m(h){var y=h.offsetWidth<=0&&h.offsetHeight<=0;if(y&&!h.innerHTML)return!0;try{var b=window.getComputedStyle(h),S=b.getPropertyValue("display");return y?S!==a&&l(h,b):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var y=h,b=h.getRootNode&&h.getRootNode();y&&y!==document.body;){if(b&&y===b&&(y=b.host.parentNode),m(y))return!1;y=y.parentNode}return!0}function x(h,y){var b=h.nodeName.toLowerCase(),S=s.test(b)&&!h.disabled||b==="a"&&h.href||y;return S&&i(h)}function v(h){var y=h.getAttribute("tabindex");y===null&&(y=void 0);var b=isNaN(y);return(b||y>=0)&&x(h,!b)}function g(h){var y=[].slice.call(h.querySelectorAll("*"),0).reduce(function(b,S){return b.concat(S.shadowRoot?g(S.shadowRoot):[S])},[]);return y.filter(v)}e.exports=t.default})(be,be.exports);var Ye=be.exports;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=Ht;F.log=qt;F.handleBlur=Z;F.handleFocus=Q;F.markForFocusLater=Bt;F.returnFocus=zt;F.popWithoutFocus=Kt;F.setupScopedFocus=Vt;F.teardownScopedFocus=Yt;var Ut=Ye,It=Wt(Ut);function Wt(e){return e&&e.__esModule?e:{default:e}}var K=[],B=null,xe=!1;function Ht(){K=[]}function qt(){}function Z(){xe=!0}function Q(){if(xe){if(xe=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,It.default)(B)[0]||B;e.focus()}},0)}}function Bt(){K.push(document.activeElement)}function zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{K.length!==0&&(t=K.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Kt(){K.length>0&&K.pop()}function Vt(e){B=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function Yt(){B=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var n=Ye,a=s(n);function s(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function m(i,x){var v=(0,a.default)(i);if(!v.length){x.preventDefault();return}var g=void 0,h=x.shiftKey,y=v[0],b=v[v.length-1],S=l();if(i===S){if(!h)return;g=b}if(b===S&&!h&&(g=y),y===S&&h&&(g=b),g){x.preventDefault(),g.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),X=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(X){var H=v.indexOf(S);if(H>-1&&(H+=h?-1:1),g=v[H],typeof g>"u"){x.preventDefault(),g=h?b:y,g.focus();return}x.preventDefault(),g.focus()}}e.exports=t.default})(we,we.exports);var Xt=we.exports,P={},Gt=function(){},Jt=Gt,R={},Xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Xe);var Zt=Xe.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Qt=Zt,en=tn(Qt);function tn(e){return e&&e.__esModule?e:{default:e}}var fe=en.default,nn=fe.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=fe.canUseDOM?window.NodeList:{};R.canUseDOM=fe.canUseDOM;R.default=nn;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=ln;P.log=cn;P.assertNodeList=Ge;P.setElement=un;P.validateElement=Ce;P.hide=dn;P.show=pn;P.documentNotReadyOrSSRTesting=fn;var on=Jt,rn=sn(on),an=R;function sn(e){return e&&e.__esModule?e:{default:e}}var T=null;function ln(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function cn(){}function Ge(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function un(e){var t=e;if(typeof t=="string"&&an.canUseDOM){var n=document.querySelectorAll(t);Ge(n,t),t=n}return T=t||T,T}function Ce(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,rn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function dn(e){var t=!0,n=!1,a=void 0;try{for(var s=Ce(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var m=l.value;m.setAttribute("aria-hidden","true")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function pn(e){var t=!0,n=!1,a=void 0;try{for(var s=Ce(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var m=l.value;m.removeAttribute("aria-hidden")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function fn(){T=null}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.resetState=hn;V.log=mn;var G={},J={};function Ee(e,t){e.classList.remove(t)}function hn(){var e=document.getElementsByTagName("html")[0];for(var t in G)Ee(e,G[t]);var n=document.body;for(var a in J)Ee(n,J[a]);G={},J={}}function mn(){}var vn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},yn=function(t,n){return t[n]&&(t[n]-=1),n},gn=function(t,n,a){a.forEach(function(s){vn(n,s),t.add(s)})},bn=function(t,n,a){a.forEach(function(s){yn(n,s),n[s]===0&&t.remove(s)})};V.add=function(t,n){return gn(t.classList,t.nodeName.toLowerCase()=="html"?G:J,n.split(" "))};V.remove=function(t,n){return bn(t.classList,t.nodeName.toLowerCase()=="html"?G:J,n.split(" "))};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.log=wn;Y.resetState=Cn;function xn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Je=function e(){var t=this;xn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Je;function wn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Cn(){ie=new Je}Y.default=ie;var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.resetState=En;Oe.log=jn;var On=Y,_n=Sn(On);function Sn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,M=void 0,I=[];function En(){for(var e=[_,M],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=M=null,I=[]}function jn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,M],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function je(){I.length!==0&&I[I.length-1].focusContent()}function Tn(e,t){!_&&!M&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",je),M=_.cloneNode(),M.addEventListener("focus",je)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(_.parentElement&&_.parentElement.removeChild(_),M.parentElement&&M.parentElement.removeChild(M))}_n.default.subscribe(Tn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(p,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,c.key,c)}}return function(p,w,o){return w&&f(p.prototype,w),o&&f(p,o),p}}(),l=z,m=Ve,i=ne(m),x=F,v=he(x),g=Xt,h=ne(g),y=P,b=he(y),S=V,N=he(S),X=R,H=ne(X),at=Y,_e=ne(at);function he(f){if(f&&f.__esModule)return f;var p={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(p[w]=f[w]);return p.default=f,p}function ne(f){return f&&f.__esModule?f:{default:f}}function st(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function it(f,p){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:f}function lt(f,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);f.prototype=Object.create(p&&p.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(f,p):f.__proto__=p)}var me={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ct=function(p){return p.code==="Tab"||p.keyCode===9},ut=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,ve=function(f){lt(p,f);function p(w){st(this,p);var o=it(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,L=c.bodyOpenClassName,$=c.parentSelector,re=$&&$().ownerDocument||document;L&&N.remove(re.body,L),C&&N.remove(re.getElementsByTagName("html")[0],C),E&&oe>0&&(oe-=1,oe===0&&b.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(v.returnFocus(o.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),_e.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(v.setupScopedFocus(o.node),v.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){ct(c)&&(0,h.default)(o.content,c),o.props.shouldCloseOnEsc&&ut(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":a(O))==="object"?O:{base:me[c],afterOpen:me[c]+"--after-open",beforeClose:me[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return s(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,L=o.parentSelector,$=L&&L().ownerDocument||document;C&&N.add($.body,C),E&&N.add($.getElementsByTagName("html")[0],E),O&&(oe+=1,b.hide(c)),_e.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,L=o.children,$=O?{}:C.content,re=E?{}:C.overlay;if(this.shouldBeClosed())return null;var dt={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},pt=n({id:c,ref:this.setContentRef,style:n({},$,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ft=this.props.contentElement(pt,L);return this.props.overlayElement(dt,ft)}}]),p}(l.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(H.default),i.default.instanceOf(X.SafeHTMLCollection),i.default.instanceOf(X.SafeNodeList),i.default.arrayOf(i.default.instanceOf(H.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=ve,e.exports=t.default})(ge,ge.exports);var Mn=ge.exports;function Ze(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Qe(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function et(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Ze.__suppressDeprecationWarning=!0;Qe.__suppressDeprecationWarning=!0;et.__suppressDeprecationWarning=!0;function Rn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,s=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),n!==null||a!==null||s!==null){var l=e.displayName||e.name,m=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+m+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ze,t.componentWillReceiveProps=Qe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=et;var i=t.componentDidUpdate;t.componentDidUpdate=function(v,g,h){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,v,g,y)}}return e}const Fn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Rn},Symbol.toStringTag,{value:"Module"})),Pn=ht(Fn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Nn=function(){function e(t,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),tt=z,le=ee(tt),An=mt,ce=ee(An),Dn=Ve,d=ee(Dn),Ln=Mn,Me=ee(Ln),$n=P,kn=In($n),D=R,Re=ee(D),Un=Pn;function In(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function Wn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Hn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var qn=W.portalClassName="ReactModalPortal",Bn=W.bodyOpenClassName="ReactModal__Body--open",k=D.canUseDOM&&ce.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Ne=function(){return k?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){Hn(t,e);function t(){var n,a,s,l;Wn(this,t);for(var m=arguments.length,i=Array(m),x=0;x<m;x++)i[x]=arguments[x];return l=(a=(s=Fe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),s),s.removePortal=function(){!k&&ce.default.unmountComponentAtNode(s.node);var v=ae(s.props.parentSelector);v&&v.contains(s.node)?v.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(v){s.portal=v},s.renderPortal=function(v){var g=Ne(),h=g(s,le.default.createElement(Me.default,Te({defaultStyles:t.defaultStyles},v)),s.node);s.portalRef(h)},a),Fe(s,l)}return Nn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){k||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var a=ae(this.props.parentSelector);a.appendChild(this.node),!k&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=ae(a.parentSelector),l=ae(this.props.parentSelector);return{prevParent:s,nextParent:l}}},{key:"componentDidUpdate",value:function(a,s,l){if(D.canUseDOM){var m=this.props,i=m.isOpen,x=m.portalClassName;a.portalClassName!==x&&(this.node.className=x);var v=l.prevParent,g=l.nextParent;g!==v&&(v.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!k&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),l=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);l?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-s)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!k)return null;!this.node&&k&&(this.node=Pe("div"));var a=Ne();return a(le.default.createElement(Me.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){kn.setElement(a)}}]),t}(tt.Component);te.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Re.default),d.default.instanceOf(D.SafeHTMLCollection),d.default.instanceOf(D.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Re.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};te.defaultProps={isOpen:!1,portalClassName:qn,bodyOpenClassName:Bn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return le.default.createElement("div",t,n)},contentElement:function(t,n){return le.default.createElement("div",t,n)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Un.polyfill)(te);W.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=W,a=s(n);function s(l){return l&&l.__esModule?l:{default:l}}t.default=a.default,e.exports=t.default})(ye,ye.exports);var zn=ye.exports;const nt=vt(zn);var U=256,ot=[],Ae=256,se;for(;U--;)ot[U]=(U+256).toString(16).substring(1);function ue(e){var t=0,n=e||11;if(!se||U+n>Ae*2)for(se="",U=0;t<Ae;t++)se+=ot[Math.random()*256|0];return se.substring(U,U+++n)}const Kn=u.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,Vn=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Yn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Xn=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Gn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Jn=u.p`
  color: ${e=>e.theme.colors.grey};
`,Zn=u.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Qn=yt`
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
      animation: ${Qn} 0.3s ease-out forwards;
    }
  }
`,eo=u.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,to=u.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,rt=({details:e})=>{const t=(s,l)=>s==="beds"||s==="hob"||s==="airConditioner"?l:l===1?"":l,n=(s,l)=>s==="beds"?l===1?"bed":s:s==="airConditioner"?a(s):s,a=s=>{const l=s.charAt(0).toUpperCase()+s.slice(1,3),m=s.slice(3).toLowerCase();return l+" "+m};return r.jsx(r.Fragment,{children:Object.entries(e).map(([s,l])=>l===0?r.jsx("div",{style:{display:"none"}},ue()):r.jsxs(eo,{children:[r.jsx(pe,{width:20,height:20,iconId:s==="bathroom"?"toilet":s.toLowerCase()}),r.jsxs(to,{children:[t(s,l)," ",n(s,l)]})]},ue()))})},no=u.div``,oo=u.div`
  width: 430px;
`,ro=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,ao=u.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,so=u.div`
  margin-top: 24px;
`,q=u.div`
  display: flex;
  justify-content: space-between;
`,j=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,io=({car:e})=>{const t="not specified";return r.jsx(no,{children:r.jsxs(oo,{children:[r.jsx(ro,{children:r.jsx(rt,{details:e.details})}),r.jsx(ao,{children:"Vehicle details"}),r.jsxs(so,{children:[r.jsxs(q,{children:[r.jsx(j,{children:"Form"}),r.jsx(j,{children:e.form||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Length"}),r.jsx(j,{children:e.length||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Width"}),r.jsx(j,{children:e.width||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Height"}),r.jsx(j,{children:e.height||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Tank"}),r.jsx(j,{children:e.tank||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Consumption"}),r.jsx(j,{children:e.consumption||t})]})]})]})})},lo=u.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,co=u.li``,uo=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,po=u.p`
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
`,fo=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,ho=u.div``,mo=u.p``,vo=({reviews:e})=>r.jsx("div",{children:r.jsx(lo,{children:e.map(t=>(console.log(t),r.jsxs(co,{children:[r.jsxs(uo,{children:[r.jsx(po,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),r.jsxs(ho,{children:[r.jsx(fo,{children:t.reviewer_name?t.reviewer_name:"anonim"}),r.jsx("div",{})]})]}),r.jsx(mo,{children:t.comment})]},ue())))})}),yo={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};nt.setAppElement("#root");const go=({modalIsOpen:e,closeModal:t,car:n})=>{const[a,s]=z.useState(!1);return z.useEffect(()=>{const l=document.body.style.overflow;if(e){const m=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${m}px`}else{const m=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,m*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),r.jsx(nt,{isOpen:e,onRequestClose:t,style:yo,contentLabel:"Car Modal",children:r.jsxs("div",{children:[r.jsx(Kn,{onClick:()=>t(),children:r.jsx(pe,{width:32,height:32,iconId:"close"})}),r.jsx(Vn,{children:n.name}),r.jsxs(Yn,{children:[r.jsxs("p",{children:[n.rating," ",r.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:n.location})]}),r.jsxs(Xn,{children:["€",n.price,".00"]}),r.jsx(Gn,{children:n.gallery.map(l=>r.jsx(qe,{$bgImage:l},ue()))}),r.jsx(Jn,{children:n.description}),r.jsxs(Zn,{children:[r.jsx(De,{onClick:()=>s(!a),className:a?"":"isOpen",children:"Features"}),r.jsx(De,{onClick:()=>s(!a),className:a?"isOpen":"",children:"Reviews"})]}),a?r.jsx(vo,{reviews:n.reviews||[]}):r.jsx(io,{car:n})]})})},bo=({car:e})=>{const[t,n]=z.useState(!1);function a(){n(!0)}function s(){n(!1)}return r.jsxs(Tt,{children:[r.jsx(qe,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),r.jsxs("div",{children:[r.jsxs(Mt,{children:[r.jsx(Se,{children:e.name}),r.jsxs(Rt,{children:[r.jsxs(Se,{children:["€",e.price,".00"]}),r.jsx(pe,{width:24,height:24,iconId:"heart"})]})]}),r.jsxs(Ft,{children:[r.jsxs("p",{children:[e.rating," ",r.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:e.location})]}),r.jsx(Pt,{children:e.description}),r.jsx(Nt,{children:r.jsx(rt,{details:e.details})}),r.jsx(At,{onClick:()=>a(),children:"Show more"})]}),r.jsx(go,{modalIsOpen:t,closeModal:s,car:e})]})},xo=u.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,wo=u.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Co=u.button`
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
`,Oo=()=>{const e=gt(Et);return r.jsxs(xo,{children:[r.jsx(wo,{children:e.map(t=>r.jsx(bo,{car:t.car},t.id))}),r.jsx(Co,{children:"Load more"})]})},_o=u.button`
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

  &.isSelected {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,So=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,A=({id:e,iconType:t,text:n})=>{const a=Ue(),[s,l]=z.useState(!1),m=()=>{a((t==="equipment"?bt:xt)(e.toLowerCase())),l(!s)};return r.jsx(_o,{className:s?"isSelected":"",onClick:()=>m(),children:r.jsxs(So,{children:[r.jsx(pe,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),r.jsx("p",{children:n})]})})},Eo=u.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,jo=u.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,To=u.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,Le=u.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,$e=u.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,ke=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,Mo=u.button`
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
`,Ro=()=>{const e=Ue();return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(Eo,{children:"Location"}),r.jsx(jo,{onChange:t=>e(wt(t.target.value)),name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),r.jsx(To,{children:"Filters"}),r.jsxs("div",{children:[r.jsx(Le,{children:"Vehicle equipment"}),r.jsx($e,{}),r.jsxs(ke,{children:[r.jsx(A,{id:"airConditioner",iconType:"equipment",text:"AC"}),r.jsx(A,{id:"automatic",iconType:"equipment",text:"Automatic"}),r.jsx(A,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),r.jsx(A,{id:"tv",iconType:"equipment",text:"TV"}),r.jsx(A,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),r.jsx(Le,{children:"Vehicle type"}),r.jsx($e,{}),r.jsxs(ke,{children:[r.jsx(A,{id:"paneltruck",iconType:"vehicle",text:"Van"}),r.jsx(A,{id:"fullyintegrated",iconType:"vehicle",text:"Fully Integrated"}),r.jsx(A,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),r.jsx(Mo,{children:"Search"})]})};function Po(){return r.jsxs("section",{className:"container",children:[r.jsx(Ro,{}),r.jsx(Oo,{})]})}export{Po as default};
