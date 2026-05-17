# L025 Flexible Objects with the Record Type

---



`Record` 泛型的适用场景：变量值必须为一个对象，但具体包含哪些键并不重要，重要的是键和值的类型符合要求即可。

示例：

```ts
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string'
};
```

