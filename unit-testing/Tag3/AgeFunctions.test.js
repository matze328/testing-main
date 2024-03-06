const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });
});
test('should return false if age is under 18', () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(10)).toBe(false);
  });

  test('should throw a TypeError if input is not a number', () => {
    expect(() => {
      isAdult("not a number");
    }).toThrow(TypeError);
  });

  test('should throw a TypeError if age is smaller than 0', () => {
    expect(() => {
      isAdult(-5);
    }).toThrow(TypeError);
  });
