var e=globalThis,t={},r={},i=e.parcelRequirec1f2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec1f2=i);var n=i.register;n("3kxfc",function(e,t){//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
if(!Array.prototype.indexOf){var r,i,n;Array.prototype.indexOf=(r=Object,i=Math.max,n=Math.min,function(e,t){if(this===null||void 0===this)throw TypeError("Array.prototype.indexOf called on null or undefined");var o=r(this),a=o.length>>>0,s=n(0|t,a);if(s<0)s=i(0,a+s);else if(s>=a)return -1;if(void 0===e){for(;s!==a;++s)if(void 0===o[s]&&s in o)return s;// undefined
}else if(e!=e){for(;s!==a;++s)if(o[s]!=o[s])return s;// NaN
}else for(;s!==a;++s)if(o[s]===e)return s;// all else
return -1;// if the value was not found, then return -1
})}}),n("26y7f",function(e,t){//http://tokenposts.blogspot.com/2012/04/javascript-objectkeys-browser.html
Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r})}),n("cB1fX",function(e,t){var r,n=o(n);// Fallback for vanilla js without modules
function o(e){return e||{}}/**
 * datarestructor namespace and module declaration.
 * It contains all functions to convert an object (e.g. parsed JSON) into uniform enumerated list of described field entries.
 * 
 * <b>Transformation steps:</b>
 * - JSON
 * - flatten
 * - mark and identify
 * - add array fields
 * - deduplicate 
 * - group
 * - flatten again
 * @module datarestructor
 */var a=n.exports={};// Export module for npm...
a.internalCreateIfNotExists=o;var s=s||i("7HmuL"),u=u||i("8ZIyB"),l=l||i("d63jw");// supports vanilla js & npm
/**
 * Takes the full qualified original property name and extracts a simple name out of it.
 * 
 * @callback module:datarestructor.propertyNameFunction
 * @param {string} propertyName full qualified, point separated property name 
 * @return {String} extracted, simple name
 *//**
 * Describes a selected part of the incoming data structure and defines, 
 * how the data should be transformed.
 * 
 * @typedef {Object} module:datarestructor.PropertyStructureDescription
 * @property {string} type - ""(default). Some examples: "summary" for e.g. a list overview. "detail" e.g. when a summary is selected. "filter" e.g. for field/value pair results that can be selected as search parameters.
 * @property {string} category - name of the category. Default = "". Could contain a short domain name like "product" or "vendor".
 * @property {string} [abbreviation=""] - one optional character, a symbol character or a short abbreviation of the category
 * @property {string} [image=""] - one optional path to an image resource
 * @property {boolean} propertyPatternTemplateMode - "false"(default): property name needs to be equal to the pattern. "true" allows variables like "{{fieldName}}" inside the pattern.
 * @property {string} propertyPattern - property name pattern (without array indices) to match
 * @property {string} indexStartsWith - ""(default) matches all ids. String that needs to match the beginning of the id. E.g. "1." will match id="1.3.4" but not "0.1.2".
 * @property {module:datarestructor.propertyNameFunction} getDisplayNameForPropertyName - display name for the property. ""(default) last property name element with upper case first letter.
 * @property {module:datarestructor.propertyNameFunction} getFieldNameForPropertyName - field name for the property. "" (default) last property name element.
 * @property {string} groupName - name of the property, that contains grouped entries. Default="group".
 * @property {string} groupPattern - Pattern that describes how to group entries. "groupName" defines the name of this group. A pattern may contain variables in double curly brackets {{variable}}.
 * @property {string} groupDestinationPattern - Pattern that describes where the group should be moved to. Default=""=Group will not be moved. A pattern may contain variables in double curly brackets {{variable}}.
 * @property {string} groupDestinationName - (default=groupName) Name of the group when it had been moved to the destination.
 * @property {string} deduplicationPattern - Pattern to use to remove duplicate entries. A pattern may contain variables in double curly brackets {{variable}}.
 */a.PropertyStructureDescriptionBuilder=function(){function e(e,i){var n;return o(e)?function(){return e}:i.propertyPatternTemplateMode?(n=i.propertyPattern,function(e){var i=r(n,"{{fieldName}}").exec(e);return i&&""!=i[1]?i[1]:t(e)}):function(e){return t(e)}}function t(e){var t=RegExp("(\\w+)$","gi"),r=e.match(t);return null!=r?r[0]:e}function r(e,t){var r=i(e);return"string"==typeof t&&(t=i(t)),RegExp(r="^"+(r=r.replace(t,"([-\\w]+)")),"i")}function i(e){var t=RegExp("([^-\\w])","gi");return e.replace(t,"\\$1")}function n(e,t){return o(e)?e:t}function o(e){return"string"==typeof e&&null!=e&&""!=e}return(/**
   * Builder for a {@link PropertyStructureDescription}.
   * @constructs PropertyStructureDescriptionBuilder
   * @alias module:datarestructor.PropertyStructureDescriptionBuilder
   */function(){/**
     * @type {module:datarestructor.PropertyStructureDescription}
     */this.description={type:"",category:"",abbreviation:"",image:"",propertyPatternTemplateMode:!1,propertyPattern:"",indexStartsWith:"",groupName:"group",groupPattern:"",groupDestinationPattern:"",groupDestinationName:null,deduplicationPattern:"",getDisplayNameForPropertyName:null,getFieldNameForPropertyName:null,matchesPropertyName:null},/**
     * Sets the type.
     * 
     * Contains the type of the entry, for example: 
     * - "summary" for e.g. a list overview. 
     * - "detail" e.g. when a summary is selected. 
     * - "filter" e.g. for field/value pair results that can be selected as search parameters.
     * 
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example type("summary")
     */this.type=function(e){return this.description.type=n(e,""),this},/**
     * Sets the category.
     * 
     * Contains a short domain nam, for example: 
     * - "product" for products
     * - "vendor" for vendors
     * 
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example category("Product")
     */this.category=function(e){return this.description.category=n(e,""),this},/**
     * Sets the optional abbreviation.
     * 
     * Contains a symbol character or a very short abbreviation of the category.
     * - "P" for products
     * - "V" for vendors
     * 
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example abbreviation("P")
     */this.abbreviation=function(e){return this.description.abbreviation=n(e,""),this},/**
     * Sets the optional path to an image resource.
     * 
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example image("img/product.png")
     */this.image=function(e){return this.description.image=n(e,""),this},/**
     * Sets "equal mode" for the property pattern.
     * 
     * "propertyPattern" need to match exactly if this mode is activated.
     *  It clears propertyPatternTemplateMode which means "equal" mode.
     * @function
     * @returns {module:datarestructor.PropertyStructureDescription}
     */this.propertyPatternEqualMode=function(){return this.description.propertyPatternTemplateMode=!1,this},/**
     * Sets "template mode" for the property pattern.
     * 
     * "propertyPattern" can contain variables like {{fieldName}} and
     * doesn't need to match the property name exactly. If the "propertyPattern"
     * is shorter than the property name, it also matches when the property name
     * starts with the "propertyPattern".
     * 
     * @function
     * @returns {module:datarestructor.PropertyStructureDescription}
     */this.propertyPatternTemplateMode=function(){return this.description.propertyPatternTemplateMode=!0,this},/**
     * Sets the property name pattern. 
     * 
     * Contains single property names with sub types separated by "." without array indices.
     * May contain variables in double curly brackets.
     * 
     * Example: 
     * - responses.hits.hits._source.{{fieldName}}
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example propertyPattern("responses.hits.hits._source.{{fieldName}}")
     */this.propertyPattern=function(e){return this.description.propertyPattern=n(e,""),this},/**
     * Sets the optional beginning of the id that needs to match.
     * Matches all indices if set to "" (or not called).
     * 
     * For example:
     * - "1." will match id="1.3.4" but not "0.1.2".
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example indexStartsWith("1.")
     */this.indexStartsWith=function(e){return this.description.indexStartsWith=n(e,""),this},/**
     * Overrides the display name of the property.
     * 
     * If it is not set or set to "" then it will be derived from the
     * last part of original property name starting with an upper case character.
     *  
     * For example:
     * - "Product"
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example displayPropertyName("Product")
     */this.displayPropertyName=function(t){var r,i;return this.description.getDisplayNameForPropertyName=e(t,this.description),o(t)||(this.description.getDisplayNameForPropertyName=(r=this.description.getDisplayNameForPropertyName,function(e){var t=r(e);return(t=null!=t?t:"").replace("_comma_separated_values","")}),this.description.getDisplayNameForPropertyName=(i=this.description.getDisplayNameForPropertyName,function(e){var t;return(t=i(e)).length>1?t.charAt(0).toUpperCase()+t.slice(1):t})),this},/**
     * Overrides the (technical) field name of the property.
     * 
     * If it is not set or set to "" then it will be derived from the
     * last part of original property name.
     *  
     * For example:
     * - "product"
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example fieldName("product")
     */this.fieldName=function(t){return this.description.getFieldNameForPropertyName=e(t,this.description),this},/**
     * Sets the name of the property, that contains grouped entries. 
     * 
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example groupName("details")
     */this.groupName=function(e){return this.description.groupName=n(e,""),this},/**
     * Sets the pattern that describes how to group entries. 
     * 
     * "groupName" defines the name of this group.
     * A pattern may contain variables in double curly brackets {{variable}}.
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example groupPattern("{{type}}-{{category}}")
     */this.groupPattern=function(e){return this.description.groupPattern=n(e,""),this},/**
     * Sets the pattern that describes where the group should be moved to. 
     * 
     * Default=""=Group will not be moved.
     * A pattern may contain variables in double curly brackets {{variable}}.
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example groupDestinationPattern("main-{{category}}")
     */this.groupDestinationPattern=function(e){return this.description.groupDestinationPattern=n(e,""),this},/**
     * Sets the name of the group when it had been moved to the destination.
     * 
     * The default value is the groupName, which will be used when the value is not valid (null or empty)
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example groupDestinationPattern("options")
     */this.groupDestinationName=function(e){return this.description.groupDestinationName=n(e,this.description.groupName),this},/**
     * Sets the pattern to be used to remove duplicate entries. 
     * 
     * A pattern may contain variables in double curly brackets {{variable}}.
     * A pattern may contain variables in double curly brackets {{variable}}.
     * @function
     * @param {String} [value=""]
     * @returns {module:datarestructor.PropertyStructureDescription}
     * @example deduplicationPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}--{{fieldName}}")
     */this.deduplicationPattern=function(e){return this.description.deduplicationPattern=n(e,""),this},/**
     * Finalizes the settings and builds the  PropertyStructureDescription.
     * @function
     * @returns {module:datarestructor.PropertyStructureDescription}
     */this.build=function(){var e,t;return this.description.matchesPropertyName=o(t=(e=this.description).propertyPattern)?e.propertyPatternTemplateMode?function(e){return null!=r(t,RegExp("\\\\\\{\\\\\\{[-\\w]+\\\\\\}\\\\\\}","gi")).exec(e)}:function(e){return e===t}:function(){return!1;// Without a propertyPattern, no property will match (deactivated mark/identify).
},null==this.description.getDisplayNameForPropertyName&&this.displayPropertyName(""),null==this.description.getFieldNameForPropertyName&&this.fieldName(""),null==this.description.groupDestinationName&&this.groupDestinationName(""),this.description}})}(),/**
 * Adds a group item/entry to the {@link module:datarestructor.DescribedEntry}.
 * 
 * @callback module:datarestructor.addGroupEntryFunction
 * @param {String} groupName name of the group that should be added
 * @param {module:datarestructor.DescribedEntry} describedEntry entry that should be added to the group
 *//**
 * Adds some group items/entries to the {@link module:datarestructor.DescribedEntry}.
 * 
 * @callback module:datarestructor.addGroupEntriesFunction
 * @param {String} groupName name of the group that should be added
 * @param {module:datarestructor.DescribedEntry[]} describedEntry entries that should be added to the group
 *//**
 * @typedef {Object} module:datarestructor.DescribedEntry
 * @property {string} category - category of the result from the PropertyStructureDescription using a short name or e.g. a symbol character
 * @property {string} type - type of the result from PropertyStructureDescription
 * @property {string} [abbreviation=""] - one optional character, a symbol character or a short abbreviation of the category
 * @property {string} [image=""] - one optional path to an image resource
 * @property {string} index - array of numbers containing the split index. Example: "responses[2].hits.hits[4]._source.name" leads to an array with the two elements: [2,4]
 * @property {string} displayName - display name extracted from the point separated hierarchical property name, e.g. "Name"
 * @property {string} fieldName - field name extracted from the point separated hierarchical property name, e.g. "name"
 * @property {string} value - content of the field
 * @property {string[]} groupNames - array of names of all dynamically added properties representing groups
 * @property {module:datarestructor.addGroupEntryFunction} addGroupEntry - function, that adds an entry to the given group. If the group does not exist, it will be created.
 * @property {module:datarestructor.addGroupEntriesFunction} addGroupEntries - function, that adds entries to the given group. If the group does not exist, it will be created.
 * @property {boolean} _isMatchingIndex - true, when _identifier.index matches the described "indexStartsWith"
 * @property {Object} _identifier - internal structure for identifier. Avoid using it outside since it may change.
 * @property {string} _identifier.index - array indices in hierarchical order separated by points, e.g. "0.0"
 * @property {string} _identifier.value - the (single) value of the "flattened" property, e.g. "Smith"
 * @property {string} _identifier.propertyNameWithArrayIndices - the "original" flattened property name in hierarchical order separated by points, e.g. "responses[0].hits.hits[0]._source.name"
 * @property {string} _identifier.propertyNameWithoutArrayIndices - same as propertyNamesWithArrayIndices but without array indices, e.g. "responses.hits.hits._source.name"
 * @property {string} _identifier.groupId - Contains the resolved groupPattern from the PropertyStructureDescription. Entries with the same id will be grouped into the "groupName" of the PropertyStructureDescription.
 * @property {string} _identifier.groupDestinationId - Contains the resolved groupDestinationPattern from the PropertyStructureDescription. Entries with this id will be moved to the given destination group.
 * @property {string} _identifier.deduplicationId - Contains the resolved deduplicationPattern from the PropertyStructureDescription. Entries with the same id will be considered to be a duplicate and hence removed.
 * @property {Object} _description - PropertyStructureDescription for internal use. Avoid using it outside since it may change.
 *//**
 * Returns a field value of the given {@link module:datarestructor.DescribedEntry}.
 * 
 * @callback module:datarestructor.stringFieldOfDescribedEntryFunction
 * @param {module:datarestructor.DescribedEntry} entry described entry that contains the field that should be returned
 * @returns {String} field value 
 */a.DescribedEntryCreator=(r=RegExp("\\[\\d+\\]","gi"),/**
   * Creates a {@link module:datarestructor.DescribedEntry}.
   * @constructs DescribedEntryCreator
   * @alias module:datarestructor.DescribedEntryCreator
   */function(e,t){var i=/**
   * Returns "1.12.123" and [1,12,123] for "results[1].hits.hits[12].aggregates[123]".
   *
   * @param {string} fullPropertyName
   * @param {RegExp} regexWithOneNumberGroup
   * @return {module:datarestructor.ExtractedIndices} extracted indices in different representations
   * @protected
   * @memberof module:datarestructor.DescribedEntryCreator
   */function(e,t){var r,i="",n=[];do(r=t.exec(e))&&(i.length>0&&(i+="."),i+=r[1],n.push(parseInt(r[1])));while(r)return{pointDelimited:i,numberArray:n}}(e.name,RegExp("\\[(\\d+)\\]","gi")),n=e.name.replace(r,""),o=new u.Resolver(this);this.category=t.category,this.type=t.type,this.abbreviation=t.abbreviation,this.image=t.image,/**
     * Array of numbers containing the split index.
     * Example: "responses[2].hits.hits[4]._source.name" leads to an array with two elements: [2,4]
     * This is the public version of the internal variable _identifier.index, which contains in contrast all index elements in one point separated string (e.g. "2.4").
     * @type {number[]}
     */this.index=i.numberArray,this.displayName=t.getDisplayNameForPropertyName(n),this.fieldName=t.getFieldNameForPropertyName(n),this.value=e.value,this.groupNames=[],this._isMatchingIndex=0==i.pointDelimited.indexOf(t.indexStartsWith),this._description=t,this._identifier={index:i.pointDelimited,propertyNameWithArrayIndices:e.name,propertyNameWithoutArrayIndices:n,groupId:"",groupDestinationId:"",deduplicationId:""},this._identifier.groupId=o.replaceResolvableFields(t.groupPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.groupDestinationId=o.replaceResolvableFields(t.groupDestinationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),this._identifier.deduplicationId=o.replaceResolvableFields(t.deduplicationPattern,o.resolvableFieldsOfAll(this,this._description,this._identifier)),/**
     * Adds an entry to the given group. If the group does not exist, it will be created.
     * @param {String} groupName name of the group that should be added
     * @param {module:datarestructor.DescribedEntry} describedEntry entry that should be added to the group
     */this.addGroupEntry=function(e,t){this.addGroupEntries(e,[t])},/**
     * Adds entries to the given group. If the group does not exist, it will be created.
     * @param {String} groupName
     * @param {module:datarestructor.DescribedEntry[]} describedEntries
     */this.addGroupEntries=function(e,t){var r,i;for(this[e]||(this.groupNames.push(e),this[e]=[]),r=0;r<t.length;r+=1)i=t[r],this[e].push(i)}}),/**
   * @typedef {Object} module:datarestructor.TransformConfig
   * @property {boolean} debugMode enables/disables detailed logging
   * @property {number} [maxRecursionDepth=8] Maximum recursion depth
   * @property {number} [removeDuplicationAboveRecursionDepth=1]  Duplications will be removed above the given recursion depth value and remain unchanged below it.
   */a.Transform=function(){function e(e,r){var i,n,o,a;return t(e.category,"")===t(r.category,"")&&t(e.type,"")===t(r.type,"")&&e.fieldName===r.fieldName&&e.value===r.value}function t(e,t){return void 0!==e&&e?e:t}return(/**
   * Main class for the data transformation.
   * @param {module:datarestructor.PropertyStructureDescription[]} descriptions
   * @constructs Transform
   * @alias module:datarestructor.Transform
   */function(t){/**
     * Descriptions of the input data that define the behaviour of the transformation.
     * @type {module:datarestructor.DescribedEntry[]}
     */this.descriptions=t,/**
     * Configuration for the transformation.
     * @protected
     * @type {module:datarestructor.TransformConfig}
     */this.config={/**
       * Debug mode switch, that enables/disables detailed logging.
       * @protected
       * @type {boolean}
       */debugMode:!1,/**
       * Maximum recursion depth. Defaults to 8.
       * @protected
       * @type {number}
       */maxRecursionDepth:8,/**
       * Duplications will be removed above the given recursion depth and remain below it.
       * Defaults to 1.
       *
       * Since fields can contain groups of fields that can contain groups of fields..., cyclic
       * data structures are possible by nature and will lead to duplications. Some of them
       * might be intended e.g. to take one (sub-)field with all (duplicated) groups.
       * To restrict duplications and improve performance it is beneficial to define a
       * recursion depth, above which further duplication won't be used and should be removed/avoided.
       *
       * @protected
       * @type {number}
       */removeDuplicationAboveRecursionDepth:1},/**
     * Enables debug mode. Logs additional information.
     * @returns {module:datarestructor.Transform}
     */this.enableDebugMode=function(){return this.config.debugMode=!0,this},/**
     * Sets the maximum recursion depth. Defaults to 8 if not set.
     * @param {number} value non negative number.
     * @returns {module:datarestructor.Transform}
     */this.setMaxRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid max recursion depth value: "+e;return this.config.maxRecursionDepth=e,this},/**
     * Sets the recursion depth above which duplication will be removed. Duplications below it remain unchanged.
     * Defaults to 1.
     *
     * Since fields can contain groups of fields that can contain groups of fields..., cyclic
     * data structures are possible by nature and will lead to duplications. Some of them
     * might be intended e.g. to take one (sub-)field with all (duplicated) groups.
     * To restrict duplications and improve performance it is beneficial to define a
     * recursion depth, above which further duplication won't be used and should be removed/avoided.
     *
     * @param {number} value non negative number.
     * @returns {module:datarestructor.Transform}
     */this.setRemoveDuplicationAboveRecursionDepth=function(e){if("number"!=typeof e||e<0)throw"Invalid remove duplications above recursion depth value: "+e;return this.config.removeDuplicationAboveRecursionDepth=e,this},/**
     * "Assembly line", that takes the (pared JSON) data and processes it using all given descriptions in their given order.
     * @param {object} data - parsed JSON data or any other data object
     * @returns {module:datarestructor.DescribedEntry[]}
     * @example
     * var allDescriptions = [];
     * allDescriptions.push(summariesDescription());
     * allDescriptions.push(detailsDescription());
     * var result = new datarestructor.Transform(allDescriptions).processJson(jsonData);
     */this.processJson=function(t){return(/**
   * "Assembly line", that takes the jsonData and processes it using all given descriptions in their given order.
   * @param {object} jsonData parsed JSON data or any other data object
   * @param {module:datarestructor.PropertyStructureDescription[]} descriptions - already grouped entries
   * @param {module:datarestructor.TransformConfig} config configuration for the data transformation
   * @returns {module:datarestructor.DescribedEntry[]}
   * @protected
   * @memberof module:datarestructor.Transform
   */function(t,r,i){// "Flatten" the hierarchical input json to an array of property names (point separated "folders") and values.
var n,o,u,p,c,d,h,f,g=s.flattenToArray(t);n=g,o=RegExp("\\[\\d+\\]$","gi"),u=[],p="",c="",n.filter(function(e){if(!e.name.match(o)){""!==p&&(u.push({name:p+"_comma_separated_values",value:c}),p=""),u.push(e);return}var t=e.name.replace(o,"");p===t?c+=", "+e.value:(""!==p&&(u.push({name:p+"_comma_separated_values",value:c}),p=""),p=t,c=e.value),u.push(e)}),// Fill in properties ending with the name "_comma_separated_values" for array values to make it easier to display them.
g=u,i.debugMode&&(console.log("flattened data with array values:"),console.log(g));// Mark, identify and harmonize the flattened data by applying one description after another in their given order.
var m=[];for(f=0;f<r.length;f+=1)// Remove duplicate entries where a deduplicationPattern is described
d=m,h=/**
   * Extracts entries out of "flattened" JSON data and provides an array of objects.
   * @param {Object[]} flattenedData - flattened json from search query result
   * @param {string} flattenedData[].name - name of the property in hierarchical order separated by points
   * @param {string} flattenedData[].value - value of the property as string
   * @param {module:datarestructor.PropertyStructureDescription} - description of structure of the entries that should be extracted
   * @return {module:datarestructor.DescribedEntry[]}
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e,t){var r=RegExp("\\[\\d+\\]","gi"),i=[];return e.filter(function(e){var n=e.name.replace(r,"");if(t.matchesPropertyName(n)){var o=new a.DescribedEntryCreator(e,t);o._isMatchingIndex&&i.push(o)}}),i}(g,r[f]),m=null==d||0==d.length?h:/**
   * Takes two arrays of objects, e.g. [{id: B, value: 2},{id: C, value: 3}]
   * and [{id: A, value: 1},{id: B, value: 4}] and merges them into one:
   * [{id: C, value: 3},{id: A, value: 1},{id: B, value: 4}]
   *
   * Entries with the same id ("duplicates") will be overwritten.
   * Only the last element with the same id remains. The order is
   * determined by the order of the array elements, whereas the first
   * array comes before the second one. This means, that entries with the
   * same id in the second array overwrite entries in the first array,
   * and entries that occur later in the array overwrite earlier ones,
   * if they have the same id.
   *
   * The id is extracted from every element using the given function.
   *
   * @param {module:datarestructor.DescribedEntry[]} entries
   * @param {module:datarestructor.DescribedEntry[]} entriesToMerge
   * @param {module:datarestructor.stringFieldOfDescribedEntryFunction} idOfElementFunction returns the id of an DescribedEntry
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e,t,r){var i,n,o,a=/**
   * Converts the given elements to an object, that provides these
   * entries by their id. For example, [{id: A, value: 1}] becomes
   * result['A'] = 1.
   * @param {module:datarestructor.DescribedEntry[]} elements of DescribedEntry elements
   * @param {module:datarestructor.stringFieldOfDescribedEntryFunction} idOfElementFunction returns the id of an DescribedEntry
   * @return {module:datarestructor.DescribedEntry[] entries indexed by id
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e,t){for(var r={},i=0;i<e.length;i++){var n=e[i];r[t(n)]=n}return r}(t,r),s=[];for(i=0;i<e.length;i+=1)(null==(o=r(n=e[i]))||""===o||null==a[o])&&s.push(n);for(i=0;i<t.length;i+=1)s.push(n=t[i]);return s}(d,h,function(e){return e._identifier.deduplicationId});return g=m,i.debugMode&&(console.log("describedData data:"),console.log(g)),// Group entries where a groupPattern is described
g=/**
   * Converts the given elements into an object, that provides these
   * entries by their id. For example, [{id: A, value: 1}] becomes
   * result['A'] = 1. Furthermore, this function creates a group property (with the name )
   * and collects all related elements (specified by their group pattern) in it.
   *
   * @param {module:datarestructor.DescribedEntry[]} elements of DescribedEntry elements
   * @param {module:datarestructor.stringFieldOfDescribedEntryFunction} groupNameOfElementFunction function, that returns the name of the group property that will be created inside the "main" element.
   * @param {module:datarestructor.stringFieldOfDescribedEntryFunction} groupIdOfElementFunction returns the group id of an DescribedEntry
   * @return {module:datarestructor.DescribedEntry[] entries indexed by id
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e,t,r){for(var i={},n=0;n<e.length;n++){var o=e[n],a=t(o);if(""!==a){var s=r(o);null!=s&&""!==s&&(i[a]||(i[a]=o),i[a].addGroupEntry(s,o))}}return i}(g,function(e){return e._identifier.groupId},function(e){return e._description.groupName}),i.debugMode&&(console.log("grouped describedData data:"),console.log(g)),// Move group entries where a groupDestinationPattern is described
g=/**
   * Takes already grouped {@link module:datarestructor.DescribedEntry} objects and
   * uses their "_identifier.groupDestinationId" (if exists)
   * to move groups to the given destination.
   *
   * This is useful, if separately described groups like "summary" and "detail" should be put together,
   * so that every summery contains a group with the regarding details.
   *
   * @param {module:datarestructor.DescribedEntry[]} groupedObject - already grouped entries
   * @return {module:datarestructor.DescribedEntry[]}
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e){for(var t=Object.keys(e),r=[],i=0;i<t.length;i++){var n=t[i],o=e[n];if(""!=o._description.groupDestinationPattern){var a=o._identifier.groupDestinationId;if(null!=e[a]){var s=o[o._description.groupName];e[a].addGroupEntries(o._description.groupDestinationName,s),r.push(n)}}}// delete all moved entries that had been collected by their key
for(i=0;i<r.length;i+=1){var u=r[i];delete e[u]}return e}(g),i.debugMode&&(console.log("moved grouped describedData data:"),console.log(g)),// Converts the internal described entries  into described fields
g=/**
   * Converts described entries (internal data structure) to described fields (external data structure).
   * Since the structure of a described field is hierarchical, every field needs to be converted
   * in a recursive manner. The maximum recursion depth is taken as the second parameter.
   * @param {module:datarestructor.DescribedEntry[]} describedEntries
   * @param {module:datarestructor.TransformConfig} config configuration for the data transformation
   * @returns {module:described_field.DescribedDataField[]}
   * @protected
   * @memberof module:datarestructor.Transform
   */function(t,r){var i,n=[];for(i=0;i<t.length;i+=1)n.push(/**
   * Describes the context type for the recursive DescribedDataField conversion,
   * that contains everything that needs to be accessible throughout recursion regardless of the
   * recursion depth.
   *
   * @typedef {Object} module:datarestructor.DescribedFieldRecursionContext
   * @param {number} recursionDepth current recursion depth
   * @param {String} groupToSkip name of a group to skip or "" when no group should be skipped. 
   * @param {module:datarestructor.TransformConfig} config configuration for the data transformation
   *//**
   * Converts a internal described entry to a newly created public described field.
   * Since the structure of a described field is hierarchical, this function is called recursively.
   * Because the internal described entries may very likely contain cyclic references, the depth of recursion
   * needs to be limited. Therefore, the current recursion depth is taken as second parameter
   * and the maximum recursion depth is taken as third parameter.
   * @param {module:datarestructor.DescribedEntry} entry the internal entry that will be converted
   * @param {module:datarestructor.DescribedFieldRecursionContext} recursionContext context contains everything that needs to be accessible throughout the recursion.
   * @returns {module:described_field.DescribedDataField}
   * @protected
   * @memberof module:datarestructor.Transform
   */function t(r,i){var n=new l.DescribedDataFieldBuilder().category(r.category).type(r.type).abbreviation(r.abbreviation).image(r.image).index(r.index).displayName(r.displayName).fieldName(r.fieldName).value(r.value).build();if(i.recursionDepth>i.config.maxRecursionDepth)return n;var o=null,a="",s=new l.DescribedDataFieldGroup(n);return(/**
   * Takes the full qualified original property name and extracts a simple name out of it.
   *
   * @callback module:datarestructor.onEntryFoundFunction
   * @param {string} groupName name of the group where the entry had been found.
   * @param {module:datarestructor.DescribedEntry} foundEntry the found entry itself.
   * @param {module:datarestructor.DescribedEntry[]} allEntries the array of all entries where the found entry is an element of.
   *//**
   * Traverses through all groups and their entries and calls the given function on every found entry
   * with the group name and the entry itself as parameters.
   * @param {module:datarestructor.DescribedEntry} rootEntry
   * @param {module:datarestructor.onEntryFoundFunction} onFoundEntry
   * @protected
   * @memberof module:datarestructor.Transform
   */function(e,t){var r,i,n,o;for(r=0;r<e.groupNames.length;r+=1)for(i=0,n=e.groupNames[r];i<e[n].length;i+=1)o=e[n][i],t(n,o,e[n])}(r,function(r,n,u){if(i.groupToSkip===r){i.config.debugMode&&console.log("Removed duplicate group "+r+" at recursion depth "+i.recursionDepth);return}a="",i.recursionDepth>=i.config.removeDuplicationAboveRecursionDepth&&(a=!// Reference: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript/16430730
// Added "elementEqualFunction" to implement equal object detection.
// Arrays are assumed to be sorted. Differently ordered entries are treated as not equal.
function(e,t,r){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!r(e[i],t[i]))return!1;return!0}(n[r],u,e)?"":r),o={recursionDepth:i.recursionDepth+1,config:i.config,groupToSkip:a},s.addGroupEntry(r,t(n,o))}),n)}(t[i],{recursionDepth:0,config:r,groupToSkip:""}));return n}(// Turns the grouped object back into an array of DescribedEntry-Objects
g=function(e){for(var t=[],r=Object.keys(e),i=0;i<r.length;i++){var n=e[r[i]];t.push(n)}return t}(g),i),i.debugMode&&(console.log("transformed result:"),console.log(g)),g}(t,this.descriptions,this.config))}})}(),/**
 * Main fassade for the data restructor as static function(s).
 * 
 * @example 
 * var allDescriptions = [];
 * allDescriptions.push(summariesDescription());
 * allDescriptions.push(detailsDescription());
 * var result = datarestructor.Restructor.processJsonUsingDescriptions(jsonData, allDescriptions);
 * @namespace module:datarestructor.Restructor
 */a.Restructor={},/**
 * Static fassade function for the "Assembly line", that takes the jsonData and processes it using all given descriptions in their given order.
 * @param {object} jsonData - parsed JSON data or any other data object
 * @param {module:datarestructor.PropertyStructureDescription[]} descriptions - already grouped entries
 * @param {boolean} debugMode - false=default=off, true=write additional logs for detailed debugging
 * @returns {module:datarestructor.DescribedEntry[]}
 * @memberof module:datarestructor.Restructor
 * @deprecated since v3.1.0, please use "new datarestructor.Transform(descriptions).processJson(jsonData)".
 */a.Restructor.processJsonUsingDescriptions=function(e,t,r){var i=new a.Transform(t);return r&&i.enableDebugMode(),i.processJson(e)}}),n("7HmuL",function(e,t){/**
 * @typedef {Object} NameValuePair
 * @property {string} name - point separated names of the flattened main and sub properties, e.g. "responses[2].hits.hits[4]._source.name".
 * @property {string} value - value of the property
 *//**
 * @param {object} data hierarchical object that may consist fo fields, subfields and arrays.
 * @param {number} maxRecursionDepth
 * @returns {NameValuePair[]} array of property name and value pairs
 */(($59adffa3db62607f$var$module||{}).exports={}).flattenToArray=function(e,t){var r=[];return("number"!=typeof t||t<1)&&(t=20),function e(i,n,o){if(!(o>t)&&"function"!=typeof i){if(Object(i)!==i)r.push({name:n,value:i});else if(Array.isArray(i)){var a,s=i.length;for(a=0;a<s;a+=1)e(i[a],n+"["+a+"]",o+1);0===s&&(r[n]=[],r.push({name:n,value:""}))}else{var u,l=!0;for(u in i)l=!1,e(i[u],n?n+"."+u:u,o+1);l&&n&&r.push({name:n,value:""})}}}(e,"",0),r}}),n("8ZIyB",function(e,t){var r,n=o(n);// Fallback for vanilla js without modules
function o(e){return e||{}}/**
 * Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @module template_resolver
 */var a=n.exports={};// Export module for npm...
a.internalCreateIfNotExists=o;var s=s||i("7HmuL");// supports vanilla js & npm
a.Resolver=(r=RegExp("\\[\\d+\\]","gi"),/**
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
   */function(e){var t,i,n,o,a=Object.keys(e);for(t=0;t<a.length;t+=1)o=e[i=a[t]],"fieldName"===(n=/**
   * Infos about the full property name including the name of the group (followed by the separator) and the name of the property itself.
   * @param {String} fullPropertyName
   * @returns {Object} Contains "group" (empty or group name including trailing separator "."), "groupWithoutArrayIndices" and "name" (property name).
   * @protected
   * @memberof module:template_resolver.Resolver
   */function(e){var t=e.lastIndexOf("."),i=e;t>0&&(i=e.substr(t+1));var n="";t>0&&(n=e.substr(0,t+1));//includes the trailing ".".
var o=n.replace(r,"");return{group:n,groupWithoutArrayIndices:o,name:i}}(i)).name&&"fieldName"!==o&&(e[n.groupWithoutArrayIndices+o]=e[n.group+"value"]);return e}(this.resolvableFieldsOfAll(this.sourceDataObject)))},/**
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
     */this.resolvableFieldsOfAll=function(){var e,t={},r=function(e){return 0!==e.indexOf("_")&&0>e.indexOf("._")};for(e=0;e<arguments.length;e+=1)/**
   * Collects all flattened name-value-pairs into one object using the property names as keys and their values as values (map-like).
   * Example: `{name: "accountNumber", value: "12345"}` becomes `mapObject["accountNumber"]="12345"`.
   *
   * @param {NameValuePair[]} elements flattened array of name-value-pairs
   * @param {object} mapObject container to collect the results. Needs to be created before e.g. using `{}`.
   * @param {function} filterMatchesFunction takes the property name as string argument and returns true (include) or false (exclude).
   * @protected
   * @memberof module:template_resolver.Resolver
   */(function(e,t,r){var i,n;for(i=0;i<e.length;i+=1)n=e[i],"function"==typeof r&&r(n.name)&&(t[n.name]=n.value)})(s.flattenToArray(arguments[e],3),t,r);return t},/**
     * Replaces all variables in double curly brackets, e.g. {{property}},
     * with the value of that property from the resolvableProperties.
     *
     * Supported property types: string, number, boolean
     * @param {string} stringContainingVariables
     * @param {object[]} resolvableFields (name=value)
     */this.replaceResolvableFields=function(e,t){var r=e,i=Object.keys(t),n=0,o="",a="";for(n=0;n<i.length;n+=1)a=t[o=i[n]],r=r.replace("{{"+o+"}}",a);return r}})}),n("d63jw",function(e,t){var r=i(r);// Fallback for vanilla js without modules
function i(e){return e||{}}/**
 * Describes a data field of the restructured data.
 * @module described_field
 */var n=r.exports={};// Export module for npm...
n.internalCreateIfNotExists=i,/**
 * Describes a field of the restructured data.
 * Dynamically added properties represent custom named groups containing DescribedDataField-Arrays.
 *
 * @typedef {Object} module:described_field.DescribedDataField
 * @property {string} [category=""] - name of the category. Could contain a short domain name like "product" or "vendor".
 * @property {string} [type=""] - type of the data element. Examples: "summary" for e.g. a list overview. "detail" e.g. when a summary is selected. "filter" e.g. for field/value pair results that can be selected as data filters.
 * @property {string} [abbreviation=""] - one optional character, a symbol character or a short abbreviation of the category
 * @property {string} [image=""] - one optional path to an image resource
 * @property {string} index - array of numbers containing the splitted index. Example: "responses[2].hits.hits[4]._source.name" will have an index of [2,4]
 * @property {string[]} groupNames - array of names of all dynamically added properties representing groups
 * @property {string} displayName - display name of the field
 * @property {string} fieldName - field name
 * @property {{*}} value - content of the field
 * @property {module:described_field.DescribedDataField[]} [couldBeAnyCustomGroupName] any number of groups attached to the field each containing multiple fields
 */n.DescribedDataFieldBuilder=function(){function e(e,t){return"string"==typeof e&&null!==e&&""!==e?e:t}return(/**
   * Builds a {@link module:described_field.DescribedDataField}.
   * DescribedDataField is the main element of the restructured data and therefore considered "public".
   * @constructs DescribedDataFieldBuilder
   * @alias module:described_field.DescribedDataFieldBuilder
   */function(){/**
     * @type {module:described_field.DescribedDataField}
     */this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},/**
     * Takes over all values of the template {@link module:described_field.DescribedDataField}.
     * @function
     * @param {module:described_field.DescribedDataField} template
     * @returns {DescribedDataFieldBuilder}
     * @example fromDescribedDataField(sourceField)
     */this.fromDescribedDataField=function(e){return this.category(e.category),this.type(e.type),this.abbreviation(e.abbreviation),this.image(e.image),this.index(e.index),this.groupNames(e.groupNames),this.displayName(e.displayName),this.fieldName(e.fieldName),this.value(e.value),this},/**
     * Sets the category.
     *
     * Contains a short domain nam, for example:
     * - "product" for products
     * - "vendor" for vendors
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example category("Product")
     */this.category=function(t){return this.describedField.category=e(t,""),this},/**
     * Sets the type.
     *
     * Contains the type of the entry, for example:
     * - "summary" for e.g. a list overview.
     * - "detail" e.g. when a summary is selected.
     * - "filter" e.g. for field/value pair results that can be selected as search parameters.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example type("summary")
     */this.type=function(t){return this.describedField.type=e(t,""),this},/**
     * Sets the optional abbreviation.
     *
     * Contains a symbol character or a very short abbreviation of the category.
     * - "P" for products
     * - "V" for vendors
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example abbreviation("P")
     */this.abbreviation=function(t){return this.describedField.abbreviation=e(t,""),this},/**
     * Sets the optional path to an image resource.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example image("img/product.png")
     */this.image=function(t){return this.describedField.image=e(t,""),this},/**
     * Sets the index as an array of numbers containing the splitted array indexes of the source field.
     * Example: "responses[2].hits.hits[4]._source.name" will have an index of [2,4].
     *
     * @function
     * @param {number[]} [value=[]]
     * @returns {DescribedDataFieldBuilder}
     * @example index([2,4])
     */this.index=function(e){return this.describedField.index=null==e?[]:e,this},/**
     * Sets the group names as an array of strings containing the names of the dynamically added properties,
     * that contain an array of {@link module:described_field.DescribedDataField}-Objects.
     *
     * @function
     * @param {string[]} [value=[]]
     * @returns {DescribedDataFieldBuilder}
     * @example groupNames(["summaries","details","options"])
     */this.groupNames=function(e){return this.describedField.groupNames=null==e?[]:e,this},/**
     * Sets the display name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example displayName("Color")
     */this.displayName=function(t){return this.describedField.displayName=e(t,""),this},/**
     * Sets the (technical) field name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example fieldName("color")
     */this.fieldName=function(t){return this.describedField.fieldName=e(t,""),this},/**
     * Sets the value/content of the field.
     *
     * @function
     * @param {*} value
     * @returns {DescribedDataFieldBuilder}
     * @example value("darkblue")
     */this.value=function(e){return this.describedField.value=e,this},/**
     * Finalizes the settings and builds the {@link module:described_field.DescribedDataField}.
     * @function
     * @returns {module:described_field.DescribedDataField}
     */this.build=function(){return this.describedField}})}(),/**
 * Creates a new described data field with all properties of the original one except for dynamically added groups.
 * @param {module:described_field.DescribedDataField} describedDataField
 * @returns {module:described_field.DescribedDataField}
 * @memberof module:described_field
 */n.copyWithoutGroups=function(e){return new n.DescribedDataFieldBuilder().fromDescribedDataField(e).groupNames([]).build()},n.DescribedDataFieldGroup=/**
   * Adds groups to {@link module:described_field.DescribedDataField}s. These groups are dynamically added properties
   * that contain an array of sub fields of the same type {@link module:described_field.DescribedDataField}s.
   *
   * @param {module:described_field.DescribedDataField} dataField
   * @constructs DescribedDataFieldGroup
   * @alias module:described_field.DescribedDataFieldGroup
   * @example new described_field.DescribedDataFieldGroup(field).addGroupEntry("details", detailField);
   */function(e){this.dataField=e,/**
     * Adds an entry to the given group. If the group does not exist, it will be created.
     * @function
     * @param {String} groupName name of the group to which the entry will be added
     * @param {module:described_field.DescribedDataField} describedField sub field that is added to the group
     * @returns {DescribedDataFieldGroup}
     */this.addGroupEntry=function(e,t){return this.addGroupEntries(e,[t]),this},/**
     * Adds entries to the given group. If the group does not exist, it will be created.
     * @function
     * @param {String} groupName name of the group to which the entries will be added
     * @param {module:described_field.DescribedDataField[]} describedFields sub fields that are added to the group
     * @returns {DescribedDataFieldGroup}
     */this.addGroupEntries=function(e,t){var r,i;if(!e||0===e.length||!t||0===t.length)return this;for(void 0===this.dataField[e]&&(this.dataField.groupNames.push(e),this.dataField[e]=[]),r=0;r<t.length;r+=1)i=t[r],this.dataField[e].push(i);return this}}}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.filter||(Array.prototype.filter=function(e,t){if(!(("Function"==typeof e||"function"==typeof e)&&this))throw TypeError();var r,i=this.length>>>0,n=Array(i),o=0,a=-1;if(void 0===t)for(;++a!==i;)a in this&&(r=this[a],e(this[a],a,this)&&(n[o++]=r));else for(;++a!==i;)a in this&&(r=this[a],e.call(t,this[a],a,this)&&(n[o++]=r));return n.length=o,n}),i("3kxfc"),i("26y7f");var o=i("cB1fX");module.exports={datarestructor:o};//# sourceMappingURL=datarestructor-ie.js.map

//# sourceMappingURL=datarestructor-ie.js.map
