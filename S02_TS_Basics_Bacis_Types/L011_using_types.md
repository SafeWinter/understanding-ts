# L011 Using Types



回顾：`JS` 与 `TS` 支持的类型

| DataType  |          JavaScript          |              TypeScript              |
| :-------: | :--------------------------: | :----------------------------------: |
| `number`  |         1, 5.3, -10          |    同 `JS`，也不区分整型、浮点型     |
| `string`  | 'Hi', "Hi", &grave;Hi&grave; |               同 `JS`                |
| `boolean` |         true, false          | 同 `JS`（但没有 truthy 或 falsy 值） |

`TypeScript` 的类型系统 **只能在开发阶段** 提供帮助，在编译阶段给出类型错误提示。

执行完 `tsc` 编译命令后，VSCode 通常会因为同时声明多个常量而报错。此时只需关闭对应的 TS 或 JS 文件即可。



示例：两数相加。用 `TypeScript` 可以在代码编译前发现问题并修复。

```typescript
function add(n1: number, n2: number) {
    return n1 + n2;
}
const m = 5; // '5'
const n = 2.8;
console.log(add(m + n));
```

