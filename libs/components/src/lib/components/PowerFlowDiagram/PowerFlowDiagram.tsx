import React, { FC, useEffect } from 'react'
import { Diagram } from 'react-easy-diagram'
import styles from './PowerFlowDiagram.module.scss'
import { CurrentRealTime } from '@mono-graph/core'

interface Props {
  data: CurrentRealTime
}

export const PowerFlowDiagram: FC<Props> = ({ data }) => {
  // the Diagram library memoize labels and save inside its state,
  // so we have to update them manually
  useEffect(() => {
    const dataKeys = Object.keys(data) as Array<keyof CurrentRealTime>
    dataKeys.forEach((key) => {
      const labelElem = document.querySelector(
        `#${key} .react_fast_diagram_NodeLabel`
      )
      const labelText = `${key}: ${data[key]}`
      if (labelElem && labelElem.textContent !== labelText) {
        labelElem.textContent = labelText
      }
    })
  }, [data])

  return (
    <div className={styles.wrap}>
      <Diagram
        initState={{
          nodes: [
            {
              isDragEnabled: false,
              id: 'you',
              label: 'You',
              position: [0, 300],
              type: 'output_horizontal',
            },
            {
              id: 'production',
              label: '',
              position: [300, 100],
              type: 'input_horizontal',
            },
            {
              id: 'consumption',
              label: '',
              position: [300, 200],
              type: 'input_horizontal',
            },
            {
              id: 'import',
              label: '',
              position: [300, 300],
              type: 'input_horizontal',
            },
            {
              id: 'export',
              label: '',
              position: [300, 400],
              type: 'input_horizontal',
            },
            {
              id: 'charged',
              label: '',
              position: [300, 500],
              type: 'input_horizontal',
            },
            {
              id: 'discharged',
              label: '',
              position: [300, 600],
              type: 'input_horizontal',
            },
          ],
          links: [
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'production',
                portId: 'input',
              },
            },
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'consumption',
                portId: 'input',
              },
            },
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'import',
                portId: 'input',
              },
            },
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'export',
                portId: 'input',
              },
            },
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'charged',
                portId: 'input',
              },
            },
            {
              source: {
                nodeId: 'you',
                portId: 'output',
              },
              target: {
                nodeId: 'discharged',
                portId: 'input',
              },
            },
          ],
        }}
      />
    </div>
  )
}
