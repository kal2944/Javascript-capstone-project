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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable block-opening-brace-space-before */\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin: 0;\\r\\n  font-family: 'Anton', sans-serif;\\r\\n}\\r\\n\\r\\np{\\r\\n  font-size: small;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbutton{\\r\\n  border-radius: 1rem;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n*{\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background: #21201e;\\r\\n  font-family: 'Quicksand', sans-serif;\\r\\n}\\r\\n\\r\\n.stylelogo {\\r\\n  height: 3em;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  backdrop-filter: blur(5px);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background: #21201e;\\r\\n  color: white;\\r\\n  height: 3em;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader > nav {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#intro{\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  font-size: larger;\\r\\n  gap: 5em;\\r\\n}\\r\\n\\r\\n#menu {\\r\\n  background-color: var(--transparent1);\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n#menu > li {\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n\\r\\n#menu > li.selected {\\r\\n  background-color: var(--color2);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n#menu > li > a {\\r\\n  display: flex;\\r\\n  padding: 5px;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border-top: 1px solid var(--color4);\\r\\n  width: 100%;\\r\\n  padding: 1em;\\r\\n  background: #21201e;\\r\\n  color: white;\\r\\n  top: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-family: 'Quicksand', sans-serif;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  background-color: var(--transparent3);\\r\\n  border: 1px solid rgb(169 151 151 / 80%);\\r\\n  padding: 20px;\\r\\n  font-size: 15px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.showImage {\\r\\n  width: 60%;\\r\\n  object-fit: contain;\\r\\n  max-height: 60vh;\\r\\n}\\r\\n\\r\\n.showTitle {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.showDescription > p {\\r\\n  text-align: center;\\r\\n  height: 100px;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n.interactions {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  width: 100%;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n#showList {\\r\\n  display: grid;\\r\\n  grid-template-rows: repeat(2, 1fr);\\r\\n}\\r\\n\\r\\n.tittleimg{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1em;\\r\\n}\\r\\n\\r\\n.stylelikes{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.form{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.popupinfo{\\r\\n  padding: 1em;\\r\\n  width: 80%;\\r\\n  top: 9%;\\r\\n  left: 10%;\\r\\n  position: fixed;\\r\\n  background: #fff;\\r\\n  box-shadow: 0 0 5px #ccc;\\r\\n  justify-content: flex-start;\\r\\n  z-index: 1;\\r\\n  height: 85%;\\r\\n  overflow: scroll;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.styleimagepopup{\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: flex-start;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.styleclosepopup{\\r\\n  width: 45%;\\r\\n}\\r\\n\\r\\n.styleimgmovie{\\r\\n  width: 2em;\\r\\n}\\r\\n\\r\\n#displaycomments{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.overinfo{\\r\\n  position: fixed;\\r\\n  background: rgba(0, 0, 0, 0.7);\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  transition: opacity 500ms;\\r\\n  bottom: 0;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.imagemovie{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.headcomments{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.displaymovies{\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n  flex-direction: row;\\r\\n  gap: 1em;\\r\\n  font-family: 'Quicksand', sans-serif;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  #showList {\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n  }\\r\\n\\r\\n  .popupinfo{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 1rem 0;\\r\\n    padding-top: 1rem;\\r\\n    padding-right: 1px;\\r\\n    padding-bottom: 1rem;\\r\\n    padding-left: 9px;\\r\\n    z-index: 1;\\r\\n  }\\r\\n\\r\\n  #intro{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    font-size: xx-large;\\r\\n    padding-left: 300px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/imgs/closexbutton.png":
/*!***********************************!*\
  !*** ./src/imgs/closexbutton.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/closexbutton.png\");\n\n//# sourceURL=webpack://javascript-capstone-project/./src/imgs/closexbutton.png?");

/***/ }),

/***/ "./src/imgs/logomenu.jpeg":
/*!********************************!*\
  !*** ./src/imgs/logomenu.jpeg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/logomenu.jpeg\");\n\n//# sourceURL=webpack://javascript-capstone-project/./src/imgs/logomenu.jpeg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _imgs_logomenu_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/logomenu.jpeg */ \"./src/imgs/logomenu.jpeg\");\n/* harmony import */ var _imgs_closexbutton_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/closexbutton.png */ \"./src/imgs/closexbutton.png\");\n/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _modules_ShowLibrary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ShowLibrary.js */ \"./src/modules/ShowLibrary.js\");\n/* harmony import */ var _modules_popupadd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupadd.js */ \"./src/modules/popupadd.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n\n\n\n\n\n\n\n\nconst showContainer = document.getElementById('showList');\n\nshowContainer.addEventListener('click', _modules_popupadd_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n(0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then((result) => {\n  const showLib = new _modules_ShowLibrary_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](result);\n  showLib.displayShows(6, showContainer);\n  const likebutton = document.querySelectorAll('.likebtn');\n  likebutton.forEach((item) => {\n    item.addEventListener('click', () => {\n      const idcard = parseFloat(item.getAttribute('id'));\n      (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(idcard);\n    });\n  });\n});\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/ShowLibrary.js":
/*!************************************!*\
  !*** ./src/modules/ShowLibrary.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowLibrary)\n/* harmony export */ });\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.js */ \"./src/modules/like.js\");\n\r\n\r\nclass ShowLibrary {\r\n  constructor(Array) {\r\n    this.ShowArray = Array;\r\n  }\r\n\r\n  displayShows(numberOfItems, showContainer) {\r\n    let count = 0;\r\n    for (let i = 0; i < numberOfItems; i += 1) {\r\n      count += 1;\r\n      const show = this.ShowArray[i];\r\n      const htmlString = `\r\n        <li class=\"show\" id=\"${show.id}\">\r\n          <img src=\"${show.image.original}\" alt=\"\" class=\"showImage\">\r\n        <div class=\"tittleimg\">\r\n          <div><h2 class=\"${show.id}\" showTitle\">${show.name}</h2></div>\r\n          <div class='stylelikes'>\r\n          <button id='${show.id}' class=\"likebtn\">\r\n              <span id=\"${show.id}\"><i class=\"far fa-heart\"></i></span>\r\n              <span id=\"count-${show.id}\">${(0,_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(show.id)}</span> Like\r\n          </button>\r\n          </div>\r\n        </div>\r\n          <div class=\"genres\">\r\n          ${show.genres.join(' ')}\r\n          </div>\r\n              <div>\r\n                <button name='${show.id}' type=\"button\">Comments</button>\r\n              </div>\r\n              <div>${show.id}</div>\r\n        </li>`;\r\n      showContainer.insertAdjacentHTML('beforeend', htmlString);\r\n    }\r\n    const countmovies = document.getElementById('countmovies');\r\n    countmovies.textContent = count;\r\n    return count;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/ShowLibrary.js?");

