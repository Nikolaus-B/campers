import{j as r,u,r as z,g as ct,a as ut,b as dt,h as pt,c as ft}from"./index-Dyv6yjtK.js";const ht=e=>e.cars.cars,mt="/campers/assets/sprite-B_6kXXJs.svg",de=({styles:e,width:t,height:n,iconId:a})=>r.jsx(r.Fragment,{children:r.jsx("svg",{style:e,width:t,height:n,children:r.jsx("use",{href:`${mt}#${a}`})})}),vt=u.li`
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
`,yt=u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,bt=u.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,_e=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,gt=u.div`
  display: flex;
  gap: 16px;
`;u.p``;const xt=u.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,wt=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,Ct=u.button`
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
`;var ve={exports:{}},W={},Ue={exports:{}},Ot="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_t=Ot,St=_t;function Ie(){}function We(){}We.resetWarningCache=Ie;var Et=function(){function e(a,s,l,y,i,x){if(x!==St){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:We,resetWarningCache:Ie};return n.PropTypes=n,n};Ue.exports=Et();var He=Ue.exports,ye={exports:{}},P={},be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",s=/input|select|textarea|button|object|iframe/;function l(h,v){return v.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function y(h){var v=h.offsetWidth<=0&&h.offsetHeight<=0;if(v&&!h.innerHTML)return!0;try{var g=window.getComputedStyle(h),S=g.getPropertyValue("display");return v?S!==a&&l(h,g):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var v=h,g=h.getRootNode&&h.getRootNode();v&&v!==document.body;){if(g&&v===g&&(v=g.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function x(h,v){var g=h.nodeName.toLowerCase(),S=s.test(g)&&!h.disabled||g==="a"&&h.href||v;return S&&i(h)}function m(h){var v=h.getAttribute("tabindex");v===null&&(v=void 0);var g=isNaN(v);return(g||v>=0)&&x(h,!g)}function b(h){var v=[].slice.call(h.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?b(S.shadowRoot):[S])},[]);return v.filter(m)}e.exports=t.default})(be,be.exports);var qe=be.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Rt;P.log=Pt;P.handleBlur=Z;P.handleFocus=Q;P.markForFocusLater=Nt;P.returnFocus=At;P.popWithoutFocus=Dt;P.setupScopedFocus=Ft;P.teardownScopedFocus=$t;var jt=qe,Mt=Tt(jt);function Tt(e){return e&&e.__esModule?e:{default:e}}var K=[],B=null,ge=!1;function Rt(){K=[]}function Pt(){}function Z(){ge=!0}function Q(){if(ge){if(ge=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,Mt.default)(B)[0]||B;e.focus()}},0)}}function Nt(){K.push(document.activeElement)}function At(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{K.length!==0&&(t=K.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Dt(){K.length>0&&K.pop()}function Ft(e){B=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function $t(){B=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var xe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=qe,a=s(n);function s(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function y(i,x){var m=(0,a.default)(i);if(!m.length){x.preventDefault();return}var b=void 0,h=x.shiftKey,v=m[0],g=m[m.length-1],S=l();if(i===S){if(!h)return;b=g}if(g===S&&!h&&(b=v),v===S&&h&&(b=g),b){x.preventDefault(),b.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),X=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(X){var H=m.indexOf(S);if(H>-1&&(H+=h?-1:1),b=m[H],typeof b>"u"){x.preventDefault(),b=h?g:v,b.focus();return}x.preventDefault(),b.focus()}}e.exports=t.default})(xe,xe.exports);var Lt=xe.exports,N={},kt=function(){},Ut=kt,R={},Be={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Be);var It=Be.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Wt=It,Ht=qt(Wt);function qt(e){return e&&e.__esModule?e:{default:e}}var pe=Ht.default,Bt=pe.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=pe.canUseDOM?window.NodeList:{};R.canUseDOM=pe.canUseDOM;R.default=Bt;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Xt;N.log=Jt;N.assertNodeList=ze;N.setElement=Gt;N.validateElement=we;N.hide=Zt;N.show=Qt;N.documentNotReadyOrSSRTesting=en;var zt=Ut,Kt=Yt(zt),Vt=R;function Yt(e){return e&&e.__esModule?e:{default:e}}var M=null;function Xt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function Jt(){}function ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Gt(e){var t=e;if(typeof t=="string"&&Vt.canUseDOM){var n=document.querySelectorAll(t);ze(n,t),t=n}return M=t||M,M}function we(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Kt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Zt(e){var t=!0,n=!1,a=void 0;try{for(var s=we(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var y=l.value;y.setAttribute("aria-hidden","true")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function Qt(e){var t=!0,n=!1,a=void 0;try{for(var s=we(e)[Symbol.iterator](),l;!(t=(l=s.next()).done);t=!0){var y=l.value;y.removeAttribute("aria-hidden")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function en(){M=null}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.resetState=tn;V.log=nn;var J={},G={};function Se(e,t){e.classList.remove(t)}function tn(){var e=document.getElementsByTagName("html")[0];for(var t in J)Se(e,J[t]);var n=document.body;for(var a in G)Se(n,G[a]);J={},G={}}function nn(){}var on=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},rn=function(t,n){return t[n]&&(t[n]-=1),n},an=function(t,n,a){a.forEach(function(s){on(n,s),t.add(s)})},sn=function(t,n,a){a.forEach(function(s){rn(n,s),n[s]===0&&t.remove(s)})};V.add=function(t,n){return an(t.classList,t.nodeName.toLowerCase()=="html"?J:G,n.split(" "))};V.remove=function(t,n){return sn(t.classList,t.nodeName.toLowerCase()=="html"?J:G,n.split(" "))};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.log=cn;Y.resetState=un;function ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ke=function e(){var t=this;ln(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Ke;function cn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function un(){ie=new Ke}Y.default=ie;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=hn;Ce.log=mn;var dn=Y,pn=fn(dn);function fn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,T=void 0,I=[];function hn(){for(var e=[_,T],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=T=null,I=[]}function mn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,T],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Ee(){I.length!==0&&I[I.length-1].focusContent()}function vn(e,t){!_&&!T&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ee),T=_.cloneNode(),T.addEventListener("focus",Ee)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(_.parentElement&&_.parentElement.removeChild(_),T.parentElement&&T.parentElement.removeChild(T))}pn.default.subscribe(vn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(p,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,c.key,c)}}return function(p,w,o){return w&&f(p.prototype,w),o&&f(p,o),p}}(),l=z,y=He,i=ne(y),x=P,m=fe(x),b=Lt,h=ne(b),v=N,g=fe(v),S=V,A=fe(S),X=R,H=ne(X),et=Y,Oe=ne(et);function fe(f){if(f&&f.__esModule)return f;var p={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(p[w]=f[w]);return p.default=f,p}function ne(f){return f&&f.__esModule?f:{default:f}}function tt(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function nt(f,p){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:f}function ot(f,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);f.prototype=Object.create(p&&p.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(f,p):f.__proto__=p)}var he={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},rt=function(p){return p.code==="Tab"||p.keyCode===9},at=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,me=function(f){ot(p,f);function p(w){tt(this,p);var o=nt(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,$=c.bodyOpenClassName,L=c.parentSelector,re=L&&L().ownerDocument||document;$&&A.remove(re.body,$),C&&A.remove(re.getElementsByTagName("html")[0],C),E&&oe>0&&(oe-=1,oe===0&&g.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),Oe.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){rt(c)&&(0,h.default)(o.content,c),o.props.shouldCloseOnEsc&&at(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":a(O))==="object"?O:{base:he[c],afterOpen:he[c]+"--after-open",beforeClose:he[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return s(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,$=o.parentSelector,L=$&&$().ownerDocument||document;C&&A.add(L.body,C),E&&A.add(L.getElementsByTagName("html")[0],E),O&&(oe+=1,g.hide(c)),Oe.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,$=o.children,L=O?{}:C.content,re=E?{}:C.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},it=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(it,$);return this.props.overlayElement(st,lt)}}]),p}(l.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(H.default),i.default.instanceOf(X.SafeHTMLCollection),i.default.instanceOf(X.SafeNodeList),i.default.arrayOf(i.default.instanceOf(H.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=me,e.exports=t.default})(ye,ye.exports);var yn=ye.exports;function Ve(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ye(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function Xe(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Ve.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;function bn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,s=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),n!==null||a!==null||s!==null){var l=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ve,t.componentWillReceiveProps=Ye),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Xe;var i=t.componentDidUpdate;t.componentDidUpdate=function(m,b,h){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,m,b,v)}}return e}const gn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:bn},Symbol.toStringTag,{value:"Module"})),xn=ct(gn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},wn=function(){function e(t,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Je=z,le=ee(Je),Cn=ut,ce=ee(Cn),On=He,d=ee(On),_n=yn,Me=ee(_n),Sn=N,En=Mn(Sn),F=R,Te=ee(F),jn=xn;function Mn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function Tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Re(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Rn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Pn=W.portalClassName="ReactModalPortal",Nn=W.bodyOpenClassName="ReactModal__Body--open",k=F.canUseDOM&&ce.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Ne=function(){return k?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){Rn(t,e);function t(){var n,a,s,l;Tn(this,t);for(var y=arguments.length,i=Array(y),x=0;x<y;x++)i[x]=arguments[x];return l=(a=(s=Re(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),s),s.removePortal=function(){!k&&ce.default.unmountComponentAtNode(s.node);var m=ae(s.props.parentSelector);m&&m.contains(s.node)?m.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(m){s.portal=m},s.renderPortal=function(m){var b=Ne(),h=b(s,le.default.createElement(Me.default,je({defaultStyles:t.defaultStyles},m)),s.node);s.portalRef(h)},a),Re(s,l)}return wn(t,[{key:"componentDidMount",value:function(){if(F.canUseDOM){k||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var a=ae(this.props.parentSelector);a.appendChild(this.node),!k&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=ae(a.parentSelector),l=ae(this.props.parentSelector);return{prevParent:s,nextParent:l}}},{key:"componentDidUpdate",value:function(a,s,l){if(F.canUseDOM){var y=this.props,i=y.isOpen,x=y.portalClassName;a.portalClassName!==x&&(this.node.className=x);var m=l.prevParent,b=l.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!i)&&!k&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),l=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);l?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-s)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!k)return null;!this.node&&k&&(this.node=Pe("div"));var a=Ne();return a(le.default.createElement(Me.default,je({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){En.setElement(a)}}]),t}(Je.Component);te.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Te.default),d.default.instanceOf(F.SafeHTMLCollection),d.default.instanceOf(F.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Te.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};te.defaultProps={isOpen:!1,portalClassName:Pn,bodyOpenClassName:Nn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return le.default.createElement("div",t,n)},contentElement:function(t,n){return le.default.createElement("div",t,n)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,jn.polyfill)(te);W.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=W,a=s(n);function s(l){return l&&l.__esModule?l:{default:l}}t.default=a.default,e.exports=t.default})(ve,ve.exports);var An=ve.exports;const Ge=dt(An);var U=256,Ze=[],Ae=256,se;for(;U--;)Ze[U]=(U+256).toString(16).substring(1);function ue(e){var t=0,n=e||11;if(!se||U+n>Ae*2)for(se="",U=0;t<Ae;t++)se+=Ze[Math.random()*256|0];return se.substring(U,U+++n)}const Dn=u.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,Fn=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,$n=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Ln=u.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,kn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Un=u.p`
  color: ${e=>e.theme.colors.grey};
`,In=u.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Wn=pt`
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
      animation: ${Wn} 0.3s ease-out forwards;
    }
  }
`,Hn=u.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,qn=u.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,Qe=({details:e})=>{const t=(s,l)=>s==="beds"||s==="hob"||s==="airConditioner"?l:l===1?"":l,n=(s,l)=>s==="beds"?l===1?"bed":s:s==="airConditioner"?a(s):s,a=s=>{const l=s.charAt(0).toUpperCase()+s.slice(1,3),y=s.slice(3).toLowerCase();return l+" "+y};return r.jsx(r.Fragment,{children:Object.entries(e).map(([s,l])=>l===0?r.jsx("div",{style:{display:"none"}},ue()):r.jsxs(Hn,{children:[r.jsx(de,{width:20,height:20,iconId:s==="bathroom"?"toilet":s.toLowerCase()}),r.jsxs(qn,{children:[t(s,l)," ",n(s,l)]})]},ue()))})},Bn=u.div``,zn=u.div`
  width: 430px;
`,Kn=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,Vn=u.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,Yn=u.div`
  margin-top: 24px;
`,q=u.div`
  display: flex;
  justify-content: space-between;
`,j=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,Xn=({car:e})=>{const t="not specified";return r.jsx(Bn,{children:r.jsxs(zn,{children:[r.jsx(Kn,{children:r.jsx(Qe,{details:e.details})}),r.jsx(Vn,{children:"Vehicle details"}),r.jsxs(Yn,{children:[r.jsxs(q,{children:[r.jsx(j,{children:"Form"}),r.jsx(j,{children:e.form||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Length"}),r.jsx(j,{children:e.length||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Width"}),r.jsx(j,{children:e.width||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Height"}),r.jsx(j,{children:e.height||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Tank"}),r.jsx(j,{children:e.tank||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Consumption"}),r.jsx(j,{children:e.consumption||t})]})]})]})})},Jn=u.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,Gn=u.li``,Zn=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Qn=u.p`
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
`,eo=u.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,to=u.div``,no=u.p``,oo=({reviews:e})=>r.jsx("div",{children:r.jsx(Jn,{children:e.map(t=>(console.log(t),r.jsxs(Gn,{children:[r.jsxs(Zn,{children:[r.jsx(Qn,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),r.jsxs(to,{children:[r.jsx(eo,{children:t.reviewer_name?t.reviewer_name:"anonim"}),r.jsx("div",{})]})]}),r.jsx(no,{children:t.comment})]},ue())))})}),ro={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ge.setAppElement("#root");const ao=({modalIsOpen:e,closeModal:t,car:n})=>{const[a,s]=z.useState(!1);return z.useEffect(()=>{const l=document.body.style.overflow;if(e){const y=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${y}px`}else{const y=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,y*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),r.jsx(Ge,{isOpen:e,onRequestClose:t,style:ro,contentLabel:"Car Modal",children:r.jsxs("div",{children:[r.jsx(Dn,{onClick:()=>t(),children:r.jsx(de,{width:32,height:32,iconId:"close"})}),r.jsx(Fn,{children:n.name}),r.jsxs($n,{children:[r.jsxs("p",{children:[n.rating," ",r.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:n.location})]}),r.jsxs(Ln,{children:["€",n.price,".00"]}),r.jsx(kn,{children:n.gallery.map(l=>r.jsx(ke,{$bgImage:l},ue()))}),r.jsx(Un,{children:n.description}),r.jsxs(In,{children:[r.jsx(De,{onClick:()=>s(!a),className:a?"":"isOpen",children:"Features"}),r.jsx(De,{onClick:()=>s(!a),className:a?"isOpen":"",children:"Reviews"})]}),a?r.jsx(oo,{reviews:n.reviews||[]}):r.jsx(Xn,{car:n})]})})},so=({car:e})=>{const[t,n]=z.useState(!1);function a(){n(!0)}function s(){n(!1)}return r.jsxs(vt,{children:[r.jsx(ke,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),r.jsxs("div",{children:[r.jsxs(yt,{children:[r.jsx(_e,{children:e.name}),r.jsxs(bt,{children:[r.jsxs(_e,{children:["€",e.price,".00"]}),r.jsx(de,{width:24,height:24,iconId:"heart"})]})]}),r.jsxs(gt,{children:[r.jsxs("p",{children:[e.rating," ",r.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:e.location})]}),r.jsx(xt,{children:e.description}),r.jsx(wt,{children:r.jsx(Qe,{details:e.details})}),r.jsx(Ct,{onClick:()=>a(),children:"Show more"})]}),r.jsx(ao,{modalIsOpen:t,closeModal:s,car:e})]})},io=u.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,lo=u.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,co=u.button`
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
`,uo=()=>{const e=ft(ht);return r.jsxs(io,{children:[r.jsx(lo,{children:e.map(t=>r.jsx(so,{car:t.car},t.id))}),r.jsx(co,{children:"Load more"})]})},po=u.button`
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
`,fo=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,D=({id:e,iconType:t,text:n})=>(z.useState(!1),r.jsx(po,{onClick:()=>console.log(n),children:r.jsxs(fo,{children:[r.jsx(de,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),r.jsx("p",{children:n})]})})),ho=u.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,mo=u.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,vo=u.p`
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
`,yo=u.button`
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
`,bo=()=>r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(ho,{children:"Location"}),r.jsx(mo,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),r.jsx(vo,{children:"Filters"}),r.jsxs("div",{children:[r.jsx(Fe,{children:"Vehicle equipment"}),r.jsx($e,{}),r.jsxs(Le,{children:[r.jsx(D,{id:"ac",iconType:"equipment",text:"AC"}),r.jsx(D,{id:"automatic",iconType:"equipment",text:"Automatic"}),r.jsx(D,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),r.jsx(D,{id:"tv",iconType:"equipment",text:"TV"}),r.jsx(D,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),r.jsx(Fe,{children:"Vehicle type"}),r.jsx($e,{}),r.jsxs(Le,{children:[r.jsx(D,{id:"van",iconType:"vehicle",text:"Van"}),r.jsx(D,{id:"fully-integrated",iconType:"vehicle",text:"Fully Integrated"}),r.jsx(D,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),r.jsx(yo,{children:"Search"})]});function xo(){return r.jsxs("section",{className:"container",children:[r.jsx(bo,{}),r.jsx(uo,{})]})}export{xo as default};
