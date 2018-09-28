import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LogIn = ({startLogin})=>{
  return (
    <div>
      <button onClick={startLogin}>LogIn</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogIn)