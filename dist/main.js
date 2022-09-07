/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoTasks.js */ \"./src/modules/todoTasks.js\");\n/* harmony import */ var _modules_editResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/editResponse.js */ \"./src/modules/editResponse.js\");\n\n\n\nconst enterButton = document.querySelector('#enter-button');\nlet storedTasks = JSON.parse(localStorage.getItem('tasks'));\n\nconst todoTask = new _modules_todoTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nenterButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  todoTask.add();\n  todoTask.remove();\n  (0,_modules_editResponse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\ntodoTask.displayTaskFromStore();\n\nconst completedTask = (taskId, status) => {\n  const taskSelected = storedTasks.findIndex((task) => task.index === taskId);\n  storedTasks[taskSelected].completed = status;\n  localStorage.setItem('tasks', JSON.stringify(storedTasks));\n};\n\nconst clearCompletedTasks = () => {\n  storedTasks = storedTasks.filter((task) => !task.completed);\n  storedTasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(storedTasks));\n};\n\nconst tasksCheckInputs = document.querySelectorAll('.checkbox');\ntasksCheckInputs.forEach((checkInput) => {\n  checkInput.addEventListener('change', (e) => {\n    const taskId = e.target.id.replace('submit-new-item-', '');\n    completedTask(Number(taskId), e.target.checked);\n    e.target.parentNode.querySelector('.task').classList.toggle('checked');\n  });\n});\n\nconst clearAllCompleted = document.querySelector('.clear-button');\nclearAllCompleted.addEventListener('click', () => {\n  clearCompletedTasks();\n  window.location.reload();\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayTask = (object) => `<ul id=\"item-list\" class=\"items\">\n        <li class=\"todo\">\n          <input id=\"submit-new-item-${object.index}\" type=\"checkbox\" title=\"\" class=\"checkbox\" name=\"checkbox-${object.index}\" />\n          <input class=\"task\" id=\"label-checkbox-${object.index}\" value ='${object.description}' type='text'/>\n        \n          <div class='drag'>\n            <span><i class=\"uil uil-trash\"></i>Delete</span>\n          </div>\n\n          \n          \n        </li>\n      </ul>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);\n\n/* <div class=\"settings\">\n            <ul class=\"task-menu\">\n              <li id='editbtn-${object.index}' class='editbtn'>\n                <i class=\"uil uil-pen\"></i>\n                Edit\n              </li>\n              <li><i class=\"uil uil-trash\"></i>Delete</li>\n            </ul>\n            <i class=\"material-symbols-outlined\" id='threeBtn'>more_vert</i>\n          </div> */\n\n/* <div class='drag'>\n            <span><i class=\"uil uil-trash\"></i>Delete</span>\n          </div> */\n\n//# sourceURL=webpack://webpack/./src/modules/displayTask.js?");

/***/ }),

/***/ "./src/modules/editResponse.js":
/*!*************************************!*\
  !*** ./src/modules/editResponse.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editResponse = () => {\n  const todoTaskInputs = document.querySelectorAll('.task');\n  todoTaskInputs.forEach((taskInput) => {\n    taskInput.addEventListener('focusin', (e) => {\n      e.target.parentNode.parentNode.style.background = 'rgb(241,240,204)';\n      e.target.style.background = 'rgb(241,240,204)';\n    });\n    taskInput.addEventListener('focusout', (e) => {\n      e.target.style.background = 'white';\n      e.target.parentNode.parentNode.style.background = 'white';\n    });\n    taskInput.addEventListener('input', (e) => {\n      e.preventDefault();\n      const taskId = e.target.id.replace('label-checkbox-', '');\n      let storedTasks = JSON.parse(localStorage.getItem('tasks'));\n      storedTasks = storedTasks.map((task) => {\n        if (task.index === Number(taskId)) {\n          return { ...task, description: e.target.value };\n        }\n        return task;\n      });\n      localStorage.setItem('tasks', JSON.stringify(storedTasks));\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editResponse);\n\n//# sourceURL=webpack://webpack/./src/modules/editResponse.js?");

/***/ }),

/***/ "./src/modules/todoTasks.js":
/*!**********************************!*\
  !*** ./src/modules/todoTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/modules/displayTask.js\");\n/* harmony import */ var _editResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editResponse.js */ \"./src/modules/editResponse.js\");\n\n\n\nclass TodoTasks {\n  constructor() {\n    this.taskShelf = [];\n  }\n\n  add = () => {\n    const newTaskInput = document.getElementById('new-item');\n    const listContainer = document.querySelector('.todo-list-container');\n    if (newTaskInput.value !== '') {\n      const currentTask = [];\n      this.taskShelf.push(\n        {\n          description: newTaskInput.value,\n          completed: false,\n          index: listContainer.childElementCount,\n        },\n      );\n      currentTask.push(\n        {\n          description: newTaskInput.value,\n          completed: false,\n          index: listContainer.childElementCount + 1,\n        },\n      );\n      for (let i = 0; i < this.taskShelf.length; i += 1) {\n        this.taskShelf[i].index = i + 1;\n      }\n      if (this.taskShelf.length > 0) {\n        currentTask.forEach((task) => listContainer.insertAdjacentHTML('beforeend', (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task)));\n      }\n    }\n    newTaskInput.value = '';\n    localStorage.setItem('tasks', JSON.stringify(this.taskShelf));\n  }\n\n  remove = () => {\n    if (this.taskShelf.length > 0) {\n      const deleteBtn = document.querySelectorAll('.drag');\n      deleteBtn.forEach((element) => element.addEventListener('click', () => {\n        element.parentNode.remove();\n        // element.closest('.todo').remove();\n        this.taskShelf = this.taskShelf.filter((x) => x.description !== element.parentNode.getElementsByTagName('input')[1].value);\n        // this.taskShelf = this.taskShelf.filter((x) => x.description !== element.closest('.todo').getElementsByTagName('input')[1].value);\n        // taskShelf = taskShelf.filter((x) => x.description !== element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('input')[1].value);\n        for (let i = 0; i < this.taskShelf.length; i += 1) {\n          this.taskShelf[i].index = i + 1;\n        }\n        localStorage.setItem('tasks', JSON.stringify(this.taskShelf));\n      }));\n    }\n  }\n\n  displayTaskFromStore = () => {\n    const listContainer = document.querySelector('.todo-list-container');\n    const storedTasks = JSON.parse(localStorage.getItem('tasks'));\n    if (storedTasks !== null) {\n      this.taskShelf = storedTasks;\n      this.taskShelf.forEach((task) => {\n        listContainer.insertAdjacentHTML('beforeend', (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task));\n        this.remove();\n        (0,_editResponse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoTasks);\n\n//# sourceURL=webpack://webpack/./src/modules/todoTasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;