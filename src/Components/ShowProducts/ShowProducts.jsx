import React, { useContext, useEffect, useState } from 'react';
import Cateegorybtn from '../Categorybtn/Cateegorybtn';
import Product from '../Product/Product';


const ShowProducts = () => {

    const [gotdata, setGotData] = useState([]);
    const [gotCategory, setGotCategory] = useState([])

    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setGotData(data))
    }, []);

    useEffect(() => {
        fetch('../../../public/category.json')
            .then(res => res.json())
            .then(data => setGotCategory(data))
    }, []);

    const handleCategoryBtn = (c) => {
        const selected = gotdata.filter(data => data.category === c)
        setGotData(selected);
        // console.log(selected);
    }

    return (
        <div>
            <div className='mt-16'>
                <h1 className='text-center text-4xl font-semibold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='grid md:grid-cols-[1fr,6fr] my-12 mx-4 md:mx-32 gap-10'>
                <div className='bg-slate-100 max-h-[320px] grid grid-cols-1 gap-2 items-center p-4 rounded-xl border-white justify-start'>
                    <button className='py-1 px-6 border rounded-full bg-white'>All Products</button>
                    {
                        gotCategory.map(data => <Cateegorybtn handleCategoryBtn={handleCategoryBtn} key={data.id} gotdata={data}></Cateegorybtn>)
                    }
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        gotdata.map(data => <Product key={data.id} data={data}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;