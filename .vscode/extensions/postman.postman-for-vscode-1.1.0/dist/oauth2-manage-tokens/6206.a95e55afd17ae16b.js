/*! For license information please see 6206.a95e55afd17ae16b.js.LICENSE.txt */
(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[6206,5132],{96206:(r,t,e)=>{"use strict";const n=e(52844),a=e(91366),o=e(36633);r.exports=function r(t,e){switch(a(t)){case"object":return function(t,e){if("function"==typeof e)return e(t);if(e||o(t)){const n=new t.constructor;for(let a in t)n[a]=r(t[a],e);return n}return t}(t,e);case"array":return function(t,e){const n=new t.constructor(t.length);for(let a=0;a<t.length;a++)n[a]=r(t[a],e);return n}(t,e);default:return n(t)}}},36633:(r,t,e)=>{"use strict";var n=e(98558);function a(r){return!0===n(r)&&"[object Object]"===Object.prototype.toString.call(r)}r.exports=function(r){var t,e;return!1!==a(r)&&"function"==typeof(t=r.constructor)&&!1!==a(e=t.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf")}},98558:r=>{"use strict";r.exports=function(r){return null!=r&&"object"==typeof r&&!1===Array.isArray(r)}},91366:r=>{var t=Object.prototype.toString;function e(r){return"function"==typeof r.constructor?r.constructor.name:null}r.exports=function(r){if(void 0===r)return"undefined";if(null===r)return"null";var n=typeof r;if("boolean"===n)return"boolean";if("string"===n)return"string";if("number"===n)return"number";if("symbol"===n)return"symbol";if("function"===n)return"GeneratorFunction"===e(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return"array";if(function(r){return!(!r.constructor||"function"!=typeof r.constructor.isBuffer)&&r.constructor.isBuffer(r)}(r))return"buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return!0}catch(r){if(-1!==r.message.indexOf("callee"))return!0}return!1}(r))return"arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return"date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return"error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return"regexp";switch(e(r)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(r){return"function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return"generator";switch(n=t.call(r)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return n.slice(8,-1).toLowerCase().replace(/\s/g,"")}},52844:(r,t,e)=>{"use strict";var n=e(52963).Buffer;const a=Symbol.prototype.valueOf,o=e(91366);r.exports=function(r,t){switch(o(r)){case"array":return r.slice();case"object":return Object.assign({},r);case"date":return new r.constructor(Number(r));case"map":return new Map(r);case"set":return new Set(r);case"buffer":return function(r){const t=r.length,e=n.allocUnsafe?n.allocUnsafe(t):n.from(t);return r.copy(e),e}(r);case"symbol":return function(r){return a?Object(a.call(r)):{}}(r);case"arraybuffer":return function(r){const t=new r.constructor(r.byteLength);return new Uint8Array(t).set(new Uint8Array(r)),t}(r);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return function(r,t){return new r.constructor(r.buffer,r.byteOffset,r.length)}(r);case"regexp":return function(r){const t=void 0!==r.flags?r.flags:/\w+$/.exec(r)||void 0,e=new r.constructor(r.source,t);return e.lastIndex=r.lastIndex,e}(r);case"error":return Object.create(r);default:return r}}}}]);
//# sourceMappingURL=6206.a95e55afd17ae16b.js.map