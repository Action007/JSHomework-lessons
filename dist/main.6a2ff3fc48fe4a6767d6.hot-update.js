"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30"]("main",{

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderCarousel = function sliderCarousel(wrap, right, left, item, width1, width2) {\n  var wrapper = document.querySelector(wrap),\n      arrowRight = document.querySelector(right),\n      arrowLeft = document.querySelector(left),\n      slider = document.querySelector(item);\n  var slide;\n  window.addEventListener('resize', function () {\n    if (window.innerWidth > 576) {\n      slide = slider.offsetWidth * width1;\n    } else {\n      slide = slider.offsetWidth;\n    }\n\n    var offset = 0;\n\n    var slideToRight = function slideToRight() {\n      offset += slide;\n\n      if (window.innerWidth > 576) {\n        if (offset > slide) offset = 0;\n      } else {\n        if (offset > slide * width2) offset = 0;\n      }\n\n      wrapper.style.left = -offset + 'px';\n    };\n\n    var slideToLeft = function slideToLeft() {\n      offset -= slide;\n\n      if (window.innerWidth > 576) {\n        if (offset < 0) offset = slide;\n      } else {\n        if (offset < 0) offset = slide * width2;\n      }\n\n      wrapper.style.left = -offset + 'px';\n    };\n  });\n  arrowRight.addEventListener('click', slideToRight);\n  arrowLeft.addEventListener('click', slideToLeft);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderCarousel);\n\n//# sourceURL=webpack://lesson30/./src/modules/sliderCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4ce4fc282dc8af6d6701")
/******/ })();
/******/ 
/******/ }
);