import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'fr', {
  delimiters: {
      thousands: ' ',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ème';
  },
  currency: {
      symbol: '€'
  }
});

// switch between locales
numeral.locale('fr');

const ExpenseListItem =( {description, amount, createdAt, id, dispatch } )=> (
  <div>
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>
      {numeral(amount/ 100).format('$0,0.00')} 
      :
      {moment(createdAt).format('Do MMMM, YYYY')}
    </p>
  </div>
)

export default ExpenseListItem

// const ExpenseListItem =(props)=> (
//   <div>
//     <p>{props.description}</p>
//     <p>{props.amount} - {props.createdAt}</p>
//   </div>
// )