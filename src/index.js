import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BubbleGenerator from './BubbleGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BubbleGenerator />
  </React.StrictMode>
);
