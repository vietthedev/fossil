// @flow

import React from 'react'
import { useHistory } from 'react-router-dom'

import Content from '../content'

import styles from './breadcrumb.module.css'

const Breadcrumb = () => {
  const history = useHistory()

  return (
    <div className={styles.breadcrumb}>
      <Content>
        <button className={styles.backButton} onClick={() => history.goBack()}>
          &lt; back
        </button>
      </Content>
    </div>
  )
}

export default Breadcrumb
