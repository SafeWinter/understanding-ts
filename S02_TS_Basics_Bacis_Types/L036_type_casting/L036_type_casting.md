# L036 Type Casting

---

`document.getElementById` 默认返回的类型为 `HTMLElement | null`，前者无法确定是否具有 `value` 属性。

这时可利用 `as` 手动指定类型：

```ts
const inputEl = document.getElementById('user-name') as HTMLInputElement;

// if (!inputEl) {
//     throw new Error('Element not found!')
// }

console.log(inputEl?.value);
```

虽然确保了 `inputEl` 拥有 `value` 属性，但潜在的 `null` 也丢失了。

这可以通过 **联合类型** 补上：

```ts
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

// if (!inputEl) {
//     throw new Error('Element not found!')
// }

console.log(inputEl?.value);
```

究竟加不加联合类型声明，还要具体问题具体分析。一旦不加，则需要开发者自行承担类型为空的风险。