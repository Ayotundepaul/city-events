_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{UGbB:function(e,t,a){"use strict";a.r(t);var n=a("rePB"),o=a("q1tI"),i=a.n(o),r=a("R/WZ"),s=a("lopY"),d=a("wx14"),l=a("Ff2n"),c=(a("17x9"),a("iuhU")),u=a("H2TA"),p=a("KQm4"),m=a("ODXe"),g=a("yCxk");var h=a("ye/S"),b=a("tr08"),v=a("VD++"),f=a("5AJ6"),w=Object(f.a)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),y=Object(f.a)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),k=Object(f.a)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),j=Object(f.a)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),x=a("NqtD"),O=o.forwardRef((function(e,t){var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,s=e.component,u=e.disabled,p=void 0!==u&&u,m=e.page,g=e.selected,h=void 0!==g&&g,f=e.shape,O=void 0===f?"round":f,C=e.size,N=void 0===C?"medium":C,L=e.type,E=void 0===L?"page":L,P=e.variant,S=void 0===P?"text":P,B=Object(l.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),A=("rtl"===Object(b.a)().direction?{previous:j,next:k,last:w,first:y}:{previous:k,next:j,first:w,last:y})[E];return"start-ellipsis"===E||"end-ellipsis"===E?o.createElement("div",{ref:t,className:Object(c.a)(a.root,a.ellipsis,p&&a.disabled,"medium"!==N&&a["size".concat(Object(x.a)(N))])},"\u2026"):o.createElement(v.a,Object(d.a)({ref:t,component:s,disabled:p,focusVisibleClassName:a.focusVisible,className:Object(c.a)(a.root,a.page,a[S],a[O],n,"standard"!==r&&a["".concat(S).concat(Object(x.a)(r))],p&&a.disabled,h&&a.selected,"medium"!==N&&a["size".concat(Object(x.a)(N))])},B),"page"===E&&m,A?o.createElement(A,{className:a.icon}):null)})),C=Object(u.a)((function(e){return{root:Object(d.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(h.d)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.d)(e.palette.primary.main,.5)),backgroundColor:Object(h.d)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(h.d)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.d)(e.palette.secondary.main,.5)),backgroundColor:Object(h.d)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(h.d)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(O);function N(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var L=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,s=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),u=void 0===s?N:s,h=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),b=void 0===h?function(e){return o.createElement(C,e)}:h,v=e.shape,f=void 0===v?"round":v,w=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),y=void 0===w?"medium":w,k=e.variant,j=void 0===k?"text":k,x=Object(l.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,o=void 0===n?"usePagination":n,i=e.count,r=void 0===i?1:i,s=e.defaultPage,c=void 0===s?1:s,u=e.disabled,h=void 0!==u&&u,b=e.hideNextButton,v=void 0!==b&&b,f=e.hidePrevButton,w=void 0!==f&&f,y=e.onChange,k=e.page,j=e.showFirstButton,x=void 0!==j&&j,O=e.showLastButton,C=void 0!==O&&O,N=e.siblingCount,L=void 0===N?1:N,E=Object(l.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),P=Object(g.a)({controlled:k,default:c,name:o,state:"page"}),S=Object(m.a)(P,2),B=S[0],A=S[1],I=function(e,t){k||A(t),y&&y(e,t)},z=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},V=z(1,Math.min(a,r)),M=z(Math.max(r-a+1,a+1),r),$=Math.max(Math.min(B-L,r-a-2*L-1),a+2),F=Math.min(Math.max(B+L,a+2*L+2),M[0]-2),R=[].concat(Object(p.a)(x?["first"]:[]),Object(p.a)(w?[]:["previous"]),Object(p.a)(V),Object(p.a)($>a+2?["start-ellipsis"]:a+1<r-a?[a+1]:[]),Object(p.a)(z($,F)),Object(p.a)(F<r-a-1?["end-ellipsis"]:r-a>a?[r-a]:[]),Object(p.a)(M),Object(p.a)(v?[]:["next"]),Object(p.a)(C?["last"]:[])),T=function(e){switch(e){case"first":return 1;case"previous":return B-1;case"next":return B+1;case"last":return r;default:return null}},W=R.map((function(e){return"number"===typeof e?{onClick:function(t){I(t,e)},type:"page",page:e,selected:e===B,disabled:h,"aria-current":e===B?"true":void 0}:{onClick:function(t){I(t,T(e))},type:e,page:T(e),selected:!1,disabled:h||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?B>=r:B<=1)}}));return Object(d.a)({items:W},E)}(Object(d.a)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",Object(d.a)({"aria-label":"pagination navigation",className:Object(c.a)(a.root,n),ref:t},x),o.createElement("ul",{className:a.ul},O.map((function(e,t){return o.createElement("li",{key:t},b(Object(d.a)({},e,{color:r,"aria-label":u(e.type,e.page,e.selected),shape:f,size:y,variant:j})))}))))})),E=Object(u.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(L),P=a("6u8J"),S=a("tRbT"),B=a("kKAo"),A=a("ADg1"),I=a("1AYd"),z=a("cVXz"),V=a("jjAL"),M=a("r9w1"),$=i.a.createElement,F=Object(r.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:Object(n.a)({width:"250px"},e.breakpoints.down("md"),{width:183})}}));function R(){var e=F();return $("form",{className:e.container,noValidate:!0},$(M.a,{id:"date",label:"Date",type:"date",defaultValue:"2017-05-24",className:e.textField,InputLabelProps:{shrink:!0}}))}var T=a("aAf0"),W=a("weoR"),H=i.a.createElement,J=Object(r.a)((function(e){return{root:Object(n.a)({margin:0,overflow:"hidden"},e.breakpoints.down("xs"),{margin:0}),header:{width:"100%",height:"50vh",backgroundImage:"url('/images/eventNew.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"flex",alignItems:"center",color:"#fff",marginBottom:20,backgroundSize:"cover"},textHeader:{paddingLeft:"3%",paddingTop:"8%"},leftwing:{height:200,backgroundImage:"url('./images/Group.svg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},image:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},midwing:Object(n.a)({height:200,border:"1px solid white"},e.breakpoints.down("xs"),{display:"none"}),anything:{fontWeight:"bold",fontSize:30,marginLeft:40},rightwing:{height:200},search:{height:30,width:"50%",backgroundColor:e.palette.primary.main,color:"white",border:"none",cursor:"pointer",borderRadius:5},searchdiv:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginTop:20},gridcontent:Object(n.a)({paddingLeft:"3%",paddingRight:"3%"},e.breakpoints.down("xs"),{}),grid:{width:"90%",margin:"auto"},price:{paddingLeft:20},paper:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#f1f1f1",padding:"10%"},formControl:Object(n.a)({width:250},e.breakpoints.down("md"),{width:183}),filter:{height:600},pagination:{"& > *":{marginTop:e.spacing(2),width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},line:{border:"5px solid grey",backgroundColor:"grey"}}}}));t.default=function(){var e=Object(o.useState)(""),t=e[0],a=e[1],n=Object(o.useState)(""),i=n[0],r=n[1],d=[{id:"fgfs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"World Bank Lagos 2020 (The New Path Leading to the new Future) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp5.jpg",amount:"free",date:"thur, Jul 30, 2020"},{id:"fg3fs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Berlin Entrepreneur corp (Quisque non turpis id massa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp3.jpg",amount:"3000",date:"Mon, Jul 31, 2020"},{id:"fgq5fs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Maranatha Lagos 2020 (Women Empowerment Submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp6.jpg",amount:"5000",date:"thur, Jul 20, 2020"},{id:"fgsfs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Warrior Apparels (Getting your Foot in the door) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp1.jpg",amount:"10000",date:"thur, May 30, 2020"},{id:"fgfhjs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Alison Courses (Marchine Learning and Statistics) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp3.jpg",amount:"1000000000",date:"thur, Jul 30, 2020"},{id:"fgf2xs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Plural Sight (The Future of Africa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp5.jpg",amount:"free",date:"thur, Jul 30, 2020"},{id:"fgsvfs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"AT&T (The Entrepreneur business submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp6.jpg",amount:"free",date:"thur, Jul 30, 2020"},{id:"fgfs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"World Bank Lagos 2020 (The New Path Leading to the new Future) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp5.jpg",amount:"free",date:"thur, Jul 30, 2020"},{id:"fg3fs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Berlin Entrepreneur corp (Quisque non turpis id massa) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp3.jpg",amount:"3000",date:"Mon, Jul 31, 2020"},{id:"fgq5fs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Maranatha Lagos 2020 (Women Empowerment Submit) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp6.jpg",amount:"5000",date:"thur, Jul 20, 2020"},{id:"fgsfs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Warrior Apparels (Getting your Foot in the door) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp1.jpg",amount:"10000",date:"thur, May 30, 2020"},{id:"fgfhjs",address:"Eko Hotel & Suites, Victoria Island, Lagos.",content:"Alison Courses (Marchine Learning and Statistics) All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",image:"/images/corp3.jpg",amount:"1000000000",date:"thur, Jul 30, 2020"}],l=Object(s.a)("(max-width:960px)"),c=J();return H(T.a,{title:"events",className:c.root},H("div",{className:c.header},H(P.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0},H("h1",{className:c.textHeader}," Search for events"))),H(S.a,{container:!0,spacing:4,className:c.gridcontent},H(S.a,{item:!0,xs:12,sm:12,md:9},H(W.a,{data:d})),!l&&H(S.a,{item:!0,xs:12,sm:4,md:3,className:c.filter},H(P.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},H(B.a,{className:c.paper},H("h3",null,"Filter"),H("div",{className:c.line}),H(R,null),H("div",null,H(A.a,{className:c.formControl},H(I.a,{id:"demo-simple-select-label"},"Select Price"),H(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:function(e){return a(e.target.value)}},H(V.a,{value:"Free"},"Free"),H(V.a,{value:"\u20a60 - \u20a65000"},"\u20a60 - \u20a65000"),H(V.a,{value:"\u20a65000 - \u20a610000"},"\u20a65000 - \u20a610000"),H(V.a,{value:"\u20a610000 - \u20a620000"},"\u20a610000 - \u20a620000"),H(V.a,{value:"\u20a620000 - \u20a640000"},"\u20a620000 - \u20a640000"),H(V.a,{value:"\u20a640000 and above"},"\u20a640000 and above")))),H("div",null,H(A.a,{className:c.formControl},H(I.a,{id:"demo-simple-select-label"},"Select category"),H(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i,onChange:function(e){return r(e.target.value)}},H(V.a,{value:"Brand product launches"},"Brand product launches"," "),H(V.a,{value:"Business summits"},"Business summits"),H(V.a,{value:"Conferences"},"Conferences"),H(V.a,{value:"Conventions"},"Conventions"),H(V.a,{value:"Exhibitions"},"Exhibitions"),H(V.a,{value:"Forums"},"Forums"),H(V.a,{value:"Fundraising"},"Fundraising"),H(V.a,{value:"Meetings & incentives"},"Meetings & incentives"),H(V.a,{value:"Seminars"},"Seminars"),H(V.a,{value:"Workshops"},"Workshops"),H(V.a,{value:"Webinars"},"Webinars")))),H("div",{className:c.searchdiv},H("button",{className:c.search},"search")))))),H(S.a,{item:!0,xs:12},H("div",{className:c.pagination},H(E,{count:d.length,variant:"outlined",shape:"rounded"}))))}},f8ys:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return a("UGbB")}])}},[["f8ys",0,1,2,3,4,5,6,7,8,9,10,11]]]);