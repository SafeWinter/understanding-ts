# L014 Working with Numbers, Strings & Booleans



在函数参数前声明不同的类型：

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

