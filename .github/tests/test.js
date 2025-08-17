// Jest unit test for sanity check
test("Basic math works", () => {
  expect(2 + 2).toBe(4);
});

test("Script.js function exists", () => {
  const fs = require("fs");
  const script = fs.readFileSync("src/script.js", "utf-8");
  expect(script.includes("function alertMessage")).toBe(true);
});
