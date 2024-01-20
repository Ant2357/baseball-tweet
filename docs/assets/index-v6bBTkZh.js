(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ha(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ot={},Ve=[],Dt=()=>{},zs=()=>!1,fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ga=t=>t.startsWith("onUpdate:"),kt=Object.assign,va=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ds=Object.prototype.hasOwnProperty,G=(t,e)=>Ds.call(t,e),F=Array.isArray,Ye=t=>An(t)==="[object Map]",cr=t=>An(t)==="[object Set]",qa=t=>An(t)==="[object Date]",H=t=>typeof t=="function",_t=t=>typeof t=="string",_e=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",no=t=>(at(t)||H(t))&&H(t.then)&&H(t.catch),ro=Object.prototype.toString,An=t=>ro.call(t),Us=t=>An(t).slice(8,-1),ao=t=>An(t)==="[object Object]",ba=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ur=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bs=/-(\w)/g,Qt=ur(t=>t.replace(Bs,(e,n)=>n?n.toUpperCase():"")),Hs=/\B([A-Z])/g,Qe=ur(t=>t.replace(Hs,"-$1").toLowerCase()),dr=ur(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=ur(t=>t?`on${dr(t)}`:""),je=(t,e)=>!Object.is(t,e),Kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Br=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xa;const io=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=_t(r)?Ws(r):ya(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(_t(t)||at(t))return t}const Vs=/;(?![^(]*\))/g,Ys=/:([^]+)/,Ks=/\/\*[^]*?\*\//g;function Ws(t){const e={};return t.replace(Ks,"").split(Vs).forEach(n=>{if(n){const r=n.split(Ys);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bt(t){let e="";if(_t(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=bt(t[n]);r&&(e+=r+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qs=ha(Gs);function oo(t){return!!t||t===""}function Xs(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=mr(t[r],e[r]);return n}function mr(t,e){if(t===e)return!0;let n=qa(t),r=qa(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_e(t),r=_e(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Xs(t,e):!1;if(n=at(t),r=at(e),n||r){if(!n||!r)return!1;const a=Object.keys(t).length,i=Object.keys(e).length;if(a!==i)return!1;for(const o in t){const s=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(s&&!l||!s&&l||!mr(t[o],e[o]))return!1}}return String(t)===String(e)}function so(t,e){return t.findIndex(n=>mr(n,e))}const pe=t=>_t(t)?t:t==null?"":F(t)||at(t)&&(t.toString===ro||!H(t.toString))?JSON.stringify(t,lo,2):String(t),lo=(t,e)=>e&&e.__v_isRef?lo(t,e.value):Ye(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[Cr(r,i)+" =>"]=a,n),{})}:cr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cr(n))}:_e(e)?Cr(e):at(e)&&!F(e)&&!ao(e)?String(e):e,Cr=(t,e="")=>{var n;return _e(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Zs{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Qs(t,e=Bt){e&&e.active&&e.effects.push(t)}function Js(){return Bt}let Me;class _a{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qs(this,a)}get dirty(){if(this._dirtyLevel===1){ze();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(tl(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),De()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=be,n=Me;try{return be=!0,Me=this,this._runnings++,Za(this),this.fn()}finally{Qa(this),this._runnings--,Me=n,be=e}}stop(){var e;this.active&&(Za(this),Qa(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function tl(t){return t.value}function Za(t){t._trackId++,t._depsLength=0}function Qa(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)fo(t.deps[e],t);t.deps.length=t._depsLength}}function fo(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let be=!0,Hr=0;const co=[];function ze(){co.push(be),be=!1}function De(){const t=co.pop();be=t===void 0?!0:t}function wa(){Hr++}function xa(){for(Hr--;!Hr&&Vr.length;)Vr.shift()()}function uo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&fo(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Vr=[];function mo(t,e,n){wa();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(r._shouldSchedule=!0,r.trigger())}po(t),xa()}function po(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Vr.push(e.scheduler))}const ho=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Yr=new WeakMap,Le=Symbol(""),Kr=Symbol("");function Mt(t,e,n){if(be&&Me){let r=Yr.get(t);r||Yr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=ho(()=>r.delete(n))),uo(Me,a)}}function re(t,e,n,r,a,i){const o=Yr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&F(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!_e(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":F(t)?ba(n)&&s.push(o.get("length")):(s.push(o.get(Le)),Ye(t)&&s.push(o.get(Kr)));break;case"delete":F(t)||(s.push(o.get(Le)),Ye(t)&&s.push(o.get(Kr)));break;case"set":Ye(t)&&s.push(o.get(Le));break}wa();for(const l of s)l&&mo(l,2);xa()}const el=ha("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_e)),Ja=nl();function nl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=tt(this);for(let i=0,o=this.length;i<o;i++)Mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(tt)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ze(),wa();const r=tt(this)[e].apply(this,n);return xa(),De(),r}}),t}function rl(t){const e=tt(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class vo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?gl:wo:i?_o:yo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!a){if(o&&G(Ja,n))return Reflect.get(Ja,n,r);if(n==="hasOwnProperty")return rl}const s=Reflect.get(e,n,r);return(_e(n)?go.has(n):el(n))||(a||Mt(e,"get",n),i)?s:$t(s)?o&&ba(n)?s:s.value:at(s)?a?xo(s):ke(s):s}}class bo extends vo{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=pn(i);if(!Wr(r)&&!pn(r)&&(i=tt(i),r=tt(r)),!F(e)&&$t(i)&&!$t(r))return l?!1:(i.value=r,!0)}const o=F(e)&&ba(n)?Number(n)<e.length:G(e,n),s=Reflect.set(e,n,r,a);return e===tt(a)&&(o?je(r,i)&&re(e,"set",n,r):re(e,"add",n,r)),s}deleteProperty(e,n){const r=G(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&re(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!_e(n)||!go.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",F(e)?"length":Le),Reflect.ownKeys(e)}}class al extends vo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const il=new bo,ol=new al,sl=new bo(!0),Aa=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Cn(t,e,n=!1,r=!1){t=t.__v_raw;const a=tt(t),i=tt(e);n||(je(e,i)&&Mt(a,"get",e),Mt(a,"get",i));const{has:o}=pr(a),s=r?Aa:n?Ea:Sa;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function Pn(t,e=!1){const n=this.__v_raw,r=tt(n),a=tt(t);return e||(je(t,a)&&Mt(r,"has",t),Mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function In(t,e=!1){return t=t.__v_raw,!e&&Mt(tt(t),"iterate",Le),Reflect.get(t,"size",t)}function ti(t){t=tt(t);const e=tt(this);return pr(e).has.call(e,t)||(e.add(t),re(e,"add",t,t)),this}function ei(t,e){e=tt(e);const n=tt(this),{has:r,get:a}=pr(n);let i=r.call(n,t);i||(t=tt(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?je(e,o)&&re(n,"set",t,e):re(n,"add",t,e),this}function ni(t){const e=tt(this),{has:n,get:r}=pr(e);let a=n.call(e,t);a||(t=tt(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&re(e,"delete",t,void 0),i}function ri(){const t=tt(this),e=t.size!==0,n=t.clear();return e&&re(t,"clear",void 0,void 0),n}function Nn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=tt(o),l=e?Aa:t?Ea:Sa;return!t&&Mt(s,"iterate",Le),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function Mn(t,e,n){return function(...r){const a=this.__v_raw,i=tt(a),o=Ye(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?Aa:e?Ea:Sa;return!e&&Mt(i,"iterate",l?Kr:Le),{next(){const{value:m,done:y}=c.next();return y?{value:m,done:y}:{value:s?[d(m[0]),d(m[1])]:d(m),done:y}},[Symbol.iterator](){return this}}}}function de(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ll(){const t={get(i){return Cn(this,i)},get size(){return In(this)},has:Pn,add:ti,set:ei,delete:ni,clear:ri,forEach:Nn(!1,!1)},e={get(i){return Cn(this,i,!1,!0)},get size(){return In(this)},has:Pn,add:ti,set:ei,delete:ni,clear:ri,forEach:Nn(!1,!0)},n={get(i){return Cn(this,i,!0)},get size(){return In(this,!0)},has(i){return Pn.call(this,i,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Nn(!0,!1)},r={get(i){return Cn(this,i,!0,!0)},get size(){return In(this,!0)},has(i){return Pn.call(this,i,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mn(i,!1,!1),n[i]=Mn(i,!0,!1),e[i]=Mn(i,!1,!0),r[i]=Mn(i,!0,!0)}),[t,n,e,r]}const[fl,cl,ul,dl]=ll();function ka(t,e){const n=e?t?dl:ul:t?cl:fl;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(G(n,a)&&a in r?n:r,a,i)}const ml={get:ka(!1,!1)},pl={get:ka(!1,!0)},hl={get:ka(!0,!1)},yo=new WeakMap,_o=new WeakMap,wo=new WeakMap,gl=new WeakMap;function vl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bl(t){return t.__v_skip||!Object.isExtensible(t)?0:vl(Us(t))}function ke(t){return pn(t)?t:Oa(t,!1,il,ml,yo)}function yl(t){return Oa(t,!1,sl,pl,_o)}function xo(t){return Oa(t,!0,ol,hl,wo)}function Oa(t,e,n,r,a){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=bl(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Ke(t){return pn(t)?Ke(t.__v_raw):!!(t&&t.__v_isReactive)}function pn(t){return!!(t&&t.__v_isReadonly)}function Wr(t){return!!(t&&t.__v_isShallow)}function Ao(t){return Ke(t)||pn(t)}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function ko(t){return Jn(t,"__v_skip",!0),t}const Sa=t=>at(t)?ke(t):t,Ea=t=>at(t)?xo(t):t;class Oo{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _a(()=>e(this._value),()=>Pr(this,1),()=>this.dep&&po(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&je(e._value,e._value=e.effect.run())&&Pr(e,2),wl(e),e.effect._dirtyLevel>=1&&Pr(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function _l(t,e,n=!1){let r,a;const i=H(t);return i?(r=t,a=Dt):(r=t.get,a=t.set),new Oo(r,a,i||!a,n)}function wl(t){be&&Me&&(t=tt(t),uo(Me,t.dep||(t.dep=ho(()=>t.dep=void 0,t instanceof Oo?t:void 0))))}function Pr(t,e=2,n){t=tt(t);const r=t.dep;r&&mo(r,e)}function $t(t){return!!(t&&t.__v_isRef===!0)}function Y(t){return $t(t)?t.value:t}const xl={get:(t,e,n)=>Y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return $t(a)&&!$t(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function So(t){return Ke(t)?t:new Proxy(t,xl)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ye(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){hr(i,e,n)}return a}function Yt(t,e,n,r){if(H(t)){const i=ye(t,e,n,r);return i&&no(i)&&i.catch(o=>{hr(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Yt(t[i],e,n,r));return a}function hr(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ye(l,null,10,[t,o,s]);return}}Al(t,n,a,r)}function Al(t,e,n,r=!0){console.error(t)}let hn=!1,Gr=!1;const Ot=[];let Xt=0;const We=[];let he=null,Te=0;const Eo=Promise.resolve();let Ta=null;function kl(t){const e=Ta||Eo;return t?e.then(this?t.bind(this):t):e}function Ol(t){let e=Xt+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,a=Ot[r],i=gn(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function Ca(t){(!Ot.length||!Ot.includes(t,hn&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?Ot.push(t):Ot.splice(Ol(t.id),0,t),To())}function To(){!hn&&!Gr&&(Gr=!0,Ta=Eo.then(Po))}function Sl(t){const e=Ot.indexOf(t);e>Xt&&Ot.splice(e,1)}function El(t){F(t)?We.push(...t):(!he||!he.includes(t,t.allowRecurse?Te+1:Te))&&We.push(t),To()}function ai(t,e,n=hn?Xt+1:0){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r()}}}function Co(t){if(We.length){const e=[...new Set(We)].sort((n,r)=>gn(n)-gn(r));if(We.length=0,he){he.push(...e);return}for(he=e,Te=0;Te<he.length;Te++)he[Te]();he=null,Te=0}}const gn=t=>t.id==null?1/0:t.id,Tl=(t,e)=>{const n=gn(t)-gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Po(t){Gr=!1,hn=!0,Ot.sort(Tl);try{for(Xt=0;Xt<Ot.length;Xt++){const e=Ot[Xt];e&&e.active!==!1&&ye(e,null,14)}}finally{Xt=0,Ot.length=0,Co(),hn=!1,Ta=null,(Ot.length||We.length)&&Po()}}function Cl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ot;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:y}=r[d]||ot;y&&(a=n.map(w=>_t(w)?w.trim():w)),m&&(a=n.map(Br))}let s,l=r[s=Tr(e)]||r[s=Tr(Qt(e))];!l&&i&&(l=r[s=Tr(Qe(e))]),l&&Yt(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Yt(c,t,6,a)}}function Io(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!H(t)){const l=c=>{const d=Io(c,e,!0);d&&(s=!0,kt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(at(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):kt(o,i),at(t)&&r.set(t,o),o)}function gr(t,e){return!t||!fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Qe(e))||G(t,e))}let Nt=null,vr=null;function tr(t){const e=Nt;return Nt=t,vr=t&&t.type.__scopeId||null,e}function No(t){vr=t}function Mo(){vr=null}function Pl(t,e=Nt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&hi(-1);const i=tr(e);let o;try{o=t(...a)}finally{tr(i),r._d&&hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:y,setupState:w,ctx:S,inheritAttrs:$}=t;let z,h;const T=tr(t);try{if(n.shapeFlag&4){const B=a||r,K=B;z=Gt(d.call(K,B,m,i,w,y,S)),h=l}else{const B=e;z=Gt(B.length>1?B(i,{attrs:l,slots:s,emit:c}):B(i,null)),h=e.props?l:Il(l)}}catch(B){un.length=0,hr(B,t,1),z=ct(Re)}let N=z;if(h&&$!==!1){const B=Object.keys(h),{shapeFlag:K}=N;B.length&&K&7&&(o&&B.some(ga)&&(h=Nl(h,o)),N=Xe(N,h))}return n.dirs&&(N=Xe(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),z=N,tr(T),z}const Il=t=>{let e;for(const n in t)(n==="class"||n==="style"||fr(n))&&((e||(e={}))[n]=t[n]);return e},Nl=(t,e)=>{const n={};for(const r in t)(!ga(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ml(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ii(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const y=d[m];if(o[y]!==r[y]&&!gr(c,y))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ii(r,o,c):!0:!!o;return!1}function ii(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!gr(n,i))return!0}return!1}function Ll({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lo="components",jl="directives";function jo(t,e){return $o(Lo,t,!0,e)||t}const Rl=Symbol.for("v-ndc");function Ro(t){return $o(jl,t)}function $o(t,e,n=!0,r=!1){const a=Nt||St;if(a){const i=a.type;if(t===Lo){const s=Lf(i,!1);if(s&&(s===e||s===Qt(e)||s===dr(Qt(e))))return i}const o=oi(a[t]||i[t],e)||oi(a.appContext[t],e);return!o&&r?i:o}}function oi(t,e){return t&&(t[e]||t[Qt(e)]||t[dr(Qt(e))])}const $l=t=>t.__isSuspense;function Fl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):El(t)}const zl=Symbol.for("v-scx"),Dl=()=>Gn(zl),Ln={};function fn(t,e,n){return Fo(t,e,n)}function Fo(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=ot){if(e&&i){const U=e;e=(...Z)=>{U(...Z),K()}}const l=St,c=U=>r===!0?U:Pe(U,r===!1?1:void 0);let d,m=!1,y=!1;if($t(t)?(d=()=>t.value,m=Wr(t)):Ke(t)?(d=()=>c(t),m=!0):F(t)?(y=!0,m=t.some(U=>Ke(U)||Wr(U)),d=()=>t.map(U=>{if($t(U))return U.value;if(Ke(U))return c(U);if(H(U))return ye(U,l,2)})):H(t)?e?d=()=>ye(t,l,2):d=()=>(w&&w(),Yt(t,l,3,[S])):d=Dt,e&&r){const U=d;d=()=>Pe(U())}let w,S=U=>{w=N.onStop=()=>{ye(U,l,4),w=N.onStop=void 0}},$;if(xr)if(S=Dt,e?n&&Yt(e,l,3,[d(),y?[]:void 0,S]):d(),a==="sync"){const U=Dl();$=U.__watcherHandles||(U.__watcherHandles=[])}else return Dt;let z=y?new Array(t.length).fill(Ln):Ln;const h=()=>{if(!(!N.active||!N.dirty))if(e){const U=N.run();(r||m||(y?U.some((Z,At)=>je(Z,z[At])):je(U,z)))&&(w&&w(),Yt(e,l,3,[U,z===Ln?void 0:y&&z[0]===Ln?[]:z,S]),z=U)}else N.run()};h.allowRecurse=!!e;let T;a==="sync"?T=h:a==="post"?T=()=>Pt(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),T=()=>Ca(h));const N=new _a(d,Dt,T),B=Js(),K=()=>{N.stop(),B&&va(B.effects,N)};return e?n?h():z=N.run():a==="post"?Pt(N.run.bind(N),l&&l.suspense):N.run(),$&&$.push(K),K}function Ul(t,e,n){const r=this.proxy,a=_t(t)?t.includes(".")?zo(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=kn(this),s=Fo(a,i.bind(r),n);return o(),s}function zo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Pe(t,e,n=0,r){if(!at(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),$t(t))Pe(t.value,e,n,r);else if(F(t))for(let a=0;a<t.length;a++)Pe(t[a],e,n,r);else if(cr(t)||Ye(t))t.forEach(a=>{Pe(a,e,n,r)});else if(ao(t))for(const a in t)Pe(t[a],e,n,r);return t}function ee(t,e){if(Nt===null)return t;const n=Ar(Nt)||Nt.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[i,o,s,l=ot]=e[a];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Pe(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return t}function Se(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ze(),Yt(l,n,8,[t.el,s,t,e]),De())}}/*! #__NO_SIDE_EFFECTS__ */function br(t,e){return H(t)?kt({name:t.name},e,{setup:t}):t}const Wn=t=>!!t.type.__asyncLoader,Do=t=>t.type.__isKeepAlive;function Bl(t,e){Uo(t,"a",e)}function Hl(t,e){Uo(t,"da",e)}function Uo(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(yr(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Do(a.parent.vnode)&&Vl(r,e,n,a),a=a.parent}}function Vl(t,e,n,r){const a=yr(e,t,r,!0);Bo(()=>{va(r[e],a)},n)}function yr(t,e,n=St,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ze();const s=kn(n),l=Yt(e,n,t,o);return s(),De(),l});return r?a.unshift(i):a.push(i),i}}const se=t=>(e,n=St)=>(!xr||t==="sp")&&yr(t,(...r)=>e(...r),n),Yl=se("bm"),Kl=se("m"),Wl=se("bu"),Gl=se("u"),ql=se("bum"),Bo=se("um"),Xl=se("sp"),Zl=se("rtg"),Ql=se("rtc");function Jl(t,e=St){yr("ec",t,e)}function on(t,e,n,r){let a;const i=n&&n[r];if(F(t)||_t(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(at(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const qr=t=>t?ts(t)?Ar(t)||t.proxy:qr(t.parent):null,cn=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qr(t.parent),$root:t=>qr(t.root),$emit:t=>t.emit,$options:t=>Pa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ca(t.update)}),$nextTick:t=>t.n||(t.n=kl.bind(t.proxy)),$watch:t=>Ul.bind(t)}),Nr=(t,e)=>t!==ot&&!t.__isScriptSetup&&G(t,e),tf={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(Nr(r,e))return o[e]=1,r[e];if(a!==ot&&G(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,i[e];if(n!==ot&&G(n,e))return o[e]=4,n[e];Xr&&(o[e]=0)}}const d=cn[e];let m,y;if(d)return e==="$attrs"&&Mt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==ot&&G(n,e))return o[e]=4,n[e];if(y=l.config.globalProperties,G(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return Nr(a,e)?(a[e]=n,!0):r!==ot&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==ot&&G(t,o)||Nr(e,o)||(s=i[0])&&G(s,o)||G(r,o)||G(cn,o)||G(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function si(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xr=!0;function ef(t){const e=Pa(t),n=t.proxy,r=t.ctx;Xr=!1,e.beforeCreate&&li(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:y,beforeUpdate:w,updated:S,activated:$,deactivated:z,beforeDestroy:h,beforeUnmount:T,destroyed:N,unmounted:B,render:K,renderTracked:U,renderTriggered:Z,errorCaptured:At,serverPrefetch:et,expose:zt,inheritAttrs:fe,components:ce,directives:Lt,filters:en}=e;if(c&&nf(c,r,null),o)for(const rt in o){const W=o[rt];H(W)&&(r[rt]=W.bind(n))}if(a){const rt=a.call(n,n);at(rt)&&(t.data=ke(rt))}if(Xr=!0,i)for(const rt in i){const W=i[rt],jt=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):Dt,Oe=!H(W)&&H(W.set)?W.set.bind(n):Dt,L=qt({get:jt,set:Oe});Object.defineProperty(r,rt,{enumerable:!0,configurable:!0,get:()=>L.value,set:g=>L.value=g})}if(s)for(const rt in s)Ho(s[rt],r,n,rt);if(l){const rt=H(l)?l.call(n):l;Reflect.ownKeys(rt).forEach(W=>{ff(W,rt[W])})}d&&li(d,t,"c");function ht(rt,W){F(W)?W.forEach(jt=>rt(jt.bind(n))):W&&rt(W.bind(n))}if(ht(Yl,m),ht(Kl,y),ht(Wl,w),ht(Gl,S),ht(Bl,$),ht(Hl,z),ht(Jl,At),ht(Ql,U),ht(Zl,Z),ht(ql,T),ht(Bo,B),ht(Xl,et),F(zt))if(zt.length){const rt=t.exposed||(t.exposed={});zt.forEach(W=>{Object.defineProperty(rt,W,{get:()=>n[W],set:jt=>n[W]=jt})})}else t.exposed||(t.exposed={});K&&t.render===Dt&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),ce&&(t.components=ce),Lt&&(t.directives=Lt)}function nf(t,e,n=Dt){F(t)&&(t=Zr(t));for(const r in t){const a=t[r];let i;at(a)?"default"in a?i=Gn(a.from||r,a.default,!0):i=Gn(a.from||r):i=Gn(a),$t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function li(t,e,n){Yt(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ho(t,e,n,r){const a=r.includes(".")?zo(n,r):()=>n[r];if(_t(t)){const i=e[t];H(i)&&fn(a,i)}else if(H(t))fn(a,t.bind(n));else if(at(t))if(F(t))t.forEach(i=>Ho(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&fn(a,i,t)}}function Pa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>er(l,c,o,!0)),er(l,e,o)),at(e)&&i.set(e,l),l}function er(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&er(t,i,n,!0),a&&a.forEach(o=>er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=rf[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const rf={data:fi,props:ci,emits:ci,methods:sn,computed:sn,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:sn,directives:sn,watch:of,provide:fi,inject:af};function fi(t,e){return e?t?function(){return kt(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function af(t,e){return sn(Zr(t),Zr(e))}function Zr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function sn(t,e){return t?kt(Object.create(null),t,e):e}function ci(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:kt(Object.create(null),si(t),si(e??{})):e}function of(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Vo(){return{app:null,config:{isNativeTag:zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sf=0;function lf(t,e){return function(r,a=null){H(r)||(r=kt({},r)),a!=null&&!at(a)&&(a=null);const i=Vo(),o=new WeakSet;let s=!1;const l=i.app={_uid:sf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:$f,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...d)):H(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const y=ct(r,a);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(y,c):t(y,c,m),s=!0,l._container=c,c.__vue_app__=l,Ar(y.component)||y.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){nr=l;try{return c()}finally{nr=null}}};return l}}let nr=null;function ff(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function Gn(t,e,n=!1){const r=St||Nt;if(r||nr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function cf(t,e,n,r=!1){const a={},i={};Jn(i,wr,1),t.propsDefaults=Object.create(null),Yo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:yl(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function uf(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=tt(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let y=d[m];if(gr(t.emitsOptions,y))continue;const w=e[y];if(l)if(G(i,y))w!==i[y]&&(i[y]=w,c=!0);else{const S=Qt(y);a[S]=Qr(l,s,S,w,t,!1)}else w!==i[y]&&(i[y]=w,c=!0)}}}else{Yo(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!G(e,m)&&((d=Qe(m))===m||!G(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Qr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!G(e,m))&&(delete i[m],c=!0)}c&&re(t,"set","$attrs")}function Yo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Yn(l))continue;const c=e[l];let d;a&&G(a,d=Qt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:gr(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=tt(n),c=s||ot;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Qr(a,l,m,c[m],t,!G(c,m))}}return o}function Qr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=G(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const d=kn(a);r=c[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qe(n))&&(r=!0))}return r}function Ko(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!H(t)){const d=m=>{l=!0;const[y,w]=Ko(m,e,!0);kt(o,y),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return at(t)&&r.set(t,Ve),Ve;if(F(i))for(let d=0;d<i.length;d++){const m=Qt(i[d]);ui(m)&&(o[m]=ot)}else if(i)for(const d in i){const m=Qt(d);if(ui(m)){const y=i[d],w=o[m]=F(y)||H(y)?{type:y}:kt({},y);if(w){const S=pi(Boolean,w.type),$=pi(String,w.type);w[0]=S>-1,w[1]=$<0||S<$,(S>-1||G(w,"default"))&&s.push(m)}}}const c=[o,s];return at(t)&&r.set(t,c),c}function ui(t){return t[0]!=="$"}function di(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mi(t,e){return di(t)===di(e)}function pi(t,e){return F(e)?e.findIndex(n=>mi(n,t)):H(e)&&mi(e,t)?0:-1}const Wo=t=>t[0]==="_"||t==="$stable",Ia=t=>F(t)?t.map(Gt):[Gt(t)],df=(t,e,n)=>{if(e._n)return e;const r=Pl((...a)=>Ia(e(...a)),n);return r._c=!1,r},Go=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Wo(a))continue;const i=t[a];if(H(i))e[a]=df(a,i,r);else if(i!=null){const o=Ia(i);e[a]=()=>o}}},qo=(t,e)=>{const n=Ia(e);t.slots.default=()=>n},mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=tt(e),Jn(e,"_",n)):Go(e,t.slots={})}else t.slots={},e&&qo(t,e);Jn(t.slots,wr,1)},pf=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=ot;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(kt(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Go(e,a)),o=e}else e&&(qo(t,e),o={default:1});if(i)for(const s in a)!Wo(s)&&o[s]==null&&delete a[s]};function Jr(t,e,n,r,a=!1){if(F(t)){t.forEach((y,w)=>Jr(y,e&&(F(e)?e[w]:e),n,r,a));return}if(Wn(r)&&!a)return;const i=r.shapeFlag&4?Ar(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===ot?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(_t(c)?(d[c]=null,G(m,c)&&(m[c]=null)):$t(c)&&(c.value=null)),H(l))ye(l,s,12,[o,d]);else{const y=_t(l),w=$t(l),S=t.f;if(y||w){const $=()=>{if(S){const z=y?G(m,l)?m[l]:d[l]:l.value;a?F(z)&&va(z,i):F(z)?z.includes(i)||z.push(i):y?(d[l]=[i],G(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else y?(d[l]=o,G(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(d[t.k]=o))};a||S?$():($.id=-1,Pt($,n))}}}const Pt=Fl;function hf(t){return gf(t)}function gf(t,e){const n=io();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:y,setScopeId:w=Dt,insertStaticContent:S}=t,$=(f,u,p,v=null,b=null,A=null,E=void 0,x=null,O=!!u.dynamicChildren)=>{if(f===u)return;f&&!an(f,u)&&(v=it(f),g(f,b,A,!0),f=null),u.patchFlag===-2&&(O=!1,u.dynamicChildren=null);const{type:_,ref:C,shapeFlag:R}=u;switch(_){case _r:z(f,u,p,v);break;case Re:h(f,u,p,v);break;case qn:f==null&&T(u,p,v,E);break;case It:ce(f,u,p,v,b,A,E,x,O);break;default:R&1?K(f,u,p,v,b,A,E,x,O):R&6?Lt(f,u,p,v,b,A,E,x,O):(R&64||R&128)&&_.process(f,u,p,v,b,A,E,x,O,gt)}C!=null&&b&&Jr(C,f&&f.ref,A,u||f,!u)},z=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const b=u.el=f.el;u.children!==f.children&&c(b,u.children)}},h=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},T=(f,u,p,v)=>{[f.el,f.anchor]=S(f.children,u,p,v,f.el,f.anchor)},N=({el:f,anchor:u},p,v)=>{let b;for(;f&&f!==u;)b=y(f),r(f,p,v),f=b;r(u,p,v)},B=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=y(f),a(f),f=p;a(u)},K=(f,u,p,v,b,A,E,x,O)=>{u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),f==null?U(u,p,v,b,A,E,x,O):et(f,u,b,A,E,x,O)},U=(f,u,p,v,b,A,E,x)=>{let O,_;const{props:C,shapeFlag:R,transition:M,dirs:D}=f;if(O=f.el=o(f.type,A,C&&C.is,C),R&8?d(O,f.children):R&16&&At(f.children,O,null,v,b,Mr(f,A),E,x),D&&Se(f,null,v,"created"),Z(O,f,f.scopeId,E,v),C){for(const q in C)q!=="value"&&!Yn(q)&&i(O,q,null,C[q],A,f.children,v,b,J);"value"in C&&i(O,"value",null,C.value,A),(_=C.onVnodeBeforeMount)&&Wt(_,v,f)}D&&Se(f,null,v,"beforeMount");const V=vf(b,M);V&&M.beforeEnter(O),r(O,u,p),((_=C&&C.onVnodeMounted)||V||D)&&Pt(()=>{_&&Wt(_,v,f),V&&M.enter(O),D&&Se(f,null,v,"mounted")},b)},Z=(f,u,p,v,b)=>{if(p&&w(f,p),v)for(let A=0;A<v.length;A++)w(f,v[A]);if(b){let A=b.subTree;if(u===A){const E=b.vnode;Z(f,E,E.scopeId,E.slotScopeIds,b.parent)}}},At=(f,u,p,v,b,A,E,x,O=0)=>{for(let _=O;_<f.length;_++){const C=f[_]=x?ge(f[_]):Gt(f[_]);$(null,C,u,p,v,b,A,E,x)}},et=(f,u,p,v,b,A,E)=>{const x=u.el=f.el;let{patchFlag:O,dynamicChildren:_,dirs:C}=u;O|=f.patchFlag&16;const R=f.props||ot,M=u.props||ot;let D;if(p&&Ee(p,!1),(D=M.onVnodeBeforeUpdate)&&Wt(D,p,u,f),C&&Se(u,f,p,"beforeUpdate"),p&&Ee(p,!0),_?zt(f.dynamicChildren,_,x,p,v,Mr(u,b),A):E||W(f,u,x,null,p,v,Mr(u,b),A,!1),O>0){if(O&16)fe(x,u,R,M,p,v,b);else if(O&2&&R.class!==M.class&&i(x,"class",null,M.class,b),O&4&&i(x,"style",R.style,M.style,b),O&8){const V=u.dynamicProps;for(let q=0;q<V.length;q++){const Q=V[q],mt=R[Q],Rt=M[Q];(Rt!==mt||Q==="value")&&i(x,Q,mt,Rt,b,f.children,p,v,J)}}O&1&&f.children!==u.children&&d(x,u.children)}else!E&&_==null&&fe(x,u,R,M,p,v,b);((D=M.onVnodeUpdated)||C)&&Pt(()=>{D&&Wt(D,p,u,f),C&&Se(u,f,p,"updated")},v)},zt=(f,u,p,v,b,A,E)=>{for(let x=0;x<u.length;x++){const O=f[x],_=u[x],C=O.el&&(O.type===It||!an(O,_)||O.shapeFlag&70)?m(O.el):p;$(O,_,C,null,v,b,A,E,!0)}},fe=(f,u,p,v,b,A,E)=>{if(p!==v){if(p!==ot)for(const x in p)!Yn(x)&&!(x in v)&&i(f,x,p[x],null,E,u.children,b,A,J);for(const x in v){if(Yn(x))continue;const O=v[x],_=p[x];O!==_&&x!=="value"&&i(f,x,_,O,E,u.children,b,A,J)}"value"in v&&i(f,"value",p.value,v.value,E)}},ce=(f,u,p,v,b,A,E,x,O)=>{const _=u.el=f?f.el:s(""),C=u.anchor=f?f.anchor:s("");let{patchFlag:R,dynamicChildren:M,slotScopeIds:D}=u;D&&(x=x?x.concat(D):D),f==null?(r(_,p,v),r(C,p,v),At(u.children||[],p,C,b,A,E,x,O)):R>0&&R&64&&M&&f.dynamicChildren?(zt(f.dynamicChildren,M,p,b,A,E,x),(u.key!=null||b&&u===b.subTree)&&Xo(f,u,!0)):W(f,u,p,C,b,A,E,x,O)},Lt=(f,u,p,v,b,A,E,x,O)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?b.ctx.activate(u,p,v,E,O):en(u,p,v,b,A,E,O):Tn(f,u,O)},en=(f,u,p,v,b,A,E)=>{const x=f.component=Cf(f,v,b);if(Do(f)&&(x.ctx.renderer=gt),Pf(x),x.asyncDep){if(b&&b.registerDep(x,ht),!f.el){const O=x.subTree=ct(Re);h(null,O,u,p)}}else ht(x,f,u,p,b,A,E)},Tn=(f,u,p)=>{const v=u.component=f.component;if(Ml(f,u,p))if(v.asyncDep&&!v.asyncResolved){rt(v,u,p);return}else v.next=u,Sl(v.update),v.effect.dirty=!0,v.update();else u.el=f.el,v.vnode=u},ht=(f,u,p,v,b,A,E)=>{const x=()=>{if(f.isMounted){let{next:C,bu:R,u:M,parent:D,vnode:V}=f;{const te=Zo(f);if(te){C&&(C.el=V.el,rt(f,C,E)),te.asyncDep.then(()=>{f.isUnmounted||x()});return}}let q=C,Q;Ee(f,!1),C?(C.el=V.el,rt(f,C,E)):C=V,R&&Kn(R),(Q=C.props&&C.props.onVnodeBeforeUpdate)&&Wt(Q,D,C,V),Ee(f,!0);const mt=Ir(f),Rt=f.subTree;f.subTree=mt,$(Rt,mt,m(Rt.el),it(Rt),f,b,A),C.el=mt.el,q===null&&Ll(f,mt.el),M&&Pt(M,b),(Q=C.props&&C.props.onVnodeUpdated)&&Pt(()=>Wt(Q,D,C,V),b)}else{let C;const{el:R,props:M}=u,{bm:D,m:V,parent:q}=f,Q=Wn(u);if(Ee(f,!1),D&&Kn(D),!Q&&(C=M&&M.onVnodeBeforeMount)&&Wt(C,q,u),Ee(f,!0),R&&Jt){const mt=()=>{f.subTree=Ir(f),Jt(R,f.subTree,f,b,null)};Q?u.type.__asyncLoader().then(()=>!f.isUnmounted&&mt()):mt()}else{const mt=f.subTree=Ir(f);$(null,mt,p,v,f,b,A),u.el=mt.el}if(V&&Pt(V,b),!Q&&(C=M&&M.onVnodeMounted)){const mt=u;Pt(()=>Wt(C,q,mt),b)}(u.shapeFlag&256||q&&Wn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&Pt(f.a,b),f.isMounted=!0,u=p=v=null}},O=f.effect=new _a(x,Dt,()=>Ca(_),f.scope),_=f.update=()=>{O.dirty&&O.run()};_.id=f.uid,Ee(f,!0),_()},rt=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,uf(f,u.props,v,p),pf(f,u.children,p),ze(),ai(f),De()},W=(f,u,p,v,b,A,E,x,O=!1)=>{const _=f&&f.children,C=f?f.shapeFlag:0,R=u.children,{patchFlag:M,shapeFlag:D}=u;if(M>0){if(M&128){Oe(_,R,p,v,b,A,E,x,O);return}else if(M&256){jt(_,R,p,v,b,A,E,x,O);return}}D&8?(C&16&&J(_,b,A),R!==_&&d(p,R)):C&16?D&16?Oe(_,R,p,v,b,A,E,x,O):J(_,b,A,!0):(C&8&&d(p,""),D&16&&At(R,p,v,b,A,E,x,O))},jt=(f,u,p,v,b,A,E,x,O)=>{f=f||Ve,u=u||Ve;const _=f.length,C=u.length,R=Math.min(_,C);let M;for(M=0;M<R;M++){const D=u[M]=O?ge(u[M]):Gt(u[M]);$(f[M],D,p,null,b,A,E,x,O)}_>C?J(f,b,A,!0,!1,R):At(u,p,v,b,A,E,x,O,R)},Oe=(f,u,p,v,b,A,E,x,O)=>{let _=0;const C=u.length;let R=f.length-1,M=C-1;for(;_<=R&&_<=M;){const D=f[_],V=u[_]=O?ge(u[_]):Gt(u[_]);if(an(D,V))$(D,V,p,null,b,A,E,x,O);else break;_++}for(;_<=R&&_<=M;){const D=f[R],V=u[M]=O?ge(u[M]):Gt(u[M]);if(an(D,V))$(D,V,p,null,b,A,E,x,O);else break;R--,M--}if(_>R){if(_<=M){const D=M+1,V=D<C?u[D].el:v;for(;_<=M;)$(null,u[_]=O?ge(u[_]):Gt(u[_]),p,V,b,A,E,x,O),_++}}else if(_>M)for(;_<=R;)g(f[_],b,A,!0),_++;else{const D=_,V=_,q=new Map;for(_=V;_<=M;_++){const Et=u[_]=O?ge(u[_]):Gt(u[_]);Et.key!=null&&q.set(Et.key,_)}let Q,mt=0;const Rt=M-V+1;let te=!1,nn=0;const ue=new Array(Rt);for(_=0;_<Rt;_++)ue[_]=0;for(_=D;_<=R;_++){const Et=f[_];if(mt>=Rt){g(Et,b,A,!0);continue}let nt;if(Et.key!=null)nt=q.get(Et.key);else for(Q=V;Q<=M;Q++)if(ue[Q-V]===0&&an(Et,u[Q])){nt=Q;break}nt===void 0?g(Et,b,A,!0):(ue[nt-V]=_+1,nt>=nn?nn=nt:te=!0,$(Et,u[nt],p,null,b,A,E,x,O),mt++)}const rn=te?bf(ue):Ve;for(Q=rn.length-1,_=Rt-1;_>=0;_--){const Et=V+_,nt=u[Et],pt=Et+1<C?u[Et+1].el:v;ue[_]===0?$(null,nt,p,pt,b,A,E,x,O):te&&(Q<0||_!==rn[Q]?L(nt,p,pt,2):Q--)}}},L=(f,u,p,v,b=null)=>{const{el:A,type:E,transition:x,children:O,shapeFlag:_}=f;if(_&6){L(f.component.subTree,u,p,v);return}if(_&128){f.suspense.move(u,p,v);return}if(_&64){E.move(f,u,p,gt);return}if(E===It){r(A,u,p);for(let R=0;R<O.length;R++)L(O[R],u,p,v);r(f.anchor,u,p);return}if(E===qn){N(f,u,p);return}if(v!==2&&_&1&&x)if(v===0)x.beforeEnter(A),r(A,u,p),Pt(()=>x.enter(A),b);else{const{leave:R,delayLeave:M,afterLeave:D}=x,V=()=>r(A,u,p),q=()=>{R(A,()=>{V(),D&&D()})};M?M(A,V,q):q()}else r(A,u,p)},g=(f,u,p,v=!1,b=!1)=>{const{type:A,props:E,ref:x,children:O,dynamicChildren:_,shapeFlag:C,patchFlag:R,dirs:M}=f;if(x!=null&&Jr(x,null,p,f,!0),C&256){u.ctx.deactivate(f);return}const D=C&1&&M,V=!Wn(f);let q;if(V&&(q=E&&E.onVnodeBeforeUnmount)&&Wt(q,u,f),C&6)dt(f.component,p,v);else{if(C&128){f.suspense.unmount(p,v);return}D&&Se(f,null,u,"beforeUnmount"),C&64?f.type.remove(f,u,p,b,gt,v):_&&(A!==It||R>0&&R&64)?J(_,u,p,!1,!0):(A===It&&R&384||!b&&C&16)&&J(O,u,p),v&&j(f)}(V&&(q=E&&E.onVnodeUnmounted)||D)&&Pt(()=>{q&&Wt(q,u,f),D&&Se(f,null,u,"unmounted")},p)},j=f=>{const{type:u,el:p,anchor:v,transition:b}=f;if(u===It){X(p,v);return}if(u===qn){B(f);return}const A=()=>{a(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:x}=b,O=()=>E(p,A);x?x(f.el,A,O):O()}else A()},X=(f,u)=>{let p;for(;f!==u;)p=y(f),a(f),f=p;a(u)},dt=(f,u,p)=>{const{bum:v,scope:b,update:A,subTree:E,um:x}=f;v&&Kn(v),b.stop(),A&&(A.active=!1,g(E,f,u,p)),x&&Pt(x,u),Pt(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},J=(f,u,p,v=!1,b=!1,A=0)=>{for(let E=A;E<f.length;E++)g(f[E],u,p,v,b)},it=f=>f.shapeFlag&6?it(f.component.subTree):f.shapeFlag&128?f.suspense.next():y(f.anchor||f.el);let Kt=!1;const Ut=(f,u,p)=>{f==null?u._vnode&&g(u._vnode,null,null,!0):$(u._vnode||null,f,u,null,null,null,p),Kt||(Kt=!0,ai(),Co(),Kt=!1),u._vnode=f},gt={p:$,um:g,m:L,r:j,mt:en,mc:At,pc:W,pbc:zt,n:it,o:t};let vt,Jt;return e&&([vt,Jt]=e(gt)),{render:Ut,hydrate:vt,createApp:lf(Ut,vt)}}function Mr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ee({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xo(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ge(a[i]),s.el=o.el),n||Xo(o,s)),s.type===_r&&(s.el=o.el)}}function bf(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Zo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zo(e)}const yf=t=>t.__isTeleport,It=Symbol.for("v-fgt"),_r=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),qn=Symbol.for("v-stc"),un=[];let Ht=null;function yt(t=!1){un.push(Ht=t?null:[])}function _f(){un.pop(),Ht=un[un.length-1]||null}let vn=1;function hi(t){vn+=t}function Qo(t){return t.dynamicChildren=vn>0?Ht||Ve:null,_f(),vn>0&&Ht&&Ht.push(t),t}function xt(t,e,n,r,a,i){return Qo(k(t,e,n,r,a,i,!0))}function wf(t,e,n,r,a){return Qo(ct(t,e,n,r,a,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const wr="__vInternal",Jo=({key:t})=>t??null,Xn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||$t(t)||H(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,a=null,i=t===It?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jo(e),ref:e&&Xn(e),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Nt};return s?(Na(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),vn>0&&!o&&Ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ht.push(l),l}const ct=xf;function xf(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===Rl)&&(t=Re),ta(t)){const s=Xe(t,e,!0);return n&&Na(s,n),vn>0&&!i&&Ht&&(s.shapeFlag&6?Ht[Ht.indexOf(t)]=s:Ht.push(s)),s.patchFlag|=-2,s}if(jf(t)&&(t=t.__vccOpts),e){e=Af(e);let{class:s,style:l}=e;s&&!_t(s)&&(e.class=bt(s)),at(l)&&(Ao(l)&&!F(l)&&(l=kt({},l)),e.style=ya(l))}const o=_t(t)?1:$l(t)?128:yf(t)?64:at(t)?4:H(t)?2:0;return k(t,e,n,r,a,o,i,!0)}function Af(t){return t?Ao(t)||wr in t?kt({},t):t:null}function Xe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Sf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Jo(s),ref:e&&e.ref?n&&a?F(a)?a.concat(Xn(e)):[a,Xn(e)]:Xn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xe(t.ssContent),ssFallback:t.ssFallback&&Xe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ue(t=" ",e=0){return ct(_r,null,t,e)}function kf(t,e){const n=ct(qn,null,t);return n.staticCount=e,n}function Of(t="",e=!1){return e?(yt(),wf(Re,null,t)):ct(Re,null,t)}function Gt(t){return t==null||typeof t=="boolean"?ct(Re):F(t)?ct(It,null,t.slice()):typeof t=="object"?ge(t):ct(_r,null,String(t))}function ge(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xe(t)}function Na(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Na(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(wr in e)?e._ctx=Nt:a===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Ue(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=bt([e.class,r.class]));else if(a==="style")e.style=ya([e.style,r.style]);else if(fr(a)){const i=e[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Wt(t,e,n,r=null){Yt(t,e,7,[n,r])}const Ef=Vo();let Tf=0;function Cf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Ef,i={uid:Tf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ko(r,a),emitsOptions:Io(r,a),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:r.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cl.bind(null,i),t.ce&&t.ce(i),i}let St=null,rr,ea;{const t=io(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};rr=e("__VUE_INSTANCE_SETTERS__",n=>St=n),ea=e("__VUE_SSR_SETTERS__",n=>xr=n)}const kn=t=>{const e=St;return rr(t),t.scope.on(),()=>{t.scope.off(),rr(e)}},gi=()=>{St&&St.scope.off(),rr(null)};function ts(t){return t.vnode.shapeFlag&4}let xr=!1;function Pf(t,e=!1){e&&ea(e);const{props:n,children:r}=t.vnode,a=ts(t);cf(t,n,a,e),mf(t,r);const i=a?If(t,e):void 0;return e&&ea(!1),i}function If(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ko(new Proxy(t.ctx,tf));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?Mf(t):null,i=kn(t);ze();const o=ye(r,t,0,[t.props,a]);if(De(),i(),no(o)){if(o.then(gi,gi),e)return o.then(s=>{vi(t,s,e)}).catch(s=>{hr(s,t,0)});t.asyncDep=o}else vi(t,o,e)}else es(t,e)}function vi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=So(e)),es(t,n)}let bi;function es(t,e,n){const r=t.type;if(!t.render){if(!e&&bi&&!r.render){const a=r.template||Pa(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=kt(kt({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,c)}}t.render=r.render||Dt}{const a=kn(t);ze();try{ef(t)}finally{De(),a()}}}function Nf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}}))}function Mf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Nf(t)},slots:t.slots,emit:t.emit,expose:e}}function Ar(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(So(ko(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cn)return cn[n](t)},has(e,n){return n in e||n in cn}}))}function Lf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function jf(t){return H(t)&&"__vccOpts"in t}const qt=(t,e)=>_l(t,e,xr);function Rf(t,e,n){const r=arguments.length;return r===2?at(e)&&!F(e)?ta(e)?ct(t,null,[e]):ct(t,e):ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),ct(t,e,n))}const $f="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ff="http://www.w3.org/2000/svg",zf="http://www.w3.org/1998/Math/MathML",ve=typeof document<"u"?document:null,yi=ve&&ve.createElement("template"),Df={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?ve.createElementNS(Ff,t):e==="mathml"?ve.createElementNS(zf,t):ve.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ve.createTextNode(t),createComment:t=>ve.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ve.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=yi.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Uf=Symbol("_vtc");function Bf(t,e,n){const r=t[Uf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hf=Symbol("_vod"),Vf=Symbol("");function Yf(t,e,n){const r=t.style,a=r.display,i=_t(n);if(n&&!i){if(e&&!_t(e))for(const o in e)n[o]==null&&na(r,o,"");for(const o in n)na(r,o,n[o])}else if(i){if(e!==n){const o=r[Vf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Hf in t&&(r.display=a)}const _i=/\s*!important$/;function na(t,e,n){if(F(n))n.forEach(r=>na(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Kf(t,e);_i.test(n)?t.setProperty(Qe(r),n.replace(_i,""),"important"):t[r]=n}}const wi=["Webkit","Moz","ms"],Lr={};function Kf(t,e){const n=Lr[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Lr[e]=r;r=dr(r);for(let a=0;a<wi.length;a++){const i=wi[a]+r;if(i in t)return Lr[e]=i}return e}const xi="http://www.w3.org/1999/xlink";function Wf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xi,e.slice(6,e.length)):t.setAttributeNS(xi,e,n);else{const i=qs(e);n==null||i&&!oo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=oo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ce(t,e,n,r){t.addEventListener(e,n,r)}function qf(t,e,n,r){t.removeEventListener(e,n,r)}const Ai=Symbol("_vei");function Xf(t,e,n,r,a=null){const i=t[Ai]||(t[Ai]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Zf(e);if(r){const c=i[e]=tc(r,a);Ce(t,s,c,l)}else o&&(qf(t,s,o,l),i[e]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function Zf(t){let e;if(ki.test(t)){e={};let r;for(;r=t.match(ki);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qe(t.slice(2)),e]}let jr=0;const Qf=Promise.resolve(),Jf=()=>jr||(Qf.then(()=>jr=0),jr=Date.now());function tc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(ec(r,n.value),e,5,[r])};return n.value=t,n.attached=Jf(),n}function ec(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const Oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nc=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?Bf(t,r,c):e==="style"?Yf(t,n,r):fr(e)?ga(e)||Xf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rc(t,e,r,c))?Gf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wf(t,e,r,c))};function rc(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Oi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Oi(e)&&_t(n)?!1:e in t}const ar=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Kn(e,n):e};function ac(t){t.target.composing=!0}function Si(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ge=Symbol("_assign"),Rr={created(t,{modifiers:{lazy:e,trim:n,number:r}},a){t[Ge]=ar(a);const i=r||a.props&&a.props.type==="number";Ce(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),i&&(s=Br(s)),t[Ge](s)}),n&&Ce(t,"change",()=>{t.value=t.value.trim()}),e||(Ce(t,"compositionstart",ac),Ce(t,"compositionend",Si),Ce(t,"change",Si))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:a}},i){if(t[Ge]=ar(i),t.composing)return;const o=a||t.type==="number"?Br(t.value):t.value,s=e??"";o!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},ic={deep:!0,created(t,e,n){t[Ge]=ar(n),Ce(t,"change",()=>{const r=t._modelValue,a=oc(t),i=t.checked,o=t[Ge];if(F(r)){const s=so(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(cr(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(ns(t,i))})},mounted:Ei,beforeUpdate(t,e,n){t[Ge]=ar(n),Ei(t,e,n)}};function Ei(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=so(e,r.props.value)>-1:cr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=mr(e,ns(t,!0)))}function oc(t){return"_value"in t?t._value:t.value}function ns(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const sc=["ctrl","shift","alt","meta"],lc={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sc.some(n=>t[`${n}Key`]&&!e.includes(n))},fc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<e.length;o++){const s=lc[e[o]];if(s&&s(a,e))return}return t(a,...i)})},cc=kt({patchProp:nc},Df);let Ti;function uc(){return Ti||(Ti=hf(cc))}const dc=(...t)=>{const e=uc().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=pc(r);if(!a)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,mc(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function mc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pc(t){return _t(t)?document.querySelector(t):t}const rs=t=>t.replace(/[!-~]/g,e=>String.fromCharCode(e.charCodeAt(0)+65248)),hc=t=>{const e=t.split(/\r\n|\n/),n=e.reduce((s,l)=>Math.max(s,l.length),0),r=`┏${"━".repeat(n)}┓`,a=e.map(s=>{const l=rs(s);return l.length===n?`┃${l}┃`:`┃${l}${"　".repeat(n-l.length)}┃`}).join(`
`),i=`┗${"━".repeat(n)}┛`;return`${r}
${a}
${i}`},gc=t=>{const e=t.split(`
`).map(i=>i.split("")),n=Math.max(...e.map(i=>i.length));return Array.from(Array(n),(i,o)=>e.map(s=>{if(s[o]===" ")return"　";const l=s[o]??"　";return rs(l)}).reverse()).map(i=>i.join("　")).join(`
`)},vc=[{label:"祈るAA",msg:`.
(*-ω人)(*-ω人)(*-ω人)`},{label:"ラーメンもぐもぐAA",msg:`.
　　∧＿∧
　　( ´･ω･）
　　(⊃=|||o)
￣￣｀――´￣￣＼`},{label:"万歳AA",msg:`.
ｎ. ∧__,∧ｎ
ゝ( ＾ω＾ )ﾉ`},{label:"火山AA",msg:`.
　　   (⌒⌒)
　　　 ii!i!i 　　ﾄﾞｯｶｰﾝ!
  　　ﾉ~~~＼
,,,,,,,／｀･ω･´ ＼,,,,,,,,,,
`},{label:"ぼこぼこにしてやんよAA",msg:`.
∧__∧
( ･ω･)＝つ≡つ
(っ　≡つ＝つ
/　 )ﾊﾞﾊﾞﾊﾞﾊﾞ
( /￣∪
`},{label:"風呂AA",msg:`.
      |                     　.( ( |
      | )                    　) ) |
      |＿＿＿＿＿＿＿(__|
   ／―     ∧ ∧    ――-＼≒
／          (       )              ＼
|￣￣￣￣￣￣￣￣￣￣￣ |
|＿＿＿＿＿＿＿＿＿＿＿ |
`}],bc=[{label:"バッティングAA",msg:`.
　　　　　　ブンッ　　　 ／／
　　　／　∧____∧　　   ／／
　 ／ ／    (　´・ω）　／／
（￣￣二⊂　　  彡⊃‘　, ＞ カキーン！
　￣￣ 　 ｙ 　人　   从
　　　   ミ(〓_) __),,`},{label:"送りバントAA",msg:`.
（´・ω・） 从
（つ=＝二二)
 (__/"(__)　　ﾐ ○
`},{label:"ダッシュAA",msg:`.
((;;;:: ;: ;;　　　　　　 　;; ;:;::)) ::)
( ::: (;;　　∧_,∧　　 　);:;;;)) )::: :; :))
　((:: :;;　(´・ω・)っ ;;;; ; :))
　　((;;;　(っ　,ｒ　どどどどど……
　　　　　 i_ノ┘`},{label:"審議中AA",msg:`.
　【審議中】
　　　 ＿　　   ＿　　　＿＿ 
　　  /_CLヽ＿/CL_ヽ 　/==ヽヽ 
　∧ (´・ω・) (・ω・｀)|====| | 
(　´・ω)　Ｕ) ( つと ﾉ   ヽ== 〃
｜　Ｕ (　　´・) (・｀　)　と ﾉ 
　ｕ-ｕ（l 　　 ) (　　ﾉ　u-ｕ' 
　　　　 \`ｕ-ｕ'.\`ｕ-u'
`},{label:"中継ぎ投手が下から登場AA",msg:`.
　　　　　／/
　　　　／　/
　　　 / 　 /　 ﾊﾟｶ
　  　 / ∩ﾊ,,ﾊ
　　 /　|( ﾟωﾟ)＿ <- 中継ぎ
　　/／ |　　　ヽ／
　　　"￣￣￣"∪.
`},{label:"この回20点取れAA",msg:`.
　　　 ハハ 
　　　(ﾟωﾟ) 
　|￣￣￣￣￣￣| 
　0　この回　  0
　|　20点取れ　|
　|　　　　　　|
　 ￣￣￣￣￣￣
`}],yc=[{label:"傘ふりふりAA",msg:`.
( ^ω^)个(´・ω・)个( ^ω^)个`},{label:"馬AA",msg:`.
^__^
(oo)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`},{label:"ドアラAA",msg:`.
|──､
|CD＿|-‐‐､
|▲・｀ |⌒) ）
|∀__ 人=,,゛
と　）
|　/`},{label:"スターマンAA",msg:`.
　　　　   ＿＿__
　　　|＼ |＿B＿|_／|
　　/＿＿_／＼＿＿ヽ
　/　＼ ●　o　● ／　ヽ
（ 　≡ 〉'' (_人_) ''〈 ≡　 ）
　＼　/　　　　　 ヽ　／`},{label:"虎AA",msg:`.
　　　 　 ,、
　　(ゞ~虎 ヽ
 　彡=・ω・ﾐ.
　　/=　=|
～（ﾞ_)UU）`},{label:"うさぎAA",msg:`.
 ／"ヽ　/"＼
(,,,ハ i/ ノヽ,,）
　/ ・ω・ヽ
　l   u 　 u l
　\`'ーu-uー´`},{label:"カープ坊やAA",msg:`.
　 　 /⌒i
  　 /　 /-─-　 ＿＿
　 /　 /　 　 (こ　／⌒)
  /　 /　 ＿＿ ノ 　 く
/⌒ｮ(aY　ヒﾘ＿ゝﾋﾘ幺
E⌒トｰ'　　 /／　　 )
.Yへ＿}ニﾆ}777∧´
　..ゝ- }////TT///∧
　　１. Hiroshima∧`},{label:"オリックスAA",msg:`.
   ＡＡ
⊂・・⊃▼⌒ヽ
(ω＿) )　 丑● |～*
　　ＵＵ~--Ｕ`},{label:"ロッテAA",msg:`.
＜￣｀ヽ、　　　　　　　／￣＞
　ゝ、　　＼　　鴎　　ノ 　/´
　　　ゝ、　\`   ( ´･ω･)／
　　 　　>　 　 　,ノ
　　　　　∠_,,,/´”`},{label:"傘AA",msg:`.
　　　　 ┃
　　 r-(・ω・)-、
　 ／ /　｜ ヽ 　＼
　"⌒Ｙ⌒Ｙ⌒Ｙ⌒ﾞ
　　　　 ┃
　　　　 ┃
　　　　  J`},{label:"侍AA",msg:`.
　　　　∧__∧
　　　 （｀･ω･）
　　　.ノ^　yヽ、
　　　ヽ,,ﾉ==l ﾉ
　　　　/ 　l |
"""~""""""~"""~"""~"
`}],_c=[{label:"落ち込むAA",msg:`.
  ∧＿＿∧ 
（ ´・ω・\`)     (○) 
,( ヽ∩∩ノ),、ヽ|〃,,, 
“““ ““ ““ ““ ““ ““ ““ “\`\`““ ““`},{label:"雨天AA",msg:`.
/            /              /      /
    ._,､-ｰ''~''ｰ-､,_.
  ,r'  ／/ .l ヾ ヽ  ＼    /
 . ~⌒⌒⌒.ll⌒⌒⌒⌒
  /.             ||:i:i:i:i:i:i:i:}   /
           /.    ||´・ω・｀）
        /.       0と:::::::）    /
                    し─Ｊ`},{label:"凍るAA",msg:`.
　　 + ＿＿＿＿＿ ＊
　　 ／ ／／　 ／| 
　　|￣／ ￣￣ |// | ｶﾁ
　　|／∧_∧／   | / |　ｺﾁ
＊　|　(´･ω･)    |   | +
　　|　(／o☆o |   |
　　|／ー―-′　|／
　＊ ￣￣￣￣￣`},{label:"荒巻スカルチノフAA",msg:`.
  _,.,,_
/ ,' 3    \`ヽｰっ
l      ⊃  ⌒_つ
\`'ｰ---‐'''''"`},{label:"ノートパソコンを閉じるAA",msg:`.
　(´･ω･\`)
＿(__つ  /￣￣￣￣/＿
　　＼/　　　　 /
　　　 ￣￣￣￣

　(´･ω･\`)
＿(　つ　ミ　　ﾊﾞﾀﾝｯ
　　＼￣￣￣＼ミ
　　　 ￣￣￣￣

   (´･ω･\`)
＿(　　)
　　＼￣￣￣＼
　　　 ￣￣￣￣
`}],wc=[{label:"野球_HR画像AA",msg:"https://twitter.com/AntBaseball/status/1287309303469101056/photo/1",url:"./assets/img/hr.png"},{label:"野球_ファインプレー画像AA",msg:"https://twitter.com/AntBaseball/status/1316284953865285635/photo/1",url:"./assets/img/fine_play.png"},{label:"野球_エラー画像AA",msg:"https://twitter.com/AntBaseball/status/1316285165530832898/photo/1",url:"./assets/img/e.png"},{label:"つば九郎_倒れる画像AA",msg:"https://twitter.com/AntBaseball/status/1310489504617132035/photo/1",url:"./assets/img/2896_down.png"}],xc=[{label:"ヤクルト_今ここから",url:"https://t.co/nJCj7tXoLe"},{label:"ヤクルト_東京音頭",url:"https://t.co/dEd0Jxfs87"},{label:"337拍子",url:"https://t.co/x8IBOjXI5L"}],as=[{name:"#tigers",jpName:"#阪神タイガース"},{name:"#carp",jpName:"#広島東洋カープ"},{name:"#baystars",jpName:"#横浜DeNAベイスターズ"},{name:"#giants",jpName:"#読売巨人軍"},{name:"#swallows",jpName:"#東京ヤクルトスワローズ"},{name:"#dragons",jpName:"#中日ドラゴンズ"},{name:"#bs2024",jpName:"#オリックス・バファローズ"},{name:"#chibalotte",jpName:"#千葉ロッテマリーンズ"},{name:"#sbhawks",jpName:"#福岡ソフトバンクホークス"},{name:"#rakuteneagles",jpName:"#東北楽天ゴールデンイーグルス"},{name:"#seibulions",jpName:"#埼玉西武ライオンズ"},{name:"#lovefighters",jpName:"#北海道日本ハムファイターズ"}],Ac=()=>({templateState:ke({msgs:{aa:vc,baseball:bc,baseballTeam:yc,ochikomu:_c},imgs:wc,songs:xc,hashtags:as})}),kc=()=>{const t=ke({tweet:"",tweetMsg:qt(()=>as.slice().map(a=>a.name).reduce((a,i)=>a.split(i).join(""),t.tweet.slice()).trim()),hashtags:[]}),e=(r,a)=>{t.tweet=`${r}
${a.join(`
`)}`},n=r=>{t.tweet=`${t.tweetMsg}${r}
${t.hashtags.join(`
`)}`};return fn(()=>t.hashtags,r=>{e(t.tweetMsg,r)}),{tweetState:t,updateTweet:e,addTweetMsg:n}},Oc=()=>{const t=ke({pictures:[],picturesUrl:qt(()=>t.pictures.reduce((i,o)=>`${i} ${o.msg}`,"")),movieObject:{},movieUrl:qt(()=>"url"in t.movieObject?t.movieObject.url:"")});return{mediaState:t,pushTweetPicture:i=>{if(t.pictures.length>=4){alert("送付画像の上限を越えています。");return}if(Object.keys(t.movieObject).length!==0){alert("応援歌が設定済みの時に、画像AAを使う事は出来ません。");return}const o=[...new Set([...t.pictures,i])];if(t.pictures.length+1!==o.length){alert("同じ画像を使う事は出来ません。");return}t.pictures.push(i)},removePicture:i=>{t.pictures.splice(i,1)},setMovie:i=>{if(Object.keys(t.pictures).length!==0){alert("画像AAを使用中の時に、応援歌を使う事は出来ません。");return}t.movieObject=i},removeMovie:()=>{t.movieObject={}}}},Je=t=>(No("data-v-0898885b"),t=t(),Mo(),t),Sc={class:"navbar header has-shadow",role:"navigation","aria-label":"main navigation"},Ec={class:"container"},Tc={class:"navbar-brand"},Cc=Je(()=>k("a",{class:"navbar-item",href:"https://ant2357.github.io/baseball-tweet/"},[k("span",{class:"title is-5 font-nicomoji has-text-white"},"野球用AAポスト画面")],-1)),Pc=Je(()=>k("span",null,null,-1)),Ic=Je(()=>k("span",null,null,-1)),Nc=Je(()=>k("span",null,null,-1)),Mc=[Pc,Ic,Nc],Lc={class:"navbar-end"},jc={class:"navbar-item header-item font-nicomoji header-color-accent",href:"https://ant2357.github.io/ant-blog/#/posts"},Rc=Je(()=>k("span",{class:"ml-1"},"Antのブログらしきもの",-1)),$c={class:"navbar-item header-item font-nicomoji",href:"https://github.com/Ant2357"},Fc=Je(()=>k("span",{class:"ml-1"},"GitHub",-1)),zc=br({__name:"TheHeader",setup(t){const e=ke({isOpen:!1}),n=r=>{e.isOpen=r};return(r,a)=>{const i=jo("font-awesome-icon");return yt(),xt("nav",Sc,[k("div",Ec,[k("div",Tc,[Cc,k("div",{class:bt(["navbar-burger header-burger-color",{"is-active":e.isOpen}]),"data-target":"navbar-menu",onClick:a[0]||(a[0]=o=>n(!e.isOpen))},Mc,2)]),k("div",{class:bt(["navbar-menu",{"is-active":e.isOpen}]),id:"navbar-menu"},[k("div",Lc,[k("a",jc,[ct(i,{icon:["fas","blog"]}),Rc]),k("a",$c,[ct(i,{icon:["fab","github"]}),Fc])])],2)])])}}}),Ma=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Dc=Ma(zc,[["__scopeId","data-v-0898885b"]]),Uc={},Bc=t=>(No("data-v-5bf47af4"),t=t(),Mo(),t),Hc={class:"footer has-text-white font-nicomoji"},Vc=Bc(()=>k("div",{class:"has-text-centered"},[k("p",null,[Ue(" © 2024 "),k("a",{href:"https://twitter.com/ant2357"},"ant2357")])],-1)),Yc=[Vc];function Kc(t,e){return yt(),xt("footer",Hc,Yc)}const Wc=Ma(Uc,[["render",Kc],["__scopeId","data-v-5bf47af4"]]),Gc={class:"buttons"},qc=["onClick"],Xc={class:"aa-pre"},Zc=br({__name:"AAButtons",props:{aas:{}},emits:["addAA"],setup(t,{emit:e}){const n=e;return(r,a)=>{const i=Ro("scroll-to");return yt(),xt("div",Gc,[(yt(!0),xt(It,null,on(r.aas,o=>ee((yt(),xt("button",{key:o.label,type:"button",class:"button is-small aa-button has-text-left",onClick:s=>n("addAA",o.msg)},[k("pre",Xc,"        『"+pe(o.label)+`』を追加
        `+pe(o.msg)+`
      `,1)],8,qc)),[[i,"#tweet-textarea"]])),128))])}}}),jn=Ma(Zc,[["__scopeId","data-v-3c19f9c4"]]),Qc={class:"container is-fluid my-3 px-4"},Jc={class:"columns"},tu={class:"column is-10 is-offset-1"},eu={class:"card"},nu={class:"card-content"},ru=k("span",{class:"title is-5 font-nicomoji"},"ハッシュタグ一覧",-1),au={class:"mb-3"},iu=["id","value"],ou=["for"],su={class:"field"},lu={class:"control"},fu=["rows"],cu={class:"field"},uu={class:"control"},du={class:"field"},mu={class:"control"},pu=["rows"],hu={class:"field"},gu={class:"control"},vu={class:"field"},bu={class:"tabs is-boxed"},yu={class:"font-nicomoji"},_u={class:"tab-contents"},wu={class:"columns is-multiline is-variable is-1"},xu={class:"card h-100"},Au={class:"card-image"},ku={class:"image is-marginless is-16by9"},Ou=["src"],Su={class:"card-content has-text-centered"},Eu=["onClick"],Tu={class:"buttons"},Cu=["onClick"],Pu={class:"field"},Iu=k("label",{for:"tweet-textarea",class:"label font-nicomoji"},"本文",-1),Nu={class:"control"},Mu=["rows"],Lu={class:"columns is-multiline is-variable is-1"},ju={class:"card h-100"},Ru={class:"card-image"},$u={class:"image is-marginless is-16by9"},Fu=["src"],zu={class:"card-content has-text-centered"},Du=["onClick"],Uu={class:"field"},Bu={class:"control"},Hu={class:"field mt-4 font-nicomoji"},Vu=k("span",{class:"ml-1"},"ポスト",-1),Yu=kf('<div class="mt-4"><div style="text-align:center;"><a href="https://baseball-data.com/"><img src="https://baseball-data.com/bp/st/header-bk.png" style="height:40px;border:0;margin:0;padding:0;" alt="プロ野球データFreak"></a><br><a href="https://baseball-data.com/team/ce.html"><img src="https://baseball-data.com/bp/st/bk-ce1.png" style="height:168px;border:0;margin:0;padding:0;" alt="セリーグ順位表"></a><br><a href="https://baseball-data.com/team/pa.html"><img src="https://baseball-data.com/bp/st/bk-paf1.png" style="height:187px;border:0;margin:0;padding:0;" alt="パリーグ順位表"></a></div></div>',1),Ku=br({__name:"App",setup(t){const e=ke({activeTab:"aa",borderText:"",tategakiText:""}),{templateState:n}=Ac(),{tweetState:r,updateTweet:a,addTweetMsg:i}=kc(),{mediaState:o,pushTweetPicture:s,removePicture:l,setMovie:c,removeMovie:d}=Oc(),m=(w,S,$)=>{const z=encodeURIComponent(`${w}${S} ${$}`);window.open(`https://twitter.com/intent/tweet?text=${z}`,"_blank")},y=w=>({"text-giants":w==="#読売巨人軍","text-baystars":w==="#横浜DeNAベイスターズ","text-tigers":w==="#阪神タイガース","text-carp":w==="#広島東洋カープ","text-dragons":w==="#中日ドラゴンズ","text-swallows":w==="#東京ヤクルトスワローズ","text-seibulions":w==="#埼玉西武ライオンズ","text-sbhawks":w==="#福岡ソフトバンクホークス","text-rakuteneagles":w==="#東北楽天ゴールデンイーグルス","text-chibalotte":w==="#千葉ロッテマリーンズ","text-fighters":w==="#北海道日本ハムファイターズ","text-bs":w==="#オリックス・バファローズ"});return(w,S)=>{const $=jo("font-awesome-icon"),z=Ro("scroll-to");return yt(),xt("div",null,[ct(Dc),k("div",Qc,[k("div",Jc,[k("div",tu,[k("div",eu,[k("div",nu,[k("form",{onSubmit:S[14]||(S[14]=fc(()=>{},["prevent"])),action:"https://twitter.com/intent/tweet",method:"get",target:"_blank"},[ru,k("div",au,[(yt(!0),xt(It,null,on(Y(n).hashtags,h=>(yt(),xt("div",{key:h.name,class:"field mb-0"},[ee(k("input",{type:"checkbox",id:h.name,value:h.name,"onUpdate:modelValue":S[0]||(S[0]=T=>Y(r).hashtags=T),class:"is-checkradio"},null,8,iu),[[ic,Y(r).hashtags]]),k("label",{for:h.name,class:bt(["font-nicomoji",y(h.jpName)])},pe(h.jpName),11,ou)]))),128))]),k("div",su,[k("div",lu,[ee(k("textarea",{"onUpdate:modelValue":S[1]||(S[1]=h=>e.borderText=h),rows:e.borderText.split(/\n/).length,class:"textarea",placeholder:"枠線AA"},null,8,fu),[[Rr,e.borderText]])])]),k("div",cu,[k("p",uu,[ee((yt(),xt("button",{class:"button is-success font-nicomoji",onClick:S[2]||(S[2]=h=>{Y(a)(`${Y(hc)(e.borderText)}
${Y(r).tweetMsg}`,Y(r).hashtags)})},[Ue(" 枠線AAを追加 ")])),[[z,"#tweet-textarea"]])])]),k("div",du,[k("div",mu,[ee(k("textarea",{"onUpdate:modelValue":S[3]||(S[3]=h=>e.tategakiText=h),rows:e.tategakiText.split(/\n/).length,class:"textarea",placeholder:"縦書き文章"},null,8,pu),[[Rr,e.tategakiText]])])]),k("div",hu,[k("p",gu,[ee((yt(),xt("button",{class:"button is-success font-nicomoji",onClick:S[4]||(S[4]=h=>Y(a)(`${Y(gc)(e.tategakiText)}
${Y(r).tweetMsg}`,Y(r).hashtags))},[Ue(" 文章を縦書きに変換 ")])),[[z,"#tweet-textarea"]])])]),k("div",vu,[k("div",bu,[k("ul",yu,[k("li",{class:bt({"is-active":e.activeTab==="aa"})},[k("a",{onClick:S[5]||(S[5]=h=>e.activeTab="aa")},"汎用AA")],2),k("li",{class:bt({"is-active":e.activeTab==="aaOchikomu"})},[k("a",{onClick:S[6]||(S[6]=h=>e.activeTab="aaOchikomu")},"落ち込むAA")],2),k("li",{class:bt({"is-active":e.activeTab==="aaBaseball"})},[k("a",{onClick:S[7]||(S[7]=h=>e.activeTab="aaBaseball")},"野球AA")],2),k("li",{class:bt({"is-active":e.activeTab==="aaBaseballTeam"})},[k("a",{onClick:S[8]||(S[8]=h=>e.activeTab="aaBaseballTeam")},"野球チームAA")],2),k("li",{class:bt({"is-active":e.activeTab==="pictures"})},[k("a",{onClick:S[9]||(S[9]=h=>e.activeTab="pictures")},"画像AA")],2),k("li",{class:bt({"is-active":e.activeTab==="songs"})},[k("a",{onClick:S[10]||(S[10]=h=>e.activeTab="songs")},"応援歌")],2)])]),k("div",_u,[k("div",{class:bt(["content",{"is-active":e.activeTab==="aa"}])},[ct(jn,{aas:Y(n).msgs.aa,onAddAA:Y(i)},null,8,["aas","onAddAA"])],2),k("div",{class:bt(["content",{"is-active":e.activeTab==="aaBaseball"}])},[ct(jn,{aas:Y(n).msgs.baseball,onAddAA:Y(i)},null,8,["aas","onAddAA"])],2),k("div",{class:bt(["content",{"is-active":e.activeTab==="aaBaseballTeam"}])},[ct(jn,{aas:Y(n).msgs.baseballTeam,onAddAA:Y(i)},null,8,["aas","onAddAA"])],2),k("div",{class:bt(["content",{"is-active":e.activeTab==="aaOchikomu"}])},[ct(jn,{aas:Y(n).msgs.ochikomu,onAddAA:Y(i)},null,8,["aas","onAddAA"])],2),k("div",{class:bt(["content",{"is-active":e.activeTab==="pictures"}])},[k("div",wu,[(yt(!0),xt(It,null,on(Y(n).imgs,h=>(yt(),xt("div",{key:h.label,class:"column is-3"},[k("div",xu,[k("div",Au,[k("figure",ku,[k("img",{src:h.url},null,8,Ou)])]),k("div",Su,[ee((yt(),xt("button",{type:"button",class:"button-outline",onClick:T=>Y(s)(h)},[Ue(pe(h.label)+"を追加 ",1)],8,Eu)),[[z,"#tweet-textarea"]])])])]))),128))])],2),k("div",{class:bt(["content",{"is-active":e.activeTab==="songs"}])},[k("div",Tu,[(yt(!0),xt(It,null,on(Y(n).songs,h=>ee((yt(),xt("button",{key:h.label,type:"button",class:"button is-small",onClick:T=>Y(c)(h)},[Ue(pe(h.label),1)],8,Cu)),[[z,"#tweet-textarea"]])),128))])],2)])]),k("div",Pu,[Iu,k("div",Nu,[ee(k("textarea",{"onUpdate:modelValue":S[11]||(S[11]=h=>Y(r).tweet=h),rows:Y(r).tweet.split(/\n/).length,id:"tweet-textarea",name:"text",class:"textarea",placeholder:"ポスト本文"},null,8,Mu),[[Rr,Y(r).tweet]])])]),k("div",Lu,[(yt(!0),xt(It,null,on(Y(o).pictures,(h,T)=>(yt(),xt("div",{key:T,class:"column is-3"},[k("div",ju,[k("div",Ru,[k("figure",$u,[k("img",{src:h.url},null,8,Fu)])]),k("div",zu,[k("button",{type:"button",class:"button-outline button-danger",onClick:N=>Y(l)(T)},pe(h.label)+"を削除 ",9,Du)])])]))),128))]),k("div",Uu,[k("div",Bu,[Object.keys(Y(o).movieObject).length!==0?(yt(),xt("button",{key:0,type:"button",class:"button-outline button-danger mt-2",onClick:S[12]||(S[12]=(...h)=>Y(d)&&Y(d)(...h))}," 応援歌『"+pe(Y(o).movieObject.label)+"』を削除 ",1)):Of("",!0)])]),k("div",Hu,[k("p",{class:bt({"has-text-danger":Y(r).tweet.length>280})},[k("span",null,"文字数: "+pe(Y(r).tweet.length),1)],2)]),k("button",{type:"button",class:"button is-dark font-nicomoji",onClick:S[13]||(S[13]=h=>m(Y(r).tweet,Y(o).picturesUrl,Y(o).movieUrl))},[ct($,{icon:["fab","x-twitter"]}),Vu])],32)])]),Yu])])]),ct(Wc)])}}});function Ci(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ci(Object(n),!0).forEach(function(r){wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ir(t){"@babel/helpers - typeof";return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(t)}function Wu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Gu(t,e,n){return e&&Pi(t.prototype,e),n&&Pi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function La(t,e){return Xu(t)||Qu(t,e)||is(t,e)||td()}function On(t){return qu(t)||Zu(t)||is(t)||Ju()}function qu(t){if(Array.isArray(t))return ra(t)}function Xu(t){if(Array.isArray(t))return t}function Zu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qu(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function is(t,e){if(t){if(typeof t=="string")return ra(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(t,e)}}function ra(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ju(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function td(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ii=function(){},ja={},os={},ss=null,ls={mark:Ii,measure:Ii};try{typeof window<"u"&&(ja=window),typeof document<"u"&&(os=document),typeof MutationObserver<"u"&&(ss=MutationObserver),typeof performance<"u"&&(ls=performance)}catch{}var ed=ja.navigator||{},Ni=ed.userAgent,Mi=Ni===void 0?"":Ni,we=ja,lt=os,Li=ss,Rn=ls;we.document;var le=!!lt.documentElement&&!!lt.head&&typeof lt.addEventListener=="function"&&typeof lt.createElement=="function",fs=~Mi.indexOf("MSIE")||~Mi.indexOf("Trident/"),$n,Fn,zn,Dn,Un,ae="___FONT_AWESOME___",aa=16,cs="fa",us="svg-inline--fa",$e="data-fa-i2svg",ia="data-fa-pseudo-element",nd="data-fa-pseudo-element-pending",Ra="data-prefix",$a="data-icon",ji="fontawesome-i2svg",rd="async",ad=["HTML","HEAD","STYLE","SCRIPT"],ds=function(){try{return!0}catch{return!1}}(),st="classic",ut="sharp",Fa=[st,ut];function Sn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[st]}})}var bn=Sn(($n={},wt($n,st,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),wt($n,ut,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$n)),yn=Sn((Fn={},wt(Fn,st,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),wt(Fn,ut,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Fn)),_n=Sn((zn={},wt(zn,st,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),wt(zn,ut,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),zn)),id=Sn((Dn={},wt(Dn,st,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),wt(Dn,ut,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Dn)),od=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ms="fa-layers-text",sd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ld=Sn((Un={},wt(Un,st,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),wt(Un,ut,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Un)),ps=[1,2,3,4,5,6,7,8,9,10],fd=ps.concat([11,12,13,14,15,16,17,18,19,20]),cd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wn=new Set;Object.keys(yn[st]).map(wn.add.bind(wn));Object.keys(yn[ut]).map(wn.add.bind(wn));var ud=[].concat(Fa,On(wn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ie.GROUP,Ie.SWAP_OPACITY,Ie.PRIMARY,Ie.SECONDARY]).concat(ps.map(function(t){return"".concat(t,"x")})).concat(fd.map(function(t){return"w-".concat(t)})),dn=we.FontAwesomeConfig||{};function dd(t){var e=lt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function md(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(lt&&typeof lt.querySelector=="function"){var pd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pd.forEach(function(t){var e=La(t,2),n=e[0],r=e[1],a=md(dd(n));a!=null&&(dn[r]=a)})}var hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:cs,replacementClass:us,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dn.familyPrefix&&(dn.cssPrefix=dn.familyPrefix);var Ze=P(P({},hs),dn);Ze.autoReplaceSvg||(Ze.observeMutations=!1);var I={};Object.keys(hs).forEach(function(t){Object.defineProperty(I,t,{enumerable:!0,set:function(n){Ze[t]=n,mn.forEach(function(r){return r(I)})},get:function(){return Ze[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){Ze.cssPrefix=e,mn.forEach(function(n){return n(I)})},get:function(){return Ze.cssPrefix}});we.FontAwesomeConfig=I;var mn=[];function hd(t){return mn.push(t),function(){mn.splice(mn.indexOf(t),1)}}var me=aa,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gd(t){if(!(!t||!le)){var e=lt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=lt.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return lt.head.insertBefore(e,r),t}}var vd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var t=12,e="";t-- >0;)e+=vd[Math.random()*62|0];return e}function tn(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function za(t){return t.classList?tn(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function gs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(gs(t[n]),'" ')},"").trim()}function kr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Da(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function yd(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function _d(t){var e=t.transform,n=t.width,r=n===void 0?aa:n,a=t.height,i=a===void 0?aa:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&fs?l+="translate(".concat(e.x/me-r/2,"em, ").concat(e.y/me-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/me,"em), calc(-50% + ").concat(e.y/me,"em)) "):l+="translate(".concat(e.x/me,"em, ").concat(e.y/me,"em) "),l+="scale(".concat(e.size/me*(e.flipX?-1:1),", ").concat(e.size/me*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vs(){var t=cs,e=us,n=I.cssPrefix,r=I.replacementClass,a=wd;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ri=!1;function $r(){I.autoAddCss&&!Ri&&(gd(vs()),Ri=!0)}var xd={mixout:function(){return{dom:{css:vs,insertCss:$r}}},hooks:function(){return{beforeDOMElementCreation:function(){$r()},beforeI2svg:function(){$r()}}}},ie=we||{};ie[ae]||(ie[ae]={});ie[ae].styles||(ie[ae].styles={});ie[ae].hooks||(ie[ae].hooks={});ie[ae].shims||(ie[ae].shims=[]);var Vt=ie[ae],bs=[],Ad=function t(){lt.removeEventListener("DOMContentLoaded",t),or=1,bs.map(function(e){return e()})},or=!1;le&&(or=(lt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(lt.readyState),or||lt.addEventListener("DOMContentLoaded",Ad));function kd(t){le&&(or?setTimeout(t,0):bs.push(t))}function En(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?gs(t):"<".concat(e," ").concat(bd(r),">").concat(i.map(En).join(""),"</").concat(e,">")}function $i(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Od=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},Fr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Od(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function Sd(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function oa(t){var e=Sd(t);return e.length===1?e[0].toString(16):null}function Ed(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Fi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function sa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Fi(e);typeof Vt.hooks.addPack=="function"&&!a?Vt.hooks.addPack(t,Fi(e)):Vt.styles[t]=P(P({},Vt.styles[t]||{}),i),t==="fas"&&sa("fa",e)}var Bn,Hn,Vn,Be=Vt.styles,Td=Vt.shims,Cd=(Bn={},wt(Bn,st,Object.values(_n[st])),wt(Bn,ut,Object.values(_n[ut])),Bn),Ua=null,ys={},_s={},ws={},xs={},As={},Pd=(Hn={},wt(Hn,st,Object.keys(bn[st])),wt(Hn,ut,Object.keys(bn[ut])),Hn);function Id(t){return~ud.indexOf(t)}function Nd(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Id(a)?a:null}var ks=function(){var e=function(i){return Fr(Be,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};ys=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),_s=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),As=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Be||I.autoFetchSvg,r=Fr(Td,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ws=r.names,xs=r.unicodes,Ua=Or(I.styleDefault,{family:I.familyDefault})};hd(function(t){Ua=Or(t.styleDefault,{family:I.familyDefault})});ks();function Ba(t,e){return(ys[t]||{})[e]}function Md(t,e){return(_s[t]||{})[e]}function Ne(t,e){return(As[t]||{})[e]}function Os(t){return ws[t]||{prefix:null,iconName:null}}function Ld(t){var e=xs[t],n=Ba("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xe(){return Ua}var Ha=function(){return{prefix:null,iconName:null,rest:[]}};function Or(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?st:n,a=bn[r][t],i=yn[r][t]||yn[r][a],o=t in Vt.styles?t:null;return i||o||null}var zi=(Vn={},wt(Vn,st,Object.keys(_n[st])),wt(Vn,ut,Object.keys(_n[ut])),Vn);function Sr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},wt(e,st,"".concat(I.cssPrefix,"-").concat(st)),wt(e,ut,"".concat(I.cssPrefix,"-").concat(ut)),e),o=null,s=st;(t.includes(i[st])||t.some(function(c){return zi[st].includes(c)}))&&(s=st),(t.includes(i[ut])||t.some(function(c){return zi[ut].includes(c)}))&&(s=ut);var l=t.reduce(function(c,d){var m=Nd(I.cssPrefix,d);if(Be[d]?(d=Cd[s].includes(d)?id[s][d]:d,o=d,c.prefix=d):Pd[s].indexOf(d)>-1?(o=d,c.prefix=Or(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[st]&&d!==i[ut]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var y=o==="fa"?Os(c.iconName):{},w=Ne(c.prefix,c.iconName);y.prefix&&(o=null),c.iconName=y.iconName||w||c.iconName,c.prefix=y.prefix||c.prefix,c.prefix==="far"&&!Be.far&&Be.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},Ha());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ut&&(Be.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ne(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=xe()||"fas"),l}var jd=function(){function t(){Wu(this,t),this.definitions={}}return Gu(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),sa(s,o[s]);var l=_n[st][s];l&&sa(l,o[s]),ks()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Di=[],He={},qe={},Rd=Object.keys(qe);function $d(t,e){var n=e.mixoutsTo;return Di=t,He={},Object.keys(qe).forEach(function(r){Rd.indexOf(r)===-1&&delete qe[r]}),Di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ir(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){He[o]||(He[o]=[]),He[o].push(i[o])})}r.provides&&r.provides(qe)}),n}function la(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=He[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Fe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=He[t]||[];a.forEach(function(i){i.apply(null,n)})}function oe(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return qe[t]?qe[t].apply(null,e):void 0}function fa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xe();if(e)return e=Ne(n,e)||e,$i(Ss.definitions,n,e)||$i(Vt.styles,n,e)}var Ss=new jd,Fd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Fe("noAuto")},zd={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return le?(Fe("beforeI2svg",e),oe("pseudoElements2svg",e),oe("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,kd(function(){Ud({autoReplaceSvgRoot:n}),Fe("watch",e)})}},Dd={icon:function(e){if(e===null)return null;if(ir(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ne(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Or(e[0]);return{prefix:r,iconName:Ne(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(I.cssPrefix,"-"))>-1||e.match(od))){var a=Sr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||xe(),iconName:Ne(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=xe();return{prefix:i,iconName:Ne(i,e)||e}}}},Ft={noAuto:Fd,config:I,dom:zd,parse:Dd,library:Ss,findIconDefinition:fa,toHtml:En},Ud=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?lt:n;(Object.keys(Vt.styles).length>0||I.autoFetchSvg)&&le&&I.autoReplaceSvg&&Ft.dom.i2svg({node:r})};function Er(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return En(r)})}}),Object.defineProperty(t,"node",{get:function(){if(le){var r=lt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Bd(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Da(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=kr(P(P({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Hd(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function Va(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,y=t.watchable,w=y===void 0?!1:y,S=r.found?r:n,$=S.width,z=S.height,h=a==="fak",T=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(et){return m.classes.indexOf(et)===-1}).filter(function(et){return et!==""||!!et}).concat(m.classes).join(" "),N={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(z)})},B=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/z*16*.0625,"em")}:{};w&&(N.attributes[$e]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||xn())},children:[l]}),delete N.attributes.title);var K=P(P({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P(P({},B),m.styles)}),U=r.found&&n.found?oe("generateAbstractMask",K)||{children:[],attributes:{}}:oe("generateAbstractIcon",K)||{children:[],attributes:{}},Z=U.children,At=U.attributes;return K.children=Z,K.attributes=At,s?Hd(K):Bd(K)}function Ui(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[$e]="");var d=P({},o.styles);Da(a)&&(d.transform=_d({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=kr(d);m.length>0&&(c.style=m);var y=[];return y.push({tag:"span",attributes:c,children:[e]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Vd(t){var e=t.content,n=t.title,r=t.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=kr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=Vt.styles;function ca(t){var e=t[0],n=t[1],r=t.slice(4),a=La(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Yd={found:!1,width:512,height:512};function Kd(t,e){!ds&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ua(t,e){var n=e;return e==="fa"&&I.styleDefault!==null&&(e=xe()),new Promise(function(r,a){if(oe("missingIconAbstract"),n==="fa"){var i=Os(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&zr[e]&&zr[e][t]){var o=zr[e][t];return r(ca(o))}Kd(t,e),r(P(P({},Yd),{},{icon:I.showMissingIcons&&t?oe("missingIconAbstract")||{}:{}}))})}var Bi=function(){},da=I.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:Bi,measure:Bi},ln='FA "6.5.1"',Wd=function(e){return da.mark("".concat(ln," ").concat(e," begins")),function(){return Es(e)}},Es=function(e){da.mark("".concat(ln," ").concat(e," ends")),da.measure("".concat(ln," ").concat(e),"".concat(ln," ").concat(e," begins"),"".concat(ln," ").concat(e," ends"))},Ya={begin:Wd,end:Es},Zn=function(){};function Hi(t){var e=t.getAttribute?t.getAttribute($e):null;return typeof e=="string"}function Gd(t){var e=t.getAttribute?t.getAttribute(Ra):null,n=t.getAttribute?t.getAttribute($a):null;return e&&n}function qd(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function Xd(){if(I.autoReplaceSvg===!0)return Qn.replace;var t=Qn[I.autoReplaceSvg];return t||Qn.replace}function Zd(t){return lt.createElementNS("http://www.w3.org/2000/svg",t)}function Qd(t){return lt.createElement(t)}function Ts(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Zd:Qd:n;if(typeof t=="string")return lt.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Ts(o,{ceFn:r}))}),a}function Jd(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Ts(a),n)}),n.getAttribute($e)===null&&I.keepOriginalSource){var r=lt.createComment(Jd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~za(n).indexOf(I.replacementClass))return Qn.replace(e);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return En(s)}).join(`
`);n.setAttribute($e,""),n.innerHTML=o}};function Vi(t){t()}function Cs(t,e){var n=typeof e=="function"?e:Zn;if(t.length===0)n();else{var r=Vi;I.mutateApproach===rd&&(r=we.requestAnimationFrame||Vi),r(function(){var a=Xd(),i=Ya.begin("mutate");t.map(a),i(),n()})}}var Ka=!1;function Ps(){Ka=!0}function ma(){Ka=!1}var sr=null;function Yi(t){if(Li&&I.observeMutations){var e=t.treeCallback,n=e===void 0?Zn:e,r=t.nodeCallback,a=r===void 0?Zn:r,i=t.pseudoElementsCallback,o=i===void 0?Zn:i,s=t.observeMutationsRoot,l=s===void 0?lt:s;sr=new Li(function(c){if(!Ka){var d=xe();tn(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Hi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Hi(m.target)&&~cd.indexOf(m.attributeName))if(m.attributeName==="class"&&Gd(m.target)){var y=Sr(za(m.target)),w=y.prefix,S=y.iconName;m.target.setAttribute(Ra,w||d),S&&m.target.setAttribute($a,S)}else qd(m.target)&&a(m.target)})}}),le&&sr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tm(){sr&&sr.disconnect()}function em(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function nm(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Sr(za(t));return a.prefix||(a.prefix=xe()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Md(a.prefix,t.innerText)||Ba(a.prefix,oa(t.innerText))),!a.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function rm(t){var e=tn(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||xn()):(e["aria-hidden"]="true",e.focusable="false")),e}function am(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ki(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nm(t),r=n.iconName,a=n.prefix,i=n.rest,o=rm(t),s=la("parseNodeAttributes",{},t),l=e.styleParser?em(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var im=Vt.styles;function Is(t){var e=I.autoReplaceSvg==="nest"?Ki(t,{styleParser:!1}):Ki(t);return~e.extra.classes.indexOf(ms)?oe("generateLayersText",t,e):oe("generateSvgReplacementMutation",t,e)}var Ae=new Set;Fa.map(function(t){Ae.add("fa-".concat(t))});Object.keys(bn[st]).map(Ae.add.bind(Ae));Object.keys(bn[ut]).map(Ae.add.bind(Ae));Ae=On(Ae);function Wi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!le)return Promise.resolve();var n=lt.documentElement.classList,r=function(m){return n.add("".concat(ji,"-").concat(m))},a=function(m){return n.remove("".concat(ji,"-").concat(m))},i=I.autoFetchSvg?Ae:Fa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(im));i.includes("fa")||i.push("fa");var o=[".".concat(ms,":not([").concat($e,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat($e,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tn(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ya.begin("onTree"),c=s.reduce(function(d,m){try{var y=Is(m);y&&d.push(y)}catch(w){ds||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(y){Cs(y,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(y){l(),m(y)})})}function om(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Is(t).then(function(n){n&&Cs([n],e)})}function sm(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:fa(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fa(a||{})),t(r,P(P({},n),{},{mask:a}))}}var lm=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Zt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,y=m===void 0?null:m,w=n.titleId,S=w===void 0?null:w,$=n.classes,z=$===void 0?[]:$,h=n.attributes,T=h===void 0?{}:h,N=n.styles,B=N===void 0?{}:N;if(e){var K=e.prefix,U=e.iconName,Z=e.icon;return Er(P({type:"icon"},e),function(){return Fe("beforeDOMElementCreation",{iconDefinition:e,params:n}),I.autoA11y&&(y?T["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(S||xn()):(T["aria-hidden"]="true",T.focusable="false")),Va({icons:{main:ca(Z),mask:l?ca(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:U,transform:P(P({},Zt),a),symbol:o,title:y,maskId:d,titleId:S,extra:{attributes:T,styles:B,classes:z}})})}},fm={mixout:function(){return{icon:sm(lm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wi,n.nodeCallback=om,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?lt:r,i=n.callback,o=i===void 0?function(){}:i;return Wi(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,y=r.extra;return new Promise(function(w,S){Promise.all([ua(a,s),d.iconName?ua(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var z=La($,2),h=z[0],T=z[1];w([n,Va({icons:{main:h,mask:T},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:y,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=kr(s);l.length>0&&(a.style=l);var c;return Da(o)&&(c=oe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},cm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Er({type:"layer"},function(){Fe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(On(i)).join(" ")},children:o}]})}}}},um={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Er({type:"counter",content:n},function(){return Fe("beforeDOMElementCreation",{content:n,params:r}),Vd({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(On(s))}})})}}}},dm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Zt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,y=r.styles,w=y===void 0?{}:y;return Er({type:"text",content:n},function(){return Fe("beforeDOMElementCreation",{content:n,params:r}),Ui({content:n,transform:P(P({},Zt),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(I.cssPrefix,"-layers-text")].concat(On(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(fs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ui({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},mm=new RegExp('"',"ug"),Gi=[1105920,1112319];function pm(t){var e=t.replace(mm,""),n=Ed(e,0),r=n>=Gi[0]&&n<=Gi[1],a=e.length===2?e[0]===e[1]:!1;return{value:oa(a?e[0]:e),isSecondary:r||a}}function qi(t,e){var n="".concat(nd).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=tn(t.children),o=i.filter(function(Z){return Z.getAttribute(ia)===e})[0],s=we.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(sd),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),y=~["Sharp"].indexOf(l[2])?ut:st,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yn[y][l[2].toLowerCase()]:ld[y][c],S=pm(m),$=S.value,z=S.isSecondary,h=l[0].startsWith("FontAwesome"),T=Ba(w,$),N=T;if(h){var B=Ld($);B.iconName&&B.prefix&&(T=B.iconName,w=B.prefix)}if(T&&!z&&(!o||o.getAttribute(Ra)!==w||o.getAttribute($a)!==N)){t.setAttribute(n,N),o&&t.removeChild(o);var K=am(),U=K.extra;U.attributes[ia]=e,ua(T,w).then(function(Z){var At=Va(P(P({},K),{},{icons:{main:Z,mask:Ha()},prefix:w,iconName:N,extra:U,watchable:!0})),et=lt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(et,t.firstChild):t.appendChild(et),et.outerHTML=At.map(function(zt){return En(zt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function hm(t){return Promise.all([qi(t,"::before"),qi(t,"::after")])}function gm(t){return t.parentNode!==document.head&&!~ad.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ia)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xi(t){if(le)return new Promise(function(e,n){var r=tn(t.querySelectorAll("*")).filter(gm).map(hm),a=Ya.begin("searchPseudoElements");Ps(),Promise.all(r).then(function(){a(),ma(),e()}).catch(function(){a(),ma(),n()})})}var vm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?lt:r;I.searchPseudoElements&&Xi(a)}}},Zi=!1,bm={mixout:function(){return{dom:{unwatch:function(){Ps(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){Yi(la("mutationObserverCallbacks",{}))},noAuto:function(){tm()},watch:function(n){var r=n.observeMutationsRoot;Zi?ma():Yi(la("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ym={mixout:function(){return{parse:{transform:function(n){return Qi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Qi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},y={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:y};return{tag:"g",attributes:P({},w.outer),children:[{tag:"g",attributes:P({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),w.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function Ji(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _m(t){return t.tag==="g"?t.children:[t]}var wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Sr(a.split(" ").map(function(o){return o.trim()})):Ha();return i.prefix||(i.prefix=xe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,y=o.icon,w=yd({transform:l,containerWidth:m,iconWidth:c}),S={tag:"rect",attributes:P(P({},Dr),{},{fill:"white"})},$=d.children?{children:d.children.map(Ji)}:{},z={tag:"g",attributes:P({},w.inner),children:[Ji(P({tag:d.tag,attributes:P(P({},d.attributes),w.path)},$))]},h={tag:"g",attributes:P({},w.outer),children:[z]},T="mask-".concat(s||xn()),N="clip-".concat(s||xn()),B={tag:"mask",attributes:P(P({},Dr),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,h]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:_m(y)},B]};return r.push(K,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(T,")")},Dr)}),{children:r,attributes:a}}}},xm={provides:function(e){var n=!1;we.matchMedia&&(n=we.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Am={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},km=[xd,fm,cm,um,dm,vm,bm,ym,wm,xm,Am];$d(km,{mixoutsTo:Ft});Ft.noAuto;Ft.config;var Om=Ft.library;Ft.dom;var pa=Ft.parse;Ft.findIconDefinition;Ft.toHtml;var Sm=Ft.icon;Ft.layer;Ft.text;Ft.counter;var Em={prefix:"fas",iconName:"blog",icon:[512,512,[],"f781","M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"]},Tm={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Cm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function to(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function ne(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?to(Object(n),!0).forEach(function(r){Ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lr(t){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lr(t)}function Ct(t,e,n){return e=Mm(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pm(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Im(t,e){if(t==null)return{};var n=Pm(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Nm(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Mm(t){var e=Nm(t,"string");return typeof e=="symbol"?e:String(e)}var Lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ns={exports:{}};(function(t){(function(e){var n=function(h,T,N){if(!c(T)||m(T)||y(T)||w(T)||l(T))return T;var B,K=0,U=0;if(d(T))for(B=[],U=T.length;K<U;K++)B.push(n(h,T[K],N));else{B={};for(var Z in T)Object.prototype.hasOwnProperty.call(T,Z)&&(B[h(Z,N)]=n(h,T[Z],N))}return B},r=function(h,T){T=T||{};var N=T.separator||"_",B=T.split||/(?=[A-Z])/;return h.split(B).join(N)},a=function(h){return S(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(T,N){return N?N.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var T=a(h);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(h,T){return r(h,T).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},d=function(h){return s.call(h)=="[object Array]"},m=function(h){return s.call(h)=="[object Date]"},y=function(h){return s.call(h)=="[object RegExp]"},w=function(h){return s.call(h)=="[object Boolean]"},S=function(h){return h=h-0,h===h},$=function(h,T){var N=T&&"process"in T?T.process:T;return typeof N!="function"?h:function(B,K){return N(B,h,K)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(h,T){return n($(a,T),h)},decamelizeKeys:function(h,T){return n($(o,T),h,T)},pascalizeKeys:function(h,T){return n($(i,T),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=z:e.humps=z})(Lm)})(Ns);var jm=Ns.exports,Rm=["class","style"];function $m(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=jm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Fm(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ms(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ms(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=Fm(d);break;case"style":l.style=$m(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Im(n,Rm);return Rf(t.tag,ne(ne(ne({},e),{},{class:a.class,style:ne(ne({},a.style),o)},a.attrs),s),r)}var Ls=!1;try{Ls=!0}catch{}function zm(){if(!Ls&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ur(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ct({},t,e):{}}function Dm(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ct(e,"fa-".concat(t.size),t.size!==null),Ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ct(e,"fa-pull-".concat(t.pull),t.pull!==null),Ct(e,"fa-swap-opacity",t.swapOpacity),Ct(e,"fa-bounce",t.bounce),Ct(e,"fa-shake",t.shake),Ct(e,"fa-beat",t.beat),Ct(e,"fa-fade",t.fade),Ct(e,"fa-beat-fade",t.beatFade),Ct(e,"fa-flash",t.flash),Ct(e,"fa-spin-pulse",t.spinPulse),Ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function eo(t){if(t&&lr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(pa.icon)return pa.icon(t);if(t===null)return null;if(lr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Um=br({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=qt(function(){return eo(e.icon)}),i=qt(function(){return Ur("classes",Dm(e))}),o=qt(function(){return Ur("transform",typeof e.transform=="string"?pa.transform(e.transform):e.transform)}),s=qt(function(){return Ur("mask",eo(e.mask))}),l=qt(function(){return Sm(a.value,ne(ne(ne(ne({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});fn(l,function(d){if(!d)return zm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=qt(function(){return l.value?Ms(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var js={exports:{}};/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */(function(t,e){(function(n,r){t.exports=r()})(Bm,function(){function n(L){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(g){return typeof g}:n=function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},n(L)}function r(){return r=Object.assign||function(L){for(var g=1;g<arguments.length;g++){var j=arguments[g];for(var X in j)Object.prototype.hasOwnProperty.call(j,X)&&(L[X]=j[X])}return L},r.apply(this,arguments)}var a=4,i=.001,o=1e-7,s=10,l=11,c=1/(l-1),d=typeof Float32Array=="function";function m(L,g){return 1-3*g+3*L}function y(L,g){return 3*g-6*L}function w(L){return 3*L}function S(L,g,j){return((m(g,j)*L+y(g,j))*L+w(g))*L}function $(L,g,j){return 3*m(g,j)*L*L+2*y(g,j)*L+w(g)}function z(L,g,j,X,dt){var J,it,Kt=0;do it=g+(j-g)/2,J=S(it,X,dt)-L,J>0?j=it:g=it;while(Math.abs(J)>o&&++Kt<s);return it}function h(L,g,j,X){for(var dt=0;dt<a;++dt){var J=$(g,j,X);if(J===0)return g;var it=S(g,j,X)-L;g-=it/J}return g}function T(L){return L}var N=function(g,j,X,dt){if(!(0<=g&&g<=1&&0<=X&&X<=1))throw new Error("bezier x values must be in [0, 1] range");if(g===j&&X===dt)return T;for(var J=d?new Float32Array(l):new Array(l),it=0;it<l;++it)J[it]=S(it*c,g,X);function Kt(Ut){for(var gt=0,vt=1,Jt=l-1;vt!==Jt&&J[vt]<=Ut;++vt)gt+=c;--vt;var f=(Ut-J[vt])/(J[vt+1]-J[vt]),u=gt+f*c,p=$(u,g,X);return p>=i?h(Ut,u,g,X):p===0?u:z(Ut,gt,gt+c,g,X)}return function(gt){return gt===0?0:gt===1?1:S(Kt(gt),j,dt)}},B={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},K=!1;try{var U=Object.defineProperty({},"passive",{get:function(){K=!0}});window.addEventListener("test",null,U)}catch{}var Z={$:function(g){return typeof g!="string"?g:document.querySelector(g)},on:function(g,j,X){var dt=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{passive:!1};j instanceof Array||(j=[j]);for(var J=0;J<j.length;J++)g.addEventListener(j[J],X,K?dt:!1)},off:function(g,j,X){j instanceof Array||(j=[j]);for(var dt=0;dt<j.length;dt++)g.removeEventListener(j[dt],X)},cumulativeOffset:function(g){var j=0,X=0;do j+=g.offsetTop||0,X+=g.offsetLeft||0,g=g.offsetParent;while(g);return{top:j,left:X}}},At=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],et={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function zt(L){et=r({},et,L)}var fe=function(){var g,j,X,dt,J,it,Kt,Ut,gt,vt,Jt,f,u,p,v,b,A,E,x,O,_,C,R,M=function(pt){Ut&&(R=pt,O=!0)},D,V,q,Q;function mt(nt){var pt=nt.scrollTop;return nt.tagName.toLowerCase()==="body"&&(pt=pt||document.documentElement.scrollTop),pt}function Rt(nt){var pt=nt.scrollLeft;return nt.tagName.toLowerCase()==="body"&&(pt=pt||document.documentElement.scrollLeft),pt}function te(){_=Z.cumulativeOffset(j),C=Z.cumulativeOffset(g),f&&(v=C.left-_.left+it,E=v-p),u&&(A=C.top-_.top+it,x=A-b)}function nn(nt){if(O)return ue();V||(V=nt),J||te(),q=nt-V,Q=Math.min(q/X,1),Q=D(Q),rn(j,b+x*Q,p+E*Q),q<X?window.requestAnimationFrame(nn):ue()}function ue(){O||rn(j,A,v),V=!1,Z.off(j,At,M),O&&Jt&&Jt(R,g),!O&&vt&&vt(g)}function rn(nt,pt,ft){u&&(nt.scrollTop=pt),f&&(nt.scrollLeft=ft),nt.tagName.toLowerCase()==="body"&&(u&&(document.documentElement.scrollTop=pt),f&&(document.documentElement.scrollLeft=ft))}function Et(nt,pt){var ft=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n(pt)==="object"?ft=pt:typeof pt=="number"&&(ft.duration=pt),g=Z.$(nt),!g)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+nt);if(j=Z.$(ft.container||et.container),X=ft.hasOwnProperty("duration")?ft.duration:et.duration,J=ft.hasOwnProperty("lazy")?ft.lazy:et.lazy,dt=ft.easing||et.easing,it=ft.hasOwnProperty("offset")?ft.offset:et.offset,Kt=ft.hasOwnProperty("force")?ft.force!==!1:et.force,Ut=ft.hasOwnProperty("cancelable")?ft.cancelable!==!1:et.cancelable,gt=ft.onStart||et.onStart,vt=ft.onDone||et.onDone,Jt=ft.onCancel||et.onCancel,f=ft.x===void 0?et.x:ft.x,u=ft.y===void 0?et.y:ft.y,typeof it=="function"&&(it=it(g,j)),p=Rt(j),b=mt(j),te(),O=!1,!Kt){var Rs=j.tagName.toLowerCase()==="body"?document.documentElement.clientHeight||window.innerHeight:j.offsetHeight,Wa=b,$s=Wa+Rs,Ga=A-it,Fs=Ga+g.offsetHeight;if(Ga>=Wa&&Fs<=$s){vt&&vt(g);return}}if(gt&&gt(g),!x&&!E){vt&&vt(g);return}return typeof dt=="string"&&(dt=B[dt]||B.ease),D=N.apply(N,dt),Z.on(j,At,M,{passive:!0}),window.requestAnimationFrame(nn),function(){R=null,O=!0}}return Et},ce=fe(),Lt=[];function en(L){for(var g=0;g<Lt.length;++g)if(Lt[g].el===L)return Lt.splice(g,1),!0;return!1}function Tn(L){for(var g=0;g<Lt.length;++g)if(Lt[g].el===L)return Lt[g]}function ht(L){var g=Tn(L);return g||(Lt.push(g={el:L,binding:{}}),g)}function rt(L){var g=ht(this).binding;if(g.value){if(L.preventDefault(),typeof g.value=="string")return ce(g.value);ce(g.value.el||g.value.element,g.value)}}var W={bind:function(g,j){ht(g).binding=j,Z.on(g,"click",rt)},unbind:function(g){en(g),Z.off(g,"click",rt)},update:function(g,j){ht(g).binding=j}},jt={bind:W.bind,unbind:W.unbind,update:W.update,beforeMount:W.bind,unmounted:W.unbind,updated:W.update,scrollTo:ce,bindings:Lt},Oe=function(g,j){j&&zt(j),g.directive("scroll-to",jt);var X=g.config.globalProperties||g.prototype;X.$scrollTo=jt.scrollTo};return typeof window<"u"&&window.Vue&&(window.VueScrollTo=jt,window.VueScrollTo.setDefaults=zt,window.VueScrollTo.scroller=fe,window.Vue.use&&window.Vue.use(Oe)),jt.install=Oe,jt})})(js);var Vm=js.exports;const Ym=Hm(Vm);Om.add(Em,Tm,Cm);dc(Ku).use(Ym).component("font-awesome-icon",Um).mount("#app");
