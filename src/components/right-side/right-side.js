// @flow

import * as React from 'react'

import styles from './right-side.module.css'

type Props = {
  children?: React.Node
}

const RightSide = ({ children }: Props) => (
  <div className={styles.rightSide}>
    {children}
  </div>
)

export default RightSide
