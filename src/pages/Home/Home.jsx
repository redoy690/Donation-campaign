import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import './Home.css'

const Home = () => {

    const data =useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <Cards data={data}></Cards>
        </div>

    );
};

export default Home;