import { beforeEach, vi, it, expect, describe } from "vitest";

vi.mock("./user");

describe("间接input", () => {
  beforeEach(()=>{
     // doMock会在下次调用导入的时候才会生效
     vi.doMock('./user', () => {
      return {
        userAge: () => 3
      }
    })
  })
  it("first", async () => {
    const {doubleUserAge} = await import('./index')
    const r = doubleUserAge();
    expect(r).toBe(6);
  });
});
