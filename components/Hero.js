"use client"

import React, { useState } from 'react';
import Form from './Form';
import Lists from "@/components/Lists";

const Hero = () => {

  const [tableData, setTableData] = useState([]);

  const handleDataFetch = (data) => {
    setTableData(data);
  };

  return (
    <>
   <div className="hero">
    <div className="content">
        <h1 className='title'>Explore Indian Postal Codes</h1>
        <p className='dis'>At ZipIndia, we're dedicated to simplifying your postal code searches across the diverse landscape of India. Whether you're sending a letter, parcel, or simply need to locate an address, our comprehensive database has got you covered.</p>
    </div>
   <Form onDataFetch={handleDataFetch}/>
   </div>
   <Lists data={tableData}/>
    </>
  )
}

export default Hero
