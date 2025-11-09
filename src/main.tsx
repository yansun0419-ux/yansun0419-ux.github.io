import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * Application Entry Point
 * 
 * This file initializes the React application and renders it to the DOM.
 * It uses React 18's createRoot API for better performance.
 */

// Get the root element from HTML
const rootElement = document.getElementById('root')!

// Create React root and render the App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)