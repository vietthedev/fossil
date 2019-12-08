// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'

const CustomerRoute = () => (
  <Route exact path='/customers'>
    <PageInfo
      title='List of customers'
      description='Customer information'
    />
    <Breadcrumb />
    <Content>
      This page is under construction.
    </Content>
  </Route>
)

export default CustomerRoute
