# L061 Constructor Functions & The ""this"" Keyword
---

```ts
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe() {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Department: undefined
```

L14 的 `this` 实际指向了 `accountingCopy`，因此得到 `undefined`。

原视频方案：

```ts
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe(); // Department: DUMMY
```

两点不足：

1. L6：不便于理解；
2. L13：人为添加了一个 `name` 属性，破坏原对象的结构；



DIY 方案：使用 `bind`

```ts
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe() {
    console.log(`Department: ${this.name}`);
  }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = { describe: accounting.describe.bind(accounting) };
accountingCopy.describe(); // Department: Accounting
```



> [!tip]
>
> 无论是 JS 还是 TS，`this` 的指向都是动态的。
