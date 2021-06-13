import React from "react"

import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import NextStep from "../pages/Register/NextStep"
import Register from "../pages/Register"

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register/next-step" component={NextStep} />
      </Switch>
    </div>
  )
}
