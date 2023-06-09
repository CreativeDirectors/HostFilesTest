/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -Tk phone.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/phone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[-0.44, 1.72, -0.74]} scale={[0.13, 0.91, 0.28]} />
      <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.001']} position={[-1.47, 1.76, -0.73]} scale={[0.49, 0.49, 0.61]}>
        <mesh name="Circle001_1" geometry={nodes.Circle001_1.geometry} material={materials['Material.003']} position={[3.11, -0.92, 2.02]} rotation={[-2.47, 0.04, -0.01]} scale={[1.43, 1.33, 1.28]} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[2.99, -3.59, 1.21]} scale={[2.04, 2.04, 1.65]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/phone-transformed.glb')
