(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7392:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resell-nft",function(){return t(5910)}])},5910:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(4051),u=t.n(r),c=t(5893),i=t(7294),a=t(241),o=t(5553),s=t(6076),f=t(1163),l=t(9669),p=t.n(l),d=t(2484),h=t.n(d),w=t(1838),b=t(7577);function v(e,n,t,r,u,c,i){try{var a=e[c](i),o=a.value}catch(s){return void t(s)}a.done?n(o):Promise.resolve(o).then(r,u)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var c=e.apply(n,t);function i(e){v(c,r,u,i,a,"next",e)}function a(e){v(c,r,u,i,a,"throw",e)}i(void 0)}))}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}function y(){var e=(0,i.useState)({price:"",image:""}),n=e[0],t=e[1],r=(0,f.useRouter)(),l=r.query,d=l.id,v=l.tokenURI,g=n.image,y=n.price;function k(){return(k=m(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,p().get(v);case 4:n=e.sent,t((function(e){return x({},e,{image:n.data.image})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=m(u().mark((function e(){var t,c,i,f,l,p,v,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return t=new(h()),e.next=5,t.connect();case 5:return c=e.sent,i=new a.Q(c),f=i.getSigner(),l=o.vz(n.price,"ether"),p=new s.CH(w.I,b.Mt,f),e.next=12,p.getListingPrice();case 12:return v=(v=e.sent).toString(),e.next=16,p.resellToken(d,l,{value:v});case 16:return m=e.sent,e.next=19,m.wait();case 19:r.push("/");case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[d]),(0,c.jsxs)("div",{className:"flex justify-center",children:[(0,c.jsxs)("div",{className:"w-1/2 flex flex-col pb-12",children:[(0,c.jsx)("input",{placeholder:"Asset Price in Eth",className:"mt-2 border rounded p-4",onChange:function(e){return t(x({},n,{price:e.target.value}))}})," ",g&&(0,c.jsx)("img",{className:"rounded mt-4",width:"350",src:g})," ",(0,c.jsxs)("button",{onClick:function(){return _.apply(this,arguments)},className:"font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg",children:["List NFT"," "]})," "]})," "]})}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[277,583,669,726,774,888,179],(function(){return n=7392,e(e.s=n);var n}));var n=e.O();_N_E=n}]);