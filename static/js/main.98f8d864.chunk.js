(this["webpackJsonpskyscanner-api-website"]=this["webpackJsonpskyscanner-api-website"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=(n(11),n(12),n(0));var l=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})},j=n(4),u=n.n(j),o=n(6),d=n(2);n(15),n(16),n(17);var h=function(e){var t=e.flights.Carriers,n=e.flights.Currencies,c=e.flights.Places,r=e.flights.Quotes,a=e.flights.flightType;if(!c||!t||!n||!r)return null;for(var s=new Map,l=0;l<c.length;++l)s.set(c[l].PlaceId,c[l].CityName+" ("+c[l].IataCode+")");var j=new Map;for(l=0;l<t.length;++l)j.set(t[l].CarrierId,t[l].Name);return 0===r.length?Object(i.jsxs)("div",{className:"flights",children:[Object(i.jsx)("div",{className:"flightHeaders",children:Object(i.jsx)("p",{children:a})}),Object(i.jsxs)("table",{className:"flightTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[" ",Object(i.jsx)("th",{children:"No Result"})," "]})}),Object(i.jsx)("tbody",{})]})]}):Object(i.jsxs)("div",{className:"flights",children:[Object(i.jsx)("div",{className:"flightHeaders",children:Object(i.jsx)("p",{children:a})}),Object(i.jsxs)("table",{className:"flightTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Start City"}),Object(i.jsx)("th",{children:"End City"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Carrier"}),Object(i.jsx)("th",{children:"Price"})]})}),Object(i.jsx)("tbody",{children:r&&r.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:s.get(e.OutboundLeg.OriginId)}),Object(i.jsx)("td",{children:s.get(e.OutboundLeg.DestinationId)}),Object(i.jsx)("td",{children:e.OutboundLeg.DepartureDate.substring(0,10)}),Object(i.jsx)("td",{children:j.get(e.OutboundLeg.CarrierIds[0])}),Object(i.jsx)("td",{children:n[0].Symbol+e.MinPrice})]},e.QuoteId)}))})]})]})};var b=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),l=s[0],j=s[1],b=Object(c.useState)(""),O=Object(d.a)(b,2),p=O[0],g=O[1],x=Object(c.useState)(""),f=Object(d.a)(x,2),v=f[0],y=f[1],m=Object(c.useState)(""),S=Object(d.a)(m,2),C=S[0],k=S[1],D=Object(c.useState)(""),w=Object(d.a)(D,2),N=w[0],I=w[1],F=Object(c.useState)(""),P=Object(d.a)(F,2),T=P[0],q=P[1],M=Object(c.useState)(""),R=Object(d.a)(M,2),U=R[0],B=R[1],L=Object(c.useState)(""),E=Object(d.a)(L,2),Y=E[0],J=E[1],A=Object(c.useState)(!1),H=Object(d.a)(A,2),Q=H[0],G=H[1],V=Object(c.useState)(!1),W=Object(d.a)(V,2),X=W[0],_=W[1],z=new Date,K=(String(z.getDate()).padStart(2,"0"),String(z.getMonth()+1).padStart(2,"0")),Z=z.getFullYear();return z=Z+"-"+K,Object(i.jsxs)("div",{className:"flightInfo",children:[Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(o.a)(u.a.mark((function e(){var t,n,c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("fd70453b81mshcca11fb73ba70fep1c3bc4jsn772a03bf213d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},n=C,c=T,""!==N&&(n=n+"-"+N),""!==U&&(c=c+"-"+U),console.log(N),console.log(U),console.log(n),console.log(c),a="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/"+Y+"/en-US/"+p+"-sky/"+v+"-sky/"+n,e.next=12,fetch(a,t);case 12:return s=e.sent,e.next=15,s.json();case 15:return(s=e.sent).flightType="Departing Flights",r(s),a="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/"+Y+"/en-US/"+v+"-sky/"+p+"-sky/"+c,e.next=21,fetch(a,t);case 21:return s=e.sent,e.next=24,s.json();case 24:(s=e.sent).flightType="Returning Flights",j(s);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),G(!0),_(!0),g(""),y(""),k(""),I(""),q(""),B(""),J("")},children:[Object(i.jsx)("input",{id:"queryInput",placeholder:"Departure*",value:p,onChange:function(e){return g(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"queryInput",placeholder:"Destination*",value:v,onChange:function(e){return y(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"dateFormOne",type:"month",name:"depDate",min:z,value:C,onChange:function(e){return k(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"dayOne",placeholder:"Day",value:N,onChange:function(e){return I(e.target.value)}}),Object(i.jsx)("input",{id:"dateFormTwo",type:"month",name:"destDate",min:C,value:T,onChange:function(e){return q(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"dayTwo",placeholder:"Day",value:U,onChange:function(e){return B(e.target.value)}}),Object(i.jsxs)("select",{id:"currency",placeholder:"Currency",name:"currency",value:Y,onChange:function(e){return J(e.target.value)},required:!0,children:[Object(i.jsx)("option",{defaultValue:!0,value:"",children:" Currency* "}),Object(i.jsx)("option",{value:"USD",children:"US Dollar"}),Object(i.jsx)("option",{value:"CAD",children:"Canadian Dollar"}),Object(i.jsx)("option",{value:"GBP",children:"British Pound"}),Object(i.jsx)("option",{value:"CNY",children:"Chinese Yuan"}),Object(i.jsx)("option",{value:"EUR",children:"Euro"}),Object(i.jsx)("option",{value:"INR",children:"Indian Rupee"}),Object(i.jsx)("option",{value:"JPY",children:"Japanese Yen"}),Object(i.jsx)("option",{value:"MXN",children:"Mexican Peso"}),Object(i.jsx)("option",{value:"RUB",children:"Russian Ruble"})]}),Object(i.jsx)("button",{id:"submitButton",className:"search",children:"Search"})]}),Object(i.jsxs)("div",{className:"websiteInfo",children:[Object(i.jsx)("h3",{children:"Welcome to the Skyscanner Flight Checker"}),Object(i.jsxs)("p",{children:['Please enter the 3-letter airport codes along with the desired departure date, return date, and currency. The "Day" fields are not required. The best price will be indicated with ',Object(i.jsx)("span",{children:"golden"})," text."]}),Object(i.jsxs)("p",{children:["Don't know the airport codes? ",Object(i.jsx)("a",{rel:"noreferrer",href:"https://airportcod.es/#",target:"_blank",children:"Click Here"})]})]}),Q?Object(i.jsx)(h,{flights:n}):Object(i.jsx)(i.Fragment,{}),X?Object(i.jsx)(h,{flights:l}):Object(i.jsx)(i.Fragment,{})]})};n(18);var O=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})};n(19);var p=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{title:"Skyscanner Flight Checker"}),Object(i.jsx)(b,{}),Object(i.jsx)(O,{title:"Arjav Patel - 2021\nMade For: Capital One Summit Challenge"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.98f8d864.chunk.js.map