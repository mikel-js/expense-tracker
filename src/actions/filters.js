// set text filter
export const setTextFilter=(text= '') => ({
  type: 'TEXT_FILTER',
  text
})
// sort date
export const sortByDate =()=>({
  type: 'SORT_DATE',
})
// sort amount
export const sortByAmount =()=>({
  type: 'SORT_AMOUNT'
})
// set start
export const setStartDate =(time)=>({
  type: 'START_DATE',
  time: time
})
// set end
export const setEndDate =(time)=>({
  type: 'END_DATE',
  time: time
})
