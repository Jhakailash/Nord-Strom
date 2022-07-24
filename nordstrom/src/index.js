import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider , extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";

const colors = {
  brand: {
    900: 'red',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
     <BrowserRouter>
        <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


