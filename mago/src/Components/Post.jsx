import React, { useState } from 'react';
import axios from 'axios';
import data from '../Products.json'; 


export const Postdata = () => {
  const [postData, setPostData] = useState(data);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3002/', postData);
      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  );
};

