// Higher  order component - a component(HOC) that renders another component(normal)
  // adv Reuse code
  // render hijacking
  // prop manipulation
  // abstract state

import React from 'react'
import ReactDOM from 'react-dom'


const Info =(props)=>(
  <div>
    <h1>Info</h1>
    <p>info is {props.info}</p>
  </div>)

const withAdminWarning = (WrappedComponent) => {
  return (props)=> (
    <div>
      <p>This is private info. Do not share</p>
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent)=> {
  return (props)=> (
    <div>
      {props.isAuthenticated ? 
        <WrappedComponent {...props}/> : <p>Not authenticated</p>}
      
    </div>
    
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo info='Details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Details' />, document.getElementById('app'))