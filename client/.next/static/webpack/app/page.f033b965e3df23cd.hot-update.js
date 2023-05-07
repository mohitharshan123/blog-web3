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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { mutateAsync: addPost  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(contract, \"addPost\");\n    const createPost = async ()=>{\n        try {\n            const data = await addPost({\n                args: [\n                    titleRef.current.value,\n                    contentRef.current.value\n                ]\n            });\n            console.info(\"contract call successs\", data);\n        } catch (err) {\n            console.error(\"contract call failure\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col space-y-3\",\n        onSubmit: createPost,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"p-2 rounded-md\",\n                placeholder: \"title\",\n                ref: titleRef\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"p-2 rounded-md\",\n                placeholder: \"content\",\n                ref: contentRef\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    createPost();\n                },\n                children: \"Publish\"\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"bxp3YVEcwwKJstCS51v2+8oRHPo=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvQWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTzZCO0FBQ0U7QUFFaEIsU0FBU0csTUFBTTs7SUFDNUIsTUFBTUMsV0FBV0YsNkNBQU1BO0lBQ3ZCLE1BQU1HLGFBQWFILDZDQUFNQTtJQUN6QixNQUFNLEVBQUVJLFNBQVEsRUFBRSxHQUFHTixnRUFBV0EsQ0FDOUI7SUFFRixNQUFNLEVBQUVPLGFBQWFDLFFBQU8sRUFBRSxHQUFHUCxxRUFBZ0JBLENBQUNLLFVBQVU7SUFFNUQsTUFBTUcsYUFBYSxVQUFZO1FBQzdCLElBQUk7WUFDRixNQUFNQyxPQUFPLE1BQU1GLFFBQVE7Z0JBQ3pCRyxNQUFNO29CQUFDUCxTQUFTUSxPQUFPLENBQUNDLEtBQUs7b0JBQUVSLFdBQVdPLE9BQU8sQ0FBQ0MsS0FBSztpQkFBQztZQUMxRDtZQUNBQyxRQUFRQyxJQUFJLENBQUMsMEJBQTBCTDtRQUN6QyxFQUFFLE9BQU9NLEtBQUs7WUFDWkYsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkQ7UUFDekM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVO1FBQTBCQyxVQUFVWDs7MEJBQ2xELDhEQUFDWTtnQkFBTUYsV0FBVTtnQkFBaUJHLGFBQVk7Z0JBQVFDLEtBQUtuQjs7Ozs7OzBCQUMzRCw4REFBQ2lCO2dCQUNDRixXQUFVO2dCQUNWRyxhQUFZO2dCQUNaQyxLQUFLbEI7Ozs7OzswQkFFUCw4REFBQ21CO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTLENBQUNDLElBQU07b0JBQ2RBLEVBQUVDLGNBQWM7b0JBQ2hCbkI7Z0JBQ0Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQLENBQUM7R0FyQ3VCTjs7UUFHREgsNERBQVdBO1FBR0NDLGlFQUFnQkE7OztLQU4zQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQWRkLnRzeD85YTQyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICB1c2VDb250cmFjdCxcbiAgdXNlQ29udHJhY3RXcml0ZSxcbiAgdXNlTWV0YW1hc2ssXG4gIENvbm5lY3RXYWxsZXQsXG59IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KFxuICAgIFwiMHhEOUMwMGI5YmE1YWFkNjE0MjhkZjU1NTA4NjFBYzI5ZjhFMjMzY0M5XCJcbiAgKTtcbiAgY29uc3QgeyBtdXRhdGVBc3luYzogYWRkUG9zdCB9ID0gdXNlQ29udHJhY3RXcml0ZShjb250cmFjdCwgXCJhZGRQb3N0XCIpO1xuXG4gIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhZGRQb3N0KHtcbiAgICAgICAgYXJnczogW3RpdGxlUmVmLmN1cnJlbnQudmFsdWUsIGNvbnRlbnRSZWYuY3VycmVudC52YWx1ZV0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUuaW5mbyhcImNvbnRyYWN0IGNhbGwgc3VjY2Vzc3NcIiwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiY29udHJhY3QgY2FsbCBmYWlsdXJlXCIsIGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0zXCIgb25TdWJtaXQ9e2NyZWF0ZVBvc3R9PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLW1kXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIHJlZj17dGl0bGVSZWZ9IC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbWRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImNvbnRlbnRcIlxuICAgICAgICByZWY9e2NvbnRlbnRSZWZ9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY3JlYXRlUG9zdCgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBQdWJsaXNoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFdyaXRlIiwidXNlUmVmIiwiQWRkIiwidGl0bGVSZWYiLCJjb250ZW50UmVmIiwiY29udHJhY3QiLCJtdXRhdGVBc3luYyIsImFkZFBvc3QiLCJjcmVhdGVQb3N0IiwiZGF0YSIsImFyZ3MiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwiaW5mbyIsImVyciIsImVycm9yIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInJlZiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Add.tsx\n"));

/***/ })

});