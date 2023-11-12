# L016 Object Types



对象类型的赋值：

```ts
const person: {
    name: string;
    age: number;
} = {
    name: 'Max',
    age: 30
};
```

其中 L2 - L3 为该对象的类型表示形式，不会进入 JS 中。书写时最好使用自动推断版：

```ts
const person = {
    name: 'Max',
    age: 30
};
```

另外，两种想当然的写法是不推荐的：

```ts
const person: object = {
  name: "Maximilian",
  age: 27,
};
console.log(person.name); // Property 'name' does not exist on type 'object'.ts(2339)
```

因为 `object` 型太泛。

另一种错误写法：

```ts
const person: {
    name: string;
    age: 31;
} = {
  name: "Maximilian",
  age: 30,
};
console.log(person.name); 
/*
L6 报错：
Type '30' is not assignable to type '31'.ts(2322)
app.ts(3, 5): The expected type comes from property 'age' which is declared here on type '{ name: string; age: 31; }'
(property) age: 31
*/
```

这样写后，`age` 的值只能为 30，否则一改变就报错