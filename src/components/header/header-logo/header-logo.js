// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/header-logo.png'
import styles from './header-logo.module.css'

const HeaderLogo = () => (
  <Link exact title='Fossil' to='/'>
    <img alt='logo' src={logo} className={styles.logo} />
  </Link>
)

export default HeaderLogo
