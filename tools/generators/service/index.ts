import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'

export default async function (tree: Tree, schema: any) {
  const coreConfigs = readProjectConfiguration(tree, 'core')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(coreConfigs.root, '/src/lib/services'),
    {
      tmpl: '',
      ...namesSet,
    }
  )

  await formatFiles(tree)
}
