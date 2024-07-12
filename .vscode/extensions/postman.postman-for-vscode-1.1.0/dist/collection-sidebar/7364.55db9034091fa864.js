"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[7364,8283,3528],{98283:(n,e,t)=>{function o(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}t.d(e,{Z:()=>o})},83528:(n,e,t)=>{t.r(e),t.d(e,{LazyModalsContainer:()=>s,PostmanModalFactory:()=>d});var o=t(40540),a=t(35348),r=t(35736);const i="modalmanager.toggleModal";var c=t(52322);const l={isOpen:!1,modalComponent:a.u_,lazyModalContent:()=>(0,c.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,c.jsx)(a.hz,{children:(0,c.jsx)(r.Z,{size:"large"})})},s=()=>{const[n,e]=(0,o.useState)(l);return(0,o.useEffect)((()=>{const t=t=>{const{fallback:o,customModalComponent:r,lazyModalContent:i,childProps:c,modalProps:s}=t.detail;e(null!==i?{modalProps:s,childProps:c,isOpen:!0,modalComponent:r||a.u_,lazyModalContent:i,fallback:o||l.fallback}:Object.assign({},n,{isOpen:!1}))};return document.addEventListener(i,t),()=>{document.removeEventListener(i,t)}}),[n]),(0,c.jsx)(n.modalComponent,Object.assign({},n.modalProps,{isOpen:n.isOpen,onClose:()=>{var t,o;null==(t=n.modalProps)||null==(o=t.onClose)||o.call(t),e(l)},children:(0,c.jsx)(o.Suspense,{fallback:n.fallback,children:(0,c.jsx)(n.lazyModalContent,Object.assign({},n.childProps,{onClose:()=>{var t,o;null==n||null==(t=n.childProps)||null==(o=t.onClose)||o.call(t),e(l)}}))})}))},d=Object.freeze({openModal(n){const e=new CustomEvent(i,{detail:n});document.dispatchEvent(e)},closeModal(){const n=new CustomEvent(i,{detail:{lazyModalContent:null}});document.dispatchEvent(n)}})},49627:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(7560),a=t(40540),r=t.n(a),i=t(207),c=r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),l=r().forwardRef((function(n,e){return r().createElement(i.Z,(0,o.Z)({},n,{svg:c,ref:e}))}));l.getName=function(){return"icon-action-close-stroke"};const s=l},74962:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(72247),a=t(54047),r=t(40540),i=t.n(r),c=t(1314),l=t.n(c),s=t(59530),d=t.n(s),u=t(43753),h=t(90265);function p(n,e){switch(n){case"h1":return"\n        font-size: ".concat(e["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(e["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(e["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(e["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-secondary"],";\n      ");default:return null}}var m=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(n){return n.theme["spacing-zero"]}),(function(n){return n.theme["text-family-default"]}),(function(n){return n.theme["text-weight-medium"]}),(function(n){return n.wordBreak}),(function(n){return n.styleAs?p(n.styleAs,n.theme):p(n.as,n.theme)}),(function(n){return n.color&&"color: ".concat(n.theme[n.color],";")}),(function(n){return n.hasBottomSpacing&&function(n,e){switch(n){case"h1":return"margin-bottom: ".concat(e["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(e["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(e["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(e["spacing-xs"]," !important");default:return"margin: ".concat(e["spacing-zero"]," !important")}}(n.as,n.theme)}),(function(n){return e=n.isTruncated,t=n.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(t,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(t?o:"","\n    ");var e,t,o}));function g(n){var e=n.text,t=n.type,o=n.styleAs,c=n.color,l=n._wordBreak,s=n.className,d=n.hasBottomSpacing,u=n.isTruncated,p=n.maxLines,g=n.tooltip,f=n["data-testid"],x=n["data-click"],w=(0,r.useState)(!1),b=(0,a.Z)(w,2),y=b[0],v=b[1],k=i().createElement(m,{as:t,styleAs:o,color:c,className:s,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:d,isTruncated:u,maxLines:p,onMouseEnter:function(n){n.target&&n.target.scrollWidth>n.target.offsetWidth?v(!0):v(!1)},wordBreak:l},e);return y&&(0,h.LX)(n)?(0,h.Ur)(k,g||e):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:l().oneOf(["h1","h2","h3","h4","h5","h6"]),text:l().string.isRequired,color:l().oneOf([""].concat((0,o.Z)(Object.keys(u.globals.colors)),(0,o.Z)(Object.keys(u.aliases.light.content)))),styleAs:l().oneOf(["h1","h2","h3","h4","h5","h6"]),className:l().string,hasBottomSpacing:l().bool,isTruncated:function(n){var e=n.isTruncated,t=n.maxLines;return"boolean"!=typeof e?new Error("Heading: expected a boolean value for isTruncated prop"):e&&t?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:l().number,tooltip:function(n){var e=n.tooltip,t=n.isTruncated,o=n.maxLines;return"string"!=typeof e?new Error("Heading: tooltip prop should only have a string value."):!e||t&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:l().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":l().string,"data-click":l().string}}}]);
//# sourceMappingURL=7364.55db9034091fa864.js.map