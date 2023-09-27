
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import './Home.css'

const Home = () => {

    const data =useLoaderData()
    

    return (
        <div>
            <Cards data={data}></Cards>
        </div>

    );
};

export default Home;