"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[686],{10161:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,r,s,i){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new o(r,s||e,i),f=n?n+t:t;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},c.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,t,r,o,s,i){var c=n?n+e:e;if(!this._events[c])return!1;var f,a,u=this._events[c],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,s),!0;case 6:return u.fn.call(u.context,t,r,o,s,i),!0}for(a=1,f=new Array(h-1);a<h;a++)f[a-1]=arguments[a];u.fn.apply(u.context,f)}else{var l,v=u.length;for(a=0;a<v;a++)switch(u[a].once&&this.removeListener(e,u[a].fn,void 0,!0),h){case 1:u[a].fn.call(u[a].context);break;case 2:u[a].fn.call(u[a].context,t);break;case 3:u[a].fn.call(u[a].context,t,r);break;case 4:u[a].fn.call(u[a].context,t,r,o);break;default:if(!f)for(l=1,f=new Array(h-1);l<h;l++)f[l-1]=arguments[l];u[a].fn.apply(u[a].context,f)}}return!0},c.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,r,o){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return i(this,s),this;var c=this._events[s];if(c.fn)c.fn!==t||o&&!c.once||r&&c.context!==r||i(this,s);else{for(var f=0,a=[],u=c.length;f<u;f++)(c[f].fn!==t||o&&!c[f].once||r&&c[f].context!==r)&&a.push(c[f]);a.length?this._events[s]=1===a.length?a[0]:a:i(this,s)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&i(this,t)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c},30686:(e,t,n)=>{n.r(t),n.d(t,{EventEmitter:()=>r,default:()=>o});var r=n(10161);const o=r}}]);
//# sourceMappingURL=686.b971b3c70d2a0dcd.js.map