import {
  Tree,
  formatFiles,
  readProjectConfiguration,
  names,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit'

export default async function (tree: Tree, schema: any) {
  const uiConfigs = readProjectConfiguration(tree, 'ui')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(uiConfigs.root, `/pages/${namesSet.name}`),
    {
      tmpl: '',
      ...namesSet,
    }
  )

  const pagesPaths = joinPathFragments(
    uiConfigs.root,
    '/lib/constants/page-path.ts'
  )
  const pathsContent = tree.read(pagesPaths, 'utf-8')

  tree.write(
    pagesPaths,
    pathsContent.replace(
      '}',
      `${namesSet.className}_ID = '/${namesSet.name}/[id]', }`
    )
  )

  await formatFiles(tree)
}
