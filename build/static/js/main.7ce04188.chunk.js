(this["webpackJsonptv-control"]=this["webpackJsonptv-control"]||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),i=n(12),l=(n(26),n(7)),u=n(8),s=n(9),m=n(11),h=n(10),p=(n(27),n(1)),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={connect:!1},a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(u.a)(n,[{key:"handleSubmit",value:function(){this.setState({connect:!0})}},{key:"successConnect",value:function(){if(this.state.connect)return c.a.createElement(i.b,{to:"/control-center"},c.a.createElement("button",{variant:"outlined"},"\u8fdb\u5165"))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"casparcg"},"cg\u670d\u52a1\u5668"),c.a.createElement("input",{type:"text",name:"casparcg",id:"casparcg"}),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"casparcg"},"atem"),c.a.createElement("input",{type:"text",name:"casparcg",id:"casparcg"}),c.a.createElement("input",{type:"submit",value:"\u8fde\u63a5",onClick:this.handleSubmit}),this.successConnect())}}]),n}(c.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"123123131")}}]),n}(c.a.Component),v=function(){return c.a.createElement(p.c,null," ",c.a.createElement(p.a,{exact:!0,path:"/",component:b}),c.a.createElement(p.a,{exact:!0,path:"/control-center",component:f}))},d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={callBack:""},a.testAPi=a.testAPi.bind(Object(s.a)(a)),a}return Object(u.a)(n,[{key:"testAPi",value:function(){var e=this;fetch("http://192.168.10.227:3000/api/cg/connect",{method:"get"}).then((function(e){if(e.ok)return e.text()})).then((function(t){return e.setState({callBack:t})}))}},{key:"render",value:function(){return c.a.createElement(v,null)}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7ce04188.chunk.js.map