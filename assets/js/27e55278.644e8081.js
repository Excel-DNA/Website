"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[5301],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={title:"Async and event-streaming Excel UDFs with F#",date:"2013-03-26 08:18:00 -0000",authors:"govert",tags:["features","samples","async","excel","exceldna","fsharp"]},i=void 0,o={permalink:"/Website/blog/2013/03/26/async-and-event-streaming-excel-udfs-with-f",source:"@site/blog/2013-03-26-async-and-event-streaming-excel-udfs-with-f.md",title:"Async and event-streaming Excel UDFs with F#",description:"There have been a some recent posts mentioning the asynchronous and reactive programming features in F#. Since Excel-DNA 0.30 added support for creating async and IObservable-based real-time data functions, I'd like to show how these F# features can be nicely exposed to Excel via Excel-DNA.",date:"2013-03-26T08:18:00.000Z",formattedDate:"March 26, 2013",tags:[{label:"features",permalink:"/Website/blog/tags/features"},{label:"samples",permalink:"/Website/blog/tags/samples"},{label:"async",permalink:"/Website/blog/tags/async"},{label:"excel",permalink:"/Website/blog/tags/excel"},{label:"exceldna",permalink:"/Website/blog/tags/exceldna"},{label:"fsharp",permalink:"/Website/blog/tags/fsharp"}],readingTime:9.14,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Async and event-streaming Excel UDFs with F#",date:"2013-03-26 08:18:00 -0000",authors:"govert",tags:["features","samples","async","excel","exceldna","fsharp"]},prevItem:{title:"Caching and Asynchronous Excel UDFs",permalink:"/Website/blog/2013/04/02/caching-and-asynchronous-excel-udfs"},nextItem:{title:"Excel-DNA NuGet Package Updated",permalink:"/Website/blog/2012/12/20/excel-dna-nuget-package-updated"}},s={authorsImageUrls:[void 0]},c=[{value:"IObservable to Excel via Excel-DNA",id:"iobservable-to-excel-via-excel-dna",level:2},{value:"Some links:",id:"some-links",level:3},{value:"F# helpers for async and IObservable-based events",id:"f-helpers-for-async-and-iobservable-based-events",level:2},{value:"Sample functions",id:"sample-functions",level:2},{value:"Putting everything together in an Excel add-in",id:"putting-everything-together-in-an-excel-add-in",level:2},{value:"Support and feedback",id:"support-and-feedback",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There have been a some recent posts mentioning the ",(0,l.kt)("a",{parentName:"p",href:"http://blogs.msdn.com/b/dsyme/archive/2013/03/24/asynchronous-programming-from-f-to-python.aspx"},"asynchronous")," and ",(0,l.kt)("a",{parentName:"p",href:"http://www.infoq.com/interviews/petricek-fsharp-functional-languages"},"reactive")," programming features in F#. Since Excel-DNA 0.30 added support for creating async and ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable"),"-based real-time data functions, I'd like to show how these F# features can be nicely exposed to Excel via Excel-DNA."),(0,l.kt)("h2",{id:"iobservable-to-excel-via-excel-dna"},"IObservable to Excel via Excel-DNA"),(0,l.kt)("p",null,"Excel-DNA 0.30 allows an add-in to expose ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable")," sources to Excel as real-time data functions. (Actually Excel-DNA defines an interface called ",(0,l.kt)("inlineCode",{parentName:"p"},"IExcelObservable")," that matches the semantics of `IObservable<\\object> - this is because we still target .NET 2.0 with the core library.)"),(0,l.kt)("p",null,"Asynchronous function can then be implemented as an ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable")," that returns a single value before completing. Cancellation (triggered when the user removes a real-time or async formula) is supported via the standard IDisposable mechanism."),(0,l.kt)("p",null,"Internally, Excel-DNA implements a thread-safe RTD server and registers the ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable")," as an RTD topic. So some aspects of the ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable")," support are subject to Excel's RTD feature works, for example the RTD throttle interval (by default 2 seconds) will also apply to ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable")," functions."),(0,l.kt)("p",null,"The following functions in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ExcelDna.Integration.ExcelAsyncUtil")," helper class are relevant:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ExcelAsyncUtil.Initialize()")," - this should be called in a macro context before any of the other features are used, typically from the ",(0,l.kt)("inlineCode",{parentName:"p"},"AutoOpen()")," handler.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ExcelAsyncUtil.Observe(...)")," - registers an IExcelObservable as a real-time data function with Excel. ",(0,l.kt)("inlineCode",{parentName:"p"},"Subsequent OnNext()")," calls will raise updates via RTD.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ExcelAsyncUtil.Run(...)")," - a helper method that runs a function asynchronously on a .NET threadpool thread."))),(0,l.kt)("p",null,"In addition, we'll use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExcelObservableSource")," - a delegate type for functions that return an ",(0,l.kt)("inlineCode",{parentName:"li"},"IExcelObservable"),".")),(0,l.kt)("h3",{id:"some-links"},"Some links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://exceldna.codeplex.com/wikipage?title=Asynchronous%20Functions"},"Async functions in C#")," - has some sample functions in C#."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://exceldna.codeplex.com/wikipage?title=Reactive%20Extensions%20for%20Excel"},"Reactive Extensions for Excel (RxExcel)")," - the RxExcel class is a small wrapper that bridges the ",(0,l.kt)("inlineCode",{parentName:"li"},"IExcelObservable")," to any implementation of ",(0,l.kt)("inlineCode",{parentName:"li"},"IObservable<T>"),", allowing the Rx libraries to be used in Excel.")),(0,l.kt)("h2",{id:"f-helpers-for-async-and-iobservable-based-events"},"F# helpers for async and IObservable-based events"),(0,l.kt)("p",null,"To initialize the async support in Excel-DNA, we need some code like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'namespace FsAsync\n\nopen System\nopen System.Threading\nopen System.Net\nopen Microsoft.FSharp.Control.WebExtensions\nopen ExcelDna.Integration\n\n/// This class implements the IExcelAddin which allows us to initialize the ExcelAsyncUtil support.\n/// It must not be a nested class (e.g. defined as a type inside a module) but a top-level class (inside a namespace)\ntype FsAsyncAddIn () =\n    interface IExcelAddIn with\n        member this.AutoOpen ()  = \n            ExcelAsyncUtil.Initialize ()\n        member this.AutoClose () = ExcelAsyncUtil.Uninitialize ()\n\n    // define a regular Excel UDF just to show that the add-in works\n    [<ExcelFunction(Description="A test function from F#")>]\n    static member fsaAddThem (x:double) (y:double) = x + y\n')),(0,l.kt)("p",null,'F# supports an asynchronous programming model via "async computation expressions". The result of an async computation expression is a value of type ',(0,l.kt)("inlineCode",{parentName:"p"},"Async<T>"),", which we need to convert to an ",(0,l.kt)("inlineCode",{parentName:"p"},"IExcelObservable"),". We use a standard ",(0,l.kt)("inlineCode",{parentName:"p"},"CancellationTokenSource")," hooked up to the ",(0,l.kt)("inlineCode",{parentName:"p"},"IDisposable")," to enable cancellation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},"module FsAsyncUtil =\n\n    /// A helper to pass an F# Async computation to Excel-DNA \n    let excelRunAsync functionName parameters async =\n        let obsSource =\n            ExcelObservableSource(\n                fun () -> \n                { new IExcelObservable with\n                    member __.Subscribe observer =\n                        // make something like CancellationDisposable\n                        let cts = new CancellationTokenSource ()\n                        let disp = { new IDisposable with member __.Dispose () = cts.Cancel () }\n                        // Start the async computation on this thread\n                        Async.StartWithContinuations \n                            (   async, \n                                ( fun result -> \n                                    observer.OnNext(result)\n                                    observer.OnCompleted () ),\n                                ( fun ex -> observer.OnError ex ),\n                                ( fun ex ->\n                                    observer.OnCompleted () ),\n                                cts.Token \n                            )\n                        // return the disposable\n                        disp\n                }) \n        ExcelAsyncUtil.Observe (functionName, parameters, obsSource)\n")),(0,l.kt)("p",null,"Another neat feature of F# is that events are first-class types that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable"),". This means any F# event can serve as a real-time data source in an Excel formula. To bridge the F# events to the ",(0,l.kt)("inlineCode",{parentName:"p"},"IExcelObservable")," interface is really easy, we just have the following helper:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},"/// A helper to pass an F# IObservable to Excel-DNA\nlet excelObserve functionName parameters observable = \n    let obsSource =\n        ExcelObservableSource(\n            fun () -> \n            { new IExcelObservable with\n                member __.Subscribe observer =\n                    // Subscribe to the F# observable\n                    Observable.subscribe (fun value -> observer.OnNext (value)) observable\n            })\n    ExcelAsyncUtil.Observe (functionName, parameters, obsSource)\n")),(0,l.kt)("h2",{id:"sample-functions"},"Sample functions"),(0,l.kt)("p",null,"Given the above helpers, we can now explore a few ways to implement async and real-time streaming functions. As examples:"),(0,l.kt)("p",null,"Here is a plain synchronous function to download a url into a string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let downloadString url = \n    try\n        let uri = new System.Uri(url)\n        let webClient = new WebClient()\n        let html = webClient.DownloadString(uri)\n        html\n    with\n        | ex -> "!!!ERROR: " + ex.Message\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Async implementation 1"),": Use Excel-DNA async directly to run ",(0,l.kt)("inlineCode",{parentName:"li"},"downloadString")," on a ",(0,l.kt)("inlineCode",{parentName:"li"},"ThreadPool")," thread")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let downloadStringAsyncRunTP1 url = \n    ExcelAsyncUtil.Run ("downloadStringAsyncTP1", url, (fun () -> downloadString url :> obj))\n')),(0,l.kt)("p",null,"Create an F# asynchronous computation for the download (this functions is not exported to Excel)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let downloadStringAsyncImpl url = async {\n    try\n        // In here we could check for cancellation using \n        // let! ct = Async.CancellationToken\n        // if ct.IsCancellationRequested then ...\n        let uri = new System.Uri(url)\n        let webClient = new WebClient()\n        let! html = webClient.AsyncDownloadString(uri)\n        return html\n    with\n        | ex -> return "!!!ERROR: " + ex.Message \n    }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Async implementation 2"),": This function runs the async computation synchronously on a ",(0,l.kt)("inlineCode",{parentName:"li"},"ThreadPool")," thread because that's what ",(0,l.kt)("inlineCode",{parentName:"li"},"ExcelAsyncUtil.Run")," does. Blocking calls will block a ",(0,l.kt)("inlineCode",{parentName:"li"},"ThreadPool")," thread, eventually limiting the concurrency of the async calls")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let downloadStringAsyncTP2 url = \n    ExcelAsyncUtil.Run ("downloadStringAsyncTP2", url, (fun () -> Async.RunSynchronously (downloadStringAsyncImpl url) :> obj))\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Async implementation 3"),": Use the helper we defined above. This runs the async computation using true F# async. Should not block ",(0,l.kt)("inlineCode",{parentName:"li"},"ThreadPool")," threads, and allows cancellation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let downloadStringAsync url = \n    FsAsyncUtil.excelRunAsync "downloadStringAsync" url (downloadStringAsyncImpl url)\n')),(0,l.kt)("p",null,"Helper that will create a timer that ticks at ",(0,l.kt)("inlineCode",{parentName:"p"},"timerInterval")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"timerDuration"),", and is then done. Also not exported to Excel (incompatible signature). Notice that from F#, the ",(0,l.kt)("inlineCode",{parentName:"p"},"timer.Elapsed")," event of the BCL ",(0,l.kt)("inlineCode",{parentName:"p"},"Timer")," class implements ",(0,l.kt)("inlineCode",{parentName:"p"},"IObservable"),", so can be used directly with the transformations in the F# ",(0,l.kt)("inlineCode",{parentName:"p"},"Observable")," module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},"let createTimer timerInterval timerDuration =\n    // setup a timer\n    let timer = new System.Timers.Timer(float timerInterval)\n    timer.AutoReset <- true\n    // return an async task for stopping it after the duration\n    let timerStop = async {\n        timer.Start()\n        do! Async.Sleep timerDuration\n        timer.Stop() \n        }\n    Async.Start timerStop\n    // Make sure that the type we actually observe in the event is supported by Excel\n    // by converting the events to timestamps\n    timer.Elapsed |> Observable.map (fun elapsed -> DateTime.Now) \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Event implementation"),": Finally this is the Excel function that will tick away in a cell. Entered into a cell (",(0,l.kt)("em",{parentName:"li"},"and formatted as a Time value"),"), the formula ",(0,l.kt)("inlineCode",{parentName:"li"},"=startTimer(5000, 60000)")," will show a clock that ticks every 5 seconds for a minute.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'let startTimer timerInterval timerDuration =\n    FsAsyncUtil.excelObserve "startTimer" [|float timerInterval; float timerDuration|] (createTimer timerInterval timerDuration)\n')),(0,l.kt)("h2",{id:"putting-everything-together-in-an-excel-add-in"},"Putting everything together in an Excel add-in"),(0,l.kt)("p",null,"A complete ",(0,l.kt)("inlineCode",{parentName:"p"},".dna")," script file with the above code can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna"},"Excel-DNA distribution"),", under ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/Distribution/Samples/Async/FsAsync.dna"},"Distribution\\Samples\\Async\\FsAsync.dna"),"."),(0,l.kt)("p",null,"Alternatively, the following steps would build an add-in in Visual Studio:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new F# library in Visual Studio."),(0,l.kt)("li",{parentName:"ul"},"Install the Excel-DNA package from NuGet (",(0,l.kt)("inlineCode",{parentName:"li"},"Install-Package Excel-DNA")," from the NuGet console)."),(0,l.kt)("li",{parentName:"ul"},"Set up the Debug path:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Select \u201cStart External Program\u201d and browse to find Excel.exe, e.g. for Excel 2010 the path might be: ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Microsoft Office\\Office14\\EXCEL.EXE"),"."),(0,l.kt)("li",{parentName:"ol"},"Enter the full path to the ",(0,l.kt)("inlineCode",{parentName:"li"},".xll")," file in the output as the Command line arguments, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\MyProjects\\TestDnaFs\\bin\\Debug\\TestDnaFs-addin.xll"),"."))),(0,l.kt)("li",{parentName:"ul"},"Place the following code in ",(0,l.kt)("inlineCode",{parentName:"li"},"Library1.fs"),", compile and run:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-fsharp"},'namespace FsAsync\n\nopen System\nopen System.Threading\nopen System.Net\nopen Microsoft.FSharp.Control.WebExtensions\nopen ExcelDna.Integration\n\n/// This class implements the IExcelAddin which allows us to initialize the ExcelAsyncUtil support.\n/// It must not be a nested class (e.g. defined as a type inside a module) but a top-level class (inside a namespace)\ntype FsAsyncAddIn () =\n    interface IExcelAddIn with\n        member this.AutoOpen ()  = \n            ExcelAsyncUtil.Initialize ()\n        member this.AutoClose () = ExcelAsyncUtil.Uninitialize ()\n\n    // a regular Excel UDF just to show that the add-in works\n    static member fsaAddThem (x:double) (y:double) = x + y\n\n/// Some utility functions for connecting Excel-DNA async with F#\nmodule FsAsyncUtil =\n    /// A helper to pass an F# Async computation to Excel-DNA \n    let excelRunAsync functionName parameters async =\n        let obsSource =\n            ExcelObservableSource(\n                fun () -> \n                { new IExcelObservable with\n                    member __.Subscribe observer =\n                        // make something like CancellationDisposable\n                        let cts = new CancellationTokenSource ()\n                        let disp = { new IDisposable with member __.Dispose () = cts.Cancel () }\n                        // Start the async computation on this thread\n                        Async.StartWithContinuations \n                            (   async, \n                                ( fun result -> \n                                    observer.OnNext(result)\n                                    observer.OnCompleted () ),\n                                ( fun ex -> observer.OnError ex ),\n                                ( fun ex ->\n                                    observer.OnCompleted () ),\n                                cts.Token \n                            )\n                        // return the disposable\n                        disp\n                }) \n        ExcelAsyncUtil.Observe (functionName, parameters, obsSource)\n\n    /// A helper to pass an F# IObservable to Excel-DNA\n    let excelObserve functionName parameters observable = \n        let obsSource =\n            ExcelObservableSource(\n                fun () -> \n                { new IExcelObservable with\n                    member __.Subscribe observer =\n                        // Subscribe to the F# observable\n                        Observable.subscribe (fun value -> observer.OnNext (value)) observable\n                })\n        ExcelAsyncUtil.Observe (functionName, parameters, obsSource)\n\n// Some test functions\nmodule TestFunctions =\n    /// Plain synchronous download function\n    /// can be called from Excel\n    let downloadString url = \n        try\n            let uri = new System.Uri(url)\n            let webClient = new WebClient()\n            let html = webClient.DownloadString(uri)\n            html\n        with\n            | ex -> "!!!ERROR: " + ex.Message\n\n    /// Uses Excel-DNA async to run download on a ThreadPool thread\n    let downloadStringAsyncTP1 url = \n        ExcelAsyncUtil.Run ("downloadStringAsyncTP1", url, (fun () -> downloadString url :> obj))\n    \n    /// Create an F# asynchronous computation for the download\n    /// Not exported to Excel\n    let downloadStringAsyncImpl url = async {\n        try\n    \n            // In here we could check for cancellation using \n            // let! ct = Async.CancellationToken\n            // if ct.IsCancellationRequested then ...\n            let uri = new System.Uri(url)\n            let webClient = new WebClient()\n            let! html = webClient.AsyncDownloadString(uri)\n            return html\n        with\n            | ex -> return "!!!ERROR: " + ex.Message \n        }\n    \n    /// This function runs the async computation synchronously on a ThreadPool thread\n    /// because that\'s what ExcelAsyncUtil.Run does\n    /// Blocking calls will block a ThreadPool thread, eventually limiting the concurrency of the async calls\n    let downloadStringAsyncTP2 url = \n        ExcelAsyncUtil.Run ("downloadStringAsyncTP2", url, (fun () -> Async.RunSynchronously (downloadStringAsyncImpl url) :> obj))\n    \n    /// This runs the async computation using true F# async\n    /// Should not block ThreadPool threads, and allows cancellation\n    let downloadStringAsync url = \n        FsAsyncUtil.excelRunAsync "downloadStringAsync" url (downloadStringAsyncImpl url)\n    \n    // Helper that will create a timer that ticks at timerInterval for timerDuration, then stops\n    // Not exported to Excel (incompatible type)\n    let createTimer timerInterval timerDuration =\n        // setup a timer\n        let timer = new System.Timers.Timer(float timerInterval)\n        timer.AutoReset  Observable.map (fun elapsed -> DateTime.Now) \n    \n    // Excel function to start the timer - using the fact that F# events implement IObservable\n    let startTimer timerInterval timerDuration =\n        FsAsyncUtil.excelObserve "startTimer" [|float timerInterval; float timerDuration|] (createTimer timerInterval timerDuration)\n')),(0,l.kt)("h2",{id:"support-and-feedback"},"Support and feedback"),(0,l.kt)("p",null,"The best place to ask any questions related to Excel-DNA is the ",(0,l.kt)("a",{parentName:"p",href:"http://groups.google.com/group/exceldna"},"Excel-DNA Google group"),". Any feedback from F# users trying out Excel-DNA or the features discussed here will be very welcome. I can also be contacted directly at ",(0,l.kt)("a",{parentName:"p",href:"mailto:govert@dnakode.com"},"govert@dnakode.com"),"."))}p.isMDXComponent=!0}}]);