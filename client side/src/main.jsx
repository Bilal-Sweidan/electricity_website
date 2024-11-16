import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

// css file
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/login",
        element: <Login/>
    }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)