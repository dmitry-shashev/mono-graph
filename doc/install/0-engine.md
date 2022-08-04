#### Base installation

```bash
pnpx create-nx-workspace@latest mono-graph --preset=apps
```

Replace `.npmrc`

Remove `.prettierrc` and add into `package.json`

```bash
  "prettier": {
    "arrowParens": "always",
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "bracketSpacing": true
  },
  "engines": {
    "node": ">=16.16.0"
  },
  "packageManager": "pnpm@7.5.2"
```

And add in the scripts section

```bash
    "dev": "nx run-many --target=serve",
    "build": "nx run-many --target=build",
    "prod": "pnpm build && nx run-many --target=serve --prod",
    "e2e": "nx e2e ui-e2e",
    "lint": "nx run-many --target=lint",
    "test": "nx run-many --target=test",
    "prettier-format": "prettier --write . && git add --all"
```

> And run `pnpm prettier-format`

#### Install plugins

```bash
pnpm add -D @nrwl/next
pnpm add -D @nrwl/js
```

#### Add the React application

```bash
pnpm nx g @nrwl/next:app ui
```

#### Add the components library

```bash
pnpm nx g @nrwl/next:lib components
```

**Fix tests runner for the components library**

> We get transformations from the `NextJS` project

`./libs/components/jest.config.ts`

```bash
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
```

#### Reset styles

```bash
pnpm add reset-css
```

#### Add a regular library

```bash
pnpm nx g @nrwl/js:library --name=core
```

#### Fix ts

**It allows using errors fields (uses any instead of unknown)**

`./tsconfig.base.json`

```bash
    "useUnknownInCatchVariables": false
```

#### Fix `next.config.js`

```bash
  async redirects() {
    return [
      {
        source: '/',
        destination: '/daily-production',
        permanent: false,
      },
    ]
  },
```

#### Fix e2e

Change `./apps/ui-e2e/project.json`

Add `serve-all`

And in runners replace with `"devServerTarget": "ui-e2e:serve-all"`

#### For tests

```bash
pnpm add start-server-and-test
```
