# L037 The "unknown" Type

---



未知类型 `unknown` 常用于函数参数中：

```ts
// unknown.ts
function process(val: unknown) {
  if (
    !!val &&
    typeof val === "object" &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
```

适用场景：不缺定某个参数的具体类型，但又不想退化为 `any` 类型时，可以考虑 `unknown`。

这样可以迫使开发者思考该参数的类型。