// @flow

import React from 'react'

import HomeRoute from './home'
import OrderRoute from './orders'
import WarehouseRoute from './warehouse'
import CustomerRoute from './customers'
import SystemRoute from './system'
import NotificationRoute from './notifications'

const Routes = () => (
  <>
    <HomeRoute />
    <OrderRoute />
    <WarehouseRoute />
    <CustomerRoute />
    <SystemRoute />
    <NotificationRoute />
  </>
)

export default Routes
