webpackJsonp([10],{"./app/containers/AuthPage/reducer.js":function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n("./node_modules/redux/es/index.js"),s=n("./app/containers/Login/reducer.js"),a=n("./app/containers/Register/reducer.js"),i=n.i(t.combineReducers)({login:s.a,register:a.a});r.default=i},"./app/containers/Login/reducer.js":function(e,r,n){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case a.a:return i.set("loading",!0);case a.b:return i;case a.c:return i.set("error",!0);default:return e}}var s=n("./node_modules/immutable/dist/immutable.js"),a=(n.n(s),n("./app/containers/Login/constants.js")),i=n.i(s.fromJS)({});r.a=t},"./app/containers/Register/constants.js":function(e,r,n){"use strict";n.d(r,"a",function(){return t}),n.d(r,"b",function(){return s}),n.d(r,"c",function(){return a});var t="app/Register/REGISTER",s="app/Register/REGISTER_ERROR",a="app/Register/REGISTER_SUCCESS"},"./app/containers/Register/reducer.js":function(e,r,n){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case a.c:return e.merge({error:!1,loading:!1});case a.b:return e.merge({error:!0,loading:!1});case a.a:return e.set("loading",!0);default:return e}}var s=n("./node_modules/immutable/dist/immutable.js"),a=(n.n(s),n("./app/containers/Register/constants.js")),i=n.i(s.fromJS)({error:!1,loading:!1});r.a=t}});