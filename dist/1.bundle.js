webpackJsonp([1],{119:function(t,e){(function(e){t.exports=e}).call(e,{})},123:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var g=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),l=a(3),u=o(l),c=a(137),r=o(c),s=a(261),M=o(s),C=r["default"].bind(M["default"]),A=function(t){function e(t){n(this,e);var a=I(this,Object.getPrototypeOf(e).call(this,t));return a._toggle=a._toggle.bind(a),a.state={selected:!1},a}return i(e,t),g(e,[{key:"_toggle",value:function(t){this.setState({selected:!this.state.selected}),this.props.onClick(!this.state.selected,this.props.contamina)}},{key:"render",value:function(){var t=C({root:!0,buena:this.state.selected&&!this.props.contamina,mala:this.state.selected&&this.props.contamina});return u["default"].createElement("div",{className:t,onClick:this._toggle},u["default"].createElement("div",{className:M["default"].seleccionada},u["default"].createElement("paper-ripple",null)),u["default"].createElement("iron-image",{"class":M["default"].imagen,refs:this.props.title,src:this.props.src,preload:!0,fade:!0,sizing:"cover"}))}}]),e}(u["default"].Component);e["default"]=A},124:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var g=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),l=a(3),u=o(l),c=a(20),r=a(262),s=o(r),M=a(47),C=o(M),A=function(t){function e(){return n(this,e),I(this,Object.getPrototypeOf(e).apply(this,arguments))}return i(e,t),g(e,[{key:"render",value:function(){return u["default"].createElement("div",{className:s["default"].root},u["default"].createElement("div",null,u["default"].createElement(c.Link,{to:"/"},u["default"].createElement("img",{className:s["default"].logo,src:C["default"]}),u["default"].createElement("span",{className:s["default"].title},"SGCA - ")),u["default"].createElement("span",{className:s["default"].subtitle},this.props.subtitle)))}}]),e}(u["default"].Component);e["default"]=A},132:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),u=a(3),c=o(u),r=(a(20),a(124)),s=o(r),M=a(123),C=o(M),A=a(267),j=o(A),b=a(133),p=o(b),m=function(t){function e(t){n(this,e);var a=I(this,Object.getPrototypeOf(e).call(this,t));return a.acumular=a.acumular.bind(a),a.state={malas:0,buenas:0,seleccionadas:0,total:p["default"].length},a}return i(e,t),l(e,[{key:"acumular",value:function(t,e){var a={};a=e?t?{malas:this.state.malas+1}:{malas:this.state.malas-1}:t?{buenas:this.state.buenas+1}:{buenas:this.state.buenas-1},this.setState(a,this._recalculo)}},{key:"_recalculo",value:function(){var t=this.state.buenas+this.state.malas;this.setState({seleccionadas:t},this._comprobarSeleccionadas)}},{key:"_comprobarSeleccionadas",value:function(){this.state.total===this.state.seleccionadas&&console.log("Iguales")}},{key:"render",value:function(){var t=this;return c["default"].createElement("div",{className:j["default"].root},c["default"].createElement(s["default"],{subtitle:"Selecciona la imagen que más te guste"}),c["default"].createElement("main",null,c["default"].createElement("div",null,"Buenas: ",this.state.buenas),c["default"].createElement("div",null,"Malas: ",this.state.malas),c["default"].createElement("div",null,"Total seleccionadas: ",this.state.seleccionadas),c["default"].createElement("div",null,"Total imagenes: ",this.state.total),p["default"].map(function(e){return c["default"].createElement(C["default"],g({onClick:t.acumular,key:e.title},e))})))}}]),e}(c["default"].Component);t.exports=m},133:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=[{title:"Basura",contamina:!0,src:a(270)},{title:"Arbol",contamina:!1,src:a(271)}]},137:function(t,e,a){var o,n,I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(){"use strict";function i(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o="undefined"==typeof a?"undefined":I(a);if("string"===o||"number"===o)t.push(this&&this[a]||a);else if(Array.isArray(a))t.push(i.apply(this,a));else if("object"===o)for(var n in a)g.call(a,n)&&a[n]&&t.push(this&&this[n]||n)}}return t.join(" ")}var g={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=i:"object"===I(a(119))&&a(119)?(o=[],n=function(){return i}.apply(e,o),!(void 0!==n&&(t.exports=n))):window.classNames=i}()},250:function(t,e,a){e=t.exports=a(10)(),e.push([t.id,".Imagen_mWTm{margin:8px;position:relative;display:inline-block;box-sizing:border-box;animation-duration:.5s}.Imagen_1Zpw{z-index:1;width:220px;height:260px}.Imagen_1_yQ,.Imagen_38Mj{border-radius:3px;transform:scale(.8);border:5px solid transparent;transition:transform .4s ease-in-out}.Imagen_hfI5{z-index:2;width:100%;height:100%;position:absolute}.Imagen_hfI5 paper-ripple{color:#fff}",""]),e.locals={root:"Imagen_mWTm",imagen:"Imagen_1Zpw",buena:"Imagen_1_yQ",mala:"Imagen_38Mj",seleccionada:"Imagen_hfI5"}},251:function(t,e,a){e=t.exports=a(10)(),e.push([t.id,".Toolbar_3Dog{height:64px;font-size:24px;border-bottom:1px solid #b6b6b6;box-sizing:border-box}.Toolbar_3Dog .Toolbar_szp8{width:25px}.Toolbar_3Dog .Toolbar_Qy9Q{color:#333;padding:0 16px;letter-spacing:.3em}.Toolbar_3Dog .Toolbar_QpQE,.Toolbar_3Dog .Toolbar_Qy9Q{text-transform:uppercase}.Toolbar_3Dog .Toolbar_QpQE{color:#727272;font-size:20px;font-weight:400}.Toolbar_3Dog a{margin:0!important}.Toolbar_3Dog a,.Toolbar_3Dog div{height:64px;display:flex;margin-left:30px;align-items:center}",""]),e.locals={root:"Toolbar_3Dog",logo:"Toolbar_szp8",title:"Toolbar_Qy9Q",subtitle:"Toolbar_QpQE"}},256:function(t,e,a){e=t.exports=a(10)(),e.push([t.id,".Imagenes_1CcM main{padding:30px;text-align:center;font-family:Roboto}",""]),e.locals={root:"Imagenes_1CcM"}},261:function(t,e,a){var o=a(250);"string"==typeof o&&(o=[[t.id,o,""]]),a(13)(o,{}),o.locals&&(t.exports=o.locals)},262:function(t,e,a){var o=a(251);"string"==typeof o&&(o=[[t.id,o,""]]),a(13)(o,{}),o.locals&&(t.exports=o.locals)},267:function(t,e,a){var o=a(256);"string"==typeof o&&(o=[[t.id,o,""]]),a(13)(o,{}),o.locals&&(t.exports=o.locals)},270:function(t,e,a){t.exports=a.p+"0d463c7a460ec9ac20a455107eb06833.jpg"},271:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICBpZD0ic3ZnMzMzNiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgd2lkdGg9IjE0OC40ODIzMyIKICAgaGVpZ2h0PSIyMzguMjU0MzUiCiAgIHZpZXdCb3g9IjAgMCAxNDguNDgyMzMgMjM4LjI1NDM1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJ0cmVlMS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTMzNDIiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzMzQwIj48Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMzM1MiI+PHBhdGgKICAgICAgICAgZD0iTSAwLDgwMCA4MDAsODAwIDgwMCwwIDAsMCAwLDgwMCBaIgogICAgICAgICBpZD0icGF0aDMzNTQiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMzUwNiI+PHBhdGgKICAgICAgICAgZD0iTSAwLDgwMCA4MDAsODAwIDgwMCwwIDAsMCAwLDgwMCBaIgogICAgICAgICBpZD0icGF0aDM1MDgiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9jbGlwUGF0aD48L2RlZnM+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcwNSIKICAgICBpZD0ibmFtZWR2aWV3MzMzOCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6em9vbT0iMi4xNDQiCiAgICAgaW5rc2NhcGU6Y3g9IjkyLjY4ODkwNyIKICAgICBpbmtzY2FwZTpjeT0iMTE3LjYwNDg0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzM0NCIgLz48ZwogICAgIGlkPSJnMzM0NCIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlua3NjYXBlOmxhYmVsPSIyNDQ1Mi1OVjRJQVIiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTMwNi4xNzgxOSw5ODUuMTc1OTkpIj48dGV4dAogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMjExLjYwMjUsNzE1LjY5NTMpIgogICAgICAgc3R5bGU9ImZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjI2LjYxMjQ5OTI0cHg7Zm9udC1mYW1pbHk6QmViYXM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCZWJhczt3cml0aW5nLW1vZGU6bHItdGI7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgaWQ9InRleHQzNDk4Ij48dHNwYW4KICAgICAgICAgeD0iMCAxNC4yNTA5OTQgMjAuNjk2NTQxIDM0LjI5NTUyOCA0OS45MTcwNjUgNTcuMjYyMTE1IDY5Ljg3NjQ0MiA4Mi4wNjQ5NjQgOTQuNjc5MjkxIDExNC40NDcwNiAxMjcuMDYxMzggMTQyLjI1NzEzIDE1NS44NTYxMSAxNzAuMTIwNDEgMTc3LjQ2NTQ1IDE4Ny4wMTkzNSAyMDEuMDQ0MTMgMjE2LjA5MDg0IDIyOC43MDUxNyAyNDEuMzE5NDkgMjU1LjU4Mzc5IDI2MC40ODA1IDI3Ni45NTM2MSAyODEuODUwMzEgMjk1LjkzMSAzMDguMTE5NTQgMzI0LjAzMzgxIDMzOS4yMjk1MiAzNTIuODI4NTIgMzY3LjA5MjgzIgogICAgICAgICB5PSIwIgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4zNTAwIj5DSVRZIEVMRU1FTlRTIChUUkVFUyAmYW1wOyBQTEFOVFMpPC90c3Bhbj48L3RleHQ+CjxnCiAgICAgICBpZD0iZzM3MTAiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDMuNTcyMyw2MTAuMDM3MzEpIj48cGF0aAogICAgICAgICBkPSJtIDAsMCBjIDAsLTYuOTAzIC0xNC4wOTksLTEyLjUgLTMxLjQ5MSwtMTIuNSAtMTcuMzkyLDAgLTMxLjQ5MSw1LjU5NyAtMzEuNDkxLDEyLjUgMCw2LjkwMyAxNC4wOTksMTIuNSAzMS40OTEsMTIuNSBDIC0xNC4wOTksMTIuNSAwLDYuOTAzIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2M2YzJhZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzEyIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzE0IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA0LjE1MDQsNjcxLjA1MTkxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAwLDAgLTExLjI0NywtOC4wNzggLTE4LjcxNywyLjc5MyAwLDAgLTEyLjQ1MiwtMy4xMDYgLTE1LjI1Niw4LjM4NSAwLDAgLTE0Ljk0NCwxLjI0MSAtMTQuMzIyLDEyLjczNSAwLDAgLTE4LjA1NSw4LjY5NSAtNi4yMjQsMjUuMTU4IDAsMCAtMTEuNTIsMTAuMjUgMS41NTQsMjEuNzQxIDAsMCAtOS45NjEsMTQuOTA3IDcuNDczLDE5LjI1NiAwLDAgMS41NTgsMTcuNzA2IDE4Ljk5MSwxMy42NjggMCwwIDQuNjY4LDE0LjkwOSAyMS40ODEsOS4zMTggMCwwIDE1LjEwMywxMS4yMDQgMjMuNjYxLC0zLjcyOCAwLDAgMTYuNTAzLDIuMTc0IDE5LjYxMywtMTEuNDkyIDAsMCAxNS44NzgsLTIuMTc1IDE0LjMyMSwtMTguMDE1IDAsMCAxMi4xOSwtMTEuMTgxIDQuNDA0LC0yNC41MzUgMCwwIDcuNzYzLC0yMi4yNDIgLTkuMDc1LC0yNC4yMjYgMCwwIDAuNTM4LC05Ljg1IC05LjQyNywtMTQuMTk5IDAsMCAtMS43ODIsLTExLjg5MiAtMTIuMzY0LC0xMC4wMjYgMCwwIC04LjA5NiwtOS4wMSAtMTQuMDEsLTQuMDQgTCAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2I0Y2IzNDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzE2IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzE4IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU2LjcyNTEsNzUwLjg3MTMxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAxLjU1OCwxNS44MzkgLTE0LjMyLDE4LjAxNSAtMTQuMzIsMTguMDE1IDcuOTA0LC0zNC4xNTIgLTExLjQwNSwtNzcuODQ5IC00MS40MDUsLTgxLjc0MSAtMzAsLTMuODkxIC00NS4xNDUsNy44MiAtNDUuMTQ1LDcuODIgLTAuNjIyLC0xMS40OTQgMTQuMzIzLC0xMi43MzYgMTQuMzIzLC0xMi43MzYgMi44MDMsLTExLjQ5MSAxNS4yNTUsLTguMzg0IDE1LjI1NSwtOC4zODQgNy40NzEsLTEwLjg3MSAxOC43MTcsLTIuNzkzIDE4LjcxNywtMi43OTMgbCAxMi4xMDMsMi43OTMgYyA1LjkxNCwtNC45NyAxNC4wMSw0LjA0IDE0LjAxLDQuMDQgMTAuNTgzLC0xLjg2NyAxMi4zNjQsMTAuMDI2IDEyLjM2NCwxMC4wMjYgOS45NjUsNC4zNDkgOS40MjcsMTQuMTk4IDkuNDI3LDE0LjE5OCAxNi44MzgsMS45ODUgOS4wNzYsMjQuMjI3IDkuMDc2LDI0LjIyNyBDIDEyLjE5LC0xMS4xODEgMCwwIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2FhYjcyYztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzIwIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzIyIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LjQzMzYsNjk5LjcwNDMxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAwLDAgMTcuNDMyLC0xLjgwNiAxOC42NzgsLTEwLjgzMyAxLjI0NiwtOS4wMjYgLTEuODY3LC04MS44MzkgLTEuODY3LC04MS44MzkgbCAxOC42NzksMCBjIDAsMCAtOC4wOTYsODEuODQxIC01LjI5Myw4Ny43NzMgMi44LDUuOTMxIDExLjgzLDkuMjg0IDExLjgzLDkuMjg0IDAsMCAtMTAuMjc2LDAuMjU3IC0xMy42OTcsLTIuODM4IEMgMjQuOTA2LC0xLjU0OSAyMC41NDUsLTIuMzIxIDE1Ljg3NSwtMS41NDkgMTEuMjA3LC0wLjc3NCA2LjUzNywwLjUxNSAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM2OTUwMjA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoMzcyNCIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L2c+PC9nPjwvc3ZnPg=="}});