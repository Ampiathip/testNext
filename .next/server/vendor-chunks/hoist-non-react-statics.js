"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hoist-non-react-statics";
exports.ids = ["vendor-chunks/hoist-non-react-statics"];
exports.modules = {

/***/ "(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar reactIs = __webpack_require__(/*! react-is */ \"(ssr)/./node_modules/react-is/index.js\");\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */ var REACT_STATICS = {\n    childContextTypes: true,\n    contextType: true,\n    contextTypes: true,\n    defaultProps: true,\n    displayName: true,\n    getDefaultProps: true,\n    getDerivedStateFromError: true,\n    getDerivedStateFromProps: true,\n    mixins: true,\n    propTypes: true,\n    type: true\n};\nvar KNOWN_STATICS = {\n    name: true,\n    length: true,\n    prototype: true,\n    caller: true,\n    callee: true,\n    arguments: true,\n    arity: true\n};\nvar FORWARD_REF_STATICS = {\n    \"$$typeof\": true,\n    render: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true\n};\nvar MEMO_STATICS = {\n    \"$$typeof\": true,\n    compare: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true,\n    type: true\n};\nvar TYPE_STATICS = {};\nTYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;\nTYPE_STATICS[reactIs.Memo] = MEMO_STATICS;\nfunction getStatics(component) {\n    // React v16.11 and below\n    if (reactIs.isMemo(component)) {\n        return MEMO_STATICS;\n    } // React v16.12 and above\n    return TYPE_STATICS[component[\"$$typeof\"]] || REACT_STATICS;\n}\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n    if (typeof sourceComponent !== \"string\") {\n        // don't hoist over string (html) components\n        if (objectPrototype) {\n            var inheritedComponent = getPrototypeOf(sourceComponent);\n            if (inheritedComponent && inheritedComponent !== objectPrototype) {\n                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n            }\n        }\n        var keys = getOwnPropertyNames(sourceComponent);\n        if (getOwnPropertySymbols) {\n            keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n        }\n        var targetStatics = getStatics(targetComponent);\n        var sourceStatics = getStatics(sourceComponent);\n        for(var i = 0; i < keys.length; ++i){\n            var key = keys[i];\n            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n                try {\n                    // Avoid failures from read-only properties\n                    defineProperty(targetComponent, key, descriptor);\n                } catch (e) {}\n            }\n        }\n    }\n    return targetComponent;\n}\nmodule.exports = hoistNonReactStatics;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxVQUFVQyxtQkFBT0EsQ0FBQztBQUV0Qjs7O0NBR0MsR0FDRCxJQUFJQyxnQkFBZ0I7SUFDbEJDLG1CQUFtQjtJQUNuQkMsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxpQkFBaUI7SUFDakJDLDBCQUEwQjtJQUMxQkMsMEJBQTBCO0lBQzFCQyxRQUFRO0lBQ1JDLFdBQVc7SUFDWEMsTUFBTTtBQUNSO0FBQ0EsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxPQUFPO0FBQ1Q7QUFDQSxJQUFJQyxzQkFBc0I7SUFDeEIsWUFBWTtJQUNaQyxRQUFRO0lBQ1JqQixjQUFjO0lBQ2RDLGFBQWE7SUFDYkssV0FBVztBQUNiO0FBQ0EsSUFBSVksZUFBZTtJQUNqQixZQUFZO0lBQ1pDLFNBQVM7SUFDVG5CLGNBQWM7SUFDZEMsYUFBYTtJQUNiSyxXQUFXO0lBQ1hDLE1BQU07QUFDUjtBQUNBLElBQUlhLGVBQWUsQ0FBQztBQUNwQkEsWUFBWSxDQUFDMUIsUUFBUTJCLFVBQVUsQ0FBQyxHQUFHTDtBQUNuQ0ksWUFBWSxDQUFDMUIsUUFBUTRCLElBQUksQ0FBQyxHQUFHSjtBQUU3QixTQUFTSyxXQUFXQyxTQUFTO0lBQzNCLHlCQUF5QjtJQUN6QixJQUFJOUIsUUFBUStCLE1BQU0sQ0FBQ0QsWUFBWTtRQUM3QixPQUFPTjtJQUNULEVBQUUseUJBQXlCO0lBRzNCLE9BQU9FLFlBQVksQ0FBQ0ksU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJNUI7QUFDaEQ7QUFFQSxJQUFJOEIsaUJBQWlCQyxPQUFPRCxjQUFjO0FBQzFDLElBQUlFLHNCQUFzQkQsT0FBT0MsbUJBQW1CO0FBQ3BELElBQUlDLHdCQUF3QkYsT0FBT0UscUJBQXFCO0FBQ3hELElBQUlDLDJCQUEyQkgsT0FBT0csd0JBQXdCO0FBQzlELElBQUlDLGlCQUFpQkosT0FBT0ksY0FBYztBQUMxQyxJQUFJQyxrQkFBa0JMLE9BQU9oQixTQUFTO0FBQ3RDLFNBQVNzQixxQkFBcUJDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxTQUFTO0lBQ3ZFLElBQUksT0FBT0Qsb0JBQW9CLFVBQVU7UUFDdkMsNENBQTRDO1FBQzVDLElBQUlILGlCQUFpQjtZQUNuQixJQUFJSyxxQkFBcUJOLGVBQWVJO1lBRXhDLElBQUlFLHNCQUFzQkEsdUJBQXVCTCxpQkFBaUI7Z0JBQ2hFQyxxQkFBcUJDLGlCQUFpQkcsb0JBQW9CRDtZQUM1RDtRQUNGO1FBRUEsSUFBSUUsT0FBT1Ysb0JBQW9CTztRQUUvQixJQUFJTix1QkFBdUI7WUFDekJTLE9BQU9BLEtBQUtDLE1BQU0sQ0FBQ1Ysc0JBQXNCTTtRQUMzQztRQUVBLElBQUlLLGdCQUFnQmpCLFdBQVdXO1FBQy9CLElBQUlPLGdCQUFnQmxCLFdBQVdZO1FBRS9CLElBQUssSUFBSU8sSUFBSSxHQUFHQSxJQUFJSixLQUFLNUIsTUFBTSxFQUFFLEVBQUVnQyxFQUFHO1lBQ3BDLElBQUlDLE1BQU1MLElBQUksQ0FBQ0ksRUFBRTtZQUVqQixJQUFJLENBQUNsQyxhQUFhLENBQUNtQyxJQUFJLElBQUksQ0FBRVAsQ0FBQUEsYUFBYUEsU0FBUyxDQUFDTyxJQUFJLEtBQUssQ0FBRUYsQ0FBQUEsaUJBQWlCQSxhQUFhLENBQUNFLElBQUksS0FBSyxDQUFFSCxDQUFBQSxpQkFBaUJBLGFBQWEsQ0FBQ0csSUFBSSxHQUFHO2dCQUM3SSxJQUFJQyxhQUFhZCx5QkFBeUJLLGlCQUFpQlE7Z0JBRTNELElBQUk7b0JBQ0YsMkNBQTJDO29CQUMzQ2pCLGVBQWVRLGlCQUFpQlMsS0FBS0M7Z0JBQ3ZDLEVBQUUsT0FBT0MsR0FBRyxDQUFDO1lBQ2Y7UUFDRjtJQUNGO0lBRUEsT0FBT1g7QUFDVDtBQUVBWSxPQUFPQyxPQUFPLEdBQUdkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcz85MWRiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIl0sIm5hbWVzIjpbInJlYWN0SXMiLCJyZXF1aXJlIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImNhbGxlZSIsImFyZ3VtZW50cyIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsInJlbmRlciIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJGb3J3YXJkUmVmIiwiTWVtbyIsImdldFN0YXRpY3MiLCJjb21wb25lbnQiLCJpc01lbW8iLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50Iiwia2V5cyIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\n");

/***/ })

};
;