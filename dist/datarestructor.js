var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequirec1f2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirec1f2=r),r.register("7HmuL",(function(e,t){"use strict";var i=i||{};(i.exports={}).flattenToArray=function(e,t){var i=[];return("number"!=typeof t||t<1)&&(t=20),function e(r,n,o){if(!(o>t||"function"==typeof r))if(Object(r)!==r)i.push({name:n,value:r});else if(Array.isArray(r)){var a,s=r.length;for(a=0;a<s;a+=1)e(r[a],n+"["+a+"]",o+1);0===s&&(i[n]=[],i.push({name:n,value:""}))}else{var u,c=!0;for(u in r)c=!1,e(r[u],n?n+"."+u:u,o+1);c&&n&&i.push({name:n,value:""})}}(e,"",0),i}})),r.register("8ZIyB",(function(e,t){"use strict";var i=n(i);function n(e){return e||{}}var o=i.exports={};o.internalCreateIfNotExists=n;var a=a||r("7HmuL");o.Resolver=function(){var e=new RegExp("\\[\\d+\\]","gi");function t(t){var i=t.lastIndexOf("."),r=t;i>0&&(r=t.substr(i+1));var n="";i>0&&(n=t.substr(0,i+1));var o=n.replace(e,"");return{group:n,groupWithoutArrayIndices:o,name:r}}function i(e,t,i){var r,n;for(r=0;r<e.length;r+=1)n=e[r],"function"==typeof i&&i(n.name)&&(t[n.name]=n.value);return t}return function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var i,r,n,o,a=Object.keys(e);for(i=0;i<a.length;i+=1)o=e[r=a[i]],"fieldName"===(n=t(r)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,t={},r=function(e){return 0!==e.indexOf("_")&&e.indexOf("._")<0};for(e=0;e<arguments.length;e+=1)i(a.flattenToArray(arguments[e],3),t,r);return t},this.replaceResolvableFields=function(e,t){var i=e,r=Object.keys(t),n=0,o="",a="";for(n=0;n<r.length;n+=1)a=t[o=r[n]],i=i.replace("{{"+o+"}}",a);return i}}}()})),r.register("d63jw",(function(e,t){"use strict";var i=r(i);function r(e){return e||{}}var n=i.exports={};n.internalCreateIfNotExists=r,n.DescribedDataFieldBuilder=function(){function e(e,t){return function(e){return"string"==typeof e&&null!==e&&""!==e}(e)?e:t}function t(e,t){return null==e?t:e}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},this.category=function(t){return this.describedField.category=e(t,""),this},this.type=function(t){return this.describedField.type=e(t,""),this},this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},this.image=function(t){return this.describedField.image=e(t,""),this},this.index=function(e){return this.describedField.index=t(e,[]),this},this.groupNames=function(e){return this.describedField.groupNames=t(e,[]),this},this.displayName=function(t){return this.describedField.displayName=e(t,""),this},this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},this.value=function(e){return this.describedField.value=e,this},this.build=function(){return this.describedField}}}(),n.copyWithoutGroups=function(e){return(new n.DescribedDataFieldBuilder).fromDescribedDataField(e).groupNames([]).build()},n.DescribedDataFieldGroup=function(e){this.dataField=e,this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},this.addGroupEntries=function(e,t){if(!e||0===e.length)return this;if(!t||0===t.length)return this;var i,r;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),i=0;i<t.length;i+=1)r=t[i],this.dataField[e].push(r);return this}}}));var n=o(n);function o(e){return e||{}}var a=n.exports={};a.internalCreateIfNotExists=o;var s=s||r("7HmuL"),u=u||r("8ZIyB"),c=c||r("d63jw");a.PropertyStructureDescriptionBuilder=function(){"use strict";function e(e,r){if(o(e))return function(){return e};if(r.propertyPatternTemplateMode){var n=r.propertyPattern;return a=n,function(e){var r=i(a,"{{fieldName}}").exec(e);return r&&""!=r[1]?r[1]:t(e)}}var a;return function(e){return t(e)}}function t(e){var t=new RegExp("(\\w+)$","gi"),i=e.match(t);return null!=i?i[0]:e}function i(e,t){var i=r(e);return"string"==typeof t&&(t=r(t)),i="^"+(i=i.replace(t,"([-\\w]+)")),new RegExp(i,"i")}function r(e){var t=new RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)||(this.description.getDisplayNameForPropertyName=(i=this.description.getDisplayNameForPropertyName,function(e){var t=i(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=function(e){return function(t){return function(e){return e.length>1?e.charAt(0).toUpperCase()+e.slice(1):e}(e(t))}}(this.description.getDisplayNameForPropertyName)),this;var i},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){var e,t;return this.description.matchesPropertyName=(e=this.description,o(t=e.propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=(r=t,n=new RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi"),i(r,n)).exec(e);var r,n}:function(e){return e===t}:function(){return!1}),null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description}}}(),a.DescribedEntryCreator=function(){"use strict";var e=new RegExp("\\[\\d+\\]","gi");return function(t,i){var r,n,o=(r=t.name,n=new RegExp("\\[(\\d+)\\]","gi"),function(e,t){var i,r="",n=[];do{(i=t.exec(e))&&(r.length>0&&(r+="."),r+=i[1],n.push(parseInt(i[1])))}while(i);return{pointDelimited:r,numberArray:n}}(r,n)),a=t.name.replace(e,""),s=new u.Resolver(this);this.category=i.category,this.type=i.type,this.abbreviation=i.abbreviation,this.image=i.image,this.index=o.numberArray,this.displayName=i.getDisplayNameForPropertyName(a),this.fieldName=i.getFieldNameForPropertyName(a),this.value=t.value,this.groupNames=[],this._isMatchingIndex=0==o.pointDelimited.indexOf(i.indexStartsWith),this._description=i,this._identifier={index:o.pointDelimited,propertyNameWithArrayIndices:t.name,propertyNameWithoutArrayIndices:a,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=s.replaceResolvableFields(i.groupPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=s.replaceResolvableFields(i.groupDestinationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=s.replaceResolvableFields(i.deduplicationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var i,r;for(this[e]||(this.groupNames.push(e),this[e]=[]),i=0;i<t.length;i+=1)r=t[i],this[e].push(r)}}}(),a.Transform=function(){"use strict";function e(e,t,i){var r,n,o,a=function(e,t){for(var i=new Object,r=0;r<e.length;r++){var n=e[r];i[t(n)]=n}return i}(t,i),s=[];for(r=0;r<e.length;r+=1)null!=(o=i(n=e[r]))&&""!==o&&null!=a[o]||s.push(n);for(r=0;r<t.length;r+=1)n=t[r],s.push(n);return s}function t(t,i){if(null==t||0==t.length)return i;return e(t,i,(function(e){return e._identifier.deduplicationId}))}function i(e,t){var i=new RegExp("\\[\\d+\\]","gi"),r=[];return e.filter((function(e){var n=e.name.replace(i,"");if(t.matchesPropertyName(n)){var o=new a.DescribedEntryCreator(e,t);o._isMatchingIndex&&r.push(o)}})),r}function r(e,t){var i=(new c.DescribedDataFieldBuilder).category(e.category).type(e.type).abbreviation(e.abbreviation).image(e.image).index(e.index).displayName(e.displayName).fieldName(e.fieldName).value(e.value).build();if(t.recursionDepth>t.config.maxRecursionDepth)return i;var o=null,a="",s=new c.DescribedDataFieldGroup(i);return function(e,t){var i,r,n;for(i=0;i<e.groupNames.length;i+=1)for(n=e.groupNames[i],r=0;r<e[n].length;r+=1)t(n,e[n][r],e[n])}(e,(function(e,i,u){t.groupToSkip!==e?(a="",t.recursionDepth>=t.config.removeDuplicationAboveRecursionDepth&&(a=function(e,t,i){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;++r)if(!i(e[r],t[r]))return!1;return!0}(i[e],u,n)?e:""),o={recursionDepth:t.recursionDepth+1,config:t.config,groupToSkip:a},s.addGroupEntry(e,r(i,o))):t.config.debugMode&&console.log("Removed duplicate group "+e+" at recursion depth "+t.recursionDepth)})),i}function n(e,t){return o(e.category)===o(t.category)&&o(e.type)===o(t.type)&&e.fieldName===t.fieldName&&e.value===t.value}function o(e){return function(e,t){return void 0!==e&&e?e:t}(e,"")}return function(e){this.descriptions=e,this.config={debugMode:!1,maxRecursionDepth:8,removeDuplicationAboveRecursionDepth:1},this.enableDebugMode=function(){return this.config.debugMode=!0,this},this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},this.processJson=function(e){return function(e,n,o){var a=s.flattenToArray(e);a=function(e){var t=new RegExp("\\[\\d+\\]$","gi"),i=[],r="",n="";return e.filter((function(e){if(!e.name.match(t))return""!==r&&(i.push({name:r+"_comma_separated_values",value:n}),r=""),void i.push(e);var o=e.name.replace(t,"");r===o?n+=", "+e.value:(""!==r&&(i.push({name:r+"_comma_separated_values",value:n}),r=""),r=o,n=e.value),i.push(e)})),i}(a),o.debugMode&&(console.log("flattened data with array values:"),console.log(a));var u,c=[];for(u=0;u<n.length;u+=1)c=t(c,i(a,n[u]));a=c,o.debugMode&&(console.log("describedData data:"),console.log(a));a=function(e){return function(e,t,i){for(var r=new Object,n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=i(o);null!=s&&""!==s&&(r[a]||(r[a]=o),r[a].addGroupEntry(s,o))}}return r}(e,(function(e){return e._identifier.groupId}),(function(e){return e._description.groupName}))}(a),o.debugMode&&(console.log("grouped describedData data:"),console.log(a));a=function(e){for(var t=Object.keys(e),i=[],r=0;r<t.length;r++){var n=t[r],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),i.push(n)}}}for(r=0;r<i.length;r+=1){delete e[i[r]]}return e}(a),o.debugMode&&(console.log("moved grouped describedData data:"),console.log(a));a=function(e,t){var i,n,o=[];for(i=0;i<e.length;i+=1)n=e[i],o.push(r(n,{recursionDepth:0,config:t,groupToSkip:""}));return o}(a=function(e){for(var t=[],i=Object.keys(e),r=0;r<i.length;r++){var n=e[i[r]];t.push(n)}return t}(a),o),o.debugMode&&(console.log("transformed result:"),console.log(a));return a}(e,this.descriptions,this.config)}}}(),a.Restructor={},a.Restructor.processJsonUsingDescriptions=function(e,t,i){var r=new a.Transform(t);return i&&r.enableDebugMode(),r.processJson(e)};
//# sourceMappingURL=datarestructor.js.map
