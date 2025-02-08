// App.js
import React from 'react';
import Payment from './Components/Payment/Payment.jsx';

const App = () => {
  const googlePayDynamicLink = 'https://pay.google.com/gp/p/ui/pay';

  return (
    <div>
      <Payment googlePayLink={googlePayDynamicLink} />
    </div>
  );
};

export default App;
