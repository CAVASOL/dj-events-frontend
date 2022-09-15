/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL),\n/* harmony export */   \"PER_PAGE\": () => (/* binding */ PER_PAGE)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixJQUFJLHVCQUF1QixDQUFDO0FBRXRELE1BQU1DLFFBQVEsR0FDbkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyx3QkFBd0IsSUFBSSx1QkFBdUIsQ0FBQztBQUUzRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnO1xuXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7XG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>checkUserLoggedIn(), []);\n    const register = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/register`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push(\"/account/dashboard\");\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    const login = async ({ email: identifier , password  })=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push(\"/account/dashboard\");\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    const logout = async ()=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/logout`, {\n            method: \"POST\"\n        });\n        if (res.ok) {\n            setUser(null);\n            router.push(\"/\");\n        }\n    };\n    const checkUserLoggedIn = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n        } else {\n            setUser(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            error,\n            register,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/context/AuthContext.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsTUFBTWtCLElBQUksR0FBRyxNQUFNUCxHQUFHLENBQUNRLElBQUksRUFBRTtRQUU3QixJQUFJUixHQUFHLENBQUNTLEVBQUUsRUFBRTtZQUNWZixPQUFPLENBQUNhLElBQUksQ0FBQ2QsSUFBSSxDQUFDLENBQUM7U0FDcEIsTUFBTTtZQUNMQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZjtLQUNGO0lBRUQscUJBQ0UsOERBQUNKLFdBQVcsQ0FBQzJCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUV6QixJQUFJO1lBQUVFLEtBQUs7WUFBRUksUUFBUTtZQUFFYSxLQUFLO1lBQUVJLE1BQU07U0FBRTtrQkFDbEV4QixRQUFROzs7OztpQkFDWSxDQUN2QjtDQUNILENBQUM7QUFFRixpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz8xMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4JztcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBjaGVja1VzZXJMb2dnZWRJbigpLCBbXSk7XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvcmVnaXN0ZXJgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWw6IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgICByb3V0ZXIucHVzaCgnL2FjY291bnQvZGFzaGJvYXJkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9nb3V0YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfSk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5FWFRfVVJMIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImNoZWNrVXNlckxvZ2dlZEluIiwicmVnaXN0ZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJwdXNoIiwibWVzc2FnZSIsImxvZ2luIiwiZW1haWwiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ3RCO0FBRS9CLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCw4REFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();