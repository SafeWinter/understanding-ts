# L014 Vanilla JavaScript Has Types, too

---



变量值的类型并非 `TS` 的专属特性，原生 `JS` 历来就有。

`vanilla-js-types.js`：

```js
let userName = 'Max';

console.log(typeof userName); // string
```

`TS` 特有的是——

- 强制类型约束（enforcing types）；
- 显式类型声明（setting types explicitly）；
- 在写代码时即时捕获与类型相关的错误（getting type related errors at the point of time where you're writing code）。
