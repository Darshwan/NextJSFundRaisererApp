"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[1004,7119],{77119:(s,t,e)=>{e.r(t),e.d(t,{useFetchNotifications:()=>b,useNotificationSubscription:()=>o});var r=e(40540),i=e(45860);const n=new class{constructor(){var s=this;this.observer=null,this.abortController=null,this.asyncObserver=null,this.subscriptionsMap={},this.publishEventToSubscriptions=s=>{for(const t of Object.values(this.subscriptionsMap))try{t(s)}catch(s){}},this.init=async function(){const{asyncObserver:t,abortController:e}=(()=>{const s=new AbortController;return{asyncObserver:i.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"get",url:"/notification/subscribe",body:{}},subscriptionEvents:["create"],responseFilter:s=>{var t;return null==s||null==(t=s.body)?void 0:t.model_id},broadcastFilter:s=>{var t;return null==s||null==(t=s.data)||null==(t=t.variables)?void 0:t._user_id},unsubscribeRequest:{method:"delete",url:"/notification/subscribe",body:{}}}),abortController:s}})();s.abortController=e,s.asyncObserver=t,s.observer=await t,s.abortController=null,s.observer.subscribe({next:t=>{s.publishEventToSubscriptions(t)},complete:()=>{s.unsubscribe()},error:async function(t){s.cleanup(),await s.init()}})},this.subscribe=({subscribingEntityId:s,subscriptionHandler:t})=>{if(s)return this.subscriptionsMap[s]=t,this.observer&&this.asyncObserver||this.init(),()=>{delete this.subscriptionsMap[s],0===Object.keys(this.subscriptionsMap).length&&this.unsubscribe()}},this.unsubscribe=()=>{var s,t;null==(s=this.abortController)||s.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null,this.subscriptionsMap={}}}},o=(s,t)=>{(0,r.useEffect)((()=>{if(s){const e=n.subscribe({subscribingEntityId:s,subscriptionHandler:t});return()=>{e&&e()}}}),[])};var u=e(97201),a=e(26663),l=e.n(a);const b=({limit:s,type:t,events:e,groupByType:r,useErrorBoundary:n,signal:o})=>(0,u.useDataFetch)((({limit:s,type:t,events:e,groupByType:r,useErrorBoundary:n,signal:o})=>({queryKey:["notifications-list"],queryFn:()=>(async({limit:s,type:t,events:e,groupByType:r,signal:n})=>{const o=new URLSearchParams;if(s&&o.append("limit",`${s}`),t&&o.append("type",t),"boolean"==typeof r&&o.append("groupByType",`${r}`),e)for(const s of e)s&&o.append("events",s);const u=o.toString();return await i.postmanGateway.get({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/notification?${u}`,signal:n})})({limit:s,type:t,events:e,groupByType:r,signal:o}),useErrorBoundary:n}))({limit:s,type:t,events:e,groupByType:r,useErrorBoundary:n,signal:o}))}}]);
//# sourceMappingURL=1004.f2137e891c1f356b.js.map