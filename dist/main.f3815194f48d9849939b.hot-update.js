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

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так',\n      loadMassage = 'Загрузка...',\n      succsessMessage = 'Спасибо! Скоро мы с вами свяжемся!',\n      formAll = document.querySelectorAll('.form-form'),\n      statusMessage = document.createElement('div'),\n      img = document.createElement('img'),\n      regExpEmail = /^(?!\\s*$).+/,\n      regExpTel = /.{16}/;\n  statusMessage.style.cssText = \"\\n    font-size: 2rem;\\n    color: white;\";\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      body: JSON.stringify(body)\n    });\n  };\n\n  var resetValue = function resetValue() {\n    formAll.forEach(function (item) {\n      item.value = '';\n      console.log(item);\n    });\n    statusMessage.textContent = '';\n    img.style.cssText = \"\";\n  };\n\n  var succsessFunc = function succsessFunc() {\n    formAll.forEach(function (item) {\n      item.value = '';\n    });\n    statusMessage.textContent = succsessMessage;\n    img.style.cssText = \"\\n      margin-right: 10px;\\n      width: 25px;\";\n    img.src = 'images/success.png';\n    statusMessage.insertBefore(img, statusMessage.firstChild);\n    setTimeout(resetValue, 5000);\n  };\n\n  var errorFunc = function errorFunc(error) {\n    console.error(error);\n    statusMessage.textContent = errorMessage;\n    img.style.cssText = \"\\n      margin-right: 10px;\\n      width: 25px;\";\n    img.src = 'images/error.png';\n    statusMessage.insertBefore(img, statusMessage.firstChild);\n    setTimeout(resetValue, 5000);\n  };\n\n  var formFunc = function formFunc(form) {\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMassage;\n    img.style.cssText = \"\\n      margin-right: 10px;\\n      width: 25px;\";\n    img.src = 'images/load2.gif';\n    statusMessage.insertBefore(img, statusMessage.firstChild);\n    var formData = new FormData(form),\n        calcTotal = document.getElementById('calc-total');\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    if (calcTotal !== null) body.calculate = calcTotal.value;\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      succsessFunc();\n    })[\"catch\"](function (error) {\n      return errorFunc(error);\n    });\n  };\n\n  formAll.forEach(function (elem) {\n    elem.addEventListener('submit', function (event) {\n      var name = elem.querySelector('.form-name'),\n          tel = elem.querySelector('.form-tel');\n      event.preventDefault();\n\n      if (regExpEmail.test(name.value)) {\n        if (regExpTel.test(tel.value)) {\n          formFunc(elem);\n        } else {\n          alert('введите номер телефона до конца');\n        }\n      } else {\n        alert('введите имя');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson30/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b918501ab6fe1f21dc42")
/******/ })();
/******/ 
/******/ }
);