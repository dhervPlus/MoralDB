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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// /**\n//  * First we will load all of this project's JavaScript dependencies which\n//  * includes Vue and other libraries. It is a great starting point when\n//  * building robust, powerful web applications using Vue and Laravel.\n//  */\n// require('./bootstrap');\n// window.Vue = require('vue');\n// /**\n//  * Next, we will create a fresh Vue application instance and attach it to\n//  * the page. Then, you may begin adding components to this application\n//  * or customize the JavaScript scaffolding to fit your unique needs.\n//  */\n// Vue.component('example-component', require('./components/ExampleComponent.vue'));\n// const app = new Vue({\n//     el: '#app'\n// });\n(function () {\n    var addLike = function addLike() {\n        var likes = document.querySelectorAll('.addlike');\n        Array.from(likes).forEach(function (item) {\n            var initialCount = Number(item.textContent);\n            item.addEventListener('click', function () {\n                fetch('/comments/' + item.dataset.id + '/likes').then(function (res) {\n                    return res.text();\n                }).then(function (res) {\n                    res !== 'exists' ? '' : item.textContent = initialCount + 1;\n                });\n            });\n        });\n    };\n    var chooseAnswer = function chooseAnswer() {\n        var answers = document.querySelectorAll('.answer');\n        Array.from(answers).forEach(function (item) {\n            item.addEventListener('click', function (event) {\n                console.log('event', event, event.currentTarget);\n                var question = event.currentTarget.dataset.question;\n                var answer = event.currentTarget.dataset.answer;\n                fetch('/questions/' + question + '/answers/' + answer).then(function (res) {\n                    return res.json();\n                }).then(function (res) {\n                    console.log('response', res);\n                    Array.from(answers).forEach(function (item) {\n                        console.log(item);\n                        item.style.width = res.percent[item.dataset.answer] + '%';\n                        item.style.transition = 'all .3s linear';\n                        var span = item.querySelector('span');\n                        span.classList.remove('off');\n                        span.classList.add('on');\n                        span.textContent = Math.floor(res.percent[item.dataset.answer]) + '%';\n                    });\n                }).catch(function (e) {\n                    return console.log(e);\n                });\n            });\n        });\n    };\n    addLike();\n    chooseAnswer();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzE3NTkiXSwibmFtZXMiOlsiYWRkTGlrZSIsImxpa2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIml0ZW0iLCJpbml0aWFsQ291bnQiLCJOdW1iZXIiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaCIsImRhdGFzZXQiLCJpZCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiY2hvb3NlQW5zd2VyIiwiYW5zd2VycyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJxdWVzdGlvbiIsImFuc3dlciIsImpzb24iLCJzdHlsZSIsIndpZHRoIiwicGVyY2VudCIsInRyYW5zaXRpb24iLCJzcGFuIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIk1hdGgiLCJmbG9vciIsImNhdGNoIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFlBQVc7QUFDUixRQUFJQSxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNoQixZQUFJQyxRQUFRQyxTQUFTQyxnQkFBVCxDQUEwQixVQUExQixDQUFaO0FBQ0FDLGNBQU1DLElBQU4sQ0FBV0osS0FBWCxFQUFrQkssT0FBbEIsQ0FBMEIsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLGdCQUFJQyxlQUFlQyxPQUFPRixLQUFLRyxXQUFaLENBQW5CO0FBQ0FILGlCQUFLSSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDQyxxQ0FBbUJMLEtBQUtNLE9BQUwsQ0FBYUMsRUFBaEMsYUFDS0MsSUFETCxDQUNVO0FBQUEsMkJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGlCQURWLEVBRUtGLElBRkwsQ0FFVSxlQUFPO0FBQ1RDLDRCQUFRLFFBQVIsR0FBbUIsRUFBbkIsR0FBeUJULEtBQUtHLFdBQUwsR0FBbUJGLGVBQWUsQ0FBM0Q7QUFDSCxpQkFKTDtBQUtILGFBTkQ7QUFPSCxTQVREO0FBVUgsS0FaRDtBQWFBLFFBQUlVLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3JCLFlBQUlDLFVBQVVqQixTQUFTQyxnQkFBVCxDQUEwQixTQUExQixDQUFkO0FBQ0FDLGNBQU1DLElBQU4sQ0FBV2MsT0FBWCxFQUFvQmIsT0FBcEIsQ0FBNEIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDQSxpQkFBS0ksZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU1MsS0FBVCxFQUFnQjtBQUMzQ0Msd0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFyQixFQUE0QkEsTUFBTUcsYUFBbEM7QUFDQSxvQkFBSUMsV0FBV0osTUFBTUcsYUFBTixDQUFvQlYsT0FBcEIsQ0FBNEJXLFFBQTNDO0FBQ0Esb0JBQUlDLFNBQVNMLE1BQU1HLGFBQU4sQ0FBb0JWLE9BQXBCLENBQTRCWSxNQUF6QztBQUNBYixzQ0FBb0JZLFFBQXBCLGlCQUF3Q0MsTUFBeEMsRUFDS1YsSUFETCxDQUNVO0FBQUEsMkJBQU9DLElBQUlVLElBQUosRUFBUDtBQUFBLGlCQURWLEVBRUtYLElBRkwsQ0FFVSxlQUFPO0FBQ1RNLDRCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3Qk4sR0FBeEI7QUFDQVosMEJBQU1DLElBQU4sQ0FBV2MsT0FBWCxFQUFvQmIsT0FBcEIsQ0FBNEIsZ0JBQVE7QUFDaENlLGdDQUFRQyxHQUFSLENBQVlmLElBQVo7QUFDQUEsNkJBQUtvQixLQUFMLENBQVdDLEtBQVgsR0FBc0JaLElBQUlhLE9BQUosQ0FBWXRCLEtBQUtNLE9BQUwsQ0FBYVksTUFBekIsQ0FBdEI7QUFDQWxCLDZCQUFLb0IsS0FBTCxDQUFXRyxVQUFYLEdBQXdCLGdCQUF4QjtBQUNBLDRCQUFJQyxPQUFPeEIsS0FBS3lCLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBWDtBQUNBRCw2QkFBS0UsU0FBTCxDQUFlQyxNQUFmLENBQXNCLEtBQXRCO0FBQ0FILDZCQUFLRSxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsSUFBbkI7QUFDQUosNkJBQUtyQixXQUFMLEdBQXNCMEIsS0FBS0MsS0FBTCxDQUFXckIsSUFBSWEsT0FBSixDQUFZdEIsS0FBS00sT0FBTCxDQUFhWSxNQUF6QixDQUFYLENBQXRCO0FBQ0gscUJBUkQ7QUFTSCxpQkFiTCxFQWNLYSxLQWRMLENBY1c7QUFBQSwyQkFBS2pCLFFBQVFDLEdBQVIsQ0FBWWlCLENBQVosQ0FBTDtBQUFBLGlCQWRYO0FBZUgsYUFuQkQ7QUFvQkgsU0FyQkQ7QUFzQkgsS0F4QkQ7QUF5QkF2QztBQUNBa0I7QUFDSCxDQXpDRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLyoqXG4vLyAgKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4vLyAgKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4vLyAgKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuLy8gICovXG4vLyByZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuLy8gd2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuLy8gLyoqXG4vLyAgKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4vLyAgKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4vLyAgKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuLy8gICovXG4vLyBWdWUuY29tcG9uZW50KCdleGFtcGxlLWNvbXBvbmVudCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LnZ1ZScpKTtcbi8vIGNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuLy8gICAgIGVsOiAnI2FwcCdcbi8vIH0pO1xuKGZ1bmN0aW9uKCkge1xuICAgIGxldCBhZGRMaWtlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkbGlrZScpO1xuICAgICAgICBBcnJheS5mcm9tKGxpa2VzKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBpbml0aWFsQ291bnQgPSBOdW1iZXIoaXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYC9jb21tZW50cy8ke2l0ZW0uZGF0YXNldC5pZH0vbGlrZXNgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyAhPT0gJ2V4aXN0cycgPyAnJyA6IChpdGVtLnRleHRDb250ZW50ID0gaW5pdGlhbENvdW50ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgbGV0IGNob29zZUFuc3dlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFuc3dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5zd2VyJyk7XG4gICAgICAgIEFycmF5LmZyb20oYW5zd2VycykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCwgZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnF1ZXN0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYW5zd2VyO1xuICAgICAgICAgICAgICAgIGZldGNoKGAvcXVlc3Rpb25zLyR7cXVlc3Rpb259L2Fuc3dlcnMvJHthbnN3ZXJ9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShhbnN3ZXJzKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBgJHtyZXMucGVyY2VudFtpdGVtLmRhdGFzZXQuYW5zd2VyXX0lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4zcyBsaW5lYXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IocmVzLnBlcmNlbnRbaXRlbS5kYXRhc2V0LmFuc3dlcl0pfSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFkZExpa2UoKTtcbiAgICBjaG9vc2VBbnN3ZXIoKTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9jYjA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);