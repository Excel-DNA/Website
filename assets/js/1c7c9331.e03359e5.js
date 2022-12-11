"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[9517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,h=u["".concat(c,".").concat(p)]||u[p]||g[p]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={title:"Configuring NLog Logging"},o=void 0,r={unversionedId:"guides-basic/configuring-nlog-logging",id:"guides-basic/configuring-nlog-logging",title:"Configuring NLog Logging",description:"This is a guide to setting up logging from within your Excel-DNA add-in, using the NLog library. I used Visual Studio 2012 and C# to put together the example, but nothing here should be specific to the particular versions or language used.",source:"@site/docs/guides-basic/configuring-nlog-logging.md",sourceDirName:"guides-basic",slug:"/guides-basic/configuring-nlog-logging",permalink:"/TestDocs/docs/guides-basic/configuring-nlog-logging",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuring NLog Logging"},sidebar:"tutorialSidebar",previous:{title:"COM Server Support",permalink:"/TestDocs/docs/guides-basic/com-server-support"},next:{title:"Creating a Help File",permalink:"/TestDocs/docs/guides-basic/creating-a-help-file"}},c={},s=[{value:"1. Create a new C# Class Library",id:"1-create-a-new-c-class-library",level:2},{value:"2. Install the Excel-DNA NuGet package",id:"2-install-the-excel-dna-nuget-package",level:2},{value:"3. Test basic add-in functionality",id:"3-test-basic-add-in-functionality",level:2},{value:"Install the NLog library",id:"install-the-nlog-library",level:2},{value:"Add a configuration file",id:"add-a-configuration-file",level:2},{value:"Add the NLog configuration entries",id:"add-the-nlog-configuration-entries",level:2},{value:"Add some logging to your function",id:"add-some-logging-to-your-function",level:2},{value:"Add NLog to the packed .xll",id:"add-nlog-to-the-packed-xll",level:2},{value:"Check the final packed add-in",id:"check-the-final-packed-add-in",level:2}],d={toc:s};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a guide to setting up logging from within your Excel-DNA add-in, using the NLog library. I used Visual Studio 2012 and C# to put together the example, but nothing here should be specific to the particular versions or language used."),(0,i.kt)("h2",{id:"1-create-a-new-c-class-library"},"1. Create a new C# Class Library"),(0,i.kt)("p",null,"Start Visual Studio, select ",(0,i.kt)("em",{parentName:"p"},"New Project...")," and make a new C# Class Library project. I targeted the .NET Framework 4.5 since that is the default, but .NET Framework 4 should also work fine. I called my library ",(0,i.kt)("strong",{parentName:"p"},"NLogTest"),"."),(0,i.kt)("h2",{id:"2-install-the-excel-dna-nuget-package"},"2. Install the Excel-DNA NuGet package"),(0,i.kt)("p",null,'Open the NuGet Package Manager Console (Tools -> Library Package Manager -> Package Manager Console) and enter "Install-Package Excel-DNA". This will install the Excel-DNA package and display the Readme.txt file when complete.'),(0,i.kt)("h2",{id:"3-test-basic-add-in-functionality"},"3. Test basic add-in functionality"),(0,i.kt)("p",null,"From inside the displayed Readme.txt file, copy the C# sample snippet into the file Class1.cs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using ExcelDna.Integration;\n\npublic static class MyFunctions\n{\n    [ExcelFunction(Description = "My first .NET function")](ExcelFunction(Description-=-_My-first-.NET-function_))\n    public static string HelloDna(string name)\n    {\n        return "Hello " + name;\n    }\n}\n')),(0,i.kt)("p",null,"(You can also rename the Class1.cs file if you want to.)"),(0,i.kt)("p",null,"Notice that the NuGet package has set up the following aspects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added a NLogTest-AddIn.dna file."),(0,i.kt)("li",{parentName:"ul"},"Added a post-build step that will copy the ExcelDna.xll to the output directory as NLogTest-AddIn.xll."),(0,i.kt)("li",{parentName:"ul"},"Added a post-build step that will run ExcelDnaPack to pack the add-in to produce NLogTest-AddIn-packed.xll in the output directory."),(0,i.kt)("li",{parentName:"ul"},"Configured debugging to start Excel and load add-in.")),(0,i.kt)("p",null,'Now press F5 to build and start debugging. This should load Excel and the add-in, and make the HelloDna function available. Try it in a cell as "=HelloDna("World!")'),(0,i.kt)("p",null,"Exit Excel to stop debugging."),(0,i.kt)("h2",{id:"install-the-nlog-library"},"Install the NLog library"),(0,i.kt)("p",null,'Back in the Package Manager Console, install the NLog package: "Install-Package NLog". This should add a reference to the NLog library.'),(0,i.kt)("h2",{id:"add-a-configuration-file"},"Add a configuration file"),(0,i.kt)("p",null,"The name of the actual Excel add-in is ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn.xll")," (this is the name set up by the Excel-DNA NuGet package). A configuration file for this add-in will be called ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn.xll.config"),". We add such a file to the project: Right-click on the Project in the Solution Explorer, and select ",(0,i.kt)("em",{parentName:"p"},"Add -> New Item..."),". Select ",(0,i.kt)("em",{parentName:"p"},"Application Configuration File"),", and set the filename to ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn.xll.config"),". This name must match the .xll name exactly (plus an extra .config extension). Right-click on the new file in the Solution Explorer, pick Properties, and set the file to: ",(0,i.kt)("em",{parentName:"p"},"Copy to Output Directory: Copy if newer"),". This will ensure the file is copied to the output when changed."),(0,i.kt)("h2",{id:"add-the-nlog-configuration-entries"},"Add the NLog configuration entries"),(0,i.kt)("p",null,"The configuration file might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n  <configSections>\n    <section name="nlog" type="NLog.Config.ConfigSectionHandler, NLog"/>\n  </configSections>\n  <nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n    <targets>\n      <target name="logfile" xsi:type="File" fileName="${basedir}/LogFile.txt"/>\n    </targets>\n    <rules>\n      <logger name="*" minLevel="Info" writeTo="logfile"/>\n    </rules>\n  </nlog>\n</configuration>\n')),(0,i.kt)("h2",{id:"add-some-logging-to-your-function"},"Add some logging to your function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using ExcelDna.Integration;\nusing NLog;\n\npublic static class MyFunctions\n{\n    private static readonly Logger logger = LogManager.GetCurrentClassLogger();\n\n    [ExcelFunction(Description = "My first .NET function")](ExcelFunction(Description-=-_My-first-.NET-function_))\n    public static string HelloDna(string name)\n    {\n        logger.Info("HelloDna function called: {0}", name);\n        return "Hello " + name;\n    }\n}\n')),(0,i.kt)("p",null,'Press F5 to build and start Excel, and enter the function into a cell: =HelloDna("World!")\n(If there is an error in the configuration or in using NLog, the function will return ',(0,i.kt)("em",{parentName:"p"},"#VALUE!"),")"),(0,i.kt)("p",null,"Check the bin\\Debug output directory  of the project - the LogFile.txt should be created, with the logged function call:\n",(0,i.kt)("inlineCode",{parentName:"p"},"2013-11-14 16:23:15.0465|INFO|MyFunctions|HelloDna function called: World!")),(0,i.kt)("h2",{id:"add-nlog-to-the-packed-xll"},"Add NLog to the packed .xll"),(0,i.kt)("p",null,"Excel-DNA can pack the dependencies of an .xll into a single file add-in. The ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn.xll.config")," file is automatically added by the ExcelDnaPack utility, but we also want to add the NLog library itself. To do this, update the ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn.dna")," file by adding a <Reference",">"," entry for NLog as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<DnaLibrary Name="NLogTest Add-In" RuntimeVersion="v4.0">\n  <Reference Path="NLog.dll" Pack="true" />\n  <ExternalLibrary Path="NLogTest.dll" LoadFromBytes="true" Pack="true" />\n</DnaLibrary>\n')),(0,i.kt)("p",null,"Then rebuild the project again."),(0,i.kt)("h2",{id:"check-the-final-packed-add-in"},"Check the final packed add-in"),(0,i.kt)("p",null,"The resulting packed add-in, called ",(0,i.kt)("em",{parentName:"p"},"NLogTest-AddIn-packed.xll")," is a single-file add-in that includes the configuration file and NLog library. Copy this file from the bin\\Debug output directory into a new directory (as the only file in the directory) and double-click to open in Excel. Then call the ",(0,i.kt)("em",{parentName:"p"},"HelloDna")," function again and check that the log file is created."),(0,i.kt)("p",null,"The resulting packed add-in can be renamed and distributed with no other dependencies required."))}g.isMDXComponent=!0}}]);