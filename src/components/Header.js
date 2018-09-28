import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'



export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify!</h1>
    <NavLink to='/home' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help Page</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: ()=>dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)