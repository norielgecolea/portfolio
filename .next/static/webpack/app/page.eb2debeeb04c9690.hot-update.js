"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_component_homescreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/component/homescreen */ \"(app-pages-browser)/./components/component/homescreen.tsx\");\n/* harmony import */ var _components_component_pos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/component/pos */ \"(app-pages-browser)/./components/component/pos.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Scroll to the top of the page when the component mounts\n        window.scrollTo(0, 0);\n    }, []);\n    function homeclick() {\n        setCurrentView(\"home\"); // Set the view to 'home'\n        window.scrollTo(0, 0); // Scroll to the top\n    }\n    function renderComponent(view) {\n        switch(view){\n            case \"home\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_homescreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    currentView: currentView,\n                    setCurrentView: setCurrentView\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 16\n                }, this);\n            case \"about\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_homescreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    currentView: currentView,\n                    setCurrentView: setCurrentView\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 16\n                }, this);\n            case \"pos\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_pos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_homescreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    currentView: currentView,\n                    setCurrentView: setCurrentView\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-[100dvh] flex-col bg-background text-foreground\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Noriel Gecolea\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: homeclick,\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CodeIcon, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Noriel Fernando Gecolea\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"hidden space-x-4 md:flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCurrentView(\"about\"),\n                                    className: \"hover:text-primary\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCurrentView(\"projects\"),\n                                    className: \"hover:text-primary\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCurrentView(\"skills\"),\n                                    className: \"hover:text-primary\",\n                                    children: \"Skills\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCurrentView(\"contact\"),\n                                    className: \"hover:text-primary\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden\",\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: renderComponent(currentView)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Q0TdOcbPG52MQXmFCvayWy4lPd8=\");\n_c = Home;\nfunction CodeIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polyline\", {\n                points: \"16 18 22 12 16 6\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polyline\", {\n                points: \"8 6 2 12 8 18\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Noriel Gecolea\\\\Documents\\\\digitalportfolio2\\\\app\\\\page.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c1 = CodeIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"CodeIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1E7QUFDVjtBQUNyQjtBQUViLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1IsMERBQTBEO1FBQzFETyxPQUFPQyxRQUFRLENBQUMsR0FBRztJQUNyQixHQUFHLEVBQUU7SUFFTCxTQUFTQztRQUNQSCxlQUFlLFNBQVMseUJBQXlCO1FBQ2pEQyxPQUFPQyxRQUFRLENBQUMsR0FBRyxJQUFJLG9CQUFvQjtJQUM3QztJQUVBLFNBQVNFLGdCQUFnQkMsSUFBWTtRQUNuQyxPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNWLHdFQUFVQTtvQkFBQ0ksYUFBYUE7b0JBQWFDLGdCQUFnQkE7Ozs7OztZQUMvRCxLQUFLO2dCQUNILHFCQUFPLDhEQUFDTCx3RUFBVUE7b0JBQUNJLGFBQWFBO29CQUFhQyxnQkFBZ0JBOzs7Ozs7WUFDL0QsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0osaUVBQU9BOzs7OztZQUNqQjtnQkFDRSxxQkFBTyw4REFBQ0Qsd0VBQVVBO29CQUFDSSxhQUFhQTtvQkFBYUMsZ0JBQWdCQTs7Ozs7O1FBQ2pFO0lBQ0Y7SUFDQSxxQkFFRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNWLGtEQUFJQTswQkFDSCw0RUFBQ1c7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBT0YsV0FBVTswQkFDaEIsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQU9DLFNBQVNSOzRCQUFXSSxXQUFVOzs4Q0FDcEMsOERBQUNLO29DQUFTTCxXQUFVOzs7Ozs7OENBQ3BCLDhEQUFDTTtvQ0FBS04sV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7O3NDQUU5Qiw4REFBQ087NEJBQUlQLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FBT0MsU0FBUyxJQUFNWCxlQUFlO29DQUFVTyxXQUFVOzhDQUFxQjs7Ozs7OzhDQUMvRSw4REFBQ0c7b0NBQU9DLFNBQVMsSUFBTVgsZUFBZTtvQ0FBYU8sV0FBVTs4Q0FBcUI7Ozs7Ozs4Q0FDbEYsOERBQUNHO29DQUFPQyxTQUFTLElBQU1YLGVBQWU7b0NBQVdPLFdBQVU7OENBQXFCOzs7Ozs7OENBQ2hGLDhEQUFDRztvQ0FBT0MsU0FBUyxJQUFNWCxlQUFlO29DQUFZTyxXQUFVOzhDQUFxQjs7Ozs7Ozs7Ozs7O3NDQUVuRiw4REFBQ0c7NEJBQU9ILFdBQVU7c0NBQXFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNM04sOERBQUNROzBCQUNFWCxnQkFBZ0JMOzs7Ozs7Ozs7Ozs7QUFJekI7R0F0RHdCRDtLQUFBQTtBQXdEeEIsU0FBU2MsU0FBU0ksS0FBb0M7SUFDcEQscUJBQ0UsOERBQUNDO1FBQ0UsR0FBR0QsS0FBSztRQUNURSxPQUFNO1FBQ05DLE9BQU07UUFDTkMsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsUUFBTztRQUNQQyxhQUFZO1FBQ1pDLGVBQWM7UUFDZEMsZ0JBQWU7OzBCQUVmLDhEQUFDQztnQkFBU0MsUUFBTzs7Ozs7OzBCQUNqQiw4REFBQ0Q7Z0JBQVNDLFFBQU87Ozs7Ozs7Ozs7OztBQUd2QjtNQWxCU2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZXNjcmVlbiBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50L2hvbWVzY3JlZW4nO1xuaW1wb3J0IFBPU1BhZ2UgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudC9wb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VycmVudFZpZXcsIHNldEN1cnJlbnRWaWV3XSA9IHVzZVN0YXRlKCdob21lJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaG9tZWNsaWNrKCkge1xuICAgIHNldEN1cnJlbnRWaWV3KCdob21lJyk7IC8vIFNldCB0aGUgdmlldyB0byAnaG9tZSdcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vIFNjcm9sbCB0byB0aGUgdG9wXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQodmlldzogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgcmV0dXJuIDxIb21lc2NyZWVuIGN1cnJlbnRWaWV3PXtjdXJyZW50Vmlld30gc2V0Q3VycmVudFZpZXc9e3NldEN1cnJlbnRWaWV3fSAvPjtcbiAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgcmV0dXJuIDxIb21lc2NyZWVuIGN1cnJlbnRWaWV3PXtjdXJyZW50Vmlld30gc2V0Q3VycmVudFZpZXc9e3NldEN1cnJlbnRWaWV3fSAvPjtcbiAgICAgIGNhc2UgJ3Bvcyc6XG4gICAgICAgIHJldHVybiA8UE9TUGFnZSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8SG9tZXNjcmVlbiBjdXJyZW50Vmlldz17Y3VycmVudFZpZXd9IHNldEN1cnJlbnRWaWV3PXtzZXRDdXJyZW50Vmlld30gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtWzEwMGR2aF0gZmxleC1jb2wgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Tm9yaWVsIEdlY29sZWE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCB3LWZ1bGwgYmctYmFja2dyb3VuZC84MCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBoLTE2IG1heC13LTd4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtob21lY2xpY2t9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8Q29kZUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ob3JpZWwgRmVybmFuZG8gR2Vjb2xlYTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTQgbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VmlldygnYWJvdXQnKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5XCI+QWJvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFZpZXcoJ3Byb2plY3RzJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeVwiPlByb2plY3RzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRWaWV3KCdza2lsbHMnKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5XCI+U2tpbGxzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRWaWV3KCdjb250YWN0Jyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeVwiPkNvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctcHJpbWFyeSBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1wcmltYXJ5LzkwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5IGZvY3VzOnJpbmctb2Zmc2V0LTIgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICBNZW51XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7cmVuZGVyQ29tcG9uZW50KGN1cnJlbnRWaWV3KX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29kZUljb24ocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLnByb3BzfVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgPlxuICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjE2IDE4IDIyIDEyIDE2IDZcIiAvPlxuICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjggNiAyIDEyIDggMThcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lc2NyZWVuIiwiUE9TUGFnZSIsIkhlYWQiLCJIb21lIiwiY3VycmVudFZpZXciLCJzZXRDdXJyZW50VmlldyIsIndpbmRvdyIsInNjcm9sbFRvIiwiaG9tZWNsaWNrIiwicmVuZGVyQ29tcG9uZW50IiwidmlldyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaGVhZGVyIiwiYnV0dG9uIiwib25DbGljayIsIkNvZGVJY29uIiwic3BhbiIsIm5hdiIsIm1haW4iLCJwcm9wcyIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwicG9seWxpbmUiLCJwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});