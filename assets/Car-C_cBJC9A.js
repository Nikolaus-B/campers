import{f as ue,j as s,h as xe,u as p,r as G,g as ut,i as dt,k as ft,a as pt,b as ht,l as mt}from"./index-zj_XXqsX.js";const vt=e=>e.filter.inputValue,Le=e=>e.filter.equipment,yt=e=>e.filter.type,$e=e=>e.cars.cars,bt=e=>e.cars.favourites,Ue=ue([$e,vt,Le],(e,t)=>e.filter(n=>{const{car:r}=n,a=r.name.toLowerCase(),l=r.location.toLowerCase();return a.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),gt=ue([$e,Le],(e,t)=>e.filter(({car:n})=>{const{transmission:r,details:a}=n,l=[r];return Object.entries(a).forEach(([v,i])=>{i!==0&&l.push(v.toLowerCase())}),t.every(v=>l.includes(v))})),xt=ue([Ue,yt],(e,t)=>t.length===0?e:e.filter(n=>{const{car:r}=n,a=r.form.toLowerCase();return t.some(l=>a.includes(l.toLowerCase()))})),bo=ue([Ue,gt,xt],(e,t,n)=>e.filter(r=>t.includes(r)&&n.includes(r))),wt="/campers/assets/sprite-SW9Tt7Df.svg",we=({styles:e,width:t,height:n,iconId:r})=>s.jsx(s.Fragment,{children:s.jsx("svg",{style:e,width:t,height:n,children:s.jsx("use",{href:`${wt}#${r}`})})}),Ot=xe`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ct=xe`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,_t=p.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};

  animation: ${Ot} 0.5s ease;

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    bottom: -100px;
    margin: -1px;
    border: 0;
    padding: 0;

    opacity: 0;
    animation: ${Ct} 0.5s ease;

    pointer-events: none;
  }
`,Ie=p.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,St=p.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Et=p.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,Se=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,Mt=p.button`
  border: none;
  background-color: transparent;
`,Tt=p.div`
  display: flex;
  gap: 16px;
