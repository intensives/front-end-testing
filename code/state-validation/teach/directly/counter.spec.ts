import { Counter } from "./counter";
import { beforeEach, it, expect, describe } from "vitest";
// 1. 状态在本身
describe("Counter", () => {
  it("increment", () => {
    // 0 -> 1
    const counter = new Counter();

    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});
