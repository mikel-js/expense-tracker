import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'



export const Header = ({ startLogout }) => (
  <header>
    <Link to='/home'>
      <h1>Expendify!</h1>
    </Link>
    <NavLink to='/help' activeClassName='is-active'>Help Page</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: ()=>dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)

// <NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
