# L060 Compiling to JavaScript
---

ES6 和 ES5 对 TS 中的 `class` 类的处理有所不同：

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

转为 ES6：

```js
"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
```

转为 ES5：

```js
"use strict";
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
```

可见，ES5 明显不如 ES6 直观。
