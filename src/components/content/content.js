// @flow

import * as React from 'react'

import styles from './content.module.css'

type Props = {
  children?: React.Node
}

const Content = ({ children }: Props) => (
  <div className={styles.pageContent}>{children}</div>
)

export default Content
