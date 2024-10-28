import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

// css file
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)