"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[3270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Excel-DNA 1.6 \u2013 .NET 6 / PackageReference / Anti-virus",date:"2022-03-07 00:36:00 -0000",authors:"govert",tags:[".NET","Excel","ExcelDNA","XLL"]},s=void 0,i={permalink:"/blog/2022/03/07/excel-dna-1.6-.net6-packagereference-anti-virus",source:"@site/blog/2022-03-07-excel-dna-1.6-.net6-packagereference-anti-virus.md",title:"Excel-DNA 1.6 \u2013 .NET 6 / PackageReference / Anti-virus",description:"Excel-DNA version 1.6 is now available for testing as pre-release version 1.6.0-preview3 from the NuGet package repository. The extension libraries ExcelDna.Registration and ExcelDna.IntelliSense also have matching releases. ExcelDnaDoc should follow in the coming weeks.",date:"2022-03-07T00:36:00.000Z",formattedDate:"March 7, 2022",tags:[{label:".NET",permalink:"/blog/tags/net"},{label:"Excel",permalink:"/blog/tags/excel"},{label:"ExcelDNA",permalink:"/blog/tags/excel-dna"},{label:"XLL",permalink:"/blog/tags/xll"}],readingTime:5.93,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel-DNA 1.6 \u2013 .NET 6 / PackageReference / Anti-virus",date:"2022-03-07 00:36:00 -0000",authors:"govert",tags:[".NET","Excel","ExcelDNA","XLL"]},nextItem:{title:"Update v 1.5 / Sponsors / Roadmap",permalink:"/blog/2021/07/15/update-v1.5-sponsors-roadmap"}},l={authorsImageUrls:[void 0]},c=[{value:"GitHub sponsors",id:"github-sponsors",level:2},{value:"Anti-virus false positives",id:"anti-virus-false-positives",level:2},{value:"PackageReference and SDK-style project files",id:"packagereference-and-sdk-style-project-files",level:2},{value:".NET 6 support",id:"net-6-support",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Excel-DNA version 1.6 is now available for testing as pre-release version 1.6.0-preview3 from the NuGet package repository. The extension libraries ExcelDna.Registration and ExcelDna.IntelliSense also have matching releases. ExcelDnaDoc should follow in the coming weeks."),(0,o.kt)("p",null,"The main focus for version 1.6 is to provide a first preview of the support for add-ins that target .NET 6. As a prerequisite to adding the .NET 6 target, we\u2019ve also added support for new SDK-style project files and NuGet references (also great for projects that target .NET Framework). I\u2019ve also taken the opportunity to tweak the Excel-DNA packing mechanism a bit in an attempt to avoid some of the false positive anti-virus detections we\u2019ve seen recently. I\u2019ll briefly discuss these (in reverse order) below, but first a word about our sponsors."),(0,o.kt)("h2",{id:"github-sponsors"},"GitHub sponsors"),(0,o.kt)("p",null,"Excel-DNA is now registered on GitHub sponsors \u2013 see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/Excel-DNA"},"https://github.com/sponsors/Excel-DNA"),". Thank you very much to everyone who has already signed up \u2013 your contributions are directly funding further development."),(0,o.kt)("p",null,"If you use Excel-DNA and would like to encourage future support and ongoing development, please sign up as a GitHub sponsor for the project. GitHub sponsors will also have access to a private repository of sample projects where I hope to add additional tools and documentation over time."),(0,o.kt)("p",null,"I had previously considered the .NET Core / .NET 6 support as a good point to switch to a commercial model for Excel-DNA. However, the benefits of being an open-source project with a permissive license have been significant. So, if possible, I hope to continue with the core library as free and open source software, where further development is funded by the sponsors."),(0,o.kt)("p",null,"For those in a corporate setting using Excel-DNA extensively or in a mission critical role, I also offer an annual corporate support agreement. Please contact me directly if you are interested in more details."),(0,o.kt)("h2",{id:"anti-virus-false-positives"},"Anti-virus false positives"),(0,o.kt)("p",null,"Over the last year we\u2019ve seen a number of anti-virus and security programs identify Excel-DNA add-ins as security risks, including false positive detections that delete add-in files by the default Windows Defender service. It seems that these detections were triggered by some malicious Excel add-ins that have been built using Excel-DNA, with the anti-virus heuristics subsequently identifying all Excel-DNA add-ins as problematic. For some security vendors, including Microsoft, we\u2019ve been able to report this false positive detection and they have updated their signatures accordingly. But in many cases the Excel-DNA version 1.5 add-ins are still being flagged."),(0,o.kt)("p",null,"It seems the main heuristic used to detect Excel .xll add-ins as problematic is the presence of executable assemblies as resources in the .xll library. Excel-DNA uses the packing of assemblies as resources in the .xll to simplify the add-in distribution, in many cases making possible a single file (or two files for 32-bit and 64-bit) add-in distribution."),(0,o.kt)("p",null,"For this version there are two changes which may help with these false positives."),(0,o.kt)("p",null,"The first is that packed files are now encoded, so that they are not detected as embedded executable code directly. In my testing that change removed the false positive detections at least in the Microsoft products. However, at least one other user has reported still seeing problems with this version, so it does not seem like bulletproof solution."),(0,o.kt)("p",null,"Another option has been contributed by user @Phundamentals (thank you!), to add a project property which disables the compression of packed files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <ExcelDnaPackCompressResources>false</ExcelDnaPackCompressResources>\n")),(0,o.kt)("p",null,"Should these mitigations not be enough to reduce most false positives, we could also introduce an option where there are no packed files at all (currently the managed Excel-DNA assemblies are always packed)."),(0,o.kt)("p",null,"There have also been some indications that signing the final add-in library helps reduce false positive detections."),(0,o.kt)("p",null,"In all cases I do encourage developers to report the false positives to their anti-virus or security vendor. Their software is mistakenly identifying and blocking legitimate add-ins from running."),(0,o.kt)("p",null,"Developers of malicious add-ins are welcome to contact me for sponsored licenses of an alternative add-in framework."),(0,o.kt)("h2",{id:"packagereference-and-sdk-style-project-files"},"PackageReference and SDK-style project files"),(0,o.kt)("p",null,"The main ExcelDna.AddIn NuGet package now supports references in SDK-style project files. For new projects, this means that a .dna file is no longer added to the project automatically, and if not present will be created and output at build time from project properties. Existing projects with customized .dna file(s) will work as they did before."),(0,o.kt)("p",null,"For a new project, a simple project file might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<Project Sdk=\"Microsoft.NET.Sdk\">\n\n  <PropertyGroup>\n    <TargetFramework>net472</TargetFramework>\n\n    \x3c!-- We don't need the extra 'ref' directory and reference assemblies for the Excel add-in --\x3e\n    <ProduceReferenceAssembly>false</ProduceReferenceAssembly>\n\n    \x3c!-- We need all dependencies to be copied to the output directory, as-if we are an 'application' and not a 'library'.\n         This property also sets the CopyLockFileAssemblies property to true. --\x3e\n    <EnableDynamicLoading>true</EnableDynamicLoading>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include=\"ExcelDna.AddIn\" Version=\"1.6.0-preview3\" />\n  </ItemGroup>\n\n</Project>\n")),(0,o.kt)("p",null,"Various additional properties can be set in the project file \u2013 see the example here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/Source/Tests/ExcelDna.AddIn.Tasks.IntegrationTests.TestTarget/SDKProperties/SDKProperties.csproj"},"https://github.com/Excel-DNA/ExcelDna/blob/master/Source/Tests/ExcelDna.AddIn.Tasks.IntegrationTests.TestTarget/SDKProperties/SDKProperties.csproj")),(0,o.kt)("h2",{id:"net-6-support"},".NET 6 support"),(0,o.kt)("p",null,"Excel-DNA version 1.6 (finally!) includes support for add-ins that target .NET 6. Most Excel-DNA features seem to work, including the COM-based features like RTD-based functions, ribbon and CTP extensions. However, there has been very limited testing and you should consider the .NET 6 support as an early preview."),(0,o.kt)("p",null,"Update the TargetFramework tag in an SDK-style project file to the .NET 6 (Windows) target:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <TargetFramework>net6.0-windows</TargetFramework>\n")),(0,o.kt)("p",null,"or build for both .NET Framework and .NET 6, which allows you to test both targets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <TargetFrameworks>net472;net6.0-windows</TargetFrameworks>\n")),(0,o.kt)("p",null,"End users of the add-in will need to have the .NET 6 runtime installed. (To include the runtime files as part of the add-in will not be supported, but an installer program might check and install the runtime.)"),(0,o.kt)("p",null,"A hard limitation of the .NET core series of runtimes (.NET 5 / 6 / 7 etc.) is that only one version of a .NET core runtime can be loaded into a specific process. The core runtime can still be loaded concurrently with a .NET Framework runtime (e.g. .NET Framework 4.8), although this is not a configuration officially supported by Microsoft. Excel-DNA will try to support add-ins targeting a .NET Framework running together with .NET 6 add-ins, but there is not planned to be any support for the future .NET 7 runtime. Fortunately .NET 6 is a \u2018Long-term Support\u2019 (LTS) release and will be formally supported until the end of 2024, so we can keep targeting .NET 6 for a few years. There is also some work on the horizon that make ahead-of-time compilation of .NET libraries (like the Excel-DNA add-ins) viable, bypassing the concurrent runtime issues. So I do expect a future path beyond .NET 6, though that is not an immediate concern."),(0,o.kt)("p",null,"I look forward to bug reports, questions and other feedback about the .NET 6 support (including whether it works at all). Support for modern .NET has been a long time coming and ensures that Excel-DNA can take part in the exciting future evolution of .NET."),(0,o.kt)("p",null,"After 16 years I am still amazed by and deeply appreciate the support and enthusiasm for Excel-DNA. Last but not least I want to thank Sergey Vlasov for his calm and consistent efforts that are now driving the project forward."),(0,o.kt)("p",null,"-Govert"))}d.isMDXComponent=!0}}]);