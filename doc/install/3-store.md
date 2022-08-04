#### Init the library

```bash
pnpm nx g @nrwl/js:library --name=store
```

#### Redux Toolkit

```bash
pnpm add @reduxjs/toolkit react-redux
pnpm add @types/react-redux
```

#### Reselect

```bash
pnpm add reselect
```

#### Saga

```bash
pnpm add redux-saga
pnpm add @redux-saga/core
pnpm add @redux-saga/testing-utils
```

#### Fix lint

`./libs/store/.eslintrc.json`

```bash
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": 0
      }
    },
```
