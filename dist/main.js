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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(246, 246, 246);\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n#main-container {\\r\\n  width: 45%;\\r\\n  padding: 20px 5%;\\r\\n  overflow: hidden;\\r\\n  cursor: pointer;\\r\\n  transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\\r\\n  transform: translate3d(0, 0, 0);\\r\\n  background-color: rgb(246, 246, 246);\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.selected-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n#stats {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#stats h2 {\\r\\n  color: #545862;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n  padding: 1rem;\\r\\n  line-height: 20px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.refresh span {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n#add-item {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#add-item div {\\r\\n  background-color: #fff;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n  padding: 10px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#add-item div form {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#new-item {\\r\\n  font-size: 1rem;\\r\\n  font-style: italic;\\r\\n  border: 0;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#enter-button {\\r\\n  border: 0;\\r\\n  background-color: #fff;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#item-list {\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  background-color: #fff;\\r\\n  margin: 0;\\r\\n  padding-left: 10px;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#item-list .todo {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  width: 80%;\\r\\n  height: 50px;\\r\\n  font-size: 1rem;\\r\\n  text-align: left;\\r\\n  border: 0;\\r\\n  outline: none;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.drag {\\r\\n  border: 0;\\r\\n  cursor: move;\\r\\n  background-color: #fff;\\r\\n  position: absolute;\\r\\n  right: 70px;\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.clear-button {\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  margin: 0;\\r\\n  border: 0;\\r\\n  font-size: 1rem;\\r\\n  background-color: rgb(246, 246, 246);\\r\\n}\\r\\n\\r\\n.settings {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  border: 0;\\r\\n  background-color: #fff;\\r\\n  right: 70px;\\r\\n  height: 18px;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.task-menu {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  height: 70px;\\r\\n  right: -5px;\\r\\n  background: #fff;\\r\\n  border-radius: 4px;\\r\\n  transform: scale(0);\\r\\n  transform-origin: top right;\\r\\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\\r\\n  transition: transform 0.2s ease;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.task-menu.show {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.task-menu li {\\r\\n  display: flex;\\r\\n  height: 25px;\\r\\n  font-size: 16px;\\r\\n  padding: 4px;\\r\\n  cursor: pointer;\\r\\n  justify-content: flex-start;\\r\\n  gap: 10px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.settings li:hover {\\r\\n  background: #f5f5f5;\\r\\n}\\r\\n\\r\\n.settings li i {\\r\\n  padding-right: 8px;\\r\\n}\\r\\n\\r\\n#delete {\\r\\n  padding: 8px;\\r\\n  background-color: rgb(246, 246, 246);\\r\\n  border: 1px solid black;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todoTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoTasks.js */ \"./src/modules/todoTasks.js\");\n/* harmony import */ var _modules_editResponse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editResponse.js */ \"./src/modules/editResponse.js\");\n\r\n\r\n\r\n\r\nconst enterButton = document.querySelector('#enter-button');\r\nconst refreshBtn = document.getElementById('refresh-buttton');\r\nconst newTaskInput = document.getElementById('new-item');\r\nlet storedTasks = JSON.parse(localStorage.getItem('tasks'));\r\n\r\nconst todoTask = new _modules_todoTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nrefreshBtn.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  window.location.reload();\r\n});\r\n\r\nnewTaskInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    e.preventDefault();\r\n    document.querySelector('#enter-button').click();\r\n  }\r\n});\r\n\r\nenterButton.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  todoTask.add();\r\n  todoTask.remove();\r\n  (0,_modules_editResponse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\ntodoTask.displayTaskFromStore();\r\n\r\nconst completedTask = (taskId, status) => {\r\n  const taskSelected = storedTasks.findIndex((task) => task.index === taskId);\r\n  storedTasks[taskSelected].completed = status;\r\n  localStorage.setItem('tasks', JSON.stringify(storedTasks));\r\n};\r\n\r\nconst clearCompletedTasks = () => {\r\n  storedTasks = storedTasks.filter((task) => !task.completed);\r\n  storedTasks.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(storedTasks));\r\n};\r\n\r\nconst tasksCheckInputs = document.querySelectorAll('.checkbox');\r\ntasksCheckInputs.forEach((checkInput) => {\r\n  checkInput.addEventListener('change', (e) => {\r\n    const taskId = e.target.id.replace('submit-new-item-', '');\r\n    completedTask(Number(taskId), e.target.checked);\r\n    e.target.parentNode.querySelector('.task').classList.toggle('checked');\r\n  });\r\n});\r\n\r\nconst clearAllCompleted = document.querySelector('.clear-button');\r\nclearAllCompleted.addEventListener('click', () => {\r\n  clearCompletedTasks();\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayTask = (object) => `<ul id=\"item-list\" class=\"items\">\r\n        <li class=\"todo\">\r\n          <input id=\"submit-new-item-${object.index}\" type=\"checkbox\" title=\"\" class=\"checkbox\" name=\"checkbox-${object.index}\" />\r\n          <input class=\"task\" id=\"label-checkbox-${object.index}\" value ='${object.description}' type='text'/>\r\n        \r\n          <div class='drag'>\r\n            <button type='button' id='delete'>Delete</button>\r\n          </div>\r\n          \r\n        </li>\r\n      </ul>`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);\r\n\r\n/* <div class=\"settings\">\r\n            <ul class=\"task-menu\">\r\n              <li id='editbtn-${object.index}' class='editbtn'>\r\n                <i class=\"uil uil-pen\"></i>\r\n                Edit\r\n              </li>\r\n              <li><i class=\"uil uil-trash\"></i>Delete</li>\r\n            </ul>\r\n            <i class=\"material-symbols-outlined\" id='threeBtn'>more_vert</i>\r\n          </div> */\r\n\r\n/* <div class='drag'>\r\n            <span><i class=\"uil uil-trash\"></i>Delete</span>\r\n          </div> */\n\n//# sourceURL=webpack://webpack/./src/modules/displayTask.js?");

