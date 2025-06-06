// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"btK3Z":[function(require,module,exports,__globalThis) {
"use strict";
require("b3504c6476ecf38d");
require("89ce2effd221e06f");
var template_resolver = require("875b6c9f7bedeb5");
module.exports = {
    template_resolver: template_resolver
};

},{"b3504c6476ecf38d":"eZRd3","89ce2effd221e06f":"7uZBC","875b6c9f7bedeb5":"bUhQb"}],"eZRd3":[function(require,module,exports,__globalThis) {
//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
if (!Array.prototype.indexOf) Array.prototype.indexOf = function(Object1, max, min) {
    "use strict";
    return function indexOf(member, fromIndex) {
        if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");
        var that = Object1(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
        if (i < 0) i = max(0, Len + i);
        else if (i >= Len) return -1;
        if (member === void 0) {
            for(; i !== Len; ++i)if (that[i] === void 0 && i in that) return i; // undefined
        } else if (member !== member) {
            for(; i !== Len; ++i)if (that[i] !== that[i]) return i; // NaN
        } else for(; i !== Len; ++i)if (that[i] === member) return i; // all else
        return -1; // if the value was not found, then return -1
    };
}(Object, Math.max, Math.min);

},{}],"7uZBC":[function(require,module,exports,__globalThis) {
//http://tokenposts.blogspot.com/2012/04/javascript-objectkeys-browser.html
if (!Object.keys) Object.keys = function(o) {
    if (o !== Object(o)) throw new TypeError('Object.keys called on a non-object');
    var k = [], p;
    for(p in o)if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
    return k;
};

},{}],"bUhQb":[function(require,module,exports,__globalThis) {
/**
 * @file Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @version {@link https://github.com/JohT/data-restructor-js/releases/latest latest version}
 * @author JohT
 * @version ${project.version}
 */ "use strict";
var module = templateResolverInternalCreateIfNotExists(module); // Fallback for vanilla js without modules
function templateResolverInternalCreateIfNotExists(objectToCheck) {
    return objectToCheck || {};
}
/**
 * Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @module template_resolver
 */ var template_resolver = module.exports = {}; // Export module for npm...
template_resolver.internalCreateIfNotExists = templateResolverInternalCreateIfNotExists;
var internal_object_tools = internal_object_tools || require("cbde56e74c44f93f"); // supports vanilla js & npm
template_resolver.Resolver = function() {
    var removeArrayBracketsRegEx = new RegExp("\\[\\d+\\]", "gi");
    /**
   * Resolver. Is used inside this repository. It could also be used outside.
   * @param {*} sourceDataObject The properties of this object will be used to replace the placeholders in the template.
   * @constructs Resolver
   * @alias module:template_resolver.Resolver
   */ function Resolver(sourceDataObject) {
        /**
     * The properties of this source data object will be used to replace the placeholders in the template.
     */ this.sourceDataObject = sourceDataObject;
        /**
     * Resolves the given template.
     *
     * The template may contain variables in double curly brackets.
     * Supported variables are all properties of this object, e.g. "{{fieldName}}", "{{displayName}}", "{{value}}".
     * Since this object may also contains (described) groups of sub objects, they can also be used, e.g. "{{summaries[0].value}}"
     * Parts of the index can be inserted by using e.g. "{{index[1]}}".
     *
     * @param {string} template
     * @returns {string} resolved template
     */ this.resolveTemplate = function(template) {
            return this.replaceResolvableFields(template, addFieldsPerGroup(this.resolvableFieldsOfAll(this.sourceDataObject)));
        };
        /**
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
     */ this.resolvableFieldsOfAll = function() {
            var map = {};
            var ignoreInternalFields = function(propertyName) {
                return propertyName.indexOf("_") !== 0 && propertyName.indexOf("._") < 0;
            };
            var index;
            for(index = 0; index < arguments.length; index += 1)addToFilteredMapObject(internal_object_tools.flattenToArray(arguments[index], 3), map, ignoreInternalFields);
            return map;
        };
        /**
     * Replaces all variables in double curly brackets, e.g. {{property}},
     * with the value of that property from the resolvableProperties.
     *
     * Supported property types: string, number, boolean
     * @param {string} stringContainingVariables
     * @param {object[]} resolvableFields (name=value)
     */ this.replaceResolvableFields = function(stringContainingVariables, resolvableFields) {
            var replaced = stringContainingVariables;
            var propertyNames = Object.keys(resolvableFields);
            var propertyIndex = 0;
            var propertyName = "";
            var propertyValue = "";
            for(propertyIndex = 0; propertyIndex < propertyNames.length; propertyIndex += 1){
                propertyName = propertyNames[propertyIndex];
                propertyValue = resolvableFields[propertyName];
                replaced = replaced.replace("{{" + propertyName + "}}", propertyValue);
            }
            return replaced;
        };
    }
    /**
   * Adds the value of the "fieldName" property (including its group prefix) and its associated "value" property content.
   * For example: detail[2].fieldName="name", detail[2].value="Smith" lead to the additional property detail.name="Smith".
   * @param {object} object with resolvable field names and their values.
   * @returns {object} object with resolvable field names and their values.
   * @protected
   * @memberof module:template_resolver.Resolver
   */ function addFieldsPerGroup(map) {
        var propertyNames = Object.keys(map);
        var i, fullPropertyName, propertyInfo, propertyValue;
        for(i = 0; i < propertyNames.length; i += 1){
            fullPropertyName = propertyNames[i];
            propertyValue = map[fullPropertyName];
            propertyInfo = getPropertyNameInfos(fullPropertyName);
            // Supports fields that are defined by a property named "fieldName" (containing the name)
            // and a property named "value" inside the same sub object (containing its value).
            // Ignore custom fields that are named "fieldName"(propertyValue), since this would lead to an unpredictable behavior.
            // TODO could make "fieldName" and "value" configurable
            if (propertyInfo.name === "fieldName" && propertyValue !== "fieldName") map[propertyInfo.groupWithoutArrayIndices + propertyValue] = map[propertyInfo.group + "value"];
        }
        return map;
    }
    /**
   * Infos about the full property name including the name of the group (followed by the separator) and the name of the property itself.
   * @param {String} fullPropertyName
   * @returns {Object} Contains "group" (empty or group name including trailing separator "."), "groupWithoutArrayIndices" and "name" (property name).
   * @protected
   * @memberof module:template_resolver.Resolver
   */ function getPropertyNameInfos(fullPropertyName) {
        var positionOfRightMostSeparator = fullPropertyName.lastIndexOf(".");
        var propertyName = fullPropertyName;
        if (positionOfRightMostSeparator > 0) propertyName = fullPropertyName.substr(positionOfRightMostSeparator + 1);
        var propertyGroup = "";
        if (positionOfRightMostSeparator > 0) propertyGroup = fullPropertyName.substr(0, positionOfRightMostSeparator + 1); //includes the trailing ".".
        var propertyGroupWithoutArrayIndices = propertyGroup.replace(removeArrayBracketsRegEx, "");
        return {
            group: propertyGroup,
            groupWithoutArrayIndices: propertyGroupWithoutArrayIndices,
            name: propertyName
        };
    }
    /**
   * Collects all flattened name-value-pairs into one object using the property names as keys and their values as values (map-like).
   * Example: `{name: "accountNumber", value: "12345"}` becomes `mapObject["accountNumber"]="12345"`.
   *
   * @param {NameValuePair[]} elements flattened array of name-value-pairs
   * @param {object} mapObject container to collect the results. Needs to be created before e.g. using `{}`.
   * @param {function} filterMatchesFunction takes the property name as string argument and returns true (include) or false (exclude).
   * @protected
   * @memberof module:template_resolver.Resolver
   */ function addToFilteredMapObject(elements, mapObject, filterMatchesFunction) {
        var index, element;
        for(index = 0; index < elements.length; index += 1){
            element = elements[index];
            if (typeof filterMatchesFunction === "function" && filterMatchesFunction(element.name)) mapObject[element.name] = element.value;
        }
        return mapObject;
    }
    return Resolver;
}();

},{"cbde56e74c44f93f":"4biBi"}],"4biBi":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * @fileOverview Modded (compatibility, recursion depth) version of: https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objectss
 * @version ${project.version}
 * @see {@link https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objectss|stackoverflow flatten nested json objects}
 */ var module = module || {}; // Fallback for vanilla js without modules
/**
 * internal_object_tools. Not meant to be used outside this repository.
 * @default {}
 */ var internal_object_tools = module.exports = {}; // Export module for npm...
/**
 * @typedef {Object} NameValuePair
 * @property {string} name - point separated names of the flattened main and sub properties, e.g. "responses[2].hits.hits[4]._source.name".
 * @property {string} value - value of the property
 */ /**
 * @param {object} data hierarchical object that may consist fo fields, subfields and arrays.
 * @param {number} maxRecursionDepth
 * @returns {NameValuePair[]} array of property name and value pairs
 */ internal_object_tools.flattenToArray = function(data, maxRecursionDepth) {
    var result = [];
    if (typeof maxRecursionDepth !== "number" || maxRecursionDepth < 1) maxRecursionDepth = 20;
    function recurse(cur, prop, depth) {
        if (depth > maxRecursionDepth || typeof cur === "function") return;
        if (Object(cur) !== cur) result.push({
            name: prop,
            value: cur
        });
        else if (Array.isArray(cur)) {
            var i;
            var l = cur.length;
            for(i = 0; i < l; i += 1)recurse(cur[i], prop + "[" + i + "]", depth + 1);
            if (l === 0) {
                result[prop] = [];
                result.push({
                    name: prop,
                    value: ""
                });
            }
        } else {
            var isEmpty = true;
            var p;
            for(p in cur){
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p, depth + 1);
            }
            if (isEmpty && prop) result.push({
                name: prop,
                value: ""
            });
        }
    }
    recurse(data, "", 0);
    return result;
};

},{}]},["btK3Z"], "btK3Z", "parcelRequirec1f2", {})

