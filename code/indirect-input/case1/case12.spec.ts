import { doubleUserAge, fetchDoubleUserAge } from "./index";
import { beforeEach, vi, it, expect, describe } from "vitest";
import { userAge, fetchUserAge } from "./user";

vi.mock("./user");

describe("间接input", () => {
  it("first", async () => {
    vi.mocked(userAge).mockReturnValue(2);
    const r = doubleUserAge();
    expect(r).toBe(4);
  });
  it("在不同测试case中控制userAge", async () => {
    vi.mocked(userAge).mockReturnValue(20);
    const r = userAge();
    expect(r).toBe(40);
  });
});
