# L054 Array & Object Destructuring
---

解构数组：

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);
// (2) ['Sports', 'Cooking'] Hiking Sports (1) ['Cooking']
```

解构对象：

```ts
const person = {
  name: "Max",
  age: 30,
};
const { name: firstName, age } = person;
console.log(firstName, age); // Max 30
```

视频中把 `person.name` 改为其它值来解决冲突，其实可以用 `key` 别名（L5）
