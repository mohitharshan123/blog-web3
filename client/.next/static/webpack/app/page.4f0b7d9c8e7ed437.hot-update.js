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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { data , isLoading  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead)(contract, \"getPosts\");\n    const parsedPosts = useMemo(()=>{\n        return data === null || data === void 0 ? void 0 : data.map((param, i)=>{\n            let { author , content , title  } = param;\n            return {\n                author,\n                content,\n                title\n            };\n        });\n    }, data);\n    console.log(parsedPosts);\n    // }\n    //   const call = async () => {\n    //     try {\n    //       const data = await addPost({ args: [_title, _content] });\n    //       console.info(\"contract call successs\", data);\n    //     } catch (err) {\n    //       console.error(\"contract call failure\", err);\n    //     }\n    //   }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"D/4boKcknhHD42Y1Kc8eJynCGn8=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW1FO0FBRXBELFNBQVNFLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdILGdFQUFXQSxDQUM5QjtJQUVGLE1BQU0sRUFBRUksS0FBSSxFQUFFQyxVQUFTLEVBQUUsR0FBR0osb0VBQWVBLENBQUNFLFVBQVU7SUFFdEQsTUFBTUcsY0FBY0MsUUFBUTtRQUFNSCxPQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1JLEdBQUcsQ0FBQyxRQUE2QkMsSUFBTztnQkFBbkMsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRTttQkFBUztnQkFDOUVGO2dCQUNBQztnQkFDQUM7WUFDRjtRQUFBO09BQUtSO0lBRUxTLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixJQUFJO0lBQ0osK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrRUFBa0U7SUFDbEUsc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQsUUFBUTtJQUNSLE1BQU07SUFDTixJQUFJO0lBQ0oscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUdULENBQUM7R0E1QnVCZjs7UUFDREYsNERBQVdBO1FBR0pDLGdFQUFlQTs7O0tBSnJCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KFxuICAgIFwiMHhEOUMwMGI5YmE1YWFkNjE0MjhkZjU1NTA4NjFBYzI5ZjhFMjMzY0M5XCJcbiAgKTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUNvbnRyYWN0UmVhZChjb250cmFjdCwgXCJnZXRQb3N0c1wiKTtcblxuICBjb25zdCBwYXJzZWRQb3N0cyA9IHVzZU1lbW8oKCkgPT4gZGF0YT8ubWFwKCh7IGF1dGhvciwgY29udGVudCwgdGl0bGUgfSwgaSkgPT4gKHtcbiAgICBhdXRob3IsXG4gICAgY29udGVudCxcbiAgICB0aXRsZSxcbiAgfSkpLCBkYXRhKSBcblxuICBjb25zb2xlLmxvZyhwYXJzZWRQb3N0cyk7XG4gIC8vIH1cbiAgLy8gICBjb25zdCBjYWxsID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFkZFBvc3QoeyBhcmdzOiBbX3RpdGxlLCBfY29udGVudF0gfSk7XG4gIC8vICAgICAgIGNvbnNvbGUuaW5mbyhcImNvbnRyYWN0IGNhbGwgc3VjY2Vzc3NcIiwgZGF0YSk7XG4gIC8vICAgICB9IGNhdGNoIChlcnIpIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcImNvbnRyYWN0IGNhbGwgZmFpbHVyZVwiLCBlcnIpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPHA+SGVsbG88L3A+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0IiwidXNlQ29udHJhY3RSZWFkIiwiSG9tZSIsImNvbnRyYWN0IiwiZGF0YSIsImlzTG9hZGluZyIsInBhcnNlZFBvc3RzIiwidXNlTWVtbyIsIm1hcCIsImkiLCJhdXRob3IiLCJjb250ZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});