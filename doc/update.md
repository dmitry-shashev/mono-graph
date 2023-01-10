#### Update ignoring versions

```bash
pnpm up --latest
```

> replace all occurrences in configs


#### Fix all critical issues

For example new NextJS stopped using links inside "Link"

All global `css` includes must be in the `_app.tsx`

For unit tests

```bash
p add -D jest-environment-jsdom
```

Some versions are broken - like

```bash
p remove eslint
p add eslint@8.22.0
```
