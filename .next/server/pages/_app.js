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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL),\n/* harmony export */   \"PER_PAGE\": () => (/* binding */ PER_PAGE),\n/* harmony export */   \"PROTECTED_ROUTES\": () => (/* binding */ PROTECTED_ROUTES)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5;\nconst PROTECTED_ROUTES = [\n    \"/account/dashboard\",\n    \"/events/add\",\n    \"/events/edit/[id]\", \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSSx1QkFBdUIsQ0FBQztBQUV0RCxNQUFNQyxRQUFRLEdBQ25CSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csd0JBQXdCLElBQUksdUJBQXVCLENBQUM7QUFFM0QsTUFBTUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVuQixNQUFNQyxnQkFBZ0IsR0FBRztJQUM5QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtDQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnO1xuXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7XG5cbmV4cG9ydCBjb25zdCBQUk9URUNURURfUk9VVEVTID0gW1xuICAnL2FjY291bnQvZGFzaGJvYXJkJyxcbiAgJy9ldmVudHMvYWRkJyxcbiAgJy9ldmVudHMvZWRpdC9baWRdJyxcbl07XG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSIsIlBST1RFQ1RFRF9ST1VURVMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (PROTECTED_ROUTES.includes(router.pathname)) checkUserLoggedIn();\n    }, []);\n    const register = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/register`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push(\"/account/dashboard\");\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    const login = async ({ email: identifier , password  })=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n            router.push(\"/account/dashboard\");\n        } else {\n            setError(data.message);\n            setError(null);\n        }\n    };\n    const logout = async ()=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/logout`, {\n            method: \"POST\"\n        });\n        if (res.ok) {\n            setUser(null);\n            router.push(\"/\");\n        }\n    };\n    const checkUserLoggedIn = async (user)=>{\n        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);\n        const data = await res.json();\n        if (res.ok) {\n            setUser(data.user);\n        } else {\n            setUser(null);\n            if (PROTECTED_ROUTES.includes(router.pathname)) {\n                router.push(\"/account/login\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            error,\n            register,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yeonkim/code/repos/dj-events/dj-events-frontend/context/AuthContext.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxNQUFNWixpQkFBaUIsR0FBRyxPQUFPUixJQUFJLEdBQUs7UUFDeEMsTUFBTVUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVmLG1EQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsTUFBTXFCLElBQUksR0FBRyxNQUFNUCxHQUFHLENBQUNRLElBQUksRUFBRTtRQUU3QixJQUFJUixHQUFHLENBQUNTLEVBQUUsRUFBRTtZQUNWbEIsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDakIsSUFBSSxDQUFDLENBQUM7U0FDcEIsTUFBTTtZQUNMQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZCxJQUFJSSxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDRixNQUFNLENBQUNHLFFBQVEsQ0FBQyxFQUFFO2dCQUM5Q0gsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDL0I7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUN2QixXQUFXLENBQUM4QixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFNUIsSUFBSTtZQUFFRSxLQUFLO1lBQUVPLFFBQVE7WUFBRWEsS0FBSztZQUFFSSxNQUFNO1NBQUU7a0JBQ2xFM0IsUUFBUTs7Ozs7aUJBQ1ksQ0FDdkI7Q0FDSCxDQUFDO0FBRUYsaUVBQWVGLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgTkVYVF9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChQUk9URUNURURfUk9VVEVTLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIGNoZWNrVXNlckxvZ2dlZEluKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9yZWdpc3RlcmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgICByb3V0ZXIucHVzaCgnL2FjY291bnQvZGFzaGJvYXJkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHNldFVzZXIoZGF0YS51c2VyKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcblxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICBpZiAoUFJPVEVDVEVEX1JPVVRFUy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9sb2dpbicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5FWFRfVVJMIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsIlBST1RFQ1RFRF9ST1VURVMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInB1c2giLCJtZXNzYWdlIiwibG9naW4iLCJlbWFpbCIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

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