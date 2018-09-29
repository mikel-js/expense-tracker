import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import ExpenseDashboardPage from '../components/Home'
import Header from '../components/Header'
import LogIn from '../components/LogIn'
import NotFoundPage from '../components/NotFound'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter =()=>(
  <Router history ={history}>
    <div>
      
      <Switch>
        <PublicRoute exact path='/' component={LogIn}/>
        <PrivateRoute path='/home' component={ExpenseDashboardPage} exact={true}/>
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
