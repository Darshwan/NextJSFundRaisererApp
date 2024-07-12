"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[9072,7560,2389,7397,25,2063],{7560:(e,n,t)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(n,{Z:()=>o})},98283:(e,n,t)=>{function o(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:()=>o})},23911:(e,n,t)=>{t.r(n),t.d(n,{Modals:()=>r});var o={};t.r(o),t.d(o,{ModalDialog:()=>p});var r={};t.r(r),t.d(r,{Ui:()=>o,getModals:()=>c});var a=t(21466);class i{async showWarningDialog(e){const{subject:n,message:t,options:o}=e;return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:n,message:t,options:o}})}}function c(){return new i}var s=t(40540),l=t(35348),u=t(58560),d=t(80429),h=t(52322);const p=e=>{const[n,t]=(0,s.useState)(null),[o,r]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{function n(n){const{detail:o}=n;e.uid===o.uid&&(t(o),r(!0))}return window.addEventListener("pm:modal:request",n),()=>{window.removeEventListener("pm:modal:request",n)}}),[e.uid]),n?(0,h.jsxs)(l.u_,{isOpen:o,size:"small",onClose:()=>r(!1),children:[(0,h.jsx)(l.xB,{heading:n.subject}),(0,h.jsx)(l.hz,{children:(0,h.jsx)("p",{children:n.message})}),(0,h.jsx)(l.mz,{children:(0,h.jsx)(u.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:n.options.map((e=>(0,h.jsx)(d.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{n.callback(e),r(!1)}},e.title)))})})]}):null}},49627:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7560),r=t(40540),a=t.n(r),i=t(207),c=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),s=a().forwardRef((function(e,n){return a().createElement(i.Z,(0,o.Z)({},e,{svg:c,ref:n}))}));s.getName=function(){return"icon-action-close-stroke"};const l=s},74962:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(72247),r=t(54047),a=t(40540),i=t.n(a),c=t(1314),s=t.n(c),l=t(59530),u=t.n(l),d=t(43753),h=t(90265);function p(e,n){switch(e){case"h1":return"\n        font-size: ".concat(n["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(n["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(n["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(n["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(n["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(n["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(n["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(n["content-color-secondary"],";\n      ");default:return null}}var m=u().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?p(e.styleAs,e.theme):p(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,n){switch(e){case"h1":return"margin-bottom: ".concat(n["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(n["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(n["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(n["spacing-xs"]," !important");default:return"margin: ".concat(n["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return n=e.isTruncated,t=e.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(t,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(n?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(t?o:"","\n    ");var n,t,o}));function g(e){var n=e.text,t=e.type,o=e.styleAs,c=e.color,s=e._wordBreak,l=e.className,u=e.hasBottomSpacing,d=e.isTruncated,p=e.maxLines,g=e.tooltip,f=e["data-testid"],x=e["data-click"],w=(0,a.useState)(!1),y=(0,r.Z)(w,2),b=y[0],v=y[1],k=i().createElement(m,{as:t,styleAs:o,color:c,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:u,isTruncated:d,maxLines:p,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?v(!0):v(!1)},wordBreak:s},n);return b&&(0,h.LX)(e)?(0,h.Ur)(k,g||n):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:s().oneOf(["h1","h2","h3","h4","h5","h6"]),text:s().string.isRequired,color:s().oneOf([""].concat((0,o.Z)(Object.keys(d.globals.colors)),(0,o.Z)(Object.keys(d.aliases.light.content)))),styleAs:s().oneOf(["h1","h2","h3","h4","h5","h6"]),className:s().string,hasBottomSpacing:s().bool,isTruncated:function(e){var n=e.isTruncated,t=e.maxLines;return"boolean"!=typeof n?new Error("Heading: expected a boolean value for isTruncated prop"):n&&t?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:s().number,tooltip:function(e){var n=e.tooltip,t=e.isTruncated,o=e.maxLines;return"string"!=typeof n?new Error("Heading: tooltip prop should only have a string value."):!n||t&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:s().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":s().string,"data-click":s().string}}}]);
//# sourceMappingURL=9072.16e4cd73bb0527ab.js.map