import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

const ExpenseListItem =( {description, amount, createdAt, id, dispatch } )=> (
  <div>
  
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>{amount} - {createdAt}</p>
    <button 
      onClick={()=>{
        dispatch(removeExpense({id}))
      }}>Remove</button>
  </div>
)

export default connect()(ExpenseListItem)

// const ExpenseListItem =(props)=> (
//   <div>
//     <p>{props.description}</p>
//     <p>{props.amount} - {props.createdAt}</p>
//   </div>
// )