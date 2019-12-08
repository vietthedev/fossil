// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'

const NotificationRoute = () => (
  <Route exact path='/notifications'>
    <PageInfo
      title='Notifications'
      description='Your notifications'
    />
    <Breadcrumb />
    <Content>
      This page is under construction.
    </Content>
  </Route>
)

export default NotificationRoute
