function log(message: string): void {
  console.log(message);
}

// function performJob(cb: Function) {
//   // ...
//   cb("Job completed!");
// }

function performJob(cb: (msg: string) => void) {
  // ...
  cb("Job done!");
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

const greeting = user.greet();  // Hello there!
console.log(greeting);  // Max
