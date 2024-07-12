/*! For license information please see 8137.c8a7131e9d84b339.js.LICENSE.txt */
"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[8137,7560,2389,7204],{607560:(e,t,n)=>{function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:()=>l})},808137:(e,t,n)=>{n.r(t),n.d(t,{FeatureFlagsProvider:()=>b,useFeatureFlag:()=>u,withFeatureFlagsConsumer:()=>d});var l=n(178439),a=n(607560);const r=({options:e,allFlags:t,ldClient:n})=>{var l,r;const{flagName:u,defaultValue:o,requiredAttributesInContext:s=[]}="defaultValue"in e?e:(0,a.Z)({},e,{defaultValue:void 0}),i=null!=(l=null==n||null==(r=n.getContext())?void 0:r.custom)?l:{},d=(null==s?void 0:s.length)>0&&!s.every((e=>e in i))?o:t[u];return null!=d?d:t[u]};function u(e){const t=(0,l.useFlags)(),n=(0,l.useLDClient)();return{value:r({allFlags:t,ldClient:n,options:e})}}var o=n(540540),s=n(552322);const i={ldClient:void 0,flags:void 0};function d(e){return(0,l.withLDConsumer)()((t=>{const n=(0,l.useFlags)(),u=(0,l.useLDClient)();return(0,s.jsx)(e,(0,a.Z)({},t,i,{getFlagsValue:e=>r({options:e,ldClient:u,allFlags:n})}))}))}var c=n(926663),v=n.n(c),f=n(613101);const g=()=>(0,f.isLoggedIn)()?{kind:"user",key:(0,f.getUserId)(),custom:{platform:window.SDK_PLATFORM,appVersion:window.APP_VERSION,releaseChannel:window.NX_RELEASE_CHANNEL,analyticsEnabled:"browser"===window.SDK_PLATFORM,userCreatedAt:0,daysSinceUserCreate:0,emailDomain:"",isPaidPlanGrowth:!1,teamSize:0,roles:[],teamCreatedAt:0,daysSinceTeamCreate:0,webFnCustomPlanId:""}}:{kind:"anonymous",key:"0",custom:{platform:window.SDK_PLATFORM,appVersion:window.APP_VERSION,releaseChannel:window.NX_RELEASE_CHANNEL,analyticsEnabled:"browser"===window.SDK_PLATFORM}};var m=n(916669),C=n(588749);function _(e){return e&&+new Date(e)||0}function p(e){if(!e)return null;const t=new Date,n=new Date(e);return Math.floor(Math.abs(t.getTime()-n.getTime())/864e5)}const w=(0,o.createContext)(void 0),F=({passedInFeatureFlagContext:e,children:t,debounceInterval:n=200})=>{const[r,u]=(0,o.useState)([]),i=(0,o.useRef)(!1),d=(0,l.useLDClient)(),c=(0,o.useCallback)((e=>{u((t=>[...t,e]))}),[]),{loggedInUserCustomAttributes:v,isCustomAttributesLoading:g,externalUserId:F}=function(e){var t,n,r;const u=(0,f.getUserId)(),s=(0,f.isLoggedIn)(),i=(0,l.useLDClient)(),{data:d,isLoading:c}=(0,m.useTeamsByUserId)({overrideQueryParams:{billing:!0},enabled:s}),{data:v,isLoading:g}=(0,m.useExternalId)({userId:u,enabled:s}),{data:w,isLoading:F}=(0,m.useUserInfo)({userId:u,enabled:s}),{data:y,isLoading:I}=(0,C.useGetPlanFeatures)(u,s),b=null!=(t=null==d||null==(n=d.organizations)?void 0:n.find((e=>e.id===(0,f.getTeamId)())))?t:void 0,x=c||F||I||g,h=(0,o.useMemo)((()=>{var t,n,l,r,u,o,d,c,v,f,g;return x||!s?void 0:(0,a.Z)({},null==i?void 0:i.getContext().custom,null==e?void 0:e.custom,{userCreatedAt:_(null!=(t=null==w?void 0:w.created_at)?t:null),daysSinceUserCreate:p(null!=(n=null==w?void 0:w.created_at)?n:null)||0,emailDomain:null!=(l=null==w||null==(r=w.email)?void 0:r.split("@")[1])?l:"",teamSize:null!=(u=null==b?void 0:b.team_size)?u:0,roles:(null!=(o=null==b?void 0:b.roles)?o:"").split(","),teamCreatedAt:_(null!=(d=null==b?void 0:b.created_at)?d:null),daysSinceTeamCreate:p(null!=(c=null==b?void 0:b.created_at)?c:null)||0,webFnCustomPlanId:null!=(v=null==b?void 0:b.plan)?v:null,isPaidPlanGrowth:null!=(f=null==y||null==(g=y.data)||null==(g=g.features.is_paid_plan_growth)?void 0:g.value)&&f})}),[x,s,i,null==e?void 0:e.custom,null==w?void 0:w.created_at,null==w?void 0:w.email,null==b?void 0:b.team_size,null==b?void 0:b.roles,null==b?void 0:b.created_at,null==b?void 0:b.plan,null==y||null==(r=y.data)?void 0:r.features]);return{isCustomAttributesLoading:x,loggedInUserCustomAttributes:h,externalUserId:null!=v?v:(0,f.getUserId)()}}(e);(0,o.useEffect)((()=>{g||c(v)}),[c,g,v]);const I=((e,t)=>{const n=(0,o.useRef)(null);return(0,o.useCallback)((()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(e,t)}),[e,t])})((0,o.useCallback)((async()=>{if(!i.current&&0!==r.length){const t=y({contextUpdateQueue:r,currentFeatureFlagsContext:null==d?void 0:d.getContext(),externalUserId:F,passedInFeatureFlagContext:e});i.current=!0;try{await(null==d?void 0:d.identify(t)),u([])}catch(e){throw new Error(`Error occurred while updating feature flags context: ${e}`)}finally{i.current=!1}}}),[r,d,F,e]),n);return(0,o.useEffect)((()=>{I()}),[I]),(0,s.jsx)(w.Provider,{value:{addCustomAttributesUpdateToQueue:c},children:t})},y=({contextUpdateQueue:e,currentFeatureFlagsContext:t,externalUserId:n,passedInFeatureFlagContext:l})=>e.reduce(((e,l)=>{const r=(0,a.Z)({},e.custom,l);return(0,a.Z)({},t,{key:n,custom:r})}),(0,a.Z)({},t,l,{custom:(null==t?void 0:t.custom)||{}})),I={useCamelCaseFlagKeys:!1};function b({children:e,featureFlagsContext:t}){const n=v().LAUNCH_DARKLY_CLIENT_SIDE_ID;return n?(0,s.jsx)(l.LDProvider,{clientSideID:n,context:g(),reactOptions:I,children:(0,s.jsx)(F,{passedInFeatureFlagContext:t,children:e})}):(0,s.jsx)(s.Fragment,{children:e})}},811837:(e,t,n)=>{var l=n(540540),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;a=r("react.element"),t.Fragment=r("react.fragment")}var u=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var l,r={},i=null,d=null;for(l in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,l)&&!s.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:a,type:e,key:i,ref:d,props:r,_owner:u.current}}t.jsx=i,t.jsxs=i},552322:(e,t,n)=>{e.exports=n(811837)}}]);
//# sourceMappingURL=8137.c8a7131e9d84b339.js.map