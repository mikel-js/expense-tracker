import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginFb } from '../actions/auth'

export const LogIn = ({ startLogin, startLoginFb }) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expendify!</h1>
        <p>Let this app helps you start saving!</p>
        <div className='login-button'>
          <button
            onClick={startLogin}
            className='button button--secondary'>
            LogIn with Google
            <img src='./images/gmail.png' />
        </button>
          <button
            onClick={startLoginFb}
            className='button button--white'>
            LogIn with Facebook
            <img src='./images/facebook.png' />
        </button>
        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginFb: () => dispatch(startLoginFb()),

})

export default connect(undefined, mapDispatchToProps)(LogIn)