// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import PageInfo from '../../components/page-info'
import Breadcrumb from '../../components/breadcrumb'
import Content from '../../components/content'
import LeftSide from '../../components/left-side'
import RightSide from '../../components/right-side'

const HomeRoute = () => (
  <Route exact path='/'>
    <PageInfo
      title='Home'
      description='Homepage'
    />
    <Breadcrumb />
    <Content>
      <LeftSide />
      <RightSide>
        This page is under construction.
      </RightSide>
    </Content>
  </Route>
)

export default HomeRoute
