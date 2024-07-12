"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[4888,7560,4591],{7560:(e,t,s)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},r.apply(this,arguments)}s.d(t,{Z:()=>r})},84888:(e,t,s)=>{s.r(t),s.d(t,{ACCESS_CONTROL_QUERY_KEY_PREFIX:()=>l,ALL_ROLES:()=>i,DEFAULT_ROLES:()=>u,ENTITY_PERMISSIONS_QUERY_KEY:()=>p,entityPermissionsQuery:()=>d,getAllRolesForObjectType:()=>c,getDefaultRolesForObjectType:()=>g,getDefaultRolesMap:()=>m,getRolesData:()=>_,getRolesForObject:()=>y,getUserGroupsFromRoles:()=>G,segregateGroupRoles:()=>v,useEntityPermissions:()=>k,useFetchAssociatedRoles:()=>h,useFetchDefaultRolesForObjectType:()=>E,useFetchRolesForObject:()=>j,useFetchRolesForObjectType:()=>T,validateRolesAssignment:()=>o});var r=s(45860),a=s(26663),n=s.n(a);const o=async({signal:e,validationCriteria:t})=>await r.postmanGateway.post({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/validations/role-assignment",data:{body:{validations:t},service:"acs"},signal:e}),l="acs",i="all-roles",u="default-roles",p="entity-permissions",c=({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:a})=>({queryKey:[l,i,t],queryFn:()=>(async({signal:e,objectType:t,getGuestConfig:s=!1,partnerWorkspaceEnabled:a=!1})=>await r.postmanGateway.post({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,service:"acs",path:"/api/roles/list/by-objects",data:{body:{getGuestConfig:s,partnerWorkspaceEnabled:a,objects:[t]},query:{guest:s,include:"state",partner:a,permissions:!0,populate:!0,type:"all"}},signal:e}))({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:a}),enabled:!!t,useErrorBoundary:!1}),y=({signal:e,objectType:t,objectId:s,getGuestConfig:a,partnerWorkspaceEnabled:o})=>({queryKey:[l,i,t,s],queryFn:()=>(async({signal:e,objectType:t,objectId:s,getGuestConfig:a=!1,partnerWorkspaceEnabled:o=!1})=>await r.postmanGateway.post({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,service:"acs",path:"/api/roles/list-by-object",data:{body:{item:{getGuestConfig:a,objectId:s,objectType:t,partnerWorkspaceEnabled:o}},query:{guest:a,include:"state",partner:o,permissions:!0,populate:!0,type:"all"}},signal:e}))({signal:e,objectType:t,objectId:s,getGuestConfig:a,partnerWorkspaceEnabled:o}),enabled:!!s&&!!t,useErrorBoundary:!1}),g=({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:a})=>({queryKey:[l,u,t],queryFn:()=>(async({signal:e,objectType:t,getGuestConfig:s=!1,partnerWorkspaceEnabled:a=!1})=>await r.postmanGateway.get({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/roles/default`,query:{objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:a},signal:e}))({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:a}),enabled:!!t,useErrorBoundary:!1}),d=({signal:e,entityId:t,permissions:s})=>({queryKey:[p,t],queryFn:()=>(async({permissions:e,signal:t})=>await r.postmanGateway.post({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:e},signal:t}))({signal:e,permissions:s}),enabled:!!t,useErrorBoundary:!1});var b=s(97201);const T=(e,t,s)=>(0,b.useDataFetch)(c({objectType:e,getGuestConfig:t,partnerWorkspaceEnabled:s})),E=(e,t,s)=>(0,b.useDataFetch)(g({objectType:e,getGuestConfig:t,partnerWorkspaceEnabled:s})),j=(e,t,s,r)=>(0,b.useDataFetch)(y({objectType:e,objectId:t,getGuestConfig:s,partnerWorkspaceEnabled:r})),R=(e,t,s)=>Array.isArray(e)?0===e.length?s:e.reduce(((e,s,r,a)=>t(e,s,r,a)||e),s):"object"==typeof e?0===Object.keys(e).length?s:Object.keys(e).reduce(((s,r,a,n)=>t(s,e[r],r,n)||s),s):s;var f=s(7560);const m=(e,t)=>{const s={};for(const a of["user","team","guest","partner"]){var r;const n=null==t||null==(r=t.listing)||null==(r=r[a])||null==(r=r[e])?void 0:r.roles;n&&(s[a]=n[0])}return s},v=(e,t)=>{const s=new Set(t.map((e=>e.id.toString()))),r={},a={};for(const[t,n]of Object.entries(e))s.has(t)?r[t]=n:a[t]=n;return{userGroupRoles:r,otherGroupRoles:a}},G=(e,t)=>R(e,((e,s,r)=>{const a=t.find((e=>`${e.id}`==`${r}`));return a&&(e[r]=(0,f.Z)({},a,{canRemove:!0,value:a.name})),e}),{}),_=(e,t,s,r,a)=>{const n=[],o=(0,f.Z)({},s,r);null!=a&&a.id&&(o[a.id]=a);for(const[,s]of Object.entries(o))n.push({entityId:s.id,entityType:s.type,roles:{[s.name]:{objects:[{objectId:t,objectType:e}]}}});return n},h=()=>(e,t,s,r)=>{var a,n;const o=s.objects[e],l=[...s.roleOrder[e]].reverse()||[],i=t.listing,u=m(e,r),p=null==(a=s.wrapperData)||null==(a=a.guest)?void 0:a[e],c=null==(n=s.wrapperData)||null==(n=n.partner)?void 0:n[e];return{defaultRoles:u,rolesList:o,userCurrentRoles:R(null==i?void 0:i.user,((e,t,s)=>{var r;return e[s]={type:"user",id:s,name:null==t||null==(r=t.roles)?void 0:r[0]},e}),{}),teamCurrentRoles:R(null==i?void 0:i.team,((e,t,s)=>{var r;return e[s]={type:"team",id:s,name:null==t||null==(r=t.roles)?void 0:r[0]},e}),{}),groupCurrentRoles:R(null==i?void 0:i.group,((e,t,s)=>{var r;return e[s]={type:"group",id:s,name:null==t||null==(r=t.roles)?void 0:r[0]},e}),{}),rolesOrder:l,guestRoles:p,partnerRoles:c}},k=(e,t)=>(0,b.useDataFetch)(d({entityId:e,permissions:t}))}}]);
//# sourceMappingURL=4888.fa57ab5efc6f7345.js.map