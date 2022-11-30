In order to roll back from cloud to local machine

```bash
nx.json
```

Replace

```bash
"runner": "@nrwl/nx-cloud",
```

With

```bash
"runner": "nx/tasks-runners/default",
```
