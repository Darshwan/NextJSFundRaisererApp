var workbench;(()=>{"use strict";var e,a,t,r,n,o,l={98193:(e,a,t)=>{var r={"./Workbench":()=>Promise.all([t.e(1125),t.e(540),t.e(1730),t.e(1314),t.e(6494),t.e(607),t.e(7201),t.e(398),t.e(6669),t.e(99),t.e(9578),t.e(8276),t.e(5650)]).then((()=>()=>t(25650)))},n=(e,a)=>(t.R=a,a=t.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,a),o=(e,a)=>{if(t.S){var r="default",n=t.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=e,t.I(r,a)}};t.d(a,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-06-25.07-12"}}()}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var t=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=l,i.c=s,i.amdO={},i.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return i.d(a,{a}),a},i.d=(e,a)=>{for(var t in a)i.o(a,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((a,t)=>(i.f[t](e,a),a)),[])),i.u=e=>e+"."+{29:"63a991befda62c6b",71:"e0ab9f8333d5415f",75:"36bcd2b235c11d8f",99:"224d1e6285bc6b64",129:"eb7fa808308f9586",157:"4d9a3c4a4c0960ea",381:"b60410395f5b9f62",398:"b21763bda21bfb9a",477:"cc894725eacef023",488:"b7694b1dc5639bda",540:"93a4f7a4844cbac5",605:"c97c59a1b2564374",607:"a53313257d694c14",686:"fc6b734450fbbfbd",721:"2aff792e6d3746b6",730:"5cd794bca9b22444",759:"134b214fbfdb1223",966:"9c60626723a5fa85",1125:"916af300c206cbe3",1141:"6ce910fc2889128b",1180:"52fbe196f21a3454",1312:"b832eea4e2cca9e4",1314:"c7fe0481b5a12f1d",1327:"35e11e8d5a9391eb",1344:"043ea6595d5d4842",1403:"f389816aa736066a",1466:"be468f7274d80642",1597:"0bccb03cf1aedbc2",1730:"92794dea373590d3",1854:"fb700fe1e9fdae21",1910:"f8c5b2cf58a446f8",2063:"b9ebea02a45683fd",2223:"b2faed59fc12750e",2333:"a9cd78809d7a900b",2389:"f3d431738094723f",2557:"646fe42255f324db",2668:"1f059ea87b2aaf4e",2784:"fafe88a36200c9e6",2833:"58058b8ab8cc8125",2955:"c428e93d24491a1b",3101:"05bf72209bcb99d1",3193:"8adb103ab43e5a8f",3528:"118d1bcb202d8590",3980:"332f5e73b0475352",4007:"bf5d60c048646f02",4163:"2f15db6cf19affd2",4188:"9134a84e32685e24",4193:"c4651decd2c050df",4376:"48acb06258f488bf",4422:"1e1114b588c0b332",4433:"9b0f8c30f48fbd87",4546:"a003d51b2ccb2457",4591:"072f9bb43226a2da",4594:"1c7b47a3268ad77c",4776:"20560f307d0394e1",4803:"570aaaae16d3ce51",4888:"48ce70f74d232584",4987:"e3dab3d61638137a",5110:"0deef82a57f56633",5348:"54267298a93bc623",5505:"5cc04179059e2b90",5624:"615913d0fbbfdbb9",5650:"3c3dcffc2b6bd0a4",5860:"1763a05400ca84ca",5912:"765340d95b539a96",6010:"47df407a5d6a5252",6277:"4306b328a8624290",6353:"e43d83fa0bcc38df",6462:"ae6fe4aba7a889c6",6494:"04d6f357c3d8f8f6",6591:"750ed2c40106fc94",6663:"718a6c2bd6f97be0",6669:"1466f0b694273a0b",6686:"441a0f6a3547b4be",6880:"eb83c602c12e3da4",6940:"a71dd8831957e09e",7052:"dcd8677db639f087",7107:"d797129cc453a5e2",7201:"026694ff279f217e",7204:"457adb2f46f759cc",7291:"d779778968350ff4",7494:"565aa608949b54e4",7560:"a4d363cb4c4b338b",7646:"400641462eb18788",7768:"e0b187076a3e9189",7908:"1a38b0edc1839c3b",8013:"288f3adfe7076545",8081:"8e75ea2a781ef5bb",8137:"b832390621fcb7c1",8183:"4e6c1802e6b2d109",8201:"41a11a9858163413",8210:"cc86c98071500031",8276:"8699e01199c045d9",8316:"7813fd7ccec2bfd4",8476:"ee0ec9f4322d5a3b",8537:"2e585fbb821c65cc",8609:"bb232fbc22e4d272",8670:"d6c1bc0546627593",8708:"a9eacca47e36a8b4",8834:"e97bcac830deff45",8876:"50ba2e85431a8354",8912:"2c053a670e543583",8926:"7a9335646997183e",9140:"0a534416fe73354c",9211:"4e2db0ff1a696967",9239:"91f67ba4c3e14d9e",9245:"df464412f1607c1d",9304:"23ad1826084d36e2",9444:"c619c0e789f5ec66",9460:"571ae9b2ac3b594a",9467:"89c9ce6fa45c0804",9543:"33bb69d4300665df",9578:"55f30ca84a72566a",9842:"a927d4c490eb4163",9875:"2c0c979812244376",9951:"fbd66b2e0ba99c63"}[e]+".js",i.miniCssF=e=>e+"."+{1312:"64fdea4f37179a4a",1344:"64fdea4f37179a4a",8926:"9466b64e3a91540b"}[e]+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),e={},a="workbench:",i.l=(t,r,n,o)=>{if(e[t])e[t].push(r);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var f=d[c];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==a+n){l=f;break}}l||(s=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",a+n),l.src=t),e[t]=[r];var p=(a,r)=>{l.onerror=l.onload=null,clearTimeout(u);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),a)return a(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},r={},i.f.remotes=(e,a)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var n=r[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return a.push(n.p);var o=a=>{a||(a=new Error("Container missing")),"string"==typeof a.message&&(a.message+='\nwhile loading "'+n[1]+'" from '+n[2]),i.m[e]=()=>{throw a},n.p=0},l=(e,t,r,l,s,i)=>{try{var d=e(t,r);if(!d||!d.then)return s(d,l,i);var c=d.then((e=>s(e,l)),o);if(!i)return c;a.push(n.p=c)}catch(e){o(e)}},s=(e,a,r)=>l(a.get,n[1],t,0,d,r),d=a=>{n.p=1,i.m[e]=e=>{e.exports=a()}};l(i,n[2],0,0,((e,a,t)=>e?l(i.I,n[0],0,e,s,t):o()),1)}}))},(()=>{i.S={};var e={},a={};i.I=(t,r)=>{r||(r=[]);var n=a[t];if(n||(n=a[t]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],l="workbench",s=(e,a,t,r)=>{var n=o[e]=o[e]||{},s=n[a];if(!s||!s.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(s&&s.loaded&&s.__postman_local_chunk__)return;n[a]={get:t,from:l,eager:!!r,__postman_local_chunk__:!0}}else(!s||!s.loaded&&(!r!=!s.eager?r:l>s.from))&&(n[a]={get:t,from:l,eager:!!r})},d=[];return"default"===t&&(s("@amplitude/analytics-browser","2.5.2",(()=>i.e(9467).then((()=>()=>i(79467))))),s("@postman/aether-design-tokens","1.4.0",(()=>i.e(7908).then((()=>()=>i(86462))))),s("@postman/app-access-control","1.7.0",(()=>Promise.all([i.e(6663),i.e(7201),i.e(5860),i.e(4888)]).then((()=>()=>i(84888))))),s("@postman/app-amplitude","2.0.0",(()=>Promise.all([i.e(3101),i.e(71),i.e(7560)]).then((()=>()=>i(50071))))),s("@postman/app-analytics-service","3.1.0",(()=>Promise.all([i.e(8876),i.e(721)]).then((()=>()=>i(40721))))),s("@postman/app-app-config","0.1.2",(()=>i.e(1854).then((()=>()=>i(21854))))),s("@postman/app-auth","1.2.1",(()=>i.e(2668).then((()=>()=>i(62668))))),s("@postman/app-billing-service","1.6.0",(()=>Promise.all([i.e(6663),i.e(7201),i.e(5860),i.e(4193)]).then((()=>()=>i(34193))))),s("@postman/app-bootstrap","1.8.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(4594),i.e(540),i.e(1466),i.e(6663),i.e(1730),i.e(1314),i.e(6494),i.e(7201),i.e(3101),i.e(6880),i.e(7291),i.e(1180),i.e(9578),i.e(8708),i.e(8926)]).then((()=>()=>i(75662))))),s("@postman/app-data-fetching","1.3.0",(()=>Promise.all([i.e(540),i.e(1466),i.e(8013)]).then((()=>()=>i(98013))))),s("@postman/app-desktop-communication-sdk","1.1.1",(()=>Promise.all([i.e(540),i.e(966)]).then((()=>()=>i(20966))))),s("@postman/app-dialogs","1.2.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(5348),i.e(540),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(8081)]).then((()=>()=>i(23911))))),s("@postman/app-environment-service","1.3.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(9140),i.e(540),i.e(1466),i.e(6663),i.e(1730),i.e(1314),i.e(6494),i.e(607),i.e(7201),i.e(5860),i.e(398),i.e(9245),i.e(6880),i.e(8476),i.e(99),i.e(9875),i.e(2557)]).then((()=>()=>i(32557))))),s("@postman/app-error-handling","1.2.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(157),i.e(540),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(607),i.e(381),i.e(6010),i.e(730)]).then((()=>()=>i(730))))),s("@postman/app-feature-flags","1.6.0",(()=>Promise.all([i.e(540),i.e(6663),i.e(3101),i.e(6669),i.e(7052),i.e(8137)]).then((()=>()=>i(8137))))),s("@postman/app-i18n","1.3.0",(()=>Promise.all([i.e(540),i.e(5912),i.e(8912)]).then((()=>()=>i(38912))))),s("@postman/app-lazy-modals","1.1.1",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(5348),i.e(540),i.e(1730),i.e(1314),i.e(6494),i.e(7646)]).then((()=>()=>i(83528))))),s("@postman/app-module-federation-utils","1.2.0",(()=>Promise.all([i.e(4188),i.e(8201)]).then((()=>()=>i(71576))))),s("@postman/app-navigation","1.4.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(4007),i.e(540),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(607),i.e(398),i.e(2833),i.e(7291),i.e(488),i.e(2389)]).then((()=>()=>i(60488))))),s("@postman/app-network","2.0.0",(()=>Promise.all([i.e(1466),i.e(6663),i.e(3101),i.e(1180),i.e(29)]).then((()=>()=>i(10029))))),s("@postman/app-performance-utils","1.2.0",(()=>Promise.all([i.e(540),i.e(398),i.e(6880),i.e(1597)]).then((()=>()=>i(31597))))),s("@postman/app-sentry","1.2.0",(()=>Promise.all([i.e(540),i.e(6663),i.e(607),i.e(381),i.e(9951)]).then((()=>()=>i(79951))))),s("@postman/app-storage","1.2.0",(()=>Promise.all([i.e(540),i.e(1466),i.e(3101),i.e(4422)]).then((()=>()=>i(44422))))),s("@postman/app-ui","1.3.0",(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(157),i.e(540),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(2833),i.e(477),i.e(1312)]).then((()=>()=>i(89057))))),s("@postman/app-user-service","1.10.1",(()=>Promise.all([i.e(540),i.e(1466),i.e(6663),i.e(7201),i.e(5860),i.e(3101),i.e(7107)]).then((()=>()=>i(17107))))),s("@postman/app-variable-session","1.3.0",(()=>Promise.all([i.e(9875),i.e(7494)]).then((()=>()=>i(57494))))),s("@postman/app-vscode-utils","1.3.1",(()=>Promise.all([i.e(540),i.e(607),i.e(398),i.e(9444)]).then((()=>()=>i(59444))))),s("@postman/app-workspace-service","1.8.0",(()=>Promise.all([i.e(540),i.e(1466),i.e(6663),i.e(607),i.e(7201),i.e(5860),i.e(9245),i.e(4776)]).then((()=>()=>i(44776))))),s("@sentry/react","7.91.0",(()=>Promise.all([i.e(3193),i.e(540)]).then((()=>()=>i(3193))))),s("@tanstack/react-query-devtools","4.36.1",(()=>i.e(2223).then((()=>()=>i(92223))))),s("@tanstack/react-query","4.36.1",(()=>Promise.all([i.e(8609),i.e(540)]).then((()=>()=>i(8609))))),s("buffer","6.0.3",(()=>i.e(8834).then((()=>()=>i(48834))))),s("clsx","1.2.1",(()=>i.e(6277).then((()=>()=>i(6277))))),s("eventemitter3","5.0.1",(()=>i.e(686).then((()=>()=>i(30686))))),s("i18next-http-backend","2.4.2",(()=>i.e(5110).then((()=>()=>i(45110))))),s("i18next-icu","2.3.0",(()=>i.e(4546).then((()=>()=>i(94546))))),s("i18next-resources-to-backend","1.2.0",(()=>i.e(4163).then((()=>()=>i(74163))))),s("i18next","23.7.15",(()=>i.e(9842).then((()=>()=>i(99842))))),s("launchdarkly-react-client-sdk","3.0.10",(()=>Promise.all([i.e(4376),i.e(540)]).then((()=>()=>i(94376))))),s("mobx-react","7.6.0",(()=>Promise.all([i.e(129),i.e(540),i.e(1730),i.e(8476)]).then((()=>()=>i(70129))))),s("mobx","6.12.0",(()=>i.e(75).then((()=>()=>i(80075))))),s("prop-types","15.8.1",(()=>i.e(3980).then((()=>()=>i(13980))))),s("react-dom","16.14.0",(()=>Promise.all([i.e(8316),i.e(540)]).then((()=>()=>i(28316))))),s("react-draggable","4.4.6",(()=>Promise.all([i.e(1327),i.e(540),i.e(1730),i.e(1314),i.e(2833)]).then((()=>()=>i(41327))))),s("react-error-boundary","4.0.12",(()=>Promise.all([i.e(540),i.e(2955)]).then((()=>()=>i(32955))))),s("react-i18next","14.0.0",(()=>Promise.all([i.e(540),i.e(1141)]).then((()=>()=>i(11141))))),s("react-router-dom","6.11.2",(()=>Promise.all([i.e(6591),i.e(540)]).then((()=>()=>i(16591))))),s("react","16.14.0",(()=>i.e(2784).then((()=>()=>i(2784))))),s("rxjs/operators","7.8.1",(()=>Promise.all([i.e(6686),i.e(4803)]).then((()=>()=>i(34803))))),s("rxjs","7.8.1",(()=>Promise.all([i.e(6686),i.e(8210)]).then((()=>()=>i(28210))))),s("socket.io-client","2.5.0",(()=>Promise.all([i.e(7768),i.e(2333)]).then((()=>()=>i(17768))))),s("styled-components","5.3.6",(()=>Promise.all([i.e(5505),i.e(540)]).then((()=>()=>i(35505))))),s("ua-parser-js","1.0.37",(()=>i.e(6353).then((()=>()=>i(46353))))),s("uuid","8.3.2",(()=>i.e(9304).then((()=>()=>i(39304))))),s("web-vitals","3.5.1",(()=>i.e(9543).then((()=>()=>i(59543)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var a=i.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var t=a.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var a=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?a(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,a(t[2]))),t[3]&&(r.push([]),r.push.apply(r,a(t[3]))),r},a=(a,t)=>{a=e(a),t=e(t);for(var r=0;;){if(r>=a.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=a[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],s=(typeof l)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},t=e=>{var a=e[0],r="";if(1===e.length)return"*";if(a+.5){r+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(s=e[o]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var l=[];for(o=1;o<e.length;o++){var s=e[o];l.push(0===s?"not("+i()+")":1===s?"("+i()+" || "+i()+")":2===s?l.pop()+" "+l.pop():t(s))}return i();function i(){return l.pop().replace(/^\((.+)\)$/,"$1")}},r=(a,t)=>{if(0 in a){t=e(t);var n=a[0],o=n<0;o&&(n=-n-1);for(var l=0,s=1,i=!0;;s++,l++){var d,c,f=s<a.length?(typeof a[s])[0]:"";if(l>=t.length||"o"==(c=(typeof(d=t[l]))[0]))return!i||("u"==f?s>n&&!o:""==f!=o);if("u"==c){if(!i||"u"!=f)return!1}else if(i)if(f==c)if(s<=n){if(d!=a[s])return!1}else{if(o?d>a[s]:d<a[s])return!1;d!=a[s]&&(i=!1)}else if("s"!=f&&"n"!=f){if(o||s<=n)return!1;i=!1,s--}else{if(s<=n||c<f!=o)return!1;i=!1}else"s"!=f&&"n"!=f&&(i=!1,s--)}}var p=[],u=p.pop.bind(p);for(l=1;l<a.length;l++){var h=a[l];p.push(1==h?u()|u():2==h?u()&u():h?r(h,t):!u())}return!!u()},n=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},o=(e,a,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(n)+")",l=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),d=e=>function(a,t,r,n){var o=i.I(a);return o&&o.then?o.then(e.bind(e,a,i.S[a],t,r,n)):e(a,i.S[a],t,r,n)},c=d(((e,a,t,d,c)=>a&&i.o(a,t)?((e,a,t,i)=>{var d=n(e,t);return r(i,d)||l(o(e,t,d,i)),s(e[t][d])})(a,0,t,d):c())),f=d(((e,t,n,o,l)=>{var d=t&&i.o(t,n)&&((e,t,n)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!r(n,t)||e&&!a(e,t)?e:t),0))&&o[t]})(t,n,o);return d?s(d):l()})),p=d(((e,a,t,l,d)=>a&&i.o(a,t)?((e,a,t,l)=>{var i=n(e,t);if(!r(l,i))throw new Error(o(e,t,i,l));return s(e[t][i])})(a,0,t,l):d())),u={},h={26663:()=>f("default","@postman/app-app-config",[4,0,1,2],(()=>i.e(1854).then((()=>()=>i(21854))))),97201:()=>f("default","@postman/app-data-fetching",[4,1,3,0],(()=>Promise.all([i.e(540),i.e(1466),i.e(8013)]).then((()=>()=>i(98013))))),45860:()=>f("default","@postman/app-network",[4,2,0,0],(()=>Promise.all([i.e(1466),i.e(3101),i.e(1180),i.e(29)]).then((()=>()=>i(10029))))),13101:()=>f("default","@postman/app-auth",[4,1,2,1],(()=>i.e(2668).then((()=>()=>i(62668))))),89485:()=>f("default","@amplitude/analytics-browser",[1,2,5,2],(()=>i.e(9467).then((()=>()=>i(79467))))),88876:()=>f("default","web-vitals",[1,3,0,4],(()=>i.e(9543).then((()=>()=>i(59543))))),40540:()=>p("default","react",[4,16,14,0],(()=>i.e(2784).then((()=>()=>i(2784))))),21466:()=>f("default","@postman/app-vscode-utils",[4,1,3,1],(()=>Promise.all([i.e(540),i.e(607),i.e(398),i.e(9444)]).then((()=>()=>i(59444))))),21730:()=>p("default","react-dom",[4,16,14,0],(()=>i.e(8316).then((()=>()=>i(28316))))),1314:()=>f("default","prop-types",[1,15,8,1],(()=>i.e(3980).then((()=>()=>i(13980))))),43753:()=>f("default","@postman/aether-design-tokens",[1,1,2,0],(()=>i.e(6462).then((()=>()=>i(86462))))),59530:()=>f("default","styled-components",[4,5,3,6],(()=>i.e(5505).then((()=>()=>i(35505))))),56880:()=>f("default","@postman/app-analytics-service",[4,3,1,0],(()=>Promise.all([i.e(8876),i.e(8183)]).then((()=>()=>i(40721))))),47291:()=>f("default","@postman/app-sentry",[4,1,2,0],(()=>Promise.all([i.e(6663),i.e(607),i.e(381),i.e(8670)]).then((()=>()=>i(79951))))),21180:()=>f("default","@postman/app-error-handling",[4,1,2,0],(()=>Promise.all([i.e(9460),i.e(1125),i.e(157),i.e(540),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(607),i.e(381),i.e(6010),i.e(5624)]).then((()=>()=>i(730))))),19578:()=>c("default","@postman/app-ui",[4,1,3,0],(()=>Promise.all([i.e(9460),i.e(605),i.e(157),i.e(1466),i.e(2833),i.e(477),i.e(1344)]).then((()=>()=>i(89057))))),9994:()=>f("default","@postman/app-amplitude",[4,2,0,0],(()=>i.e(71).then((()=>()=>i(50071))))),24568:()=>f("default","@postman/app-feature-flags",[4,1,6,0],(()=>Promise.all([i.e(6669),i.e(7052),i.e(7204)]).then((()=>()=>i(8137))))),44118:()=>f("default","@postman/app-i18n",[4,1,3,0],(()=>Promise.all([i.e(5912),i.e(1910)]).then((()=>()=>i(38912))))),43580:()=>f("default","@postman/app-lazy-modals",[4,1,1,1],(()=>Promise.all([i.e(5348),i.e(3528)]).then((()=>()=>i(83528))))),92640:()=>f("default","ua-parser-js",[1,1,0,33],(()=>i.e(6353).then((()=>()=>i(46353))))),14527:()=>p("default","@tanstack/react-query",[1,4,29,1],(()=>i.e(8609).then((()=>()=>i(8609))))),21596:()=>f("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>i.e(2223).then((()=>()=>i(92223))))),60607:()=>p("default","react-router-dom",[4,6,11,2],(()=>i.e(6591).then((()=>()=>i(16591))))),60398:()=>f("default","uuid",[1,8,3,2],(()=>i.e(9304).then((()=>()=>i(39304))))),39245:()=>f("default","@postman/app-navigation",[4,1,4,0],(()=>Promise.all([i.e(9460),i.e(1125),i.e(605),i.e(4007),i.e(1466),i.e(1730),i.e(1314),i.e(6494),i.e(398),i.e(2833),i.e(7291),i.e(488)]).then((()=>()=>i(60488))))),78476:()=>f("default","mobx",[1,6,6,2],(()=>i.e(75).then((()=>()=>i(80075))))),10099:()=>f("default","@postman/app-workspace-service",[4,1,8,0],(()=>Promise.all([i.e(1466),i.e(6663),i.e(5860),i.e(9245),i.e(1403)]).then((()=>()=>i(44776))))),29875:()=>f("default","@postman/app-storage",[4,1,2,0],(()=>Promise.all([i.e(540),i.e(1466),i.e(3101),i.e(4422)]).then((()=>()=>i(44422))))),14350:()=>f("default","@postman/app-access-control",[4,1,7,0],(()=>i.e(4591).then((()=>()=>i(84888))))),80809:()=>f("default","@postman/app-performance-utils",[4,1,2,0],(()=>i.e(9239).then((()=>()=>i(31597))))),85692:()=>f("default","@postman/app-variable-session",[4,1,3,0],(()=>i.e(759).then((()=>()=>i(57494))))),70381:()=>f("default","@sentry/react",[1,7,49,0],(()=>i.e(3193).then((()=>()=>i(3193))))),56010:()=>f("default","react-error-boundary",[1,4,0,4],(()=>i.e(8537).then((()=>()=>i(32955))))),16669:()=>f("default","@postman/app-user-service",[4,1,10,1],(()=>Promise.all([i.e(1466),i.e(6663),i.e(7201),i.e(5860),i.e(3101),i.e(6940)]).then((()=>()=>i(17107))))),88749:()=>f("default","@postman/app-billing-service",[4,1,6,0],(()=>Promise.all([i.e(7201),i.e(5860),i.e(4433)]).then((()=>()=>i(34193))))),78439:()=>f("default","launchdarkly-react-client-sdk",[1,3,0,10],(()=>i.e(4376).then((()=>()=>i(94376))))),11669:()=>f("default","i18next-http-backend",[1,2,4,2],(()=>i.e(5110).then((()=>()=>i(45110))))),36523:()=>f("default","i18next-icu",[1,2,3,0],(()=>i.e(4546).then((()=>()=>i(94546))))),48980:()=>f("default","i18next-resources-to-backend",[1,1,2,0],(()=>i.e(4163).then((()=>()=>i(74163))))),73398:()=>f("default","i18next",[1,23,7,15],(()=>i.e(9842).then((()=>()=>i(99842))))),45352:()=>f("default","react-i18next",[1,14,0,0],(()=>i.e(4987).then((()=>()=>i(11141))))),22833:()=>f("default","clsx",[1,1,2,1],(()=>i.e(6277).then((()=>()=>i(6277))))),26246:()=>f("default","@postman/app-dialogs",[4,1,2,0],(()=>Promise.all([i.e(5348),i.e(2063)]).then((()=>()=>i(23911))))),97321:()=>f("default","@postman/app-desktop-communication-sdk",[4,1,1,1],(()=>i.e(9211).then((()=>()=>i(20966))))),6777:()=>f("default","rxjs",[1,7,8,1],(()=>Promise.all([i.e(6686),i.e(8210)]).then((()=>()=>i(28210))))),44928:()=>f("default","socket.io-client",[1,2,1,1],(()=>Promise.all([i.e(7768),i.e(2333)]).then((()=>()=>i(17768))))),48410:()=>f("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([i.e(6686),i.e(4803)]).then((()=>()=>i(34803))))),62154:()=>f("default","eventemitter3",[1,5,0,0],(()=>i.e(686).then((()=>()=>i(30686))))),57106:()=>f("default","mobx-react",[1,7,6,0],(()=>Promise.all([i.e(129),i.e(8476)]).then((()=>()=>i(70129))))),70355:()=>f("default","react-draggable",[1,4,4,5],(()=>i.e(1327).then((()=>()=>i(41327))))),52963:()=>f("default","buffer",[1,6,0,3],(()=>i.e(8834).then((()=>()=>i(48834))))),98276:()=>f("default","@postman/app-environment-service",[4,1,3,0],(()=>Promise.all([i.e(9460),i.e(605),i.e(9140),i.e(1466),i.e(6663),i.e(5860),i.e(9245),i.e(6880),i.e(8476),i.e(9875),i.e(2557)]).then((()=>()=>i(32557)))))},m={29:[6777,44928,48410,62154],71:[89485],99:[10099],381:[70381],398:[60398],477:[57106,70355],488:[26246,97321],540:[40540],607:[60607],1180:[21180],1314:[1314],1466:[21466],1730:[21730],2333:[52963],2557:[14350,80809,85692],2833:[22833],3101:[13101],5860:[45860],5912:[11669,36523,48980,73398,45352],6010:[56010],6494:[43753,59530],6663:[26663],6669:[16669],6880:[56880],7052:[88749,78439],7201:[97201],7291:[47291],8013:[14527,21596],8276:[98276],8476:[78476],8708:[9994,24568,44118,43580,92640],8876:[88876],9245:[39245],9578:[19578],9875:[29875]};i.f.consumes=(e,a)=>{i.o(m,e)&&m[e].forEach((e=>{if(i.o(u,e))return a.push(u[e]);var t=a=>{u[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=a()}},r=a=>{delete u[e],i.m[e]=t=>{throw delete i.c[e],a}};try{var n=h[e]();n.then?a.push(u[e]=n.then(t).catch(r)):t(n)}catch(e){r(e)}}))}})(),n=e=>new Promise(((a,t)=>{var r=i.miniCssF(e),n=i.p+r;if(((e,a)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var n=(l=t[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===a))return l}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var l;if((n=(l=o[r]).getAttribute("data-href"))===e||n===a)return l}})(r,n))return a();((e,a,t,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=s,n.parentNode.removeChild(n),r(i)}},n.href=a,document.head.appendChild(n)})(e,n,a,t)})),o={9150:0},i.f.miniCss=(e,a)=>{o[e]?a.push(o[e]):0!==o[e]&&{1312:1,1344:1,8926:1}[e]&&a.push(o[e]=n(e).then((()=>{o[e]=0}),(a=>{throw delete o[e],a})))},(()=>{var e={9150:0};i.f.j=(a,t)=>{var r=i.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1(3(12|14|44)|180|466|730)|3(101|81|98)|5(40|860|912)|6(66[39]|010|07|494|880)|7(052|201|291)|8([248]76|708)|9(245|578|875|9)|2833)$/.test(a))e[a]=0;else{var n=new Promise(((t,n)=>r=e[a]=[t,n]));t.push(r[2]=n);var o=i.p+i.u(a),l=new Error;i.l(o,(t=>{if(i.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+a+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+a,a)}};var a=(a,t)=>{var r,n,[o,l,s]=t,d=0;if(o.some((a=>0!==e[a]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);s&&s(i)}for(a&&a(t);d<o.length;d++)n=o[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkworkbench=self.webpackChunkworkbench||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),i.nc=void 0;var d=i(98193);workbench=d})();
//# sourceMappingURL=remoteEntry.js.map