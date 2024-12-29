import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App  from './pages/App'

// components
import Home from './components/Home'
import Contact from './components/Contact'
// css file
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Porjects'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : "contact",
                element : <Contact/>
            },
            {
                path : "projects",
                element : <Projects />
            }
        ]
    }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)