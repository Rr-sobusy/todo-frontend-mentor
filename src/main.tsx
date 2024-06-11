import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'simplebar-react/dist/simplebar.min.css';
import './index.css'

// Providers
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { TodosProvider } from './providers/TodoProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
      <TodosProvider>
        <App />
      </TodosProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
