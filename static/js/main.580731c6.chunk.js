(this.webpackJsonpjokeApi=this.webpackJsonpjokeApi||[]).push([[0],{41:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(13),n=c.n(a),r=c(14),i=c(15),l=c(18),d=c(17),j=c(3),o=c(16),m=c.n(o),u=(c(41),c(0));var b=function(e){return console.log(e),e.user.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"card shadow rounded mb-3",style:{maxWidth:"350px"},children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4  d-flex justify-center align-items-center",children:Object(u.jsx)("img",{src:e.picture,height:100,alt:e.picture})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[e.title," ",e.firstName," ",e.lastName]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsxs)("small",{className:"text-muted",children:[Object(u.jsx)("strong",{children:e.email}),"\xa0"]})})]})})]})},e.id)})}))};var h=function(e){var t=Object(s.useState)(),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"mt-3",children:"search User"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=t.target[0].value,s=e.user.find((function(e){return e.firstName===c}));n(s)},className:"row alert  row g-3",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Search By Name",onChange:function(t){var c=t.target.value,s=e.user.find((function(e){return e.firstName===c||e.title===c}));n(s)}})}),Object(u.jsx)("div",{className:"col-auto",children:Object(u.jsx)("button",{className:"btn btn-primary",children:"Find User"})})]}),a?Object(u.jsx)("div",{className:"card m-4 shadow rounded",style:{maxWidth:"350px"},children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4  d-flex justify-center align-items-center",children:Object(u.jsx)("img",{src:a.picture,height:100,alt:a.picture})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[a.title," ",a.firstName," ",a.lastName]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsxs)("small",{className:"text-muted",children:[Object(u.jsx)("strong",{children:a.email}),"\xa0"]})})]})})]})},a.id):Object(u.jsx)("p",{className:"text-danger",children:"No User Available here"})]})};var x=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1]),a=Object(s.useState)([]),n=Object(j.a)(a,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){c(!0),m.a.get("".concat("https://dummyapi.io/data/api","/user"),{headers:{"app-id":"60b6023c98e5768341aefad0"}}).then((function(e){var t=e.data;return i(t)})).catch(console.error).finally((function(){return c(!1)}))}),[]),Object(u.jsx)("div",{className:"back",children:Object(u.jsx)("div",{className:"container shadow rounded",children:Object(u.jsxs)("div",{className:"row p-5",children:[Object(u.jsx)("div",{className:"col bg-light d-flex flex-column  align-items-center",children:Object(u.jsx)(h,{user:r.data})}),Object(u.jsxs)("div",{className:"col bg-light d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsx)("h2",{className:"m-3",children:"All User"}),Object(u.jsx)(b,{user:r.data})]})]})})})},O=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{})})}}]),c}(s.Component),f=(c(43),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))});n.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.580731c6.chunk.js.map