Monorepo implementation

It has a simple backend with GraphQL

For UI it uses NextJS

The main idea - to have separate sub-packages in the
`lib` folder in order to have possibility to add new backend API
and frontend sites which may use the same business logic and UI
components.

This system uses `NX` for managing the project.

For presentation purposes this engine has `Redux + Saga + Apollo`

> For real world app `Apollo` would be enough

`core` is used by the frontend and backend

***

#### Install

```bash
pnpm install
pnpm build
```

#### Run

```bash
pnpm prod
```
