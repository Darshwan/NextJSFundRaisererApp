"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[730],{730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>w,CustomErrorBoundary:()=>S,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>k,logError:()=>i}),t(40540);var o=t(60607),n=t(7560),s=t(98283),a=t(21466),l=t(70381);const c=["crash"],i=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,c);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{l.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),l.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var p=t(49437),d=t(80047);const E="Something Went Wrong",m="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=t(52322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=E,description:t=m,message:o,illustration:a="illustration-unable-to-load",error:l}=r,c=(0,s.Z)(r,h);const i=o||l&&l.message;return(0,u.jsxs)(p.Z,(0,n.Z)({title:e,description:t},c,{children:[i&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:i})}),(0,u.jsx)(d.Z,{name:a})]}))},k=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const l=(0,o.useRouteError)();return i(l,{stack:l.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:l,message:n})};var g=t(56010);const x=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,o)=>{i(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},S=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:l=I}=r,c=(0,s.Z)(r,x);return(0,u.jsx)(g.ErrorBoundary,(0,n.Z)({FallbackComponent:null!=c&&c.fallback?void 0:l,onError:(r,e)=>(t||b)(r,e,o,a)},c,{children:e}))},w=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const l=(0,o.useAsyncError)();return i(l,{stack:l.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:l,message:n})}}}]);
//# sourceMappingURL=730.4c323bf33f99fb6a.js.map