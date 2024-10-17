/* eslint-disable react/react-in-jsx-scope */

import ContextProvider from './Context/Context.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// const rootElement = document.getElementById('root');

createRoot(document.getElementById('root')).render(
   
  <ContextProvider>
    <App />
  </ContextProvider>,
);

