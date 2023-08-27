import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import route from './Router/router.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
