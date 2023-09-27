
import { useEffect } from 'react';
import { useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [favorites, setFavorites] = useState([])
    const [noFound, setNofound] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        if (favoriteItems) {
            setFavorites(favoriteItems)
        } else {
            setNofound(" No Data Found")
        }
    }, [])

    

    return (
        <div className='mx-2 md:mx-2 lg:mx-12 mb-10'>
            <div>
            {noFound ? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> :
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            isShow ? favorites.map(data => <DonationCard key={data.id} data={data}></DonationCard>) :
                                favorites.slice(0, 4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                        }
                    </div>
                    {
                        favorites.length >= 4 && !isShow ? <button onClick={() => setIsShow(!isShow)} className='px-8 bg-[#009444] py-2 text-white rounded-md mx-auto block mt-8'>See All</button> : ''
                    }

                </div>
            }
            </div>
        </div>
    );
};

export default Donation;