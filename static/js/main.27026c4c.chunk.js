(this.webpackJsonpcontestchef=this.webpackJsonpcontestchef||[]).push([[0],{134:function(e,t,a){e.exports=a(324)},139:function(e,t,a){},157:function(e,t,a){},174:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},302:function(e,t){},317:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(28),c=a.n(s),o=(a(139),a(10)),l=a.n(o),i=a(12),u=a(16),p=a(17),d=a(18),m=a(19),h=a(54),f=a(34),b=a(75),v=a.n(b).a.create({baseURL:"https://api.codechef.com",timeout:5e3,headers:{}}),E=a(40),g=a.n(E),x=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("authToken");case 2:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",{Authorization:"Bearer ".concat(t)});case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)}))),y=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return t=e.sent,a={headers:t},e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.authcode,n=t.client_id,r=t.client_secret,s=t.redirect_uri,e.prev=1,e.next=4,v.post("oauth/token",{grant_type:"authorization_code",code:a,client_id:n,client_secret:r,redirect_uri:s});case 4:return c=e.sent,e.abrupt("return",{success:!0,response:c});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),k=(a(157),function(){return window.location.href="https://api.codechef.com/oauth/authorize?response_type=code&client_id=83c9543d85c56057657533b11640f5e3&state=xyz&redirect_uri=https://sunburn21.github.io/auth",!1}),w=function(e){e.startLogin;return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"box-layout__title"},"ContestChef"),r.a.createElement("p",null,"Companion to your CodeChef"),r.a.createElement("button",{className:"box-layout__button",onClick:k},"Login with Codechef.")))},j=a(123),O=a(327),S=a(336),N=a(334),T=a(132),_=(a(174),a(175),function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,e.prev=1,e.next=4,v.get("/contests",{headers:a});case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),D=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.id,e.prev=1,e.next=4,v.get("/contests/".concat(n),{headers:a});case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.id,e.prev=1,e.next=4,v.get("/submissions/?contestCode=".concat(n),{headers:a});case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.id,r=t.pid,e.prev=1,e.next=4,v.get("/contests/".concat(n,"/problems/").concat(r),{headers:a});case 4:return s=e.sent,c=s.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.id,r=t.pid,e.prev=1,e.next=4,v.get("/submissions/?contestCode=".concat(n,"&problemCode=").concat(r),{headers:a});case 4:return s=e.sent,c=s.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){return!e&&(alert("Error in fetching data! Try Again! Check your connection or Login again."),!0)},A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.props.user),e.next=3,_(n.props.user);case 3:if(t=e.sent,!I(t)){e.next=6;break}return e.abrupt("return");case 6:if(t){e.next=9;break}return alert("Error in fetching contest! Try Again! Check your connection or Login again."),e.abrupt("return");case 9:return e.next=11,n.setState({contests:t.result.data.content.contestList});case 11:case"end":return e.stop()}}),e)}))),n.onChangeRadioButton=function(e){n.setState({selectedOption:e.target.value})},n.state={index:0,selected:[],contests:[],selectedOption:"code"},n}return Object(p.a)(a,[{key:"render",value:function(){var e,t,a,s=this,c=this.state,o=c.index,l=c.selected,i=c.contests,u=c.selectedOption,p=i[o];if(l.length){var d=l[0]["".concat(u)]===p["".concat(u)];e=!d,t=d,a=d?"success":"error"}return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{validationState:a},r.a.createElement(O.a,null,r.a.createElement(O.a.Prepend,{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Enter the contest")),r.a.createElement(T.a,{id:"form-example",isInvalid:e,isValid:t,labelKey:"capital",onChange:function(e){return s.setState({selected:e},(function(){console.log(s.state.selected)}))},options:this.state.contests.map((function(e){return e[u]})),placeholder:"Select a capital...",selected:l}),r.a.createElement(O.a.Append,{className:"input-group-append"},r.a.createElement(S.a,{variant:"outline-secondary",onClick:function(){var e=s.state.contests.filter((function(e){return e[u]===l[0]}));console.log(e[0]),s.props.history.push("/contest/".concat(e[0].code))}},"Submit"))),r.a.createElement(N.a.Group,{style:{textAlign:"left"}},r.a.createElement(N.a.Check,{style:{paddingTop:"5px"},value:"code",checked:"code"===this.state.selectedOption,onChange:this.onChangeRadioButton,type:"radio",label:"Search by code"}),r.a.createElement(N.a.Check,{type:"radio",value:"name",checked:"name"===this.state.selectedOption,onChange:this.onChangeRadioButton,label:"Search by name"}))))}}]),a}(r.a.Component),P=a(328),B=(a(177),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={contests:{}},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard_container",style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(P.a,null,r.a.createElement("div",{style:{marginTop:"-100px"}},r.a.createElement("h1",null,"ContestChef"),r.a.createElement("p",null,"A minimalistic Codechef companion app."),r.a.createElement("div",{style:{maxWidth:"500px"}},r.a.createElement(A,{user:this.props.user,history:this.props.history})))))}}]),a}(n.Component)),F=a(32),M=a.n(F),U=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U("code");case 2:return a=t.sent,t.next=5,C({authcode:a,client_secret:"50cdc33cc501f6ef3a149c56ad92ffeb",client_id:"83c9543d85c56057657533b11640f5e3",redirect_uri:"https://sunburn21.github.io/auth"});case 5:if(!(n=t.sent).success){t.next=16;break}return t.next=9,g.a.set("authToken",n.response.data.result.data.access_token);case 9:return t.next=11,g.a.set("refauthToken",n.response.data.result.data.refresh_token);case 11:return t.next=13,g.a.set("tokentime",M()());case 13:return console.log(n.response.data.result.data),t.next=16,e.props.data.authUser();case 16:e.props.data.state.user||e.props.history.push("/login"),e.props.history.push("/home");case 18:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"render",value:function(){return null}}]),a}(n.Component),G=a(29),Y=(a(179),a(330)),W=a(331),$=a(125),J=a(335),K={width:"250px",height:"100px",borderRadius:"5px",textAlign:"left",padding:"10px",border:"2px solid #e9ecef",cursor:"pointer"},V=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(J.a.Img,{variant:"top",alt:"",src:e.details.bannerFile}),r.a.createElement(J.a,{style:{marginTop:"20px"},className:"text-center"},r.a.createElement(J.a.Header,null,"Divisions"),r.a.createElement(J.a.Body,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("span",{onClick:function(){e.divClick(0)},className:"division",style:K},r.a.createElement(J.a.Title,null,"Division 1"),r.a.createElement(J.a.Text,null,"If user's rating is >=1100")),r.a.createElement("span",{onClick:function(){e.divClick(1)},className:"division",style:K},r.a.createElement(J.a.Title,null,"Division 2"),r.a.createElement(J.a.Text,null,"If user's rating is ","<=","1099 "))))))},q=a(133),Q=a(329),X=(a(180),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onProblemClick=function(e){n.props.history.push("/problem/".concat(e.contestCode,"/").concat(e.problemCode))},n.state={},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.problems;console.log(t);var a=Object(q.a)(t).sort((function(e,t){return-e.successfulSubmissions+t.successfulSubmissions}));return r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("div",{style:{fontSize:"20px"}},"Problems"),r.a.createElement(Q.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Code"),r.a.createElement("th",null,"Submissions"),r.a.createElement("th",null,"Accuracy"))),r.a.createElement("tbody",null,a.map((function(t,a){return r.a.createElement("tr",{className:"problem_item",style:{fontSize:"15px",cursor:"pointer"},onClick:function(){return e.onProblemClick(t)}},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.problemCode),r.a.createElement("td",null,t.successfulSubmissions),r.a.createElement("td",null,t.accuracy.toPrecision(3)))})))))}}]),a}(n.Component)),Z=(a(181),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props.data,a=t.timeTillDate,n=(t.timeFormat,M()(a)),r=M()(),s=M()(n-r);s.subtract(1,"days"),s.subtract(5.5,"hours");var c=s.format("D"),o=s.format("HH"),l=s.format("mm"),i=s.format("ss");e.setState({days:c,hours:o,minutes:l,seconds:i})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.minutes,s=e.seconds;return r.a.createElement("div",null,r.a.createElement("div",{className:"countdown-wrapper"},r.a.createElement("span",{className:"countdown-item"},t,r.a.createElement("span",null,"days")),r.a.createElement("span",{className:"countdown-item"},a,r.a.createElement("span",null,"hrs")),r.a.createElement("span",{className:"countdown-item"},n,r.a.createElement("span",null,"min")),r.a.createElement("span",{className:"countdown-item"},s,r.a.createElement("span",null,"sec"))))}}]),a}(r.a.Component)),ee=function(e){return r.a.createElement("div",{style:{marginTop:"2"}},r.a.createElement(J.a,{style:{width:"100%"}},r.a.createElement(J.a.Header,null,"Submissions"),r.a.createElement(Q.a,{striped:!0,bordered:!0,hover:!0,size:"sm",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"@"),r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Result"))),r.a.createElement("tbody",null,e.subs.map((function(e){return r.a.createElement("tr",{style:{fontSize:"10px"}},r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.problemCode),r.a.createElement("td",null,e.result))}))))))},te=function(e){var t=M()(e.details.startDate),a=M()(e.details.endDate),s=M()(),c=t<=s&&s<a,o=t<=s,l={startd:t,endd:a,onGoing:c,hasStarted:o,timeTillDate:c?a:t,timeFormat:"MM DD YYYY, h:mm a"};return r.a.createElement(n.Fragment,null,r.a.createElement(J.a,{className:"text-center",style:{width:"1",height:"100vh"}},r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,"Timer"),r.a.createElement(Y.a,{className:"text-center"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},r.a.createElement(W.a,{className:""},c?r.a.createElement(Z,{data:l}):o?"Contest has ended.":r.a.createElement(Z,{data:l}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(W.a,{className:""},r.a.createElement(ee,{subs:e.details.submissions})))))))},ae=function(e){return r.a.createElement("div",null,r.a.createElement(Y.a,null,r.a.createElement(W.a,{style:{height:"100vh"}},r.a.createElement($.a,{xs:!0,lg:{span:7,offset:1}},r.a.createElement(J.a,{style:{width:"1",height:"100vh"}},r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,e.details.name),r.a.createElement(J.a.Subtitle,{className:"mb-2 text-muted"},e.details.code),e.isParent?r.a.createElement(V,{divClick:e.onDivClick,details:e.details}):r.a.createElement(X,{history:e.history,problems:e.details.problemsList})))),r.a.createElement($.a,{xs:!0,lg:3},r.a.createElement(te,{details:e.details})))))},ne=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n.props.user),n.onPageRender(n.props.match.params.id);case 2:case"end":return e.stop()}}),e)}))),n.onPageRender=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({headers:n.props.user.headers,id:t});case 2:if(a=e.sent,!I(a)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.setState(Object(G.a)({},a.result.data.content));case 7:return e.next=9,L({headers:n.props.user.headers,id:t});case 9:if(r=e.sent,!I(a)){e.next=12;break}return e.abrupt("return");case 12:if(console.log(r),!r.result){e.next=18;break}return e.next=16,n.setState({submissions:r.result.data.content},(function(){console.log(n.state.submissions)}));case 16:e.next=20;break;case 18:return e.next=20,n.setState({submissions:[]},(function(){console.log(n.state.submissions)}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onDivClick=function(e){n.onPageRender(n.state.children[e]),n.props.history.push("/contest/".concat(n.state.children[e]))},n.state={code:"",name:"",startDate:"",endDate:"",isParent:!1,children:[],bannerFile:"",freezingTime:0,announcements:"",problemsList:[],submissions:[]},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#e9ecef",height:"100vh",width:"100vw"}},r.a.createElement(ae,{onDivClick:this.onDivClick,details:this.state,history:this.props.history,isParent:this.state.isParent}))}}]),a}(r.a.Component),re=a(126),se=a.n(re),ce=a(53),oe=a.n(ce),le=a(127),ie=a.n(le);a(317);var ue=function(e){var t=Object(G.a)({},e,{plugins:[ie.a],renderers:Object(G.a)({},e.renderers,{math:function(e){return r.a.createElement(oe.a.Node,{formula:e.value})},inlineMath:function(e){return r.a.createElement(oe.a.Node,{inline:!0,formula:e.value})}})});return console.log(e.value),r.a.createElement(oe.a.Provider,{className:"for_fontsize",style:{fontSize:"15px"},input:"latex"},r.a.createElement(se.a,Object.assign({className:"for_fontsize",style:{fontSize:"15px"},escapeHtml:!1},t)))},pe=(a(119),a(319),a(333)),de=a(332),me=(a(320),function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.bodydata,console.log(n),e.prev=2,e.next=5,v.post("/ide/run",Object(G.a)({},n),{headers:Object(G.a)({},a,{Accept:"application/json","Content-Type":"application/json"})});case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()),he=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=t.id,e.prev=1,e.next=4,v.get("/ide/status?link=".concat(n),{headers:Object(G.a)({},a,{Accept:"application/json"})});case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(t);case 2:if(n=e.sent,console.log(n),n){e.next=6;break}return e.abrupt("return",null);case 6:if(n.result.data.output||n.result.data.cmpinfo){e.next=16;break}return e.next=9,be(a);case 9:return e.next=11,he(t);case 11:if(n=e.sent){e.next=14;break}return e.abrupt("return",null);case 14:e.next=6;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;return new Promise((function(t){console.log("waiting ".concat(e," ms...")),setTimeout(t,e)}))}var ve=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).setShow=function(e){n.setState({show:e,langs:n.props.langs})},n.handleSelectChange=function(e){n.setState({language:e.target.value})},n.handleCodeChange=function(e){n.setState({code:e.target.value})},n.handleInputChange=function(e){n.setState({input:e.target.value},(function(){}))},n.handleRunCode=Object(i.a)(l.a.mark((function e(){var t,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({output:""}),"Language"!==(t={sourceCode:n.state.code,language:n.state.language,input:n.state.input}).language&&""!=t.language){e.next=5;break}return alert("Select language"),e.abrupt("return");case 5:if(t.sourceCode){e.next=8;break}return alert("Enter code"),e.abrupt("return");case 8:return e.next=10,n.setState({isLoading:!0});case 10:return e.next=12,me({headers:n.props.headers,bodydata:t});case 12:if(a=e.sent){e.next=17;break}return alert("Error Occurred! Try Submitting Again."),n.setState({isLoading:!1}),e.abrupt("return");case 17:return console.log({result:a}),r=a.result.data,e.next=21,fe({headers:n.props.headers,id:r.link});case 21:if(s=e.sent){e.next=28;break}return alert("Error Occurred! Try Submitting Again."),n.setState({isLoading:!1}),e.abrupt("return");case 28:n.setState({output:s.result.data.output,cmpinfo:s.result.data.cmpinfo,isLoading:!1}),console.log(s.result.data.output);case 30:case"end":return e.stop()}}),e)}))),n.state={show:!1,langs:[],code:"",input:"",output:"",language:"",cmpinfo:"",isLoading:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state.show,a=function(){return e.setShow(!1)};return r.a.createElement("div",null,r.a.createElement(S.a,{variant:"secondary",onClick:function(){return e.setShow(!0)}},"Test/Submit"),r.a.createElement(pe.a,{show:t,onHide:a,animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(pe.a.Header,{closeButton:!0},r.a.createElement(pe.a.Title,{id:"contained-modal-title-vcenter"},r.a.createElement(N.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(N.a.Control,{onChange:this.handleSelectChange,style:{padding:"0"},as:"select"},r.a.createElement("option",null,"Language"),this.state.langs.map((function(e){return r.a.createElement("option",null,e)})))))),r.a.createElement(pe.a.Body,null,r.a.createElement(N.a,null,r.a.createElement(N.a.Row,{className:"show-grid"},r.a.createElement($.a,null,r.a.createElement(N.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(N.a.Label,null,"Your Code"),r.a.createElement(N.a.Control,{onChange:this.handleCodeChange,style:{height:"298px"},as:"textarea",xs:6}))),r.a.createElement($.a,null,r.a.createElement(N.a.Row,{className:"center"},r.a.createElement(N.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(N.a.Label,null,"Input"),r.a.createElement(N.a.Control,{onChange:this.handleInputChange,style:{height:"125px"},xs:6,as:"textarea"}))),r.a.createElement(N.a.Row,{className:"show-grid"},r.a.createElement(N.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(N.a.Label,null,"Output"),r.a.createElement(N.a.Control,{value:this.state.output+this.state.cmpinfo,style:{height:"125px"},xs:6,as:"textarea"}))))))),r.a.createElement(pe.a.Footer,null,r.a.createElement(S.a,{variant:"secondary",onClick:this.handleRunCode},this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Loading...")):"Run"),r.a.createElement(S.a,{variant:"primary",onClick:a},"Submit"))))}}]),a}(n.Component),Ee=(a(321),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z({id:n.props.match.params.id,pid:n.props.match.params.problemid,headers:n.props.user.headers});case 2:if(t=e.sent,!I(t)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,R({id:n.props.match.params.id,pid:n.props.match.params.problemid,headers:n.props.user.headers});case 7:if(a=e.sent,!I(a)){e.next=10;break}return e.abrupt("return");case 10:return console.log(t.result.data.content),e.next=13,n.setState(Object(G.a)({},t.result.data.content,{submissions:a.result.data.content}));case 13:return e.next=15,n.setState({body:n.state.body.replace(/###/gi,"\n###").replace(/`/gi,"")});case 15:case"end":return e.stop()}}),e)}))),n.state={submissions:[]},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#e9ecef"}},r.a.createElement(Y.a,null,r.a.createElement(W.a,{style:{}},r.a.createElement($.a,{xs:!0,lg:{span:7,offset:1}},r.a.createElement(J.a,{style:{width:"1"}},r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,this.state.problemName),r.a.createElement(J.a.Subtitle,{className:"mb-2 text-muted"},this.state.problemCode),r.a.createElement("div",{className:"statement_wrapper",style:{fontSize:"15px"}},r.a.createElement(ue,{source:this.state.body})),r.a.createElement(ve,{headers:this.props.user.headers,langs:this.state.languagesSupported})))),r.a.createElement($.a,{xs:!0,lg:3},r.a.createElement(te,{details:this.state})))))}}]),a}(n.Component)),ge=(a(322),a(130)),xe=a(131),ye=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.authUser()},n.authUser=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:(t=e.sent)&&t.headers?n.setState({user:t,renderlogin:!1}):n.setState({user:void 0});case 4:case"end":return e.stop()}}),e)}))),n.state={user:void 0,renderlogin:!0},n}return Object(p.a)(a,[{key:"render",value:function(){var e,t=this,a=!!this.state.user;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{position:"fixed",left:"0",top:"0",fontSize:"30px",display:"flex",width:"150px",justifyContent:"space-around"}},r.a.createElement(h.b,{style:{color:"#333333"},to:"/home"}," ",r.a.createElement(ge.a,null)),r.a.createElement(h.b,{style:{color:"#333333"},to:"/login"},r.a.createElement(xe.a,null),r.a.createElement("span",{style:{fontSize:"18px"}},"Login")," ")),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/home",exact:!0,render:function(e){return a?r.a.createElement(B,Object.assign({},e,{user:t.state.user})):r.a.createElement(w,e)}}),";",r.a.createElement(f.a,{path:"/login",exact:!0,component:w}),";",a?null:r.a.createElement(f.a,{path:"/auth",exact:!0,component:(e={authUser:this.authUser,state:this.state},function(t){return r.a.createElement(H,Object.assign({data:e},t))})}),r.a.createElement(f.a,{path:"/contest/:id",render:function(e){return a?r.a.createElement(ne,Object.assign({},e,{user:t.state.user})):r.a.createElement(w,e)}}),r.a.createElement(f.a,{path:"/problem/:id/:problemid",render:function(e){return a?r.a.createElement(Ee,Object.assign({},e,{user:t.state.user})):r.a.createElement(w,e)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.27026c4c.chunk.js.map