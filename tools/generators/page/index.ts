import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  names,
} from '@nrwl/devkit'

interface SchemaProps {
  name: string
}

export default async function (tree: Tree, schema: SchemaProps) {
  const uiConfigs = readProjectConfiguration(tree, 'ui')

  const namesSet = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(uiConfigs.root, '/pages'),
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
    pathsContent.replace('}', `${namesSet.className} = '/${namesSet.name}', }`)
  )

  await formatFiles(tree)
}
