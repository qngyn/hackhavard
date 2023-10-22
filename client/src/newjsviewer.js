// src/components/PlyLoader.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlyLoader = () => {
  const [plyFile, setPlyFile] = useState(null);

  useEffect(() => {
    // Make an API request to fetch the .ply file
    axios.get('https://10.20.20.28/api/ply_generator')
      .then((response) => {
        setPlyFile(response.data); // Assuming the API response is the .ply file
      })
      .catch((error) => {
        console.error('Error fetching .ply file:', error);
      });
  }, []);

  return (
    <div>
      {plyFile ? (
        <Threejs.viewer/>
      ) : (
        <p>Loading .ply file...</p>
      )}
    </div>
  );
};

export default PlyLoader;
