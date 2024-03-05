const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});
test("Subtraktion von positiven Zahlen", () => {
  const result = calculator.subtract(5, 3);
  expect(result).toBe(2);
});

test("Subtraktion von negativen Zahlen", () => {
  const result = calculator.subtract(-10, -5);
  expect(result).toBe(-5);
});

test("Subtraktion von einer Zahl und 0", () => {
  const result = calculator.subtract(0, 7);
  expect(result).toBe(-7);
});

test("Multiplikation von positiven Zahlen", () => {
  const result = calculator.multiply(4, 2);
  expect(result).toBe(8);
});

test("Multiplikation mit einer negativen Zahl", () => {
  const result = calculator.multiply(-3, 6);
  expect(result).toBe(-18);
});

test("Multiplikation mit einer Zahl und 0", () => {
  const result = calculator.multiply(0, 9);
  expect(result).toBe(0);
});