// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'

const SystemRoute = () => (
  <Route exact path='/system'>
    <PageInfo
      title='System'
      description='System settings'
    />
    <Breadcrumb />
    <Content>
      This page is under construction.
    </Content>
  </Route>
)

export default SystemRoute
