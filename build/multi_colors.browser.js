!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("react"),require("react-date-object")):"function"==typeof define&&define.amd?define(["react","react-date-object"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).MultiColors=r(e.React,e.DateObject)}(this,(function(e,r){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e),n=t(r);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,n,a=[],l=!0,d=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(a.push(o.value),!r||a.length!==r);l=!0);}catch(e){d=!0,n=e}finally{try{l||null==t.return||t.return()}finally{if(d)throw n}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function i(e,r){var t=[];return["left","right"].includes(e)?(r.left&&t.push("rmdp-border-left"),r.right&&t.push("rmdp-border-right")):(r.top&&t.push("rmdp-border-top"),r.bottom&&t.push("rmdp-border-bottom")),t.join(" ")}var s=["state","setState","position","registerListener","calendarProps","datePickerProps","handleChange","nodes","Calendar","DatePicker","handlePropsChange","handleFocusedDate"];!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===t&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".rmdp-colors{display:flex;justify-content:space-around;padding:8px 0}.rmdp-colors.left,.rmdp-colors.right{flex-direction:column;padding:0 8px}.rmdp-color{border-radius:50%;cursor:pointer;height:20px;width:20px}.left .rmdp-color,.right .rmdp-color{margin:auto}.rmdp-blue{background-color:#0074d9}.rmdp-red{background-color:#ea0034}.rmdp-green{background-color:#009688}.rmdp-yellow{background-color:#fad817}.rmdp-color.active{box-shadow:0 0 4px 1px #8798ad}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-blue:hover{background-color:#7ea6f0}.rmdp-day:not(.rmdp-deactive) .highlight-blue{color:#4ca6f5}.rmdp-day.rmdp-deactive .highlight-blue{color:#7b98ce}.rmdp-day.rmdp-selected .highlight-blue{background-color:#0074d9;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-blue{background-color:#aec0e0;color:#fff}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-yellow:hover{background-color:#ffeb3b}.rmdp-day:not(.rmdp-deactive) .highlight-yellow{color:#f7da37}.rmdp-day.rmdp-deactive .highlight-yellow{color:#c0b025}.rmdp-day.rmdp-selected .highlight-yellow{background-color:#fad817;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-yellow{background-color:#dfdd61;color:#fff}.hover-red:hover{background-color:#ff6687!important}.hover-green:hover{background-color:#4db6ac!important}.hover-yellow:hover{background-color:#ffeb3b!important}");var u=["state","position","colors","defaultColor","nodes","calendarProps","registerListener","className","handlePropsChange"];function f(e,r,t,o){return function(a){var l,d=a.date;if(!r){if(e&&!Array.isArray(e)&&d.format()===e.format()&&(l=o),Array.isArray(e)){var c=new n.default(d).setLocale(void 0).format("YYYYMMDD");t.current.stringValues.includes(c)&&(l=t.current.colors[c])}return{className:l?"highlight highlight-".concat(l):"hover-".concat(o)}}}}return function(r){var t=r.state,c=r.position,p=r.colors,h=void 0===p?["blue","red","green","yellow"]:p,g=r.defaultColor,m=void 0===g?h[0]:g,y=r.nodes,b=r.calendarProps,v=r.registerListener,C=r.className,k=void 0===C?"":C,w=r.handlePropsChange,D=l(r,u),P=d(e.useState(b.activeColor||m),2),j=P[0],x=P[1],A=["rmdp-colors",c,i(c,y)],O=e.useRef({});return O.current.handlePropsChange=w,e.useEffect((function(){if(Array.isArray(t.selectedDate)){for(var e=[],r={},o=0;o<t.selectedDate.length;o++){var a=t.selectedDate[o],l=new n.default(a).setLocale(void 0).format("YYYYMMDD"),d=a.color||j;a.color||(t.selectedDate[o].color=d),r[l]=d,e.push(l)}var c=JSON.stringify(e);if(c===O.current.stringValues)return;O.current.stringValues=c,O.current.colors=r}O.current.handlePropsChange({mapDays:f(t.selectedDate,t.range,O,j),value:t.selectedDate,activeColor:j})}),[t.selectedDate,t.range,j]),v("change",(function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r].color||(e[r].color=j);else e&&(e.color=j)})),o.default.createElement("div",a({className:"".concat(A.join(" ")," ").concat(k)},function(e){return e.state,e.setState,e.position,e.registerListener,e.calendarProps,e.datePickerProps,e.handleChange,e.nodes,e.Calendar,e.DatePicker,e.handlePropsChange,e.handleFocusedDate,l(e,s)}(D)),h.map((function(e,r){return o.default.createElement("div",{key:r,className:"rmdp-color rmdp-".concat(e," ").concat(j===e?"active":""),onClick:function(){return function(e){x(e);var r=t.selectedDate,o=t.range;r&&!Array.isArray(r)&&(r.color=e);var n={activeColor:e,value:r,mapDays:f(r,o,O,e)};w(n)}(e)}})})))}}));
