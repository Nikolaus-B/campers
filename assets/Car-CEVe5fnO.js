import{f as fe,j as s,h as Ce,u as h,r as J,g as ft,i as pt,k as ht,a as mt,b as vt,l as yt}from"./index-C7UjRh6h.js";const gt=e=>e.filter.inputValue,Le=e=>e.filter.equipment,bt=e=>e.filter.type,$e=e=>e.cars.cars,xt=e=>e.cars.favourites,Ie=fe([$e,gt,Le],(e,t)=>e.filter(n=>{const{car:r}=n,a=r.name.toLowerCase(),l=r.location.toLowerCase();return a.includes(t.toLowerCase())||l.includes(t.toLowerCase())})),wt=fe([$e,Le],(e,t)=>e.filter(({car:n})=>{const{transmission:r,details:a}=n,l=[r];return Object.entries(a).forEach(([p,i])=>{i!==0&&l.push(p.toLowerCase())}),t.every(p=>l.includes(p))})),Ct=fe([Ie,bt],(e,t)=>t.length===0?e:e.filter(n=>{const{car:r}=n,a=r.form.toLowerCase();return t.some(l=>a.includes(l.toLowerCase()))})),Co=fe([Ie,wt,Ct],(e,t,n)=>e.filter(r=>t.includes(r)&&n.includes(r))),Ot="/assets/sprite-SW9Tt7Df.svg",k=({styles:e,width:t,height:n,iconId:r})=>s.jsx(s.Fragment,{children:s.jsx("svg",{style:e,width:t,height:n,children:s.jsx("use",{href:`${Ot}#${r}`})})}),_t=Ce`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,St=Ce`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,Et=h.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.md};

  animation: ${_t} 0.5s ease;

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    bottom: -100px;
    margin: -1px;
    border: 0;
    padding: 0;

    opacity: 0;
    animation: ${St} 0.5s ease;

    pointer-events: none;
  }
