parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=L,exports.hydrate=M,exports.h=exports.createElement=a,exports.Fragment=v,exports.createRef=h,exports.Component=y,exports.cloneElement=F,exports.createContext=R,exports.toChildArray=C,exports._unmount=T,exports.options=exports.isValidElement=void 0;var e,t,n,o,l,r,_,i,u={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return d(e,r,t&&t.key,t&&t.ref,null)}function d(t,n,o,l,r){var _={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(_.__v=_),e.vnode&&e.vnode(_),_}function h(){return{}}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!o++||r!==e.debounceRendering)&&((r=e.debounceRendering)||l)(x)}function x(){for(var e;o=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,o,l,r,_,i;e.__d&&(_=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(o=p({},r)).__v=o,l=N(i,r,o,t.__n,void 0!==i.ownerSVGElement,null,n,null==_?m(r):_),U(n,r),l!=_&&g(r)))})}function b(e,t,n,o,l,r,_,i,c,p){var a,h,y,g,k,x,b,C,w,S=o&&o.__k||s,P=S.length;for(c==u&&(c=null!=_?_[0]:P?m(o,0):null),n.__k=[],a=0;a<t.length;a++)if(null!=(g=n.__k[a]=null==(g=t[a])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?d(null,g,null,null,g):Array.isArray(g)?d(v,{children:g},null,null,null):null!=g.__e||null!=g.__c?d(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(y=S[a])||y&&g.key==y.key&&g.type===y.type)S[a]=void 0;else for(h=0;h<P;h++){if((y=S[h])&&g.key==y.key&&g.type===y.type){S[h]=void 0;break}y=null}if(k=N(e,g,y=y||u,l,r,_,i,c,p),(h=g.ref)&&y.ref!=h&&(C||(C=[]),y.ref&&C.push(y.ref,null,g),C.push(h,g.__c||k,g)),null!=k){if(null==b&&(b=k),w=void 0,void 0!==g.__d)w=g.__d,g.__d=void 0;else if(_==y||k!=c||null==k.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(k),w=null;else{for(x=c,h=0;(x=x.nextSibling)&&h<P;h+=2)if(x==k)break e;e.insertBefore(k,c),w=c}"option"==n.type&&(e.value="")}c=void 0!==w?w:k.nextSibling,"function"==typeof n.type&&(n.__d=c)}else c&&y.__e==c&&c.parentNode!=e&&(c=m(y))}if(n.__e=b,null!=_&&"function"!=typeof n.type)for(a=_.length;a--;)null!=_[a]&&f(_[a]);for(a=P;a--;)null!=S[a]&&T(S[a],S[a]);if(C)for(a=0;a<C.length;a++)D(C[a],C[++a],C[++a])}function C(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?s.concat.apply([],e.map(C)):[e]}function w(e,t,n,o,l){var r;for(r in n)"children"===r||"key"===r||r in t||P(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||P(e,r,t[r],n[r],o)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===c.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var r,_,i,u,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(u in o)n&&u in n||S(r,u,"");if(n)for(s in n)o&&n[s]===o[s]||S(r,s,n[s])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),n?(o||e.addEventListener(t,E,_),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,E,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type](e.event?e.event(t):t)}function N(t,n,o,l,r,_,i,u,s){var c,f,a,d,h,m,g,k,x,C,w,S=n.type;if(void 0!==n.constructor)return null;(c=e.__b)&&c(n);try{e:if("function"==typeof S){if(k=n.props,x=(c=S.contextType)&&l[c.__c],C=c?x?x.props.value:c.__:l,o.__c?g=(f=n.__c=o.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,C):(n.__c=f=new y(k,C),f.constructor=S,f.render=W),x&&x.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,S.getDerivedStateFromProps(k,f.__s))),d=f.props,h=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)||n.__v===o.__v){for(f.props=k,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&i.push(f),c=0;c<n.__k.length;c++)n.__k[c]&&(n.__k[c].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,h,m)})}f.context=C,f.props=k,f.state=f.__s,(c=e.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=t,c=f.render(f.props,f.state,f.context),null!=f.getChildContext&&(l=p(p({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),w=null!=c&&c.type==v&&null==c.key?c.props.children:c,b(t,Array.isArray(w)?w:[w],n,o,l,r,_,i,u,s),f.base=n.__e,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==_&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=A(o.__e,n,o,l,r,_,i,s);(c=e.diffed)&&c(n)}catch(t){n.__v=null,e.__e(t,n,o)}return n.__e}function U(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function A(e,t,n,o,l,r,_,i){var c,p,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=r)for(c=0;c<r.length;c++)if(null!=(p=r[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,r[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null,i=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=r&&(r=s.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!i){if(null!=r)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,i),a?t.__k=[]:(c=t.props.children,b(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&l,r,_,u,i)),i||("value"in v&&void 0!==(c=v.value)&&c!==e.value&&P(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&P(e,"checked",c,h.checked,!1))}return e}function D(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function T(t,n,o){var l,r,_;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||D(l,null,n)),o||"function"==typeof t.type||(o=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(_=0;_<l.length;_++)l[_]&&T(l[_],n,o);null!=r&&f(r)}function W(e,t,n){return this.constructor(e,n)}function L(t,n,o){var l,r,i;e.__&&e.__(t,n),r=(l=o===_)?null:o&&o.__k||n.__k,t=a(v,null,[t]),i=[],N(n,(l?n:o||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,o&&!l?[o]:r?null:n.childNodes.length?s.slice.call(n.childNodes):null,i,o||u,l),U(i,t)}function M(e,t){L(e,t,_)}function F(e,t){var n,o;for(o in t=p(p({},e.props),t),arguments.length>2&&(t.children=s.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return d(e.type,n,t.key||e.key,t.ref||e.ref,null)}function R(e){var t={},n={__c:"__cC"+i++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,l=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(e){l.props.value!==e.value&&o.some(function(t){t.context=e.value,k(t)})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return k(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=v,n=[],o=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=u,i=0;
},{}],"KbTx":[function(require,module,exports) {
"use strict";function e(e,t){return e+t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"zo2T":[function(require,module,exports) {
"use strict";var e=require("preact"),r=u(require("src/sum"));function u(e){return e&&e.__esModule?e:{default:e}}var t=function(){return(0,e.h)("h1",null,"hello world! 1 + 2 = ",(0,r.default)(1,2))};(0,e.render)((0,e.h)(t,null),document.getElementById("root"));
},{"preact":"aSor","src/sum":"KbTx"}]},{},["zo2T"], null)
//# sourceMappingURL=/src.49ed57ec.js.map