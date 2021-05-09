Array.prototype.filter||(Array.prototype.filter=function(e,t){"use strict";if("Function"!=typeof e&&"function"!=typeof e||!this)throw new TypeError;var r,i=this.length>>>0,n=new Array(i),o=this,a=0,s=-1;if(void 0===t)for(;++s!==i;)s in this&&(r=o[s],e(o[s],s,o)&&(n[a++]=r));else for(;++s!==i;)s in this&&(r=o[s],e.call(t,o[s],s,o)&&(n[a++]=r));return n.length=a,n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t,r){"use strict";return function(i,n){if(null==this)throw TypeError("Array.prototype.indexOf called on null or undefined");var o=e(this),a=o.length>>>0,s=r(0|n,a);if(s<0)s=t(0,a+s);else if(s>=a)return-1;if(void 0===i){for(;s!==a;++s)if(void 0===o[s]&&s in o)return s}else if(i!=i){for(;s!==a;++s)if(o[s]!=o[s])return s}else for(;s!==a;++s)if(o[s]===i)return s;return-1}}(Object,Math.max,Math.min)),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw new TypeError("Object.keys called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r});"use strict";(internal_object_tools=(module=module||{}).exports={}).flattenToArray=function(e,t){var r=[];return("number"!=typeof t||t<1)&&(t=20),function e(i,n,o){if(!(o>t||"function"==typeof i))if(Object(i)!==i)r.push({name:n,value:i});else if(Array.isArray(i)){var a,s=i.length;for(a=0;a<s;a+=1)e(i[a],n+"["+a+"]",o+1);0===s&&(r[n]=[],r.push({name:n,value:""}))}else{var u,l=!0;for(u in i)l=!1,e(i[u],n?n+"."+u:u,o+1);l&&n&&r.push({name:n,value:""})}}(e,"",0),r};var module=templateResolverInternalCreateIfNotExists(module);function templateResolverInternalCreateIfNotExists(e){return e||{}}(template_resolver=module.exports={}).internalCreateIfNotExists=templateResolverInternalCreateIfNotExists;var internal_object_tools=internal_object_tools||require("../../lib/js/flattenToArray");template_resolver.Resolver=function(){var e=new RegExp("\\[\\d+\\]","gi");function t(t){var r=t.lastIndexOf("."),i=t;r>0&&(i=t.substr(r+1));var n="";return r>0&&(n=t.substr(0,r+1)),{group:n,groupWithoutArrayIndices:n.replace(e,""),name:i}}function r(e,t,r){var i,n;for(i=0;i<e.length;i+=1)n=e[i],"function"==typeof r&&r(n.name)&&(t[n.name]=n.value);return t}return function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var r,i,n,o,a=Object.keys(e);for(r=0;r<a.length;r+=1)i=a[r],o=e[i],"fieldName"===(n=t(i)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,t={},i=function(e){return 0!==e.indexOf("_")&&e.indexOf("._")<0};for(e=0;e<arguments.length;e+=1)r(internal_object_tools.flattenToArray(arguments[e],3),t,i);return t},this.replaceResolvableFields=function(e,t){var r=e,i=Object.keys(t),n=0,o="",a="";for(n=0;n<i.length;n+=1)a=t[o=i[n]],r=r.replace("{{"+o+"}}",a);return r}}}();module=describedFieldInternalCreateIfNotExists(module);function describedFieldInternalCreateIfNotExists(e){return e||{}}function datarestructorInternalCreateIfNotExists(e){return e||{}}(described_field=module.exports={}).internalCreateIfNotExists=describedFieldInternalCreateIfNotExists,described_field.DescribedDataFieldBuilder=function(){function e(e,t){return function(e){return"string"==typeof e&&null!==e&&""!==e}(e)?e:t}function t(e,t){return null==e?t:e}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},this.category=function(t){return this.describedField.category=e(t,""),this},this.type=function(t){return this.describedField.type=e(t,""),this},this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},this.image=function(t){return this.describedField.image=e(t,""),this},this.index=function(e){return this.describedField.index=t(e,[]),this},this.groupNames=function(e){return this.describedField.groupNames=t(e,[]),this},this.displayName=function(t){return this.describedField.displayName=e(t,""),this},this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},this.value=function(e){return this.describedField.value=e,this},this.build=function(){return this.describedField}}}(),described_field.copyWithoutGroups=function(e){return(new described_field.DescribedDataFieldBuilder).fromDescribedDataField(e).groupNames([]).build()},described_field.DescribedDataFieldGroup=function(){return function(e){this.dataField=e,this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},this.addGroupEntries=function(e,t){if(!e||0===e.length)return this;if(!t||0===t.length)return this;var r,i;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),r=0;r<t.length;r+=1)i=t[r],this.dataField[e].push(i);return this}}}();var datarestructor=(module=datarestructorInternalCreateIfNotExists(module)).exports={};datarestructor.internalCreateIfNotExists=datarestructorInternalCreateIfNotExists;internal_object_tools=internal_object_tools||require("../../lib/js/flattenToArray");var template_resolver=template_resolver||require("../../src/js/templateResolver"),described_field=described_field||require("../../src/js/describedfield");datarestructor.PropertyStructureDescriptionBuilder=function(){function e(e,i){if(o(e))return function(){return e};if(i.propertyPatternTemplateMode){var n=i.propertyPattern;return a=n,function(e){var i=r(a,"{{fieldName}}"),n=i.exec(e);return n&&""!=n[1]?n[1]:t(e)}}var a;return function(e){return t(e)}}function t(e){var t=new RegExp("(\\w+)$","gi"),r=e.match(t);return null!=r?r[0]:e}function r(e,t){var r=i(e);return"string"==typeof t&&(t=i(t)),r="^"+(r=r.replace(t,"([-\\w]+)")),new RegExp(r,"i")}function i(e){var t=new RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)?this:(this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t=r(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=function(e){return function(t){return(r=e(t)).length>1?r.charAt(0).toUpperCase()+r.slice(1):r;var r}}(this.description.getDisplayNameForPropertyName),this);var r},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){return this.description.matchesPropertyName=(e=this.description,o(t=e.propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=(i=t,n=new RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi"),r(i,n)).exec(e);var i,n}:function(e){return e===t}:function(){return!1}),null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description;var e,t}}}(),datarestructor.DescribedEntryCreator=function(){var e=new RegExp("\\[\\d+\\]","gi");return function(t,r){var i,n,o=(i=t.name,n=new RegExp("\\[(\\d+)\\]","gi"),function(e,t){var r,i="",n=[];do{(r=t.exec(e))&&(i.length>0&&(i+="."),i+=r[1],n.push(parseInt(r[1])))}while(r);return{pointDelimited:i,numberArray:n}}(i,n)),a=t.name.replace(e,""),s=new template_resolver.Resolver(this);this.category=r.category,this.type=r.type,this.abbreviation=r.abbreviation,this.image=r.image,this.index=o.numberArray,this.displayName=r.getDisplayNameForPropertyName(a),this.fieldName=r.getFieldNameForPropertyName(a),this.value=t.value,this.groupNames=[],this._isMatchingIndex=0==o.pointDelimited.indexOf(r.indexStartsWith),this._description=r,this._identifier={index:o.pointDelimited,propertyNameWithArrayIndices:t.name,propertyNameWithoutArrayIndices:a,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=s.replaceResolvableFields(r.groupPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=s.replaceResolvableFields(r.groupDestinationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=s.replaceResolvableFields(r.deduplicationPattern,s.resolvableFieldsOfAll(this,this._description,this._identifier)),this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var r,i;for(this[e]||(this.groupNames.push(e),this[e]=[]),r=0;r<t.length;r+=1)i=t[r],this[e].push(i)}}}(),datarestructor.Transform=function(){function e(e,t,r){var i,n,o,a=function(e,t){for(var r=new Object,i=0;i<e.length;i++){var n=e[i];r[t(n)]=n}return r}(t,r),s=[];for(i=0;i<e.length;i+=1)null!=(o=r(n=e[i]))&&""!==o&&null!=a[o]||s.push(n);for(i=0;i<t.length;i+=1)n=t[i],s.push(n);return s}function t(t,r){if(null==t||0==t.length)return r;return e(t,r,function(e){return e._identifier.deduplicationId})}function r(e,t){var r=new RegExp("\\[\\d+\\]","gi"),i=[];return e.filter(function(e){var n=e.name.replace(r,"");if(t.matchesPropertyName(n)){var o=new datarestructor.DescribedEntryCreator(e,t);o._isMatchingIndex&&i.push(o)}}),i}function i(e,t,r){var n=(new described_field.DescribedDataFieldBuilder).category(e.category).type(e.type).abbreviation(e.abbreviation).image(e.image).index(e.index).displayName(e.displayName).fieldName(e.fieldName).value(e.value).build();if(t>r.maxRecursionDepth)return n;var o=new described_field.DescribedDataFieldGroup(n);return function(e,t){var r,i,n,o;for(r=0;r<e.groupNames.length;r+=1)for(n=e.groupNames[r],i=0;i<e[n].length;i+=1)o=e[n][i],t(n,o)}(e,function(n,a){a!=e||t<=r.removeDuplicationAboveRecursionDepth?o.addGroupEntry(n,i(a,t+1,r)):r.debugMode&&console.log("Removed duplicate field "+a.fieldName+" with value "+a.value+" of group "+n+" at recursion depth "+t)}),n}return function(e){this.descriptions=e,this.config={debugMode:!1,maxRecursionDepth:8,removeDuplicationAboveRecursionDepth:1},this.enableDebugMode=function(){return this.config.debugMode=!0,this},this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},this.processJson=function(e){return function(e,n,o){var a,s,u,l,d,c=internal_object_tools.flattenToArray(e);a=c,s=new RegExp("\\[\\d+\\]$","gi"),u=[],l="",d="",a.filter(function(e){if(!e.name.match(s))return""!==l&&(u.push({name:l+"_comma_separated_values",value:d}),l=""),void u.push(e);var t=e.name.replace(s,"");l===t?d+=", "+e.value:(""!==l&&(u.push({name:l+"_comma_separated_values",value:d}),l=""),l=t,d=e.value),u.push(e)}),c=u,o.debugMode&&(console.log("flattened data with array values:"),console.log(c));var p,h,f,m=[];for(p=0;p<n.length;p+=1)h=n[p],f=r(c,h),m=t(m,f);return c=m,o.debugMode&&(console.log("describedData data:"),console.log(c)),c=function(e){return function(e,t,r){for(var i=new Object,n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=r(o);null!=s&&""!==s&&(i[a]||(i[a]=o),i[a].addGroupEntry(s,o))}}return i}(e,function(e){return e._identifier.groupId},function(e){return e._description.groupName})}(c),o.debugMode&&(console.log("grouped describedData data:"),console.log(c)),c=function(e){for(var t=Object.keys(e),r=[],i=0;i<t.length;i++){var n=t[i],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),r.push(n)}}}for(i=0;i<r.length;i+=1){var u=r[i];delete e[u]}return e}(c),o.debugMode&&(console.log("moved grouped describedData data:"),console.log(c)),c=function(e,t){var r,n,o=[];for(r=0;r<e.length;r+=1)n=e[r],o.push(i(n,0,t));return o}(c=function(e){for(var t=[],r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],o=e[n];t.push(o)}return t}(c),o),o.debugMode&&(console.log("transformed result:"),console.log(c)),c}(e,this.descriptions,this.config)}}}(),datarestructor.Restructor={},datarestructor.Restructor.processJsonUsingDescriptions=function(e,t,r){var i=new datarestructor.Transform(t);return r&&i.enableDebugMode(),i.processJson(e)};