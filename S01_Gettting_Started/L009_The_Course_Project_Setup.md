# L009 The Course Project Setup



本课程开发环境快速搭建步骤：

```bash
# 进入某空文件夹
$ cd proj-root
# 初始化 Node 环境
$ npm init -y
# 快速创建 index.html
# 快速创建 app.ts
# 快速启动：Alt + L + O（live server）
```

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Understanding TypeScript</title>
  <script src="app.js" defer></script>
</head>
<body></body>
</html>
```



注：原视频提到的 `lite-server` 依赖项太古老，不建议使用。