/***/ }),

/***/ "./src/modules/createComment.js":
/*!**************************************!*\
  !*** ./src/modules/createComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createcomment)\n/* harmony export */ });\nasync function createcomment(item) {\r\n  const urlgetcomment = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments?item_id=${item}`;\r\n  const infocoment = await fetch(urlgetcomment, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const infocmnt = await infocoment.json();\r\n  const displaycoments = document.getElementById('displaycomments');\r\n  const commentscount = document.getElementById('countcomments');\r\n  displaycoments.innerHTML = '';\r\n  infocmnt.forEach((item) => {\r\n    const showcomments = `<li>${item.creation_date} : ${item.username} :${item.comment} </li>`;\r\n    displaycoments.insertAdjacentHTML('beforeend', showcomments);\r\n    commentscount.textContent = infocmnt.length;\r\n  });\r\n  return infocmnt.length;\r\n}\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/createComment.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getShows)\n/* harmony export */ });\nasync function getShows() {\n  const url = 'https://api.tvmaze.com/shows';\n  const response = await fetch(url);\n  const movies = await response.json();\n  return movies;\n}\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/idpost.js":
/*!*******************************!*\
  !*** ./src/modules/idpost.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postlikes)\n/* harmony export */ });\nasync function postlikes(idcard) {\r\n  const urlgetlikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes?item_id=${idcard}`;\r\n  const infolikes = await fetch(urlgetlikes, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const infolike = await infolikes.json();\r\n  infolike.sort((a, b) => a.item_id - b.item_id);\r\n  const displaylikes = document.getElementById(`count-${idcard}`);\r\n  displaylikes.textContent = infolike[idcard].likes;\r\n}\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/idpost.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ idpost)\n/* harmony export */ });\n/* harmony import */ var _idpost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idpost.js */ \"./src/modules/idpost.js\");\n\r\n\r\nasync function idpost(idcard) {\r\n  const datainfo = {\r\n    item_id: idcard,\r\n  };\r\n\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes';\r\n  const responst = await fetch(url,\r\n    {\r\n      method: 'POST',\r\n      headers: {\r\n        'content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(datainfo),\r\n    });\r\n  const result = await responst.text();\r\n  (0,_idpost_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idcard);\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/popupadd.js":
