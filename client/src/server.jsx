import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App.jsx';

const serverApp = () => renderToString(<App />);
export default serverApp;
