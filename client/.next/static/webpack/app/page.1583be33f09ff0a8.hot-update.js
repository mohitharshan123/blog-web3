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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"(app-client)/../node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9\");\n    const { mutateAsync: addPost  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(contract, \"addPost\");\n    const createPost = async ()=>{\n        try {\n            const data = await addPost({\n                args: [\n                    titleRef.current.value,\n                    contentRef.current.value\n                ]\n            });\n            console.info(\"contract call successs\", data);\n        } catch (err) {\n            console.error(\"contract call failure\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col space-y-3\",\n        onSubmit: createPost,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"p-2 rounded-md\",\n                placeholder: \"title\",\n                ref: titleRef\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"p-2 rounded-md\",\n                placeholder: \"content\",\n                ref: contentRef\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    crete;\n                },\n                children: \"Publish\"\n            }, void 0, false, {\n                fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitharshan/Desktop/thirdweb/client/app/components/Add.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"bxp3YVEcwwKJstCS51v2+8oRHPo=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvQWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW9FO0FBQ3JDO0FBRWhCLFNBQVNHLE1BQU07O0lBQzVCLE1BQU1DLFdBQVdGLDZDQUFNQTtJQUN2QixNQUFNRyxhQUFhSCw2Q0FBTUE7SUFDekIsTUFBTSxFQUFFSSxTQUFRLEVBQUUsR0FBR04sZ0VBQVdBLENBQzlCO0lBRUYsTUFBTSxFQUFFTyxhQUFhQyxRQUFPLEVBQUUsR0FBR1AscUVBQWdCQSxDQUFDSyxVQUFVO0lBRTVELE1BQU1HLGFBQWEsVUFBWTtRQUM3QixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNRixRQUFRO2dCQUN6QkcsTUFBTTtvQkFBQ1AsU0FBU1EsT0FBTyxDQUFDQyxLQUFLO29CQUFFUixXQUFXTyxPQUFPLENBQUNDLEtBQUs7aUJBQUM7WUFDMUQ7WUFDQUMsUUFBUUMsSUFBSSxDQUFDLDBCQUEwQkw7UUFDekMsRUFBRSxPQUFPTSxLQUFLO1lBQ1pGLFFBQVFHLEtBQUssQ0FBQyx5QkFBeUJEO1FBQ3pDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTtRQUEwQkMsVUFBVVg7OzBCQUNsRCw4REFBQ1k7Z0JBQU1GLFdBQVU7Z0JBQWlCRyxhQUFZO2dCQUFRQyxLQUFLbkI7Ozs7OzswQkFDM0QsOERBQUNpQjtnQkFDQ0YsV0FBVTtnQkFDVkcsYUFBWTtnQkFDWkMsS0FBS2xCOzs7Ozs7MEJBRVAsOERBQUNtQjtnQkFDQ0MsTUFBSztnQkFDTEMsU0FBUyxDQUFDQyxJQUFNO29CQUNkQSxFQUFFQyxjQUFjO29CQUNoQkM7Z0JBQ0Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQLENBQUM7R0FyQ3VCMUI7O1FBR0RILDREQUFXQTtRQUdDQyxpRUFBZ0JBOzs7S0FOM0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZC50c3g/OWE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZCgpIHtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdChcbiAgICBcIjB4RDlDMDBiOWJhNWFhZDYxNDI4ZGY1NTUwODYxQWMyOWY4RTIzM2NDOVwiXG4gICk7XG4gIGNvbnN0IHsgbXV0YXRlQXN5bmM6IGFkZFBvc3QgfSA9IHVzZUNvbnRyYWN0V3JpdGUoY29udHJhY3QsIFwiYWRkUG9zdFwiKTtcblxuICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYWRkUG9zdCh7XG4gICAgICAgIGFyZ3M6IFt0aXRsZVJlZi5jdXJyZW50LnZhbHVlLCBjb250ZW50UmVmLmN1cnJlbnQudmFsdWVdLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmluZm8oXCJjb250cmFjdCBjYWxsIHN1Y2Nlc3NzXCIsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcImNvbnRyYWN0IGNhbGwgZmFpbHVyZVwiLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktM1wiIG9uU3VibWl0PXtjcmVhdGVQb3N0fT5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1tZFwiIHBsYWNlaG9sZGVyPVwidGl0bGVcIiByZWY9e3RpdGxlUmVmfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLW1kXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJjb250ZW50XCJcbiAgICAgICAgcmVmPXtjb250ZW50UmVmfVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNyZXRlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFB1Ymxpc2hcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdCIsInVzZUNvbnRyYWN0V3JpdGUiLCJ1c2VSZWYiLCJBZGQiLCJ0aXRsZVJlZiIsImNvbnRlbnRSZWYiLCJjb250cmFjdCIsIm11dGF0ZUFzeW5jIiwiYWRkUG9zdCIsImNyZWF0ZVBvc3QiLCJkYXRhIiwiYXJncyIsImN1cnJlbnQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJpbmZvIiwiZXJyIiwiZXJyb3IiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVmIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Add.tsx\n"));

/***/ })

});