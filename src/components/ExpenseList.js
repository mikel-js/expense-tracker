import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-mobile'>Expenses</div>
      <div className='show-desktop'>Expense</div>
      <div className='show-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {
        props.expenses.length === 0 ? (
          <div className='list-item list-item__message'>
            <span>No Expenses</span>
          </div>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />
            })
          )
      }
    </div>

  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)

// const ConnectedExpenseList = connect((state)=> {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// {
//   props.expenses.map((expense, indx)=>(
//     <ExpenseListItem 
//       description={expense.description}
//       key={indx}
//       amount={expense.amount}
//       createdAt={expense.createdAt}
//     />
//   ))
// }
// yung expense dti e state.expense


// export default ConnectedExpenseList
// yung props s taas e galing s mapstatetoprops tz kinonek

