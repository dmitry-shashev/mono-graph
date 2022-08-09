#### Install

> https://www.graphql-code-generator.com/docs/guides/react

```bash
pnpm add graphql
pnpm add -D @graphql-codegen/cli

pnpm add -D @graphql-codegen/typescript-urql @graphql-codegen/typescript @graphql-codegen/typescript-operations
pnpm add -D @graphql-codegen/typescript-react-apollo

pnpm add -D @graphql-codegen/import-types-preset
```

#### Create a config file `codegen.yaml`

> In config section we may specify `fetch` - in that case it also will
> generate a special `fetch` function and each hook will require endpoint url
> instead of using the provider

The config below split generation between 2 files

- types
- hooks

> If we import inside the backend - it imports under hood all - so is we are
> creating an Apollo client - we have to provide polymorphic fetch
> (the example is in the "ResourceService")

```bash
schema: ./libs/core/src/lib/graph/schema.graphql
documents: ./libs/core/src/lib/graph/queries/*.graphql
generates:
  ./libs/core/src/lib/_generated/apollo-types.ts:
    plugins:
      - typescript
      - typescript-operations
  ./libs/core/src/lib/_generated/apollo-hooks.ts:
    plugins:
      - typescript-react-apollo
    config:
      withHooks: true
    preset: import-types
    presetConfig:
      typesPath: ./apollo-types
```

#### Add scripts in `package.json`

```bash
  "scripts": {
    "codegen": "graphql-codegen",
```

> CLI may download schemas from urls but in this engine we
> store them locally
