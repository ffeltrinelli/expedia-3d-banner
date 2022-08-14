import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { extend } from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three"
import { Vector3 } from 'three'
import { useEffect, useRef, useState } from 'react'

const FONT = new FontLoader().parse(HelvetikerFont);

function Text({text}) {
  extend({ TextGeometry })
  const mesh = useRef()
  const [finalPositionX, setFinalPositionX] = useState(0)
  useEffect(() => {
    mesh.current.geometry.computeBoundingBox()
    const meshSize = new Vector3();
    mesh.current.geometry.boundingBox.getSize(meshSize)
    setFinalPositionX(- meshSize.x / 2)
  }, []);
  const { position, rotation } = useSpring({
    from: { position: [-100, 0, 0], rotation: [-1, 0, 0] },
    to: { position: [finalPositionX, 0, 0], rotation: [0, 0, 0] },
    config: { mass: 10, tension: 70 }
  })
  
  return (
    <animated.mesh ref={mesh} position={position} rotation={rotation}>
      <textGeometry args={[text, {font: FONT, size: 1.5, height: 0.1}]} />
      <meshStandardMaterial/>
    </animated.mesh>
  )
}

export default Text;
