var e=globalThis,r={},t={},n=e.parcelRequirec1f2;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequirec1f2=n);var o=n.register;o("3kxfc",function(e,r){//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
if(!Array.prototype.indexOf){var t,n,o;Array.prototype.indexOf=(t=Object,n=Math.max,o=Math.min,function(e,r){if(this===null||void 0===this)throw TypeError("Array.prototype.indexOf called on null or undefined");var i=t(this),a=i.length>>>0,f=o(0|r,a);if(f<0)f=n(0,a+f);else if(f>=a)return -1;if(void 0===e){for(;f!==a;++f)if(void 0===i[f]&&f in i)return f;// undefined
}else if(e!=e){for(;f!==a;++f)if(i[f]!=i[f])return f;// NaN
}else for(;f!==a;++f)if(i[f]===e)return f;// all else
return -1;// if the value was not found, then return -1
})}}),o("26y7f",function(e,r){//http://tokenposts.blogspot.com/2012/04/javascript-objectkeys-browser.html
Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on a non-object");var r,t=[];for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t})}),o("8ZIyB",function(e,r){var t,o=i(o);// Fallback for vanilla js without modules
function i(e){return e||{}}/**
 * Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @module template_resolver
 */var a=o.exports={};// Export module for npm...
a.internalCreateIfNotExists=i;var f=f||n("7HmuL");// supports vanilla js & npm
a.Resolver=(t=RegExp("\\[\\d+\\]","gi"),/**
   * Resolver. Is used inside this repository. It could also be used outside.
   * @param {*} sourceDataObject The properties of this object will be used to replace the placeholders in the template.
   * @constructs Resolver
   * @alias module:template_resolver.Resolver
   */function(e){/**
     * The properties of this source data object will be used to replace the placeholders in the template.
     */this.sourceDataObject=e,/**
     * Resolves the given template.
     *
     * The template may contain variables in double curly brackets.
     * Supported variables are all properties of this object, e.g. "{{fieldName}}", "{{displayName}}", "{{value}}".
     * Since this object may also contains (described) groups of sub objects, they can also be used, e.g. "{{summaries[0].value}}"
     * Parts of the index can be inserted by using e.g. "{{index[1]}}".
     *
     * @param {string} template
     * @returns {string} resolved template
     */this.resolveTemplate=function(e){return this.replaceResolvableFields(e,/**
   * Adds the value of the "fieldName" property (including its group prefix) and its associated "value" property content.
   * For example: detail[2].fieldName="name", detail[2].value="Smith" lead to the additional property detail.name="Smith".
   * @param {object} object with resolvable field names and their values.
   * @returns {object} object with resolvable field names and their values.
   * @protected
   * @memberof module:template_resolver.Resolver
   */function(e){var r,n,o,i,a=Object.keys(e);for(r=0;r<a.length;r+=1)i=e[n=a[r]],"fieldName"===(o=/**
   * Infos about the full property name including the name of the group (followed by the separator) and the name of the property itself.
   * @param {String} fullPropertyName
   * @returns {Object} Contains "group" (empty or group name including trailing separator "."), "groupWithoutArrayIndices" and "name" (property name).
   * @protected
   * @memberof module:template_resolver.Resolver
   */function(e){var r=e.lastIndexOf("."),n=e;r>0&&(n=e.substr(r+1));var o="";r>0&&(o=e.substr(0,r+1));//includes the trailing ".".
var i=o.replace(t,"");return{group:o,groupWithoutArrayIndices:i,name:n}}(n)).name&&"fieldName"!==i&&(e[o.groupWithoutArrayIndices+i]=e[o.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},/**
     * Returns a map like object, that contains all resolvable fields and their values as properties.
     * This function takes a variable count of input parameters,
     * each containing an object that contains resolvable fields to extract from.
     *
     * The recursion depth is limited to 3, so that an object,
     * that contains an object can contain another object (but not further).
     *
     * Properties beginning with an underscore in their name will be filtered out, since they are considered as internal fields.
     *
     * @param {...object} varArgs variable count of parameters. Each parameter contains an object that fields should be resolvable for variables.
     * @returns {object} object with resolvable field names and their values.
     * @public
     */this.resolvableFieldsOfAll=function(){var e,r={},t=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)/**
   * Collects all flattened name-value-pairs into one object using the property names as keys and their values as values (map-like).
   * Example: `{name: "accountNumber", value: "12345"}` becomes `mapObject["accountNumber"]="12345"`.
   *
   * @param {NameValuePair[]} elements flattened array of name-value-pairs
   * @param {object} mapObject container to collect the results. Needs to be created before e.g. using `{}`.
   * @param {function} filterMatchesFunction takes the property name as string argument and returns true (include) or false (exclude).
   * @protected
   * @memberof module:template_resolver.Resolver
   */(function(e,r,t){var n,o;for(n=0;n<e.length;n+=1)o=e[n],"function"==typeof t&&t(o.name)&&(r[o.name]=o.value)})(f.flattenToArray(arguments[e],3),r,t);return r},/**
     * Replaces all variables in double curly brackets, e.g. {{property}},
     * with the value of that property from the resolvableProperties.
     *
     * Supported property types: string, number, boolean
     * @param {string} stringContainingVariables
     * @param {object[]} resolvableFields (name=value)
     */this.replaceResolvableFields=function(e,r){var t=e,n=Object.keys(r),o=0,i="",a="";for(o=0;o<n.length;o+=1)a=r[i=n[o]],t=t.replace("{{"+i+"}}",a);return t}})}),o("7HmuL",function(e,r){/**
 * @typedef {Object} NameValuePair
 * @property {string} name - point separated names of the flattened main and sub properties, e.g. "responses[2].hits.hits[4]._source.name".
 * @property {string} value - value of the property
 *//**
 * @param {object} data hierarchical object that may consist fo fields, subfields and arrays.
 * @param {number} maxRecursionDepth
 * @returns {NameValuePair[]} array of property name and value pairs
 */(($59adffa3db62607f$var$module||{}).exports={}).flattenToArray=function(e,r){var t=[];return("number"!=typeof r||r<1)&&(r=20),function e(n,o,i){if(!(i>r)&&"function"!=typeof n){if(Object(n)!==n)t.push({name:o,value:n});else if(Array.isArray(n)){var a,f=n.length;for(a=0;a<f;a+=1)e(n[a],o+"["+a+"]",i+1);0===f&&(t[o]=[],t.push({name:o,value:""}))}else{var l,u=!0;for(l in n)u=!1,e(n[l],o?o+"."+l:l,i+1);u&&o&&t.push({name:o,value:""})}}}(e,"",0),t}}),n("3kxfc"),n("26y7f");var i=n("8ZIyB");module.exports={template_resolver:i};//# sourceMappingURL=templateResolver-ie.js.map

//# sourceMappingURL=templateResolver-ie.js.map
