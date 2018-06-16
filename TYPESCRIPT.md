## Minimal Typescript Project

mkdir ts && cd ts && tsc --init && npm init -y && npm i -S @types/node  
touch add.ts
touch index.ts

In `add.ts` put:

```
export function add(...numbers: number[]) {
    console.log(`Add numbers: ${numbers.join(', ')}`);
    let sum = 0;
    numbers.forEach(n => {
        sum += n;
    });
    console.log("SUM IS: ",sum);
}
```

In `index.ts` put:

```
import { add } from "./add";

add(2,2);
```

Run `index.ts` with [ts-node](https://github.com/TypeStrong/ts-node):

`ts-node index.ts`

It will log:

```
Adding the numbers: 2, 2
SUM IS:  4

```





