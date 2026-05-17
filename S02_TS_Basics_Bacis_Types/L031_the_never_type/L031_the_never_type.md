# L031 The "never" Type

---



`never` 类型让函数返回值的类型更加精确：特指由于中途报错而无法正常执行完成的情况。

```ts
function log(message: string): void {
    console.log(message);
}

function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
}
```

