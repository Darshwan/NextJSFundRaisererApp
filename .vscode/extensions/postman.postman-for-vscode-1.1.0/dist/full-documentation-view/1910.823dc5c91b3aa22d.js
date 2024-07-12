/*! For license information please see 1910.823dc5c91b3aa22d.js.LICENSE.txt */
"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[1910,7560,2389,8912],{607560:(n,e,t)=>{function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},a.apply(this,arguments)}t.d(e,{Z:()=>a})},538912:(n,e,t)=>{t.r(e),t.d(e,{CHANGE_LANGUAGE:()=>p,bootstrapI18n:()=>f,changeLanguage:()=>v,createInstance:()=>b,i18n:()=>r(),registerChangeLanguageListener:()=>y});var a=t(173398),r=t.n(a),o=t(311669),s=t.n(o),i=t(245352),c=t(236523),l=t.n(c);const u={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(n,e)=>(n=>`%%basePath%%/${n}/locale/{{lng}}/{{ns}}.json`)(e[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},f=()=>{r().use(l()).use(s()).use(i.initReactI18next).init(u)};var d=t(607560),_=(t(540540),t(348980)),g=t.n(_);const p="CHANGE_LANGUAGE";function v(n){const e=new CustomEvent("CHANGE_LANGUAGE",{detail:n});document.body.dispatchEvent(e)}function y(n){function e(e){n(e.detail)}return r().on("languageChanged",n),document.body.addEventListener(p,e),()=>{r().off("languageChanged",n),document.body.removeEventListener(p,e)}}var E=t(552322);function b(n){const e=r().createInstance();return e.use(l()),e.use(g()(((e,t,a)=>{n(`${e}/${t}`).then((({default:n})=>{a(null,n)})).catch((n=>{a(n,null)}))}))),e.init((0,d.Z)({},u,{ns:["core"]})),y((n=>{e.changeLanguage(n)})),{i18n:e,useTranslation:(n,t)=>(0,i.useTranslation)(n,(0,d.Z)({},t,{i18n:e})),Translation:n=>(0,E.jsx)(i.Translation,(0,d.Z)({},n,{i18n:e}))}}},811837:(n,e,t)=>{var a=t(540540),r=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),e.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var a,o={},l=null,u=null;for(a in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,a)&&!c.hasOwnProperty(a)&&(o[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps)void 0===o[a]&&(o[a]=e[a]);return{$$typeof:r,type:n,key:l,ref:u,props:o,_owner:s.current}}e.jsx=l,e.jsxs=l},552322:(n,e,t)=>{n.exports=t(811837)}}]);
//# sourceMappingURL=1910.823dc5c91b3aa22d.js.map