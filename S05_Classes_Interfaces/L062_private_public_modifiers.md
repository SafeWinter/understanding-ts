# L062 "private and "public" Access Modifiers
---

本节介绍 `private` 和 `public` 修饰符。

**成员变量**、**成员方法** 均适用。

在部门类上新增一个 `employee` 属性，存放该部门所有 **雇员** 姓名，并创建 **添加成员** 和 **展示成员** 两个方法。此时如果不加限制，添加成员可以直接绕开预定义的方法，造成代码不一致（如漏掉一些关键校验逻辑等）。

由此引入 `private` 修饰符（如 L3）。这样在编译时就能发现违规操作（如 L27）。

```ts
class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe(); // Department: Accounting
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.employees[2] = "Anna";
accounting.printEmployeeInfo();
// 2
// ['Max', 'Manu']
```



> [!warning]
>
> `name` 属性自带 `public` 修饰符，因此创建的实例可以任意读取或修改 `name` 的值。



> [!TIp]
>
> 根据课程给出的 `public` [拓展知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)：
>
> 默认的成员变量还可以是定义时解析出的值：
>
> ```js
> const PREFIX = "prefix";
> 
> class ClassWithField {
>   field;
>   fieldWithInitializer = "instance field";
>   [`${PREFIX}Field`] = "prefixed field";
> }
> 
> const instance = new ClassWithField();
> console.log(Object.hasOwn(instance, "field")); // true
> console.log(instance.field); // undefined
> console.log(instance.fieldWithInitializer); // "instance field"
> console.log(instance.prefixField); // "prefixed field"
> ```
>
> 
>
> 另外，类字段是使用 `[[DefineOwnProperty]]` 语义（本质上是 `Object.defineProperty()` ）添加的，所以派生类中的字段声明不会调用基类中的 `setter` 方法。这种行为与在构造函数中使用 `this.field = …` 不同：
>
> ```js
> class Base {
>   set field(val) {
>     console.log(`Base val: ${val}`);
>   }
> }
> class DerivedWithField extends Base {
>   field = 1;
> }
> // Current spec
> const instance = new DerivedWithField(); // No log
> instance.field = 0.5 // No log from Base
> 
> // Earlier transpilers solution (with implicit error)
> class DerivedWithConstructor extends Base {
>   constructor() {
>     super();
>     this.field = 1;
>   }
> }
> const instance2 = new DerivedWithConstructor(); // Logs 1
> instance2.field = 3 // Logs from Base: Base val: 3
> ```
