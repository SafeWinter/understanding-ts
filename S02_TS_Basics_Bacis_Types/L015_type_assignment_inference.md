# L015 Type Assignment & Inference



TS 是用来减轻开发者负担的，因此无需这样写：

```ts
let num1: number = 1;

// alternative
let num1 = 1;
// or
let num1: number;
num1 = 1;
```

TS 可以推断出变量的类型，一旦确定，后续再变更类型，就会编译报错：

```ts
let showResult = true;
showResult = 1; 
/* Error in L2:
Type 'number' is not assignable to type 'boolean'.ts(2322)
let showResult: boolean
*/
```

除非不给初值，但可能也会收到一条警告消息：

```ts
let num1;
num1 = 1;
num1 = 'a';
/* Warning in L1:
Variable 'num1' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
let num1: any
*/
```

