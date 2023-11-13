# L020 Working with Enums



示例场景：指定一组用户角色（role）：管理员、只读、作者。

```ts
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "Max",
  age: 30,
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("role is admin");
}
```

第 9 行实际比较的是下标值（从 0 开始）。



这些下标值也可以手动指定：（反而丢失了 TS 的易用性）

```ts
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
```



实际编译的结果：

```js
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Max",
    age: 30,
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("role is admin");
}
```

