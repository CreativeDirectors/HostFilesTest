/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -Tk tesseract.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tesseract-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="outerWire" geometry={nodes.outerWire.geometry} material={materials.notGlowy} />
      <mesh name="innerWire" geometry={nodes.innerWire.geometry} material={materials.glowy} />
      <mesh name="closedCube" geometry={nodes.closedCube.geometry} material={nodes.closedCube.material} />
      <mesh name="outerGlass" geometry={nodes.outerGlass.geometry} material={materials.notGlowy} scale={2} />
    </group>
  )
}

useGLTF.preload('/tesseract-transformed.glb')