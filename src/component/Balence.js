import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext';
//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        'PKR ' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

const Balence = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0);
  
    return (
      <>
        <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
      </>
    )
    
}

export default Balence
