# L018 Arrays Types



数组类型的声明 `string[]`：

```ts
let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];
```



利用 TS 类型推断，可以在遍历数组元素时获得 IDE 提示（第 8 行 `toLowerCase`）：

```ts
const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}
```



当数组元素类型不一致时，该数组的类型可以声明为 `any[]`