"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[205],{2205:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(4165),i=n(5861),o=n(9439),a=n(2791),s=n(1243),c=n(2007),d=n.n(c),p=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}var f=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(h(t)),t.handleErrored=t.handleErrored.bind(h(t)),t.handleChange=t.handleChange.bind(h(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(h(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var i=r.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,p));return a.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},r}(a.Component);f.displayName="ReCAPTCHA",f.propTypes={sitekey:d().string.isRequired,onChange:d().func,grecaptcha:d().object,theme:d().oneOf(["dark","light"]),type:d().oneOf(["image","audio"]),tabindex:d().number,onExpired:d().func,onErrored:d().func,size:d().oneOf(["compact","normal","invisible"]),stoken:d().string,hl:d().string,badge:d().oneOf(["bottomright","bottomleft","inline"]),isolated:d().bool},f.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var v=n(2110),g=n.n(v);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var b={},y=0;var x="onloadcallback";function w(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}var _,R,C=(_=function(){var e=w(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+x+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+x+"&render=explicit"},R=(R={callbackName:x,globalName:"grecaptcha",attributes:w().nonce?{nonce:w().nonce}:{}})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+y++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof _?_():_,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=b[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[R.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=R,i=r.globalName,o=r.callbackName,a=r.scriptId;if(i&&"undefined"!==typeof window[i]&&(b[t]={loaded:!0,observers:{}}),b[t]){var s=b[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},b[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,R.attributes)d.setAttribute(p,R.attributes[p]);a&&(d.id=a);var u=function(e){if(b[t]){var n=b[t].observers;for(var r in n)e(n[r])&&delete n[r]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=b[t];e&&(e.loaded=!0,u((function(t){return!o&&(t(e),!0)})))},d.onerror=function(){var e=b[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(d)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===R.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=b[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===R.removeOnUnmount&&delete b[e])},o.render=function(){var t=R.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=r,(0,a.createElement)(e,i)},i}(a.Component),r=(0,a.forwardRef)((function(e,t){return(0,a.createElement)(n,m({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:d().func},g()(r,e)})(f),O=C,S=n(8438),E=n(3184),j=n(7945),L=n.n(j),k=(n(4655),n(7596)),N=(n(5462),n(184));L().init();var I=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],c=t[1],d=(0,a.useState)(""),p=(0,o.Z)(d,2),u=p[0],h=p[1],l=(0,a.useState)(""),f=(0,o.Z)(l,2),v=f[0],g=f[1],m=(0,a.useState)(""),b=(0,o.Z)(m,2),y=b[0],x=b[1],w=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var i,o,a,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i={name:n,surname:u,email:v,message:y},e.prev=2,"https://www.pmdev.ovh/api/contact",o={headers:{"Content-Type":"application/json"}},e.next=7,s.Z.post("https://www.pmdev.ovh/api/contact",JSON.stringify(i),o);case 7:a=e.sent,d=a.data,200===a.status&&(!1===d.validation?k.Am.warn(d.message):(k.Am.success(d.message),c(""),h(""),g(""),x(""))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),"Network Error"===e.t0.message&&k.Am.warn("Error server connection!");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,N.jsx)("section",{className:"contact",children:(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(E.Z,{title:"Contact"}),(0,N.jsx)(k.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,N.jsxs)("form",{onSubmit:w,className:"contact-form","data-aos":"fade-right",children:[(0,N.jsx)("label",{htmlFor:"name",children:"Name"}),(0,N.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",id:"name",value:n,required:!0}),(0,N.jsx)("label",{htmlFor:"surname",children:"Surname"}),(0,N.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",id:"surname",value:u,required:!0}),(0,N.jsx)("label",{htmlFor:"email",children:"Email"}),(0,N.jsx)("input",{onChange:function(e){return g(e.target.value)},type:"email",id:"email",value:v,required:!0}),(0,N.jsx)("label",{htmlFor:"message",children:"Message"}),(0,N.jsx)("textarea",{onChange:function(e){return x(e.target.value)},name:"message",id:"message",cols:"50",rows:"10",value:y,required:!0}),(0,N.jsx)("input",{className:"btn sendBtn",type:"submit",value:"Submit"}),(0,N.jsx)(O,{sitekey:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_RECAPTCHA_SITE_KEY,onChange:function(e){console.log("Captcha value:",e)},theme:"dark",badge:"bottomleft"})]})]})})}},8438:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(184),i=function(e){return(0,r.jsx)("div",{className:"container",children:e.children})}},3184:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(184),i=function(e){return(0,r.jsx)("div",{className:"title-section "+e.className,children:(0,r.jsx)("h2",{className:"title-theme",children:e.title})})}}}]);
//# sourceMappingURL=205.ff4ef7a0.chunk.js.map