import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/index.jsx'
import Auth from '../pages/Auth/index.jsx'
import Product from '../pages/Product/index.jsx'

export const router = createBrowserRouter([
    {
        path : "/",
        Component: Home,
    },
    {
        path : "/auth",
        Component: Auth,
    },
    {
        path: "/:id",
        Component: Product,
    }
])