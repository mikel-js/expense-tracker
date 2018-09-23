import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        edit='Edit'
        expense ={props.expense}
        onSubmit={(expense)=>{
          console.log(props.expense.id)
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
      <button 
        onClick={()=>{
        props.dispatch(removeExpense({id: props.expense.id}))
        props.history.push('/')
      }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props)=>{
  return {
    expense:state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage)

// 1. sa expenselistitem gwa link. tz ung connect s react redx
// sa mapstate props ggwa dn.
// 3. import exmpense form
// 4.import editExpennse tpos bguhin.