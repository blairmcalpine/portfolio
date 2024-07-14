'use client';

import {
  Center,
  Environment,
  Html,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Scroll,
  ScrollControls,
  Text3D,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { Color, Group, MathUtils, type Mesh } from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ComponentProps, ReactNode, Suspense, useRef } from 'react';

const textColor = new Color('#00B39D');

export const NewHero = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100] }}>
      <Suspense>
        <ScrollControls pages={2}>
          <Scene />
          <Model />
        </ScrollControls>
        {/* <OrbitControls /> */}
        <Environment resolution={64}>
          <Lightformer
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
            color={'#11DF00'}
          />
          <Lightformer
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[20, 0.1, 1]}
            color={'#11DF00'}
          />
          <Lightformer
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[20, 0.5, 1]}
            color={'#11DF00'}
          />
          <Lightformer
            intensity={10}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 1, 1]}
            color={'#11DF00'}
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
};

const Scene = () => {
  const {
    viewport: { width },
    camera,
  } = useThree(({ viewport, camera }) => ({ viewport, camera }));
  const scroll = useScroll();
  console.log(camera.position.z);

  useFrame(() => {
    camera.position.z = -scroll.offset * 200 + 100;
  });

  return (
    <group>
      <Text position={[0, width / 16, 0]}>Supercharge</Text>
      <Text position={[0, -width / 16, 0]}>your site.</Text>
    </group>
  );
};

const Text = ({ children, ...props }: ComponentProps<typeof Center>) => {
  const { width } = useThree((state) => state.viewport);
  return (
    <Center {...props}>
      <Text3D
        position={[0, 0, 0]}
        size={width / 10}
        font={'/Inter.json'}
        curveSegments={24}
        bevelEnabled
        bevelSize={width / 460}
        bevelThickness={width / 460}
        height={width / 70}
      >
        {children}
        <MeshTransmissionMaterial
          clearcoat={1}
          samples={8}
          background={textColor}
          transmission={1}
          thickness={0.1}
          roughness={0}
          metalness={0.4}
          specularIntensity={1}
        />
      </Text3D>
    </Center>
  );
};

function Model() {
  const group = useRef<Group>(null!);
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb');
  // Make it float
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   group.current.rotation.x = MathUtils.lerp(
  //     group.current.rotation.x,
  //     Math.cos(t / 2) / 20 + 0.25,
  //     0.1
  //   );
  //   group.current.rotation.y = MathUtils.lerp(
  //     group.current.rotation.y,
  //     Math.sin(t / 4) / 20,
  //     0.1
  //   );
  //   group.current.rotation.z = MathUtils.lerp(
  //     group.current.rotation.z,
  //     Math.sin(t / 8) / 20,
  //     0.1
  //   );
  //   group.current.position.y = MathUtils.lerp(
  //     group.current.position.y,
  //     (-2 + Math.sin(t / 2)) / 2,
  //     0.1
  //   );
  // });
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} dispose={null} position={[0, 0, -100]}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes['Cube008'].geometry}
          />
          <mesh
            material={materials['matte.001']}
            geometry={nodes['Cube008_1'].geometry}
          />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <h1>MacBook Pro</h1>
                <p>Supercharge your site with a MacBook Pro.</p>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes['Cube002'].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes['Cube002_1'].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
