'use client';

import {
  Center,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  SpotLight,
  Text3D,
  useDepthBuffer,
} from '@react-three/drei';
import { Color, Vector3, Mesh } from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

export const NewHero = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100] }}>
      <color attach="background" args={['#00B39D']} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Environment resolution={64}>
        <Lightformer
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
          color={'#11DF00'}
        />
        <Lightformer
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[20, 0.1, 1]}
          color={'#11DF00'}
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[20, 0.5, 1]}
          color={'#11DF00'}
        />
        <Lightformer
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 1, 1]}
          color={'#11DF00'}
        />
      </Environment>
    </Canvas>
  );
};

const Hero = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
      <Center position={[0, 0, 0]}>
        <Text3D
          position={[0, 0, 0]}
          size={w / 10}
          font={'/Inter.json'}
          curveSegments={24}
          bevelEnabled
          bevelSize={1}
          bevelThickness={1}
          height={5}
        >
          {`Supercharge`}
          <MeshTransmissionMaterial
            clearcoat={1}
            samples={8}
            background={new Color('#111111')}
          />
        </Text3D>
        <Text3D
          position={[30, -50, 0]}
          size={w / 10}
          font={'/Inter.json'}
          curveSegments={24}
          bevelEnabled
          bevelSize={1}
          bevelThickness={1}
          height={5}
        >
          {`your site.`}
          <MeshTransmissionMaterial
            clearcoat={1}
            samples={8}
            background={new Color('#111111')}
          />
        </Text3D>
      </Center>
      {/* <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[400, 400, 1]}
        position={[0, -20, 0]}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#151515"
          metalness={0.6}
          roughness={1}
          mirror={0}
        />
      </mesh> */}
    </>
  );
};
