var e=globalThis,r={},t={},n=e.parcelRequirec1f2;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirec1f2=n);var a=n.register;a("8ZIyB",function(e,r){var t,a=o(a);// Fallback for vanilla js without modules
function o(e){return e||{}}/**
 * Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @module template_resolver
 */var i=a.exports={};// Export module for npm...
i.internalCreateIfNotExists=o;var u=u||n("7HmuL");// supports vanilla js & npm
i.Resolver=(t=RegExp("\\[\\d+\\]","gi"),/**
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
   */function(e){var r,n,a,o,i=Object.keys(e);for(r=0;r<i.length;r+=1)o=e[n=i[r]],"fieldName"===(a=/**
   * Infos about the full property name including the name of the group (followed by the separator) and the name of the property itself.
   * @param {String} fullPropertyName
   * @returns {Object} Contains "group" (empty or group name including trailing separator "."), "groupWithoutArrayIndices" and "name" (property name).
   * @protected
   * @memberof module:template_resolver.Resolver
   */function(e){var r=e.lastIndexOf("."),n=e;r>0&&(n=e.substr(r+1));var a="";r>0&&(a=e.substr(0,r+1));//includes the trailing ".".
var o=a.replace(t,"");return{group:a,groupWithoutArrayIndices:o,name:n}}(n)).name&&"fieldName"!==o&&(e[a.groupWithoutArrayIndices+o]=e[a.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},/**
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
   */(function(e,r,t){var n,a;for(n=0;n<e.length;n+=1)a=e[n],"function"==typeof t&&t(a.name)&&(r[a.name]=a.value)})(u.flattenToArray(arguments[e],3),r,t);return r},/**
     * Replaces all variables in double curly brackets, e.g. {{property}},
     * with the value of that property from the resolvableProperties.
     *
     * Supported property types: string, number, boolean
     * @param {string} stringContainingVariables
     * @param {object[]} resolvableFields (name=value)
     */this.replaceResolvableFields=function(e,r){var t=e,n=Object.keys(r),a=0,o="",i="";for(a=0;a<n.length;a+=1)i=r[o=n[a]],t=t.replace("{{"+o+"}}",i);return t}})}),a("7HmuL",function(e,r){/**
 * @typedef {Object} NameValuePair
 * @property {string} name - point separated names of the flattened main and sub properties, e.g. "responses[2].hits.hits[4]._source.name".
 * @property {string} value - value of the property
 *//**
 * @param {object} data hierarchical object that may consist fo fields, subfields and arrays.
 * @param {number} maxRecursionDepth
 * @returns {NameValuePair[]} array of property name and value pairs
 */(($59adffa3db62607f$var$module||{}).exports={}).flattenToArray=function(e,r){var t=[];return("number"!=typeof r||r<1)&&(r=20),function e(n,a,o){if(!(o>r)&&"function"!=typeof n){if(Object(n)!==n)t.push({name:a,value:n});else if(Array.isArray(n)){var i,u=n.length;for(i=0;i<u;i+=1)e(n[i],a+"["+i+"]",o+1);0===u&&(t[a]=[],t.push({name:a,value:""}))}else{var l,s=!0;for(l in n)s=!1,e(n[l],a?a+"."+l:l,o+1);s&&a&&t.push({name:a,value:""})}}}(e,"",0),t}}),n("8ZIyB");//# sourceMappingURL=templateResolver.js.map

//# sourceMappingURL=templateResolver.js.map
