// @flow

import { menuItemReducer } from './menu-items'
import { orderReducer } from './orders'

import type { GlobalState, MenuItemAction, OrderFilterAction } from '../common/types'

const reduceReducers = (...reducers) => (
  prevState: GlobalState,
  value: MenuItemAction | OrderFilterAction,
  ...args: any
) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  )

export default reduceReducers(menuItemReducer, orderReducer)
