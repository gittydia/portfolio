import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf6f0e6, 6, 22);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'absolute inset-0 h-full w-full';
    container.appendChild(renderer.domElement);

    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);

    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 18;
      positions[offset + 1] = (Math.random() - 0.5) * 12;
      positions[offset + 2] = (Math.random() - 0.5) * 8;
      phases[index] = Math.random() * Math.PI * 2;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc96843,
      size: 0.055,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const ribbonGeometry = new THREE.IcosahedronGeometry(1.9, 1);
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: 0x171411,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.position.set(0.45, -0.1, 0.3);
    scene.add(ribbon);

    const glowGeometry = new THREE.SphereGeometry(2.5, 24, 24);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xc96843,
      transparent: true,
      opacity: 0.045,
      wireframe: false,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(-2.4, 1.2, -2);
    scene.add(glow);

    const clock = new THREE.Clock();
    let frame = 0;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const safeWidth = Math.max(width, 1);
      const safeHeight = Math.max(height, 1);

      renderer.setSize(safeWidth, safeHeight, false);
      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const positionAttribute = particleGeometry.getAttribute('position') as THREE.BufferAttribute;

      for (let index = 0; index < particleCount; index += 1) {
        const offset = index * 3;
        const phase = phases[index];
        positionAttribute.array[offset + 1] = positions[offset + 1] + Math.sin(elapsed * 0.8 + phase) * 0.25;
        positionAttribute.array[offset] = positions[offset] + Math.cos(elapsed * 0.35 + phase) * 0.12;
      }

      positionAttribute.needsUpdate = true;
      particles.rotation.y = elapsed * 0.05;
      particles.rotation.x = Math.sin(elapsed * 0.18) * 0.08;
      ribbon.rotation.y = elapsed * 0.18;
      ribbon.rotation.x = elapsed * 0.08;
      glow.rotation.z = elapsed * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ribbonGeometry.dispose();
      ribbonMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />;
}