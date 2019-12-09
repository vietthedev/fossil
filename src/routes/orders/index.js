// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'
import LeftSide from '../../components/left-side'
import RightSide from '../../components/right-side'

const OrderRoute = () => (
  <Route path='/orders'>
    <PageInfo
      title='List of orders'
      description='Order information and payment'
    />
    <Breadcrumb />
    <Content>
      <LeftSide />
      <RightSide />
    </Content>
  </Route>
)

export default OrderRoute
