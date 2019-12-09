// @flow

import React, { useContext } from 'react'

import OrderListTable from './order-list-table'

import DefaultContext from '../../store/context'

import styles from './order-list.module.css'

const columnNames = ['Name', 'Quantity', 'Date order', 'Order ID', 'Total']

const OrderList = () => {
  const { state } = useContext(DefaultContext)

  return (
    <div className={styles.orderList}>
      <div style={{ marginBottom: '.25rem' }}>
        You have <span className={styles.numOrders}>{state.orders.length}</span> orders, waiting for your confirm.
      </div>
      <OrderListTable columnNames={columnNames} orders={state.orders} totalOrders={state.totalOrders} />
    </div>
  )
}

export default OrderList
