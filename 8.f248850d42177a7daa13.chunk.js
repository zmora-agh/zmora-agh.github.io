webpackJsonp([8],{"./app/components/ContestRanking/index.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){var t=[].concat(r(e.data)).sort(f);return m("div",{},void 0,m(d.a,{},void 0,m(c.a,{},void 0,m(i.TableHead,{},void 0,m(i.TableRow,{},void 0,m(i.TableCell,{numeric:!0},void 0,l.a.createElement(s.c,p.a.rank)),m(i.TableCell,{},void 0,l.a.createElement(s.c,p.a.name)),m(i.TableCell,{},void 0,l.a.createElement(s.c,p.a.attempts)))),m(i.TableBody,{},void 0,t.map(function(e,t){return m(i.TableRow,{},e.user.id,m(i.TableCell,{},void 0,t+1),m(i.TableCell,{},void 0,e.user.name),m(i.TableCell,{},void 0,e.solutions.map(function(e){return""+e.problem.shortcode+b(e.attempts)}).join(", ")))})))))}var a=n("./node_modules/react/react.js"),l=n.n(a),s=n("./node_modules/react-intl/lib/index.es.js"),u=n("./node_modules/material-ui/Paper/index.js"),d=n.n(u),i=n("./node_modules/material-ui/Table/index.js"),c=n.n(i),p=n("./app/components/ContestRanking/messages.js");t.a=o;var m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),f=function(e,t){var n=e.solutions,r=t.solutions,o=function(e){return e.filter(function(e){return!0===e.problem.required})},a=function(e){return e.filter(function(e){return!1===e.problem.required})},l=function(e){return e.reduce(function(e,t){return e.attempts+t.attempts},{attempts:0})},s=function(e){return l(o(e))},u=function(e){return l(a(e))},d=o(r).length-o(n).length,i=a(r).length-a(n).length,c=s(n)-s(r),p=u(n)-u(r);return d||i||c||p},b=function(e){return e>4?" ("+e+")":"*".repeat(e)};a.PropTypes.arrayOf(a.PropTypes.shape({user:a.PropTypes.shape({name:a.PropTypes.string.isRequred}).isRequired,solutions:a.PropTypes.arrayOf(a.PropTypes.shape({attempts:a.PropTypes.number.isRequired,problem:a.PropTypes.shape({shortcode:a.PropTypes.string.isRequired,required:a.PropTypes.bool.isRequired}).isRequired})).isRequired}))},"./app/components/ContestRanking/messages.js":function(e,t,n){"use strict";var r=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(r.d)({rank:{id:"app.components.ContestRanking.rank",defaultMessage:"Rank"},name:{id:"app.components.ContestRanking.name",defaultMessage:"Name"},attempts:{id:"app.components.ContestRanking.attempts",defaultMessage:"Solved problems (attempts)"}})},"./app/containers/ContestResultsPage/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/react/react.js"),u=n.n(s),d=n("./node_modules/react-apollo/lib/react-apollo.browser.umd.js"),i=(n.n(d),n("./app/components/ContestRanking/index.js"));n.d(t,"default",function(){return _});var c,p,m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=l(["\n  query q($contestId: Int!) {\n    contest(id: $contestId) {\n      id\n      ranking {\n        user {\n          id\n          name\n        }\n        solutions {\n          attempts\n          problem {\n            id\n            shortcode\n            required\n          }\n        }\n      }\n    }\n  }\n"],["\n  query q($contestId: Int!) {\n    contest(id: $contestId) {\n      id\n      ranking {\n        user {\n          id\n          name\n        }\n        solutions {\n          attempts\n          problem {\n            id\n            shortcode\n            required\n          }\n        }\n      }\n    }\n  }\n"]),h=n.i(d.gql)(b),y=function(e){return parseInt(e.params.contest_id,10)},_=(c=n.i(d.graphql)(h,{options:function(e){return{variables:{contestId:y(e)}}}}))(p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return this.props.data.loading?null:m(i.a,{data:this.props.data.contest.ranking})}}]),t}(u.a.PureComponent))||p},"./node_modules/material-ui/Table/Table.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var o=n("./node_modules/babel-runtime/helpers/extends.js"),a=r(o),l=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),s=r(l),u=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=r(u),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=r(i),p=n("./node_modules/babel-runtime/helpers/createClass.js"),m=r(p),f=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=r(f),h=n("./node_modules/babel-runtime/helpers/inherits.js"),y=r(h),_=n("./node_modules/react/react.js"),j=r(_),v=n("./node_modules/prop-types/index.js"),g=r(v),T=n("./node_modules/classnames/index.js"),x=r(T),P=n("./node_modules/jss-theme-reactor/index.js"),C=n("./node_modules/material-ui/utils/customPropTypes.js"),S=r(C),M=t.styleSheet=(0,P.createStyleSheet)("MuiTable",function(e){return{root:{fontFamily:e.typography.fontFamily,width:"100%",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden"}}}),k=function(e){function t(){return(0,c.default)(this,t),(0,b.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,m.default)(t,[{key:"getChildContext",value:function(){return{table:{}}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(0,s.default)(e,["className","children"]),o=this.context.styleManager.render(M),l=(0,x.default)(o.root,t);return j.default.createElement("table",(0,a.default)({className:l},r),n)}}]),t}(_.Component);k.contextTypes={styleManager:S.default.muiRequired},k.childContextTypes={table:g.default.object},t.default=k,k.propTypes={}},"./node_modules/material-ui/Table/TableBody.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var o=n("./node_modules/babel-runtime/helpers/extends.js"),a=r(o),l=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),s=r(l),u=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=r(u),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=r(i),p=n("./node_modules/babel-runtime/helpers/createClass.js"),m=r(p),f=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=r(f),h=n("./node_modules/babel-runtime/helpers/inherits.js"),y=r(h),_=n("./node_modules/react/react.js"),j=r(_),v=n("./node_modules/prop-types/index.js"),g=r(v),T=n("./node_modules/classnames/index.js"),x=r(T),P=n("./node_modules/jss-theme-reactor/index.js"),C=n("./node_modules/material-ui/utils/customPropTypes.js"),S=r(C),M=t.styleSheet=(0,P.createStyleSheet)("MuiTableBody",function(e){return{root:{fontSize:13,color:e.palette.text.primary}}}),k=function(e){function t(){return(0,c.default)(this,t),(0,b.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,m.default)(t,[{key:"getChildContext",value:function(){return{table:{body:!0}}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(0,s.default)(e,["className","children"]),o=this.context.styleManager.render(M),l=(0,x.default)(o.root,t);return j.default.createElement("tbody",(0,a.default)({className:l},r),n)}}]),t}(_.Component);k.contextTypes={table:g.default.object,styleManager:S.default.muiRequired},k.childContextTypes={table:g.default.object},t.default=k,k.propTypes={}},"./node_modules/material-ui/Table/TableCell.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n,r=e.className,o=e.children,a=e.compact,s=e.checkbox,d=e.numeric,c=e.disablePadding,m=(0,i.default)(e,["className","children","compact","checkbox","numeric","disablePadding"]),f=t.table,b=t.styleManager,y=b.render(v),_=f&&f.head?"th":"td",j=(0,h.default)(y.root,(n={},(0,u.default)(n,y.numeric,d),(0,u.default)(n,y.compact,a),(0,u.default)(n,y.checkbox,s),(0,u.default)(n,y.padding,!c),(0,u.default)(n,y.head,f&&f.head),(0,u.default)(n,y.footer,f&&f.footer),n),r);return p.default.createElement(_,(0,l.default)({className:j},m),o)}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),l=r(a),s=n("./node_modules/babel-runtime/helpers/defineProperty.js"),u=r(s),d=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=r(d);t.default=o;var c=n("./node_modules/react/react.js"),p=r(c),m=n("./node_modules/prop-types/index.js"),f=r(m),b=n("./node_modules/classnames/index.js"),h=r(b),y=n("./node_modules/jss-theme-reactor/index.js"),_=n("./node_modules/material-ui/utils/customPropTypes.js"),j=r(_),v=t.styleSheet=(0,y.createStyleSheet)("MuiTableCell",function(e){return{root:{borderBottom:"1px solid "+e.palette.text.lightDivider,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},numeric:{textAlign:"right",flexDirection:"row-reverse"},head:{whiteSpace:"pre"},padding:{padding:"0 56px 0 24px","&:last-child":{paddingRight:24}},compact:{paddingRight:24},checkbox:{paddingLeft:12,paddingRight:12},footer:{}}});o.propTypes={},o.defaultProps={checkbox:!1,compact:!1,numeric:!1,disablePadding:!1},o.contextTypes={table:f.default.object,styleManager:j.default.muiRequired}},"./node_modules/material-ui/Table/TableHead.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var o=n("./node_modules/babel-runtime/helpers/extends.js"),a=r(o),l=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),s=r(l),u=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=r(u),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=r(i),p=n("./node_modules/babel-runtime/helpers/createClass.js"),m=r(p),f=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=r(f),h=n("./node_modules/babel-runtime/helpers/inherits.js"),y=r(h),_=n("./node_modules/react/react.js"),j=r(_),v=n("./node_modules/prop-types/index.js"),g=r(v),T=n("./node_modules/classnames/index.js"),x=r(T),P=n("./node_modules/jss-theme-reactor/index.js"),C=n("./node_modules/material-ui/utils/customPropTypes.js"),S=r(C),M=t.styleSheet=(0,P.createStyleSheet)("MuiTableHead",function(e){return{root:{fontSize:12,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary}}}),k=function(e){function t(){return(0,c.default)(this,t),(0,b.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,m.default)(t,[{key:"getChildContext",value:function(){return{table:{head:!0}}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(0,s.default)(e,["className","children"]),o=this.context.styleManager.render(M),l=(0,x.default)(o.root,t);return j.default.createElement("thead",(0,a.default)({className:l},r),n)}}]),t}(_.Component);k.contextTypes={table:g.default.object,styleManager:S.default.muiRequired},k.childContextTypes={table:g.default.object},t.default=k,k.propTypes={}},"./node_modules/material-ui/Table/TableRow.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n,r=e.className,o=e.children,a=e.hover,s=e.selected,d=(0,i.default)(e,["className","children","hover","selected"]),c=t.table,m=t.styleManager,f=m.render(v),b=(0,h.default)(f.root,(n={},(0,u.default)(n,f.head,c&&c.head),(0,u.default)(n,f.footer,c&&c.footer),(0,u.default)(n,f.hover,c&&a),(0,u.default)(n,f.selected,c&&s),n),r);return p.default.createElement("tr",(0,l.default)({className:b},d),o)}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),l=r(a),s=n("./node_modules/babel-runtime/helpers/defineProperty.js"),u=r(s),d=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=r(d);t.default=o;var c=n("./node_modules/react/react.js"),p=r(c),m=n("./node_modules/prop-types/index.js"),f=r(m),b=n("./node_modules/classnames/index.js"),h=r(b),y=n("./node_modules/jss-theme-reactor/index.js"),_=n("./node_modules/material-ui/utils/customPropTypes.js"),j=r(_),v=t.styleSheet=(0,y.createStyleSheet)("MuiTableRow",function(e){return{root:{height:48,"&:focus":{outline:"none",background:e.palette.background.contentFrame}},head:{height:64},footer:{height:56},hover:{"&:hover":{background:e.palette.background.contentFrame}},selected:{background:e.palette.background.appBar}}});o.propTypes={},o.defaultProps={hover:!1,selected:!1},o.contextTypes={table:f.default.object,styleManager:j.default.muiRequired}},"./node_modules/material-ui/Table/TableSortLabel.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=e.active,r=e.className,o=e.children,a=e.direction,s=(0,i.default)(e,["active","className","children","direction"]),d=t.styleManager.render(x),c=(0,b.default)(d.sortLabel,(0,u.default)({},d.active,n),r),m=(0,b.default)(d.icon,(0,u.default)({},d[a],!!a));return p.default.createElement(v.default,(0,l.default)({className:c,component:"span",ripple:!1},s),o,p.default.createElement(T.default,{className:m}))}Object.defineProperty(t,"__esModule",{value:!0}),t.styleSheet=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),l=r(a),s=n("./node_modules/babel-runtime/helpers/defineProperty.js"),u=r(s),d=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=r(d);t.default=o;var c=n("./node_modules/react/react.js"),p=r(c),m=n("./node_modules/prop-types/index.js"),f=(r(m),n("./node_modules/classnames/index.js")),b=r(f),h=n("./node_modules/jss-theme-reactor/index.js"),y=n("./node_modules/material-ui/utils/customPropTypes.js"),_=r(y),j=n("./node_modules/material-ui/internal/ButtonBase.js"),v=r(j),g=n("./node_modules/material-ui/svg-icons/arrow-downward.js"),T=r(g),x=t.styleSheet=(0,h.createStyleSheet)("MuiTableSortLabel",function(e){return{sortLabel:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center",background:"transparent","&:hover":{color:e.palette.text.primary},"&:focus":{color:e.palette.text.primary}},active:{color:e.palette.text.primary,"& $icon":{opacity:1}},icon:{height:16,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",width:16},desc:{transform:"rotate(0deg)"},asc:{transform:"rotate(180deg)"}}});o.propTypes={},o.defaultProps={active:!1,direction:"desc"},o.contextTypes={styleManager:_.default.muiRequired}},"./node_modules/material-ui/Table/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/material-ui/Table/Table.js");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}});var a=n("./node_modules/material-ui/Table/TableHead.js");Object.defineProperty(t,"TableHead",{enumerable:!0,get:function(){return r(a).default}});var l=n("./node_modules/material-ui/Table/TableBody.js");Object.defineProperty(t,"TableBody",{enumerable:!0,get:function(){return r(l).default}});var s=n("./node_modules/material-ui/Table/TableRow.js");Object.defineProperty(t,"TableRow",{enumerable:!0,get:function(){return r(s).default}});var u=n("./node_modules/material-ui/Table/TableCell.js");Object.defineProperty(t,"TableCell",{enumerable:!0,get:function(){return r(u).default}});var d=n("./node_modules/material-ui/Table/TableSortLabel.js");Object.defineProperty(t,"TableSortLabel",{enumerable:!0,get:function(){return r(d).default}})},"./node_modules/material-ui/svg-icons/arrow-downward.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/react.js"),a=r(o),l=n("./node_modules/recompose/pure.js"),s=r(l),u=n("./node_modules/material-ui/SvgIcon/index.js"),d=r(u),i=a.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c=a.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),p=function(e){return a.default.createElement(d.default,e,i,c)};p=(0,s.default)(p),p.muiName="SvgIcon",t.default=p}});