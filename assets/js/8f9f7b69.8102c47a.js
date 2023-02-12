"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[1436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Offloading UDF computations to a Windows HPC cluster from Excel 2010",date:"2010-12-09 21:02:00 -0000",authors:"govert",tags:["features",".net","excel","exceldna","hpc","xll"]},l=void 0,i={permalink:"/Website/blog/2010/12/09/cluster-udf-support",source:"@site/blog/2010-12-09-cluster-udf-support.md",title:"Offloading UDF computations to a Windows HPC cluster from Excel 2010",description:"Excel 2010 introduced support for offloading UDF computations to a compute cluster. The Excel blog talks about it http http://technet.microsoft.com/en-us/library/ff877825(WS.10).aspx.",date:"2010-12-09T21:02:00.000Z",formattedDate:"December 9, 2010",tags:[{label:"features",permalink:"/Website/blog/tags/features"},{label:".net",permalink:"/Website/blog/tags/net"},{label:"excel",permalink:"/Website/blog/tags/excel"},{label:"exceldna",permalink:"/Website/blog/tags/exceldna"},{label:"hpc",permalink:"/Website/blog/tags/hpc"},{label:"xll",permalink:"/Website/blog/tags/xll"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Offloading UDF computations to a Windows HPC cluster from Excel 2010",date:"2010-12-09 21:02:00 -0000",authors:"govert",tags:["features",".net","excel","exceldna","hpc","xll"]},prevItem:{title:"Resizing Excel UDF result arrays",permalink:"/Website/blog/2011/01/30/resizing-excel-udf-result-arrays"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Excel 2010 introduced support for offloading UDF computations to a compute cluster. The Excel blog talks about it ",(0,a.kt)("a",{parentName:"p",href:"http://blogs.msdn.com/b/excel/archive/2010/02/12/offloading-udf-s-to-a-windows-hpc-cluster.aspx"},"http://blogs.msdn.com/b/excel/archive/2010/02/12/offloading-udf-s-to-a-windows-hpc-cluster.aspx"),", and there are some nice pictures on this TechNet article: ",(0,a.kt)("a",{parentName:"p",href:"http://technet.microsoft.com/en-us/library/ff877825(WS.10).aspx"},"http://technet.microsoft.com/en-us/library/ff877825(WS.10).aspx"),"."),(0,a.kt)("p",null,"Excel-DNA now supports marking functions as cluster-safe, and I have updated the loader to allow add-ins to work under the ",(0,a.kt)("inlineCode",{parentName:"p"},"XllContainer")," on the HPC nodes. There are some issues to be aware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The add-in does not create its own ",(0,a.kt)("inlineCode",{parentName:"li"},"AppDomain")," when running on the compute node. One consequence is that no custom ",(0,a.kt)("inlineCode",{parentName:"li"},".xll.config")," file is used; configuration entries need to be set in the ",(0,a.kt)("inlineCode",{parentName:"li"},"XllContainer")," configuration setup."),(0,a.kt)("li",{parentName:"ul"},"There are some limitations on the size of array data that can be passed to and from UDF calls - this limit is probably configurable in the WCF service."),(0,a.kt)("li",{parentName:"ul"},"Only the 32-bit host is currently supported.")),(0,a.kt)("p",null,"To test this you will need an Windows HPC Server 2008 R2 cluster with the HPC Services for Excel installed. On the clients you need Excel 2010 with the HPC cluster connector installed. The latest check-in for Excel-DNA with this support is on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna"},"https://github.com/Excel-DNA/ExcelDna"),"."),(0,a.kt)("p",null,"In the Microsoft HPC SDK there is a sample called ClusterUDF.xll with a few test functions. I have recreated these in C# in the samples file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/Distribution/Samples/ClusterSample.dna"},"Distribution\\Samples\\ClusterSample.dna")," Basically functions just need to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"IsClusterSafe=true")," to be pushed to the cluster for computation. For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExcelFunction(IsClusterSafe=true)]\npublic static int DnaCountPrimesC(int nFrom, int nTo)\n{\n    // ...\n}\n")),(0,a.kt)("p",null,"As usual, any feedback on this feature - questions or reports on whether you use it - will be most appreciated."))}p.isMDXComponent=!0}}]);