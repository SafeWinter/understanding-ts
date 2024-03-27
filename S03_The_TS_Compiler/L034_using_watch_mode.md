# L034 Using "Watch Mode"



对单个文件开启监听：

```bash
$ tsc app.ts -w
# or
$ tsc app.ts --watch
```

引入监听模式固然有效，但仍需指定某个文件 `app.ts`。大型项目中依然很不方便。
