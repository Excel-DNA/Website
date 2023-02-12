"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[4704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?l.createElement(h,o(o({ref:t},u),{},{components:n})):l.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(7462),r=(n(7294),n(3905));const a={title:"Resizing Excel UDF result arrays",date:"2011-01-30 18:27:00 -0000",authors:"govert",tags:["samples",".net","async","excel","exceldna","xll"]},o=void 0,i={permalink:"/Website/blog/2011/01/30/resizing-excel-udf-result-arrays",source:"@site/blog/2011-01-30-resizing-excel-udf-result-arrays.md",title:"Resizing Excel UDF result arrays",description:"Update (21 June 2017)",date:"2011-01-30T18:27:00.000Z",formattedDate:"January 30, 2011",tags:[{label:"samples",permalink:"/Website/blog/tags/samples"},{label:".net",permalink:"/Website/blog/tags/net"},{label:"async",permalink:"/Website/blog/tags/async"},{label:"excel",permalink:"/Website/blog/tags/excel"},{label:"exceldna",permalink:"/Website/blog/tags/exceldna"},{label:"xll",permalink:"/Website/blog/tags/xll"}],readingTime:5.47,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Resizing Excel UDF result arrays",date:"2011-01-30 18:27:00 -0000",authors:"govert",tags:["samples",".net","async","excel","exceldna","xll"]},prevItem:{title:"Financial Analytics Suite (FinAnSu) - made with Excel-DNA",permalink:"/Website/blog/2011/04/28/financial-analytics-suite-finansu-made-with-excel-dna"},nextItem:{title:"Offloading UDF computations to a Windows HPC cluster from Excel 2010",permalink:"/Website/blog/2010/12/09/cluster-udf-support"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update (21 June 2017): The most up-to-date version of the ArrayResizer utility can be found here"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/blob/master/Distribution/Samples/ArrayResizer.dna"},"https://github.com/Excel-DNA/ExcelDna/blob/master/Distribution/Samples/ArrayResizer.dna")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update: To work correctly under Excel 2000/2002/2003, this sample requires at least version 0.29.0.12 of Excel-DNA"),"."),(0,r.kt)("p",null,"A common question on the ",(0,r.kt)("a",{parentName:"p",href:"http://groups.google.com/group/exceldna"},"Excel-DNA group")," is how to automatically resize the results of an array formula. The most well-know appearance of this trick is in the Bloomberg add-in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING! This is a bad idea"),". Excel does not allow you to modify the sheet from within a user-defined function. Doing this breaks Excel's calculation model."),(0,r.kt)("p",null,"Anyway, here is my attempt at an Excel-DNA add-in that implements this trick. My approach is to run a macro on a separate thread that will check and if required will expand the formula to an array formula of the right size. This way nothing ugly gets done if the array size is already correct - future recalculations will not run the formula array resizer if the size is still correct."),(0,r.kt)("p",null,"The code below will register a function call ",(0,r.kt)("inlineCode",{parentName:"p"},"Resize"),". You can either call ",(0,r.kt)("inlineCode",{parentName:"p"},"Resize")," from within your function, or enter something like ",(0,r.kt)("inlineCode",{parentName:"p"},"=Resize(MyFunction(\u2026))")," as the cell formula. The code also registers two sample functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"MakeArray")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MakeArrayAndResize")," to play with, each take the number of rows and columns for the size of the returned array."),(0,r.kt)("p",null,"To test this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/"},"Get started with Excel-DNA"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy the code and xml wrapper into a text file called ",(0,r.kt)("inlineCode",{parentName:"li"},"Resizer.dna")," (the xml wrapper is at the end of this post)."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExcelDna.xll")," in the Excel-DNA distribution to ",(0,r.kt)("inlineCode",{parentName:"li"},"Resizer.xll")," (next to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Resizer.dna"),")."),(0,r.kt)("li",{parentName:"ol"},"File->Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Resizer.xll")," in Excel and enter something like ",(0,r.kt)("inlineCode",{parentName:"li"},"=MakeArrayAndResize(5,3)")," into a cell.\nSee how it grows.")),(0,r.kt)("p",null,"In the current version, the formula expansion is destructive, so anything in the way will be erased. One case I don't know how to deal with is when there is an array that would be partially overwritten by the expended function result. In the current version Excel will display an error that says \"You cannot change part of an array.\", and I replace the formula with a text version of it. I'd love to know how you think we should handle this case."),(0,r.kt)("p",null,"Any questions or comments (can if anyone can get it to work, or not?) can be directed to the ","[Excel-DNA Google group][excel-dna-group]"," or to me directly via e-mail. I'm pretty sure there are a few cases where it will break - please let me know if you run into any problems."),(0,r.kt)("p",null,"I'll try to gather the comments and suggestions for an improved implementation that might go into the next version of Excel-DNA."),(0,r.kt)("p",null,"Also, if you have any questions about how the implementation works, I'd be happy to write a follow up post that explains a bit more of what I'm doing. But first, let's try to get it working."),(0,r.kt)("p",null,"Here's the Resizer add-in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Reflection;\nusing System.Runtime.InteropServices;\nusing System.Threading;\nusing ExcelDna.Integration;\n\npublic static class ResizeTest\n{\n    public static object MakeArray(int rows, int columns)\n    {\n        object[,] result = new string[rows, columns];\n        for (int i = 0; i < rows; i++)\n        {\n            for (int j = 0; j < columns; j++)\n            {\n                result[i,j] = string.Format("({0},{1})", i, j);\n            }\n        }\n\n        return result;\n    }\n     \n    public static object MakeArrayAndResize(int rows, int columns)\n    {\n        object result = MakeArray(rows, columns);\n        // Call Resize via Excel - so if the Resize add-in is not part of this code, it should still work.\n        return XlCall.Excel(XlCall.xlUDF, "Resize", result);\n    }\n}\n\npublic class Resizer\n{\n    static Queue<ExcelReference> ResizeJobs = new Queue<ExcelReference>();\n\n    // This function will run in the UDF context.\n    // Needs extra protection to allow multithreaded use.\n    public static object Resize(object[,] array)\n    {\n        ExcelReference caller = XlCall.Excel(XlCall.xlfCaller) as ExcelReference;\n        if (caller == null)\n            return array;\n     \n        int rows = array.GetLength(0);\n        int columns = array.GetLength(1);\n     \n        if ((caller.RowLast - caller.RowFirst + 1 != rows) ||\n            (caller.ColumnLast - caller.ColumnFirst + 1 != columns))\n        {\n            // Size problem: enqueue job, call async update and return #N/A\n            // TODO: Add guard for ever-changing result?\n            EnqueueResize(caller, rows, columns);\n            AsyncRunMacro("DoResizing");\n            return ExcelError.ExcelErrorNA;\n        }\n     \n        // Size is already OK - just return result\n        return array;\n    }\n     \n    static void EnqueueResize(ExcelReference caller, int rows, int columns)\n    {\n        ExcelReference target = new ExcelReference(caller.RowFirst, caller.RowFirst + rows - 1, caller.ColumnFirst, caller.ColumnFirst + columns - 1, caller.SheetId);\n        ResizeJobs.Enqueue(target);\n    }\n     \n    public static void DoResizing()\n    {\n        while (ResizeJobs.Count > 0)\n        {\n            DoResize(ResizeJobs.Dequeue());\n        }\n    }\n     \n    static void DoResize(ExcelReference target)\n    {\n        try\n        {\n            // Get the current state for reset later\n     \n            XlCall.Excel(XlCall.xlcEcho, false);\n     \n            // Get the formula in the first cell of the target\n            string formula = (string)XlCall.Excel(XlCall.xlfGetCell, 41, target);\n            ExcelReference firstCell = new ExcelReference(target.RowFirst, target.RowFirst, target.ColumnFirst, target.ColumnFirst, target.SheetId);\n     \n            bool isFormulaArray = (bool)XlCall.Excel(XlCall.xlfGetCell, 49, target);\n            if (isFormulaArray)\n            {\n                object oldSelectionOnActiveSheet = XlCall.Excel(XlCall.xlfSelection);\n                object oldActiveCell = XlCall.Excel(XlCall.xlfActiveCell);\n     \n                // Remember old selection and select the first cell of the target\n                string firstCellSheet = (string)XlCall.Excel(XlCall.xlSheetNm, firstCell);\n                XlCall.Excel(XlCall.xlcWorkbookSelect, new object[] {firstCellSheet});\n                object oldSelectionOnArraySheet = XlCall.Excel(XlCall.xlfSelection);\n                XlCall.Excel(XlCall.xlcFormulaGoto, firstCell);\n     \n                // Extend the selection to the whole array and clear\n                XlCall.Excel(XlCall.xlcSelectSpecial, 6);\n                ExcelReference oldArray = (ExcelReference)XlCall.Excel(XlCall.xlfSelection);\n     \n                oldArray.SetValue(ExcelEmpty.Value);\n                XlCall.Excel(XlCall.xlcSelect, oldSelectionOnArraySheet);\n                XlCall.Excel(XlCall.xlcFormulaGoto, oldSelectionOnActiveSheet);\n            }\n            // Get the formula and convert to R1C1 mode\n            bool isR1C1Mode = (bool)XlCall.Excel(XlCall.xlfGetWorkspace, 4);\n            string formulaR1C1 = formula;\n            if (!isR1C1Mode)\n            {\n                // Set the formula into the whole target\n                formulaR1C1 = (string)XlCall.Excel(XlCall.xlfFormulaConvert, formula, true, false, ExcelMissing.Value, firstCell);\n            }\n            // Must be R1C1-style references\n            object ignoredResult;\n            XlCall.XlReturn retval = XlCall.TryExcel(XlCall.xlcFormulaArray, out ignoredResult, formulaR1C1, target);\n            if (retval != XlCall.XlReturn.XlReturnSuccess)\n            {\n                // TODO: Consider what to do now!?\n                // Might have failed due to array in the way.\n                firstCell.SetValue("\'" + formula);\n            }\n        }\n        finally\n        {\n            XlCall.Excel(XlCall.xlcEcho, true);\n        }\n    }\n     \n    // Most of this from the newsgroup: http://groups.google.com/group/exceldna/browse_thread/thread/a72c9b9f49523fc9/4577cd6840c7f195\n    private static readonly TimeSpan BackoffTime = TimeSpan.FromSeconds(1);\n    static void AsyncRunMacro(string macroName)\n    {\n        // Do this on a new thread....\n        Thread newThread = new Thread( delegate ()\n        {\n            while(true)\n            {\n                try\n                {\n                    RunMacro(macroName);\n                    break;\n                }\n                catch(COMException cex)\n                {\n                    if(IsRetry(cex))\n                    {\n                        Thread.Sleep(BackoffTime);\n                        continue;\n                    }\n                    // TODO: Handle unexpected error\n                    return;\n                }\n                catch(Exception ex)\n                {\n                    // TODO: Handle unexpected error\n                    return;\n                }\n            }\n        });\n        newThread.Start();\n    }\n     \n    static void RunMacro(string macroName)\n    {\n        object xlApp;\n        try\n        {\n            object xlApp = ExcelDnaUtil.Application;\n            xlApp.GetType().InvokeMember("Run", BindingFlags.InvokeMethod, null, xlApp, new object[] {macroName});\n        }\n        catch (TargetInvocationException tie)\n        {\n            throw tie.InnerException;\n        }\n        finally\n        {\n            Marshal.ReleaseComObject(xlApp);\n        }\n    }\n     \n    const uint RPC_E_SERVERCALL_RETRYLATER = 0x8001010A;\n    const uint VBA_E_IGNORE = 0x800AC472;\n    static bool IsRetry(COMException e)\n    {\n        uint errorCode = (uint)e.ErrorCode;\n        switch(errorCode)\n        {\n            case RPC_E_SERVERCALL_RETRYLATER:\n            case VBA_E_IGNORE:\n                return true;\n            default:\n                return false;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can easily make a test add-in for this by wrapping the code into a .dna file with this around:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<DnaLibrary Language="CS">\n<![CDATA[\n\n    \x3c!--// Paste all of the above code here //--\x3e\n\n]]>\n</DnaLibrary>\n')))}p.isMDXComponent=!0}}]);