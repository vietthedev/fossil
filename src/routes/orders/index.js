// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'

const OrderRoute = () => (
  <Route path='/orders'>
    <PageInfo
      title='List of orders'
      description='Order information and payment'
    />
    <Breadcrumb />
  </Route>
)

export default OrderRoute
