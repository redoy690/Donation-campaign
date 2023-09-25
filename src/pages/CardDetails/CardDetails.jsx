import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardStorage from './CardStorage';

const CardDetails = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    const AllData = useLoaderData()
    useEffect(() => {
        const dataFind = AllData?.find(data => data.id === id)
        setData(dataFind)
    }, [id, AllData])






    return (
        <div className='mx-24'>
            <CardStorage data={data}></CardStorage>
        </div>
    );
};

export default CardDetails;