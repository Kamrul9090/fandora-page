import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Main from '../layout/Main'
export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            }
        ]
    }
]) 