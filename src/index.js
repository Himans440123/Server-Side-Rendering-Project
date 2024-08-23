import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './counter';
import Props from './Props';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (window.location.pathname === '/counter') {
  hydrateRoot(container, <Counter />);
} else if (window.location.pathname === '/props') {
  const queryParams = new URLSearchParams(window.location.search);
  const number = parseInt(queryParams.get('number'), 10);

  console.log('Query param number:', queryParams.get('number')); // Log the raw query parameter
  console.log('Parsed number:', number); // Log the parsed number

  hydrateRoot(container, <Props no={isNaN(number) ? 0 : number} />);
} else {
  hydrateRoot(container, <App />);
}

reportWebVitals();
