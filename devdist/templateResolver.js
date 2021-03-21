// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../lib/js/flattenToArray.js":[function(require,module,exports) {
"use strict";
/**
 * @fileOverview Modded (compatibility, recursion depth) version of: https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objectss
 * @version ${project.version}
 * @see {@link https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objectss|stackoverflow flatten nested json objects}
 */

var module = module || {}; // Fallback for vanilla js without modules

/**
 * internal_object_tools. Not meant to be used outside this repository.
 * @default {}
 */

var internal_object_tools = module.exports = {}; // Export module for npm...

/**
 * @typedef {Object} NameValuePair
 * @property {string} name - point separated names of the flattened main and sub properties, e.g. "responses[2].hits.hits[4]._source.name".
 * @property {string} value - value of the property
 */

/**
 * @param {object} data hierarchical object that may consist fo fields, subfields and arrays.
 * @param {number} maxRecursionDepth
 * @returns {NameValuePair[]} array of property name and value pairs
 */

internal_object_tools.flattenToArray = function (data, maxRecursionDepth) {
  var result = [];

  if (typeof maxRecursionDepth !== "number" || maxRecursionDepth < 1) {
    maxRecursionDepth = 20;
  }

  function recurse(cur, prop, depth) {
    if (depth > maxRecursionDepth || typeof cur === "function") {
      return;
    }

    if (Object(cur) !== cur) {
      result.push({
        name: prop,
        value: cur
      });
    } else if (Array.isArray(cur)) {
      var i;
      var l = cur.length;

      for (i = 0; i < l; i += 1) {
        recurse(cur[i], prop + "[" + i + "]", depth + 1);
      }

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

      for (p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p, depth + 1);
      }

      if (isEmpty && prop) {
        result.push({
          name: prop,
          value: ""
        });
      }
    }
  }

  recurse(data, "", 0);
  return result;
};
},{}],"templateResolver.js":[function(require,module,exports) {
/**
 * @file Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @version {@link https://github.com/JohT/data-restructor-js/releases/latest latest version}
 * @author JohT
 * @version ${project.version}
 */
"use strict";

var module = templateResolverInternalCreateIfNotExists(module); // Fallback for vanilla js without modules

function templateResolverInternalCreateIfNotExists(objectToCheck) {
  return objectToCheck || {};
}
/**
 * Provides a simple template resolver, that replaces variables in double curly brackets with the values of a given object.
 * @module template_resolver
 */


var template_resolver = module.exports = {}; // Export module for npm...

template_resolver.internalCreateIfNotExists = templateResolverInternalCreateIfNotExists;

var internal_object_tools = internal_object_tools || require("../../lib/js/flattenToArray"); // supports vanilla js & npm


template_resolver.Resolver = function () {
  var removeArrayBracketsRegEx = new RegExp("\\[\\d+\\]", "gi");
  /**
   * Resolver. Is used inside this repository. It could also be used outside.
   * @param {*} sourceDataObject The properties of this object will be used to replace the placeholders in the template.
   * @constructs Resolver
   * @alias module:template_resolver.Resolver
   */

  function Resolver(sourceDataObject) {
    /**
     * The properties of this source data object will be used to replace the placeholders in the template.
     */
    this.sourceDataObject = sourceDataObject;
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
     */

    this.resolveTemplate = function (template) {
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
     */


    this.resolvableFieldsOfAll = function () {
      var map = {};

      var ignoreInternalFields = function ignoreInternalFields(propertyName) {
        return propertyName.indexOf("_") !== 0 && propertyName.indexOf("._") < 0;
      };

      var index;

      for (index = 0; index < arguments.length; index += 1) {
        addToFilteredMapObject(internal_object_tools.flattenToArray(arguments[index], 3), map, ignoreInternalFields);
      }

      return map;
    };
    /**
     * Replaces all variables in double curly brackets, e.g. {{property}},
     * with the value of that property from the resolvableProperties.
     *
     * Supported property types: string, number, boolean
     * @param {string} stringContainingVariables
     * @param {object[]} resolvableFields (name=value)
     */


    this.replaceResolvableFields = function (stringContainingVariables, resolvableFields) {
      var replaced = stringContainingVariables;
      var propertyNames = Object.keys(resolvableFields);
      var propertyIndex = 0;
      var propertyName = "";
      var propertyValue = "";

      for (propertyIndex = 0; propertyIndex < propertyNames.length; propertyIndex += 1) {
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
   */


  function addFieldsPerGroup(map) {
    var propertyNames = Object.keys(map);
    var i, fullPropertyName, propertyInfo, propertyValue;

    for (i = 0; i < propertyNames.length; i += 1) {
      fullPropertyName = propertyNames[i];
      propertyValue = map[fullPropertyName];
      propertyInfo = getPropertyNameInfos(fullPropertyName); // Supports fields that are defined by a property named "fieldName" (containing the name)
      // and a property named "value" inside the same sub object (containing its value).
      // Ignore custom fields that are named "fieldName"(propertyValue), since this would lead to an unpredictable behavior.
      // TODO could make "fieldName" and "value" configurable

      if (propertyInfo.name === "fieldName" && propertyValue !== "fieldName") {
        map[propertyInfo.groupWithoutArrayIndices + propertyValue] = map[propertyInfo.group + "value"];
      }
    }

    return map;
  }
  /**
   * Infos about the full property name including the name of the group (followed by the separator) and the name of the property itself.
   * @param {String} fullPropertyName
   * @returns {Object} Contains "group" (empty or group name including trailing separator "."), "groupWithoutArrayIndices" and "name" (property name).
   * @protected
   * @memberof module:template_resolver.Resolver
   */


  function getPropertyNameInfos(fullPropertyName) {
    var positionOfRightMostSeparator = fullPropertyName.lastIndexOf(".");
    var propertyName = fullPropertyName;

    if (positionOfRightMostSeparator > 0) {
      propertyName = fullPropertyName.substr(positionOfRightMostSeparator + 1);
    }

    var propertyGroup = "";

    if (positionOfRightMostSeparator > 0) {
      propertyGroup = fullPropertyName.substr(0, positionOfRightMostSeparator + 1); //includes the trailing ".".
    }

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
   */


  function addToFilteredMapObject(elements, mapObject, filterMatchesFunction) {
    var index, element;

    for (index = 0; index < elements.length; index += 1) {
      element = elements[index];

      if (typeof filterMatchesFunction === "function" && filterMatchesFunction(element.name)) {
        mapObject[element.name] = element.value;
      }
    }

    return mapObject;
  }

  return Resolver;
}();
},{"../../lib/js/flattenToArray":"../../lib/js/flattenToArray.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54027" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","templateResolver.js"], null)
//# sourceMappingURL=/templateResolver.js.map