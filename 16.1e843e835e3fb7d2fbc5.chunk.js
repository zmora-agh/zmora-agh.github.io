webpackJsonp([16],{"./app/containers/ContestsPage/actions.js":function(e,n,t){"use strict";function r(e,n){return{type:c.a,dialog:{contestId:n,contestName:e,open:!0,error:!1,loading:!1}}}function o(){return{type:c.b,dialog:{open:!1,error:!1,loading:!1}}}function a(e){return{type:c.c,contestId:e,dialog:{open:!1,error:!1}}}function s(e,n){return{type:c.d,dialog:{loading:!0},contestId:e,password:n}}function i(){return{type:c.e,dialog:{error:!0,loading:!1}}}var c=t("./app/containers/ContestsPage/constants.js");n.a=r,n.b=o,n.d=a,n.c=s,n.e=i},"./app/containers/ContestsPage/sagas.js":function(e,n,t){"use strict";function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(e,n){return d.b.mutate({mutation:j,variables:{id:e,password:n}})}function a(e){var n,r=e.contestId,a=e.password;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.i(i.call)(o,r,a);case 3:return n=e.sent,e.next=6,t.i(i.put)(!0===n.data.joinContest.joined?t.i(p.d)(r):t.i(p.e)());case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,t.i(i.put)(t.i(p.e)());case 12:case"end":return e.stop()}},f[0],this,[[0,8]])}function s(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.i(i.takeLatest)(l.d,a);case 2:case"end":return e.stop()}},f[1],this)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/redux-saga/effects.js"),c=(t.n(i),t("./node_modules/react-apollo/lib/react-apollo.browser.umd.js")),d=(t.n(c),t("./app/graphql.js")),u=t("./app/utils/sagas.js"),p=t("./app/containers/ContestsPage/actions.js"),l=t("./app/containers/ContestsPage/constants.js"),g=r(["\n  mutation JoinContestMutation($id: Int!, $password: String!) {\n    joinContest(id: $id, password: $password) {\n      id\n      joined\n    }\n  }\n"],["\n  mutation JoinContestMutation($id: Int!, $password: String!) {\n    joinContest(id: $id, password: $password) {\n      id\n      joined\n    }\n  }\n"]),f=[a,s].map(regeneratorRuntime.mark),j=t.i(c.gql)(g);n.default=t.i(u.a)([s])}});