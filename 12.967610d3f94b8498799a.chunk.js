webpackJsonp([12],{"./app/components/FetchView/index.js":function(e,n,t){"use strict";function r(e){return void 0!==e.children?e.children:s("div",{style:{textAlign:"center",margin:"50px auto"}},void 0,u)}var o=t("./node_modules/react/react.js"),i=(t.n(o),t("./node_modules/material-ui/Progress/index.js")),s=(t.n(i),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===s)t.children=o;else if(s>1){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}()),u=s(i.CircularProgress,{size:50});n.a=r},"./app/containers/ContestPage/index.js":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var u=t("./node_modules/react/react.js"),a=t.n(u),c=t("./node_modules/react-router-redux/lib/index.js"),l=(t.n(c),t("./node_modules/react-apollo/lib/browser.js")),p=(t.n(l),t("./node_modules/react-redux/lib/index.js")),d=(t.n(p),t("./app/containers/Submit/actions.js")),f=t("./app/components/FetchView/index.js");t.d(n,"default",function(){return w});var y,m,b,h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===s)t.children=o;else if(s>1){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),_=s(["\n  query ContestListForLayout($contestId: Int!) { \n    contest(id: $contestId) {\n      id\n      start\n      name\n      description\n      signupDuration\n      duration\n    }\n  }\n"],["\n  query ContestListForLayout($contestId: Int!) { \n    contest(id: $contestId) {\n      id\n      start\n      name\n      description\n      signupDuration\n      duration\n    }\n  }\n"]),j=function(e){return parseInt(e.params.contest_id,10)},g=t.i(l.gql)(_),P=h(f.a,{}),w=(y=t.i(p.connect)(null,function(e){return{dispatch:e}}),m=t.i(l.graphql)(g,{options:function(e){return{variables:{contestId:j(e)}}}}),y(b=m(b=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),v(n,[{key:"componentDidMount",value:function(){var e=parseInt(this.props.params.contest_id,10);this.props.dispatch(t.i(d.a)({contestId:e})),this.props.children||this.props.dispatch(t.i(c.push)("/contests/"+e+"/problems"))}},{key:"componentWillUnmount",value:function(){this.props.dispatch(t.i(d.a)({contestId:void 0}))}},{key:"render",value:function(){return this.props.children?this.props.children:P}}]),n}(a.a.PureComponent))||b)||b)},"./node_modules/material-ui/Progress/index.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("./node_modules/material-ui/Progress/CircularProgress.js");Object.defineProperty(n,"CircularProgress",{enumerable:!0,get:function(){return r(o).default}});var i=t("./node_modules/material-ui/Progress/LinearProgress.js");Object.defineProperty(n,"LinearProgress",{enumerable:!0,get:function(){return r(i).default}})}});