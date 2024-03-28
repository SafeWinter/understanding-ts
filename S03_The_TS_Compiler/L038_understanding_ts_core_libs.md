# L038 Understanding TypeScript Core Libs

`lib` 节点加载 TS 依赖的第三方库，默认情况下包含：

```json
{
    "compilerOptions": {
        "target": "ES2016",
        "lib": [
            "ES2016",
            "DOM",
            "DOM.Iterable",
            "ScriptHost"
        ]
    }
}
```



> **`lib` 依赖的具体含义（ChatGPT）**
>
> 当在 `TypeScript` 的 `tsconfig.json` 配置文件中指定 `"lib"` 选项时，您在实际编译时将使用的库被指定为 `TypeScript` 可用的基础库集合。这些库对于编译器来说是可见的，并且影响其在代码中的类型检查和补全行为。下面是对这四个库的简要介绍：
>
> 1. `"ES2016"`：
>    - 这表示 `TypeScript` 将包括 `ES2016` 标准中引入的所有特性和 API。
>    - `ES2016`（也称为 `ES7`）是 `ECMAScript 2016` 的简称，它是 `JavaScript` 的规范之一，定义了 `JavaScript` 的语法和行为。
>    - 一些 ES2016 中引入的功能包括 `Array.prototype.includes` 方法、指数操作符 (`**`) 等。
> 2. `"DOM"`：
>    - 这表示 `TypeScript` 将包括与浏览器 `DOM` (Document Object Model) 相关的类型定义和 API。
>    - `DOM` 是对文档结构的抽象表示，它允许 `JavaScript` 与 `HTML` 和 `XML` 文档进行交互。这包括诸如 `document`、`Element`、`Event` 等的定义。
>    - 使用 `DOM`，您可以操作网页中的元素、注册事件处理程序等。
> 3. `"DOM.Iterable"`：
>    - 类似于 `"DOM"`，这也表示 `TypeScript` 将包括与 `DOM` 相关的类型定义和 `API`。
>    - `"DOM.Iterable"` 在此之上额外提供了对可迭代对象的支持。这意味着它包含了对 `DOM` 集合（例如 `NodeList`）等可迭代对象的类型定义。
>    - 可迭代对象支持 `for...of` 循环语句和其他操作。
> 4. `"ScriptHost"`：
>    - 这个库提供了一组用于操作脚本宿主环境的类型定义和 `API`。
>    - 在大多数情况下，它与 `TypeScript` 编译器及其环境一起使用，而不是直接由开发人员使用。
>    - 这个库通常用于编写 `TypeScript` 的自定义编译器插件或与 `TypeScript` 编译器进行交互的工具。
>
> 通过在 `"lib"` 中包含这些库，您可以确保您的 `TypeScript` 代码能够访问所需的特性和 `API`，并且能够得到正确的类型检查和补全。
