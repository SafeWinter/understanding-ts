# L019 Working with Tuples



元组既限定元素 **长度**，又限定元素 **类型**，还限定元素 **顺序**：

```ts
let roles: [number, string];
// 1. Same length, same types, same order: Pass
roles = [2, 'Cars'];

// 2. Diff length: compiling error
roles = [2, 'Cars', 3] /* Error:
Type '[number, string, number]' is not assignable to type '[number, string]'.
  Source has 3 element(s) but target allows only 2.ts(2322)*/

// 3. Diff order: compiling error
roles = [
  "pencils", // Type 'string' is not assignable to type 'number'.ts(2322)
  5,         // Type 'number' is not assignable to type 'string'.ts(2322)
];
```

一个例外：`push`

```ts
let roles: [number, string];
roles = [2, 'Cars'];

roles.push('Bikes'); // pass

roles.push(new Date()) /* Error: 
Argument of type 'Date' is not assignable to parameter of type 'string | number'.ts(2345) */
```

可见，数组方法 `push` 可以突破元组的长度限制，但传参的类型 **只能是元组指定的类型**。

由此发散，以下方法也能突破元组限制：

```ts
let roles: [number, string];
roles = [2, 'Cars'];

// 1. unshift a number
roles.unshift(1);       // pass

// 2. unshift a string
roles.unshift('Boat');  // pass

// 3. pop an element
roles.pop();            // pass

// 4. shift an element
roles.shift();          // pass
```

