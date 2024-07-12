"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[2063],{23911:(e,t,n)=>{n.r(t),n.d(t,{Modals:()=>r});var o={};n.r(o),n.d(o,{ModalDialog:()=>p});var r={};n.r(r),n.d(r,{Ui:()=>o,getModals:()=>s});var a=n(21466);class i{async showWarningDialog(e){const{subject:t,message:n,options:o}=e;return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:t,message:n,options:o}})}}function s(){return new i}var c=n(40540),l=n(35348),u=n(58560),d=n(80605),h=n(52322);const p=e=>{const[t,n]=(0,c.useState)(null),[o,r]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function t(t){const{detail:o}=t;e.uid===o.uid&&(n(o),r(!0))}return window.addEventListener("pm:modal:request",t),()=>{window.removeEventListener("pm:modal:request",t)}}),[e.uid]),t?(0,h.jsxs)(l.u_,{isOpen:o,size:"small",onClose:()=>r(!1),children:[(0,h.jsx)(l.xB,{heading:t.subject}),(0,h.jsx)(l.hz,{children:(0,h.jsx)("p",{children:t.message})}),(0,h.jsx)(l.mz,{children:(0,h.jsx)(u.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:t.options.map((e=>(0,h.jsx)(d.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{t.callback(e),r(!1)}},e.title)))})})]}):null}},49627:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7560),r=n(40540),a=n.n(r),i=n(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,o.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-action-close-stroke"};const l=c},74962:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(72247),r=n(54047),a=n(40540),i=n.n(a),s=n(1314),c=n.n(s),l=n(59530),u=n.n(l),d=n(43753),h=n(90265);function p(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var m=u().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?p(e.styleAs,e.theme):p(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var t,n,o}));function g(e){var t=e.text,n=e.type,o=e.styleAs,s=e.color,c=e._wordBreak,l=e.className,u=e.hasBottomSpacing,d=e.isTruncated,p=e.maxLines,g=e.tooltip,f=e["data-testid"],x=e["data-click"],w=(0,a.useState)(!1),y=(0,r.Z)(w,2),b=y[0],v=y[1],k=i().createElement(m,{as:n,styleAs:o,color:s,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:u,isTruncated:d,maxLines:p,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?v(!0):v(!1)},wordBreak:c},t);return b&&(0,h.LX)(e)?(0,h.Ur)(k,g||t):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,o.Z)(Object.keys(d.globals.colors)),(0,o.Z)(Object.keys(d.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,o=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}}}]);
//# sourceMappingURL=2063.899eefba7810f2ba.js.map