(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(e,s,a){e.exports={messages:"Messages_messages__1yGBl",users__list:"Messages_users__list__x5azK",textOfMessages:"Messages_textOfMessages__fROQb",textarea:"Messages_textarea__1JFpH",sendButton:"Messages_sendButton__9pAft",messagesuser__item:"Messages_messagesuser__item__1LInE",user__content:"Messages_user__content__qJSz3",user__info:"Messages_user__info__2Aora",user__avatar:"Messages_user__avatar__2GRTn",user__name:"Messages_user__name__3Qadg",dialog__name:"Messages_dialog__name__SizCm"}},296:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),_=a(290),r=a.n(_),g=a(127),l=a(128),u=a(89),m=a(19),c=Object(u.b)(3),o=Object(u.a)(30),i=Object(l.a)({form:"addNewMessage"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(g.a,{name:"newMessage",component:m.b,type:"text",className:r.a.textarea,placeholder:"Enter your message",validate:[c,o]}),n.a.createElement("button",null,"Send message"))})),d=a(24),M=a(11),b=a(31),f=a(64),p=a(34),E=a(7),h=n.a.memo((function(e){var s=Object(b.f)().userId;Object(t.useEffect)((function(){e.getMessagesWithUserThunkCreator(s)}),[s]);return e.messages?n.a.createElement("div",{className:r.a.current__dialog__block},n.a.createElement("p",{className:r.a.dialog__name},"Dialog with id ",s," "),n.a.createElement("div",null,e.changingMessagesFlag?n.a.createElement(p.a,null):e.messages.map((function(e){return n.a.createElement("div",null,n.a.createElement("p",null,e.senderName,":",e.body))}))),n.a.createElement("div",null,n.a.createElement(i,{onSubmit:function(a){e.sendNewMessageToUser(s,a.newMessage),e.reset("addNewMessage")}}))):n.a.createElement(p.a,null)}));s.default=Object(E.d)(Object(M.b)((function(e){return{messages:e.dialogs.currentMessages,changingMessagesFlag:e.dialogs.changingMessages}}),{reset:d.a,sendNewMessageToUser:f.d,getMessagesWithUserThunkCreator:f.b}))(h)}}]);
//# sourceMappingURL=3.960832d3.chunk.js.map