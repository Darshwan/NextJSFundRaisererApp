(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[5110],{45110:(t,e,o)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}o.r(e),o.d(e,{default:()=>T});var r=[],i=r.forEach,s=r.slice;function a(t){return i.call(s.call(arguments,1),(function(e){if(e)for(var o in e)void 0===t[o]&&(t[o]=e[o])})),t}function u(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":n(XMLHttpRequest))}var f,c,d,h=o(49656),l=o.n(h);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}"function"==typeof fetch&&(f=void 0!==o.g&&o.g.fetch?o.g.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),u()&&(void 0!==o.g&&o.g.XMLHttpRequest?c=o.g.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(c=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&(void 0!==o.g&&o.g.ActiveXObject?d=o.g.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(d=window.ActiveXObject)),f||!h||c||d||(f=l()||h),"function"!=typeof f&&(f=void 0);var y=function(t,e){if(e&&"object"===p(e)){var o="";for(var n in e)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]);if(!o)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+o.slice(1)}return t},b=function(t,e,o){var n=function(t){if(!t.ok)return o(t.statusText||"Error",{status:t.status});t.text().then((function(e){o(null,{status:t.status,data:e})})).catch(o)};"function"==typeof fetch?fetch(t,e).then(n).catch(o):f(t,e).then(n).catch(o)},m=!1;const v=function(t,e,n,r){return"function"==typeof n&&(r=n,n=void 0),r=r||function(){},f&&0!==e.indexOf("file:")?function(t,e,n,r){t.queryStringParams&&(e=y(e,t.queryStringParams));var i=a({},"function"==typeof t.customHeaders?t.customHeaders():t.customHeaders);"undefined"==typeof window&&void 0!==o.g&&void 0!==o.g.process&&o.g.process.versions&&o.g.process.versions.node&&(i["User-Agent"]="i18next-http-backend (node/".concat(o.g.process.version,"; ").concat(o.g.process.platform," ").concat(o.g.process.arch,")")),n&&(i["Content-Type"]="application/json");var s="function"==typeof t.requestOptions?t.requestOptions(n):t.requestOptions,u=a({method:n?"POST":"GET",body:n?t.stringify(n):void 0,headers:i},m?{}:s);try{b(e,u,r)}catch(t){if(!s||0===Object.keys(s).length||!t.message||t.message.indexOf("not implemented")<0)return r(t);try{Object.keys(s).forEach((function(t){delete u[t]})),b(e,u,r),m=!0}catch(t){r(t)}}}(t,e,n,r):u()||"function"==typeof ActiveXObject?function(t,e,o,n){o&&"object"===p(o)&&(o=y("",o).slice(1)),t.queryStringParams&&(e=y(e,t.queryStringParams));try{var r;(r=c?new c:new d("MSXML2.XMLHTTP.3.0")).open(o?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,o&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var i=t.customHeaders;if(i="function"==typeof i?i():i)for(var s in i)r.setRequestHeader(s,i[s]);r.onreadystatechange=function(){r.readyState>3&&n(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(o)}catch(t){console&&console.log(t)}}(t,e,n,r):void r(new Error("No fetch and no xhr implementation found!"))};function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function O(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var E=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.services=e,this.options=o,this.allOptions=n,this.type="backend",this.init(e,o,n)}var e,o;return e=t,o=[{key:"init",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=a(o,this.options||{},{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,e,o){return function(t,e,o){return(e=O(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},e,o||"")},parseLoadPayload:function(t,e){},request:v,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}),this.allOptions=n,this.services&&this.options.reloadInterval&&setInterval((function(){return e.reload()}),this.options.reloadInterval)}},{key:"readMulti",value:function(t,e,o){this._readAny(t,t,e,e,o)}},{key:"read",value:function(t,e,o){this._readAny([t],t,[e],e,o)}},{key:"_readAny",value:function(t,e,o,n,r){var i,s=this,a=this.options.loadPath;"function"==typeof this.options.loadPath&&(a=this.options.loadPath(t,o)),(a=function(t){return!!t&&"function"==typeof t.then}(i=a)?i:Promise.resolve(i)).then((function(i){if(!i)return r(null,{});var a=s.services.interpolator.interpolate(i,{lng:t.join("+"),ns:o.join("+")});s.loadUrl(a,r,e,n)}))}},{key:"loadUrl",value:function(t,e,o,n){var r=this,i="string"==typeof o?[o]:o,s="string"==typeof n?[n]:n,a=this.options.parseLoadPayload(i,s);this.options.request(this.options,t,a,(function(i,s){if(s&&(s.status>=500&&s.status<600||!s.status))return e("failed loading "+t+"; status code: "+s.status,!0);if(s&&s.status>=400&&s.status<500)return e("failed loading "+t+"; status code: "+s.status,!1);if(!s&&i&&i.message&&i.message.indexOf("Failed to fetch")>-1)return e("failed loading "+t+": "+i.message,!0);if(i)return e(i,!1);var a,u;try{a="string"==typeof s.data?r.options.parse(s.data,o,n):s.data}catch(e){u="failed parsing "+t+" to json"}if(u)return e(u,!1);e(null,a)}))}},{key:"create",value:function(t,e,o,n,r){var i=this;if(this.options.addPath){"string"==typeof t&&(t=[t]);var s=this.options.parsePayload(e,o,n),a=0,u=[],f=[];t.forEach((function(o){var n=i.options.addPath;"function"==typeof i.options.addPath&&(n=i.options.addPath(o,e));var c=i.services.interpolator.interpolate(n,{lng:o,ns:e});i.options.request(i.options,c,s,(function(e,o){a+=1,u.push(e),f.push(o),a===t.length&&"function"==typeof r&&r(u,f)}))}))}}},{key:"reload",value:function(){var t=this,e=this.services,o=e.backendConnector,n=e.languageUtils,r=e.logger,i=o.language;if(!i||"cimode"!==i.toLowerCase()){var s=[],a=function(t){n.toResolveHierarchy(t).forEach((function(t){s.indexOf(t)<0&&s.push(t)}))};a(i),this.allOptions.preload&&this.allOptions.preload.forEach((function(t){return a(t)})),s.forEach((function(e){t.allOptions.ns.forEach((function(t){o.read(e,t,"read",null,null,(function(n,i){n&&r.warn("loading namespace ".concat(t," for language ").concat(e," failed"),n),!n&&i&&r.log("loaded namespace ".concat(t," for language ").concat(e),i),o.loaded("".concat(e,"|").concat(t),n,i)}))}))}))}}}],o&&g(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();E.type="backend";const T=E},5483:(t,e,o)=>{var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o.g&&o.g,r=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var o=void 0!==t&&t||"undefined"!=typeof self&&self||void 0!==o&&o,n="URLSearchParams"in o,r="Symbol"in o&&"iterator"in Symbol,i="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in o,a="ArrayBuffer"in o;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,o){t.onload=function(){e(t.result)},t.onerror=function(){o(t.error)}}))}function b(t){var e=new FileReader,o=y(e);return e.readAsArrayBuffer(t),o}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(b)}),this.text=function(){var t,e,o,n=p(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,o=y(e=new FileReader),e.readAsText(t),o;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),o=new Array(e.length),n=0;n<e.length;n++)o[n]=String.fromCharCode(e[n]);return o.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(O)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=d(e);var o=this.map[t];this.map[t]=o?o+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=d(e)},l.prototype.forEach=function(t,e){for(var o in this.map)this.map.hasOwnProperty(o)&&t.call(e,this.map[o],o,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,o){t.push(o)})),h(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,o){t.push([o,e])})),h(t)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var o,n,r=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=(o=e.method||this.method||"GET").toUpperCase(),w.indexOf(n)>-1?n:o),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function O(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var o=t.split("="),n=o.shift().replace(/\+/g," "),r=o.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(r))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},v.call(g.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];E.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},e.DOMException=o.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var o=Error(t);this.stack=o.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function A(t,n){return new Promise((function(r,s){var u=new g(t,n);if(u.signal&&u.signal.aborted)return s(new e.DOMException("Aborted","AbortError"));var f=new XMLHttpRequest;function c(){f.abort()}f.onload=function(){var t,e,o={status:f.status,statusText:f.statusText,headers:(t=f.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var o=t.split(":"),n=o.shift().trim();if(n){var r=o.join(":").trim();e.append(n,r)}})),e)};o.url="responseURL"in f?f.responseURL:o.headers.get("X-Request-URL");var n="response"in f?f.response:f.responseText;setTimeout((function(){r(new E(n,o))}),0)},f.onerror=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},f.ontimeout=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},f.onabort=function(){setTimeout((function(){s(new e.DOMException("Aborted","AbortError"))}),0)},f.open(u.method,function(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}(u.url),!0),"include"===u.credentials?f.withCredentials=!0:"omit"===u.credentials&&(f.withCredentials=!1),"responseType"in f&&(i?f.responseType="blob":a&&u.headers.get("Content-Type")&&-1!==u.headers.get("Content-Type").indexOf("application/octet-stream")&&(f.responseType="arraybuffer")),!n||"object"!=typeof n.headers||n.headers instanceof l?u.headers.forEach((function(t,e){f.setRequestHeader(e,t)})):Object.getOwnPropertyNames(n.headers).forEach((function(t){f.setRequestHeader(t,d(n.headers[t]))})),u.signal&&(u.signal.addEventListener("abort",c),f.onreadystatechange=function(){4===f.readyState&&u.signal.removeEventListener("abort",c)}),f.send(void 0===u._bodyInit?null:u._bodyInit)}))}A.polyfill=!0,o.fetch||(o.fetch=A,o.Headers=l,o.Request=g,o.Response=E),e.Headers=l,e.Request=g,e.Response=E,e.fetch=A}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=n.fetch?n:r;(e=i.fetch).default=i.fetch,e.fetch=i.fetch,e.Headers=i.Headers,e.Request=i.Request,e.Response=i.Response,t.exports=e},49656:(t,e,o)=>{var n;if("function"==typeof fetch&&(n=void 0!==o.g&&o.g.fetch?o.g.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),"undefined"==typeof window||void 0===window.document){var r=n||o(5483);r.default&&(r=r.default),e.default=r,t.exports=e.default}}}]);
//# sourceMappingURL=5110.01540b935f3fdc68.js.map