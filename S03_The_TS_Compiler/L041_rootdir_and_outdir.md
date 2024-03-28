# L041 rootDir and outDir
---

`outDir`：设置编译后的 JS 文件的存放路径（如 `./dist`）

`rootDir`：设置 TS 源文件的存放路径（如 `./src`）

此时，`src` 下的目录结构将会同步到 `dist` 目录，无需手动创建。



`removeComments`：为 `true` 时，编译后的 JS 不含注释。

`noEmit`：为 `true` 时，编译后不生成 JS 文件（用于测试大型项目，看看类型编译器是否会有潜在报错等）

`downlevelIteration`：生成更合规的遍历相关的代码，以损失性能为代价。当某些情况下，编译后的遍历部分可能出错，此时可以尝试开启这项配置进行处理。
