// src/components/ThreeJSViewer.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import axios from 'axios';

const ThreeJSViewer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    const container = containerRef.current;

    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Make an API request to fetch the .ply file
    axios.get('https://10.20.20.28/api/ply_generator')
      .then((response) => {
        // Assuming the API response is the .ply file
        const geometry = new THREE.BufferGeometry().fromGeometry(response.data);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animate/render loop
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };

        animate();
      })
      .catch((error) => {
        console.error('Error fetching .ply file:', error);
      });

    return () => {
      // Clean up Three.js resources (if needed)
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeJSViewer;
