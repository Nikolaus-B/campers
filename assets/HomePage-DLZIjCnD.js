import{j as l,u as y,r as le,g as rt,a as at,b as st,c as lt}from"./index-CbztGVf3.js";const it=e=>e.cars.cars;var k=256,Fe=[],xe=256,ne;for(;k--;)Fe[k]=(k+256).toString(16).substring(1);function Oe(e){var t=0,o=e||11;if(!ne||k+o>xe*2)for(ne="",k=0;t<xe;t++)ne+=Fe[Math.random()*256|0];return ne.substring(k,k+++o)}const ut="/campers/assets/sprite-wAsfQexd.svg",je=({styles:e,width:t,height:o,iconId:r})=>l.jsx(l.Fragment,{children:l.jsx("svg",{style:e,width:t,height:o,children:l.jsx("use",{href:`${ut}#${r}`})})}),ct=y.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: 20px;
`,dt=y.div`
  width: 100%;
  height: 310px;

  border-radius: 10px;
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,ft=y.div`
  display: flex;
  justify-content: space-between;
`,pt=y.div`
  display: flex;
  gap: 10px;
`,Ce=y.p`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
`,ht=y.div`
  display: flex;
  gap: 16px;
`,mt=y.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${e=>e.theme.colors.grey};
`,vt=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`,yt=y.div`
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: 100px;
`,bt=y.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,gt=y.button`
  width: 166px;
  height: 56px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${e=>e.theme.colors.buttonText};
  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`;var fe={exports:{}},I={},Le={exports:{}},xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ot=xt,Ct=Ot;function Ue(){}function ke(){}ke.resetWarningCache=Ue;var _t=function(){function e(r,s,p,v,a,x){if(x!==Ct){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ke,resetWarningCache:Ue};return o.PropTypes=o,o};Le.exports=_t();var We=Le.exports,pe={exports:{}},N={},he={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",s=/input|select|textarea|button|object|iframe/;function p(f,m){return m.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function v(f){var m=f.offsetWidth<=0&&f.offsetHeight<=0;if(m&&!f.innerHTML)return!0;try{var g=window.getComputedStyle(f),E=g.getPropertyValue("display");return m?E!==r&&p(f,g):E===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var m=f,g=f.getRootNode&&f.getRootNode();m&&m!==document.body;){if(g&&m===g&&(m=g.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function x(f,m){var g=f.nodeName.toLowerCase(),E=s.test(g)&&!f.disabled||g==="a"&&f.href||m;return E&&a(f)}function h(f){var m=f.getAttribute("tabindex");m===null&&(m=void 0);var g=isNaN(m);return(g||m>=0)&&x(f,!g)}function b(f){var m=[].slice.call(f.querySelectorAll("*"),0).reduce(function(g,E){return g.concat(E.shadowRoot?b(E.shadowRoot):[E])},[]);return m.filter(h)}e.exports=t.default})(he,he.exports);var Ie=he.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Tt;N.log=Mt;N.handleBlur=X;N.handleFocus=G;N.markForFocusLater=Rt;N.returnFocus=Nt;N.popWithoutFocus=Pt;N.setupScopedFocus=At;N.teardownScopedFocus=Dt;var wt=Ie,Et=St(wt);function St(e){return e&&e.__esModule?e:{default:e}}var q=[],H=null,me=!1;function Tt(){q=[]}function Mt(){}function X(){me=!0}function G(){if(me){if(me=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var e=(0,Et.default)(H)[0]||H;e.focus()}},0)}}function Rt(){q.push(document.activeElement)}function Nt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{q.length!==0&&(t=q.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Pt(){q.length>0&&q.pop()}function At(e){H=e,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",G,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",G))}function Dt(){H=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",G)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",G))}var ve={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var o=Ie,r=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?p(a.activeElement.shadowRoot):a.activeElement}function v(a,x){var h=(0,r.default)(a);if(!h.length){x.preventDefault();return}var b=void 0,f=x.shiftKey,m=h[0],g=h[h.length-1],E=p();if(a===E){if(!f)return;b=g}if(g===E&&!f&&(b=m),m===E&&f&&(b=g),b){x.preventDefault(),b.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),V=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(V){var $=h.indexOf(E);if($>-1&&($+=f?-1:1),b=h[$],typeof b>"u"){x.preventDefault(),b=f?g:m,b.focus();return}x.preventDefault(),b.focus()}}e.exports=t.default})(ve,ve.exports);var Ft=ve.exports,P={},jt=function(){},Lt=jt,R={},$e={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})($e);var Ut=$e.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var kt=Ut,Wt=It(kt);function It(e){return e&&e.__esModule?e:{default:e}}var ie=Wt.default,$t=ie.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=ie.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=ie.canUseDOM?window.NodeList:{};R.canUseDOM=ie.canUseDOM;R.default=$t;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Vt;P.log=Yt;P.assertNodeList=He;P.setElement=zt;P.validateElement=ye;P.hide=Xt;P.show=Gt;P.documentNotReadyOrSSRTesting=Jt;var Ht=Lt,qt=Kt(Ht),Bt=R;function Kt(e){return e&&e.__esModule?e:{default:e}}var T=null;function Vt(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function Yt(){}function He(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function zt(e){var t=e;if(typeof t=="string"&&Bt.canUseDOM){var o=document.querySelectorAll(t);He(o,t),t=o}return T=t||T,T}function ye(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,qt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Xt(e){var t=!0,o=!1,r=void 0;try{for(var s=ye(e)[Symbol.iterator](),p;!(t=(p=s.next()).done);t=!0){var v=p.value;v.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!t&&s.return&&s.return()}finally{if(o)throw r}}}function Gt(e){var t=!0,o=!1,r=void 0;try{for(var s=ye(e)[Symbol.iterator](),p;!(t=(p=s.next()).done);t=!0){var v=p.value;v.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!t&&s.return&&s.return()}finally{if(o)throw r}}}function Jt(){T=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Qt;B.log=Zt;var Y={},z={};function _e(e,t){e.classList.remove(t)}function Qt(){var e=document.getElementsByTagName("html")[0];for(var t in Y)_e(e,Y[t]);var o=document.body;for(var r in z)_e(o,z[r]);Y={},z={}}function Zt(){}var en=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},tn=function(t,o){return t[o]&&(t[o]-=1),o},nn=function(t,o,r){r.forEach(function(s){en(o,s),t.add(s)})},on=function(t,o,r){r.forEach(function(s){tn(o,s),o[s]===0&&t.remove(s)})};B.add=function(t,o){return nn(t.classList,t.nodeName.toLowerCase()=="html"?Y:z,o.split(" "))};B.remove=function(t,o){return on(t.classList,t.nodeName.toLowerCase()=="html"?Y:z,o.split(" "))};var K={};Object.defineProperty(K,"__esModule",{value:!0});K.log=an;K.resetState=sn;function rn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var qe=function e(){var t=this;rn(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var r=t.openInstances.indexOf(o);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(r){return r(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},re=new qe;function an(){console.log("portalOpenInstances ----------"),console.log(re.openInstances.length),re.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function sn(){re=new qe}K.default=re;var be={};Object.defineProperty(be,"__esModule",{value:!0});be.resetState=dn;be.log=fn;var ln=K,un=cn(ln);function cn(e){return e&&e.__esModule?e:{default:e}}var w=void 0,M=void 0,W=[];function dn(){for(var e=[w,M],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}w=M=null,W=[]}function fn(){console.log("bodyTrap ----------"),console.log(W.length);for(var e=[w,M],t=0;t<e.length;t++){var o=e[t],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function we(){W.length!==0&&W[W.length-1].focusContent()}function pn(e,t){!w&&!M&&(w=document.createElement("div"),w.setAttribute("data-react-modal-body-trap",""),w.style.position="absolute",w.style.opacity="0",w.setAttribute("tabindex","0"),w.addEventListener("focus",we),M=w.cloneNode(),M.addEventListener("focus",we)),W=t,W.length>0?(document.body.firstChild!==w&&document.body.insertBefore(w,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(w.parentElement&&w.parentElement.removeChild(w),M.parentElement&&M.parentElement.removeChild(M))}un.default.subscribe(pn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(d){for(var c=1;c<arguments.length;c++){var O=arguments[c];for(var n in O)Object.prototype.hasOwnProperty.call(O,n)&&(d[n]=O[n])}return d},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s=function(){function d(c,O){for(var n=0;n<O.length;n++){var i=O[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}return function(c,O,n){return O&&d(c.prototype,O),n&&d(c,n),c}}(),p=le,v=We,a=Z(v),x=N,h=ue(x),b=Ft,f=Z(b),m=P,g=ue(m),E=B,A=ue(E),V=R,$=Z(V),Xe=K,ge=Z(Xe);function ue(d){if(d&&d.__esModule)return d;var c={};if(d!=null)for(var O in d)Object.prototype.hasOwnProperty.call(d,O)&&(c[O]=d[O]);return c.default=d,c}function Z(d){return d&&d.__esModule?d:{default:d}}function Ge(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function Je(d,c){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:d}function Qe(d,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}var ce={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ze=function(c){return c.code==="Tab"||c.keyCode===9},et=function(c){return c.code==="Escape"||c.keyCode===27},ee=0,de=function(d){Qe(c,d);function c(O){Ge(this,c);var n=Je(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,O));return n.setOverlayRef=function(i){n.overlay=i,n.props.overlayRef&&n.props.overlayRef(i)},n.setContentRef=function(i){n.content=i,n.props.contentRef&&n.props.contentRef(i)},n.afterClose=function(){var i=n.props,_=i.appElement,S=i.ariaHideApp,C=i.htmlOpenClassName,j=i.bodyOpenClassName,L=i.parentSelector,te=L&&L().ownerDocument||document;j&&A.remove(te.body,j),C&&A.remove(te.getElementsByTagName("html")[0],C),S&&ee>0&&(ee-=1,ee===0&&g.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(h.returnFocus(n.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),ge.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(h.setupScopedFocus(n.node),h.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var i=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:i},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(i){Ze(i)&&(0,f.default)(n.content,i),n.props.shouldCloseOnEsc&&et(i)&&(i.stopPropagation(),n.requestClose(i))},n.handleOverlayOnClick=function(i){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(i):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(i){!n.props.shouldCloseOnOverlayClick&&i.target==n.overlay&&i.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(i){return n.ownerHandlesClose()&&n.props.onRequestClose(i)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(i,_){var S=(typeof _>"u"?"undefined":r(_))==="object"?_:{base:ce[i],afterOpen:ce[i]+"--after-open",beforeClose:ce[i]+"--before-close"},C=S.base;return n.state.afterOpen&&(C=C+" "+S.afterOpen),n.state.beforeClose&&(C=C+" "+S.beforeClose),typeof _=="string"&&_?C+" "+_:C},n.attributesFromObject=function(i,_){return Object.keys(_).reduce(function(S,C){return S[i+"-"+C]=_[C],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,i){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,i=n.appElement,_=n.ariaHideApp,S=n.htmlOpenClassName,C=n.bodyOpenClassName,j=n.parentSelector,L=j&&j().ownerDocument||document;C&&A.add(L.body,C),S&&A.add(L.getElementsByTagName("html")[0],S),_&&(ee+=1,g.hide(i)),ge.default.register(this)}},{key:"render",value:function(){var n=this.props,i=n.id,_=n.className,S=n.overlayClassName,C=n.defaultStyles,j=n.children,L=_?{}:C.content,te=S?{}:C.overlay;if(this.shouldBeClosed())return null;var tt={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},te,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},nt=o({id:i,ref:this.setContentRef,style:o({},L,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ot=this.props.contentElement(nt,j);return this.props.overlayElement(tt,ot)}}]),c}(p.Component);de.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},de.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf($.default),a.default.instanceOf(V.SafeHTMLCollection),a.default.instanceOf(V.SafeNodeList),a.default.arrayOf(a.default.instanceOf($.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=de,e.exports=t.default})(pe,pe.exports);var hn=pe.exports;function Be(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ke(e){function t(o){var r=this.constructor.getDerivedStateFromProps(e,o);return r??null}this.setState(t.bind(this))}function Ve(e,t){try{var o=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Be.__suppressDeprecationWarning=!0;Ke.__suppressDeprecationWarning=!0;Ve.__suppressDeprecationWarning=!0;function mn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,r=null,s=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||r!==null||s!==null){var p=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Be,t.componentWillReceiveProps=Ke),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ve;var a=t.componentDidUpdate;t.componentDidUpdate=function(h,b,f){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,h,b,m)}}return e}const vn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:mn},Symbol.toStringTag,{value:"Module"})),yn=rt(vn);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},bn=function(){function e(t,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),Ye=le,ae=J(Ye),gn=at,se=J(gn),xn=We,u=J(xn),On=hn,Se=J(On),Cn=P,_n=En(Cn),F=R,Te=J(F),wn=yn;function En(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function J(e){return e&&e.__esModule?e:{default:e}}function Sn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Me(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Tn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Mn=I.portalClassName="ReactModalPortal",Rn=I.bodyOpenClassName="ReactModal__Body--open",U=F.canUseDOM&&se.default.createPortal!==void 0,Re=function(t){return document.createElement(t)},Ne=function(){return U?se.default.createPortal:se.default.unstable_renderSubtreeIntoContainer};function oe(e){return e()}var Q=function(e){Tn(t,e);function t(){var o,r,s,p;Sn(this,t);for(var v=arguments.length,a=Array(v),x=0;x<v;x++)a[x]=arguments[x];return p=(r=(s=Me(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!U&&se.default.unmountComponentAtNode(s.node);var h=oe(s.props.parentSelector);h&&h.contains(s.node)?h.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(h){s.portal=h},s.renderPortal=function(h){var b=Ne(),f=b(s,ae.default.createElement(Se.default,Ee({defaultStyles:t.defaultStyles},h)),s.node);s.portalRef(f)},r),Me(s,p)}return bn(t,[{key:"componentDidMount",value:function(){if(F.canUseDOM){U||(this.node=Re("div")),this.node.className=this.props.portalClassName;var r=oe(this.props.parentSelector);r.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var s=oe(r.parentSelector),p=oe(this.props.parentSelector);return{prevParent:s,nextParent:p}}},{key:"componentDidUpdate",value:function(r,s,p){if(F.canUseDOM){var v=this.props,a=v.isOpen,x=v.portalClassName;r.portalClassName!==x&&(this.node.className=x);var h=p.prevParent,b=p.nextParent;b!==h&&(h.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!a)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,s=Date.now(),p=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||s+this.props.closeTimeoutMS);p?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-s)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!U)return null;!this.node&&U&&(this.node=Re("div"));var r=Ne();return r(ae.default.createElement(Se.default,Ee({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){_n.setElement(r)}}]),t}(Ye.Component);Q.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Te.default),u.default.instanceOf(F.SafeHTMLCollection),u.default.instanceOf(F.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Te.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};Q.defaultProps={isOpen:!1,portalClassName:Mn,bodyOpenClassName:Rn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return ae.default.createElement("div",t,o)},contentElement:function(t,o){return ae.default.createElement("div",t,o)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,wn.polyfill)(Q);I.default=Q;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=I,r=s(o);function s(p){return p&&p.__esModule?p:{default:p}}t.default=r.default,e.exports=t.default})(fe,fe.exports);var Nn=fe.exports;const ze=st(Nn),Pn={overlay:{position:"fixed",width:"100vw",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{width:"982px",height:"720px",margin:"0 auto 20px auto ",borderRadius:"4px",outline:"none",bottom:"20px"}};ze.setAppElement("#root");const An=({modalIsOpen:e,closeModal:t})=>(le.useEffect(()=>{const o=document.body.style.overflow;if(e){const r=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${r}px`}else{const r=parseInt(document.body.style.top||"0");document.body.style.overflow=o,document.body.style.position="",document.body.style.top="",window.scrollTo(0,r*-1)}return()=>{document.body.style.overflow=o,document.body.style.position="",document.body.style.top=""}},[e]),l.jsx(ze,{isOpen:e,onRequestClose:t,style:Pn,contentLabel:"Car Modal",children:l.jsx("div",{style:{overflowY:"scroll",maxHeight:"80vh"}})})),Dn=({car:e})=>{const[t,o]=le.useState(!1);function r(){o(!0)}function s(){o(!1)}const p=(v,a)=>v==="beds"||v==="hob"||v==="adult"?a:a===1?"":a;return l.jsxs(ct,{children:[l.jsx(dt,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),l.jsxs("div",{children:[l.jsxs(ft,{children:[l.jsx(Ce,{children:e.name}),l.jsxs(pt,{children:[l.jsxs(Ce,{children:["€",e.price,".00"]}),l.jsx(je,{width:24,height:24,iconId:"heart"})]})]}),l.jsxs(ht,{children:[l.jsxs("p",{children:[e.rating," ",l.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),l.jsx("p",{children:e.location})]}),l.jsx(mt,{children:e.description}),l.jsx(vt,{children:Object.entries(e.details).map(([v,a])=>a===0?l.jsx("div",{style:{display:"none"}},Oe()):l.jsx(yt,{children:l.jsxs(bt,{children:[p(v,a)," ",v]})},Oe()))}),l.jsx(gt,{onClick:()=>r(),children:"Show more"})]}),l.jsx(An,{modalIsOpen:t,closeModal:s,car:e})]})},Fn=y.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,jn=y.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Ln=y.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.loadMoreBorderColor};
  border-radius: 200px;

  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,Un=()=>{const e=lt(it);return l.jsxs(Fn,{children:[l.jsx(jn,{children:e.map(t=>l.jsx(Dn,{car:t.car},t.id))}),l.jsx(Ln,{children:"Load more"})]})},kn=y.button`
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
  border-radius: 10px;
  background-color: transparent;
`,Wn=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,D=({id:e,iconType:t,text:o})=>l.jsx(kn,{onClick:()=>console.log(o),children:l.jsxs(Wn,{children:[l.jsx(je,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),l.jsx("p",{children:o})]})}),In=y.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,$n=y.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,Hn=y.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,Pe=y.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,Ae=y.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,De=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,qn=y.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${e=>e.theme.colors.buttonText};

  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`,Bn=()=>l.jsxs("div",{children:[l.jsxs("div",{children:[l.jsx(In,{children:"Location"}),l.jsx($n,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),l.jsx(Hn,{children:"Filters"}),l.jsxs("div",{children:[l.jsx(Pe,{children:"Vehicle equipment"}),l.jsx(Ae,{}),l.jsxs(De,{children:[l.jsx(D,{id:"ac",iconType:"equipment",text:"AC"}),l.jsx(D,{id:"automatic",iconType:"equipment",text:"Automatic"}),l.jsx(D,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),l.jsx(D,{id:"tv",iconType:"equipment",text:"TV"}),l.jsx(D,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),l.jsx(Pe,{children:"Vehicle type"}),l.jsx(Ae,{}),l.jsxs(De,{children:[l.jsx(D,{id:"camper-2",iconType:"vehicle",text:"Van"}),l.jsx(D,{id:"camper-1",iconType:"vehicle",text:"Fully Integrated"}),l.jsx(D,{id:"camper-3",iconType:"vehicle",text:"Alcove"})]})]}),l.jsx(qn,{children:"Search"})]});function Vn(){return l.jsxs("section",{className:"container",children:[l.jsx(Bn,{}),l.jsx(Un,{})]})}export{Vn as default};
