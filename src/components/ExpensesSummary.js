import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

// numeral.locale('fr');


const ExpensesSummary = ({ expenseCount, expensesTotal, expensesHidden }) => {
  // prang props yanng taas n destructure
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotal}</span></h1>
        { expensesHidden >= 1 ?
          <h4>Not showing {expensesHidden} expense/s because of filters</h4>
          :
          <h4>Showing all expense/s</h4>
        }
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    expensesHidden: state.expenses.length - visibleExpenses.length
  }
}

export default connect(mapStateToProps)(ExpensesSummary)