var datarestructor = datarestructor || require("../../src/js/datarestructor.js"); // supports vanilla js & npm

describe("datarestructor", function () {
  it("should create a new object if the given one doesn't exist", function () {
    var result = datarestructor.internalCreateIfNotExists(null);
    expect(result).toEqual({});
  });

  it("should use the given object if it exists", function () {
    var expectedExistingObject = {anytestproperty: 3};
    var result = datarestructor.internalCreateIfNotExists(expectedExistingObject);
    expect(result).toEqual(expectedExistingObject);
  });

});
