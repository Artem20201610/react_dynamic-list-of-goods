(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),s=n.n(a),c=n(1),i=n.n(c),u=n(3),l=n(6),d=n(7),f=n(9),m=n(8),g=n(2),p=n.n(g),h=(p.a.shape({id:p.a.number.isRequired,name:p.a.string.isRequired,color:p.a.string.isRequired}),function(e){var t=e.good;return r.a.createElement("span",{style:{color:t.color}},t.name)}),b=(n(18),function(e){var t=e.goods;return r.a.createElement("ul",{className:"list-goods"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{good:e}))})))}),v=function(e){var t=e.getAllGoods,n=e.get5FirstGoods,o=e.getRedGoods,a=e.classes;return r.a.createElement("form",{className:"field is-grouped is-grouped-centered"},r.a.createElement("button",{type:"button",className:a,onClick:t},"Load all goods"),r.a.createElement("button",{type:"button",className:a,onClick:n},"Load 5 first goods"),r.a.createElement("button",{type:"button",className:a,onClick:o},"Load red goods"))},y=(n(19),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function E(){return fetch(y).then((function(e){return e.json()})).then((function(e){return e}))}var G=function(){return fetch(y).then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)})),e.slice(0,5)}))},j=function(){return fetch(y).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"red"===e.color}))}))},k=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={goods:[],classes:"control button is-primary"},e.getAllGoods=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e.get5FirstGoods=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e.getRedGoods=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"content is-large header"},"Dynamic list of Goods"),r.a.createElement(b,{goods:this.state.goods}),r.a.createElement(v,{getAllGoods:this.getAllGoods,get5FirstGoods:this.get5FirstGoods,getRedGoods:this.getRedGoods,classes:this.state.classes}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5638db5a.chunk.js.map