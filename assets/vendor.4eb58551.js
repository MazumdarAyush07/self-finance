var jw=Object.defineProperty,Bw=Object.defineProperties;var zw=Object.getOwnPropertyDescriptors;var of=Object.getOwnPropertySymbols;var Hw=Object.prototype.hasOwnProperty,Kw=Object.prototype.propertyIsEnumerable;var af=(t,e,n)=>e in t?jw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,uf=(t,e)=>{for(var n in e||(e={}))Hw.call(e,n)&&af(t,n,e[n]);if(of)for(var n of of(e))Kw.call(e,n)&&af(t,n,e[n]);return t},lf=(t,e)=>Bw(t,zw(e));var wn={exports:{}},G={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var cf=Object.getOwnPropertySymbols,Ww=Object.prototype.hasOwnProperty,qw=Object.prototype.propertyIsEnumerable;function Gw(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Qw(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var hf=Qw()?Object.assign:function(t,e){for(var n,r=Gw(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)Ww.call(n,o)&&(r[o]=n[o]);if(cf){i=cf(n);for(var a=0;a<i.length;a++)qw.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=hf,rt=typeof Symbol=="function"&&Symbol.for,Jr=rt?Symbol.for("react.element"):60103,Xw=rt?Symbol.for("react.portal"):60106,Yw=rt?Symbol.for("react.fragment"):60107,Jw=rt?Symbol.for("react.strict_mode"):60108,Zw=rt?Symbol.for("react.profiler"):60114,e0=rt?Symbol.for("react.provider"):60109,t0=rt?Symbol.for("react.context"):60110,n0=rt?Symbol.for("react.forward_ref"):60112,r0=rt?Symbol.for("react.suspense"):60113,i0=rt?Symbol.for("react.memo"):60115,s0=rt?Symbol.for("react.lazy"):60116,ff=typeof Symbol=="function"&&Symbol.iterator;function Zr(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pf={};function rr(t,e,n){this.props=t,this.context=e,this.refs=pf,this.updater=n||df}rr.prototype.isReactComponent={};rr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Zr(85));this.updater.enqueueSetState(this,t,e,"setState")};rr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mf(){}mf.prototype=rr.prototype;function nu(t,e,n){this.props=t,this.context=e,this.refs=pf,this.updater=n||df}var ru=nu.prototype=new mf;ru.constructor=nu;tu(ru,rr.prototype);ru.isPureReactComponent=!0;var iu={current:null},gf=Object.prototype.hasOwnProperty,yf={key:!0,ref:!0,__self:!0,__source:!0};function vf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gf.call(e,r)&&!yf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:t,key:s,ref:o,props:i,_owner:iu.current}}function o0(t,e){return{$$typeof:Jr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function su(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jr}function a0(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(n){return e[n]})}var wf=/\/+/g,Rs=[];function Ef(t,e,n,r){if(Rs.length){var i=Rs.pop();return i.result=t,i.keyPrefix=e,i.func=n,i.context=r,i.count=0,i}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function Tf(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>Rs.length&&Rs.push(t)}function ou(t,e,n,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Jr:case Xw:s=!0}}if(s)return n(r,t,e===""?"."+uu(t,0):e),1;if(s=0,e=e===""?".":e+":",Array.isArray(t))for(var o=0;o<t.length;o++){i=t[o];var a=e+uu(i,o);s+=ou(i,a,n,r)}else if(t===null||typeof t!="object"?a=null:(a=ff&&t[ff]||t["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(t=a.call(t),o=0;!(i=t.next()).done;)i=i.value,a=e+uu(i,o++),s+=ou(i,a,n,r);else if(i==="object")throw n=""+t,Error(Zr(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return s}function au(t,e,n){return t==null?0:ou(t,"",e,n)}function uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a0(t.key):e.toString(36)}function u0(t,e){t.func.call(t.context,e,t.count++)}function l0(t,e,n){var r=t.result,i=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?lu(t,r,n,function(s){return s}):t!=null&&(su(t)&&(t=o0(t,i+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(wf,"$&/")+"/")+n)),r.push(t))}function lu(t,e,n,r,i){var s="";n!=null&&(s=(""+n).replace(wf,"$&/")+"/"),e=Ef(e,s,r,i),au(t,l0,e),Tf(e)}var _f={current:null};function Et(){var t=_f.current;if(t===null)throw Error(Zr(321));return t}var c0={ReactCurrentDispatcher:_f,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:iu,IsSomeRendererActing:{current:!1},assign:tu};G.Children={map:function(t,e,n){if(t==null)return t;var r=[];return lu(t,r,null,e,n),r},forEach:function(t,e,n){if(t==null)return t;e=Ef(null,null,e,n),au(t,u0,e),Tf(e)},count:function(t){return au(t,function(){return null},null)},toArray:function(t){var e=[];return lu(t,e,null,function(n){return n}),e},only:function(t){if(!su(t))throw Error(Zr(143));return t}};G.Component=rr;G.Fragment=Yw;G.Profiler=Zw;G.PureComponent=nu;G.StrictMode=Jw;G.Suspense=r0;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c0;G.cloneElement=function(t,e,n){if(t==null)throw Error(Zr(267,t));var r=tu({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=iu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)gf.call(e,u)&&!yf.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Jr,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:t0,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:e0,_context:t},t.Consumer=t};G.createElement=vf;G.createFactory=function(t){var e=vf.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:n0,render:t}};G.isValidElement=su;G.lazy=function(t){return{$$typeof:s0,_ctor:t,_status:-1,_result:null}};G.memo=function(t,e){return{$$typeof:i0,type:t,compare:e===void 0?null:e}};G.useCallback=function(t,e){return Et().useCallback(t,e)};G.useContext=function(t,e){return Et().useContext(t,e)};G.useDebugValue=function(){};G.useEffect=function(t,e){return Et().useEffect(t,e)};G.useImperativeHandle=function(t,e,n){return Et().useImperativeHandle(t,e,n)};G.useLayoutEffect=function(t,e){return Et().useLayoutEffect(t,e)};G.useMemo=function(t,e){return Et().useMemo(t,e)};G.useReducer=function(t,e,n){return Et().useReducer(t,e,n)};G.useRef=function(t){return Et().useRef(t)};G.useState=function(t){return Et().useState(t)};G.version="16.14.0";wn.exports=G;var IN=wn.exports,Sf={exports:{}},Xe={},If={exports:{}},kf={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i,s;if(typeof window=="undefined"||typeof MessageChannel!="function"){var o=null,a=null,u=function(){if(o!==null)try{var S=t.unstable_now();o(!0,S),o=null}catch(P){throw setTimeout(u,0),P}},l=Date.now();t.unstable_now=function(){return Date.now()-l},e=function(S){o!==null?setTimeout(e,0,S):(o=S,setTimeout(u,0))},n=function(S,P){a=setTimeout(S,P)},r=function(){clearTimeout(a)},i=function(){return!1},s=t.unstable_forceFrameRate=function(){}}else{var c=window.performance,h=window.Date,m=window.setTimeout,g=window.clearTimeout;if(typeof console!="undefined"){var _=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof _!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof c=="object"&&typeof c.now=="function")t.unstable_now=function(){return c.now()};else{var R=h.now();t.unstable_now=function(){return h.now()-R}}var d=!1,f=null,p=-1,y=5,T=0;i=function(){return t.unstable_now()>=T},s=function(){},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):y=0<S?Math.floor(1e3/S):5};var I=new MessageChannel,C=I.port2;I.port1.onmessage=function(){if(f!==null){var S=t.unstable_now();T=S+y;try{f(!0,S)?C.postMessage(null):(d=!1,f=null)}catch(P){throw C.postMessage(null),P}}else d=!1},e=function(S){f=S,d||(d=!0,C.postMessage(null))},n=function(S,P){p=m(function(){S(t.unstable_now())},P)},r=function(){g(p),p=-1}}function $(S,P){var H=S.length;S.push(P);e:for(;;){var te=H-1>>>1,oe=S[te];if(oe!==void 0&&0<Re(oe,P))S[te]=P,S[H]=oe,H=te;else break e}}function j(S){return S=S[0],S===void 0?null:S}function O(S){var P=S[0];if(P!==void 0){var H=S.pop();if(H!==P){S[0]=H;e:for(var te=0,oe=S.length;te<oe;){var yn=2*(te+1)-1,vn=S[yn],Yr=yn+1,nr=S[Yr];if(vn!==void 0&&0>Re(vn,H))nr!==void 0&&0>Re(nr,vn)?(S[te]=nr,S[Yr]=H,te=Yr):(S[te]=vn,S[yn]=H,te=yn);else if(nr!==void 0&&0>Re(nr,H))S[te]=nr,S[Yr]=H,te=Yr;else break e}}return P}return null}function Re(S,P){var H=S.sortIndex-P.sortIndex;return H!==0?H:S.id-P.id}var ze=[],$t=[],Uw=1,De=null,Ie=3,As=!1,gn=!1,Xr=!1;function xs(S){for(var P=j($t);P!==null;){if(P.callback===null)O($t);else if(P.startTime<=S)O($t),P.sortIndex=P.expirationTime,$(ze,P);else break;P=j($t)}}function Za(S){if(Xr=!1,xs(S),!gn)if(j(ze)!==null)gn=!0,e(eu);else{var P=j($t);P!==null&&n(Za,P.startTime-S)}}function eu(S,P){gn=!1,Xr&&(Xr=!1,r()),As=!0;var H=Ie;try{for(xs(P),De=j(ze);De!==null&&(!(De.expirationTime>P)||S&&!i());){var te=De.callback;if(te!==null){De.callback=null,Ie=De.priorityLevel;var oe=te(De.expirationTime<=P);P=t.unstable_now(),typeof oe=="function"?De.callback=oe:De===j(ze)&&O(ze),xs(P)}else O(ze);De=j(ze)}if(De!==null)var yn=!0;else{var vn=j($t);vn!==null&&n(Za,vn.startTime-P),yn=!1}return yn}finally{De=null,Ie=H,As=!1}}function sf(S){switch(S){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var Vw=s;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){gn||As||(gn=!0,e(eu))},t.unstable_getCurrentPriorityLevel=function(){return Ie},t.unstable_getFirstCallbackNode=function(){return j(ze)},t.unstable_next=function(S){switch(Ie){case 1:case 2:case 3:var P=3;break;default:P=Ie}var H=Ie;Ie=P;try{return S()}finally{Ie=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Vw,t.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var H=Ie;Ie=S;try{return P()}finally{Ie=H}},t.unstable_scheduleCallback=function(S,P,H){var te=t.unstable_now();if(typeof H=="object"&&H!==null){var oe=H.delay;oe=typeof oe=="number"&&0<oe?te+oe:te,H=typeof H.timeout=="number"?H.timeout:sf(S)}else H=sf(S),oe=te;return H=oe+H,S={id:Uw++,callback:P,priorityLevel:S,startTime:oe,expirationTime:H,sortIndex:-1},oe>te?(S.sortIndex=oe,$($t,S),j(ze)===null&&S===j($t)&&(Xr?r():Xr=!0,n(Za,oe-te))):(S.sortIndex=H,$(ze,S),gn||As||(gn=!0,e(eu))),S},t.unstable_shouldYield=function(){var S=t.unstable_now();xs(S);var P=j(ze);return P!==De&&De!==null&&P!==null&&P.callback!==null&&P.startTime<=S&&P.expirationTime<De.expirationTime||i()},t.unstable_wrapCallback=function(S){var P=Ie;return function(){var H=Ie;Ie=P;try{return S.apply(this,arguments)}finally{Ie=H}}}})(kf);If.exports=kf;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=wn.exports,Pe=hf,ge=If.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ds)throw Error(w(227));function h0(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var ei=!1,Ps=null,Os=!1,cu=null,f0={onError:function(t){ei=!0,Ps=t}};function d0(t,e,n,r,i,s,o,a,u){ei=!1,Ps=null,h0.apply(f0,arguments)}function p0(t,e,n,r,i,s,o,a,u){if(d0.apply(this,arguments),ei){if(ei){var l=Ps;ei=!1,Ps=null}else throw Error(w(198));Os||(Os=!0,cu=l)}}var hu=null,Cf=null,Nf=null;function Af(t,e,n){var r=t.type||"unknown-event";t.currentTarget=Nf(n),p0(r,e,void 0,t),t.currentTarget=null}var Ms=null,ir={};function xf(){if(Ms)for(var t in ir){var e=ir[t],n=Ms.indexOf(t);if(!(-1<n))throw Error(w(96,t));if(!Ls[n]){if(!e.extractEvents)throw Error(w(97,t));Ls[n]=e,n=e.eventTypes;for(var r in n){var i=void 0,s=n[r],o=e,a=r;if(fu.hasOwnProperty(a))throw Error(w(99,a));fu[a]=s;var u=s.phasedRegistrationNames;if(u){for(i in u)u.hasOwnProperty(i)&&Rf(u[i],o,a);i=!0}else s.registrationName?(Rf(s.registrationName,o,a),i=!0):i=!1;if(!i)throw Error(w(98,r,t))}}}}function Rf(t,e,n){if(sr[t])throw Error(w(100,t));sr[t]=e,du[t]=e.eventTypes[n].dependencies}var Ls=[],fu={},sr={},du={};function Df(t){var e=!1,n;for(n in t)if(t.hasOwnProperty(n)){var r=t[n];if(!ir.hasOwnProperty(n)||ir[n]!==r){if(ir[n])throw Error(w(102,n));ir[n]=r,e=!0}}e&&xf()}var bt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),pu=null,or=null,ar=null;function Pf(t){if(t=Cf(t)){if(typeof pu!="function")throw Error(w(280));var e=t.stateNode;e&&(e=hu(e),pu(t.stateNode,t.type,e))}}function Of(t){or?ar?ar.push(t):ar=[t]:or=t}function Mf(){if(or){var t=or,e=ar;if(ar=or=null,Pf(t),e)for(t=0;t<e.length;t++)Pf(e[t])}}function mu(t,e){return t(e)}function Lf(t,e,n,r,i){return t(e,n,r,i)}function gu(){}var $f=mu,En=!1,yu=!1;function vu(){(or!==null||ar!==null)&&(gu(),Mf())}function bf(t,e,n){if(yu)return t(e,n);yu=!0;try{return $f(t,e,n)}finally{yu=!1,vu()}}var m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff=Object.prototype.hasOwnProperty,Uf={},Vf={};function g0(t){return Ff.call(Vf,t)?!0:Ff.call(Uf,t)?!1:m0.test(t)?Vf[t]=!0:(Uf[t]=!0,!1)}function y0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v0(t,e,n,r){if(e===null||typeof e=="undefined"||y0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Oe(t,0,!1,t,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Oe(e,1,!1,t[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Oe(t,2,!1,t,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Oe(t,3,!0,t,null,!1)});["capture","download"].forEach(function(t){ye[t]=new Oe(t,4,!1,t,null,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Oe(t,6,!1,t,null,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1)});var wu=/[\-:]([a-z])/g;function Eu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wu,Eu);ye[e]=new Oe(e,1,!1,t,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wu,Eu);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wu,Eu);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1)});ye.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0)});var it=Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;it.hasOwnProperty("ReactCurrentDispatcher")||(it.ReactCurrentDispatcher={current:null});it.hasOwnProperty("ReactCurrentBatchConfig")||(it.ReactCurrentBatchConfig={suspense:null});function Tu(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(v0(e,n,i,r)&&(n=null),r||i===null?g0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var w0=/^(.*)[\\\/]/,Fe=typeof Symbol=="function"&&Symbol.for,$s=Fe?Symbol.for("react.element"):60103,ur=Fe?Symbol.for("react.portal"):60106,Tn=Fe?Symbol.for("react.fragment"):60107,jf=Fe?Symbol.for("react.strict_mode"):60108,bs=Fe?Symbol.for("react.profiler"):60114,Bf=Fe?Symbol.for("react.provider"):60109,zf=Fe?Symbol.for("react.context"):60110,E0=Fe?Symbol.for("react.concurrent_mode"):60111,_u=Fe?Symbol.for("react.forward_ref"):60112,Fs=Fe?Symbol.for("react.suspense"):60113,Su=Fe?Symbol.for("react.suspense_list"):60120,Iu=Fe?Symbol.for("react.memo"):60115,Hf=Fe?Symbol.for("react.lazy"):60116,Kf=Fe?Symbol.for("react.block"):60121,Wf=typeof Symbol=="function"&&Symbol.iterator;function ti(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}function T0(t){if(t._status===-1){t._status=0;var e=t._ctor;e=e(),t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}}function Tt(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Tn:return"Fragment";case ur:return"Portal";case bs:return"Profiler";case jf:return"StrictMode";case Fs:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zf:return"Context.Consumer";case Bf:return"Context.Provider";case _u:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Iu:return Tt(t.type);case Kf:return Tt(t.render);case Hf:if(t=t._status===1?t._result:null)return Tt(t)}return null}function ku(t){var e="";do{e:switch(t.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=t._debugOwner,i=t._debugSource,s=Tt(t.type);n=null,r&&(n=Tt(r.type)),r=s,s="",i?s=" (at "+i.fileName.replace(w0,"")+":"+i.lineNumber+")":n&&(s=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+s}e+=n,t=t.return}while(t);return e}function Ft(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function qf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _0(t){var e=qf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=_0(t))}function Gf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cu(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ft(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xf(t,e){e=e.checked,e!=null&&Tu(t,"checked",e,!1)}function Nu(t,e){Xf(t,e);var n=Ft(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,Ft(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||t.ownerDocument.activeElement!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function S0(t){var e="";return Ds.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function xu(t,e){return t=Pe({children:void 0},e),(e=S0(e.children))&&(t.children=e),t}function lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ft(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ft(n)}}function Zf(t,e){var n=Ft(e.value),r=Ft(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ed(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var td={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function nd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,rd=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==td.svg||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}function js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Pu={},id={};bt&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Bs(t){if(Pu[t])return Pu[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in id)return Pu[t]=e[n];return t}var sd=Bs("animationend"),od=Bs("animationiteration"),ad=Bs("animationstart"),ud=Bs("transitionend"),ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ld=new(typeof WeakMap=="function"?WeakMap:Map);function Ou(t){var e=ld.get(t);return e===void 0&&(e=new Map,ld.set(t,e)),e}function _n(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.effectTag&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hd(t){if(_n(t)!==t)throw Error(w(188))}function I0(t){var e=t.alternate;if(!e){if(e=_n(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hd(i),t;if(s===r)return hd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function fd(t){if(t=I0(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function hr(t,e){if(e==null)throw Error(w(30));return t==null?e:Array.isArray(t)?Array.isArray(e)?(t.push.apply(t,e),t):(t.push(e),t):Array.isArray(e)?[t].concat(e):[t,e]}function Mu(t,e,n){Array.isArray(t)?t.forEach(e,n):t&&e.call(n,t)}var ii=null;function k0(t){if(t){var e=t._dispatchListeners,n=t._dispatchInstances;if(Array.isArray(e))for(var r=0;r<e.length&&!t.isPropagationStopped();r++)Af(t,e[r],n[r]);else e&&Af(t,e,n);t._dispatchListeners=null,t._dispatchInstances=null,t.isPersistent()||t.constructor.release(t)}}function zs(t){if(t!==null&&(ii=hr(ii,t)),t=ii,ii=null,t){if(Mu(t,k0),ii)throw Error(w(95));if(Os)throw t=cu,Os=!1,cu=null,t}}function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}function dd(t){if(!bt)return!1;t="on"+t;var e=t in document;return e||(e=document.createElement("div"),e.setAttribute(t,"return;"),e=typeof e[t]=="function"),e}var Hs=[];function pd(t){t.topLevelType=null,t.nativeEvent=null,t.targetInst=null,t.ancestors.length=0,10>Hs.length&&Hs.push(t)}function md(t,e,n,r){if(Hs.length){var i=Hs.pop();return i.topLevelType=t,i.eventSystemFlags=r,i.nativeEvent=e,i.targetInst=n,i}return{topLevelType:t,eventSystemFlags:r,nativeEvent:e,targetInst:n,ancestors:[]}}function gd(t){var e=t.targetInst,n=e;do{if(!n){t.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;e=n.tag,e!==5&&e!==6||t.ancestors.push(n),n=di(r)}while(n);for(n=0;n<t.ancestors.length;n++){e=t.ancestors[n];var i=Lu(t.nativeEvent);r=t.topLevelType;var s=t.nativeEvent,o=t.eventSystemFlags;n===0&&(o|=64);for(var a=null,u=0;u<Ls.length;u++){var l=Ls[u];l&&(l=l.extractEvents(r,e,s,i,o))&&(a=hr(a,l))}zs(a)}}function $u(t,e,n){if(!n.has(t)){switch(t){case"scroll":ci(e,"scroll",!0);break;case"focus":case"blur":ci(e,"focus",!0),ci(e,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":dd(t)&&ci(e,t,!0);break;case"invalid":case"submit":case"reset":break;default:ri.indexOf(t)===-1&&Z(t,e)}n.set(t,null)}}var yd,bu,vd,Fu=!1,at=[],Ut=null,Vt=null,jt=null,si=new Map,oi=new Map,ai=[],Uu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),C0="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function N0(t,e){var n=Ou(e);Uu.forEach(function(r){$u(r,e,n)}),C0.forEach(function(r){$u(r,e,n)})}function Vu(t,e,n,r,i){return{blockedOn:t,topLevelType:e,eventSystemFlags:n|32,nativeEvent:i,container:r}}function wd(t,e){switch(t){case"focus":case"blur":Ut=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Vu(e,n,r,i,s),e!==null&&(e=pi(e),e!==null&&bu(e)),t):(t.eventSystemFlags|=r,t)}function A0(t,e,n,r,i){switch(e){case"focus":return Ut=ui(Ut,t,e,n,r,i),!0;case"dragenter":return Vt=ui(Vt,t,e,n,r,i),!0;case"mouseover":return jt=ui(jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return si.set(s,ui(si.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,ui(oi.get(s)||null,t,e,n,r,i)),!0}return!1}function x0(t){var e=di(t.target);if(e!==null){var n=_n(e);if(n!==null){if(e=n.tag,e===13){if(e=cd(n),e!==null){t.blockedOn=e,ge.unstable_runWithPriority(t.priority,function(){vd(n)});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;var e=Hu(t.topLevelType,t.eventSystemFlags,t.container,t.nativeEvent);if(e!==null){var n=pi(e);return n!==null&&bu(n),t.blockedOn=e,!1}return!0}function Ed(t,e,n){Ks(t)&&n.delete(e)}function R0(){for(Fu=!1;0<at.length;){var t=at[0];if(t.blockedOn!==null){t=pi(t.blockedOn),t!==null&&yd(t);break}var e=Hu(t.topLevelType,t.eventSystemFlags,t.container,t.nativeEvent);e!==null?t.blockedOn=e:at.shift()}Ut!==null&&Ks(Ut)&&(Ut=null),Vt!==null&&Ks(Vt)&&(Vt=null),jt!==null&&Ks(jt)&&(jt=null),si.forEach(Ed),oi.forEach(Ed)}function li(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,R0)))}function Td(t){function e(i){return li(i,t)}if(0<at.length){li(at[0],t);for(var n=1;n<at.length;n++){var r=at[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ut!==null&&li(Ut,t),Vt!==null&&li(Vt,t),jt!==null&&li(jt,t),si.forEach(e),oi.forEach(e),n=0;n<ai.length;n++)r=ai[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ai.length&&(n=ai[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&ai.shift()}var _d={},Sd=new Map,ju=new Map,D0=["abort","abort",sd,"animationEnd",od,"animationIteration",ad,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ud,"transitionEnd","waiting","waiting"];function Bu(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1],s="on"+(i[0].toUpperCase()+i.slice(1));s={phasedRegistrationNames:{bubbled:s,captured:s+"Capture"},dependencies:[r],eventPriority:e},ju.set(r,e),Sd.set(r,s),_d[i]=s}}Bu("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Bu("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Bu(D0,2);for(var Id="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),zu=0;zu<Id.length;zu++)ju.set(Id[zu],0);var P0=ge.unstable_UserBlockingPriority,O0=ge.unstable_runWithPriority,Ws=!0;function Z(t,e){ci(e,t,!1)}function ci(t,e,n){var r=ju.get(e);switch(r===void 0?2:r){case 0:r=M0.bind(null,e,1,t);break;case 1:r=L0.bind(null,e,1,t);break;default:r=qs.bind(null,e,1,t)}n?t.addEventListener(e,r,!0):t.addEventListener(e,r,!1)}function M0(t,e,n,r){En||gu();var i=qs,s=En;En=!0;try{Lf(i,t,e,n,r)}finally{(En=s)||vu()}}function L0(t,e,n,r){O0(P0,qs.bind(null,t,e,n,r))}function qs(t,e,n,r){if(Ws)if(0<at.length&&-1<Uu.indexOf(t))t=Vu(null,t,e,n,r),at.push(t);else{var i=Hu(t,e,n,r);if(i===null)wd(t,r);else if(-1<Uu.indexOf(t))t=Vu(i,t,e,n,r),at.push(t);else if(!A0(i,t,e,n,r)){wd(t,r),t=md(t,r,null,e);try{bf(gd,t)}finally{pd(t)}}}}function Hu(t,e,n,r){if(n=Lu(r),n=di(n),n!==null){var i=_n(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=cd(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}t=md(t,r,n,e);try{bf(gd,t)}finally{pd(t)}return null}var hi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(t){$0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hi[e]=hi[t]})});function kd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hi.hasOwnProperty(t)&&hi[t]?(""+e).trim():e+"px"}function Cd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var b0=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(b0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t,""));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62,""))}}function Wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=td.html;function _t(t,e){t=t.nodeType===9||t.nodeType===11?t:t.ownerDocument;var n=Ou(t);e=du[e];for(var r=0;r<e.length;r++)$u(e[r],t,n)}function Gs(){}function qu(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,e){var n=Ad(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Rd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dd(){for(var t=window,e=qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qu(t.document)}return e}function Gu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Pd="$",Od="/$",Qu="$?",Xu="$!",Yu=null,Ju=null;function Md(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Zu(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,F0=typeof clearTimeout=="function"?clearTimeout:void 0;function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n===Pd||n===Xu||n===Qu){if(e===0)return t;e--}else n===Od&&e++}t=t.previousSibling}return null}var tl=Math.random().toString(36).slice(2),Bt="__reactInternalInstance$"+tl,Qs="__reactEventHandlers$"+tl,fi="__reactContainere$"+tl;function di(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ld(t);t!==null;){if(n=t[Bt])return n;t=Ld(t)}return e}t=n,n=t.parentNode}return null}function pi(t){return t=t[Bt]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Sn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function nl(t){return t[Qs]||null}function St(t){do t=t.return;while(t&&t.tag!==5);return t||null}function $d(t,e){var n=t.stateNode;if(!n)return null;var r=hu(n);if(!r)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}function bd(t,e,n){(e=$d(t,n.dispatchConfig.phasedRegistrationNames[e]))&&(n._dispatchListeners=hr(n._dispatchListeners,e),n._dispatchInstances=hr(n._dispatchInstances,t))}function U0(t){if(t&&t.dispatchConfig.phasedRegistrationNames){for(var e=t._targetInst,n=[];e;)n.push(e),e=St(e);for(e=n.length;0<e--;)bd(n[e],"captured",t);for(e=0;e<n.length;e++)bd(n[e],"bubbled",t)}}function rl(t,e,n){t&&n&&n.dispatchConfig.registrationName&&(e=$d(t,n.dispatchConfig.registrationName))&&(n._dispatchListeners=hr(n._dispatchListeners,e),n._dispatchInstances=hr(n._dispatchInstances,t))}function V0(t){t&&t.dispatchConfig.registrationName&&rl(t._targetInst,null,t)}function dr(t){Mu(t,U0)}var zt=null,il=null,Xs=null;function Fd(){if(Xs)return Xs;var t,e=il,n=e.length,r,i="value"in zt?zt.value:zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xs=i.slice(t,1<r?1-r:void 0)}function Ys(){return!0}function Js(){return!1}function He(t,e,n,r){this.dispatchConfig=t,this._targetInst=e,this.nativeEvent=n,t=this.constructor.Interface;for(var i in t)t.hasOwnProperty(i)&&((e=t[i])?this[i]=e(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ys:Js,this.isPropagationStopped=Js,this}Pe(He.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){this.isPersistent=Ys},isPersistent:Js,destructor:function(){var t=this.constructor.Interface,e;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Js,this._dispatchInstances=this._dispatchListeners=null}});He.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};He.extend=function(t){function e(){}function n(){return r.apply(this,arguments)}var r=this;e.prototype=r.prototype;var i=new e;return Pe(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=Pe({},r.Interface,t),n.extend=r.extend,Ud(n),n};Ud(He);function j0(t,e,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,t,e,n,r),i}return new this(t,e,n,r)}function B0(t){if(!(t instanceof this))throw Error(w(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function Ud(t){t.eventPool=[],t.getPooled=j0,t.release=B0}var z0=He.extend({data:null}),H0=He.extend({data:null}),K0=[9,13,27,32],sl=bt&&"CompositionEvent"in window,mi=null;bt&&"documentMode"in document&&(mi=document.documentMode);var W0=bt&&"TextEvent"in window&&!mi,Vd=bt&&(!sl||mi&&8<mi&&11>=mi),jd=String.fromCharCode(32),It={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Bd=!1;function zd(t,e){switch(t){case"keyup":return K0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function q0(t,e){switch(t){case"compositionend":return Hd(e);case"keypress":return e.which!==32?null:(Bd=!0,jd);case"textInput":return t=e.data,t===jd&&Bd?null:t;default:return null}}function G0(t,e){if(pr)return t==="compositionend"||!sl&&zd(t,e)?(t=Fd(),Xs=il=zt=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vd&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={eventTypes:It,extractEvents:function(t,e,n,r){var i;if(sl)e:{switch(t){case"compositionstart":var s=It.compositionStart;break e;case"compositionend":s=It.compositionEnd;break e;case"compositionupdate":s=It.compositionUpdate;break e}s=void 0}else pr?zd(t,n)&&(s=It.compositionEnd):t==="keydown"&&n.keyCode===229&&(s=It.compositionStart);return s?(Vd&&n.locale!=="ko"&&(pr||s!==It.compositionStart?s===It.compositionEnd&&pr&&(i=Fd()):(zt=r,il="value"in zt?zt.value:zt.textContent,pr=!0)),s=z0.getPooled(s,e,n,r),i?s.data=i:(i=Hd(n),i!==null&&(s.data=i)),dr(s),i=s):i=null,(t=W0?q0(t,n):G0(t,n))?(e=H0.getPooled(It.beforeInput,e,n,r),e.data=t,dr(e)):e=null,i===null?e:e===null?i:[i,e]}},X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X0[t.type]:e==="textarea"}var Wd={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function qd(t,e,n){return t=He.getPooled(Wd.change,t,e,n),t.type="change",Of(n),dr(t),t}var gi=null,yi=null;function Y0(t){zs(t)}function Zs(t){var e=Sn(t);if(Gf(e))return t}function J0(t,e){if(t==="change")return e}var ol=!1;bt&&(ol=dd("input")&&(!document.documentMode||9<document.documentMode));function Gd(){gi&&(gi.detachEvent("onpropertychange",Qd),yi=gi=null)}function Qd(t){if(t.propertyName==="value"&&Zs(yi))if(t=qd(yi,t,Lu(t)),En)zs(t);else{En=!0;try{mu(Y0,t)}finally{En=!1,vu()}}}function Z0(t,e,n){t==="focus"?(Gd(),gi=e,yi=n,gi.attachEvent("onpropertychange",Qd)):t==="blur"&&Gd()}function eE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zs(yi)}function tE(t,e){if(t==="click")return Zs(e)}function nE(t,e){if(t==="input"||t==="change")return Zs(e)}var rE={eventTypes:Wd,_isInputEventSupported:ol,extractEvents:function(t,e,n,r){var i=e?Sn(e):window,s=i.nodeName&&i.nodeName.toLowerCase();if(s==="select"||s==="input"&&i.type==="file")var o=J0;else if(Kd(i))if(ol)o=nE;else{o=eE;var a=Z0}else(s=i.nodeName)&&s.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(o=tE);if(o&&(o=o(t,e)))return qd(o,n,r);a&&a(t,i,e),t==="blur"&&(t=i._wrapperState)&&t.controlled&&i.type==="number"&&Au(i,"number",i.value)}},vi=He.extend({view:null,detail:null}),iE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iE[t])?!!e[t]:!1}function al(){return sE}var Xd=0,Yd=0,Jd=!1,Zd=!1,wi=vi.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:al,button:null,buttons:null,relatedTarget:function(t){return t.relatedTarget||(t.fromElement===t.srcElement?t.toElement:t.fromElement)},movementX:function(t){if("movementX"in t)return t.movementX;var e=Xd;return Xd=t.screenX,Jd?t.type==="mousemove"?t.screenX-e:0:(Jd=!0,0)},movementY:function(t){if("movementY"in t)return t.movementY;var e=Yd;return Yd=t.screenY,Zd?t.type==="mousemove"?t.screenY-e:0:(Zd=!0,0)}}),ep=wi.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Ei={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},oE={eventTypes:Ei,extractEvents:function(t,e,n,r,i){var s=t==="mouseover"||t==="pointerover",o=t==="mouseout"||t==="pointerout";if(s&&(i&32)==0&&(n.relatedTarget||n.fromElement)||!o&&!s)return null;if(s=r.window===r?r:(s=r.ownerDocument)?s.defaultView||s.parentWindow:window,o){if(o=e,e=(e=n.relatedTarget||n.toElement)?di(e):null,e!==null){var a=_n(e);(e!==a||e.tag!==5&&e.tag!==6)&&(e=null)}}else o=null;if(o===e)return null;if(t==="mouseout"||t==="mouseover")var u=wi,l=Ei.mouseLeave,c=Ei.mouseEnter,h="mouse";else(t==="pointerout"||t==="pointerover")&&(u=ep,l=Ei.pointerLeave,c=Ei.pointerEnter,h="pointer");if(t=o==null?s:Sn(o),s=e==null?s:Sn(e),l=u.getPooled(l,o,n,r),l.type=h+"leave",l.target=t,l.relatedTarget=s,n=u.getPooled(c,e,n,r),n.type=h+"enter",n.target=s,n.relatedTarget=t,r=o,h=e,r&&h)e:{for(u=r,c=h,o=0,t=u;t;t=St(t))o++;for(t=0,e=c;e;e=St(e))t++;for(;0<o-t;)u=St(u),o--;for(;0<t-o;)c=St(c),t--;for(;o--;){if(u===c||u===c.alternate)break e;u=St(u),c=St(c)}u=null}else u=null;for(c=u,u=[];r&&r!==c&&(o=r.alternate,!(o!==null&&o===c));)u.push(r),r=St(r);for(r=[];h&&h!==c&&(o=h.alternate,!(o!==null&&o===c));)r.push(h),h=St(h);for(h=0;h<u.length;h++)rl(u[h],"bubbled",l);for(h=r.length;0<h--;)rl(r[h],"captured",n);return(i&64)==0?[l]:[l,n]}};function aE(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:aE,uE=Object.prototype.hasOwnProperty;function Ti(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!uE.call(e,n[r])||!In(t[n[r]],e[n[r]]))return!1;return!0}var lE=bt&&"documentMode"in document&&11>=document.documentMode,tp={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},mr=null,ul=null,_i=null,ll=!1;function np(t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;return ll||mr==null||mr!==qu(n)?null:(n=mr,"selectionStart"in n&&Gu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_i&&Ti(_i,n)?null:(_i=n,t=He.getPooled(tp.select,ul,t,e),t.type="select",t.target=mr,dr(t),t))}var cE={eventTypes:tp,extractEvents:function(t,e,n,r,i,s){if(i=s||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(s=!i)){e:{i=Ou(i),s=du.onSelect;for(var o=0;o<s.length;o++)if(!i.has(s[o])){i=!1;break e}i=!0}s=!i}if(s)return null;switch(i=e?Sn(e):window,t){case"focus":(Kd(i)||i.contentEditable==="true")&&(mr=i,ul=e,_i=null);break;case"blur":_i=ul=mr=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":return ll=!1,np(n,r);case"selectionchange":if(lE)break;case"keydown":case"keyup":return np(n,r)}return null}},hE=He.extend({animationName:null,elapsedTime:null,pseudoElement:null}),fE=He.extend({clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dE=vi.extend({relatedTarget:null});function eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}var pE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gE=vi.extend({key:function(t){if(t.key){var e=pE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mE[t.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:al,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yE=wi.extend({dataTransfer:null}),vE=vi.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:al}),wE=He.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),EE=wi.extend({deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:null,deltaMode:null}),TE={eventTypes:_d,extractEvents:function(t,e,n,r){var i=Sd.get(t);if(!i)return null;switch(t){case"keypress":if(eo(n)===0)return null;case"keydown":case"keyup":t=gE;break;case"blur":case"focus":t=dE;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":t=wi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":t=yE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":t=vE;break;case sd:case od:case ad:t=hE;break;case ud:t=wE;break;case"scroll":t=vi;break;case"wheel":t=EE;break;case"copy":case"cut":case"paste":t=fE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":t=ep;break;default:t=He}return e=t.getPooled(i,e,n,r),dr(e),e}};if(Ms)throw Error(w(101));Ms=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));xf();var _E=pi;hu=nl;Cf=_E;Nf=Sn;Df({SimpleEventPlugin:TE,EnterLeaveEventPlugin:oE,ChangeEventPlugin:rE,SelectEventPlugin:cE,BeforeInputEventPlugin:Q0});var cl=[],gr=-1;function Y(t){0>gr||(t.current=cl[gr],cl[gr]=null,gr--)}function ne(t,e){gr++,cl[gr]=t.current,t.current=e}var Ht={},ke={current:Ht},Ue={current:!1},kn=Ht;function yr(t,e){var n=t.type.contextTypes;if(!n)return Ht;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function to(){Y(Ue),Y(ke)}function rp(t,e,n){if(ke.current!==Ht)throw Error(w(168));ne(ke,e),ne(Ue,n)}function ip(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Tt(e)||"Unknown",i));return Pe({},n,{},r)}function no(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ht,kn=ke.current,ne(ke,t),ne(Ue,Ue.current),!0}function sp(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=ip(t,e,kn),r.__reactInternalMemoizedMergedChildContext=t,Y(Ue),Y(ke),ne(ke,t)):Y(Ue),ne(Ue,n)}var SE=ge.unstable_runWithPriority,hl=ge.unstable_scheduleCallback,op=ge.unstable_cancelCallback,ap=ge.unstable_requestPaint,fl=ge.unstable_now,IE=ge.unstable_getCurrentPriorityLevel,ro=ge.unstable_ImmediatePriority,up=ge.unstable_UserBlockingPriority,lp=ge.unstable_NormalPriority,cp=ge.unstable_LowPriority,hp=ge.unstable_IdlePriority,fp={},kE=ge.unstable_shouldYield,CE=ap!==void 0?ap:function(){},kt=null,io=null,dl=!1,dp=fl(),Ye=1e4>dp?fl:function(){return fl()-dp};function so(){switch(IE()){case ro:return 99;case up:return 98;case lp:return 97;case cp:return 96;case hp:return 95;default:throw Error(w(332))}}function pp(t){switch(t){case 99:return ro;case 98:return up;case 97:return lp;case 96:return cp;case 95:return hp;default:throw Error(w(332))}}function Kt(t,e){return t=pp(t),SE(t,e)}function mp(t,e,n){return t=pp(t),hl(t,e,n)}function gp(t){return kt===null?(kt=[t],io=hl(ro,yp)):kt.push(t),fp}function ut(){if(io!==null){var t=io;io=null,op(t)}yp()}function yp(){if(!dl&&kt!==null){dl=!0;var t=0;try{var e=kt;Kt(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),kt=null}catch(n){throw kt!==null&&(kt=kt.slice(t+1)),hl(ro,ut),n}finally{dl=!1}}}function oo(t,e,n){return n/=10,1073741821-(((1073741821-t+e/10)/n|0)+1)*n}function st(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}var ao={current:null},uo=null,vr=null,lo=null;function pl(){lo=vr=uo=null}function ml(t){var e=ao.current;Y(ao),t.type._context._currentValue=e}function vp(t,e){for(;t!==null;){var n=t.alternate;if(t.childExpirationTime<e)t.childExpirationTime=e,n!==null&&n.childExpirationTime<e&&(n.childExpirationTime=e);else if(n!==null&&n.childExpirationTime<e)n.childExpirationTime=e;else break;t=t.return}}function wr(t,e){uo=t,lo=vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.expirationTime>=e&&(ct=!0),t.firstContext=null)}function Je(t,e){if(lo!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(lo=t,e=1073741823),e={context:t,observedBits:e,next:null},vr===null){if(uo===null)throw Error(w(308));vr=e,uo.dependencies={expirationTime:0,firstContext:e,responders:null}}else vr=vr.next=e;return t._currentValue}var Wt=!1;function gl(t){t.updateQueue={baseState:t.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function yl(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,baseQueue:t.baseQueue,shared:t.shared,effects:t.effects})}function qt(t,e){return t={expirationTime:t,suspenseConfig:e,tag:0,payload:null,callback:null,next:null},t.next=t}function Gt(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function wp(t,e){var n=t.alternate;n!==null&&yl(n,t),t=t.updateQueue,n=t.baseQueue,n===null?(t.baseQueue=e.next=e,e.next=e):(e.next=n.next,n.next=e)}function Si(t,e,n,r){var i=t.updateQueue;Wt=!1;var s=i.baseQueue,o=i.shared.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}s=o,i.shared.pending=null,a=t.alternate,a!==null&&(a=a.updateQueue,a!==null&&(a.baseQueue=o))}if(s!==null){a=s.next;var u=i.baseState,l=0,c=null,h=null,m=null;if(a!==null){var g=a;do{if(o=g.expirationTime,o<r){var _={expirationTime:g.expirationTime,suspenseConfig:g.suspenseConfig,tag:g.tag,payload:g.payload,callback:g.callback,next:null};m===null?(h=m=_,c=u):m=m.next=_,o>l&&(l=o)}else{m!==null&&(m=m.next={expirationTime:1073741823,suspenseConfig:g.suspenseConfig,tag:g.tag,payload:g.payload,callback:g.callback,next:null}),mm(o,g.suspenseConfig);e:{var R=t,d=g;switch(o=e,_=n,d.tag){case 1:if(R=d.payload,typeof R=="function"){u=R.call(_,u,o);break e}u=R;break e;case 3:R.effectTag=R.effectTag&-4097|64;case 0:if(R=d.payload,o=typeof R=="function"?R.call(_,u,o):R,o==null)break e;u=Pe({},u,o);break e;case 2:Wt=!0}}g.callback!==null&&(t.effectTag|=32,o=i.effects,o===null?i.effects=[g]:o.push(g))}if(g=g.next,g===null||g===a){if(o=i.shared.pending,o===null)break;g=s.next=o.next,o.next=a,i.baseQueue=s=o,i.shared.pending=null}}while(1)}m===null?c=u:m.next=h,i.baseState=c,i.baseQueue=m,bo(l),t.expirationTime=l,t.memoizedState=u}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(w(191,r));r.call(i)}}}var Ii=it.ReactCurrentBatchConfig,Tp=new Ds.Component().refs;function co(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.expirationTime===0&&(t.updateQueue.baseState=n)}var ho={isMounted:function(t){return(t=t._reactInternalFiber)?_n(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternalFiber;var r=ft(),i=Ii.suspense;r=Dn(r,t,i),i=qt(r,i),i.payload=e,n!=null&&(i.callback=n),Gt(t,i),Jt(t,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternalFiber;var r=ft(),i=Ii.suspense;r=Dn(r,t,i),i=qt(r,i),i.tag=1,i.payload=e,n!=null&&(i.callback=n),Gt(t,i),Jt(t,r)},enqueueForceUpdate:function(t,e){t=t._reactInternalFiber;var n=ft(),r=Ii.suspense;n=Dn(n,t,r),r=qt(n,r),r.tag=2,e!=null&&(r.callback=e),Gt(t,r),Jt(t,n)}};function _p(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,s):!0}function Sp(t,e,n){var r=!1,i=Ht,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Ve(e)?kn:ke.current,r=e.contextTypes,s=(r=r!=null)?yr(t,i):Ht),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ho,t.stateNode=e,e._reactInternalFiber=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ho.enqueueReplaceState(e,e.state,null)}function vl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Tp,gl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Ve(e)?kn:ke.current,i.context=yr(t,s)),Si(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(co(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ho.enqueueReplaceState(i,i.state,null),Si(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.effectTag|=4)}var fo=Array.isArray;function ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Tp&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function po(t,e){if(t.type!=="textarea")throw Error(w(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e,""))}function kp(t){function e(d,f){if(t){var p=d.lastEffect;p!==null?(p.nextEffect=f,d.lastEffect=f):d.firstEffect=d.lastEffect=f,f.nextEffect=null,f.effectTag=8}}function n(d,f){if(!t)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Ln(d,f),d.index=0,d.sibling=null,d}function s(d,f,p){return d.index=p,t?(p=d.alternate,p!==null?(p=p.index,p<f?(d.effectTag=2,f):p):(d.effectTag=2,f)):f}function o(d){return t&&d.alternate===null&&(d.effectTag=2),d}function a(d,f,p,y){return f===null||f.tag!==6?(f=Zl(p,d.mode,y),f.return=d,f):(f=i(f,p),f.return=d,f)}function u(d,f,p,y){return f!==null&&f.elementType===p.type?(y=i(f,p.props),y.ref=ki(d,f,p),y.return=d,y):(y=Fo(p.type,p.key,p.props,null,d.mode,y),y.ref=ki(d,f,p),y.return=d,y)}function l(d,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ec(p,d.mode,y),f.return=d,f):(f=i(f,p.children||[]),f.return=d,f)}function c(d,f,p,y,T){return f===null||f.tag!==7?(f=Zt(p,d.mode,y,T),f.return=d,f):(f=i(f,p),f.return=d,f)}function h(d,f,p){if(typeof f=="string"||typeof f=="number")return f=Zl(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $s:return p=Fo(f.type,f.key,f.props,null,d.mode,p),p.ref=ki(d,null,f),p.return=d,p;case ur:return f=ec(f,d.mode,p),f.return=d,f}if(fo(f)||ti(f))return f=Zt(f,d.mode,p,null),f.return=d,f;po(d,f)}return null}function m(d,f,p,y){var T=f!==null?f.key:null;if(typeof p=="string"||typeof p=="number")return T!==null?null:a(d,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $s:return p.key===T?p.type===Tn?c(d,f,p.props.children,y,T):u(d,f,p,y):null;case ur:return p.key===T?l(d,f,p,y):null}if(fo(p)||ti(p))return T!==null?null:c(d,f,p,y,null);po(d,p)}return null}function g(d,f,p,y,T){if(typeof y=="string"||typeof y=="number")return d=d.get(p)||null,a(f,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $s:return d=d.get(y.key===null?p:y.key)||null,y.type===Tn?c(f,d,y.props.children,T,y.key):u(f,d,y,T);case ur:return d=d.get(y.key===null?p:y.key)||null,l(f,d,y,T)}if(fo(y)||ti(y))return d=d.get(p)||null,c(f,d,y,T,null);po(f,y)}return null}function _(d,f,p,y){for(var T=null,I=null,C=f,$=f=0,j=null;C!==null&&$<p.length;$++){C.index>$?(j=C,C=null):j=C.sibling;var O=m(d,C,p[$],y);if(O===null){C===null&&(C=j);break}t&&C&&O.alternate===null&&e(d,C),f=s(O,f,$),I===null?T=O:I.sibling=O,I=O,C=j}if($===p.length)return n(d,C),T;if(C===null){for(;$<p.length;$++)C=h(d,p[$],y),C!==null&&(f=s(C,f,$),I===null?T=C:I.sibling=C,I=C);return T}for(C=r(d,C);$<p.length;$++)j=g(C,d,$,p[$],y),j!==null&&(t&&j.alternate!==null&&C.delete(j.key===null?$:j.key),f=s(j,f,$),I===null?T=j:I.sibling=j,I=j);return t&&C.forEach(function(Re){return e(d,Re)}),T}function R(d,f,p,y){var T=ti(p);if(typeof T!="function")throw Error(w(150));if(p=T.call(p),p==null)throw Error(w(151));for(var I=T=null,C=f,$=f=0,j=null,O=p.next();C!==null&&!O.done;$++,O=p.next()){C.index>$?(j=C,C=null):j=C.sibling;var Re=m(d,C,O.value,y);if(Re===null){C===null&&(C=j);break}t&&C&&Re.alternate===null&&e(d,C),f=s(Re,f,$),I===null?T=Re:I.sibling=Re,I=Re,C=j}if(O.done)return n(d,C),T;if(C===null){for(;!O.done;$++,O=p.next())O=h(d,O.value,y),O!==null&&(f=s(O,f,$),I===null?T=O:I.sibling=O,I=O);return T}for(C=r(d,C);!O.done;$++,O=p.next())O=g(C,d,$,O.value,y),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?$:O.key),f=s(O,f,$),I===null?T=O:I.sibling=O,I=O);return t&&C.forEach(function(ze){return e(d,ze)}),T}return function(d,f,p,y){var T=typeof p=="object"&&p!==null&&p.type===Tn&&p.key===null;T&&(p=p.props.children);var I=typeof p=="object"&&p!==null;if(I)switch(p.$$typeof){case $s:e:{for(I=p.key,T=f;T!==null;){if(T.key===I){switch(T.tag){case 7:if(p.type===Tn){n(d,T.sibling),f=i(T,p.props.children),f.return=d,d=f;break e}break;default:if(T.elementType===p.type){n(d,T.sibling),f=i(T,p.props),f.ref=ki(d,T,p),f.return=d,d=f;break e}}n(d,T);break}else e(d,T);T=T.sibling}p.type===Tn?(f=Zt(p.props.children,d.mode,y,p.key),f.return=d,d=f):(y=Fo(p.type,p.key,p.props,null,d.mode,y),y.ref=ki(d,f,p),y.return=d,d=y)}return o(d);case ur:e:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=i(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else e(d,f);f=f.sibling}f=ec(p,d.mode,y),f.return=d,d=f}return o(d)}if(typeof p=="string"||typeof p=="number")return p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,p),f.return=d,d=f):(n(d,f),f=Zl(p,d.mode,y),f.return=d,d=f),o(d);if(fo(p))return _(d,f,p,y);if(ti(p))return R(d,f,p,y);if(I&&po(d,p),typeof p=="undefined"&&!T)switch(d.tag){case 1:case 0:throw d=d.type,Error(w(152,d.displayName||d.name||"Component"))}return n(d,f)}}var Er=kp(!0),wl=kp(!1),Ci={},lt={current:Ci},Ni={current:Ci},Ai={current:Ci};function Cn(t){if(t===Ci)throw Error(w(174));return t}function El(t,e){switch(ne(Ai,e),ne(Ni,t),ne(lt,Ci),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}Y(lt),ne(lt,e)}function Tr(){Y(lt),Y(Ni),Y(Ai)}function Cp(t){Cn(Ai.current);var e=Cn(lt.current),n=Du(e,t.type);e!==n&&(ne(Ni,t),ne(lt,n))}function Tl(t){Ni.current===t&&(Y(lt),Y(Ni))}var ee={current:0};function mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Qu||n.data===Xu))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.effectTag&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function _l(t,e){return{responder:t,props:e}}var go=it.ReactCurrentDispatcher,Ze=it.ReactCurrentBatchConfig,Qt=0,ae=null,Ce=null,Ne=null,yo=!1;function Ke(){throw Error(w(321))}function Sl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Il(t,e,n,r,i,s){if(Qt=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.expirationTime=0,go.current=t===null||t.memoizedState===null?NE:AE,t=n(r,i),e.expirationTime===Qt){s=0;do{if(e.expirationTime=0,!(25>s))throw Error(w(301));s+=1,Ne=Ce=null,e.updateQueue=null,go.current=xE,t=n(r,i)}while(e.expirationTime===Qt)}if(go.current=_o,e=Ce!==null&&Ce.next!==null,Qt=0,Ne=Ce=ae=null,yo=!1,e)throw Error(w(300));return t}function _r(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ae.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function Sr(){if(Ce===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Ne===null?ae.memoizedState:Ne.next;if(e!==null)Ne=e,Ce=t;else{if(t===null)throw Error(w(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?ae.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Nn(t,e){return typeof e=="function"?e(t):e}function vo(t){var e=Sr(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.expirationTime;if(l<Qt){var c={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,l>ae.expirationTime&&(ae.expirationTime=l,bo(l))}else a!==null&&(a=a.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),mm(l,u.suspenseConfig),r=u.eagerReducer===t?u.eagerState:t(r,u.action);u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,In(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function wo(t){var e=Sr(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kl(t){var e=_r();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:t},t=t.dispatch=Mp.bind(null,ae,t),[e.memoizedState,t]}function Cl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Np(){return Sr().memoizedState}function Nl(t,e,n,r){var i=_r();ae.effectTag|=t,i.memoizedState=Cl(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=Sr();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Sl(r,o.deps)){Cl(e,n,s,r);return}}ae.effectTag|=t,i.memoizedState=Cl(1|e,n,s,r)}function Ap(t,e){return Nl(516,4,t,e)}function Eo(t,e){return Al(516,4,t,e)}function xp(t,e){return Al(4,2,t,e)}function Rp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dp(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,2,Rp.bind(null,e,t),n)}function xl(){}function Pp(t,e){return _r().memoizedState=[t,e===void 0?null:e],t}function To(t,e){var n=Sr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Op(t,e){var n=Sr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rl(t,e,n){var r=so();Kt(98>r?98:r,function(){t(!0)}),Kt(97<r?97:r,function(){var i=Ze.suspense;Ze.suspense=e===void 0?null:e;try{t(!1),n()}finally{Ze.suspense=i}})}function Mp(t,e,n){var r=ft(),i=Ii.suspense;r=Dn(r,t,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var s=e.pending;if(s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i,s=t.alternate,t===ae||s!==null&&s===ae)yo=!0,i.expirationTime=Qt,ae.expirationTime=Qt;else{if(t.expirationTime===0&&(s===null||s.expirationTime===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.eagerReducer=s,i.eagerState=a,In(a,o))return}catch{}finally{}Jt(t,r)}}var _o={readContext:Je,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useResponder:Ke,useDeferredValue:Ke,useTransition:Ke},NE={readContext:Je,useCallback:Pp,useContext:Je,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,2,Rp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=_r();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_r();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Mp.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=_r();return t={current:t},e.memoizedState=t},useState:kl,useDebugValue:xl,useResponder:_l,useDeferredValue:function(t,e){var n=kl(t),r=n[0],i=n[1];return Ap(function(){var s=Ze.suspense;Ze.suspense=e===void 0?null:e;try{i(t)}finally{Ze.suspense=s}},[t,e]),r},useTransition:function(t){var e=kl(!1),n=e[0];return e=e[1],[Pp(Rl.bind(null,e,t),[e,t]),n]}},AE={readContext:Je,useCallback:To,useContext:Je,useEffect:Eo,useImperativeHandle:Dp,useLayoutEffect:xp,useMemo:Op,useReducer:vo,useRef:Np,useState:function(){return vo(Nn)},useDebugValue:xl,useResponder:_l,useDeferredValue:function(t,e){var n=vo(Nn),r=n[0],i=n[1];return Eo(function(){var s=Ze.suspense;Ze.suspense=e===void 0?null:e;try{i(t)}finally{Ze.suspense=s}},[t,e]),r},useTransition:function(t){var e=vo(Nn),n=e[0];return e=e[1],[To(Rl.bind(null,e,t),[e,t]),n]}},xE={readContext:Je,useCallback:To,useContext:Je,useEffect:Eo,useImperativeHandle:Dp,useLayoutEffect:xp,useMemo:Op,useReducer:wo,useRef:Np,useState:function(){return wo(Nn)},useDebugValue:xl,useResponder:_l,useDeferredValue:function(t,e){var n=wo(Nn),r=n[0],i=n[1];return Eo(function(){var s=Ze.suspense;Ze.suspense=e===void 0?null:e;try{i(t)}finally{Ze.suspense=s}},[t,e]),r},useTransition:function(t){var e=wo(Nn),n=e[0];return e=e[1],[To(Rl.bind(null,e,t),[e,t]),n]}},Ct=null,Xt=null,An=!1;function Lp(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.effectTag=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Dl(t){if(An){var e=Xt;if(e){var n=e;if(!$p(t,e)){if(e=fr(n.nextSibling),!e||!$p(t,e)){t.effectTag=t.effectTag&-1025|2,An=!1,Ct=t;return}Lp(Ct,n)}Ct=t,Xt=fr(e.firstChild)}else t.effectTag=t.effectTag&-1025|2,An=!1,Ct=t}}function bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function So(t){if(t!==Ct)return!1;if(!An)return bp(t),An=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Zu(e,t.memoizedProps))for(e=Xt;e;)Lp(t,e),e=fr(e.nextSibling);if(bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n===Od){if(e===0){Xt=fr(t.nextSibling);break e}e--}else n!==Pd&&n!==Xu&&n!==Qu||e++}t=t.nextSibling}Xt=null}}else Xt=Ct?fr(t.stateNode.nextSibling):null;return!0}function Pl(){Xt=Ct=null,An=!1}var RE=it.ReactCurrentOwner,ct=!1;function We(t,e,n,r){e.child=t===null?wl(e,null,n,r):Er(e,t.child,n,r)}function Fp(t,e,n,r,i){n=n.render;var s=e.ref;return wr(e,i),r=Il(t,e,n,r,s,i),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.effectTag&=-517,t.expirationTime<=i&&(t.expirationTime=0),Nt(t,e,i)):(e.effectTag|=1,We(t,e,r,i),e.child)}function Up(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Jl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Vp(t,e,o,r,i,s)):(t=Fo(n.type,null,r,null,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,i<s&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ti,n(i,r)&&t.ref===e.ref)?Nt(t,e,s):(e.effectTag|=1,t=Ln(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Vp(t,e,n,r,i,s){return t!==null&&Ti(t.memoizedProps,r)&&t.ref===e.ref&&(ct=!1,i<s)?(e.expirationTime=t.expirationTime,Nt(t,e,s)):Ol(t,e,n,r,s)}function jp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.effectTag|=128)}function Ol(t,e,n,r,i){var s=Ve(n)?kn:ke.current;return s=yr(e,s),wr(e,i),n=Il(t,e,n,r,s,i),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.effectTag&=-517,t.expirationTime<=i&&(t.expirationTime=0),Nt(t,e,i)):(e.effectTag|=1,We(t,e,n,i),e.child)}function Bp(t,e,n,r,i){if(Ve(n)){var s=!0;no(e)}else s=!1;if(wr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),Sp(e,n,r),vl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Je(l):(l=Ve(n)?kn:ke.current,l=yr(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Ip(e,o,r,l),Wt=!1;var m=e.memoizedState;o.state=m,Si(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ue.current||Wt?(typeof c=="function"&&(co(e,n,c,r),u=e.memoizedState),(a=Wt||_p(e,n,a,r,m,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.effectTag|=4)):(typeof o.componentDidMount=="function"&&(e.effectTag|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.effectTag|=4),r=!1)}else o=e.stateNode,yl(t,e),a=e.memoizedProps,o.props=e.type===e.elementType?a:st(e.type,a),u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Ve(n)?kn:ke.current,l=yr(e,l)),c=n.getDerivedStateFromProps,(h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Ip(e,o,r,l),Wt=!1,u=e.memoizedState,o.state=u,Si(e,r,o,i),m=e.memoizedState,a!==r||u!==m||Ue.current||Wt?(typeof c=="function"&&(co(e,n,c,r),m=e.memoizedState),(c=Wt||_p(e,n,a,r,u,m,l))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.effectTag|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.effectTag|=256),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.effectTag|=256),r=!1);return Ml(t,e,n,r,s,i)}function Ml(t,e,n,r,i,s){jp(t,e);var o=(e.effectTag&64)!=0;if(!r&&!o)return i&&sp(e,n,!1),Nt(t,e,s);r=e.stateNode,RE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.effectTag|=1,t!==null&&o?(e.child=Er(e,t.child,null,s),e.child=Er(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&sp(e,n,!0),e.child}function zp(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),El(t,e.containerInfo)}var Ll={dehydrated:null,retryTime:0};function Hp(t,e,n){var r=e.mode,i=e.pendingProps,s=ee.current,o=!1,a;if((a=(e.effectTag&64)!=0)||(a=(s&2)!=0&&(t===null||t.memoizedState!==null)),a?(o=!0,e.effectTag&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(s|=1),ne(ee,s&1),t===null){if(i.fallback!==void 0&&Dl(e),o){if(o=i.fallback,i=Zt(null,r,0,null),i.return=e,(e.mode&2)==0)for(t=e.memoizedState!==null?e.child.child:e.child,i.child=t;t!==null;)t.return=i,t=t.sibling;return n=Zt(o,r,n,null),n.return=e,i.sibling=n,e.memoizedState=Ll,e.child=i,n}return r=i.children,e.memoizedState=null,e.child=wl(e,null,r,n)}if(t.memoizedState!==null){if(t=t.child,r=t.sibling,o){if(i=i.fallback,n=Ln(t,t.pendingProps),n.return=e,(e.mode&2)==0&&(o=e.memoizedState!==null?e.child.child:e.child,o!==t.child))for(n.child=o;o!==null;)o.return=n,o=o.sibling;return r=Ln(r,i),r.return=e,n.sibling=r,n.childExpirationTime=0,e.memoizedState=Ll,e.child=n,r}return n=Er(e,t.child,i.children,n),e.memoizedState=null,e.child=n}if(t=t.child,o){if(o=i.fallback,i=Zt(null,r,0,null),i.return=e,i.child=t,t!==null&&(t.return=i),(e.mode&2)==0)for(t=e.memoizedState!==null?e.child.child:e.child,i.child=t;t!==null;)t.return=i,t=t.sibling;return n=Zt(o,r,n,null),n.return=e,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,e.memoizedState=Ll,e.child=i,n}return e.memoizedState=null,e.child=Er(e,t,i.children,n)}function Kp(t,e){t.expirationTime<e&&(t.expirationTime=e);var n=t.alternate;n!==null&&n.expirationTime<e&&(n.expirationTime=e),vp(t.return,e)}function $l(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailExpiration=0,o.tailMode=i,o.lastEffect=s)}function Wp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=ee.current,(r&2)!=0)r=r&1|2,e.effectTag|=64;else{if(t!==null&&(t.effectTag&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kp(t,n);else if(t.tag===19)Kp(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ee,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s,e.lastEffect);break;case"together":$l(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Nt(t,e,n){t!==null&&(e.dependencies=t.dependencies);var r=e.expirationTime;if(r!==0&&bo(r),e.childExpirationTime<n)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}var qp,bl,Gp,Qp;qp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};Gp=function(t,e,n,r,i){var s=t.memoizedProps;if(s!==r){var o=e.stateNode;switch(Cn(lt.current),t=null,n){case"input":s=Cu(o,s),r=Cu(o,r),t=[];break;case"option":s=xu(o,s),r=xu(o,r),t=[];break;case"select":s=Pe({},s,{value:void 0}),r=Pe({},r,{value:void 0}),t=[];break;case"textarea":s=Ru(o,s),r=Ru(o,r),t=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(o.onclick=Gs)}Ku(n,r);var a,u;n=null;for(a in s)if(!r.hasOwnProperty(a)&&s.hasOwnProperty(a)&&s[a]!=null)if(a==="style")for(u in o=s[a],o)o.hasOwnProperty(u)&&(n||(n={}),n[u]="");else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(sr.hasOwnProperty(a)?t||(t=[]):(t=t||[]).push(a,null));for(a in r){var l=r[a];if(o=s!=null?s[a]:void 0,r.hasOwnProperty(a)&&l!==o&&(l!=null||o!=null))if(a==="style")if(o){for(u in o)!o.hasOwnProperty(u)||l&&l.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in l)l.hasOwnProperty(u)&&o[u]!==l[u]&&(n||(n={}),n[u]=l[u])}else n||(t||(t=[]),t.push(a,n)),n=l;else a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(t=t||[]).push(a,l)):a==="children"?o===l||typeof l!="string"&&typeof l!="number"||(t=t||[]).push(a,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(sr.hasOwnProperty(a)?(l!=null&&_t(i,a),t||o===l||(t=[])):(t=t||[]).push(a,l))}n&&(t=t||[]).push("style",n),i=t,(e.updateQueue=i)&&(e.effectTag|=4)}};Qp=function(t,e,n,r){n!==r&&(e.effectTag|=4)};function Io(t,e){switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function DE(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ve(e.type)&&to(),null;case 3:return Tr(),Y(Ue),Y(ke),n=e.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),t!==null&&t.child!==null||!So(e)||(e.effectTag|=4),bl(e),null;case 5:Tl(e),n=Cn(Ai.current);var i=e.type;if(t!==null&&e.stateNode!=null)Gp(t,e,i,r,n),t.ref!==e.ref&&(e.effectTag|=128);else{if(!r){if(e.stateNode===null)throw Error(w(166));return null}if(t=Cn(lt.current),So(e)){r=e.stateNode,i=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Qs]=s,i){case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<ri.length;t++)Z(ri[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"form":Z("reset",r),Z("submit",r);break;case"details":Z("toggle",r);break;case"input":Qf(r,s),Z("invalid",r),_t(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r),_t(n,"onChange");break;case"textarea":Jf(r,s),Z("invalid",r),_t(n,"onChange")}Ku(i,s),t=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(t=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(t=["children",""+a]):sr.hasOwnProperty(o)&&a!=null&&_t(n,o)}switch(i){case"input":Us(r),Yf(r,s,!0);break;case"textarea":Us(r),ed(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gs)}n=t,e.updateQueue=n,n!==null&&(e.effectTag|=4)}else{switch(o=n.nodeType===9?n:n.ownerDocument,t===Nd&&(t=nd(i)),t===Nd?i==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(i,{is:r.is}):(t=o.createElement(i),i==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,i),t[Bt]=e,t[Qs]=r,qp(t,e,!1,!1),e.stateNode=t,o=Wu(i,r),i){case"iframe":case"object":case"embed":Z("load",t),a=r;break;case"video":case"audio":for(a=0;a<ri.length;a++)Z(ri[a],t);a=r;break;case"source":Z("error",t),a=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),a=r;break;case"form":Z("reset",t),Z("submit",t),a=r;break;case"details":Z("toggle",t),a=r;break;case"input":Qf(t,r),a=Cu(t,r),Z("invalid",t),_t(n,"onChange");break;case"option":a=xu(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},a=Pe({},r,{value:void 0}),Z("invalid",t),_t(n,"onChange");break;case"textarea":Jf(t,r),a=Ru(t,r),Z("invalid",t),_t(n,"onChange");break;default:a=r}Ku(i,a);var u=a;for(s in u)if(u.hasOwnProperty(s)){var l=u[s];s==="style"?Cd(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rd(t,l)):s==="children"?typeof l=="string"?(i!=="textarea"||l!=="")&&ni(t,l):typeof l=="number"&&ni(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sr.hasOwnProperty(s)?l!=null&&_t(n,s):l!=null&&Tu(t,s,l,o))}switch(i){case"input":Us(t),Yf(t,r,!1);break;case"textarea":Us(t),ed(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ft(r.value));break;case"select":t.multiple=!!r.multiple,n=r.value,n!=null?lr(t,!!r.multiple,n,!1):r.defaultValue!=null&&lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Gs)}Md(i,r)&&(e.effectTag|=4)}e.ref!==null&&(e.effectTag|=128)}return null;case 6:if(t&&e.stateNode!=null)Qp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));n=Cn(Ai.current),Cn(lt.current),So(e)?(n=e.stateNode,r=e.memoizedProps,n[Bt]=e,n.nodeValue!==r&&(e.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Bt]=e,e.stateNode=n)}return null;case 13:return Y(ee),r=e.memoizedState,(e.effectTag&64)!=0?(e.expirationTime=n,e):(n=r!==null,r=!1,t===null?e.memoizedProps.fallback!==void 0&&So(e):(i=t.memoizedState,r=i!==null,n||i===null||(i=t.child.sibling,i!==null&&(s=e.firstEffect,s!==null?(e.firstEffect=i,i.nextEffect=s):(e.firstEffect=e.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ee.current&1)!=0?fe===xn&&(fe=No):((fe===xn||fe===No)&&(fe=Ao),Ri!==0&&qe!==null&&($n(qe,je),Tm(qe,Ri)))),(n||r)&&(e.effectTag|=4),null);case 4:return Tr(),bl(e),null;case 10:return ml(e),null;case 17:return Ve(e.type)&&to(),null;case 19:if(Y(ee),r=e.memoizedState,r===null)return null;if(i=(e.effectTag&64)!=0,s=r.rendering,s===null){if(i)Io(r,!1);else if(fe!==xn||t!==null&&(t.effectTag&64)!=0)for(s=e.child;s!==null;){if(t=mo(s),t!==null){for(e.effectTag|=64,Io(r,!1),i=t.updateQueue,i!==null&&(e.updateQueue=i,e.effectTag|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=e.child;r!==null;)i=r,s=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,t=i.alternate,t===null?(i.childExpirationTime=0,i.expirationTime=s,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=t.childExpirationTime,i.expirationTime=t.expirationTime,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,s=t.dependencies,i.dependencies=s===null?null:{expirationTime:s.expirationTime,firstContext:s.firstContext,responders:s.responders}),r=r.sibling;return ne(ee,ee.current&1|2),e.child}s=s.sibling}}else{if(!i)if(t=mo(s),t!==null){if(e.effectTag|=64,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.effectTag|=4),Io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ye()-r.renderingStartTime>r.tailExpiration&&1<n&&(e.effectTag|=64,i=!0,Io(r,!1),e.expirationTime=e.childExpirationTime=n-1);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=Ye()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ye(),n.sibling=null,e=ee.current,ne(ee,i?e&1|2:e&1),n):null}throw Error(w(156,e.tag))}function PE(t){switch(t.tag){case 1:Ve(t.type)&&to();var e=t.effectTag;return e&4096?(t.effectTag=e&-4097|64,t):null;case 3:if(Tr(),Y(Ue),Y(ke),e=t.effectTag,(e&64)!=0)throw Error(w(285));return t.effectTag=e&-4097|64,t;case 5:return Tl(t),null;case 13:return Y(ee),e=t.effectTag,e&4096?(t.effectTag=e&-4097|64,t):null;case 19:return Y(ee),null;case 4:return Tr(),null;case 10:return ml(t),null;default:return null}}function Fl(t,e){return{value:t,source:e,stack:ku(e)}}var OE=typeof WeakSet=="function"?WeakSet:Set;function Ul(t,e){var n=e.source,r=e.stack;r===null&&n!==null&&(r=ku(n)),n!==null&&Tt(n.type),e=e.value,t!==null&&t.tag===1&&Tt(t.type);try{console.error(e)}catch(i){setTimeout(function(){throw i})}}function ME(t,e){try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(n){Mn(t,n)}}function Xp(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Mn(t,n)}else e.current=null}function LE(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.effectTag&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:st(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(w(163))}function Yp(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==e)}}function Jp(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $E(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:Jp(3,n);return;case 1:if(t=n.stateNode,n.effectTag&4)if(e===null)t.componentDidMount();else{var r=n.elementType===n.type?e.memoizedProps:st(n.type,e.memoizedProps);t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}e=n.updateQueue,e!==null&&Ep(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ep(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.effectTag&4&&Md(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Td(n))));return;case 19:case 17:case 20:case 21:return}throw Error(w(163))}function Zp(t,e,n){switch(typeof Yl=="function"&&Yl(e),e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t.next;Kt(97<n?97:n,function(){var i=r;do{var s=i.destroy;if(s!==void 0){var o=e;try{s()}catch(a){Mn(o,a)}}i=i.next}while(i!==r)})}break;case 1:Xp(e),n=e.stateNode,typeof n.componentWillUnmount=="function"&&ME(e,n);break;case 5:Xp(e);break;case 4:rm(t,e,n)}}function em(t){var e=t.alternate;t.return=null,t.child=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.alternate=null,t.firstEffect=null,t.lastEffect=null,t.pendingProps=null,t.memoizedProps=null,t.stateNode=null,e!==null&&em(e)}function tm(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:{for(var e=t.return;e!==null;){if(tm(e)){var n=e;break e}e=e.return}throw Error(w(160))}switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(w(161))}n.effectTag&16&&(ni(e,""),n.effectTag&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||tm(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?Vl(t,n,e):jl(t,n,e)}function Vl(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gs));else if(r!==4&&(t=t.child,t!==null))for(Vl(t,e,n),t=t.sibling;t!==null;)Vl(t,e,n),t=t.sibling}function jl(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jl(t,e,n),t=t.sibling;t!==null;)jl(t,e,n),t=t.sibling}function rm(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(w(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,u=r,l=n,c=u;;)if(Zp(a,c,l),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===u)break e;for(;c.sibling===null;){if(c.return===null||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,u=r.stateNode,a.nodeType===8?a.parentNode.removeChild(u):a.removeChild(u)):s.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Zp(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Bl(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:Yp(3,e);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Qs]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Xf(n,r),Wu(t,i),e=Wu(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Cd(n,a):o==="dangerouslySetInnerHTML"?rd(n,a):o==="children"?ni(n,a):Tu(n,o,a,e)}switch(t){case"input":Nu(n,r);break;case"textarea":Zf(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,t=r.value,t!=null?lr(n,!!r.multiple,t,!1):e!==!!r.multiple&&(r.defaultValue!=null?lr(n,!!r.multiple,r.defaultValue,!0):lr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(w(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:e=e.stateNode,e.hydrate&&(e.hydrate=!1,Td(e.containerInfo));return;case 12:return;case 13:if(n=e,e.memoizedState===null?r=!1:(r=!0,n=e.child,Kl=Ye()),n!==null)e:for(t=n;;){if(t.tag===5)s=t.stateNode,r?(s=s.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(s=t.stateNode,i=t.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,s.style.display=kd("display",i));else if(t.tag===6)t.stateNode.nodeValue=r?"":t.memoizedProps;else if(t.tag===13&&t.memoizedState!==null&&t.memoizedState.dehydrated===null){s=t.child.sibling,s.return=t,t=s;continue}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}im(e);return;case 19:im(e);return;case 17:return}throw Error(w(163))}function im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OE),e.forEach(function(r){var i=WE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}var bE=typeof WeakMap=="function"?WeakMap:Map;function sm(t,e,n){n=qt(n,null),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Po||(Po=!0,Wl=r),Ul(t,e)},n}function om(t,e,n){n=qt(n,null),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Ul(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this),Ul(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var FE=Math.ceil,ko=it.ReactCurrentDispatcher,am=it.ReactCurrentOwner,he=0,zl=8,ot=16,ht=32,xn=0,Co=1,um=2,No=3,Ao=4,Hl=5,M=he,qe=null,V=null,je=0,fe=xn,xo=null,At=1073741823,xi=1073741823,Ro=null,Ri=0,Do=!1,Kl=0,lm=500,A=null,Po=!1,Wl=null,Yt=null,Oo=!1,Di=null,Pi=90,Rn=null,Oi=0,ql=null,Mo=0;function ft(){return(M&(ot|ht))!==he?1073741821-(Ye()/10|0):Mo!==0?Mo:Mo=1073741821-(Ye()/10|0)}function Dn(t,e,n){if(e=e.mode,(e&2)==0)return 1073741823;var r=so();if((e&4)==0)return r===99?1073741823:1073741822;if((M&ot)!==he)return je;if(n!==null)t=oo(t,n.timeoutMs|0||5e3,250);else switch(r){case 99:t=1073741823;break;case 98:t=oo(t,150,100);break;case 97:case 96:t=oo(t,5e3,250);break;case 95:t=2;break;default:throw Error(w(326))}return qe!==null&&t===je&&--t,t}function Jt(t,e){if(50<Oi)throw Oi=0,ql=null,Error(w(185));if(t=Lo(t,e),t!==null){var n=so();e===1073741823?(M&zl)!==he&&(M&(ot|ht))===he?Gl(t):(Ge(t),M===he&&ut()):Ge(t),(M&4)===he||n!==98&&n!==99||(Rn===null?Rn=new Map([[t,e]]):(n=Rn.get(t),(n===void 0||n>e)&&Rn.set(t,e)))}}function Lo(t,e){t.expirationTime<e&&(t.expirationTime=e);var n=t.alternate;n!==null&&n.expirationTime<e&&(n.expirationTime=e);var r=t.return,i=null;if(r===null&&t.tag===3)i=t.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<e&&(r.childExpirationTime=e),n!==null&&n.childExpirationTime<e&&(n.childExpirationTime=e),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(qe===i&&(bo(e),fe===Ao&&$n(i,je)),Tm(i,e)),i}function $o(t){var e=t.lastExpiredTime;if(e!==0||(e=t.firstPendingTime,!Em(t,e)))return e;var n=t.lastPingedTime;return t=t.nextKnownPendingLevel,t=n>t?n:t,2>=t&&e!==t?0:t}function Ge(t){if(t.lastExpiredTime!==0)t.callbackExpirationTime=1073741823,t.callbackPriority=99,t.callbackNode=gp(Gl.bind(null,t));else{var e=$o(t),n=t.callbackNode;if(e===0)n!==null&&(t.callbackNode=null,t.callbackExpirationTime=0,t.callbackPriority=90);else{var r=ft();if(e===1073741823?r=99:e===1||e===2?r=95:(r=10*(1073741821-e)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=t.callbackPriority;if(t.callbackExpirationTime===e&&i>=r)return;n!==fp&&op(n)}t.callbackExpirationTime=e,t.callbackPriority=r,e=e===1073741823?gp(Gl.bind(null,t)):mp(r,cm.bind(null,t),{timeout:10*(1073741821-e)-Ye()}),t.callbackNode=e}}}function cm(t,e){if(Mo=0,e)return e=ft(),tc(t,e),Ge(t),null;var n=$o(t);if(n!==0){if(e=t.callbackNode,(M&(ot|ht))!==he)throw Error(w(327));if(Ir(),t===qe&&n===je||Pn(t,n),V!==null){var r=M;M|=ot;var i=pm();do try{jE();break}catch(a){dm(t,a)}while(1);if(pl(),M=r,ko.current=i,fe===Co)throw e=xo,Pn(t,n),$n(t,n),Ge(t),e;if(V===null)switch(i=t.finishedWork=t.current.alternate,t.finishedExpirationTime=n,r=fe,qe=null,r){case xn:case Co:throw Error(w(345));case um:tc(t,2<n?2:n);break;case No:if($n(t,n),r=t.lastSuspendedTime,n===r&&(t.nextKnownPendingLevel=Ql(i)),At===1073741823&&(i=Kl+lm-Ye(),10<i)){if(Do){var s=t.lastPingedTime;if(s===0||s>=n){t.lastPingedTime=n,Pn(t,n);break}}if(s=$o(t),s!==0&&s!==n)break;if(r!==0&&r!==n){t.lastPingedTime=r;break}t.timeoutHandle=el(On.bind(null,t),i);break}On(t);break;case Ao:if($n(t,n),r=t.lastSuspendedTime,n===r&&(t.nextKnownPendingLevel=Ql(i)),Do&&(i=t.lastPingedTime,i===0||i>=n)){t.lastPingedTime=n,Pn(t,n);break}if(i=$o(t),i!==0&&i!==n)break;if(r!==0&&r!==n){t.lastPingedTime=r;break}if(xi!==1073741823?r=10*(1073741821-xi)-Ye():At===1073741823?r=0:(r=10*(1073741821-At)-5e3,i=Ye(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FE(r/1960))-r,n<r&&(r=n)),10<r){t.timeoutHandle=el(On.bind(null,t),r);break}On(t);break;case Hl:if(At!==1073741823&&Ro!==null){s=At;var o=Ro;if(r=o.busyMinDurationMs|0,0>=r?r=0:(i=o.busyDelayMs|0,s=Ye()-(10*(1073741821-s)-(o.timeoutMs|0||5e3)),r=s<=i?0:i+r-s),10<r){$n(t,n),t.timeoutHandle=el(On.bind(null,t),r);break}}On(t);break;default:throw Error(w(329))}if(Ge(t),t.callbackNode===e)return cm.bind(null,t)}}return null}function Gl(t){var e=t.lastExpiredTime;if(e=e!==0?e:1073741823,(M&(ot|ht))!==he)throw Error(w(327));if(Ir(),t===qe&&e===je||Pn(t,e),V!==null){var n=M;M|=ot;var r=pm();do try{VE();break}catch(i){dm(t,i)}while(1);if(pl(),M=n,ko.current=r,fe===Co)throw n=xo,Pn(t,e),$n(t,e),Ge(t),n;if(V!==null)throw Error(w(261));t.finishedWork=t.current.alternate,t.finishedExpirationTime=e,qe=null,On(t),Ge(t)}return null}function UE(){if(Rn!==null){var t=Rn;Rn=null,t.forEach(function(e,n){tc(n,e),Ge(n)}),ut()}}function hm(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===he&&ut()}}function fm(t,e){var n=M;M&=-2,M|=zl;try{return t(e)}finally{M=n,M===he&&ut()}}function Pn(t,e){t.finishedWork=null,t.finishedExpirationTime=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F0(n)),V!==null)for(n=V.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:Tr(),Y(Ue),Y(ke);break;case 5:Tl(r);break;case 4:Tr();break;case 13:Y(ee);break;case 19:Y(ee);break;case 10:ml(r)}n=n.return}qe=t,V=Ln(t.current,null),je=e,fe=xn,xo=null,xi=At=1073741823,Ro=null,Ri=0,Do=!1}function dm(t,e){do{try{if(pl(),go.current=_o,yo)for(var n=ae.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(Qt=0,Ne=Ce=ae=null,yo=!1,V===null||V.return===null)return fe=Co,xo=e,V=null;e:{var i=t,s=V.return,o=V,a=e;if(e=je,o.effectTag|=2048,o.firstEffect=o.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a;if((o.mode&2)==0){var l=o.alternate;l?(o.updateQueue=l.updateQueue,o.memoizedState=l.memoizedState,o.expirationTime=l.expirationTime):(o.updateQueue=null,o.memoizedState=null)}var c=(ee.current&1)!=0,h=s;do{var m;if(m=h.tag===13){var g=h.memoizedState;if(g!==null)m=g.dehydrated!==null;else{var _=h.memoizedProps;m=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!c}}if(m){var R=h.updateQueue;if(R===null){var d=new Set;d.add(u),h.updateQueue=d}else R.add(u);if((h.mode&2)==0){if(h.effectTag|=64,o.effectTag&=-2981,o.tag===1)if(o.alternate===null)o.tag=17;else{var f=qt(1073741823,null);f.tag=2,Gt(o,f)}o.expirationTime=1073741823;break e}a=void 0,o=e;var p=i.pingCache;if(p===null?(p=i.pingCache=new bE,a=new Set,p.set(u,a)):(a=p.get(u),a===void 0&&(a=new Set,p.set(u,a))),!a.has(o)){a.add(o);var y=KE.bind(null,i,u,o);u.then(y,y)}h.effectTag|=4096,h.expirationTime=e;break e}h=h.return}while(h!==null);a=Error((Tt(o.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+ku(o))}fe!==Hl&&(fe=um),a=Fl(a,o),h=s;do{switch(h.tag){case 3:u=a,h.effectTag|=4096,h.expirationTime=e;var T=sm(h,u,e);wp(h,T);break e;case 1:u=a;var I=h.type,C=h.stateNode;if((h.effectTag&64)==0&&(typeof I.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Yt===null||!Yt.has(C)))){h.effectTag|=4096,h.expirationTime=e;var $=om(h,u,e);wp(h,$);break e}}h=h.return}while(h!==null)}V=ym(V)}catch(j){e=j;continue}break}while(1)}function pm(){var t=ko.current;return ko.current=_o,t===null?_o:t}function mm(t,e){t<At&&2<t&&(At=t),e!==null&&t<xi&&2<t&&(xi=t,Ro=e)}function bo(t){t>Ri&&(Ri=t)}function VE(){for(;V!==null;)V=gm(V)}function jE(){for(;V!==null&&!kE();)V=gm(V)}function gm(t){var e=wm(t.alternate,t,je);return t.memoizedProps=t.pendingProps,e===null&&(e=ym(t)),am.current=null,e}function ym(t){V=t;do{var e=V.alternate;if(t=V.return,(V.effectTag&2048)==0){if(e=DE(e,V,je),je===1||V.childExpirationTime!==1){for(var n=0,r=V.child;r!==null;){var i=r.expirationTime,s=r.childExpirationTime;i>n&&(n=i),s>n&&(n=s),r=r.sibling}V.childExpirationTime=n}if(e!==null)return e;t!==null&&(t.effectTag&2048)==0&&(t.firstEffect===null&&(t.firstEffect=V.firstEffect),V.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=V.firstEffect),t.lastEffect=V.lastEffect),1<V.effectTag&&(t.lastEffect!==null?t.lastEffect.nextEffect=V:t.firstEffect=V,t.lastEffect=V))}else{if(e=PE(V),e!==null)return e.effectTag&=2047,e;t!==null&&(t.firstEffect=t.lastEffect=null,t.effectTag|=2048)}if(e=V.sibling,e!==null)return e;V=t}while(V!==null);return fe===xn&&(fe=Hl),null}function Ql(t){var e=t.expirationTime;return t=t.childExpirationTime,e>t?e:t}function On(t){var e=so();return Kt(99,BE.bind(null,t,e)),null}function BE(t,e){do Ir();while(Di!==null);if((M&(ot|ht))!==he)throw Error(w(327));var n=t.finishedWork,r=t.finishedExpirationTime;if(n===null)return null;if(t.finishedWork=null,t.finishedExpirationTime=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackExpirationTime=0,t.callbackPriority=90,t.nextKnownPendingLevel=0;var i=Ql(n);if(t.firstPendingTime=i,r<=t.lastSuspendedTime?t.firstSuspendedTime=t.lastSuspendedTime=t.nextKnownPendingLevel=0:r<=t.firstSuspendedTime&&(t.firstSuspendedTime=r-1),r<=t.lastPingedTime&&(t.lastPingedTime=0),r<=t.lastExpiredTime&&(t.lastExpiredTime=0),t===qe&&(V=qe=null,je=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var s=M;M|=ht,am.current=null,Yu=Ws;var o=Dd();if(Gu(o)){if("selectionStart"in o)var a={start:o.selectionStart,end:o.selectionEnd};else e:{a=(a=o.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var l=u.anchorOffset,c=u.focusNode;u=u.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var h=0,m=-1,g=-1,_=0,R=0,d=o,f=null;t:for(;;){for(var p;d!==a||l!==0&&d.nodeType!==3||(m=h+l),d!==c||u!==0&&d.nodeType!==3||(g=h+u),d.nodeType===3&&(h+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===o)break t;if(f===a&&++_===l&&(m=h),f===c&&++R===u&&(g=h),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;Ju={activeElementDetached:null,focusedElem:o,selectionRange:a},Ws=!1,A=i;do try{zE()}catch(O){if(A===null)throw Error(w(330));Mn(A,O),A=A.nextEffect}while(A!==null);A=i;do try{for(o=t,a=e;A!==null;){var y=A.effectTag;if(y&16&&ni(A.stateNode,""),y&128){var T=A.alternate;if(T!==null){var I=T.ref;I!==null&&(typeof I=="function"?I(null):I.current=null)}}switch(y&1038){case 2:nm(A),A.effectTag&=-3;break;case 6:nm(A),A.effectTag&=-3,Bl(A.alternate,A);break;case 1024:A.effectTag&=-1025;break;case 1028:A.effectTag&=-1025,Bl(A.alternate,A);break;case 4:Bl(A.alternate,A);break;case 8:l=A,rm(o,l,a),em(l)}A=A.nextEffect}}catch(O){if(A===null)throw Error(w(330));Mn(A,O),A=A.nextEffect}while(A!==null);if(I=Ju,T=Dd(),y=I.focusedElem,a=I.selectionRange,T!==y&&y&&y.ownerDocument&&Rd(y.ownerDocument.documentElement,y)){for(a!==null&&Gu(y)&&(T=a.start,I=a.end,I===void 0&&(I=T),"selectionStart"in y?(y.selectionStart=T,y.selectionEnd=Math.min(I,y.value.length)):(I=(T=y.ownerDocument||document)&&T.defaultView||window,I.getSelection&&(I=I.getSelection(),l=y.textContent.length,o=Math.min(a.start,l),a=a.end===void 0?o:Math.min(a.end,l),!I.extend&&o>a&&(l=a,a=o,o=l),l=xd(y,o),c=xd(y,a),l&&c&&(I.rangeCount!==1||I.anchorNode!==l.node||I.anchorOffset!==l.offset||I.focusNode!==c.node||I.focusOffset!==c.offset)&&(T=T.createRange(),T.setStart(l.node,l.offset),I.removeAllRanges(),o>a?(I.addRange(T),I.extend(c.node,c.offset)):(T.setEnd(c.node,c.offset),I.addRange(T)))))),T=[],I=y;I=I.parentNode;)I.nodeType===1&&T.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<T.length;y++)I=T[y],I.element.scrollLeft=I.left,I.element.scrollTop=I.top}Ws=!!Yu,Ju=Yu=null,t.current=n,A=i;do try{for(y=t;A!==null;){var C=A.effectTag;if(C&36&&$E(y,A.alternate,A),C&128){T=void 0;var $=A.ref;if($!==null){var j=A.stateNode;switch(A.tag){case 5:T=j;break;default:T=j}typeof $=="function"?$(T):$.current=T}}A=A.nextEffect}}catch(O){if(A===null)throw Error(w(330));Mn(A,O),A=A.nextEffect}while(A!==null);A=null,CE(),M=s}else t.current=n;if(Oo)Oo=!1,Di=t,Pi=e;else for(A=i;A!==null;)e=A.nextEffect,A.nextEffect=null,A=e;if(e=t.firstPendingTime,e===0&&(Yt=null),e===1073741823?t===ql?Oi++:(Oi=0,ql=t):Oi=0,typeof Xl=="function"&&Xl(n.stateNode,r),Ge(t),Po)throw Po=!1,t=Wl,Wl=null,t;return(M&zl)!==he||ut(),null}function zE(){for(;A!==null;){var t=A.effectTag;(t&256)!=0&&LE(A.alternate,A),(t&512)==0||Oo||(Oo=!0,mp(97,function(){return Ir(),null})),A=A.nextEffect}}function Ir(){if(Pi!==90){var t=97<Pi?97:Pi;return Pi=90,Kt(t,HE)}}function HE(){if(Di===null)return!1;var t=Di;if(Di=null,(M&(ot|ht))!==he)throw Error(w(331));var e=M;for(M|=ht,t=t.current.firstEffect;t!==null;){try{var n=t;if((n.effectTag&512)!=0)switch(n.tag){case 0:case 11:case 15:case 22:Yp(5,n),Jp(5,n)}}catch(r){if(t===null)throw Error(w(330));Mn(t,r)}n=t.nextEffect,t.nextEffect=null,t=n}return M=e,ut(),!0}function vm(t,e,n){e=Fl(n,e),e=sm(t,e,1073741823),Gt(t,e),t=Lo(t,1073741823),t!==null&&Ge(t)}function Mn(t,e){if(t.tag===3)vm(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){vm(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){t=Fl(e,t),t=om(n,t,1073741823),Gt(n,t),n=Lo(n,1073741823),n!==null&&Ge(n);break}}n=n.return}}function KE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),qe===t&&je===n?fe===Ao||fe===No&&At===1073741823&&Ye()-Kl<lm?Pn(t,je):Do=!0:Em(t,n)&&(e=t.lastPingedTime,e!==0&&e<n||(t.lastPingedTime=n,Ge(t)))}function WE(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=ft(),e=Dn(e,t,null)),t=Lo(t,e),t!==null&&Ge(t)}var wm;wm=function(t,e,n){var r=e.expirationTime;if(t!==null){var i=e.pendingProps;if(t.memoizedProps!==i||Ue.current)ct=!0;else{if(r<n){switch(ct=!1,e.tag){case 3:zp(e),Pl();break;case 5:if(Cp(e),e.mode&4&&n!==1&&i.hidden)return e.expirationTime=e.childExpirationTime=1,null;break;case 1:Ve(e.type)&&no(e);break;case 4:El(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value,i=e.type._context,ne(ao,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return r=e.child.childExpirationTime,r!==0&&r>=n?Hp(t,e,n):(ne(ee,ee.current&1),e=Nt(t,e,n),e!==null?e.sibling:null);ne(ee,ee.current&1);break;case 19:if(r=e.childExpirationTime>=n,(t.effectTag&64)!=0){if(r)return Wp(t,e,n);e.effectTag|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null),ne(ee,ee.current),!r)return null}return Nt(t,e,n)}ct=!1}}else ct=!1;switch(e.expirationTime=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),t=e.pendingProps,i=yr(e,ke.current),wr(e,n),i=Il(null,e,r,t,i,n),e.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)){var s=!0;no(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gl(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&co(e,r,o,t),i.updater=ho,e.stateNode=i,i._reactInternalFiber=e,vl(e,r,t,n),e=Ml(null,e,r,!0,s,n)}else e.tag=0,We(null,e,i,n),e=e.child;return e;case 16:e:{if(i=e.elementType,t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),t=e.pendingProps,T0(i),i._status!==1)throw i._result;switch(i=i._result,e.type=i,s=e.tag=QE(i),t=st(i,t),s){case 0:e=Ol(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=Up(null,e,i,st(i.type,t),r,n);break e}throw Error(w(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ol(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Bp(t,e,r,i,n);case 3:if(zp(e),r=e.updateQueue,t===null||r===null)throw Error(w(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,yl(t,e),Si(e,r,null,n),r=e.memoizedState.element,r===i)Pl(),e=Nt(t,e,n);else{if((i=e.stateNode.hydrate)&&(Xt=fr(e.stateNode.containerInfo.firstChild),Ct=e,i=An=!0),i)for(n=wl(e,null,r,n),e.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else We(t,e,r,n),Pl();e=e.child}return e;case 5:return Cp(e),t===null&&Dl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zu(r,i)?o=null:s!==null&&Zu(r,s)&&(e.effectTag|=16),jp(t,e),e.mode&4&&n!==1&&i.hidden?(e.expirationTime=e.childExpirationTime=1,e=null):(We(t,e,o,n),e=e.child),e;case 6:return t===null&&Dl(e),null;case 13:return Hp(t,e,n);case 4:return El(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Er(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Fp(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ne(ao,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=In(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ue.current){e=Nt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=qt(n,null),l.tag=2,Gt(a,l)),a.expirationTime<n&&(a.expirationTime=n),l=a.alternate,l!==null&&l.expirationTime<n&&(l.expirationTime=n),vp(a.return,n),u.expirationTime<n&&(u.expirationTime=n);break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,wr(e,n),i=Je(i,s.unstable_observedBits),r=r(i),e.effectTag|=1,We(t,e,r,n),e.child;case 14:return i=e.type,s=st(i,e.pendingProps),s=st(i.type,s),Up(t,e,i,s,r,n);case 15:return Vp(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),e.tag=1,Ve(r)?(t=!0,no(e)):t=!1,wr(e,n),Sp(e,r,i),vl(e,r,i,n),Ml(null,e,r,!0,t,n);case 19:return Wp(t,e,n)}throw Error(w(156,e.tag))};var Xl=null,Yl=null;function qE(t){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)return!0;try{var n=e.inject(t);Xl=function(r){try{e.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)==64)}catch{}},Yl=function(r){try{e.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function GE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function dt(t,e,n,r){return new GE(t,e,n,r)}function Jl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QE(t){if(typeof t=="function")return Jl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_u)return 11;if(t===Iu)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=t.childExpirationTime,n.expirationTime=t.expirationTime,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{expirationTime:e.expirationTime,firstContext:e.firstContext,responders:e.responders},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jl(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Tn:return Zt(n.children,i,s,e);case E0:o=8,i|=7;break;case jf:o=8,i|=1;break;case bs:return t=dt(12,n,e,i|8),t.elementType=bs,t.type=bs,t.expirationTime=s,t;case Fs:return t=dt(13,n,e,i),t.type=Fs,t.elementType=Fs,t.expirationTime=s,t;case Su:return t=dt(19,n,e,i),t.elementType=Su,t.expirationTime=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bf:o=10;break e;case zf:o=9;break e;case _u:o=11;break e;case Iu:o=14;break e;case Hf:o=16,r=null;break e;case Kf:o=22;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.expirationTime=s,e}function Zt(t,e,n,r){return t=dt(7,t,r,e),t.expirationTime=n,t}function Zl(t,e,n){return t=dt(6,t,null,e),t.expirationTime=n,t}function ec(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.expirationTime=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XE(t,e,n){this.tag=e,this.current=null,this.containerInfo=t,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Em(t,e){var n=t.firstSuspendedTime;return t=t.lastSuspendedTime,n!==0&&n>=e&&t<=e}function $n(t,e){var n=t.firstSuspendedTime,r=t.lastSuspendedTime;n<e&&(t.firstSuspendedTime=e),(r>e||n===0)&&(t.lastSuspendedTime=e),e<=t.lastPingedTime&&(t.lastPingedTime=0),e<=t.lastExpiredTime&&(t.lastExpiredTime=0)}function Tm(t,e){e>t.firstPendingTime&&(t.firstPendingTime=e);var n=t.firstSuspendedTime;n!==0&&(e>=n?t.firstSuspendedTime=t.lastSuspendedTime=t.nextKnownPendingLevel=0:e>=t.lastSuspendedTime&&(t.lastSuspendedTime=e+1),e>t.nextKnownPendingLevel&&(t.nextKnownPendingLevel=e))}function tc(t,e){var n=t.lastExpiredTime;(n===0||n>e)&&(t.lastExpiredTime=e)}function Uo(t,e,n,r){var i=e.current,s=ft(),o=Ii.suspense;s=Dn(s,i,o);e:if(n){n=n._reactInternalFiber;t:{if(_n(n)!==n||n.tag!==1)throw Error(w(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Ve(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(w(171))}if(n.tag===1){var u=n.type;if(Ve(u)){n=ip(n,u,a);break e}}n=a}else n=Ht;return e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Gt(i,e),Jt(i,s),s}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){t=t.memoizedState,t!==null&&t.dehydrated!==null&&t.retryTime<e&&(t.retryTime=e)}function rc(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function ic(t,e,n){n=n!=null&&n.hydrate===!0;var r=new XE(t,e,n),i=dt(3,null,null,e===2?7:e===1?3:0);r.current=i,i.stateNode=r,gl(i),t[fi]=r.current,n&&e!==0&&N0(t,t.nodeType===9?t:t.ownerDocument),this._internalRoot=r}ic.prototype.render=function(t){Uo(t,this._internalRoot,null,null)};ic.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Uo(null,t,null,function(){e[fi]=null})};function Mi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function YE(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new ic(t,0,e?{hydrate:!0}:void 0)}function Vo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=nc(o);a.call(l)}}Uo(e,o,t,i)}else{if(s=n._reactRootContainer=YE(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=nc(o);u.call(l)}}fm(function(){Uo(e,o,t,i)})}return nc(o)}function JE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}yd=function(t){if(t.tag===13){var e=oo(ft(),150,100);Jt(t,e),rc(t,e)}};bu=function(t){t.tag===13&&(Jt(t,3),rc(t,3))};vd=function(t){if(t.tag===13){var e=ft();e=Dn(e,t,null),Jt(t,e),rc(t,e)}};pu=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nl(r);if(!i)throw Error(w(90));Gf(r),Nu(r,i)}}}break;case"textarea":Zf(t,n);break;case"select":e=n.value,e!=null&&lr(t,!!n.multiple,e,!1)}};mu=hm;Lf=function(t,e,n,r,i){var s=M;M|=4;try{return Kt(98,t.bind(null,e,n,r,i))}finally{M=s,M===he&&ut()}};gu=function(){(M&(1|ot|ht))===he&&(UE(),Ir())};$f=function(t,e){var n=M;M|=2;try{return t(e)}finally{M=n,M===he&&ut()}};function Sm(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(e))throw Error(w(200));return JE(t,e,null,n)}var ZE={Events:[pi,Sn,nl,Df,fu,dr,function(t){Mu(t,V0)},Of,Mf,qs,zs,Ir,{current:!1}]};(function(t){var e=t.findFiberByHostInstance;return qE(Pe({},t,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fd(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return e?e(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:di,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;Xe.createPortal=Sm;Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternalFiber;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):Error(w(268,Object.keys(t)));return t=fd(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t,e){if((M&(ot|ht))!==he)throw Error(w(187));var n=M;M|=1;try{return Kt(99,t.bind(null,e))}finally{M=n,ut()}};Xe.hydrate=function(t,e,n){if(!Mi(e))throw Error(w(200));return Vo(null,t,e,!0,n)};Xe.render=function(t,e,n){if(!Mi(e))throw Error(w(200));return Vo(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Mi(t))throw Error(w(40));return t._reactRootContainer?(fm(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};Xe.unstable_batchedUpdates=hm;Xe.unstable_createPortal=function(t,e){return Sm(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mi(n))throw Error(w(200));if(t==null||t._reactInternalFiber===void 0)throw Error(w(38));return Vo(t,e,n,!1,r)};Xe.version="16.14.0";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(t){console.error(t)}}Im(),Sf.exports=Xe;var kN=Sf.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(m=64)),r.push(n[c],n[h],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const m=s<<2|a>>4;if(r.push(m),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},t1=function(t){const e=km(t);return Cm.encodeByteArray(e,!0)},Nm=function(t){return t1(t).replace(/\./g,"")},n1=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Am(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function xm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function i1(){return de().indexOf("Electron/")>=0}function Dm(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s1(){return de().indexOf("MSAppHost/")>=0}function o1(){return typeof indexedDB=="object"}function a1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class bn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?l1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function l1(t,e){return t.replace(c1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const c1=/\{\$([^}]+)}/g;function h1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pm(s)&&Pm(o)){if(!jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function f1(t,e){const n=new d1(t,e);return n.subscribe.bind(n)}class d1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");p1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sc),i.error===void 0&&(i.error=sc),i.complete===void 0&&(i.complete=sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new r1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y1(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:g1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g1(t){return t===Un?void 0:t}function y1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new m1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const w1={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},E1=W.INFO,T1={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},_1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=T1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=E1,this._logHandler=_1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const S1=(t,e)=>e.some(n=>t instanceof n);let Om,Mm;function I1(){return Om||(Om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Mm||(Mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,ac=new WeakMap,$m=new WeakMap,uc=new WeakMap,lc=new WeakMap;function C1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(en(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),lc.set(e,t),e}function N1(t){if(ac.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ac.set(t,e)}let cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A1(t){cc=t(cc)}function x1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return $m.set(r,e.sort?e.sort():[e]),en(r)}:k1().includes(t)?function(...e){return t.apply(hc(this),e),en(Lm.get(this))}:function(...e){return en(t.apply(hc(this),e))}}function R1(t){return typeof t=="function"?x1(t):(t instanceof IDBTransaction&&N1(t),S1(t,I1())?new Proxy(t,cc):t)}function en(t){if(t instanceof IDBRequest)return C1(t);if(uc.has(t))return uc.get(t);const e=R1(t);return e!==t&&(uc.set(t,e),lc.set(e,t)),e}const hc=t=>lc.get(t);function D1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=en(o);return r&&o.addEventListener("upgradeneeded",u=>{r(en(o.result),u.oldVersion,u.newVersion,en(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const P1=["get","getKey","getAll","getAllKeys","count"],O1=["put","add","delete","clear"],fc=new Map;function bm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=O1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return fc.set(e,s),s}A1(t=>lf(uf({},t),{get:(e,n,r)=>bm(e,n)||t.get(e,n,r),has:(e,n)=>!!bm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",Fm="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new oc("@firebase/app"),$1="@firebase/app-compat",b1="@firebase/analytics-compat",F1="@firebase/analytics",U1="@firebase/app-check-compat",V1="@firebase/app-check",j1="@firebase/auth",B1="@firebase/auth-compat",z1="@firebase/database",H1="@firebase/database-compat",K1="@firebase/functions",W1="@firebase/functions-compat",q1="@firebase/installations",G1="@firebase/installations-compat",Q1="@firebase/messaging",X1="@firebase/messaging-compat",Y1="@firebase/performance",J1="@firebase/performance-compat",Z1="@firebase/remote-config",eT="@firebase/remote-config-compat",tT="@firebase/storage",nT="@firebase/storage-compat",rT="@firebase/firestore",iT="@firebase/firestore-compat",sT="firebase",oT="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="[DEFAULT]",aT={[dc]:"fire-core",[$1]:"fire-core-compat",[F1]:"fire-analytics",[b1]:"fire-analytics-compat",[V1]:"fire-app-check",[U1]:"fire-app-check-compat",[j1]:"fire-auth",[B1]:"fire-auth-compat",[z1]:"fire-rtdb",[H1]:"fire-rtdb-compat",[K1]:"fire-fn",[W1]:"fire-fn-compat",[q1]:"fire-iid",[G1]:"fire-iid-compat",[Q1]:"fire-fcm",[X1]:"fire-fcm-compat",[Y1]:"fire-perf",[J1]:"fire-perf-compat",[Z1]:"fire-rc",[eT]:"fire-rc-compat",[tT]:"fire-gcs",[nT]:"fire-gcs-compat",[rT]:"fire-fst",[iT]:"fire-fst-compat","fire-js":"fire-js",[sT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Map,mc=new Map;function uT(t,e){try{t.container.addComponent(e)}catch(n){pc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kr(t){const e=t.name;if(mc.has(e))return pc.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of Bo.values())uT(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Vn=new Li("app","Firebase",lT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=oT;function CN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Um,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Vn.create("bad-app-name",{appName:String(r)});const i=Bo.get(r);if(i){if(jo(t,i.options)&&jo(n,i.config))return i;throw Vn.create("duplicate-app",{appName:r})}const s=new v1(r);for(const a of mc.values())s.addComponent(a);const o=new cT(t,n,s);return Bo.set(r,o),o}function Vm(t=Um){const e=Bo.get(t);if(!e)throw Vn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=aT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pc.warn(a.join(" "));return}kr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebase-heartbeat-database",fT=1,Fi="firebase-heartbeat-store";let yc=null;function jm(){return yc||(yc=D1(hT,fT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}}).catch(t=>{throw Vn.create("storage-open",{originalErrorMessage:t.message})})),yc}async function dT(t){var e;try{return(await jm()).transaction(Fi).objectStore(Fi).get(zm(t))}catch(n){throw Vn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Bm(t,e){var n;try{const i=(await jm()).transaction(Fi,"readwrite");return await i.objectStore(Fi).put(e,zm(t)),i.done}catch(r){throw Vn.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function zm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1024,mT=30*24*60*60*1e3;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=mT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hm(),{heartbeatsToSend:n,unsentEntries:r}=yT(this._heartbeatsCache.heartbeats),i=Nm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hm(){return new Date().toISOString().substring(0,10)}function yT(t,e=pT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o1()?a1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Km(t){return Nm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){kr(new Fn("platform-logger",e=>new M1(e),"PRIVATE")),kr(new Fn("heartbeat",e=>new gT(e),"PRIVATE")),tn(dc,Fm,t),tn(dc,Fm,"esm2017"),tn("fire-js","")}wT("");function vc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Wm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ET=Wm,qm=new Li("auth","Firebase",Wm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new oc("@firebase/auth");function zo(t,...e){Gm.logLevel<=W.ERROR&&Gm.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw wc(t,...e)}function mt(t,...e){return wc(t,...e)}function Qm(t,e,n){const r=Object.assign(Object.assign({},ET()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function TT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),Qm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qm.create(t,...e)}function b(t,e,...n){if(!t)throw wc(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Rt(t,e){t||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function Dt(t){Rt(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){const n=gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jo(s,e!=null?e:{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function ST(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IT(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IT()||xm()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=Am()||Rm()}get(){return kT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new Ui(3e4,6e4);function xT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ho(t,e,n,r,i={}){return Zm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$i(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Jm.fetch()(eg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Zm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NT),e);try{const i=new DT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ko(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qm(t,c,l);pt(t,c)}}catch(i){if(i instanceof bn)throw i;pt(t,"network-request-failed")}}async function RT(t,e,n,r,i={}){const s=await Ho(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function eg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tc(t.config,i):`${t.config.apiScheme}://${i}`}class DT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),AT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){return Ho(t,"POST","/v1/accounts:delete",e)}async function OT(t,e){return Ho(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MT(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Sc(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(_c(i.auth_time)),issuedAtTime:Vi(_c(i.iat)),expirationTime:Vi(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function Sc(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=n1(r);return s?JSON.parse(s):(zo("Failed to decode base64 JWT payload"),null)}catch(s){return zo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function LT(t){const e=Sc(t);return b(e,"internal-error"),b(typeof e.exp!="undefined","internal-error"),b(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&$T(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $T({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ji(t,OT(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?VT(s.providerUserInfo):[],a=UT(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function FT(t){const e=et(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VT(t){return t.map(e=>{var{providerId:n}=e,r=vc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){const n=await Zm(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=eg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken!="undefined","internal-error"),b(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):LT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bi;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){b(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MT(this,e)}reload(){return FT(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ji(this,PT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,d=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:T,isAnonymous:I,providerData:C,stsTokenManager:$}=n;b(y&&$,e,"internal-error");const j=Bi.fromJSON(this.name,$);b(typeof y=="string",e,"internal-error"),nn(h,e.name),nn(m,e.name),b(typeof T=="boolean",e,"internal-error"),b(typeof I=="boolean",e,"internal-error"),nn(g,e.name),nn(_,e.name),nn(R,e.name),nn(d,e.name),nn(f,e.name),nn(p,e.name);const O=new jn({uid:y,auth:e,email:m,emailVerified:T,displayName:h,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:R,stsTokenManager:j,createdAt:f,lastLoginAt:p});return C&&Array.isArray(C)&&(O.providerData=C.map(Re=>Object.assign({},Re))),d&&(O._redirectEventId=d),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ng.type="NONE";const rg=ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Dt(rg),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Dt(rg);const o=qo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=jn._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Cr(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Cr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lg(e))return"Blackberry";if(cg(e))return"Webos";if(Ic(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sg(t=de()){return/firefox\//i.test(t)}function Ic(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(t=de()){return/crios\//i.test(t)}function ag(t=de()){return/iemobile/i.test(t)}function ug(t=de()){return/android/i.test(t)}function lg(t=de()){return/blackberry/i.test(t)}function cg(t=de()){return/webos/i.test(t)}function Go(t=de()){return/iphone|ipad|ipod/i.test(t)}function BT(t=de()){var e;return Go(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function zT(){return Dm()&&document.documentMode===10}function hg(t=de()){return Go(t)||ug(t)||cg(t)||lg(t)||/windows phone/i.test(t)||ag(t)}function HT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e=[]){let n;switch(t){case"Browser":n=ig(de());break;case"Worker":n=`${ig(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Wo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function kc(t){return et(t)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t,e){return RT(t,"POST","/v1/accounts:signInWithIdp",xT(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="http://localhost";class Bn extends pg{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:qT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Cc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends zi{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends zi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Bn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends zi{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends zi{constructor(){super("twitter.com")}static credential(e,n){return Bn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=mg(r);return new Ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mg(r);return new Ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends bn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qo(e,n,r,i)}}function gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,s,e,r):s})}async function GT(t,e,n=!1){const r=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ji(t,gg(i,s,e,t),n);b(o.idToken,i,"internal-error");const a=Sc(o.idToken);b(a,i,"internal-error");const{sub:u}=a;return b(t.uid===u,i,"user-mismatch"),Ar._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&pt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e,n=!1){const r="signIn",i=await gg(t,r,e),s=await Ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function YT(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function NN(t){return et(t).signOut()}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){const t=de();return Ic(t)||Go(t)}const ZT=1e3,e_=10;class vg extends yg{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JT()&&HT(),this.fallbackToPolling=hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const t_=vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wg.type="SESSION";const Eg=wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await n_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Nc("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function i_(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof gt().WorkerGlobalScope!="undefined"&&typeof gt().importScripts=="function"}async function s_(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a_(){return Tg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",u_=1,Jo="firebaseLocalStorage",Sg="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zo(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function l_(){const t=indexedDB.deleteDatabase(_g);return new Hi(t).toPromise()}function Ac(){const t=indexedDB.open(_g,u_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:Sg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await l_(),e(await Ac()))})})}async function Ig(t,e,n){const r=Zo(t,!0).put({[Sg]:e,value:n});return new Hi(r).toPromise()}async function c_(t,e){const n=Zo(t,!1).get(e),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function kg(t,e){const n=Zo(t,!0).delete(e);return new Hi(n).toPromise()}const h_=800,f_=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(a_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s_(),!this.activeServiceWorker)return;this.sender=new r_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await Ig(e,Xo,"1"),await kg(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zo(i,!1).getAll();return new Hi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const d_=Cg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function m_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",p_().appendChild(r)})}function g_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){return e?Dt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends pg{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y_(t){return XT(t.auth,new xc(t),t.bypassAuthState)}function v_(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),QT(n,new xc(t),t.bypassAuthState)}async function w_(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),GT(n,new xc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y_;case"linkViaPopup":case"linkViaRedirect":return w_;case"reauthViaPopup":case"reauthViaRedirect":return v_;default:pt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new Ui(2e3,1e4);async function AN(t,e,n){const r=kc(t);TT(t,e,Cc);const i=Ng(r,n);return new zn(r,"signInViaPopup",e,i).executeNotNull()}class zn extends Ag{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,E_.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="pendingRedirect",ea=new Map;class __ extends Ag{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await S_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(t,e){const n=C_(e),r=k_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function I_(t,e){ea.set(t._key(),e)}function k_(t){return Dt(t._redirectPersistence)}function C_(t){return qo(T_,t.config.apiKey,t.name)}async function N_(t,e,n=!1){const r=kc(t),i=Ng(r,e),o=await new __(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=10*60*1e3;class x_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A_&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e={}){return Ho(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,O_=/^https?/;async function M_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D_(t);for(const n of e)try{if(L_(n))return}catch{}pt(t,"unauthorized-domain")}function L_(t){const e=Ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!O_.test(n))return!1;if(P_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Ui(3e4,6e4);function Dg(){const t=gt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b_(t){return new Promise((e,n)=>{var r,i,s;function o(){Dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dg(),n(mt(t,"network-request-failed"))},timeout:$_.get()})}if((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=gt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=g_("iframefcb");return gt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},m_(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ta=null,e})}let ta=null;function F_(t){return ta=ta||b_(t),ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Ui(5e3,15e3),V_="__/auth/iframe",j_="emulator/auth/iframe",B_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H_(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,j_):`https://${t.config.authDomain}/${V_}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=z_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$i(r).slice(1)}`}async function K_(t){const e=await F_(t),n=gt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:H_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=gt().setTimeout(()=>{s(o)},U_.get());function u(){gt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q_=500,G_=600,Q_="_blank",X_="http://localhost";class Pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y_(t,e,n,r=q_,i=G_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},W_),{width:r.toString(),height:i.toString(),top:s,left:o}),l=de().toLowerCase();n&&(a=og(l)?Q_:n),sg(l)&&(e=e||X_,u.scrollbars="yes");const c=Object.entries(u).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(BT(l)&&a!=="_self")return J_(e||"",a),new Pg(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new Pg(h)}function J_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="__/auth/handler",eS="emulator/auth/handler";function Og(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof Cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",h1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof zi){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${tS(t)}?${$i(a).slice(1)}`}function tS({config:t}){return t.emulator?Tc(t,eS):`https://${t.authDomain}/${Z_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eg,this._completeRedirectFn=N_,this._overrideRedirectResult=I_}async _openPopup(e,n,r,i){var s;Rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Og(e,n,r,Ec(),i);return Y_(e,o,Nc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),i_(Og(e,n,r,Ec(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K_(e),r=new x_(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rc];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hg()||Ic()||Go()}}const rS=nS;var Mg="@firebase/auth",Lg="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oS(t){kr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(t)},c=new WT(a,u,l);return ST(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Fn("auth-internal",e=>{const n=kc(e.getProvider("auth").getImmediate());return(r=>new iS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Mg,Lg,sS(t)),tn(Mg,Lg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t=Vm()){const e=gc(t,"auth");return e.isInitialized()?e.getImmediate():_T(t,{popupRedirectResolver:rS,persistence:[d_,t_,Eg]})}oS("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function aS(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function uS(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xr=function(){return xr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},xr.apply(this,arguments)},$g=function(t){return{loading:t==null,value:t}},lS=function(){return function(t,e){switch(e.type){case"error":return xr(xr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return $g(e.defaultValue);case"value":return xr(xr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},cS=function(t){var e=t?t():void 0,n=wn.exports.useReducer(lS(),$g(e)),r=n[0],i=n[1],s=function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},o=function(u){i({type:"error",error:u})},a=function(u){i({type:"value",value:u})};return wn.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},RN=function(t,e){var n=cS(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;wn.exports.useEffect(function(){var l=YT(t,function(c){return aS(void 0,void 0,void 0,function(){var h;return uS(this,function(m){switch(m.label){case 0:if(!(e==null?void 0:e.onUserChanged))return[3,4];m.label=1;case 1:return m.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return m.sent(),[3,4];case 3:return h=m.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t]);var u=[a,i,r];return wn.exports.useMemo(function(){return u},u)},hS="firebase",fS="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(hS,fS,"app");var dS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,Dc=Dc||{},L=dS||self;function na(){}function Pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ki(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pS(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++mS)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),mS=0;function gS(t,e,n){return t.call.apply(t.bind,arguments)}function yS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=gS:ve=yS,ve.apply(null,arguments)}function ra(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function we(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function un(){this.s=this.s,this.o=this.o}var vS=0;un.prototype.s=!1;un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vS!=0)&&pS(this)};un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Fg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function wS(t){e:{var e=cI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Ug(t){return Array.prototype.concat.apply([],arguments)}function Mc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ia(t){return/^[\s\xa0]*$/.test(t)}var Vg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Me(t,e){return t.indexOf(e)!=-1}function Lc(t,e){return t<e?-1:t>e?1:0}var Le;e:{var jg=L.navigator;if(jg){var Bg=jg.userAgent;if(Bg){Le=Bg;break e}}Le=""}function $c(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zg(t){const e={};for(const n in t)e[n]=t[n];return e}var Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kg(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Hg.length;s++)n=Hg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bc(t){return bc[" "](t),t}bc[" "]=na;function ES(t){var e=SS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TS=Me(Le,"Opera"),Rr=Me(Le,"Trident")||Me(Le,"MSIE"),Wg=Me(Le,"Edge"),Fc=Wg||Rr,qg=Me(Le,"Gecko")&&!(Me(Le.toLowerCase(),"webkit")&&!Me(Le,"Edge"))&&!(Me(Le,"Trident")||Me(Le,"MSIE"))&&!Me(Le,"Edge"),_S=Me(Le.toLowerCase(),"webkit")&&!Me(Le,"Edge");function Gg(){var t=L.document;return t?t.documentMode:void 0}var sa;e:{var Uc="",Vc=function(){var t=Le;if(qg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wg)return/Edge\/([\d\.]+)/.exec(t);if(Rr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_S)return/WebKit\/(\S+)/.exec(t);if(TS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vc&&(Uc=Vc?Vc[1]:""),Rr){var jc=Gg();if(jc!=null&&jc>parseFloat(Uc)){sa=String(jc);break e}}sa=Uc}var SS={};function IS(){return ES(function(){let t=0;const e=Vg(String(sa)).split("."),n=Vg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Lc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Lc(i[2].length==0,s[2].length==0)||Lc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bc;if(L.document&&Rr){var Qg=Gg();Bc=Qg||parseInt(sa,10)||void 0}else Bc=void 0;var kS=Bc,CS=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",na,e),L.removeEventListener("test",na,e)}catch{}return t}();function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};function Wi(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qg){e:{try{bc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:NS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.Z.h.call(this)}}we(Wi,Ae);var NS={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qi="closure_listenable_"+(1e6*Math.random()|0),AS=0;function xS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++AS,this.ca=this.fa=!1}function oa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function aa(t){this.src=t,this.g={},this.h=0}aa.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new xS(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function zc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=bg(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),Wc={};function Xg(t,e,n,r,i){if(r&&r.once)return Jg(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xg(t,e[s],n,r,i);return null}return n=Xc(n),t&&t[qi]?t.N(e,n,Ki(r)?!!r.capture:!!r,i):Yg(t,e,n,!1,r,i)}function Yg(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ki(i)?!!i.capture:!!i,a=Gc(t);if(a||(t[Kc]=a=new aa(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ey(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RS(){function t(n){return e.call(t.src,t.listener,n)}var e=DS;return t}function Jg(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jg(t,e[s],n,r,i);return null}return n=Xc(n),t&&t[qi]?t.O(e,n,Ki(r)?!!r.capture:!!r,i):Yg(t,e,n,!0,r,i)}function Zg(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zg(t,e[s],n,r,i);else r=Ki(r)?!!r.capture:!!r,n=Xc(n),t&&t[qi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hc(s,n,r,i),-1<n&&(oa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hc(e,n,r,i)),(n=-1<t?e[t]:null)&&qc(n))}function qc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[qi])zc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ey(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gc(e))?(zc(n,t),n.h==0&&(n.src=null,e[Kc]=null)):oa(t)}}}function ey(t){return t in Wc?Wc[t]:Wc[t]="on"+t}function DS(t,e){if(t.ca)t=!0;else{e=new Wi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qc(t),t=n.call(r,e)}return t}function Gc(t){return t=t[Kc],t instanceof aa?t:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xc(t){return typeof t=="function"?t:(t[Qc]||(t[Qc]=function(e){return t.handleEvent(e)}),t[Qc])}function pe(){un.call(this),this.i=new aa(this),this.P=this,this.I=null}we(pe,un);pe.prototype[qi]=!0;pe.prototype.removeEventListener=function(t,e,n,r){Zg(this,t,e,n,r)};function Ee(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var i=e;e=new Ae(r,t),Kg(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ua(o,r,!0,e)&&i}if(o=e.g=t,i=ua(o,r,!0,e)&&i,i=ua(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ua(o,r,!1,e)&&i}pe.prototype.M=function(){if(pe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oa(n[r]);delete t.g[e],t.h--}}this.I=null};pe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ua(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&zc(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yc=L.JSON.stringify;function PS(){var t=ny;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OS{constructor(){this.h=this.g=null}add(e,n){const r=ty.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ty=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MS,t=>t.reset());class MS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LS(t){L.setTimeout(()=>{throw t},0)}function Jc(t,e){Zc||$S(),eh||(Zc(),eh=!0),ny.add(t,e)}var Zc;function $S(){var t=L.Promise.resolve(void 0);Zc=function(){t.then(bS)}}var eh=!1,ny=new OS;function bS(){for(var t;t=PS();){try{t.h.call(t.g)}catch(n){LS(n)}var e=ty;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eh=!1}function la(t,e){pe.call(this),this.h=t||1,this.g=e||L,this.j=ve(this.kb,this),this.l=Date.now()}we(la,pe);k=la.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ee(this,"tick"),this.da&&(th(this),this.start()))}};k.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function th(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}k.M=function(){la.Z.M.call(this),th(this),delete this.g};function nh(t,e,n){if(typeof t=="function")n&&(t=ve(t,n));else if(t&&typeof t.handleEvent=="function")t=ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function ry(t){t.g=nh(()=>{t.g=null,t.i&&(t.i=!1,ry(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FS extends un{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ry(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(t){un.call(this),this.h=t,this.g={}}we(Gi,un);var iy=[];function sy(t,e,n,r){Array.isArray(n)||(n&&(iy[0]=n.toString()),n=iy);for(var i=0;i<n.length;i++){var s=Xg(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oy(t){$c(t.g,function(e,n){this.g.hasOwnProperty(n)&&qc(e)},t),t.g={}}Gi.prototype.M=function(){Gi.Z.M.call(this),oy(this)};Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ca(){this.g=!0}ca.prototype.Aa=function(){this.g=!1};function US(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VS(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Dr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BS(t,n)+(r?" "+r:"")})}function jS(t,e){t.info(function(){return"TIMEOUT: "+e})}ca.prototype.info=function(){};function BS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yc(n)}catch{return e}}var Hn={},ay=null;function ha(){return ay=ay||new pe}Hn.Ma="serverreachability";function uy(t){Ae.call(this,Hn.Ma,t)}we(uy,Ae);function Qi(t){const e=ha();Ee(e,new uy(e))}Hn.STAT_EVENT="statevent";function ly(t,e){Ae.call(this,Hn.STAT_EVENT,t),this.stat=e}we(ly,Ae);function $e(t){const e=ha();Ee(e,new ly(e,t))}Hn.Na="timingevent";function cy(t,e){Ae.call(this,Hn.Na,t),this.size=e}we(cy,Ae);function Xi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var fa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},hy={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function rh(){}rh.prototype.h=null;function fy(t){return t.h||(t.h=t.i())}function dy(){}var Yi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ih(){Ae.call(this,"d")}we(ih,Ae);function sh(){Ae.call(this,"c")}we(sh,Ae);var oh;function da(){}we(da,rh);da.prototype.g=function(){return new XMLHttpRequest};da.prototype.i=function(){return{}};oh=new da;function Ji(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Gi(this),this.P=zS,t=Fc?125:void 0,this.W=new la(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new py}function py(){this.i=null,this.g="",this.h=!1}var zS=45e3,ah={},pa={};k=Ji.prototype;k.setTimeout=function(t){this.P=t};function uh(t,e,n){t.K=1,t.v=wa(Pt(e)),t.s=n,t.U=!0,my(t,null)}function my(t,e){t.F=Date.now(),Zi(t),t.A=Pt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Iy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new py,t.g=qy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new FS(ve(t.Ia,t,t.g),t.O)),sy(t.V,t.g,"readystatechange",t.gb),e=t.H?zg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qi(),US(t.j,t.u,t.A,t.m,t.X,t.s)}k.gb=function(t){t=t.target;const e=this.L;e&&Ot(t)==3?e.l():this.Ia(t)};k.Ia=function(t){try{if(t==this.g)e:{const c=Ot(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Fc||this.g&&(this.h.h||this.g.ga()||$y(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Qi(3):Qi(2)),ma(this);var n=this.g.ba();this.N=n;t:if(gy(this)){var r=$y(this.g);t="";var i=r.length,s=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Kn(this),es(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,VS(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var l=a;break t}}l=null}if(n=l)Dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lh(this,n);else{this.i=!1,this.o=3,$e(12),Kn(this),es(this);break e}}this.U?(yy(this,c,o),Fc&&this.i&&c==3&&(sy(this.V,this.W,"tick",this.fb),this.W.start())):(Dr(this.j,this.m,o,null),lh(this,o)),c==4&&Kn(this),this.i&&!this.I&&(c==4?zy(this.l,this):(this.i=!1,Zi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),Kn(this),es(this)}}}catch{}finally{}};function gy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function yy(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HS(t,n),i==pa){e==4&&(t.o=4,$e(14),r=!1),Dr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ah){t.o=4,$e(15),Dr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Dr(t.j,t.m,i,null),lh(t,i);gy(t)&&i!=pa&&i!=ah&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eh(e),e.L=!0,$e(11))):(Dr(t.j,t.m,n,"[Invalid Chunked Response]"),Kn(t),es(t))}k.fb=function(){if(this.g){var t=Ot(this.g),e=this.g.ga();this.C<e.length&&(ma(this),yy(this,t,e),this.i&&t!=4&&Zi(this))}};function HS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pa:(n=Number(e.substring(n,r)),isNaN(n)?ah:(r+=1,r+n>e.length?pa:(e=e.substr(r,n),t.C=r+n,e)))}k.cancel=function(){this.I=!0,Kn(this)};function Zi(t){t.Y=Date.now()+t.P,vy(t,t.P)}function vy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xi(ve(t.eb,t),e)}function ma(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jS(this.j,this.A),this.K!=2&&(Qi(),$e(17)),Kn(this),this.o=2,es(this)):vy(this,this.Y-t)};function es(t){t.l.G==0||t.I||zy(t.l,t)}function Kn(t){ma(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,th(t.W),oy(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fh(n.i,t))){if(n.I=t.N,!t.J&&fh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ka(n),Sa(n);else break e;wh(n),$e(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xi(ve(n.ab,n),6e3));if(1>=Ny(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Gn(n,11)}else if((t.J||n.g==t)&&ka(n),!ia(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;!s.g&&(Me(_,"spdy")||Me(_,"quic")||Me(_,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(dh(s,s.h),s.h=null))}if(r.D){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.sa=R,J(r.F,r.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Wy(r,r.H?r.la:null,r.W),o.J){Ay(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(ma(a),Zi(a)),r.g=o}else jy(r);0<n.l.length&&Ia(n)}else l[0]!="stop"&&l[0]!="close"||Gn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gn(n,7):yh(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Qi(4)}catch{}}function KS(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ch(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pc(t)||typeof t=="string")Fg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Pc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=KS(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Pr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Pr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}k=Pr.prototype;k.R=function(){hh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};k.T=function(){return hh(this),this.g.concat()};function hh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Wn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Wn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}k.get=function(t,e){return Wn(this.h,t)?this.h[t]:e};k.set=function(t,e){Wn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};k.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var wy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function WS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qn){this.g=e!==void 0?e:t.g,ga(this,t.j),this.s=t.s,ya(this,t.i),va(this,t.m),this.l=t.l,e=t.h;var n=new rs;n.i=e.i,e.g&&(n.g=new Pr(e.g),n.h=e.h),Ey(this,n),this.o=t.o}else t&&(n=String(t).match(wy))?(this.g=!!e,ga(this,n[1]||"",!0),this.s=ts(n[2]||""),ya(this,n[3]||"",!0),va(this,n[4]),this.l=ts(n[5]||"",!0),Ey(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.g=!!e,this.h=new rs(null,this.g))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,Ty,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,Ty,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?YS:XS,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,ZS)),t.join("")};function Pt(t){return new qn(t)}function ga(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ya(t,e,n){t.i=n?ts(e,!0):e}function va(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ey(t,e,n){e instanceof rs?(t.h=e,eI(t.h,t.g)):(n||(e=ns(e,JS)),t.h=new rs(e,t.g))}function J(t,e,n){t.h.set(e,n)}function wa(t){return J(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qS(t){return t instanceof qn?Pt(t):new qn(t,void 0)}function GS(t,e,n,r){var i=new qn(null,void 0);return t&&ga(i,t),e&&ya(i,e),n&&va(i,n),r&&(i.l=r),i}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ty=/[#\/\?@]/g,XS=/[#\?:]/g,YS=/[#\?]/g,JS=/[#\?@]/g,ZS=/#/g;function rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Pr,t.h=0,t.i&&WS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=rs.prototype;k.add=function(t,e){ln(this),this.i=null,t=Or(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _y(t,e){ln(t),e=Or(t,e),Wn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Wn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&hh(t)))}function Sy(t,e){return ln(t),e=Or(t,e),Wn(t.g.h,e)}k.forEach=function(t,e){ln(this),this.g.forEach(function(n,r){Fg(n,function(i){t.call(e,i,r,this)},this)},this)};k.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};k.R=function(t){ln(this);var e=[];if(typeof t=="string")Sy(this,t)&&(e=Ug(e,this.g.get(Or(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ug(e,t[n])}return e};k.set=function(t,e){return ln(this),this.i=null,t=Or(this,t),Sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Iy(t,e,n){_y(t,e),0<n.length&&(t.i=null,t.g.set(Or(t,e),Mc(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Or(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eI(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_y(this,r),Iy(this,i,n))},t)),t.j=e}var tI=class{constructor(t,e){this.h=t,this.g=e}};function ky(t){this.l=t||nI,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nI=10;function Cy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ny(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dh(t,e){t.g?t.g.add(e):t.h=e}function Ay(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ky.prototype.cancel=function(){if(this.i=xy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Mc(t.i)}function ph(){}ph.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};ph.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function rI(){this.g=new ph}function iI(t,e,n){const r=n||"";try{ch(t,function(i,s){let o=i;Ki(i)&&(o=Yc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sI(t,e){const n=new ca;if(L.Image){const r=new Image;r.onload=ra(Ea,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ra(Ea,n,r,"TestLoadImage: error",!1,e),r.onabort=ra(Ea,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ra(Ea,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ea(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function is(t){this.l=t.$b||null,this.j=t.ib||!1}we(is,rh);is.prototype.g=function(){return new Ta(this.l,this.j)};is.prototype.i=function(t){return function(){return t}}({});function Ta(t,e){pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}we(Ta,pe);var mh=0;k=Ta.prototype;k.open=function(t,e){if(this.readyState!=mh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,os(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=mh};k.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ry(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ry(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}k.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ss(this):os(this),this.readyState==3&&Ry(this)}};k.Ua=function(t){this.g&&(this.response=this.responseText=t,ss(this))};k.Ta=function(t){this.g&&(this.response=t,ss(this))};k.ha=function(){this.g&&ss(this)};function ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,os(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oI=L.JSON.parse;function re(t){pe.call(this),this.headers=new Pr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dy,this.K=this.L=!1}we(re,pe);var Dy="",aI=/^https?$/i,uI=["POST","PUT"];k=re.prototype;k.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oh.g(),this.C=this.u?fy(this.u):fy(oh),this.g.onreadystatechange=ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Py(this,s);return}t=n||"";const i=new Pr(this.headers);r&&ch(r,function(s,o){i.set(o,s)}),r=wS(i.T()),n=L.FormData&&t instanceof L.FormData,!(0<=bg(uI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ly(this),0<this.B&&((this.K=lI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.pa,this)):this.A=nh(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Py(this,s)}};function lI(t){return Rr&&IS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function cI(t){return t.toLowerCase()=="content-type"}k.pa=function(){typeof Dc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function Py(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Oy(t),_a(t)}function Oy(t){t.D||(t.D=!0,Ee(t,"complete"),Ee(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ee(this,"complete"),Ee(this,"abort"),_a(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_a(this,!0)),re.Z.M.call(this)};k.Fa=function(){this.s||(this.F||this.v||this.l?My(this):this.cb())};k.cb=function(){My(this)};function My(t){if(t.h&&typeof Dc!="undefined"&&(!t.C[1]||Ot(t)!=4||t.ba()!=2)){if(t.v&&Ot(t)==4)nh(t.Fa,0,t);else if(Ee(t,"readystatechange"),Ot(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(wy)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!aI.test(i?i.toLowerCase():"")}n=r}if(n)Ee(t,"complete"),Ee(t,"success");else{t.m=6;try{var o=2<Ot(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Oy(t)}}finally{_a(t)}}}}function _a(t,e){if(t.g){Ly(t);const n=t.g,r=t.C[0]?na:null;t.g=null,t.C=null,e||Ee(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ly(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Ot(t){return t.g?t.g.readyState:0}k.ba=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}};k.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oI(e)}};function $y(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Da=function(){return this.m};k.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function hI(t){let e="";return $c(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function gh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):J(t,e,n))}function as(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function by(t){this.za=0,this.l=[],this.h=new ca,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=as("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=as("baseRetryDelayMs",5e3,t),this.$a=as("retryDelaySeedMs",1e4,t),this.Ya=as("forwardChannelMaxRetries",2,t),this.ra=as("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ky(t&&t.concurrentRequestLimit),this.Ca=new rI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}k=by.prototype;k.ma=8;k.G=1;function yh(t){if(Fy(t),t.G==3){var e=t.V++,n=Pt(t.F);J(n,"SID",t.J),J(n,"RID",e),J(n,"TYPE","terminate"),us(t,n),e=new Ji(t,t.h,e,void 0),e.K=2,e.v=wa(Pt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=qy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Zi(e)}Ky(t)}k.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Sa(t){t.g&&(Eh(t),t.g.cancel(),t.g=null)}function Fy(t){Sa(t),t.u&&(L.clearTimeout(t.u),t.u=null),ka(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function vh(t,e){t.l.push(new tI(t.Za++,e)),t.G==3&&Ia(t)}function Ia(t){Cy(t.i)||t.m||(t.m=!0,Jc(t.Ha,t),t.C=0)}function fI(t,e){return Ny(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Xi(ve(t.Ha,t,e),Hy(t,t.C)),t.C++,!0)}k.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ji(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=zg(s),Kg(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Vy(this,i,e),n=Pt(this.F),J(n,"RID",t),J(n,"CVER",22),this.D&&J(n,"X-HTTP-Session-Id",this.D),us(this,n),this.o&&s&&gh(n,this.o,s),dh(this.i,i),this.Ra&&J(n,"TYPE","init"),this.ja?(J(n,"$req",e),J(n,"SID","null"),i.$=!0,uh(i,n,null)):uh(i,n,e),this.G=2}}else this.G==3&&(t?Uy(this,t):this.l.length==0||Cy(this.i)||Uy(this))};function Uy(t,e){var n;e?n=e.m:n=t.V++;const r=Pt(t.F);J(r,"SID",t.J),J(r,"RID",n),J(r,"AID",t.U),us(t,r),t.o&&t.s&&gh(r,t.o,t.s),n=new Ji(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Vy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),dh(t.i,n),uh(n,r,e)}function us(t,e){t.j&&ch({},function(n,r){J(e,r,n)})}function Vy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ve(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{iI(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function jy(t){t.g||t.u||(t.Y=1,Jc(t.Ga,t),t.A=0)}function wh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Xi(ve(t.Ga,t),Hy(t,t.A)),t.A++,!0)}k.Ga=function(){if(this.u=null,By(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Xi(ve(this.bb,this),t)}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$e(10),Sa(this),By(this))};function Eh(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function By(t){t.g=new Ji(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Pt(t.oa);J(e,"RID","rpc"),J(e,"SID",t.J),J(e,"CI",t.N?"0":"1"),J(e,"AID",t.U),us(t,e),J(e,"TYPE","xmlhttp"),t.o&&t.s&&gh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=wa(Pt(e)),n.s=null,n.U=!0,my(n,t)}k.ab=function(){this.v!=null&&(this.v=null,Sa(this),wh(this),$e(19))};function ka(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function zy(t,e){var n=null;if(t.g==e){ka(t),Eh(t),t.g=null;var r=2}else if(fh(t.i,e))n=e.D,Ay(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ha(),Ee(r,new cy(r,n)),Ia(t)}else jy(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&fI(t,e)||r==2&&wh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function Hy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Gn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ve(t.jb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||ga(n,"https"),wa(n)),sI(n.toString(),r)}else $e(2);t.G=0,t.j&&t.j.va(e),Ky(t),Fy(t)}k.jb=function(t){t?(this.h.info("Successfully pinged google.com"),$e(2)):(this.h.info("Failed to ping google.com"),$e(1))};function Ky(t){t.G=0,t.I=-1,t.j&&((xy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Mc(t.l),t.l.length=0),t.j.ua())}function Wy(t,e,n){let r=qS(n);if(r.i!="")e&&ya(r,e+"."+r.i),va(r,r.m);else{const i=L.location;r=GS(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&$c(t.aa,function(i,s){J(r,s,i)}),e=t.D,n=t.sa,e&&n&&J(r,e,n),J(r,"VER",t.ma),us(t,r),r}function qy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new re(new is({ib:!0})):new re(t.qa),e.L=t.H,e}function Gy(){}k=Gy.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function Ca(){if(Rr&&!(10<=Number(kS)))throw Error("Environmental error: no available transport.")}Ca.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){pe.call(this),this.g=new by(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mr(this)}we(Qe,pe);Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Jc(ve(t.hb,t,e))),$e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Wy(t,null,t.W),Ia(t)};Qe.prototype.close=function(){yh(this.g)};Qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,vh(this.g,e)}else this.v?(e={},e.__data__=Yc(t),vh(this.g,e)):vh(this.g,t)};Qe.prototype.M=function(){this.g.j=null,delete this.j,yh(this.g),delete this.g,Qe.Z.M.call(this)};function Qy(t){ih.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}we(Qy,ih);function Xy(){sh.call(this),this.status=1}we(Xy,sh);function Mr(t){this.g=t}we(Mr,Gy);Mr.prototype.xa=function(){Ee(this.g,"a")};Mr.prototype.wa=function(t){Ee(this.g,new Qy(t))};Mr.prototype.va=function(t){Ee(this.g,new Xy)};Mr.prototype.ua=function(){Ee(this.g,"b")};Ca.prototype.createWebChannel=Ca.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;fa.NO_ERROR=0;fa.TIMEOUT=8;fa.HTTP_ERROR=6;hy.COMPLETE="complete";dy.EventType=Yi;Yi.OPEN="a";Yi.CLOSE="b";Yi.ERROR="c";Yi.MESSAGE="d";pe.prototype.listen=pe.prototype.N;re.prototype.listenOnce=re.prototype.O;re.prototype.getLastError=re.prototype.La;re.prototype.getLastErrorCode=re.prototype.Da;re.prototype.getStatus=re.prototype.ba;re.prototype.getResponseJson=re.prototype.Qa;re.prototype.getResponseText=re.prototype.ga;re.prototype.send=re.prototype.ea;var dI=function(){return new Ca},pI=function(){return ha()},Th=fa,mI=hy,gI=Hn,Yy={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yI=is,Na=dy,vI=re;const Jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new oc("@firebase/firestore");function Zy(){return Qn.logLevel}function x(t,...e){if(Qn.logLevel<=W.DEBUG){const n=e.map(_h);Qn.debug(`Firestore (${Lr}): ${t}`,...n)}}function cn(t,...e){if(Qn.logLevel<=W.ERROR){const n=e.map(_h);Qn.error(`Firestore (${Lr}): ${t}`,...n)}}function ev(t,...e){if(Qn.logLevel<=W.WARN){const n=e.map(_h);Qn.warn(`Firestore (${Lr}): ${t}`,...n)}}function _h(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function Q(t,e){t||F()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class TI{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new wI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new Be(e)}}class _I{constructor(e,n,r){this.type="FirstParty",this.user=Be.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class SI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new _I(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class II{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.p=n.token,new II(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function $r(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ue(0,0))}static max(){return new B(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ls.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ls?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends ls{construct(e,n,r){return new X(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new X(n)}static emptyPath(){return new X([])}}const NI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends ls{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return NI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(X.fromString(e))}static fromName(e){return new D(X.fromString(e).popFirst(5))}static empty(){return new D(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new X(e.slice()))}}function AI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ue(n+1,0):new ue(n,r));return new fn(i,D.empty(),e)}function xI(t){return new fn(t.readTime,t.key,-1)}class fn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fn(B.min(),D.empty(),-1)}static max(){return new fn(B.max(),D.empty(),-1)}}function RI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==DI)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sh.ot=-1;class le{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Te.RED,this.left=i!=null?i:Te.EMPTY,this.right=s!=null?s:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Te(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ce(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new yt([])}unionWith(e){let n=new ce(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _e(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new _e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const OI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(t){if(Q(!!t),typeof t=="string"){let e=0;const n=OI.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?_e.fromBase64String(t):_e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ov(t){const e=t.mapValue.fields.__previous_value__;return sv(e)?ov(e):e}function fs(t){const e=dn(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return t==null}function Ra(t){return t===0&&1/t==-1/0}function LI(t){return typeof t=="number"&&Number.isInteger(t)&&!Ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sv(t)?4:$I(t)?9007199254740991:10:F()}function vt(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=dn(r.timestampValue),o=dn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Fr(r.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ie(r.geoPointValue.latitude)===ie(i.geoPointValue.latitude)&&ie(r.geoPointValue.longitude)===ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ie(r.integerValue)===ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ie(r.doubleValue),o=ie(i.doubleValue);return s===o?Ra(s)===Ra(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return $r(t.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(nv(s)!==nv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!vt(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function ds(t,e){return(t.values||[]).find(n=>vt(n,e))!==void 0}function Vr(t,e){if(t===e)return 0;const n=Xn(t),r=Xn(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ie(i.integerValue||i.doubleValue),a=ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return av(t.timestampValue,e.timestampValue);case 4:return av(fs(t),fs(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Fr(i),a=Fr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=q(o[u],a[u]);if(l!==0)return l}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(ie(i.latitude),ie(s.latitude));return o!==0?o:q(ie(i.longitude),ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Vr(o[u],a[u]);if(l)return l}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Da.mapValue&&s===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(s===Da.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=q(a[c],l[c]);if(h!==0)return h;const m=Vr(o[a[c]],u[l[c]]);if(m!==0)return m}return q(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=dn(t),r=dn(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function jr(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=dn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ih(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ih(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function uv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kh(t){return!!t&&"integerValue"in t}function Ch(t){return!!t&&"arrayValue"in t}function lv(t){return!!t&&"nullValue"in t}function cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ps(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $I(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(n)}setAll(e){let n=xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ps(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){br(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(ps(this.value))}}function hv(t){const e=[];return br(t.fields,(n,r)=>{const i=new xe([n]);if(Pa(r)){const s=hv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Se(e,0,B.min(),B.min(),tt.empty(),0)}static newFoundDocument(e,n,r){return new Se(e,1,n,B.min(),r,0)}static newNoDocument(e,n){return new Se(e,2,n,B.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,B.min(),tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function fv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bI(t,e,n,r,i,s,o)}function Nh(t){const e=U(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+jr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jr(r)).join(",")),e.ut=n}return e.ut}function FI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${jr(r.value)}`;var r}).join(", ")}]`),xa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>jr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>jr(n)).join(",")),`Target(${e})`}function Ah(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!WI(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mv(t.startAt,e.startAt)&&mv(t.endAt,e.endAt)}function xh(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class be extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new UI(e,n,r):n==="array-contains"?new BI(e,r):n==="in"?new zI(e,r):n==="not-in"?new HI(e,r):n==="array-contains-any"?new KI(e,r):new be(e,n,r)}static ct(e,n,r){return n==="in"?new VI(e,r):new jI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Vr(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.at(Vr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class UI extends be{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.at(n)}}class VI extends be{constructor(e,n){super(e,"in",n),this.keys=dv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jI extends be{constructor(e,n){super(e,"not-in",n),this.keys=dv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class BI extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ch(n)&&ds(n.arrayValue,this.value)}}class zI extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ds(this.value.arrayValue,n)}}class HI extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ds(this.value.arrayValue,n)}}class KI extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ds(this.value.arrayValue,r))}}class Oa{constructor(e,n){this.position=e,this.inclusive=n}}class ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function WI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Vr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function qI(t,e,n,r,i,s,o,a){return new gs(t,e,n,r,i,s,o,a)}function gv(t){return new gs(t)}function GI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vv(t){for(const e of t.filters)if(e.ht())return e.field;return null}function wv(t){return t.collectionGroup!==null}function ys(t){const e=U(t);if(e.lt===null){e.lt=[];const n=vv(e),r=yv(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new ms(n)),e.lt.push(new ms(xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ms(xe.keyField(),s))}}}return e.lt}function Yn(t){const e=U(t);if(!e.ft)if(e.limitType==="F")e.ft=fv(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ys(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ms(s.field,o))}const r=e.endAt?new Oa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oa(e.startAt.position,e.startAt.inclusive):null;e.ft=fv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function QI(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ma(t,e){return Ah(Yn(t),Yn(e))&&t.limitType===e.limitType}function Ev(t){return`${Nh(Yn(t))}|lt:${t.limitType}`}function Rh(t){return`Query(target=${FI(Yn(t))}; limitType=${t.limitType})`}function Dh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=pv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ys(n),r)||n.endAt&&!function(i,s,o){const a=pv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ys(n),r))}(t,e)}function XI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tv(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const s=YI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YI(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Vr(a,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ra(e)?"-0":e}}function Sv(t){return{integerValue:""+t}}function JI(t,e){return LI(e)?Sv(e):_v(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this._=void 0}}function ZI(t,e,n){return t instanceof $a?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof vs?kv(t,e):t instanceof ws?Cv(t,e):function(r,i){const s=Iv(r,i),o=Nv(s)+Nv(r._t);return kh(s)&&kh(r._t)?Sv(o):_v(r.wt,o)}(t,e)}function ek(t,e,n){return t instanceof vs?kv(t,e):t instanceof ws?Cv(t,e):n}function Iv(t,e){return t instanceof ba?kh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class $a extends La{}class vs extends La{constructor(e){super(),this.elements=e}}function kv(t,e){const n=Av(e);for(const r of t.elements)n.some(i=>vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ws extends La{constructor(e){super(),this.elements=e}}function Cv(t,e){let n=Av(e);for(const r of t.elements)n=n.filter(i=>!vt(i,r));return{arrayValue:{values:n}}}class ba extends La{constructor(e,n){super(),this.wt=e,this._t=n}}function Nv(t){return ie(t.integerValue||t.doubleValue)}function Av(t){return Ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vs&&r instanceof vs||n instanceof ws&&r instanceof ws?$r(n.elements,r.elements,vt):n instanceof ba&&r instanceof ba?vt(n._t,r._t):n instanceof $a&&r instanceof $a}(t.transform,e.transform)}class nk{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ua{}function xv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ph(t.key,wt.none()):new Ts(t.key,t.data,wt.none());{const n=t.data,r=tt.empty();let i=new ce(xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jn(t.key,r,new yt(i.toArray()),wt.none())}}function rk(t,e,n){t instanceof Ts?function(r,i,s){const o=r.value.clone(),a=Pv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Jn?function(r,i,s){if(!Fa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Pv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Dv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,r){return t instanceof Ts?function(i,s,o,a){if(!Fa(i.precondition,s))return o;const u=i.value.clone(),l=Ov(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jn?function(i,s,o,a){if(!Fa(i.precondition,s))return o;const u=Ov(i.fieldTransforms,a,s),l=s.data;return l.setAll(Dv(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Fa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ik(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Iv(r.transform,i||null);s!=null&&(n===null&&(n=tt.empty()),n.set(r.field,s))}return n||null}function Rv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$r(n,r,(i,s)=>tk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ts extends Ua{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jn extends Ua{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pv(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ek(o,a,n[i]))}return r}function Ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZI(s,o,e))}return r}class Ph extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sk extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,K;function ak(t){switch(t){default:return F();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Mv(t){if(t===void 0)return cn("GRPC error has no .code"),v.UNKNOWN;switch(t){case se.OK:return v.OK;case se.CANCELLED:return v.CANCELLED;case se.UNKNOWN:return v.UNKNOWN;case se.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case se.INTERNAL:return v.INTERNAL;case se.UNAVAILABLE:return v.UNAVAILABLE;case se.UNAUTHENTICATED:return v.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case se.NOT_FOUND:return v.NOT_FOUND;case se.ALREADY_EXISTS:return v.ALREADY_EXISTS;case se.PERMISSION_DENIED:return v.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case se.ABORTED:return v.ABORTED;case se.OUT_OF_RANGE:return v.OUT_OF_RANGE;case se.UNIMPLEMENTED:return v.UNIMPLEMENTED;case se.DATA_LOSS:return v.DATA_LOSS;default:return F()}}(K=se||(se={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new le(D.comparator);function Mt(){return uk}const Lv=new le(D.comparator);function _s(...t){let e=Lv;for(const n of t)e=e.insert(n.key,n);return e}function $v(t){let e=Lv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zn(){return Ss()}function bv(){return Ss()}function Ss(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const lk=new le(D.comparator),ck=new ce(D.comparator);function z(...t){let e=ck;for(const n of t)e=e.add(n);return e}const hk=new ce(q);function Fv(){return hk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,n)),new Va(B.min(),r,Fv(),Mt(),z())}}class Is{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Is(_e.EMPTY_BYTE_STRING,n,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class Uv{constructor(e,n){this.targetId=e,this.It=n}}class Vv{constructor(e,n,r=_e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jv{constructor(){this.Tt=0,this.Et=zv(),this.At=_e.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=z(),n=z(),r=z();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Is(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=zv()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class fk{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Mt(),this.Bt=Bv(),this.Lt=new ce(q)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(xh(s))if(r===0){const o=new D(s.path);this.Kt(n,o,Se.newNoDocument(o,B.min()))}else Q(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&xh(a.target)){const u=new D(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,Se.newNoDocument(u,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=z();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ht(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Va(e,n,this.Lt,this.$t,r);return this.$t=Mt(),this.Bt=Bv(),this.Lt=new ce(q),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new jv,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ce(q),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new jv),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Bv(){return new le(D.comparator)}function zv(){return new le(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mk{constructor(e,n){this.databaseId=e,this.dt=n}}function Ba(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hv(t,e){return t.dt?e.toBase64():e.toUint8Array()}function gk(t,e){return Ba(t,e.toTimestamp())}function Lt(t){return Q(!!t),B.fromTimestamp(function(e){const n=dn(e);return new ue(n.seconds,n.nanos)}(t))}function Oh(t,e){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Kv(t){const e=X.fromString(t);return Q(Qv(e)),e}function Mh(t,e){return Oh(t.databaseId,e.path)}function Lh(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(Wv(n))}function $h(t,e){return Oh(t.databaseId,e)}function yk(t){const e=Kv(t);return e.length===4?X.emptyPath():Wv(e)}function bh(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wv(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qv(t,e,n){return{name:Mh(t,e),fields:n.value.mapValue.fields}}function vk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.dt?(Q(l===void 0||typeof l=="string"),_e.fromBase64String(l||"")):(Q(l===void 0||l instanceof Uint8Array),_e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?v.UNKNOWN:Mv(u.code);return new N(l,u.message||"")}(o);n=new Vv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lh(t,r.document.name),s=Lt(r.document.updateTime),o=new tt({mapValue:{fields:r.document.fields}}),a=Se.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ja(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lh(t,r.document),s=r.readTime?Lt(r.readTime):B.min(),o=Se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lh(t,r.document),s=r.removedTargetIds||[];n=new ja([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new ok(i),o=r.targetId;n=new Uv(o,s)}}return n}function wk(t,e){let n;if(e instanceof Ts)n={update:qv(t,e.key,e.value)};else if(e instanceof Ph)n={delete:Mh(t,e.key)};else if(e instanceof Jn)n={update:qv(t,e.key,e.data),updateMask:xk(e.fieldMask)};else{if(!(e instanceof sk))return F();n={verify:Mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof $a)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ws)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ba)return{fieldPath:s.field.canonicalString(),increment:o._t};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function Ek(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Lt(r.updateTime):Lt(i);return s.isEqual(B.min())&&(s=Lt(i)),new nk(s,r.transformResults||[])}(n,e))):[]}function Tk(t,e){return{documents:[$h(t,e.path)]}}function _k(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$h(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$h(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(cv(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NAN"}};if(lv(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(cv(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NAN"}};if(lv(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(h.field),op:Ck(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:zr(c.field),direction:kk(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.dt||xa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Sk(t){let e=yk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Gv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ms(Hr(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,xa(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,m=c.values||[];return new Oa(m,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,m=c.values||[];return new Oa(m,h)}(n.endAt)),qI(e,i,o,s,a,"F",u,l)}function Ik(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gv(t){return t?t.unaryFilter!==void 0?[Ak(t)]:t.fieldFilter!==void 0?[Nk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Gv(e)).reduce((e,n)=>e.concat(n)):F():[]}function kk(t){return dk[t]}function Ck(t){return pk[t]}function zr(t){return{fieldPath:t.canonicalString()}}function Hr(t){return xe.fromServerFormat(t.fieldPath)}function Nk(t){return be.create(Hr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ak(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hr(t.unaryFilter.field);return be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hr(t.unaryFilter.field);return be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hr(t.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hr(t.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=xv(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(n,r)=>Rv(n,r))&&$r(this.baseMutations,e.baseMutations,(n,r)=>Rv(n,r))}}class Fh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=lk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,i,s=B.min(),o=B.min(),a=_e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.ne=e}}function Ok(t){const e=Sk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?QI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.ze=new Lk}addToCollectionParentIndex(e,n){return this.ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(fn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Lk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ce(X.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Kr(0)}static Rn(){return new Kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Es(r.mutation,i,yt.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){const i=Zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_s();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=Ss(),a=Ss();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Jn)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Es(c.mutation,l,c.mutation.getFieldMask(),ue.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new bk(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ss();let i=new le((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||yt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=bv();c.forEach(m=>{if(!s.has(m)){const g=xv(n.get(m),r.get(m));g!==null&&h.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(Zn());let a=-1,u=s;return o.next(l=>E.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.getBaseDocument(e,c,h).next(m=>{u=u.insert(c,m)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:$v(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=_s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=_s();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(l,c){return new gs(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Se.newInvalidDocument(l)))});let o=_s();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&Es(l.mutation,u,yt.empty(),ue.now()),Dh(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve(Se.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return E.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Lt(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:Ok(r.bundledQuery),readTime:Lt(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.overlays=new le(D.comparator),this.Xn=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zn();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=Zn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new le((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Zn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Zn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return E.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dk(n,r));let s=this.Xn.get(n);s===void 0&&(s=z(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.Zn=new ce(me.ts),this.es=new ce(me.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new me(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new me(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new D(new X([])),r=new me(n,e),i=new me(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new D(new X([])),r=new me(n,e),i=new me(n,e+1);let s=z();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new me(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return D.comparator(e.key,n.key)||q(e.ls,n.ls)}static ns(e,n){return q(e.ls,n.ls)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ce(me.ts)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new me(n,0),i=new me(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ce(q);return n.forEach(i=>{const s=new me(i,0),o=new me(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new me(new D(s),0);let a=new ce(q);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new me(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.ps=e,this.docs=new le(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Se.newInvalidDocument(i))}),E.resolve(r)}getAllFromCollection(e,n,r){let i=Mt();const s=new D(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||RI(xI(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}Is(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zk(this)}getSize(e){return E.resolve(this.size)}}class zk extends $k{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.persistence=e,this.Ts=new Br(n=>Nh(n),Ah),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Es=0,this.As=new Uh,this.targetCount=0,this.Rs=Kr.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),E.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.vn(n),E.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Sh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Hk(this),this.indexManager=new Mk,this.remoteDocumentCache=function(r){return new Bk(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new Pk(n),this.Ds=new Uk(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new jk(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new Wk(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Wk extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class Vh{constructor(e){this.persistence=e,this.ks=new Uh,this.Os=null}static Ms(e){return new Vh(e)}get Fs(){if(this.Os)return this.Os;throw F()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),E.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Fs,r=>{const i=D.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return E.or([()=>E.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return E.resolve(null)}xi(e,n,r,i){return GI(n)||i.isEqual(B.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(Zy()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rh(n)),this.Mi(e,o,n,AI(i,-1)))})}ki(e,n){let r=new ce(Tv(e));return n.forEach((i,s)=>{Dh(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Zy()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Rh(n)),this.Di.getDocumentsMatchingQuery(e,n,fn.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new le(q),this.Bi=new Br(s=>Nh(s),Ah),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fk(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function Qk(t,e,n,r){return new Gk(t,e,n,r)}async function Xv(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function Xk(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let m=E.resolve();return h.forEach(g=>{m=m.next(()=>l.getEntry(a,g)).next(_=>{const R=u.docVersions.get(g);Q(R!==null),_.version.compareTo(R)<0&&(c.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),l.addEntry(_)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Yv(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Yk(t,e){const n=U(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const m=i.get(h);if(!m)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(_e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(_,R,d){return _.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0}(m,g,c)&&a.push(n.Vs.updateTargetData(s,g))});let u=Mt(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Jk(s,o,e.documentUpdates).next(c=>{u=c.Gi,l=c.Qi})),!r.isEqual(B.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.$i=i,s))}function Jk(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function Zk(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eC(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new er(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Bh(t,e,n){const r=U(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hs(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Jv(t,e,n){const r=U(t);let i=B.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=U(a),h=c.Bi.get(l);return h!==void 0?E.resolve(c.$i.get(h)):c.Vs.getTargetData(u,l)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:z())).next(a=>(tC(r,XI(e),a),{documents:a,ji:s})))}function tC(t,e,n){let r=B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Zv{constructor(){this.activeTargetIds=Fv()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nC{constructor(){this.Fr=new Zv,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Zv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(u=>(x("RestConnection","Received: ",u),u),u=>{throw ev("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=iC[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new vI;a.listenOnce(mI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Th.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Th.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new N(v.DEADLINE_EXCEEDED,"Request time out"));break;case Th.HTTP_ERROR:const c=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(_)>=0?_:v.UNKNOWN}(h.status);o(new N(m,h.message))}else o(new N(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(v.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=dI(),o=pI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yI({})),this.uo(a.initMessageHeaders,n,r),Am()||Rm()||i1()||Dm()||s1()||xm()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");x("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const m=new sC({jr:_=>{h?x("Connection","Not sending because WebChannel is closed:",_):(c||(x("Connection","Opening WebChannel transport."),l.open(),c=!0),x("Connection","WebChannel sending:",_),l.send(_))},Wr:()=>l.close()}),g=(_,R,d)=>{_.listen(R,f=>{try{d(f)}catch(p){setTimeout(()=>{throw p},0)}})};return g(l,Na.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(l,Na.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),m.eo())}),g(l,Na.EventType.ERROR,_=>{h||(h=!0,ev("Connection","WebChannel transport errored:",_),m.eo(new N(v.UNAVAILABLE,"The operation could not be completed")))}),g(l,Na.EventType.MESSAGE,_=>{var R;if(!h){const d=_.data[0];Q(!!d);const f=d,p=f.error||((R=f[0])===null||R===void 0?void 0:R.error);if(p){x("Connection","WebChannel received error:",p);const y=p.status;let T=function(C){const $=se[C];if($!==void 0)return Mv($)}(y),I=p.message;T===void 0&&(T=v.INTERNAL,I="Unknown error status: "+y+" with message "+p.message),h=!0,m.eo(new N(T,I)),l.close()}else x("Connection","WebChannel received:",d),m.no(d)}}),g(o,gI.STAT_EVENT,_=>{_.stat===Yy.PROXY?x("Connection","Detected buffering proxy"):_.stat===Yy.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function zh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new mk(t,!0)}class tw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,r,i,s,o,a,u){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new tw(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new N(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aC extends nw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=vk(this.wt,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?Lt(s.readTime):B.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=bh(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=xh(a)?{documents:Tk(i,a)}:{query:_k(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Hv(i,s.resumeToken):s.snapshotVersion.compareTo(B.min())>0&&(o.readTime=Ba(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=Ik(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=bh(this.wt),n.removeTarget=e,this.Mo(n)}}class uC extends nw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Ek(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.Jo(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=bh(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wk(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(v.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(v.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class cC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(cn(n),this.su=!1):x("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{tr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=U(a);u.lu.add(4),await ks(u),u._u.set("Unknown"),u.lu.delete(4),await Ha(u)}(this))})}),this._u=new cC(r,i)}}async function Ha(t){if(tr(t))for(const e of t.fu)await e(!0)}async function ks(t){for(const e of t.fu)await e(!1)}function rw(t,e){const n=U(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Wh(n)?Kh(n):Wr(n).Co()&&Hh(n,e))}function iw(t,e){const n=U(t),r=Wr(n);n.hu.delete(e),r.Co()&&sw(n,e),n.hu.size===0&&(r.Co()?r.ko():tr(n)&&n._u.set("Unknown"))}function Hh(t,e){t.wu.Nt(e.targetId),Wr(t).Qo(e)}function sw(t,e){t.wu.Nt(e),Wr(t).jo(e)}function Kh(t){t.wu=new fk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Wr(t).start(),t._u.iu()}function Wh(t){return tr(t)&&!Wr(t).Do()&&t.hu.size>0}function tr(t){return U(t).lu.size===0}function ow(t){t.wu=void 0}async function fC(t){t.hu.forEach((e,n)=>{Hh(t,e)})}async function dC(t,e){ow(t),Wh(t)?(t._u.uu(e),Kh(t)):t._u.set("Unknown")}async function pC(t,e,n){if(t._u.set("Online"),e instanceof Vv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof ja?t.wu.Ut(e):e instanceof Uv?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(B.min()))try{const r=await Yv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(u);l&&i.hu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(_e.EMPTY_BYTE_STRING,u.snapshotVersion)),sw(i,a);const l=new er(u.target,a,1,u.sequenceNumber);Hh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!hs(e))throw e;t.lu.add(1),await ks(t),t._u.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ha(t)})}function aw(t,e){return e().catch(n=>Ka(t,n,e))}async function Wa(t){const e=U(t),n=pn(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;mC(e);)try{const i=await Zk(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,gC(e,i)}catch(i){await Ka(e,i)}uw(e)&&lw(e)}function mC(t){return tr(t)&&t.au.length<10}function gC(t,e){t.au.push(e);const n=pn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function uw(t){return tr(t)&&!pn(t).Do()&&t.au.length>0}function lw(t){pn(t).start()}async function yC(t){pn(t).Xo()}async function vC(t){const e=pn(t);for(const n of t.au)e.Ho(n.mutations)}async function wC(t,e,n){const r=t.au.shift(),i=Fh.from(r,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wa(t)}async function EC(t,e){e&&pn(t).zo&&await async function(n,r){if(i=r.code,ak(i)&&i!==v.ABORTED){const s=n.au.shift();pn(n).No(),await aw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Wa(n)}var i}(t,e),uw(t)&&lw(t)}async function cw(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=tr(n);n.lu.add(3),await ks(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ha(n)}async function TC(t,e){const n=U(t);e?(n.lu.delete(2),await Ha(n)):e||(n.lu.add(2),await ks(n),n._u.set("Unknown"))}function Wr(t){return t.mu||(t.mu=function(e,n,r){const i=U(e);return i.tu(),new aC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:fC.bind(null,t),Jr:dC.bind(null,t),Go:pC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Wh(t)?Kh(t):t._u.set("Unknown")):(await t.mu.stop(),ow(t))})),t.mu}function pn(t){return t.gu||(t.gu=function(e,n,r){const i=U(e);return i.tu(),new uC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:yC.bind(null,t),Jr:EC.bind(null,t),Yo:vC.bind(null,t),Jo:wC.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Wa(t)):(await t.gu.stop(),t.au.length>0&&(x("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gh(t,e){if(cn("AsyncQueue",`${e}: ${t}`),hs(t))return new N(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.yu=new le(D.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):F():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gr{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Gr(e,n,qr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.Iu=void 0,this.listeners=[]}}class SC{constructor(){this.queries=new Br(e=>Ev(e),Ma),this.onlineState="Unknown",this.Tu=new Set}}async function IC(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _C),i)try{s.Iu=await n.onListen(r)}catch(o){const a=Gh(o,`Initialization of query '${Rh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Qh(n)}async function kC(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function CC(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Qh(n)}function NC(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qh(t){t.Tu.forEach(e=>{e.next()})}class AC{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.key=e}}class dw{constructor(e){this.key=e}}class xC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=z(),this.mutatedKeys=z(),this.Lu=Tv(e),this.Uu=new qr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new hw,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const m=i.get(c),g=Dh(this.query,h)?h:null,_=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let d=!1;m&&g?m.data.isEqual(g.data)?_!==R&&(r.track({type:3,doc:g}),d=!0):this.Qu(m,g)||(r.track({type:2,doc:g}),d=!0,(u&&this.Lu(g,u)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),d=!0):m&&!g&&(r.track({type:1,doc:m}),d=!0,(u||l)&&(a=!0)),d&&(g?(o=o.add(g),s=R?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,c)=>function(h,m){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(h)-g(m)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,s.length!==0||u?{snapshot:new Gr(this.query,e.Uu,i,s,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new hw,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new dw(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new fw(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Gr.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class RC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DC{constructor(e){this.key=e,this.Xu=!1}}class PC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Br(a=>Ev(a),Ma),this.ec=new Map,this.nc=new Set,this.sc=new le(D.comparator),this.ic=new Map,this.rc=new Uh,this.oc={},this.uc=new Map,this.cc=Kr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function OC(t,e){const n=zC(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await eC(n.localStore,Yn(e));n.isPrimaryClient&&rw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await MC(n,e,r,a==="current")}return i}async function MC(t,e,n,r){t.hc=(c,h,m)=>async function(g,_,R,d){let f=_.view.Ku(R);f.Oi&&(f=await Jv(g.localStore,_.query,!1).then(({documents:T})=>_.view.Ku(T,f)));const p=d&&d.targetChanges.get(_.targetId),y=_.view.applyChanges(f,g.isPrimaryClient,p);return ww(g,_.targetId,y.zu),y.snapshot}(t,c,h,m);const i=await Jv(t.localStore,e,!0),s=new xC(e,i.ji),o=s.Ku(i.documents),a=Is.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);ww(t,n,u.zu);const l=new RC(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),u.snapshot}async function LC(t,e){const n=U(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Ma(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),iw(n.remoteStore,r.targetId),Xh(n,r.targetId)}).catch(cs)):(Xh(n,r.targetId),await Bh(n.localStore,r.targetId,!0))}async function $C(t,e,n){const r=HC(t);try{const i=await function(s,o){const a=U(s),u=ue.now(),l=o.reduce((m,g)=>m.add(g.key),z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Mt(),_=z();return a.Ui.getEntries(m,l).next(R=>{g=R,g.forEach((d,f)=>{f.isValidDocument()||(_=_.add(d))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,g)).next(R=>{c=R;const d=[];for(const f of o){const p=ik(f,c.get(f.key).overlayedDocument);p!=null&&d.push(new Jn(f.key,p,hv(p.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,d,o)}).next(R=>{h=R;const d=R.applyToLocalDocumentSet(c,_);return a.documentOverlayCache.saveOverlays(m,R.batchId,d)})}).then(()=>({batchId:h.batchId,changes:$v(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.oc[s.currentUser.toKey()];u||(u=new le(q)),u=u.insert(o,a),s.oc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Cs(r,i.changes),await Wa(r.remoteStore)}catch(i){const s=Gh(i,"Failed to persist write");n.reject(s)}}async function pw(t,e){const n=U(t);try{const r=await Yk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Q(o.Xu):i.removedDocuments.size>0&&(Q(o.Xu),o.Xu=!1))}),await Cs(n,r,e)}catch(r){await cs(r)}}function mw(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Eu(o)&&(u=!0)}),u&&Qh(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bC(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new le(D.comparator);o=o.insert(s,Se.newNoDocument(s,B.min()));const a=z().add(s),u=new Va(B.min(),new Map,new ce(q),o,a);await pw(r,u),r.sc=r.sc.remove(s),r.ic.delete(e),Yh(r)}else await Bh(r.localStore,e,!1).then(()=>Xh(r,e,n)).catch(cs)}async function FC(t,e){const n=U(t),r=e.batch.batchId;try{const i=await Xk(n.localStore,e);yw(n,r,null),gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cs(n,i)}catch(i){await cs(i)}}async function UC(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(Q(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);yw(r,e,n),gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cs(r,i)}catch(i){await cs(i)}}function gw(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function yw(t,e,n){const r=U(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||vw(t,r)})}function vw(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(iw(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Yh(t))}function ww(t,e,n){for(const r of n)r instanceof fw?(t.rc.addReference(r.key,e),VC(t,r)):r instanceof dw?(x("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||vw(t,r.key)):F()}function VC(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.nc.add(r),Yh(t))}function Yh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new D(X.fromString(e)),r=t.cc.next();t.ic.set(r,new DC(n)),t.sc=t.sc.insert(n,r),rw(t.remoteStore,new er(Yn(gv(n.path)),r,2,Sh.ot))}}async function Cs(t,e,n){const r=U(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,u)=>{o.push(r.hc(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=jh.Vi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,u){const l=U(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(u,h=>E.forEach(h.Pi,m=>l.persistence.referenceDelegate.addReference(c,h.targetId,m)).next(()=>E.forEach(h.vi,m=>l.persistence.referenceDelegate.removeReference(c,h.targetId,m)))))}catch(c){if(!hs(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const m=l.$i.get(h),g=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,_)}}}(r.localStore,s))}async function jC(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Xv(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new N(v.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cs(n,r.Ki)}}function BC(t,e){const n=U(t),r=n.ic.get(e);if(r&&r.Xu)return z().add(r.key);{let i=z();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function zC(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bC.bind(null,e),e.Zu.Go=CC.bind(null,e.eventManager),e.Zu.lc=NC.bind(null,e.eventManager),e}function HC(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UC.bind(null,e),e}class KC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=za(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return Qk(this.persistence,new qk,e.initialUser,this.wt)}_c(e){return new Kk(Vh.Ms,this.wt)}dc(e){return new nC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SC}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new oC(i));var i;return function(s,o,a,u){return new lC(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>mw(this.syncEngine,a,0),o=ew.V()?new ew:new rC,new hC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new PC(r,i,s,o,a,u);return l&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ks(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=tv.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function QC(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function XC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YC(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cw(e.remoteStore,s)),t.onlineComponents=e}async function YC(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await QC(t,new KC)),t.offlineComponents}async function Ew(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await XC(t,new WC)),t.onlineComponents}function JC(t){return Ew(t).then(e=>e.syncEngine)}async function ZC(t){const e=await Ew(t),n=e.eventManager;return n.onListen=OC.bind(null,e.syncEngine),n.onUnlisten=LC.bind(null,e.syncEngine),n}function eN(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new qC({next:h=>{s.enqueueAndForget(()=>kC(i,c)),h.fromCache&&a.source==="server"?u.reject(new N(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new AC(o,l,{includeMetadataChanges:!0,Du:!0});return IC(i,c)}(await ZC(t),t.asyncQueue,e,n,r)),r.promise}const Tw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e,n){if(!n)throw new N(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tN(t,e,n,r){if(e===!0&&r===!0)throw new N(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sw(t){if(!D.isDocumentKey(t))throw new N(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iw(t){if(D.isDocumentKey(t))throw new N(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Ga(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qa(t);throw new N(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kw({}),this._settingsFrozen=!1,e instanceof Ur?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new N(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(i.options.projectId)}(e))}get app(){if(!this._app)throw new N(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new EI;switch(n.type){case"gapi":const r=n.client;return Q(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new SI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new N(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tw.get(e);n&&(x("ComponentProvider","Removing Datastore"),Tw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class mn extends Ns{constructor(e,n,r){super(e,n,gv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new D(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function DN(t,e,...n){if(t=et(t),_w("collection","path",e),t instanceof Jh){const r=X.fromString(e,...n);return Iw(r),new mn(t,null,r)}{if(!(t instanceof nt||t instanceof mn))throw new N(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return Iw(r),new mn(t.firestore,null,r)}}function nN(t,e,...n){if(t=et(t),arguments.length===1&&(e=tv.I()),_w("doc","path",e),t instanceof Jh){const r=X.fromString(e,...n);return Sw(r),new nt(t,null,new D(r))}{if(!(t instanceof nt||t instanceof mn))throw new N(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return Sw(r),new nt(t.firestore,t instanceof mn?t.converter:null,new D(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new tw(this,"async_queue_retry"),this.Kc=()=>{const n=zh();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new hn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!hs(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=qh.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&F()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Qa extends Jh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new rN,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Nw(this),this._firestoreClient.terminate()}}function PN(t=Vm()){return gc(t,"firestore").getImmediate()}function Cw(t){return t._firestoreClient||Nw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Nw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new MI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qr(_e.fromBase64String(e))}catch(n){throw new N(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qr(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=/^__.*__$/;class sN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ts(e,this.data,n,this.fieldTransforms)}}function xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class tf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Xa(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(xw(this.Zc)&&iN.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class oN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||za(e)}aa(e,n,r,i=!1){return new tf({Zc:e,methodName:n,ca:r,path:xe.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Rw(t){const e=t._freezeSettings(),n=za(t._databaseId);return new oN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aN(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Ow("Data must be an object, but it was:",o,r);const a=Dw(r,o);let u,l;if(s.merge)u=new yt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const m=lN(e,h,n);if(!o.contains(m))throw new N(v.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hN(c,m)||c.push(m)}u=new yt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new sN(new tt(a),u,l)}function uN(t,e,n,r=!1){return nf(n,t.aa(r?4:3,e))}function nf(t,e){if(Pw(t=et(t)))return Ow("Unsupported field value:",e,t),Dw(t,e);if(t instanceof Aw)return function(n,r){if(!xw(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=nf(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JI(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ue.fromDate(n);return{timestampValue:Ba(r.wt,i)}}if(n instanceof ue){const i=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ba(r.wt,i)}}if(n instanceof ef)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qr)return{bytesValue:Hv(r.wt,n._byteString)};if(n instanceof nt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${qa(n)}`)}(t,e)}function Dw(t,e){const n={};return rv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,i)=>{const s=nf(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Pw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof ef||t instanceof Qr||t instanceof nt||t instanceof Aw)}function Ow(t,e,n){if(!Pw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=qa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function lN(t,e,n){if((e=et(e))instanceof Zh)return e._internalPath;if(typeof e=="string")return Mw(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const cN=new RegExp("[~\\*/\\[\\]]");function Mw(t,e,n){if(e.search(cN)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zh(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new N(v.INVALID_ARGUMENT,a+t+u)}function hN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fN extends Lw{data(){return super.data()}}function rf(t,e){return typeof e=="string"?Mw(t,e):e instanceof Zh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dN extends Lw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends dN{data(e={}){return super.data(e)}}class pN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:mN(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yN{}function ON(t,...e){for(const n of e)t=n._apply(t);return t}class vN extends yN{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Rw(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new N(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){bw(c,l);const g=[];for(const _ of c)g.push($w(a,i,_));h={arrayValue:{values:g}}}else h=$w(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||bw(c,l),h=uN(o,s,c,l==="in"||l==="not-in");const m=be.create(u,l,h);return function(g,_){if(_.ht()){const d=vv(g);if(d!==null&&!d.isEqual(_.field))throw new N(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${d.toString()}' and '${_.field.toString()}'`);const f=yv(g);f!==null&&wN(g,_.field,f)}const R=function(d,f){for(const p of d.filters)if(f.indexOf(p.op)>=0)return p.op;return null}(g,function(d){switch(d){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(_.op));if(R!==null)throw R===_.op?new N(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${_.op.toString()}' filter.`):new N(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${_.op.toString()}' filters with '${R.toString()}' filters.`)}(i,m),m}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Ns(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new gs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function MN(t,e,n){const r=e,i=rf("where",t);return new vN(i,r,n)}function $w(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new N(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wv(e)&&n.indexOf("/")!==-1)throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(X.fromString(n));if(!D.isDocumentKey(r))throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uv(t,new D(r))}if(n instanceof nt)return uv(t,n._key);throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qa(n)}.`)}function bw(t,e){if(!Array.isArray(t)||t.length===0)throw new N(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wN(t,e,n){if(!n.isEqual(e))throw new N(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return br(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ef(ie(e.latitude),ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ov(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=dn(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=X.fromString(e);Q(Qv(r));const i=new Ur(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class _N extends EN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function LN(t){t=Ga(t,Ns);const e=Ga(t.firestore,Qa),n=Cw(e),r=new _N(e);return gN(t._query),eN(n,t._query).then(i=>new pN(e,r,t,i))}function $N(t){return Fw(Ga(t.firestore,Qa),[new Ph(t._key,wt.none())])}function bN(t,e){const n=Ga(t.firestore,Qa),r=nN(t),i=TN(t.converter,e);return Fw(n,[aN(Rw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function Fw(t,e){return function(n,r){const i=new hn;return n.asyncQueue.enqueueAndForget(async()=>$C(await JC(n),r,i)),i.promise}(Cw(t),e)}(function(t,e=!0){(function(n){Lr=n})(bi),kr(new Fn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Qa(i,new TI(n.getProvider("auth-internal")),new kI(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),tn(Jy,"3.4.11",t),tn(Jy,"3.4.11","esm2017")})();export{PN as B,nN as D,sn as G,$N as I,MN as K,IN as R,bN as T,ON as U,DN as V,AN as a,kN as b,xN as g,CN as i,wn as r,NN as s,RN as u,LN as w};
