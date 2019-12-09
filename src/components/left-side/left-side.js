// @flow

import * as React from 'react'

import styles from './left-side.module.css'

type Props = {
  children?: React.Node
}

const LeftSide = ({ children }: Props) => (
  <div className={styles.leftSide}>
    {children}
  </div>
)

export default LeftSide
