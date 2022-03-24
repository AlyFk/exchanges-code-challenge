import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

interface ReactRouterProviderProps {
  children?: React.ReactNode;
}
const ReactRouterProvider: React.FC<ReactRouterProviderProps> = ({
  children,
}) => {
  return <Router>{children}</Router>;
};

export default ReactRouterProvider;
