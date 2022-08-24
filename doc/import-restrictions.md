Each application or a library has a tag in the `project.json`

> It can be any tag, but for this project - related to names
> like `libs:components` etc

Using these tags the import restrictions were added in the
root lint rules `.eslintrc.json`

Like

```
{
  "sourceTag": "apps:ui",
  "onlyDependOnLibsWithTags": ["libs:components", "libs:core", "libs:store"]
},
{
"sourceTag": "apps:backend",
"onlyDependOnLibsWithTags": ["libs:core"]
},
```

The idea - to control dependencies between modules
