"use strict";(self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[]).push([[9886,7651],{5662:(e,n,r)=>{r.r(n),r.d(n,{PostmanBootstrap:()=>N});var t=r(540),a=r(1180),o=r(7201),i=r(9578),s=r(9530),d=r(3794),l=r(7291),u=r(4118),c=r(6880),A=r(6663),p=r.n(A),I=r(3101),_=r(1466);function T(){try{var e;return(null==(e=JSON.parse(window.APP_DETAILS))?void 0:e.isAnalyticsEnabled)&&!p().DISABLE_ANALYTICS}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}return!p().DISABLE_ANALYTICS}function E(){var e;try{return JSON.parse(window.APP_DETAILS)}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}const n=r(2640)(navigator.userAgent),t=(null==n?void 0:n.browser)||{},o=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform";return{version:t.name?`${o};${t.name};${t.version}`:`${o};unknown;unknown`,property:"postman-web-public"}}const S=function(){var e;if(window.INITIAL_WORKSPACE)try{return JSON.parse(window.INITIAL_WORKSPACE)}catch(e){return{}}switch(null==(e=window)||null==(e=e.pm)||null==(e=e.windowConfig)?void 0:e.process){case"runner":case"requester":try{return{}}catch(e){return{}}default:return{}}};_.VSCodeCommunicationsService.subscribe("ACCOUNT_DATA_UPDATED",(e=>{c.BulkAnalytics.configure({userInfo:{id:`${(null==e?void 0:e.userId)||0}`,teamId:`${(null==e?void 0:e.teamId)||0}`,organizations:[{id:`${(null==e?void 0:e.teamId)||0}`}]}}),null===e&&c.BulkAnalytics.configure({workspaceInfo:{}})}));var m=r(4568),v=r(9994),w=r(3580),C=r(2322);r(7086),async function(){(0,c.initializeAnalytics)({workspaceInfo:S(),userInfo:{id:(0,I.getUserId)(),teamId:(0,I.getTeamId)()||"0",organizations:[{id:(0,I.getTeamId)()}]},appDetails:E(),platform:"vscode",isEnabled:T(),batchTimeout:p().BATCH_ANALYTICS_TIMEOUT,analyticsUrl:p().ANALYTICS_URL,environment:"prod"}),window.addEventListener("beforeunload",(()=>{c.BulkAnalytics.onDeactivate()}),{capture:!0})}(),(0,l.initSentry)(),(0,u.bootstrapI18n)();const N=({children:e,appId:n,errorElementId:r,featureFlagsContext:l,isAmplitudeEventsTrackingEnabled:u})=>(u&&(0,v.initializeAmplitudeSDK)({apiKey:{NX_DEPLOY_VERSION:"prod.2024-06-25.07-12",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/7851922689694618523",NX_TASK_TARGET_PROJECT:"vscode-auth",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"7851922689694618523"}.AMPLITUDE_PROD_API_KEY}),(0,C.jsx)(t.StrictMode,{children:(0,C.jsx)(a.CustomErrorBoundary,{appId:n,errorElementId:r,children:(0,C.jsx)(o.DataFetchCacheProvider,{children:(0,C.jsx)(m.FeatureFlagsProvider,{featureFlagsContext:l,children:(0,C.jsx)(i.ThemeContextProvider,{children:(0,C.jsx)(s.StyleSheetManager,{disableCSSOMInjection:navigator.userAgent.toLowerCase().includes("prerender"),children:(0,C.jsxs)(d.VW,{children:[(0,C.jsx)(i.GlobalStyles,{}),(0,C.jsx)(w.LazyModalsContainer,{}),e]})})})})})})}))}}]);
//# sourceMappingURL=9886.caf086e5b33fa5e0.js.map