// @flow

import React from 'react'

import styles from './page-info.module.css'

type Props = {
  title: string,
  description: string
}

const PageInfo = ({ title, description }: Props) => (
  <div className={styles.pageInfo}>
    <div className={styles.title}>{title}</div>
    <div>{description}</div>
  </div>
)

export default PageInfo
