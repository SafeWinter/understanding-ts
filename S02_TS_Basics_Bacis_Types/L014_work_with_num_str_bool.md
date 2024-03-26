# L014 Working with Numbers, Strings & Booleans



`TS` 核心类型：

- 数值型（`number`）
- 布尔型（`boolean`）
- 字符串型（`string`）



实例：在函数参数 **后** 声明不同的类型：

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const [num1, num2] = [10, 5.3];
const showResult = true;
const result = add(num1, num2, showResult, "Result is: ");

console.log(result);
// Result is: 15.3
```

思考：为什么不在 L10~L12 赋值时，显式声明变量类型呢？

（答：`TS` 自带类型推断。详见下一小节）
