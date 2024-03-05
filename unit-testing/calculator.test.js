const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  //Arrage
  const [a, b] = [2, 5]
  //Act
  const result = calculator.sum(a, b);
   // Assert (bzw. Expect)
  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
    //Arrage
  const [a, b] = ["Apfel", 5]
    //Act
  const result = calculator.sum(a, b);
    // Assert (bzw. Expect)
  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
      //Arrage
  const [a, b] = [10, 2]
    //Act
  const result = calculator.divide(a, b);
    // Assert (bzw. Expect)
  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
      //Arrage
  const [a, b] = [10, 3]
    // Act
  const result = calculator.divide(a, b);
    // Assert (bzw. Expect) 
  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
        //Arrage
        const [a, b] = [10, -2]
        // Act
  const result = calculator.divide(a, b);
    // Assert (bzw. Expect)
  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
        //Arrage
        const [a, b] = [-10, -2]
        // Act
  const result = calculator.divide(a, b);
    // Assert (bzw. Expect)
  expect(result).toBeGreaterThan(0);
});
test("Subtraktion von positiven Zahlen", () => {
        //Arrage
        const [a, b] = [5, 3]
        // Act
  const result = calculator.subtract(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(2);
});

test("Subtraktion von negativen Zahlen", () => {
        //Arrage
        const [a, b] = [-10, -5]
        // Act
  const result = calculator.subtract(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(-5);
});

test("Subtraktion von einer Zahl und 0", () => {
        //Arrage
        const [a, b] = [0, 7]
        // Act
  const result = calculator.subtract(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(-7);
});

test("Multiplikation von positiven Zahlen", () => {
        //Arrage
        const [a, b] = [4, 2]
        // Act
  const result = calculator.multiply(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(8);
});

test("Multiplikation mit einer negativen Zahl", () => {
        //Arrage
        const [a, b] = [-3, 6]
        // Act
  const result = calculator.multiply(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(-18);
});

test("Multiplikation mit einer Zahl und 0", () => {
        //Arrage
        const [a, b] = [0, 9]
        // Act
  const result = calculator.multiply(a, b);
      // Assert (bzw. Expect)
  expect(result).toBe(0);
});