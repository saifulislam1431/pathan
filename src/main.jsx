import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import route from './Router/router.jsx';
import Auth from './Auth/Auth';




const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>

    <Auth>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}>
      </RouterProvider>
    </QueryClientProvider>
    </Auth>

  </React.StrictMode>
</div>
)
