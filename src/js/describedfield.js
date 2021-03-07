/**
 * @file Describes a data field of the restructured data.
 * @version {@link https://github.com/JohT/data-restructor-js/releases/latest latest version}
 * @author JohT
 * @version ${project.version}
 */
"use strict";
var module = describedFieldInternalCreateIfNotExists(module); // Fallback for vanilla js without modules

function describedFieldInternalCreateIfNotExists(objectToCheck) {
  return objectToCheck || {};
}

/**
 * Describes a data field of the restructured data.
 * @module described_field
 */
var described_field = (module.exports = {}); // Export module for npm...
described_field.internalCreateIfNotExists = describedFieldInternalCreateIfNotExists;

/**
 * Describes a field of the restructured data.
 * Dynamically added properties represent custom named groups containing DescribedDataField-Arrays.
 *
 * @global
 * @typedef {Object} DescribedDataField
 * @property {string} [category=""] - name of the category. Could contain a short domain name like "product" or "vendor".
 * @property {string} [type=""] - type of the data element. Examples: "summary" for e.g. a list overview. "detail" e.g. when a summary is selected. "filter" e.g. for field/value pair results that can be selected as data filters.
 * @property {string} [abbreviation=""] - one optional character, a symbol character or a short abbreviation of the category
 * @property {string} [image=""] - one optional path to an image resource
 * @property {string} index - array of numbers containing the splitted index. Example: "responses[2].hits.hits[4]._source.name" will have an index of [2,4]
 * @property {string} displayName - display name of the field
 * @property {string} fieldName - field name
 * @property {string} value - content of the field
 * @property {DescribedDataField[]} [couldBeAnyCustomGroupName] any number of groups attached to the field each containing multiple fields
 */

/**
 * DescribedDataFieldBuilder. 
 * It is used to build a DescribedDataField that is the main element of the restructured data and therefore considered "public".
 */
described_field.DescribedDataFieldBuilder = (function () {
  /**
   * Constructor function and container for everything, that needs to exist per instance.
   * @constructs DataFieldBuilder
   */
  function DescribedDataFieldBuilder() {
    /**
     * @type {DescribedDataField}
     */
    this.describedField = {
      category: "",
      type: "",
      abbreviation: "",
      image: "",
      index: [],
      displayName: "",
      fieldName: "",
      value: ""
    };
    /**
     * Takes over all values of the given DescribedDataField.
     * @function
     * @param {DescribedDataField} template 
     * @returns {DescribedDataFieldBuilder}
     * @example fromDescribedDataField(sourceField)
     */
    this.fromDescribedDataField = function(template) {
      this.category(template.category);
      this.type(template.type);
      this.abbreviation(template.abbreviation);
      this.image(template.image);
      this.index(template.index);
      this.displayName(template.displayName);
      this.fieldName(template.fieldName);
      this.value(template.value);
      return this;
    };
    /**
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
     */
    this.category = function (value) {
      this.describedField.category = withDefaultString(value, "");
      return this;
    };
    /**
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
     */
    this.type = function (value) {
      this.describedField.type = withDefaultString(value, "");
      return this;
    };
    /**
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
     */
    this.abbreviation = function (value) {
      this.describedField.abbreviation = withDefaultString(value, "");
      return this;
    };
    /**
     * Sets the optional path to an image resource.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example image("img/product.png")
     */
    this.image = function (value) {
      this.describedField.image = withDefaultString(value, "");
      return this;
    };
    /**
     * Sets the index as an array of numbers containing the splitted array indexes of the source field.
     * Example: "responses[2].hits.hits[4]._source.name" will have an index of [2,4].
     *
     * @function
     * @param {number[]} [value=[]]
     * @returns {DescribedDataFieldBuilder}
     * @example index([2,4])
     */
    this.index = function (value) {
      this.describedField.index = withDefaultArray(value, []);
      return this;
    };
    /**
     * Sets the display name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example displayName("Color")
     */
    this.displayName = function (value) {
      this.describedField.displayName = withDefaultString(value, "");
      return this;
    };
    /**
     * Sets the (technical) field name.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example fieldName("color")
     */
    this.fieldName = function (value) {
      this.describedField.fieldName = withDefaultString(value, "");
      return this;
    };
   /**
     * Sets the value/content of the field.
     *
     * @function
     * @param {String} [value=""]
     * @returns {DescribedDataFieldBuilder}
     * @example value("darkblue")
     */
    this.value = function (value) {
      this.describedField.value = withDefaultString(value, "");
      return this;
    };
 
    /**
     * Finalizes the settings and builds the DescribedDataField.
     * @function
     * @returns {DescribedDataField}
     */
    this.build = function () {
      return this.describedField;
    };
  }

  function isSpecifiedString(value) {
    return typeof value === "string" && value !== null && value !== "";
  }

  function withDefaultString(value, defaultValue) {
    return isSpecifiedString(value) ? value : defaultValue;
  }

  function withDefaultArray(value, defaultValue) {
    return value !== null? value : defaultValue;
  }

  return DescribedDataFieldBuilder;
}());
