(this["webpackJsonpsimpsons-memory-game_d"]=this["webpackJsonpsimpsons-memory-game_d"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/1.webp?raw=true","clicked":false},{"id":2,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/2.webp?raw=true","clicked":false},{"id":3,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/3.webp?raw=true","clicked":false},{"id":4,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/4.webp?raw=true","clicked":false},{"id":5,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/5.webp?raw=true","clicked":false},{"id":6,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/6.webp?raw=true","clicked":false},{"id":7,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/7.webp?raw=true","clicked":false},{"id":8,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/8.webp?raw=true","clicked":false},{"id":9,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/9.webp?raw=true","clicked":false},{"id":10,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/10.webp?raw=true","clicked":false},{"id":11,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/11.webp?raw=true","clicked":false},{"id":12,"image":"https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/12.webp?raw=true","clicked":false}]')},,,,,,,,function(e,i,s){},function(e,i,s){},function(e,i,s){},function(e,i,s){},function(e,i,s){},function(e,i,s){},function(e,i,s){"use strict";s.r(i);var t=s(0),c=s(1),a=s(3),m=s.n(a),o=s(4),r=s(5),n=s(8),d=s(7);s(14);var l=function(e){return Object(t.jsx)("div",{onClick:function(){return e.setClicked(e.id)},className:"card",children:Object(t.jsx)("div",{className:"img-container",children:Object(t.jsx)("img",{alt:e.name,src:e.image})})})};s(15);var b=function(e){return Object(t.jsx)("div",{className:"wrapper",children:e.children})},u=(s(16),function(e){return Object(t.jsxs)("div",{className:"title",children:[Object(t.jsx)("h1",{children:Object(t.jsx)("img",{className:"simpsons",src:"/img/simpsonslogo.png",alt:"Simpsons"})}),"Score: ",Object(t.jsxs)("span",{className:"score",children:[e.correctGuesses," \xa0 \xa0| \xa0 \xa0"]}),"Top Score: ",Object(t.jsx)("span",{className:"score",children:e.bestScore})]})});s(17);var p=function(e){return Object(t.jsx)("div",{className:"foot",children:e.children})},g=s(6),h=(s(18),0),y=0,f="",j=function(e){Object(n.a)(s,e);var i=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return(e=i.call.apply(i,[this].concat(c))).state={matches:g,correctGuesses:h,bestScore:y,clickMessage:"Click on an image to earn points, but don't click on any more than once!!"},e.setClicked=function(i){var s=e.state.matches,t=s.filter((function(e){return e.id===i}));if(t[0].clicked){h=0,f="D'oh! You already clicked on this one. Better luck next time!!";for(var c=0;c<s.length;c++)s[c].clicked=!1;e.setState({clickMessage:f}),e.setState({correctGuesses:h}),e.setState({matches:s})}else if(h<11)t[0].clicked=!0,h++,f="Hi Diddly Ho Neighborino! Keep it up!!",h>y&&(y=h,e.setState({bestScore:y})),s.sort((function(e,i){return.5-Math.random()})),e.setState({matches:s}),e.setState({correctGuesses:h}),e.setState({clickMessage:f});else{t[0].clicked=!0,h=0,f="WOW!!! You got ALL of them!!! Now, let's see if you can do it again!",y=12,e.setState({bestScore:y});for(var a=0;a<s.length;a++)s[a].clicked=!1;s.sort((function(e,i){return.5-Math.random()})),e.setState({matches:s}),e.setState({correctGuesses:h}),e.setState({clickMessage:f})}},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return Object(t.jsxs)(b,{children:[Object(t.jsx)(u,{correctGuesses:this.state.correctGuesses,bestScore:this.state.bestScore}),this.state.matches.map((function(i){return Object(t.jsx)(l,{setClicked:e.setClicked,id:i.id,image:i.image},i.id)})),Object(t.jsx)(p,{children:this.state.clickMessage})]})}}]),s}(c.Component);s(19);m.a.render(Object(t.jsx)(j,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.70826ff5.chunk.js.map