// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'

const WarehouseRoute = () => (
  <Route exact path='/warehouse'>
    <PageInfo
      title='Warehouse'
      description='Warehouse'
    />
    <Breadcrumb />
    <Content>
      This page is under construction.
    </Content>
  </Route>
)

export default WarehouseRoute
