parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NvOR":[function(require,module,exports) {
"use strict";var i=e(i);function e(i){return i||{}}var t=i.exports={};t.internalCreateIfNotExists=e,t.DescribedDataFieldBuilder=function(){function i(i,e){return function(i){return"string"==typeof i&&null!==i&&""!==i}(i)?i:e}function e(i,e){return null==i?e:i}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(i){return this.category(i.category),this.type(i.type),this.abbreviation(i.abbreviation),this.image(i.image),this.index(i.index),this.groupNames(i.groupNames),this.displayName(i.displayName),this.fieldName(i.fieldName),this.value(i.value),this},this.category=function(e){return this.describedField.category=i(e,""),this},this.type=function(e){return this.describedField.type=i(e,""),this},this.abbreviation=function(e){return this.describedField.abbreviation=i(e,""),this},this.image=function(e){return this.describedField.image=i(e,""),this},this.index=function(i){return this.describedField.index=e(i,[]),this},this.groupNames=function(i){return this.describedField.groupNames=e(i,[]),this},this.displayName=function(e){return this.describedField.displayName=i(e,""),this},this.fieldName=function(e){return this.describedField.fieldName=i(e,""),this},this.value=function(i){return this.describedField.value=i,this},this.build=function(){return this.describedField}}}(),t.copyWithoutGroups=function(i){return(new t.DescribedDataFieldBuilder).fromDescribedDataField(i).groupNames([]).build()},t.DescribedDataFieldGroup=function(){return function(i){this.dataField=i,this.addGroupEntry=function(i,e){return this.addGroupEntries(i,[e]),this},this.addGroupEntries=function(i,e){if(!i||0===i.length)return this;if(!e||0===e.length)return this;var t,r;for(void 0===this.dataField[i]&&(this.dataField.groupNames.push(i),this.dataField[i]=[]),t=0;t<e.length;t+=1)r=e[t],this.dataField[i].push(r);return this}}}();
},{}]},{},["NvOR"], null)
//# sourceMappingURL=/describedfield.js.map