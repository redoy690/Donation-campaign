
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CardDetails from '../pages/CardDetails/CardDetails';
import Donation from '../pages/Donation/Donation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            },{
                path: '/cards/:id',
                element:<CardDetails></CardDetails>,
                loader: ()=> fetch('/data.json')
                
            }
        ]
    }
])

export default myCreatedRoute;