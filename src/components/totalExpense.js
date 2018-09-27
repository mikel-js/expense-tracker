// import getExpensesTotal from '../..selectors/expenses-total'
const getExpensesTotal = (expenses) => {
  return (
      expenses.map((expense)=>{
        return expense.amount
      }).reduce((total, amount)=> total + amount, 0)
    ) 
  }

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 0
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: 0
}]

const total = getExpensesTotal(expenses)
console.log(total)