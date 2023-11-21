# L084 More on Type Guards
---

视频演示了三种守卫类型的实现：

1. 通过 `typeof`
2. 通过 `in`
3. 通过 `instanceof`



### 内容提要

`DIY` 示例：

```ts
// 1. use typeof
type Computable = string | number;
function add(n1: Computable, n2: Computable) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return `${n1}${n2}`;
  }
}

// 2. use in
class Car {
  drive() {
    console.log("Driving car ...");
  }
}
class Truck {
  drive() {
    console.log("Driving truck ...");
  }
  loadCargo() {
    console.log("Loading cargo ...");
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo();
  }
}

// 3. use instanceof
function useVehicle2(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

const vTruck: Vehicle = new Truck();
const vCar: Vehicle = new Car();
useVehicle(vTruck);
useVehicle(vCar);
/*
Driving truck ...
app.js:21 Loading cargo ...
app.js:13 Driving car ...
*/
```



### 注意事项

基于 `instanceof` 的守卫类型实现方式不可用于 `interface` 接口，因为接口目前还是 `TypeScript` 专用类型，无法在 JS 语境下直接实例化，故而会报错。

如果非要在 TS 中对具体接口进行判定，`ChatGPT` 给出的回答是绕开 `instanceof`：

```ts
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

class Printer implements Printable {
  print() {
    console.log("Printing...");
  }
}

class Logger implements Loggable {
  log() {
    console.log("Logging...");
  }
}

// 类型守卫函数，检查对象是否实现了 Printable 接口
function isPrintable(obj: any): obj is Printable {
  return typeof obj.print === "function";
}

// 类型守卫函数，检查对象是否实现了 Loggable 接口
function isLoggable(obj: any): obj is Loggable {
  return typeof obj.log === "function";
}

// 示例用法
const printer = new Printer();
const logger = new Logger();

if (isPrintable(printer)) {
  printer.print();
} else {
  console.log("Not printable.");
}

if (isLoggable(logger)) {
  logger.log();
} else {
  console.log("Not loggable.");
}
```

ChatGPT 使用的是 `typeof obj.print === "function"`，并且添加了实现该接口的 `class` 类。

要识别具体的接口，需要用到下一小节的知识点：
