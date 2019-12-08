// @flow

import type { OrderFilterAction, GlobalState } from '../common/types'

export const orders = []

export const orderActions = {
  filter: 'filter'
}

export const orderReducer = (state: GlobalState, action: OrderFilterAction): GlobalState => {
  switch (action.type) {
    case orderActions.filter:
      return {
        ...state,
        orders: orders.filter(order => order.status === action.payload)
      }
    default:
      return state
  }
}
