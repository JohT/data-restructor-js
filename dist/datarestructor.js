parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kBit":[function(require,module,exports) {
"use strict";var e=e||{},r=e.exports={};r.flattenToArray=function(e,r){var a=[];return("number"!=typeof r||r<1)&&(r=20),function e(n,t,u){if(!(u>r||"function"==typeof n))if(Object(n)!==n)a.push({name:t,value:n});else if(Array.isArray(n)){var f,i=n.length;for(f=0;f<i;f+=1)e(n[f],t+"["+f+"]",u+1);0===i&&(a[t]=[],a.push({name:t,value:""}))}else{var o,s=!0;for(o in n)s=!1,e(n[o],t?t+"."+o:o,u+1);s&&t&&a.push({name:t,value:""})}}(e,"",0),a};
},{}],"gEHB":[function(require,module,exports) {
"use strict";var e=r(e);function r(e){return e||{}}var t=e.exports={};t.internalCreateIfNotExists=r;var n=n||require("../../lib/js/flattenToArray");t.Resolver=function(){var e=new RegExp("\\[\\d+\\]","gi");function r(r){var t=r.lastIndexOf("."),n=r;t>0&&(n=r.substr(t+1));var a="";t>0&&(a=r.substr(0,t+1));var i=a.replace(e,"");return{group:a,groupWithoutArrayIndices:i,name:n}}function t(e,r,t){var n,a;for(n=0;n<e.length;n+=1)a=e[n],"function"==typeof t&&t(a.name)&&(r[a.name]=a.value);return r}return function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var t,n,a,i,l=Object.keys(e);for(t=0;t<l.length;t+=1)n=l[t],i=e[n],"fieldName"===(a=r(n)).name&&"fieldName"!==i&&(e[a.groupWithoutArrayIndices+i]=e[a.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,r={},a=function(e){return 0!==e.indexOf("_")&&e.indexOf("._")<0};for(e=0;e<arguments.length;e+=1)t(n.flattenToArray(arguments[e],3),r,a);return r},this.replaceResolvableFields=function(e,r){var t=e,n=Object.keys(r),a=0,i="",l="";for(a=0;a<n.length;a+=1)l=r[i=n[a]],t=t.replace("{{"+i+"}}",l);return t}}}();
},{"../../lib/js/flattenToArray":"kBit"}],"NvOR":[function(require,module,exports) {
"use strict";var i=e(i);function e(i){return i||{}}var t=i.exports={};t.internalCreateIfNotExists=e,t.DescribedDataFieldBuilder=function(){function i(i,e){return function(i){return"string"==typeof i&&null!==i&&""!==i}(i)?i:e}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(i){return this.category(i.category),this.type(i.type),this.abbreviation(i.abbreviation),this.image(i.image),this.index(i.index),this.displayName(i.displayName),this.fieldName(i.fieldName),this.value(i.value),this},this.category=function(e){return this.describedField.category=i(e,""),this},this.type=function(e){return this.describedField.type=i(e,""),this},this.abbreviation=function(e){return this.describedField.abbreviation=i(e,""),this},this.image=function(e){return this.describedField.image=i(e,""),this},this.index=function(i){return this.describedField.index=function(i,e){return null!==i?i:e}(i,[]),this},this.displayName=function(e){return this.describedField.displayName=i(e,""),this},this.fieldName=function(e){return this.describedField.fieldName=i(e,""),this},this.value=function(e){return this.describedField.value=i(e,""),this},this.build=function(){return this.describedField}}}();
},{}],"hflC":[function(require,module,exports) {
"use strict";var e=t(e);function t(e){return e||{}}var r=e.exports={};r.internalCreateIfNotExists=t;var i=i||require("../../lib/js/flattenToArray"),n=n||require("../../src/js/templateResolver"),o=o||require("../../src/js/describedfield");r.PropertyStructureDescriptionBuilder=function(){function e(e,i){if(o(e))return function(){return e};if(i.propertyPatternTemplateMode){var n=i.propertyPattern;return s=n,function(e){var i=r(s,"{{fieldName}}"),n=i.exec(e);return n&&""!=n[1]?n[1]:t(e)}}var s;return function(e){return t(e)}}function t(e){var t=new RegExp("(\\w+)$","gi"),r=e.match(t);return null!=r?r[0]:e}function r(e,t){var r=i(e);return"string"==typeof t&&(t=i(t)),r="^"+(r=r.replace(t,"([-\\w]+)")),new RegExp(r,"i")}function i(e){var t=new RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)?this:(this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t=r(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=function(e){return function(t){return(r=e(t)).length>1?r.charAt(0).toUpperCase()+r.slice(1):r;var r}}(this.description.getDisplayNameForPropertyName),this);var r},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){return this.description.matchesPropertyName=(e=this.description,o(t=e.propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=(i=t,n=new RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi"),r(i,n)).exec(e);var i,n}:function(e){return e===t}:function(){return!1}),null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description;var e,t}}}(),r.DescribedEntryCreator=function(){var e=new RegExp("\\[\\d+\\]","gi");return function(t,r){var i,s,a=(i=t.name,s=new RegExp("\\[(\\d+)\\]","gi"),function(e,t){var r,i="",n=[];do{(r=t.exec(e))&&(i.length>0&&(i+="."),i+=r[1],n.push(parseInt(r[1])))}while(r);return{pointDelimited:i,numberArray:n}}(i,s)),u=t.name.replace(e,""),p=new n.Resolver(this);this.describedField=(new o.DescribedDataFieldBuilder).category(r.category).type(r.type).abbreviation(r.abbreviation).image(r.image).index(a.numberArray).displayName(r.getDisplayNameForPropertyName(u)).fieldName(r.getFieldNameForPropertyName(u)).value(t.value).build(),this.category=r.category,this.type=r.type,this.abbreviation=r.abbreviation,this.image=r.image,this.index=a.numberArray,this.displayName=r.getDisplayNameForPropertyName(u),this.fieldName=r.getFieldNameForPropertyName(u),this.value=t.value,this.groupNames=[],this._isMatchingIndex=0==a.pointDelimited.indexOf(r.indexStartsWith),this._description=r,this._identifier={index:a.pointDelimited,propertyNameWithArrayIndices:t.name,propertyNameWithoutArrayIndices:u,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=p.replaceResolvableFields(r.groupPattern,p.resolvableFieldsOfAll(this.describedField,this._description,this._identifier)),this._identifier.groupDestinationId=p.replaceResolvableFields(r.groupDestinationPattern,p.resolvableFieldsOfAll(this.describedField,this._description,this._identifier)),this._identifier.deduplicationId=p.replaceResolvableFields(r.deduplicationPattern,p.resolvableFieldsOfAll(this.describedField,this._description,this._identifier)),this.resolveTemplate=function(e){return new n.Resolver(this).resolveTemplate(e)},this.publicFieldsJson=function(e){var t="number"==typeof e?e:0;return JSON.stringify(this.describedField,null,t)},this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var r,i;for(this[e]||(this.groupNames.push(e),this[e]=[],this.describedField[e]=[]),r=0;r<t.length;r+=1)i=t[r],this[e].push(i),this.describedField[e].push(i.describedField)}}}(),r.Transform=function(){function e(e,t,r){var i,n,o,s=function(e,t){for(var r=new Object,i=0;i<e.length;i++){var n=e[i];r[t(n)]=n}return r}(t,r),a=[];for(i=0;i<e.length;i+=1)null!=(o=r(n=e[i]))&&""!==o&&null!=s[o]||a.push(n);for(i=0;i<t.length;i+=1)n=t[i],a.push(n);return a}function t(t,r){if(null==t||0==t.length)return r;return e(t,r,function(e){return e._identifier.deduplicationId})}function n(e,t){var i=new RegExp("\\[\\d+\\]","gi"),n=[];return e.filter(function(e){var o=e.name.replace(i,"");if(t.matchesPropertyName(o)){var s=new r.DescribedEntryCreator(e,t);s._isMatchingIndex&&n.push(s)}}),n}return function(e){this.descriptions=e,this.debugMode=!1,this.enableDebugMode=function(){return this.debugMode=!0,this},this.processJson=function(e){return function(e,r,o){var s,a,u,p,d,l=i.flattenToArray(e);s=l,a=new RegExp("\\[\\d+\\]$","gi"),u=[],p="",d="",s.filter(function(e){if(!e.name.match(a))return""!==p&&(u.push({name:p+"_comma_separated_values",value:d}),p=""),void u.push(e);var t=e.name.replace(a,"");p===t?d+=", "+e.value:(""!==p&&(u.push({name:p+"_comma_separated_values",value:d}),p=""),p=t,d=e.value),u.push(e)}),l=u,"boolean"==typeof o&&o&&(console.log("flattened data with array values:"),console.log(l));var c,h,f,m=[];for(c=0;c<r.length;c+=1)h=r[c],f=n(l,h),m=t(m,f);return function(e){for(var t=[],r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],o=e[n];t.push(o)}return t}(l=function(e){for(var t=Object.keys(e),r=[],i=0;i<t.length;i++){var n=t[i],o=e[n];if(""!=o._description.groupDestinationPattern){var s=o._identifier.groupDestinationId;if(null!=e[s]){var a=o[o._description.groupName];e[s].addGroupEntries(o._description.groupDestinationName,a),r.push(n)}}}for(i=0;i<r.length;i+=1){var u=r[i];delete e[u]}return e}(l=function(e){return function(e,t,r){for(var i=new Object,n=0;n<e.length;n++){var o=e[n],s=t(o);if(""!==s){var a=r(o);null!=a&&""!==a&&(i[s]||(i[s]=o),i[s].addGroupEntry(a,o))}}return i}(e,function(e){return e._identifier.groupId},function(e){return e._description.groupName})}(l=m)))}(e,this.descriptions,this.debugMode)}}}(),r.Restructor={},r.Restructor.processJsonUsingDescriptions=function(e,t,i){var n=new r.Transform(t);return i&&n.enableDebugMode(),n.processJson(e)};
},{"../../lib/js/flattenToArray":"kBit","../../src/js/templateResolver":"gEHB","../../src/js/describedfield":"NvOR"}]},{},["hflC"], null)
//# sourceMappingURL=/datarestructor.js.map