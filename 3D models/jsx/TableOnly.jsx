/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -Tk tableOnly.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tableOnly-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group name="table" position={[0.42, -0.09, -7.02]}>
        <mesh name="Mesh072" geometry={nodes.Mesh072.geometry} material={nodes.Mesh072.material} />
        <mesh name="Mesh072_1" geometry={nodes.Mesh072_1.geometry} material={materials['main-metal-reflective']} />
      </group>
      <mesh name="table_base" geometry={nodes.table_base.geometry} material={materials['main-metal-reflective']} position={[0.42, -0.09, -7.02]} />
      <mesh name="table001" geometry={nodes.table001.geometry} material={materials['display Table']} position={[0.42, -0.09, -7.02]} />
    </group>
  )
}

useGLTF.preload('/tableOnly-transformed.glb')