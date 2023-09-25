import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Donation from '../pages/Donation/Donation';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;