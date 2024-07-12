"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[4691],{64691:(e,t,n)=>{n.d(t,{Z:()=>O});var o=n(7560),r=n(54047),i=n(40540),a=n.n(i),s=n(21730),c=n(1314),l=n.n(c),u=n(4840),d=n(52322),m=n(28227),p=n(82819);const f=(0,i.forwardRef)((function({"aria-label":e,className:t,containerProps:n,initialMounted:o,unmountOnClose:r,transition:a,transitionTimeout:c,boundingBoxRef:l,boundingBoxPadding:f,reposition:h="auto",submenuOpenDelay:g=300,submenuCloseDelay:b=150,viewScroll:y="initial",portal:v,theming:w,onItemClick:x,...R},E){const C=(0,i.useRef)(null),M=(0,i.useRef)({}),{anchorRef:N,state:k,onClose:S}=R,O=(0,i.useMemo)((()=>({initialMounted:o,unmountOnClose:r,transition:a,transitionTimeout:c,boundingBoxRef:l,boundingBoxPadding:f,rootMenuRef:C,rootAnchorRef:N,scrollNodesRef:M,reposition:h,viewScroll:y,submenuOpenDelay:g,submenuCloseDelay:b})),[o,r,a,c,N,l,f,h,y,g,b]),T=(0,i.useMemo)((()=>({handleClick(e,t){e.stopPropagation||(0,m.Dx)(x,e);let n=e.keepOpen;void 0===n&&(n=t&&e.key===p.R8.SPACE),n||(0,m.Dx)(S,{value:e.value,key:e.key,reason:p.GB.CLICK})},handleClose(e){(0,m.Dx)(S,{key:e,reason:p.GB.CLICK})}})),[x,S]);if(!k)return null;const I=(0,d.jsx)(p.J6.Provider,{value:O,children:(0,d.jsx)(p.AH.Provider,{value:T,children:(0,d.jsx)(u.q,{...R,ariaLabel:e||"Menu",externalRef:E,containerRef:C,containerProps:{className:t,containerRef:C,containerProps:n,theming:w,transition:a,onClose:S}})})});return!0===v&&"undefined"!=typeof document?(0,s.createPortal)(I,document.body):v?v.target?(0,s.createPortal)(I,v.target):v.stablePosition?null:I:I}));var h=n(33210),g=n(75328),b=n(48570),y=n(59530),v=n.n(y),w=n(58560),x=n(35736),R=n(48263),E=n(59824),C=(0,y.keyframes)(["from{opacity:0;}to{opacity:1;}"]),M=(0,y.keyframes)(["from{opacity:1;}to{opacity:0;}"]),N=v()(f).withConfig({displayName:"Menu__StyledMenu",componentId:"sc-1i7bzw8-0"})(["","{background-color:",";border-radius:",";box-shadow:",";min-width:120px;max-width:60vw;padding:",";width:max-content;user-select:none;z-index:999;}","{animation:"," 0.15s ease-out;}","{animation:"," 0.2s ease-out forwards;}li{list-style:none;}"],g.C8.name,(function(e){return e.theme["background-color-primary"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["popover-box-shadow"]}),(function(e){return e.theme["spacing-s"]}),g.C8.stateOpening,C,g.C8.stateClosing,M),k="bottom",S="center";function O(e){var t=e.children,n=e.closeOnSelect,s=e.isOpen,c=e.isLoading,l=e.initialMounted,u=e.contextMenu,d=e.closeMenu,m=e["data-testid"],p=(0,i.useRef)(),f=(0,h.w)({transition:!0,initialMounted:l}),g=(0,r.Z)(f,2),y=g[0],v=g[1],C=(0,i.useState)({direction:k,align:S}),M=(0,r.Z)(C,2),O=M[0],T=M[1],I=(0,i.useState)(""),P=(0,r.Z)(I,2),D=P[0],L=P[1],_=null!==s;_&&v(s);var j,A=function(){_||"open"===y.state||"closing"===y.state||v(!0)},B=i.Children.map(t,(function(e){return(0,i.isValidElement)(e)&&(e.type===R.Z||(0,b.isForwardRef)(e)&&"MenuButton"===e.type.target.displayName)?(0,i.cloneElement)(e,{ref:p,handleToggleMenu:A,isMenuOpen:_?s:"open"===y.state}):null})),$=function(e){var t=e.split("-"),n=(0,r.Z)(t,2),o=n[0],i=n[1];o||(o=k),i||(i=S),o===O.direction&&i===O.align||T({direction:o,align:i})},Z=function(e){e&&e!==D&&L(e)},U=B.length||!_?null:u,z=_?d:function(){v(!1)};j=c?a().createElement(E.Z,{isMenuOpen:_?s:"open"===y.state,closeMenu:z,contextMenu:U,setPlacement:$},a().createElement(w.Z,{padding:{paddingTop:"spacing-xxl",paddingBottom:"spacing-xxl"},justifyContent:"center",alignItems:"center",width:"200px"},a().createElement(x.Z,null))):i.Children.map(t,(function(e){return(0,i.isValidElement)(e)&&(e.type===E.Z||e.type&&"Styled(MenuList)"===e.type.displayName)?(0,i.cloneElement)(e,{isMenuOpen:_?s:"open"===y.state,closeMenu:z,contextMenu:U,setPlacement:$,setClassName:Z}):null}));var H=document.getElementById("aether-popover-portal"),G=!H||{target:H},X=U?{x:u.posX,y:u.posY}:null,F=0,Y=0;return U||("top"!==O.direction&&"bottom"!==O.direction||(F=5),"left"!==O.direction&&"right"!==O.direction||(Y=5)),a().createElement(a().Fragment,null,B,a().createElement(N,(0,o.Z)({anchorRef:p&&p.current?p:null,anchorPoint:X,onClose:z,direction:O.direction,align:O.align,menuClassName:D,className:D,shift:Y,gap:F,portal:G,"data-testid":m,overflow:"auto",boundingBoxPadding:"16 0 16 0"},y,{onItemClick:function(e){n||(e.keepOpen=!0)}}),j))}O.defaultProps={closeOnSelect:!0,isOpen:null,isLoading:!1,initialMounted:!1,contextMenu:null,closeMenu:function(){},"data-testid":"aether-menu"},O.propTypes={children:l().any.isRequired,closeOnSelect:l().bool,isOpen:l().bool,isLoading:l().bool,initialMounted:l().bool,contextMenu:l().shape({posX:l().number,posY:l().number}),"data-testid":l().string,closeMenu:l().func}},48263:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7560),r=n(51119),i=n(54530),a=n(40540),s=n.n(a),c=n(1314),l=n.n(c),u=n(59530),d=n.n(u),m=n(56415),p=n(80605),f=["children","isMenuOpen","handleToggleMenu","onClick","className","data-testid"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var g=d()(p.Z).withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1plp5bi-0"})(["min-width:max-content;padding-right:",";"," line-height:1;"],(function(e){return"tertiary"===e.type?e.theme["spacing-xs"]:e.theme["spacing-s"]}),(function(e){return"tertiary"===e.type&&"padding-left: ".concat(e.theme["spacing-s"])})),b=d().div.withConfig({displayName:"MenuButton__StyledCustomButton",componentId:"sc-1plp5bi-1"})(["display:inline-block;"]),y=s().forwardRef((function(e,t){var n=e.children,c=e.isMenuOpen,l=e.handleToggleMenu,u=e.onClick,d=e.className,y=e["data-testid"],v=(0,i.Z)(e,f),w=Boolean(n),x=function(e){l&&l(),u&&u(e)},R=w&&s().Children.map(n,(function(e){if(s().isValidElement(e)&&e.type===p.Z){var t=((e,t)=>{const[n]=(0,a.useState)({});return{onMouseDown:()=>{n.v=e&&"closed"!==e},onClick:e=>n.v?n.v=!1:t(!0,e)}})(c?"open":"closed",e.props.onClick?e.props.onClick:x);return s().cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActive:c,className:d,"aria-haspopup":"menu","aria-expanded":c},t))}return null}));return w?s().createElement(b,{"data-testid":y,ref:t},R):s().createElement(g,(0,o.Z)({},v,{onClick:x,rightIcon:s().createElement(m.Z,null),isActive:c,ref:t,className:d,"data-testid":y,"aria-haspopup":"menu","aria-expanded":c}))}));y.displayName="MenuButton";const v=y;y.defaultProps={type:"secondary",children:null,isMenuOpen:!1,handleToggleMenu:void 0,onClick:void 0,className:"","data-testid":"aether-menu-button"},y.propTypes={isMenuOpen:l().bool,handleToggleMenu:l().func,onClick:l().func,type:l().oneOf(["tertiary","secondary"]),className:l().string,"data-testid":l().string,children:function(e){var t=e.children;return t&&!t.type===p.Z?new Error("MenuButton: MenuButton component only accepts Aether's Button component as valid children value."):null}}},17282:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(90929),r=n(40540),i=n.n(r),a=n(1314),s=n.n(a),c=n(52322),l=n(24022),u=n(82819),d=n(14073),m=n(60585),p=n(26617),f=n(28227);const h=(0,p.m)("MenuItem",(function({className:e,value:t,href:n,type:o,checked:i,disabled:a,children:s,onClick:p,isHovering:h,itemRef:g,externalRef:b,...y}){const v=!!a,{setHover:w,...x}=((e,t,n,o)=>{const{submenuCloseDelay:i}=(0,r.useContext)(u.J6),{isParentOpen:a,submenuCtx:s,dispatch:c,updateItems:d}=(0,r.useContext)(u._X),m=()=>{!n&&!o&&c(u.$U.SET,e.current)},p=()=>{!o&&c(u.$U.UNSET,e.current)};return(0,l.V)(o,e,d),(0,r.useEffect)((()=>{n&&a&&t.current&&t.current.focus()}),[t,n,a]),{setHover:m,onBlur:e=>{n&&!e.currentTarget.contains(e.relatedTarget)&&p()},onPointerMove:e=>{o||(e.stopPropagation(),s.on(i,m,m))},onPointerLeave:(e,t)=>{s.off(),!t&&p()}}})(g,g,h,v),R=(0,r.useContext)(u.AH),E=(0,r.useContext)(u.L1),C="radio"===o,M="checkbox"===o,N=!(!n||v||C||M),k=C?E.value===t:!!M&&!!i,S=e=>{if(v)return e.stopPropagation(),void e.preventDefault();const n={value:t,syntheticEvent:e};void 0!==e.key&&(n.key=e.key),M&&(n.checked=!k),C&&(n.name=E.name),(0,f.Dx)(p,n),C&&(0,f.Dx)(E.onRadioChange,n),R.handleClick(n,M||C)},O=(0,r.useMemo)((()=>({type:o,disabled:v,hover:h,checked:k,anchor:N})),[o,v,h,k,N]),T=(0,f.dG)({...x,onPointerDown:w,onKeyDown:e=>{if(h)switch(e.key){case u.R8.ENTER:case u.R8.SPACE:N?e.key===u.R8.SPACE&&g.current.click():S(e)}},onClick:S},y),I={role:C?"menuitemradio":M?"menuitemcheckbox":u.CM,"aria-checked":C||M?k:void 0,...(0,f.$7)(v,h),...T,ref:(0,d.Q)(b,g),className:(0,m.l)({block:u.nJ,element:u.np,modifiers:O,className:e}),children:(0,r.useMemo)((()=>(0,f.Dx)(s,O)),[s,O])};return N?(0,c.jsx)("li",{role:u.dW,children:(0,c.jsx)("a",{href:n,...I})}):(0,c.jsx)("li",{...I})}));var g=n(75328),b=n(59530),y=n.n(b),v=n(81397),w=y()(h).withConfig({displayName:"MenuItem__StyledWrapperMenuItem",componentId:"sc-1bgrie1-0"})(["padding:",";line-height:",";color:",";text-decoration:none;&:focus{outline:none;}&","{border-radius:",";background:none;button,a{","}&.destructive button,&.destructive a{","}&.default button,&.default a{","}}"],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["line-height-m"]}),(function(e){return e.theme["content-color-primary"]}),g.A1.hover,(function(e){return e.theme["border-radius-default"]}),(function(e){return"\n        cursor : ".concat(e.disabled?"not-allowed":"pointer","\n      ")}),(function(e){return!e.disabled&&"\n          background-color: ".concat(e.theme["menuitem-destructive-hover-background-color"],";\n          color: ").concat(e.theme["content-color-constant"],";\n\n          & span {\n            color: ").concat(e.theme["content-color-constant"],";\n          }")}),(function(e){return!e.disabled&&"background-color: ".concat(e.theme["highlight-background-color-tertiary"],";")})),x=y().div.withConfig({displayName:"MenuItem__DisabledTooltipContentWrapper",componentId:"sc-1bgrie1-1"})(["width:100%;"]),R=y().button.withConfig({displayName:"MenuItem__StyledButton",componentId:"sc-1bgrie1-2"})(["box-sizing:border-box;width:100%;display:flex;justify-content:space-between;padding:",";border:none;border-radius:",";outline:none;font-size:",";line-height:",";text-decoration:none;background-color:",";transition:background-color 200ms ease-in-out;"," &:disabled{cursor:not-allowed;background-color:",";color:",";svg path{fill:",";}}"],(function(e){return"".concat(e.theme["spacing-xs"]," ").concat(e.theme["spacing-s"],";")}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["text-size-m"]}),(function(e){return e.theme["line-height-m"]}),(function(e){return e.theme["button-tertiary-background-color"]}),(function(e){return"destructive"===e.type?"color: ".concat(e.theme["content-color-error"],";"):"color: ".concat(e.theme["content-color-primary"],";")}),(function(e){return e.theme["button-tertiary-disabled-background-color"]}),(function(e){return e.theme["button-tertiary-disabled-content-color"]}),(function(e){return e.theme["button-tertiary-disabled-content-color"]})),E=y().span.withConfig({displayName:"MenuItem__StyledLabel",componentId:"sc-1bgrie1-3"})(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:left;"]),C=y().span.withConfig({displayName:"MenuItem__StyledShortcut",componentId:"sc-1bgrie1-4"})(["color:",";text-align:right;margin-left:",";flex-shrink:0;"],(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["spacing-xxl"]}));function M(e){var t=e.type,n=e.shortcutLabel,o=e.tooltip,r=e.children,a=e.isDisabled,s=e.onClick,c=e.href,l=e.isLink,u=e.className,d=e["data-testid"],m=i().useRef(),p=i().createElement(R,{type:t,disabled:a,ref:m,className:"aether-menu__item ".concat(u)},i().createElement(E,null,r),n&&i().createElement(C,null,n));return i().createElement(w,{"data-testid":d,disabled:a,className:"".concat(t),href:l?c:void 0,onClick:l?function(){}:function(e){e.syntheticEvent.preventDefault(),s&&s(e.syntheticEvent)}},function(e){return o?i().createElement(v.Z,{content:o,placement:"right"},(t=e,a?i().createElement(x,null,t):t)):e;var t}(p))}M.displayName="MenuItem";const N=M;M.defaultProps={type:"default",onClick:function(){},shortcutLabel:"",tooltip:"",isDisabled:!1,isLink:!1,href:"",className:"","data-testid":"aether-menu-item"},M.propTypes={children:s().node.isRequired,type:function(e){var t=e.type;return t&&"string"!=typeof t?new Error('MenuItem: Expected "type" prop to be of type string but got '.concat((0,o.Z)(t),".")):"default"!==t&&"destructive"!==t?new Error('MenuItem: The prop "type" can only have value "default" or "destructive" but got '.concat(t)):null},onClick:s().func,shortcutLabel:s().string,tooltip:s().string,isDisabled:s().bool,isLink:s().bool,href:s().string,className:s().string,"data-testid":s().string}},34607:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(1314),r=n.n(o),i=n(40540),a=n.n(i),s=n(59530),c=n.n(s),l=n(17282),u=c().div.withConfig({displayName:"MenuItemGroup__StyledMenuItemGroupContainer",componentId:"tyhhji-0"})(["margin-bottom:",";"],(function(e){return e.theme["spacing-s"]})),d=c().p.withConfig({displayName:"MenuItemGroup__StyledMenuItemGroupTitle",componentId:"tyhhji-1"})(["font-size:",";line-height:",";font-weight:",";text-align:left;"," padding:",";color:",";"],(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["line-height-s"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.firstChild?"\n    margin: ".concat(e.theme["spacing-xs"]," ").concat(e.theme["spacing-zero"]," ").concat(e.theme["spacing-xs"],";\n  "):"\n    margin: ".concat(e.theme["spacing-m"]," ").concat(e.theme["spacing-zero"]," ").concat(e.theme["spacing-xs"],";\n  ")}),(function(e){return"".concat(e.theme["spacing-zero"]," ").concat(e.theme["spacing-s"],";")}),(function(e){return e.theme["content-color-secondary"]}));function m(e){var t=e.title,n=e.children,o=e.className,r=e.firstChild,s=e["data-testid"],c=a().Children.map(n,(function(e){return a().isValidElement(e)&&e.type===l.Z?(0,i.cloneElement)(e,{_isWrapped:!0}):e}));return a().createElement(u,{"data-testid":s,className:o},a().createElement(d,{firstChild:r},t),c)}m.displayName="MenuItemGroup";const p=m;m.defaultProps={closeMenu:null,className:"",firstChild:!1,"data-testid":"aether-menu-item-group"},m.propTypes={children:r().node.isRequired,firstChild:r().bool,title:r().string.isRequired,className:r().string,"data-testid":r().string}},59824:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(3341),r=n(1314),i=n.n(r),a=n(40540),s=n.n(a),c=n(59530),l=n.n(c),u=n(17282),d=n(34607),m=n(36914),p=l()(o.Z).withConfig({displayName:"MenuList__StyledDirectionRightIcon",componentId:"sc-1hilcqf-0"})(["position:absolute;right:",";padding-top:0.5em;z-index:1;pointer-events:none;"],(function(e){return e.theme["spacing-m"]}));function f(e){var t=e.children,n=e.isMenuOpen,o=e.closeMenu,r=e.contextMenu,i=e.placement,c=e.setPlacement,l=e.className,f=e.setClassName;return(0,a.useEffect)((function(){var e=function(){o()};return r&&n&&o&&(window.addEventListener("scroll",e,!0),window.addEventListener("resize",e,!0)),function(){r&&o&&(window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e,!0))}}),[r,n]),(0,a.useEffect)((function(){c&&i&&c(i),f&&l&&""!==l&&f(l)}),[]),a.Children.map(t,(function(e,t){return(0,a.isValidElement)(e)?e.type===u.Z||e.type&&"Styled(MenuItem)"===e.type.displayName||e.type===d.Z?(0,a.cloneElement)(e,{firstChild:0===t,_isWrapped:!0}):e.type===m.Z||e.type&&"Styled(SubMenu)"===e.type.displayName?s().createElement(s().Fragment,null,s().createElement(p,null),e):e:e}))}f.defaultProps={placement:"bottom-start",setPlacement:null,isMenuOpen:!1,closeMenu:function(){},contextMenu:null,className:"",setClassName:null},f.propTypes={children:i().node.isRequired,closeMenu:i().func,isMenuOpen:i().bool,placement:i().oneOf(["auto","top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]),setPlacement:i().func,contextMenu:i().shape({posX:i().number,posY:i().number}),className:i().string,setClassName:i().func}},36914:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(3341),r=n(40540),i=n.n(r),a=n(21730),s=n(1314),c=n.n(s),l=n(4840),u=n(52322),d=n(26617),m=n(33210),p=n(24022),f=n(28227),h=n(60585),g=n(82819),b=n(14073);const y=(0,d.m)("SubMenu",(function({"aria-label":e,className:t,disabled:n,direction:o,label:i,openTrigger:s,onMenuChange:c,isHovering:d,instanceRef:y,itemRef:v,captureFocus:w,repositionFlag:x,itemProps:R={},...E}){const C=(0,r.useContext)(g.J6),{rootMenuRef:M,submenuOpenDelay:N,submenuCloseDelay:k}=C,{parentMenuRef:S,parentDir:O,overflow:T}=(0,r.useContext)(g.b7),{isParentOpen:I,submenuCtx:P,dispatch:D,updateItems:L}=(0,r.useContext)(g._X),_="visible"!==T,[j,A,B]=(e=>{const[t,n]=(0,m.w)(e),[o,i]=(0,r.useState)();return[{menuItemFocus:o,...t},n,(e,t)=>{i({position:e,alwaysUpdate:t}),n(!0)}]})(C),{state:$}=j,Z=!!n,U=(0,f.tr)($),z=(0,r.useRef)(null),[H]=(0,r.useState)({v:0}),G=()=>{P.off(),H.v&&(clearTimeout(H.v),H.v=0)},X=(...e)=>{G(),F(),!Z&&B(...e)},F=()=>!d&&!Z&&D(g.$U.SET,v.current),Y=e=>{F(),s||(H.v=setTimeout((()=>(0,f.MA)(X)),Math.max(e,0)))};(0,p.V)(Z,v,L),((e,t)=>{const n=(0,r.useRef)(t);(0,r.useEffect)((()=>{n.current!==t&&(0,f.Dx)(e,{open:t}),n.current=t}),[e,t])})(c,U),(0,r.useEffect)((()=>P.toggle(U)),[P,U]),(0,r.useEffect)((()=>()=>clearTimeout(H.v)),[H]),(0,r.useEffect)((()=>{d&&I?v.current.focus():A(!1)}),[d,I,A,v]),(0,r.useImperativeHandle)(y,(()=>({openMenu:(...e)=>{I&&X(...e)},closeMenu:()=>{U&&(v.current.focus(),A(!1))}})));const K=(0,r.useMemo)((()=>({open:U,hover:d,disabled:Z,submenu:!0})),[U,d,Z]),{ref:W,className:J,...V}=R,q=(0,f.dG)({onPointerEnter:P.off,onPointerMove:e=>{Z||(e.stopPropagation(),H.v||U||P.on(k,(()=>Y(N-k)),(()=>Y(N))))},onPointerLeave:()=>{G(),U||D(g.$U.UNSET,v.current)},onKeyDown:e=>{if(d)switch(e.key){case g.R8.ENTER:case g.R8.SPACE:case g.R8.RIGHT:"none"!==s&&X(g.td.FIRST)}},onClick:()=>"none"!==s&&X()},V);return(0,u.jsxs)("li",{className:(0,h.l)({block:g.nJ,element:g.uQ,className:t}),style:{position:"relative"},role:g.dW,ref:z,onKeyDown:e=>{let t=!1;switch(e.key){case g.R8.LEFT:U&&(v.current.focus(),A(!1),t=!0);break;case g.R8.RIGHT:U||(t=!0)}t&&(e.preventDefault(),e.stopPropagation())},children:[(0,u.jsx)("div",{role:g.CM,"aria-haspopup":!0,"aria-expanded":U,...(0,f.$7)(Z,d),...q,ref:(0,b.Q)(W,v),className:(0,h.l)({block:g.nJ,element:g.np,modifiers:K,className:J}),children:(0,r.useMemo)((()=>(0,f.Dx)(i,K)),[i,K])}),$&&(()=>{const t=(0,u.jsx)(l.q,{...E,...j,ariaLabel:e||("string"==typeof i?i:"Submenu"),anchorRef:v,containerRef:_?M:z,direction:o||("right"===O||"left"===O?O:"right"),parentScrollingRef:_&&S,isDisabled:Z}),n=M.current;return _&&n?(0,a.createPortal)(t,n):t})()]})}));var v=n(75328),w=n(59530),x=n.n(w),R=n(17282),E=n(34607),C=x()(y).withConfig({displayName:"SubMenu__StyledSubMenu",componentId:"majecl-0"})(["list-style:none;line-height:",";color:",";text-decoration:none;","{background-color:",";}","{padding-top:",";padding-bottom:",";padding-left:",";padding-right:",";border-radius:",";transition:background-color 200ms ease-in-out;:hover{cursor:pointer;}:hover,:focus,:focus-visible{background-color:",";}:focus{outline:none;}}"],(function(e){return e.theme["line-height-m"]}),(function(e){return e.theme["content-color-primary"]}),v.A1.open,(function(e){return e.theme["highlight-background-color-tertiary"]}),v.A1.submenu,(function(e){return e.theme["spacing-xs"]}),(function(e){return e.theme["spacing-xs"]}),(function(e){return e.theme["spacing-s"]}),(function(e){return e.theme["spacing-xxxl"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["highlight-background-color-tertiary"]})),M=x()(o.Z).withConfig({displayName:"SubMenu__StyledDirectionRightIcon",componentId:"majecl-1"})(["position:absolute;right:",";padding-top:0.5em;z-index:1;pointer-events:none;"],(function(e){return e.theme["spacing-m"]}));function N(e){var t=e.children,n=e.menuItemClassName,o=e.menuItemDataTestId,a=e.label,s=e.subMenuClassName,c=e.subMenuDataTestId,l=e.className,u=r.Children.map(t,(function(e){return(0,r.isValidElement)(e)?e.type===R.Z||e.type&&"Styled(MenuItem)"===e.type.displayName||e.type===E.Z?(0,r.cloneElement)(e,{_isWrapped:!0}):e.type===N||e.type&&"Styled(SubMenu)"===e.type.displayName?i().createElement(i().Fragment,null,i().createElement(M,null),e):e:e})),d={className:n,"data-testid":o};return i().createElement(C,{itemProps:d,"data-testid":c,menuClassName:s,className:l,label:a,arrow:!1,offsetY:-8},u)}N.defaultProps={label:"",className:"",subMenuClassName:"",subMenuDataTestId:"aether-menu-submenu",menuItemClassName:"",menuItemDataTestId:"aether-menu-item--submenu"},N.propTypes={children:c().node.isRequired,label:c().string,className:c().string,subMenuClassName:c().string,subMenuDataTestId:c().string,menuItemClassName:c().string,menuItemDataTestId:c().string}},4840:(e,t,n)=>{n.d(t,{q:()=>p});var o=n(40540),r=n(21730),i=n(52322),a=n(28227),s=n(60585),c=n(82819);const l=({className:e,containerRef:t,containerProps:n,children:r,isOpen:l,theming:u,transition:d,onClose:m})=>{const p=(0,a.us)(d,"item");return(0,i.jsx)("div",{...(0,a.dG)({onKeyDown:({key:e})=>{e===c.R8.ESC&&(0,a.Dx)(m,{key:e,reason:c.GB.CANCEL})},onBlur:e=>{l&&!e.currentTarget.contains(e.relatedTarget||document.activeElement)&&(0,a.Dx)(m,{reason:c.GB.BLUR})}},n),className:(0,s.l)({block:c.Kk,modifiers:(0,o.useMemo)((()=>({theme:u,itemTransition:p})),[u,p]),className:e}),style:{position:"absolute",...null==n?void 0:n.style},ref:t,children:r})},u=()=>{let e,t=0;return{toggle:e=>{e?t++:t--,t=Math.max(t,0)},on:(n,o,r)=>{t?e||(e=setTimeout((()=>{e=0,o()}),n)):null==r||r()},off:()=>{e&&(clearTimeout(e),e=0)}}};var d=n(19509),m=n(14073);const p=({ariaLabel:e,menuClassName:t,menuStyle:n,arrow:p,arrowProps:f={},anchorPoint:h,anchorRef:g,containerRef:b,containerProps:y,focusProps:v,externalRef:w,parentScrollingRef:x,align:R="start",direction:E="bottom",position:C="auto",overflow:M="visible",setDownOverflow:N,repositionFlag:k,captureFocus:S=!0,state:O,endTransition:T,isDisabled:I,menuItemFocus:P,gap:D=0,shift:L=0,children:_,onClose:j,...A})=>{const[B,$]=(0,o.useState)({x:0,y:0}),[Z,U]=(0,o.useState)({}),[z,H]=(0,o.useState)(),[G,X]=(0,o.useState)(E),[F]=(0,o.useState)(u),[Y,K]=(0,o.useReducer)((e=>e+1),1),{transition:W,boundingBoxRef:J,boundingBoxPadding:V,rootMenuRef:q,rootAnchorRef:Q,scrollNodesRef:ee,reposition:te,viewScroll:ne,submenuCloseDelay:oe}=(0,o.useContext)(c.J6),{submenuCtx:re,reposSubmenu:ie=k}=(0,o.useContext)(c.b7),ae=(0,o.useRef)(null),se=(0,o.useRef)(),ce=(0,o.useRef)(),le=(0,o.useRef)(!1),ue=(0,o.useRef)({width:0,height:0}),de=(0,o.useRef)((()=>{})),{hoverItem:me,dispatch:pe,updateItems:fe}=((e,t)=>{const[n,r]=(0,o.useState)(),i=(0,o.useRef)({items:[],hoverIndex:-1,sorted:!1}).current,s=(0,o.useCallback)(((e,n)=>{const{items:o}=i;if(e)if(n)o.push(e);else{const n=o.indexOf(e);n>-1&&(o.splice(n,1),e.contains(document.activeElement)&&(t.current.focus(),r()))}else i.items=[];i.hoverIndex=-1,i.sorted=!1}),[i,t]);return{hoverItem:n,dispatch:(0,o.useCallback)(((t,n,o)=>{const{items:s,hoverIndex:l}=i,u=()=>{if(i.sorted)return;const t=e.current.querySelectorAll(".szh-menu__item");s.sort(((e,n)=>(0,a.O)(t,e)-(0,a.O)(t,n))),i.sorted=!0};let d,m=-1;switch(t){case c.$U.RESET:break;case c.$U.SET:d=n;break;case c.$U.UNSET:d=e=>e===n?void 0:e;break;case c.$U.FIRST:u(),m=0,d=s[m];break;case c.$U.LAST:u(),m=s.length-1,d=s[m];break;case c.$U.SET_INDEX:u(),m=o,d=s[m];break;case c.$U.INCREASE:u(),m=l,m<0&&(m=s.indexOf(n)),m++,m>=s.length&&(m=0),d=s[m];break;case c.$U.DECREASE:u(),m=l,m<0&&(m=s.indexOf(n)),m--,m<0&&(m=s.length-1),d=s[m]}d||(m=-1),r(d),i.hoverIndex=m}),[e,i]),updateItems:s}})(ae,se),he=(0,a.tr)(O),ge=(0,a.us)(W,"open"),be=(0,a.us)(W,"close"),ye=ee.current,ve=(0,o.useCallback)((e=>{var t;const n=g?null==(t=g.current)?void 0:t.getBoundingClientRect():h?{left:h.x,right:h.x,top:h.y,bottom:h.y,width:0,height:0}:null;if(!n)return;ye.menu||(ye.menu=(J?J.current:(0,a.GZ)(q.current))||window);const o=((e,t,n,o)=>{const r=t.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),s=n===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:n.getBoundingClientRect(),c=(0,a.dj)(o),l=e=>e+i.left-s.left-c.left,u=e=>e+i.left+r.width-s.right+c.right,d=e=>e+i.top-s.top-c.top,m=e=>e+i.top+r.height-s.bottom+c.bottom;return{menuRect:r,containerRect:i,getLeftOverflow:l,getRightOverflow:u,getTopOverflow:d,getBottomOverflow:m,confineHorizontally:e=>{let t=l(e);if(t<0)e-=t;else{const n=u(e);n>0&&(t=l(e-=n),t<0&&(e-=t))}return e},confineVertically:e=>{let t=d(e);if(t<0)e-=t;else{const n=m(e);n>0&&(t=d(e-=n),t<0&&(e-=t))}return e}}})(b,ae,ye.menu,V);let{arrowX:r,arrowY:i,x:s,y:c,computedDirection:l}=(({arrow:e,align:t,direction:n,gap:o,shift:r,position:i,anchorRect:a,arrowRef:s,positionHelpers:c})=>{const{menuRect:l,containerRect:u}=c,d="left"===n||"right"===n;let m=d?o:r,p=d?r:o;if(e){const e=s.current;d?m+=e.offsetWidth:p+=e.offsetHeight}const f=a.left-u.left-l.width-m,h=a.right-u.left+m,g=a.top-u.top-l.height-p,b=a.bottom-u.top+p;let y,v;"end"===t?(y=a.right-u.left-l.width,v=a.bottom-u.top-l.height):"center"===t?(y=a.left-u.left-(l.width-a.width)/2,v=a.top-u.top-(l.height-a.height)/2):(y=a.left-u.left,v=a.top-u.top),y+=m,v+=p;const w={...c,anchorRect:a,placeLeftX:f,placeRightX:h,placeLeftorRightY:v,placeTopY:g,placeBottomY:b,placeToporBottomX:y,arrowRef:s,arrow:e,direction:n,position:i};switch(n){case"left":case"right":return(({anchorRect:e,containerRect:t,menuRect:n,placeLeftorRightY:o,placeLeftX:r,placeRightX:i,getLeftOverflow:a,getRightOverflow:s,confineHorizontally:c,confineVertically:l,arrowRef:u,arrow:d,direction:m,position:p})=>{let f,h,g,b=m,y=o;"initial"!==p&&(y=l(y),"anchor"===p&&(y=Math.min(y,e.bottom-t.top),y=Math.max(y,e.top-t.top-n.height))),"left"===b?(f=r,"initial"!==p&&(h=a(f),h<0&&(g=s(i),(g<=0||-h>g)&&(f=i,b="right")))):(f=i,"initial"!==p&&(g=s(f),g>0&&(h=a(r),(h>=0||-h<g)&&(f=r,b="left")))),"auto"===p&&(f=c(f));const v=d?(({arrowRef:e,menuY:t,anchorRect:n,containerRect:o,menuRect:r})=>{let i=n.top-o.top-t+n.height/2;const a=1.25*e.current.offsetHeight;return i=Math.max(a,i),i=Math.min(i,r.height-a),i})({menuY:y,arrowRef:u,anchorRect:e,containerRect:t,menuRect:n}):void 0;return{arrowY:v,x:f,y,computedDirection:b}})(w);default:return(({anchorRect:e,containerRect:t,menuRect:n,placeToporBottomX:o,placeTopY:r,placeBottomY:i,getTopOverflow:a,getBottomOverflow:s,confineHorizontally:c,confineVertically:l,arrowRef:u,arrow:d,direction:m,position:p})=>{let f,h,g,b="top"===m?"top":"bottom",y=o;"initial"!==p&&(y=c(y),"anchor"===p&&(y=Math.min(y,e.right-t.left),y=Math.max(y,e.left-t.left-n.width))),"top"===b?(f=r,"initial"!==p&&(h=a(f),h<0&&(g=s(i),(g<=0||-h>g)&&(f=i,b="bottom")))):(f=i,"initial"!==p&&(g=s(f),g>0&&(h=a(r),(h>=0||-h<g)&&(f=r,b="top")))),"auto"===p&&(f=l(f));const v=d?(({arrowRef:e,menuX:t,anchorRect:n,containerRect:o,menuRect:r})=>{let i=n.left-o.left-t+n.width/2;const a=1.25*e.current.offsetWidth;return i=Math.max(a,i),i=Math.min(i,r.width-a),i})({menuX:y,arrowRef:u,anchorRect:e,containerRect:t,menuRect:n}):void 0;return{arrowX:v,x:y,y:f,computedDirection:b}})(w)}})({arrow:p,align:R,direction:E,gap:D,shift:L,position:C,anchorRect:n,arrowRef:ce,positionHelpers:o});const{menuRect:u}=o;let d=u.height;if(!e&&"visible"!==M){const{getTopOverflow:e,getBottomOverflow:t}=o;let n,r;const i=ue.current.height,s=t(c);if(s>0||(0,a.eO)(s,0)&&(0,a.eO)(d,i))n=d-s,r=s;else{const t=e(c);(t<0||(0,a.eO)(t,0)&&(0,a.eO)(d,i))&&(n=d+t,r=0-t,n>=0&&(c-=t))}n>=0?(d=n,H({height:n,overflowAmt:r})):H()}p&&U({x:r,y:i}),$({x:s,y:c}),X(l),ue.current={width:u.width,height:d}}),[p,R,V,E,D,L,C,M,h,g,b,J,q,ye]);(0,d.b)((()=>{he&&(ve(),le.current&&K()),le.current=he,de.current=ve}),[he,ve,ie]),(0,d.b)((()=>{z&&!N&&(ae.current.scrollTop=0)}),[z,N]),(0,d.b)((()=>fe),[fe]),(0,o.useEffect)((()=>{let{menu:e}=ye;if(!he||!e)return;if(e=e.addEventListener?e:window,!ye.anchors){ye.anchors=[];let t=(0,a.GZ)(Q&&Q.current);for(;t&&t!==e;)ye.anchors.push(t),t=(0,a.GZ)(t)}let t=ne;if(ye.anchors.length&&"initial"===t&&(t="auto"),"initial"===t)return;const n=()=>{"auto"===t?(0,a.MA)((()=>ve(!0))):(0,a.Dx)(j,{reason:c.GB.SCROLL})},o=ye.anchors.concat("initial"!==ne?e:[]);return o.forEach((e=>e.addEventListener("scroll",n))),()=>o.forEach((e=>e.removeEventListener("scroll",n)))}),[Q,ye,he,j,ne,ve]);const we=!!z&&z.overflowAmt>0;(0,o.useEffect)((()=>{if(we||!he||!x)return;const e=()=>(0,a.MA)(ve),t=x.current;return t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}),[he,we,x,ve]),(0,o.useEffect)((()=>{if("function"!=typeof ResizeObserver||"initial"===te)return;const e=new ResizeObserver((([e])=>{const{borderBoxSize:t,target:n}=e;let o,i;if(t){const{inlineSize:e,blockSize:n}=t[0]||t;o=e,i=n}else{const e=n.getBoundingClientRect();o=e.width,i=e.height}0!==o&&0!==i&&((0,a.eO)(o,ue.current.width,1)&&(0,a.eO)(i,ue.current.height,1)||(0,r.flushSync)((()=>{de.current(),K()})))})),t=ae.current;return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}),[te]),(0,o.useEffect)((()=>{if(!he)return pe(c.$U.RESET),void(be||H());const{position:e,alwaysUpdate:t}=P||{},n=()=>{e===c.td.FIRST?pe(c.$U.FIRST):e===c.td.LAST?pe(c.$U.LAST):e>=-1&&pe(c.$U.SET_INDEX,void 0,e)};if(t)n();else if(S){const e=setTimeout((()=>{ae.current.contains(document.activeElement)||(se.current.focus(),n())}),ge?170:100);return()=>clearTimeout(e)}}),[he,ge,be,S,P,pe]);const xe=(0,o.useMemo)((()=>({isParentOpen:he,submenuCtx:F,dispatch:pe,updateItems:fe})),[he,F,pe,fe]);let Re,Ee;z&&(N?Ee=z.overflowAmt:Re=z.height);const Ce=(0,o.useMemo)((()=>({reposSubmenu:Y,submenuCtx:F,overflow:M,overflowAmt:Ee,parentMenuRef:ae,parentDir:G})),[Y,F,M,Ee,G]),Me=Re>=0?{maxHeight:Re,overflow:M}:void 0,Ne=(0,o.useMemo)((()=>({state:O,dir:G})),[O,G]),ke=(0,o.useMemo)((()=>({dir:G})),[G]),Se=(0,s.l)({block:c.nJ,element:c.fM,modifiers:ke,className:f.className}),Oe=(0,i.jsxs)("ul",{role:"menu","aria-label":e,...(0,a.$7)(I),...(0,a.dG)({onPointerEnter:null==re?void 0:re.off,onPointerMove:e=>{e.stopPropagation(),F.on(oe,(()=>{pe(c.$U.RESET),se.current.focus()}))},onPointerLeave:e=>{e.target===e.currentTarget&&F.off()},onKeyDown:e=>{switch(e.key){case c.R8.HOME:pe(c.$U.FIRST);break;case c.R8.END:pe(c.$U.LAST);break;case c.R8.UP:pe(c.$U.DECREASE,me);break;case c.R8.DOWN:pe(c.$U.INCREASE,me);break;case c.R8.SPACE:return void(e.target&&-1!==e.target.className.indexOf(c.nJ)&&e.preventDefault());default:return}e.preventDefault(),e.stopPropagation()},onAnimationEnd:()=>{"closing"===O&&H(),(0,a.Dx)(T)}},A),ref:(0,m.Q)(w,ae),className:(0,s.l)({block:c.nJ,modifiers:Ne,className:t}),style:{...n,...Me,margin:0,display:"closed"===O?"none":void 0,position:c.vK,left:B.x,top:B.y},children:[(0,i.jsx)("li",{tabIndex:-1,style:{position:c.vK,left:0,top:0,display:"block",outline:"none"},ref:se,...c.yo,...v}),p&&(0,i.jsx)("li",{...c.yo,...f,className:Se,style:{display:"block",position:c.vK,left:Z.x,top:Z.y,...f.style},ref:ce}),(0,i.jsx)(c.b7.Provider,{value:Ce,children:(0,i.jsx)(c._X.Provider,{value:xe,children:(0,i.jsx)(c.c9.Provider,{value:me,children:(0,a.Dx)(_,Ne)})})})]});return y?(0,i.jsx)(l,{...y,isOpen:he,children:Oe}):Oe}},60585:(e,t,n)=>{n.d(t,{l:()=>r});var o=n(40540);const r=({block:e,element:t,modifiers:n,className:r})=>(0,o.useMemo)((()=>{const o=t?`${e}__${t}`:e;let i=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(i+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let a="function"==typeof r?r(n):r;return"string"==typeof a&&(a=a.trim(),a&&(i+=` ${a}`)),i}),[e,t,n,r])},14073:(e,t,n)=>{n.d(t,{Q:()=>i});var o=n(40540);function r(e,t){"function"==typeof e?e(t):e.current=t}const i=(e,t)=>(0,o.useMemo)((()=>e?t?n=>{r(e,n),r(t,n)}:e:t),[e,t])},19509:(e,t,n)=>{n.d(t,{b:()=>r});var o=n(40540);const r="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?o.useLayoutEffect:o.useEffect},24022:(e,t,n)=>{n.d(t,{V:()=>r});var o=n(19509);const r=(e,t,n)=>{(0,o.b)((()=>{if(e)return;const o=t.current;return n(o,!0),()=>{n(o)}}),[e,t,n])}},33210:(e,t,n)=>{n.d(t,{w:()=>u});var o=n(40540);const r=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>({_s:e,status:r[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),a=e=>e?6:5,s=(e,t,n,o,r)=>{clearTimeout(o.current);const a=i(e);t(a),n.current=a,r&&r({current:a})};var c=n(28227),l=n(82819);const u=({initialOpen:e,initialMounted:t,unmountOnClose:n,transition:r,transitionTimeout:u=500}={})=>{const[{status:d},m,p]=(({enter:e=!0,exit:t=!0,preEnter:n,preExit:r,timeout:c,initialEntered:l,mountOnEnter:u,unmountOnExit:d,onStateChange:m}={})=>{const[p,f]=(0,o.useState)((()=>i(l?2:a(u)))),h=(0,o.useRef)(p),g=(0,o.useRef)(),[b,y]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(c),v=(0,o.useCallback)((()=>{const e=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}})(h.current._s,d);e&&s(e,f,h,g,m)}),[m,d]),w=(0,o.useCallback)((o=>{const i=e=>{switch(s(e,f,h,g,m),e){case 1:b>=0&&(g.current=setTimeout(v,b));break;case 4:y>=0&&(g.current=setTimeout(v,y));break;case 0:case 3:g.current=setTimeout((()=>i(e+1)),0)}},c=h.current.isEnter;"boolean"!=typeof o&&(o=!c),o?!c&&i(e?n?0:1:2):c&&i(t?r?3:4:a(d))}),[v,m,e,t,n,r,b,y,d]);return(0,o.useEffect)((()=>()=>clearTimeout(g.current)),[]),[p,w,v]})({initialEntered:e,mountOnEnter:!t,unmountOnExit:n,timeout:u,enter:(0,c.us)(r,"open"),exit:(0,c.us)(r,"close")});return[{state:l._f[d],endTransition:p},m]}},82819:(e,t,n)=>{n.d(t,{$U:()=>g,AH:()=>m,CM:()=>R,GB:()=>b,J6:()=>f,Kk:()=>r,L1:()=>p,R8:()=>h,_X:()=>u,_f:()=>v,b7:()=>d,c9:()=>l,dW:()=>x,fM:()=>a,nJ:()=>i,np:()=>s,td:()=>y,uQ:()=>c,vK:()=>w,yo:()=>E});var o=n(40540);const r="szh-menu-container",i="szh-menu",a="arrow",s="item",c="submenu",l=(0,o.createContext)(),u=(0,o.createContext)({}),d=(0,o.createContext)({}),m=(0,o.createContext)({}),p=(0,o.createContext)({}),f=(0,o.createContext)({}),h=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),g=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6,SET_INDEX:7}),b=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),y=Object.freeze({FIRST:"first",LAST:"last"}),v=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"}),w="absolute",x="presentation",R="menuitem",E={"aria-hidden":!0,role:R}},28227:(e,t,n)=>{n.d(t,{$7:()=>m,Dx:()=>c,GZ:()=>d,MA:()=>i,O:()=>p,dG:()=>l,dj:()=>u,eO:()=>a,tr:()=>r,us:()=>s});var o=n(21730);const r=e=>!!e&&"o"===e[0],i=o.unstable_batchedUpdates||(e=>e()),a=(Object.values,(e,t,n=1e-4)=>Math.abs(e-t)<n),s=(e,t)=>!0===e||!(!e||!e[t]),c=(e,t)=>"function"==typeof e?e(t):e,l=(e,t)=>(t&&Object.keys(t).forEach((n=>{const o=e[n],r=t[n];e[n]="function"==typeof r&&o?(...e)=>{r(...e),o(...e)}:r})),e),u=e=>{if("string"!=typeof e)return{top:0,right:0,bottom:0,left:0};const t=e.trim().split(/\s+/,4).map(parseFloat),n=isNaN(t[0])?0:t[0],o=isNaN(t[1])?n:t[1];return{top:n,right:o,bottom:isNaN(t[2])?n:t[2],left:isNaN(t[3])?o:t[3]}},d=e=>{for(;e;){if(!(e=e.parentNode)||e===document.body||!e.parentNode)return;const{overflow:t,overflowX:n,overflowY:o}=getComputedStyle(e);if(/auto|scroll|overlay|hidden/.test(t+o+n))return e}};function m(e,t){return{"aria-disabled":e||void 0,tabIndex:t?0:-1}}function p(e,t){for(let n=0;n<e.length;n++)if(e[n]===t)return n;return-1}},26617:(e,t,n)=>{n.d(t,{m:()=>a});var o=n(40540),r=n(82819),i=n(52322);const a=(e,t)=>{const n=(0,o.memo)(t),a=(0,o.forwardRef)(((e,t)=>{const a=(0,o.useRef)(null);return(0,i.jsx)(n,{...e,itemRef:a,externalRef:t,isHovering:(0,o.useContext)(r.c9)===a.current})}));return a.displayName=`WithHovering(${e})`,a}},75328:(e,t,n)=>{n.d(t,{A1:()=>a,C8:()=>i});const o=(e,t=[])=>{const n={};return Object.defineProperty(n,"name",{value:e(),enumerable:!0}),t.forEach((t=>{const o=t.split("-").reduce(((e,t)=>`${e}${t[0].toUpperCase()}${t.slice(1)}`));Object.defineProperty(n,o,{value:e(t),enumerable:!0})})),n},r=(e=>t=>n=>{let o=`.${e}`;return t&&(o+=`__${t}`),n&&(o+=`--${n}`),o})("szh-menu"),i=o(r(),["state-opening","state-open","state-closing","state-closed","dir-left","dir-right","dir-top","dir-bottom"]),a=o(r("item"),["hover","disabled","anchor","checked","open","submenu","focusable","type-radio","type-checkbox"])}}]);
//# sourceMappingURL=4691.1fe13bb875649951.js.map