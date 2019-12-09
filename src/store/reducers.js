// @flow

import { menuItemReducer } from './menu-items'
import { orderReducer } from './orders'

import type { GlobalState, MenuItemAction, OrderAction } from '../common/types'

const reduceReducers = (...reducers) => (
  prevState: GlobalState,
  value: MenuItemAction | OrderAction,
  ...args: any
) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  )

export default reduceReducers(menuItemReducer, orderReducer)
