import PropTypes from 'prop-types';
import { useState } from 'react';

import Card from '../Card/Card';
import './Cards.css'

const Cards = ({ data }) => {
    const [search, setSearch]= useState('')
    const handleToSearch = e =>{
        e.preventDefault();
        const input = (e.target.search.value)
        setSearch(input)
        
    }
    
    return (

        <div>
           <div>
                <div className=''>
                    <div className='text-center align-center slide mx-2 md:mx-4 lg:mx-12'>
                    </div>
                    <div className='banner-header'>
                        <h1 className='text-[#0B0B0B] font-bold text-4xl banner-text header'>I Grow By Helping People In Need</h1>
                        <form onSubmit={handleToSearch} className="join mt-10  search-unit">
                            <input name="search" className="input input-bordered join-item " placeholder="Search here ...." />
                            <button type="submit" className="btn join-item rounded-r-lg bg-[#FF444A] text-white px-8">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='mx-2 md:mx-4 lg:mx-12 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4'>
                {
                    data.filter((card)=>{return search.toLowerCase() ===''? card: card.Category.toLowerCase().includes(search);}).map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>


    );
};

Cards.propTypes = {
    data: PropTypes.array.isRequired,
    
}


export default Cards;