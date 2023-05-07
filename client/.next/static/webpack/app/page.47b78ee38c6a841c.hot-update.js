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

/***/ "(app-client)/./app/components/Post.tsx":
/*!*********************************!*\
  !*** ./app/components/Post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Post(param) {\n    let { post: { content , title , postId  }  } = param;\n    _s();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { mutateAsync: deletePost , isLoading: isDeleting  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(contract, \"deletePost\");\n    const handleDelete = async (postId)=>{\n        try {\n            const data = await deletePost({\n                args: [\n                    postId\n                ]\n            });\n            console.info(\"contract call successs\", data);\n        } catch (err) {\n            console.error(\"contract call failure\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 bg-black w-full p-4 flex flex-col space-y-2 shadow-md bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-bold text-lg text-white\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Post.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: true,\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Post.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleDelete(postId),\n                children: isDeleting ? \"Deleting..\" : \"Delete\"\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Post.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Post.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"73yXQqn0uic78pB/Lfi1VesFe50=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvUG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPNkI7QUFHZCxTQUFTRSxLQUFLLEtBQW9DLEVBQUU7UUFBdEMsRUFBRUMsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUUsR0FBcEM7O0lBQzNCLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdQLGdFQUFXQSxDQUM5QjtJQUdGLE1BQU0sRUFBRVEsYUFBYUMsV0FBVSxFQUFFQyxXQUFXQyxXQUFVLEVBQUUsR0FBR1YscUVBQWdCQSxDQUN6RU0sVUFDQTtJQUdGLE1BQU1LLGVBQWUsT0FBT04sU0FBZ0I7UUFDMUMsSUFBSTtZQUNGLE1BQU1PLE9BQU8sTUFBTUosV0FBVztnQkFBRUssTUFBTTtvQkFBQ1I7aUJBQU87WUFBQztZQUMvQ1MsUUFBUUMsSUFBSSxDQUFDLDBCQUEwQkg7UUFDekMsRUFBRSxPQUFPSSxLQUFLO1lBQ1pGLFFBQVFHLEtBQUssQ0FBQyx5QkFBeUJEO1FBQ3pDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFLRCxXQUFVOzBCQUFnQ2Y7Ozs7OzswQkFDaEQsOERBQUNnQjtnQkFBS0MsS0FBSzswQkFBRWxCOzs7Ozs7MEJBQ2IsOERBQUNtQjtnQkFBT0MsU0FBUyxJQUFNWixhQUFhTjswQkFDakNLLGFBQWEsZUFBZSxRQUFROzs7Ozs7Ozs7Ozs7QUFJN0MsQ0FBQztHQTVCdUJUOztRQUNERiw0REFBV0E7UUFJMkJDLGlFQUFnQkE7OztLQUxyREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUG9zdC50c3g/NmZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgdXNlQ29udHJhY3QsXG4gIHVzZUNvbnRyYWN0V3JpdGUsXG4gIHVzZU1ldGFtYXNrLFxuICBDb25uZWN0V2FsbGV0LFxufSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0OiB7IGNvbnRlbnQsIHRpdGxlLCBwb3N0SWQgfSB9KSB7XG4gIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KFxuICAgIFwiMHhEOUMwMGI5YmE1YWFkNjE0MjhkZjU1NTA4NjFBYzI5ZjhFMjMzY0M5XCJcbiAgKTtcblxuICBjb25zdCB7IG11dGF0ZUFzeW5jOiBkZWxldGVQb3N0LCBpc0xvYWRpbmc6IGlzRGVsZXRpbmcgfSA9IHVzZUNvbnRyYWN0V3JpdGUoXG4gICAgY29udHJhY3QsXG4gICAgXCJkZWxldGVQb3N0XCJcbiAgKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9zdElkOiBhbnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRlbGV0ZVBvc3QoeyBhcmdzOiBbcG9zdElkXSB9KTtcbiAgICAgIGNvbnNvbGUuaW5mbyhcImNvbnRyYWN0IGNhbGwgc3VjY2Vzc3NcIiwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiY29udHJhY3QgY2FsbCBmYWlsdXJlXCIsIGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBiZy1ibGFjayB3LWZ1bGwgcC00IGZsZXggZmxleC1jb2wgc3BhY2UteS0yIHNoYWRvdy1tZCBiZy13aGl0ZVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC13aGl0ZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz57Y29udGVudH08L3NwYW4+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwb3N0SWQpfT5cbiAgICAgICAge2lzRGVsZXRpbmcgPyBcIkRlbGV0aW5nLi5cIiA6IFwiRGVsZXRlXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdCIsInVzZUNvbnRyYWN0V3JpdGUiLCJQb3N0IiwicG9zdCIsImNvbnRlbnQiLCJ0aXRsZSIsInBvc3RJZCIsImNvbnRyYWN0IiwibXV0YXRlQXN5bmMiLCJkZWxldGVQb3N0IiwiaXNMb2FkaW5nIiwiaXNEZWxldGluZyIsImhhbmRsZURlbGV0ZSIsImRhdGEiLCJhcmdzIiwiY29uc29sZSIsImluZm8iLCJlcnIiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJjbGFzcyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Post.tsx\n"));

/***/ })

});