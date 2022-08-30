import {
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'

export default async function (tree: Tree, schema: any) {
  const uiConfigs = readProjectConfiguration(tree, 'components')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(
      uiConfigs.root,
      '/src/lib/modals',
      `${namesSet.className}Modal`
    ),
    {
      tmpl: '',
      ...namesSet,
    }
  )
}
