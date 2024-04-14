# L065 Inheritance
---

TS 类的集成：

以前面的 `Department` 部门类为基类，派生出 **会计** 和 **IT** 部门两个子类，分别对部门的属性进行扩展：

```ts
// Base:
class Department {
  private readonly id: string;
  private employees: string[] = [];
  constructor(id: string, public name: string) {
    this.id = id;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length); console.log(this.employees);
  }
}

// Subclass1: IT
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

// Subclass2: Accounting
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}
```

其中，L22 的 `admins` 也可以用简写形式，这里仅做示范。
