# L028 Function Types & Callbacks



特定函数的类型声明也可以用在回调函数上：

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function fn(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  const ret = cb(result);
  console.log("ret: ", ret);
}

fn(10, 20, printResult);
fn(20, 30, (res) => `Finial result is ${res}`);
/*
Result: 30
ret:  undefined
ret:  Finial result is 5
*/
```

注意第 9 行，虽然指定了回调函数的返回值为 `void`，但第 12 行中依然可以拿到结果。此时的 `void` 并非强制开发者不返回结果，而是用来提示开发者，该回调函数的返回值无需关心，非要返回也可以，但不是回调逻辑的本意。

也可以用 `type` 抽取一个自定义类型来提高代码的可读性：

```ts
type Callback = (num: number) => void;
function fn(n1: number, n2: number, cb: Callback) {
  // ...
}
```

