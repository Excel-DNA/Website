"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[6256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"FSharp Type Inference"},o=void 0,l={unversionedId:"guides-advanced/fsharp-type-inference",id:"guides-advanced/fsharp-type-inference",title:"FSharp Type Inference",description:"When creating UDFs with F#, the flexible type inference might lead to function signatures that are not supported by Excel-DNA, or lead to unexpected results.",source:"@site/docs/guides-advanced/fsharp-type-inference.md",sourceDirName:"guides-advanced",slug:"/guides-advanced/fsharp-type-inference",permalink:"/docs/guides-advanced/fsharp-type-inference",draft:!1,tags:[],version:"current",frontMatter:{title:"FSharp Type Inference"},sidebar:"tutorialSidebar",previous:{title:"Dynamic Delegate Registration",permalink:"/docs/guides-advanced/dynamic-delegate-registration"},next:{title:"Performing Asynchronous Work",permalink:"/docs/guides-advanced/performing-asynchronous-work"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating UDFs with F#, the flexible type inference might lead to function signatures that are not supported by Excel-DNA, or lead to unexpected results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let MakeTwo x = 2\n")),(0,a.kt)("p",null,"This doesn't work (the UDF doesn't get registered) since the inferred type is ",(0,a.kt)("em",{parentName:"p"},"'a -> int"),", so is generic over the argument. This is equivalent to the C# signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"public int MakeTwo<T>(T input) = { return 2; }\n")),(0,a.kt)("p",null,"However, the following, with explicit typing,  does work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let MakeTwo (x : float) = 2\n")),(0,a.kt)("p",null,"This would apply to any function that is generic over its input. Another example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let AddString x y = x.ToString() + y.ToString()\n")),(0,a.kt)("p",null,"which is of the type a' -> b' -> string and doesn't get exposed as an UDF either."),(0,a.kt)("p",null,"Adding explicit types removes the generic parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let AddString (x:obj) (y:obj) = x.ToString() + y.ToString()\n")),(0,a.kt)("p",null,"Even the simple example in the distribution can be a concern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let Add x y = x + y\n")),(0,a.kt)("p",null,"F# infers this function to be of the type int -> int -> int, and if called in Excel as =Add(2.5,3.5) then this function will return 7 not 6."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let Add (x:float) (y:float) = x + y\n")))}d.isMDXComponent=!0}}]);