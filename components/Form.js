"use client"
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Form = ({ onDataFetch }) => {
    const [inputType, setInputType] = useState('number');
    const [inputData, setInputData] = useState('');
    const [method, setMethod] = useState('pincode');
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        
        const selectedValue = e.target.value;
        setMethod(selectedValue)
        if (selectedValue === 'pincode') {
            setInputType('number');
        } else if (selectedValue === 'postoffice') {
            setInputType('text');
        }
    };
    const handleSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        try {
          const response = await axios.get(`https://api.postalpincode.in/${method}/${inputData}`); // Replace 'API_URL' with your actual API endpoint
          onDataFetch(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
    
    return (
        <form  onSubmit={handleSubmit} className="input-area">
            <div className="inputbox">
                <input  value={inputData}
          onChange={(e) => setInputData(e.target.value)} className='input' type={inputType} required />
                <select onChange={handleInput}>
                    <option value="pincode">Pincode</option>
                    <option value="postoffice">PostOffice</option>
                </select>
            </div>
            <button type='submit'>
            {loading ? ( // Show loader if loading state is true
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20} />
                    </Box>
                ) : (
                    <>
                        <SearchIcon />
                    </>
                )}
                Search
            </button>
           
        </form>
    );
};

export default Form;
