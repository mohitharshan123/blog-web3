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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { data , isLoading  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead)(contract, \"getPosts\");\n    const parsedPosts = data.map((post, i)=>({\n            owner: post.owner,\n            postContent: post.postContent,\n            id: post.postId.toNumber()\n        })); // }\n    //   const call = async () => {\n    //     try {\n    //       const data = await addPost({ args: [_title, _content] });\n    //       console.info(\"contract call successs\", data);\n    //     } catch (err) {\n    //       console.error(\"contract call failure\", err);\n    //     }\n    //   }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cp9ZrfeS2VUBsKrSfneobusykew=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW1FO0FBRXBELFNBQVNFLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdILGdFQUFXQSxDQUM5QjtJQUVGLE1BQU0sRUFBRUksS0FBSSxFQUFFQyxVQUFTLEVBQUUsR0FBR0osb0VBQWVBLENBQUNFLFVBQVU7SUFFdEQsTUFBTUcsY0FBY0YsS0FBS0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU87WUFDekNDLE9BQU9GLEtBQUtFLEtBQUs7WUFDakJDLGFBQWFILEtBQUtHLFdBQVc7WUFDN0JDLElBQUlKLEtBQUtLLE1BQU0sQ0FBQ0MsUUFBUTtRQUMxQixLQUFLLElBQUk7SUFDVCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtFQUFrRTtJQUNsRSxzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxRQUFRO0lBQ1IsTUFBTTtJQUNOLElBQUk7SUFDSixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7c0JBQUU7Ozs7Ozs7Ozs7O0FBR1QsQ0FBQztHQXpCdUJmOztRQUNERiw0REFBV0E7UUFHSkMsZ0VBQWVBOzs7S0FKckJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoXG4gICAgXCIweEQ5QzAwYjliYTVhYWQ2MTQyOGRmNTU1MDg2MUFjMjlmOEUyMzNjQzlcIlxuICApO1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlQ29udHJhY3RSZWFkKGNvbnRyYWN0LCBcImdldFBvc3RzXCIpO1xuXG4gIGNvbnN0IHBhcnNlZFBvc3RzID0gZGF0YS5tYXAoKHBvc3QsIGkpID0+ICh7XG4gICAgb3duZXI6IHBvc3Qub3duZXIsXG4gICAgcG9zdENvbnRlbnQ6IHBvc3QucG9zdENvbnRlbnQsXG4gICAgaWQ6IHBvc3QucG9zdElkLnRvTnVtYmVyKCksXG4gIH0pKTsgLy8gfVxuICAvLyAgIGNvbnN0IGNhbGwgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYWRkUG9zdCh7IGFyZ3M6IFtfdGl0bGUsIF9jb250ZW50XSB9KTtcbiAgLy8gICAgICAgY29uc29sZS5pbmZvKFwiY29udHJhY3QgY2FsbCBzdWNjZXNzc1wiLCBkYXRhKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiY29udHJhY3QgY2FsbCBmYWlsdXJlXCIsIGVycik7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8cD5IZWxsbzwvcD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFJlYWQiLCJIb21lIiwiY29udHJhY3QiLCJkYXRhIiwiaXNMb2FkaW5nIiwicGFyc2VkUG9zdHMiLCJtYXAiLCJwb3N0IiwiaSIsIm93bmVyIiwicG9zdENvbnRlbnQiLCJpZCIsInBvc3RJZCIsInRvTnVtYmVyIiwibWFpbiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});