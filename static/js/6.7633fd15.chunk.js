(window.webpackJsonpsocnet=window.webpackJsonpsocnet||[]).push([[6],{233:function(e,t,n){e.exports=n.p+"static/media/NA5.ea9d54e3.jpg"},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(21),a=n(22),o=n(24),s=n(23),i=n(25),l=n(0),u=n.n(l),c=n(30),p=n(65),g=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),n}(u.a.Component);return Object(p.a)(g)(t)}},244:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},306:function(e,t,n){e.exports={userBlock:"Users_userBlock__35byo",avatarBlock:"Users_avatarBlock__2Bpba",avatar:"Users_avatar__3sQyl",followBtn:"Users_followBtn__H2X1d",infoBlock:"Users_infoBlock__lUMK7",name:"Users_name__Rcs94",status:"Users_status__1aS7d",location:"Users_location__2xfCv",pageblock:"Users_pageblock__1mBoG",pageIndex:"Users_pageIndex__2X_t2",pageIndex__selected:"Users_pageIndex__selected__2agT3"}},307:function(e,t,n){e.exports={paginator:"Paginator_paginator___23Jo",prev:"Paginator_prev__Sgx9m",items:"Paginator_items__2p3vR",next:"Paginator_next__2qrkP",pageNumber:"Paginator_pageNumber__2YFsp",selectedPage:"Paginator_selectedPage__JYjCo"}},308:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},311:function(e,t,n){"use strict";n.r(t);var r=n(21),a=n(22),o=n(24),s=n(23),i=n(25),l=n(34),u=n(82),c=n(0),p=n.n(c),g=n(306),f=n.n(g),h=n(7),m=n(233),d=n.n(m),v=n(28),_=n(244),b=n(307),w=n.n(b),y=n(308),P=n.n(y),U=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o;console.log({totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:a,portionSize:s});for(var i=Math.ceil(t/n),l=[],u=1;u<=i;u++)l.push(u);var g=Math.ceil(i/s),f=Object(c.useState)(1),h=Object(_.a)(f,2),m=h[0],d=h[1],b=(m-1)*s+1,y=m*s;return p.a.createElement("div",{className:w.a.paginator},m>1&&p.a.createElement("div",{className:w.a.prev},p.a.createElement("button",{onClick:function(){d(m-1)}},"PREV")),p.a.createElement("div",{className:w.a.items},l.filter((function(e){return e>=b&&e<=y})).map((function(e){return p.a.createElement("span",{className:P()(Object(v.a)({},w.a.selectedPage,r===e),w.a.pageNumber),key:e,onClick:function(t){a(e)}},e)}))),g>m&&p.a.createElement("div",{className:w.a.next},p.a.createElement("button",{onClick:function(){d(m+1)}},"NEXT")))},E=function(e){var t=e.totalUserCount,n=e.fixSrc,r=e.pages,a=e.pageSize,o=e.onPageChanged,s=e.users,i=e.currentPage,l=e.followUser,u=e.unfollowUser,c=e.isFetching,g=e.isFollowing;return console.log({totalUserCount:t,fixSrc:n,pages:r,pageSize:a,onPageChanged:o,users:s,currentPage:i,followUser:l,unfollowUser:u,isFetching:c,isFollowing:g}),p.a.createElement("div",null,p.a.createElement("div",{className:f.a.pageblock},p.a.createElement(U,{currentPage:i,onPageChanged:o,totalItemsCount:t,pageSize:a})),p.a.createElement("div",null,s.map((function(e){return p.a.createElement("div",{key:e.id,className:f.a.userBlock},p.a.createElement("div",{className:f.a.avatarBlock},p.a.createElement(h.b,{to:"/profile/"+e.id},p.a.createElement("img",{className:f.a.avatar,src:null!=e.photos.small?e.photos.small:d.a,alt:""}))),e.followed?p.a.createElement("button",{className:f.a.followBtn,disabled:g.some((function(t){return t===e.id})),onClick:function(){u(e.id)}},"UnFollow"):p.a.createElement("button",{className:f.a.followBtn,disabled:g.some((function(t){return t===e.id})),onClick:function(){l(e.id)}},"Follow"),p.a.createElement("div",{className:f.a.name},e.name),p.a.createElement("div",{className:f.a.status},e.status))})),p.a.createElement("button",null,"Show more")))},C=n(15),S=n(30),j=n(237),k=n(27);function x(e,t){return e===t}function O(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function F(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var N=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),i=F(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),u=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return l.apply(null,e)}));return u.resultFunc=s,u.dependencies=i,u.recomputations=function(){return o},u.resetRecomputations=function(){return o=0},u}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,n=null,r=null;return function(){return O(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var A=function(e){return e.usersPage.users},z=N(A,(function(e){return console.log("getUsersSuper active"),e.filter((function(e){return!0}))})),B=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUserCount},M=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},R=function(e){return e.usersPage.isFollowing},T=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize),n.props.changePage(e)},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.curentPage,this.props.pageSize)}},{key:"render",value:function(){var e=Math.ceil(this.props.totalUserCount/this.props.pageSize),t=[],n=1e3;e<n&&(n=e);for(var r=1;r<=n;r++)t.push(r);return this.props.isAuth?(console.log(this.props.pageSize),p.a.createElement(p.a.Fragment,null,this.props.isFetching?p.a.createElement(C.a,null):p.a.createElement(E,{totalUserCount:this.props.totalUserCount,fixSrc:"https://w-dog.ru/wallpapers/4/17/444538780016755.jpg",pages:t,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,users:this.props.users,currentPage:this.props.currentPage,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser,isFetching:this.props.isFetching,isFollowing:this.props.isFollowing}))):p.a.createElement(S.a,{to:"/login"})}}]),t}(p.a.Component);t.default=Object(k.d)(Object(l.b)((function(e){return{users:z(e),pageSize:B(e),totalUserCount:I(e),currentPage:M(e),isFetching:J(e),isFollowing:R(e),isAuth:e.auth.isAuth}}),{followUser:u.b,setUsers:u.e,changePage:u.a,setTotalUserCount:u.d,getUsers:u.c,unfollowUser:u.f}),j.a)(T)}}]);
//# sourceMappingURL=6.7633fd15.chunk.js.map