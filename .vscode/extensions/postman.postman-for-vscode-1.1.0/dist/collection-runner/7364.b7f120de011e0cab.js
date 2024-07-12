"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[7364,7560,2389,7397,25,3528],{7560:(n,t,e)=>{function o(){return o=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},o.apply(this,arguments)}e.d(t,{Z:()=>o})},98283:(n,t,e)=>{function o(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}e.d(t,{Z:()=>o})},83528:(n,t,e)=>{e.r(t),e.d(t,{LazyModalsContainer:()=>d,PostmanModalFactory:()=>u});var o=e(7560),a=e(40540),r=e(35348),c=e(35736);const i="modalmanager.toggleModal";var l=e(52322);const s={isOpen:!1,modalComponent:r.u_,lazyModalContent:()=>(0,l.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,l.jsx)(r.hz,{children:(0,l.jsx)(c.Z,{size:"large"})})},d=()=>{const[n,t]=(0,a.useState)(s);return(0,a.useEffect)((()=>{const e=e=>{const{fallback:a,customModalComponent:c,lazyModalContent:i,childProps:l,modalProps:d}=e.detail;t(null!==i?{modalProps:d,childProps:l,isOpen:!0,modalComponent:c||r.u_,lazyModalContent:i,fallback:a||s.fallback}:(0,o.Z)({},n,{isOpen:!1}))};return document.addEventListener(i,e),()=>{document.removeEventListener(i,e)}}),[n]),(0,l.jsx)(n.modalComponent,(0,o.Z)({},n.modalProps,{isOpen:n.isOpen,onClose:()=>{var e,o;null==(e=n.modalProps)||null==(o=e.onClose)||o.call(e),t(s)},children:(0,l.jsx)(a.Suspense,{fallback:n.fallback,children:(0,l.jsx)(n.lazyModalContent,(0,o.Z)({},n.childProps,{onClose:()=>{var e,o;null==n||null==(e=n.childProps)||null==(o=e.onClose)||o.call(e),t(s)}}))})}))},u=Object.freeze({openModal(n){const t=new CustomEvent(i,{detail:n});document.dispatchEvent(t)},closeModal(){const n=new CustomEvent(i,{detail:{lazyModalContent:null}});document.dispatchEvent(n)}})},49627:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(7560),a=e(40540),r=e.n(a),c=e(207),i=r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),l=r().forwardRef((function(n,t){return r().createElement(c.Z,(0,o.Z)({},n,{svg:i,ref:t}))}));l.getName=function(){return"icon-action-close-stroke"};const s=l},74962:(n,t,e)=>{e.d(t,{Z:()=>g});var o=e(72247),a=e(54047),r=e(40540),c=e.n(r),i=e(1314),l=e.n(i),s=e(59530),d=e.n(s),u=e(43753),h=e(90265);function p(n,t){switch(n){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var m=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(n){return n.theme["spacing-zero"]}),(function(n){return n.theme["text-family-default"]}),(function(n){return n.theme["text-weight-medium"]}),(function(n){return n.wordBreak}),(function(n){return n.styleAs?p(n.styleAs,n.theme):p(n.as,n.theme)}),(function(n){return n.color&&"color: ".concat(n.theme[n.color],";")}),(function(n){return n.hasBottomSpacing&&function(n,t){switch(n){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(n.as,n.theme)}),(function(n){return t=n.isTruncated,e=n.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(e,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(e?o:"","\n    ");var t,e,o}));function g(n){var t=n.text,e=n.type,o=n.styleAs,i=n.color,l=n._wordBreak,s=n.className,d=n.hasBottomSpacing,u=n.isTruncated,p=n.maxLines,g=n.tooltip,f=n["data-testid"],x=n["data-click"],w=(0,r.useState)(!1),y=(0,a.Z)(w,2),v=y[0],b=y[1],k=c().createElement(m,{as:e,styleAs:o,color:i,className:s,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:d,isTruncated:u,maxLines:p,onMouseEnter:function(n){n.target&&n.target.scrollWidth>n.target.offsetWidth?b(!0):b(!1)},wordBreak:l},t);return v&&(0,h.LX)(n)?(0,h.Ur)(k,g||t):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:l().oneOf(["h1","h2","h3","h4","h5","h6"]),text:l().string.isRequired,color:l().oneOf([""].concat((0,o.Z)(Object.keys(u.globals.colors)),(0,o.Z)(Object.keys(u.aliases.light.content)))),styleAs:l().oneOf(["h1","h2","h3","h4","h5","h6"]),className:l().string,hasBottomSpacing:l().bool,isTruncated:function(n){var t=n.isTruncated,e=n.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&e?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:l().number,tooltip:function(n){var t=n.tooltip,e=n.isTruncated,o=n.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||e&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:l().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":l().string,"data-click":l().string}}}]);
//# sourceMappingURL=7364.b7f120de011e0cab.js.map