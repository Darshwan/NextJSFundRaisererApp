"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[9211],{20966:(e,n,r)=>{r.r(n),r.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>f,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>E,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>d,desktopCommunicationService:()=>m,useOpenNativeMenu:()=>a,useScreenParams:()=>N,useZoomFactor:()=>_});const t={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>t,s=(e,...n)=>u().invoke(e,...n);var i=r(7560),c=r(40540);function o(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function l(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var r;return e.click&&n.set(o(e),e.click),(0,i.Z)({},e,{click:o(e),submenu:null==(r=l(e.submenu,n))?void 0:r.menu})})),clickHandlers:n}:{}}function a(e){const n=(0,c.useRef)();return(0,c.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(r,t){e&&"function"==typeof e&&!t&&e();const u=t&&n.current&&n.current.get(t);u&&u()}))),[]),e=>{const{menu:r,clickHandlers:t}=l(e);n.current=t,s("setNativeElectronMenuOpen",{menu:r})}}const m={send:(e,...n)=>u().send(e,...n),invoke:s,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},E="PM_EB_INT_BROADCAST_MAIN",d="toggle-maximize",f="requester-window-events";function _(){const[e]=(0,c.useState)((()=>1));return(0,c.useEffect)((()=>{}),[]),e}function N(){const[e]=(0,c.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,c.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=9211.fe04bfb453fb6145.js.map