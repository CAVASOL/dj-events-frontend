"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AuthProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref1[0], setError = ref1[1];\n    var register = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            return _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(user);\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function register(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var login = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var identifier, password, res, data;\n            return _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        identifier = param.email, password = param.password;\n                        _ctx.next = 3;\n                        return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__.NEXT_URL, \"/api/login\"), {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                identifier: identifier,\n                                password: password\n                            })\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        if (res.ok) {\n                            setUser(data.user);\n                        } else {\n                            setError(data.message);\n                            setError(null);\n                        }\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function login(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var logout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"Logout\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkUserLoggedIn = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            var res, data;\n            return _Users_yeonkim_code_repos_dj_events_dj_events_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__.NEXT_URL, \"/api/user\"));\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        data = _ctx.sent;\n                        if (res.ok) {\n                            setUser(data.user);\n                        } else {\n                            setUser(null);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkUserLoggedIn(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user,\n            error: error,\n            register: register,\n            login: login,\n            logout: logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/context/AuthContext.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(AuthProvider, \"7udYEMzCx5sfzcpmAkRC60B4jf0=\");\n_c = AuthProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVlLE1BQU0sRUFBTkEsTUFBTTtTQUFFO2tCQUNsRXZCLFFBQVE7Ozs7O2FBQ1ksQ0FDdkI7Q0FDSCxDQUFDO0dBbERXRCxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFvRHpCLCtEQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz8xMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4JztcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsOiBpZGVudGlmaWVyLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTG9nb3V0Jyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5FWFRfVVJMIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwicmVzIiwiZGF0YSIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwib2siLCJtZXNzYWdlIiwibG9nb3V0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n"));

/***/ })

});