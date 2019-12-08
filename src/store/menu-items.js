// @flow

import type { MenuItemAction, GlobalState } from '../common/types'

export const menuItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    exact: true
  },
  {
    id: 2,
    name: 'Orders',
    path: '/orders'
  },
  {
    id: 3,
    name: 'Warehouse',
    path: '/warehouse'
  },
  {
    id: 4,
    name: 'Customers',
    path: '/customers'
  },
  {
    id: 5,
    name: 'System',
    path: '/system'
  },
  {
    id: 6,
    name: 'Notifications',
    path: '/notifications'
  }
]

export const menuItemActions = {}

export const menuItemReducer = (state: GlobalState, action: MenuItemAction): GlobalState => {
  switch (action.type) {
    default:
      return { ...state }
  }
}