`,Ue=h.div`
  width: 100%;
  height: 310px;

  border-radius: ${e=>e.theme.radius.sm};
  background-image: url(${e=>e.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,Mt=h.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Tt=h.div`
  display: flex;
  gap: 10px;
`,Rt=h.p`
  width: 370px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,jt=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${e=>e.theme.fonts.bold};
`,Nt=h.button`
  border: none;
  background-color: transparent;
`,Pt=h.div`
  display: flex;
  gap: 16px;
`,Ft=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;h.p``;const Dt=h.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${e=>e.theme.colors.grey};
`,At=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`,Lt=h.button`
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
`;var ye={exports:{}},W={},ke={exports:{}},$t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",It=$t,Ut=It;function We(){}function He(){}He.resetWarningCache=We;var kt=function(){function e(r,a,l,p,i,g){if(g!==Ut){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:He,resetWarningCache:We};return n.PropTypes=n,n};ke.exports=kt();var qe=ke.exports,ge={exports:{}},N={},be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function l(m,y){return y.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function p(m){var y=m.offsetWidth<=0&&m.offsetHeight<=0;if(y&&!m.innerHTML)return!0;try{var x=window.getComputedStyle(m),S=x.getPropertyValue("display");return y?S!==r&&l(m,x):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var y=m,x=m.getRootNode&&m.getRootNode();y&&y!==document.body;){if(x&&y===x&&(y=x.host.parentNode),p(y))return!1;y=y.parentNode}return!0}function g(m,y){var x=m.nodeName.toLowerCase(),S=a.test(x)&&!m.disabled||x==="a"&&m.href||y;return S&&i(m)}function v(m){var y=m.getAttribute("tabindex");y===null&&(y=void 0);var x=isNaN(y);return(x||y>=0)&&g(m,!x)}function b(m){var y=[].slice.call(m.querySelectorAll("*"),0).reduce(function(x,S){return x.concat(S.shadowRoot?b(S.shadowRoot):[S])},[]);return y.filter(v)}e.exports=t.default})(be,be.exports);var Be=be.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Bt;N.log=zt;N.handleBlur=Z;N.handleFocus=Q;N.markForFocusLater=Kt;N.returnFocus=Vt;N.popWithoutFocus=Yt;N.setupScopedFocus=Xt;N.teardownScopedFocus=Gt;var Wt=Be,Ht=qt(Wt);function qt(e){return e&&e.__esModule?e:{default:e}}var z=[],B=null,xe=!1;function Bt(){z=[]}function zt(){}function Z(){xe=!0}function Q(){if(xe){if(xe=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,Ht.default)(B)[0]||B;e.focus()}},0)}}function Kt(){z.push(document.activeElement)}function Vt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{z.length!==0&&(t=z.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Yt(){z.length>0&&z.pop()}function Xt(e){B=e,window.addEventListener?(window.addEventListener("blur",Z,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",Z),document.attachEvent("onFocus",Q))}function Gt(){B=null,window.addEventListener?(window.removeEventListener("blur",Z),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",Z),document.detachEvent("onFocus",Q))}var we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var n=Be,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function l(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?l(i.activeElement.shadowRoot):i.activeElement}function p(i,g){var v=(0,r.default)(i);if(!v.length){g.preventDefault();return}var b=void 0,m=g.shiftKey,y=v[0],x=v[v.length-1],S=l();if(i===S){if(!m)return;b=x}if(x===S&&!m&&(b=y),y===S&&m&&(b=x),b){g.preventDefault(),b.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Y=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Y){var H=v.indexOf(S);if(H>-1&&(H+=m?-1:1),b=v[H],typeof b>"u"){g.preventDefault(),b=m?x:y,b.focus();return}g.preventDefault(),b.focus()}}e.exports=t.default})(we,we.exports);var Jt=we.exports,P={},Zt=function(){},Qt=Zt,j={},ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(ze);var en=ze.exports;Object.defineProperty(j,"__esModule",{value:!0});j.canUseDOM=j.SafeNodeList=j.SafeHTMLCollection=void 0;var tn=en,nn=on(tn);function on(e){return e&&e.__esModule?e:{default:e}}var pe=nn.default,rn=pe.canUseDOM?window.HTMLElement:{};j.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};j.SafeNodeList=pe.canUseDOM?window.NodeList:{};j.canUseDOM=pe.canUseDOM;j.default=rn;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=un;P.log=dn;P.assertNodeList=Ke;P.setElement=fn;P.validateElement=Oe;P.hide=pn;P.show=hn;P.documentNotReadyOrSSRTesting=mn;var an=Qt,sn=cn(an),ln=j;function cn(e){return e&&e.__esModule?e:{default:e}}var T=null;function un(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function dn(){}function Ke(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function fn(e){var t=e;if(typeof t=="string"&&ln.canUseDOM){var n=document.querySelectorAll(t);Ke(n,t),t=n}return T=t||T,T}function Oe(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,sn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function pn(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var p=l.value;p.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function hn(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),l;!(t=(l=a.next()).done);t=!0){var p=l.value;p.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function mn(){T=null}var K={};Object.defineProperty(K,"__esModule",{value:!0});K.resetState=vn;K.log=yn;var X={},G={};function Ee(e,t){e.classList.remove(t)}function vn(){var e=document.getElementsByTagName("html")[0];for(var t in X)Ee(e,X[t]);var n=document.body;for(var r in G)Ee(n,G[r]);X={},G={}}function yn(){}var gn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},bn=function(t,n){return t[n]&&(t[n]-=1),n},xn=function(t,n,r){r.forEach(function(a){gn(n,a),t.add(a)})},wn=function(t,n,r){r.forEach(function(a){bn(n,a),n[a]===0&&t.remove(a)})};K.add=function(t,n){return xn(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};K.remove=function(t,n){return wn(t.classList,t.nodeName.toLowerCase()=="html"?X:G,n.split(" "))};var V={};Object.defineProperty(V,"__esModule",{value:!0});V.log=On;V.resetState=_n;function Cn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ve=function e(){var t=this;Cn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Ve;function On(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function _n(){le=new Ve}V.default=le;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=Tn;_e.log=Rn;var Sn=V,En=Mn(Sn);function Mn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,R=void 0,U=[];function Tn(){for(var e=[_,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=R=null,U=[]}function Rn(){console.log("bodyTrap ----------"),console.log(U.length);for(var e=[_,R],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Me(){U.length!==0&&U[U.length-1].focusContent()}function jn(e,t){!_&&!R&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Me),R=_.cloneNode(),R.addEventListener("focus",Me)),U=t,U.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(_.parentElement&&_.parentElement.removeChild(_),R.parentElement&&R.parentElement.removeChild(R))}En.default.subscribe(jn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(f[o]=w[o])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a=function(){function f(d,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,w,o){return w&&f(d.prototype,w),o&&f(d,o),d}}(),l=J,p=qe,i=oe(p),g=N,v=he(g),b=Jt,m=oe(b),y=P,x=he(y),S=K,F=he(S),Y=j,H=oe(Y),ot=V,Se=oe(ot);function he(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(d[w]=f[w]);return d.default=f,d}function oe(f){return f&&f.__esModule?f:{default:f}}function rt(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function at(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function st(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var me={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},it=function(d){return d.code==="Tab"||d.keyCode===9},lt=function(d){return d.code==="Escape"||d.keyCode===27},re=0,ve=function(f){st(d,f);function d(w){rt(this,d);var o=at(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,O=c.appElement,E=c.ariaHideApp,C=c.htmlOpenClassName,A=c.bodyOpenClassName,L=c.parentSelector,ae=L&&L().ownerDocument||document;A&&F.remove(ae.body,A),C&&F.remove(ae.getElementsByTagName("html")[0],C),E&&re>0&&(re-=1,re===0&&x.show(O)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(v.returnFocus(o.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),Se.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(v.setupScopedFocus(o.node),v.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){it(c)&&(0,m.default)(o.content,c),o.props.shouldCloseOnEsc&&lt(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,O){var E=(typeof O>"u"?"undefined":r(O))==="object"?O:{base:me[c],afterOpen:me[c]+"--after-open",beforeClose:me[c]+"--before-close"},C=E.base;return o.state.afterOpen&&(C=C+" "+E.afterOpen),o.state.beforeClose&&(C=C+" "+E.beforeClose),typeof O=="string"&&O?C+" "+O:C},o.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(E,C){return E[c+"-"+C]=O[C],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,O=o.ariaHideApp,E=o.htmlOpenClassName,C=o.bodyOpenClassName,A=o.parentSelector,L=A&&A().ownerDocument||document;C&&F.add(L.body,C),E&&F.add(L.getElementsByTagName("html")[0],E),O&&(re+=1,x.hide(c)),Se.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,O=o.className,E=o.overlayClassName,C=o.defaultStyles,A=o.children,L=O?{}:C.content,ae=E?{}:C.overlay;if(this.shouldBeClosed())return null;var ct={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},ae,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ut=n({id:c,ref:this.setContentRef,style:n({},L,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),dt=this.props.contentElement(ut,A);return this.props.overlayElement(ct,dt)}}]),d}(l.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(H.default),i.default.instanceOf(Y.SafeHTMLCollection),i.default.instanceOf(Y.SafeNodeList),i.default.arrayOf(i.default.instanceOf(H.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=ve,e.exports=t.default})(ge,ge.exports);var Nn=ge.exports;function Ye(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Xe(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ge(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;Ge.__suppressDeprecationWarning=!0;function Pn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var l=e.displayName||e.name,p=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+p+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ye,t.componentWillReceiveProps=Xe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ge;var i=t.componentDidUpdate;t.componentDidUpdate=function(v,b,m){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,v,b,y)}}return e}const Fn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Pn},Symbol.toStringTag,{value:"Module"})),Dn=ft(Fn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},An=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Je=J,ce=te(Je),Ln=pt,ue=te(Ln),$n=qe,u=te($n),In=Nn,Re=te(In),Un=P,kn=Hn(Un),D=j,je=te(D),Wn=Dn;function Hn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function te(e){return e&&e.__esModule?e:{default:e}}function qn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Bn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var zn=W.portalClassName="ReactModalPortal",Kn=W.bodyOpenClassName="ReactModal__Body--open",$=D.canUseDOM&&ue.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Fe=function(){return $?ue.default.createPortal:ue.default.unstable_renderSubtreeIntoContainer};function se(e){return e()}var ne=function(e){Bn(t,e);function t(){var n,r,a,l;qn(this,t);for(var p=arguments.length,i=Array(p),g=0;g<p;g++)i[g]=arguments[g];return l=(r=(a=Ne(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!$&&ue.default.unmountComponentAtNode(a.node);var v=se(a.props.parentSelector);v&&v.contains(a.node)?v.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(v){a.portal=v},a.renderPortal=function(v){var b=Fe(),m=b(a,ce.default.createElement(Re.default,Te({defaultStyles:t.defaultStyles},v)),a.node);a.portalRef(m)},r),Ne(a,l)}return An(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){$||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var r=se(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=se(r.parentSelector),l=se(this.props.parentSelector);return{prevParent:a,nextParent:l}}},{key:"componentDidUpdate",value:function(r,a,l){if(D.canUseDOM){var p=this.props,i=p.isOpen,g=p.portalClassName;r.portalClassName!==g&&(this.node.className=g);var v=l.prevParent,b=l.nextParent;b!==v&&(v.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!i)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),l=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);l?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-a)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!$)return null;!this.node&&$&&(this.node=Pe("div"));var r=Fe();return r(ce.default.createElement(Re.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){kn.setElement(r)}}]),t}(Je.Component);ne.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(je.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(je.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ne.defaultProps={isOpen:!1,portalClassName:zn,bodyOpenClassName:Kn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ce.default.createElement("div",t,n)},contentElement:function(t,n){return ce.default.createElement("div",t,n)}};ne.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Wn.polyfill)(ne);W.default=ne;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=W,r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}t.default=r.default,e.exports=t.default})(ye,ye.exports);var Vn=ye.exports;const Ze=ht(Vn);var I=256,Qe=[],De=256,ie;for(;I--;)Qe[I]=(I+256).toString(16).substring(1);function ee(e){var t=0,n=e||11;if(!ie||I+n>De*2)for(ie="",I=0;t<De;t++)ie+=Qe[Math.random()*256|0];return ie.substring(I,I+++n)}const Yn=h.button`
  position: absolute;

  top: 40px;
  right: 40px;

  border: none;
  background-color: transparent;
`,Xn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 10px;
`,Gn=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Jn=h.p`
  font-size: ${e=>e.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${e=>e.theme.fonts.bold};
  margin-bottom: 24px;
`,Zn=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Qn=h.p`
  color: ${e=>e.theme.colors.grey};
`,eo=h.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,to=Ce`
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
      animation: ${to} 0.3s ease-out forwards;
    }
  }
`,et=h.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.mainWhite};
  border-radius: ${e=>e.theme.radius.lg};
`,tt=h.p`
  line-height: 20px;
  background-color: ${e=>e.theme.colors.mainWhite};
`,de=({detail:e,value:t,iconId:n})=>s.jsxs(et,{children:[s.jsx(k,{width:20,height:20,iconId:n}),s.jsxs(tt,{children:[t," ",e]})]},ee()),nt=({details:e})=>{const t=(a,l)=>a==="beds"||a==="hob"||a==="airConditioner"?l:l===1?"":l,n=(a,l)=>a==="beds"?l===1?"bed":a:a==="airConditioner"?r(a):a,r=a=>{const l=a.charAt(0).toUpperCase()+a.slice(1,3),p=a.slice(3).toLowerCase();return l+" "+p};return s.jsx(s.Fragment,{children:Object.entries(e).map(([a,l])=>l===0?s.jsx("div",{style:{display:"none"}},ee()):s.jsxs(et,{children:[s.jsx(k,{width:20,height:20,iconId:a==="bathroom"?"toilet":a.toLowerCase()}),s.jsxs(tt,{children:[t(a,l)," ",n(a,l)]})]},ee()))})},no=h.div``,oo=h.div`
  width: 430px;
`,ro=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,ao=h.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: ${e=>e.theme.fonts.mdSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,so=h.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,q=h.div`
  display: flex;
  justify-content: space-between;
`,M=h.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.md};
`,io=({car:e})=>{const t="not specified";return s.jsx(no,{children:s.jsxs(oo,{children:[s.jsxs(ro,{children:[s.jsx(de,{detail:"adults",value:e.adults,iconId:"people"}),s.jsx(de,{detail:e.transmission,value:"",iconId:"automatic"}),s.jsx(nt,{details:e.details})]}),s.jsx(ao,{children:"Vehicle details"}),s.jsxs(so,{children:[s.jsxs(q,{children:[s.jsx(M,{children:"Form"}),s.jsx(M,{children:e.form||t})]}),s.jsxs(q,{children:[s.jsx(M,{children:"Length"}),s.jsx(M,{children:e.length||t})]}),s.jsxs(q,{children:[s.jsx(M,{children:"Width"}),s.jsx(M,{children:e.width||t})]}),s.jsxs(q,{children:[s.jsx(M,{children:"Height"}),s.jsx(M,{children:e.height||t})]}),s.jsxs(q,{children:[s.jsx(M,{children:"Tank"}),s.jsx(M,{children:e.tank||t})]}),s.jsxs(q,{children:[s.jsx(M,{children:"Consumption"}),s.jsx(M,{children:e.consumption||t})]})]})]})})},lo=h.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`,co=h.li``,uo=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,fo=h.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`,po=h.p`
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
`,ho=h.p`
  font-size: ${e=>e.theme.fonts.smSize};
  font-weight: ${e=>e.theme.fonts.bold};
`,mo=h.div``,vo=h.p``,yo=({reviews:e})=>{const t=n=>{const r=Math.floor(n),a=5-r,l=[];for(let p=0;p<r;p++)l.push(s.jsx(k,{width:16,height:16,iconId:"star-yellow"},`star-${p}`));for(let p=0;p<a;p++)l.push(s.jsx(k,{width:16,height:16,iconId:"star"},`gray-star-${p}`));return l};return s.jsx("div",{children:s.jsx(lo,{children:e.map(n=>s.jsxs(co,{children:[s.jsxs(uo,{children:[s.jsx(po,{children:n.reviewer_name?n.reviewer_name.charAt(0).toUpperCase():"A"}),s.jsxs(mo,{children:[s.jsx(ho,{children:n.reviewer_name?n.reviewer_name:"anonim"}),s.jsx(fo,{children:t(n.reviewer_rating)})]})]}),s.jsx(vo,{children:n.comment})]},ee()))})})},go={overlay:{position:"fixed",width:"100vw",height:"100vh",padding:"40px 0 40px 0",background:"rgba(0, 0, 0, 0.8)"},content:{position:"relative",width:"982px",height:"700px",margin:"0 auto",top:"0",borderRadius:"4px",outline:"none",padding:"20px 20px 40px 20px"}};Ze.setAppElement("#root");const bo=({modalIsOpen:e,closeModal:t,car:n})=>{const[r,a]=J.useState(!1);return J.useEffect(()=>{const l=document.body.style.overflow;if(e){const p=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${p}px`}else{const p=parseInt(document.body.style.top||"0");document.body.style.overflow=l,document.body.style.position="",document.body.style.top="",window.scrollTo(0,p*-1)}return()=>{document.body.style.overflow=l,document.body.style.position="",document.body.style.top=""}},[e]),s.jsx(Ze,{isOpen:e,onRequestClose:t,style:go,contentLabel:"Car Modal",children:s.jsxs("div",{children:[s.jsx(Yn,{onClick:()=>t(),children:s.jsx(k,{width:32,height:32,iconId:"close"})}),s.jsx(Xn,{children:n.name}),s.jsxs(Gn,{children:[s.jsxs("p",{children:[n.rating," ",s.jsxs("span",{children:[n.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:n.location})]}),s.jsxs(Jn,{children:["€",n.price,".00"]}),s.jsx(Zn,{children:n.gallery.map(l=>s.jsx(Ue,{$bgImage:l},ee()))}),s.jsx(Qn,{children:n.description}),s.jsxs(eo,{children:[s.jsx(Ae,{onClick:()=>a(!r),className:r?"":"isOpen",children:"Features"}),s.jsx(Ae,{onClick:()=>a(!r),className:r?"isOpen":"",children:"Reviews"})]}),r?s.jsx(yo,{reviews:n.reviews||[]}):s.jsx(io,{car:n})]})})},xo=e=>mt(xt).some(n=>n.car._id===e),Oo=({car:e,hidden:t})=>{const[n,r]=J.useState(!1),a=vt();function l(){r(!0)}function p(){r(!1)}const i=v=>{a(yt(v))},g=xo(e._id);return s.jsxs(Et,{className:t?"hidden":"",children:[s.jsx(Ue,{$bgImage:e.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),s.jsxs("div",{children:[s.jsxs(Mt,{children:[s.jsx(Rt,{children:e.name}),s.jsxs(Tt,{children:[s.jsxs(jt,{children:["€",e.price,".00"]}),s.jsx(Nt,{onClick:()=>i(e._id),children:s.jsx(k,{width:24,height:24,iconId:g?"heart-red":"heart"})})]})]}),s.jsxs(Pt,{children:[s.jsxs(Ft,{children:[s.jsx(k,{width:16,height:16,iconId:"star-yellow"}),s.jsx("p",{children:e.rating}),s.jsxs("span",{children:[e.reviews.length||0," Reviews"]})]}),s.jsx("p",{children:e.location})]}),s.jsx(Dt,{children:e.description}),s.jsxs(At,{children:[s.jsx(de,{detail:"adults",value:e.adults,iconId:"people"}),s.jsx(de,{detail:e.transmission,value:"",iconId:"automatic"}),s.jsx(nt,{details:e.details})]}),s.jsx(Lt,{onClick:()=>l(),children:"Show more"})]}),s.jsx(bo,{modalIsOpen:n,closeModal:p,car:e})]})};export{Oo as C,k as I,xt as a,Co as s};
