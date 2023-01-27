"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[9999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={title:"Creating a Threaded Modal Dialog"},i=void 0,c={unversionedId:"archive/guides/creating-a-threaded-modal-dialog",id:"archive/guides/creating-a-threaded-modal-dialog",title:"Creating a Threaded Modal Dialog",description:"",source:"@site/docs/archive/guides/creating-a-threaded-modal-dialog.md",sourceDirName:"archive/guides",slug:"/archive/guides/creating-a-threaded-modal-dialog",permalink:"/TestDocs/docs/archive/guides/creating-a-threaded-modal-dialog",draft:!1,tags:[],version:"current",frontMatter:{title:"Creating a Threaded Modal Dialog"},sidebar:"tutorialSidebar",previous:{title:"Creating a Help File",permalink:"/TestDocs/docs/archive/guides/creating-a-help-file"},next:{title:"Customizing Ribbons",permalink:"/TestDocs/docs/archive/guides/customizing-ribbons"}},l={},d=[],s={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'new Thread(() => {\n    var excelWindowThatIsTheOwner = new NativeWindow();\n\n    excelWindowThatIsTheOwner.AssignHandle(new IntPtr(Application.Hwnd));\n\n    // Show modal dialog (here: a message box)\n    MessageBox.Show(owner: excelWindowThatIsTheOwner,\n                    text: "I am a modal MessageBox.\\r\\nNow bring another application to the foreground and then try to bring excel back via the windows taskbar...");\n}).Start();\n')))}p.isMDXComponent=!0}}]);