#### Run the command

```bash
pnpm nx g @nrwl/next:lib some
```

#### Fix `jest.config.ts`

```bash
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
```

#### Fix `tsconfig.lib.json`

```bash
    "types": ["node", "jest", "@testing-library/jest-dom"]
```

#### Add in `project.json`

```bash
    "tsc": {
      "executor": "@nrwl/workspace:run-commands",
      "options": {
        "commands": [
          {
            "command": "tsc --noEmit -p libs/some/tsconfig.lib.json"
          }
        ]
      }
    },
    "storybook": {
      "executor": "@nrwl/storybook:storybook",
      "options": {
        "uiFramework": "@storybook/react",
        "port": 4400,
        "config": {
          "configFolder": "libs/some/.storybook"
        }
      },
      "configurations": {
        "ci": {
          "quiet": true
        }
      }
    },
```

#### Copy the folder `.storybook`

#### Add a tag in the `project.json`

```bash
"tags": ["libs:some"],
```

#### Add deps in the root `.eslintrc.json`

```bash
            "depConstraints": [
              {
                "sourceTag": "apps:ui",
                "onlyDependOnLibsWithTags": [
                  "libs:components",
                  "libs:core",
                  "libs:store",
                  "libs:modals",
                  "libs:some"
                ]
              },
              // ...
              {
                "sourceTag": "libs:some",
                "onlyDependOnLibsWithTags": ["libs:core", "libs:components"]
              }
```

#### Change the rule in the `tsconfig.json`

```bash
    "noPropertyAccessFromIndexSignature": false,
```
