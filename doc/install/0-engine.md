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
    "node": ">=20.9.0",
    "pnpm": ">=8.10.2"
  },
  "packageManager": "pnpm@8.10.2"
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
pnpm add -D @nrwl/cypress
```

#### Add the React application

```bash
pnpm nx g @nrwl/next:app ui
```

> The command below may add e2e tests to the existing project
> but NextJS generates it automatically, so we don't have to run it

```bash
pnpm nx g @nrwl/cypress:cypress-project ui-e2e --project=ui
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

**Add**

```bash
pnpm add -D @types/testing-library__jest-dom
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

Add `e2e-serve-dev` and `e2e-serve-prod`

And in runners replace with `"devServerTarget": "ui-e2e:serve-dev"`

> The problem there that we can start only one specific target but in this project
> we have 2, so the default start command was replaced by the custom one

#### For tests

```bash
pnpm add start-server-and-test
```

#### For components lib change in the `tsconfig.json`

```bash
noPropertyAccessFromIndexSignature: false
```

#### Add extra testing libraries

```bash
pnpm add -D @testing-library/jest-dom
pnpm add -D @testing-library/user-event
```

#### Extra types for node

```bash
pnpm add -D @types/node
```

#### Each typescript project must contain `tsc` target in `project.json`

> Pay attention - specify the path to the project

```bash
    "tsc": {
      "builder": "@nrwl/workspace:run-commands",
      "options": {
        "commands": [
          {
            "command": "tsc --noEmit -p apps/ui-e2e/tsconfig.json"
          }
        ]
      }
    }
```

> For the library it should be `apps/ui-e2e/tsconfig.lib.json`
>
> For the backend it should be `apps/ui-e2e/tsconfig.app.json`
