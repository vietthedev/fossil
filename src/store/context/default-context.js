// @flow

import React from 'react'

import type {
  GlobalState,
  MenuItemAction,
  OrderFilterAction
} from '../../common/types'

type DefaultContextType = {
  state: GlobalState,
  dispatch: (action: MenuItemAction | OrderFilterAction) => void
}

const DefaultContext = React.createContext<DefaultContextType>({
  state: {},
  dispatch: () => {}
})

export default DefaultContext
