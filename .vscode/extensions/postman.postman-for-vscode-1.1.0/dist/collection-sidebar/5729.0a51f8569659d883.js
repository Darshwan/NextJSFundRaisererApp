"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[5729],{15729:(t,e,r)=>{function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[Z]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===et}(t)||Array.isArray(t)||!!t[Y]||!!t.constructor[Y]||h(t)||v(t))}function u(t){return o(t)||n(23,t),t[Z].t}function a(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:rt)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[Z];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:h(t)?2:v(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function h(t){return H&&t instanceof Map}function v(t){return L&&t instanceof Set}function y(t){return t.o||t.t}function d(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=nt(t);delete e[Z];for(var r=rt(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function g(t,e){return void 0===e&&(e=!1),P(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&a(t,(function(t,e){return g(e,!0)}),!0)),t}function b(){n(2)}function P(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=ot[t];return e||n(18,t),e}function O(t,e){ot[t]||(ot[t]=e)}function w(){return B}function A(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){D(t),t.p.forEach(k),t.p=null}function D(t){t===B&&(B=t.l)}function S(t){return B={p:[],l:B,h:t,m:!0,_:0}}function k(t){var e=t[Z];0===e.i||1===e.i?e.j():e.O=!0}function _(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||m("ES5").S(e,t,o),o?(r[Z].P&&(j(e),n(4)),i(t)&&(t=E(e,t),e.l||M(e,t)),e.u&&m("Patches").M(r[Z],t,e.u,e.s)):t=E(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==V?t:void 0}function E(t,e,r){if(P(e))return e;var n=e[Z];if(!n)return a(e,(function(o,i){return x(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return M(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k):n.o;a(3===n.i?new Set(o):o,(function(e,i){return x(t,n,o,e,i,r)})),M(t,o,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function x(t,e,r,n,u,a){if(o(u)){var c=E(t,u,a&&e&&3!==e.i&&!f(e.D,n)?a.concat(n):void 0);if(l(r,n,c),!o(c))return;t.m=!1}if(i(u)&&!P(u)){if(!t.h.F&&t._<1)return;E(t,u),e&&e.A.l||M(t,u)}}function M(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&g(e,r)}function z(t,e){var r=t[Z];return(r?y(r):t)[e]}function F(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function I(t){t.P||(t.P=!0,t.l&&I(t.l))}function R(t){t.o||(t.o=d(t.t))}function C(t,e,r){var n=h(e)?m("MapSet").N(e,r):v(e)?m("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t,k:null,o:null,j:null,C:!1},o=n,i=it;r&&(o=[n],i=ut);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(e,r):m("ES5").J(e,r);return(r?r.A:w()).p.push(n),n}function K(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[Z],o=c(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=N(e,o),n.I=!1}else r=N(e,o);return a(r,(function(e,o){n&&s(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function N(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return d(t)}function W(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[Z];return it.get(e,t)},set:function(e){var r=this[Z];it.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][Z];if(!o.P)switch(o.i){case 5:n(o)&&I(o);break;case 4:r(o)&&I(o)}}}function r(t){for(var e=t.t,r=t.k,n=rt(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Z){var u=e[i];if(void 0===u&&!f(e,i))return!0;var a=r[i],c=a&&a[Z];if(c?c.t!==u:!p(a,u))return!0}}var s=!!e[Z];return n.length!==rt(e).length+(s?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!r||r.get)}var i={};O("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=nt(r);delete i[Z];for(var u=rt(i),a=0;a<u.length;a++){var c=u[a];i[c]=t(c,e||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:w(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Z,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[Z].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[Z];if(r){var o=r.t,i=r.k,u=r.D,c=r.i;if(4===c)a(i,(function(e){e!==Z&&(void 0!==o[e]||f(o,e)?u[e]||t(i[e]):(u[e]=!0,I(r)))})),a(o,(function(t){void 0!==i[t]||f(i,t)||(u[t]=!1,I(r))}));else if(5===c){if(n(r)&&(I(r),u.length=!0),i.length<o.length)for(var s=i.length;s<o.length;s++)u[s]=!1;else for(var l=o.length;l<i.length;l++)u[l]=!0;for(var p=Math.min(i.length,o.length),h=0;h<p;h++)void 0===u[h]&&t(i[h])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}function U(){function t(e){if(!i(e))return e;if(Array.isArray(e))return e.map(t);if(h(e))return new Map(Array.from(e.entries()).map((function(e){return[e[0],t(e[1])]})));if(v(e))return new Set(Array.from(e).map(t));var r=Object.create(Object.getPrototypeOf(e));for(var n in e)r[n]=t(e[n]);return f(e,Y)&&(r[Y]=e[Y]),r}function e(e){return o(e)?t(e):e}var r="add";O("Patches",{$:function(e,o){return o.forEach((function(o){for(var i=o.path,u=o.op,a=e,f=0;f<i.length-1;f++){var l=c(a),p=""+i[f];0!==l&&1!==l||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof a&&"prototype"===p&&n(24),"object"!=typeof(a=s(a,p))&&n(15,i.join("/"))}var h=c(a),v=t(o.value),y=i[i.length-1];switch(u){case"replace":switch(h){case 2:return a.set(y,v);case 3:n(16);default:return a[y]=v}case r:switch(h){case 1:return a.splice(y,0,v);case 2:return a.set(y,v);case 3:return a.add(v);default:return a[y]=v}case"remove":switch(h){case 1:return a.splice(y,1);case 2:return a.delete(y);case 3:return a.delete(o.value);default:return delete a[y]}default:n(17,u)}})),e},R:function(t,n,o,i){switch(t.i){case 0:case 4:case 2:return function(t,n,o,i){var u=t.t,c=t.o;a(t.D,(function(t,a){var l=s(u,t),p=s(c,t),h=a?f(u,t)?"replace":r:"remove";if(l!==p||"replace"!==h){var v=n.concat(t);o.push("remove"===h?{op:h,path:v}:{op:h,path:v,value:p}),i.push(h===r?{op:"remove",path:v}:"remove"===h?{op:r,path:v,value:e(l)}:{op:"replace",path:v,value:e(l)})}}))}(t,n,o,i);case 5:case 1:return function(t,n,o,i){var u=t.t,a=t.D,c=t.o;if(c.length<u.length){var f=[c,u];u=f[0],c=f[1];var s=[i,o];o=s[0],i=s[1]}for(var l=0;l<u.length;l++)if(a[l]&&c[l]!==u[l]){var p=n.concat([l]);o.push({op:"replace",path:p,value:e(c[l])}),i.push({op:"replace",path:p,value:e(u[l])})}for(var h=u.length;h<c.length;h++){var v=n.concat([h]);o.push({op:r,path:v,value:e(c[h])})}u.length<c.length&&i.push({op:"replace",path:n.concat(["length"]),value:u.length})}(t,n,o,i);case 3:return function(t,e,n,o){var i=t.t,u=t.o,a=0;i.forEach((function(t){if(!u.has(t)){var i=e.concat([a]);n.push({op:"remove",path:i,value:t}),o.unshift({op:r,path:i,value:t})}a++})),a=0,u.forEach((function(t){if(!i.has(t)){var u=e.concat([a]);n.push({op:r,path:u,value:t}),o.unshift({op:"remove",path:u,value:t})}a++}))}(t,n,o,i)}},M:function(t,e,r,n){r.push({op:"replace",path:[],value:e===V?void 0:e}),n.push({op:"replace",path:[],value:t.t})}})}function $(){function t(t,e){function r(){this.constructor=t}u(t,e),t.prototype=(r.prototype=e.prototype,new r)}function e(t){t.o||(t.D=new Map,t.o=new Map(t.t))}function r(t){t.o||(t.o=new Set,t.t.forEach((function(e){if(i(e)){var r=C(t.A.h,e,t);t.p.set(e,r),t.o.add(r)}else t.o.add(e)})))}function o(t){t.O&&n(3,JSON.stringify(y(t)))}var u=function(t,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},c=function(){function r(t,e){return this[Z]={i:2,l:e,A:e?e.A:w(),P:!1,I:!1,o:void 0,D:void 0,t,k:this,C:!1,O:!1},this}t(r,Map);var n=r.prototype;return Object.defineProperty(n,"size",{get:function(){return y(this[Z]).size}}),n.has=function(t){return y(this[Z]).has(t)},n.set=function(t,r){var n=this[Z];return o(n),y(n).has(t)&&y(n).get(t)===r||(e(n),I(n),n.D.set(t,!0),n.o.set(t,r),n.D.set(t,!0)),this},n.delete=function(t){if(!this.has(t))return!1;var r=this[Z];return o(r),e(r),I(r),r.D.set(t,!1),r.o.delete(t),!0},n.clear=function(){var t=this[Z];o(t),y(t).size&&(e(t),I(t),t.D=new Map,a(t.t,(function(e){t.D.set(e,!1)})),t.o.clear())},n.forEach=function(t,e){var r=this;y(this[Z]).forEach((function(n,o){t.call(e,r.get(o),o,r)}))},n.get=function(t){var r=this[Z];o(r);var n=y(r).get(t);if(r.I||!i(n))return n;if(n!==r.t.get(t))return n;var u=C(r.A.h,n,r);return e(r),r.o.set(t,u),u},n.keys=function(){return y(this[Z]).keys()},n.values=function(){var t,e=this,r=this.keys();return(t={})[tt]=function(){return e.values()},t.next=function(){var t=r.next();return t.done?t:{done:!1,value:e.get(t.value)}},t},n.entries=function(){var t,e=this,r=this.keys();return(t={})[tt]=function(){return e.entries()},t.next=function(){var t=r.next();if(t.done)return t;var n=e.get(t.value);return{done:!1,value:[t.value,n]}},t},n[tt]=function(){return this.entries()},r}(),f=function(){function e(t,e){return this[Z]={i:3,l:e,A:e?e.A:w(),P:!1,I:!1,o:void 0,t,k:this,p:new Map,O:!1,C:!1},this}t(e,Set);var n=e.prototype;return Object.defineProperty(n,"size",{get:function(){return y(this[Z]).size}}),n.has=function(t){var e=this[Z];return o(e),e.o?!!e.o.has(t)||!(!e.p.has(t)||!e.o.has(e.p.get(t))):e.t.has(t)},n.add=function(t){var e=this[Z];return o(e),this.has(t)||(r(e),I(e),e.o.add(t)),this},n.delete=function(t){if(!this.has(t))return!1;var e=this[Z];return o(e),r(e),I(e),e.o.delete(t)||!!e.p.has(t)&&e.o.delete(e.p.get(t))},n.clear=function(){var t=this[Z];o(t),y(t).size&&(r(t),I(t),t.o.clear())},n.values=function(){var t=this[Z];return o(t),r(t),t.o.values()},n.entries=function(){var t=this[Z];return o(t),r(t),t.o.entries()},n.keys=function(){return this.values()},n[tt]=function(){return this.values()},n.forEach=function(t,e){for(var r=this.values(),n=r.next();!n.done;)t.call(e,n.value,n.value,this),n=r.next()},e}();O("MapSet",{N:function(t,e){return new c(t,e)},T:function(t,e){return new f(t,e)}})}function J(){W(),$(),U()}function T(t){return t}function X(t){return t}r.r(e),r.d(e,{Immer:()=>at,applyPatches:()=>ht,castDraft:()=>T,castImmutable:()=>X,createDraft:()=>vt,current:()=>K,default:()=>dt,enableAllPlugins:()=>J,enableES5:()=>W,enableMapSet:()=>$,enablePatches:()=>U,finishDraft:()=>yt,freeze:()=>g,immerable:()=>Y,isDraft:()=>o,isDraftable:()=>i,nothing:()=>V,original:()=>u,produce:()=>ft,produceWithPatches:()=>st,setAutoFreeze:()=>lt,setUseProxies:()=>pt});var q,B,G="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,L="undefined"!=typeof Set,Q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,V=G?Symbol.for("immer-nothing"):((q={})["immer-nothing"]=!0,q),Y=G?Symbol.for("immer-draftable"):"__$immer_draftable",Z=G?Symbol.for("immer-state"):"__$immer_state",tt="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",et=""+Object.prototype.constructor,rt="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,nt=Object.getOwnPropertyDescriptors||function(t){var e={};return rt(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},ot={},it={get:function(t,e){if(e===Z)return t;var r=y(t);if(!f(r,e))return function(t,e,r){var n,o=F(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===z(t.t,e)?(R(t),t.o[e]=C(t.A.h,n,t)):n},has:function(t,e){return e in y(t)},ownKeys:function(t){return Reflect.ownKeys(y(t))},set:function(t,e,r){var n=F(y(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=z(y(t),e),i=null==o?void 0:o[Z];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(p(r,o)&&(void 0!==r||f(t.t,e)))return!0;R(t),I(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==z(t.t,e)||e in t.t?(t.D[e]=!1,R(t),I(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=y(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},ut={};a(it,(function(t,e){ut[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),ut.deleteProperty=function(t,e){return it.deleteProperty.call(this,t[0],e)},ut.set=function(t,e,r){return it.set.call(this,t[0],e,r,t[0])};var at=function(){function t(t){var e=this;this.g=Q,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var a=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var f=S(e),s=C(e,t,void 0),l=!0;try{c=r(s),l=!1}finally{l?j(f):D(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return A(f,o),_(t,f)}),(function(t){throw j(f),t})):(A(f,o),_(c,f))}if(!t||"object"!=typeof t){if((c=r(t))===V)return;return void 0===c&&(c=t),e.F&&g(c,!0),c}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=K(t));var e=S(this),r=C(this,t,void 0);return r[Z].C=!0,D(e),r},e.finishDraft=function(t,e){var r=(t&&t[Z]).A;return A(r,e),_(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!Q&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}(),ct=new at,ft=ct.produce,st=ct.produceWithPatches.bind(ct),lt=ct.setAutoFreeze.bind(ct),pt=ct.setUseProxies.bind(ct),ht=ct.applyPatches.bind(ct),vt=ct.createDraft.bind(ct),yt=ct.finishDraft.bind(ct);const dt=ft}}]);
//# sourceMappingURL=5729.0a51f8569659d883.js.map