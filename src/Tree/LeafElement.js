// @flow

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './Icon'
import { NodeText } from './Text'
import { Element } from './Elements'
import type { Leaf, Node } from 'react-tree'

type Props = {
  data: Leaf,
  level: number,
  currentTheme: string,
  onSelect: Function => void,
  selected: ?Node
}




const LeafElement = (props: Props) => {
  const { data, level, reset, onSelect, currentTheme, selected } = props
  const [clicked, setClicked] = React.useState(false)

  useEffect(() => {
    setClicked(false)
  }, [reset])
  return (
    <Element selected={selected && selected.id === data.id} currentTheme={currentTheme} onClick={() => {
      onSelect(props.data)
      setClicked(previousClicked => !previousClicked);
    }} clicked={clicked}>
      <Wrapper level={level + 1}>
        <NodeText>{data.label}</NodeText>
      </Wrapper>
    </Element>
  )
}

LeafElement.defaultProps = {
  data: {
    id: null,
    label: null,
    parent_lable: null
  },
  level: 0,
  currentTheme: 'dark',
  onSelect: () => { },
  selected: null
}

export default LeafElement
