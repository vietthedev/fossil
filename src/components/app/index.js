// @flow

import React, { useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'

import DefaultContext from '../../store/context'
import reducers from '../../store/reducers'

import Header from '../header'
import Main from '../main'
import Footer from '../footer'

import { menuItems } from '../../store/menu-items'
import { orders } from '../../store/orders'

const initialState = {
  user: {
    id: 1,
    name: 'Việt',
    photoUrl: 'https://portfolio.huynhviet.com/static/img/avatar.png'
  },
  menuItems,
  orders
}
const App = () => {
  const [state, dispatch] = useReducer(reducers, initialState)

  return (
    <DefaultContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </DefaultContext.Provider>
  )
}

export default App
