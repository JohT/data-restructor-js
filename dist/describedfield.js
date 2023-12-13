var i=globalThis,e={},t={},r=i.parcelRequirec1f2;null==r&&((r=function(i){if(i in e)return e[i].exports;if(i in t){var r=t[i];delete t[i];var s={id:i,exports:{}};return e[i]=s,r.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+i+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(i,e){t[i]=e},i.parcelRequirec1f2=r),(0,r.register)("aJuQy",function(i,e){var t=r(t);// Fallback for vanilla js without modules
function r(i){return i||{}}/**
 * Describes a data field of the restructured data.
 * @module described_field
 */var s=t.exports={};// Export module for npm...
s.internalCreateIfNotExists=r,/**
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
 */s.DescribedDataFieldBuilder=function(){function i(i,e){return"string"==typeof i&&null!==i&&""!==i?i:e}return(/**
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
     */this.fromDescribedDataField=function(i){return this.category(i.category),this.type(i.type),this.abbreviation(i.abbreviation),this.image(i.image),this.index(i.index),this.groupNames(i.groupNames),this.displayName(i.displayName),this.fieldName(i.fieldName),this.value(i.value),this},/**
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
     */this.category=function(e){return this.describedField.category=i(e,""),this},/**
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
     */this.type=function(e){return this.describedField.type=i(e,""),this},/**
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
     */this.abbreviation=function(e){return this.describedField.abbreviation=i(e,""),this},/**
     * Sets the optional path to an image resource.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example image("img/product.png")
     */this.image=function(e){return this.describedField.image=i(e,""),this},/**
     * Sets the index as an array of numbers containing the splitted array indexes of the source field.
     * Example: "responses[2].hits.hits[4]._source.name" will have an index of [2,4].
     *
     * @function
     * @param {number[]} [value=[]]
     * @returns {DescribedDataFieldBuilder}
     * @example index([2,4])
     */this.index=function(i){return this.describedField.index=null==i?[]:i,this},/**
     * Sets the group names as an array of strings containing the names of the dynamically added properties,
     * that contain an array of {@link module:described_field.DescribedDataField}-Objects.
     *
     * @function
     * @param {string[]} [value=[]]
     * @returns {DescribedDataFieldBuilder}
     * @example groupNames(["summaries","details","options"])
     */this.groupNames=function(i){return this.describedField.groupNames=null==i?[]:i,this},/**
     * Sets the display name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example displayName("Color")
     */this.displayName=function(e){return this.describedField.displayName=i(e,""),this},/**
     * Sets the (technical) field name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example fieldName("color")
     */this.fieldName=function(e){return this.describedField.fieldName=i(e,""),this},/**
     * Sets the value/content of the field.
     *
     * @function
     * @param {*} value
     * @returns {DescribedDataFieldBuilder}
     * @example value("darkblue")
     */this.value=function(i){return this.describedField.value=i,this},/**
     * Finalizes the settings and builds the {@link module:described_field.DescribedDataField}.
     * @function
     * @returns {module:described_field.DescribedDataField}
     */this.build=function(){return this.describedField}})}(),/**
 * Creates a new described data field with all properties of the original one except for dynamically added groups.
 * @param {module:described_field.DescribedDataField} describedDataField
 * @returns {module:described_field.DescribedDataField}
 * @memberof module:described_field
 */s.copyWithoutGroups=function(i){return new s.DescribedDataFieldBuilder().fromDescribedDataField(i).groupNames([]).build()},s.DescribedDataFieldGroup=/**
   * Adds groups to {@link module:described_field.DescribedDataField}s. These groups are dynamically added properties
   * that contain an array of sub fields of the same type {@link module:described_field.DescribedDataField}s.
   *
   * @param {module:described_field.DescribedDataField} dataField
   * @constructs DescribedDataFieldGroup
   * @alias module:described_field.DescribedDataFieldGroup
   * @example new described_field.DescribedDataFieldGroup(field).addGroupEntry("details", detailField);
   */function(i){this.dataField=i,/**
     * Adds an entry to the given group. If the group does not exist, it will be created.
     * @function
     * @param {String} groupName name of the group to which the entry will be added
     * @param {module:described_field.DescribedDataField} describedField sub field that is added to the group
     * @returns {DescribedDataFieldGroup}
     */this.addGroupEntry=function(i,e){return this.addGroupEntries(i,[e]),this},/**
     * Adds entries to the given group. If the group does not exist, it will be created.
     * @function
     * @param {String} groupName name of the group to which the entries will be added
     * @param {module:described_field.DescribedDataField[]} describedFields sub fields that are added to the group
     * @returns {DescribedDataFieldGroup}
     */this.addGroupEntries=function(i,e){var t,r;if(!i||0===i.length||!e||0===e.length)return this;for(void 0===this.dataField[i]&&(this.dataField.groupNames.push(i),this.dataField[i]=[]),t=0;t<e.length;t+=1)r=e[t],this.dataField[i].push(r);return this}}}),r("aJuQy");//# sourceMappingURL=describedfield.js.map

//# sourceMappingURL=describedfield.js.map
