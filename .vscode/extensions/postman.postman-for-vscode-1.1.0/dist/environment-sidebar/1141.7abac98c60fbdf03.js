(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[1141],{7560:(e,n,t)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},s.apply(this,arguments)}t.d(n,{Z:()=>s})},11141:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>B,I18nextProvider:()=>q,Trans:()=>D,TransWithoutContext:()=>z,Translation:()=>Z,composeInitialProps:()=>U,date:()=>J,getDefaults:()=>j,getI18n:()=>R,getInitialProps:()=>K,initReactI18next:()=>A,number:()=>Q,plural:()=>ee,select:()=>X,selectOrdinal:()=>ne,setDefaults:()=>S,setI18n:()=>C,time:()=>G,useSSR:()=>Y,useTranslation:()=>W,withSSR:()=>_,withTranslation:()=>M});var s=t(40540),i=t.n(s),r=t(7560),o=t(64896),a=t.n(o),c=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function l(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(a()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var s=e.indexOf("--\x3e");return{type:"comment",comment:-1!==s?e.slice(4,s):""}}for(var i=new RegExp(c),r=null;null!==(r=i.exec(e));)if(r[0].trim())if(r[1]){var o=r[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),n.attrs[l[0]]=l[1],i.lastIndex--}else r[2]&&(n.attrs[r[2]]=r[3].trim().substring(1,r[3].length-1));return n}var u=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,p=/^\s*$/,d=Object.create(null);function f(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(f,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var g={parse:function(e,n){n||(n={}),n.components||(n.components=d);var t,s=[],i=[],r=-1,o=!1;if(0!==e.indexOf("<")){var a=e.indexOf("<");s.push({type:"text",content:-1===a?e:e.substring(0,a)})}return e.replace(u,(function(a,c){if(o){if(a!=="</"+t.name+">")return;o=!1}var u,d="/"!==a.charAt(1),f=a.startsWith("\x3c!--"),g=c+a.length,h=e.charAt(g);if(f){var m=l(a);return r<0?(s.push(m),s):((u=i[r]).children.push(m),s)}if(d&&(r++,"tag"===(t=l(a)).type&&n.components[t.name]&&(t.type="component",o=!0),t.voidElement||o||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===r&&s.push(t),(u=i[r-1])&&u.children.push(t),i[r]=t),(!d||t.voidElement)&&(r>-1&&(t.voidElement||t.name===a.slice(2,-1))&&(r--,t=-1===r?s:i[r]),!o&&"<"!==h&&h)){u=-1===r?s:i[r].children;var y=e.indexOf("<",g),b=e.slice(g,-1===y?void 0:y);p.test(b)&&(b=" "),(y>-1&&r+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),s},stringify:function(e){return e.reduce((function(e,n){return e+f("",n)}),"")}};const h=g;function m(){if(console&&console.warn){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const y={};function b(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&y[n[0]]||("string"==typeof n[0]&&(y[n[0]]=new Date),m(...n))}const v=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}};function x(e,n,t){e.loadNamespaces(n,v(e,t))}function E(e,n,t,s){"string"==typeof t&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,v(e,s))}function O(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}const N=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,$={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},w=e=>$[e];let k,I={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(N,w)};function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};I={...I,...e}}function j(){return I}function C(e){k=e}function R(){return k}function L(e,n){if(!e)return!1;const t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function T(e){if(!e)return[];const n=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?P(n):n}function P(e){return Array.isArray(e)?e:[e]}function V(e,n){if(!e)return"";let t="";const i=P(e),r=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return i.forEach(((e,i)=>{if("string"==typeof e)t+=`${e}`;else if((0,s.isValidElement)(e)){const s=Object.keys(e.props).length,o=r.indexOf(e.type)>-1,a=e.props.children;if(!a&&o&&0===s)t+=`<${e.type}/>`;else if(a||o&&0===s)if(e.props.i18nIsDynamicList)t+=`<${i}></${i}>`;else if(o&&1===s&&"string"==typeof a)t+=`<${e.type}>${a}</${e.type}>`;else{const e=V(a,n);t+=`<${i}>${e}</${i}>`}else t+=`<${i}></${i}>`}else if(null===e)m("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"==typeof e){const{format:n,...s}=e,i=Object.keys(s);if(1===i.length){const e=n?`${i[0]}, ${n}`:i[0];t+=`{{${e}}}`}else m("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else m("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function z(e){let{children:n,count:t,parent:o,i18nKey:a,context:c,tOptions:l={},values:u,defaults:p,components:d,ns:f,i18n:g,t:m,shouldUnescape:y,...v}=e;const x=g||R();if(!x)return b("You will need to pass in an i18next instance by using i18nextReactModule"),n;const E=m||x.t.bind(x)||(e=>e);c&&(l.context=c);const O={...j(),...x.options&&x.options.react};let N=f||E.ns||x.options&&x.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];const $=V(n,O),w=p||$||O.transEmptyNodeValue||a,{hashTransKey:k}=O,I=a||(k?k($||w):$||w);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(u=u&&Object.keys(u).length>0?{...u,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const S=u?l.interpolation:{interpolation:{...l.interpolation,prefix:"#$?",suffix:"?$#"}},C={...l,count:t,...u,...S,defaultValue:w,ns:N},z=I?E(I,C):w;d&&Object.keys(d).forEach((e=>{const n=d[e];"function"==typeof n.type||!n.props||!n.props.children||z.indexOf(`${e}/>`)<0&&z.indexOf(`${e} />`)<0||(d[e]=i().createElement((function(){return i().createElement(i().Fragment,null,n)}),null))}));const A=function(e,n,t,o,a,c){if(""===n)return[];const l=o.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(l.map((e=>`<${e}`)).join("|")).test(n);if(!e&&!u&&!c)return[n];const p={};!function e(n){P(n).forEach((n=>{"string"!=typeof n&&(L(n)?e(T(n)):"object"!=typeof n||(0,s.isValidElement)(n)||Object.assign(p,n))}))}(e);const d=h.parse(`<0>${n}</0>`),f={...p,...a};function g(e,n,t){const i=T(e),r=y(i,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((e=>(0,s.isValidElement)(e)))}(i)&&0===r.length||e.props&&e.props.i18nIsDynamicList?i:r}function m(e,n,t,o,a){e.dummy?(e.children=n,t.push((0,s.cloneElement)(e,{key:o},a?void 0:n))):t.push(...s.Children.map([e],(e=>{const t={...e.props};return delete t.i18nIsDynamicList,i().createElement(e.type,(0,r.Z)({},t,{key:o,ref:e.ref},a?{}:{children:n}))})))}function y(n,i,r){const a=P(n);return P(i).reduce(((n,i,p)=>{const d=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){let c=a[parseInt(i.name,10)];1!==r.length||c||(c=r[0][i.name]),c||(c={});const h=0!==Object.keys(i.attrs).length?function(e,n){const t={...n};return t.props=Object.assign(e.props,n.props),t}({props:i.attrs},c):c,b=(0,s.isValidElement)(h),v=b&&L(i,!0)&&!i.voidElement,x=u&&"object"==typeof h&&h.dummy&&!b,E="object"==typeof e&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof h){const e=t.services.interpolator.interpolate(h,f,t.language);n.push(e)}else if(L(h)||v)m(h,g(h,i,r),n,p);else if(x)m(h,y(a,i.children,r),n,p);else if(Number.isNaN(parseFloat(i.name)))if(E)m(h,g(h,i,r),n,p,i.voidElement);else if(o.transSupportBasicHtmlNodes&&l.indexOf(i.name)>-1)if(i.voidElement)n.push((0,s.createElement)(i.name,{key:`${i.name}-${p}`}));else{const e=y(a,i.children,r);n.push((0,s.createElement)(i.name,{key:`${i.name}-${p}`},e))}else if(i.voidElement)n.push(`<${i.name} />`);else{const e=y(a,i.children,r);n.push(`<${i.name}>${e}</${i.name}>`)}else if("object"!=typeof h||b)m(h,d,n,p,1!==i.children.length||!d);else{const e=i.children[0]?d:null;e&&n.push(e)}}else if("text"===i.type){const e=o.transWrapTextNodes,r=c?o.unescape(t.services.interpolator.interpolate(i.content,f,t.language)):t.services.interpolator.interpolate(i.content,f,t.language);e?n.push((0,s.createElement)(e,{key:`${i.name}-${p}`},r)):n.push(r)}return n}),[])}return T(y([{dummy:!0,children:e||[]}],d,P(e||[]))[0])}(d||n,z,x,O,C,y),B=void 0!==o?o:O.defaultTransParent;return B?(0,s.createElement)(B,v,A):A}const A={type:"3rdParty",init(e){S(e.options.react),C(e)}},B=(0,s.createContext)();class F{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function U(e){return n=>new Promise((t=>{const s=K();e.getInitialProps?e.getInitialProps(n).then((e=>{t({...e,...s})})):t(s)}))}function K(){const e=R(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},s={};return e.languages.forEach((t=>{s[t]={},n.forEach((n=>{s[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=s,t.initialLanguage=e.language,t}function D(e){let{children:n,count:t,parent:i,i18nKey:r,context:o,tOptions:a={},values:c,defaults:l,components:u,ns:p,i18n:d,t:f,shouldUnescape:g,...h}=e;const{i18n:m,defaultNS:y}=(0,s.useContext)(B)||{},b=d||m||R(),v=f||b&&b.t.bind(b);return z({children:n,count:t,parent:i,i18nKey:r,context:o,tOptions:a,values:c,defaults:l,components:u,ns:p||v&&v.ns||y||b&&b.options&&b.options.defaultNS,i18n:b,t:f,shouldUnescape:g,...h})}const H=(e,n)=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current};function W(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:t}=n,{i18n:i,defaultNS:r}=(0,s.useContext)(B)||{},o=t||i||R();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new F),!o){b("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}o.options.react&&void 0!==o.options.react.wait&&b("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...j(),...o.options.react,...n},{useSuspense:c,keyPrefix:l}=a;let u=e||r||o.options&&o.options.defaultNS;u="string"==typeof u?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const p=(o.isInitialized||o.initializedStoreOnce)&&u.every((e=>function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=n.languages[0],i=!!n.options&&n.options.fallbackLng,r=n.languages[n.languages.length-1];if("cimode"===s.toLowerCase())return!0;const o=(e,t)=>{const s=n.services.backendConnector.state[`${e}|${t}`];return-1===s||2===s};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e)||!n.hasResourceBundle(s,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!o(s,e)||i&&!o(r,e)))}(e,n,t):(b("i18n.languages were undefined or empty",n.languages),!0)}(e,o,a)));function d(){return o.getFixedT(n.lng||null,"fallback"===a.nsMode?u:u[0],l)}const[f,g]=(0,s.useState)(d);let h=u.join();n.lng&&(h=`${n.lng}${h}`);const m=H(h),y=(0,s.useRef)(!0);(0,s.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=a;function s(){y.current&&g(d)}return y.current=!0,p||c||(n.lng?E(o,n.lng,u,(()=>{y.current&&g(d)})):x(o,u,(()=>{y.current&&g(d)}))),p&&m&&m!==h&&y.current&&g(d),e&&o&&o.on(e,s),t&&o&&o.store.on(t,s),()=>{y.current=!1,e&&o&&e.split(" ").forEach((e=>o.off(e,s))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,s)))}}),[o,h]);const v=(0,s.useRef)(!0);(0,s.useEffect)((()=>{y.current&&!v.current&&g(d),v.current=!1}),[o,l]);const O=[f,o,p];if(O.t=f,O.i18n=o,O.ready=p,p)return O;if(!p&&!c)return O;throw new Promise((e=>{n.lng?E(o,n.lng,u,(()=>e())):x(o,u,(()=>e()))}))}function M(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function i(i){let{forwardedRef:r,...o}=i;const[a,c,l]=W(e,{...o,keyPrefix:n.keyPrefix}),u={...o,t:a,i18n:c,tReady:l};return n.withRef&&r?u.ref=r:!n.withRef&&r&&(u.forwardedRef=r),(0,s.createElement)(t,u)}return i.displayName=`withI18nextTranslation(${O(t)})`,i.WrappedComponent=t,n.withRef?(0,s.forwardRef)(((e,n)=>(0,s.createElement)(i,Object.assign({},e,{forwardedRef:n})))):i}}function Z(e){const{ns:n,children:t,...s}=e,[i,r,o]=W(n,s);return t(i,{i18n:r,lng:r.language},o)}function q(e){let{i18n:n,defaultNS:t,children:i}=e;const r=(0,s.useMemo)((()=>({i18n:n,defaultNS:t})),[n,t]);return(0,s.createElement)(B.Provider,{value:r},i)}function Y(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{i18n:i}=t,{i18n:r}=(0,s.useContext)(B)||{},o=i||r||R();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce(((e,n)=>(Object.keys(n).forEach((n=>{e.indexOf(n)<0&&e.push(n)})),e)),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}function _(){return function(e){function n(n){let{initialI18nStore:t,initialLanguage:i,...r}=n;return Y(t,i),(0,s.createElement)(e,{...r})}return n.getInitialProps=U(e),n.displayName=`withI18nextSSR(${O(e)})`,n.WrappedComponent=e,n}}const J=()=>"",G=()=>"",Q=()=>"",X=()=>"",ee=()=>"",ne=()=>""},64896:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=1141.7abac98c60fbdf03.js.map