webpackJsonp([12],{"./app/containers/ProfilePage/actions.js":function(e,n,r){"use strict";function a(e,n){return{type:o.a,oldPassword:e,newPassword:n}}function t(){return{type:o.b}}function s(){return{type:o.c}}var o=r("./app/containers/ProfilePage/constants.js");n.a=a,n.b=t,n.c=s},"./app/containers/ProfilePage/constants.js":function(e,n,r){"use strict";r.d(n,"a",function(){return a}),r.d(n,"b",function(){return t}),r.d(n,"c",function(){return s});var a="app/ProfilePage/CHANGE_PASSWORD",t="app/ProfilePage/CHANGE_PASSWORD_SUCCESS",s="app/ProfilePage/CHANGE_PASSWORD_ERROR"},"./app/containers/ProfilePage/sagas.js":function(e,n,r){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function t(e,n){return p.c.mutate({mutation:g,variables:{oldPassword:e,newPassword:n}})}function s(e){var n,a=e.oldPassword,s=e.newPassword;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.i(i.call)(t,a,s);case 3:return n=e.sent,e.next=6,r.i(i.put)(!0===n.data.changePassword.changed?r.i(P.b)():r.i(P.c)());case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,r.i(i.put)(r.i(P.c)());case 12:case"end":return e.stop()}},l,this,[[0,8]])}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(i.takeLatest)(d.a,s);case 2:case"end":return e.stop()}},f,this)}Object.defineProperty(n,"__esModule",{value:!0});var i=r("./node_modules/redux-saga/effects.js"),c=(r.n(i),r("./node_modules/react-apollo/react-apollo.browser.umd.js")),u=(r.n(c),r("./app/utils/sagas.js")),d=r("./app/containers/ProfilePage/constants.js"),P=r("./app/containers/ProfilePage/actions.js"),p=r("./app/graphql.js"),w=a(["\n  mutation ChangePasswordMutation($oldPassword: String!, $newPassword: String!){\n    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)\n  }\n"],["\n  mutation ChangePasswordMutation($oldPassword: String!, $newPassword: String!){\n    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)\n  }\n"]),l=regeneratorRuntime.mark(s),f=regeneratorRuntime.mark(o),g=r.i(c.gql)(w);n.default=r.i(u.a)([o])}});