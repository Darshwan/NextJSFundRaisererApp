(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[4921,8201],{60731:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=60731,e.exports=t},71576:(e,t,n)=>{"use strict";n.r(t),n.d(t,{loadModule:()=>o,loadRemoteModule:()=>i});var r=n(84188);const o=(e,t,n)=>async()=>{const o=n||"",i=o.split("/").slice(0,-1).join("/");return await(0,r.Zw)({url:i,scope:e,module:t,remoteEntryFileName:o.split("/").pop()})},i=e=>{const[t,...n]=e.split("/"),o=`./${n.join("/")}`,i=t.replaceAll("-","_"),u=`${window.BASE_URL_PREFIX}/${t}/remoteEntry.js`,c=u.split("/").slice(0,-1).join("/");return async()=>await(0,r.Zw)({url:c,scope:i,module:o,remoteEntryFileName:u.split("/").pop()})}},34406:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&p())}function p(){if(!l){var e=u(f);l=!0;for(var t=s.length;t;){for(c=s,s=[];++a<t;)c&&c[a].run();a=-1,t=s.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);
//# sourceMappingURL=4921.1b097572fa48bf38.js.map