// @flow

import React, { useContext } from 'react'

import DefaultContext from '../../store/context'

import styles from './order-status-filter.module.css'

import { orderActions } from '../../store/orders'
import { ORDER_STATUS } from '../../common/constants'

const handleClick = (dispatch, orderStatus) => {
  dispatch({ type: orderActions.setFilter, payload: orderStatus })
  dispatch({ type: orderActions.filter, payload: orderStatus })
}

const OrderStatusFilter = () => {
  const { state, dispatch } = useContext(DefaultContext)

  return (
    <ul className={styles.orderStatus}>
      {Object.keys(ORDER_STATUS).map((key) => (
        <li
          key={key}
          className={state.orderStatus === ORDER_STATUS[key] ? styles.active : ''}
          onClick={() => handleClick(dispatch, ORDER_STATUS[key])}
        >
          {key}
        </li>
      ))}
    </ul>
  )
}

export default OrderStatusFilter
