import{j as s,u as h,r as X,g as st,a as it,b as lt,h as ut,c as ct}from"./index-CP9GTA72.js";const dt=e=>e.cars.cars;var k=256,Fe=[],Oe=256,oe;for(;k--;)Fe[k]=(k+256).toString(16).substring(1);function pe(e){var t=0,n=e||11;if(!oe||k+n>Oe*2)for(oe="",k=0;t<Oe;t++)oe+=Fe[Math.random()*256|0];return oe.substring(k,k+++n)}const pt="/campers/assets/sprite-wAsfQexd.svg",Le=({styles:e,width:t,height:n,iconId:r})=>s.jsx(s.Fragment,{children:s.jsx("svg",{style:e,width:t,height:n,children:s.jsx("use",{href:`${pt}#${r}`})})}),ft=h.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};
`,$e=h.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,ht=h.div`
  display: flex;
  justify-content: space-between;
`,mt=h.div`
  display: flex;
  gap: 10px;
`,Ce=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
`,vt=h.div`
  display: flex;
  gap: 16px;
`;h.p``;const yt=h.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${e=>e.theme.colors.grey};
`,bt=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`,gt=h.div`
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,xt=h.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,Ot=h.button`
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
`;var fe={exports:{}},I={},ke={exports:{}},Ct="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wt=Ct,_t=wt;function Ue(){}function Ie(){}Ie.resetWarningCache=Ue;var St=function(){function e(r,i,p,y,a,x){if(x!==_t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ie,resetWarningCache:Ue};return n.PropTypes=n,n};ke.exports=St();var We=ke.exports,he={exports:{}},N={},me={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function p(f,v){return v.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function y(f){var v=f.offsetWidth<=0&&f.offsetHeight<=0;if(v&&!f.innerHTML)return!0;try{var g=window.getComputedStyle(f),S=g.getPropertyValue("display");return v?S!==r&&p(f,g):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var v=f,g=f.getRootNode&&f.getRootNode();v&&v!==document.body;){if(g&&v===g&&(v=g.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function x(f,v){var g=f.nodeName.toLowerCase(),S=i.test(g)&&!f.disabled||g==="a"&&f.href||v;return S&&a(f)}function m(f){var v=f.getAttribute("tabindex");v===null&&(v=void 0);var g=isNaN(v);return(g||v>=0)&&x(f,!g)}function b(f){var v=[].slice.call(f.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?b(S.shadowRoot):[S])},[]);return v.filter(m)}e.exports=t.default})(me,me.exports);var He=me.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Rt;N.log=Nt;N.handleBlur=G;N.handleFocus=J;N.markForFocusLater=Pt;N.returnFocus=At;N.popWithoutFocus=jt;N.setupScopedFocus=Dt;N.teardownScopedFocus=Ft;var Et=He,Mt=Tt(Et);function Tt(e){return e&&e.__esModule?e:{default:e}}var q=[],H=null,ve=!1;function Rt(){q=[]}function Nt(){}function G(){ve=!0}function J(){if(ve){if(ve=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var e=(0,Mt.default)(H)[0]||H;e.focus()}},0)}}function Pt(){q.push(document.activeElement)}function At(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{q.length!==0&&(t=q.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function jt(){q.length>0&&q.pop()}function Dt(e){H=e,window.addEventListener?(window.addEventListener("blur",G,!1),document.addEventListener("focus",J,!0)):(window.attachEvent("onBlur",G),document.attachEvent("onFocus",J))}function Ft(){H=null,window.addEventListener?(window.removeEventListener("blur",G),document.removeEventListener("focus",J)):(window.detachEvent("onBlur",G),document.detachEvent("onFocus",J))}var ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=He,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?p(a.activeElement.shadowRoot):a.activeElement}function y(a,x){var m=(0,r.default)(a);if(!m.length){x.preventDefault();return}var b=void 0,f=x.shiftKey,v=m[0],g=m[m.length-1],S=p();if(a===S){if(!f)return;b=g}if(g===S&&!f&&(b=v),v===S&&f&&(b=g),b){x.preventDefault(),b.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var W=m.indexOf(S);if(W>-1&&(W+=f?-1:1),b=m[W],typeof b>"u"){x.preventDefault(),b=f?g:v,b.focus();return}x.preventDefault(),b.focus()}}e.exports=t.default})(ye,ye.exports);var Lt=ye.exports,P={},$t=function(){},kt=$t,R={},qe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(qe);var Ut=qe.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var It=Ut,Wt=Ht(It);function Ht(e){return e&&e.__esModule?e:{default:e}}var le=Wt.default,qt=le.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=le.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=le.canUseDOM?window.NodeList:{};R.canUseDOM=le.canUseDOM;R.default=qt;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Yt;P.log=Xt;P.assertNodeList=Be;P.setElement=Gt;P.validateElement=be;P.hide=Jt;P.show=Qt;P.documentNotReadyOrSSRTesting=Zt;var Bt=kt,zt=Vt(Bt),Kt=R;function Vt(e){return e&&e.__esModule?e:{default:e}}var M=null;function Yt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function Xt(){}function Be(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Gt(e){var t=e;if(typeof t=="string"&&Kt.canUseDOM){var n=document.querySelectorAll(t);Be(n,t),t=n}return M=t||M,M}function be(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,zt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Jt(e){var t=!0,n=!1,r=void 0;try{for(var i=be(e)[Symbol.iterator](),p;!(t=(p=i.next()).done);t=!0){var y=p.value;y.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Qt(e){var t=!0,n=!1,r=void 0;try{for(var i=be(e)[Symbol.iterator](),p;!(t=(p=i.next()).done);t=!0){var y=p.value;y.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Zt(){M=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=en;B.log=tn;var V={},Y={};function we(e,t){e.classList.remove(t)}function en(){var e=document.getElementsByTagName("html")[0];for(var t in V)we(e,V[t]);var n=document.body;for(var r in Y)we(n,Y[r]);V={},Y={}}function tn(){}var nn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},on=function(t,n){return t[n]&&(t[n]-=1),n},rn=function(t,n,r){r.forEach(function(i){nn(n,i),t.add(i)})},an=function(t,n,r){r.forEach(function(i){on(n,i),n[i]===0&&t.remove(i)})};B.add=function(t,n){return rn(t.classList,t.nodeName.toLowerCase()=="html"?V:Y,n.split(" "))};B.remove=function(t,n){return an(t.classList,t.nodeName.toLowerCase()=="html"?V:Y,n.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=ln;z.resetState=un;function sn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ze=function e(){var t=this;sn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ae=new ze;function ln(){console.log("portalOpenInstances ----------"),console.log(ae.openInstances.length),ae.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function un(){ae=new ze}z.default=ae;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=fn;ge.log=hn;var cn=z,dn=pn(cn);function pn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,T=void 0,U=[];function fn(){for(var e=[_,T],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=T=null,U=[]}function hn(){console.log("bodyTrap ----------"),console.log(U.length);for(var e=[_,T],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function _e(){U.length!==0&&U[U.length-1].focusContent()}function mn(e,t){!_&&!T&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",_e),T=_.cloneNode(),T.addEventListener("focus",_e)),U=t,U.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(_.parentElement&&_.parentElement.removeChild(_),T.parentElement&&T.parentElement.removeChild(T))}dn.default.subscribe(mn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(d){for(var c=1;c<arguments.length;c++){var O=arguments[c];for(var o in O)Object.prototype.hasOwnProperty.call(O,o)&&(d[o]=O[o])}return d},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},i=function(){function d(c,O){for(var o=0;o<O.length;o++){var l=O[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,O,o){return O&&d(c.prototype,O),o&&d(c,o),c}}(),p=X,y=We,a=ee(y),x=N,m=ue(x),b=Lt,f=ee(b),v=P,g=ue(v),S=B,A=ue(S),K=R,W=ee(K),Je=z,xe=ee(Je);function ue(d){if(d&&d.__esModule)return d;var c={};if(d!=null)for(var O in d)Object.prototype.hasOwnProperty.call(d,O)&&(c[O]=d[O]);return c.default=d,c}function ee(d){return d&&d.__esModule?d:{default:d}}function Qe(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function Ze(d,c){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:d}function et(d,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}var ce={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},tt=function(c){return c.code==="Tab"||c.keyCode===9},nt=function(c){return c.code==="Escape"||c.keyCode===27},te=0,de=function(d){et(c,d);function c(O){Qe(this,c);var o=Ze(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,O));return o.setOverlayRef=function(l){o.overlay=l,o.props.overlayRef&&o.props.overlayRef(l)},o.setContentRef=function(l){o.content=l,o.props.contentRef&&o.props.contentRef(l)},o.afterClose=function(){var l=o.props,w=l.appElement,E=l.ariaHideApp,C=l.htmlOpenClassName,F=l.bodyOpenClassName,L=l.parentSelector,ne=L&&L().ownerDocument||document;F&&A.remove(ne.body,F),C&&A.remove(ne.getElementsByTagName("html")[0],C),E&&te>0&&(te-=1,te===0&&g.show(w)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),xe.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var l=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:l},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(l){tt(l)&&(0,f.default)(o.content,l),o.props.shouldCloseOnEsc&&nt(l)&&(l.stopPropagation(),o.requestClose(l))},o.handleOverlayOnClick=function(l){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(l):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(l){!o.props.shouldCloseOnOverlayClick&&l.target==o.overlay&&l.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(l){return o.ownerHandlesClose()&&o.props.onRequestClose(l)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(l,w){var E=(typeof w>"u"?"undefined":r(w))==="object"?w:{base:ce[l],afterOpen:ce[l]+"--after-open",beforeClose:ce[l]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof w=="string"&&w?C+" "+w:C},o.attributesFromObject=function(l,w){return Object.keys(w).reduce(function(E,C){return E[l+"-"+C]=w[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return i(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,l){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,l=o.appElement,w=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,F=o.parentSelector,L=F&&F().ownerDocument||document;C&&A.add(L.body,C),E&&A.add(L.getElementsByTagName("html")[0],E),w&&(te+=1,g.hide(l)),xe.default.register(this)}},{key:"render",value:function(){var o=this.props,l=o.id,w=o.className,E=o.overlayClassName,C=o.defaultStyles,F=o.children,L=w?{}:C.content,ne=E?{}:C.overlay;if(this.shouldBeClosed())return null;var ot={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},ne,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},rt=n({id:l,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",w),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),at=this.props.contentElement(rt,F);return this.props.overlayElement(ot,at)}}]),c}(p.Component);de.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},de.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(W.default),a.default.instanceOf(K.SafeHTMLCollection),a.default.instanceOf(K.SafeNodeList),a.default.arrayOf(a.default.instanceOf(W.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=de,e.exports=t.default})(he,he.exports);var vn=he.exports;function Ke(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ve(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ye(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ke.__suppressDeprecationWarning=!0;Ve.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;function yn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var p=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ke,t.componentWillReceiveProps=Ve),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ye;var a=t.componentDidUpdate;t.componentDidUpdate=function(m,b,f){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,m,b,v)}}return e}const bn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:yn},Symbol.toStringTag,{value:"Module"})),gn=st(bn);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xn=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Xe=X,se=Q(Xe),On=it,ie=Q(On),Cn=We,u=Q(Cn),wn=vn,Ee=Q(wn),_n=P,Sn=Mn(_n),D=R,Me=Q(D),En=gn;function Mn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Q(e){return e&&e.__esModule?e:{default:e}}function Tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Rn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Nn=I.portalClassName="ReactModalPortal",Pn=I.bodyOpenClassName="ReactModal__Body--open",$=D.canUseDOM&&ie.default.createPortal!==void 0,Re=function(t){return document.createElement(t)},Ne=function(){return $?ie.default.createPortal:ie.default.unstable_renderSubtreeIntoContainer};function re(e){return e()}var Z=function(e){Rn(t,e);function t(){var n,r,i,p;Tn(this,t);for(var y=arguments.length,a=Array(y),x=0;x<y;x++)a[x]=arguments[x];return p=(r=(i=Te(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!$&&ie.default.unmountComponentAtNode(i.node);var m=re(i.props.parentSelector);m&&m.contains(i.node)?m.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(m){i.portal=m},i.renderPortal=function(m){var b=Ne(),f=b(i,se.default.createElement(Ee.default,Se({defaultStyles:t.defaultStyles},m)),i.node);i.portalRef(f)},r),Te(i,p)}return xn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){$||(this.node=Re("div")),this.node.className=this.props.portalClassName;var r=re(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=re(r.parentSelector),p=re(this.props.parentSelector);return{prevParent:i,nextParent:p}}},{key:"componentDidUpdate",value:function(r,i,p){if(D.canUseDOM){var y=this.props,a=y.isOpen,x=y.portalClassName;r.portalClassName!==x&&(this.node.className=x);var m=p.prevParent,b=p.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!a)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),p=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);p?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-i)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!$)return null;!this.node&&$&&(this.node=Re("div"));var r=Ne();return r(se.default.createElement(Ee.default,Se({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Sn.setElement(r)}}]),t}(Xe.Component);Z.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Me.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Me.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};Z.defaultProps={isOpen:!1,portalClassName:Nn,bodyOpenClassName:Pn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return se.default.createElement("div",t,n)},contentElement:function(t,n){return se.default.createElement("div",t,n)}};Z.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,En.polyfill)(Z);I.default=Z;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=I,r=i(n);function i(p){return p&&p.__esModule?p:{default:p}}t.default=r.default,e.exports=t.default})(fe,fe.exports);var An=fe.exports;const Ge=lt(An),jn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Dn=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Fn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Ln=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,$n=h.p`
  color: ${e=>e.theme.colors.grey};
