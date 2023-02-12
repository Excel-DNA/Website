"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[5527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3564:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={layout:"page",title:"Excel-DNA Reference: .dna file"},r=void 0,o={type:"mdx",permalink:"/Website/reference-dotdna-file",source:"@site/src/pages/reference-dotdna-file.md",title:"Excel-DNA Reference: .dna file",description:".dna file schema",frontMatter:{layout:"page",title:"Excel-DNA Reference: .dna file"}},p=[{value:".dna file schema",id:"dna-file-schema",level:2},{value:"Packing",id:"packing",level:2},{value:"Default references and imports",id:"default-references-and-imports",level:2},{value:"Image Resolution",id:"image-resolution",level:2},{value:"Reference Resolution",id:"reference-resolution",level:2},{value:"Path Resolution",id:"path-resolution",level:2},{value:"ExplicitExports",id:"explicitexports",level:2},{value:"AutoOpen/AutoClose",id:"autoopenautoclose",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dna-file-schema"},".dna file schema"),(0,i.kt)("p",null,"Elements and attributes are below.   See *.dna files in downloaded samples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DnaLibrary")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeVersion")," either ",(0,i.kt)("inlineCode",{parentName:"li"},"v4.0")," for .NET 4, or ",(0,i.kt)("inlineCode",{parentName:"li"},"v2.0")," (default) for ",(0,i.kt)("em",{parentName:"li"},"all")," earlier versions.  i.e. use ",(0,i.kt)("inlineCode",{parentName:"li"},"v2.0")," for .Net 3.5.  Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"v4.0")," is required for 64bit Office."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CompilerVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'ShadowCopyFiles="true"')," enables shadow copying for the add-in's AppDomain."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ExternalLibrary")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LoadFromBytes"),'.  if ="true" then the .dll is loaded more dynamically which can avoid needing to shut down Excel during debugging. However, it can cause issues with multiple active instances and harder debugging.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'ExplicitExports="true"')," Prevents every static public function from becomming a UDF, they will need an explicit ",(0,i.kt)("inlineCode",{parentName:"li"},"[ExcelFunction]")," annotation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Project")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SourceItem")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Image"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomUI")," Nest ",(0,i.kt)("inlineCode",{parentName:"p"},"<customUI")," under this to define ribbon."))),(0,i.kt)("p",null,"(Attributes set on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DnaLibrary")," apply to the implicit project and are not inherited by any ",(0,i.kt)("inlineCode",{parentName:"p"},"<Project>")," sections.)"),(0,i.kt)("h2",{id:"packing"},"Packing"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExcelDnaPack")," can pack the .dna files and dependent assemblies into a single .xll file."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Samples\\Packing")," directory has a number of samples of how to use the packing feature."),(0,i.kt)("p",null,"To run the samples, run PackAll.bat - the packed libraries are placed into the out directory."),(0,i.kt)("h2",{id:"default-references-and-imports"},"Default references and imports"),(0,i.kt)("p",null,"A reference to the ExcelDna.Integration assembly in the .xll file that is\nloading a .dna file is always added when the .dna file is compiled."),(0,i.kt)("p",null,"In addition, the following references are added to each project, unless a ",(0,i.kt)("inlineCode",{parentName:"p"},'DefaultReferences="false"')," attribute is set on the <Project",">",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Data.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Xml.dll"))),(0,i.kt)("p",null,'For RuntimeVersion="v4.0" the following are added too:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Core.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Data.DataExtensions.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Xml.Linq.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.CSharp.dll")," (C# projects only)")),(0,i.kt)("p",null,"For VB projects, the following imports are added, unless a ",(0,i.kt)("inlineCode",{parentName:"p"},'DefaultImports="false"')," attribute is set on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Project>"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.VisualBasic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Collections.Generic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Diagnostics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration"))),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},'RuntimeVersion="v4.0"')," the following are added too:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Linq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Xml.Linq"))),(0,i.kt)("p",null,"?? ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Office.Core")," (for Ribbon)??"),(0,i.kt)("h2",{id:"image-resolution"},"Image Resolution"),(0,i.kt)("p",null,"Image is only used if the Path is supplied."),(0,i.kt)("p",null,"Image Name must match (case sensitive) the image tag in the Ribbon markup."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the Path starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"packed:")," the image is retrieved from resources."),(0,i.kt)("li",{parentName:"ol"},"If the Path contains .....")),(0,i.kt)("h2",{id:"reference-resolution"},"Reference Resolution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Reference>")," element has Path (",(0,i.kt)("inlineCode",{parentName:"p"},"AssemblyPath")," is deprecated) and ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," attributes.\nWhen compiling at runtime, the references are resolved as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'If Path starts with "packed:" the assembly is retrieved from resources, written to a temp file, and the temp file is added to the compiler\'s references list.'),(0,i.kt)("li",{parentName:"ol"},"Else If Path is not null and not empty, the assembly is search relative to the .dna file and the xll directory, and in the framework directory. If found, Path is added to the compiler's references list."),(0,i.kt)("li",{parentName:"ol"},"Else the Name is passed to LoadWithPartialName for resolution."),(0,i.kt)("li",{parentName:"ol"},"Otherwise the reference is ignored.")),(0,i.kt)("p",null,'When packing (Reference elements with the Pack="true" attribute), the reference is resolved as follows:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'If Path starts with "packed:" the reference is ignored.'),(0,i.kt)("li",{parentName:"ol"},"If Path is not null and not empty, the assemlby is looked for according to the Path Resolution rules."),(0,i.kt)("li",{parentName:"ol"},"If no file is found, Assembly.Load is attempted with the Path. If the load succeeeds, the assembly location is used to locate and pack the assembly."),(0,i.kt)("li",{parentName:"ol"},"Otherwise, Assembly.LoadWithPartialName with Name is tried. If the load succeeeds, the assembly location is used to locate and pack the assembly."),(0,i.kt)("li",{parentName:"ol"},"If the assembly is still not located, the reference is ignored for packing.")),(0,i.kt)("h2",{id:"path-resolution"},"Path Resolution"),(0,i.kt)("p",null,"For assemblies and .dna files, the following path resolution is done.\nGiven a path containing a file name, maybe rooted, maybe wi\nth some or no directory info, we attempt to find the file as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the file is found at the path, we are done."),(0,i.kt)("li",{parentName:"ol"},"Check the path - if it is rooted replace directory with .dna file's directory."),(0,i.kt)("li",{parentName:"ol"},"If the path is not rooted, try the whole path relative to the .dna file location (prepend the .dna file's directory)."),(0,i.kt)("li",{parentName:"ol"},"Else try 2 or 3 using current AppDomain's BaseDirectory.")),(0,i.kt)("h2",{id:"explicitexports"},"ExplicitExports"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExplicitExports")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Project")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ExternalLibrary")," node, only functions and methods explicitly marked by an"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExcelFunction")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ExcelCommand")," attribute are exported. Otherwise, all public static methods with compatible signatures are exported."),(0,i.kt)("h2",{id:"autoopenautoclose"},"AutoOpen/AutoClose"),(0,i.kt)("p",null,"Cleanup is only done when the add-in is removed from the add-in manager."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"File->Open")," is used to reopen the .xll, it is closed and opened, causing the .dna file to be re-read."))}d.isMDXComponent=!0}}]);