(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/covid-numbers/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"container"}},[e._m(0),a("HomeForm"),a("div",{attrs:{id:"main"}},[a("TotalCases"),a("Country")],1),a("Graph")],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand"},[a("h1",[e._v("COVID NUMBERS")])])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("form",[a("div",{staticClass:"form-container"},[a("label",[e._v("Country")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedOption=t.target.multiple?a:a[0]}}},[e.options?a("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Pick a country!")]):a("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Please wait...")]),e._l(e.options,(function(t){return a("option",[e._v(e._s(t.Country))])}))],2),a("button",{staticClass:"slug-button",attrs:{disabled:e.isNull},on:{click:e.sendSlug}},[e._v("Show "+e._s(e.selectedOption))])]),a("p",[e._v(e._s(e.date))]),e.error?a("p",{staticClass:"error"},[a("em",[e._v(e._s(e.error))])]):e._e(),e.isLoading?a("p",{staticClass:"loading"},[a("em",[e._v("Please wait...")])]):e._e()])])},c=[],i=a("5530"),l=(a("7db0"),a("1276"),a("ac1f"),a("2f62")),u={name:"Form",data:function(){return{selectedOption:"",date:"",isLoading:!1,error:""}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["options"])),{},{isNull:function(){return!this.selectedOption}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["fetchOptions","fetchCountyData","fetchGraphCountry"])),{},{sendSlug:function(e){var t=this;e.preventDefault();var a=this.options.find((function(e){return e.Country==t.selectedOption})),n=a.Slug;this.isLoading=!0,this.error="",this.fetchCountyData(n).then((function(){t.fetchGraphCountry(n),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.error="No confirmed cases for ".concat(t.selectedOption,"!")}))},getDate:function(){var e=(new Date).toLocaleString().split(" ")[0];this.date=e}}),created:function(){this.fetchOptions(),this.getDate()}},d=u,p=a("2877"),f=Object(p["a"])(d,s,c,!1,null,"642c8a7e",null),m=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"global card"},[a("h1",{staticClass:"card-header"},[e._v("All over the World")]),e._m(0),a("ul",{staticClass:"gl numbers-list"},[a("li",[e._v("New Confirmed "),a("span",[e._v(e._s(e.totalCases.NewConfirmed.toLocaleString()))])]),a("li",[e._v("New Deaths "),a("span",[e._v(e._s(e.totalCases.NewDeaths.toLocaleString()))])]),a("li",[e._v("New Recovered "),a("span",[e._v(e._s(e.totalCases.NewRecovered.toLocaleString()))])]),a("li",[e._v("Total Confirmed "),a("span",[e._v(e._s(e.totalCases.TotalConfirmed.toLocaleString()))])]),a("li",[e._v("Total Deaths "),a("span",[e._v(e._s(e.totalCases.TotalDeaths.toLocaleString()))])]),a("li",[e._v("Total Recovered "),a("span",[e._v(e._s(e.totalCases.TotalRecovered.toLocaleString()))])])])])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("em",[e._v("Updated Daily")])])}],_={name:"Global",computed:Object(i["a"])({},Object(l["c"])(["totalCases"])),methods:Object(i["a"])({},Object(l["b"])(["fetchTotalCases"])),created:function(){this.fetchTotalCases()}},y=_,C=Object(p["a"])(y,v,h,!1,null,"d5eed4ee",null),b=C.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[e.countryCases.Confirmed?a("div",{staticClass:"country card"},[a("h1",{staticClass:"card-header"},[e._v("Numbers for "+e._s(e.countryCases.Country))]),e._m(0),a("ul",{staticClass:"country numbers-list"},[a("li",[e._v("New Confirmed "),a("span",[e._v(e._s(e.countryCases.NewConfirmed.toLocaleString()))])]),a("li",[e._v("New Deaths "),a("span",[e._v(e._s(e.countryCases.NewDeaths.toLocaleString()))])]),a("li",[e._v("New Recovered "),a("span",[e._v(e._s(e.countryCases.NewRecovered.toLocaleString()))])]),a("li",[e._v("Total Confirmed "),a("span",[e._v(e._s(e.countryCases.Confirmed.toLocaleString()))])]),a("li",[e._v("Total Deaths "),a("span",[e._v(e._s(e.countryCases.Deaths.toLocaleString()))])]),a("li",[e._v("Total Recovered "),a("span",[e._v(e._s(e.countryCases.Recovered.toLocaleString()))])])])]):a("div",{staticClass:"country else"},[a("h1",[e._v("Pick a country to see the last covid numbers!")])])])},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("em",[e._v("Updated Daily")])])}],O={name:"Country",computed:Object(i["a"])({},Object(l["c"])(["countryCases"]))},w=O,T=Object(p["a"])(w,g,D,!1,null,"bcd15320",null),S=T.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.graphTotalData&&e.graphDailyData?a("div",{staticClass:"graph"},[a("button",{on:{click:e.switchGraphs}},[e._v(">")]),a("transition",{attrs:{name:"slide-fade"}},[e.totalGraph?a("Plotly",{attrs:{data:e.graphTotalData,layout:e.layout,"display-mode-bar":!1}}):e._e()],1),a("transition",{attrs:{name:"slide-fade"}},[e.totalGraph?e._e():a("Plotly",{attrs:{data:e.graphDailyData,layout:e.dailyLayout,"display-mode-bar":!1}})],1)],1):e._e()},R=[],E=a("04d1"),N={computed:Object(i["a"])({},Object(l["c"])(["graphTotalData","graphDailyData"])),components:{Plotly:E["Plotly"]},methods:{switchGraphs:function(){this.totalGraph=!this.totalGraph}},data:function(){return{totalGraph:!0,layout:{title:"Covid Numbers Since Dayone (cumulative)"},dailyLayout:{title:"Covid Numbers For Last 90 Days (day by day)"}}}},L=N,x=Object(p["a"])(L,j,R,!1,null,"e18d30d6",null),A=x.exports,P={name:"Home",components:{HomeForm:m,TotalCases:b,Country:S,Graph:A}},G=P,F=(a("034f"),Object(p["a"])(G,r,o,!1,null,null,null)),k=F.exports,I=a("1da1"),$=(a("fb6a"),a("13d5"),a("d81d"),a("96cf"),a("bc3a")),U=a.n($),H=U.a.create({baseURL:"https://api.covid19api.com",headers:{Token:"5cf9dfd5-3449-485e-b5ae-70a60e997864"}});n["a"].use(l["a"]);var M=new l["a"].Store({state:{options:{},totalCases:{},countryCases:{},graphTotalData:null,graphDailyData:null},mutations:{SET_OPTIONS:function(e,t){e.options=t},SET_TOTAL_CASES:function(e,t){e.totalCases=t},SET_LIVE_CASES:function(e,t){e.countryCases=t},SET_CUMULATIVE_GRAPH_DATA:function(e,t){e.graphTotalData=t},SET_DAILY_GRAPH_DATA:function(e,t){e.graphDailyData=t}},actions:{fetchTotalCases:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,H.get("/summary");case 3:n=t.sent,a("SET_TOTAL_CASES",n.data.Global);case 5:case"end":return t.stop()}}),t)})))()},fetchOptions:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,H.get("/countries");case 3:n=t.sent,r=n.data.sort((function(e,t){return e.Country>t.Country?1:-1})),a("SET_OPTIONS",r);case 6:case"end":return t.stop()}}),t)})))()},fetchCountyData:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,H.get("/total/country/".concat(t));case 3:r=a.sent,o=r.data.slice(-2),s=o.reduce((function(e,t){var a={NewConfirmed:t.Confirmed-e.Confirmed,NewDeaths:t.Deaths-e.Deaths,NewRecovered:t.Recovered-e.Recovered};return a})),c=Object(i["a"])(Object(i["a"])({},s),o[1]),n("SET_LIVE_CASES",c);case 8:case"end":return a.stop()}}),a)})))()},fetchGraphCountry:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,c,i,l,u,d,p,f,m,v,h,_,y,C,b,g,D,O,w;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,H.get("/total/country/".concat(t));case 3:for(r=a.sent,o=r.data.map((function(e){return e.Date.split("T")[0]})),s=r.data.map((function(e){return e.Confirmed})),c=r.data.map((function(e){return e.Deaths})),i=r.data.map((function(e){return e.Recovered})),l={type:"scatter",mode:"lines",name:"Confirmed",x:o,y:s,line:{color:"#17BECF"}},u={type:"scatter",mode:"lines",name:"Deaths",x:o,y:c,line:{color:"#7F7F7F"}},d={type:"scatter",mode:"lines",name:"Recover",x:o,y:i,line:{color:"#F7EA00"}},p=[l,d,u],f=[],m=0;m<180;m++)v=r.data.slice(-2),h=v.reduce((function(e,t){var a={NewConfirmed:t.Confirmed-e.Confirmed,NewDeaths:t.Deaths-e.Deaths,NewRecovered:t.Recovered-e.Recovered,Date:t.Date};return a})),f.push(h),r.data.pop(),m++;_=f.map((function(e){return e.Date.split("T")[0]})),y=f.map((function(e){return e.NewConfirmed})),C=f.map((function(e){return e.NewDeaths})),b=f.map((function(e){return e.NewRecovered})),g={type:"scatter",mode:"lines",name:"Confirmed",x:_,y:y,line:{color:"#17BECF"}},D={type:"scatter",mode:"lines",name:"Deaths",x:_,y:C,line:{color:"#7F7F7F"}},O={type:"scatter",mode:"lines",name:"Recover",x:_,y:b,line:{color:"#F7EA00"}},w=[g,O,D],n("SET_CUMULATIVE_GRAPH_DATA",p),n("SET_DAILY_GRAPH_DATA",w);case 24:case"end":return a.stop()}}),a)})))()}}});n["a"].config.productionTip=!1,new n["a"]({store:M,render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.ad54deac.js.map