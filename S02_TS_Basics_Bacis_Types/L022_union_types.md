# L022 Union Types



`union` 型的示例场景：（注意第 1 行的写法）

```ts
function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    result = `${input1.concat(input2)}`;
  } else {
    result = "Err: different parameter types found!";
  }
  return result;
}

const combinedAges = combine(10, 20);
const combinedNames = combine("Jim", "Green");
const combinedErr = combine(1, "2");

console.log(`Combined ages:`, combinedAges);
console.log(`Combined names:`, combinedNames);
console.log(`Combine with err:`, combinedErr);
/*
Combined ages: 30
Combined names: JimGreen
Combine with err: Err: different parameter types found!
*/
```

使用 `union` 时，通常需要分情况讨论运行时的具体类型。
