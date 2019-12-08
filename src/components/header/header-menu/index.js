// @flow

import React from 'react'

import HeaderMenuItem from './header-menu-item'

import styles from './header-menu.module.css'

import { menuItems } from '../../../store/menu-items'

const HeaderMenu = () => (
  <ul className={styles.menu}>
    {menuItems.map(item => <HeaderMenuItem key={item.id} {...item} />)}
  </ul>
)

export default HeaderMenu
