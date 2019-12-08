// @flow

import React, { useContext } from 'react'

import DefaultContext from '../../../store/context'

import styles from './header-user.module.css'

const HeaderUser = () => {
  const { state } = useContext(DefaultContext)
  const { user } = state

  return (
    <button className={styles.user}>
      <img alt='Profile' src={user.photoUrl} className={styles.userPhoto} />
      {user.name}
    </button>
  )
}

export default HeaderUser
