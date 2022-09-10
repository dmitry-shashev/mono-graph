import {
  Tree,
  readProjectConfiguration,
  names,
  generateFiles,
  joinPathFragments,
  formatFiles,
} from '@nrwl/devkit'

export default async function (tree: Tree, schema: any) {
  const componentsConfigs = readProjectConfiguration(tree, 'components')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(
      componentsConfigs.root,
      `/src/lib/forms/${namesSet.className}Form`
    ),
    {
      tmpl: '',
      ...namesSet,
    }
  )

  await formatFiles(tree)
}
