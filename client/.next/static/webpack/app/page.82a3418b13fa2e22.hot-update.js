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

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Add */ \"(app-client)/./app/components/Add.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { data , isLoading  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead)(contract, \"getPosts\");\n    const parsedPosts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return data === null || data === void 0 ? void 0 : data.map((param, i)=>{\n            let { author , content , title , postId  } = param;\n            return {\n                author,\n                content,\n                title,\n                postId\n            };\n        });\n    }, data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-4 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Add__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: parsedPosts === null || parsedPosts === void 0 ? void 0 : parsedPosts.map((param)=>/*#__PURE__*/ {\n                        let { title , content , postId  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-10 w-full p-4 flex flex-col space-y-2 shadow-md bg-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-lg\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: content\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleDelete(postId),\n                                    children: isDeleting ? \"Deleting..\" : \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"D/4boKcknhHD42Y1Kc8eJynCGn8=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTTZCO0FBQ1U7QUFDSjtBQUVwQixTQUFTSyxPQUFPOztJQUM3QixNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixnRUFBV0EsQ0FDOUI7SUFFRixNQUFNLEVBQUVPLEtBQUksRUFBRUMsVUFBUyxFQUFFLEdBQUdQLG9FQUFlQSxDQUFDSyxVQUFVO0lBRXRELE1BQU1HLGNBQWNOLDhDQUFPQSxDQUN6QjtRQUNFSSxPQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLEdBQUcsQ0FBQyxRQUFxQ0MsSUFBTztnQkFBM0MsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFO21CQUFTO2dCQUNwREg7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7WUFDRjtRQUFBO09BQ0ZSO0lBR0YscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDYix1REFBR0E7Ozs7OzhCQUNKLDhEQUFDYzs4QkFDRVQsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhQyxHQUFHLENBQUMsdUJBQ2hCOzRCQURpQixFQUFFSSxNQUFLLEVBQUVELFFBQU8sRUFBRUUsT0FBTSxFQUFFOytCQUMzQyw4REFBQ0c7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBS0YsV0FBVTs4Q0FBcUJIOzs7Ozs7OENBQ3JDLDhEQUFDSzs4Q0FBTU47Ozs7Ozs4Q0FDUCw4REFBQ087b0NBQU9DLFNBQVMsSUFBTUMsYUFBYVA7OENBQ2pDUSxhQUFhLGVBQWUsUUFBUTs7Ozs7Ozs7Ozs7O29CQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztHQW5DdUJsQjs7UUFDREwsNERBQVdBO1FBR0pDLGdFQUFlQTs7O0tBSnJCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgdXNlQ29udHJhY3QsXG4gIHVzZUNvbnRyYWN0UmVhZCxcbiAgdXNlQ29udHJhY3RXcml0ZSxcbn0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWRkIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KFxuICAgIFwiMHhEOUMwMGI5YmE1YWFkNjE0MjhkZjU1NTA4NjFBYzI5ZjhFMjMzY0M5XCJcbiAgKTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUNvbnRyYWN0UmVhZChjb250cmFjdCwgXCJnZXRQb3N0c1wiKTtcblxuICBjb25zdCBwYXJzZWRQb3N0cyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGRhdGE/Lm1hcCgoeyBhdXRob3IsIGNvbnRlbnQsIHRpdGxlLCBwb3N0SWQgfSwgaSkgPT4gKHtcbiAgICAgICAgYXV0aG9yLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcG9zdElkLFxuICAgICAgfSkpLFxuICAgIGRhdGFcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCB3LWZ1bGxcIj5cbiAgICAgICAgPEFkZCAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwYXJzZWRQb3N0cz8ubWFwKCh7IHRpdGxlLCBjb250ZW50LCBwb3N0SWQgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEwIHctZnVsbCBwLTQgZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgc2hhZG93LW1kIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NvbnRlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwb3N0SWQpfT5cbiAgICAgICAgICAgICAgICB7aXNEZWxldGluZyA/IFwiRGVsZXRpbmcuLlwiIDogXCJEZWxldGVcIn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFJlYWQiLCJSZWFjdCIsInVzZU1lbW8iLCJBZGQiLCJIb21lIiwiY29udHJhY3QiLCJkYXRhIiwiaXNMb2FkaW5nIiwicGFyc2VkUG9zdHMiLCJtYXAiLCJpIiwiYXV0aG9yIiwiY29udGVudCIsInRpdGxlIiwicG9zdElkIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlRGVsZXRlIiwiaXNEZWxldGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});