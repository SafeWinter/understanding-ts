# L036 Including & Excluding Files



## 1 跳过编译

跳过某个（些） TS 文件（夹）的编译：

```json
// tsconfig.json
{
    "compilerOptions": {/*...*/},
    "exclude": [
        "node_modules", 
        "analytics.ts", 
        "*.dev.ts", 
        "**/*.dev.ts"
    ]
}
```

四种写法——

- 指定文件夹：L6
- 指定文件：L7
- 通配符指定多个文件：L8
- 通配符指定多个路径下、多个文件：L9

注意：`exclude` 默认包含 `node_modules` 文件夹，但如果手动配置 `exclude` 节点，则 **必须同时手动补全** `node_modules`，否则会编译该文件夹。



## 2 包含编译

手动包含某个（些）TS 文件（夹）的编译：

```json
// tsconfig.json
{
    "compilerOptions": {/*...*/},
    "include": [
        "app.ts",
        "analytics.ts"
    ]
}
```

与排除类似，`include` 节点需要写出所有需要编译的文件，如果不写 `app.ts`，则不会自动编译

对于小型项目，还可以配置 `files` 节点来指定要编译的文件：

```json
// tsconfig.json
{
    "compilerOptions": {/*...*/},
    "files": [
        "analytics.ts"
    ]
}
```

