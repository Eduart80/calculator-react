(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],[,,,,function(_,e,t){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_zeedy_Downloads_workInProgress_ReactProject_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_layout_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_layout_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__),_asets_img_azure_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_Components_output__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),Layout=function Layout(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_zeedy_Downloads_workInProgress_ReactProject_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),input=_useState2[0],setInput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_zeedy_Downloads_workInProgress_ReactProject_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],handleClick=function handleClick(event){var value=event.target.value;if("="===value){if(""!==input){var res="";try{res=eval(input)}catch(err){setResult("Math error")}void 0===res?setResult("Math error"):(setResult(input),setInput(res))}}else if("C"===value)setInput("0"),setResult("");else if("DEL"===value)try{var str=input;str=str.substr(0,str.length-1),setInput(str)}catch(error){setResult("0")}else setInput("0"===input?value:input+=value)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_output__WEBPACK_IMPORTED_MODULE_4__.a,{user:input,answer:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{src:_asets_img_azure_png__WEBPACK_IMPORTED_MODULE_3__.a,alt:"euro",width:"50px",height:"50px"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"keys",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button clear",value:"C",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button clear",value:"DEL",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"%",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"/",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"7",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"8",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"9",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"*",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"4",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"5",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"6",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"-",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"1",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"2",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"3",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"+",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:"0",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button ",value:".",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:"button",className:"button operator",value:"=",onClick:handleClick})]})]})};__webpack_exports__.a=Layout},function(_,e,t){"use strict";e.a=t.p+"static/media/azure.5d1a8fab.png"},function(_,e,t){"use strict";t(1),t(4);var a=t(0),s=function(_){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",readOnly:!0,className:"screen",style:_.textSize,value:_.value})})};e.a=function(_){return Object(a.jsxs)("div",{children:[Object(a.jsx)(s,{value:_.answer,textSize:{fontSize:"20px"}}),Object(a.jsx)(s,{value:_.user})]})}},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(1),s=t.n(a),u=t(5),c=t.n(u),n=(t(13),t(14),t(6)),r=t(0);var l=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(n.a,{})})})};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.8ff49663.chunk.js.map