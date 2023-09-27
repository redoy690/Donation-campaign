import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CardDetails.css';

const CardStorage = ({ data }) => {
    const { id, Price, Title, Picture_big, Description, text_color } = data


    const handleAddToDonate = () => {
        const addedFavoritesArray = []
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        if (!favoriteItems) {
            addedFavoritesArray.push(data)
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray))
            toast("Your Donate Successfully added")
        } else {
            const isExists = favoriteItems.find(phone => phone.id === id)
            if (!isExists) {
                addedFavoritesArray.push(...favoriteItems, data)
                localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray))
                toast("Your Donation Successfully added")
            } else {
                toast("Your Donation already added")
            }
        }
    }





    return (
        <div>
            <h2 className='w-full'>
                <img className='w-full ' src={Picture_big} alt="" />
            </h2>
            <div className='pic-btn'>
                <button onClick={handleAddToDonate} className='text-white px-2 md:px-3 lg:px-6 py-1 md:py-2 lg:py-3  rounded-sm mt-4 md:mt-10 lg:mt-10 ml-8 md:ml-14 lg:ml-14' style={{ backgroundColor: text_color }}>Donate ${Price}</button>
                <ToastContainer />
            </div>
            <div>
                <h2 className='text-3xl font-bold'>{Title}</h2>
                <p className='mt-4 mb-10'>{Description}</p>

            </div>
        </div>
    );
};


CardStorage.propTypes = {
    data: PropTypes.object.isRequired,
    
}
export default CardStorage;