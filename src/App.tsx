import React from 'react';
import ReactQueryProvider from './providers/react-query-provider';
function App() {
  return (
    <ReactQueryProvider>
      <div className="App"></div>
    </ReactQueryProvider>
  );
}

export default App;
