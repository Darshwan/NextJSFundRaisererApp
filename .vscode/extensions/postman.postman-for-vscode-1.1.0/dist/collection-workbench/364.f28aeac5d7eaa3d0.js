/*! For license information please see 364.f28aeac5d7eaa3d0.js.LICENSE.txt */
"use strict";(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[364],{61357:(t,e,n)=>{function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,{Z:()=>o})},7560:(t,e,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}n.d(e,{Z:()=>o})},54047:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(70237);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,a,i,c=[],l=!0,d=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=a.call(n)).done)&&(c.push(o.value),c.length!==e);l=!0);}catch(t){d=!0,r=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw r}}return c}}(t,e)||(0,o.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},72247:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(61357),r=n(70237);function a(t){return function(t){if(Array.isArray(t))return(0,o.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,r.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},90929:(t,e,n)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n.d(e,{Z:()=>o})},70237:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(61357);function r(t,e){if(t){if("string"==typeof t)return(0,o.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,o.Z)(t,e):void 0}}},207:(t,e,n)=>{n.d(e,{Z:()=>h});var o=n(72247),r=n(40540),a=n.n(r),i=n(59530),c=n.n(i),l=n(1314),d=n.n(l),s=n(43753);function u(t){return"large"===t?"\n        width: 16px;\n        height: 16px;\n      ":"small"===t?"\n        width: 12px;\n        height: 12px;\n      ":""}var p=c().i.withConfig({displayName:"IconWrapper__IconContainer",componentId:"gnjn48-0"})(["display:inline-flex;"," "," svg{","}"],(function(t){return u(t.size)}),(function(t){return e=t.color,n=t.theme,e?"\n      svg {\n        path {\n          fill: ".concat(n[e],";\n        }\n      }\n    "):null;var e,n}),(function(t){return u(t.size)})),f=a().forwardRef((function(t,e){var n=t.color,o=t.size,r=t.title,i=t.className,c=t.svg,l=t["data-testid"];return a().createElement(p,{size:o,color:n,className:i,title:r,ref:e,"data-testid":l},c)}));f.displayName="IconWrapper",f.defaultProps={size:void 0,color:void 0,className:"",title:"",svg:null,"data-testid":"aether-icon"},f.propTypes={size:d().oneOf(["small","large"]),color:d().oneOf([void 0].concat((0,o.Z)(Object.keys(s.globals.colors)),(0,o.Z)(Object.keys(s.aliases.light.colors)),(0,o.Z)(Object.keys(s.aliases.light.content)),["header-color-content"])),className:d().string,title:d().string,svg:d().node,"data-testid":d().string};const h=f},71453:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(7560),r=n(40540),a=n.n(r),i=n(207),c=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M6.31909 5H11.3191V10H10.3191V6.70704L5.70711 11.3191L5 10.612L9.61192 6H6.31909V5Z",fill:"#6B6B6B"})),l=a().forwardRef((function(t,e){return a().createElement(i.Z,(0,o.Z)({},t,{svg:c,ref:e}))}));l.getName=function(){return"icon-action-openweb-stroke"};const d=l},58560:(t,e,n)=>{n.d(e,{Z:()=>g});var o=n(72247),r=n(90929),a=n(40540),i=n.n(a),c=n(1314),l=n.n(c),d=n(59530),s=n.n(d),u=n(43753),p=n(90265);var f=s().div.withConfig({displayName:"Flex__StyledFlex",componentId:"hyfpms-0"})(["box-sizing:border-box;display:",";"," ",";",";"," border-radius:",";background-color:",";justify-content:",";align-items:",";align-self:",";flex-shrink:",";"," "," "," "," ",";"],(function(t){return t.inline?"inline-flex":"flex"}),(function(t){return"column"===t.direction?"\n        flex-direction: ".concat(t.direction,";\n        ").concat(t.alignItems?"":"& > * { width: 100%; }","\n        & > *:not(:last-child) {\n          margin-bottom: ").concat(u.globals.spacing[t.gap],"; \n        }\n      "):"column-reverse"===t.direction?"\n        flex-direction: ".concat(t.direction,";\n        ").concat(t.alignItems?"":"& > * { width: 100%; }","\n        & > *:not(:last-child) {\n          margin-top: ").concat(u.globals.spacing[t.gap],";\n        }\n      "):"row-reverse"===t.direction?"\n        ".concat(t.alignItems?"":"& > * { height: 100%; }","\n        flex-direction: ").concat(t.direction,";\n        & > *:not(:last-child) {\n          margin-left: ").concat(u.globals.spacing[t.gap],";\n        }\n      "):"\n      ".concat(t.alignItems?"":"& > * { height: 100%; }","\n      flex-direction: ").concat(t.direction,";\n      & > *:not(:last-child) {\n        margin-right: ").concat(u.globals.spacing[t.gap],";\n      }\n    ")}),(function(t){return t.height&&"\n    height: ".concat(t.height,";\n  ")}),(function(t){return t.width&&"\n    width: ".concat(t.width,";\n  ")}),(function(t){return function(t){var e;if("object"===(0,r.Z)(t)){var n=t.paddingTop,o=t.paddingBottom,a=t.paddingLeft,i=t.paddingRight;return"\n      ".concat(n?"padding-top: ".concat(u.globals.spacing[n],";"):"","\n      ").concat(o?"padding-bottom: ".concat(u.globals.spacing[o],";"):"","\n      ").concat(a?"padding-left: ".concat(u.globals.spacing[a],";"):"","\n      ").concat(i?"padding-right: ".concat(u.globals.spacing[i],";"):"","\n    ")}switch(function(t){for(var e=0;e<t.length;e+=1){var n=t[e];u.globals.spacing[n]||console.warn("Flex: ".concat(n," Unsupported value provided, Please provide values from the given list ").concat(Object.keys(u.globals.spacing)))}}(e=t.split(" ")),e.length){case 1:return"padding: ".concat(u.globals.spacing[e[0]],";");case 2:return"padding: ".concat(u.globals.spacing[e[0]]," ").concat(u.globals.spacing[e[1]],";");case 3:return"padding: ".concat(u.globals.spacing[e[0]]," ").concat(u.globals.spacing[e[1]]," ").concat(u.globals.spacing[e[2]],";");case 4:return"\n        padding: ".concat(u.globals.spacing[e[0]],"\n          ").concat(u.globals.spacing[e[1]],"\n          ").concat(u.globals.spacing[e[2]],"\n          ").concat(u.globals.spacing[e[3]],";");default:return""}}(t.padding)}),(function(t){return t.borderRadius?t.theme[t.borderRadius]:""}),(function(t){return t.theme[t.backgroundColor]}),(function(t){return t.justifyContent}),(function(t){return t.alignItems}),(function(t){return t.alignSelf}),(function(t){return t.shrink?t.shrink:"0"}),(function(t){return t.grow?"flex-grow: ".concat(t.grow,";"):""}),(function(t){return t.basis?"flex-basis: ".concat(t.basis,";"):""}),(function(t){return t.wrap?"flex-wrap: ".concat(t.wrap,";"):""}),(function(t){return t.border&&(e=t.border,n=t.theme,o=e.border,r=e.borderTop,a=e.borderBottom,i=e.borderLeft,c=e.borderRight,l=e.borderColor,d=e.borderStyle,"\n    ".concat(o?"border: ".concat(u.globals.border[o]," ").concat(u.globals.border["border-style-solid"]," ").concat(n["border-color-default"],";"):"","\n    ").concat(r?"border-top: ".concat(u.globals.border[r]," ").concat(u.globals.border["border-style-solid"]," ").concat(n["border-color-default"],";"):"","\n    ").concat(a?"border-bottom: ".concat(u.globals.border[a]," ").concat(u.globals.border["border-style-solid"]," ").concat(n["border-color-default"],";"):"","\n    ").concat(i?"border-left: ".concat(u.globals.border[i]," ").concat(u.globals.border["border-style-solid"]," ").concat(n["border-color-default"],";"):"","\n    ").concat(c?"border-right: ".concat(u.globals.border[c]," ").concat(u.globals.border["border-style-solid"]," ").concat(n["border-color-default"],";"):"","\n    ").concat(l?"border-color: ".concat(n[l],";"):"","\n    ").concat(d?"border-style: ".concat(u.globals.border[d],";"):"","\n  "));var e,n,o,r,a,i,c,l,d}),(function(t){return t.minWidth&&"\n    min-width: ".concat(t.minWidth,";\n  ")})),h=i().forwardRef((function(t,e){var n=t.inline,o=t.height,r=t.width,a=t.minWidth,c=t.gap,l=t.direction,d=t.justifyContent,s=t.alignItems,u=t.padding,h=t.grow,g=t.shrink,b=t.basis,m=t.wrap,y=t.alignSelf,x=t.backgroundColor,w=t.border,v=t.borderRadius,k=t.className,T=t.hiddenFor,O=t.children,E=t["data-testid"],I=t["data-click"],S="".concat(k," ").concat((0,p.zy)(T));return i().createElement(f,{inline:n,height:o,width:r,minWidth:a,direction:l,gap:c,justifyContent:d,alignItems:s,alignSelf:y,padding:u,grow:h,shrink:g,basis:b,wrap:m,backgroundColor:x,border:w,borderRadius:v,className:S,ref:e,"data-testid":E,"data-click":I},O)}));h.displayName="Flex",h.defaultProps={inline:!1,height:null,width:null,minWidth:"auto",gap:"spacing-zero",direction:"row",justifyContent:"flex-start",alignItems:"stretch",padding:"spacing-zero",backgroundColor:"transparent",grow:0,shrink:0,basis:"auto",wrap:"nowrap",border:null,borderRadius:null,alignSelf:"auto",className:"",hiddenFor:[],"data-testid":"aether-flex","data-click":""},h.propTypes={inline:l().bool,height:l().string,width:l().string,minWidth:l().string,grow:l().number,shrink:l().number,basis:l().string,alignSelf:l().oneOf(["auto","flex-start","flex-end","center","baseline","stretch"]),gap:l().oneOf(Object.keys(u.globals.spacing)),wrap:l().oneOf(["nowrap","wrap","wrap-reverse"]),direction:l().oneOf(["row","row-reverse","column","column-reverse"]),justifyContent:l().oneOf(["stretch","center","flex-start","flex-end","space-between","space-around","space-evenly"]),alignItems:l().oneOf(["stretch","center","flex-start","flex-end"]),padding:l().oneOfType([l().oneOf(Object.keys(u.globals.spacing)),l().shape({paddingTop:l().string,paddingBottom:l().string,paddingLeft:l().string,paddingRight:l().string}),l().string]),backgroundColor:l().oneOf(["transparent"].concat((0,o.Z)(Object.keys(u.globals.colors)),(0,o.Z)(Object.keys(u.aliases.light.background)))),border:l().shape({border:l().oneOf(["border-width-default","border-width-l","border-width-xl"]),borderTop:l().oneOf(["border-width-default","border-width-l","border-width-xl"]),borderBottom:l().oneOf(["border-width-default","border-width-l","border-width-xl"]),borderLeft:l().oneOf(["border-width-default","border-width-l","border-width-xl"]),borderRight:l().oneOf(["border-width-default","border-width-l","border-width-xl"]),borderStyle:l().oneOf(["border-style-solid","border-style-dashed"]),borderColor:l().oneOf(Object.keys(u.aliases.light.border))}),borderRadius:l().oneOf(["border-radius-s","border-radius-default","border-radius-max"]),className:l().string,children:l().node.isRequired,hiddenFor:l().arrayOf(l().oneOf(["mobile","tablet","computer"])),"data-testid":l().string,"data-click":l().string};const g=h},63622:(t,e,n)=>{n.d(e,{ZP:()=>D});var o=n(54047),r=n(72247),a=n(40540),i=n.n(a),c=n(1314),l=n.n(c),d=n(59530),s=n.n(d),u=n(43753),p=n(71453),f=n(90265),h=["link-default","link-subtle","link-primary","link-button","link-button-primary","link-button-outline"],g=["link-default","link-subtle","link-primary"],b=s().span.withConfig({displayName:"TextLink__StyledTextLink",componentId:"sc-5qy0c8-0"})(["text-decoration:none;width:max-content;display:inline-flex;align-items:center;cursor:pointer;&:hover{color:",";text-decoration:underline;text-underline-offset:0.08em;}&:focus{outline-color:",";outline-offset:2px;}i{svg > path[fill]{fill:currentColor;}}",";",";"],(function(t){return t.theme["content-color-link"]}),(function(t){return t.theme["blue-20"]}),(function(t){return function(t,e){switch(t){case"link-primary":return"\n        color: ".concat(e["content-color-link"],";\n      ");case"link-subtle":return"\n        color: inherit;\n      ";case"link-button":return"\n        box-sizing: border-box;\n        justify-content: center;\n        color: ".concat(e["button-secondary-content-color"],";\n        background-color ").concat(e["button-secondary-background-color"],";\n        height: ").concat(e["size-m"],";\n        padding: ").concat(e["spacing-s"]," ").concat(e["spacing-m"],";\n        border-radius: ").concat(e["border-radius-default"],";\n        svg path {\n          fill: ").concat(e["button-secondary-content-color"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-secondary-hover-background-color"],";\n          color: ").concat(e["button-secondary-content-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-secondary-content-color"],";\n          }\n        }\n\n        &:active {\n          background-color: ").concat(e["button-secondary-active-background-color"],";\n          color: ").concat(e["button-secondary-content-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-secondary-content-color"],";\n          }\n        }\n      ");case"link-button-primary":return"\n        box-sizing: border-box;\n        justify-content: center;\n        color: ".concat(e["button-primary-content-color"],";\n        background-color ").concat(e["button-primary-background-color"],";\n        height: ").concat(e["size-m"],";\n        padding: ").concat(e["spacing-s"]," ").concat(e["spacing-m"],";\n        border-radius: ").concat(e["border-radius-default"],";\n        font-weight: ").concat(e["text-weight-medium"],";\n        svg path {\n          fill: ").concat(e["button-primary-content-color"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-primary-hover-background-color"],";\n          color: ").concat(e["button-primary-content-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-primary-content-color"],";\n          }\n        }\n\n        &:active {\n          background-color: ").concat(e["button-primary-active-background-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-primary-content-color"],";\n          }\n        }\n      ");case"link-button-outline":return"\n        box-sizing: border-box;\n        justify-content: center;\n        color: ".concat(e["button-outline-content-color"],";\n        background-color ").concat(e["button-outline-background-color"],";\n        border: ").concat(e["button-outline-border"],";\n        border-color: ").concat(e["button-outline-border-color"],";\n        height: ").concat(e["size-m"],";\n        padding: ").concat(e["spacing-s"]," ").concat(e["spacing-m"],";\n        border-radius: ").concat(e["border-radius-default"],";\n        svg path {\n          fill: ").concat(e["button-outline-content-color"],";\n        }\n\n        &:hover {\n          border-color: ").concat(e["button-outline-hover-border-color"],";\n          color: ").concat(e["button-outline-content-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-outline-content-color"],";\n          }\n        }\n\n        &:active {\n          border-color: ").concat(e["button-outline-active-border-color"],";\n          color: ").concat(e["button-outline-content-color"],";\n          text-decoration: none;\n          svg path {\n            fill: ").concat(e["button-outline-content-color"],";\n          }\n        }\n      ");default:return"\n        color: inherit;\n        text-decoration: underline;\n        text-underline-offset: 0.08em;\n      "}}(t.type,t.theme)}),(function(t){return e=t.isTruncated,n=t.type,e&&g.includes(n)?"\n  width: 100%;\n  .aether-link-text {    \n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 100%;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    }\n    ":null;var e,n}));function m(t){var e=t.className,n=t.children,r=t.isExternal,c=t.type,l=t.isTruncated,d=t.dataTestId,s=(0,a.useState)(!1),u=(0,o.Z)(s,2),h=u[0],g=u[1],m=i().createElement(b,{type:c,className:e,isTruncated:l,"data-aether-id":"aether-text-link","data-testid":d},i().createElement("span",{className:"aether-link-text",onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?g(!0):g(!1)}},n),r?i().createElement(p.Z,null):null);return h&&(0,f.LX)(t)?(0,f.Ur)(m,n):m}const y=m;m.defaultProps={className:"",isExternal:!1,type:"link-default",isTruncated:!1,dataTestId:"aether-text"},m.propTypes={className:l().string,children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,isExternal:l().bool,type:l().oneOf(h),isTruncated:l().bool,dataTestId:l().string};var x={narrow:"60ch",default:"80ch",wide:"100ch",none:"none"},w=s().p.withConfig({displayName:"Paragraph__StyledParagraph",componentId:"sc-1nn5mz5-0"})(["margin:",";color:",";max-width:",";"," overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;",";font-weight:",";line-height:1.6;",""],(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme[t.color]}),(function(t){return e=t.lineLengthType,x[e]?x[e]:null;var e}),(function(t){return e=t.type,n=t.theme,"\n        font-size: ".concat("lead"===e?n["text-size-l"]:n["text-size-m"],";\n        ");var e,n}),(function(t){return t.hasBottomSpacing&&(e=t.type,n=t.theme,"\n      margin-bottom: ".concat("lead"===e?n["spacing-xxl"]:n["spacing-m"]," !important;\n    "));var e,n}),(function(t){return t.theme["text-weight-normal"]}),(function(t){return e=t.isTruncated,n=t.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var e,n,o}));function v(t){var e=t.className,n=t.children,r=t.color,c=t.type,l=t.hasBottomSpacing,d=t.isTruncated,s=t.maxLines,u=t.tooltip,p=t.lineLengthType,h=t.dataTestId,g=(0,a.useState)(!1),b=(0,o.Z)(g,2),m=b[0],y=b[1],x=i().createElement(w,{className:e,"data-aether-id":"para"===c?"aether-text-paragraph":"aether-text-lead",type:c,hasBottomSpacing:l,color:r,isTruncated:d,maxLines:s,onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?y(!0):y(!1)},lineLengthType:p,"data-testid":h},n);return(0,f.LX)(t)&&m?(0,f.Ur)(x,u||n):x}const k=v;v.defaultProps={className:"",type:"para",hasBottomSpacing:!1,color:"content-color-secondary",isTruncated:!1,maxLines:void 0,tooltip:"",lineLengthType:void 0,dataTestId:"aether-text"},v.propTypes={className:l().string,children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,type:l().oneOf(["para","lead"]),hasBottomSpacing:l().bool,color:l().oneOf([""].concat((0,r.Z)(Object.keys(u.globals.colors)),(0,r.Z)(Object.keys(u.aliases.light.content)))),isTruncated:l().bool,maxLines:l().number,tooltip:l().string,lineLengthType:l().string,dataTestId:l().string};var T=s().strong.withConfig({displayName:"Strong__StyledStrong",componentId:"sc-1k2hxhw-0"})(["color:inherit;font-weight:",";font-size:inherit;line-height:inherit;"],(function(t){return t.theme["text-weight-medium"]}));function O(t){var e=t.children,n=t.dataTestId;return i().createElement(T,{"data-testid":n,"data-aether-id":"aether-text-strong"},e)}const E=O;O.defaultProps={dataTestId:"aether-text"},O.propTypes={children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,dataTestId:l().string};var I=s().code.withConfig({displayName:"Code__StyledCode",componentId:"sc-1isf2cc-0"})(["font-family:",";background-color:",";border-radius:",";box-shadow:inset 0 0 0 1px ",";padding:"," "," 3px;color:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;"],(function(t){return t.theme["text-family-code"]}),(function(t){return t.theme["background-color-tertiary"]}),(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["border-color-strong"]}),(function(t){return t.theme["spacing-xs"]}),(function(t){return t.theme["spacing-xs"]}));function S(t){var e=t.children,n=t.className,o=t.dataTestId;return i().createElement(I,{className:n,"data-aether-id":"aether-text-code","data-testid":o},e)}const z=S;S.defaultProps={className:"",dataTestId:"aether-text"},S.propTypes={className:l().string,children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,dataTestId:l().string};var _=s().small.withConfig({displayName:"Small__StyledSmall",componentId:"sc-5hz1ns-0"})(["color:inherit;font-size:",";line-height:1.6;",""],(function(t){return t.theme["text-size-s"]}),(function(t){return e=t.isTruncated,n=t.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 100%;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var e,n,o}));function N(t){var e=t.children,n=t.tooltip,r=t.isTruncated,c=t.maxLines,l=t.dataTestId,d=(0,a.useState)(!1),s=(0,o.Z)(d,2),u=s[0],p=s[1],h=i().createElement(_,{onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?p(!0):p(!1)},isTruncated:r,maxLines:c,"data-aether-id":"aether-text-small","data-testid":l},e);return(0,f.LX)(t)&&u?(0,f.Ur)(h,n||e):h}const L=N;N.defaultProps={maxLines:void 0,tooltip:"",isTruncated:!1,type:"small",dataTestId:"aether-text"},N.propTypes={children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,tooltip:l().string,isTruncated:l().bool,maxLines:l().number,dataTestId:l().string};var j=s().kbd.withConfig({displayName:"Kbd__StyledKbd",componentId:"sc-62rlv8-0"})(["background-color:",";font-family:",";border-radius:",";box-shadow:0 0 1px rgba(0,0,0,0.8) inset;display:inline-flex;font-size:",";font-weight:",";margin:"," ",";padding:"," ",";text-transform:uppercase;line-height:1.6;color:inherit;"],(function(t){return t.theme["background-color-tertiary"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["text-size-m"]}),(function(t){return t.theme["text-weight-medium"]}),(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme["spacing-xs"]}),(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme["spacing-xs"]}));function C(t){var e=t.children,n=t.dataTestId;return i().createElement(j,{"data-aether-id":"aether-text-kbd","data-testid":n},e)}const Z=C;C.defaultProps={dataTestId:"aether-text"},C.propTypes={children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,dataTestId:l().string};var R=["body-large","body-medium","body-small","link-default","link-primary","link-subtle","link-button","link-button-primary","link-button-outline","para","lead","strong","code","small","kbd","_input-meta-text"],B=["body-medium","body-large","body-small","para","lead","small","link-default","link-primary","link-subtle"],A=["para","lead"],W=[""].concat((0,r.Z)(Object.keys(u.globals.colors)),(0,r.Z)(Object.keys(u.aliases.light.colors)),(0,r.Z)(Object.keys(u.aliases.light.content)),["header-color-content"]),P=s().span.withConfig({displayName:"Text__TextContainer",componentId:"sc-1kqigik-0"})(["",";",";",";"," word-break:",";"],(function(t){return function(t,e){switch(t){case"body-large":return"\n        font-size: ".concat(e["text-size-l"],";\n        line-height: ").concat(e["line-height-l"],";\n        font-weight: ").concat(e["text-weight-regular"],";\n        font-family: ").concat(e["text-family-default"],";\n       ");case"body-medium":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: ").concat(e["line-height-m"],";\n        font-weight: ").concat(e["text-weight-regular"],";\n        font-family: ").concat(e["text-family-default"],";\n       ");case"body-small":return"\n        font-size: ".concat(e["text-size-s"],";\n        line-height: ").concat(e["line-height-s"],";\n        font-weight: ").concat(e["text-weight-regular"],";\n        font-family: ").concat(e["text-family-default"],";\n       ");default:return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.6;\n        font-weight: ").concat(e["text-weight-regular"],";\n        font-family: ").concat(e["text-family-default"],";\n      ")}}(t.type,t.theme)}),(function(t){return function(t,e){if(!t)return null;var n="text-family-default";return t.fontFamily&&["text-family-default","text-family-code"].includes(t.fontFamily)&&(n=t.fontFamily),"\n    font-size: ".concat(e[t.fontSize],";\n    font-weight : ").concat(e[t.fontWeight],";\n    line-height: ").concat(e[t.lineHeight],";\n    font-family: ").concat(e[n],";\n  ")}(t.typographyStyle,t.theme)}),(function(t){return t.color&&"color: ".concat(t.theme[t.color],";")}),(function(t){return e=t.isTruncated,n=t.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 100%;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var e,n,o}),(function(t){return t.wordBreak})),q=s().p.withConfig({displayName:"Text__StyledInputMetaText",componentId:"sc-1kqigik-1"})(["color:",";font-size:",";line-height:",";margin:",";"],(function(t){return t.theme["content-color-secondary"]}),(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return t.theme["spacing-zero"]}));function D(t){var e=t.children,n=t.type,r=t.text,a=t.color,c=t.typographyStyle,l=t.className,d=t.isExternal,s=t.hasBottomSpacing,u=t.isTruncated,p=t.maxLines,g=t.tooltip,b=t.lineLengthType,m=t._wordBreak,x=t.__renderAs,w=t["data-testid"],v=t["data-click"],T=i().useState(!1),O=(0,o.Z)(T,2),I=O[0],S=O[1];if(h.indexOf(n)>=0)return i().createElement(y,{type:n,className:l,isExternal:d,isTruncated:u,dataTestId:w},e||r);if(A.indexOf(n)>=0)return i().createElement(k,{className:l,type:n,hasBottomSpacing:s,color:a||"content-color-secondary",isTruncated:u,maxLines:p,tooltip:g,lineLengthType:b,dataTestId:w},e||r);if("strong"===n)return i().createElement(E,{dataTestId:w},e||r);if("code"===n)return i().createElement(z,{className:l,dataTestId:w},e||r);if("small"===n)return i().createElement(L,{dataTestId:w,isTruncated:u,maxLines:p,tooltip:g},e||r);if("kbd"===n)return i().createElement(Z,{dataTestId:w},e||r);if("_input-meta-text"===n)return i().createElement(q,null,e||r);var _=i().createElement(P,{type:n,color:a,as:x,wordBreak:m,tabIndex:x?0:void 0,typographyStyle:c,className:l,"data-aether-id":"aether-text","data-testid":w,"data-click":v,isTruncated:u,maxLines:p,onMouseEnter:function(t){t.target.scrollWidth>t.target.offsetWidth?S(!0):S(!1)}},e||r);return I&&(0,f.LX)(t)?(0,f.Ur)(_,g||e||r):_}D.defaultProps={text:"",type:"",color:"",className:"",isExternal:!1,typographyStyle:null,hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,lineLengthType:"default",tooltip:"",__renderAs:void 0,_wordBreak:"normal","data-testid":"aether-text","data-click":""},D.propTypes={text:function(t){var e=t.text;return!t.children&&e?"string"!=typeof e?new Error("text (deprecated property): Expected a string value."):new Error("text: Aether v.0.2.5 onwards we are providing children support for Text component and deprecating the text prop (will be removed soon). It is recommended to provide values as children to the Text component."):null},children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,className:l().string,color:function(t){var e=t.type,n=t.color;return n&&h.indexOf(e)>=0?new Error("color: color property is not applicable to link type text variants. "):n&&["strong","code","small","kbd"].indexOf(e)>=0?new Error("color: color property is not applicable to strong, code, small and kbd text variants "):n&&W.indexOf(n)<0?new Error("color: invalid color value provided, the value must be from ".concat((0,r.Z)(W))):null},typographyStyle:l().shape({fontSize:l().oneOf(["text-size-xs","text-size-s","text-size-m","text-size-l","text-size-xl","text-size-xxl","text-size-xxxl"]).isRequired,fontWeight:l().oneOf(["text-weight-regular","text-weight-medium","text-weight-bold"]).isRequired,lineHeight:l().oneOf(["line-height-xs","line-height-s","line-height-m","line-height-l","line-height-xl","line-height-xxl","line-height-xxxl"]).isRequired,fontFamily:l().oneOf(["text-family-default","text-family-code"])}),type:function(t,e,n){var o=t.type,r=t.typographyStyle;return o&&!r?R.includes(o)?null:new Error("Invalid value supplied to the type prop of ".concat(n," component. Expected one of ").concat(R)):r&&o?new Error("Text: You cannot use both typographyStyle and type props at once for Text component"):null},isExternal:function(t){var e=t.type;return t.isExternal&&(!e||e&&h.indexOf(e)<0)?new Error('isExternal: isExternal is only applicable for type variants "link-default", "link-primary", "link-subtle"'):null},hasBottomSpacing:function(t){var e=t.hasBottomSpacing,n=t.type;return!e||A.indexOf(n)>=0?null:new Error('Text: hasBottomSpacing is only applicable with text variants "para" or "lead"')},isTruncated:function(t){var e=t.isTruncated,n=t.maxLines,o=t.type;return"boolean"!=typeof e?new Error("Text: expected a boolean value for isTruncated prop"):o&&e&&!B.includes(o)?new Error("Text: Text truncation props like maxLines and isTruncated can only be used with ".concat(B)):e&&n?new Error("Text: maxLines should not be used together with isTruncated prop"):null},_wordBreak:l().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),maxLines:l().number,tooltip:function(t){var e=t.tooltip,n=t.isTruncated,o=t.maxLines,r=t.type;return"string"!=typeof e?new Error("Text: tooltip prop should only have a string value."):e&&r&&!B.includes(r)?new Error("Text: tooltip prop cannot be used with current value supplied to the type prop"):!e||n&&!o?null:new Error("Text: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},__renderAs:l().string,lineLengthType:l().oneOf(Object.keys({narrow:"60ch",default:"80ch",wide:"100ch",none:"none"})),"data-testid":l().string,"data-click":l().string}},81397:(t,e,n)=>{n.d(e,{Z:()=>p});var o=n(40540),r=n.n(o),a=n(59530),i=n.n(a),c=n(1314),l=n.n(c),d=n(33392),s=n.n(d),u=i()(s()).withConfig({displayName:"Tooltip__StyledTooltip",componentId:"sc-17b1cxe-0"})(["& .tippy-content{background-color:",";color:",";border:",";border-radius:",";padding:",";box-shadow:",";font-family:",";font-size:",";line-height:",";font-weight:",";text-align:left;word-break:break-word;}"],(function(t){return t.theme["background-color-tertiary"]}),(function(t){return t.theme["content-color-primary"]}),(function(t){return"".concat(t.theme["border-width-default"]," ").concat(t.theme["border-style-solid"]," ").concat(t.theme["tooltip-border-color"])}),(function(t){return t.theme["border-radius-s"]}),(function(t){return"".concat(t.theme["spacing-xs"]," ").concat(t.theme["spacing-s"])}),(function(t){return t.theme["tooltip-box-shadow"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return t.theme["text-weight-regular"]}));function p(t){var e=t.content,n=t["aria-label"],o=t.placement,a=t.triggerRef,i=t.triggerEvent,c=t.isInteractive,l=t.isOpen,d=t.onClickOutside,s=t.maxWidth,p=t.openDelay,f=t.closeDelay,h=t.openAnimationDuration,g=t.closeAnimationDuration,b=t.className,m=t.children,y=t["data-testid"],x=t["data-click"];function w(){d&&d()}function v(t){t.popper.setAttribute("data-testid",y),t.popper.setAttribute("data-click",x),t.popper.setAttribute("aria-label",n),t.popper.setAttribute("data-aether-id","aether-tooltip")}return null!==l?r().createElement(u,{visible:l,content:e,placement:o,reference:a,interactive:c,delay:[p,f],duration:[h,g],maxWidth:s,className:b,arrow:!1,offset:[0,4],onClickOutside:w,onCreate:v},m):r().createElement(u,{content:e,placement:o,trigger:i,reference:a,interactive:c,delay:[p,f],duration:[h,g],maxWidth:s,className:b,arrow:!1,offset:[0,4],onClickOutside:w,onCreate:v},m)}p.defaultProps={"aria-label":"Tooltip",placement:"top",children:null,triggerRef:void 0,triggerEvent:"mouseenter focus",isInteractive:!1,isOpen:null,onClickOutside:null,className:"",maxWidth:220,openDelay:100,closeDelay:100,openAnimationDuration:null,closeAnimationDuration:null,"data-testid":"aether-tooltip","data-click":""},p.propTypes={content:l().node.isRequired,"aria-label":l().string,placement:l().oneOf(["auto","top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]),children:l().oneOfType([l().arrayOf(l().node),l().node]),triggerRef:l().object,triggerEvent:l().string,isInteractive:l().bool,isOpen:l().bool,onClickOutside:l().func,maxWidth:l().oneOfType([l().number,l().string]),openDelay:l().number,closeDelay:l().number,className:l().string,"data-testid":l().string,"data-click":l().string,openAnimationDuration:l().number,closeAnimationDuration:l().number}},90265:(t,e,n)=>{n.d(e,{LM:()=>h,LX:()=>u,Ur:()=>p,ih:()=>d,zy:()=>s});var o=n(40540),r=n.n(o),a=n(21730),i=n.n(a),c=n(62881),l=n(81397);function d(t,e){return t===c.md?"".concat(c.z3[e],"-wide-column"):"".concat(t,"-").concat(c.z3[e],"-wide-column")}function s(t){return t.map((function(t){return"hidden-for-".concat(t)})).join(" ")}function u(t){var e=t.type,n=t.isTruncated,o=t.maxLines;return!(!["body-medium","body-large","body-small","para","lead","small","h1","h2","h3","h4","h5","h6","link-default","link-subtle","link-primary",""].includes(e)||!n||o)}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-end";return r().createElement(l.Z,{placement:n,content:e,openDelay:1e3},t)}var f={display:"inline-block",position:"absolute",visibility:"hidden",zIndex:-1,height:0,overflow:"hidden"},h=function(t,e){var n=document.getElementById(e);return Object.assign(n.style,f),{renderedElement:i().createPortal(t,n)}}},62881:(t,e,n)=>{n.d(e,{Be:()=>d,EV:()=>a,Jq:()=>r,_V:()=>i,md:()=>c,o1:()=>l,z3:()=>o});var o={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve"},r="mobile",a="tablet",i="computer",c="all",l="row",d="column"},11837:(t,e,n)=>{var o=n(40540),r=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),e.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,n){var o,a={},d=null,s=null;for(o in void 0!==n&&(d=""+n),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(s=e.ref),e)c.call(e,o)&&!l.hasOwnProperty(o)&&(a[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===a[o]&&(a[o]=e[o]);return{$$typeof:r,type:t,key:d,ref:s,props:a,_owner:i.current}}e.jsx=d,e.jsxs=d},52322:(t,e,n)=>{t.exports=n(11837)}}]);
//# sourceMappingURL=364.f28aeac5d7eaa3d0.js.map