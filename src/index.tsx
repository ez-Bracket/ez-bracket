import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './contexts/UserContext';
import { CampProvider } from './contexts/CampContext';
import { ModalProvider } from './contexts/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UserProvider>
          <CampProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </CampProvider>
        </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
