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

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var calcSection = document.getElementById('calc');\n\n  if (calcSection) {\n    var calcInput = document.getElementById('calc-input'),\n        calcTotal = document.getElementById('calc-total');\n    var calcType = document.getElementById('calc-type'),\n        calcTypeMaterial = document.getElementById('calc-type-material');\n\n    var calculate = function calculate() {\n      var calcTypeOption = document.getElementById('calc-type'),\n          calcMaterial = document.getElementById('calc-type-material'),\n          material = calcMaterial.options[calcMaterial.selectedIndex].value,\n          type = calcTypeOption.options[calcTypeOption.selectedIndex].value;\n\n      if (material !== '--' && type !== '--') {\n        calcTotal.value = Math.floor(material * type * calcInput.value);\n      } else if (material !== '--') {\n        calcTotal.value = Math.floor(material * calcInput.value);\n      } else if (type !== '--') {\n        calcTotal.value = Math.floor(type * calcInput.value);\n      } else {\n        calcTotal.value = calcInput.value;\n      }\n    };\n\n    var replace = function replace() {\n      calcInput.value = calcInput.value.replace(/\\W/, '');\n      calculate();\n    };\n\n    calcInput.addEventListener('input', replace);\n    calcType.addEventListener('change', calculate);\n    calcTypeMaterial.addEventListener('change', calculate);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://lesson30/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a2ff3fc48fe4a6767d6")
/******/ })();
/******/ 
/******/ }
);