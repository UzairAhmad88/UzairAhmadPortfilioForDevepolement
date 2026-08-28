'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6da8b7, 3, 50);
    pointLight1.position.set(10, 15, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x1b3240, 4, 50);
    pointLight2.position.set(-15, -10, 5);
    scene.add(pointLight2);

    // 3. Floating 3D Motion Graphic Objects Group
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // Object A: Floating Wireframe Torus Knot
    const torusKnotGeo = new THREE.TorusKnotGeometry(4.5, 1.2, 100, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x1b3240,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(-14, 8, -5);
    objectsGroup.add(torusKnot);

    // Object B: Floating 3D Geodesic Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x6da8b7,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(15, -6, -8);
    objectsGroup.add(icoMesh);

    // Object C: Floating 3D Octahedron
    const octaGeo = new THREE.OctahedronGeometry(3.5, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0x1b3240,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(10, 14, -10);
    objectsGroup.add(octaMesh);

    // Object D: Floating 3D Dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(4, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: 0x9dc0ce,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodecaMesh.position.set(-12, -12, -6);
    objectsGroup.add(dodecaMesh);

    // 4. Floating 3D Particles Constellation Field
    const particleCount = 350;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 70;
      particlePositions[i + 1] = (Math.random() - 0.5) * 70;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
      particleScales[i / 3] = Math.random() * 0.15 + 0.05;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1b3240,
      size: 0.15,
      transparent: true,
      opacity: 0.35,
    });
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleSystem);

    // 5. Scroll & Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Rotate individual 3D objects
      torusKnot.rotation.x += 0.003;
      torusKnot.rotation.y += 0.005;

      icoMesh.rotation.x -= 0.004;
      icoMesh.rotation.y += 0.006;

      octaMesh.rotation.z += 0.005;
      octaMesh.rotation.x += 0.003;

      dodecaMesh.rotation.y += 0.004;
      dodecaMesh.rotation.z -= 0.003;

      // Group rotation based on mouse and scroll
      objectsGroup.rotation.y = targetX * 0.25 + scrollY * 0.0003;
      objectsGroup.rotation.x = -targetY * 0.25 + scrollY * 0.0002;

      particleSystem.rotation.y = targetX * 0.15 + scrollY * 0.0002;
      particleSystem.rotation.x = -targetY * 0.15;

      // Float Y wave motion
      const time = Date.now() * 0.001;
      torusKnot.position.y = 8 + Math.sin(time * 0.8) * 1.5;
      icoMesh.position.y = -6 + Math.cos(time * 0.7) * 1.5;
      octaMesh.position.y = 14 + Math.sin(time * 0.9) * 1.2;
      dodecaMesh.position.y = -12 + Math.cos(time * 0.6) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
