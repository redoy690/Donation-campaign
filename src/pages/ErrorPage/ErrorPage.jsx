import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h2>No Data Found</h2>
                
                <Link to={'/'}><button className='btn bg-red-400'>Home</button></Link>
            </div>


        </div>
    );
};

export default ErrorPage;