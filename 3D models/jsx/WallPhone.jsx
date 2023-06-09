/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -Tk wallPhone.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/wallPhone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={materials['NOT glowy red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
      <mesh name="defaultMaterial011" geometry={nodes.defaultMaterial011.geometry} material={materials['NOT glowy red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
      <mesh name="defaultMaterial010" geometry={nodes.defaultMaterial010.geometry} material={materials['NOT glowy red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
      <mesh name="defaultMaterial012" geometry={nodes.defaultMaterial012.geometry} material={materials['NOT glowy red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
      <mesh name="defaultMaterial014" geometry={nodes.defaultMaterial014.geometry} material={materials['GLOWY red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
      <mesh name="defaultMaterial013" geometry={nodes.defaultMaterial013.geometry} material={materials['GLOWY red']} position={[-75.08, 0.97, 0.86]} scale={0.16} />
    </group>
  )
}

useGLTF.preload('/wallPhone-transformed.glb')
