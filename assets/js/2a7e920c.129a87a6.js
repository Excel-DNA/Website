"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[5067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||g[u]||r;return n?i.createElement(f,l(l({ref:t},d),{},{components:n})):i.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"User Settings and the .xll.config File"},l=void 0,o={unversionedId:"guides-advanced/user-settings-and-the-xllconfig-file",id:"guides-advanced/user-settings-and-the-xllconfig-file",title:"User Settings and the .xll.config File",description:"NOTE: The details below are applicable only to add-ins targeting .NET Framework 4.x. With .NET 6, the XML-based config files are no longer automatically loaded. Additionally, the System.Configuration.ConfigurationManager has limited backward compatibility. It is recommended to use Microsoft.Extensions.Configuration and related libraries to use AppSettings.json or XML-based configuration files.",source:"@site/docs/guides-advanced/user-settings-and-the-xllconfig-file.md",sourceDirName:"guides-advanced",slug:"/guides-advanced/user-settings-and-the-xllconfig-file",permalink:"/docs/guides-advanced/user-settings-and-the-xllconfig-file",draft:!1,tags:[],version:"current",frontMatter:{title:"User Settings and the .xll.config File"},sidebar:"tutorialSidebar",previous:{title:"Reactive Extensions for Excel",permalink:"/docs/guides-advanced/reactive-extensions-for-excel"},next:{title:"Utilising CustomXMLParts in Excel Workbooks",permalink:"/docs/guides-advanced/utilising-customXMLparts-in-excel-workbooks"}},s={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],d={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The details below are applicable only to add-ins targeting .NET Framework 4.x. With .NET 6, the XML-based config files are no longer automatically loaded. Additionally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Configuration.ConfigurationManager")," has limited backward compatibility. It is recommended to use ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration"},"Microsoft.Extensions.Configuration")," and related libraries to use ",(0,a.kt)("inlineCode",{parentName:"p"},"AppSettings.json")," or XML-based configuration files."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"<TheAddInName>.xll.config")," with this in:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  <appSettings>\n    <add key="Test" value="Forty-two" />\n  </appSettings>\n</configuration>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your project, add a reference to the System.Configuration assembly.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your library add some function to access the settings:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'internal static string GetAppSetting(string key)\n{\n    object setting = System.Configuration.ConfigurationManager.AppSettings[key];\n    if (setting == null)\n    {\n        return "!! INVALID KEY !!";\n    }\n\n    return setting.ToString();\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"If you run ",(0,a.kt)("inlineCode",{parentName:"li"},"ExcelDnaPack")," to pack the add-in into a single file, the ",(0,a.kt)("inlineCode",{parentName:"li"},".xll.config")," file will automatically be packed too. At runtime, if a ",(0,a.kt)("inlineCode",{parentName:"li"},".xll.config")," file is present, it will be used. Otherwise the packed ",(0,a.kt)("inlineCode",{parentName:"li"},".config")," file will be used as the configuration for for the add-in's AppDomain.")),(0,a.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,a.kt)("p",null,"In the configuration file there are two ways to extend the settings to other files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by adding a UserSettings section in specifying it in the configSections element as a type of ",(0,a.kt)("inlineCode",{parentName:"li"},"System.Configuration.NameValueSectionHandler")),(0,a.kt)("li",{parentName:"ul"},"by adding file names or paths to additional NameValueSection config files that enhance both the app settings and the user settings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the attribute name for the file name in the user settings is ",(0,a.kt)("inlineCode",{parentName:"li"},"configSource"),","),(0,a.kt)("li",{parentName:"ul"},"the attribute name for app settings file is ",(0,a.kt)("inlineCode",{parentName:"li"},"file"))))),(0,a.kt)("p",null,"Below, there is an example of an app config (name it as described in ",(0,a.kt)("a",{parentName:"p",href:"#basic-usage"},"Basic Usage"),") that defines both app settings, including a separate AppSettings NameValueSection File and User Settings, including a separate UserSettings NameValueSection File as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  <configSections>\n    <section name="UserSettings" type="System.Configuration.NameValueSectionHandler"/>\n  </configSections>\n  <UserSettings configSource="Your/Path/to/UserSettings.config">\n     <add key="someSettingKey" value="someSettingValue"/>\n  </UserSettings>\n...\n  <appSettings file="Your/Path/to/AppSettings.config">\n    <add key="someOtherSettingKey" value="someOtherSettingValue"/>\n  </appSettings>\n...\n</configuration>\n')),(0,a.kt)("p",null,"The UserSettings and AppSettings NameValueSection files are just repetitions of the UserSettings or appSettings elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"content of ",(0,a.kt)("inlineCode",{parentName:"li"},"AppSettings.config"),"  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<appSettings>\n    <add key="keyname0" value="3" />\n    <add key="keyname1" value="False" />\n</appSettings>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"content of ",(0,a.kt)("inlineCode",{parentName:"li"},"UserSettings.config"),"  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<UserSettings>\n    <add key="keyname2" value="3" />\n    <add key="keyname3" value="False" />\n</UserSettings>\n')),(0,a.kt)("p",null,"Having these three config files in place, you can then create a mechanism to have a central config file and user config files with either"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"central config file overriding the user config files or"),(0,a.kt)("li",{parentName:"ul"},"user config files overriding the central config file,")),(0,a.kt)("p",null,"depending on your needs."),(0,a.kt)("p",null,"Below, the second method is implemented in a VB.NET function that fetches a setting regardless whether it is found in the central or the user config, however the user config always has precedence. If nothing is found then the passed defaultValue is returned.\nThe class ",(0,a.kt)("inlineCode",{parentName:"p"},"NameValueCollection")," is taken from ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Collections.Specialized.NameValueCollection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vbnet"},"    Public Function fetchSetting(Key As String, defaultValue As String) As String\n        Dim AddinUserSettings As Collections.Specialized.NameValueCollection = Nothing\n        Dim AddinAppSettings As Collections.Specialized.NameValueCollection = Nothing\n\n        ' get the User Settings (in UserSettings section or in separate file), if available\n        Try : AddinUserSettings = ConfigurationManager.GetSection(\"UserSettings\") : Catch ex As Exception : End Try\n        ' get the App Settings (in AppSettings section or in separate file), if available\n        Try : AddinAppSettings = ConfigurationManager.AppSettings : Catch ex As Exception : End Try\n\n        ' UserSettings take precedence, only if setting is not available there then AddinAppSettings\n        If AddinUserSettings(Key) Is Nothing Then\n            If AddinAppSettings IsNot Nothing Then\n                fetchSetting = AddinAppSettings(Key)\n            Else\n                fetchSetting = Nothing\n            End If\n        Else\n            fetchSetting = AddinUserSettings(Key)\n        End If\n        ' if neither User nor AppSettings returned a value, take the defaultValue. Alternatively you could throw an error here.\n        If fetchSetting Is Nothing Then fetchSetting = defaultValue\n    End Function\n")))}g.isMDXComponent=!0}}]);