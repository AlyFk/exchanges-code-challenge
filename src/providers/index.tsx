import ReactRouterProvider from './router-provider';
import ReactQueryProvider from './react-query-provider';
import React from 'react';

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ReactRouterProvider>
    <ReactQueryProvider>{children}</ReactQueryProvider>
  </ReactRouterProvider>
);

export default AppProvider;
export { ReactQueryProvider, ReactRouterProvider };
