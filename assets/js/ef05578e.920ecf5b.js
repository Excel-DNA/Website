"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[6559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),N=l,d=c["".concat(p,".").concat(N)]||c[N]||k[N]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3322:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={layout:"page",title:"Excel-DNA Reference: Data type marshaling"},r=void 0,o={type:"mdx",permalink:"/reference-data-type-marshalling",source:"@site/src/pages/reference-data-type-marshalling.md",title:"Excel-DNA Reference: Data type marshaling",description:"The allowed function parameter and return types are:",frontMatter:{layout:"page",title:"Excel-DNA Reference: Data type marshaling"}},p=[{value:"Special return values",id:"special-return-values",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The allowed function parameter and return types are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," -- returns a double to Excel (maybe string is better to return?)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double[]")," -- if only one column is passed in, takes that column, else first row is taken"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double[,]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[]")," -- if only one column is passed in, takes that column, else first row is taken"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[,]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Boolean")," (",(0,l.kt)("inlineCode",{parentName:"li"},"bool"),") -- returns an Excel ",(0,l.kt)("inlineCode",{parentName:"li"},"bool")," (maybe string is better to return to Excel?)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int32")," (",(0,l.kt)("inlineCode",{parentName:"li"},"int"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int16")," (",(0,l.kt)("inlineCode",{parentName:"li"},"short"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt16")," (",(0,l.kt)("inlineCode",{parentName:"li"},"ushort"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Decimal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int64")," (",(0,l.kt)("inlineCode",{parentName:"li"},"long"),")")),(0,l.kt)("p",null,"incoming function parameters of type Object will only arrive as one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelMissing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelEmpty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[,]")," containing an array with a mixture of the above types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelReference")," -- (Only if ",(0,l.kt)("inlineCode",{parentName:"li"},"AllowReference=true")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"ExcelArgumentAttribute")," causing ",(0,l.kt)("inlineCode",{parentName:"li"},"R")," type instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"P"),")")),(0,l.kt)("p",null,"function parameters of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Object[]")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Object[,]")," will receive an array containing a mixture of the above types (excluding ",(0,l.kt)("inlineCode",{parentName:"p"},"Object[,]"),")"),(0,l.kt)("p",null,"return values of type Object are allowed to be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Double[,]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[,]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelMissing.Value")," -- Converted by Excel to be 0.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelEmpty.Value"),"   -- Converted by Excel to be 0.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.ExcelReference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int32 (int)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int16 (short)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt16 (ushort)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Decimal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int64 (long)"))),(0,l.kt)("p",null,"Otherwise return ",(0,l.kt)("inlineCode",{parentName:"p"},"#VALUE!")," error"),(0,l.kt)("p",null,"Return values of type ",(0,l.kt)("inlineCode",{parentName:"p"},"object[]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"object[,]")," are processed as arrays of the type ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", containing a mixture of the above, excluding the array types."),(0,l.kt)("h3",{id:"special-return-values"},"Special return values"),(0,l.kt)("p",null,"The following invalid return values, are returned to Excel as indicated"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[0]")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"#VALUE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object[0.0]")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"#VALUE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String.Empty")," => ",(0,l.kt)("inlineCode",{parentName:"li"},'""')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelEmpty.Value")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"#NUM"))))}c.isMDXComponent=!0}}]);