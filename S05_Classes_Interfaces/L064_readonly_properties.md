# L064 ""readonly"" Properties
---

只读属性：

```ts
class Department {
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  // methods for adding & showing employees ...
}
```

不在简写模式的写法：

```ts
class Department {
  private readonly id: string;
  private employees: string[] = [];
  constructor(id: string, public name: string) {
    this.id = id;
  }
  // methods for adding & showing employees ...
}
```

