webpackJsonp([1],{122:function(t,I,e){"use strict";function g(t){return t&&t.__esModule?t:{"default":t}}function a(t,I){if(!(t instanceof I))throw new TypeError("Cannot call a class as a function")}function M(t,I){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!I||"object"!=typeof I&&"function"!=typeof I?t:I}function i(t,I){if("function"!=typeof I&&null!==I)throw new TypeError("Super expression must either be null or a function, not "+typeof I);t.prototype=Object.create(I&&I.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(t,I):t.__proto__=I)}Object.defineProperty(I,"__esModule",{value:!0});var l=function(){function t(t,I){for(var e=0;e<I.length;e++){var g=I[e];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(t,g.key,g)}}return function(I,e,g){return e&&t(I.prototype,e),g&&t(I,g),I}}(),o=e(3),C=g(o),A=e(20),n=e(257),c=g(n),u=e(47),s=g(u),j=function(t){function I(){return a(this,I),M(this,Object.getPrototypeOf(I).apply(this,arguments))}return i(I,t),l(I,[{key:"render",value:function(){return C["default"].createElement("div",{className:c["default"].root},C["default"].createElement("div",null,C["default"].createElement(A.Link,{to:"/"},C["default"].createElement("img",{className:c["default"].logo,src:s["default"]}),C["default"].createElement("span",{className:c["default"].title},"SGCA - ")),C["default"].createElement("span",{className:c["default"].subtitle},this.props.subtitle)))}}]),I}(C["default"].Component);I["default"]=j},130:function(t,I,e){"use strict";function g(t){return t&&t.__esModule?t:{"default":t}}function a(t,I){if(!(t instanceof I))throw new TypeError("Cannot call a class as a function")}function M(t,I){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!I||"object"!=typeof I&&"function"!=typeof I?t:I}function i(t,I){if("function"!=typeof I&&null!==I)throw new TypeError("Super expression must either be null or a function, not "+typeof I);t.prototype=Object.create(I&&I.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(t,I):t.__proto__=I)}var l=function(){function t(t,I){for(var e=0;e<I.length;e++){var g=I[e];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(t,g.key,g)}}return function(I,e,g){return e&&t(I.prototype,e),g&&t(I,g),I}}(),o=e(3),C=g(o),A=(e(20),e(122)),n=g(A),c=e(262),u=g(c),s=e(131),j=g(s),N=function(t){function I(t){a(this,I);var e=M(this,Object.getPrototypeOf(I).call(this,t));return e.state={malas:0,buenas:0,seleccionadas:0,totalImagenes:j["default"].length},e}return i(I,t),l(I,[{key:"_calcularSeleccionadas",value:function(){var t=this.state.buenas+this.state.malas;this.setState({seleccionadas:t})}},{key:"_acumular",value:function(t){this.state.seleccionadas<this.state.totalImagenes?t?this.setState({malas:this.state.malas+1},this._calcularSeleccionadas):this.setState({buenas:this.state.buenas+1},this._calcularSeleccionadas):console.log("Total seleccionadas llena")}},{key:"render",value:function(){var t=this;return C["default"].createElement("div",{className:u["default"].root},C["default"].createElement(n["default"],{subtitle:"Selecciona la imagen que más te guste"}),C["default"].createElement("main",null,C["default"].createElement("div",null,"Buenas: ",this.state.buenas),C["default"].createElement("div",null,"Malas: ",this.state.malas),C["default"].createElement("div",null,"Total seleccionadas: ",this.state.seleccionadas),C["default"].createElement("div",null,"Total imagenes: ",this.state.totalImagenes),j["default"].map(function(I){return C["default"].createElement("iron-image",{onClick:t._acumular.bind(t,I.contamina),"data-contamina":u["default"].contamina,"class":u["default"].imagen,src:I.src,title:I.title,preload:!0,fade:!0,sizin:"contain",key:I.title})})))}}]),I}(C["default"].Component);t.exports=N},131:function(t,I,e){"use strict";Object.defineProperty(I,"__esModule",{value:!0}),I["default"]=[{title:"Basura",contamina:!0,src:e(265)},{title:"Arbol",contamina:!1,src:e(266)}]},247:function(t,I,e){I=t.exports=e(12)(),I.push([t.id,".Toolbar_3Dog{height:64px;font-size:24px;border-bottom:1px solid #b6b6b6;box-sizing:border-box}.Toolbar_3Dog .Toolbar_szp8{width:25px}.Toolbar_3Dog .Toolbar_Qy9Q{color:#333;padding:0 16px;letter-spacing:.3em}.Toolbar_3Dog .Toolbar_QpQE,.Toolbar_3Dog .Toolbar_Qy9Q{text-transform:uppercase}.Toolbar_3Dog .Toolbar_QpQE{color:#727272;font-size:20px;font-weight:400}.Toolbar_3Dog a{margin:0!important}.Toolbar_3Dog a,.Toolbar_3Dog div{height:64px;display:flex;margin-left:30px;align-items:center}",""]),I.locals={root:"Toolbar_3Dog",logo:"Toolbar_szp8",title:"Toolbar_Qy9Q",subtitle:"Toolbar_QpQE"}},252:function(t,I,e){I=t.exports=e(12)(),I.push([t.id,".Imagenes_1CcM main{padding:30px;text-align:center;font-family:Roboto}.Imagenes_3CHH{background:#c4eff6;width:220px;height:260px;margin:8px}",""]),I.locals={root:"Imagenes_1CcM",imagen:"Imagenes_3CHH"}},257:function(t,I,e){var g=e(247);"string"==typeof g&&(g=[[t.id,g,""]]),e(14)(g,{}),g.locals&&(t.exports=g.locals)},262:function(t,I,e){var g=e(252);"string"==typeof g&&(g=[[t.id,g,""]]),e(14)(g,{}),g.locals&&(t.exports=g.locals)},265:function(t,I,e){t.exports=e.p+"0d463c7a460ec9ac20a455107eb06833.jpg"},266:function(t,I){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICBpZD0ic3ZnMzMzNiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgd2lkdGg9IjE0OC40ODIzMyIKICAgaGVpZ2h0PSIyMzguMjU0MzUiCiAgIHZpZXdCb3g9IjAgMCAxNDguNDgyMzMgMjM4LjI1NDM1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJ0cmVlMS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTMzNDIiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzMzQwIj48Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMzM1MiI+PHBhdGgKICAgICAgICAgZD0iTSAwLDgwMCA4MDAsODAwIDgwMCwwIDAsMCAwLDgwMCBaIgogICAgICAgICBpZD0icGF0aDMzNTQiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMzUwNiI+PHBhdGgKICAgICAgICAgZD0iTSAwLDgwMCA4MDAsODAwIDgwMCwwIDAsMCAwLDgwMCBaIgogICAgICAgICBpZD0icGF0aDM1MDgiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9jbGlwUGF0aD48L2RlZnM+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcwNSIKICAgICBpZD0ibmFtZWR2aWV3MzMzOCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6em9vbT0iMi4xNDQiCiAgICAgaW5rc2NhcGU6Y3g9IjkyLjY4ODkwNyIKICAgICBpbmtzY2FwZTpjeT0iMTE3LjYwNDg0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzM0NCIgLz48ZwogICAgIGlkPSJnMzM0NCIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlua3NjYXBlOmxhYmVsPSIyNDQ1Mi1OVjRJQVIiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTMwNi4xNzgxOSw5ODUuMTc1OTkpIj48dGV4dAogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMjExLjYwMjUsNzE1LjY5NTMpIgogICAgICAgc3R5bGU9ImZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjI2LjYxMjQ5OTI0cHg7Zm9udC1mYW1pbHk6QmViYXM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCZWJhczt3cml0aW5nLW1vZGU6bHItdGI7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgaWQ9InRleHQzNDk4Ij48dHNwYW4KICAgICAgICAgeD0iMCAxNC4yNTA5OTQgMjAuNjk2NTQxIDM0LjI5NTUyOCA0OS45MTcwNjUgNTcuMjYyMTE1IDY5Ljg3NjQ0MiA4Mi4wNjQ5NjQgOTQuNjc5MjkxIDExNC40NDcwNiAxMjcuMDYxMzggMTQyLjI1NzEzIDE1NS44NTYxMSAxNzAuMTIwNDEgMTc3LjQ2NTQ1IDE4Ny4wMTkzNSAyMDEuMDQ0MTMgMjE2LjA5MDg0IDIyOC43MDUxNyAyNDEuMzE5NDkgMjU1LjU4Mzc5IDI2MC40ODA1IDI3Ni45NTM2MSAyODEuODUwMzEgMjk1LjkzMSAzMDguMTE5NTQgMzI0LjAzMzgxIDMzOS4yMjk1MiAzNTIuODI4NTIgMzY3LjA5MjgzIgogICAgICAgICB5PSIwIgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4zNTAwIj5DSVRZIEVMRU1FTlRTIChUUkVFUyAmYW1wOyBQTEFOVFMpPC90c3Bhbj48L3RleHQ+CjxnCiAgICAgICBpZD0iZzM3MTAiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDMuNTcyMyw2MTAuMDM3MzEpIj48cGF0aAogICAgICAgICBkPSJtIDAsMCBjIDAsLTYuOTAzIC0xNC4wOTksLTEyLjUgLTMxLjQ5MSwtMTIuNSAtMTcuMzkyLDAgLTMxLjQ5MSw1LjU5NyAtMzEuNDkxLDEyLjUgMCw2LjkwMyAxNC4wOTksMTIuNSAzMS40OTEsMTIuNSBDIC0xNC4wOTksMTIuNSAwLDYuOTAzIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2M2YzJhZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzEyIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzE0IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA0LjE1MDQsNjcxLjA1MTkxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAwLDAgLTExLjI0NywtOC4wNzggLTE4LjcxNywyLjc5MyAwLDAgLTEyLjQ1MiwtMy4xMDYgLTE1LjI1Niw4LjM4NSAwLDAgLTE0Ljk0NCwxLjI0MSAtMTQuMzIyLDEyLjczNSAwLDAgLTE4LjA1NSw4LjY5NSAtNi4yMjQsMjUuMTU4IDAsMCAtMTEuNTIsMTAuMjUgMS41NTQsMjEuNzQxIDAsMCAtOS45NjEsMTQuOTA3IDcuNDczLDE5LjI1NiAwLDAgMS41NTgsMTcuNzA2IDE4Ljk5MSwxMy42NjggMCwwIDQuNjY4LDE0LjkwOSAyMS40ODEsOS4zMTggMCwwIDE1LjEwMywxMS4yMDQgMjMuNjYxLC0zLjcyOCAwLDAgMTYuNTAzLDIuMTc0IDE5LjYxMywtMTEuNDkyIDAsMCAxNS44NzgsLTIuMTc1IDE0LjMyMSwtMTguMDE1IDAsMCAxMi4xOSwtMTEuMTgxIDQuNDA0LC0yNC41MzUgMCwwIDcuNzYzLC0yMi4yNDIgLTkuMDc1LC0yNC4yMjYgMCwwIDAuNTM4LC05Ljg1IC05LjQyNywtMTQuMTk5IDAsMCAtMS43ODIsLTExLjg5MiAtMTIuMzY0LC0xMC4wMjYgMCwwIC04LjA5NiwtOS4wMSAtMTQuMDEsLTQuMDQgTCAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2I0Y2IzNDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzE2IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzE4IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU2LjcyNTEsNzUwLjg3MTMxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAxLjU1OCwxNS44MzkgLTE0LjMyLDE4LjAxNSAtMTQuMzIsMTguMDE1IDcuOTA0LC0zNC4xNTIgLTExLjQwNSwtNzcuODQ5IC00MS40MDUsLTgxLjc0MSAtMzAsLTMuODkxIC00NS4xNDUsNy44MiAtNDUuMTQ1LDcuODIgLTAuNjIyLC0xMS40OTQgMTQuMzIzLC0xMi43MzYgMTQuMzIzLC0xMi43MzYgMi44MDMsLTExLjQ5MSAxNS4yNTUsLTguMzg0IDE1LjI1NSwtOC4zODQgNy40NzEsLTEwLjg3MSAxOC43MTcsLTIuNzkzIDE4LjcxNywtMi43OTMgbCAxMi4xMDMsMi43OTMgYyA1LjkxNCwtNC45NyAxNC4wMSw0LjA0IDE0LjAxLDQuMDQgMTAuNTgzLC0xLjg2NyAxMi4zNjQsMTAuMDI2IDEyLjM2NCwxMC4wMjYgOS45NjUsNC4zNDkgOS40MjcsMTQuMTk4IDkuNDI3LDE0LjE5OCAxNi44MzgsMS45ODUgOS4wNzYsMjQuMjI3IDkuMDc2LDI0LjIyNyBDIDEyLjE5LC0xMS4xODEgMCwwIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2FhYjcyYztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgzNzIwIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgICAgaWQ9ImczNzIyIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LjQzMzYsNjk5LjcwNDMxKSI+PHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAwLDAgMTcuNDMyLC0xLjgwNiAxOC42NzgsLTEwLjgzMyAxLjI0NiwtOS4wMjYgLTEuODY3LC04MS44MzkgLTEuODY3LC04MS44MzkgbCAxOC42NzksMCBjIDAsMCAtOC4wOTYsODEuODQxIC01LjI5Myw4Ny43NzMgMi44LDUuOTMxIDExLjgzLDkuMjg0IDExLjgzLDkuMjg0IDAsMCAtMTAuMjc2LDAuMjU3IC0xMy42OTcsLTIuODM4IEMgMjQuOTA2LC0xLjU0OSAyMC41NDUsLTIuMzIxIDE1Ljg3NSwtMS41NDkgMTEuMjA3LC0wLjc3NCA2LjUzNywwLjUxNSAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM2OTUwMjA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoMzcyNCIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L2c+PC9nPjwvc3ZnPg=="}});