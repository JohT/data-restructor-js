parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kBit":[function(require,module,exports) {
"use strict";var e=e||{},r=e.exports={};r.flattenToArray=function(e,r){var a=[];return("number"!=typeof r||r<1)&&(r=20),function e(n,t,u){if(!(u>r||"function"==typeof n))if(Object(n)!==n)a.push({name:t,value:n});else if(Array.isArray(n)){var f,i=n.length;for(f=0;f<i;f+=1)e(n[f],t+"["+f+"]",u+1);0===i&&(a[t]=[],a.push({name:t,value:""}))}else{var o,s=!0;for(o in n)s=!1,e(n[o],t?t+"."+o:o,u+1);s&&t&&a.push({name:t,value:""})}}(e,"",0),a};
},{}],"gEHB":[function(require,module,exports) {
"use strict";var e=e||{},r=e.exports={},t=t||require("../../lib/js/flattenToArray");r.Resolver=function(){var e=new RegExp("\\[\\d+\\]","gi");function r(r){var t=r.lastIndexOf("."),n=r;t>0&&(n=r.substr(t+1));var a="";t>0&&(a=r.substr(0,t+1));var l=a.replace(e,"");return{group:a,groupWithoutArrayIndices:l,name:n}}function n(e,r,t){var n,a;for(n=0;n<e.length;n+=1)a=e[n],"function"==typeof t&&t(a.name)&&(r[a.name]=a.value);return r}return function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var t,n,a,l,i=Object.keys(e);for(t=0;t<i.length;t+=1)n=i[t],l=e[n],"fieldName"===(a=r(n)).name&&"fieldName"!==l&&(e[a.groupWithoutArrayIndices+l]=e[a.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,r={},a=function(e){return 0!==e.indexOf("_")&&e.indexOf("._")<0};for(e=0;e<arguments.length;e+=1)n(t.flattenToArray(arguments[e],3),r,a);return r},this.replaceResolvableFields=function(e,r){var t=e,n=Object.keys(r),a=0,l="",i="";for(a=0;a<n.length;a+=1)i=r[l=n[a]],t=t.replace("{{"+l+"}}",i);return t}}}();
},{"../../lib/js/flattenToArray":"kBit"}]},{},["gEHB"], null)
//# sourceMappingURL=/templateResolver.js.map