# L017 The "any" Type

---



声明为 `any` 类型后，变量支持任意类型：

```ts
let age: any = 36;

// ...

age = '37';
age = false;
age = {};
age = [];
```

实测效果：

![](../../assets/17-1.png)
