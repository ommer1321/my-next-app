'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// === 3D Model bileşeni ===
function TripoModelInner({
  rotationDirection,
}: {
  rotationDirection: { x: number; y: number };
}) {
  const { scene } = useGLTF('/chest-press.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationDirection.y * 0.02;
      modelRef.current.rotation.x += rotationDirection.x * 0.02;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

// === Ekran boyutuna göre mobil kontrolü ===
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}

// === Ana bileşen ===
export default function TripoModel() {
  const controlsRef = useRef<any>(null);
  const [rotationDirection, setRotationDirection] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const startRotation = (axis: 'x' | 'y', dir: number) => {
    setRotationDirection((prev) => ({ ...prev, [axis]: dir }));
  };

  const stopRotation = (axis: 'x' | 'y') => {
    setRotationDirection((prev) => ({ ...prev, [axis]: 0 }));
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          maxHeight: '100vh',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#1e1e1e',
          color: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}
      >
        {/* === 3D Model Sahnesi === */}
        <div style={{ width: '100%', height: '500px' }}>
          <Canvas
            camera={{ position: [1, 1.2, 1.5], fov: 45 }}
            onCreated={({ gl }) => {
              const canvas = gl.domElement;
              canvas.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                alert('WebGL bağlantısı kesildi. Sayfa yenileniyor...');
                window.location.reload();
              });
            }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow />
            <Suspense fallback={null}>
              <Environment preset="city" background={false} />
              <TripoModelInner rotationDirection={rotationDirection} />
            </Suspense>
            <OrbitControls ref={controlsRef} enablePan enableZoom />
          </Canvas>
        </div>
      </div>

      {/* === Mobilde gösterilecek yönlendirme butonları === */}
      {isMobile && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '12px',
          }}
        >
          <div />
          <DirectionButton
            label="↑"
            onHoldStart={() => startRotation('x', -1)}
            onHoldEnd={() => stopRotation('x')}
          />
          <div />

          <DirectionButton
            label="←"
            onHoldStart={() => startRotation('y', -1)}
            onHoldEnd={() => stopRotation('y')}
          />
          <div />
          <DirectionButton
            label="→"
            onHoldStart={() => startRotation('y', 1)}
            onHoldEnd={() => stopRotation('y')}
          />
        </div>
      )}
    </>
  );
}

// === Modern buton bileşeni ===
function DirectionButton({
  label,
  onHoldStart,
  onHoldEnd,
}: {
  label: string;
  onHoldStart: () => void;
  onHoldEnd: () => void;
}) {
  return (
    <button
      onMouseDown={onHoldStart}
      onMouseUp={onHoldEnd}
      onMouseLeave={onHoldEnd}
      onTouchStart={onHoldStart}
      onTouchEnd={onHoldEnd}
      style={{
        width: '100%',
        backgroundColor: '#222',
        color: '#fff',
        border: '2px solid #444',
        borderRadius: '10px',
        fontSize: '22px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {label}
    </button>
  );
}
