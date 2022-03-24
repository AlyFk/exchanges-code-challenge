import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import 'styles/global.scss';

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
