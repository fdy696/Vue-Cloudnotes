webpackJsonp([5],{"4tQS":function(t,e){},"9n10":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("Dd8w"),a=n.n(r),s=n("NYxO"),i={data:function(){return{}},created:function(){this.checkoutLogin()},computed:a()({},Object(s.c)(["sulg"])),methods:a()({},Object(s.b)(["checkoutLogin"])),components:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avator"},[e("h2",[this._v(this._s(this.sulg))])])},staticRenderFns:[]};var c=n("VU/8")(i,u,!1,function(t){n("iyAF")},"data-v-7fccdf06",null).exports,d=n("dXfV"),f="/auth/register",l="/auth/login",h="/auth/logout",b="/auth",v=function(t){var e=t.username,n=t.password;return Object(d.a)(f,"POST",{username:e,password:n})},m=function(t){var e=t.username,n=t.password;return Object(d.a)(l,"POST",{username:e,password:n})},k=function(){return Object(d.a)(h)},N=function(){return Object(d.a)(b)},p={data:function(){return{}},methods:{logout:function(){var t=this;k().then(function(e){t.$router.push("/login")})}},components:{avatar:c}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar",attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/notes",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{staticClass:"active",attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.logout}})])],1)},staticRenderFns:[]};var g={name:"App",components:{sidebar:n("VU/8")(p,I,!1,function(t){n("4tQS")},"data-v-b41fa216",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var E=n("VU/8")(g,T,!1,function(t){n("nezp")},null,null).exports,w=n("/ocq");o.default.use(w.a);var A=new w.a({routes:[{path:"/login",alias:"/",name:"Login",component:function(){return n.e(0).then(n.bind(null,"xJsL"))}},{path:"/notebooks",name:"Notebooks",component:function(){return n.e(2).then(n.bind(null,"G4fB"))}},{path:"/notes",name:"NoteDetail",component:function(){return n.e(1).then(n.bind(null,"jPU1"))}},{path:"/trash",name:"Trash",component:function(){return n.e(3).then(n.bind(null,"8E/F"))}}]}),O=n("//Fk"),j=n.n(O),D=n("vFcK"),C={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:notebookId",DELETE:"/notebooks/:notebookId"},L=function(){return new j.a(function(t,e){Object(d.a)(C.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.friendlyTime=Object(D.a)(t.createdAt)}),t(e)})})},F=function(t,e){var n=e.title,o=void 0===n?" ":n;return Object(d.a)(C.UPDATE.replace(":notebookId",t),"PATCH",{title:o})},y=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new j.a(function(t,n){Object(d.a)(C.ADD,"POST",{title:e}).then(function(e){e.data.friendlyTime="刚刚",e.data.noteCounts=0,t(e)})})},U=function(t){return Object(d.a)(C.DELETE.replace(":notebookId",t),"DELETE")},_=n("zL8q"),M=n.n(_),P={state:{notebooks:[],curBookId:null},getters:{notebooks:function(t){return t.notebooks},curBook:function(t){return t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId}):t.notebooks[0]||{}}},mutations:{setNotebooks:function(t,e){var n=e.notebooks;t.notebooks=n},addNotebook:function(t,e){var n=e.notebook;console.log(n),t.notebooks.unshift(n)},deleteNotebook:function(t,e){var n=e.notebookId;t.notebooks=t.notebooks.filter(function(t){return t.id!==n})},updateNotebook:function(t,e){var n=e.notebookId,o=e.title;t.notebooks.find(function(t){return t.id===n}).title=o},setCurBookId:function(t,e){var n=e.notebookId;t.curBookId=n}},actions:{getNotebooks:function(t){var e=t.commit;return L().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit,o=e.title;return y({title:o}).then(function(t){n("addNotebook",{notebook:t.data})})},deleteNotebook:function(t,e){var n=t.commit,o=e.notebookId;return U(o).then(function(t){n("deleteNotebook",{notebookId:o}),_.Message.success(t.msg)}).catch(function(t){_.Message.warning(t.msg)})},updateNotebook:function(t,e){var n=t.commit,o=e.notebookId,r=e.title;return F(o,{title:r}).then(function(t){n("updateNotebook",{notebookId:o,title:r})})}}},R={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},S={getAll:function(t){var e=t.notebookId;return new j.a(function(t,n){Object(d.a)(R.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.friendlyTime=Object(D.a)(t.createdAt),t.updateFriendlyTime=Object(D.a)(t.updatedAt)}),t(e)})})},updateNote:function(t){var e=t.noteId,n=t.title,o=t.content;return Object(d.a)(R.UPDATE.replace(":noteId",e),"PATCH",{title:n,content:o})},addNote:function(t,e){var n=t.notebookId,o=e.title,r=void 0===o?"":o,a=e.content,s=void 0===a?"":a;return Object(d.a)(R.ADD.replace(":notebookId",n),"POST",{title:r,content:s})},deleteNote:function(t){var e=t.noteId;return Object(d.a)(R.DELETE.replace(":noteId",e),"DELETE")}};window.Note=S;var G={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{}:t.notes[0]||{}:{}}},mutations:{setNotes:function(t,e){var n=e.notes;t.notes=n},setCurNoteId:function(t,e){var n=e.curnoteId;t.curNoteId=n},addNotes:function(t,e){var n=e.note;n.friendlyTime="刚刚",n.updateFriendlyTime="刚刚",t.notes.unshift(n)},deleteNote:function(t,e){var n=e.noteId;t.notes=t.notes.filter(function(t){return t.id!==n})||{}},updateNote:function(t,e){var n=e.noteId,o=e.title,r=e.content,a=t.notes.find(function(t){return t.id===n});a.title=o,a.content=r}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return S.getAll({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return new j.a(function(t,e){S.addNote({notebookId:o},{title:r,content:a}).then(function(e){n("addNotes",{note:e.data}),_.Message.success("请在此处添加笔记内容"),t(e.data)})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return S.deleteNote({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),_.Message.success(t.msg)}).catch(function(t){_.Message.warning(t.msg)})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return S.updateNote({noteId:o,title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,value:value})}).catch(function(){})}}},V={state:{user:null},getters:{username:function(t){return t.user?t.user.username:"未登录"},sulg:function(t){return t.user?t.user.username.charAt(0):"未"}},mutations:{setUser:function(t,e){t.user=e.data}},actions:{checkoutLogin:function(t,e){var n=t.commit;return N().then(function(t){t.isLogin?(n("setUser",t),e&&A.push(e.path)):A.push("/login")})},loginUser:function(t,e){var n=t.commit,o=e.username,r=e.password;return new j.a(function(t,e){m({username:o,password:r}).then(function(t){n("setUser",t),A.push("/notebooks")}).catch(function(t){e(t)})})},registerUser:function(t,e){var n=t.commit,o=e.username,r=e.password;return new j.a(function(t,e){v({username:o,password:r}).then(function(e){t(),n("setUser",e),A.push("/notebooks")}).catch(function(t){e(t)})})}}},B=n("f6ma"),x={state:{trashNotes:null,trashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.trashNoteId?e.trashNotes.find(function(e){return e.id==t.trashNoteId})||{}:e.trashNotes[0]||{}}},mutations:{setTrashNotes:function(t,e){console.log(e),t.trashNotes=e.data},deleteTrashNote:function(t,e){null!=t.trashNoteId&&null!=t.trashNotes||t.trashNotes.shift(),t.trashNotes=t.trashNotes.filter(function(e){return e.id!=t.trashNoteId}),t.trashNoteId=null},revertNote:function(t,e){null!==t.trashNotes&&t.trashNotes.filter(function(e){return e.id!==t.trashNoteId})},setTrashNoteId:function(t,e){t.trashNoteId=e.noteId}},actions:{getTrashNotes:function(t){var e=t.state,n=t.commit;return B.a.getAll().then(function(t){n("setTrashNotes",t),null!=e.trashNotes&&null!=e.trashNotes[0]||_.Message.error("回收站为空")})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return B.a.deleteNote({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),_.Message.success("删除成功")})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return B.a.revertNote({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),_.Message.success("恢复成功")})}}};o.default.use(s.a);var H=new s.a.Store({modules:{notebook:G,note:P,user:V,trash:x}});n("9n10"),n("tvR6");o.default.use(M.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:A,store:H,components:{App:E},template:"<App/>"})},dXfV:function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(o,r){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?a.params=n:a.data=n,s()(a).then(function(t){200==t.status?o(t.data):r(t.data)}).catch(function(t){r({msg:"网络异常"})})})};var o=n("//Fk"),r=n.n(o),a=n("mtWM"),s=n.n(a),i=n("o/zv");n.n(i);s.a.defaults.baseURL="//note-server.hunger-valley.com",s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.withCredentials=!0},f6ma:function(t,e,n){"use strict";var o=n("//Fk"),r=n.n(o),a=n("dXfV"),s=n("vFcK"),i={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"};e.a={getAll:function(){return new r.a(function(t,e){Object(a.a)(i.GET).then(function(e){e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.createdFriendlyTime=Object(s.a)(t.createdAt),t.updateFriendlyTime=Object(s.a)(t.updatedAt)||"未更新"}),t(e)})})},revertNote:function(t){var e=t.noteId;return Object(a.a)(i.REVERT.replace(":noteId",e),"PATCH")},deleteNote:function(t){var e=t.noteId;return Object(a.a)(i.DELETE.replace(":noteId",e),"DELETE")}}},iyAF:function(t,e){},nezp:function(t,e){},tvR6:function(t,e){},vFcK:function(t,e,n){"use strict";e.a=function(t){var e="object"===(void 0===t?"undefined":r()(t))?dataStr:new Date(t),n=Date.now()-e.getTime(),o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;case n<2592e6:o=Math.floor(n/864e5)+"天前";break;case n<31104e6:o=Math.floor(n/2592e6)+"月前"}return o};var o=n("pFYg"),r=n.n(o)}},["NHnr"]);
//# sourceMappingURL=app.a6bfcc6b75f71d5c30a5.js.map