/*! For license information please see 8912.b585df85e0ed84b8.js.LICENSE.txt */
"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[8912,7560,2389,1910],{7560:(n,e,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}t.d(e,{Z:()=>r})},38912:(n,e,t)=>{t.r(e),t.d(e,{CHANGE_LANGUAGE:()=>g,bootstrapI18n:()=>f,changeLanguage:()=>y,createInstance:()=>v,i18n:()=>a(),registerChangeLanguageListener:()=>b});var r=t(73398),a=t.n(r),o=t(11669),s=t.n(o),i=t(45352),c=t(36523),l=t.n(c);const u={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(n,e)=>(n=>`%%basePath%%/${n}/locale/{{lng}}/{{ns}}.json`)(e[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},f=()=>{a().use(l()).use(s()).use(i.initReactI18next).init(u)};var d=t(7560),p=(t(40540),t(48980)),_=t.n(p);const g="CHANGE_LANGUAGE";function y(n){const e=new CustomEvent("CHANGE_LANGUAGE",{detail:n});document.body.dispatchEvent(e)}function b(n){function e(e){n(e.detail)}return a().on("languageChanged",n),document.body.addEventListener(g,e),()=>{a().off("languageChanged",n),document.body.removeEventListener(g,e)}}var h=t(52322);function v(n){const e=a().createInstance();return e.use(l()),e.use(_()(((e,t,r)=>{n(`${e}/${t}`).then((({default:n})=>{r(null,n)})).catch((n=>{r(n,null)}))}))),e.init((0,d.Z)({},u,{ns:["core"]})),b((n=>{e.changeLanguage(n)})),{i18n:e,useTranslation:(n,t)=>(0,i.useTranslation)(n,(0,d.Z)({},t,{i18n:e})),Translation:n=>(0,h.jsx)(i.Translation,(0,d.Z)({},n,{i18n:e}))}}},11837:(n,e,t)=>{var r=t(40540),a=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),e.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var r,o={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,r)&&!c.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:a,type:n,key:l,ref:u,props:o,_owner:s.current}}e.jsx=l,e.jsxs=l},52322:(n,e,t)=>{n.exports=t(11837)}}]);
//# sourceMappingURL=8912.b585df85e0ed84b8.js.map