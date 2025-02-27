import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './redux/store';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  </React.StrictMode>
);