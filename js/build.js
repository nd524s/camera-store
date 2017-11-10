/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(".select-container__a").on("click", function (e) {
    e.preventDefault();
    let dropDown = this.nextElementSibling;
    if(dropDown.tagName == "UL") {
        if(dropDown.classList.contains("show")) {
            dropDown.classList.remove("show");
        } else {
            dropDown.classList.toggle("show");
        }
    }
    e.stopPropagation();
});

$(window).click(function (e) {
    e.preventDefault();
    if (event.target.matches(".select-container__a") || event.target.matches(".select-container__ul") || event.target.matches("#menu-bar") || event.target.matches("#search-icon") || event.target.matches(".search-line input")){
        return;
    } else {
        $(".select-container__ul").removeClass("show");
        $(".search-line").css("display","none");
        if(window.innerWidth <= 500) {
            $("#item-types").css("display","none");
      }
    }
});

$(".content__item").hover(function() {
    if($(this).closest(".content__item_large").length === 0) {
        $(this).css("background-color", "rgba(0, 99, 255, 0.3)");
        $(this).css("border", "1px solid #251cff");
        $(this).css("cursor", "pointer");
    }
}, function() {
    $(this).css("background-color", "");
    $(this).css("border", "");
});

$("#menu-bar").on("click", function() {
     $("#item-types").css("display","block");
});

$("#search-criteria").on("click", function(e) {
    e.preventDefault();
    $(".popup").css("display", "block");
    $(".search-box").css("display", "block");
});

$(".select-container__ul li").on("click", function(e) {
    e.preventDefault();
    var selectedValue = $(this).text();
    $(this).parent().prev().children().text(selectedValue);
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        $(".popup").css("display", "none");
        $(".search-box").css("display", "none");
    }
});

$("#search-icon").on("click", function(e) {
    $(".header__wrapper input").appendTo(".search-line");
    $(".search-line").css("display", "block");
    $(".search-line input").attr("placeholder", "ПОИСК ТОВАРОВ")
    $(".search-line input").addClass("mobile-search");
    $(".mobile-search").css("border-bottom", "none");
});


/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map