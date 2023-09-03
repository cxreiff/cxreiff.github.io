function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=t.parcelRequire3b68;a.register("cqg0o",function(n,t){e(n.exports,"SyntaxHighlighter",()=>p),e(n.exports,"styleLight",()=>d),e(n.exports,"styleDark",()=>f);var r=a("5csmH"),o=a("4ygbT"),l=a("iyaae"),i=a("jevdb"),s=a("hqN5V"),c=a("cLj6B"),u=a("kzgvn"),g=a("1q0qQ");(0,r.default).registerLanguage("tsx",i.default),(0,r.default).registerLanguage("json",s.default),(0,r.default).registerLanguage("rust",c.default),(0,r.default).registerLanguage("glsl",u.default),(0,r.default).registerLanguage("markdown",g.default);let p=r.default,d=l.default,f=o.default}),a.register("5csmH",function(t,r){e(t.exports,"default",()=>s);var o=a("1t4Bk"),l=a("czGJL"),i=(0,o.default)(/*@__PURE__*/n(l),{});i.registerLanguage=function(e,t){return /*@__PURE__*/n(l).register(t)},i.alias=function(e,t){return /*@__PURE__*/n(l).alias(e,t)};var s=i}),a.register("1t4Bk",function(t,r){e(t.exports,"default",()=>w);var o=a("1urzK"),l=a("k8lWH"),i=a("e252Q"),s=a("3TwHq"),c=a("6Fx5h"),u=a("f32fQ"),g=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){/*@__PURE__*/n(i)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}var f=/\n/g;function m(e){var n,t,a,r,o=e.codeString,l=e.codeStyle,i=e.containerStyle,c=void 0===i?{float:"left",paddingRight:"10px"}:i,u=e.numberStyle,g=e.startingLineNumber;return/*#__PURE__*/(0,s.default).createElement("code",{style:Object.assign({},l,c)},(t=(n={lines:o.replace(/\n$/,"").split("\n"),style:void 0===u?{}:u,startingLineNumber:g}).lines,a=n.startingLineNumber,r=n.style,t.map(function(e,n){var t=n+a;return/*#__PURE__*/(0,s.default).createElement("span",{key:"line-".concat(n),className:"react-syntax-highlighter-line-number",style:"function"==typeof r?r(t):r},"".concat(t,"\n"))})))}function h(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function b(e,n,t){// minimally necessary styling for line numbers
var a={display:"inline-block",minWidth:"".concat(t.toString().length,".25em"),paddingRight:"1em",textAlign:"right",userSelect:"none"},r="function"==typeof e?e(n):e;// prep custom styling
return d(d({},a),r)}function y(e){var n=e.children,t=e.lineNumber,a=e.lineNumberStyle,r=e.largestLineNumber,o=e.showInlineLineNumbers,l=e.lineProps,i=void 0===l?{}:l,s=e.className,c=e.showLineNumbers,u=e.wrapLongLines,g="function"==typeof i?i(t):i;if(g.className=void 0===s?[]:s,t&&o){var p=b(a,t,r);n.unshift(h(t,p))}return u&c&&(g.style=d(d({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:n}}function x(e){var n=e.rows,t=e.stylesheet,a=e.useInlineStyles;return n.map(function(e,n){return(0,c.default)({node:e,stylesheet:t,useInlineStyles:a,key:"code-segement".concat(n)})})}// only highlight.js has the highlightAuto method
function v(e){return e&&void 0!==e.highlightAuto}function w(e,t){return function(a){var r=a.language,i=a.children,c=a.style,p=void 0===c?t:c,w=a.customStyle,k=void 0===w?{}:w,S=a.codeTagProps,A=void 0===S?{className:r?"language-".concat(r):void 0,style:d(d({},p['code[class*="language-"]']),p['code[class*="language-'.concat(r,'"]')])}:S,F=a.useInlineStyles,_=void 0===F||F,N=a.showLineNumbers,j=void 0!==N&&N,C=a.showInlineLineNumbers,O=void 0===C||C,L=a.startingLineNumber,E=void 0===L?1:L,M=a.lineNumberContainerStyle,P=a.lineNumberStyle,z=void 0===P?{}:P,$=a.wrapLines,D=a.wrapLongLines,T=void 0!==D&&D,R=a.lineProps,B=void 0===R?{}:R,I=a.renderer,H=a.PreTag,q=void 0===H?"pre":H,W=a.CodeTag,U=void 0===W?"code":W,V=a.code,Z=void 0===V?(Array.isArray(i)?i[0]:i)||"":V,K=a.astGenerator,Q=/*@__PURE__*/n(o)(a,g);K=K||e;var G=j?/*#__PURE__*/(0,s.default).createElement(m,{containerStyle:M,codeStyle:A.style||{},numberStyle:z,startingLineNumber:E,codeString:Z}):null,Y=p.hljs||p['pre[class*="language-"]']||{backgroundColor:"#fff"},J=v(K)?"hljs":"prismjs",X=_?Object.assign({},Q,{style:Object.assign({},Y,k)}):Object.assign({},Q,{className:Q.className?"".concat(J," ").concat(Q.className):J,style:Object.assign({},k)});if(T?A.style=d(d({},A.style),{},{whiteSpace:"pre-wrap"}):A.style=d(d({},A.style),{},{whiteSpace:"pre"}),!K)return/*#__PURE__*/(0,s.default).createElement(q,X,G,/*#__PURE__*/(0,s.default).createElement(U,A,Z));(void 0===$&&I||T)&&($=!0),I=I||x;var ee=[{type:"text",value:Z}],en=function(e){var n=e.astGenerator,t=e.language,a=e.code,r=e.defaultCodeValue;// figure out whether we're using lowlight/highlight or refractor/prism
// then attempt highlighting accordingly
// lowlight/highlight?
if(v(n)){var o=(0,u.default)(n,t);return"text"===t?{value:r,language:"text"}:o?n.highlight(t,a):n.highlightAuto(a)}// must be refractor/prism, then
try{return t&&"text"!==t?{value:n.highlight(a,t)}:{value:r}}catch(e){return{value:r}}}({astGenerator:K,language:r,code:Z,defaultCodeValue:ee});null===en.language&&(en.value=ee);// determine largest line number so that we can force minWidth on all linenumber elements
var et=en.value.length+E,ea=function(e,t,a,r,o,i,s,c,u){var g,p=function e(t){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=0;o<t.length;o++){var i=t[o];if("text"===i.type)r.push(y({children:[i],className:/*@__PURE__*/n(l)(new Set(a))}));else if(i.children){var s=a.concat(i.properties.className);e(i.children,s).forEach(function(e){return r.push(e)})}}return r}(e.value),d=[],m=-1,x=0;function v(e,n){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t||l.length>0?function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return y({children:e,lineNumber:n,lineNumberStyle:c,largestLineNumber:s,showInlineLineNumbers:o,lineProps:a,className:t,showLineNumbers:r,wrapLongLines:u})}(e,n,l):function(e,n){if(r&&n&&o){var t=b(c,n,s);e.unshift(h(n,t))}return e}(e,n)}for(;x<p.length;)!function(){var e=p[x],n=e.children[0].value;if(n.match(f)){var t=n.split("\n");t.forEach(function(n,a){var o=r&&d.length+i,l={type:"text",value:"".concat(n,"\n")};if(0===a){var s=v(p.slice(m+1,x).concat(y({children:[l],className:e.properties.className})),o);d.push(s);// if it's the last line
}else if(a===t.length-1){var c=p[x+1]&&p[x+1].children&&p[x+1].children[0],u={type:"text",value:"".concat(n)};if(c){var g=y({children:[u],className:e.properties.className});p.splice(x+1,0,g)}else{var f=v([u],o,e.properties.className);d.push(f)}// if it's neither the first nor the last line
}else{var h=v([l],o,e.properties.className);d.push(h)}}),m=x}x++}();if(m!==p.length-1){var w=p.slice(m+1,p.length);if(w&&w.length){var k=v(w,r&&d.length+i);d.push(k)}}return t?d:(g=[]).concat.apply(g,d)}(en,$,B,j,O,E,et,z,T);return/*#__PURE__*/(0,s.default).createElement(q,X,/*#__PURE__*/(0,s.default).createElement(U,A,!O&&G,I({rows:ea,stylesheet:p,useInlineStyles:_})))}}}),a.register("1urzK",function(e,n){var t=a("dh0c8");e.exports=function(e,n){if(null==e)return{};var a,r,o=t(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("dh0c8",function(e,n){e.exports=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("k8lWH",function(e,n){var t=a("lDRCB"),r=a("7IEZv"),o=a("i72pJ"),l=a("gg38f");e.exports=function(e){return t(e)||r(e)||o(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("lDRCB",function(e,n){var t=a("lHQRq");e.exports=function(e){if(Array.isArray(e))return t(e)},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("lHQRq",function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("7IEZv",function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("i72pJ",function(e,n){var t=a("lHQRq");e.exports=function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("gg38f",function(e,n){e.exports=function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("e252Q",function(e,n){var t=a("j02F5");e.exports=function(e,n,a){return(n=t(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("j02F5",function(e,n){var t=a("4xDnP").default,r=a("9Pf1o");e.exports=function(e){var n=r(e,"string");return"symbol"===t(n)?n:String(n)},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("4xDnP",function(e,n){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("9Pf1o",function(e,n){var t=a("4xDnP").default;e.exports=function(e,n){if("object"!==t(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,n||"default");if("object"!==t(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("6Fx5h",function(t,r){e(t.exports,"default",()=>function e(t){var a=t.node,r=t.stylesheet,l=t.style,s=t.useInlineStyles,g=t.key,p=a.properties,d=a.type,f=a.tagName,m=a.value;if("text"===d)return m;if(f){var h,b,y=(h=0,function(n){return h+=1,n.map(function(n,t){return e({node:n,stylesheet:r,useInlineStyles:s,key:"code-segment-".concat(h,"-").concat(t)})})});if(s){var x=Object.keys(r).reduce(function(e,n){return n.split(".").forEach(function(n){e.includes(n)||e.push(n)}),e},[]),v=p.className&&p.className.includes("token")?["token"]:[],w=p.className&&v.concat(p.className.filter(function(e){return!x.includes(e)}));// For compatibility with older versions of react-syntax-highlighter
    b=c(c({},p),{},{className:w.join(" ")||void 0,style:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return(function(e){if(0===e.length||1===e.length)return e;var n,t=e.join(".");return u[t]||(u[t]=0===(n=e.length)||1===n?e:2===n?[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])]:3===n?[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])]:n>=4?[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]:void 0),u[t]})(e.filter(function(e){return"token"!==e})).reduce(function(e,n){return c(c({},e),t[n])},n)}(p.className,Object.assign({},p.style,void 0===l?{}:l),r)})}else b=c(c({},p),{},{className:p.className.join(" ")});var k=y(a.children);return/*#__PURE__*/(0,i.default).createElement(f,/*@__PURE__*/n(o)({key:g},b),k)}});var o=a("ixt0Q"),l=a("e252Q"),i=a("3TwHq");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach(function(t){/*@__PURE__*/n(l)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}var u={}}),a.register("ixt0Q",function(e,n){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}),a.register("f32fQ",function(n,t){e(n.exports,"default",()=>a);var a=function(e,n){return -1!==e.listLanguages().indexOf(n)}}),a.register("czGJL",function(e,n){/* global window, self */// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var r,o,l="object"==typeof globalThis?globalThis:"object"==typeof self?self:"object"==typeof window?window:"object"==typeof t?t:{},i=(o=(r="Prism"in l)?l.Prism:void 0,function(){r?l.Prism=o:delete l.Prism,r=void 0,o=void 0});l.Prism={manual:!0,disableWorkerMessageHandler:!0};var s=a("90eyP"),c=a("j2kXY"),u=a("gequz"),g=a("drNtq"),p=a("ijd9W"),d=a("6miIV"),f=a("38hzA");i();var m={}.hasOwnProperty;// Inherit.
function h(){}h.prototype=u;// Construct.
var b=new h;function y(e){if("function"!=typeof e||!e.displayName)throw Error("Expected `function` for `grammar`, got `"+e+"`");void 0===b.languages[e.displayName]&&e(b)}// Expose.
e.exports=b,// Create.
b.highlight=function(e,n){var t,a=u.highlight;if("string"!=typeof e)throw Error("Expected `string` for `value`, got `"+e+"`");// `name` is a grammar object.
if("Object"===b.util.type(n))t=n,n=null;else{if("string"!=typeof n)throw Error("Expected `string` for `name`, got `"+n+"`");if(m.call(b.languages,n))t=b.languages[n];else throw Error("Unknown language: `"+n+"` is not registered")}return a.call(this,e,t,n)},b.register=y,b.alias=function(e,n){var t,a,r,o,l=b.languages,i=e;for(t in n&&((i={})[e]=n),i)for(r=(a="string"==typeof(a=i[t])?[a]:a).length,o=-1;++o<r;)l[a[o]]=l[t]},b.registered=function(e){if("string"!=typeof e)throw Error("Expected `string` for `language`, got `"+e+"`");return m.call(b.languages,e)},b.listLanguages=function(){var e,n=b.languages,t=[];for(e in n)m.call(n,e)&&"object"==typeof n[e]&&t.push(e);return t},// Register bundled grammars.
y(g),y(p),y(d),y(f),b.util.encode=function(e){return e},b.Token.stringify=function(e,n,t){var a;return"string"==typeof e?{type:"text",value:e}:"Array"===b.util.type(e)?function(e,n){for(var t,a=[],r=e.length,o=-1;++o<r;)""!==(t=e[o])&&null!=t&&a.push(t);for(o=-1,r=a.length;++o<r;)t=a[o],a[o]=b.Token.stringify(t,n,a);return a}(e,n):(a={type:e.type,content:b.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(a.classes=a.classes.concat(e.alias)),b.hooks.run("wrap",a),s(a.tag+"."+a.classes.join("."),function(e){var n;for(n in e)e[n]=c(e[n]);return e}(a.attributes),a.content))}}),a.register("90eyP",function(e,n){e.exports=a("1q3qu")}),a.register("1q3qu",function(e,n){var t=a("3Weyg"),r=a("aYYdg")(t,"div");r.displayName="html",e.exports=r}),a.register("3Weyg",function(e,n){var t=a("9ONL5"),r=a("ef1Jl"),o=a("f3jy4"),l=a("cOgiS"),i=a("fccLP"),s=a("l87gh");e.exports=t([o,r,l,i,s])}),a.register("9ONL5",function(e,n){var t=a("6DMgP"),r=a("1UyL8");e.exports=function(e){for(var n,a,o=e.length,l=[],i=[],s=-1;++s<o;)n=e[s],l.push(n.property),i.push(n.normal),a=n.space;return new r(t.apply(null,l),t.apply(null,i),a)}}),a.register("6DMgP",function(e,n){e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var a=arguments[n];for(var r in a)t.call(a,r)&&(e[r]=a[r])}return e};var t=Object.prototype.hasOwnProperty}),a.register("1UyL8",function(e,n){e.exports=a;var t=a.prototype;function a(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}t.space=null,t.normal={},t.property={}}),a.register("ef1Jl",function(e,n){var t=a("dfE38");e.exports=t({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})}),a.register("dfE38",function(e,n){var t=a("7X4D9"),r=a("1UyL8"),o=a("dMmmn");e.exports=function(e){var n,a,l=e.space,i=e.mustUseProperty||[],s=e.attributes||{},c=e.properties,u=e.transform,g={},p={};for(n in c)a=new o(n,u(s,n),c[n],l),-1!==i.indexOf(n)&&(a.mustUseProperty=!0),g[n]=a,p[t(n)]=n,p[t(a.attribute)]=n;return new r(g,p,l)}}),a.register("7X4D9",function(e,n){e.exports=function(e){return e.toLowerCase()}}),a.register("dMmmn",function(e,n){var t=a("61WdI"),r=a("69tRz");e.exports=i,i.prototype=new t,i.prototype.defined=!0;var o=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],l=o.length;function i(e,n,a,i){var s,c,u,g=-1;for(i&&(this.space=i),t.call(this,e,n);++g<l;)s=u=o[g],(c=(a&r[u])===r[u])&&(this[s]=c)}}),a.register("61WdI",function(e,n){e.exports=a;var t=a.prototype;function a(e,n){this.property=e,this.attribute=n}t.space=null,t.attribute=null,t.property=null,t.boolean=!1,t.booleanish=!1,t.overloadedBoolean=!1,t.number=!1,t.commaSeparated=!1,t.spaceSeparated=!1,t.commaOrSpaceSeparated=!1,t.mustUseProperty=!1,t.defined=!1}),a.register("69tRz",function(n,t){e(n.exports,"boolean",()=>a,e=>a=e),e(n.exports,"booleanish",()=>r,e=>r=e),e(n.exports,"overloadedBoolean",()=>o,e=>o=e),e(n.exports,"number",()=>l,e=>l=e),e(n.exports,"spaceSeparated",()=>i,e=>i=e),e(n.exports,"commaSeparated",()=>s,e=>s=e),e(n.exports,"commaOrSpaceSeparated",()=>c,e=>c=e);var a,r,o,l,i,s,c,u=0;function g(){return Math.pow(2,++u)}a=g(),r=g(),o=g(),l=g(),i=g(),s=g(),c=g()}),a.register("f3jy4",function(e,n){var t=a("dfE38");e.exports=t({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})}),a.register("cOgiS",function(e,n){var t=a("dfE38"),r=a("iN7bp");e.exports=t({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})}),a.register("iN7bp",function(e,n){var t=a("iUVSF");e.exports=function(e,n){return t(e,n.toLowerCase())}}),a.register("iUVSF",function(e,n){e.exports=function(e,n){return n in e?e[n]:n}}),a.register("fccLP",function(e,n){var t=a("69tRz"),r=a("dfE38"),o=t.booleanish,l=t.number,i=t.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:o,ariaAutoComplete:null,ariaBusy:o,ariaChecked:o,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:o,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:o,ariaFlowTo:i,ariaGrabbed:o,ariaHasPopup:null,ariaHidden:o,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:l,ariaLive:null,ariaModal:o,ariaMultiLine:o,ariaMultiSelectable:o,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:o,ariaReadOnly:o,ariaRelevant:null,ariaRequired:o,ariaRoleDescription:i,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:o,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}})}),a.register("l87gh",function(e,n){var t=a("69tRz"),r=a("dfE38"),o=a("iN7bp"),l=t.boolean,i=t.overloadedBoolean,s=t.booleanish,c=t.number,u=t.spaceSeparated,g=t.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:o,mustUseProperty:["checked","multiple","muted","selected"],properties:{// Standard Properties.
abbr:null,accept:g,acceptCharset:u,accessKey:u,action:null,allow:null,allowFullScreen:l,allowPaymentRequest:l,allowUserMedia:l,alt:null,as:null,async:l,autoCapitalize:null,autoComplete:u,autoFocus:l,autoPlay:l,capture:l,charSet:null,checked:l,cite:null,className:u,cols:c,colSpan:null,content:null,contentEditable:s,controls:l,controlsList:u,coords:c|g,crossOrigin:null,data:null,dateTime:null,decoding:null,default:l,defer:l,dir:null,dirName:null,disabled:l,download:i,draggable:s,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:l,formTarget:null,headers:u,height:c,hidden:l,high:c,href:null,hrefLang:null,htmlFor:u,httpEquiv:u,id:null,imageSizes:null,imageSrcSet:g,inputMode:null,integrity:null,is:null,isMap:l,itemId:null,itemProp:u,itemRef:u,itemScope:l,itemType:u,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:l,low:c,manifest:null,max:null,maxLength:c,media:null,method:null,min:null,minLength:c,multiple:l,muted:l,name:null,nonce:null,noModule:l,noValidate:l,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:l,optimum:c,pattern:null,ping:u,placeholder:null,playsInline:l,poster:null,preload:null,readOnly:l,referrerPolicy:null,rel:u,required:l,reversed:l,rows:c,rowSpan:c,sandbox:u,scope:null,scoped:l,seamless:l,selected:l,shape:null,size:c,sizes:null,slot:null,span:c,spellCheck:s,src:null,srcDoc:null,srcLang:null,srcSet:g,start:c,step:null,style:null,tabIndex:c,target:null,title:null,translate:null,type:null,typeMustMatch:l,useMap:null,value:s,width:c,wrap:null,// Legacy.
// See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
align:null,aLink:null,archive:u,axis:null,background:null,bgColor:null,border:c,borderColor:null,bottomMargin:c,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:l,declare:l,event:null,face:null,frame:null,frameBorder:null,hSpace:c,leftMargin:c,link:null,longDesc:null,lowSrc:null,marginHeight:c,marginWidth:c,noResize:l,noHref:l,noShade:l,noWrap:l,object:null,profile:null,prompt:null,rev:null,rightMargin:c,rules:null,scheme:null,scrolling:s,standby:null,summary:null,text:null,topMargin:c,valueType:null,version:null,vAlign:null,vLink:null,vSpace:c,// Non-standard Properties.
allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:l,disableRemotePlayback:l,prefix:null,property:null,results:c,security:null,unselectable:null}})}),a.register("aYYdg",function(e,n){var t=a("7kGXr"),r=a("7X4D9"),o=a("9nAkc"),l=a("fsaEV").parse,i=a("13FF8").parse;e.exports=function(e,n,a){var r=a?function(e){for(var n,t=e.length,a=-1,r={};++a<t;)r[(n=e[a]).toLowerCase()]=n;return r}(a):null;return(// Hyperscript compatible DSL for creating virtual hast trees.
function(a,u){var g,p,d,f,m=o(a,n),h=Array.prototype.slice.call(arguments,2),b=m.tagName.toLowerCase();if(m.tagName=r&&s.call(r,b)?r[b]:b,u&&("string"==typeof(g=u)||"length"in g||(p=m.tagName,d=g.type,"input"!==p&&d&&"string"==typeof d&&("object"==typeof g.children&&"length"in g.children||((d=d.toLowerCase(),"button"===p)?"menu"!==d&&"submit"!==d&&"reset"!==d&&"button"!==d:"value"in g))))&&(h.unshift(u),u=null),u)for(f in u)(function(n,a,r){var o,s,u;null!=r&&r==r&&(s=(o=t(e,a)).property,"string"==typeof(u=r)&&(o.spaceSeparated?u=l(u):o.commaSeparated?u=i(u):o.commaOrSpaceSeparated&&(u=l(i(u).join(" ")))),"style"===s&&"string"!=typeof r&&(u=function(e){var n,t=[];for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}(u)),"className"===s&&n.className&&(u=n.className.concat(u)),n[s]=// Parse a (list of) primitives.
function(e,n,t){var a,r,o;if("object"!=typeof t||!("length"in t))return c(e,n,t);for(r=t.length,a=-1,o=[];++a<r;)o[a]=c(e,n,t[a]);return o}(o,s,u))})(m.properties,f,u[f]);return function e(n,t){var a,r;if("string"==typeof t||"number"==typeof t){n.push({type:"text",value:String(t)});return}if("object"==typeof t&&"length"in t){for(a=-1,r=t.length;++a<r;)e(n,t[a]);return}if("object"!=typeof t||!("type"in t))throw Error("Expected node, nodes, or string, got `"+t+"`");n.push(t)}(m.children,h),"template"===m.tagName&&(m.content={type:"root",children:m.children},m.children=[]),m})};var s={}.hasOwnProperty;// Parse a single primitives.
function c(e,n,t){var a=t;return e.number||e.positiveNumber?isNaN(a)||""===a||(a=Number(a)):(e.boolean||e.overloadedBoolean)&&"string"==typeof a&&(""===a||r(t)===r(n))&&(a=!0),a}}),a.register("7kGXr",function(e,n){var t=a("7X4D9"),r=a("dMmmn"),o=a("61WdI"),l="data";e.exports=function(e,n){var a,p,d,f=t(n),m=n,h=o;return f in e.normal?e.property[e.normal[f]]:(f.length>4&&f.slice(0,4)===l&&i.test(n)&&("-"===n.charAt(4)?m=l+(a=n.slice(5).replace(s,g)).charAt(0).toUpperCase()+a.slice(1):(d=(p=n).slice(4),n=s.test(d)?p:("-"!==(d=d.replace(c,u)).charAt(0)&&(d="-"+d),l+d)),h=r),new h(m,n))};var i=/^data[-\w.:]+$/i,s=/-[a-z]/g,c=/[A-Z]/g;function u(e){return"-"+e.toLowerCase()}function g(e){return e.charAt(1).toUpperCase()}}),a.register("9nAkc",function(e,n){e.exports=// Create a hast element from a simple CSS selector.
function(e,n){for(var a,r,o,l=e||"",i=n||"div",s={},c=0;c<l.length;)t.lastIndex=c,o=t.exec(l),(a=l.slice(c,o?o.index:l.length))&&(r?"#"===r?s.id=a:s.className?s.className.push(a):s.className=[a]:i=a,c+=a.length),o&&(r=o[0],c++);return{type:"element",tagName:i,properties:s,children:[]}};var t=/[#.]/g}),a.register("fsaEV",function(n,t){e(n.exports,"parse",()=>a,e=>a=e),a=function(e){var n=String(e||"").trim();return""===n?[]:n.split(r)};var a,r=/[ \t\n\r\f]+/g}),a.register("13FF8",function(n,t){var a;e(n.exports,"parse",()=>a,e=>a=e),a=// Parse comma-separated tokens to an array.
function(e){for(var n,t=[],a=String(e||""),r=a.indexOf(","),o=0,l=!1;!l;)-1===r&&(r=a.length,l=!0),((n=a.slice(o,r).trim())||!l)&&t.push(n),o=r+1,r=a.indexOf(",",o);return t}}),a.register("j2kXY",function(e,n){var t=a("faU94"),r=a("cK6aZ"),o=a("2sHFh"),l=a("hQKiK"),i=a("iujIg"),s=a("5VuDf");e.exports=// Wrap to ensure clean parameters are given to `parse`.
function(e,n){var a,o,l={};for(o in n||(n={}),p)a=n[o],l[o]=null==a?p[o]:a;return(l.position.indent||l.position.start)&&(l.indent=l.position.indent||[],l.position=l.position.start),// Parse entities.
// eslint-disable-next-line complexity
function(e,n){var a,o,l,p,x,v,w,k,S,A,F,_,N,j,C,O,L,E,M,P,z,$=n.additional,D=n.nonTerminated,T=n.text,R=n.reference,B=n.warning,I=n.textContext,H=n.referenceContext,q=n.warningContext,W=n.position,U=n.indent||[],V=e.length,Z=0,K=-1,Q=W.column||1,G=W.line||1,Y="",J=[];for("string"==typeof $&&($=$.charCodeAt(0)),// Cache the current point.
E=X(),// Wrap `handleWarning`.
A=B?// “Throw” a parse-error: a warning.
function(e,n){var t=X();t.column+=n,t.offset+=n,B.call(q,y[e],t,e)}:g,// Ensure the algorithm walks over the first character and the end
// (inclusive).
Z--,V++;++Z<V;)if(10// '\n'
===w&&(Q=U[K]||1),38// '&'
===(w=e.charCodeAt(Z))){// The behaviour depends on the identity of the next character.
if(9// '\t'
===(S=e.charCodeAt(Z+1))||10===S||12// '\f'
===S||32// ' '
===S||38===S||60// '<'
===S||S!=S||$&&S===$){// Not a character reference.
// No characters are consumed, and nothing is returned.
// This is not an error, either.
Y+=u(w),Q++;continue}for(j=C=Z+1,z=C,35// '#'
===S?(// Numerical entity.
z=++j,88// 'X'
===// The behaviour further depends on the next character.
(S=e.charCodeAt(z))||120// 'x'
===S?(// ASCII hex digits.
O=f,z=++j):O=m):O=d,l="",N="",v="",L=b[O],z--;++z<V&&L(S=e.charCodeAt(z));)v+=u(S),O===d&&c.call(t,v)&&(l=v,N=t[v]);(x=59// ';'
===e.charCodeAt(z))&&(z++,(p=O===d&&s(v))&&(l=v,N=p)),P=1+z-C,(x||D)&&(v?O===d?(x&&!N?A(5,1):(l!==v&&(P=1+(z=j+l.length)-j,x=!1),x||(F=l?1:3,n.attribute?61// '='
===(S=e.charCodeAt(z))?(A(F,P),N=null):i(S)?N=null:A(F,P):A(F,P))),k=N):(x||// warning.
A(2,P),(a=// When terminated and number, parse as either hexadecimal or decimal.
k=parseInt(v,h[O]))>=55296&&a<=57343||a>1114111?(A(7,P),k=u(65533// '�'
)):k in r?(// Trigger a warning when the parsed number is disallowed, and replace
// by an alternative.
A(6,P),k=r[k]):(// Parse the number.
_="",((o=k)>=1&&o<=8||11===o||o>=13&&o<=31||o>=127&&o<=159||o>=64976&&o<=65007||(65535&o)==65535||(65535&o)==65534)&&A(6,P),k>65535&&(k-=65536,_+=u(k>>>10|55296),k=56320|1023&k),k=_+u(k))):O!==d&&A(4,P)),k?(ee(),E=X(),Z=z-1,Q+=z-C+1,J.push(k),M=X(),M.offset++,R&&R.call(H,k,{start:E,end:M},e.slice(C-1,z)),E=M):(// If we could not find a reference, queue the checked characters (as
// normal characters), and move the pointer to their end.
// This is possible because we can be certain neither newlines nor
// ampersands are included.
v=e.slice(C-1,z),Y+=v,Q+=v.length,Z=z-1)}else 10// Line feed
===w&&(G++,K++,Q=0),w==w?(Y+=u(w),Q++):ee();// Return the reduced nodes.
return J.join("");// Get current position.
function X(){return{line:G,column:Q,offset:Z+(W.offset||0)}}// Flush `queue` (normal text).
// Macro invoked before each entity and at the end of `value`.
// Does nothing when `queue` is empty.
function ee(){Y&&(J.push(Y),T&&T.call(I,Y,{start:E,end:X()}),Y="")}}(e,l)};var c={}.hasOwnProperty,u=String.fromCharCode,g=Function.prototype,p={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},d="named",f="hexadecimal",m="decimal",h={};h[f]=16,h[m]=10;// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var b={};b[d]=i,b[m]=o,b[f]=l;// Warning messages.
var y={};y[1]="Named character references must be terminated by a semicolon",y[2]="Numeric character references must be terminated by a semicolon",y[3]="Named character references cannot be empty",y[4]="Numeric character references cannot be empty",y[5]="Named character references must be known",y[6]="Numeric character references cannot be disallowed",y[7]="Numeric character references cannot be outside the permissible Unicode range"}),a.register("faU94",function(e,n){e.exports=JSON.parse('{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}')}),a.register("cK6aZ",function(e,n){e.exports=JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')}),a.register("2sHFh",function(e,n){e.exports=// Check if the given character code, or the character code at the first
// character, is decimal.
function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=48&&n<=57/* 0-9 */}}),a.register("hQKiK",function(e,n){e.exports=// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97/* a */&&n<=102||n>=65/* A */&&n<=70||n>=48/* A */&&n<=57}}),a.register("iujIg",function(e,n){var t=a("9RC0W"),r=a("2sHFh");e.exports=// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function(e){return t(e)||r(e)}}),a.register("9RC0W",function(e,n){e.exports=// Check if the given character code, or the character code at the first
// character, is alphabetical.
function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}}),a.register("5VuDf",function(e,n){var t;e.exports=function(e){var n,a="&"+e+";";return(// Some entities do not require the closing semicolon (`&not` - for instance),
// which leads to situations where parsing the assumed entity of &notit; will
// result in the string `¬it;`.  When we encounter a trailing semicolon after
// parsing and the entity to decode was not a semicolon (`&semi;`), we can
// assume that the matching was incomplete
(t=t||document.createElement("i")).innerHTML=a,(59//  ';'
!==(n=t.textContent).charCodeAt(n.length-1)||"semi"===e)&&n!==a&&n)}}),a.register("gequz",function(e,n){/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(e){// Private helper vars
var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,a={},r={/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */manual:e.Prism&&e.Prism.manual,/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */util:{encode:function e(n){return n instanceof o?new o(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */clone:function e(n,t){var a,o;switch(t=t||{},r.util.type(n)){case"Object":if(t[o=r.util.objId(n)])return t[o];for(var l in a=/** @type {Record<string, any>} */{},t[o]=a,n)n.hasOwnProperty(l)&&(a[l]=e(n[l],t));return /** @type {any} */a;case"Array":if(t[o=r.util.objId(n)])return t[o];return a=[],t[o]=a,/** @type {Array} *//** @type {any} */n.forEach(function(n,r){a[r]=e(n,t)}),/** @type {any} */a;default:return n}},/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */setLanguage:function(e,t){// remove all `language-xxxx` classes
// (this might leave behind a leading space)
e.className=e.className.replace(RegExp(n,"gi"),""),// add the new `language-xxxx` class
// (using `classList` will automatically clean up spaces for us)
e.classList.add("language-"+t)},/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return /** @type {any} */document.currentScript;// IE11 workaround
// we'll get the src of the current script by parsing IE11's error stack trace
// this will not work for inline scripts
try{throw Error()}catch(a){// Get file src url from stack. Specifically works with the format of stack traces in IE.
// A stack will look like this:
//
// Error
//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
//    at Global code (http://localhost/components/prism-core.js:606:1)
var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */isActive:function(e,n,t){for(var a="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!t}},/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */languages:{/**
			 * The grammar for plain, unformatted text.
			 */plain:a,plaintext:a,text:a,txt:a,/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */insertBefore:function(e,n,t,a){var o=(a=a||/** @type {any} */r.languages)[e],l={};for(var i in o)if(o.hasOwnProperty(i)){if(i==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(i)||(l[i]=o[i])}var c=a[e];return a[e]=l,// Update references in other language definitions
r.languages.DFS(r.languages,function(n,t){t===c&&n!=e&&(this[n]=l)}),l},// Traverse a language definition with Depth First Search
DFS:function e(n,t,a,o){o=o||{};var l=r.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],a||i);var s=n[i],c=r.util.type(s);"Object"!==c||o[l(s)]?"Array"!==c||o[l(s)]||(o[l(s)]=!0,e(s,t,i,o)):(o[l(s)]=!0,e(s,t,null,o))}}},plugins:{},/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var o,l=0;o=a.elements[l++];)r.highlightElement(o,!0===n,a.callback)},/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */highlightElement:function(n,t,a){// Find language
var o=r.util.getLanguage(n),l=r.languages[o];// Set language on the element, if not present
r.util.setLanguage(n,o);// Set language on the parent, for styling
var i=n.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&r.util.setLanguage(i,o);var s=n.textContent,c={element:n,language:o,grammar:l,code:s};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),a&&a.call(c.element)}if(r.hooks.run("before-sanity-check",c),// plugins may change/add the parent/element
(i=c.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!c.code){r.hooks.run("complete",c),a&&a.call(c.element);return}if(r.hooks.run("before-highlight",c),!c.grammar){u(r.util.encode(c.code));return}if(t&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){u(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language))},/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */highlight:function(e,n,t){var a={code:e,grammar:n,language:t};if(r.hooks.run("before-tokenize",a),!a.grammar)throw Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */tokenize:function(e,n){var t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}var c=new i;return s(c,c.head,e),/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */function e(n,t,a,i,c,u){for(var g in a)if(a.hasOwnProperty(g)&&a[g]){var p=a[g];p=Array.isArray(p)?p:[p];for(var d=0;d<p.length;++d){if(u&&u.cause==g+","+d)return;var f=p[d],m=f.inside,h=!!f.lookbehind,b=!!f.greedy,y=f.alias;if(b&&!f.pattern.global){// Without the global flag, lastIndex won't work
var x=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,x+"g")}for(var v=f.pattern||f,w=i.next,k=c;w!==t.tail&&(!u||!(k>=u.reach));k+=w.value.length,w=w.next){var S,A=w.value;if(t.length>n.length)return;if(!(A instanceof o)){var F=1;// this is the to parameter of removeBetween
if(b){if(!(S=l(v,k,n,h))||S.index>=n.length)break;var _=S.index,N=S.index+S[0].length,j=k;for(// find the node that contains the match
j+=w.value.length;_>=j;)j+=(w=w.next).value.length;// the current node is a Token, then the match starts inside another Token, which is invalid
if(// adjust pos (and p)
j-=w.value.length,k=j,w.value instanceof o)continue;// find the last node which is affected by this match
for(var C=w;C!==t.tail&&(j<N||"string"==typeof C.value);C=C.next)F++,j+=C.value.length;F--,// replace with the new match
A=n.slice(k,j),S.index-=k}else if(!(S=l(v,0,A,h)))continue;// eslint-disable-next-line no-redeclare
var _=S.index,O=S[0],L=A.slice(0,_),E=A.slice(_+O.length),M=k+A.length;u&&M>u.reach&&(u.reach=M);var P=w.prev;if(L&&(P=s(t,P,L),k+=L.length),/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */function(e,n,t){for(var a=n.next,r=0;r<t&&a!==e.tail;r++)a=a.next;n.next=a,a.prev=n,e.length-=r}(t,P,F),w=s(t,P,new o(g,m?r.tokenize(O,m):O,y,O)),E&&s(t,w,E),F>1){// at least one Token object was removed, so we have to do some rematching
// this can only happen if the current pattern is greedy
/** @type {RematchOptions} */var z={cause:g+","+d,reach:M};e(n,t,a,w.prev,k,z),u&&z.reach>u.reach&&(u.reach=z.reach)}}}}}}(e,c,n,c.head,0),/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(c)},/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */hooks:{all:{},/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,o=0;a=t[o++];)a(n)}},Token:o};// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */function o(e,n,t,a){/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */this.type=e,/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */this.content=n,/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */this.alias=t,// Copy of the full string this token was created from
this.length=0|(a||"").length}/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */function l(e,n,t,a){e.lastIndex=n;var r=e.exec(t);if(r&&a&&r[1]){// change the match to remove the text matched by the Prism lookbehind group
var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 *//**
	 * @template T
	 * @private
	 */function i(){/** @type {LinkedListNode<T>} */var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,/** @type {LinkedListNode<T>} */this.head=e,/** @type {LinkedListNode<T>} */this.tail=n,this.length=0}/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */function s(e,n,t){// assumes that node != list.tail && values.length >= 0
var a=n.next,r={value:t,prev:n,next:a};return n.next=r,a.prev=r,e.length++,r}if(e.Prism=r,/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 *//**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */o.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach(function(n){a+=e(n,t)}),a}var o={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(o.classes,l):o.classes.push(l)),r.hooks.run("wrap",o);var i="";for(var s in o.attributes)i+=" "+s+'="'+(o.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+i+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(n){var t=JSON.parse(n.data),a=t.language,o=t.code,l=t.immediateClose;e.postMessage(r.highlight(o,r.languages[a],a)),l&&e.close()},!1)),r;// Get current script and highlight
var c=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(c&&(r.filename=c.src,c.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){// If the document state is "loading", then we'll use DOMContentLoaded.
// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
// might take longer one animation frame to execute which can create a race condition where only some plugins have
// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
// See https://github.com/PrismJS/prism/issues/2102
var g=document.readyState;"loading"===g||"interactive"===g&&c&&c.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!=typeof window?window// if in browser
:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self// if in worker
:{}// if in node js
);e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a);// some additional documentation/types
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 *//**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 *//**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 *//**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */}),a.register("drNtq",function(e,n){function t(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{// https://www.w3.org/TR/xml/#NT-doctypedecl
pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null// see below
},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup// Plugin to make entity title show the real entity, idea by Roman Komarov
,e.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{/**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */value:function(n,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:e.languages[t]};var o={};o[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{/**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}e.exports=t,t.displayName="markup",t.aliases=["html","mathml","svg","xml","ssml","atom","rss"]}),a.register("ijd9W",function(e,n){function t(e){var n,t;n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}// See rest below
}},url:{// https://drafts.csswg.org/css-values-3/#urls
pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,(t=e.languages.markup)&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}e.exports=t,t.displayName="css",t.aliases=[]}),a.register("6miIV",function(e,n){function t(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}e.exports=t,t.displayName="clike",t.aliases=[]}),a.register("38hzA",function(e,n){function t(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+// constant
(/NaN|Infinity/.source+"|"+// binary integer
/0[bB][01]+(?:_[01]+)*n?/.source+"|"+// octal integer
/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+// hexadecimal integer
/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|")+// decimal bigint
/\d+(?:_\d+)*n/.source+"|"+// decimal number (integer or float) but no bigint
/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{// eslint-disable-next-line regexp/no-dupe-characters-character-class
pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},// This must be declared before keyword because we use "function" inside the look-forward
"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript")// add attribute support for all DOM events.
,// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}e.exports=t,t.displayName="javascript",t.aliases=["js"]}),a.register("4ygbT",function(n,t){e(n.exports,"default",()=>a);var a={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6c6783"},prolog:{color:"#6c6783"},doctype:{color:"#6c6783"},cdata:{color:"#6c6783"},punctuation:{color:"#6c6783"},namespace:{Opacity:".7"},tag:{color:"#e09142"},operator:{color:"#e09142"},number:{color:"#e09142"},property:{color:"#9a86fd"},function:{color:"#9a86fd"},"tag-id":{color:"#eeebff"},selector:{color:"#eeebff"},"atrule-id":{color:"#eeebff"},"code.language-javascript":{color:"#c4b9fe"},"attr-name":{color:"#c4b9fe"},"code.language-css":{color:"#ffcc99"},"code.language-scss":{color:"#ffcc99"},boolean:{color:"#ffcc99"},string:{color:"#ffcc99"},entity:{color:"#ffcc99",cursor:"help"},url:{color:"#ffcc99"},".language-css .token.string":{color:"#ffcc99"},".language-scss .token.string":{color:"#ffcc99"},".style .token.string":{color:"#ffcc99"},"attr-value":{color:"#ffcc99"},keyword:{color:"#ffcc99"},control:{color:"#ffcc99"},directive:{color:"#ffcc99"},unit:{color:"#ffcc99"},statement:{color:"#ffcc99"},regex:{color:"#ffcc99"},atrule:{color:"#ffcc99"},placeholder:{color:"#ffcc99"},variable:{color:"#ffcc99"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #eeebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c4b9fe"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #8a75f5",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c2937"},".line-numbers .line-numbers-rows > span:before":{color:"#3c3949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}}}),a.register("iyaae",function(n,t){e(n.exports,"default",()=>a);var a={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#b6ad9a"},prolog:{color:"#b6ad9a"},doctype:{color:"#b6ad9a"},cdata:{color:"#b6ad9a"},punctuation:{color:"#b6ad9a"},namespace:{Opacity:".7"},tag:{color:"#063289"},operator:{color:"#063289"},number:{color:"#063289"},property:{color:"#b29762"},function:{color:"#b29762"},"tag-id":{color:"#2d2006"},selector:{color:"#2d2006"},"atrule-id":{color:"#2d2006"},"code.language-javascript":{color:"#896724"},"attr-name":{color:"#896724"},"code.language-css":{color:"#728fcb"},"code.language-scss":{color:"#728fcb"},boolean:{color:"#728fcb"},string:{color:"#728fcb"},entity:{color:"#728fcb",cursor:"help"},url:{color:"#728fcb"},".language-css .token.string":{color:"#728fcb"},".language-scss .token.string":{color:"#728fcb"},".style .token.string":{color:"#728fcb"},"attr-value":{color:"#728fcb"},keyword:{color:"#728fcb"},control:{color:"#728fcb"},directive:{color:"#728fcb"},unit:{color:"#728fcb"},statement:{color:"#728fcb"},regex:{color:"#728fcb"},atrule:{color:"#728fcb"},placeholder:{color:"#93abdc"},variable:{color:"#93abdc"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #2d2006",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#896724"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #896724",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#ece8de"},".line-numbers .line-numbers-rows > span:before":{color:"#cdc4b1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"}}}),a.register("jevdb",function(t,r){e(t.exports,"default",()=>o);var o=/*@__PURE__*/n(a("ftqpN"))}),a.register("ftqpN",function(e,n){var t=a("2pHuO"),r=a("iYqBF");function o(e){var n,a;e.register(t),e.register(r),n=e.util.clone(e.languages.typescript),e.languages.tsx=e.languages.extend("jsx",n)// doesn't work with TS because TS is too complex
,delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"]// This will prevent collisions between TSX tags and TS generic types.
,(a=e.languages.tsx.tag).pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+a.pattern.source+")",a.pattern.flags),a.lookbehind=!0}e.exports=o,o.displayName="tsx",o.aliases=[]}),a.register("2pHuO",function(e,n){function t(e){!function(e){var n=e.util.clone(e.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;/**
     * @param {string} source
     * @param {string} [flags]
     */function o(e,n){return RegExp(e=e.replace(/<S>/g,function(){return t}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return r}),n)}r=o(r).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{// Allow for two levels of nesting
pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag)// The following will handle plain text inside tags
;var l=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(l).join(""):""},i=function(n){for(var t=[],a=0;a<n.length;a++){var r=n[a],o=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?t.length>0&&t[t.length-1].tagName===l(r.content[0].content[1])&&t.pop():"/>"===r.content[r.content.length-1].content||t.push({tagName:l(r.content[0].content[1]),openedBraces:0}):t.length>0&&"punctuation"===r.type&&"{"===r.content?t[t.length-1].openedBraces++:t.length>0&&t[t.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?t[t.length-1].openedBraces--:o=!0),(o||"string"==typeof r)&&t.length>0&&0===t[t.length-1].openedBraces){// Here we are inside a tag, and not inside a JSX context.
// That's plain text: drop any tokens matched.
var s=l(r)// And merge text with adjacent text
;a<n.length-1&&("string"==typeof n[a+1]||"plain-text"===n[a+1].type)&&(s+=l(n[a+1]),n.splice(a+1,1)),a>0&&("string"==typeof n[a-1]||"plain-text"===n[a-1].type)&&(s=l(n[a-1])+s,n.splice(a-1,1),a--),n[a]=new e.Token("plain-text",s,null,s)}r.content&&"string"!=typeof r.content&&i(r.content)}};e.hooks.add("after-tokenize",function(e){("jsx"===e.language||"tsx"===e.language)&&i(e.tokens)})}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]}),a.register("iYqBF",function(e,n){function t(e){var n;e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null// see below
},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/})// The keywords TypeScript adds to JavaScript
,e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/)// doesn't work with TS because TS is too complex
,delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"]// a version of typescript specifically for highlighting types
,n=e.languages.extend("typescript",{}),delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{// e.g. foo<T extends "bar" | "baz">( ...
pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,// everything after the first <
alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript}e.exports=t,t.displayName="typescript",t.aliases=["ts"]}),a.register("hqN5V",function(t,r){e(t.exports,"default",()=>o);var o=/*@__PURE__*/n(a("1NJfq"))}),a.register("1NJfq",function(e,n){function t(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/// See rest below
}},// url, compassified
url:/(?:[-a-z]+-)?url(?=\()/i,// CSS selector regex is not appropriate for Sass
// since there can be lot more things (var, @ directive, nesting..)
// a selector must start at the end of a property or after a brace (end of other rules or nesting)
// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
// can "pass" as a selector- e.g: proper#{$erty})
// this one was hard to do, so please be careful if you edit this one :)
selector:{// Initial look-ahead is used to prevent matching of blank selectors
pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{// var and interpolated vars
variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}e.exports=t,t.displayName="scss",t.aliases=[]}),a.register("cLj6B",function(t,r){e(t.exports,"default",()=>o);var o=/*@__PURE__*/n(a("lLSsR"))}),a.register("lLSsR",function(e,n){function t(e){!function(e){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,t=0;t<2;t++)n=n.replace(/<self>/g,function(){return n});n=n.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null// see below
}},// Closure params should not be confused with bitwise OR |
"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null// see below
}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[// https://github.com/rust-lang/reference/blob/master/src/keywords.md
/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,// https://doc.rust-lang.org/stable/rust-by-example/primitives.html
/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],// functions can technically start with an upper-case letter, but this will introduce a lot of false positives
// and Rust's naming conventions recommend snake_case anyway.
// https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},// Hex, oct, bin, dec numbers with visual separators and type suffix
number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(e)}e.exports=t,t.displayName="rust",t.aliases=[]}),a.register("kzgvn",function(t,r){e(t.exports,"default",()=>o);var o=/*@__PURE__*/n(a("fq7bw"))}),a.register("fq7bw",function(e,n){var t=a("1pYHK");function r(e){e.register(t),e.languages.glsl=e.languages.extend("c",{keyword:/\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/})}e.exports=r,r.displayName="glsl",r.aliases=[]}),a.register("1pYHK",function(e,n){function t(e){e.languages.c=e.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{// https://en.cppreference.com/w/c/language/string_literal
pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),e.languages.insertBefore("c","string",{char:{// https://en.cppreference.com/w/c/language/character_constant
pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),e.languages.insertBefore("c","string",{macro:{// allow for multiline macro definitions
// spaces after the # character compile fine with gcc
pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{// highlight the path of the include statement as a string
pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},e.languages.c.string],char:e.languages.c.char,comment:e.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],// highlight macro directives as keywords
directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:e.languages.c}}}}),e.languages.insertBefore("c","function",{// highlight predefined macros as constants
constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete e.languages.c.boolean}e.exports=t,t.displayName="c",t.aliases=[]}),a.register("1q0qQ",function(t,r){e(t.exports,"default",()=>o);var o=/*@__PURE__*/n(a("eORpX"))}),a.register("eORpX",function(e,n){function t(e){!function(e){// Allow only one line break
var n=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;/**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @returns {RegExp}
     */function t(e){return e=e.replace(/<inner>/g,function(){return n}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+e+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{// > ...
pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+o+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+o+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{// Prefixed by 4 spaces or 1 tab and preceded by an empty line
pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{// ```optional language
// code block
// ```
pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{// title 1
// =======
// title 2
// -------
pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{// # title 1
// ###### title 6
pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{// ***
// ---
// * * *
// -----------
pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{// * item
// + item
// - item
// 1. item
pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{// [id]: http://example.com "Optional title"
// [id]: http://example.com 'Optional title'
// [id]: http://example.com (Optional title)
// [id]: <http://example.com> "Optional title"
pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{// **strong**
// __strong__
// allow one nested instance of italic text using the same delimiter
pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}// see below
},punctuation:/\*\*|__/}},italic:{// *em*
// _em_
// allow one nested instance of bold text using the same delimiter
pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}// see below
},punctuation:/[*_]/}},strike:{// ~~strike through~~
// ~strike~
// eslint-disable-next-line regexp/strict
pattern:t(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}// see below
},punctuation:/~~?/}},"code-snippet":{// `code`
// ``code``
pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{// [example](http://example.com "Optional title")
// [example][id]
// [example] [id]
pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}// see below
},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(n){["url","bold","italic","strike","code-snippet"].forEach(function(t){n!==t&&(e.languages.markdown[n].inside.content.inside[t]=e.languages.markdown[t])})}),e.hooks.add("after-tokenize",function(e){("markdown"===e.language||"md"===e.language)&&function e(n){if(n&&"string"!=typeof n)for(var t=0,a=n.length;t<a;t++){var r=n[t];if("code"!==r.type){e(r.content);continue}/*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */var o=r.content[1],l=r.content[3];if(o&&l&&"code-language"===o.type&&"code-block"===l.type&&"string"==typeof o.content){// this might be a language that Prism does not support
// do some replacements to support C++, C#, and F#
var i=o.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp")// only use the first word
,s="language-"+(i=(/[a-z][\w-]*/i.exec(i)||[""])[0].toLowerCase())// add alias
;l.alias?"string"==typeof l.alias?l.alias=[l.alias,s]:l.alias.push(s):l.alias=[s]}}}(e.tokens)}),e.hooks.add("wrap",function(n){if("code-block"===n.type){for(var t// decode known entities
,a="",r=0,o=n.classes.length;r<o;r++){var c=n.classes[r],u=/language-(.+)/.exec(c);if(u){a=u[1];break}}var g=e.languages[a];if(g)n.content=e.highlight(n.content.value.replace(l,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(e,n){return"#"===(n=n.toLowerCase())[0]?s("x"===n[1]?parseInt(n.slice(2),16):Number(n.slice(1))):i[n]||e}),g,a);else if(a&&"none"!==a&&e.plugins.autoloader){var p="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());n.attributes.id=p,e.plugins.autoloader.loadLanguages(a,function(){var n=document.getElementById(p);n&&(n.innerHTML=e.highlight(n.textContent,e.languages[a],a))})}}});var l=RegExp(e.languages.markup.tag.pattern.source,"gi"),i={amp:"&",lt:"<",gt:">",quot:'"'}// IE 11 doesn't support `String.fromCodePoint`
,s=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(e)}e.exports=t,t.displayName="markdown",t.aliases=["md"]});//# sourceMappingURL=postsContent.component.a9ab631d.js.map

//# sourceMappingURL=postsContent.component.a9ab631d.js.map
