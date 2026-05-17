# L026 Working with Enums

---



## 1 主要特性

枚举类型的适用场景：需要 **表示一组有限、固定、相关的常量集合** 时，特别是当这些常量具有明确的名称和实际意义时。

例如：

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

编译后的 `JS` 如下（默认从 `0` 开始编号）：

```js
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
// ...
userRole = Role.Guest;
```



## 2 默认编号的修改

默认编号支持手动修改：

```ts
enum Role {
  Admin = 1,
  Editor,
  Guest,
}
```

这样后续各项的编号都将自动递增为 `2`、`3`。

如果改为字符串则必须写全，因为此时 `TS` 的自动推断机制失效：

```ts
enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Guest = 'guest',
}
```

