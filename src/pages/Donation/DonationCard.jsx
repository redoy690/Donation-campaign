

const DonationCard = ({ data }) => {
    const { Picture_medium, Category, Title, Price, Category_bg, text_color, Text_button_bg } = data
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl " style={{ backgroundColor: Category_bg }}>
                <img src={Picture_medium} alt="Movie" />
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
    );
};

export default DonationCard;