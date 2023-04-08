"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[8995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const l={title:"Installing Your Add-in"},r=void 0,o={unversionedId:"guides-basic/installing-your-add-in",id:"guides-basic/installing-your-add-in",title:"Installing Your Add-in",description:"Ease of deployment is one of the great advantages of making your Excel add-ins using Excel-DNA. This page provides some notes on the different approaches to installing your add-in.",source:"@site/docs/guides-basic/installing-your-add-in.md",sourceDirName:"guides-basic",slug:"/guides-basic/installing-your-add-in",permalink:"/docs/guides-basic/installing-your-add-in",draft:!1,tags:[],version:"current",frontMatter:{title:"Installing Your Add-in"},sidebar:"tutorialSidebar",previous:{title:"Customizing Ribbons",permalink:"/docs/guides-basic/customizing-ribbons"},next:{title:"Moving to .NET 7 and Above",permalink:"/docs/guides-basic/moving-to-dotnet7-and-above"}},s={},d=[{value:".NET Runtime",id:"net-runtime",level:2},{value:"Packing",id:"packing",level:2},{value:"Security",id:"security",level:2},{value:"Options to just run once",id:"options-to-just-run-once",level:2},{value:"Options to install permanently",id:"options-to-install-permanently",level:2},{value:"Creating a Windows Installer package for your add-in",id:"creating-a-windows-installer-package-for-your-add-in",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ease of deployment is one of the great advantages of making your Excel add-ins using Excel-DNA. This page provides some notes on the different approaches to installing your add-in."),(0,a.kt)("p",null,"The issue addressed here is how to install your add-in into Excel, so that it will automatically load every time Excel is started."),(0,a.kt)("h2",{id:"net-runtime"},".NET Runtime"),(0,a.kt)("p",null,"Excel-DNA supports add-in projects that target .NET Framework 4.x and/or .NET 6. When targeting .NET 6 the end-user must have the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6 Desktop runtime")," installed."),(0,a.kt)("h2",{id:"packing"},"Packing"),(0,a.kt)("p",null,"As part of the add-in compilation, Excel-DNA creates single file packed add-ins (for 32 and 64 bit Excel) under a ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," directory. These packed addins contain all the required dependencies and can be opened on another computer."),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"Note that most Excel-DNA features do not require administrator rights to run, or any registration to be dome before running the add-in. This includes the use of RTD servers as well as Ribbon and Custom Task Pane UI customization."),(0,a.kt)("p",null,"Office implements a comprehensive security system, which is accessed via the ",(0,a.kt)("em",{parentName:"p"},"File->Options, Trust Center")," dialog. Your Excel-DNA add-ins are subject to the security restrictions configured in the Trust Center. To operate in a secure environment I suggest you sign the packed .xll (using the signtool utility) and incorporate the certificate into the Office Trust Center, along with the macro setting to allow only digitally signed macros to be loaded."),(0,a.kt)("p",null,"As of March 2023, Microsoft is ",(0,a.kt)("a",{parentName:"p",href:"https://insider.office.com/en-us/blog/block-untrusted-xll-add-ins-by-default"},"testing an option whereby downloaded addins are blocked by default"),". Such add-ins can be enabled according to ",(0,a.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/excel-is-blocking-untrusted-xll-add-ins-by-default-1e3752e2-1177-4444-a807-7b700266a6fb"},"the instructions linked by the error message that Excel displays"),". "),(0,a.kt)("h2",{id:"options-to-just-run-once"},"Options to just run once"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run from Visual Studio. Building the add-in project should set debug properties that run Excel and load the add-in ready for debugging."),(0,a.kt)("li",{parentName:"ul"},"Just manually File > Open the .xll file from Excel."),(0,a.kt)("li",{parentName:"ul"},"VBA ",(0,a.kt)("inlineCode",{parentName:"li"},"Application.RegisterXLL(...)")," can open it.  (Workbooks.Open will not work.)")),(0,a.kt)("h2",{id:"options-to-install-permanently"},"Options to install permanently"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Excel, just File > Options > Add-ins.  Install as an ordinary addin, not as a COM add-in even though communication may be using COM."),(0,a.kt)("li",{parentName:"ul"},"From VBA do",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Application.addins.Add ",(0,a.kt)("inlineCode",{parentName:"li"},"myfilename.xll")),(0,a.kt)("li",{parentName:"ul"},'Application.addins("myTitle").Installed = True.  Title is defined by .dna file Name="myTitle", not necessarily the file name.'))),(0,a.kt)("li",{parentName:"ul"},"Have an installer add registry",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Key: HKCU/Software/Microsoft/Office/$version/Excel/Options,"),(0,a.kt)("li",{parentName:"ul"},"Values: OPEN, OPEN1, OPEN2 etc.)"),(0,a.kt)("li",{parentName:"ul"},'Set it to /R "C:',".",'..\\MyAddIn.xll"'),(0,a.kt)("li",{parentName:"ul"},"(Do not leave gaps if uninstalling on Excel 2007+.  Eg OPEN, OPEN1, OPEN3.  Best to do nothing, Excel will sort itself out next time it is opened.)"),(0,a.kt)("li",{parentName:"ul"},"(Can be done in a .bat file using reg)"))),(0,a.kt)("li",{parentName:"ul"},'Install using COM, e.g. VB Script.  (But some sites ban vb script for being "Insecure".)')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim oXL As Object, oAddin As Object\nSet oXL = CreateObject("Excel.Application")\noXL.Workbooks.Add\nSet oAddin = oXL.AddIns.Add("C:\\test.xll", False)\noAddin.Installed = True\noXL.Quit\nSet oXL = Nothing\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Another option is to install your add-in when it is opened the first time, by running some code in your AutoOpen macro. This way, the user only has to double-click your add-in the first time, and it will load and install, and load in future sessions. Your AutoOpen might be something like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void AutoOpen()\n{\n    string xllPath = (string)XlCall.Excel(XlCall.xlGetName);\n    var xlApp = (Microsoft.Office.Interop.Excel.Application)ExcelDnaUtil.Application;\n    xlApp.AddIns.Add(xllPath, false /**don't copy file**/).Installed = true;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finally, it is possible to have ExcelDna be a separately installed COM server, and have Excel VBA access it using CreateObject etc.  There is an example in the samples, but this would be an uncommon approach.")),(0,a.kt)("h2",{id:"creating-a-windows-installer-package-for-your-add-in"},"Creating a Windows Installer package for your add-in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There's a fledgling ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Excel-DNA/WiXInstaller"},"WiX-based installer project")," available on GitHub - please help to improve it."),(0,a.kt)("li",{parentName:"ul"},"Jiri Pik has written a ",(0,a.kt)("a",{parentName:"li",href:"https://jiripik.com/2017/02/25/use-advanced-installer-excel-dna-project/"},"detailed guide")," to creating an installer package using the commercial Advanced Installer tool.")))}p.isMDXComponent=!0}}]);