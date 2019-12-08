// @flow

import React from 'react'
import { Switch } from 'react-router-dom'

import Routes from '../../routes'

import styles from './main.module.css'

const Main = () => (
  <main className={styles.pageMain}>
    <Switch>
      <Routes />
    </Switch>
  </main>
)

export default Main
