(this["webpackJsonpcanvas-whiteboard"]=this["webpackJsonpcanvas-whiteboard"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=(n(13),n(14),n(6)),i=n(3),s=n(4),u=n(5),d=n(7),h={DEFAULT_LINECAP:"round",DEFAULT_STROKE_COLOR:"#12b886",DEFAULT_LINE_WIDTH:"5",DEFAULT_TOOL:"pen",TOOLS:{PEN:"pen",ERASER:"eraser",HIGHLIGHTER:"highlighter"},COLOR_INPUT_ID:"input-color-picker",WIDTH_PANEL_SIZES:[{radius:"5%",width:"1"},{radius:"10%",width:"2"},{radius:"15%",width:"3"},{radius:"20%",width:"4"},{radius:"25%",width:"5"},{radius:"30%",width:"6"},{radius:"35%",width:"7"},{radius:"40%",width:"8"}],DEFAULT_COLORS:["#000000","#343a40","#495057","#c92a2a","#a61e4d","#862e9c","#5f3dc4","#364fc7","#2b8a3e","#d9480f"],DEFAULT_HIGHTLIGHTER_COLORS:["#000000","#343a40","#495057","#c92a2a","#a61e4d","#862e9c","#5f3dc4","#364fc7","#2b8a3e","#d9480f"]};n(15);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createElement("title",null,"Draw Copy"),v=r.a.createElement("desc",null,"Created with Sketch."),E=r.a.createElement("defs",null),g=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("g",{id:"Draw-Copy",stroke:"#505050",strokeWidth:1.7},r.a.createElement("path",{d:"M12.0197319,31.4105292 L12.7295275,27.3832002 C12.7473398,27.2821344 12.7958192,27.1889973 12.8683849,27.1164316 L27.2525835,12.732233 C28.2288942,11.7559223 29.8118066,11.7559223 30.7881174,12.732233 L32.2023309,14.1464466 C33.1786417,15.1227573 33.1786417,16.7056698 32.2023309,17.6819805 L17.8180472,32.0662642 C17.7455344,32.1387771 17.6524787,32.18724 17.5514944,32.2050836 L13.5262014,32.9163388 C12.8191836,33.0412664 12.1447585,32.569389 12.0198309,31.8623711 C11.993423,31.7129176 11.9933895,31.5599943 12.0197319,31.4105292 Z",id:"icon_draw-copy"}))),y=function(e){var t=e.svgRef,n=e.title,a=p(e,["svgRef","title"]);return r.a.createElement("svg",f({width:"44px",height:"44px",viewBox:"0 0 44 44",ref:t},a),void 0===n?m:n?r.a.createElement("title",null,n):null,v,E,g)},w=r.a.forwardRef((function(e,t){return r.a.createElement(y,f({svgRef:t},e))})),O=(n.p,n(16),function(e){var t=function(t){t.stopPropagation();var n=t.currentTarget.dataset.size;e.sendBrushStyle({width:n})};return r.a.createElement("div",{className:"popover width-panel"},r.a.createElement("div",{className:"width-panel-container"},r.a.createElement("div",{className:"width-panel-content"},h.WIDTH_PANEL_SIZES.map((function(n,a){return r.a.createElement("div",{className:"width-panel-box ".concat(parseInt(e.width)===parseInt(n.width)?"toolbar-content-active":""),key:a,onClick:t,"data-size":n.width},r.a.createElement("svg",{viewBox:"0 0 44 44",className:parseInt(e.width)===parseInt(n.width)?"img-acitve":""},r.a.createElement("circle",{cx:"50%",cy:"50%",r:n.radius})))})))))}),b=(n(17),function(e){var t=function(t){t.stopPropagation();var n="";t.target.value&&t.target.id===h.COLOR_INPUT_ID?n=t.target.value:t.currentTarget.dataset.color&&(n=t.currentTarget.dataset.color),n=function(e){return e&&-1===e.indexOf("#")?"#"+e:e}(n),e.sendBrushStyle({color:n})},n=function(e){return e&&-1!==e.indexOf("#")?e.slice(1):e}(e.color);return r.a.createElement("div",{className:"color-picker-wrapper"},r.a.createElement("div",{className:"color-picker-control-container"},r.a.createElement("button",{className:"color-picker-label-swatch",style:{backgroundColor:e.color||"12b886"}}),r.a.createElement("label",{className:"color-input-container"},r.a.createElement("div",{className:"color-picker-hash"},"#"),r.a.createElement("input",{onChange:t,className:"color-picker-input",id:"input-color-picker",value:n}))),r.a.createElement("div",{className:"popover"},r.a.createElement("div",{className:"color-picker color-picker-type-elementStroke"},r.a.createElement("div",{className:"color-picker-triangle color-picker-triangle-shadow"}),r.a.createElement("div",{className:"color-picker-content"},h.DEFAULT_COLORS.map((function(e,n){return r.a.createElement("button",{className:"color-picker-swatch",style:{backgroundColor:e},onClick:t,key:n,"data-color":e},r.a.createElement("span",{className:"color-picker-keybinding"},n+1))}))))))}),L=(n(18),function(e){var t=e.selectedTool===h.TOOLS.PEN&&!e.hideTool;return r.a.createElement("div",null,r.a.createElement("div",{className:t?"toolbar-content-active":""},r.a.createElement(w,{className:t?"img-acitve":"",onClick:e.changeTool,"data-tool":h.TOOLS.PEN})),t&&r.a.createElement("div",{className:"brush-style-container"},r.a.createElement(b,{sendBrushStyle:e.changeBrushStyle,color:e.brushStyle.color}),r.a.createElement(O,{sendBrushStyle:e.changeBrushStyle,width:e.brushStyle.width})))});function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=r.a.createElement("title",null,"eraser copy"),R=r.a.createElement("desc",null,"Created with Sketch."),C=r.a.createElement("defs",null),N=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("g",{id:"eraser-copy",stroke:"#505050",strokeWidth:1.7},r.a.createElement("path",{d:"M14,30.9644661 L20.3431458,30.9644661 C20.8735787,30.9644661 21.3822866,30.7537524 21.7573593,30.3786797 L32.5502525,19.5857864 C33.3313011,18.8047379 33.3313011,17.5384079 32.5502525,16.7573593 L27.3786797,11.5857864 C26.5976311,10.8047379 25.3313011,10.8047379 24.5502525,11.5857864 L10.5857864,25.5502525 C9.80473785,26.3313011 9.80473785,27.5976311 10.5857864,28.3786797 L12.5857864,30.3786797 C12.9608592,30.7537524 13.469567,30.9644661 14,30.9644661 Z M28.4644661,23.6715729 L20.4644661,15.6715729",id:"icon_eraser-copy-3"}))),x=function(e){var t=e.svgRef,n=e.title,a=S(e,["svgRef","title"]);return r.a.createElement("svg",T({width:"44px",height:"44px",viewBox:"0 0 44 44",ref:t},a),void 0===n?k:n?r.a.createElement("title",null,n):null,R,C,N)},I=r.a.forwardRef((function(e,t){return r.a.createElement(x,T({svgRef:t},e))})),P=(n.p,n(19),function(e){var t=e.selectedTool===h.TOOLS.ERASER&&!e.hideTool;return r.a.createElement("div",{className:"eraser-wrapper"},r.a.createElement("div",{className:t?"toolbar-content-active":""},r.a.createElement(I,{onClick:e.changeTool,"data-tool":h.TOOLS.ERASER,className:t?"img-acitve":""})),t&&r.a.createElement("div",{className:"brush-style-container"},r.a.createElement(O,{sendBrushStyle:e.changeBrushStyle,selectedTool:"eraser",width:e.brushStyle.width})))});function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("title",null,"highlighter copy"),H=r.a.createElement("desc",null,"Created with Sketch."),M=r.a.createElement("defs",null),A=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("g",{id:"highlighter-copy",stroke:"#505050",strokeWidth:1.7},r.a.createElement("path",{d:"M15.2902093,32.1671854 L16.3025708,31.2868708 C16.3935788,31.2077334 16.4981517,31.1457113 16.6112387,31.1038003 L20.7355442,29.5752962 C20.8030807,29.5502665 20.8644124,29.5109413 20.9153421,29.4600116 L33.1431206,17.232233 C34.1194313,16.2559223 34.1194313,14.6730099 33.1431206,13.6966991 L30.1786545,10.732233 C29.2023438,9.75592232 27.6194313,9.75592232 26.6431206,10.732233 L14.421508,22.9538457 C14.3666205,23.0087331 14.3252661,23.075646 14.3007197,23.1492852 L12.8968161,27.360996 C12.8579682,27.4775397 12.7979786,27.5859279 12.7198518,27.6807319 L9.26849351,31.8688301 C9.16312359,31.9966927 9.18135749,32.185765 9.30922007,32.2911349 C9.34941057,32.3242554 9.39753084,32.3463428 9.44884711,32.3552244 L12.6385601,32.9072863 C13.5887584,33.0717426 14.5625245,32.799955 15.2902093,32.1671854 Z M16.440209,30.7671915 L12.940209,27.2671915 M20.3813087,28.279949 L14.8813087,22.779949",id:"icon_highlighter-copy"}))),B=function(e){var t=e.svgRef,n=e.title,a=j(e,["svgRef","title"]);return r.a.createElement("svg",D({width:"44px",height:"44px",viewBox:"0 0 44 44",ref:t},a),void 0===n?_:n?r.a.createElement("title",null,n):null,H,M,A)},U=r.a.forwardRef((function(e,t){return r.a.createElement(B,D({svgRef:t},e))})),W=(n.p,function(e){var t=e.selectedTool===h.TOOLS.HIGHLIGHTER&&!e.hideTool;return r.a.createElement("div",null,r.a.createElement("div",{className:t?"toolbar-content-active":""},r.a.createElement(U,{className:t?"img-acitve":"",onClick:e.changeTool,"data-tool":h.TOOLS.HIGHLIGHTER})),t&&r.a.createElement("div",{className:"brush-style-container",style:{height:131}},r.a.createElement(b,{sendBrushStyle:e.changeBrushStyle,color:e.brushStyle.color})))});var F=function(e){return r.a.createElement("div",{className:"toolbar"},r.a.createElement(L,e),r.a.createElement(W,e),r.a.createElement(P,e))},G=(n(20),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).initialiseCanvasDefaults=function(){var e=r.canvasRef.current;e.width=2*window.innerWidth,e.height=2*window.innerWidth,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px");var t=r.canvasRef.current.getContext("2d");t.scale(2,2),t.lineCap=h.DEFAULT_LINECAP,t.strokeStyle=r.state.brushStyle.color,t.lineWidth=r.state.brushStyle.width,r.contextRef.current=t},r.unloadHandler=function(e){return e.preventDefault(),e.returnValue="Are you sure you want to close?"},r.getMousePos=function(e){var t=r.canvasRef.current.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},r.handlMouseUp=function(e){r.state.isDrawing&&(e.stopPropagation(),r.contextRef.current.closePath(),r.contextRef.current.save(),r.setState({isDrawing:!1}))},r.handleMouseDown=function(e){e.stopPropagation();var t=r.getMousePos(e),n=t.x,a=t.y;r.contextRef.current.strokeStyle=r.state.brushStyle.color,r.contextRef.current.lineWidth=r.state.brushStyle.width,r.contextRef.current.beginPath(),r.contextRef.current.moveTo(n,a),r.setState({isDrawing:!0})},r.handleMouseMove=function(e){if(r.state.isDrawing){e.stopPropagation();var t=r.getMousePos(e),n=t.x,a=t.y;if(r.state.selectedTool===h.TOOLS.PEN||r.state.selectedTool===h.TOOLS.HIGHLIGHTER)r.contextRef.current.lineTo(n,a),r.contextRef.current.stroke();else if(r.state.selectedTool===h.TOOLS.ERASER){var o=r.state.brushStyle.width;r.contextRef.current.clearRect(n,a,4*o,4*o)}}},r.handleBrushChange=function(e){var t=r.state.brushStyle;r.setState({brushStyle:Object(c.a)({},t,{},e)})},r.handleToolChange=function(e){var t=e.currentTarget.dataset.tool,n=r.state.selectedTool;r.setState({selectedTool:t,hideTool:n===t&&!r.state.hideTool})},r.canvasRef=Object(a.createRef)(null),r.contextRef=Object(a.createRef)(null),r.state={isDrawing:!1,brushStyle:{color:h.DEFAULT_STROKE_COLOR,width:h.DEFAULT_LINE_WIDTH},selectedTool:h.DEFAULT_TOOL,hideTool:!1},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.initialiseCanvasDefaults(),window.addEventListener("beforeunload",this.unloadHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.unloadHandler)}},{key:"render",value:function(){return r.a.createElement("div",{className:"broad-wrapper"},r.a.createElement(F,{className:"toolbar",changeBrushStyle:this.handleBrushChange,selectedTool:this.state.selectedTool,hideTool:this.state.hideTool,changeTool:this.handleToolChange,brushStyle:this.state.brushStyle}),r.a.createElement("canvas",{ref:this.canvasRef,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handlMouseUp}))}}]),n}(a.Component));var Z=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(G,{className:"board"}))};l.a.render(r.a.createElement(Z,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d6e674d5.chunk.js.map