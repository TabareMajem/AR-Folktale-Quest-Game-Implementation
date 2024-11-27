import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';
import { Environment, OrbitControls } from '@react-three/drei';

const ARScene: React.FC = () => {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Environment preset="forest" />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* 3D models and animations will be added here */}
        </XR>
      </Canvas>
    </>
  );
};

export default ARScene;