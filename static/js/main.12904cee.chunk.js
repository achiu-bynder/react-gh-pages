(window["webpackJsonpreact-gh-pages"]=window["webpackJsonpreact-gh-pages"]||[]).push([[0],{134:function(e,t,n){e.exports=n(277)},139:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(26),s=n.n(o),r=(n(139),n(84),n(114),n(22)),i=n(278),l=n(285),u=n(38),d=(n(160),window.Peer),f=window.p5;var b=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(null),b=Object(r.a)(s,2),p=b[0],j=b[1],O=Object(c.useState)(null),g=Object(r.a)(O,2),w=g[0],m=g[1],h=Object(c.useState)(null),v=Object(r.a)(h,2),E=v[0],S=v[1],k=Object(c.useState)(!1),R=Object(r.a)(k,2),N=R[0],y=R[1],A=Object(c.useState)(null),C=Object(r.a)(A,2),M=C[0],W=C[1],U=Object(c.useState)([]),B=Object(r.a)(U,2),D=B[0],I=(B[1],Object(c.useState)(null)),J=Object(r.a)(I,2);J[0],J[1],console.log("list",D),Object(c.useRef)(),Object(c.useRef)();var P=Object(c.useRef)();Object(c.useEffect)(function(){var e=new d({key:"lwjd5qra8257b9"});e.on("open",function(e){console.log("My peer ID is: "+e),o(e)}),e.on("connection",function(e){W(e)}),j(e),Object(u.toggleWidget)()},[]),Object(c.useEffect)(function(){var e=new f.SpeechRec("en-US",function(){e.resultString.split(" ").pop();M.send(e.resultString),q(e.resultString)});e.continuous=!0,e.interimResults=!0,e.start()},[M]),Object(c.useEffect)(function(){M&&M.on("open",function(){console.log("connected",M),y(!0),M.on("data",function(e){console.log("Received",e),Object(u.addResponseMessage)(e)})})},[M]),Object(c.useEffect)(function(){if(p){var e=p.connect(E);y(!0),W(e)}},[E]);var q=function(e){e.length>0&&Object(u.addUserMessage)(e)};return a.a.createElement("div",{ref:P,className:"App"},a.a.createElement("header",{className:"App-header"},w,N&&a.a.createElement(i.a,{onClick:function(){y(!1)}},"Disconnect"),!N&&a.a.createElement(l.a,{onChange:function(e){m(e.target.value)},action:a.a.createElement(i.a,{onClick:function(){S(w),q("send")}},"send"),placeholder:"Connect to peer"}),n,a.a.createElement(u.Widget,{handleNewUserMessage:function(e){M.send(e)}})))};window.Peer,window.p5;var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.12904cee.chunk.js.map