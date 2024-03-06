
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material';
import baseTheme from './themes/baseTheme.ts';
import  { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </ThemeProvider>
    </BrowserRouter>
)
