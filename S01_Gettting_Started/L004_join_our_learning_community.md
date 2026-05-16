# L004 Join Our Learning Community

---

（重制版）

Join Our Learning Community
加入我们的学习社区

Great to have you on board as a student!
很高兴你能加入我们的行列，成为一名学生！

This course also comes with free access to our “**Academind Community**” on Discord: “[**Academind Community**](https://academind.com/community/)”.
本课程还附赠 Discord 平台上的“Academind 社区”免费访问权限：“Academind 社区”。

There, you can find **like-minded people**, **discuss** issues, **help each other**, share progress, successes and ideas and simply **have a good time**!
在那里，你可以结识志同道合的朋友，探讨各种话题，互相帮助，分享进展、成就和想法，还能尽情享受快乐时光！

---

I believe that you learn the most if you **don’t learn alone** but find learning partners and other people with similar interests. Our community is a great place for this - it’s the perfect complimentary resource for this course.
我认为，与其独自学习，不如寻找学习伙伴和志同道合的人，这样才能学到最多。我们的社区正是实现这一目标的绝佳场所——它是本课程的完美补充资源。

**Joining it is of course free and 100% optional! :-)
加入当然是免费的，而且完全自愿！:-)**

We'd love to welcome you on board of the community!
我们非常欢迎您加入我们的社区！





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