import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import { store } from './redux/Store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer 
          position="top-center"
        autoClose={2200}
        hideProgressBar={false}
        
        />
      </Provider>
    </BrowserRouter>
  </StrictMode>  
);
