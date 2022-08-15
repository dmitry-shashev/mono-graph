import { render } from '@testing-library/react'
import { PowerFlowDiagram } from './PowerFlowDiagram'
import { getTestCurrentRealTime } from '../../test/test-data'
import { IDiagramProps } from 'react-easy-diagram'
import { textInTheDocument } from '@mono-graph/core'

jest.mock('react-easy-diagram', () => ({
  Diagram: ({ initState }: IDiagramProps) => (
    <div>
      {initState?.nodes?.map((node) => (
        <div key={node.id} id={node.id}>
          <div className="react_fast_diagram_NodeLabel" />
        </div>
      ))}
    </div>
  ),
}))

describe('PowerFlowDiagram', () => {
  it('component', async () => {
    const data = getTestCurrentRealTime()

    render(<PowerFlowDiagram data={data} />)

    await textInTheDocument(data.production)
  })
})
