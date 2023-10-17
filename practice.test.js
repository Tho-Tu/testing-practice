import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("first character only is capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("string 'string' is reversed", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("string 'a' is reversed", () => {
  expect(reverseString("a")).toBe("a");
});

test("calculator add 1 + 2 is 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator subtract 3 - 1 is 2", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("calculator divide 6 / 2 is 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("calculator multiply 4 * 3 is 12", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("caesar cipher", () => {
  expect(caesarCipher("attack", 1)).toBe("buubdl");
});

test("caesar cipher shift 3", () => {
  expect(caesarCipher("attack", 3)).toBe("dwwdfn");
});

test("caesar cipher with spaces", () => {
  expect(caesarCipher("JavaScript Example of the Caesar Cipher ", 1)).toBe(
    "kbwbtdsjqu fybnqmf pg uif dbftbs djqifs "
  );
});

test("caesar cipher shift at end", () => {
  expect(caesarCipher("xyz", 4)).toBe("bcd");
});

test("object average, min, max, length satisfied", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
