var e=globalThis,t={},i={},r=e.parcelRequire94c2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire94c2=r);var n=r.register;n("keJ9m",function(e,t){var i,n=o(n);function o(e){return e||{}}var a=n.exports={};a.internalCreateIfNotExists=o;var s=s||r("ccQZb"),u=u||r("ds403"),l=l||r("aJuQy");a.PropertyStructureDescriptionBuilder=function(){function e(e,r){var n;return o(e)?function(){return e}:r.propertyPatternTemplateMode?(n=r.propertyPattern,function(e){var r=i(n,"{{fieldName}}").exec(e);return r&&""!=r[1]?r[1]:t(e)}):function(e){return t(e)}}function t(e){var t=RegExp("(\\w+)$","gi"),i=e.match(t);return null!=i?i[0]:e}function i(e,t){var i=r(e);return"string"==typeof t&&(t=r(t)),RegExp(i="^"+(i=i.replace(t,"([-\\w]+)")),"i")}function r(e){var t=RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return function(){this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},this.type=function(e){return this.description.type=n(e,""),this},this.category=function(e){return this.description.category=n(e,""),this},this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},this.image=function(e){return this.description.image=n(e,""),this},this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},this.displayPropertyName=function(t){var i,r;return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)||(this.description.getDisplayNameForPropertyName=(i=this.description.getDisplayNameForPropertyName,function(e){var t=i(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t;return(t=r(e)).length>1?t.charAt(0).toUpperCase()+t.slice(1):t})),this},this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},this.groupName=function(e){return this.description.groupName=n(e,""),this},this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},this.build=function(){var e,t;return this.description.matchesPropertyName=o(t=(e=this.description).propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=i(t,RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi")).exec(e)}:function(e){return e===t}:function(){return!1},null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description}}}(),a.DescribedEntryCreator=(i=RegExp("\\[\\d+\\]","gi"),function(e,t){var r=function(e,t){var i,r="",n=[];do(i=t.exec(e))&&(r.length>0&&(r+="."),r+=i[1],n.push(parseInt(i[1])));while(i)return{pointDelimited:r,numberArray:n}}(e.name,RegExp("\\[(\\d+)\\]","gi")),n=e.name.replace(i,""),o=new u.Resolver(this);this.category=t.category,this.type=t.type,this.abbreviation=t.abbreviation,this.image=t.image,this.index=r.numberArray,this.displayName=t.getDisplayNameForPropertyName(n),this.fieldName=t.getFieldNameForPropertyName(n),this.value=e.value,this.groupNames=[],this._isMatchingIndex=0==r.pointDelimited.indexOf(t.indexStartsWith),this._description=t,this._identifier={index:r.pointDelimited,propertyNameWithArrayIndices:e.name,propertyNameWithoutArrayIndices:n,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=o.replaceResolvableFields(t.groupPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=o.replaceResolvableFields(t.groupDestinationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=o.replaceResolvableFields(t.deduplicationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},this.addGroupEntries=function(e,t){var i,r;for(this[e]||(this.groupNames.push(e),this[e]=[]),i=0;i<t.length;i+=1)r=t[i],this[e].push(r)}}),a.Transform=function(){function e(e,i){return t(e.category,"")===t(i.category,"")&&t(e.type,"")===t(i.type,"")&&e.fieldName===i.fieldName&&e.value===i.value}function t(e,t){return void 0!==e&&e?e:t}return function(t){this.descriptions=t,this.config={debugMode:!1,maxRecursionDepth:8,removeDuplicationAboveRecursionDepth:1},this.enableDebugMode=function(){return this.config.debugMode=!0,this},this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},this.processJson=function(t){return function(t,i,r){var n,o,u,p,c,d,h,f,g=s.flattenToArray(t);n=g,o=RegExp("\\[\\d+\\]$","gi"),u=[],p="",c="",n.filter(function(e){if(!e.name.match(o)){""!==p&&(u.push({name:p+"_comma_separated_values",value:c}),p=""),u.push(e);return}var t=e.name.replace(o,"");p===t?c+=", "+e.value:(""!==p&&(u.push({name:p+"_comma_separated_values",value:c}),p=""),p=t,c=e.value),u.push(e)}),g=u,r.debugMode&&(console.log("flattened data with array values:"),console.log(g));var m=[];for(f=0;f<i.length;f+=1)d=m,h=function(e,t){var i=RegExp("\\[\\d+\\]","gi"),r=[];return e.filter(function(e){var n=e.name.replace(i,"");if(t.matchesPropertyName(n)){var o=new a.DescribedEntryCreator(e,t);o._isMatchingIndex&&r.push(o)}}),r}(g,i[f]),m=null==d||0==d.length?h:function(e,t,i){var r,n,o,a=function(e,t){for(var i={},r=0;r<e.length;r++){var n=e[r];i[t(n)]=n}return i}(t,i),s=[];for(r=0;r<e.length;r+=1)(null==(o=i(n=e[r]))||""===o||null==a[o])&&s.push(n);for(r=0;r<t.length;r+=1)s.push(n=t[r]);return s}(d,h,function(e){return e._identifier.deduplicationId});return g=m,r.debugMode&&(console.log("describedData data:"),console.log(g)),g=function(e,t,i){for(var r={},n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=i(o);null!=s&&""!==s&&(r[a]||(r[a]=o),r[a].addGroupEntry(s,o))}}return r}(g,function(e){return e._identifier.groupId},function(e){return e._description.groupName}),r.debugMode&&(console.log("grouped describedData data:"),console.log(g)),g=function(e){for(var t=Object.keys(e),i=[],r=0;r<t.length;r++){var n=t[r],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),i.push(n)}}}for(r=0;r<i.length;r+=1){var u=i[r];delete e[u]}return e}(g),r.debugMode&&(console.log("moved grouped describedData data:"),console.log(g)),g=function(t,i){var r,n=[];for(r=0;r<t.length;r+=1)n.push(function t(i,r){var n=new l.DescribedDataFieldBuilder().category(i.category).type(i.type).abbreviation(i.abbreviation).image(i.image).index(i.index).displayName(i.displayName).fieldName(i.fieldName).value(i.value).build();if(r.recursionDepth>r.config.maxRecursionDepth)return n;var o=null,a="",s=new l.DescribedDataFieldGroup(n);return function(e,t){var i,r,n,o;for(i=0;i<e.groupNames.length;i+=1)for(r=0,n=e.groupNames[i];r<e[n].length;r+=1)o=e[n][r],t(n,o,e[n])}(i,function(i,n,u){if(r.groupToSkip===i){r.config.debugMode&&console.log("Removed duplicate group "+i+" at recursion depth "+r.recursionDepth);return}a="",r.recursionDepth>=r.config.removeDuplicationAboveRecursionDepth&&(a=!function(e,t,i){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var r=0;r<e.length;++r)if(!i(e[r],t[r]))return!1;return!0}(n[i],u,e)?"":i),o={recursionDepth:r.recursionDepth+1,config:r.config,groupToSkip:a},s.addGroupEntry(i,t(n,o))}),n}(t[r],{recursionDepth:0,config:i,groupToSkip:""}));return n}(g=function(e){for(var t=[],i=Object.keys(e),r=0;r<i.length;r++){var n=e[i[r]];t.push(n)}return t}(g),r),r.debugMode&&(console.log("transformed result:"),console.log(g)),g}(t,this.descriptions,this.config)}}}(),a.Restructor={},a.Restructor.processJsonUsingDescriptions=function(e,t,i){var r=new a.Transform(t);return i&&r.enableDebugMode(),r.processJson(e)}}),n("ccQZb",function(e,t){var i=i||{};(i.exports={}).flattenToArray=function(e,t){var i=[];return("number"!=typeof t||t<1)&&(t=20),function e(r,n,o){if(!(o>t)&&"function"!=typeof r){if(Object(r)!==r)i.push({name:n,value:r});else if(Array.isArray(r)){var a,s=r.length;for(a=0;a<s;a+=1)e(r[a],n+"["+a+"]",o+1);0===s&&(i[n]=[],i.push({name:n,value:""}))}else{var u,l=!0;for(u in r)l=!1,e(r[u],n?n+"."+u:u,o+1);l&&n&&i.push({name:n,value:""})}}}(e,"",0),i}}),n("ds403",function(e,t){var i,n=o(n);function o(e){return e||{}}var a=n.exports={};a.internalCreateIfNotExists=o;var s=s||r("ccQZb");a.Resolver=(i=RegExp("\\[\\d+\\]","gi"),function(e){this.sourceDataObject=e,this.resolveTemplate=function(e){return this.replaceResolvableFields(e,function(e){var t,r,n,o,a=Object.keys(e);for(t=0;t<a.length;t+=1)o=e[r=a[t]],"fieldName"===(n=function(e){var t=e.lastIndexOf("."),r=e;t>0&&(r=e.substr(t+1));var n="";t>0&&(n=e.substr(0,t+1));var o=n.replace(i,"");return{group:n,groupWithoutArrayIndices:o,name:r}}(r)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},this.resolvableFieldsOfAll=function(){var e,t={},i=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)(function(e,t,i){var r,n;for(r=0;r<e.length;r+=1)n=e[r],"function"==typeof i&&i(n.name)&&(t[n.name]=n.value)})(s.flattenToArray(arguments[e],3),t,i);return t},this.replaceResolvableFields=function(e,t){var i=e,r=Object.keys(t),n=0,o="",a="";for(n=0;n<r.length;n+=1)a=t[o=r[n]],i=i.replace("{{"+o+"}}",a);return i}})}),n("aJuQy",function(e,t){var i=r(i);function r(e){return e||{}}var n=i.exports={};n.internalCreateIfNotExists=r,n.DescribedDataFieldBuilder=function(){function e(e,t){return"string"==typeof e&&null!==e&&""!==e?e:t}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},this.category=function(t){return this.describedField.category=e(t,""),this},this.type=function(t){return this.describedField.type=e(t,""),this},this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},this.image=function(t){return this.describedField.image=e(t,""),this},this.index=function(e){var t;return this.describedField.index=(t=[],null==e?t:e),this},this.groupNames=function(e){var t;return this.describedField.groupNames=(t=[],null==e?t:e),this},this.displayName=function(t){return this.describedField.displayName=e(t,""),this},this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},this.value=function(e){return this.describedField.value=e,this},this.build=function(){return this.describedField}}}(),n.copyWithoutGroups=function(e){return new n.DescribedDataFieldBuilder().fromDescribedDataField(e).groupNames([]).build()},n.DescribedDataFieldGroup=function(e){this.dataField=e,this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},this.addGroupEntries=function(e,t){var i,r;if(!e||0===e.length||!t||0===t.length)return this;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),i=0;i<t.length;i+=1)r=t[i],this.dataField[e].push(r);return this}}}),r("keJ9m");
//# sourceMappingURL=datarestructor.js.map
