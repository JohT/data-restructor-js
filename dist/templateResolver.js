var $parcel$global=globalThis,$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequirec1f2;null==parcelRequire&&((parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var r=$parcel$inits[e];delete $parcel$inits[e];var t={id:e,exports:{}};return $parcel$modules[e]=t,r.call(t.exports,t,t.exports),t.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){$parcel$inits[e]=r},$parcel$global.parcelRequirec1f2=parcelRequire);var parcelRegister=parcelRequire.register;parcelRegister("ds403",function(e,r){"use strict";var t,a=l(a);function l(e){return e||{}}var n=a.exports={};n.internalCreateIfNotExists=l;var i=i||parcelRequire("ccQZb");t=RegExp("\\[\\d+\\]","gi"),n.Resolver=function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var r,a,l,n,i=Object.keys(e);for(r=0;r<i.length;r+=1)n=e[a=i[r]],"fieldName"===(l=function(e){var r=e.lastIndexOf("."),a=e;r>0&&(a=e.substr(r+1));var l="";r>0&&(l=e.substr(0,r+1));var n=l.replace(t,"");return{group:l,groupWithoutArrayIndices:n,name:a}}(a)).name&&"fieldName"!==n&&(e[l.groupWithoutArrayIndices+n]=e[l.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,r={},t=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)(function(e,r,t){var a,l;for(a=0;a<e.length;a+=1)l=e[a],"function"==typeof t&&t(l.name)&&(r[l.name]=l.value)})(i.flattenToArray(arguments[e],3),r,t);return r},this.replaceResolvableFields=function(e,r){var t=e,a=Object.keys(r),l=0,n="",i="";for(l=0;l<a.length;l+=1)i=r[n=a[l]],t=t.replace("{{"+n+"}}",i);return t}}}),parcelRegister("ccQZb",function(e,r){"use strict";var t=t||{};(t.exports={}).flattenToArray=function(e,r){var t=[];return("number"!=typeof r||r<1)&&(r=20),function e(a,l,n){if(!(n>r)&&"function"!=typeof a){if(Object(a)!==a)t.push({name:l,value:a});else if(Array.isArray(a)){var i,c=a.length;for(i=0;i<c;i+=1)e(a[i],l+"["+i+"]",n+1);0===c&&(t[l]=[],t.push({name:l,value:""}))}else{var s,o=!0;for(s in a)o=!1,e(a[s],l?l+"."+s:s,n+1);o&&l&&t.push({name:l,value:""})}}}(e,"",0),t}}),parcelRequire("ds403");
//# sourceMappingURL=templateResolver.js.map
