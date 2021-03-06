# CHANGELOG.md

## **v2.3.0** Continuous Integration (latest)

### Features:

  - Continuous Integration using GitHub Actions
  - Build using nodes package manager (npm)
  - Bundle (minification,...) using Parcel Bundler
  - Automated already existing unit tests using Jasmine
  - Unit-Test coverage measurement using nyc
  - Documentation Generation using JSDoc
  - Static code analysis using ESLint
  - Updated documentation
## **v2.2.0** Resolving template with described fields

### Features:

  - Since v1.2.0 templates containing variables in double curly brackets can be resolved by the function `resolveTemplate(templateString)`. Now, it is not only possible to resolve the contained meta data,
  but also the described fields directly. Based on the JSON below, the resolver would now provide these results:

    - `"{{customerNumber}}"`-> `"123"`
    - `"{{details.name}}"`-> `"Smith"`
    - `"{{details.age}}"`-> `"31"` 

    Previously (since v1.2.0), these results could only be obtained with (remains unchanged):

    - `"{{value}}"`-> `"123"`
    - `"{{details[0].value}}"`-> `"Smith"`
    - `"{{details[1].value}}"`-> `"31"`

  ```JSON
    {
      "category": "customer",
      "type": "summary",
      "displayName": "CustomerNumber",
      "fieldName": "customerNumber",
      "value": "123",
      "details": [
        {
          "category": "customer;",
          "type": "detail",
          "displayName": "Name",
          "fieldName": "name",
          "value": "Smith"
        },
        {
          "category": "customer",
          "type": "detail",
          "displayName": "Age",
          "fieldName": "age",
          "value": "31"
        }
      ]
    }
    ```

## **v2.1.0** new optional fields "abbreviation" and "image" (2020-12-25)

### Features:

  - With the two new optional fields **abbreviation** and **image**, that can be specified for each `PropertyStructureDescription`, it is easier to separate display related fields from e.g. the category. These fields are transferred directly into the resulting `DescribedEntry` and do not affect other behavior (grouping, filtering...) in any kind.
  - If the variable `{{fieldName}}` is missing in the property pattern in "template mode", the right most part of the property name is used as field name. This corresponds to the behavior of the "equal mode". Previously this led to an error that forced the use of the "equal mode" in that case.

### Fix:

  - Some minor refactoring


## **v2.0.0** Added "publicFieldsJson" to "DescribedEntry" (2014-12-12)

### Features:

  - It is now possible to convert the public fields of an `DescribedEntry` to JSON using its function `publicFieldsJson`.
  This includes all contained groups, that may contain `DescribedEntry`s themselves.   
  Prior to this release, the following error occurred when calling `JSON.stringify(describedEntry)`:
  `TypeError: Converting circular structure to JSON`

    **Note:**  
    The property `isMatchingIndex` of the `DescribedEntry` had been renamed to `_isMatchingIndex` since it is an internal property and should not be used outside. Since this is a "breaking change" (in theory), it lead to a new major version.

    This example shows how the returned JSON looks like using parameter "space" = 2 (pretty print with 2 spaces indentation) when the `DescribedEntry` contains the group `options`:
    ```JSON
    {
      "category": "account",
      "type": "filter",
      "displayName": "Currency",
      "fieldName": "currency",
      "value": "eur",
      "options": [
        {
          "category": "account;",
          "type": "filter",
          "displayName": "Currency",
          "fieldName": "currency",
          "value": "EUR"
        },
        {
          "category": "account",
          "type": "filter",
          "displayName": "Currency",
          "fieldName": "currency",
          "value": "USD"
        }
      ]
    }
    ```


## **v1.2.0** Resolving template containing properties of the described entry as variables (2014-11-29)

### Features:
  - It is now possible to resolve a string containing variables in double curly brackets of an `DecribedEntry` using the function `resolveTemplate(templateString)`. 

    #### Variables that can be used:
      - `"{{fieldName}}"`
      -  `"{{displayName}}"`
      -  `"{{value}}"`
      -  `"{{index}}"`
      -  `"{{index[1]}}"`

    #### Example:
      ```javascript
      var rawEntry = { name: "responses[0].hits.hits[3]._source.name", value: "Smith" };
      var description = new datarestructor.PropertyStructureDescriptionBuilder().type("testtype").category("testcategory").build();
      var describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);

      var resolved = describedEntry.resolveTemplate("{{displayName}}: {{value}}");
      // resolved is: "Name: Smith"
      ```


## **v1.1.0** Joining and renaming groups (2014-11-08)

### Features:

  - Group destination name and joining (JohT@534c368bcb835c110e1255508ed44c790972955c)
  - Groups can now be renamed, when they get moved to another destination.
  - If more than one source group (array) is moved into a single destination, they get joined.   
    Previously, only the last one remained, which made it impossible to structure data within one single (e.g. main) entry.
  - Debug mode introduced (JohT@72232e7f23ced9655c1d2693a3a5b3163c312221)
  - Minor refactorings (JohT@14094fe247c1c1551ff518a1378a26b0cfc074c9)


## **v1.0.0** Initial Release (2014-10-25)

### Features:

  - Adapter that takes e.g. parsed JSON and transforms it into a standardized structure
  - Multiple transformation steps including flattening, removing duplicates, grouping, ...
  - Takes descriptions that reflect the incoming structure and define the standardized output
  - Reusable and flexible
  - Supports most browser including ie5