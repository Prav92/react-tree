// @flow

import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LeafElement from './LeafElement'
import { Element } from './Elements'
import Wrapper from './Wrapper'
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NodeText } from './Text'
import type { Node, Leaf } from 'react-tree'

type Props = {
  data: Node,
  toggle: void => void,
  isOpen: boolean,
  isRoot: boolean,
  level: number,
  selected: ?Node,
  onSelect: Function => void,
  currentTheme: string
}

const NodeElement = (props: Props) => {
  const { data, isOpen, isRoot, toggle, onSelect, selected, level, currentTheme } = props
  if (props.data === null) {
    return null
  }

  return (
    <Element
      isOpen={isOpen}
      isRoot={isRoot}
      onClick={() => {
        toggle()
        onSelect(data)
      }}
      currentTheme={currentTheme}
      selected={selected && selected.id === data.id}
    >
      <Wrapper level={level}>

        <NodeText>{data.label}</NodeText>
        <Icon currentTheme={currentTheme}>
          <FontAwesomeIcon icon={isOpen ? 'chevron-up' : 'chevron-down'} />
        </Icon>
      </Wrapper>
    </Element>
  )
}

NodeElement.defaultProps = {
  data: null,
  toggle: () => { },
  isOpen: false,
  isRoot: false,
  level: 0,
  selected: null,
  onSelect: () => { },
  currentTheme: 'dark'
}

export default NodeElement
