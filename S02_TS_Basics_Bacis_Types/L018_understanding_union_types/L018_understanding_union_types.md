# L018 Understanding Union Types

---



声明为 `any` 丧失了 `TS` 诸多特性，可用联合类型加以限定：

```ts
let age: number | string = 36;

// ...

age = '37';
age = false;
age = {};
age = [];
```

![](../../assets/18-1.png)