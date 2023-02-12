"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[2468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Streaming real-time data to Excel",date:"2013-10-07 23:13:00 -0000",authors:"govert",tags:["examples","excel","rtd","rx"]},l=void 0,i={permalink:"/Website/blog/2013/10/07/streaming-real-time-data-to-excel",source:"@site/blog/2013-10-07-streaming-real-time-data-to-excel.md",title:"Streaming real-time data to Excel",description:"Gert-Jan van der Kamp has posted a very nice end-to-end example on CodeProject, showing how to create a WCF service and Excel-DNA add-in to stream real-time data into Excel.",date:"2013-10-07T23:13:00.000Z",formattedDate:"October 7, 2013",tags:[{label:"examples",permalink:"/Website/blog/tags/examples"},{label:"excel",permalink:"/Website/blog/tags/excel"},{label:"rtd",permalink:"/Website/blog/tags/rtd"},{label:"rx",permalink:"/Website/blog/tags/rx"}],readingTime:.47,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Streaming real-time data to Excel",date:"2013-10-07 23:13:00 -0000",authors:"govert",tags:["examples","excel","rtd","rx"]},prevItem:{title:"Getting started with F# and Excel-DNA in finance",permalink:"/Website/blog/2013/11/14/getting-started-with-f-and-excel-dna-in-finance"},nextItem:{title:"F# and R in Excel",permalink:"/Website/blog/2013/08/05/f-and-r-in-excel"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gert-Jan van der Kamp has posted a very nice end-to-end example on ",(0,n.kt)("a",{parentName:"p",href:"http://www.codeproject.com/Articles/662009/Streaming-realtime-data-to-Excel"},"CodeProject"),", showing how to create a WCF service and Excel-DNA add-in to stream real-time data into Excel."),(0,n.kt)("p",null,"The example uses to use the Reactive Extensions support in Excel-DNA v. 0.30 to push the data to an Excel UDF (using Excel's RTD mechanism behind the scenes), together with a Duplex WCF service providing the data."),(0,n.kt)("p",null,"There was also this ",(0,n.kt)("a",{parentName:"p",href:"https://exceldna.codeplex.com/discussions/460904"},"CodePlex discussion")," about the Excel ThrottleInterval option, which trades off the real-time update frequency against stability of the Excel calculation."))}m.isMDXComponent=!0}}]);