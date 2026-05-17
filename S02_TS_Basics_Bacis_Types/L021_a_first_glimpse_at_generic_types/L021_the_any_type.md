# L021 A First Glimpse At Generic Types - Alternative Array Type Declaration

---



数组类型的另一种写法，是使用泛型：

```ts
// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];
```

