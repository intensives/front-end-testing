import { it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";
// 2. 状态在依赖中
describe("UserService", () => {
  it("should create user ", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("cxr");

    // expect(database.getUser(user.id)?.name).toBe("cxr");
    expect(userService.findUser(user.id)?.name).toBe("cxr");
  });
});
