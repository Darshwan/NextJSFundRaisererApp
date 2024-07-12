"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[5485],{55485:(e,t,n)=>{n.d(t,{Z:()=>Ft});var i=n(40540),r=n.n(i),o=n(59530),s=n.n(o),a=n(58560),l=n(25637),c=n(35736),d=n(82196),u=n(64495),h=n(80605),p=n(26246),m=n(98276),f=n(50297),g=n(60607),v=n(98283),b=n(78476);const x="New Folder";var y=n(1590),w=n(52322);const S=(0,i.lazy)((0,y.loadRemoteModule)("code-editor/CodeEditor")),C=r().forwardRef(((e,t)=>(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)(c.Z,{}),children:(0,w.jsx)(S,Object.assign({},e,{ref:t}))})));var j=n(39245),k=n(49709),_=n.n(k),I=n(63622),E=n(3341),T=n(3071);const A=s()(a.Z).withConfig({displayName:"right-scripts-panel__LeftSection",componentId:"sc-1ec0dc9-0"})(["flex:1;"]),L=s().div.withConfig({displayName:"right-scripts-panel__SectionBody",componentId:"sc-1ec0dc9-1"})(["flex:1;overflow:hidden;height:100%;margin-top:var(--spacing-l);margin-right:calc(-1 * var(--spacing-xxl));"]);function P(e){const[t,n]=(0,i.useState)(!0);return(0,w.jsxs)(a.Z,{height:"100%",children:[t&&(0,w.jsxs)(A,{direction:"column",children:[(0,w.jsx)("div",{children:e.header}),(0,w.jsx)(L,{children:e.children})]}),(0,w.jsx)("div",{children:(0,w.jsx)(h.Z,{onClick:()=>n((e=>!e)),type:"tertiary",icon:t?(0,w.jsx)(E.Z,{}):(0,w.jsx)(T.Z,{})})})]})}const N=s().h5.withConfig({displayName:"snippet-layout-components__SnippetTitle",componentId:"sc-m4h292-0"})(["flex:0;margin:var(--spacing-zero);margin-bottom:var(--spacing-xs);font-weight:var(--text-weight-bold);word-break:normal;font-size:var(--text-size-m);line-height:1.4;color:var(--content-color-secondary);"]),R=s().ul.withConfig({displayName:"snippet-layout-components__SnippetList",componentId:"sc-m4h292-1"})(["position:relative;z-index:1;overflow:auto;height:calc(100% - var(--spacing-l));flex:1;margin:var(--spacing-zero);padding:var(--spacing-zero);padding-right:var(--spacing-l);color:var(--content-color-link);box-sizing:border-box;font-family:var(--text-family-default);"]),O=s().li.withConfig({displayName:"snippet-layout-components__SnippetListItem",componentId:"sc-m4h292-2"})(["list-style:none;user-select:none;cursor:pointer;padding:var(--spacing-s) var(--spacing-zero);"]),F=_().getExamples("prerequest");function Z({onSelect:e}){return(0,w.jsx)(P,{header:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(I.ZP,{type:"small",children:"Pre-request scripts are written in JavaScript, and are run before the request is sent. Learn more about "}),(0,w.jsx)(j.Link,{to:"https://go.pstmn.io/docs-prerequest-scripts",target:"_blank",children:(0,w.jsx)(I.ZP,{type:"link-default",isExternal:!0,children:"pre-request scripts"})})]}),children:(0,w.jsxs)(a.Z,{direction:"column",height:"100%",children:[(0,w.jsx)(N,{children:"Snippets"}),(0,w.jsx)(R,{children:F.map(((t,n)=>(0,w.jsx)(O,{"data-id":n,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},n)))})]})})}const z=s()(a.Z).withConfig({displayName:"scripts-panel-layout__FullHeightContainer",componentId:"sc-7b6861-0"})(["height:calc(100% - var(--spacing-s));"]),D=s().div.withConfig({displayName:"scripts-panel-layout__LeftPanel",componentId:"sc-7b6861-1"})(["flex:1 1 70%;border:var(--border-width-default) var(--border-style-solid) var(--border-color-strong);border-radius:var(--border-radius-default);width:calc(100% - ","px - var(--text-size-m));"],250),M=s().div.withConfig({displayName:"scripts-panel-layout__RightPanel",componentId:"sc-7b6861-2"})(["flex:0 0 auto;max-width:","px;padding-left:var(--spacing-m);font-size:var(--text-size-s);"],250);function q(e){return(0,w.jsx)(a.Z,{direction:"column",height:"100%",children:(0,w.jsxs)(z,{children:[(0,w.jsx)(D,{"data-testid":"script-left-panel",children:e.leftPanel}),(0,w.jsx)(M,{"data-testid":"script-right-panel",children:e.rightPanel})]})})}function V(){const e=pe();return[e.preRequestStore.content,e.setPreRequestScript]}function $(){const e=pe();return[e.testScriptStore.content,e.setTests]}const U=e=>e.charAt(0).toUpperCase()+e.slice(1),W=e=>"string"==typeof e?e:"object"==typeof e?JSON.stringify(e):String(e),H=()=>{const{data:e}=(0,m.useActiveAndDynamicVariables)();return(0,i.useCallback)(((t,n)=>{const i=new RegExp(/pm.(environment|globals|collectionVariables|variables).(((get|set|unset|has)\(('|").*))$/),r=t.getWordBeforePosition(n);let o=t.getLineContent(n.lineNumber);o&&(o=o.slice(0,Math.max(0,n.column-1)));let s=[];const a=i.exec(o);if(!a||a.length<6)return[];const l=a[1],c=e;let d=[];if(!c)return[];const u={globals:"globals",environment:"environment",collectionVariables:"collection"};if("variables"===l)d=c.filter((e=>W(e.key).toLowerCase().includes(r.word.toLowerCase())));else if(u[l]){const e=u[l];d=c.filter((t=>t.scope===e&&"dynamic"!==t.type&&W(t.key).toLowerCase().includes(r.word.toLowerCase())))}return h=d,p={startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:r.startColumn,endColumn:r.endColumn},s=h.map((e=>{let t={environment:"a",collection:"b",global:"c"}[e.scope]||"y";return"dynamic"===e.type?(t="z",{label:e.key,detail:`Details: ${W(e.description)}`,documentation:`Scope: ${U(e.scope)}\n\n`,insertText:e.key,range:p,sortText:`${t}-${e.key}`}):{label:e.key,detail:`Current: ${e.sessionValue}`,documentation:`Initial: ${W(e.value)} \nScope: ${U(e.scope)}\n\n`,insertText:e.key,range:p,sortText:`${t}-${e.key}`}})),s;var h,p}),[e])},B=["jsLib","node","postman-collection","chai","pre-script"],J=(0,f.observer)((function(){const e=(0,i.useRef)(null),[t,n]=V(),r=(0,i.useCallback)((t=>{var n;null==(n=e.current)||n.insertTextBlock(t)}),[]),o=H();return(0,w.jsx)(q,{leftPanel:(0,w.jsx)(C,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:n,typeDefinitionTypes:B}),rightPanel:(0,w.jsx)(Z,{onSelect:r})})})),K=_().getExamples("test");function Q({onSelect:e}){return(0,w.jsx)(P,{header:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(I.ZP,{type:"small",children:"Test scripts are written in JavaScript, and are run after the response is received. Learn more about "}),(0,w.jsx)(j.Link,{to:"https://go.pstmn.io/docs-test-scripts",target:"_blank",children:(0,w.jsx)(I.ZP,{type:"link-default",isExternal:!0,children:"tests scripts"})})]}),children:(0,w.jsxs)(a.Z,{direction:"column",height:"100%",children:[(0,w.jsx)(N,{children:"Snippets"}),(0,w.jsx)(R,{children:K.map(((t,n)=>(0,w.jsx)(O,{"data-id":n,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},n)))})]})})}const G=["jsLib","node","postman-collection","chai","tests-script"],Y=(0,f.observer)((function(){const e=(0,i.useRef)(null),[t,n]=$(),r=(0,i.useCallback)((t=>{var n;null==(n=e.current)||n.insertTextBlock(t)}),[]),o=H();return(0,w.jsx)(q,{leftPanel:(0,w.jsx)(C,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:n,typeDefinitionTypes:G}),rightPanel:(0,w.jsx)(Q,{onSelect:r})})})),X=s().div.withConfig({displayName:"indicator-dot__Dot",componentId:"sc-1ijn2f6-0"})(["display:inline-flex;width:calc(0.5 * var(--spacing-m));height:calc(0.5 * var(--spacing-m));margin-left:var(--spacing-xs);border-radius:calc(0.5 * var(--spacing-m));background-color:var(--base-color-success);&.error{background-color:var(--base-color-error);}"]),ee=({isError:e=!1})=>(0,w.jsx)(X,{"aria-label":e?"tab with errors":"tab with active values",className:e?"error":"","data-testid":"tab-indicator-dot"}),te=(0,f.observer)((({type:e="prerequest",title:t})=>{const[n]=V(),[i]=$(),r="test"===e?!!i:!!n;return(0,w.jsxs)(w.Fragment,{children:[t,r&&(0,w.jsx)(ee,{})]})}));var ne=n(60398);class ie{parsePayload(e){const t=null==e?void 0:e.filter((e=>e.listen===this.type))[0];return t?t.script.exec.join("\n"):""}constructor(e,t){this.type=void 0,this.content="",this.update=e=>{this.content=this.parsePayload(e)},this.setContent=e=>{this.content=e},this.type=e,this.content=this.parsePayload(t),(0,b.makeObservable)(this,{content:!0,setContent:b.action})}getPayload(){return this.content?[{listen:this.type,script:{id:(0,ne.v4)(),exec:this.content.split("\n"),type:"text/javascript"}}]:[]}}var re=n(53186),oe=n(97201),se=n(18767);const ae=e=>e&&"object"==typeof e?e.auth?{name:e.name,id:e.id,auth:e.auth,type:"folder"}:ae(e.folder):null;function le(e,t){var n,i,r,o;if(e===t)return!0;if(!e||!t)return!1;const s=(null==(n=e.find((e=>"test"===e.listen)))?void 0:n.script.exec)||[],a=(null==(i=t.find((e=>"test"===e.listen)))?void 0:i.script.exec)||[],l=(null==(r=e.find((e=>"prerequest"===e.listen)))?void 0:r.script.exec)||[],c=(null==(o=t.find((e=>"prerequest"===e.listen)))?void 0:o.script.exec)||[];return Array.isArray(s)&&Array.isArray(a)&&JSON.stringify(s)===JSON.stringify(a)&&Array.isArray(l)&&Array.isArray(c)&&JSON.stringify(l)===JSON.stringify(c)}const ce=["activeAuthType"];class de{constructor({folderId:e}){this.folderId=void 0,this.isLoading=!0,this.error=null,this.unsubscribeFromFolderCache=void 0,this.unsubscribeFromPermissionsCache=void 0,this.metadata={},this.preRequestScript="",this.tests="",this.preRequestStore=new ie("prerequest",[]),this.testScriptStore=new ie("test",[]),this.folderAuthState=Object.assign({activeAuthType:"noauth",type:"noauth"},se.initialAuthState),this.folderAuthSessionState=se.defaultAuthSession,this.trackedState={},this.isConflicted=!1,this.isSaving=!1,this.permissions={},this.inheritAuthParent=null,this.collection={},this.folder={},this.cachedFolderItem=void 0,this.startListeningToFolderCache=()=>{var e;const t=new oe.CacheObserver(oe.cacheClient,(0,re.folderFindOneQuery)({folderId:this.folderId})),n=t.getCurrentResult();this.onFolderCacheUpdate(n),this.cachedFolderItem=null==(e=n.data)?void 0:e.data,this.unsubscribeFromFolderCache=t.subscribe(this.onFolderCacheUpdate)},this.startListeningToCollectionsCache=e=>{if(e){const t=new oe.CacheObserver(oe.cacheClient,(0,re.collectionPermissionsQuery)({collectionId:e})),n=t.getCurrentResult();this.onCollectionPermissionsUpdate(n),this.unsubscribeFromPermissionsCache=t.subscribe((e=>{this.onCollectionPermissionsUpdate(e)}))}},this.onCollectionPermissionsUpdate=e=>{const t=e.data;t&&(0,b.runInAction)((()=>{this.permissions=t}))},this.setTrackedState=(e,t)=>{e&&(this.trackedState=Object.assign({},this.trackedState,{[e]:t}))},this.setPreRequestScript=e=>{(0,b.transaction)((()=>{this.preRequestStore.setContent(e);const t=[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()];this.setTrackedState("events",t)}))},this.setTests=e=>{(0,b.transaction)((()=>{this.testScriptStore.setContent(e);const t=[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()];this.setTrackedState("events",t)}))},this.setFolderAuthState=e=>{(0,b.transaction)((()=>{this.folderAuthState=e;const{activeAuthType:t}=e,n=(0,v.Z)(e,ce);if("inherit"===t)return void this.setTrackedState("auth",null);const i=Object.assign({},n,{type:t});this.setTrackedState("auth",i)}))},this.setFolderAuthSessionState=e=>{this.folderAuthSessionState=e},this.setMetadata=e=>{!this.metadata.collection&&e.collection&&this.startListeningToCollectionsCache(e.collection),this.metadata=e},this.setDescription=e=>{(0,b.transaction)((()=>{this.metadata.description=e,this.setTrackedState("description",this.metadata.description)}))},this.setIsSaving=e=>{this.isSaving=e},this.onFolderCacheUpdate=e=>{var t;const n=null==(t=e.data)?void 0:t.data;this.isLoading=!n&&!e.error,this.error=e.error;const{incomingChanges:i,isConflicted:r}=function(e,t,n,i){const r={};let o=!1;if(!t)return{incomingChanges:e,isConflicted:o};for(const i of["name","auth","events","description"])switch(i){case"events":le(e[i],t[i])||(n[i]?o=!0:r[i]=e[i]);break;case"auth":case"name":case"description":e[i]!==t[i]&&i in n?o=!0:e[i]!==t[i]&&(r[i]=e[i])}return{incomingChanges:r,isConflicted:o}}(n,this.cachedFolderItem,this.trackedState);var o;if(n&&this.isDirty&&!this.isSaving&&this.cachedFolderItem&&r&&(0,b.runInAction)((()=>{this.isConflicted=!0})),i&&Object.keys(i).length>0&&((0,b.runInAction)((()=>{var e,t,i,r;this.folderAuthState=!(r=null!=(e=this.trackedState.auth)?e:n.auth)||"object"==typeof r&&0===Object.keys(r).length?Object.assign({activeAuthType:"inherit",type:"inherit"},se.initialAuthState):Object.assign({},se.initialAuthState,r,{activeAuthType:r.type||"noauth"}),this.preRequestStore.update(null!=(t=this.trackedState.events)?t:n.events),this.testScriptStore.update(null!=(i=this.trackedState.events)?i:n.events)})),this.collection=n.collection,this.folder=n.folder,this.setMetadata({id:n.id,name:n.name,description:n.description,collection:null==(o=n.collection)?void 0:o.id}),this.cachedFolderItem=n),n){const e=(e=>{var t,n,i,r,o;let s=ae(e.folder);return s||(s=null!=(t=e.collection)&&t.auth?{id:null==(n=e.collection)?void 0:n.id,name:null==(i=e.collection)?void 0:i.name,auth:e.collection.auth,type:"collection"}:{id:null==(r=e.collection)?void 0:r.id,name:null==(o=e.collection)?void 0:o.name,auth:Object.assign({type:"noauth"},se.initialAuthState),type:"collection"},s)})(n);this.setInheritAuthParent(e)}},this.setInheritAuthParent=e=>{this.inheritAuthParent=e},this.folderId=e,(0,b.makeObservable)(this,{isLoading:!0,error:!0,breadcrumbs:b.computed,metadata:b.observable.ref,name:b.computed,setMetadata:b.action,preRequestScript:!0,folderAuthState:!0,setFolderAuthState:b.action,folderAuthSessionState:!0,setFolderAuthSessionState:b.action,tests:!0,setTests:b.action,onFolderCacheUpdate:b.action,isDirty:b.computed,trackedState:!0,setTrackedState:b.action,isConflicted:!0,setIsSaving:b.action,isSaving:!0,permissions:!0,inheritAuthParent:!0,setInheritAuthParent:b.action}),this.startListeningToFolderCache()}get isDirty(){return Object.keys(this.trackedState).length>0}get breadcrumbs(){return((e,t,n)=>{var i,r;let o=[],s={};return s={id:null!=(i=e.id)?i:"DEFAULT",name:null!=(r=null==e?void 0:e.name)?r:x,entityType:"leafFolder"},o=(0,re.getBreadcrumbItems)("",t,n),o.push(s),o})(this.metadata,this.collection,this.folder)}get name(){var e;return null!=(e=this.metadata.name)?e:x}resetTrackedStateChanges(){(0,b.runInAction)((()=>{this.trackedState={},this.isConflicted=!1}))}rollbackUpdates(e,t){(0,b.runInAction)((()=>{this.trackedState=e,this.isConflicted=t}))}destroy(){var e,t;null==(e=this.unsubscribeFromFolderCache)||e.call(this),null==(t=this.unsubscribeFromPermissionsCache)||t.call(this),this.trackedState={}}}const ue=(0,i.createContext)({}),he=({children:e})=>{if(!(0,g.useInRouterContext)())throw new Error("FolderEditorProvider must be used within a Router");const{folderId:t}=(0,g.useParams)(),n=(0,i.useMemo)((()=>new de({folderId:t})),[]);return(0,i.useEffect)((()=>()=>n.destroy()),[]),(0,w.jsx)(ue.Provider,{value:n,children:e})},pe=()=>{const e=r().useContext(ue);if(!e)throw new Error("useFolderEditorStore should be used within a FolderEditorContext.Provider");return e},me=()=>pe().name,fe=()=>{const e=pe();return[e.metadata,e.setMetadata]};var ge=n(49886),ve=n(24502);const be=()=>{const e=pe();return{isDirty:e.isDirty,isSaving:e.isSaving,isConflicted:e.isConflicted}},xe=["mutate"],ye=(0,re.updateFolderMutation)(),we=()=>{const e=pe(),t=(0,oe.useMutation)(ye),{mutate:n}=t,i=(0,v.Z)(t,xe);return Object.assign({mutate:t=>{const i=e.trackedState,r=e.isConflicted;return t&&(i.name=t),e.resetTrackedStateChanges(),e.setIsSaving(!0),n({folderId:e.folderId,patch:i},{onError:()=>{e.rollbackUpdates(i,r),(0,l.Am)({title:"Unable to save changes",description:"Could not save changes. Please try again.",status:"error"})},onSettled:()=>{e.setIsSaving(!1)}})}},i)},Se=we,Ce=new Set(["Alt","Meta","Control","Shift"]),je=()=>{var e,t;const n=pe();return 0===Object.keys(n.permissions).length?{canEdit:!0,canDelete:!0}:{canEdit:null==(e=n.permissions[re.CollectionPermissionNames.UPDATE_COLLECTION])?void 0:e.allowed,canDelete:null==(t=n.permissions[re.CollectionPermissionNames.DELETE_COLLECTION])?void 0:t.allowed}};var ke=n(38394),_e=n(95617),Ie=n(26663),Ee=n.n(Ie);const Te=({pathname:e})=>{const[t,n]=(0,i.useState)(!1),r=(0,i.useRef)(),o=(0,i.useCallback)((()=>{const t=Ee().ARTEMIS_URL;navigator.clipboard.writeText(t+e).then((()=>{n(!0),null!=r&&r.current&&clearTimeout(r.current),r.current=setTimeout((()=>{n(!1)}),1500)}))}),[e,r]);return(0,w.jsx)(h.Z,{type:"tertiary",className:"copy-link-btn",size:"small",icon:t?(0,w.jsx)(ke.Z,{size:"small",color:"base-color-success"}):(0,w.jsx)(_e.Z,{size:"small"}),onClick:o,tooltip:"Copy link to folder"})};var Ae=n(10099);const Le=(0,i.lazy)((0,y.loadRemoteModule)("collection-runner/RunCollectionButton")),Pe=s().div.withConfig({displayName:"folder-meta-header__FolderMetaHeaderContainer",componentId:"sc-1b6q3wk-0"})(["display:flex;flex-direction:'row';justify-content:space-between;box-sizing:border-box;height:48px;padding:var(--spacing-s) var(--spacing-s);border-bottom:var(--border-width-default) var(--border-style-solid) var(--border-color-default);"]),Ne=s().div.withConfig({displayName:"folder-meta-header__BreadcrumbContainer",componentId:"sc-1b6q3wk-1"})(["color:var(--content-color-primary);font-weight:var(--text-weight-medium);width:100%;nav{.copy-link-btn{display:none;}:hover{.copy-link-btn{display:inline-flex;}}}"]),Re=s()(a.Z).withConfig({displayName:"folder-meta-header__LeftSectionRow",componentId:"sc-1b6q3wk-2"})(["overflow:hidden;width:100%;"]),Oe=(0,f.observer)((()=>{const e=pe().breadcrumbs,t=me(),{isDirty:n,isConflicted:r}=be(),{canEdit:o}=je(),{mutate:s}=we(),[l]=fe(),h=(0,j.useNavigate)(),{pathname:p}=(0,j.useLocation)(),m=(0,Ae.useActiveWorkspaceId)(),f=e=>{e!==t&&s(e)},g=(0,i.useRef)(null),{rename:v}=(0,j.useAdditionalRouteContext)();(0,i.useEffect)((()=>{var e;v&&(null==(e=g.current)||e.triggerRenameMode())}),[v]);const{setTabTitle:b}=(0,j.useTabTitleMeta)();return(0,i.useEffect)((()=>{b(t,"folder",{isDirty:n,isConflicted:r})}),[t,n,r]),null!=l&&l.name?(0,w.jsx)(Re,{direction:"row",shrink:"1",grow:"0",alignItems:"center",gap:"spacing-s",children:(0,w.jsx)(Ne,{children:e&&(0,w.jsx)(d.aG,{metaInfo:{custom:(0,w.jsx)(a.Z,{alignItems:"center",gap:"spacing-s",children:!o&&(0,w.jsx)(ge.Z,{title:"You do not have permissions to edit this folder"})})},appendActions:(0,w.jsx)(Te,{pathname:p}),onItemClick:e=>{h(`/workspace/${m}/${e.entityType}/${e.id}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})},ref:g,children:e.map((e=>(0,w.jsx)(u.Z,{enableRename:"leafFolder"===e.entityType&&o,renameInputConfig:{onSubmit:f,value:t},itemData:e,children:e.name},e.name)))})})}):(0,w.jsx)(c.Z,{})})),Fe=(0,f.observer)((()=>{const{isDirty:e,isSaving:t,isConflicted:n}=be(),{mutate:r}=we(),{canEdit:o}=je(),s=(0,Ae.useActiveWorkspaceId)(),{userCanRunCollection:l}=(0,re.useWorkspacePermissions)(s),d=o&&e,u=me(),f=p.Modals.getModals(),[g]=fe(),v=async()=>{if(!o||!e)return;if(!n)return r();const t=await f.showWarningDialog({uid:"folder-workbench-tab-conflict-confirmation",subject:"DO YOU WANT TO SAVE?",message:`This tab ${u} has been modified from another tab. Saving these changes will overwrite this folder.`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Save and overwrite",isPrimary:!0}]});return t&&"Save and overwrite"===t.title?r():void 0};return(({ctrlKey:e,shiftKey:t,altKey:n,keys:r,callback:o})=>{const s=(0,i.useRef)([]),a=(0,i.useRef)(!1),l=(0,i.useRef)(!1),c=(0,i.useRef)(!1),d=(0,i.useRef)(null),u=(0,i.useRef)(o);u.current=o,(0,i.useEffect)((()=>{const i=i=>{if((i.ctrlKey||i.metaKey)&&(a.current=!0),i.shiftKey&&(l.current=!0),i.altKey&&(c.current=!0),!Ce.has(i.key)&&Array.isArray(r)){const e=r.findIndex((e=>e.toLowerCase()===i.key.toLowerCase()));-1!==e&&(s.current[e]=i.key)}const o=!e||a.current,h=!t||l.current,p=!n||c.current;if(d.current=setTimeout((()=>{a.current=!1,l.current=!1,c.current=!1,s.current=[]}),2500),o&&h&&p){if(Array.isArray(r)&&((e,t)=>{let n=0;for(const r of e){var i;if(r.toLowerCase()!==(null==(i=t[n])?void 0:i.toLowerCase()))return!1;n++}return!0})(r,s.current))return u.current();if(r===i.key)return u.current()}};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i),d.current&&clearTimeout(d.current)}}),[e,t,n,r])})({ctrlKey:!0,keys:"s",callback:v}),(0,w.jsxs)(a.Z,{className:"request-meta-header-right-section",direction:"row",alignItems:"center",gap:"spacing-s",children:[(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)(c.Z,{}),children:(0,w.jsx)(Le,{isDisabled:!l,collectionId:g.collection,folderId:g.id})}),(0,w.jsx)(h.Z,{type:"tertiary",text:t?"Saving...":"Save",isDisabled:!d||t,onClick:v,icon:(0,w.jsx)(ve.Z,{})}),(0,w.jsx)(m.ActiveEnvironmentSelector,{})]})})),Ze=()=>(0,w.jsxs)(Pe,{children:[(0,w.jsx)(Oe,{}),(0,w.jsx)(Fe,{})]});var ze=n(15761),De=n(27366),Me=n(71132),qe=n(27162),Ve=n(5246),$e=n(19578);const Ue=()=>{const e=pe();return[e.folderAuthState,e.setFolderAuthState]};var We=n(71453);const He=s()(a.Z).withConfig({displayName:"folder-no-auth__NoAuthContainer",componentId:"sc-1cr6t6a-0"})(["width:100%;height:100%;align-items:center;justify-content:center;text-align:center;"]),Be=s()(j.Link).withConfig({displayName:"folder-no-auth__AuthorizationLink",componentId:"sc-1cr6t6a-1"})(["display:inline-flex;align-items:center;text-decoration:underline;color:var(--content-color-secondary);"]),Je=()=>(0,w.jsxs)(Be,{type:"link-default",to:"https://go.pstmn.io/docs-auth",target:"_blank",rel:"noopener noreferer",children:["authorization",(0,w.jsx)(We.Z,{})]}),Ke=()=>(0,w.jsx)(He,{children:(0,w.jsxs)("div",{children:["This folder does not use any authorization. Learn more about ",(0,w.jsx)(Je,{})]})}),Qe=s()(a.Z).withConfig({displayName:"folder-inherit-auth__InheritAuthContainer",componentId:"sc-wwddkg-0"})(["align-items:center;justify-content:center;text-align:center;"]),Ge=s()(j.Link).withConfig({displayName:"folder-inherit-auth__StyledLink",componentId:"sc-wwddkg-1"})(["text-decoration:underline;"]),Ye=(0,f.observer)((()=>{const e=pe().inheritAuthParent,t=((e,t)=>{switch(null==e?void 0:e.type){case"folder":return`/workspace/${t}/folder/${e.id}`;case"collection":return`/workspace/${t}/collection/${e.id}`;default:return""}})(e,(0,Ae.useActiveWorkspaceId)()),n=(e=>{const t=se.supportedAuthOptions.find((t=>{var n;return t.value===(null==e||null==(n=e.auth)?void 0:n.type)}));return null==t?void 0:t.label})(e);return(0,w.jsx)(Qe,{children:(0,w.jsxs)("div",{children:["This folder is using ",n," from ",null==e?void 0:e.type," ",(0,w.jsx)(Ge,{to:t,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",children:null==e?void 0:e.name})]})})})),Xe=(0,f.observer)((function(){const[e,t]=Ue(),[n,r]=(()=>{const e=pe(),[t]=fe(),{value:n,setValue:r}=(0,se.useAuthSessionSafe)({model:"folder",modelId:t.id});return(0,i.useEffect)((()=>{n&&e.setFolderAuthSessionState(n)}),[n,e]),[e.folderAuthSessionState,(t,n)=>{const i=Object.assign({},e.folderAuthSessionState);i.oauth2||(i.oauth2=[]),i.oauth2=i.oauth2.filter((e=>"token_id"!==e.key)),i.oauth2.push({key:t,value:n}),r(i)}]})();return(0,w.jsx)(se.AuthPanel,{authState:e,authSessionState:n,authDescriptions:{[se.AUTH_OPTIONS.inherit]:(0,w.jsx)(Ye,{}),[se.AUTH_OPTIONS.noauth]:(0,w.jsx)(Ke,{})},setAuthState:t,setAuthSessionState:r})})),et=(0,f.observer)((()=>{const[e]=Ue(),t=!["noauth","inherit"].includes(e.activeAuthType);return(0,w.jsxs)(w.Fragment,{children:["Authorization",t&&(0,w.jsx)(ee,{})]})}));var tt=n(83701);function nt(e){const t=(0,i.useRef)();return t.current=e,(0,i.useCallback)(((...e)=>{const n=t.current;if(!n)throw new Error("Event handler wrapped in `useEventHandler` called during render, it may only be called in effects or at any other time.");return n(...e)}),[])}var it=n(43753);const rt=(0,i.lazy)((0,y.loadRemoteModule)("mimir-editor/MimirEditor")),ot=r().forwardRef(((e,t)=>(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)(c.Z,{}),children:(0,w.jsx)(rt,Object.assign({},e,{ref:t}))})));var st=n(21180),at=n(56880);const lt="Postman editor",ct="context-view",dt=s()(tt.Z).withConfig({displayName:"folder-description-editor__DocumentationResponsiveContainer",componentId:"sc-lzi92f-0"})(["position:relative;font-size:var(--text-size-m);line-height:var(--line-height-m);width:100%;cursor:text;box-sizing:border-box;margin-top:",";border-radius:var(--border-radius-default);border:var(--border-width-default) var(--border-style-solid) transparent;"," &:hover{background-color:var(--background-color-secondary);background-color:",";}& .description-preview{padding:0;&__placeholder{padding:var(--spacing-m);}&__markdown{padding:var(--spacing-m);}}& .mimir{min-height:","px !important;& .editor__container{margin-top:6px;height:fit-content;& div[data-slate-editor='true']{min-height:","px !important;padding:var(--spacing-m);max-height:fit-content;width:auto;box-sizing:border-box;}}& .toolbar__anchor{height:auto;background:var(--background-color-primary);display:",";align-items:center;z-index:100;position:sticky;top:0;margin-top:-36px;background-color:transparent;border-radius:var(--border-radius-default);& .slate-HeadingToolbar{width:100%;min-height:unset;border-radius:var(--border-radius-default) var(--border-radius-default);border:var(--border-width-default) solid var(--border-color-strong);box-shadow:",";height:28px;.toolbar__wrapper{padding-right:0;}.toolbar__info{display:none;}.toolbar__list{height:fit-content;}.toolbar__dropdown{top:30px;}.toolbar__dropdown__heading{cursor:pointer;}& .toolbar__toggle{display:flex;padding-right:",";& > button{height:22px;padding:0 4px;margin-top:3px;}& .aether-dropdown__control{background:transparent;height:28px;border:none;&--is-focused{border:none;box-shadow:none;&:hover{border:none;box-shadow:none;}}}}}}","}"," ",""],(e=>e.source===ct?"34px":"0"),(e=>e.editable&&e.editMode&&(0,o.css)(["border-color:var(--base-color-info);"])),(e=>e.editable&&!e.editMode?"var(--background-color-secondary)":"transparent"),(e=>e.minimumEditorHeight),(e=>e.minimumEditorHeight),(e=>e.isInViewPort?"flex":"none"),(e=>"0px 2px 4px "+(e.theme["content-color-primary"]===it.dark["content-color-primary"]?"rgba(0, 0, 0, 0.2)":"rgba(0, 0, 0, 0.05)")),(e=>e.source===ct?"var(--spacing-s)":"0"),(e=>!e.editMode&&(0,o.css)(["a{cursor:pointer;}.slate-codeblock-wrapper{cursor:pointer;& pre{cursor:text;}}.image-balloon-container,.image-handle.handle-right,.image-handle.handle-left,.link-balloon-container.edit,.media-balloon-container,.link-balloon-container{display:none;}.image-element.selected .image-item{opacity:1;box-shadow:unset;}"])),(e=>!e.editMode&&(0,o.css)(["[contenteditable] ~ grammarly-extension,input ~ grammarly-extension,textarea ~ grammarly-extension{display:none;}"])),(e=>e.editMode?(0,o.css)(["figure{.image-caption::placeholder{visibility:visible;}}"]):(0,o.css)(["figure{.image-caption::placeholder{visibility:hidden;}}"]))),ut=s().div.withConfig({displayName:"folder-description-editor__SavingLoader",componentId:"sc-lzi92f-1"})(["position:absolute;inset:0;background-color:var(--background-color-primary);opacity:0.75;z-index:1;transition:opacity 100ms ease-in-out;"]),ht=({source:e,onSave:t,editable:n,isOffline:r,entityType:o,placeholder:s,entityDescription:a,modelDetails:l,isEntityLoading:c,resolvedEntityDescription:d,minimumEditorHeight:u=75,disableMarkdownEditor:h=!1,updateParentAboutContainerDimension:p,isBigFontSize:m=!1})=>{var f,g;const v=(0,i.useRef)(),b=(0,i.useRef)(!1),[x,y]=(0,i.useState)(!1),[S,C]=(0,i.useState)(a),[k,_]=(0,i.useState)(lt),I=lt,[E,T]=(0,i.useState)(null!=d?d:a);(0,i.useEffect)((()=>{C(a),T(d)}),[a,d]);const A=nt((()=>{n&&(_(I),y(!0))})),[L,P]=((e,t,n)=>{const r=(0,i.useRef)(null),o=(0,i.useRef)(0),s=(0,i.useRef)(),a=(0,i.useRef)(!1),l=(0,i.useRef)(!1),[c,d]=(0,i.useState)(!1),u=nt((t=>{const n=t.target,i=null!==n.closest(".slate-codeblock-wrapper")&&null==n.closest("pre"),s=void 0!==n.ownerSVGElement,l=null!==n.closest(".markdown-editor")||null!==n.closest(".toolbar__toggle")||null!==n.closest(".team-usage-error"),c=null!==n.closest(".media-element"),d=n.closest("[data-entity-id='click-to-expand-button']");if(i||s||l||d)return;c&&(t.preventDefault(),t.stopPropagation());const u=null!==n.closest("a");if(u){var h;t.preventDefault();const e=n.closest("a"),i=null==e?void 0:e.href,o=null==(h=r.current)?void 0:h.querySelector(":focus");null==o||o.blur(),i&&(0,j.openExternalLink)(i)}a.current||o.current>1||u||e()})),h=nt((t=>{if(2!==t.button){if(""===n)return e();o.current=t.detail,l.current=!0,s.current&&(clearTimeout(s.current),s.current=void 0),s.current=setTimeout((()=>{1===o.current&&u(t),o.current=0}),300)}})),p=nt((e=>{2!==e.button&&(l.current=!1)})),m=nt((()=>{a.current=!!l.current})),f=nt((t=>{const n=t.target,i=null!==(null==n?void 0:n.closest(".markdown-editor"))||null!==(null==n?void 0:n.closest(".toolbar__toggle"));(t.ctrlKey||t.metaKey)&&"c"===t.key||i||!r.current||t.target!==r.current&&!r.current.contains(t.target)||1!==t.key.length&&"Backspace"!==t.key&&"Delete"!==t.key&&"Enter"!==t.key&&"Tab"!==t.key||e()}));return(0,i.useEffect)((()=>{if(t)return;const e=r.current;return null==e||e.addEventListener("mouseup",p),null==e||e.addEventListener("mousedown",h),null==e||e.addEventListener("mousemove",m),null==e||e.addEventListener("keydown",f),()=>{null==e||e.removeEventListener("mouseup",p),null==e||e.removeEventListener("mousedown",h),null==e||e.removeEventListener("mousemove",m),null==e||e.removeEventListener("keydown",f)}}),[t]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((([e])=>d(e.isIntersecting)),{threshold:0});return r.current&&e.observe(r.current),()=>{r.current&&e.unobserve(r.current)}}),[]),[r,c]})(A,x,S),N=nt((e=>{L.current&&(L.current.style.minHeight=`${e}px`,p&&p(e))})),R=nt((e=>{b.current=!!e})),O=(0,i.useCallback)((async()=>{if(!b.current&&!r&&t&&v.current){var e,n;const i=null!=a?a:"",r=null!=(e=null==(n=v.current)?void 0:n.slateToMD())?e:"",o=i!==r;try{o&&(await t(r),at.AnalyticsService.addEventV2({category:"documentation",action:"save",label:"overview",value:1,entityType:"folder"})),y(!1)}catch(e){A()}}}),[r,a,null==v?void 0:v.current,null==b?void 0:b.current]);return(0,w.jsx)(st.CustomErrorBoundary,{appId:"folder-workbench",errorElementId:"folder-description-editor",fallback:(0,w.jsx)(st.GenericErrorMessage,{title:"Couldn't load documentation",description:"Just a faulty wire. Try reloading.",illustration:"illustration-internal-server-error"}),children:(0,w.jsxs)(dt,{ref:L,isInViewPort:P,type:"column",span:8,mobile:12,overflow:"unset",editMode:x,minimumEditorHeight:u,editable:n,width:null==(f=L.current)?void 0:f.offsetWidth,positionFromTop:null==(g=L.current)?void 0:g.offsetTop,className:"entity-description-container",editor:k,source:e,children:[c&&(0,w.jsx)(ut,{}),(0,w.jsx)(ot,{ref:v,source:e,autoFocus:!1,readOnly:!n,showToolbar:x,isOffline:r,initialValue:x?S:E,modelDetails:l,onChange:O,context:"wysiwyg",enableAutoSaveOnBlur:n,inputFormat:"markdown",onEditorHeightChange:N,updateMediaUploadStatus:R,showEditorToggle:!h&&x,isEnvironmentResolutionEnabled:!0,isBigFontSize:m,placeholder:n?null!=s?s:`Add ${o?o+" ":""}description`:`This ${o||"item"} doesn't have a description.`})]})})},pt=(0,i.memo)(ht);var mt=n(21466);const ft=s()(a.Z).withConfig({displayName:"folder-overview__Container",componentId:"sc-f5u4xx-0"})(["overflow-y:auto;padding-top:var(--spacing-xxxl);padding-left:var(--spacing-l);height:100%;"]),gt=s()(tt.Z).withConfig({displayName:"folder-overview__ParentResponsiveContainer",componentId:"sc-f5u4xx-1"})(["width:100%;height:100%;"]),vt=s()(tt.Z).withConfig({displayName:"folder-overview__DocumentationResponsiveContainer",componentId:"sc-f5u4xx-2"})(["font-size:var(--text-size-m);line-height:var(--line-height-m);grid-template-rows:1fr auto;box-sizing:border-box;position:relative;row-gap:12px;height:100%;min-height:unset;padding-bottom:var(--spacing-zero);overflow:visible;.description-preview{overflow:auto;height:fit-content;max-height:100%;flex:1;&__markdown{word-break:break-word;}}.entity-description-container{width:100%;margin-bottom:var(--spacing-zero);& .mimir{.toolbar__anchor{top:-48px;.toolbar__wrapper{padding-right:var(--spacing-zero);}}}}"]),bt=s()(a.Z).withConfig({displayName:"folder-overview__FolderDescriptionEditorContainer",componentId:"sc-f5u4xx-3"})(["overflow:visible;"]),xt=(0,f.observer)((function(){const{canEdit:e}=je(),{mutate:t}=Se(),[n,r]=(()=>{const e=pe();return[e.metadata.description,e.setDescription]})(),[o]=fe(),s=null==o?void 0:o.collection,{data:a}=(0,m.useActiveVariables)(),[l,c]=(0,i.useState)(n);return(0,i.useMemo)((()=>{const e=(0,ne.v4)();mt.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:{description:JSON.parse(JSON.stringify(n))},variables:a,id:e}}),mt.VSCodeCommunicationsService.subscribe("RESOLVED_VARIABLES",(t=>{if(!t)return;const{id:n,resolvedObject:i}=t;n===e&&i&&c(i.description)}))}),[n,a]),(0,w.jsx)(ft,{children:(0,w.jsx)(gt,{type:"row",maxWidth:"container-width-medium",overflow:"unset",children:(0,w.jsx)(vt,{type:"column",span:8,mobile:12,minHeight:"100%",children:(0,w.jsx)(bt,{direction:"column","data-testid":"folder-description-editor-container",children:(0,w.jsx)(pt,{onSave:e=>{r(e),t()},entityType:"folder",editable:e,entityDescription:n,resolvedEntityDescription:null!=l?l:"",source:"folder-overview",isEntityLoading:!1,minimumEditorHeight:120,isOffline:!1,modelDetails:{model:"collection",modelId:s},updateParentAboutContainerDimension:()=>{},placeholder:"Make things easier for your teammates with a complete folder description."})})})})})})),yt=s()($e.PaneContent).withConfig({displayName:"folder-editor__StyledPaneContent",componentId:"sc-1665nxg-0"})(["box-sizing:border-box;width:100%;overflow:hidden;"]),wt=s()(ze.Z).withConfig({displayName:"folder-editor__StyledTabHeaders",componentId:"sc-1665nxg-1"})(["box-sizing:border-box;padding:var(--spacing-zero) var(--spacing-s);width:100%;"]),St=s()(ze.Z).withConfig({displayName:"folder-editor__StyledTabs",componentId:"sc-1665nxg-2"})(["box-sizing:border-box;padding:var(--spacing-zero) var(--spacing-s);&,> div,> div > div{flex:1;display:flex;flex-direction:column;overflow:hidden;}"]),Ct=()=>(0,w.jsx)($e.PaneHeader,{defaultLayout:"horizontal",horizontalComponent:null,width:{default:400,collapsed:33,uncollapsed:400,min:300,resizableByDefault:!0},verticalComponent:(0,w.jsx)($e.PaneLabel,{layout:"vertical",label:"Folder Editor",arrowDirection:"right"})}),jt=s()(a.Z).withConfig({displayName:"folder-editor__TabHeadersWrapper",componentId:"sc-1665nxg-3"})(["padding-inline-end:var(--spacing-l);"]),kt=()=>{const[e,t]=r().useState(0);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_t,{switchTab:t}),(0,w.jsx)(yt,{children:(0,w.jsx)(It,{activeTabIndex:e})})]})},_t=e=>{const[t,n]=r().useState(0);return(0,w.jsx)(jt,{children:(0,w.jsx)(wt,{activeTabIndex:t,onChange:function(t){n(t),e.switchTab(t)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,"data-testid":"folder-tabs-panel",children:(0,w.jsxs)(De.Z,{children:[(0,w.jsx)(Me.Z,{label:"Overview"}),(0,w.jsx)(Me.Z,{label:(0,w.jsx)(et,{})}),(0,w.jsx)(Me.Z,{label:(0,w.jsx)(te,{type:"prerequest",title:"Pre-request Script"})}),(0,w.jsx)(Me.Z,{label:(0,w.jsx)(te,{type:"test",title:"Tests"})})]})})})},It=e=>(0,w.jsx)(St,{activeTabIndex:e.activeTabIndex,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,w.jsxs)(qe.Z,{children:[(0,w.jsx)(Ve.Z,{children:(0,w.jsx)(xt,{})}),(0,w.jsx)(Ve.Z,{children:(0,w.jsx)(Xe,{})}),(0,w.jsx)(Ve.Z,{children:(0,w.jsx)(J,{})}),(0,w.jsx)(Ve.Z,{children:(0,w.jsx)(Y,{})})]})}),Et=({children:e})=>{const t=(0,Ae.useActiveWorkspaceId)(),{folderId:n}=(0,g.useParams)(),i=new m.VariablesContextStore({collectionFetchOptions:(0,re.folderFindOneSelectCollectionQuery)({folderId:n})},{workspaceId:t});return(0,w.jsx)(m.VariablesContextProvider,{store:i,children:e})};var Tt=n(49437),At=n(80047);const Lt=s()(a.Z).withConfig({displayName:"coming-soon__ComingSoonWrapper",componentId:"sc-o5w72p-0"})(["overflow:hidden;width:100%;"]);function Pt({description:e}){return(0,w.jsx)(Lt,{direction:"column",height:"100%",justifyContent:"center",alignItems:"center",children:(0,w.jsx)(Tt.Z,{title:"Coming Soon",description:e,children:(0,w.jsx)(At.Z,{name:"illustration-no-custom-domain"})})})}const Nt=s()(a.Z).withConfig({displayName:"workbench-wrapper__FolderWorkbenchContainer",componentId:"sc-qn4r20-0"})(["height:var(--wp-workbench-height);width:100vw;min-width:650px;max-width:100%;background-color:var(--background-color-primary);color:var(--content-color-primary);overflow:hidden;"]),Rt=(0,f.observer)((({children:e})=>{var t,n;const{isLoading:i,error:r}=(()=>{const e=pe();return{isLoading:e.isLoading,error:e.error}})(),[o]=fe(),{folderId:s}=(0,g.useParams)();if((0,re.useCollectionSubscription)({collectionId:(null==o?void 0:o.collection)||"",workspaceId:(0,Ae.useActiveWorkspaceId)(),subscribingEntity:{id:null!=(t=null!=(n=null==o?void 0:o.id)?n:s)?t:"",type:"folder"}}),!i&&r)throw r;return(0,w.jsx)(Nt,{direction:"column",children:i?(0,w.jsx)(c.Z,{size:"large",description:"Loading Folder"}):e})})),Ot=s()(a.Z).withConfig({displayName:"folder-workbench__PaneWrapper",componentId:"sc-1cdbg0l-0"})(["flex:1;overflow:hidden;min-width:650px;max-width:100%;"]),Ft=()=>re.ENABLE_COLLECTIONS?(0,w.jsx)(he,{children:(0,w.jsx)(Et,{children:(0,w.jsx)(l.VW,{children:(0,w.jsxs)(Rt,{children:[(0,w.jsx)(Ze,{}),(0,w.jsxs)(Ot,{direction:"column",children:[(0,w.jsx)(Ct,{}),(0,w.jsx)(kt,{})]})]})})})}):(0,w.jsx)(Pt,{description:"Folder coming soon"})}}]);
//# sourceMappingURL=5485.2f0ac3f5afe9d988.js.map