# L063 Shorthand Initialization

---

对于类的普通字段，先声明类型、再到构造函数中赋值的写法很冗余：

```ts
class Department {
  private id: string;
  public name: string;
  private employees: string[] = [];
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  // methods for adding & showing employees ...
}
```

可以简写为：

```ts
class Department {
  private employees: string[] = [];
  constructor(private id: string, public name: string) {}
  // methods for adding & showing employees ...
}
```



> [!note]
>
> 简写中的参数名必须和类的 **字段名称** 必须完全一致，对应的修饰符也是 **必填项**
