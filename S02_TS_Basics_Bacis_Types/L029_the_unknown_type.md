# L029 The "unknown" Type



TypeScript 还定义了一个特殊类型：`unknow`，用于表示某个当前未知的类型：

```ts
let a: unknown;
a = 10;
a = "text";

let b: string;
b = a; // Error: Type 'unknown' is not assignable to type 'string'.ts(2322)
if (typeof a === "string") {
  b = a; // OK
}
```

注意：`a` 被声明为 `unknown` 后，其类型较 `any` 限制性更强，体现在：

- `a` 可以是后面赋值的任何一个类型；
- 但 `a` 不能直接赋给一个有明确类型的变量；
- 若要强制赋给一个确定型变量，必须手写类型校验（`if` 语句）。
