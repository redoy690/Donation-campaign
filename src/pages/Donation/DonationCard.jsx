import PropTypes from 'prop-types';
import './Donation.css'


const DonationCard = ({ data }) => {
    const {Picture_big, Picture_medium, Category, Title, Price, Category_bg, text_color, Text_button_bg } = data
    return (
        <div>
            <div className="big-device">
                <div className="card card-side bg-base-100 shadow-xl " style={{ backgroundColor: Category_bg }}>
                    <img className='rounded-l-xl' src={Picture_medium}  alt="Movie" />
                    <div className=" ml-6 mt-6" >
                        <div className="card-actions justify-start">
                            <button className='w-[88px] text-sm h-[25px] rounded-md' style={{ backgroundColor: Text_button_bg, color: text_color }} >{Category}</button>
                        </div>
                        <h2 className="card-title mt-1">{Title}</h2>
                        <h4 className='font-bold mt-1' style={{ color: text_color }}>${Price}.00</h4>
                        <button className=' text-white rounded-md px-6 py-2 mt-3' style={{ backgroundColor: text_color }} >View Details</button>
                    </div>
                </div>
            </div>
            <div className="small-device">
                <div className="card bg-base-100 shadow-xl rounded-lg border " style={{ backgroundColor: Category_bg }}>
                    <img className='rounded-t-xl' src={Picture_big}  alt="Movie" />
                    <div className="card-body">
                    <button className='w-[88px] text-sm h-[25px] rounded-md' style={{ backgroundColor: Text_button_bg, color: text_color }} >{Category}</button>
                        <h2 className="card-title mt-1">{Title}</h2>
                        <h4 className='font-bold mt-1' style={{ color: text_color }}>${Price}.00</h4>
                        <div className="card-actions justify-start">
                            <button className=' text-white rounded-md px-6 py-2 mt-3' style={{ backgroundColor: text_color }} >View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    data: PropTypes.object.isRequired,
    
}


export default DonationCard;