/***/ }),

/***/ "./src/modules/editResponse.js":
/*!*************************************!*\
  !*** ./src/modules/editResponse.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editResponse = () => {\r\n  const todoTaskInputs = document.querySelectorAll('.task');\r\n  todoTaskInputs.forEach((taskInput) => {\r\n    taskInput.addEventListener('focusin', (e) => {\r\n      e.target.parentNode.parentNode.style.background = 'rgb(255,232,195)';\r\n      e.target.style.background = 'rgb(255,232,195)';\r\n      e.target.parentNode.querySelector('.drag').style.background = 'rgb(255,232,195)';\r\n    });\r\n    taskInput.addEventListener('focusout', (e) => {\r\n      e.target.style.background = 'white';\r\n      e.target.parentNode.parentNode.style.background = 'white';\r\n      e.target.parentNode.querySelector('.drag').style.background = 'white';\r\n    });\r\n    taskInput.addEventListener('input', (e) => {\r\n      e.preventDefault();\r\n      const taskId = e.target.id.replace('label-checkbox-', '');\r\n      let storedTasks = JSON.parse(localStorage.getItem('tasks'));\r\n      storedTasks = storedTasks.map((task) => {\r\n        if (task.index === Number(taskId)) {\r\n          return { ...task, description: e.target.value };\r\n        }\r\n        return task;\r\n      });\r\n      localStorage.setItem('tasks', JSON.stringify(storedTasks));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editResponse);\n\n//# sourceURL=webpack://webpack/./src/modules/editResponse.js?");

/***/ }),

/***/ "./src/modules/todoTasks.js":
/*!**********************************!*\
  !*** ./src/modules/todoTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/modules/displayTask.js\");\n/* harmony import */ var _editResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editResponse.js */ \"./src/modules/editResponse.js\");\n\r\n\r\n\r\nclass TodoTasks {\r\n  constructor() {\r\n    this.taskShelf = [];\r\n  }\r\n\r\n  add = () => {\r\n    const newTaskInput = document.getElementById('new-item');\r\n    const listContainer = document.querySelector('.todo-list-container');\r\n    if (newTaskInput.value !== '') {\r\n      const currentTask = [];\r\n      this.taskShelf.push(\r\n        {\r\n          description: newTaskInput.value,\r\n          completed: false,\r\n          index: listContainer.childElementCount,\r\n        },\r\n      );\r\n      currentTask.push(\r\n        {\r\n          description: newTaskInput.value,\r\n          completed: false,\r\n          index: listContainer.childElementCount + 1,\r\n        },\r\n      );\r\n      for (let i = 0; i < this.taskShelf.length; i += 1) {\r\n        this.taskShelf[i].index = i + 1;\r\n      }\r\n      if (this.taskShelf.length > 0) {\r\n        currentTask.forEach((task) => listContainer.insertAdjacentHTML('beforeend', (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task)));\r\n      }\r\n    }\r\n    newTaskInput.value = '';\r\n    localStorage.setItem('tasks', JSON.stringify(this.taskShelf));\r\n  }\r\n\r\n  remove = () => {\r\n    if (this.taskShelf.length > 0) {\r\n      const deleteBtn = document.querySelectorAll('.drag');\r\n      deleteBtn.forEach((element) => element.addEventListener('click', () => {\r\n        element.parentNode.remove();\r\n        this.taskShelf = this.taskShelf.filter((x) => x.description !== element.parentNode.getElementsByTagName('input')[1].value);\r\n        for (let i = 0; i < this.taskShelf.length; i += 1) {\r\n          this.taskShelf[i].index = i + 1;\r\n        }\r\n        localStorage.setItem('tasks', JSON.stringify(this.taskShelf));\r\n      }));\r\n    }\r\n  }\r\n\r\n  displayTaskFromStore = () => {\r\n    const listContainer = document.querySelector('.todo-list-container');\r\n    const storedTasks = JSON.parse(localStorage.getItem('tasks'));\r\n    if (storedTasks !== null) {\r\n      this.taskShelf = storedTasks;\r\n      this.taskShelf.forEach((task) => {\r\n        listContainer.insertAdjacentHTML('beforeend', (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task));\r\n        this.remove();\r\n        (0,_editResponse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoTasks);\n\n//# sourceURL=webpack://webpack/./src/modules/todoTasks.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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