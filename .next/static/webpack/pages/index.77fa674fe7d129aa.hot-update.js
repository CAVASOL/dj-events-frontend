"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EventItem */ \"./components/EventItem.js\");\n\n\n\n\n\nvar __N_SSG = true;\nfunction HomePage(param) {\n    var events = param.events;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Upcoming Events\"\n            }, void 0, false, {\n                fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            events.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"No events to show\"\n            }, void 0, false, {\n                fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 31\n            }, this),\n            events.map(function(evt) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    evt: evt\n                }, evt.id, false, {\n                    fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this);\n            }),\n            events.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/events\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn-secondary\",\n                    children: \"View All Events\"\n                }, void 0, false, {\n                    fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUNZO0FBQ007O0FBR2hDLFNBQVNJLFFBQVEsQ0FBQyxLQUFVLEVBQUU7UUFBWixNQUFRLEdBQVIsS0FBVSxDQUFSQyxNQUFNOztJQUN2QyxxQkFDRSw4REFBQ0gsMERBQU07OzBCQUNMLDhEQUFDSSxJQUFFOzBCQUFDLGlCQUFlOzs7OztvQkFBSztZQUN2QkQsTUFBTSxDQUFDRSxNQUFNLEtBQUssQ0FBQyxrQkFBSSw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O29CQUFLO1lBRWpESCxNQUFNLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxHQUFHO3FDQUNkLDhEQUFDUCw2REFBUztvQkFBY08sR0FBRyxFQUFFQSxHQUFHO21CQUFoQkEsR0FBRyxDQUFDQyxFQUFFOzs7O3lCQUFjO2FBQ3JDLENBQUM7WUFFRE4sTUFBTSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxrQkFDaEIsOERBQUNOLGtEQUFJO2dCQUFDVyxJQUFJLEVBQUMsU0FBUzswQkFDbEIsNEVBQUNDLEdBQUM7b0JBQUNDLFNBQVMsRUFBQyxlQUFlOzhCQUFDLGlCQUFlOzs7Ozt3QkFBSTs7Ozs7b0JBQzNDOzs7Ozs7WUFFRixDQUNUO0NBQ0g7QUFqQnVCVixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEV2ZW50SXRlbSBmcm9tICdAL2NvbXBvbmVudHMvRXZlbnRJdGVtJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgZXZlbnRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPlVwY29taW5nIEV2ZW50czwvaDE+XG4gICAgICB7ZXZlbnRzLmxlbmd0aCA9PT0gMCAmJiA8aDM+Tm8gZXZlbnRzIHRvIHNob3c8L2gzPn1cblxuICAgICAge2V2ZW50cy5tYXAoKGV2dCkgPT4gKFxuICAgICAgICA8RXZlbnRJdGVtIGtleT17ZXZ0LmlkfSBldnQ9e2V2dH0gLz5cbiAgICAgICkpfVxuXG4gICAgICB7ZXZlbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIj5WaWV3IEFsbCBFdmVudHM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzP19zb3J0PWRhdGU6QVNDJl9saW1pdD0zYCk7XG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBldmVudHMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkV2ZW50SXRlbSIsIkhvbWVQYWdlIiwiZXZlbnRzIiwiaDEiLCJsZW5ndGgiLCJoMyIsIm1hcCIsImV2dCIsImlkIiwiaHJlZiIsImEiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});