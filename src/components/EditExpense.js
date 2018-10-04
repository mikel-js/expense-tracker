import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ConfirmModal from './ConfirmationModal'

class EditExpensePage extends React.Component {
  state = {
    confirmation: undefined
  }

  handleConfirm = () => {
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }))
    this.props.history.push('/')
  }

  handleNotConfirm = () => {
    this.setState(() => ({ confirmation: undefined }))
  }



  render() {
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
            expense={this.props.expense}
            onSubmit={(expense) => {
              this.props.dispatch(startEditExpense(this.props.expense.id, expense))
              this.props.history.push('/')
            }}
          />
          <button
            className='button button--secondary'
            onClick={() => {
              
              // props.dispatch(startRemoveExpense({ id: props.expense.id }))
              // props.history.push('/')
              this.setState(() => ({
                confirmation: true
              }))
            }}>Remove Expense</button>
          <ConfirmModal
            confirmation={this.state.confirmation}
            handleConfirm={this.handleConfirm}
            handleNotConfirm={this.handleNotConfirm}
          />
        </div>
      </div>
    )
  }
}




const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    }),
  }
}




export default connect(mapStateToProps)(EditExpensePage)

// 1. sa expenselistitem gwa link. tz ung connect s react redx
// sa mapstate props ggwa dn.
// 3. import exmpense form
// 4.import editExpennse tpos bguhin.