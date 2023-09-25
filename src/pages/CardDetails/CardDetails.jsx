import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './CardDetails.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    const AllData = useLoaderData()
    useEffect(() => {
        const dataFind = AllData?.find(data => data.id === id)
        setData(dataFind)
    }, [id, AllData])


    const { Price, Title, Picture_big, Description,text_color } = data

    const handleAddToDonate = () => {
        const addedFavoritesArray = []
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        if(!favoriteItems){
            addedFavoritesArray.push(data)
            localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
            toast("You Donate Successfully added")
        }else{
            
            addedFavoritesArray.push(...favoriteItems,data)
            localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
            toast("You Donate Successfully added")
        }
        
    }
    
    return (
        <div className='mx-24'>
            <h2 className='w-full'>
                <img className='w-full' src={Picture_big} alt="" />
            </h2>
            <div className='pic-btn'>
                <button onClick={handleAddToDonate} className='text-white px-4 py-2 rounded-sm mt-5 ml-8' style={{backgroundColor:text_color}}>Donate ${Price}</button>
                <ToastContainer />
            </div>
            <div>
                <h2 className='text-3xl font-bold'>{Title}</h2>
                <p className='mt-4 mb-10'>{Description}</p>

            </div>
        </div>
    );
};

export default CardDetails;