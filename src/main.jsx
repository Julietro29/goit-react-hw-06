import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store, { persistor } from "./redux/store"; // Import both store and persistor

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
