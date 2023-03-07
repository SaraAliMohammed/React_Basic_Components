import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseContextProvider } from './components/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UseContextProvider>
        <App />
    </UseContextProvider>
);

/*<React.StrictMode>
    <App />
  </React.StrictMode>*/

