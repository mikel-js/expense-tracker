import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LogIn = ({startLogin})=>{
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expendify!</h1>
        <p>Let this app helps you start saving!</p>
        <button onClick={startLogin} className='button'>LogIn with Google</button>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogIn)