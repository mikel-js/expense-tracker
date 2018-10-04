import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ConfirmModal from './ConfirmationModal'

const EditExpensePage = (props) => {
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          edit='Save changes'
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense))
            props.history.push('/')
          }}
        />
        <button
          className='button button--secondary'
          onClick={() => {
            // props.dispatch(startRemoveExpense({ id: props.expense.id }))
            // props.history.push('/')
            props.confirmations = true
          }}>Remove Expense</button>
          <ConfirmModal confirmation={props.confirmation}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    }),
    confirmation: undefined
  }
}




export default connect(mapStateToProps)(EditExpensePage)

// 1. sa expenselistitem gwa link. tz ung connect s react redx
// sa mapstate props ggwa dn.
// 3. import exmpense form
// 4.import editExpennse tpos bguhin.