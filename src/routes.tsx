import ExchangeList from 'pages/ExchangeList';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ExchangeList />,
  },
];

export default routes;