`;p.p``;const Rt=p.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,jt=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,Pt=p.button`
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
`;var me={exports:{}},k={},ke={exports:{}},Nt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ft=Nt,Dt=Ft;function We(){}function He(){}He.resetWarningCache=We;var At=function(){function e(r,a,l,v,i,b){if(b!==Dt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:He,resetWarningCache:We};return n.PropTypes=n,n};ke.exports=At();var qe=ke.exports,ve={exports:{}},P={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function l(h,y){return y.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function v(h){var y=h.offsetWidth<=0&&h.offsetHeight<=0;if(y&&!h.innerHTML)return!0;try{var x=window.getComputedStyle(h),S=x.getPropertyValue("display");return y?S!==r&&l(h,x):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var y=h,x=h.getRootNode&&h.getRootNode();y&&y!==document.body;){if(x&&y===x&&(y=x.host.parentNode),v(y))return!1;y=y.parentNode}return!0}function b(h,y){var x=h.nodeName.toLowerCase(),S=a.test(x)&&!h.disabled||x==="a"&&h.href||y;return S&&i(h)}function m(h){var y=h.getAttribute("tabindex");y===null&&(y=void 0);var x=isNaN(y);return(x||y>=0)&&b(h,!x)}function g(h){var y=[].slice.call(h.querySelectorAll("*"),0).reduce(function(x,S){return x.concat(S.shadowRoot?g(S.shadowRoot):[S])},[]);return y.filter(m)}e.exports=t.default})(ye,ye.exports);var Be=ye.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=It;P.log=kt;P.handleBlur=J;P.handleFocus=Z;P.markForFocusLater=Wt;P.returnFocus=Ht;P.popWithoutFocus=qt;P.setupScopedFocus=Bt;P.teardownScopedFocus=zt;var Lt=Be,$t=Ut(Lt);function Ut(e){return e&&e.__esModule?e:{default:e}}var B=[],q=null,be=!1;function It(){B=[]}function kt(){}function J(){be=!0}function Z(){if(be){if(be=!1,!q)return;setTimeout(function(){if(!q.contains(document.activeElement)){var e=(0,$t.default)(q)[0]||q;e.focus()}},0)}}function Wt(){B.push(document.activeElement)}function Ht(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{B.length!==0&&(t=B.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function qt(){B.length>0&&B.pop()}function Bt(e){q=e,window.addEventListener?(window.addEventListener("blur",J,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",J),document.attachEvent("onFocus",Z))}function zt(){q=null,window.addEventListener?(window.removeEventListener("blur",J),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",J),document.detachEvent("onFocus",Z))}var ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var n=Be,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function v(i,b){var m=(0,r.default)(i);if(!m.length){b.preventDefault();return}var g=void 0,h=b.shiftKey,y=m[0],x=m[m.length-1],S=l();if(i===S){if(!h)return;g=x}if(x===S&&!h&&(g=y),y===S&&h&&(g=x),g){b.preventDefault(),g.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),V=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(V){var W=m.indexOf(S);if(W>-1&&(W+=h?-1:1),g=m[W],typeof g>"u"){b.preventDefault(),g=h?x:y,g.focus();return}b.preventDefault(),g.focus()}}e.exports=t.default})(ge,ge.exports);var Kt=ge.exports,N={},Vt=function(){},Yt=Vt,j={},ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(ze);var Xt=ze.exports;Object.defineProperty(j,"__esModule",{value:!0});j.canUseDOM=j.SafeNodeList=j.SafeHTMLCollection=void 0;var Gt=Xt,Jt=Zt(Gt);function Zt(e){return e&&e.__esModule?e:{default:e}}var de=Jt.default,Qt=de.canUseDOM?window.HTMLElement:{};j.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};j.SafeNodeList=de.canUseDOM?window.NodeList:{};j.canUseDOM=de.canUseDOM;j.default=Qt;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=rn;N.log=an;N.assertNodeList=Ke;N.setElement=sn;N.validateElement=Oe;N.hide=ln;N.show=cn;N.documentNotReadyOrSSRTesting=un;var en=Yt,tn=on(en),nn=j;function on(e){return e&&e.__esModule?e:{default:e}}var T=null;function rn(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function an(){}function Ke(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function sn(e){var t=e;if(typeof t=="string"&&nn.canUseDOM){var n=document.querySelectorAll(t);Ke(n,t),t=n}return T=t||T,T}function Oe(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,tn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ln(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var v=l.value;v.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function cn(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var v=l.value;v.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function un(){T=null}var z={};Object.defineProperty(z,"__esModule",{value:!0});z.resetState=dn;z.log=fn;var Y={},X={};function Ee(e,t){e.classList.remove(t)}function dn(){var e=document.getElementsByTagName("html")[0];for(var t in Y)Ee(e,Y[t]);var n=document.body;for(var r in X)Ee(n,X[r]);Y={},X={}}function fn(){}var pn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},hn=function(t,n){return t[n]&&(t[n]-=1),n},mn=function(t,n,r){r.forEach(function(a){pn(n,a),t.add(a)})},vn=function(t,n,r){r.forEach(function(a){hn(n,a),n[a]===0&&t.remove(a)})};z.add=function(t,n){return mn(t.classList,t.nodeName.toLowerCase()=="html"?Y:X,n.split(" "))};z.remove=function(t,n){return vn(t.classList,t.nodeName.toLowerCase()=="html"?Y:X,n.split(" "))};var K={};Object.defineProperty(K,"__esModule",{value:!0});K.log=bn;K.resetState=gn;function yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ve=function e(){var t=this;yn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new Ve;function bn(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function gn(){se=new Ve}K.default=se;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=Cn;Ce.log=_n;var xn=K,wn=On(xn);function On(e){return e&&e.__esModule?e:{default:e}}var _=void 0,R=void 0,I=[];function Cn(){for(var e=[_,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=R=null,I=[]}function _n(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,R],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Me(){I.length!==0&&I[I.length-1].focusContent()}function Sn(e,t){!_&&!R&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Me),R=_.cloneNode(),R.addEventListener("focus",Me)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(_.parentElement&&_.parentElement.removeChild(_),R.parentElement&&R.parentElement.removeChild(R))}wn.default.subscribe(Sn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a=function(){function f(d,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,w,o){return w&&f(d.prototype,w),o&&f(d,o),d}}(),l=G,v=qe,i=te(v),b=P,m=fe(b),g=Kt,h=te(g),y=N,x=fe(y),S=z,F=fe(S),V=j,W=te(V),tt=K,_e=te(tt);function fe(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(d[w]=f[w]);return d.default=f,d}function te(f){return f&&f.__esModule?f:{default:f}}function nt(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function ot(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function rt(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var pe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},at=function(d){return d.code==="Tab"||d.keyCode===9},st=function(d){return d.code==="Escape"||d.keyCode===27},ne=0,he=function(f){rt(d,f);function d(w){nt(this,d);var o=ot(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,C=c.appElement,E=c.ariaHideApp,O=c.htmlOpenClassName,A=c.bodyOpenClassName,L=c.parentSelector,oe=L&&L().ownerDocument||document;A&&F.remove(oe.body,A),O&&F.remove(oe.getElementsByTagName("html")[0],O),E&&ne>0&&(ne-=1,ne===0&&x.show(C)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),_e.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){at(c)&&(0,h.default)(o.content,c),o.props.shouldCloseOnEsc&&st(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,C){var E=(typeof C>"u"?"undefined":r(C))==="object"?C:{base:pe[c],afterOpen:pe[c]+"--after-open",beforeClose:pe[c]+"--before-close"},O=E.base;return o.state.afterOpen&&(O=O+" "+E.afterOpen),o.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},o.attributesFromObject=function(c,C){return Object.keys(C).reduce(function(E,O){return E[c+"-"+O]=C[O],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,C=o.ariaHideApp,E=o.htmlOpenClassName,O=o.bodyOpenClassName,A=o.parentSelector,L=A&&A().ownerDocument||document;O&&F.add(L.body,O),E&&F.add(L.getElementsByTagName("html")[0],E),C&&(ne+=1,x.hide(c)),_e.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,C=o.className,E=o.overlayClassName,O=o.defaultStyles,A=o.children,L=C?{}:O.content,oe=E?{}:O.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},oe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ct=this.props.contentElement(lt,A);return this.props.overlayElement(it,ct)}}]),d}(l.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(W.default),i.default.instanceOf(V.SafeHTMLCollection),i.default.instanceOf(V.SafeNodeList),i.default.arrayOf(i.default.instanceOf(W.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=he,e.exports=t.default})(ve,ve.exports);var En=ve.exports;function Ye(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Xe(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ge(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;Ge.__suppressDeprecationWarning=!0;function Mn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var l=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+v+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ye,t.componentWillReceiveProps=Xe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ge;var i=t.componentDidUpdate;t.componentDidUpdate=function(m,g,h){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,m,g,y)}}return e}const Tn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Mn},Symbol.toStringTag,{value:"Module"})),Rn=ut(Tn);Object.defineProperty(k,"__esModule",{value:!0});k.bodyOpenClassName=k.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Je=G,ie=Q(Je),Pn=dt,le=Q(Pn),Nn=qe,u=Q(Nn),Fn=En,Re=Q(Fn),Dn=N,An=$n(Dn),D=j,je=Q(D),Ln=Rn;function $n(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Q(e){return e&&e.__esModule?e:{default:e}}function Un(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function In(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var kn=k.portalClassName="ReactModalPortal",Wn=k.bodyOpenClassName="ReactModal__Body--open",$=D.canUseDOM&&le.default.createPortal!==void 0,Ne=function(t){return document.createElement(t)},Fe=function(){return $?le.default.createPortal:le.default.unstable_renderSubtreeIntoContainer};function re(e){return e()}var ee=function(e){In(t,e);function t(){var n,r,a,l;Un(this,t);for(var v=arguments.length,i=Array(v),b=0;b<v;b++)i[b]=arguments[b];return l=(r=(a=Pe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!$&&le.default.unmountComponentAtNode(a.node);var m=re(a.props.parentSelector);m&&m.contains(a.node)?m.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(m){a.portal=m},a.renderPortal=function(m){var g=Fe(),h=g(a,ie.default.createElement(Re.default,Te({defaultStyles:t.defaultStyles},m)),a.node);a.portalRef(h)},r),Pe(a,l)}return jn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){$||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=re(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=re(r.parentSelector),l=re(this.props.parentSelector);return{prevParent:a,nextParent:l}}},{key:"componentDidUpdate",value:function(r,a,l){if(D.canUseDOM){var v=this.props,i=v.isOpen,b=v.portalClassName;r.portalClassName!==b&&(this.node.className=b);var m=l.prevParent,g=l.nextParent;g!==m&&(m.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!i)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),l=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);l?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-a)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!$)return null;!this.node&&$&&(this.node=Ne("div"));var r=Fe();return r(ie.default.createElement(Re.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){An.setElement(r)}}]),t}(Je.Component);ee.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(je.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(je.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ee.defaultProps={isOpen:!1,portalClassName:kn,bodyOpenClassName:Wn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ie.default.createElement("div",t,n)},contentElement:function(t,n){return ie.default.createElement("div",t,n)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Ln.polyfill)(ee);k.default=ee;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=k,r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}t.default=r.default,e.exports=t.default})(me,me.exports);var Hn=me.exports;const Ze=ft(Hn);var U=256,Qe=[],De=256,ae;for(;U--;)Qe[U]=(U+256).toString(16).substring(1);function ce(e){var t=0,n=e||11;if(!ae||U+n>De*2)for(ae="",U=0;t<De;t++)ae+=Qe[Math.random()*256|0];return ae.substring(U,U+++n)}const qn=p.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,Bn=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,zn=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Kn=p.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Vn=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Yn=p.p`
  color: ${e=>e.theme.colors.grey};
