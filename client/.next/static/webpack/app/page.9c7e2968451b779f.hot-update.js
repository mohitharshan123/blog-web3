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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { data , isLoading  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead)(contract, \"getPosts\");\n    const parsedPosts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return data === null || data === void 0 ? void 0 : data.map((param, i)=>{\n            let { author , content , title  } = param;\n            return {\n                author,\n                content,\n                title\n            };\n        });\n    }, data);\n    console.log(parsedPosts);\n    // }\n    //   const call = async () => {\n    //     try {\n    //       const data = await addPost({ args: [_title, _content] });\n    //       console.info(\"contract call successs\", data);\n    //     } catch (err) {\n    //       console.error(\"contract call failure\", err);\n    //     }\n    //   }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: parsedPosts.map((param)=>/*#__PURE__*/ {\n            let { title , content , author  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 w-full p-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"D/4boKcknhHD42Y1Kc8eJynCGn8=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFbUU7QUFDbkM7QUFFakIsU0FBU0csT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0osZ0VBQVdBLENBQzlCO0lBRUYsTUFBTSxFQUFFSyxLQUFJLEVBQUVDLFVBQVMsRUFBRSxHQUFHTCxvRUFBZUEsQ0FBQ0csVUFBVTtJQUV0RCxNQUFNRyxjQUFjTCw4Q0FBT0EsQ0FDekI7UUFDRUcsT0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRyxHQUFHLENBQUMsUUFBNkJDLElBQU87Z0JBQW5DLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUU7bUJBQVM7Z0JBQzVDRjtnQkFDQUM7Z0JBQ0FDO1lBQ0Y7UUFBQTtPQUNGUDtJQUdGUSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osSUFBSTtJQUNKLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0VBQWtFO0lBQ2xFLHNEQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIscURBQXFEO0lBQ3JELFFBQVE7SUFDUixNQUFNO0lBQ04sSUFBSTtJQUNKLHFCQUNFLDhEQUFDUTtRQUFLQyxXQUFVO2tCQUNiVCxZQUFZQyxHQUFHLENBQUMsdUJBQ2Y7Z0JBRGdCLEVBQUVJLE1BQUssRUFBRUQsUUFBTyxFQUFFRCxPQUFNLEVBQUU7bUJBQzFDLDhEQUFDTztnQkFBSUQsV0FBVTs7Ozs7O1FBQXVCOzs7Ozs7QUFJOUMsQ0FBQztHQWxDdUJiOztRQUNESCw0REFBV0E7UUFHSkMsZ0VBQWVBOzs7S0FKckJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoXG4gICAgXCIweEQ5QzAwYjliYTVhYWQ2MTQyOGRmNTU1MDg2MUFjMjlmOEUyMzNjQzlcIlxuICApO1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlQ29udHJhY3RSZWFkKGNvbnRyYWN0LCBcImdldFBvc3RzXCIpO1xuXG4gIGNvbnN0IHBhcnNlZFBvc3RzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZGF0YT8ubWFwKCh7IGF1dGhvciwgY29udGVudCwgdGl0bGUgfSwgaSkgPT4gKHtcbiAgICAgICAgYXV0aG9yLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICB0aXRsZSxcbiAgICAgIH0pKSxcbiAgICBkYXRhXG4gICk7XG5cbiAgY29uc29sZS5sb2cocGFyc2VkUG9zdHMpO1xuICAvLyB9XG4gIC8vICAgY29uc3QgY2FsbCA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhZGRQb3N0KHsgYXJnczogW190aXRsZSwgX2NvbnRlbnRdIH0pO1xuICAvLyAgICAgICBjb25zb2xlLmluZm8oXCJjb250cmFjdCBjYWxsIHN1Y2Nlc3NzXCIsIGRhdGEpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjb250cmFjdCBjYWxsIGZhaWx1cmVcIiwgZXJyKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIHtwYXJzZWRQb3N0cy5tYXAoKHsgdGl0bGUsIGNvbnRlbnQsIGF1dGhvciB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xMCB3LWZ1bGwgcC00XCI+PC9kaXY+XG4gICAgICApKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VNZW1vIiwiSG9tZSIsImNvbnRyYWN0IiwiZGF0YSIsImlzTG9hZGluZyIsInBhcnNlZFBvc3RzIiwibWFwIiwiaSIsImF1dGhvciIsImNvbnRlbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});