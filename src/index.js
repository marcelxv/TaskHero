import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
        <App />
);

reportWebVitals();
