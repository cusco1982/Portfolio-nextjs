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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavItem_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem.jsx */ \"./components/NavItem.jsx\");\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar MENU_LIST = [\n    {\n        text: \"Home\",\n        href: \"/\"\n    },\n    {\n        text: \"Services\",\n        href: \"/services\"\n    },\n    {\n        text: \"Contact\",\n        href: \"/contact\"\n    }\n];\nvar Navbar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navActive = ref[0], setNavActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIdx = ref1[0], setActiveIdx = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: function() {\n                                return setActiveIdx(0);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"logo\",\n                                children: \" CodeWithMarish \"\n                            }, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return setNavActive(!navActive);\n                        },\n                        className: \"nav__menu-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(navActive ? \"active\" : \"\", \" nav__menu-list\"),\n                        children: MENU_LIST.map(function(menu, idx) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    setActiveIdx(idx);\n                                    setNavActive(false);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                                    active: activeIdx === idx\n                                }, menu), void 0, false, {\n                                    fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 37\n                                }, _this1)\n                            }, menu.text, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 33\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"Ay2jIhTcZY7obHTo4BNXevXEOf4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUF3QztBQUNYO0FBQ087O0FBRXBDLElBQU1JLFNBQVMsR0FBRztJQUNkO1FBQ0lDLElBQUksRUFBRSxNQUFNO1FBQ1pDLElBQUksRUFBRSxHQUFHO0tBQ1o7SUFBRTtRQUNDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsSUFBSSxFQUFFLFdBQVc7S0FDcEI7SUFBRTtRQUNDRCxJQUFJLEVBQUUsU0FBUztRQUNmQyxJQUFJLEVBQUUsVUFBVTtLQUNuQjtDQUNKO0FBTUQsSUFBTUMsTUFBTSxHQUFHLFdBQU07OztJQUNqQixJQUFrQ04sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ08sU0FBUyxHQUFrQlAsR0FBZSxHQUFqQyxFQUFFUSxZQUFZLEdBQUlSLEdBQWUsR0FBbkI7SUFDOUIsSUFBa0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBdENTLFNBQVMsR0FBa0JULElBQVcsR0FBN0IsRUFBRVUsWUFBWSxHQUFJVixJQUFXLEdBQWY7SUFFOUIscUJBQ0ksOERBQUNXLEtBQUc7a0JBRUEsNEVBQUNDLFFBQU07c0JBQ0gsNEVBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLOztrQ0FFaEIsOERBQUNiLGtEQUFJO3dCQUFDSSxJQUFJLEVBQUUsR0FBRztrQ0FFWCw0RUFBQ1UsR0FBQzs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNTixZQUFZLENBQUMsQ0FBQyxDQUFDOzZCQUFBO3NDQUM3Qiw0RUFBQ08sSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLE1BQU07MENBQUMsa0JBQWdCOzs7OztxQ0FBSzs7Ozs7aUNBQzFDOzs7Ozs2QkFFRDtrQ0FHUCw4REFBQ0gsS0FBRzt3QkFBQ0ssT0FBTyxFQUFFO21DQUFNUixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO3lCQUFBO3dCQUFFTyxTQUFTLEVBQUMsZUFBZTs7MENBQ25FLDhEQUFDSCxLQUFHOzs7O3FDQUFPOzBDQUNYLDhEQUFDQSxLQUFHOzs7O3FDQUFPOzBDQUNYLDhEQUFDQSxLQUFHOzs7O3FDQUFPOzs7Ozs7NkJBRVQ7a0NBSU4sOERBQUNBLEtBQUc7d0JBQUNHLFNBQVMsRUFBRSxFQUFDLENBQTRCLE1BQWUsQ0FBekNQLFNBQVMsR0FBRyxRQUFRLEdBQUcsRUFBRSxFQUFDLGlCQUFlLENBQUM7a0NBRXhESixTQUFTLENBQUNlLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUcsRUFBSzs0QkFDMUIscUJBRUksOERBQUNULEtBQUc7Z0NBQUNLLE9BQU8sRUFBRSxXQUFNO29DQUNoQk4sWUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQztvQ0FDbEJaLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQ0FDdkI7MENBTUcsNEVBQUNOLG9EQUFPO29DQUFDbUIsTUFBTSxFQUFFWixTQUFTLEtBQUtXLEdBQUc7bUNBQU1ELElBQUk7Ozs7MENBQUk7K0JBSjNDQSxJQUFJLENBQUNmLElBQUk7Ozs7c0NBT1osQ0FFVDt5QkFDSixDQUFDOzs7Ozs2QkFFQTs7Ozs7O3FCQU1KOzs7OztpQkFDRDs7Ozs7YUFJUCxDQUNUO0NBQ0o7R0EvREtFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWlFWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0uanN4JztcblxuY29uc3QgTUVOVV9MSVNUID0gW1xuICAgIHtcbiAgICAgICAgdGV4dDogXCJIb21lXCIsXG4gICAgICAgIGhyZWY6IFwiL1wiXG4gICAgfSwge1xuICAgICAgICB0ZXh0OiBcIlNlcnZpY2VzXCIsXG4gICAgICAgIGhyZWY6IFwiL3NlcnZpY2VzXCJcbiAgICB9LCB7XG4gICAgICAgIHRleHQ6IFwiQ29udGFjdFwiLFxuICAgICAgICBocmVmOiBcIi9jb250YWN0XCJcbiAgICB9XG5dXG5cblxuXG5cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZUlkeCwgc2V0QWN0aXZlSWR4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSWR4KDApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9nb1wiPiBDb2RlV2l0aE1hcmlzaCA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TmF2QWN0aXZlKCFuYXZBY3RpdmUpfSBjbGFzc05hbWU9XCJuYXZfX21lbnUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtuYXZBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gbmF2X19tZW51LWxpc3RgfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge01FTlVfTElTVC5tYXAoKG1lbnUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZHgoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hdkFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gYWN0aXZlPXthY3RpdmVJZHggPT09IGlkeH0gey4uLm1lbnV9IC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIk5hdkl0ZW0iLCJNRU5VX0xJU1QiLCJ0ZXh0IiwiaHJlZiIsIk5hdmJhciIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImFjdGl2ZUlkeCIsInNldEFjdGl2ZUlkeCIsImRpdiIsImhlYWRlciIsIm5hdiIsImNsYXNzTmFtZSIsImEiLCJvbkNsaWNrIiwiaDEiLCJtYXAiLCJtZW51IiwiaWR4IiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});