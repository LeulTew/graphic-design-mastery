/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing types in JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      // Allow any HTML/SVG elements
      [elemName: string]: any;
    }
  }
}

const FloatingGeo = ({ position, color, geometry: Geometry, scale = 1, speed = 1 }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x = t * 0.2 * speed;
      ref.current.rotation.y = t * 0.3 * speed;
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Geometry ref={ref} args={[1, 0]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshStandardMaterial 
            color={color} 
            wireframe 
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
        />
      </Geometry>
    </Float>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#FF0099" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFFF" />
        
        {/* Digital Tibeb - Geometric Abstractions */}
        <FloatingGeo geometry={Icosahedron} position={[-3, 1, 0]} color="#FF0099" scale={1.5} speed={0.5} />
        <FloatingGeo geometry={Octahedron} position={[3, -1, -2]} color="#00FFFF" scale={1.2} speed={0.8} />
        <FloatingGeo geometry={Torus} position={[0, 0, -5]} color="#C5A059" scale={4} speed={0.2} />
        
        {/* Background Elements */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Keeping this as a placeholder if needed for other sections, but main scene is HeroScene
export const QuantumComputerScene: React.FC = () => {
  return null;
}