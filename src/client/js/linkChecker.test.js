import { checkInput } from "./linkChecker";

describe("Testing the checkInput functionality", () => {
  test("Testing that checkInput() exists", () => {
    expect(checkInput).toBeDefined();
  });
  test("Testing that checkInput() returns [true] with correct input", () => {
    const value = "www.google.com";
    expect(checkInput(value)).toBeTruthy();
  });
  test("Testing that checkInput() returns [false] with incorrect input", () => {
    const value = "byebye";
    expect(checkInput(value)).toBeFalsy();
  });
});
