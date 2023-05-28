"use strict";var e,t,r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=i.parcelRequirec1f2;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},i.parcelRequirec1f2=a),a.register("7HmuL",function(e,t){var r=r||{};(r.exports={}).flattenToArray=function(e,t){var r=[];return("number"!=typeof t||t<1)&&(t=20),function e(i,n,o){if(!(o>t)&&"function"!=typeof i){if(Object(i)!==i)r.push({name:n,value:i});else if(Array.isArray(i)){var a,s=i.length;for(a=0;a<s;a+=1)e(i[a],n+"["+a+"]",o+1);0===s&&(r[n]=[],r.push({name:n,value:""}))}else{var u,l=!0;for(u in i)l=!1,e(i[u],n?n+"."+u:u,o+1);l&&n&&r.push({name:n,value:""})}}}(e,"",0),r}}),a.register("8ZIyB",function(e,t){var r,i=n(i);function n(e){return e||{}}var o=i.exports={};o.internalCreateIfNotExists=n;var s=s||a("7HmuL");o.Resolver=(r=RegExp("\\[\\d+\\]","gi"),function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var t,i,n,o,a=Object.keys(e);for(t=0;t<a.length;t+=1)o=e[i=a[t]],"fieldName"===(n=function(e){var t=e.lastIndexOf("."),i=e;t>0&&(i=e.substr(t+1));var n="";t>0&&(n=e.substr(0,t+1));var o=n.replace(r,"");return{group:n,groupWithoutArrayIndices:o,name:i}}(i)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,t={},r=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)(function(e,t,r){var i,n;for(i=0;i<e.length;i+=1)n=e[i],"function"==typeof r&&r(n.name)&&(t[n.name]=n.value)})(s.flattenToArray(arguments[e],3),t,r);return t},this.replaceResolvableFields=function(e,t){var r=e,i=Object.keys(t),n=0,o="",a="";for(n=0;n<i.length;n+=1)a=t[o=i[n]],r=r.replace("{{"+o+"}}",a);return r}})}),a.register("d63jw",function(e,t){var r=i(r);function i(e){return e||{}}var n=r.exports={};n.internalCreateIfNotExists=i,n.DescribedDataFieldBuilder=function(){function e(e,t){return"string"==typeof e&&null!==e&&""!==e?e:t}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},this.category=function(t){return this.describedField.category=e(t,""),this},this.type=function(t){return this.describedField.type=e(t,""),this},this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},this.image=function(t){return this.describedField.image=e(t,""),this},this.index=function(e){return this.describedField.index=null==e?[]:e,this},this.groupNames=function(e){return this.describedField.groupNames=null==e?[]:e,this},this.displayName=function(t){return this.describedField.displayName=e(t,""),this},this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},this.value=function(e){return this.describedField.value=e,this},this.build=function(){return this.describedField}}}(),n.copyWithoutGroups=function(e){return new n.DescribedDataFieldBuilder().fromDescribedDataField(e).groupNames([]).build()},n.DescribedDataFieldGroup=function(e){this.dataField=e,this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},this.addGroupEntries=function(e,t){var r,i;if(!e||0===e.length||!t||0===t.length)return this;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),r=0;r<t.length;r+=1)i=t[r],this.dataField[e].push(i);return this}}}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.filter||(Array.prototype.filter=function(e,t){if(!(("Function"==typeof e||"function"==typeof e)&&this))throw TypeError();var r,i=this.length>>>0,n=Array(i),o=0,a=-1;if(void 0===t)for(;++a!==i;)a in this&&(r=this[a],e(this[a],a,this)&&(n[o++]=r));else for(;++a!==i;)a in this&&(r=this[a],e.call(t,this[a],a,this)&&(n[o++]=r));return n.length=o,n}),Array.prototype.indexOf||(Array.prototype.indexOf=(e=Object,t=Math.max,r=Math.min,function(i,n){if(this===null||void 0===this)throw TypeError("Array.prototype.indexOf called on null or undefined");var o=e(this),a=o.length>>>0,s=r(0|n,a);if(s<0)s=t(0,a+s);else if(s>=a)return -1;if(void 0===i){for(;s!==a;++s)if(void 0===o[s]&&s in o)return s}else if(i!=i){for(;s!==a;++s)if(o[s]!=o[s])return s}else for(;s!==a;++s)if(o[s]===i)return s;return -1})),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r});var s=u(s);function u(e){return e||{}}var l=s.exports={};l.internalCreateIfNotExists=u;var p=p||a("7HmuL"),d=d||a("8ZIyB"),c=c||a("d63jw");l.PropertyStructureDescriptionBuilder=function(){function e(e,i){var n;return o(e)?function(){return e}:i.propertyPatternTemplateMode?(n=i.propertyPattern,function(e){var i=r(n,"{{fieldName}}").exec(e);return i&&""!=i[1]?i[1]:t(e)}):function(e){return t(e)}}function t(e){var t=RegExp("(\\w+)$","gi"),r=e.match(t);return null!=r?r[0]:e}function r(e,t){var r=i(e);return"string"==typeof t&&(t=i(t)),RegExp(r="^"+(r=r.replace(t,"([-\\w]+)")),"i")}function i(e){var t=RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){var r,i;return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)||(this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t=r(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=(i=this.description.getDisplayNameForPropertyName,function(e){var t;return(t=i(e)).length>1?t.charAt(0).toUpperCase()+t.slice(1):t})),this},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){var e,t;return this.description.matchesPropertyName=o(t=(e=this.description).propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=r(t,RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi")).exec(e)}:function(e){return e===t}:function(){return!1},null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description}}}(),l.DescribedEntryCreator=function(){var e=RegExp("\\[\\d+\\]","gi");return function(t,r){var i=function(e,t){var r,i="",n=[];do(r=t.exec(e))&&(i.length>0&&(i+="."),i+=r[1],n.push(parseInt(r[1])));while(r)return{pointDelimited:i,numberArray:n}}(t.name,RegExp("\\[(\\d+)\\]","gi")),n=t.name.replace(e,""),o=new d.Resolver(this);this.category=r.category,this.type=r.type,this.abbreviation=r.abbreviation,this.image=r.image,this.index=i.numberArray,this.displayName=r.getDisplayNameForPropertyName(n),this.fieldName=r.getFieldNameForPropertyName(n),this.value=t.value,this.groupNames=[],this._isMatchingIndex=0==i.pointDelimited.indexOf(r.indexStartsWith),this._description=r,this._identifier={index:i.pointDelimited,propertyNameWithArrayIndices:t.name,propertyNameWithoutArrayIndices:n,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=o.replaceResolvableFields(r.groupPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=o.replaceResolvableFields(r.groupDestinationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=o.replaceResolvableFields(r.deduplicationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var r,i;for(this[e]||(this.groupNames.push(e),this[e]=[]),r=0;r<t.length;r+=1)i=t[r],this[e].push(i)}}}(),l.Transform=function(){function e(e,r){var i,n,o,a;return t(e.category,"")===t(r.category,"")&&t(e.type,"")===t(r.type,"")&&e.fieldName===r.fieldName&&e.value===r.value}function t(e,t){return void 0!==e&&e?e:t}return function(t){this.descriptions=t,this.config={debugMode:!1,maxRecursionDepth:8,removeDuplicationAboveRecursionDepth:1},this.enableDebugMode=function(){return this.config.debugMode=!0,this},this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},this.processJson=function(t){return function(t,r,i){var n,o,a,s,u,d,h,f,g=p.flattenToArray(t);n=g,o=RegExp("\\[\\d+\\]$","gi"),a=[],s="",u="",n.filter(function(e){if(!e.name.match(o)){""!==s&&(a.push({name:s+"_comma_separated_values",value:u}),s=""),a.push(e);return}var t=e.name.replace(o,"");s===t?u+=", "+e.value:(""!==s&&(a.push({name:s+"_comma_separated_values",value:u}),s=""),s=t,u=e.value),a.push(e)}),g=a,i.debugMode&&(console.log("flattened data with array values:"),console.log(g));var m=[];for(h=0;h<r.length;h+=1)f=function(e,t){var r=RegExp("\\[\\d+\\]","gi"),i=[];return e.filter(function(e){var n=e.name.replace(r,"");if(t.matchesPropertyName(n)){var o=new l.DescribedEntryCreator(e,t);o._isMatchingIndex&&i.push(o)}}),i}(g,r[h]),m=null==(d=m)||0==d.length?f:function(e,t,r){var i,n,o,a=function(e,t){for(var r={},i=0;i<e.length;i++){var n=e[i];r[t(n)]=n}return r}(t,r),s=[];for(i=0;i<e.length;i+=1)(null==(o=r(n=e[i]))||""===o||null==a[o])&&s.push(n);for(i=0;i<t.length;i+=1)s.push(n=t[i]);return s}(d,f,function(e){return e._identifier.deduplicationId});return g=m,i.debugMode&&(console.log("describedData data:"),console.log(g)),g=function(e,t,r){for(var i={},n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=r(o);null!=s&&""!==s&&(i[a]||(i[a]=o),i[a].addGroupEntry(s,o))}}return i}(g,function(e){return e._identifier.groupId},function(e){return e._description.groupName}),i.debugMode&&(console.log("grouped describedData data:"),console.log(g)),g=function(e){for(var t=Object.keys(e),r=[],i=0;i<t.length;i++){var n=t[i],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),r.push(n)}}}for(i=0;i<r.length;i+=1){var u=r[i];delete e[u]}return e}(g),i.debugMode&&(console.log("moved grouped describedData data:"),console.log(g)),g=function(t,r){var i,n=[];for(i=0;i<t.length;i+=1)n.push(function t(r,i){var n=new c.DescribedDataFieldBuilder().category(r.category).type(r.type).abbreviation(r.abbreviation).image(r.image).index(r.index).displayName(r.displayName).fieldName(r.fieldName).value(r.value).build();if(i.recursionDepth>i.config.maxRecursionDepth)return n;var o=null,a="",s=new c.DescribedDataFieldGroup(n);return function(e,t){var r,i,n,o;for(r=0;r<e.groupNames.length;r+=1)for(i=0,n=e.groupNames[r];i<e[n].length;i+=1)o=e[n][i],t(n,o,e[n])}(r,function(r,n,u){if(i.groupToSkip===r){i.config.debugMode&&console.log("Removed duplicate group "+r+" at recursion depth "+i.recursionDepth);return}a="",i.recursionDepth>=i.config.removeDuplicationAboveRecursionDepth&&(a=!function(e,t,r){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!r(e[i],t[i]))return!1;return!0}(n[r],u,e)?"":r),o={recursionDepth:i.recursionDepth+1,config:i.config,groupToSkip:a},s.addGroupEntry(r,t(n,o))}),n}(t[i],{recursionDepth:0,config:r,groupToSkip:""}));return n}(g=function(e){for(var t=[],r=Object.keys(e),i=0;i<r.length;i++){var n=e[r[i]];t.push(n)}return t}(g),i),i.debugMode&&(console.log("transformed result:"),console.log(g)),g}(t,this.descriptions,this.config)}}}(),l.Restructor={},l.Restructor.processJsonUsingDescriptions=function(e,t,r){var i=new l.Transform(t);return r&&i.enableDebugMode(),i.processJson(e)},module.exports={datarestructor:{}};
//# sourceMappingURL=datarestructor-ie.js.map
