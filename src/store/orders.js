// @flow

import type { OrderAction, GlobalState } from '../common/types'

export const orders = []

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
