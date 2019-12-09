// @flow

import React from 'react'

import styles from './order-list-table.module.css'

import type { Order } from '../../../common/types'

type Props = {
  columnNames: string[],
  orders: Order[],
  totalOrders: number
}

const OrderListTable = ({ columnNames, orders, totalOrders }: Props) => (
  <table className={styles.orderTable}>
    <thead>
      <tr>
        {columnNames.map(columnName => (
          <th key={columnName}>{columnName}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>
            <div className={styles.name}>{order.name}</div>
            <div className={styles.level}>Lv{order.level}</div>
          </td>
          <td className={styles.center}>
            {order.quantity}
          </td>
          <td>
            {`${order.date.getDate()}.${order.date.getMonth()}.${order.date.getFullYear()}`}
          </td>
          <td>
            {order.id}
          </td>
          <td className={styles.bold}>
            {order.total.toLocaleString('vi-VN')}
          </td>
        </tr>
      ))}
    </tbody>
    {orders.length ? (
      <tfoot>
        <tr>
          <td colspan={columnNames.length}>
            <span className={styles.totalOrders}>
            You have {totalOrders} orders
            </span>
            <ul className={styles.page}>
              <li>First</li>
              <li>01</li>
              <li className={styles.active}>02</li>
              <li>03</li>
              <li>04</li>
              <li>...</li>
              <li>12</li>
              <li>Last</li>
            </ul>
          </td>
        </tr>
      </tfoot>
    ) : null}
  </table>
)

export default OrderListTable
