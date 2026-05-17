# L012 Project Setup

---



简化代码，突出 `TS` 重点：

```powershell
ni basics.ts | out-null
echo "console.log('Hello world!')" > basics.ts
tsc basics.ts
node basics.js
```

实测结果：

![](../assets/12-1.png)
