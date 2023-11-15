# L032 Useful Resources & Links



列出本章各小节随堂练习代码的下载地址，方便查阅。

课外阅读：[微软官方 Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)



> 课外阅读拾遗

- 使用编译器标记 `noImplicitAny`，可将任何隐含的 `any` 标记为错误

- 当一个值的类型是 `any` 时，可以访问它的任何属性（这些属性反过来也将是 `any` 类型）

- 即使参数上没有类型注解，TypeScript 仍会检查参数数量是否正确

- 如果要注解返回 promise 的函数的返回类型，应使用 `Promise` 类型：`async function getFavoriteNumber(): Promise<number> { return 26; }`

- 对匿名函数，TS采用上下文类型（*contextual typing*）推断类型

- 可选的参数的类型，需在属性名称后添加 `?`

- 在任何表达式后写入 `!` 实际上是一种 **类型断言**，即值不是 `null` 或 `undefined`，例如：（第 3 行）

  ```ts
  function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }
  ```

- 类型断言：`const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;`