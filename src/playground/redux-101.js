import { createStore } from 'redux'

// const incrementCount = (payload = {}) => {
//   return {
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   }
// }
const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  }
}

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount =({count} = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// REDUCER
// Pure Function- output is purely determined by the input
  // does not interact outside the function
// Never change state or action

const countReducer = (state = { count: 0}, action)=>{
  switch(action.type) {
    case 'INCREMENT':
      const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + increment
      }
    case 'DECREMENT':
      const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1 
      return {
        count: state.count - decrement
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state
  }
} 

const store = createStore(countReducer)
  // if(action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1
  //   }
  // } else {
  //   return state
  // }
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})



// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))


// store.dispatch({
//   type: 'RESET'
// })
store.dispatch(resetCount())

// store.dispatch({
//   type: 'DECREMENT'
// })
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 7 }))

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// })


// store.dispatch({
//   type: 'SET',
//   count: 101
// })
store.dispatch(setCount())
store.dispatch(setCount({count: 101}))

// createStore((currentstate, action))
// Actions-object that gets sent to the store(way to communicate with store)
  // increment, decrement
  // store.subscribe e it will run code every time it detects changes.
      // It will return an unsubscribe
// when destructurimg, use {} eg sa incrementBy