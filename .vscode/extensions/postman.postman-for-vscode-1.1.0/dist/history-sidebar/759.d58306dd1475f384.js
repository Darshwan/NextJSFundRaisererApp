"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[759,9875],{57494:(e,t,s)=>{s.r(t),s.d(t,{createVariableUpdatesHandler:()=>k,deleteDependentSession:()=>m,getActiveSession:()=>f,getSession:()=>u,setSession:()=>c,subscribeToSession:()=>h,updateDependentSession:()=>p,useSession:()=>I,useSessionSafe:()=>S});var n=s(7560),a=s(29875);const i=({model:e,modelId:t})=>{if(!e||!t)throw new Error("Invalid model or modelId");return[e,t].join("/")},o=e=>{const t=String(e).split("/");if(2!==t.length)throw new Error("Invalid sessionId");const[s,n]=t;if(!s||!n)throw new Error("Invalid sessionId");return{model:s,modelId:n}},r=new a.KVStorage("variable-session"),l=e=>r.get(e),u=e=>{const t=i(e);return l(t)},d=(e,t)=>{const s=(n=t,JSON.parse(JSON.stringify(n)));var n;return r.set(e,s)},c=(e,t)=>{const s=i(e);return d(s,t)},h=(e,t)=>{const s=i(e);return r.subscribe(s,t)},v=()=>r,p=async({model:e,modelId:t},s)=>{try{var a;const i=((e,t)=>{const s=new Set,a=e.values;return{values:t.values.reduce(((e,t)=>{let i=a.findIndex(((e,n)=>e.key===t.key&&e.enabled===t.enabled&&!s.has(n)));if(-1!==i)e.push((0,n.Z)({},a[i])),s.add(i);else if(-1===(i=a.findIndex((e=>e.key===t.key&&!s.has(i)))))e.push({key:t.key,value:t.value,enabled:t.enabled,type:t.type}),s.add(a.length-1);else{const n=a[i];e.push({key:t.key,enabled:t.enabled,type:t.type,value:n.value}),s.add(i)}return e}),[])}})(null!=(a=await u({model:e,modelId:t}))?a:{values:[]},s);await c({model:e,modelId:t},i)}catch(e){}},m=async e=>{await(e=>{const t=i(e);return r.remove(t)})(e)},f=async(e,t)=>{var s;if(!t)throw new TypeError("No item found");const a=await u(e),o=((e,t=new Set)=>s=>{const n=(a=s,e=>a.key===e.key&&a.enabled===e.enabled&&a.type===e.type);var a;const i=e.findIndex(((e,s)=>n(e)&&!t.has(s)));return-1===i?null:(t.add(i),e[i])})(null!=(s=null==a?void 0:a.values)?s:[]),r=t.values.map((e=>{const t=o(e);return{key:e.key,value:t?t.value:e.value,enabled:e.enabled,type:e.type}})).filter((e=>!1!==e.enabled));return(0,n.Z)({},t,{id:i(e),values:r})};class y{static isMutationsDefinition(e){return"object"==typeof e}constructor(e){if(this.autoCompact=void 0,this.compacted=void 0,this.stream=void 0,e||(e={}),!y.isMutationsDefinition(e))throw new Error("Invalid mutations");this.autoCompact=e.autoCompact||!0,this.compacted="object"==typeof e.compacted?(0,n.Z)({},e.compacted):{},this.stream=Array.isArray(e.stream)?[...e.stream]:[]}applyOn(e){const t=t=>{e.applyMutation(2===t.length?"set":"unset",t[0],t[1])};for(const e of Object.values(this.compacted))t(e);for(const e of this.stream)t(e)}addMutation(e){const t=e[0],s=Array.isArray(t)?t.join("."):t;this.compacted[s]=e}compact(){for(const e of this.stream)this.addMutation(e);this.stream=[]}count(){return Object.keys(this.compacted).length+this.stream.length}}class b{static isVariableScopeDefinition(e){return"object"==typeof e&&null!==e&&"values"in e}constructor(e){if(this.id=void 0,this.values=void 0,this.mutations=void 0,!b.isVariableScopeDefinition(e))throw new Error("Invalid variable scope definition");this.id=e.id,this.values=[...e.values],this.mutations=new y(e.mutations)}set(e,t){const s=((t,s)=>{for(let s=t.length-1;s>=0;s--)if((n=t[s]).key===e&&!1!==n.enabled)return s;var n;return-1})(this.values);-1!==s?this.values[s]=(0,n.Z)({},this.values[s],{value:t}):this.values.push({key:e,value:t,type:"default",enabled:!0})}unset(e){this.values=this.values.filter((t=>!(t.enabled&&t.key===e)))}applyMutation(e,t,s){"set"===e?this.set(t,s):"unset"===e&&this.unset(t)}}class w{triggerOnDoneCallback(){for(const e of this.onDoneCallbacks)e();this.onDoneCallbacks=[]}processQueue(){if(0===this.queue.length)return this.isQueued=!1,void this.triggerOnDoneCallback();const e=[...this.queue];this.queue=[],Promise.allSettled([this.handler(...e),new Promise((e=>setTimeout(e,this.interval)))]).finally((()=>{this.processQueue()})).catch((()=>{}))}constructor(e,t){this.queue=[],this.isQueued=!1,this.onDoneCallbacks=[],this.handler=void 0,this.interval=void 0,this.handler=e,this.interval=t.interval}add(...e){this.queue.push(e),this.isQueued||(this.isQueued=!0,setTimeout((()=>{this.processQueue()}),this.interval))}onDone(e){this.onDoneCallbacks.push(e)}}const k=e=>new w((e=>async(...t)=>{const s=t.map((([e,t])=>({scope:new b(e),meta:t})));var a,i;const r=Object.values((a=s,i=({scope:e})=>e.id,a.reduce(((e,t)=>{const s=i(t),a=e[s]||[];return(0,n.Z)({},e,{[s]:[...a,t]})}),{}))).map((e=>{const[t,...s]=e;return s.reduce(((e,{scope:t})=>{const s=e.scope.mutations,n=t.mutations;for(const e of Object.values(n.compacted))s.addMutation(e);for(const e of n.stream)s.addMutation(e);return e}),t)})).map((async({scope:t,meta:s})=>{const a=t.id;try{const{model:t}=o(a);if(t!==e.model)return}catch(e){return}const{modelId:i}=o(a),r=await e.getValues(i,s);if(!r)return;const u=await e.hasEditPermission(i,s);await(async(e,{hasEditPermission:t})=>{const s=await l(e.id);if(!s||!e.mutations.count())return;const a=new b(s);if(e.mutations.applyOn(a),!1!==t)await d(e.id,(0,n.Z)({},s,{values:a.values}));else{const t=new Set,i=[];for(const[,e]of s.values.entries()){if(!1===e.enabled){i.push(e);continue}const s=a.values.findIndex(((s,n)=>s.key===e.key&&s.enabled===e.enabled&&!t.has(n)));-1===s?i.push((0,n.Z)({},e,{value:void 0,deleted:!0})):(t.add(s),i.push(a.values[s]))}await d(e.id,(0,n.Z)({},s,{values:i}))}})(t,{hasEditPermission:u}),await(async(e,t,s,a,{hasEditPermission:i})=>{if(!1===i)return;const{modelId:r}=o(e.id),l=[...t.values],u=new b(t);e.mutations.applyOn(u);let d=!1;const c=new Set;for(const e of u.values){if(!1===e.enabled)continue;const s=t.values.findIndex(((t,s)=>t.key===e.key&&t.enabled===e.enabled&&!c.has(s)));-1===s?(l.push((0,n.Z)({},e,{value:""})),d=!0):c.add(s)}c.clear();for(const[e,t]of l.entries()){if(!t||!1===t.enabled)continue;const s=u.values.findIndex(((e,s)=>e.key===t.key&&e.enabled===t.enabled&&!c.has(s)));-1===s?(l[e]=null,d=!0):c.add(s)}if(!d)return;const h=l.filter((e=>!!e));await a.setValues(r,h,s)})(t,r,s,e,{hasEditPermission:u})}));await Promise.allSettled(r)})(e),{interval:1e3}),I=e=>(0,a.useKVStorage)(v(),i(e)),S=({model:e,modelId:t})=>{const s=e&&t?i({model:e,modelId:t}):"";return(0,a.useKVStorage)(v(),s)}}}]);
//# sourceMappingURL=759.d58306dd1475f384.js.map