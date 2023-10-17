import { capitalize, reverseString } from "./practice";

test("first character only is not capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("string is not reversed", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("string is not reversed", () => {
  expect(reverseString("elephant")).toBe("tnahpele");
});

test("string is not reversed", () => {
  expect(reverseString("a")).toBe("a");
});
