(self.webpackChunklgerinwebprofile=self.webpackChunklgerinwebprofile||[]).push([[564],{1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),u=r(8416),l=r(7071),c=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=l(e,c),i=f(t),d=s.useMemo((function(){if(!r)return null;var e=a({React:s,mdx:p},i),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return s.createElement(d,a({},u))}},2209:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),o=(r.p,r(1597)),u={display:"flex",flexDirection:"row",justifyContent:"center",width:"100%",alignItems:"center",minHeight:"50px",padding:"1% 0 1% 0",backgroundColor:"#9AA2FE"},l={fontSize:12,verticalAlign:"5%",textDecoration:"none",margin:"0 3% 0 3%",color:"#ffffff",fontWeight:"400",textTransform:"uppercase"},c=[{text:"Curriculum",url:"/curriculum"},{text:"Design",url:"/design"},{text:"Playground",url:"/playground"},{text:"Contact",url:"https://www.linkedin.com/in/laurianne-gerin/"}];function i(){return n.createElement("div",{style:u},n.createElement(o.rU,{to:"/",style:l},"Laurianne"),c.map((function(e){return n.createElement(o.rU,{style:l,to:""+e.url},e.text)})))}},8678:function(e,t,r){"use strict";var n=r(7294),o=r(2209),u={display:"flex",flexDirection:"column",height:"100%"},l={height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"5% 10%"};t.Z=function(e){var t=e.children;return n.createElement("div",{style:u},n.createElement(o.Z,null),n.createElement("main",{style:l},t))}},4358:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(8678),u=r(1955);t.default=function(e){var t=e.data;return n.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},n.createElement("p",null,t.mdx.frontmatter.date),n.createElement(u.MDXRenderer,null,t.mdx.body))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function u(t,r,l){return o()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),u=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||u(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-playground-mdx-slug-js-92e3525d8e5e027c132a.js.map