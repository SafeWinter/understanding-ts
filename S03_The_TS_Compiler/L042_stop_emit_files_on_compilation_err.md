# L042 Stop Emitting Files on Compilation Errors
---

`noEmitOnError`：为 `true`，则当 TS 编译不通过时，不生成 JS 文件。默认为 `false`。

注意：只有当所有文件都编译通过时，才会生成所有 JS 文件；否则一个 JS 都不生成。
