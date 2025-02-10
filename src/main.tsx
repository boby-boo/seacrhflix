import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './style/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement); // Type assertion for root element

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
