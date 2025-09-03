import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const HeroAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    // Set renderer size and append to container
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = width; // Keep it square
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    // Create a sphere with wireframe
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    // Add a point light
    const light = new THREE.PointLight(0x3b82f6, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    // Position camera
    camera.position.z = 5;
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the sphere
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = width; // Keep it square
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);
  return <div ref={containerRef} className="w-full max-w-md h-full" style={{
    aspectRatio: '1/1'
  }} />;
};
export default HeroAnimation;