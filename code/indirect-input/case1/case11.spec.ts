import { doubleUserAge } from "./index";
import { vi, it, expect, describe } from "vitest";
import { userAge } from "./user";

console.log(userAge() === 2, 'vi.mock会把语句提升到顶部')

vi.mock("./user", () => {
  return {
    userAge: () => 2,
  };
});

describe("间接input", () => {
  it("first", () => {
    const r = doubleUserAge();
    expect(r).toBe(4);
  });
  it("直接调用/user的useAge还是mock后的", () => {
    const r = userAge();
    expect(r).toBe(2);
  });
});
