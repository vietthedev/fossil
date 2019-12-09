// @flow

import { ORDER_STATUS } from '../common/constants'

import type { OrderAction, GlobalState } from '../common/types'

export const orders = [
  {
    id: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.CONFIRM
  },
  {
    id: 158680083787,
    name: 'Nguyễn Minh Tường',
    level: 2,
    quantity: 124,
    date: new Date(),
    total: 90000000,
    status: ORDER_STATUS.CONFIRM
  },
  {
    id: 158680083788,
    name: 'Lê Nguyễn Minh Khánh',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.CONFIRM
  },
  {
    id: 158680083789,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.CONFIRM
  },
  {
    id: 158680083790,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.CONFIRM
  },
  {
    id: 158680083791,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.PROCESS
  },
  {
    id: 158680083792,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 2,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.PROCESS
  },
  {
    id: 158680083793,
    name: 'Nguyễn Thị Thanh Thúy',
    level: 1,
    quantity: 124,
    date: new Date(),
    total: 35000000,
    status: ORDER_STATUS.WAITING
  }
]

export const orderActions = {
  setFilter: 'setFilter',
  filter: 'filter'
}

export const orderReducer = (state: GlobalState, action: OrderAction): GlobalState => {
  switch (action.type) {
    case orderActions.setFilter:
      return {
        ...state,
        orderStatus: action.payload
      }
    case orderActions.filter:
      return {
        ...state,
        orders: orders.filter(order => order.status === action.payload)
      }
    default:
      return state
  }
}
