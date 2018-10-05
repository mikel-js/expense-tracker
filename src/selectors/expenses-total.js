import React from 'react'

export default (expenses) => {
  return (
    expenses.map((expense) => {
      return expense.amount
    }).reduce((total, amount) => total + amount, 0)
  )
}