`,Xn=p.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Gn=xe`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,Ae=p.button`
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
      animation: ${Gn} 0.3s ease-out forwards;
    }
  }
`,Jn=p.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,Zn=p.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,et=({details:e})=>{const t=(a,l)=>a==="beds"||a==="hob"||a==="airConditioner"?l:l===1?"":l,n=(a,l)=>a==="beds"?l===1?"bed":a:a==="airConditioner"?r(a):a,r=a=>{const l=a.charAt(0).toUpperCase()+a.slice(1,3),v=a.slice(3).toLowerCase();return l+" "+v};return s.jsx(s.Fragment,{children:Object.entries(e).map(([a,l])=>l===0?s.jsx("div",{style:{display:"none"}},ce()):s.jsxs(Jn,{children:[s.jsx(we,{width:20,height:20,iconId:a==="bathroom"?"toilet":a.toLowerCase()}),s.jsxs(Zn,{children:[t(a,l)," ",n(a,l)]})]},ce()))})},Qn=p.div``,eo=p.div`
  width: 430px;
`,to=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,no=p.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,oo=p.div`
  margin-top: 24px;
`,H=p.div`
  display: flex;
  justify-content: space-between;
`,M=p.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,ro=({car:e})=>{const t="not specified";return s.jsx(Qn,{children:s.jsxs(eo,{children:[s.jsx(to,{children:s.jsx(et,{details:e.details})}),s.jsx(no,{children:"Vehicle details"}),s.jsxs(oo,{children:[s.jsxs(H,{children:[s.jsx(M,{children:"Form"}),s.jsx(M,{children:e.form||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Length"}),s.jsx(M,{children:e.length||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Width"}),s.jsx(M,{children:e.width||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Height"}),s.jsx(M,{children:e.height||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Tank"}),s.jsx(M,{children:e.tank||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Consumption"}),s.jsx(M,{children:e.consumption||t})]})]})]})})},ao=p.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,so=p.li``,io=p.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,lo=p.p`
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
`,co=p.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,uo=p.div``,fo=p.p``,po=({reviews:e})=>s.jsx("div",{children:s.jsx(ao,{children:e.map(t=>(console.log(t),s.jsxs(so,{children:[s.jsxs(io,{children:[s.jsx(lo,{children:t.reviewer_name?t.reviewer_name.charAt(0).toUpperCase():"A"}),s.jsxs(uo,{children:[s.jsx(co,{children:t.reviewer_name?t.reviewer_name:"anonim"}),s.jsx("div",{})]})]}),s.jsx(fo,{children:t.comment})]},ce())))})}),ho={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ze.setAppElement("#root");const mo=({modalIsOpen:e,closeModal:t,car:n})=>{const[r,a]=G.useState(!1);return G.useEffect(()=>{const l=document.body.style.overflow;if(e){const v=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${v}px`}else{const v=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,v*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),s.jsx(Ze,{isOpen:e,onRequestClose:t,style:ho,contentLabel:"Car Modal",children:s.jsxs("div",{children:[s.jsx(qn,{onClick:()=>t(),children:s.jsx(we,{width:32,height:32,iconId:"close"})}),s.jsx(Bn,{children:n.name}),s.jsxs(zn,{children:[s.jsxs("p",{children:[n.rating," ",s.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:n.location})]}),s.jsxs(Kn,{children:["€",n.price,".00"]}),s.jsx(Vn,{children:n.gallery.map(l=>s.jsx(Ie,{$bgImage:l},ce()))}),s.jsx(Yn,{children:n.description}),s.jsxs(Xn,{children:[s.jsx(Ae,{onClick:()=>a(!r),className:r?"":"isOpen",children:"Features"}),s.jsx(Ae,{onClick:()=>a(!r),className:r?"isOpen":"",children:"Reviews"})]}),r?s.jsx(po,{reviews:n.reviews||[]}):s.jsx(ro,{car:n})]})})},vo=e=>pt(bt).some(n=>n.car._id===e),go=({car:e,hidden:t})=>{const[n,r]=G.useState(!1),a=ht();function l(){r(!0)}function v(){r(!1)}const i=m=>{a(mt(m))},b=vo(e._id);return s.jsxs(_t,{className:t?"hidden":"",children:[s.jsx(Ie,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),s.jsxs("div",{children:[s.jsxs(St,{children:[s.jsx(Se,{children:e.name}),s.jsxs(Et,{children:[s.jsxs(Se,{children:["€",e.price,".00"]}),s.jsx(Mt,{onClick:()=>i(e._id),children:s.jsx(we,{width:24,height:24,iconId:b?"heart-red":"heart"})})]})]}),s.jsxs(Tt,{children:[s.jsxs("p",{children:[e.rating," ",s.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:e.location})]}),s.jsx(Rt,{children:e.description}),s.jsx(jt,{children:s.jsx(et,{details:e.details})}),s.jsx(Pt,{onClick:()=>l(),children:"Show more"})]}),s.jsx(mo,{modalIsOpen:n,closeModal:v,car:e})]})};export{go as C,we as I,bt as a,bo as s};
