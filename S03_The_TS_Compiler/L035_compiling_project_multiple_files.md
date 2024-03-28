# L035 Compiling the Entire Project / Multiple Files

本节介绍如何同时监听+编译多个 `TS` 文件。

> **回顾**
>
> 监听+编译单个文件 `app.ts`：
>
> ```shell
> $ tsc app.ts -w
> # or
> $ tsc app.ts --watch
> ```

如何同时监听编译多个文件？

```shell
# 1. init TS project
# (under project root directory)
$ tsc --init
# 2. watch & compile
$ tsc -w
```

