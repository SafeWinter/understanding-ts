# L090 Nullish Coalescing
---



`nullish coalescing` 在 `TypeScript` 中译为 "空值合并"。这是 `TypeScript` 引入的一个特性，用于处理 `null` 或 `undefined` 值的合并操作。它使用双问号 (`??`) 运算符来表示，可以用于简化条件判断和默认赋值的操作。当左侧的值为 `null` 或 `undefined` 时，`??` 运算符会返回右侧的值作为结果：

```ts
const userInput = undefined
const storedData = userInput ?? 'DEFAULT'
console.log(storedData) // DEFAULT
```

