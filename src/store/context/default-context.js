// @flow

import React from 'react'

import type {
  GlobalState,
  MenuItemAction,
  OrderAction
} from '../../common/types'

type DefaultContextType = {
  state: GlobalState,
  dispatch: (action: MenuItemAction | OrderAction) => void
}

const DefaultContext = React.createContext<DefaultContextType>({
  state: {},
  dispatch: () => {}
})

export default DefaultContext
