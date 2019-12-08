// @flow

import * as React from 'react'

import HeaderLogo from './header-logo'
import HeaderMenu from './header-menu'
import HeaderUser from './header-user'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.pageHeader}>
    <nav className={styles.navigationBar}>
      <HeaderLogo />
      <HeaderMenu />
      <HeaderUser />
    </nav>
  </header>
)

export default Header
