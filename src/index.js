import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';

import {BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from './contexts/DataContext';
import { FilterProvider } from './contexts/FilterContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

makeServer()

root.render(
  <StrictMode>
    <Router>
      <DataProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
      </DataProvider>
    </Router>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
