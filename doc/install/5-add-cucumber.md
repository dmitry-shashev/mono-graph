#### Install libs

```bash
pnpm add -D @badeball/cypress-cucumber-preprocessor
pnpm add -D @cypress/browserify-preprocessor
```

#### Add into `package.json`

```bash
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  },
```

#### Upgrade `cypress.config.ts`
