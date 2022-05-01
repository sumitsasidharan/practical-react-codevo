import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CreditCards = () => {
   const [number, setNumber] = useState('');
   const [name, setName] = useState('');
   const [expiry, setExpiry] = useState('');
   const [cvc, setCvc] = useState('');
   const [focus, setFocus] = useState('');

   return (
      <div>
         <h1>CreditCards</h1>

         <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
         />

         <form>
            <input
               type="tel"
               name="number"
               value={number}
               placeholder="Card Number"
               onChange={(e) => setNumber(e.target.value)}
               onFocus={e => setFocus(e.target.name)}
            />
            <input
               type="text"
               name="name"
               value={name}
               placeholder="your name"
               onChange={(e) => setName(e.target.value)}
               onFocus={e => setFocus(e.target.name)}
            />
            <input
               type="text"
               name="expiry"
               value={expiry}
               placeholder="MM/YY Expiry"
               onChange={(e) => setFocus(e.target.value)}
               onFocus={e => setFocus(e.target.name)}
            />
            <input
               type="tel"
               name="cvc"
               value={cvc}
               placeholder="CVC"
               onChange={(e) => setCvc(e.target.value)}
               onFocus={e => setFocus(e.target.name)}
            />
         </form>
      </div>
   );
};

export default CreditCards;
