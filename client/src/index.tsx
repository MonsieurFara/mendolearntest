import React, { StrictMode } from 'react';
import App from './App';
import "./styles/styles.scss"
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css'

import store from './store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);