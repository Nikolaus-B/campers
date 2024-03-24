import{f as de,j as s,h as we,u as h,r as J,g as ut,i as dt,k as ft,a as pt,b as ht,l as mt}from"./index-BzWMwyDQ.js";const vt=e=>e.filter.inputValue,Le=e=>e.filter.equipment,yt=e=>e.filter.type,$e=e=>e.cars.cars,gt=e=>e.cars.favourites,Ue=de([$e,vt,Le],(e,t)=>e.filter(n=>{const{car:r}=n,a=r.name.toLowerCase(),l=r.location.toLowerCase();return a.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),bt=de([$e,Le],(e,t)=>e.filter(({car:n})=>{const{transmission:r,details:a}=n,l=[r];return Object.entries(a).forEach(([p,i])=>{i!==0&&l.push(p.toLowerCase())}),t.every(p=>l.includes(p))})),xt=de([Ue,yt],(e,t)=>t.length===0?e:e.filter(n=>{const{car:r}=n,a=r.form.toLowerCase();return t.some(l=>a.includes(l.toLowerCase()))})),xo=de([Ue,bt,xt],(e,t,n)=>e.filter(r=>t.includes(r)&&n.includes(r))),wt="/assets/sprite-SW9Tt7Df.svg",B=({styles:e,width:t,height:n,iconId:r})=>s.jsx(s.Fragment,{children:s.jsx("svg",{style:e,width:t,height:n,children:s.jsx("use",{href:`${wt}#${r}`})})}),Ct=we`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ot=we`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,_t=h.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};

  animation: ${Ct} 0.5s ease;

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    bottom: -100px;
    margin: -1px;
    border: 0;
    padding: 0;

    opacity: 0;
    animation: ${Ot} 0.5s ease;

    pointer-events: none;
  }
