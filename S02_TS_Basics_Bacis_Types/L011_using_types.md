# L011 Using Types



回顾：JS 与 TS 中的类型

| DataType |       JavaScript       |            TypeScript            |
| :------: | :--------------------: | :------------------------------: |
|  number  |      1, 5.3, -10       |       也不区分整型、浮点型       |
|  string  | 'Hi', "Hi", &grave;Hi` |              同 JS               |
| boolean  |      true, false       | 同 JS（没有 truthy 或 falsy 值） |



`TypeScript` 的类型系统 **只能在开发阶段** 提供帮助，在编译阶段给出类型错误提示。

执行完 `tsc` 编译命令后，VSCode 通常会因为同时声明多个常量而报错。此时只需关闭对应的 TS 或 JS 文件即可。
