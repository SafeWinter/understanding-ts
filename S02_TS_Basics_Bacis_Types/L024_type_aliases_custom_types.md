# L024 Type Aliases / Custom Types



`union` 及 `literal` 型都可以用 **类型别名** 简化代码：

```ts
type Combinable = number | string;
type CombinableDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable,
    resultConversion: CombinableDescriptor
) {
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
```

