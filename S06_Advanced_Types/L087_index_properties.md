# L087 Index Properties
---



索引属性可以定义一系列对象键值对的类型：

```ts
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
```

注意：这里的 `prop` 只能是 `string` 或 `number` 型，不能为 `boolean`。
