import React from 'react';
import ReactDOM from 'react-dom/client';
import ColorProvider from './components/ColorProvider';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorProvider> 
      <App />
    </ColorProvider>
  </React.StrictMode>
);