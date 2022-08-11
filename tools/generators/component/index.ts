import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'

export default async function (tree: Tree, schema: any) {
  const componentsConfigs = readProjectConfiguration(tree, 'components')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(
      componentsConfigs.root,
      `/src/lib/components/${namesSet.className}`
    ),
    {
      tmpl: '',
      ...namesSet,
    }
  )

  await formatFiles(tree)
}
