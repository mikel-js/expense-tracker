import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// action generator
// add expense addExpenses = ({default}={})=>({ value })
const addExpense =({
    description = '', 
    note ='', 
    amount=0, 
    createdAt = 0 
  }={}
)=>({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note,
    amount,
    createdAt
  }
})
// remove exp
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
})
// edit exp
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// set text filter
const setTextFilter=(text= '') => ({
  type: 'TEXT_FILTER',
  text
})
// sort date
const sortByDate =()=>({
  type: 'SORT_DATE',
})
// sort amount
const sortByAmount =()=>({
  type: 'SORT_AMOUNT'
})
// set start
const setStartDate =(time)=>({
  type: 'START_DATE',
  time: time
})
// set end
const setEndDate =(time)=>({
  type: 'END_DATE',
  time: time
})

// expense reducer
const expensesReducerDefaultState = []

const expensesReducer = (state=expensesReducerDefaultState, action)=> {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense, ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filter reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action)=>{
  switch(action.type) {
    case 'TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }  
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      } 
    case 'START_DATE':
      return {
        ...state,
        startDate: action.time
      }  
      case 'END_DATE':
      return {
        ...state,
        endDate: action.time
      }             
    default:
      return state
  }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense)=> {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b)=>{
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if(sortBy === 'amount') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
  })
}

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(()=>{
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000}))
// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 5 }))
// store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter(''))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))


const demoState = {
  expenses: [{
    id: 'rent',
    desc: 'January',
    note: 'Final payment',
    amount: 595,
    createdAt: 0
  }],
  fitlers: {
    text: 'rent',
    sortBy: 'amount',
    startData: undefined,
    endDate: undefined
  }
}

// case 'REMOVE_EXPENSE':
// return state.filter((ids)=>{
//   console.log(ids.id)
//   return ids.id !== action.id
// })
// default:
// return state
// }
// steps in action reducer
//store.dispatch(addExpense({}))
// 1.store.dispatch(addExpense({}))
// 2.addExpenses = ({default}={})=>({ value })
// 3.add case in reducer

