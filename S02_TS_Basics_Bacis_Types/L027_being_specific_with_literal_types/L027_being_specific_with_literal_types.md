# L027 Being Specific with Literal Types

---



声明 `enum` 枚举型显得不够轻量，一种更流行的平替方案是使用常量类型（literal types）：

给定如下枚举型声明：

```ts
enum Role {
  Admin,
  Editor,
  Guest,
}

let userRole: Role = Role.Admin;

// ...

userRole = Role.Guest;
```

等效的常量类型版本为：

```ts
let userRole: 'admin' | 'editor' | 'guest' = 'admin';

// ...

userRole = 'guest';
```

推广到元组，可以限定每个元素的具体取值范围：

```ts
// let possibleResults: [number, number];
let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, -1];
```

