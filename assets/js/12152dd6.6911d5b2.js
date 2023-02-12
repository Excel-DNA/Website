"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[3245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"Excel-DNA 0.33 Release Candidate and License Change",date:"2015-08-03 00:50:00 -0000",authors:"govert"},o=void 0,i={permalink:"/Website/blog/2015/08/03/excel-dna-0-33-release-candidate-and-license-change",source:"@site/blog/2015-08-03-excel-dna-0-33-release-candidate-and-license-change.md",title:"Excel-DNA 0.33 Release Candidate and License Change",description:"Version 0.33 Release Candidate",date:"2015-08-03T00:50:00.000Z",formattedDate:"August 3, 2015",tags:[],readingTime:2.385,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel-DNA 0.33 Release Candidate and License Change",date:"2015-08-03 00:50:00 -0000",authors:"govert"},prevItem:{title:"Excel-DNA version 0.33.8-rc2 available",permalink:"/Website/blog/2015/09/03/excel-dna-version-0-33-8-rc2-available"},nextItem:{title:"Excel-DNA 0.32 Released",permalink:"/Website/blog/2014/05/04/excel-dna-0-32-released"}},s={authorsImageUrls:[void 0]},c=[{value:"Version 0.33 Release Candidate",id:"version-033-release-candidate",level:2},{value:"License Change",id:"license-change",level:2},{value:"NuGet Packages",id:"nuget-packages",level:2},{value:"GitHub",id:"github",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"version-033-release-candidate"},"Version 0.33 Release Candidate"),(0,r.kt)("p",null,"Excel-DNA 0.33 contains a number of bug fixes and improvements, including a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/wiki/Diagnostic-Logging"},"diagnostic logging")," approach based on the .NET Trace classes. More details can be found in the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/Distribution/ChangeLog.txt"},"ChangeLog"),"."),(0,r.kt)("p",null,"This version will also be the foundation for a first release of the custom Registration extension and the ongoing work towards on-sheet IntelliSense for user-defined functions."),(0,r.kt)("p",null,"A release candidate for the new version is available"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"as a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Excel-DNA/ExcelDna/releases/tag/v0.33.7-rc1"},"GitHub release"),";"),(0,r.kt)("li",{parentName:"ul"},"as a ",(0,r.kt)("a",{parentName:"li",href:"https://exceldna.codeplex.com/releases/view/616591"},"CodePlex download"),";"),(0,r.kt)("li",{parentName:"ul"},"and in the (pre-release) ",(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/ExcelDna.AddIn/"},"ExcelDna.AddIn NuGet package"),".")),(0,r.kt)("p",null,"Please help me test that the new version works correctly in the many different ways, Excel and Windows versions, and languages where Excel-DNA add-ins run."),(0,r.kt)("p",null,"If you run into any unexpected behavior bugs or regressions, please post to the ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/exceldna"},"Google group")," or contact me directly."),(0,r.kt)("p",null,"Also, if you are able to confirm that the new version works in a particular setting, please post that too. Details about what functionality you've tested and what operating environment (including .NET and Excel version) you are running with, would help me a lot."),(0,r.kt)("h2",{id:"license-change"},"License Change"),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"For the Excel-DNA project, I've changed to the standard ",(0,r.kt)("a",{parentName:"del",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/LICENSE.txt"},"MIT license"),". This has become the most common open-source license aligned with my intention of making Excel-DNA free for all use, including commercial use"),". ",(0,r.kt)("strong",{parentName:"p"},"UPDATE 2015-09-03"),": Excel-DNA is (again) licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/LICENSE.txt"},"zlib license"),". More details ",(0,r.kt)("a",{parentName:"p",href:"/2015/09/03/excel-dna-version-0-33-8-rc2-available/"},"here"),"."),(0,r.kt)("p",null,"If you have any concerns with this change, please let me know."),(0,r.kt)("h2",{id:"nuget-packages"},"NuGet Packages"),(0,r.kt)("p",null,"With this version, I am re-aligning the Excel-DNA package names on NuGet with the assembly names and standard naming conventions. The main packages for this release will be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.nuget.org/packages/ExcelDna.AddIn/"},"ExcelDna.AddIn"))," - Includes the ",(0,r.kt)("inlineCode",{parentName:"p"},".xll"),' and creates a complete add-in when installed into a Class Library project. This is update of the "Excel-DNA" package.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.nuget.org/packages/ExcelDna.Integration/"},"ExcelDna.Integration")),' - Contains only the integration reference library, suitable for referencing in third-party libraries that are intended to be used in Excel-DNA add-ins. An update of the "Excel-DNA.Lib" package.'))),(0,r.kt)("p",null,"The old packages will be updated to refer to the new ones as dependencies, which should allow package updates to work correctly."),(0,r.kt)("h2",{id:"github"},"GitHub"),(0,r.kt)("p",null,"The Excel-DNA project is (slowly) moving to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA"},"GitHub"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The core library project can be found at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Excel-DNA/ExcelDna/"},"https://github.com/Excel-DNA/ExcelDna"),", where the latest source versions are hosted."),(0,r.kt)("li",{parentName:"ul"},"The best documentation and links to related projects and other source is still found on the old ",(0,r.kt)("a",{parentName:"li",href:"https://exceldna.codeplex.com"},"CodePlex site"),"."),(0,r.kt)("li",{parentName:"ul"},"For general questions and discussion about Excel-DNA, please continue use the ",(0,r.kt)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/exceldna"},"Excel-DNA Google group"),"."),(0,r.kt)("li",{parentName:"ul"},"Specific issues, bug reports and feature requests can be added to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Excel-DNA/ExcelDna/issues/"},"GitHub Issues")," list."),(0,r.kt)("li",{parentName:"ul"},"For a permanent bookmark to the project, please use the Excel-DNA home page at ",(0,r.kt)("a",{parentName:"li",href:"/"},"http://excel-dna.net"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Thank you for your continued support of Excel-DNA!"))}u.isMDXComponent=!0}}]);