# L004 Installing & Using TypeScript



安装 `TypeScript` 准备工作：

- 安装 `NodeJS`（实测版本：v18.16.0，20240325）
- 安装 `TypeScript` 模块：`npm i -g typescript`（或者 `sudo npm i -g typescript`）（实测版本：5.4.3，20240325）



实例：从两个文本框获取数字进行相加，得到的是字符串拼接。需用 `TypeScript` 显示声明类型：

```ts
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
```

注意：

- 感叹号 `!` 的含义：强制消除为空异常，表示肯定不会为空
- `as HTMLInputElement`：表示 `input1` 或 `input2` 确实具有 `value` 属性
- `+input1.value` 是为了满足 `add` 的数字型参数类型