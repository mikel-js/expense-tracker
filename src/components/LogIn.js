import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginFb } from '../actions/auth'

export const LogIn = ({startLogin, startLoginFb})=>{
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expendify!</h1>
        <p>Let this app helps you start saving!</p>
        <button onClick={startLogin} className='button'>LogIn with Google</button>
        <button onClick={startLoginFb} className='button'>LogIn with FaceBook</button>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin()),
  startLoginFb: ()=> dispatch(startLoginFb()),

})

export default connect(undefined, mapDispatchToProps)(LogIn)