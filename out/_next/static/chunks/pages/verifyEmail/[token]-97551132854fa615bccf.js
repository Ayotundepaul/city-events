_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"/StY":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n),s=a("HaE+"),i=a("rePB"),u=a("q1tI"),o=a.n(u),c=a("nOHt"),d=a("lPg6"),l=a.n(d),p=a("iae6"),m=a("R/WZ"),f=a("ofer"),b=a("Z3vd"),v=a("Ji2X"),g=a("kKAo"),h=a("H1cU"),x=a("IUY8"),j=o.a.createElement,k=Object(m.a)((function(t){return{root:{backgroundColor:t.palette.secondary.main,height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},Paper:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:140,height:400},Congrats:{marginTop:50,marginBottom:60},error:{textAlign:"center",color:"red"},image:{width:150,height:150},form:Object(i.a)({width:400,marginBottom:"20px"},t.breakpoints.down("xs"),{width:300}),button:{marginBottom:"20px",color:"white",backgroundColor:"blue",borderRadius:5,width:200,"&:hover":{backgroundColor:"#1414cb"}}}}));e.default=function(){var t=Object(c.useRouter)(),e=t.query.token,a=Object(u.useState)(""),n=a[0],i=a[1],o=Object(u.useState)(1),d=o[0],m=o[1],w=Object(u.useState)(""),O=w[0],y=w[1],E=Object(u.useState)(!1),N=E[0],S=E[1],W=Object(u.useState)(""),_=W[0],C=W[1],P=Object(u.useState)(""),R=P[0],q=P[1],T=Object(u.useState)(!1),B=T[0],H=T[1],I=Object(u.useState)(),L=I[0],U=I[1];Object(u.useEffect)((function(){e&&Object(s.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(h.d)(e);case 2:(n=a.sent).message&&(D(!1),i(n.message)),"success"===n.status&&setTimeout((function(){t.push("/signin")}),2e3);case 5:case"end":return a.stop()}}),a)})))()}),[e]);var X=Object(u.useState)(!0),D=(X[0],X[1]),M=function(){var t=Object(s.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,Object(h.b)(O);case 3:(e=t.sent)&&e.status&&(S(!1),C(e.status),q(e.message),U("Bad request"!==e.status),H(!0));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=k(),G=j(p.a,{disableShrink:!0});return G=n&&"Invalid or expired token"===n?j("div",null,1===d&&j("div",{className:z.error},j("div",null,j(l.a,{color:"error"})),j("div",null,j(f.a,{variant:"h6"},"Bad request")),j("div",null,j(f.a,{variant:"h6"},n)),j("div",null,j(b.a,{onClick:function(){return m(2)},color:"primary",className:z.button},"Resend Link"))),2===d&&j("div",null,j(x.m,{className:z.form,id:"email",name:"email",type:"email",label:"email",placeholder:"Enter your email",value:O,onChange:function(t){return y(t.target.value)}}),j("div",{className:z.submit},j(x.c,{label:"submit",click:M,open:N})))):j("div",null,j("div",null,j("img",{src:"/images/emailVerify.jpg",className:z.image})),j("div",null,j(f.a,{variant:"h4"},"Email Verified")),j("div",null,j(f.a,{variant:"h6",className:z.Congrats},n))),j("div",null,j("div",{className:z.root},j(v.a,{maxWidth:"md"},j(x.l,{title:_,openDialog:B,positiveDialog:L,onClose:function(){return H(!1)}},R),j("div",null,j(g.a,{elevation:"3",className:z.Paper},G)))))}},H1cU:function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return p}));var n=a("o0o1"),r=a.n(n),s=a("HaE+"),i=a("v0uu"),u=a("vDqi"),o=a.n(u),c=function(){var t=Object(s.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put(i.b.mailVerification+e,{"Content-Type":"application/json"}).then((function(t){return{status:t.data.status,message:t.data.message}})).catch((function(t){return{status:t.response.data.status,message:t.response.data.message}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(s.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post(i.b.regenerateEmailToken,{email:e}).then((function(t){return console.log(t.data),{status:t.data.status,message:t.data.message}})).catch((function(t){return console.log(t.response.data),{status:t.response.data.status,message:t.response.data.message}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(s.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post(i.b.forgetPassword,{email:e}).then((function(t){return{status:t.data.status,message:t.data.message}})).catch((function(t){return{status:t.response.data.status,message:t.response.data.message}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(s.a)(r.a.mark((function t(e,a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post(i.b.reset_password+a,{password:e}).then((function(t){return{status:t.data.status,message:t.data.message}})).catch((function(t){return{status:t.response.data.status,message:t.response.data.message}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},"HaE+":function(t,e,a){"use strict";function n(t,e,a,n,r,s,i){try{var u=t[s](i),o=u.value}catch(c){return void a(c)}u.done?e(o):Promise.resolve(o).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function u(t){n(i,r,s,u,o,"next",t)}function o(t){n(i,r,s,u,o,"throw",t)}u(void 0)}))}}a.d(e,"a",(function(){return r}))},Ji2X:function(t,e,a){"use strict";var n=a("wx14"),r=a("Ff2n"),s=a("rePB"),i=a("q1tI"),u=(a("17x9"),a("iuhU")),o=a("H2TA"),c=a("NqtD"),d=i.forwardRef((function(t,e){var a=t.classes,s=t.className,o=t.component,d=void 0===o?"div":o,l=t.disableGutters,p=void 0!==l&&l,m=t.fixed,f=void 0!==m&&m,b=t.maxWidth,v=void 0===b?"lg":b,g=Object(r.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,Object(n.a)({className:Object(u.a)(a.root,s,f&&a.fixed,p&&a.disableGutters,!1!==v&&a["maxWidth".concat(Object(c.a)(String(v)))]),ref:e},g))}));e.a=Object(o.a)((function(t){return{root:Object(s.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:n}),e}),{}),maxWidthXs:Object(s.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(s.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(s.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(s.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(s.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},eeUy:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verifyEmail/[token]",function(){return a("/StY")}])},lPg6:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("q1tI")),s=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");e.default=s}},[["eeUy",0,1,2,3,4,5,6]]]);