var e=globalThis,r={},t={},n=e.parcelRequirec1f2;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirec1f2=n);var a=n.register;a("ds403",function(e,r){var t,a=o(a);function o(e){return e||{}}var i=a.exports={};i.internalCreateIfNotExists=o;var l=l||n("ccQZb");i.Resolver=(t=RegExp("\\[\\d+\\]","gi"),function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var r,n,a,o,i=Object.keys(e);for(r=0;r<i.length;r+=1)o=e[n=i[r]],"fieldName"===(a=function(e){var r=e.lastIndexOf("."),n=e;r>0&&(n=e.substr(r+1));var a="";r>0&&(a=e.substr(0,r+1));var o=a.replace(t,"");return{group:a,groupWithoutArrayIndices:o,name:n}}(n)).name&&"fieldName"!==o&&(e[a.groupWithoutArrayIndices+o]=e[a.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,r={},t=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)(function(e,r,t){var n,a;for(n=0;n<e.length;n+=1)a=e[n],"function"==typeof t&&t(a.name)&&(r[a.name]=a.value)})(l.flattenToArray(arguments[e],3),r,t);return r},this.replaceResolvableFields=function(e,r){var t=e,n=Object.keys(r),a=0,o="",i="";for(a=0;a<n.length;a+=1)i=r[o=n[a]],t=t.replace("{{"+o+"}}",i);return t}})}),a("ccQZb",function(e,r){(($8e2fb4eb18d4597b$var$module||{}).exports={}).flattenToArray=function(e,r){var t=[];return("number"!=typeof r||r<1)&&(r=20),function e(n,a,o){if(!(o>r)&&"function"!=typeof n){if(Object(n)!==n)t.push({name:a,value:n});else if(Array.isArray(n)){var i,l=n.length;for(i=0;i<l;i+=1)e(n[i],a+"["+i+"]",o+1);0===l&&(t[a]=[],t.push({name:a,value:""}))}else{var u,s=!0;for(u in n)s=!1,e(n[u],a?a+"."+u:u,o+1);s&&a&&t.push({name:a,value:""})}}}(e,"",0),t}}),n("ds403");
//# sourceMappingURL=templateResolver.js.map
