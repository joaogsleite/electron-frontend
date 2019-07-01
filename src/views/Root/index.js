import React from 'react'
import { Switch, Route } from 'react-router-dom'

import style from './style.module.css'

import Home from 'views/Home'
import NoMatch from 'views/404'

export default function () {
  return (
    <div className={style.rootContainer}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route render={() => <NoMatch />} />
      </Switch>
    </div>
  )
}
