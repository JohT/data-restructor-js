"use strict";

var datarestructor = datarestructor || require("../../src/js/datarestructor.js"); // supports vanilla js & npm
var template_resolver = template_resolver || require("../../src/js/templateResolver"); // supports vanilla js & npm

describe("datarestructor.DescribedEntry", function () {
  var description;
  var rawEntry;
  var describedEntry;

  beforeEach(function () {
  });

  describe("is created with the raw entry and", function () {
    beforeEach(function () {
      rawEntry = { name: "responses[0].hits.hits[3]._source.tag[5]", value: "inactive" };
      description = new datarestructor.PropertyStructureDescriptionBuilder().type("testtype").category("testcategory").build();
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
    });

    it("should contain the raw property name", function () {
      var expectedValue = rawEntry.name;
      expect(describedEntry._identifier.propertyNameWithArrayIndices).toEqual(expectedValue);
    });

    it("should also contain the raw property name with stripped indices", function () {
      var expectedValue = "responses.hits.hits._source.tag";
      rawEntry.name = "responses[0].hits.hits[3]._source.tag[5]";
      expect(describedEntry._identifier.propertyNameWithoutArrayIndices).toEqual(expectedValue);
    });

    it("should contain the id consisting only of the array indices from the raw property name", function () {
      var expectedValue = "0.3.5";
      rawEntry.name = "responses[0].hits.hits[3]._source.tag[5]";
      expect(describedEntry._identifier.index).toEqual(expectedValue);
    });

    it("should contain the raw property value", function () {
      var expectedValue = rawEntry.value;
      expect(describedEntry.value).toEqual(expectedValue);
    });

    it("should contain the field name derived from the raw property name", function () {
      var expectedValue = "tag";
      rawEntry.name = "responses[0].hits.hits[3]._source.tag[5]";
      expect(describedEntry.fieldName).toEqual(expectedValue);
    });

    it("should contain the display name derived from the raw property name", function () {
      var expectedValue = "Tag";
      rawEntry.name = "responses[0].hits.hits[3]._source.tag[5]";
      expect(describedEntry.displayName).toEqual(expectedValue);
    });
  });

  describe("is created with the description and", function () {
    beforeEach(function () {
      rawEntry = { name: "responses[0].hits.hits[3]._source.tag[5]", value: "inactive" };
      description = new datarestructor.PropertyStructureDescriptionBuilder().type("testtype").category("testcategory").abbreviation("T").image("i.png").build();
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
    });

    it("should contain the description as internal property", function () {
      expect(describedEntry._description).toEqual(description);
    });

    it("should contain the type of the description", function () {
      expect(describedEntry.type).toEqual(description.type);
    });

    it("should contain the category of the description", function () {
      expect(describedEntry.category).toEqual(description.category);
    });

    it("should contain the abbreviation of the description", function () {
      expect(describedEntry.abbreviation).toEqual(description.abbreviation);
    });
    
    it("should contain the image of the description", function () {
      expect(describedEntry.image).toEqual(description.image);
    });

    it("should have a matching id by default", function () {
      expect(describedEntry._isMatchingIndex).toBeTrue();
    });

    it("should have a matching id when described prefix matches", function () {
      description.indexStartsWith = "1.3";
      rawEntry.name = "responses[1].hits.hits[3]._source.tag[5]";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._isMatchingIndex).toBeTrue();
    });

    it("shouldn't have a matching id when described prefix doesn't match", function () {
      description.indexStartsWith = "5.";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._isMatchingIndex).toBeFalse();
    });

  });

  describe("resolves all pattern of the description while creation and ", function () {
    beforeEach(function () {
      rawEntry = { name: "responses[0].hits.hits[3]._source.tag[5]", value: "inactive" };
      description = new datarestructor.PropertyStructureDescriptionBuilder().type("testtype").category("testcategory").build();
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
    });

    it("should contain the group id derived from the groupPattern", function () {
      var expectedValue = "testtype-testcategory";
      description.groupPattern = "{{type}}-{{category}}";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._identifier.groupId).toEqual(expectedValue);
    });

    it("should contain the group destination id derived from the groupDestinationPattern", function () {
      var expectedValue = "0.3.5-testtype-testcategory";
      description.groupDestinationPattern = "{{index}}-{{type}}-{{category}}";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._identifier.groupDestinationId).toEqual(expectedValue);
    });

    it("should contain the deduplication id derived from the deduplicationPattern", function () {
      var expectedValue = "abctestcategory";
      description.deduplicationPattern = "abc{{category}}";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._identifier.deduplicationId).toEqual(expectedValue);
    });

    it("should resolve single indices of the id", function () {
      var expectedValue = "5-0-3";
      description.groupPattern = "{{index[2]}}-{{index[0]}}-{{index[1]}}";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(describedEntry._identifier.groupId).toEqual(expectedValue);
    });

  });

  describe("resolves a template with variables of contained properties and ", function () {
    var resolver;

    beforeEach(function () {
      rawEntry = { name: "responses[0].hits.hits[3]._source.tag[5]", value: "inactive" };
      description = new datarestructor.PropertyStructureDescriptionBuilder().type("testtype").category("testcategory").build();
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      resolver = new template_resolver.Resolver(describedEntry);
    });

    it("should resolve variable {{type}}", function () {
      expect(resolver.resolveTemplate("{{type}}")).toEqual("testtype");
    });

    it("should resolve variable {{category}}", function () {
      expect(resolver.resolveTemplate("{{category}}")).toEqual("testcategory");
    });

    it("should resolve variable {{abbreviation}}", function () {
      var expectedValue = "T";
      description.abbreviation = expectedValue;
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      resolver = new template_resolver.Resolver(describedEntry);
      expect(resolver.resolveTemplate("{{abbreviation}}")).toEqual(expectedValue);
    });

    it("should resolve variable {{image}}", function () {
      var expectedValue = "image.png";
      description.image = expectedValue;
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      resolver = new template_resolver.Resolver(describedEntry);
      expect(resolver.resolveTemplate("{{image}}")).toEqual(expectedValue);
    });

    it("should NOT resolve variable {{index}} anymore, since it is an internal field. {{index[0]}} can (still) be used instead.", function () {
      expect(resolver.resolveTemplate("{{index}}")).toEqual("{{index}}");
    });

    it("should resolve variable {{index[1]}} with a part of the index", function () {
      expect(resolver.resolveTemplate("{{index[1]}}")).toEqual("3");
    });
    
    it("should resolve variable {{displayName}}", function () {
      expect(resolver.resolveTemplate("{{displayName}}")).toEqual("Tag");
    });

    it("should resolve variable {{fieldName}}", function () {
      expect(resolver.resolveTemplate("{{fieldName}}")).toEqual("tag");
    });

    it("should resolve variable {{value}}", function () {
      expect(resolver.resolveTemplate("{{value}}")).toEqual("inactive");
    });

    it("should resolve the described field directly with its fieldName {{tag}}", function () {
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      expect(resolver.resolveTemplate("{{tag}}")).toEqual("inactive");
    });

    it("should resolve sub object variable {{testsubobject.value}}", function () {
      var expectedValue = "subobjectvalue";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testsubobject = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testsubobject.value = expectedValue;
      resolver = new template_resolver.Resolver(describedEntry);
      expect(resolver.resolveTemplate("{{testsubobject.value}}")).toEqual(expectedValue);
    });

    it("should resolve sub object array {{testgroup.value}}", function () {
      var expectedValue = "subarrayvalue";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testgroup = [];
      describedEntry.testgroup[0] = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testgroup[0].value = expectedValue;
      resolver = new template_resolver.Resolver(describedEntry);
      expect(resolver.resolveTemplate("{{testgroup[0].value}}")).toEqual(expectedValue);
    });

    it("should resolve the described field in the sub object directly with its group and field name {{testsubobject.tag}}", function () {
      var expectedValue = "subobjectvalue";
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testsubobject = new datarestructor.DescribedEntryCreator(rawEntry, description);
      describedEntry.testsubobject.value = expectedValue;
      resolver = new template_resolver.Resolver(describedEntry);
      expect(resolver.resolveTemplate("{{testsubobject.tag}}")).toEqual(expectedValue);
    });
    
  });

  describe("exports public fields as JSON and ", function () {
    var json;

    beforeEach(function () {
      rawEntry = { name: "responses[0].hits.hits[3]._source.jsontag[5]", value: "jsoninactive" };
      description = new datarestructor.PropertyStructureDescriptionBuilder().type("jsontesttype").category("jsontestcategory").abbreviation("J").image("j.img").build();
      describedEntry = new datarestructor.DescribedEntryCreator(rawEntry, description);
      json = JSON.stringify(describedEntry);
    });

    it("should contain the type", function () {
      var expectedValue = description.type;
      expect(json).toContain('"type":"' + expectedValue + '"');
    });

    it("should contain the category", function () {
      var expectedValue = description.category;
      expect(json).toContain('"category":"' + expectedValue + '"');
    });

    it("should contain the abbreviation", function () {
      var expectedValue = description.abbreviation;
      expect(json).toContain('"abbreviation":"' + expectedValue + '"');
    });

    it("should contain the image", function () {
      var expectedValue = description.image;
      expect(json).toContain('"image":"' + expectedValue + '"');
    });

    it("should contain the fieldName", function () {
      var expectedValue = "jsontag";
      expect(json).toContain('"fieldName":"' + expectedValue + '"');
    });

    it("should contain the displayName", function () {
      var expectedValue = "Jsontag";
      expect(json).toContain('"displayName":"' + expectedValue + '"');
    });

    it("should contain the value", function () {
      var expectedValue = "jsoninactive";
      expect(json).toContain('"value":"' + expectedValue + '"');
    });

  });

});
