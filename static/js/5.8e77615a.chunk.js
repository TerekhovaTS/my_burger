(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[5],{108:function(e,r,n){e.exports={Order:"Order_Order__zP97W"}},112:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),i=n(15),u=n(108),c=n.n(u),o=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name,"(",e.amount,")")}));return a.a.createElement("div",{className:c.a.Order},a.a.createElement("p",null,"Ingredients: ",t),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",e.price)))},d=n(21),l=n(48),s=n(5),p=n(47);r.default=Object(i.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(s.i(r,n))}}}))(Object(l.a)((function(e){var r=e.onFetchOrders,n=e.token,i=e.userId;Object(t.useEffect)((function(){r(n,i)}),[r,n,i]);var u=a.a.createElement(p.a,null);return e.loading||(u=e.orders.map((function(e){return a.a.createElement(o,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,u)}),d.a))}}]);
//# sourceMappingURL=5.8e77615a.chunk.js.map