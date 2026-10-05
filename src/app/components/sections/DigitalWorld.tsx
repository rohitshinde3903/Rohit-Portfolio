'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';

gsap.registerPlugin(ScrollTrigger);

export default function DigitalWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvasContainer = canvasRef.current;
    if (!canvasContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Scene, Camera, WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      canvasContainer.clientWidth / canvasContainer.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 30);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    canvasContainer.appendChild(renderer.domElement);

    // 2. Futuristic Digital Grid & Neural Mesh
    const gridHelper = new THREE.GridHelper(80, 40, '#25C98A', '#0B3D2E');
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // 3. Glowing Emerald Particle Field (Neural Nodes)
    const particleCount = window.innerWidth < 768 ? 600 : 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorEmerald = new THREE.Color('#25C98A');
    const colorDeep = new THREE.Color('#0B3D2E');
    const colorWhite = new THREE.Color('#FAF9F5');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 30 - 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const rand = Math.random();
      const col = rand > 0.5 ? colorEmerald : rand > 0.2 ? colorDeep : colorWhite;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 4. Abstract Data Monoliths (Architectural Cuboids)
    const monoliths: THREE.Mesh[] = [];
    const boxGeo = new THREE.BoxGeometry(2, 8, 2);
    const boxMat = new THREE.MeshBasicMaterial({
      color: '#0B3D2E',
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      mesh.position.x = (Math.random() - 0.5) * 60;
      mesh.position.y = Math.random() * 4 - 2;
      mesh.position.z = (Math.random() - 0.5) * 50;
      scene.add(mesh);
      monoliths.push(mesh);
    }

    // 5. ScrollTrigger Camera Fly-through
    let scrollProgress = 0;
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        scrollProgress = self.progress;
      },
    });

    // Resize Handler
    const onResize = () => {
      if (!canvasContainer) return;
      camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Camera forward flight driven deterministically by scroll
      camera.position.z = 30 - scrollProgress * 35;
      camera.position.y = 5 + Math.sin(scrollProgress * Math.PI) * 4;
      camera.position.x = Math.sin(elapsed * 0.2) * 2;
      camera.lookAt(0, 0, -10);

      // Rotating particles & grid
      particles.rotation.y = elapsed * 0.03;
      monoliths.forEach((m, idx) => {
        m.rotation.y = elapsed * 0.1 + idx;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      st.kill();
      geometry.dispose();
      particleMaterial.dispose();
      boxGeo.dispose();
      boxMat.dispose();
      renderer.dispose();
      if (canvasContainer && renderer.domElement) {
        canvasContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="digital-world"
      data-theme="dark"
      className="relative min-h-[90vh] lg:min-h-screen py-32 px-6 sm:px-12 bg-[#07110D] text-[#FAF9F5] flex flex-col justify-center items-center overflow-hidden border-t border-[#25C98A]/20"
    >
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Narrative Overlay */}
      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none select-none my-auto"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#25C98A] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#25C98A] animate-pulse" />
          <span>07 / IMMERSIVE SPATIAL MATRIX</span>
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-9xl tracking-tight leading-none text-white uppercase font-normal mb-6">
          IDEAS BECOMING <br />
          <span className="italic text-[#25C98A] font-serif">
            SYSTEMS.
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed mb-8">
          A continuous landscape where neural weights, vector embeddings, and distributed computing harmonize into autonomous products.
        </p>

        <div className="flex justify-center">
          <HandwrittenNote rotate={-3} className="text-[#25C98A] text-lg">
            the architecture behind the screen
          </HandwrittenNote>
        </div>
      </div>

      {/* Bottom Coordinates */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex justify-between items-center font-mono text-[11px] text-white/40 border-t border-white/10 pt-4 mt-auto">
        <span>THREE.JS // WEBGL &bull; DETERMINISTIC SCROLL</span>
        <span>60 FPS &bull; REAL-TIME SHADER EXECUTION</span>
      </div>
    </section>
  );
}
