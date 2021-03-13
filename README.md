[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![Language](https://img.shields.io/github/languages/top/JohT/data-restructor-js)
<<<<<<< HEAD
![Branches](https://img.shields.io/badge/Coverage-94.02%25-brightgreen.svg)
=======
![Branches](https://img.shields.io/badge/Coverage-94.02%25-brightgreen.svg)
>>>>>>> 5e4ee5e (DescribedDataField contains group names)
![![npm](./src/npm.svg)](https://aleen42.github.io/badges/src/npm.svg)
![![jasmine](./src/jasmine.svg)](https://aleen42.github.io/badges/src/jasmine.svg)
![![eslint](./src/eslint.svg)](https://aleen42.github.io/badges/src/eslint.svg)
![JSDoc](https://img.shields.io/github/package-json/dependency-version/JohT/data-restructor-js/dev/jsdoc)
![JSDoc](https://img.shields.io/github/package-json/dependency-version/JohT/data-restructor-js/dev/jsdoc)
![nyc](https://img.shields.io/github/package-json/dependency-version/JohT/data-restructor-js/dev/nyc)
![parcel-bundler](https://img.shields.io/github/package-json/dependency-version/JohT/data-restructor-js/dev/parcel-bundler)

# data-reconstructor-js

When parsing JSON on client-side, the structure of it attracts most of our attention.  
If the structure evolves over time, it leads to recurring changes in the code that depends on it.

## Features:
* Adapter that takes e.g. parsed JSON and transforms it into a uniform structure
* Multiple transformation steps including flattening, removing duplicates, grouping, ...
* Takes descriptions that reflect the incoming structure and define the uniform output
* Reusable and flexible
* Supports most browser including IE 5

## Not intended to be used when 
* a "backend for frontend" exists, that is responsible for delivering the structure and content the way the client needs it.
* the structure of the data is already stable, well abstracted and/or rather generic. 
* the code, that depends on the structure of the data, can easily be changed (only a view lines, same team, ...).

## Quickstart
Use the following command to install the library using npm:
```
npm install data-restructor
```
Alternatively, the sources can be found inside the
[source folder](https://github.com/JohT/data-restructor-js/tree/master/src/):
- [datarestructor.js](https://github.com/JohT/data-restructor-js/blob/master/src/js/datarestructor.js) 
- [templateResolver.js](https://github.com/JohT/data-restructor-js/blob/master/src/js/templateResolver.js) 
- [describedfield.js](https://github.com/JohT/data-restructor-js/blob/master/src/js/describedfield.js) 

The built versions can be found inside the 
[distribution folder](https://github.com/JohT/data-restructor-js/tree/master/dist):
- [datarestructor.js](https://github.com/JohT/data-restructor-js/blob/master/dist/datarestructor.js) 
- [datarestructor-ie.js](https://github.com/JohT/data-restructor-js/blob/master/dist/datarestructor-ie.js) (full compatibility with IE)
- [templateResolver.js](https://github.com/JohT/data-restructor-js/blob/master/dist/templateResolver.js) 
- [templateResolver-ie.js](https://github.com/JohT/data-restructor-js/blob/master/dist/templateResolver-ie.js) (full compatibility with IE)
- [describedfield.js](https://github.com/JohT/data-restructor-js/blob/master/dist/describedfield.js) 
- [describedfield-ie.js](https://github.com/JohT/data-restructor-js/blob/master/dist/describedfield-ie.js) (full compatibility with IE)

## Code Documentation
The code documentation generated using [JSDoc](https://jsdoc.app) can be found inside the 
[documentation folder](https://github.com/JohT/data-restructor-js/tree/master/doc/).

## Example
As a starting point you may have a look at the following example.   
A running, comprehensive example can be found here: 
[DataRestructorUseCaseTest.js](https://github.com/JohT/data-restructor-js/blob/master/test/js/DataRestructorUseCaseTest.js)
### Input Object
```json
{
    "responses": [
        {
            "hits": {
                "total": {
                    "value": 1
                },
                "hits": [
                    {
                        "_source": {
                            "iban": "AT424321012345678901",
                            "accountnumber": "12345678901",
                            "customernumber": "00001234567",
                            "currency": "USD",
                            "tags": [
                                "active",
                                "online"
                            ]
                        }
                    }
                ]
            }
        }
    ]
}
```

### Code
```javascript
function restructureJson(jsonData) {
  var allDescriptions = [];
  allDescriptions.push(summariesDescription());
  allDescriptions.push(detailsDescription());
  return datarestructor.Restructor.processJsonUsingDescriptions(jsonData, allDescriptions));
}

function summariesDescription() {
  return new datarestructor.PropertyStructureDescriptionBuilder()
    .type("summary")
    .category("account")
    .propertyPatternEqualMode()
    .propertyPattern("responses.hits.hits._source.accountnumber")
    .groupName("summaries")
    .groupPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}")
    .build();
}

function detailsDescription() {
  return new datarestructor.PropertyStructureDescriptionBuilder()
    .type("detail")
    .category("account")
    .propertyPatternTemplateMode()
    .propertyPattern("responses.hits.hits._source.{{fieldName}}")
    .groupName("details")
    .groupPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}")
    .groupDestinationPattern("account--summary--{{index[0]}}--{{index[1]}}")
    .build();
  }
```

### Output Java Object
An Javascript object with mainly this structure (see [DescribedEntry](#DescribedEntry) for more details) and content is returned, when the function `restructureJson` from above is called:
```yaml
category: "account"
displayName: "Accountnumber"
fieldName: "accountnumber"
type: "summary"
value: "12345678901"
details:
  - category: "account"
    type: "detail"  
    displayName: "Iban"
    fieldName: "iban"
    value: "AT424321012345678901"
  - category: "account"
    type: "detail"
    displayName: "Accountnumber"
    fieldName: "accountnumber"
    value: "12345678901"
  - category: "Konto"
    type: "detail"
    displayName: "Customernumber"
    fieldName: "customernumber"
    value: "00001234567"
  - category: "Konto"
    type: "detail"
    displayName: "Currency"
    fieldName: "currency"
    value: "USD"
  - category: "Konto"
    type: "detail"
    displayName: "Tags"
    fieldName: "tags"
    value: "active"
  - category: "Konto"
    type: "detail"
    displayName: "Tags"
    fieldName: "tags"
    value: "online"
  - category: "Konto"
    type: "detail"
    displayName: "Tags"
    fieldName: "tags_comma_separated_values"
    value: "active, online"
```

## Transformation Steps:

### 1. Flatten hierarchical data object 
The input data object, e.g. parsed from JSON, is converted to an array of point separated property names and their values. 
For example this structure...
```json
{
    "responses": [
        {
            "hits": {
                "total": {
                    "value": 1
                },
                "hits": [
                    {
                        "_source": {
                            "accountnumber": "123"
                        }
                    }
                ]
            }
        }
    ]
}
```
...is flattened to...
```
responses[0].hits.total.value=1
responses[0].hits.hits[0]._source.accountnumber=123
```

### 2. Add array value properties ending with "_comma_separated_values"
To make it easier to e.g. display array values like tags,
an additional property is added that combines the array values to a single property,
that contains the values in a comma separated way. 
This newly created property gets the name of the array property followed by "_comma_separated_values" 
and is inserted right after the single array values.

For example these lines...
```
responses[0].hits.total.value=1
responses[0].hits.hits[0]._source.tags[0]=active
responses[0].hits.hits[0]._source.tags[1]=online
```
...will lead to an additional property that looks like this... 
```
responses[0].hits.hits[0]._source.tags_comma_separated_values=active, online
```

### 3. Attach description to matching properties 
For every given description, all properties are searched for matches. 
If a description matches a property, the description gets attached to it.
This can be used to categorize and filter properties.
The description builder accepts these ways to configure property matching:

- Equal Mode (default):  
The property name needs to match the described pattern exactly. It is not needed to set equal mode.
The field name will be (by default) taken from the right most (after the last separator `.`) element of the property name.
In the example below the field name will be "accountnumber".
Example:
   ```javascript
   new datarestructor.PropertyStructureDescriptionBuilder()
   .propertyPatternEqualMode()
   .propertyPattern("responses.hits.hits._source.accountnumber")
   ...
  ```
- Pattern Mode:  
The property name needs to start with the described pattern. 
The pattern may contain variables inside double curly brackets.  
The variable `{{fieldName}}` is a special case which describes from where the field name should be taken.
If `{{fieldName}}` is not specified, the field name will be taken from the right most (after the last separator `.`) element of the property name, which is the same behavior as in "Equal Mode".
This mode needs to set using `propertyPatternTemplateMode`, since the default mode is `propertyPatternEqualMode`.
Example:  
   ```javascript
   new datarestructor.PropertyStructureDescriptionBuilder()
   .propertyPatternTemplateMode()
   .propertyPattern("responses.hits.hits._source.{{fieldName}}")
   ...
  ```
- Index Matching (Optional):  
If the source data is structured in an top level array and all property names look pretty much the same 
it may be needed to describe data based on the array index. 
The index of an property is taken out of its array qualifiers.  
For example, the property name `responses[0].hits.hits[1]._source.tags[2]` has the index `0.1.2`.  
Index Matching can be combined with property name matching.
This example restricts the description to the first top level array:  
   ```javascript
   new datarestructor.PropertyStructureDescriptionBuilder()
   .indexStartsWith("0.")
   ...
  ```

### 4. Removing duplicates (deduplication):
To remove duplicate properties or to override properties with other ones when they exist,
a `deduplicationPattern` can be defined.<br/><br/>
Variables (listed below) are put into double curly brackets and will be replaced with the contents 
of the description and the matching property.  
If there are two entries with the same resolved `deduplicationPattern` (=`_identifier.deduplicationId`),
the second one will override the first (the first one will be removed). 
Example:
   ```javascript
   new datarestructor.PropertyStructureDescriptionBuilder()
   .deduplicationPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}--{{fieldName}}")
   ...
  ```

### 5. Grouping:
Since data had been flattened in the step 1., it is structured as a list of property names and their values.
This non-hierarchical structure is ideal to add further properties, attach descriptions and remove duplicates.
After all, a fully flat structure might not be suitable to display overviews/details or to collect options. <br/><br/>
The `groupName` defines the name of the group attribute (defaults to "group" if not set). <br/><br/>
The `groupPattern` describes, which properties belong to the same group.  
Variables (listed below) are put into double curly brackets and will be replaced with the contents 
of the description and the matching property.  
The `groupPattern` will be resolved to the `_identifier.groupId`. Every property, that leads to a
new groupId gets a new attribute named by the `groupName`, where this entry and all others of the
same group will be put into. Example:  
   ```javascript
   new datarestructor.PropertyStructureDescriptionBuilder()
   .groupName("details")
   .groupPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}")
   ...
  ```

### 6. Moving groups (destination group):
After grouping in step 5., every property containing a group and the remaining non-grouped properties 
are listed one after another. To organize them further, a group can be moved beneath another (destination) group. <br/><br/>
The `groupDestinationPattern` contains the pattern of the group to where the own group should be moved.
Variables (listed below) are put into double curly brackets and will be replaced with the contents 
of the description and the matching property.  
Optionally, the `groupDestinationName` can be specified to rename the group when it is moved. Default is the value of `groupName`.
Example, where the details group is moved to the summary, because the group destination pattern 
of the details resolves to the same id as the resolved group pattern of the summary: 
   ```javascript
  var summaryDescription = new datarestructor.PropertyStructureDescriptionBuilder()
    .category("account")
    .type("summary")
    .groupName("summaries")
    .groupPattern("{{category}}--{{type}}--{{index[0]}}--{{index[1]}}")
    ...

  var detailsDescription = new datarestructor.PropertyStructureDescriptionBuilder()
   .groupDestinationPattern("account--summary--{{index[0]}}--{{index[1]}}")
   .groupDestinationName("details")
   ...
  ```

## Types, fields, variables:
This section lists the types and their fields in detail (mostly taken from jsdoc).
Every field can be used as variable in double curly brackets inside pattern properties.
Additionally, single elements of the index can be used by specifying the index position e.g. `{{index[0]}}` (first), `{{index[1]}}` (second),...


### PropertyStructureDescription (input description)

 * **type** - ""(default). Some examples: "summary" for e.g. a list overview. "detail" e.g. when a summary is selected. "filter" e.g. for field/value pair results that can be selected as search parameters.
 * **category** - name of the category. Default = "". Could contain a symbol character or a short domain name. (e.g. "city")
 * **abbreviation** - ""(default). One optional character, a symbol character or a short abbreviation of the category.
 * **image** - ""(default). One optional path to an image resource.
 * **propertyPatternTemplateMode** - boolean "false"(default): property name needs to be equal to the pattern. "true" allows variables like "{{fieldname}}" inside the pattern.
 * **propertyPattern** - property name pattern (without array indices) to match. A pattern may contain variables in double curly brackets {{variable}}. See also: [variables](#public-fields), [further details](#public-functions)
 * **indexStartsWith** - ""(default) matches all ids. String that needs to match the beginning of the id. E.g. "1." will match id="1.3.4" but not "0.1.2".
 * **groupName** - name of the property, that contains grouped entries. Default="group".
 * **groupPattern** - Pattern that describes how to group entries. "groupName" defines the name of this group. A pattern may contain variables in double curly brackets {{variable}}. See also: [variables](#public-fields), [further details](#public-functions)
 * **groupDestinationPattern** - Pattern that describes where the group should be moved to. Default=""=Group will not be moved. A pattern may contain variables in double curly brackets {{variable}}. See also: [variables](#public-fields), [further details](#public-functions)
 * **groupDestinationName** - (default=groupName) Name of the group when it had been moved to the destination.
 * **deduplicationPattern** - Pattern to use to remove duplicate entries. A pattern may contain variables in double curly brackets {{variable}}. See also: [variables](#public-fields), [further details](#public-functions)


### DescribedDataField
This is the data structure of a single output element representing a field. 
Beside the properties described below, the described data field can also contain 
custom properties containing groups (arrays) of sub fields of type DescribedDataField.

Before version 3.0.0 this structure was named [DescribedEntry](#DescribedEntry) and also contained internal fields.   
Since 3.0.0 and above, [DescribedEntry](#DescribedEntry) is only used internally and is not public any more.

#### Public fields
 * **category** - category of the result from the PropertyStructureDescription using a short name or e.g. a symbol character
 * **type** - type of the result from PropertyStructureDescription
 * **abbreviation** - one optional character, a symbol character or a short abbreviation of the category
 * **image** - one optional path to an image resource
 * **index** - contains an array of numbers representing the hierarchical index for list entries (and their sub lists ...). Example: `"responses[2].hits.hits[4]._source.name"` will have an index of [2,4].
 * **groupNames** - contains an array of String names. Every name represents a group that had been dynamically added as property. Groups should be added using [DescribedDataFieldGroup](#DescribedDataFieldGroup), which will also update the group names.   
 * **displayName** - display name extracted from the point separated hierarchical property name, e.g. "Name"
 * **fieldName** - field name extracted from the point separated hierarchical property name, e.g. "name"
 * **value** - content of the field

#### Public functions
Since version 3.0.0 and above, there are no functions any more. 

#### Described groups
 * **"name of described group"** as described in PropertyStructureDescription
 * **"names of moved groups"** as described in PropertyStructureDescription of the group that had been moved


### DescribedDataFieldGroup
This helper was added with version 3.0.0. It adds groups to [DescribedDataField](#DescribedDataField)s. 
These groups are dynamically added properties that contain an array of sub fields also of type [DescribedDataField](#DescribedDataField).

#### Public functions
 
 * **addGroupEntry(groupName, entry)** Adds an entry to the given group. If the group does not exist, it will be created and added to the "groupNames". 
 * **addGroupEntries(groupName, entries)** Adds an array of entries to the given group. If the group does not exist, it will be created and added to the "groupNames". 

### DescribedEntry
Since 3.0.0 and above, DescribedEntry is only used internally and is not public any more.
It is documented here for sake of completeness and for maintenance purposes.
See JSDoc for a more comprehensive reference.
#### Properties
 * **describedField** - contains the [DescribedDataField](#DescribedDataField)
 * **isMatchingIndex** - true, if _identifier.index matches the described "indexStartsWith"
 * **_identifier** - internal structure for identifier. Avoid using it outside since it may change.
 * **_identifier.index** - array indices in hierarchical order separated by points, e.g. "0.0"
 * **_identifier.value** - the (single) value of the "flattened" property, e.g. "Smith"
 * **_identifier.propertyNamesWithArrayIndices** - the "original" flattened property name in hierarchical order separated by points, e.g. "responses[0].hits.hits[0]._source.name"
 * **_identifier.propertyNameWithoutArrayIndices** - same as propertyNamesWithArrayIndices but without array indices, e.g. "responses.hits.hits._source.name"
 * **_identifier.groupId** - Contains the resolved groupPattern from the PropertyStructureDescription. Entries with the same id will be grouped into the "groupName" of the PropertyStructureDescription.
 * **_identifier.groupDestinationId** - Contains the resolved groupDestinationPattern from the PropertyStructureDescription. Entries with this id will be moved to the given destination group.
 * **_identifier.deduplicationId** - Contains the resolved deduplicationPattern from the PropertyStructureDescription. Entries with the same id will be considered to be a duplicate and hence removed.
 * **_description** - PropertyStructureDescription for internal use. Avoid using it outside since it may change.

### Template Resolver
An simple template resolver is included and provided as separate module.
Here is an example on how to use it:
```javaScript
var template_resolver = require("templateResolver");
var sourceDataObject = {type: "MyType", category: "MyCategory"};
var resolver = new template_resolver.Resolver(sourceDataObject);
var template = "{{type}}-{{category}}";
var resolvedString = resolver.resolveTemplate(template);
//resolvedString will contain "MyType-MyCategory"
```
#### Public functions
 * **resolveTemplate** - resolves the given template string. The template may contain variables in double curly brackets:
   - All [public fields](#public-fields) can be used as variables, e.g. `"{{fieldName}}"`, `"{{displayName}}"`, `"{{value}}"`. 
   - Described groups that contain an array of [described entries](#DescribedDataField) can also be used, e.g. `"{{summaries[0].value}}"`. 
   - Parts of the index can be inserted by using e.g. `"{{index[1]}}"`.
   - Besides the meta data, a described field can be used directly by its "fieldName", e.g. `"{{customernumber}}"` will be replaced by `123`, if the structure contains `fieldname="customernumber", value="123"`. This also applies to sub groups, e.g. `"{{details.customernumber}}"` will be replaced by `321`, if the structure contains `details[4].fieldname="customernumber", details[4].value="321"`.

## References
 * [Jasmine Behavior-Driven JavaScript](https://jasmine.github.io) for unit testing
 * [Mozilla MDN web docs - polyfill for 'Array.filter'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill) for browser compatibility
 * [Mozilla MDN web docs - polyfill for 'Array.forEach'](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill) for browser compatibility (references [es5.github.io](http://es5.github.io/#x15.4.4.18))
 * [Mozilla MDN web docs - polyfill for 'Array.indexOf'](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill) for browser compatibility
 * [Mozilla MDN web docs - polyfill for 'Array.isArray'](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Compatibility) for browser compatibility
 * [Mozilla MDN web docs - polyfill for 'String.startsWith'](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill) for browser compatibility
 * [Token Posts - polyfill for 'Object.keys'](http://tokenposts.blogspot.com/2012/04/javascript-objectkeys-browser.html) for browser compatibility