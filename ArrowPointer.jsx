import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function Arrow(props) {
    const glowRed = new THREE.MeshBasicMaterial({
        color: new THREE.Color(5, 0.2, 0.5),
        toneMapped: false
    })
    const glowGreen = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0, 1, 0),
        toneMapped: false
    })

    const { nodes, materials } = useGLTF("./pointer_arrows.glb");
    const ref = useRef()
    useFrame((state) => {
        const angle = state.clock.elapsedTime
        ref.current.rotation.y += Math.sin(angle + 3) / 25
    })
    return (
        <group {...props} dispose={null}>
            <mesh
                scale={0.5}
                ref={ref}
                castShadow
                receiveShadow
                geometry={nodes["pointer-arrow"].geometry}
                material={glowGreen}
                position={[0, 2.11, 0]}
                rotation={[0, Math.PI / 4, Math.PI]}
            />
        </group>
    );
}

useGLTF.preload("./pointer_arrows.glb");
