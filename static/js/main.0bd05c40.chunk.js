(this["webpackJsonpcommerce-app"]=this["webpackJsonpcommerce-app"]||[]).push([[0],{21:function(e,c,t){},55:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(2),i=t.n(s),a=t(13),r=t.n(a),o=(t(21),t(15)),d=t(14),l=new(t.n(d).a)("pk_2226440c61104b1d7169a39335bed242ff540adcdfd78",!0),u=function(){var e=Object(s.useState)([]),c=Object(o.a)(e,2),t=c[0],i=c[1],a=/(<([^>]+)>)/gi;return Object(s.useEffect)((function(){l.products.list().then((function(e){i(e.data.map((function(e){return e})))}))}),[]),console.log("Commerce Product: ",t),Object(n.jsx)("section",{className:"product-list",children:t.map((function(e,c){return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)("div",{className:"product-image",children:Object(n.jsx)("img",{alt:e.name,srcSet:e.media.source,className:"img"})}),Object(n.jsxs)("div",{className:"product-detail",children:[Object(n.jsx)("h2",{className:"title",children:e.name}),Object(n.jsx)("p",{className:"description",children:e.description.replace(a,"")}),Object(n.jsx)("p",{className:"price",children:e.price.formatted_with_symbol}),Object(n.jsx)("section",{children:Object(n.jsx)("a",{href:e.checkout_url.display,className:"btn",children:"Avail This Service"})})]})]},c)}))})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),j()}},[[55,1,2]]]);
//# sourceMappingURL=main.0bd05c40.chunk.js.map