`,Ie=h.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,St=h.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Et=h.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 24px; */
`,Se=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,Mt=h.button`
  border: none;
  background-color: transparent;
`,Tt=h.div`
  display: flex;
  gap: 16px;
`,Rt=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;h.p``;const jt=h.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,Pt=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,Nt=h.button`
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
`;var ve={exports:{}},k={},ke={exports:{}},Ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dt=Ft,At=Dt;function We(){}function He(){}He.resetWarningCache=We;var Lt=function(){function e(r,a,l,p,i,g){if(g!==At){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:He,resetWarningCache:We};return n.PropTypes=n,n};ke.exports=Lt();var qe=ke.exports,ye={exports:{}},P={},ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function l(m,y){return y.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function p(m){var y=m.offsetWidth<=0&&m.offsetHeight<=0;if(y&&!m.innerHTML)return!0;try{var x=window.getComputedStyle(m),S=x.getPropertyValue("display");return y?S!==r&&l(m,x):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var y=m,x=m.getRootNode&&m.getRootNode();y&&y!==document.body;){if(x&&y===x&&(y=x.host.parentNode),p(y))return!1;y=y.parentNode}return!0}function g(m,y){var x=m.nodeName.toLowerCase(),S=a.test(x)&&!m.disabled||x==="a"&&m.href||y;return S&&i(m)}function v(m){var y=m.getAttribute("tabindex");y===null&&(y=void 0);var x=isNaN(y);return(x||y>=0)&&g(m,!x)}function b(m){var y=[].slice.call(m.querySelectorAll("*"),0).reduce(function(x,S){return x.concat(S.shadowRoot?b(S.shadowRoot):[S])},[]);return y.filter(v)}e.exports=t.default})(ge,ge.exports);var Be=ge.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=kt;P.log=Wt;P.handleBlur=Z;P.handleFocus=Q;P.markForFocusLater=Ht;P.returnFocus=qt;P.popWithoutFocus=Bt;P.setupScopedFocus=zt;P.teardownScopedFocus=Kt;var $t=Be,Ut=It($t);function It(e){return e&&e.__esModule?e:{default:e}}var z=[],q=null,be=!1;function kt(){z=[]}function Wt(){}function Z(){be=!0}function Q(){if(be){if(be=!1,!q)return;setTimeout(function(){if(!q.contains(document.activeElement)){var e=(0,Ut.default)(q)[0]||q;e.focus()}},0)}}function Ht(){z.push(document.activeElement)}function qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{z.length!==0&&(t=z.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Bt(){z.length>0&&z.pop()}function zt(e){q=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function Kt(){q=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var xe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var n=Be,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function p(i,g){var v=(0,r.default)(i);if(!v.length){g.preventDefault();return}var b=void 0,m=g.shiftKey,y=v[0],x=v[v.length-1],S=l();if(i===S){if(!m)return;b=x}if(x===S&&!m&&(b=y),y===S&&m&&(b=x),b){g.preventDefault(),b.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Y=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Y){var W=v.indexOf(S);if(W>-1&&(W+=m?-1:1),b=v[W],typeof b>"u"){g.preventDefault(),b=m?x:y,b.focus();return}g.preventDefault(),b.focus()}}e.exports=t.default})(xe,xe.exports);var Vt=xe.exports,N={},Yt=function(){},Xt=Yt,j={},ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(ze);var Gt=ze.exports;Object.defineProperty(j,"__esModule",{value:!0});j.canUseDOM=j.SafeNodeList=j.SafeHTMLCollection=void 0;var Jt=Gt,Zt=Qt(Jt);function Qt(e){return e&&e.__esModule?e:{default:e}}var fe=Zt.default,en=fe.canUseDOM?window.HTMLElement:{};j.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};j.SafeNodeList=fe.canUseDOM?window.NodeList:{};j.canUseDOM=fe.canUseDOM;j.default=en;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=an;N.log=sn;N.assertNodeList=Ke;N.setElement=ln;N.validateElement=Ce;N.hide=cn;N.show=un;N.documentNotReadyOrSSRTesting=dn;var tn=Xt,nn=rn(tn),on=j;function rn(e){return e&&e.__esModule?e:{default:e}}var T=null;function an(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function sn(){}function Ke(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function ln(e){var t=e;if(typeof t=="string"&&on.canUseDOM){var n=document.querySelectorAll(t);Ke(n,t),t=n}return T=t||T,T}function Ce(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,nn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function cn(e){var t=!0,n=!1,r=void 0;try{for(var a=Ce(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var p=l.value;p.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function un(e){var t=!0,n=!1,r=void 0;try{for(var a=Ce(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var p=l.value;p.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function dn(){T=null}var K={};Object.defineProperty(K,"__esModule",{value:!0});K.resetState=fn;K.log=pn;var X={},G={};function Ee(e,t){e.classList.remove(t)}function fn(){var e=document.getElementsByTagName("html")[0];for(var t in X)Ee(e,X[t]);var n=document.body;for(var r in G)Ee(n,G[r]);X={},G={}}function pn(){}var hn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},mn=function(t,n){return t[n]&&(t[n]-=1),n},vn=function(t,n,r){r.forEach(function(a){hn(n,a),t.add(a)})},yn=function(t,n,r){r.forEach(function(a){mn(n,a),n[a]===0&&t.remove(a)})};K.add=function(t,n){return vn(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};K.remove=function(t,n){return yn(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};var V={};Object.defineProperty(V,"__esModule",{value:!0});V.log=bn;V.resetState=xn;function gn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ve=function e(){var t=this;gn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Ve;function bn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function xn(){ie=new Ve}V.default=ie;var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.resetState=_n;Oe.log=Sn;var wn=V,Cn=On(wn);function On(e){return e&&e.__esModule?e:{default:e}}var _=void 0,R=void 0,I=[];function _n(){for(var e=[_,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=R=null,I=[]}function Sn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[_,R],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Me(){I.length!==0&&I[I.length-1].focusContent()}function En(e,t){!_&&!R&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Me),R=_.cloneNode(),R.addEventListener("focus",Me)),I=t,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(_.parentElement&&_.parentElement.removeChild(_),R.parentElement&&R.parentElement.removeChild(R))}Cn.default.subscribe(En);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a=function(){function f(d,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,w,o){return w&&f(d.prototype,w),o&&f(d,o),d}}(),l=J,p=qe,i=ne(p),g=P,v=pe(g),b=Vt,m=ne(b),y=N,x=pe(y),S=K,F=pe(S),Y=j,W=ne(Y),tt=V,_e=ne(tt);function pe(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(d[w]=f[w]);return d.default=f,d}function ne(f){return f&&f.__esModule?f:{default:f}}function nt(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function ot(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function rt(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var he={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},at=function(d){return d.code==="Tab"||d.keyCode===9},st=function(d){return d.code==="Escape"||d.keyCode===27},oe=0,me=function(f){rt(d,f);function d(w){nt(this,d);var o=ot(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,A=c.bodyOpenClassName,L=c.parentSelector,re=L&&L().ownerDocument||document;A&&F.remove(re.body,A),C&&F.remove(re.getElementsByTagName("html")[0],C),E&&oe>0&&(oe-=1,oe===0&&x.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(v.returnFocus(o.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),_e.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(v.setupScopedFocus(o.node),v.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){at(c)&&(0,m.default)(o.content,c),o.props.shouldCloseOnEsc&&st(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":r(O))==="object"?O:{base:he[c],afterOpen:he[c]+"--after-open",beforeClose:he[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,A=o.parentSelector,L=A&&A().ownerDocument||document;C&&F.add(L.body,C),E&&F.add(L.getElementsByTagName("html")[0],E),O&&(oe+=1,x.hide(c)),_e.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,A=o.children,L=O?{}:C.content,re=E?{}:C.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ct=this.props.contentElement(lt,A);return this.props.overlayElement(it,ct)}}]),d}(l.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(W.default),i.default.instanceOf(Y.SafeHTMLCollection),i.default.instanceOf(Y.SafeNodeList),i.default.arrayOf(i.default.instanceOf(W.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=me,e.exports=t.default})(ye,ye.exports);var Mn=ye.exports;function Ye(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Xe(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ge(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;Ge.__suppressDeprecationWarning=!0;function Tn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var l=e.displayName||e.name,p=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+p+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ye,t.componentWillReceiveProps=Xe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ge;var i=t.componentDidUpdate;t.componentDidUpdate=function(v,b,m){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,v,b,y)}}return e}const Rn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Tn},Symbol.toStringTag,{value:"Module"})),jn=ut(Rn);Object.defineProperty(k,"__esModule",{value:!0});k.bodyOpenClassName=k.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pn=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Je=J,le=ee(Je),Nn=dt,ce=ee(Nn),Fn=qe,u=ee(Fn),Dn=Mn,Re=ee(Dn),An=N,Ln=Un(An),D=j,je=ee(D),$n=jn;function Un(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function In(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Wn=k.portalClassName="ReactModalPortal",Hn=k.bodyOpenClassName="ReactModal__Body--open",$=D.canUseDOM&&ce.default.createPortal!==void 0,Ne=function(t){return document.createElement(t)},Fe=function(){return $?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){kn(t,e);function t(){var n,r,a,l;In(this,t);for(var p=arguments.length,i=Array(p),g=0;g<p;g++)i[g]=arguments[g];return l=(r=(a=Pe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!$&&ce.default.unmountComponentAtNode(a.node);var v=ae(a.props.parentSelector);v&&v.contains(a.node)?v.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(v){a.portal=v},a.renderPortal=function(v){var b=Fe(),m=b(a,le.default.createElement(Re.default,Te({defaultStyles:t.defaultStyles},v)),a.node);a.portalRef(m)},r),Pe(a,l)}return Pn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){$||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=ae(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=ae(r.parentSelector),l=ae(this.props.parentSelector);return{prevParent:a,nextParent:l}}},{key:"componentDidUpdate",value:function(r,a,l){if(D.canUseDOM){var p=this.props,i=p.isOpen,g=p.portalClassName;r.portalClassName!==g&&(this.node.className=g);var v=l.prevParent,b=l.nextParent;b!==v&&(v.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!i)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),l=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);l?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-a)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!$)return null;!this.node&&$&&(this.node=Ne("div"));var r=Fe();return r(le.default.createElement(Re.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Ln.setElement(r)}}]),t}(Je.Component);te.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(je.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(je.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};te.defaultProps={isOpen:!1,portalClassName:Wn,bodyOpenClassName:Hn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return le.default.createElement("div",t,n)},contentElement:function(t,n){return le.default.createElement("div",t,n)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,$n.polyfill)(te);k.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=k,r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}t.default=r.default,e.exports=t.default})(ve,ve.exports);var qn=ve.exports;const Ze=ft(qn);var U=256,Qe=[],De=256,se;for(;U--;)Qe[U]=(U+256).toString(16).substring(1);function ue(e){var t=0,n=e||11;if(!se||U+n>De*2)for(se="",U=0;t<De;t++)se+=Qe[Math.random()*256|0];return se.substring(U,U+++n)}const Bn=h.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,zn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Kn=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Vn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Yn=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Xn=h.p`
  color: ${e=>e.theme.colors.grey};
`,Gn=h.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Jn=we`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`,Ae=h.button`
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
      animation: ${Jn} 0.3s ease-out forwards;
    }
  }
`,Zn=h.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,Qn=h.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,et=({details:e})=>{const t=(a,l)=>a==="beds"||a==="hob"||a==="airConditioner"?l:l===1?"":l,n=(a,l)=>a==="beds"?l===1?"bed":a:a==="airConditioner"?r(a):a,r=a=>{const l=a.charAt(0).toUpperCase()+a.slice(1,3),p=a.slice(3).toLowerCase();return l+" "+p};return s.jsx(s.Fragment,{children:Object.entries(e).map(([a,l])=>l===0?s.jsx("div",{style:{display:"none"}},ue()):s.jsxs(Zn,{children:[s.jsx(B,{width:20,height:20,iconId:a==="bathroom"?"toilet":a.toLowerCase()}),s.jsxs(Qn,{children:[t(a,l)," ",n(a,l)]})]},ue()))})},eo=h.div``,to=h.div`
  width: 430px;
`,no=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,oo=h.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,ro=h.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,H=h.div`
  display: flex;
  justify-content: space-between;
`,M=h.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,ao=({car:e})=>{const t="not specified";return s.jsx(eo,{children:s.jsxs(to,{children:[s.jsx(no,{children:s.jsx(et,{details:e.details})}),s.jsx(oo,{children:"Vehicle details"}),s.jsxs(ro,{children:[s.jsxs(H,{children:[s.jsx(M,{children:"Form"}),s.jsx(M,{children:e.form||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Length"}),s.jsx(M,{children:e.length||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Width"}),s.jsx(M,{children:e.width||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Height"}),s.jsx(M,{children:e.height||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Tank"}),s.jsx(M,{children:e.tank||t})]}),s.jsxs(H,{children:[s.jsx(M,{children:"Consumption"}),s.jsx(M,{children:e.consumption||t})]})]})]})})},so=h.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,io=h.li``,lo=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,co=h.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`,uo=h.p`
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
`,fo=h.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,po=h.div``,ho=h.p``,mo=({reviews:e})=>{const t=n=>{const r=Math.floor(n),a=5-r,l=[];for(let p=0;p<r;p++)l.push(s.jsx(B,{width:16,height:16,iconId:"star-yellow"},`star-${p}`));for(let p=0;p<a;p++)l.push(s.jsx(B,{width:16,height:16,iconId:"star"},`gray-star-${p}`));return l};return s.jsx("div",{children:s.jsx(so,{children:e.map(n=>s.jsxs(io,{children:[s.jsxs(lo,{children:[s.jsx(uo,{children:n.reviewer_name?n.reviewer_name.charAt(0).toUpperCase():"A"}),s.jsxs(po,{children:[s.jsx(fo,{children:n.reviewer_name?n.reviewer_name:"anonim"}),s.jsx(co,{children:t(n.reviewer_rating)})]})]}),s.jsx(ho,{children:n.comment})]},ue()))})})},vo={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ze.setAppElement("#root");const yo=({modalIsOpen:e,closeModal:t,car:n})=>{const[r,a]=J.useState(!1);return J.useEffect(()=>{const l=document.body.style.overflow;if(e){const p=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${p}px`}else{const p=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,p*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),s.jsx(Ze,{isOpen:e,onRequestClose:t,style:vo,contentLabel:"Car Modal",children:s.jsxs("div",{children:[s.jsx(Bn,{onClick:()=>t(),children:s.jsx(B,{width:32,height:32,iconId:"close"})}),s.jsx(zn,{children:n.name}),s.jsxs(Kn,{children:[s.jsxs("p",{children:[n.rating," ",s.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:n.location})]}),s.jsxs(Vn,{children:["€",n.price,".00"]}),s.jsx(Yn,{children:n.gallery.map(l=>s.jsx(Ie,{$bgImage:l},ue()))}),s.jsx(Xn,{children:n.description}),s.jsxs(Gn,{children:[s.jsx(Ae,{onClick:()=>a(!r),className:r?"":"isOpen",children:"Features"}),s.jsx(Ae,{onClick:()=>a(!r),className:r?"isOpen":"",children:"Reviews"})]}),r?s.jsx(mo,{reviews:n.reviews||[]}):s.jsx(ao,{car:n})]})})},go=e=>pt(gt).some(n=>n.car._id===e),wo=({car:e,hidden:t})=>{const[n,r]=J.useState(!1),a=ht();function l(){r(!0)}function p(){r(!1)}const i=v=>{a(mt(v))},g=go(e._id);return s.jsxs(_t,{className:t?"hidden":"",children:[s.jsx(Ie,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),s.jsxs("div",{children:[s.jsxs(St,{children:[s.jsx(Se,{children:e.name}),s.jsxs(Et,{children:[s.jsxs(Se,{children:["€",e.price,".00"]}),s.jsx(Mt,{onClick:()=>i(e._id),children:s.jsx(B,{width:24,height:24,iconId:g?"heart-red":"heart"})})]})]}),s.jsxs(Tt,{children:[s.jsxs(Rt,{children:[s.jsx(B,{width:16,height:16,iconId:"star-yellow"}),s.jsx("p",{children:e.rating}),s.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:e.location})]}),s.jsx(jt,{children:e.description}),s.jsx(Pt,{children:s.jsx(et,{details:e.details})}),s.jsx(Nt,{onClick:()=>l(),children:"Show more"})]}),s.jsx(yo,{modalIsOpen:n,closeModal:p,car:e})]})};export{wo as C,B as I,gt as a,xo as s};
