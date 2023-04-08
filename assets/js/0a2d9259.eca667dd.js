"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Excel VBA to VB.NET with Excel-DNA and NetOffice",date:"2012-01-30 13:29:00 -0000",authors:"govert",tags:["samples"]},i=void 0,l={permalink:"/blog/2012/01/30/excel-vba-to-vb-net-with-excel-dna-and-netoffice",source:"@site/blog/2012-01-30-excel-vba-to-vb-net-with-excel-dna-and-netoffice.md",title:"Excel VBA to VB.NET with Excel-DNA and NetOffice",description:"Excel-DNA is a great library to help ease the path from Excel VBA to VB.NET. Last year another part of the puzzle fell in place: I discovered NetOffice, a version-independent set of Office interop assemblies put together by Sebastian Lange. By referencing the NetOffice assemblies instead of the official Primary Interop Assemblies (PIA) for Office, an Excel-DNA add-in can target various Excel versions with a single add-in, and also ease distribution of the required interop assemblies, even packing them into the .xll add-in itself.",date:"2012-01-30T13:29:00.000Z",formattedDate:"January 30, 2012",tags:[{label:"samples",permalink:"/blog/tags/samples"}],readingTime:1.45,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel VBA to VB.NET with Excel-DNA and NetOffice",date:"2012-01-30 13:29:00 -0000",authors:"govert",tags:["samples"]},prevItem:{title:"Patrick O'Beirne's guide for Excel VBA to VB.NET migration",permalink:"/blog/2012/05/04/patrick-obeirnes-guide-on-excel-vba-to-vb-net-migration"},nextItem:{title:"Excel-DNA version 0.29 - RC available",permalink:"/blog/2011/05/16/excel-dna-version-0-29-rc-available"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Excel-DNA is a great library to help ease the path from Excel VBA to VB.NET. Last year another part of the puzzle fell in place: I discovered ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/netoffice"},"NetOffice"),", a version-independent set of Office interop assemblies put together by Sebastian Lange. By referencing the NetOffice assemblies instead of the official Primary Interop Assemblies (PIA) for Office, an Excel-DNA add-in can target various Excel versions with a single add-in, and also ease distribution of the required interop assemblies, even packing them into the ",(0,a.kt)("inlineCode",{parentName:"p"},".xll")," add-in itself."),(0,a.kt)("p",null,"To explore how Excel-DNA and NetOffice can combine to convert a VBA add-in to VB.NET, I picked a small add-in made by ",(0,a.kt)("a",{parentName:"p",href:"http://rwdvc.posterous.com"},"Robert del Vicario")," that does a risk analysis simulation inspired by the ",(0,a.kt)("a",{parentName:"p",href:"http://www.palisade.com/risk/"},"Pallisade @RISK")," add-in. I took ",(0,a.kt)("a",{parentName:"p",href:"http://rwdvc.posterous.com/riskgen-test"},"Robert's original RiskGen VBA add-in"),", and created a new Excel-DNA add-in in VB.NET (I used Visual Studio, but the free ",(0,a.kt)("a",{parentName:"p",href:"http://www.icsharpcode.net/OpenSource/SD/Download/#SharpDevelop4x"},"SharpDevelop")," IDE should work fine too). I documented the steps along the way of creating the VB.NET project, making an add-in based on Excel-DNA and using NetOffice to help port the VBA code to VB.NET. The resulting document (RiskGen Port Log.docx) outlining exactly how I ported the add-in, with the new VB.NET-based ",(0,a.kt)("a",{parentName:"p",href:"http://rwdvc.posterous.com/riskgen-in-vbnet"},"RiskGen.NET")," is also on Robert's site."),(0,a.kt)("p",null,"I'm also looking for some more examples of free/open source VBA add-ins to port to Excel-DNA. The best add-ins will contain a mix of user-defined functions and macros which use the Excel object model. Please post to the Google group or mail me directly if you have any suggestions."),(0,a.kt)("p",null,"And as always, if you need any support porting your Excel VBA add-ins to .NET using Excel-DNA, I'm happy to help on the ",(0,a.kt)("a",{parentName:"p",href:"http://groups.google.com/group/exceldna"},"Excel-DNA Google group"),"."))}f.isMDXComponent=!0}}]);