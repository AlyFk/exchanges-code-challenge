import React from 'react';
import ReactQueryProvider from './providers/react-query-provider';
import { ExchangeList } from 'pages/ExchangeList/ExchangeList';
function App() {
  return (
    <ReactQueryProvider>
      <div className="App">
        <ExchangeList />
      </div>
    </ReactQueryProvider>
  );
}

export default App;
