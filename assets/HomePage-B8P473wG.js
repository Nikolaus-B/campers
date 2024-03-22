import{j as r,u as c,r as J,g as ct,a as ut,b as dt,h as pt,c as ft}from"./index-aqlJghTg.js";const ht=e=>e.cars.cars,mt="/campers/assets/sprite-BTht6AGD.svg",Le=({styles:e,width:t,height:n,iconId:a})=>r.jsx(r.Fragment,{children:r.jsx("svg",{style:e,width:t,height:n,children:r.jsx("use",{href:`${mt}#${a}`})})}),vt=c.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};
`,Ue=c.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,yt=c.div`
  display: flex;
  justify-content: space-between;
`,gt=c.div`
  display: flex;
  gap: 10px;
`,Ce=c.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
`,bt=c.div`
  display: flex;
  gap: 16px;
`;c.p``;const xt=c.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${e=>e.theme.colors.grey};
`,wt=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`,Ot=c.button`
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
`;var me={exports:{}},W={},ke={exports:{}},Ct="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_t=Ct,St=_t;function Ie(){}function We(){}We.resetWarningCache=Ie;var Et=function(){function e(a,s,f,y,i,x){if(x!==St){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:We,resetWarningCache:Ie};return n.PropTypes=n,n};ke.exports=Et();var He=ke.exports,ve={exports:{}},P={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",s=/input|select|textarea|button|object|iframe/;function f(h,v){return v.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function y(h){var v=h.offsetWidth<=0&&h.offsetHeight<=0;if(v&&!h.innerHTML)return!0;try{var b=window.getComputedStyle(h),S=b.getPropertyValue("display");return v?S!==a&&f(h,b):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var v=h,b=h.getRootNode&&h.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function x(h,v){var b=h.nodeName.toLowerCase(),S=s.test(b)&&!h.disabled||b==="a"&&h.href||v;return S&&i(h)}function m(h){var v=h.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&x(h,!b)}function g(h){var v=[].slice.call(h.querySelectorAll("*"),0).reduce(function(b,S){return b.concat(S.shadowRoot?g(S.shadowRoot):[S])},[]);return v.filter(m)}e.exports=t.default})(ye,ye.exports);var qe=ye.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Rt;P.log=Pt;P.handleBlur=Z;P.handleFocus=Q;P.markForFocusLater=Nt;P.returnFocus=At;P.popWithoutFocus=Dt;P.setupScopedFocus=Ft;P.teardownScopedFocus=$t;var jt=qe,Mt=Tt(jt);function Tt(e){return e&&e.__esModule?e:{default:e}}var z=[],B=null,ge=!1;function Rt(){z=[]}function Pt(){}function Z(){ge=!0}function Q(){if(ge){if(ge=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,Mt.default)(B)[0]||B;e.focus()}},0)}}function Nt(){z.push(document.activeElement)}function At(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{z.length!==0&&(t=z.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Dt(){z.length>0&&z.pop()}function Ft(e){B=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function $t(){B=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=qe,a=s(n);function s(i){return i&&i.__esModule?i:{default:i}}function f(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?f(i.activeElement.shadowRoot):i.activeElement}function y(i,x){var m=(0,a.default)(i);if(!m.length){x.preventDefault();return}var g=void 0,h=x.shiftKey,v=m[0],b=m[m.length-1],S=f();if(i===S){if(!h)return;g=b}if(b===S&&!h&&(g=v),v===S&&h&&(g=b),g){x.preventDefault(),g.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Y=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Y){var H=m.indexOf(S);if(H>-1&&(H+=h?-1:1),g=m[H],typeof g>"u"){x.preventDefault(),g=h?b:v,g.focus();return}x.preventDefault(),g.focus()}}e.exports=t.default})(be,be.exports);var Lt=be.exports,N={},Ut=function(){},kt=Ut,R={},Be={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Be);var It=Be.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Wt=It,Ht=qt(Wt);function qt(e){return e&&e.__esModule?e:{default:e}}var de=Ht.default,Bt=de.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=de.canUseDOM?window.NodeList:{};R.canUseDOM=de.canUseDOM;R.default=Bt;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Xt;N.log=Gt;N.assertNodeList=ze;N.setElement=Jt;N.validateElement=xe;N.hide=Zt;N.show=Qt;N.documentNotReadyOrSSRTesting=en;var zt=kt,Kt=Yt(zt),Vt=R;function Yt(e){return e&&e.__esModule?e:{default:e}}var M=null;function Xt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function Gt(){}function ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Jt(e){var t=e;if(typeof t=="string"&&Vt.canUseDOM){var n=document.querySelectorAll(t);ze(n,t),t=n}return M=t||M,M}function xe(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Kt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Zt(e){var t=!0,n=!1,a=void 0;try{for(var s=xe(e)[Symbol.iterator](),f;!(t=(f=s.next()).done);t=!0){var y=f.value;y.setAttribute("aria-hidden","true")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function Qt(e){var t=!0,n=!1,a=void 0;try{for(var s=xe(e)[Symbol.iterator](),f;!(t=(f=s.next()).done);t=!0){var y=f.value;y.removeAttribute("aria-hidden")}}catch(i){n=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(n)throw a}}}function en(){M=null}var K={};Object.defineProperty(K,"__esModule",{value:!0});K.resetState=tn;K.log=nn;var X={},G={};function _e(e,t){e.classList.remove(t)}function tn(){var e=document.getElementsByTagName("html")[0];for(var t in X)_e(e,X[t]);var n=document.body;for(var a in G)_e(n,G[a]);X={},G={}}function nn(){}var on=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},rn=function(t,n){return t[n]&&(t[n]-=1),n},an=function(t,n,a){a.forEach(function(s){on(n,s),t.add(s)})},sn=function(t,n,a){a.forEach(function(s){rn(n,s),n[s]===0&&t.remove(s)})};K.add=function(t,n){return an(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};K.remove=function(t,n){return sn(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};var V={};Object.defineProperty(V,"__esModule",{value:!0});V.log=cn;V.resetState=un;function ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ke=function e(){var t=this;ln(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Ke;function cn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function un(){ie=new Ke}V.default=ie;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=hn;we.log=mn;var dn=V,pn=fn(dn);function fn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,T=void 0,I=[];function hn(){for(var e=[_,T],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=T=null,I=[]}function mn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,T],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Se(){I.length!==0&&I[I.length-1].focusContent()}function vn(e,t){!_&&!T&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Se),T=_.cloneNode(),T.addEventListener("focus",Se)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(_.parentElement&&_.parentElement.removeChild(_),T.parentElement&&T.parentElement.removeChild(T))}pn.default.subscribe(vn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(p[o]=w[o])}return p},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s=function(){function p(d,w){for(var o=0;o<w.length;o++){var l=w[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(d,l.key,l)}}return function(d,w,o){return w&&p(d.prototype,w),o&&p(d,o),d}}(),f=J,y=He,i=ne(y),x=P,m=pe(x),g=Lt,h=ne(g),v=N,b=pe(v),S=K,A=pe(S),Y=R,H=ne(Y),et=V,Oe=ne(et);function pe(p){if(p&&p.__esModule)return p;var d={};if(p!=null)for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(d[w]=p[w]);return d.default=p,d}function ne(p){return p&&p.__esModule?p:{default:p}}function tt(p,d){if(!(p instanceof d))throw new TypeError("Cannot call a class as a function")}function nt(p,d){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:p}function ot(p,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);p.prototype=Object.create(d&&d.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(p,d):p.__proto__=d)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},rt=function(d){return d.code==="Tab"||d.keyCode===9},at=function(d){return d.code==="Escape"||d.keyCode===27},oe=0,he=function(p){ot(d,p);function d(w){tt(this,d);var o=nt(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(l){o.overlay=l,o.props.overlayRef&&o.props.overlayRef(l)},o.setContentRef=function(l){o.content=l,o.props.contentRef&&o.props.contentRef(l)},o.afterClose=function(){var l=o.props,C=l.appElement,E=l.ariaHideApp,O=l.htmlOpenClassName,$=l.bodyOpenClassName,L=l.parentSelector,re=L&&L().ownerDocument||document;$&&A.remove(re.body,$),O&&A.remove(re.getElementsByTagName("html")[0],O),E&&oe>0&&(oe-=1,oe===0&&b.show(C)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),Oe.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var l=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:l},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(l){rt(l)&&(0,h.default)(o.content,l),o.props.shouldCloseOnEsc&&at(l)&&(l.stopPropagation(),o.requestClose(l))},o.handleOverlayOnClick=function(l){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(l):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(l){!o.props.shouldCloseOnOverlayClick&&l.target==o.overlay&&l.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(l){return o.ownerHandlesClose()&&o.props.onRequestClose(l)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(l,C){var E=(typeof C>"u"?"undefined":a(C))==="object"?C:{base:fe[l],afterOpen:fe[l]+"--after-open",beforeClose:fe[l]+"--before-close"},O=E.base;return o.state.afterOpen&&(O=O+" "+E.afterOpen),o.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},o.attributesFromObject=function(l,C){return Object.keys(C).reduce(function(E,O){return E[l+"-"+O]=C[O],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return s(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,l){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,l=o.appElement,C=o.ariaHideApp,E=o.htmlOpenClassName,O=o.bodyOpenClassName,$=o.parentSelector,L=$&&$().ownerDocument||document;O&&A.add(L.body,O),E&&A.add(L.getElementsByTagName("html")[0],E),C&&(oe+=1,b.hide(l)),Oe.default.register(this)}},{key:"render",value:function(){var o=this.props,l=o.id,C=o.className,E=o.overlayClassName,O=o.defaultStyles,$=o.children,L=C?{}:O.content,re=E?{}:O.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},it=n({id:l,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(it,$);return this.props.overlayElement(st,lt)}}]),d}(f.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(H.default),i.default.instanceOf(Y.SafeHTMLCollection),i.default.instanceOf(Y.SafeNodeList),i.default.arrayOf(i.default.instanceOf(H.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=he,e.exports=t.default})(ve,ve.exports);var yn=ve.exports;function Ve(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ye(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function Xe(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Ve.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;function gn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,s=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),n!==null||a!==null||s!==null){var f=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+f+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ve,t.componentWillReceiveProps=Ye),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Xe;var i=t.componentDidUpdate;t.componentDidUpdate=function(m,g,h){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,m,g,v)}}return e}const bn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:gn},Symbol.toStringTag,{value:"Module"})),xn=ct(bn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},wn=function(){function e(t,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Ge=J,le=ee(Ge),On=ut,ce=ee(On),Cn=He,u=ee(Cn),_n=yn,je=ee(_n),Sn=N,En=Mn(Sn),F=R,Me=ee(F),jn=xn;function Mn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function Tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Rn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Pn=W.portalClassName="ReactModalPortal",Nn=W.bodyOpenClassName="ReactModal__Body--open",U=F.canUseDOM&&ce.default.createPortal!==void 0,Re=function(t){return document.createElement(t)},Pe=function(){return U?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){Rn(t,e);function t(){var n,a,s,f;Tn(this,t);for(var y=arguments.length,i=Array(y),x=0;x<y;x++)i[x]=arguments[x];return f=(a=(s=Te(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),s),s.removePortal=function(){!U&&ce.default.unmountComponentAtNode(s.node);var m=ae(s.props.parentSelector);m&&m.contains(s.node)?m.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(m){s.portal=m},s.renderPortal=function(m){var g=Pe(),h=g(s,le.default.createElement(je.default,Ee({defaultStyles:t.defaultStyles},m)),s.node);s.portalRef(h)},a),Te(s,f)}return wn(t,[{key:"componentDidMount",value:function(){if(F.canUseDOM){U||(this.node=Re("div")),this.node.className=this.props.portalClassName;var a=ae(this.props.parentSelector);a.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=ae(a.parentSelector),f=ae(this.props.parentSelector);return{prevParent:s,nextParent:f}}},{key:"componentDidUpdate",value:function(a,s,f){if(F.canUseDOM){var y=this.props,i=y.isOpen,x=y.portalClassName;a.portalClassName!==x&&(this.node.className=x);var m=f.prevParent,g=f.nextParent;g!==m&&(m.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),f=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);f?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,f-s)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!U)return null;!this.node&&U&&(this.node=Re("div"));var a=Pe();return a(le.default.createElement(je.default,Ee({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){En.setElement(a)}}]),t}(Ge.Component);te.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Me.default),u.default.instanceOf(F.SafeHTMLCollection),u.default.instanceOf(F.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Me.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};te.defaultProps={isOpen:!1,portalClassName:Pn,bodyOpenClassName:Nn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return le.default.createElement("div",t,n)},contentElement:function(t,n){return le.default.createElement("div",t,n)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,jn.polyfill)(te);W.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=W,a=s(n);function s(f){return f&&f.__esModule?f:{default:f}}t.default=a.default,e.exports=t.default})(me,me.exports);var An=me.exports;const Je=dt(An);var k=256,Ze=[],Ne=256,se;for(;k--;)Ze[k]=(k+256).toString(16).substring(1);function ue(e){var t=0,n=e||11;if(!se||k+n>Ne*2)for(se="",k=0;t<Ne;t++)se+=Ze[Math.random()*256|0];return se.substring(k,k+++n)}const Dn=c.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Fn=c.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,$n=c.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Ln=c.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Un=c.p`
  color: ${e=>e.theme.colors.grey};
`,kn=c.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,In=pt`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,Ae=c.button`
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
      animation: ${In} 0.3s ease-out forwards;
    }
  }
`,Wn=c.div`
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,Hn=c.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,Qe=({details:e})=>{const t=(a,s)=>a==="beds"||a==="hob"||a==="airConditioner"?s:s===1?"":s,n=a=>{const s=a.charAt(0).toUpperCase()+a.slice(1,3),f=a.slice(3).toLowerCase();return s+" "+f};return r.jsx(r.Fragment,{children:Object.entries(e).map(([a,s])=>s===0?r.jsx("div",{style:{display:"none"}},ue()):r.jsx(Wn,{children:r.jsxs(Hn,{children:[t(a,s)," ",a==="airConditioner"?n(a):a]})},ue()))})},qn=c.div``,Bn=c.div`
  width: 430px;
`,zn=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,Kn=c.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,Vn=c.div`
  margin-top: 24px;
`,q=c.div`
  display: flex;
  justify-content: space-between;
`,j=c.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,Yn=({car:e})=>{const t="not specified";return r.jsx(qn,{children:r.jsxs(Bn,{children:[r.jsx(zn,{children:r.jsx(Qe,{details:e.details})}),r.jsx(Kn,{children:"Vehicle details"}),r.jsxs(Vn,{children:[r.jsxs(q,{children:[r.jsx(j,{children:"Form"}),r.jsx(j,{children:e.form||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Length"}),r.jsx(j,{children:e.length||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Width"}),r.jsx(j,{children:e.width||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Height"}),r.jsx(j,{children:e.height||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Tank"}),r.jsx(j,{children:e.tank||t})]}),r.jsxs(q,{children:[r.jsx(j,{children:"Consumption"}),r.jsx(j,{children:e.consumption||t})]})]})]})})},Xn=c.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,Gn=c.li``,Jn=c.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Zn=c.p`
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
`,Qn=c.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,eo=c.div``,to=c.p``,no=({reviews:e})=>r.jsx("div",{children:r.jsx(Xn,{children:e.map(t=>(console.log(t),r.jsxs(Gn,{children:[r.jsxs(Jn,{children:[r.jsx(Zn,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),r.jsxs(eo,{children:[r.jsx(Qn,{children:t.reviewer_name?t.reviewer_name:"anonim"}),r.jsx("div",{})]})]}),r.jsx(to,{children:t.comment})]},ue())))})}),oo={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Je.setAppElement("#root");const ro=({modalIsOpen:e,closeModal:t,car:n})=>{const[a,s]=J.useState(!1);return J.useEffect(()=>{const f=document.body.style.overflow;if(e){const y=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${y}px`}else{const y=parseInt(document.body.style.top||"0");document.body.style.overflow=f,document.body.style.position="",document.body.style.top="",window.scrollTo(0,y*-1)}return()=>{document.body.style.overflow=f,document.body.style.position="",document.body.style.top=""}},[e]),r.jsx(Je,{isOpen:e,onRequestClose:t,style:oo,contentLabel:"Car Modal",children:r.jsxs("div",{children:[r.jsx(Dn,{children:n.name}),r.jsxs(Fn,{children:[r.jsxs("p",{children:[n.rating," ",r.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:n.location})]}),r.jsxs($n,{children:["€",n.price,".00"]}),r.jsx(Ln,{children:n.gallery.map(f=>r.jsx(Ue,{$bgImage:f},ue()))}),r.jsx(Un,{children:n.description}),r.jsxs(kn,{children:[r.jsx(Ae,{onClick:()=>s(!a),className:a?"":"isOpen",children:"Features"}),r.jsx(Ae,{onClick:()=>s(!a),className:a?"isOpen":"",children:"Reviews"})]}),a?r.jsx(no,{reviews:n.reviews||[]}):r.jsx(Yn,{car:n})]})})},ao=({car:e})=>{const[t,n]=J.useState(!1);function a(){n(!0)}function s(){n(!1)}return r.jsxs(vt,{children:[r.jsx(Ue,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),r.jsxs("div",{children:[r.jsxs(yt,{children:[r.jsx(Ce,{children:e.name}),r.jsxs(gt,{children:[r.jsxs(Ce,{children:["€",e.price,".00"]}),r.jsx(Le,{width:24,height:24,iconId:"heart"})]})]}),r.jsxs(bt,{children:[r.jsxs("p",{children:[e.rating," ",r.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),r.jsx("p",{children:e.location})]}),r.jsx(xt,{children:e.description}),r.jsx(wt,{children:r.jsx(Qe,{details:e.details})}),r.jsx(Ot,{onClick:()=>a(),children:"Show more"})]}),r.jsx(ro,{modalIsOpen:t,closeModal:s,car:e})]})},so=c.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,io=c.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,lo=c.button`
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
`,co=()=>{const e=ft(ht);return r.jsxs(so,{children:[r.jsx(io,{children:e.map(t=>r.jsx(ao,{car:t.car},t.id))}),r.jsx(lo,{children:"Load more"})]})},uo=c.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;
  max-width: 128px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: ${e=>e.theme.radius.sm};
  background-color: transparent;
`,po=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,D=({id:e,iconType:t,text:n})=>r.jsx(uo,{onClick:()=>console.log(n),children:r.jsxs(po,{children:[r.jsx(Le,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),r.jsx("p",{children:n})]})}),fo=c.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,ho=c.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,mo=c.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,De=c.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,Fe=c.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,$e=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,vo=c.button`
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
`,yo=()=>r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(fo,{children:"Location"}),r.jsx(ho,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),r.jsx(mo,{children:"Filters"}),r.jsxs("div",{children:[r.jsx(De,{children:"Vehicle equipment"}),r.jsx(Fe,{}),r.jsxs($e,{children:[r.jsx(D,{id:"ac",iconType:"equipment",text:"AC"}),r.jsx(D,{id:"automatic",iconType:"equipment",text:"Automatic"}),r.jsx(D,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),r.jsx(D,{id:"tv",iconType:"equipment",text:"TV"}),r.jsx(D,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),r.jsx(De,{children:"Vehicle type"}),r.jsx(Fe,{}),r.jsxs($e,{children:[r.jsx(D,{id:"van",iconType:"vehicle",text:"Van"}),r.jsx(D,{id:"fully-integrated",iconType:"vehicle",text:"Fully Integrated"}),r.jsx(D,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),r.jsx(vo,{children:"Search"})]});function bo(){return r.jsxs("section",{className:"container",children:[r.jsx(yo,{}),r.jsx(co,{})]})}export{bo as default};
