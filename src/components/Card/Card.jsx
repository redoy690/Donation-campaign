import React from 'react';

const Card = ({card}) => {
    const {Picture_small, Title, Category, Category_bg, text_color, Text_button_bg} = card
    return (
        <div className='cursor-pointer'>
            <div className="card  bg-base-100  " style={{backgroundColor:Category_bg}}>
                <img src={Picture_small} alt="Shoes" />
                <div className="card-body" >
                    <button className='w-[88px] py-1 rounded-md' style={{backgroundColor:Text_button_bg ,color:text_color}} >{Category}</button>
                    <h2  className='text-xl font-bold' style={{color:text_color}}> {Title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;