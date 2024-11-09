import React, { useState } from 'react';

const Cateegorybtn = ({ gotdata,handleCategoryBtn }) => {

    const { category } = gotdata

    return (

        <button onClick={()=>handleCategoryBtn(category)} className='py-1 px-6 border rounded-full bg-white'>{category}</button>

    );
};

export default Cateegorybtn;