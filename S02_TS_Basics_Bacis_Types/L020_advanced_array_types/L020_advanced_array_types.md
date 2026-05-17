# L020 Advanced Array Types

---



对数组元素声明类型，既可以是某个基本类型，也可以是个联合类型：

```ts
// let users: string[];
let users: (string | number)[];

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];
```

