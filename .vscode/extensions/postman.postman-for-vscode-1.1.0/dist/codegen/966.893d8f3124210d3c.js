"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[966,7560,9211],{7560:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:()=>r})},20966:(e,n,t)=>{t.r(n),t.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>E,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>d,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>m,desktopCommunicationService:()=>f,useOpenNativeMenu:()=>l,useScreenParams:()=>p,useZoomFactor:()=>b});const r={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>r,c=(e,...n)=>u().invoke(e,...n);var o=t(7560),i=t(40540);function s(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function a(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var t;return e.click&&n.set(s(e),e.click),(0,o.Z)({},e,{click:s(e),submenu:null==(t=a(e.submenu,n))?void 0:t.menu})})),clickHandlers:n}:{}}function l(e){const n=(0,i.useRef)();return(0,i.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(t,r){e&&"function"==typeof e&&!r&&e();const u=r&&n.current&&n.current.get(r);u&&u()}))),[]),e=>{const{menu:t,clickHandlers:r}=a(e);n.current=r,c("setNativeElectronMenuOpen",{menu:t})}}const f={send:(e,...n)=>u().send(e,...n),invoke:c,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},d="PM_EB_INT_BROADCAST_MAIN",m="toggle-maximize",E="requester-window-events";function b(){const[e]=(0,i.useState)((()=>1));return(0,i.useEffect)((()=>{}),[]),e}function p(){const[e]=(0,i.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,i.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=966.893d8f3124210d3c.js.map