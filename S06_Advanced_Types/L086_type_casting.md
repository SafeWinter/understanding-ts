# L086 Type Casting
---



TS 强制类型转换的三种写法：

1. 尖括号：

```ts
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;
userInput1.value = "Hi there!";
```

2. `as`：

```ts
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;
userInput2.value = "Hi there!";
```

3. 用 `if` 判定非空，同时完成类型转换：

```ts
const userInput3 = document.getElementById("user-input");
if (userInput3) {
  (userInput3 as HTMLInputElement).value = "Hi there!";
}
```

其中，第三种写法是非空判定 `!` 的另一个备选方案，因为用了 `as` 后，默认使用了非空，但实际上该 `DOM` 元素有可能是 `null`，因此第三种写法可以更直观，也更通用。
