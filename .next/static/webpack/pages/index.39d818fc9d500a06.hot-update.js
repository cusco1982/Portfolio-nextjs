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

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\n\n\n\n\n\n\n\nvar items = [\n    {\n        src: \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\",\n        altText: \"Slide 1\",\n        caption: \"Slide 1\"\n    },\n    {\n        src: \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\",\n        altText: \"Slide 2\",\n        caption: \"Slide 2\"\n    },\n    {\n        src: \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\",\n        altText: \"Slide 3\",\n        caption: \"Slide 3\"\n    }\n];\nvar Slider = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Slider, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Slider);\n    function Slider(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slider);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            activeIndex: 0\n        };\n        _this.next = _this.next.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n        _this.previous = _this.previous.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n        _this.goToIndex = _this.goToIndex.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n        _this.onExiting = _this.onExiting.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n        _this.onExited = _this.onExited.bind((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Slider, [\n        {\n            key: \"onExiting\",\n            value: function onExiting() {\n                this.animating = true;\n            }\n        },\n        {\n            key: \"onExited\",\n            value: function onExited() {\n                this.animating = false;\n            }\n        },\n        {\n            key: \"next\",\n            value: function next() {\n                if (this.animating) return;\n                var nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;\n                this.setState({\n                    activeIndex: nextIndex\n                });\n            }\n        },\n        {\n            key: \"previous\",\n            value: function previous() {\n                if (this.animating) return;\n                var nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;\n                this.setState({\n                    activeIndex: nextIndex\n                });\n            }\n        },\n        {\n            key: \"goToIndex\",\n            value: function goToIndex(newIndex) {\n                if (this.animating) return;\n                this.setState({\n                    activeIndex: newIndex\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var activeIndex = this.state.activeIndex;\n                var slides = items.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselItem, {\n                        onExiting: _this.onExiting,\n                        onExited: _this.onExited,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    height: \"800px\",\n                                    width: \"80vw\",\n                                    padding: \"auto\"\n                                },\n                                src: item.src,\n                                alt: item.altText\n                            }, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselCaption, {\n                                captionText: item.caption,\n                                captionHeader: item.caption\n                            }, void 0, false, {\n                                fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, item.src, true, {\n                        fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this);\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Carousel, {\n                    activeIndex: activeIndex,\n                    next: this.next,\n                    previous: this.previous,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselIndicators, {\n                            items: items,\n                            activeIndex: activeIndex,\n                            onClickHandler: this.goToIndex\n                        }, void 0, false, {\n                            fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        }, this),\n                        slides,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                            direction: \"prev\",\n                            directionText: \"Previous\",\n                            onClickHandler: this.previous\n                        }, void 0, false, {\n                            fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                            direction: \"next\",\n                            directionText: \"Next\",\n                            onClickHandler: this.next\n                        }, void 0, false, {\n                            fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abstract/code/Porfolios/Portfolio-nextjs/components/Slider.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return Slider;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFhLEVBQUMsTUFBTTs0QkFBQ0YsY0FBYyxFQUFFLElBQUksQ0FBQ3ZCLElBQUk7Ozs7O2dDQUFJOzs7Ozs7d0JBRTNFLENBR1g7YUFDSDs7OztDQUNGLENBbkVvQmQsNENBQVMsQ0FtRTdCO0FBR0QsK0RBQWVVLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci5qcz83NDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbENvbnRyb2wsXG4gIENhcm91c2VsSW5kaWNhdG9ycyxcbiAgQ2Fyb3VzZWxDYXB0aW9uXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTFkJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM1NTUlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWExZCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM3NzclMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjg1LjkyMTg3NSUyMiUyMHklM0QlMjIyMTguMyUyMiUzRUZpcnN0JTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxuICAgIGFsdFRleHQ6ICdTbGlkZSAxJyxcbiAgICBjYXB0aW9uOiAnU2xpZGUgMSdcbiAgfSxcbiAge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIwJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM0NDQlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM2NjYlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjQ3LjMyMDMxMjUlMjIlMjB5JTNEJTIyMjE4LjMlMjIlM0VTZWNvbmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXG4gICAgYWx0VGV4dDogJ1NsaWRlIDInLFxuICAgIGNhcHRpb246ICdTbGlkZSAyJ1xuICB9LFxuICB7XG4gICAgc3JjOiAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDgwMCUyMDQwMCUyMiUyMHByZXNlcnZlQXNwZWN0UmF0aW8lM0QlMjJub25lJTIyJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQlMkZjc3MlMjIlM0UlMjNob2xkZXJfMTViYTgwMGFhMjElMjB0ZXh0JTIwJTdCJTIwZmlsbCUzQSUyMzMzMyUzQmZvbnQtd2VpZ2h0JTNBbm9ybWFsJTNCZm9udC1mYW1pbHklM0FIZWx2ZXRpY2ElMkMlMjBtb25vc3BhY2UlM0Jmb250LXNpemUlM0E0MHB0JTIwJTdEJTIwJTNDJTJGc3R5bGUlM0UlM0MlMkZkZWZzJTNFJTNDZyUyMGlkJTNEJTIyaG9sZGVyXzE1YmE4MDBhYTIxJTIyJTNFJTNDcmVjdCUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIwZmlsbCUzRCUyMiUyMzU1NSUyMiUzRSUzQyUyRnJlY3QlM0UlM0NnJTNFJTNDdGV4dCUyMHglM0QlMjIyNzclMjIlMjB5JTNEJTIyMjE4LjMlMjIlM0VUaGlyZCUyMHNsaWRlJTNDJTJGdGV4dCUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFJyxcbiAgICBhbHRUZXh0OiAnU2xpZGUgMycsXG4gICAgY2FwdGlvbjogJ1NsaWRlIDMnXG4gIH1cbl07XG5cbmNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFjdGl2ZUluZGV4OiAwIH07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMucHJldmlvdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9JbmRleCA9IHRoaXMuZ29Ub0luZGV4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV4aXRpbmcgPSB0aGlzLm9uRXhpdGluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FeGl0ZWQgPSB0aGlzLm9uRXhpdGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkV4aXRpbmcoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgb25FeGl0ZWQoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5leHRJbmRleCB9KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCAtIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXh0SW5kZXggfSk7XG4gIH1cblxuICBnb1RvSW5kZXgobmV3SW5kZXgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5ld0luZGV4IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcm91c2VsSXRlbSBvbkV4aXRpbmc9e3RoaXMub25FeGl0aW5nfSBvbkV4aXRlZD17dGhpcy5vbkV4aXRlZH0ga2V5PXtpdGVtLnNyY30+XG4gICAgICAgICAgPGltZyBzdHlsZT17e2hlaWdodDpcIjgwMHB4XCIsIHdpZHRoOlwiODB2d1wiLCBwYWRkaW5nOlwiYXV0b1wifX0gc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdFRleHR9IC8+XG4gICAgICAgICAgPENhcm91c2VsQ2FwdGlvbiBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufSBjYXB0aW9uSGVhZGVyPXtpdGVtLmNhcHRpb259IC8+XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcblxuXG4gICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBuZXh0PXt0aGlzLm5leHR9IHByZXZpb3VzPXt0aGlzLnByZXZpb3VzfT5cblxuICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17dGhpcy5nb1RvSW5kZXh9IC8+XG4gICAgICAgIFxuICAgICAgICB7c2xpZGVzfVxuXG4gICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXt0aGlzLnByZXZpb3VzfSAvPlxuICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cIm5leHRcIiBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiIG9uQ2xpY2tIYW5kbGVyPXt0aGlzLm5leHR9IC8+XG5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgXG4gICAgXG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJvdXNlbCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsQ29udHJvbCIsIkNhcm91c2VsSW5kaWNhdG9ycyIsIkNhcm91c2VsQ2FwdGlvbiIsIml0ZW1zIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iLCJTbGlkZXIiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSW5kZXgiLCJuZXh0IiwiYmluZCIsInByZXZpb3VzIiwiZ29Ub0luZGV4Iiwib25FeGl0aW5nIiwib25FeGl0ZWQiLCJhbmltYXRpbmciLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsIm5ld0luZGV4IiwicmVuZGVyIiwic2xpZGVzIiwibWFwIiwiaXRlbSIsImltZyIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiYWx0IiwiY2FwdGlvblRleHQiLCJjYXB0aW9uSGVhZGVyIiwib25DbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25UZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider.js\n"));

/***/ })

});