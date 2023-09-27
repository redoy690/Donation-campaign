import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, Picture_small, Title, Category, Category_bg, text_color, Text_button_bg } = card
    return (
        <div className='cursor-pointer '>
            <Link to={`/cards/${id}`}>
                <div className="card h-full bg-base-100  " style={{ backgroundColor: Category_bg }}>
                    
                        <img className='rounded-t-xl' src={Picture_small}  alt="Shoes" />
                    
                    <div className="card-body" >
                        <button className='w-[88px] py-1 rounded-md' style={{ backgroundColor: Text_button_bg, color: text_color }} >{Category}</button>
                        <h2 className='text-xl font-bold' style={{ color: text_color }}> {Title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    
}


export default Card;