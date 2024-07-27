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
  SpotLight,
  Text3D,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { Color, Fog, Group, MathUtils, Mesh } from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  ComponentProps,
  ReactNode,
  Suspense,
  useMemo,
  useRef,
  useState,
} from 'react';

const textColor = new Color('#00B39D');

export const NewHero = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100] }}>
      <fog attach="fog" args={['#09090b', 100, 150]} />
      <ScrollControls pages={1}>
        <Scene />
        <Model />
      </ScrollControls>
      <directionalLight
        intensity={10}
        rotation-x={Math.PI / 2}
        position={[0, 5, 10]}
        scale={[10, 10, 1]}
        color={'#11DF00'}
      />
      <directionalLight
        intensity={10}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
        color={'#11DF00'}
      />
      <directionalLight
        intensity={10}
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
        color={'#11DF00'}
      />
      <directionalLight
        intensity={10}
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
        color={'#11DF00'}
      />
    </Canvas>
  );
};

const Scene = () => {
  const {
    viewport: { width },
    camera,
  } = useThree(({ viewport, camera }) => ({ viewport, camera }));
  const scroll = useScroll();
  const ref = useRef<Group>(null!);

  useFrame(() => {
    camera.position.z = MathUtils.lerp(100, 300, -scroll.offset);
    ref.current.rotation.x = MathUtils.lerp(0, 2, scroll.offset);
  });

  return (
    <>
      <group ref={ref}>
        <Text position={[0, width / 16, 0]}>Supercharge</Text>
        <Text position={[0, -width / 16, 0]}>your site.</Text>
      </group>
    </>
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
  const { camera, gl } = useThree();
  // Load model
  const { nodes: nodes, materials } = useGLTF('/mac-draco.glb');
  const typedNodes = nodes as { [key: string]: Mesh };
  const [visible, setVisible] = useState(false);
  useFrame(() => {
    const distance = camera.position.distanceTo(group.current.position);
    group.current.visible = distance <= 170;
    if (distance <= 150 && !visible) {
      setVisible(true);
    } else if (distance > 150 && visible) {
      setVisible(false);
    }
  });

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, -5, -100]}
      scale={[2, 2, 2]}
      rotation={[1 / 2.4, 0, 0]}
    >
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={typedNodes['Cube008'].geometry}
          />
          <mesh
            material={materials['matte.001']}
            geometry={typedNodes['Cube008_1'].geometry}
          />
          <mesh geometry={typedNodes['Cube008_2'].geometry}>
            {visible && (
              <Html
                rotation-x={-Math.PI / 2}
                position={[0, 0.05, -0.09]}
                transform
                occlude
                portal={{ current: gl.domElement.parentNode as HTMLElement }}
              >
                <div onPointerDown={(e) => e.stopPropagation()}>
                  <h1>MacBook Pro</h1>
                  <p>Supercharge your site with a MacBook Pro.</p>
                </div>
              </Html>
            )}
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={typedNodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={typedNodes['Cube002'].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={typedNodes['Cube002_1'].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={typedNodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