/*!*********************************!*\
  !*** ./src/modules/popupadd.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popupadd)\n/* harmony export */ });\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _postcomments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postcomments.js */ \"./src/modules/postcomments.js\");\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createComment.js */ \"./src/modules/createComment.js\");\n\n\n\n\nasync function popupadd(e) {\n  const popupinfo = document.getElementById('popupinfo');\n  document.body.style.overflow = 'hidden';\n  popupinfo.style.display = 'block';\n  const idcard = parseFloat(e.target.getAttribute('name'));\n  const a = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((result) => result);\n  const popinfo = a.filter((info) => info.id === idcard);\n\n  popinfo.forEach((element) => {\n    const popup = `\n            <div class=\"popupinfo\" overflow-y:auto; id='${element.id}'>\n                <div class=\"styleimagepopup\">\n                    <div class=\"imagemovie\">\n                        <img id=\"imagen\" class=\"styleclosepopup\"  src=\"${element.image.original}\" alt=\"\" >\n                     </div>\n                <div>\n                    <img id=\"closepopup\" src=\"./imgs/closexbutton.png\"  class=\"styleimgmovie\" alt=\"\">\n                </div>\n            </div> \n             <h2>Descrpiton</h2>\n            <div>${element.summary}</div>\n                    <h3>add comment</h3>\n            <div class='form'>\n                    <input id='username' type=\"text\" placeholder=\"your name\">\n                    <textarea id='comment' placeholder=\"your insights\"></textarea>\n                    <button name ='${element.id}'id= \"comments\" type=\"submit\">submit</button>\n            <div class='headcomments'>\n            <div>\n            <h3>comments</h3>\n            </div>\n            <span id='countcomments'></span>\n            </div>\n            <ul id='displaycomments'></ul>\n              \n            </div>\n            </div>`;\n    popupinfo.insertAdjacentHTML('beforeend', popup);\n  });\n  const algo = document.getElementById('closepopup');\n  if (algo === null) {\n    popupinfo.style.display = 'none';\n    popupinfo.innerHTML = '';\n    document.body.style.overflow = 'auto';\n  } else {\n    algo.addEventListener('click', () => {\n      document.body.style.overflow = 'auto';\n      popupinfo.style.display = 'none';\n      popupinfo.innerHTML = '';\n    });\n  }\n\n  const comments = document.getElementById('comments');\n  if (comments === null) {\n    popupinfo.innerHTML = '';\n  } else {\n    comments.addEventListener('click', _postcomments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    (0,_createComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(idcard);\n  }\n}\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/popupadd.js?");

/***/ }),

/***/ "./src/modules/postcomments.js":
/*!*************************************!*\
  !*** ./src/modules/postcomments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postcoment)\n/* harmony export */ });\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment.js */ \"./src/modules/createComment.js\");\n\r\n\r\nasync function postcoment(e) {\r\n  const username = document.getElementById('username').value;\r\n  const comment = document.getElementById('comment').value;\r\n  const item = parseFloat(e.target.getAttribute('name'));\r\n  const data = {\r\n    item_id: item,\r\n    username,\r\n    comment,\r\n  };\r\n  if (username !== '' || comment !== '') {\r\n    (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\r\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments';\r\n    const responst = await fetch(url,\r\n      {\r\n        method: 'POST',\r\n        headers: {\r\n          'content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n      });\r\n    const result = await responst.text();\r\n    return result;\r\n  }\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments';\r\n  const responst = await fetch(url,\r\n    {\r\n      method: 'POST',\r\n      headers: {\r\n        'content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data),\r\n    });\r\n  const result = await responst.text();\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/postcomments.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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