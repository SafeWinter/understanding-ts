# L027 Functions as Types



`TypeScript` 还可以指定一个具体的函数类型：

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

let fn: (m: number, n: number) => number;
fn = add;
// fn = printResult; 
/* Compile Error in L11:
Type '(num: number) => void' is not assignable to type '(m: number, n: number) => number'.
  Type 'void' is not assignable to type 'number'.ts(2322)
*/

printResult(fn(5, 12));
```

第 9 行中的参数名可以任意指定。



如果泛指任何函数类型，可以这样写：

```ts
let fn: Function;
fn = add;
fn = printResult;
fn(5, 12); // Result: 5
```

