#### Base init

```bash
pnpx husky install
```

#### Add the package

```bash
pnpm add husky
```

#### Add the command into the `package.json`

```bash
  "scripts": {
    "prepare": "husky install",
```

#### Add all necessary scripts

```bash
pnpx husky add .husky/pre-commit "pnpm version patch --no-git-tag-version"
pnpx husky add .husky/pre-commit "pnpm prettier-format"
pnpx husky add .husky/pre-commit "git add --all"
pnpx husky add .husky/pre-commit "pnpm tsc"

pnpx husky add .husky/pre-push "pnpm lint"
pnpx husky add .husky/pre-push "pnpm test"
```
