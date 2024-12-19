import { handleSubmit, urlAnalysis } from "./formHandler";

describe("Testing the handleSubmit functionality", () => {
  test("Testing that handleSubmit() exists", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe("Testing the urlAnalysis functionality", () => {
  test("Testing that urlAnalysis() exists", () => {
    expect(urlAnalysis).toBeDefined();
  });
});
