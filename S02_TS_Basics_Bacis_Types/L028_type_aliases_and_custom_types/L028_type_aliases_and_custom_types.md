# L028 Type Aliases & Custom Types

---



类型别名用于简化代码，同时提高代码的可维护性：

```ts
// type MyNumber = number;
type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'admin';

// ...

function access(role: Role) {
  // ...
}
```

