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

/***/ "(app-client)/./app/components/Add.tsx":
/*!********************************!*\
  !*** ./app/components/Add.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { mutateAsync: addPost , isLoading: isCreating  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(contract, \"addPost\");\n    const createPost = async ()=>{\n        try {\n            const data = await addPost({\n                args: [\n                    titleRef.current.value,\n                    contentRef.current.value\n                ]\n            });\n            console.info(\"contract call successs\", data);\n        } catch (err) {\n            console.error(\"contract call failure\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ConnectWallet, {\n                theme: \"dark\"\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col space-y-3\",\n                onSubmit: createPost,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"p-2 rounded-md\",\n                        placeholder: \"title\",\n                        ref: titleRef\n                    }, void 0, false, {\n                        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"p-2 rounded-md\",\n                        placeholder: \"content\",\n                        ref: contentRef\n                    }, void 0, false, {\n                        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white rounded-xl p-5 w-content\",\n                        type: \"submit\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            createPost();\n                        },\n                        children: \"Publish\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"5T63x0ElczO57uE1nagtsmWuM4w=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvQWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTzZCO0FBQ0U7QUFFaEIsU0FBU0ksTUFBTTs7SUFDNUIsTUFBTUMsV0FBV0YsNkNBQU1BO0lBQ3ZCLE1BQU1HLGFBQWFILDZDQUFNQTtJQUN6QixNQUFNLEVBQUVJLFNBQVEsRUFBRSxHQUFHUCxnRUFBV0EsQ0FDOUI7SUFFRixNQUFNLEVBQUVRLGFBQWFDLFFBQU8sRUFBRUMsV0FBV0MsV0FBVSxFQUFFLEdBQUdWLHFFQUFnQkEsQ0FDdEVNLFVBQ0E7SUFHRixNQUFNSyxhQUFhLFVBQVk7UUFDN0IsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTUosUUFBUTtnQkFDekJLLE1BQU07b0JBQUNULFNBQVNVLE9BQU8sQ0FBQ0MsS0FBSztvQkFBRVYsV0FBV1MsT0FBTyxDQUFDQyxLQUFLO2lCQUFDO1lBQzFEO1lBQ0FDLFFBQVFDLElBQUksQ0FBQywwQkFBMEJMO1FBQ3pDLEVBQUUsT0FBT00sS0FBSztZQUNaRixRQUFRRyxLQUFLLENBQUMseUJBQXlCRDtRQUN6QztJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEIsOERBQWFBO2dCQUFDcUIsT0FBTTs7Ozs7OzBCQUNyQiw4REFBQ0M7Z0JBQUtGLFdBQVU7Z0JBQTBCRyxVQUFVYjs7a0NBQ2xELDhEQUFDYzt3QkFBTUosV0FBVTt3QkFBaUJLLGFBQVk7d0JBQVFDLEtBQUt2Qjs7Ozs7O2tDQUMzRCw4REFBQ3FCO3dCQUNDSixXQUFVO3dCQUNWSyxhQUFZO3dCQUNaQyxLQUFLdEI7Ozs7OztrQ0FFUCw4REFBQ3VCO3dCQUNDUCxXQUFVO3dCQUNWUSxNQUFLO3dCQUNMQyxTQUFTLENBQUNDLElBQU07NEJBQ2RBLEVBQUVDLGNBQWM7NEJBQ2hCckI7d0JBQ0Y7a0NBQ0Q7Ozs7Ozs7Ozs7OztZQUdLOzs7Ozs7O0FBR2QsQ0FBQztHQTVDdUJSOztRQUdESiw0REFBV0E7UUFHd0JDLGlFQUFnQkE7OztLQU5sREciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQWRkLnRzeD85YTQyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICB1c2VDb250cmFjdCxcbiAgdXNlQ29udHJhY3RXcml0ZSxcbiAgdXNlTWV0YW1hc2ssXG4gIENvbm5lY3RXYWxsZXQsXG59IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KFxuICAgIFwiMHhEOUMwMGI5YmE1YWFkNjE0MjhkZjU1NTA4NjFBYzI5ZjhFMjMzY0M5XCJcbiAgKTtcbiAgY29uc3QgeyBtdXRhdGVBc3luYzogYWRkUG9zdCwgaXNMb2FkaW5nOiBpc0NyZWF0aW5nIH0gPSB1c2VDb250cmFjdFdyaXRlKFxuICAgIGNvbnRyYWN0LFxuICAgIFwiYWRkUG9zdFwiXG4gICk7XG5cbiAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFkZFBvc3Qoe1xuICAgICAgICBhcmdzOiBbdGl0bGVSZWYuY3VycmVudC52YWx1ZSwgY29udGVudFJlZi5jdXJyZW50LnZhbHVlXSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5pbmZvKFwiY29udHJhY3QgY2FsbCBzdWNjZXNzc1wiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJjb250cmFjdCBjYWxsIGZhaWx1cmVcIiwgZXJyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgPENvbm5lY3RXYWxsZXQgdGhlbWU9XCJkYXJrXCIgLz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0zXCIgb25TdWJtaXQ9e2NyZWF0ZVBvc3R9PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbWRcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgcmVmPXt0aXRsZVJlZn0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29udGVudFwiXG4gICAgICAgICAgcmVmPXtjb250ZW50UmVmfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSByb3VuZGVkLXhsIHAtNSB3LWNvbnRlbnRcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjcmVhdGVQb3N0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFB1Ymxpc2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+e1wiIFwifVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0IiwidXNlQ29udHJhY3RXcml0ZSIsIkNvbm5lY3RXYWxsZXQiLCJ1c2VSZWYiLCJBZGQiLCJ0aXRsZVJlZiIsImNvbnRlbnRSZWYiLCJjb250cmFjdCIsIm11dGF0ZUFzeW5jIiwiYWRkUG9zdCIsImlzTG9hZGluZyIsImlzQ3JlYXRpbmciLCJjcmVhdGVQb3N0IiwiZGF0YSIsImFyZ3MiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwiaW5mbyIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidGhlbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVmIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Add.tsx\n"));

/***/ })

});