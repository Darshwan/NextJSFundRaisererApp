"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[9239],{31597:(e,r,a)=>{a.r(r),a.d(r,{perfComponents:()=>t,perfConst:()=>n,sendMeasureEvent:()=>v,sessionId:()=>d});var n={};a.r(n),a.d(n,{GENERIC_CATEGORY:()=>o,PERFORMANCE_GLOBAL_NAMESPACE:()=>c});var t={};a.r(t),a.d(t,{PerfContext:()=>m,PerformanceMarkPaint:()=>l});const c="__POSTMAN_PERFORMANCE__",o="app-perf";var i=a(40540),s=a(52322);function l({children:e,markName:r,condition:a=!0,callback:n=function(){}}){const[t,c]=(0,i.useState)(!1),o=(0,i.useRef)(0),l=()=>{var e;if(a&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{n()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}c(!0)}};return(0,i.useLayoutEffect)((()=>(o.current=requestAnimationFrame(l),()=>cancelAnimationFrame(o.current))),[a]),(0,s.jsx)(s.Fragment,{children:e})}l.displayName="PerformanceMarkPaint";const f={markName:void 0,callback:void 0},m=(0,i.createContext)(f);m.displayName="PerfContext";var u=a(56880);const d=(0,a(60398).v4)(),p=[];function k(e){const r=Object.assign({},e,{traceId:d});u.AnalyticsService.addEventV2(r)}function v({name:e,category:r=o,label:a,entityType:n,once:t=!0}){if(!t||!p.includes(e)){p.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))k({category:r,action:t.name,value:Math.round(t.duration),label:a||"",entityType:n})}}}}]);
//# sourceMappingURL=9239.285036aef7873c7a.js.map