# L089 Optional Chaining
---



选择性链式调用：通过 `?.` 实现

```ts
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);
```

注意第 7 行，这种写法在 `ES2020` 后也开始支持。视频中 `IDE` 对这种新语法还不支持，实操时已经修复。
