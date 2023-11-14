# L025 Type Aliases & Object Types



类型别名也可以用于自定义某种类型，进一步简化代码：

```ts
type User = {name: string, age: number};

const u1: User = {name: 'Max', age: 10}; // OK

// Demo1:
const greet0 = (user: {name: string,  age: number}) => console.log(`Hi, I am ${user.name}`);
const greet = (user: User) => console.log(`Hi, I am ${user.name}`);

// Demo2:
const isOlder0 = (user: {name: string, age: number}, checkAge: number) => 
    console.log(checkAge > user.age);
const isOlder = (user: User, checkAge: number) => console.log(checkAge > user.age);

console.log(greet(u1));  // Hi, I am Max
console.log(isOlder(u1, 30));  // true
```

