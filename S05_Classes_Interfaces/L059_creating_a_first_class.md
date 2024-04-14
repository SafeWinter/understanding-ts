# L059 Creating a First Class
---

示例：创建一个部门类

```ts
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
```

