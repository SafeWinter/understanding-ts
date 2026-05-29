# L038 Optional Values in TypeScript

---



问：`TS` 中如何描述函数的可选参数呢？

答：对参数使用 `?`。它表示参数本身也可以不存在，是选填项。

```ts
function generateError(msg?: string): never {
    throw new Error(msg);
}

generateError();
```

除了用于函数参数，可选操作符也可以用于对象属性：

```ts
type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest';
}
```

