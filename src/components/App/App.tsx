import React from 'react';
import Quote from '../Quote';

function App() {
  return (
    <div className="h-100">
      <Quote
        className="w-50 mx-auto mb-1"
        author="frank herbert"
        quoteContent="there is no escape, we pay for the violence of our ancestors"
      />
      <Quote
        className="w-50 mx-auto mb-1"
        author="hasan piker"
        quoteContent="God. I love theft. I love stealing. It's my favorite thing to do"
      />
    </div>
  );
}

export default App;
