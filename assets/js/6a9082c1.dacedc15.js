"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[3570],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=s.createContext({}),c=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return s.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return t?s.createElement(m,o(o({ref:n},u),{},{components:t})):s.createElement(m,o({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(7462),a=(t(7294),t(3905));const r={title:"Asynchronous Functions with Tasks"},o=void 0,l={unversionedId:"guides-basic/asynchronous-functions-with-tasks",id:"guides-basic/asynchronous-functions-with-tasks",title:"Asynchronous Functions with Tasks",description:"This example shows how to implement an asynchronous Excel function in VB.NET using the .NET 4 Task class. This has an advantage over the ExcelAsyncUtil.Run method, which just runs the code on a ThreadPool thread. If we are able to use the .NET 4 Task class, the outstanding requests will not block any threads, so should scale better. Supporting .NET 4 Tasks also allow us to use the .NET 4.5 Async/Await language extensions.",source:"@site/docs/guides-basic/asynchronous-functions-with-tasks.md",sourceDirName:"guides-basic",slug:"/guides-basic/asynchronous-functions-with-tasks",permalink:"/TestDocs/docs/guides-basic/asynchronous-functions-with-tasks",draft:!1,tags:[],version:"current",frontMatter:{title:"Asynchronous Functions with Tasks"},sidebar:"tutorialSidebar",previous:{title:"Async Macro Example",permalink:"/TestDocs/docs/guides-basic/async-macro-example-formatting-the-calling-cell-from-a-udf"},next:{title:"Asynchronous Functions",permalink:"/TestDocs/docs/guides-basic/asynchronous-functions"}},i={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how to implement an asynchronous Excel function in VB.NET using the .NET 4 Task class. This has an advantage over the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelAsyncUtil.Run")," method, which just runs the code on a ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadPool")," thread. If we are able to use the .NET 4 Task class, the outstanding requests will not block any threads, so should scale better. Supporting .NET 4 Tasks also allow us to use the .NET 4.5 Async/Await language extensions."),(0,a.kt)("p",null,"We want to make an asynchronous function to download a string from a URL. I'm using the System.Net.Http package (if you're not using .NET 4.5, add to your project by getting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft.Net.Http")," package from NuGet)."),(0,a.kt)("p",null,"Our function, called ",(0,a.kt)("inlineCode",{parentName:"p"},"webDownloadString")," will be implemented like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Imports System.Net.Http\nImports ExcelDna.Integration\n\nPublic Module WebUdf\n    ReadOnly myHttpClient As New HttpClient\n\n    Public Function webDownloadString(url As String) As Object\n\n        Return ExcelAsyncUtil.Observe("webDownloadString", url, Function() myHttpClient.GetStringAsync(url).ToExcelObservable())\n\n    End Function\nEnd Module\n')),(0,a.kt)("p",null,"The implementation of the async function uses the ExcelAsyncUtil.Observe function, which takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"IExcelObservable")," as its last parameter. The ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient.GetStringAsync")," call returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Task<string>"),", so the missing part is the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToExcelObservable()")," function which converts a ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," to an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelObservable"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ToExcelObservable")," is implemented like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Imports System.Threading.Tasks\nImports System.Runtime.CompilerServices\nImports ExcelDna.Integration\n\nModule TaskExcelObservableExtensions\n\n    ' Careful - this would only work as long as the task is not shared between calls, since cancellation cancels that task\n    ' Another implementation would be via Reactive Extension: Task.ToObservable() (in System.Reactive.Linq.dll) and RxExcel\n    <Extension()>\n    Public Function ToExcelObservable(Of TResult)(task As Task(Of TResult)) As IExcelObservable\n\n        If task Is Nothing Then\n            Throw New ArgumentNullException(\"task\")\n        End If\n\n        Return New ExcelTaskObservable(Of TResult)(task)\n    End Function\n\n    '' Wraps a Task in an Observable - basically allowing one Subscriber.\n    Private Class ExcelTaskObservable(Of TResult)\n        Implements IExcelObservable\n\n        Private ReadOnly _task As Task(Of TResult)\n\n        Public Sub New(task As Task(Of TResult))\n            _task = task\n        End Sub\n\n        Public Function Subscribe(observer As IExcelObserver) As IDisposable Implements IExcelObservable.Subscribe\n            Select Case _task.Status\n                Case TaskStatus.RanToCompletion\n                    observer.OnNext(_task.Result)\n                    observer.OnCompleted()\n                Case TaskStatus.Faulted\n                    observer.OnError(_task.Exception.InnerException)\n                Case TaskStatus.Canceled\n                    observer.OnError(New TaskCanceledException(_task))\n                Case Else\n                    _task.ContinueWith(\n                        Sub(t)\n                            Select Case t.Status\n                                Case TaskStatus.RanToCompletion\n                                    observer.OnNext(t.Result)\n                                    observer.OnCompleted()\n                                Case TaskStatus.Faulted\n                                    observer.OnError(t.Exception.InnerException)\n                                Case TaskStatus.Canceled\n                                    observer.OnError(New TaskCanceledException(t))\n                            End Select\n                        End Sub)\n            End Select\n\n            ' No cancellation\n            Return DefaultDisposable.Instance\n        End Function\n    End Class\n\n    Private Class DefaultDisposable\n        Implements IDisposable\n        Public Shared ReadOnly Instance As New DefaultDisposable()\n\n        Private Sub New()\n        End Sub\n\n        Public Sub Dispose() Implements IDisposable.Dispose\n            ' no op\n        End Sub\n    End Class\n\nEnd Module\n")),(0,a.kt)("p",null,"We also need to initialize the Excel-DNA async support:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Imports ExcelDna.Integration\n\nPublic Class AddIn\n    Implements IExcelAddIn\n\n    Public Sub AutoOpen() Implements ExcelDna.Integration.IExcelAddIn.AutoOpen\n        ExcelIntegration.RegisterUnhandledExceptionHandler(AddressOf HandleError)\n        ExcelAsyncUtil.Initialize()\n    End Sub\n\n    Public Sub AutoClose() Implements ExcelDna.Integration.IExcelAddIn.AutoClose\n        ExcelAsyncUtil.Uninitialize()\n    End Sub\n\n    Private Shared Function HandleError(ex As Object) As Object\n        Return "!!! ERROR: " & ex.ToString()\n    End Function\nEnd Class\n')),(0,a.kt)("p",null,"Note that the string returned would be truncated at the maximum string length for Excel - either 255 characters for Excel 2003, or 32767 characters for Excel 2007+."),(0,a.kt)("p",null,"The function can be called from an Excel sheet as ",(0,a.kt)("inlineCode",{parentName:"p"},'=webDownloadString("http://www.bing.com")'),".\nA next step might be to build a function that use regular expressions to extract data from the downloaded string."))}p.isMDXComponent=!0}}]);