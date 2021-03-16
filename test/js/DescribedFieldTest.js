var described_field = described_field || require("../../src/js/describedfield"); // supports vanilla js & npm

describe("describedfield", function () {
  var describedFieldUnderTest;

  beforeEach(function () {
    describedFieldUnderTest = described_field;
  });

  describe("should have a global function to create objects if they don't exist", function () {
    it("should create a new object if the given one doesn't exist", function () {
      var result = describedFieldUnderTest.internalCreateIfNotExists(null);
      expect(result).toEqual({});
    });

    it("should use the given object if it exists", function () {
      var expectedExistingObject = { anytestproperty: 4 };
      var result = describedFieldUnderTest.internalCreateIfNotExists(expectedExistingObject);
      expect(result).toEqual(expectedExistingObject);
    });
  });

  describe("DescribedDataFieldBuilder", function () {
    var builderUnderTest;

    beforeEach(function () {
      builderUnderTest = new describedFieldUnderTest.DescribedDataFieldBuilder();
    });

    describe("fields should have default values and", function () {
      it("should contain an empty category", function () {
        var result = builderUnderTest.build();
        expect(result.category).toEqual("");
      });

      it("should contain an empty type", function () {
        var result = builderUnderTest.build();
        expect(result.type).toEqual("");
      });

      it("should contain an empty abbreviation", function () {
        var result = builderUnderTest.build();
        expect(result.abbreviation).toEqual("");
      });

      it("should contain an empty image", function () {
        var result = builderUnderTest.build();
        expect(result.image).toEqual("");
      });

      it("should contain an empty index array", function () {
        var result = builderUnderTest.build();
        expect(result.index).toEqual([]);
      });

      it("should contain an empty group names array", function () {
        var result = builderUnderTest.build();
        expect(result.groupNames).toEqual([]);
      });

      it("should contain an empty displayName", function () {
        var result = builderUnderTest.build();
        expect(result.displayName).toEqual("");
      });

      it("should contain an empty fieldName", function () {
        var result = builderUnderTest.build();
        expect(result.fieldName).toEqual("");
      });

      it("should contain an empty value", function () {
        var result = builderUnderTest.build();
        expect(result.value).toEqual("");
      });
    });

    describe("fields should be set to default values when overridden with null and", function () {
      it("should use an empty category when set to null", function () {
        var result = builderUnderTest.category(null).build();
        expect(result.category).toEqual("");
      });

      it("should use an empty type when set to undefined", function () {
        var result = builderUnderTest.type(undefined).build();
        expect(result.type).toEqual("");
      });

      it("should use an empty field name when set to an empty string", function () {
        var result = builderUnderTest.fieldName("").build();
        expect(result.type).toEqual("");
      });

      it("should use an empty index array when set to null", function () {
        var result = builderUnderTest.index(null).build();
        expect(result.index).toEqual([]);
      });

      it("should use an empty group names array when set to null", function () {
        var result = builderUnderTest.groupNames(undefined).build();
        expect(result.groupNames).toEqual([]);
      });
    });

    describe("fields should be overridable and", function () {
      it("should contain the given category", function () {
        var expectedValue = "testcategory";
        var result = builderUnderTest.category(expectedValue).build();
        expect(result.category).toEqual(expectedValue);
      });

      it("should contain the given type", function () {
        var expectedValue = "testtype";
        var result = builderUnderTest.type(expectedValue).build();
        expect(result.type).toEqual(expectedValue);
      });

      it("should contain the given abbreviation", function () {
        var expectedValue = "A";
        var result = builderUnderTest.abbreviation(expectedValue).build();
        expect(result.abbreviation).toEqual(expectedValue);
      });

      it("should contain the given image", function () {
        var expectedValue = "a.jpg";
        var result = builderUnderTest.image(expectedValue).build();
        expect(result.image).toEqual(expectedValue);
      });

      it("should contain the given index", function () {
        var expectedValue = [1, 2, 3];
        var result = builderUnderTest.index(expectedValue).build();
        expect(result.index).toEqual(expectedValue);
      });

      it("should contain the given group names", function () {
        var expectedValue = ["summaries", "details", "options"];
        var result = builderUnderTest.groupNames(expectedValue).build();
        expect(result.groupNames).toEqual(expectedValue);
      });

      it("should contain the given displayName", function () {
        var expectedValue = "Color";
        var result = builderUnderTest.displayName(expectedValue).build();
        expect(result.displayName).toEqual(expectedValue);
      });

      it("should contain the given fieldName", function () {
        var expectedValue = "color";
        var result = builderUnderTest.fieldName(expectedValue).build();
        expect(result.fieldName).toEqual(expectedValue);
      });
    });

    describe("fields should be taken oven from a template field and", function () {
      var clonedBuilderUnderTest;

      beforeEach(function () {
        clonedBuilderUnderTest = new describedFieldUnderTest.DescribedDataFieldBuilder();
      });

      it("should contain the given category", function () {
        var expectedValue = "testcategory";
        var result = builderUnderTest.category(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.category).toEqual(expectedValue);
      });

      it("should contain the given type", function () {
        var expectedValue = "testtype";
        var result = builderUnderTest.type(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.type).toEqual(expectedValue);
      });

      it("should contain the given abbreviation", function () {
        var expectedValue = "A";
        var result = builderUnderTest.abbreviation(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.abbreviation).toEqual(expectedValue);
      });

      it("should contain the given image", function () {
        var expectedValue = "a.jpg";
        var result = builderUnderTest.image(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.image).toEqual(expectedValue);
      });

      it("should contain the given index", function () {
        var expectedValue = [1, 2, 3];
        var result = builderUnderTest.index(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.index).toEqual(expectedValue);
      });

      it("should contain the given group names", function () {
        var expectedValue = ["summaries", "details", "options"];
        var result = builderUnderTest.groupNames(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.groupNames).toEqual(expectedValue);
      });

      it("should contain the given displayName", function () {
        var expectedValue = "Color";
        var result = builderUnderTest.displayName(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.displayName).toEqual(expectedValue);
      });

      it("should contain the given fieldName", function () {
        var expectedValue = "color";
        var result = builderUnderTest.fieldName(expectedValue).build();
        result = clonedBuilderUnderTest.fromDescribedDataField(result).build();
        expect(result.fieldName).toEqual(expectedValue);
      });
    });
  });

  describe("DescribedDataFieldGroup", function () {
    var testField, testGroupField, testSubGroupField, anotherTestGroupField;
    var fieldGroupUnderTest;

    beforeEach(function () {
      testField = new describedFieldUnderTest.DescribedDataFieldBuilder().category("Root").build();
      testGroupField = new describedFieldUnderTest.DescribedDataFieldBuilder().category("A").build();
      testSubGroupField = new describedFieldUnderTest.DescribedDataFieldBuilder().category("a").build();
      anotherTestGroupField = new describedFieldUnderTest.DescribedDataFieldBuilder().category("B").build();

      fieldGroupUnderTest = new describedFieldUnderTest.DescribedDataFieldGroup(testField);
    });

    it("shouldn't do anything if the groups to add are empty", function () {
      fieldGroupUnderTest.addGroupEntries("details", []);
      expect(testField.details).toBeUndefined();
    });

    it("shouldn't do anything if the groups to add are null", function () {
      fieldGroupUnderTest.addGroupEntries("details", null);
      expect(testField.details).toBeUndefined();
    });

    it("shouldn't do anything if the group name is empty", function () {
      var result = fieldGroupUnderTest.addGroupEntries("", testGroupField);
      expect(result).toEqual(fieldGroupUnderTest);
    });

    it("shouldn't do anything if the group name is null", function () {
      var result = fieldGroupUnderTest.addGroupEntries(null, testGroupField);
      expect(result).toEqual(fieldGroupUnderTest);
    });

    it("should contain an previously added group", function () {
      fieldGroupUnderTest.addGroupEntry("details", testGroupField);
      expect(testField.details[0].category).toContain("A");
    });

    it("should contain the name of an previously added group", function () {
      var groupName = "details";
      fieldGroupUnderTest.addGroupEntry(groupName, testGroupField);
      expect(testField.groupNames).toContain(groupName);
    });

    it("should contain all entries of an previously added groups", function () {
      var groupName = "details";
      fieldGroupUnderTest.addGroupEntries(groupName, [testGroupField, anotherTestGroupField]);
      expect(testField.details[0].category).toContain("A");
      expect(testField.details[1].category).toContain("B");
    });

    it("should contain an entry that had been added to an already existing group ", function () {
      fieldGroupUnderTest.addGroupEntry("details", testGroupField);
      expect(testField.details[0].category).toContain("A");

      fieldGroupUnderTest.addGroupEntry("details", anotherTestGroupField);
      expect(testField.details[1].category).toContain("B");

      expect(testField.groupNames.length).toEqual(1);
    });

    it("should contain the groups of an previously added group (2nd level)", function () {
      // Add a (sub) group with an sub detail field to the main test field
      new describedFieldUnderTest.DescribedDataFieldGroup(testGroupField).addGroupEntry("details", testSubGroupField);
      fieldGroupUnderTest.addGroupEntry("details", testGroupField);
      expect(testField.details[0].details[0].category).toContain("a");
    });

  });
});
