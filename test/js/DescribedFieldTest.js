var described_field = described_field || require("../../src/js/describedfield.js"); // supports vanilla js & npm

describe("describedfield.DescribedDataFieldBuilder", function () {
  var builderUnderTest;

  beforeEach(function () {
    builderUnderTest = new described_field.DescribedDataFieldBuilder();
  });
  
  describe("should have a global function to create objects if they don't exist", function () {
    it("should create a new object if the given one doesn't exist", function () {
      var result = described_field.internalCreateIfNotExists(null);
      expect(result).toEqual({});
    });
    
    it("should use the given object if it exists", function () {
      var expectedExistingObject = {anytestproperty: 4};
      var result = described_field.internalCreateIfNotExists(expectedExistingObject);
      expect(result).toEqual(expectedExistingObject);
    });
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

    it("should contain an empty displayName", function () {
      var result = builderUnderTest.build();
      expect(result.displayName).toEqual("");
    });

    it("should contain an empty fieldName", function () {
      var result = builderUnderTest.build();
      expect(result.fieldName).toEqual("");
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
      clonedBuilderUnderTest = new described_field.DescribedDataFieldBuilder();
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
