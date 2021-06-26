(this["webpackJsonphepsiburada-challenge"]=this["webpackJsonphepsiburada-challenge"]||[]).push([[0],{23:function(n,e,t){"use strict";var r,o=t(14),a=t(31),c=t(10),i=t(0),s=t.n(i),l=t(7),b=t(1),d=l.c.button(r||(r=Object(c.a)(["\n  border-radius: 3px;\n  padding: 0.75em 1.25em;\n  font-size: 1em;\n  border: none;\n  background-color: ",";\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ",";\n\n  &:disabled {\n    opacity: 0.6;\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.block&&"width: 100%"})),u=s.a.forwardRef((function(n,e){var t=n.loading,r=n.children,c=Object(a.a)(n,["loading","children"]);return Object(b.jsx)(d,Object(o.a)(Object(o.a)({},c),{},{innerRef:e,children:t?"Loading":r}))}));e.a=u},36:function(n,e,t){"use strict";var r=t(14),o=t(31),a=(t(0),t(1)),c={close:"M14.6433171,12 L23.6165854,3.02634146 C23.8634146,2.77931707 23.9996098,2.4497561 24,2.09834146 C24,1.74673171 23.8638049,1.41678049 23.6165854,1.17014634 L22.8302439,0.384 C22.5830244,0.136390244 22.2534634,0.000780487805 21.9016585,0.000780487805 C21.550439,0.000780487805 21.220878,0.136390244 20.9736585,0.384 L12.0003902,9.35707317 L3.02673171,0.384 C2.77990244,0.136390244 2.45014634,0.000780487805 2.09853659,0.000780487805 C1.74731707,0.000780487805 1.41756098,0.136390244 1.17073171,0.384 L0.384,1.17014634 C-0.128,1.68214634 -0.128,2.51492683 0.384,3.02634146 L9.35746341,12 L0.384,20.9732683 C0.13697561,21.2206829 0.000975609756,21.5502439 0.000975609756,21.9016585 C0.000975609756,22.2530732 0.13697561,22.5826341 0.384,22.8298537 L1.17053659,23.616 C1.41736585,23.8634146 1.74731707,23.9992195 2.09834146,23.9992195 C2.44995122,23.9992195 2.77970732,23.8634146 3.02653659,23.616 L12.0001951,14.6427317 L20.9734634,23.616 C21.2206829,23.8634146 21.5502439,23.9992195 21.9014634,23.9992195 L21.9018537,23.9992195 C22.2532683,23.9992195 22.5828293,23.8634146 22.8300488,23.616 L23.6163902,22.8298537 C23.8632195,22.5828293 23.9994146,22.2530732 23.9994146,21.9016585 C23.9994146,21.5502439 23.8632195,21.2206829 23.6163902,20.9734634 L14.6433171,12 Z"};e.a=function(n){var e=n.name,t=n.color,i=Object(o.a)(n,["name","color"]);return Object(a.jsx)("svg",Object(r.a)(Object(r.a)({},i),{},{style:{width:16},fill:t,version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(a.jsx)("path",{d:c[e]})}))}},43:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t(28),o=t(0),a=t.n(o),c="LINK_STORAGE_KEY",i=t(1),s=JSON.parse(localStorage.getItem(c))||[],l=a.a.createContext();e.b=function(n){var e=n.children,t=Object(o.useState)(s),a=Object(r.a)(t,2),b=a[0],d=a[1];return Object(i.jsx)(l.Provider,{value:{links:b,setLinks:function(n){d(n),localStorage.setItem(c,JSON.stringify(n))}},children:e})}},70:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,s,l,b,d=t(0),u=t.n(d),j=t(8),h=t.n(j),f=t(46),p=t.n(f),m=t(28),x=t(32),O=t(5),g=t(7),k=t(42),v=t(24),w=Object(v.a)((function(){return t.e(6).then(t.bind(null,87))})),y=Object(v.a)((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,88))})),C=Object(v.a)((function(){return t.e(4).then(t.bind(null,89))})),z=t(10),L=Object(g.b)(r||(r=Object(z.a)(["\n    :root {\n      --white: #ffffff;\n      --white-smoke: #f1f1f1;\n      --light-gray: #c7c6c6;\n      --gray: #aaa;\n      --dark: #222;\n      --black: #000000;\n      --color1: #EF476F;\n      --color2: #FFD166;\n      --color3: #06D6A0;\n      --color4: #118AB2;\n      --color5: #073B4C;\n      --warm: #4e5c77;\n    }\n\n    *,\n    *:before,\n    *:after {\n      outline: 0 !important;\n      box-sizing: border-box;\n    }\n    body {\n      margin: 0;\n      overflow-y: auto;\n      overflow-x: hidden;\n      font-size: ",";\n      background-color: ",";\n      \n      &.font-loaded {\n          font-family: 'Poppins', sans-serif;\n      }\n    }\n\n    h1, h2, h3, h4, h5, h6, figure, ul, ol, label {\n      margin: 0;\n      padding: 0;\n      color: ",";\n    }\n    \n    p {\n      color: ",";\n    }\n\n    ul {\n      list-style: none;\n    }\n\n    a {\n      user-select: none;\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n      -webkit-box-shadow: 0 0 0 1000px transparent inset;\n      transition: background-color 5000s ease-in-out 0s;\n    }\n\n    input[type=number]::-webkit-outer-spin-button,\n    input[type=number]::-webkit-inner-spin-button,\n    select[type=number]::-webkit-outer-spin-button,\n    select[type=number]::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    input[type=number],\n    select[type=number] {\n      -moz-appearance: textfield;\n    }\n\n    input:-moz-focusring,\n    select:-moz-focusring,\n    textarea:-moz-focusring {\n      outline: none;\n    }\n\n    select::-ms-clear,\n    select::-ms-expand,\n    input::-ms-clear,\n    input::-ms-expand,\n    textarea::-ms-clear {\n      display: none !important;\n    }\n"])),(function(n){return n.theme.fontSize}),(function(n){return n.theme.backgroundColor}),(function(n){return"light"===n.theme.name?"var(--black)":"var(--white)"}),(function(n){return"light"===n.theme.name?"var(--black)":"var(--white)"})),S={name:"light",fontSize:"1em",color:"var(--color1)",backgroundColor:"var(--white)"},E=t(14),F=t(36),N=t(51),P=Object(g.c)(N.a)(o||(o=Object(z.a)(["\n  &-overlay {\n      background: rgba(0, 0, 0, 0.25);\n  }\n  &-content {\n    border-radius: 6px;\n    background: ",";\n    box-shadow: 0 0 16px 0 rgba(50, 50, 50, 0.7);\n    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;\n    padding: 20px;\n    \n    .header {\n      padding-bottom: 10px;      \n    }\n    \n    .footer {\n      text-align: center;\n    }\n  }\n  \n  @keyframes anvil {\n  0% {\n    transform: scale(1) translateY(0px);\n    opacity: 0;\n    box-shadow: 0 0 0 rgba(241, 241, 241, 0);\n  }\n  1% {\n    transform: scale(0.96) translateY(10px);\n    opacity: 0;\n    box-shadow: 0 0 0 rgba(241, 241, 241, 0);\n  }\n  100% {\n    transform: scale(1) translateY(0px);\n    opacity: 1;\n    box-shadow: 0 0 500px rgba(241, 241, 241, 0);\n  }\n  }\n"])),(function(n){return n.theme.backgroundColor})),T=t(23),A=t(55),B=(t(68),Object(g.c)(A.a)(a||(a=Object(z.a)(["\n  \n"])))),D=["var(--color1)","var(--color2)","var(--color3)","var(--color4)","var(--color5)"],I=[{name:"light",color:"var(--white)"},{name:"warm",color:"var(--warm)"},{name:"dark",color:"var(--black)"}],J=t(1),Y=Object(g.c)(P)(c||(c=Object(z.a)(["\n  &-overlay {\n    justify-content: flex-end;\n  }\n  \n  &-content {\n    margin: 0 !important;\n    width: 400px;\n    max-height: calc(100vh - 104px);\n    top: 40px;\n    border: 1px solid var(--light-gray);\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n    display: flex;\n    flex-direction: column;\n    transition: right 1s, transform 1s;\n    -webkit-animation: rightToLeft 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;\n    \n    .body {\n      flex: 1;\n      \n      & > h4 {\n        margin-top: 15px;\n      }\n    }\n  }\n\n  @keyframes rightToLeft {\n    0% {\n      transform: translateX(100%);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n"]))),R=Object(g.c)(T.a)(i||(i=Object(z.a)(["\n    position: fixed;\n    right: 0;\n    bottom: 40px;\n    z-index: 1;\n"]))),G=g.c.div(s||(s=Object(z.a)(["\n  padding: 20px;\n  margin-top: 15px;\n  border-radius: 6px;\n  background-color: var(--white-smoke);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  \n  .fontsize--min {\n    font-size: 0.8em;\n    margin-right: 20px;\n  }\n  \n  .fontsize--max {\n    font-size: 1.2em;\n    margin-left: 20px;\n  }\n"]))),K=g.c.a(l||(l=Object(z.a)(["\n  padding: 0;\n  border-radius: 50px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n"]))),M=Object(g.c)(T.a)(b||(b=Object(z.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border-style: solid;\n"]))),X=Object(g.d)((function(n){var e=n.theme,t=n.setTheme;return Object(J.jsx)(Y,{trigger:Object(J.jsx)(R,{children:"Theme Settings"}),position:"right center",modal:!0,children:function(n){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"header"}),Object(J.jsxs)("div",{className:"body",children:[Object(J.jsx)("h4",{children:"Font Size"}),Object(J.jsxs)(G,{children:[Object(J.jsx)("div",{className:"fontsize--min",children:"Aa"}),Object(J.jsx)(B,{min:.8,max:1.2,defaultValue:e.fontSize.slice(0,-2),marks:{.8:"",.9:"",1:"",1.1:"",1.2:""},step:null,onChange:function(n){t(Object(E.a)(Object(E.a)({},e),{},{fontSize:"".concat(n,"em")}))}}),Object(J.jsx)("div",{className:"fontsize--max",children:"Aa"})]}),Object(J.jsx)("h4",{children:" Colors "}),Object(J.jsx)(G,{children:D.map((function(n){return Object(J.jsx)(K,{onClick:function(){t(Object(E.a)(Object(E.a)({},e),{},{color:n}))},style:{backgroundColor:n},children:e.color===n&&Object(J.jsx)(F.a,{name:"close",color:"#fff"})},n)}))}),Object(J.jsx)("h4",{children:" Background "}),Object(J.jsx)(G,{children:I.map((function(n){return Object(J.jsx)(M,{style:{backgroundColor:n.color,borderColor:e.color,borderWidth:n.name===e.name?"3px":"0"},onClick:function(){t(Object(E.a)(Object(E.a)({},e),{},{name:n.name,backgroundColor:n.color}))}},n.name)}))})]}),Object(J.jsx)("div",{className:"footer",children:Object(J.jsx)(T.a,{transparent:!0,onClick:n,children:Object(J.jsx)(F.a,{name:"close",color:"#fff"})})})]})}})})),_=t(43),H=function(){var n=Object(d.useState)(S),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(k.a,{children:[Object(J.jsx)("link",{rel:"dns-prefetch",href:"https://fonts.googleapis.com"}),Object(J.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap",rel:"stylesheet"})]}),Object(J.jsx)(g.a,{theme:t,children:Object(J.jsxs)(_.b,{children:[Object(J.jsx)(X,{setTheme:r}),Object(J.jsx)(L,{}),Object(J.jsx)(x.a,{basename:"/hepsiburada-challenge",children:Object(J.jsxs)(O.c,{children:[Object(J.jsx)(O.a,{path:"/",exact:!0,children:Object(J.jsx)(y,{})}),Object(J.jsx)(O.a,{path:"/add-link",exact:!0,children:Object(J.jsx)(C,{})}),Object(J.jsx)(O.a,{path:"/not-found",children:Object(J.jsx)(w,{})}),Object(J.jsx)(O.a,{path:"*",children:Object(J.jsx)(w,{})})]})})]})})]})},V=t(53),W=t(54),Z=t(57),q=t(56),Q=function(n){Object(Z.a)(t,n);var e=Object(q.a)(t);function t(n){var r;return Object(V.a)(this,t),(r=e.call(this,n)).state={hasError:!1},r}return Object(W.a)(t,[{key:"componentDidCatch",value:function(n,e){console.error(e)}},{key:"render",value:function(){var n=this;return this.state.hasError?Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Something went wrong."}),Object(J.jsx)(T.a,{onClick:function(){Object(O.f)().push("/"),n.setState({hasError:!1})},children:"Go Home Page"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(d.Component);new p.a("Poppins").load().then((function(){document.body.classList.add("font-loaded")})),h.a.render(Object(J.jsx)(u.a.StrictMode,{children:Object(J.jsx)(Q,{children:Object(J.jsx)(H,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1724bad7.chunk.js.map