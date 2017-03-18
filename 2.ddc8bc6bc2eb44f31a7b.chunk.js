webpackJsonp([2],{"./app/containers/QuestionsPage/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/react/react.js"),s=n.n(a),c=n("./node_modules/react-redux/lib/index.js"),l=(n.n(c),n("./node_modules/react-helmet/lib/Helmet.js")),f=n.n(l),p=n("./node_modules/react-intl/lib/index.es.js"),d=n("./app/containers/QuestionsPage/messages.js");n.d(t,"QuestionsPage",function(){return b});var T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var u=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&u)for(var a in u)void 0===n[a]&&(n[a]=u[a]);else n||(n=u||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),y(t,[{key:"render",value:function(){return T("div",{},void 0,T(f.a,{title:"QuestionsPage",meta:[{name:"description",content:"Description of QuestionsPage"}]}),s.a.createElement(p.c,d.a.header))}}]),t}(s.a.PureComponent);t.default=n.i(c.connect)(null,i)(b)},"./app/containers/QuestionsPage/messages.js":function(e,t,n){"use strict";var r=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(r.d)({header:{id:"app.containers.QuestionsPage.header",defaultMessage:"This is QuestionsPage container !"}})},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function u(e,t,n){var u,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(u=0;u<e.length;u++)if(e[u]!==t[u])return!1;return!0}try{var f=a(e),p=a(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),u=f.length-1;u>=0;u--)if(f[u]!=p[u])return!1;for(u=f.length-1;u>=0;u--)if(l=f[u],!c(e[l],t[l],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,a=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:u(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n("./node_modules/react/react.js"),f=r(l),p=n("./node_modules/react-side-effect/lib/index.js"),d=r(p),T=n("./node_modules/deep-equal/index.js"),y=r(T),b=n("./node_modules/object-assign/index.js"),m=r(b),E=n("./node_modules/react-helmet/lib/HelmetConstants.js"),h=n("./node_modules/react-helmet/lib/PlainComponent.js"),_=r(h),g="data-react-helmet",v=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r[t])return r[t]}return null},S=function(e){var t=A(e,"title"),n=A(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,"defaultTitle");return t||r||""},P=function(e){return A(e,"onChangeClientState")||function(){}},O=function(e){return e.filter(function(e){return void 0!==e[E.TAG_NAMES.HTML]}).map(function(e){return e[E.TAG_NAMES.HTML]}).reduce(function(e,t){return c({},e,t)},{})},j=function(e,t){return t.filter(function(e){return void 0!==e[E.TAG_NAMES.BASE]}).map(function(e){return e[E.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var u=r[o],i=u.toLowerCase();if(e.indexOf(i)!==-1)return t.concat(n)}return t},[])},w=function(e,t,n){var r={};return n.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,u=Object.keys(e),i=0;i<u.length;i++){var a=u[i],s=a.toLowerCase();t.indexOf(s)===-1||n===E.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===E.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(a)===-1||a!==E.TAG_PROPERTIES.INNER_HTML&&a!==E.TAG_PROPERTIES.CSS_TEXT||(n=a)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var u=Object.keys(o),i=0;i<u.length;i++){var a=u[i],s=(0,m.default)({},r[a],o[a]);r[a]=s}return e},[]).reverse()},M=function(e){document.title=e||document.title},R=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute(g),r=n?n.split(","):[],o=[].concat(r),u=Object.keys(e),i=0;i<u.length;i++){var a=u[i],s=e[a]||"";t.setAttribute(a,s),r.indexOf(a)===-1&&r.push(a);var c=o.indexOf(a);c!==-1&&o.splice(c,1)}for(var l=o.length-1;l>=0;l--)t.removeAttribute(o[l]);r.length===o.length?t.removeAttribute(g):t.setAttribute(g,r.join(","))},C=function(e,t){var n=document.head||document.querySelector("head"),r=n.querySelectorAll(e+"["+g+"]"),o=Array.prototype.slice.call(r),u=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if("innerHTML"===r)n.innerHTML=t.innerHTML;else if("cssText"===r)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(g,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):u.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),u.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:u}},N=function(e){for(var t=Object.keys(e),n="",r=0;r<t.length;r++){var o=t[r];n+=(void 0!==e[o]?o+'="'+e[o]+'"':""+o)+" "}return n.trim()},G=function(e,t){return"<"+e+" "+g+'="true">'+v(t)+"</"+e+">"},x=function(e,t){return t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){return void 0===t[e]?e:e+'="'+v(t[e])+'"'}).join(" ").trim(),r=t.innerHTML||t.cssText||"";return"<"+e+" "+g+'="true" '+n+([E.TAG_NAMES.NOSCRIPT,E.TAG_NAMES.SCRIPT,E.TAG_NAMES.STYLE].indexOf(e)===-1?"/>":">"+r+"</"+e+">")}).join("")},k=function(e,t){return[f.default.createElement(E.TAG_NAMES.TITLE,a({key:t},g,!0),t)]},I=function(e,t){return t.map(function(t,n){var r=a({key:n},g,!0);return Object.keys(t).forEach(function(e){var n=E.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),f.default.createElement(e,r)})},L=function(e,t){switch(e){case E.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t)},toString:function(){return G(e,t)}};case E.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return N(t)}};default:return{toComponent:function(){return I(e,t)},toString:function(){return x(e,t)}}}},H=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,u=e.linkTags,i=e.scriptTags,a=e.noscriptTags,s=e.styleTags;return{htmlAttributes:L(E.TAG_NAMES.HTML,t),title:L(E.TAG_NAMES.TITLE,n),base:L(E.TAG_NAMES.BASE,r),meta:L(E.TAG_NAMES.META,o),link:L(E.TAG_NAMES.LINK,u),script:L(E.TAG_NAMES.SCRIPT,i),noscript:L(E.TAG_NAMES.NOSCRIPT,a),style:L(E.TAG_NAMES.STYLE,s)}},U=function(e){var t=function(t){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),s(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,y.default)(this.props,e)}},{key:"render",value:function(){return f.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component);return t.propTypes={htmlAttributes:f.default.PropTypes.object,title:f.default.PropTypes.string,defaultTitle:f.default.PropTypes.string,titleTemplate:f.default.PropTypes.string,base:f.default.PropTypes.object,meta:f.default.PropTypes.arrayOf(f.default.PropTypes.object),link:f.default.PropTypes.arrayOf(f.default.PropTypes.object),script:f.default.PropTypes.arrayOf(f.default.PropTypes.object),noscript:f.default.PropTypes.arrayOf(f.default.PropTypes.object),style:f.default.PropTypes.arrayOf(f.default.PropTypes.object),onChangeClientState:f.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=H({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},q=function(e){return{htmlAttributes:O(e),title:S(e),baseTag:j([E.TAG_PROPERTIES.HREF],e),metaTags:w(E.TAG_NAMES.META,[E.TAG_PROPERTIES.NAME,E.TAG_PROPERTIES.CHARSET,E.TAG_PROPERTIES.HTTPEQUIV,E.TAG_PROPERTIES.PROPERTY],e),linkTags:w(E.TAG_NAMES.LINK,[E.TAG_PROPERTIES.REL,E.TAG_PROPERTIES.HREF],e),scriptTags:w(E.TAG_NAMES.SCRIPT,[E.TAG_PROPERTIES.SRC,E.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:w(E.TAG_NAMES.NOSCRIPT,[E.TAG_PROPERTIES.INNER_HTML],e),styleTags:w(E.TAG_NAMES.STYLE,[E.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:P(e)}},D=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,u=e.linkTags,i=e.scriptTags,a=e.noscriptTags,s=e.styleTags,c=e.onChangeClientState;R(t),M(n);var l={baseTag:C(E.TAG_NAMES.BASE,r),metaTags:C(E.TAG_NAMES.META,o),linkTags:C(E.TAG_NAMES.LINK,u),scriptTags:C(E.TAG_NAMES.SCRIPT,i),noscriptTags:C(E.TAG_NAMES.NOSCRIPT,a),styleTags:C(E.TAG_NAMES.STYLE,s)},f={},p={};Object.keys(l).forEach(function(e){var t=l[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(p[e]=l[e].oldTags)}),c(e,f,p)},Q=(0,d.default)(q,D,H);t.default=U(Q(_.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),c=r(s),l=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return null}}]),t}(c.default.Component);t.default=l,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("./node_modules/react/react.js"),s=r(a),c=n("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),l=r(c),f=n("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),p=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(d.map(function(e){return e.props})),y.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,y=function(e){function t(){o(this,t),e.apply(this,arguments)}return u(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(c,this.props)},i(t,null,[{key:"displayName",value:"SideEffect("+r(c)+")",enumerable:!0},{key:"canUseDOM",value:l.default.canUseDOM,enumerable:!0}]),t}(a.Component);return y}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var u=o.bind(t),i=0;i<n.length;i++)if(!u(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=r}});