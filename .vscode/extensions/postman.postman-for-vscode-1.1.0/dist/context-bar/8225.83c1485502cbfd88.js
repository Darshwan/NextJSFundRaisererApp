"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[8225,7560,2389,9886],{7560:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},5662:(e,t,n)=>{n.r(t),n.d(t,{PostmanBootstrap:()=>S});var r=n(540),a=n(1180),i=n(7201),o=n(9578),s=n(9530),c=n(3794),l=n(7291),d=n(4118),p=n(6880),u=n(6663),m=n.n(u),h=n(3101),f=n(1466);function g(){try{var e;return(null==(e=JSON.parse(window.APP_DETAILS))?void 0:e.isAnalyticsEnabled)&&!m().DISABLE_ANALYTICS}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}return!m().DISABLE_ANALYTICS}function y(){var e;try{return JSON.parse(window.APP_DETAILS)}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}const t=n(2640)(navigator.userAgent),r=(null==t?void 0:t.browser)||{},i=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform";return{version:r.name?`${i};${r.name};${r.version}`:`${i};unknown;unknown`,property:"postman-web-public"}}const w=function(){var e;if(window.INITIAL_WORKSPACE)try{return JSON.parse(window.INITIAL_WORKSPACE)}catch(e){return{}}switch(null==(e=window)||null==(e=e.pm)||null==(e=e.windowConfig)?void 0:e.process){case"runner":case"requester":try{return{}}catch(e){return{}}default:return{}}};f.VSCodeCommunicationsService.subscribe("ACCOUNT_DATA_UPDATED",(e=>{p.BulkAnalytics.configure({userInfo:{id:`${(null==e?void 0:e.userId)||0}`,teamId:`${(null==e?void 0:e.teamId)||0}`,organizations:[{id:`${(null==e?void 0:e.teamId)||0}`}]}}),null===e&&p.BulkAnalytics.configure({workspaceInfo:{}})}));var v=n(4568),x=n(9994),b=n(3580),E=n(2322);n(7086),async function(){(0,p.initializeAnalytics)({workspaceInfo:w(),userInfo:{id:(0,h.getUserId)(),teamId:(0,h.getTeamId)()||"0",organizations:[{id:(0,h.getTeamId)()}]},appDetails:y(),platform:"vscode",isEnabled:g(),batchTimeout:m().BATCH_ANALYTICS_TIMEOUT,analyticsUrl:m().ANALYTICS_URL,environment:"prod"}),window.addEventListener("beforeunload",(()=>{p.BulkAnalytics.onDeactivate()}),{capture:!0})}(),(0,l.initSentry)(),(0,d.bootstrapI18n)();const S=({children:e,appId:t,errorElementId:n,featureFlagsContext:l,isAmplitudeEventsTrackingEnabled:d})=>(d&&(0,x.initializeAmplitudeSDK)({apiKey:{NX_DEPLOY_VERSION:"prod.2024-06-25.07-12",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/11879388002653028598",NX_TASK_TARGET_PROJECT:"context-bar",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"11879388002653028598"}.AMPLITUDE_PROD_API_KEY}),(0,E.jsx)(r.StrictMode,{children:(0,E.jsx)(a.CustomErrorBoundary,{appId:t,errorElementId:n,children:(0,E.jsx)(i.DataFetchCacheProvider,{children:(0,E.jsx)(v.FeatureFlagsProvider,{featureFlagsContext:l,children:(0,E.jsx)(o.ThemeContextProvider,{children:(0,E.jsx)(s.StyleSheetManager,{disableCSSOMInjection:navigator.userAgent.toLowerCase().includes("prerender"),children:(0,E.jsxs)(c.VW,{children:[(0,E.jsx)(o.GlobalStyles,{}),(0,E.jsx)(b.LazyModalsContainer,{}),e]})})})})})})}))},9627:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7560),a=n(540),i=n.n(a),o=n(207),s=i().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=i().forwardRef((function(e,t){return i().createElement(o.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-action-close-stroke"};const l=c},4962:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(2247),a=n(4047),i=n(540),o=n.n(i),s=n(1314),c=n.n(s),l=n(9530),d=n.n(l),p=n(3753),u=n(265);function m(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var h=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?m(e.styleAs,e.theme):m(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,r="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?r:"","\n    ");var t,n,r}));function f(e){var t=e.text,n=e.type,r=e.styleAs,s=e.color,c=e._wordBreak,l=e.className,d=e.hasBottomSpacing,p=e.isTruncated,m=e.maxLines,f=e.tooltip,g=e["data-testid"],y=e["data-click"],w=(0,i.useState)(!1),v=(0,a.Z)(w,2),x=v[0],b=v[1],E=o().createElement(h,{as:n,styleAs:r,color:s,className:l,"data-aether-id":"aether-heading","data-testid":g,"data-click":y,hasBottomSpacing:d,isTruncated:p,maxLines:m,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?b(!0):b(!1)},wordBreak:c},t);return x&&(0,u.LX)(e)?(0,u.Ur)(E,f||t):E}f.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},f.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,r.Z)(Object.keys(p.globals.colors)),(0,r.Z)(Object.keys(p.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,r=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}},5736:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(540),a=n.n(r),i=n(1314),o=n.n(i),s=n(9530),c=n.n(s),l=n(9460),d=n(8560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),u=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),m=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function h(e){var t=e.description,n=e.className,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:r},a().createElement(u,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),t&&a().createElement(m,{color:o},t))}h.defaultProps={description:"",className:"","data-testid":"aether-spinner"},h.propTypes={description:o().string,className:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string};var f=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),g=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),y=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),w=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),y);function v(e){var t=e.className,n=e.description,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(f,{className:t,type:r},a().createElement(w,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),a().createElement(g,{color:o},n))}function x(e){var t=e.size,n=e.className,r=e.description,i=e.type,o=e["data-testid"];return"small"===t?a().createElement(h,{type:i,className:n,description:r,"data-testid":o}):"large"===t?a().createElement(v,{type:i,description:r||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":o}):null}v.defaultProps={className:"",description:"","data-testid":"aether-spinner"},v.propTypes={className:o().string,description:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string},x.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},x.propTypes={size:o().oneOf(["small","large"]),className:o().string,type:o().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":o().string}}}]);
//# sourceMappingURL=8225.83c1485502cbfd88.js.map