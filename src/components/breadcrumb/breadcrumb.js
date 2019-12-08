// @flow

import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Content from '../content'

import styles from './breadcrumb.module.css'

const Breadcrumb = () => {
  const history = useHistory()

  return (
    <div className={styles.breadcrumb}>
      <Content>
        <button className={styles.backButton} onClick={() => history.goBack()}>
          <FontAwesomeIcon icon='chevron-left' /> back
        </button>
      </Content>
    </div>
  )
}

export default Breadcrumb
