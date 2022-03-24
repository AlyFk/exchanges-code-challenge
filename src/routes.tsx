import ExchangeDetails from 'pages/ExchangeDetails';
import ExchangeList from 'pages/ExchangeList';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ExchangeList />,
  },
  {
    path: '/:id',
    element: <ExchangeDetails />,
  },
];

export default routes;
