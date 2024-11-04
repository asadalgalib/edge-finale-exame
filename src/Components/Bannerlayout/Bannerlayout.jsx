import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import ShowProducts from '../ShowProducts/ShowProducts';

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