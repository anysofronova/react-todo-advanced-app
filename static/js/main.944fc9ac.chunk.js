(this["webpackJsonpreact-todo-advanced-app"]=this["webpackJsonpreact-todo-advanced-app"]||[]).push([[0],{13:function(t,e,n){t.exports={form:"ItemAddForm_form__3_BHV",input:"ItemAddForm_input__2Xm9S",btn:"ItemAddForm_btn__3_3Jf"}},17:function(t,e,n){t.exports={searchPanel:"SearchPanel_searchPanel__3hi8J",input:"SearchPanel_input__2d8rO"}},18:function(t,e,n){t.exports={btnGroup:"ItemStatusFilter_btnGroup__1BTqy",checked:"ItemStatusFilter_checked__rVA5h"}},19:function(t,e,n){t.exports={TodoList:"TodoList_TodoList__3hnL-",listItem:"TodoList_listItem__3VSSG"}},25:function(t,e,n){t.exports={app:"App_app__3BT4Y"}},26:function(t,e,n){t.exports={appHeader:"Header_appHeader__2vnkS"}},39:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(22),c=n.n(a),o=n(8),s=(n(39),n(12)),r=n(11),i=n(3),u=Object(s.b)({name:"task",initialState:{taskList:[],searchList:[],term:"",filter:"All",doneCount:0,todoCount:0},reducers:{addTask:function(t,e){e.payload.label.length>0&&t.taskList.push(Object(i.a)({},e.payload)),u.caseReducers.countingTasks(t),u.caseReducers.setSearchList(t)},deleteTask:function(t,e){t.taskList=t.taskList.filter((function(t){return t.id!==e.payload})),u.caseReducers.countingTasks(t),u.caseReducers.setSearchList(t)},toggleTaskOption:function(t,e){t.taskList=t.taskList.map((function(t){return t.id===e.payload.id?Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},e.payload.option,!t[e.payload.option])):Object(i.a)({},t)})),u.caseReducers.sortTasks(t),u.caseReducers.countingTasks(t),u.caseReducers.setSearchList(t)},setSearchOption:function(t,e){t[e.payload.option]=e.payload.value,u.caseReducers.setSearchList(t)},setSearchList:function(t){t.searchList=t.taskList.filter((function(e){var n=e.label.toLowerCase().indexOf(t.term.toLowerCase())>-1,a="Active"===t.filter?!1===e.done:"Done"!==t.filter||!0===e.done;return n&&a}))},sortTasks:function(t){t.taskList=t.taskList.sort((function(t,e){return Number(e.important)-Number(t.important)}))},countingTasks:function(t){t.doneCount=t.taskList.filter((function(t){return t.done})).length,t.todoCount=t.taskList.length}}}),l=u.actions,d=l.addTask,p=l.deleteTask,b=l.toggleTaskOption,j=l.setSearchOption,f=u.reducer,m=Object(s.a)({reducer:{taskSlice:f}}),O=n(25),h=n.n(O),_=n(26),x=n.n(_),k=o.b,L=o.c,T=n(2),v=function(){var t=L((function(t){return t.taskSlice.doneCount})),e=L((function(t){return t.taskSlice.todoCount}));return Object(T.jsxs)("div",{className:x.a.appHeader,children:[Object(T.jsx)("h1",{children:"My ToDoApp List"}),Object(T.jsxs)("h2",{children:[e," more to do, ",t," done"]})]})},S=n(5),N=n(1),g=n(43),I=n(6),C=n(4),y=n.n(C),A=n(13),R=n.n(A),w=function(){var t=Object(N.useState)(""),e=Object(S.a)(t,2),n=e[0],a=e[1],c=k();return Object(T.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),c(d({label:n,id:Object(g.a)(),done:!1,important:!1})),a("")}(t)},className:y()(R.a.form),children:[Object(T.jsxs)("label",{children:[Object(T.jsx)(I.b,{}),Object(T.jsx)("input",{type:"text",className:R.a.input,placeholder:"New task",value:n,onChange:function(t){return a(t.currentTarget.value)}}),Object(T.jsx)(I.a,{onClick:function(){a("")}})]}),Object(T.jsx)("button",{className:y()(R.a.btn,"btn"),children:"Add"})]})},F=n(17),G=n.n(F),H=n(18),P=n.n(H),B=function(){var t=L((function(t){return t.taskSlice.filter})),e=k();return Object(T.jsx)("div",{className:P.a.btnGroup,children:["All","Active","Done"].map((function(n){return Object(T.jsx)("button",{type:"button",className:y()("btn",t===n?P.a.checked:""),onClick:function(t){return function(t){return e(j({value:t,option:"filter"}))}(t.currentTarget.outerText)},children:n},n)}))})},D=function(){var t=Object(N.useState)(""),e=Object(S.a)(t,2),n=e[0],a=e[1],c=k();return Object(T.jsxs)("div",{className:G.a.searchPanel,children:[Object(T.jsxs)("label",{children:[Object(T.jsx)(I.c,{}),Object(T.jsx)("input",{type:"text",placeholder:"Search",className:G.a.input,onChange:function(t){return function(t){a(t),c(j({value:t,option:"term"}))}(t.currentTarget.value)},value:n}),Object(T.jsx)(I.a,{onClick:function(){return a(""),void c(j({value:"",option:"term"}))}})]}),Object(T.jsx)(B,{})]})},J=n(19),V=n.n(J),q=n(20),E=n(9),M=n.n(E),Q=function(t){var e=t.label,n=t.id,a=t.important,c=t.done,o=k();return Object(T.jsxs)("div",{className:M.a.TodoListItem,children:[Object(T.jsx)("span",{className:y()(a&&M.a.important,c&&M.a.done,M.a.label),onClick:function(){return o(b({id:n,option:"done"}))},children:e}),Object(T.jsx)("button",{className:"btn",onClick:function(){return o(b({id:n,option:"important"}))},children:Object(T.jsx)(q.a,{})}),Object(T.jsx)("button",{className:"btn",onClick:function(){return o(p(n))},children:Object(T.jsx)(q.b,{})})]})},U=function(){var t=L((function(t){return t.taskSlice.searchList}));return Object(T.jsx)("ul",{className:V.a.TodoList,children:t.map((function(t){return Object(T.jsx)("li",{className:V.a.listItem,children:Object(T.jsx)(Q,Object(i.a)({},t))},t.id)}))})},X=function(){return Object(T.jsxs)("div",{className:h.a.app,children:[Object(T.jsx)(v,{}),Object(T.jsx)(w,{}),Object(T.jsx)(D,{}),Object(T.jsx)(U,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(T.jsx)(o.a,{store:m,children:Object(T.jsx)(X,{})}))},9:function(t,e,n){t.exports={TodoListItem:"TodoListItem_TodoListItem__15GUV",important:"TodoListItem_important__1Eq5q",label:"TodoListItem_label__3aIuS",done:"TodoListItem_done__2OQOt"}}},[[41,1,2]]]);
//# sourceMappingURL=main.944fc9ac.chunk.js.map