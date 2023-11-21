# L085 Discriminated Unions
---

可辨识的并集类型

该类型可以看成是上一节类型守卫的一种特殊情况，尤其适合判定实际使用的接口是哪一个。实现方式是引入一个字面量类型的属性：

```ts
interface Horse {
  type: "horse";
  runningSpeed: number;
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = -1;
  }
  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 8 });
/*
Moving at speed: 10
Moving at speed: 8
*/
```

