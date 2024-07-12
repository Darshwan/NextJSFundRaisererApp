/*! For license information please see 5348.a4332d91690fd3d8.js.LICENSE.txt */
(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[5348],{35348:(e,t,n)=>{"use strict";n.d(t,{hz:()=>S,mz:()=>E,u_:()=>N,xB:()=>C});var o=n(51119),r=n(40540),a=n.n(r),l=n(1314),s=n.n(l),i=n(59530),u=n.n(i),c=n(37149),d=n.n(c),f=n(43753),p=n(49627),m=n(58560),h=n(80429),y=n(74962);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=u().span.withConfig({displayName:"Modal__StyledCloseButtonWrapper",componentId:"sc-7dzuln-0"})(["position:relative;left:8px;bottom:8px;"]),O=u()(y.Z).withConfig({displayName:"Modal__StyledModalHeading",componentId:"sc-7dzuln-1"})(["line-height:",";margin-bottom:12px;"],(function(e){return e.theme["line-height-m"]})),C=a().forwardRef((function(e,t){var n=e.heading,o=e.onClose,r=e.hideCloseButton,l=e.isTruncatedHeader,s=e.className;return a().createElement(m.Z,{gap:"spacing-xs",justifyContent:"space-between",ref:t,grow:1,shrink:1,className:s,padding:{paddingBottom:"spacing-xs",paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingTop:"spacing-xl"}},a().createElement(O,{_wordBreak:"break-word",type:"h3",text:n,color:"content-color-primary",isTruncated:l}),r?"":a().createElement(g,null,a().createElement(h.Z,{type:"tertiary",icon:a().createElement(p.Z,null),onClick:o})))}));C.defaultProps={hideCloseButton:!1,onClose:function(){},className:"",isTruncatedHeader:!1},C.propTypes={heading:s().string.isRequired,onClose:s().func,hideCloseButton:s().bool,isTruncatedHeader:s().bool,className:s().string};var w=u().div.withConfig({displayName:"Modal__StyledModalContent",componentId:"sc-7dzuln-2"})(["color:",";display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;overflow-y:auto;padding-left:",";padding-right:",";padding-bottom:",";padding-top:",";margin-bottom:",";& > *:not(:last-child){margin-bottom:",";}"],(function(e){return e.theme["content-color-primary"]}),(function(e){return e.theme["spacing-xl"]}),(function(e){return e.theme["spacing-xl"]}),(function(e){return e.theme["spacing-s"]}),(function(e){return e.theme["spacing-xs"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme[e.gap]})),S=a().forwardRef((function(e,t){var n=e.children,o=e.gap,r=e.className;return a().createElement(w,{ref:t,gap:o,className:r},n)}));S.defaultProps={gap:"spacing-s",className:""},S.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]).isRequired,gap:s().oneOf(Object.keys(f.globals.spacing)),className:s().string};var E=a().forwardRef((function(e,t){var n=e.children,o=e.className;return a().createElement(m.Z,{ref:t,alignItems:"flex-start",padding:{paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingBottom:"spacing-xl"},className:o},n)}));function _(e){switch(e){case"small":return{maxWidth:"440px"};case"large":return{maxWidth:"846px"};default:return{maxWidth:"648px"}}}E.defaultProps={className:""},E.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]).isRequired,className:s().string};var M=u().div.withConfig({displayName:"Modal__StyledModal",componentId:"sc-7dzuln-3"})(["background-color:",";display:flex;flex-grow:1;flex-shrink:1;width:100%;flex-direction:column;max-height:96vh;align-self:center;border-radius:",";box-shadow:",";"],(function(e){return e.theme["background-color-primary"]}),(function(e){return e.theme["border-radius-l"]}),(function(e){return e.theme["modal-box-shadow"]})),N=a().forwardRef((function(e,t){var n=e.onClose,o=e.isOpen,l=e.contentLabel,s=e.children,i=e.size,u=e.parentSelector,c=e.id,p=e.className,m=e.closeTimeoutMS,h=e.zIndex,y=e["data-testid"],v=e["data-click"],g={overlay:{position:"fixed",backgroundColor:"rgba(26, 26, 26, 0.6)",zIndex:h},content:b({display:"flex",position:"relative",border:"none",top:f.globals.spacing["spacing-zero"],bottom:f.globals.spacing["spacing-zero"],left:f.globals.spacing["spacing-zero"],right:f.globals.spacing["spacing-zero"],margin:"auto",height:"100%",overflow:"hidden",background:"none",padding:f.globals.spacing["spacing-zero"]},_(i))},O=a().Children.map(s,(function(e){return a().isValidElement(e)&&e.type===C?a().cloneElement(e,{onClose:n}):e}));return(0,r.useEffect)((function(){var e=document&&document.body;e&&(e.style.overflow=o?"hidden":"unset")}),[o]),u?a().createElement(d(),{isOpen:o,style:g,onRequestClose:n,contentLabel:l,ariaHideApp:!1,shouldCloseOnOverlayClick:!1,shouldCloseOnEsc:!0,parentSelector:u,closeTimeoutMS:m},a().createElement(M,{id:c,className:p,ref:t,"data-aether-id":"aether-modal","data-testid":y,"data-click":v},O)):a().createElement(d(),{isOpen:o,style:g,onRequestClose:n,contentLabel:l,ariaHideApp:!1,shouldCloseOnOverlayClick:!1,shouldCloseOnEsc:!0,closeTimeoutMS:m},a().createElement(M,{id:c,className:p,ref:t,"data-aether-id":"aether-modal","data-testid":y,"data-click":v},O))}));N.defaultProps={isOpen:!1,contentLabel:"Modal",id:"",className:"",size:"medium",parentSelector:null,closeTimeoutMS:250,zIndex:120,"data-testid":"aether-modal","data-click":""},N.propTypes={isOpen:s().bool,closeTimeoutMS:s().number,zIndex:s().number,onClose:s().func.isRequired,children:s().arrayOf(s().element).isRequired,size:s().oneOf(["small","medium","large"]),contentLabel:s().string,parentSelector:s().func,id:s().string,className:s().string,"data-testid":s().string,"data-click":s().string},N.displayName="Modal",C.displayName="ModalHeader",S.displayName="ModalContent",E.displayName="ModalFooter"},85978:(e,t,n)=>{var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},46847:(e,t,n)=>{"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function l(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,l=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==l||null!==s){var i=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==l?"\n  "+l:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>l}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},42901:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(40540),l=m(a),s=m(n(21730)),i=m(n(1314)),u=m(n(10742)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66941)),d=n(6259),f=m(d),p=n(46847);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=t.portalClassName="ReactModalPortal",v=t.bodyOpenClassName="ReactModal__Body--open",b=d.canUseDOM&&void 0!==s.default.createPortal,g=function(){return b?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function O(e){return e()}var C=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!b&&s.default.unmountComponentAtNode(r.node);var e=O(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=g()(r,l.default.createElement(u.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},h(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(b||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,O(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:O(e.parentSelector),nextParent:O(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&b?(!this.node&&b&&(this.node=document.createElement("div")),g()(l.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(f.default),i.default.instanceOf(d.SafeHTMLCollection),i.default.instanceOf(d.SafeNodeList),i.default.arrayOf(i.default.instanceOf(f.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},C.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:v,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},10742:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(40540),s=y(n(1314)),i=h(n(77194)),u=y(n(90026)),c=h(n(66941)),d=h(n(95853)),f=n(6259),p=y(f),m=y(n(66638));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}n(26736);var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&b>0&&0==(b-=1)&&c.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(n.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":r(t))?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"==typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,c.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=n?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,l);return this.props.overlayElement(u,d)}}]),t}(l.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=g,e.exports=t.default},66941:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"==typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t=n}return l=t||l},t.validateElement=i,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.setAttribute("aria-hidden","true")}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.removeAttribute("aria-hidden")}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,r=(o=n(45982))&&o.__esModule?o:{default:o},a=n(6259),l=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){var t=e||l;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},26736:(e,t,n)=>{"use strict";var o,r=(o=n(66638))&&o.__esModule?o:{default:o},a=void 0,l=void 0,s=[];function i(){0!==s.length&&s[s.length-1].focusContent()}r.default.subscribe((function(e,t){a&&l||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",i),(l=a.cloneNode()).addEventListener("focus",i)),(s=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(a.parentElement&&a.parentElement.removeChild(a),l.parentElement&&l.parentElement.removeChild(l))}))},95853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){};var n={},o={};t.add=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),r.add(e)}));var r,a},t.remove=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&r.remove(e)}));var r,a}},77194:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=i,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==a.length&&(t=a.pop()).focus({preventScroll:e}))}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",u))};var o,r=(o=n(93970))&&o.__esModule?o:{default:o},a=[],l=null,s=!1;function i(){s=!0}function u(){if(s){if(s=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,r.default)(l)[0]||l).focus()}),0)}}},66638:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=n,e.exports=t.default},6259:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,r=((o=n(85978))&&o.__esModule?o:{default:o}).default,a=r.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=r.canUseDOM?window.NodeList:{},t.canUseDOM=r.canUseDOM,t.default=a},90026:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(e);if(n.length){var o=void 0,a=t.shiftKey,l=n[0],s=n[n.length-1];if(e===document.activeElement){if(!a)return;o=s}if(s!==document.activeElement||a||(o=l),l===document.activeElement&&a&&(o=s),o)return t.preventDefault(),void o.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=i&&"Chrome"!=i[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var u=n.indexOf(document.activeElement);if(u>-1&&(u+=a?-1:1),void 0===(o=n[u]))return t.preventDefault(),void(o=a?s:l).focus();t.preventDefault(),o.focus()}}else t.preventDefault()};var o,r=(o=n(93970))&&o.__esModule?o:{default:o};e.exports=t.default},93970:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(r)};var n=/input|select|textarea|button|object/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function r(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var r=isNaN(t);return(r||t>=0)&&function(e,t){var r=e.nodeName.toLowerCase();return(n.test(r)&&!e.disabled||"a"===r&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(o(t))return!1;t=t.parentNode}return!0}(e)}(e,!r)}e.exports=t.default},37149:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(42901))&&o.__esModule?o:{default:o};t.default=r.default,e.exports=t.default},45982:e=>{"use strict";e.exports=function(){}}}]);
//# sourceMappingURL=5348.a4332d91690fd3d8.js.map