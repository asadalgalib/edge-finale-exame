import React from 'react';
import Banner from '../Banner/Banner';
import ShowProducts from '../ShowProducts/ShowProducts';
import Navbar from '../Navbar/Navbar';

const Bannerlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ShowProducts></ShowProducts>
        </div>
    );
};

export default Bannerlayout;