'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroSceneCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07070a, 0.035);

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    container.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < 768? 600 : 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const c1 = new THREE.Color('#8b5cf6');
    const c2 = new THREE.Color('#06b6d4');
    const c3 = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      // Distribute in sphere + disc
      const radius = 18 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i*3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i*3+1] = (Math.random() - 0.5) * 25;
      positions[i*3+2] = radius * Math.sin(phi) * Math.sin(theta) * 0.8;

      const r = Math.random();
      const col = r > 0.7? c1 : r > 0.35? c2 : c3;
      colors[i*3] = col.r; colors[i*3+1] = col.g; colors[i*3+2] = col.b;
      sizes[i] = Math.random() * 1.2 + 0.2;
      speeds[i] = Math.random() * 0.5 + 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse + Scroll
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let scroll = 0, tScroll = 0;
    const onMove = (e: MouseEvent) => { tmx = (e.clientX / window.innerWidth - 0.5) * 2; tmy = (e.clientY / window.innerHeight - 0.5) * 2; };
    const onScroll = () => tScroll = window.scrollY;

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize, { passive: true });

    let visible = true;
    const observer = new IntersectionObserver(([e]) => visible = e.isIntersecting, { threshold: 0.01 });
    observer.observe(container);

    let id = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      id = requestAnimationFrame(animate);
      if (!visible) return;
      const t = clock.getElapsedTime();

      scroll += (tScroll - scroll) * 0.05;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      points.rotation.y = t * 0.04 + mx * 0.15 + scroll * 0.0002;
      points.rotation.x = t * 0.015 + my * 0.1;
      points.position.y = scroll * 0.015;

      // Breathing opacity
      material.opacity = 0.5 + Math.sin(t * 0.5) * 0.15;

      // Slight particle drift
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for(let i=0; i<particleCount; i++){
        pos.array[i*3+1] += Math.sin(t * speeds[i] + i) * 0.002;
      }
      pos.needsUpdate = true;

      camera.position.x = mx * 2;
      camera.position.y = -my * 2;
      camera.position.z = 22 - Math.min(scroll * 0.02, 8);
      camera.lookAt(0,0,0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}