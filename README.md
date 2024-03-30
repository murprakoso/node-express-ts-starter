## Node Express Typescript Starter

Adds the "swc" package for compiling TypeScript code.

The "swc" package is a TypeScript compiler that offers faster compilation times compared to the default TypeScript compiler.
By using this package, you can improve the performance of your TypeScript compilation process.

see [https://swc.rs/](https://swc.rs/) for more information about the "swc" package.

-   Install

```
npm install
```

-   Run

```
npm run dev
```

-   Build

```
npm run build
```

-   Path alias

You can use `@/` as the path alias for example

```
import UserModel from "@/models/user"
```

This will be later transpiled to the actual path by `tsconfig-paths`
