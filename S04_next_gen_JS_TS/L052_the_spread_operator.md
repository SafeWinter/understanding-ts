# L052 The Spread Operator (...)
---

展开数组：

```ts
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
```

展开对象：

```ts
const person = {
  name: "Max",
  age: 30,
};
const copiedPerson = { ...person };
```

