# L088 Function Overloads
---

问题由来：包含并列类型的函数并不能推断出最终的结果类型——

```ts
type Comparable = string | number;

function add(a: Comparable, b: Comparable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a} ${b}`;
  }
  return a + b;
}

const result = add('Hello', 'World');
result.split(' ');  /* Property 'split' does not exist on type 'string | number'.
  Property 'split' does not exist on type 'number'. */
```

由于 result 被推断为 `Comparable` 型而非 `string` 型，因此直接调用 `split` 方法时报错。

为此，TS 引入了函数重载的概念来解决这个问题：

```ts
type Comparable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Comparable, b: Comparable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} ${b}`;
  }
  return a + b;
}

const result = add("Hello", "World");
```

经实测：函数重载只对 `function` 声明的函数生效，对通过 `let` 或 `const` 声明的 `Lambda` 函数写法无效。
