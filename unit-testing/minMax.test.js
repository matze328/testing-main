const minMax = require("./minMax");

test("Kleinerer Wert zwischen zwei positiven Zahlen", () => {
    const result = minMax.min(5, 3);
    expect(result).toBe(3);
  });

test("Kleinerer Wert zwischen einer negativen und einer positiven Zahl", () => {
    const result = minMax.min(-10, 5);
    expect(result).toBe(-10);
  });
  test("Kleinerer Wert zwischen zwei gleichen Zahlen", () => {  
    const result = minMax.min(4, 4);
    expect(result).toBe(4);
});
