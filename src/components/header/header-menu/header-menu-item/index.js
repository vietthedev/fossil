// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import type { MenuItem } from '../../../../common/types'

import styles from './header-menu-item.module.css'

const HeaderMenuItem = ({ id, name, path, exact }: MenuItem) => (
  <li key={id} className={styles.menuItem}>
    <NavLink activeClassName={styles.active} exact={exact} to={path}>{name}</NavLink>
  </li>
)

export default HeaderMenuItem
