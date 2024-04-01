# L053 Rest Parameters
---

用于指定任意数量的函数参数：

```ts
const add = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
```

如果知道参数的个数，也可以使用元组类型：

```ts
const add = (...numbers: [number, number]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);
console.log(add(1, 2)); // 3
```

