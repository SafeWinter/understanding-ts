# L066 Overriding Properties & The "protected" Modifier
---

类似 Java，子类也可以重写基类的方法。

本例中，由于需要操作的属性是基类的私有属性，因此子类无法访问，需要把基类的修饰词，从 `private` 改为 `protected`，这样所有继承的子类都能访问到。



## 1 改为 `protected`

```ts
class Department {
  protected employees: string[] = [];
  // ...
}
class AccountingDepartment extends Department {
  // ...
  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
}
```



## 2 改为 `super`

或者使用 `super` 中的 `addEmployee` 方法（前提是允许访问）：

```ts
class Department {
  private employees: string[] = [];
  // ... 
}

class AccountingDepartment extends Department {
  //...
  // Overwrite addEmployee method
  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    super.addEmployee(employee);
  }
}
```

> [!warning]
>
> 第 13 行必须使用 `super`，否则会循环调用导致堆栈溢出。