`,kn=h.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Un=ut`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,Pe=h.button`
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
      animation: ${Un} 0.3s ease-out forwards;
    }
  }
`,In={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ge.setAppElement("#root");const Wn=({modalIsOpen:e,closeModal:t,car:n})=>{const[r,i]=X.useState(!1);return X.useEffect(()=>{const p=document.body.style.overflow;if(e){const y=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${y}px`}else{const y=parseInt(document.body.style.top||"0");document.body.style.overflow=p,document.body.style.position="",document.body.style.top="",window.scrollTo(0,y*-1)}return()=>{document.body.style.overflow=p,document.body.style.position="",document.body.style.top=""}},[e]),s.jsx(Ge,{isOpen:e,onRequestClose:t,style:In,contentLabel:"Car Modal",children:s.jsxs("div",{children:[s.jsx(jn,{children:n.name}),s.jsxs(Dn,{children:[s.jsxs("p",{children:[n.rating," ",s.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:n.location})]}),s.jsxs(Fn,{children:["€",n.price,".00"]}),s.jsx(Ln,{children:n.gallery.map(p=>s.jsx($e,{$bgImage:p},pe()))}),s.jsx($n,{children:n.description}),s.jsxs(kn,{children:[s.jsx(Pe,{onClick:()=>i(!r),className:r?"":"isOpen",children:"Features"}),s.jsx(Pe,{onClick:()=>i(!r),className:r?"isOpen":"",children:"Reviews"})]})]})})},Hn=({car:e})=>{const[t,n]=X.useState(!1);function r(){n(!0)}function i(){n(!1)}const p=(y,a)=>y==="beds"||y==="hob"||y==="adult"?a:a===1?"":a;return s.jsxs(ft,{children:[s.jsx($e,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),s.jsxs("div",{children:[s.jsxs(ht,{children:[s.jsx(Ce,{children:e.name}),s.jsxs(mt,{children:[s.jsxs(Ce,{children:["€",e.price,".00"]}),s.jsx(Le,{width:24,height:24,iconId:"heart"})]})]}),s.jsxs(vt,{children:[s.jsxs("p",{children:[e.rating," ",s.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:e.location})]}),s.jsx(yt,{children:e.description}),s.jsx(bt,{children:Object.entries(e.details).map(([y,a])=>a===0?s.jsx("div",{style:{display:"none"}},pe()):s.jsx(gt,{children:s.jsxs(xt,{children:[p(y,a)," ",y]})},pe()))}),s.jsx(Ot,{onClick:()=>r(),children:"Show more"})]}),s.jsx(Wn,{modalIsOpen:t,closeModal:i,car:e})]})},qn=h.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,Bn=h.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,zn=h.button`
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
`,Kn=()=>{const e=ct(dt);return s.jsxs(qn,{children:[s.jsx(Bn,{children:e.map(t=>(console.log(t),s.jsx(Hn,{car:t.car},t.id)))}),s.jsx(zn,{children:"Load more"})]})},Vn=h.button`
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
`,Yn=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,j=({id:e,iconType:t,text:n})=>s.jsx(Vn,{onClick:()=>console.log(n),children:s.jsxs(Yn,{children:[s.jsx(Le,{iconId:e,width:t==="equipment"?32:40,height:t==="equipment"?32:28}),s.jsx("p",{children:n})]})}),Xn=h.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,Gn=h.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,Jn=h.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,Ae=h.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,je=h.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,De=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,Qn=h.button`
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
`,Zn=()=>s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx(Xn,{children:"Location"}),s.jsx(Gn,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),s.jsx(Jn,{children:"Filters"}),s.jsxs("div",{children:[s.jsx(Ae,{children:"Vehicle equipment"}),s.jsx(je,{}),s.jsxs(De,{children:[s.jsx(j,{id:"ac",iconType:"equipment",text:"AC"}),s.jsx(j,{id:"automatic",iconType:"equipment",text:"Automatic"}),s.jsx(j,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),s.jsx(j,{id:"tv",iconType:"equipment",text:"TV"}),s.jsx(j,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),s.jsx(Ae,{children:"Vehicle type"}),s.jsx(je,{}),s.jsxs(De,{children:[s.jsx(j,{id:"camper-2",iconType:"vehicle",text:"Van"}),s.jsx(j,{id:"camper-1",iconType:"vehicle",text:"Fully Integrated"}),s.jsx(j,{id:"camper-3",iconType:"vehicle",text:"Alcove"})]})]}),s.jsx(Qn,{children:"Search"})]});function to(){return s.jsxs("section",{className:"container",children:[s.jsx(Zn,{}),s.jsx(Kn,{})]})}export{to as default};
