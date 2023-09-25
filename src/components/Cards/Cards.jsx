
import Card from '../Card/Card';

const Cards = ({data}) => {
    return (
        <div className='mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4'>
            {
                data?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;