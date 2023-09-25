import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className=''>
                <div className='text-center align-center slide mx-24 '>
                </div>
                <div className='absolute top-[40%] left-[25%]'>
                    <h1 className='text-[#0B0B0B] font-bold text-5xl header'>I Grow By Helping People In Need</h1>
                    <div className="join mt-10 ml-28 ">
                        <input className="input input-bordered join-item w-[400px] " placeholder="Search here ...." />
                        <button className="btn join-item rounded-r-lg bg-[#FF444A] text-white px-8">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;