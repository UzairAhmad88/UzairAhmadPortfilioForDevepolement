'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SplineViewer } from './SplineViewer';

export function KnowledgeCore3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;
  const [hoverInfo, setHoverInfo] = useState<string | null>(null);

  useEffect(() => {
    if (splineUrl) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Core 3D Geometry: Floating Powder Blue & Deep Navy Geodesic Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer wireframe sphere (Deep Navy)
    const outerGeo = new THREE.IcosahedronGeometry(4, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x1b3240,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner glowing core (Powder Blue)
    const innerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6da8b7,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbiting 3D Ring 1
    const ring1Geo = new THREE.RingGeometry(5.2, 5.26, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x1b3240,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    coreGroup.add(ring1Mesh);

    // Orbiting 3D Ring 2
    const ring2Geo = new THREE.RingGeometry(3.6, 3.66, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x6da8b7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    coreGroup.add(ring2Mesh);

    // Core point lights
    const pointLight = new THREE.PointLight(0x6da8b7, 3, 20);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // 3. Orbiting Particle Constellation
    const particleCount = 220;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1b3240,
      size: 0.14,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    coreGroup.add(particleSystem);

    // 4. Orbiting Data Node Anchors
    const nodes: THREE.Mesh[] = [];
    const nodeLabels = [
      'Software Architecture',
      'AI / Machine Learning',
      'Deep Learning (CNN/RNN)',
      'Quantitative Finance',
      'Stochastic Processes',
      'System Engineering',
    ];

    const nodeGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x1b3240 });

    nodeLabels.forEach((label, idx) => {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (idx / nodeLabels.length) * Math.PI * 2;
      nodeMesh.position.set(Math.cos(angle) * 5.5, Math.sin(angle) * 5.5, (Math.random() - 0.5) * 3);
      nodeMesh.userData = { label };
      coreGroup.add(nodeMesh);
      nodes.push(nodeMesh);
    });

    // 5. Interactive Mouse Control
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Raycaster for node hovers
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleRaycast = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseVector.y = -((event.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodes);

      if (intersects.length > 0) {
        setHoverInfo(intersects[0].object.userData.label);
      } else {
        setHoverInfo(null);
      }
    };

    container.addEventListener('mousemove', handleRaycast);

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreGroup.rotation.y += 0.005;
      coreGroup.rotation.x += 0.002;
      innerMesh.rotation.y -= 0.008;

      ring1Mesh.rotation.z += 0.006;
      ring2Mesh.rotation.z -= 0.008;

      coreGroup.rotation.y = targetX * 0.5;
      coreGroup.rotation.x = -targetY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousemove', handleRaycast);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [splineUrl]);

  if (splineUrl) {
    return <SplineViewer sceneUrl={splineUrl} />;
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'crosshair',
      }}
    >
      {hoverInfo && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ffffff',
            border: '1px solid var(--text-hero)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 16px',
            fontSize: '0.85rem',
            color: 'var(--text-hero)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            boxShadow: '0 4px 20px rgba(27, 50, 64, 0.2)',
            pointerEvents: 'none',
          }}
        >
          Node: {hoverInfo}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          fontSize: '0.75rem',
          color: 'var(--text-hero)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          pointerEvents: 'none',
        }}
      >
        [ Interactive Powder Blue 3D Core ]
      </div>
    </div>
  );
}
