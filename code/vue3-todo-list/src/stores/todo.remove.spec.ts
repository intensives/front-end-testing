import { test, expect } from "vitest";
import { reset, useTodoStore } from "./todo.remove";
import { setActivePinia, createPinia } from "pinia";

test("remove todo", () => {
  setActivePinia(createPinia());
  const store = useTodoStore();

  // 后门操作案例如下：[尽量不要用，优先使用round-trip]
  //   const todo = {
  //     id: 1,
  //     title: "吃饭",
  //   };
  //   store.todos.push(todo);
  // 和业务代码耦合，当业务代码变动时，测试会报错

  // round-trip：直接调用业务功能准备数据
  const todo = store.addTodo("吃饭");

  expect(store.todos.length).toBe(0);
});
