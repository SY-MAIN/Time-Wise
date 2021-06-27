(this["webpackJsonpagenda-extension"]=this["webpackJsonpagenda-extension"]||[]).push([[0],{32:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,s,d,b,j=t(2),l=t.n(j),u=t(18),p=t.n(u),x=t(6),O=t(14),f=t(9),h=t(3),m=t(4),g=m.b.div(i||(i=Object(h.a)(["\n  border: 1px solid;\n  margin-top: 20px;\n  border-radius: 100px;\n  padding: 5px 0px;\n  background-color: ",";\n  height: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  &:hover {\n    box-shadow: 8px 2px 21px thistle;\n  }\n"])),(function(e){return e.color})),v=m.b.div(c||(c=Object(h.a)(["\n  border-radius: 100px;\n  width: 6em;\n  height: 2em;\n  float: left;\n  display: flex;\n  align-items: center;\n"]))),y=m.b.div(a||(a=Object(h.a)(["\n  border-radius: 100px;\n  width: 5em;\n  height: 2em;\n  float: left;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),k=(m.b.img(r||(r=Object(h.a)(["\n  margin: 0.5em;\n  width: 25px;\n"]))),m.b.h6(o||(o=Object(h.a)(["\n  font-size: 12px;\n"])))),D=m.b.h6(s||(s=Object(h.a)(["\n  font-size: 13px;\n"]))),S=m.b.div(d||(d=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n"]))),T=t(1),w=function(e){var n=e.task,t=e.handleComplete,i=e.handleDelete,c=e.complete;return Object(T.jsxs)(g,{color:c?"#efefefff":"HIGH"===n.priority?"#e06666ff":"MEDIUM"===n.priority?"#ffd966ff":"LOW"===n.priority?"#93c47dff":void 0,children:[Object(T.jsx)(y,{children:Object(T.jsx)(k,{children:n.dueTime})}),Object(T.jsx)(v,{children:Object(T.jsx)(D,{children:n.name})}),Object(T.jsxs)(y,{children:[Object(T.jsx)(S,{onClick:function(){return i(n)},children:Object(T.jsx)(f.b,{size:"1.6em"})}),Object(T.jsx)(S,{onClick:function(){return t(n)},children:c?Object(T.jsx)(O.b,{size:"2em"}):Object(T.jsx)(O.a,{size:"2em"})})]})]})},z=t(16),C=m.b.div(b||(b=Object(h.a)(["\n  overflow: auto;\n  height: 19em;\n"])));var I,M,E,L,H,U,W,J,N,F,G,P,Y,B,A,q,K=function(e){var n=e.toDos,t=e.setToDos,i=function(e){n.forEach((function(n){n===e&&(n.complete=!n.complete)})),t(Object(z.a)(n))},c=function(e){var i=n.indexOf(e);n.splice(i,1),t(Object(z.a)(n))};return n=function(e){var n=[],t=[];return e.forEach((function(e){"HIGH"===e.priority?n.unshift(e):"MEDIUM"===e.priority?n.push(e):"LOW"===e.priority&&t.push(e)})),n.push.apply(n,t),n}(n),Object(T.jsx)(C,{children:n.map((function(e){return Object(T.jsx)(w,{task:e,handleComplete:i,handleDelete:c,complete:e.complete})}))})},Q=function(e){var n=e.localItem,t=Object(j.useState)([]),i=Object(x.a)(t,2),c=i[0],a=i[1],r=Object(j.useState)({}),o=Object(x.a)(r,2),s=o[0],d=o[1];return Object(j.useEffect)((function(){var e=JSON.parse(localStorage.getItem(n));a(e||[])}),[n]),Object(j.useEffect)((function(){localStorage.setItem(n,JSON.stringify(c))}),[c]),Object(j.useEffect)((function(){var e=s.dueDate;console.log(e);var n=[];(n=JSON.parse(localStorage.getItem(e))?n:[]).push(s),localStorage.setItem(e,JSON.stringify(n))}),[s]),Object(T.jsxs)("div",{children:[Object(T.jsx)(se,{setNewTask:d}),null!==c?Object(T.jsx)(K,{toDos:c,setToDos:a}):Object(T.jsx)(T.Fragment,{})]})},R=t(5),V=m.b.input(I||(I=Object(h.a)(["\n  flex: 1 0;\n  min-width: 50px;\n  min-height: 25px;\n  font-size: inherit;\n  background-color: transparent;\n  padding-left: 5px;\n  border: 0;\n  &:focus {\n    outline: none;\n  }\n"]))),X=m.b.div(M||(M=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid;\n  border-radius: 5px;\n  width: 85%;\n\n  position: absolute;\n  bottom: 0; \n  &:hover {\n    box-shadow: 12px 1px 11px thistle;\n  }\n"]))),Z=m.b.div(E||(E=Object(h.a)(["\n  width: 260px;\n  background-color: #ccc;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 8px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  margin-left: -250px;\n  margin-bottom: 30px;\n  \n  &:hover {\n    box-shadow: 12px 1px 21px thistle;\n  }\n"]))),$=m.b.div(L||(L=Object(h.a)(["\n  position: relative;\n  display: inline-block;\n"]))),_=m.b.div(H||(H=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border-radius: 5px;\n\n  bottom: 0; \n  &:hover {\n    box-shadow: 12px 1px 11px thistle;\n  }\n"]))),ee=m.b.input(U||(U=Object(h.a)(["\n  border-radius: 10px;\n  padding: 4px;\n  outline: none;\n  border: none;\n  background-color: #a4c2f4ff;\n  color: #fff;\n  &:hover {\n    box-shadow: 8px 2px 21px thistle;\n  }\n"]))),ne=m.b.div(W||(W=Object(h.a)(["\n  margin: auto;\n  padding: 4px;\n  cursor: pointer;\n"]))),te=t(22),ie=t(7),ce=t.n(ie),ae=t(31),re=function(e){var n=e.task,t=e.setTask,i=e.setPopUp;return Object(T.jsx)($,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)(_,{children:Object(T.jsx)(V,{type:"date",placeholder:"YYYY-MM-DD",onChange:function(e){t((function(n){return Object(R.a)(Object(R.a)({},n),{},{dueDate:e.target.value})}))},value:void 0===n.dueDate?ce()().format("L"):n.dueDate})}),Object(T.jsx)(_,{children:Object(T.jsx)(V,{type:"time",placeholder:"HH:MM:SS",onChange:function(e){t((function(n){return Object(R.a)(Object(R.a)({},n),{},{dueTime:e.target.value})}))},value:void 0===n.dueTime?ce()().format("LTS").split(" ")[0]:n.dueTime})}),Object(T.jsx)(ee,{type:"submit",value:"Done",onClick:function(){return i(0)}})]})})},oe=function(e){var n=e.setTask,t=e.setPopUp;return Object(T.jsx)($,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)(ee,{type:"submit",value:"HIGH",onClick:function(){t(0),n((function(e){return Object(R.a)(Object(R.a)({},e),{},{priority:"HIGH"})}))}}),Object(T.jsx)(ee,{type:"submit",value:"MEDIUM",onClick:function(){t(0),n((function(e){return Object(R.a)(Object(R.a)({},e),{},{priority:"MEDIUM"})}))}}),Object(T.jsx)(ee,{type:"submit",value:"LOW",onClick:function(){t(0),n((function(e){return Object(R.a)(Object(R.a)({},e),{},{priority:"LOW"})}))}})]})})},se=function(e){var n=e.setNewTask,t=Object(j.useState)(0),i=Object(x.a)(t,2),c=i[0],a=i[1],r=Object(j.useState)({name:"",dueDate:"2021-06-26",dueTime:"12:32:43",priority:"LOW",complete:0}),o=Object(x.a)(r,2),s=o[0],d=o[1];return Object(T.jsxs)(X,{children:[Object(T.jsx)(ne,{onClick:function(){var e={name:s.name,dueDate:ae(s.dueDate,"mmmm dd, yyyy"),dueTime:s.dueTime,priority:s.priority};n(e),d((function(e){return Object(R.a)(Object(R.a)({},e),{},{name:"",dueDate:"2021-06-26",dueTime:"12:32:43",priority:"LOW",complete:0})}))},children:Object(T.jsx)(te.a,{size:"2em"})}),Object(T.jsx)(V,{type:"text",value:s.name,placeholder:"Add a Task",onChange:function(e){d((function(n){return Object(R.a)(Object(R.a)({},n),{},{name:e.target.value})}))}}),Object(T.jsx)(ne,{onClick:function(){return a(0!==c?0:2)},children:Object(T.jsx)(f.c,{size:"2.5em"})}),Object(T.jsx)(ne,{onClick:function(){return a(0!==c?0:1)},children:Object(T.jsx)(f.a,{size:"2em"})}),1===c?Object(T.jsx)(re,{task:s,setTask:d,setPopUp:a}):Object(T.jsx)(T.Fragment,{}),2===c?Object(T.jsx)(oe,{setTask:d,setPopUp:a}):Object(T.jsx)(T.Fragment,{})]})},de=t(15),be=m.b.div(J||(J=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 1em auto;\n"]))),je=m.b.div(N||(N=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),le=m.b.div(F||(F=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n"]))),ue=m.b.h1(G||(G=Object(h.a)(["\n  font-size: 18px;\n  color: #000;\n"]))),pe=m.b.h2(P||(P=Object(h.a)(["\n  font-size: 12px;\n  color: #000;\n"]))),xe=m.b.div(Y||(Y=Object(h.a)(["\n  display: flex;\n"]))),Oe=m.b.div(B||(B=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))),fe=function(e){var n=e.day,t=e.date,i=e.handleBack,c=e.handleFront;return Object(T.jsxs)(xe,{children:[Object(T.jsx)(Oe,{children:Object(T.jsx)(de.a,{onClick:i,size:"2em"})}),Object(T.jsxs)(be,{children:[Object(T.jsx)(je,{children:Object(T.jsx)(ue,{children:n})}),Object(T.jsx)(le,{children:Object(T.jsx)(pe,{children:t})})]}),Object(T.jsx)(Oe,{children:Object(T.jsx)(de.b,{onClick:c,size:"2em"})})]})},he=Object(m.a)(A||(A=Object(h.a)(["\n  * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      font-family: 'Titillium Web', sans-serif;\n  }\n"]))),me=m.b.div(q||(q=Object(h.a)(["\n  z-index: 1;\n  width: 350px; \n  height: 500px;\n  \n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 25px;\n  padding-left: 25px;\n  border: 2px solid;\n  justify-content: center;\n  position: relative;\n"]))),ge=he;var ve=function(){var e=Object(j.useState)(""),n=Object(x.a)(e,2),t=n[0],i=n[1],c=Object(j.useState)(""),a=Object(x.a)(c,2),r=a[0],o=a[1],s=Object(j.useState)(0),d=Object(x.a)(s,2),b=d[0],l=d[1];return Object(j.useEffect)((function(){o(ce()().format("dddd")),i(ce()().format("LL"))}),[]),Object(j.useEffect)((function(){o(ce()().add(b,"days").format("dddd")),i(ce()().add(b,"days").format("LL"))}),[b]),Object(T.jsxs)("div",{children:[Object(T.jsx)(ge,{}),Object(T.jsxs)(me,{children:[Object(T.jsx)(fe,{day:r,date:t,handleBack:function(){l(b-1)},handleFront:function(){l(b+1)}}),Object(T.jsx)(Q,{localItem:t})]})]})};p.a.render(Object(T.jsx)(l.a.StrictMode,{children:Object(T.jsx)(ve,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b05a6e68.chunk.js.map