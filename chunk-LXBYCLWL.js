import{K as s,N as l,P as u,Q as c,g}from"./chunk-ABSWHRBN.js";var F=null;function f(){return F}function Ne(t){F??=t}var D=class{};var y=new l(""),E=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=s({token:t,factory:()=>c(b),providedIn:"platform"})}return t})();var b=(()=>{class t extends E{_location;_history;_doc=c(y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return f().getBaseHref(this._doc)}onPopState(e){let n=f().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=f().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=s({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function w(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function p(t){let r=t.match(/#|\?|$/),e=r&&r.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function o(t){return t&&t[0]!=="?"?"?"+t:t}var h=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=s({token:t,factory:()=>c(I),providedIn:"root"})}return t})(),v=new l(""),I=(()=>{class t extends h{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return w(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+o(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,a){let d=this.prepareExternalUrl(i+o(a));this._platformLocation.pushState(e,n,d)}replaceState(e,n,i,a){let d=this.prepareExternalUrl(i+o(a));this._platformLocation.replaceState(e,n,d)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(u(E),u(v,8))};static \u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var L=(()=>{class t{_subject=new g;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=B(p(m(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+o(n))}normalize(e){return t.stripTrailingSlash(T(this._basePath,m(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=o;static joinWithSlash=w;static stripTrailingSlash=p;static \u0275fac=function(n){return new(n||t)(u(h))};static \u0275prov=s({token:t,factory:()=>M(),providedIn:"root"})}return t})();function M(){return new L(u(h))}function T(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function m(t){return t.replace(/\/index.html$/,"")}function B(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function ke(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,a]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(a)}return null}var $e="browser",R="server";function xe(t){return t===R}var C=class{};export{f as a,Ne as b,D as c,y as d,h as e,L as f,ke as g,$e as h,xe as i,C as j};
