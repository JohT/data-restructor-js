var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequirec1f2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec1f2=i),i.register("7HmuL",(function(e,t){"use strict";var r=r||{};(r.exports={}).flattenToArray=function(e,t){var r=[];return("number"!=typeof t||t<1)&&(t=20),function e(i,n,o){if(!(o>t||"function"==typeof i))if(Object(i)!==i)r.push({name:n,value:i});else if(Array.isArray(i)){var a,s=i.length;for(a=0;a<s;a+=1)e(i[a],n+"["+a+"]",o+1);0===s&&(r[n]=[],r.push({name:n,value:""}))}else{var u,c=!0;for(u in i)c=!1,e(i[u],n?n+"."+u:u,o+1);c&&n&&r.push({name:n,value:""})}}(e,"",0),r}})),i.register("8ZIyB",(function(e,t){"use strict";var r=n(r);function n(e){return e||{}}var o=r.exports={};o.internalCreateIfNotExists=n;var a=a||i("7HmuL");o.Resolver=function(){var e=new RegExp("\\[\\d+\\]","gi");function t(t){var r=t.lastIndexOf("."),i=t;r>0&&(i=t.substr(r+1));var n="";r>0&&(n=t.substr(0,r+1));var o=n.replace(e,"");return{group:n,groupWithoutArrayIndices:o,name:i}}function r(e,t,r){var i,n;for(i=0;i<e.length;i+=1)n=e[i],"function"==typeof r&&r(n.name)&&(t[n.name]=n.value);return t}return function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var r,i,n,o,a=Object.keys(e);for(r=0;r<a.length;r+=1)o=e[i=a[r]],"fieldName"===(n=t(i)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,t={},i=function(e){return 0!==e.indexOf("_")&&e.indexOf("._")<0};for(e=0;e<arguments.length;e+=1)r(a.flattenToArray(arguments[e],3),t,i);return t},this.replaceResolvableFields=function(e,t){var r=e,i=Object.keys(t),n=0,o="",a="";for(n=0;n<i.length;n+=1)a=t[o=i[n]],r=r.replace("{{"+o+"}}",a);return r}}}()})),i.register("d63jw",(function(e,t){"use strict";var r=i(r);function i(e){return e||{}}var n=r.exports={};n.internalCreateIfNotExists=i,n.DescribedDataFieldBuilder=function(){function e(e,t){return function(e){return"string"==typeof e&&null!==e&&""!==e}(e)?e:t}function t(e,t){return null==e?t:e}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},this.category=function(t){return this.describedField.category=e(t,""),this},this.type=function(t){return this.describedField.type=e(t,""),this},this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},this.image=function(t){return this.describedField.image=e(t,""),this},this.index=function(e){return this.describedField.index=t(e,[]),this},this.groupNames=function(e){return this.describedField.groupNames=t(e,[]),this},this.displayName=function(t){return this.describedField.displayName=e(t,""),this},this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},this.value=function(e){return this.describedField.value=e,this},this.build=function(){return this.describedField}}}(),n.copyWithoutGroups=function(e){return(new n.DescribedDataFieldBuilder).fromDescribedDataField(e).groupNames([]).build()},n.DescribedDataFieldGroup=function(e){this.dataField=e,this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},this.addGroupEntries=function(e,t){if(!e||0===e.length)return this;if(!t||0===t.length)return this;var r,i;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),r=0;r<t.length;r+=1)i=t[r],this.dataField[e].push(i);return this}}})),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.filter||(Array.prototype.filter=function(e,t){"use strict";if("Function"!=typeof e&&"function"!=typeof e||!this)throw new TypeError;var r,i=this.length>>>0,n=new Array(i),o=this,a=0,s=-1;if(void 0===t)for(;++s!==i;)s in this&&(r=o[s],e(o[s],s,o)&&(n[a++]=r));else for(;++s!==i;)s in this&&(r=o[s],e.call(t,o[s],s,o)&&(n[a++]=r));return n.length=a,n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t,r){"use strict";return function(i,n){if(null==this)throw TypeError("Array.prototype.indexOf called on null or undefined");var o=e(this),a=o.length>>>0,s=r(0|n,a);if(s<0)s=t(0,a+s);else if(s>=a)return-1;if(void 0===i){for(;s!==a;++s)if(void 0===o[s]&&s in o)return s}else if(i!=i){for(;s!==a;++s)if(o[s]!=o[s])return s}else for(;s!==a;++s)if(o[s]===i)return s;return-1}}(Object,Math.max,Math.min)),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw new TypeError("Object.keys called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r});var n=o(n);function o(e){return e||{}}var a=n.exports={};a.internalCreateIfNotExists=o;var s=s||i("7HmuL"),u=u||i("8ZIyB"),c=c||i("d63jw");a.PropertyStructureDescriptionBuilder=function(){"use strict";function e(e,i){if(o(e))return function(){return e};if(i.propertyPatternTemplateMode){var n=i.propertyPattern;return a=n,function(e){var i=r(a,"{{fieldName}}").exec(e);return i&&""!=i[1]?i[1]:t(e)}}var a;return function(e){return t(e)}}function t(e){var t=new RegExp("(\\w+)$","gi"),r=e.match(t);return null!=r?r[0]:e}function r(e,t){var r=i(e);return"string"==typeof t&&(t=i(t)),r="^"+(r=r.replace(t,"([-\\w]+)")),new RegExp(r,"i")}function i(e){var t=new RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)||(this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t=r(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=function(e){return function(t){return function(e){return e.length>1?e.charAt(0).toUpperCase()+e.slice(1):e}(e(t))}}(this.description.getDisplayNameForPropertyName)),this;var r},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){var e,t;return this.description.matchesPropertyName=(e=this.description,o(t=e.propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=(i=t,n=new RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi"),r(i,n)).exec(e);var i,n}:function(e){return e===t}:function(){return!1}),null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description}}}(),a.DescribedEntryCreator=function(){"use strict";var e=new RegExp("\\[\\d+\\]","gi");return function(t,r){var i,n,o=(i=t.name,n=new RegExp("\\[(\\d+)\\]","gi"),function(e,t){var r,i="",n=[];do{(r=t.exec(e))&&(i.length>0&&(i+="."),i+=r[1],n.push(parseInt(r[1])))}while(r);return{pointDelimited:i,numberArray:n}}(i,n)),a=t.name.replace(e,""),s=new u.Resolver(this);this.category=r.category,this.type=r.type,this.abbreviation=r.abbreviation,this.image=r.image,this.index=o.numberArray,this.displayName=r.getDisplayNameForPropertyName(a),this.fieldName=r.getFieldNameForPropertyName(a),this.value=t.value,this.groupNames=[],this._isMatchingIndex=0==o.pointDelimited.indexOf(r.indexStartsWith),this._description=r,this._identifier={index:o.pointDelimited,propertyNameWithArrayIndices:t.name,propertyNameWithoutArrayIndices:a,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=s.replaceResolvableFields(r.groupPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=s.replaceResolvableFields(r.groupDestinationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=s.replaceResolvableFields(r.deduplicationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var r,i;for(this[e]||(this.groupNames.push(e),this[e]=[]),r=0;r<t.length;r+=1)i=t[r],this[e].push(i)}}}(),a.Transform=function(){"use strict";function e(e,t,r){var i,n,o,a=function(e,t){for(var r=new Object,i=0;i<e.length;i++){var n=e[i];r[t(n)]=n}return r}(t,r),s=[];for(i=0;i<e.length;i+=1)null!=(o=r(n=e[i]))&&""!==o&&null!=a[o]||s.push(n);for(i=0;i<t.length;i+=1)n=t[i],s.push(n);return s}function t(t,r){if(null==t||0==t.length)return r;return e(t,r,(function(e){return e._identifier.deduplicationId}))}function r(e,t){var r=new RegExp("\\[\\d+\\]","gi"),i=[];return e.filter((function(e){var n=e.name.replace(r,"");if(t.matchesPropertyName(n)){var o=new a.DescribedEntryCreator(e,t);o._isMatchingIndex&&i.push(o)}})),i}function i(e,t){var r=(new c.DescribedDataFieldBuilder).category(e.category).type(e.type).abbreviation(e.abbreviation).image(e.image).index(e.index).displayName(e.displayName).fieldName(e.fieldName).value(e.value).build();if(t.recursionDepth>t.config.maxRecursionDepth)return r;var o=null,a="",s=new c.DescribedDataFieldGroup(r);return function(e,t){var r,i,n;for(r=0;r<e.groupNames.length;r+=1)for(n=e.groupNames[r],i=0;i<e[n].length;i+=1)t(n,e[n][i],e[n])}(e,(function(e,r,u){t.groupToSkip!==e?(a="",t.recursionDepth>=t.config.removeDuplicationAboveRecursionDepth&&(a=function(e,t,r){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!r(e[i],t[i]))return!1;return!0}(r[e],u,n)?e:""),o={recursionDepth:t.recursionDepth+1,config:t.config,groupToSkip:a},s.addGroupEntry(e,i(r,o))):t.config.debugMode&&console.log("Removed duplicate group "+e+" at recursion depth "+t.recursionDepth)})),r}function n(e,t){return o(e.category)===o(t.category)&&o(e.type)===o(t.type)&&e.fieldName===t.fieldName&&e.value===t.value}function o(e){return function(e,t){return void 0!==e&&e?e:t}(e,"")}return function(e){this.descriptions=e,this.config={debugMode:!1,maxRecursionDepth:8,removeDuplicationAboveRecursionDepth:1},this.enableDebugMode=function(){return this.config.debugMode=!0,this},this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},this.processJson=function(e){return function(e,n,o){var a=s.flattenToArray(e);a=function(e){var t=new RegExp("\\[\\d+\\]$","gi"),r=[],i="",n="";return e.filter((function(e){if(!e.name.match(t))return""!==i&&(r.push({name:i+"_comma_separated_values",value:n}),i=""),void r.push(e);var o=e.name.replace(t,"");i===o?n+=", "+e.value:(""!==i&&(r.push({name:i+"_comma_separated_values",value:n}),i=""),i=o,n=e.value),r.push(e)})),r}(a),o.debugMode&&(console.log("flattened data with array values:"),console.log(a));var u,c=[];for(u=0;u<n.length;u+=1)c=t(c,r(a,n[u]));a=c,o.debugMode&&(console.log("describedData data:"),console.log(a));a=function(e){return function(e,t,r){for(var i=new Object,n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=r(o);null!=s&&""!==s&&(i[a]||(i[a]=o),i[a].addGroupEntry(s,o))}}return i}(e,(function(e){return e._identifier.groupId}),(function(e){return e._description.groupName}))}(a),o.debugMode&&(console.log("grouped describedData data:"),console.log(a));a=function(e){for(var t=Object.keys(e),r=[],i=0;i<t.length;i++){var n=t[i],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),r.push(n)}}}for(i=0;i<r.length;i+=1){delete e[r[i]]}return e}(a),o.debugMode&&(console.log("moved grouped describedData data:"),console.log(a));a=function(e,t){var r,n,o=[];for(r=0;r<e.length;r+=1)n=e[r],o.push(i(n,{recursionDepth:0,config:t,groupToSkip:""}));return o}(a=function(e){for(var t=[],r=Object.keys(e),i=0;i<r.length;i++){var n=e[r[i]];t.push(n)}return t}(a),o),o.debugMode&&(console.log("transformed result:"),console.log(a));return a}(e,this.descriptions,this.config)}}}(),a.Restructor={},a.Restructor.processJsonUsingDescriptions=function(e,t,r){var i=new a.Transform(t);return r&&i.enableDebugMode(),i.processJson(e)},module.exports={datarestructor:{}};
//# sourceMappingURL=datarestructor-ie.js.map
