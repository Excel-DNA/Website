"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[6904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Excel-DNA 0.32 Release Candidate",date:"2014-03-03 23:16:00 -0000",authors:"govert",tags:["exceldna","nuget"]},l=void 0,c={permalink:"/Website/blog/2014/03/03/excel-dna-0-32-release-candidate",source:"@site/blog/2014-03-03-excel-dna-0-32-release-candidate.md",title:"Excel-DNA 0.32 Release Candidate",description:"I have posted to CodePlex (https//www.nuget.org/packages/Excel-DNA/0.32.0-rc1) a release candidate of the next Excel-DNA version.",date:"2014-03-03T23:16:00.000Z",formattedDate:"March 3, 2014",tags:[{label:"exceldna",permalink:"/Website/blog/tags/exceldna"},{label:"nuget",permalink:"/Website/blog/tags/nuget"}],readingTime:1.31,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel-DNA 0.32 Release Candidate",date:"2014-03-03 23:16:00 -0000",authors:"govert",tags:["exceldna","nuget"]},prevItem:{title:"Tutorial: COM server support for VBA integration",permalink:"/Website/blog/2014/03/21/tutorial-com-server-support-for-vba-integration"},nextItem:{title:"Getting started with F# and Excel-DNA in finance",permalink:"/Website/blog/2013/11/14/getting-started-with-f-and-excel-dna-in-finance"}},i={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I have posted to CodePlex (",(0,a.kt)("a",{parentName:"p",href:"https://exceldna.codeplex.com/releases/view/119190"},"https://exceldna.codeplex.com/releases/view/119190"),") and the NuGet package manager (",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Excel-DNA/0.32.0-rc1"},"https://www.nuget.org/packages/Excel-DNA/0.32.0-rc1"),") a release candidate of the next Excel-DNA version."),(0,a.kt)("p",null,"I hope to make a final release in the next few weeks, once I've had confirmation that this version works well on the various platforms and Excel versions."),(0,a.kt)("p",null,"Please test, and let me know of any problems or surprises you run into, or confirm what features, platforms and Excel versions work correctly."),(0,a.kt)("p",null,"The CodePlex download is structured as before, and for the NuGet package manager, you can upgrade to the pre-release version with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PM> Upgrade-Package Excel-DNA -Pre\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Excel-DNA 0.32")," consolidates a large number of bug fixes and improvements that have accumulated over the last year. In particular, a number of edge cases that affect Excel-DNA add-ins under Excel 2013 have been addressed."),(0,a.kt)("p",null,"Native asynchronous functions, available under Excel 2010 and later, are now supported. Runtime registration of delegate functions and external retrieval of registration details will allow development of extension features without requiring changes to the Excel-DNA core runtime."),(0,a.kt)("p",null,"Excel-DNA 0.32 is compatible with version 0.30, and introduces no notable breaking changes. See the Distribution\\ChangeLog.txt file for a complete change list."),(0,a.kt)("p",null,"As always, I greatly appreciate any feedback on this version, and on Excel-DNA in general. Any comments or questions are welcome on the ",(0,a.kt)("a",{parentName:"p",href:"http://groups.google.com/group/exceldna"},"Google group")," or by contacting me directly."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"To ensure future development of Excel-DNA, please make a donation via PayPal or arrange for a corporate support agreement. See ",(0,a.kt)("a",{parentName:"em",href:"/support/"},"http://excel-dna.net/support/")," for details"),"."),(0,a.kt)("p",null,"Thank you for your continued support,\nGovert"))}u.isMDXComponent=!0}}]);