(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[3640,856],{20856:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var o=n(54047),i=n(40540),r=n.n(i),a=n(59530),l=n.n(a),d=n(1314),u=n.n(d),s=n(33392),c=n.n(s),p=n(43753),h=["click","mouseenter","focus","focusin"],g=l()(c()).withConfig({displayName:"Popover__StyledPopover",componentId:"xu341w-0"})(["& .tippy-content{min-width:120px;z-index:1000;background-color:",";border-radius:",";padding:",";box-shadow:",";font-family:",";font-size:",";line-height:",";font-weight:",";}& .tippy-svg-arrow > svg{filter:",";}& .tippy-svg-arrow > svg > path{fill:",";}"],(function(e){return e.theme["popover-background-color"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme[e.padding]}),(function(e){return e.theme["popover-box-shadow"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-size-m"]}),(function(e){return e.theme["line-height-m"]}),(function(e){return e.theme["text-weight-regular"]}),(function(e){return e.theme["popover-pointer-filter"]}),(function(e){return e.theme["popover-background-color"]}));function f(e){var t=(0,i.useState)({}),n=(0,o.Z)(t,2),a=n[0],l=n[1],d=e.children,u=e.className,s=e.delay,c=e.openAnimationDuration,p=e.closeAnimationDuration,h=e.isOpen,f=e.onOpen,v=e.onClose,m=e.gap,x=e.maxWidth,b=e.onClickOutside,y=e.padding,w=e.placement,I=e.trigger,O=e.triggerEvent,k=e.triggerRef,C=e.appendTo,_=e.pointer,E=e.xOffset,R=e.getReferenceClientRect,L=e["data-testid"],T=e["data-click"],q=_?m+11:m;function S(e){27===e.keyCode&&("boolean"==typeof h&&b?b(e):a&&a.hide())}function A(){document.addEventListener("keydown",S),f&&f()}function D(){document.removeEventListener("keydown",S),v&&v()}function N(){b&&b()}return null!==h?r().createElement(g,{visible:h,onCreate:function(e){return l(e)},content:d,placement:w,interactive:!0,delay:[s,null],duration:[c,p],maxWidth:x,className:"aether-popover ".concat(u),"data-aether-id":"aether-popover","data-testid":L,"data-click":T,arrow:!!_&&'<svg\n        width="20"\n        height="11"\n        viewBox="0 0 20 11"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M11.5365 0.843729L20.0001 11L8.91685e-05 11L8.46365 0.843731C9.26324 -0.115777 10.7369 -0.115779 11.5365 0.843729Z"\n        />\n      </svg>',appendTo:C||document.getElementById("aether-popover-portal"),reference:k,onShow:A,onHide:D,padding:y,offset:[E,q],onClickOutside:N,getReferenceClientRect:R},I):r().createElement(g,{onCreate:function(e){return l(e)},content:d,placement:w,trigger:O,interactive:!0,delay:[s,null],duration:[c,p],maxWidth:x,className:"aether-popover ".concat(u),"data-aether-id":"aether-popover","data-testid":L,"data-click":T,arrow:!!_&&'<svg\n      width="20"\n      height="11"\n      viewBox="0 0 20 11"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        d="M11.5365 0.843729L20.0001 11L8.91685e-05 11L8.46365 0.843731C9.26324 -0.115777 10.7369 -0.115779 11.5365 0.843729Z"\n      />\n    </svg>',appendTo:C||document.getElementById("aether-popover-portal"),reference:k,onShow:A,onHide:D,padding:y,offset:[E,q],onClickOutside:N,getReferenceClientRect:R},I)}f.defaultProps={children:null,className:"",delay:0,openAnimationDuration:275,closeAnimationDuration:250,isOpen:null,gap:4,xOffset:0,maxWidth:320,onClickOutside:null,padding:"spacing-s",placement:"bottom-end",trigger:null,triggerEvent:"click",triggerRef:null,appendTo:null,pointer:!1,getReferenceClientRect:null,onOpen:null,onClose:null,"data-testid":"aether-popover","data-click":""},f.propTypes={children:u().oneOfType([u().arrayOf(u().node),u().node]),className:u().string,delay:u().number,openAnimationDuration:u().number,closeAnimationDuration:u().number,isOpen:u().bool,gap:u().number,xOffset:u().number,maxWidth:u().oneOfType([u().number,u().string]),onClickOutside:u().func,onOpen:u().func,onClose:u().func,padding:u().oneOf(Object.keys(p.globals.spacing)),placement:u().oneOf(["auto","top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]),trigger:u().object,triggerRef:u().object,appendTo:u().oneOfType([u().oneOf(["parent"]),u().object]),triggerEvent:function(e){var t=e.triggerEvent;return"string"!=typeof t?new Error("Popover: triggerEvent prop only accepts string as a valid value."):"string"==typeof t&&t.split(" ").filter((function(e){return!h.includes(e)})).length?new Error("Popover: the value of triggerEvent prop must be from ".concat(h,".")):null},pointer:u().bool,getReferenceClientRect:u().func,"data-testid":u().string,"data-click":u().string}},69705:(e,t,n)=>{const o=n(36808),i=/\\/g,r=/^\/+/,a=/{{[^{}]*[.:/?#@&\]][^{}]*}}/g,l="/",d=["protocol","auth","host","port","path","query","hash"];e.exports={parse:function(e){let t,n,u,s,c={protocol:{value:void 0,beginIndex:0,endIndex:0},auth:{value:void 0,beginIndex:0,endIndex:0},host:{value:void 0,beginIndex:0,endIndex:0},port:{value:void 0,beginIndex:0,endIndex:0},path:{value:void 0,beginIndex:0,endIndex:0},query:{value:void 0,beginIndex:0,endIndex:0},hash:{value:void 0,beginIndex:0,endIndex:0}},p={raw:e,protocol:void 0,auth:void 0,host:void 0,port:void 0,path:void 0,query:void 0,hash:void 0},h=new o,g=0;return e&&"string"==typeof e?(p.raw=e=e.trimLeft(),e=function(e,t){let n,o,i,r="",l=0;for(;null!==(o=a.exec(e));)n=o[0],i=o.index,r+=e.slice(l,i)+"_",t.add(n,i),l=i+n.length;return 0===l?e:(l<e.length&&(r+=e.slice(l)),r)}(e,h),n=e.length,-1!==(u=e.indexOf("#"))&&(c.hash.value=e.slice(u+1),c.hash.beginIndex=g+u+1,c.hash.endIndex=g+n,e=e.slice(0,n=u)),-1!==(u=e.indexOf("?"))&&(c.query.value=e.slice(u+1).split("&"),c.query.beginIndex=g+u+1,c.query.endIndex=g+n,e=e.slice(0,n=u)),-1!==(u=(e=e.replace(i,l)).indexOf("://"))&&(c.protocol.value=e.slice(0,u),c.protocol.beginIndex=g,c.protocol.endIndex=g+u,n-=u+3,g+=u+3,t=n,n=(e=(e=e.slice(u+3)).replace(r,"file"===c.protocol.value.toLowerCase()?l:"")).length,g+=t-n),-1!==(u=e.indexOf(l))&&(c.path.value=e.slice(u+1).split(l),c.path.beginIndex=g+u+1,c.path.endIndex=g+n,e=e.slice(0,n=u)),-1!==(u=e.lastIndexOf("@"))&&(c.auth.value=e.slice(0,u),c.auth.beginIndex=g,c.auth.endIndex=g+u,e=e.slice(u+1),n-=u+1,g+=u+1,-1!==(u=c.auth.value.indexOf(":"))?c.auth.value=[c.auth.value.slice(0,u),c.auth.value.slice(u+1)]:c.auth.value=[c.auth.value]),-1!==(u=e.lastIndexOf(":"))&&-1===(s=e.slice(u+1)).indexOf("]")&&(c.port.value=s,c.port.beginIndex=g+u+1,c.port.endIndex=g+n,e=e.slice(0,n=u)),e&&(c.host.value=e.split("."),c.host.beginIndex=g,c.host.endIndex=g+n),h.count()&&function(e,t){let n,o,i;for(n=0,o=d.length;n<o;++n)i=e[d[n]],i&&i.value&&(i.value=t.apply(i.value,i.beginIndex,i.endIndex))}(c,h),p.protocol=c.protocol.value,p.auth=c.auth.value,p.host=c.host.value,p.port=c.port.value,p.path=c.path.value,p.query=c.query.value,p.hash=c.hash.value,p):p}}},36808:e=>{e.exports=class{constructor(){this.replacements=[],this._offset=0,this._length=0}add(e,t){this.replacements.push({value:e,index:t-this._offset}),this._offset+=e.length-1,this._length++}count(){return this._length}_findLowerIndex(e){let t,n=this.count(),o=0,i=n-1;for(;o<=i;)t=o+i>>1,this.replacements[t].index>=e?i=t-1:o=t+1;return o>=n?-1:o}_applyInString(e,t,n){let o,i,r,a,l=0,d=this.count();if(!e||-1===(o=this._findLowerIndex(t)))return e;do{if(i=this.replacements[o],r=i.index,a=i.value,r>=n)break;r=l+r-t,e=e.slice(0,r)+a+e.slice(r+1),l+=a.length-1}while(++o<d);return e}apply(e,t,n){let o,i,r,a,l,d=e;if("string"==typeof e)return this._applyInString(e,t,n);for(l=t,o=0,i=e.length;o<i;++o)d=e[o],a=l+(r=d.length),e[o]=this._applyInString(d,l,a),l+=r+1;return e}}}}]);
//# sourceMappingURL=3640.24d7b5025b82b528.js.map