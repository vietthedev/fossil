// @flow

import React, { useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import DefaultContext from '../../store/context'
import reducers from '../../store/reducers'

import Header from '../header'
import Main from '../main'
import Footer from '../footer'

import { menuItems } from '../../store/menu-items'
import { orders } from '../../store/orders'

library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope, faChevronLeft)

const initialState = {
  user: {
    id: 1,
    name: 'Việt',
    photoUrl: 'https://portfolio.huynhviet.com/static/img/avatar.png'
  },
  contact: {
    address: {
      icon: 'map-marker-alt',
      content: '384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh'
    },
    phoneNumber: {
      icon: 'phone-alt',
      content: '028 3826 8160'
    },
    email: {
      icon: 'envelope',
      content: 'phuong@fossil.com'
    }
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
