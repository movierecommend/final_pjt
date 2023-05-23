(function(){"use strict";var t={3456:function(t,e,n){var r,o,a=n(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top"},[e("div",{attrs:{id:"wrapMini"}},[e("router-link",{attrs:{to:"/login",id:"btnLogin"}},[t._v("Login")]),t._v(" | "),e("router-link",{attrs:{to:{name:"signup"},id:"btnLogin"}},[t._v("Signup")]),t._v(" | "),t.isLoggedIn?e("router-link",{attrs:{to:{name:"mypage",params:{username:t.currentUser}},id:"btnLogin"}},[t._v("Mypage")]):t._e()],1)]),e("nav",[e("router-link",{attrs:{to:{name:"HomeView"}}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:{name:"recommend"}}},[t._v("Recommendations")]),t._v(" | "),e("router-link",{attrs:{to:{name:"fun"}}},[t._v("Fun")]),t._v(" | "),e("router-link",{attrs:{to:{name:"articles"}}},[t._v("Community")])],1),e("router-view")],1)},s=[],l=n(629),c={name:"App",components:{},data(){return{userPk:""}},computed:{...(0,l.Se)({currentUser:"accounts/currentUser",isLoggedIn:"accounts/isLoggedIn"})},methods:{fetchCurrentUser(){this.$store.dispatch("accounts/fetchCurrentUser"),this.userPk=this.currentUser.id},fetchBoxoffice(){this.$store.dispatch("home/fetchBoxoffice")}},created(){this.fetchBoxoffice(),this.fetchCurrentUser()}},u=c,m=n(1001),d=(0,m.Z)(u,i,s,!1,null,null,null),p=d.exports,h=n(4702),f=(n(7658),n(8345)),v=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Home Page")]),e("WatchaListView"),e("NetflixListView")],1)},_=[],g=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Watcha 영화 순위")]),e("ul",t._l(t.movies,(function(n){return e("li",{key:n.rank},[e("span",[t._v(t._s(n.rank))]),e("span",[t._v(t._s(n.title))])])})),0)])},k=[],w=n(6154),E={data(){return{movies:[]}},mounted(){w.Z.get("https://pedia.watcha.com/ko-KR").then((t=>{const e=new DOMParser,n=e.parseFromString(t.data,"text/html"),r=n.querySelectorAll(".css-174lxc3 .css-5yuqaa"),o=[];r.forEach(((t,e)=>{o.push({rank:e+1,title:t.textContent.trim()})})),this.movies=o})).catch((t=>{console.error("데이터를 가져오는 중 오류가 발생했습니다:",t)}))}},b=E,S=(0,m.Z)(b,g,k,!1,null,null,null),y=S.exports,x=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Netflix 영화 순위")]),e("ul",t._l(t.movies,(function(n){return e("li",{key:n.pk},[t._v(" "+t._s(n.fields.title)+" ")])})),0)])},A=[],T={data(){return{movies:[]}},mounted(){this.fetchNetflixMovies()},methods:{fetchNetflixMovies(){w.Z.get("/api/netflix").then((t=>{this.movies=t.data})).catch((t=>{console.error("데이터를 가져오는 중 오류가 발생했습니다:",t)}))}}},C=T,P=(0,m.Z)(C,x,A,!1,null,null,null),L=P.exports,O={name:"HomeView",components:{WatchaListView:y,NetflixListView:L},data(){return{}},methods:{}},R=O,$=(0,m.Z)(R,v,_,!1,null,null,null),I=$.exports,U=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Recommendation Page")])])}],Z={name:"RecommendView"},M=Z,V=(0,m.Z)(M,U,N,!1,null,null,null),F=V.exports,H=function(){var t=this;t._self._c;return t._m(0)},j=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Fun Page")])])}],D={name:"FunView"},B=D,G=(0,m.Z)(B,H,j,!1,null,null,null),z=G.exports,q=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Article Page")]),t.isLoggedIn?e("router-link",{attrs:{to:{name:"create"}}},[t._v("[CREATE]")]):t._e(),e("ArticleList"),e("hr")],1)},K=[],W=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.articles,(function(n){return e("li",{key:n.pk},[e("router-link",{attrs:{to:{name:"profile",params:{username:n.user.username}}}},[t._v(" "+t._s(n.user.username)+" ")]),e("router-link",{attrs:{to:{name:"article",params:{articlePk:n.pk}}}},[t._v(" "+t._s(n.title)+" ")]),t._v(" ("+t._s(n.comment_count)+") | +"+t._s(n.like_count)+" ")],1)})),0)])},X=[],Y={name:"ArticleList",computed:{...(0,l.Se)("articles/",["articles"])},methods:{...(0,l.nv)("articles/",["fetchArticles"])},created(){this.fetchArticles()}},J=Y,Q=(0,m.Z)(J,W,X,!1,null,null,null),tt=Q.exports,et={name:"ArticleListView",components:{ArticleList:tt},computed:{...(0,l.Se)({isLoggedIn:"accounts/isLoggedIn"})}},nt=et,rt=(0,m.Z)(nt,q,K,!1,null,null,null),ot=rt.exports,at=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("새 글")]),e("article-form",{staticClass:"mt-5",attrs:{article:t.article,action:"create"}})],1)},it=[],st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"form-label",staticStyle:{float:"left","font-size":"20px"},attrs:{for:"title"}},[t._v("제목")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newArticle.title,expression:"newArticle.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.newArticle.title},on:{input:function(e){e.target.composing||t.$set(t.newArticle,"title",e.target.value)}}})]),e("div",{staticClass:"mt-3"},[e("label",{staticClass:"form-label",staticStyle:{float:"left","font-size":"20px"},attrs:{for:"content"}},[t._v("내용 ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newArticle.content,expression:"newArticle.content"}],staticClass:"form-control",attrs:{type:"text",id:"content"},domProps:{value:t.newArticle.content},on:{input:function(e){e.target.composing||t.$set(t.newArticle,"content",e.target.value)}}})]),e("button",{staticClass:"mt-3 btn btn-outline-secondary waves-effect mb-4",staticStyle:{float:"right"}},[t._v("글쓰기")])])])},lt=[],ct={name:"ArticleForm",props:{article:{type:Object},action:String},data(){return{newArticle:{title:this.article.title,content:this.article.content}}},methods:{...(0,l.nv)("articles/",["createArticle","updateArticle"]),onSubmit(){if("create"===this.action){const t=this.newArticle;this.createArticle(t)}else if("update"===this.action){const t={articlePk:this.article.pk,...this.newArticle};this.updateArticle(t)}}},watch:{article:{handler(){this.newArticle=this.article}}}},ut=ct,mt=(0,m.Z)(ut,st,lt,!1,null,null,null),dt=mt.exports,pt={name:"CreateView",components:{ArticleForm:dt},data(){return{article:{pk:null,title:"",content:""}}}},ht=pt,ft=(0,m.Z)(ht,at,it,!1,null,null,null),vt=ft.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container mt-3"},[e("p",{staticStyle:{"font-size":"40px","text-align":"left","margin-left":"6px"}},[t._v(" "+t._s(t.article?.id)+"번째 글 ")]),e("p",{staticStyle:{"font-size":"40px","text-align":"left","margin-left":"6px"}},[t._v(" "+t._s(t.article?.title)+" ")]),e("hr"),e("div",{staticClass:"box-content card"},[e("div",{staticClass:"card-body",staticStyle:{"text-align":"left"}},[e("p",{staticStyle:{"font-family":"'GmarketSansMedium'","font-size":"18px"}},[t._v(" "+t._s(t.article?.content)+" ")])])]),e("div",[e("p",[t._v("작성시간 : "+t._s(t.article?.created_at))]),e("p",[t._v("수정시간 : "+t._s(t.article?.updated_at))])])]),t.isAuthor?e("div",[e("router-link",{attrs:{to:{name:"articleEdit",params:{articlePk:t.article.id}}}},[e("button",{staticClass:"mt-3 btn btn-outline-secondary waves-effect mb-4",staticStyle:{float:"right","font-family":"GimpoGothic"}},[t._v("수정")])]),e("button",{staticClass:"mx-3 mt-3 btn btn-outline-secondary waves-effect mb-4",staticStyle:{float:"right","font-family":"GimpoGothic"},on:{click:function(e){return t.deleteArticle({articlePk:t.article.pk})}}},[t._v("삭제")])],1):t._e(),e("div",{staticStyle:{float:"left","margin-top":"15px"}},[e("button",{staticClass:"btn btn-outline-danger waves-effect mb-4",on:{click:function(e){return t.likeArticle({articlePk:t.article.pk})}}},[t._v(" 좋아요 ♥ "+t._s(t.like_count)+" ")])]),e("div",{staticStyle:{"margin-top":"100px"}},[e("hr"),e("comment-list",{attrs:{comments:t.article.comments}})],1)])},gt=[],kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-3"},[e("div",{},[e("div",{staticStyle:{"text-align":"left","font-family":"'GmarketSansMedium'"}},[e("router-link",{attrs:{to:{name:"profile",params:{username:t.comment.user.username}}}},[t._v(" "+t._s(t.comment.user.username)+" ")]),t._v(": "),t.isEditing?t._e():e("div",{staticStyle:{"font-family":"'GmarketSansMedium'"}},[t._v(t._s(t.payload.content))]),e("span",[t.isEditing?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.content,expression:"payload.content"}],attrs:{type:"text"},domProps:{value:t.payload.content},on:{input:function(e){e.target.composing||t.$set(t.payload,"content",e.target.value)}}}),e("button",{on:{click:t.onUpdate}},[t._v("Update")]),t._v(" | "),e("button",{on:{click:t.switchIsEditing}},[t._v("Cancel")])]):t._e(),t.currentUser.username!==t.comment.user.username||t.isEditing?t._e():e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"mt-3 btn btn-sm btn-outline-secondary waves-effect",on:{click:function(e){return t.deleteComment(t.payload)}}},[t._v("삭제")]),e("button",{staticClass:"mt-3 mx-2 btn btn-sm btn-outline-secondary waves-effect",on:{click:t.switchIsEditing}},[t._v("수정")])])]),e("br")],1)])])},wt=[],Et={name:"CommentList",props:{comment:Object},data(){return{isEditing:!1,payload:{articlePk:this.comment.article,commentPk:this.comment.pk,content:this.comment.content}}},computed:{...(0,l.Se)(["currentUser"])},methods:{...(0,l.nv)(["updateComment","deleteComment"]),switchIsEditing(){this.isEditing=!this.isEditing},onUpdate(){this.updateComment(this.payload),this.isEditing=!1}}},bt=Et,St=(0,m.Z)(bt,kt,wt,!1,null,null,null),yt=St.exports,xt={name:"ArticleDetailView",components:{CommentList:yt},data(){return{articlePk:""}},computed:{...(0,l.Se)("articles/",["article","currentUser","isAuthor"]),like_count(){return this.article.like_users?.length}},methods:{...(0,l.nv)("articles/",["fetchArticle","likeArticle","deleteArticle"])},created(){this.articlePk=this.$route.params.articlePk,this.fetchArticle({articlePk:this.articlePk})}},At=xt,Tt=(0,m.Z)(At,_t,gt,!1,null,null,null),Ct=Tt.exports,Pt={},Lt=(0,m.Z)(Pt,r,o,!1,null,null,null),Ot=Lt.exports,Rt=function(){var t=this;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("MyPage")])])}],It={name:"MypageView"},Ut=It,Nt=(0,m.Z)(Ut,Rt,$t,!1,null,null,null),Zt=Nt.exports,Mt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Sign Up Page")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.signup.apply(null,arguments)}}},[e("label",{attrs:{for:"username"}},[t._v("username : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),e("br"),e("label",{attrs:{for:"password1"}},[t._v(" password : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password1,expression:"password1"}],attrs:{type:"password",id:"password1"},domProps:{value:t.password1},on:{input:function(e){e.target.composing||(t.password1=e.target.value)}}}),e("br"),e("label",{attrs:{for:"password2"}},[t._v(" password confirmation : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",id:"password2"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),e("input",{attrs:{type:"submit",value:"SignUp"}})])])},Vt=[],Ft={name:"SignUpView",data(){return{username:null,password1:null,password2:null}},methods:{signup(){const t=this.username,e=this.password1,n=this.password2,r={username:t,password1:e,password2:n};this.$store.dispatch("accounts/signup",r)}}},Ht=Ft,jt=(0,m.Z)(Ht,Mt,Vt,!1,null,null,null),Dt=jt.exports,Bt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("LogIn Page")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.login(t.credentials)}}},[e("label",{attrs:{for:"username"}},[t._v("Username:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",required:""},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}}),e("br"),e("label",{attrs:{for:"password"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),e("br"),e("button",{attrs:{type:"submit"}},[t._v("로그인")])])])},Gt=[],zt={name:"LoginView",data(){return{credentials:{username:null,password:null}}},computed:{...(0,l.Se)("accounts/",["isAuthError"])},methods:{...(0,l.nv)("accounts/",["login"])},mounted(){}},qt=zt,Kt=(0,m.Z)(qt,Bt,Gt,!1,null,null,null),Wt=Kt.exports,Xt=function(){var t=this;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v(" Logout 되었습니다. ")])])}],Jt={name:"LogoutView",methods:{...(0,l.nv)(["logout"])},computed:{...(0,l.Se)(["isLoggedIn"])},created(){this.isLoggedIn?this.logout():(alert("잘못된 접근입니다."),this.$router.back())}},Qt=Jt,te=(0,m.Z)(Qt,Xt,Yt,!1,null,null,null),ee=te.exports,ne=function(){var t=this,e=t._self._c;return e("div")},re=[],oe={name:"NotFound404"},ae=oe,ie=(0,m.Z)(ae,ne,re,!1,null,null,null),se=ie.exports;a.ZP.use(f.ZP);const le=[{path:"/",name:"HomeView",component:I},{path:"/recommend",name:"recommend",component:F},{path:"/fun",name:"fun",component:z},{path:"/articles",name:"articles",component:ot},{path:"/articles/new",name:"create",component:vt},{path:"/articles/:articlePk",name:"article",component:Ct},{path:"/articles/:articlePk/edit",name:"articleEdit",component:Ot},{path:"/signup",name:"signup",component:Dt},{path:"/login",name:"login",component:Wt},{path:"/logout",name:"logout",component:ee},{path:"/mypage/:username",name:"mypage",component:Zt},{path:"/404",name:"NotFound404",component:se},{path:"*",redirect:"/404"}],ce=new f.ZP({mode:"history",base:"/",routes:le});ce.beforeEach(((t,e,n)=>{Re.commit("accounts/SET_AUTH_ERROR",null);const r=Re.getters["accounts/isLoggedIn"],o=["login","signup","HomeView"],a=!o.includes(t.name);a&&!r?(alert("로그인하셔야 서비스를 이용하실 수 있습니다."),n({name:"login"})):n(),!a&&r&&n({name:"HomeView"})}));var ue=ce;const me="http://localhost:8000/api/v1/",de=w.Z.create({baseURL:me});de.interceptors.request.use((function(t){const e=localStorage.getItem("token");return e?(t.headers.Authorization=`Token ${e}`,t):t}),(function(t){return Promise.reject(t)}));var pe=de;const he="accounts";var fe={namespaced:!0,login(t){return pe({method:"post",url:`${he}/login/`,data:t})},logout(){return pe({method:"post",url:`${he}/logout/`})},signup(t){return pe({method:"post",url:`${he}/signup/`,data:t})},currentUser(){return pe({method:"get",url:`${he}/user/`})},profile(t){return pe({method:"get",url:`${he}/profile/${t}/`})}},ve={namespaced:!0,state:{token:localStorage.getItem("token")||"",currentUser:{},profile:{},authError:null},getters:{isLoggedIn:t=>!!t.token,currentUser:t=>t.currentUser,profile:t=>t.profile,authError:t=>t.authError,isAuthError:t=>!!t.authError},mutations:{SET_TOKEN:(t,e)=>{t.token=e},SET_CURRENT_USER:(t,e)=>t.currentUser=e,SET_PROFILE:(t,e)=>t.profile=e,SET_AUTH_ERROR:(t,e)=>t.authError=e},actions:{login({commit:t,dispatch:e},n){fe.login(n).then((n=>{const r=n.data.key;t("SET_TOKEN",r),localStorage.setItem("token",r),e("fetchCurrentUser"),ue.push({name:"HomeView"})})).catch((e=>{t("SET_AUTH_ERROR",e.response.data)}))},signup({commit:t,dispatch:e},n){fe.signup(n).then((n=>{const r=n.data.key;t("SET_TOKEN",r),localStorage.setItem("token",r),e("fetchCurrentUser"),ue.push({name:"HomeView"})})).catch((e=>{t("SET_AUTH_ERROR",e.response.data)}))},logout({commit:t}){fe.logout().then((()=>{t("SET_TOKEN",""),localStorage.setItem("token",""),alert("성공적으로 logout 되었습니다."),ue.push({name:"login"})})).catch((t=>console.error(t)))},fetchCurrentUser({commit:t,getters:e}){e.isLoggedIn&&fe.currentUser().then((e=>{t("SET_CURRENT_USER",e.data)}))},fetchProfile({commit:t},{username:e}){fe.profile(e).then((e=>{t("SET_PROFILE",e.data)}))}}};const _e="http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",ge="be06ce196e4f8f2cdc15f51e902a4b12";var ke=new Date,we=ke.getFullYear(),Ee=ke.getMonth()+1,be=ke.getDate();Ee<10&&(Ee="0"+Ee),be<10&&(be="0"+be);var Se=we+""+Ee+be-1,ye=Se.toString(),xe={namespaced:!0,state:{boxoffice:[]},getters:{boxoffice:t=>t.boxoffice},mutations:{FETCH_BOXOFFICE(t,e){t.boxoffice=e}},actions:{fetchBoxoffice({commit:t}){(0,w.Z)({method:"get",url:_e,params:{key:ge,targetDt:ye}}).then((e=>{t("FETCH_BOXOFFICE",e.data.boxOfficeResult.dailyBoxOfficeList)})).catch((t=>console.log(t)))}}};const Ae="articles";var Te={all(){return pe({method:"get",url:`${Ae}/`})},detail(t){return pe({method:"get",url:`${Ae}/${t}/`})},create(t){return pe({method:"post",url:`${Ae}/`,data:t})},update(t,e){return pe({method:"put",url:`${Ae}/${t}/`,data:e})},delete(t){return pe({method:"delete",url:`${Ae}/${t}/`})},like(t){return pe({method:"post",url:`${Ae}/${t}/like/`})}},Ce={create(t,e){return pe({method:"post",url:`articles/${t}/comments/`,data:e})},update(t,e,n){return pe({method:"put",url:`articles/${t}/comments/${e}/`,data:n})},delete(t,e){return pe({method:"delete",url:`articles/${t}/comments/${e}/`})}},Pe={namespaced:!0,state:{articles:[],article:{title:"",content:""},token:null},getters:{articles:t=>t.articles,article:t=>t.article,isAuthor:(t,e)=>t.article.user?.username===e.currentUser?.username},mutations:{SET_ARTICLES:(t,e)=>t.articles=e,SET_ARTICLE:(t,e)=>t.article=e,SET_ARTICLE_COMMENTS:(t,e)=>t.article.comments=e},actions:{fetchArticles({commit:t}){Te.all().then((e=>{t("SET_ARTICLES",e.data)})).catch((t=>console.error(t.response)))},fetchArticle({commit:t},{articlePk:e}){Te.detail(e).then((e=>{t("SET_ARTICLE",e.data)})).catch((t=>{404===t.response.status&&ue.push({name:"NotFound404"})}))},createArticle({commit:t,getters:e},{title:n,content:r}){const o={title:n,content:r};Te.create(o).then((n=>{t("SET_ARTICLE",n.data),ue.push({name:"article",params:{articlePk:e.article.pk}})})).catch((t=>console.error(t.response)))},updateArticle({commit:t,getters:e},{title:n,content:r,articlePk:o}){const a={title:n,content:r};Te.update(o,a).then((n=>{t("SET_ARTICLE",n.data),ue.push({name:"article",params:{articlePk:e.article.pk}})})).catch((t=>console.error(t.response)))},deleteArticle({commit:t},{articlePk:e}){Te["delete"](e).then((()=>{t("SET_ARTICLE",{}),ue.push({name:"articles"})})).catch((t=>console.error(t.response)))},likeArticle({commit:t},{articlePk:e}){Te.like(e).then((e=>{t("SET_ARTICLE",e.data)})).catch((t=>console.error(t.response)))},createComment({commit:t},{articlePk:e,content:n}){const r={content:n};Ce.create(e,r).then((e=>{t("SET_ARTICLE_COMMENTS",e.data)})).catch((t=>console.error(t.response)))},updateComment({commit:t},{articlePk:e,commentPk:n,content:r}){const o={content:r};Ce.update(e,n,o).then((e=>{t("SET_ARTICLE_COMMENTS",e.data)})).catch((t=>console.error(t.response)))},deleteComment({commit:t},{articlePk:e,commentPk:n}){Ce["delete"](e,n).then((e=>{t("SET_ARTICLE_COMMENTS",e.data)})).catch((t=>console.error(t.response)))}}},Le={actors(){return pe({method:"get",url:"movies/actors/"})},genre(t){return pe({method:"get",url:`movies/genre/${t}`})},movie(t){return pe({method:"get",url:`movies/${t}`})},movie_like(t){return pe({method:"post",url:`movies/${t}/like/`})},search(t){return pe({method:"get",url:`movies/${t}`})},create_rating(t,e){return pe({method:"post",url:`movies/${t}/rating/`,data:e})},update_rating(t,e,n){return pe({method:"post",url:`movies/${t}/rating/${e}`,data:n})},delete_rating(t,e){return pe({method:"delete",url:`movies/${t}/rating/${e}`})}},Oe={namespaced:!0,state:{actors:[],movie:[],recommendationMovies:[],similarMovies:[],search:[]},getters:{article:t=>t.article,movie:t=>t.movie,search:t=>t.search},mutations:{SET_MOVIE:(t,e)=>t.movie=e,SET_SEARCH:(t,e)=>t.search=e},actions:{fetchMovie({commit:t},{moviePk:e}){Le.movie(e).then((e=>{t("SET_MOVIE",e.data)})).catch((t=>{404===t.response.status&&ue.push({name:"NotFound404"})}))},movieLike({commit:t},e){Le.movie_like(e).then((e=>{t("SET_MOVIE",e.data)})).catch((t=>console.error(t.response)))},recommendation({commit:t},{userPk:e}){Le.recommendation(e).then((e=>{t("SET_RECOMMENDATION_MOVIES",e.data)})).catch((t=>{404===t.response.status&&ue.push({name:"NotFound404"})}))},search({commit:t},e){Le.search(e).then((e=>{t("SET_SEARCH",e.data)})).catch((t=>{404===t.response.status&&ue.push({name:"NotFound404"})}))}}};a.ZP.use(l.ZP);var Re=new l.ZP.Store({plugins:[(0,h.Z)()],modules:{accounts:ve,home:xe,articles:Pe,movies:Oe}});n(8877);a.ZP.config.productionTip=!1,new a.ZP({store:Re,router:ue,render:t=>t(p)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkfinal_pjt_front"]=self["webpackChunkfinal_pjt_front"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3456)}));r=n.O(r)})();
//# sourceMappingURL=app.3fa2ac62.js.map