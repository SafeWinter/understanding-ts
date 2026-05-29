function log(message) {
    console.log(message);
}
// function performJob(cb: Function) {
//   // ...
//   cb("Job completed!");
// }
function performJob(cb) {
    // ...
    cb("Job done!");
}
performJob(log);
var user = {
    name: 'Max',
    age: 39,
    greet: function () {
        console.log('Hello there!');
        return this.name;
    }
};
var greeting = user.greet();
console.log(greeting);
