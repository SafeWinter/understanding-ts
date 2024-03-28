# L039 More Configuration & Compilation Options

更多配置项简介：

- `allowJs`：允许编译 JS 文件
- `checkJs`：让编译器对 JS 文件进行类型检查
- `jsx`：设置是否使用 `jsx`。`JSX` 是 JS 的一种语法扩展，与 `react` 相关，暂略
- `declaration`：为 `true` 时，编译生成相应的 `.d.ts` 声明文件（用于发布第三方库的类型描述文件）
- `declarationMap`：为 `true` 时，编译生成相应的 `.d.ts.map` (即 `d.ts` 文件的源码对照文件，用于追溯到原始的 TS 文件)
