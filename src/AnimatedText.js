import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { extend } from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three"
import { Vector3 } from 'three'
import { useEffect, useRef, useState } from 'react'

const FONT = new FontLoader().parse(HelvetikerFont);

/**
 * 3D text with animation moving from the given start position and rotation
 * to the center of the canvas.
 */
function AnimatedText({text,
                       size = 1,
                       color = 'black',
                       startPosition = [-100, 0, 0],
                       startRotation = [0, 0.5, 0]}) {
  extend({ TextGeometry })
  const thisMesh = useRef()
  const [endPositionX, setEndPositionX] = useState(0)
  useEffect(() => setEndPositionX(getCenteredPositionX(thisMesh.current)), []);
  const { position, rotation } = useSpring({
    from: { position: startPosition, rotation: startRotation },
    to: { position: [endPositionX, startPosition[1], startPosition[2]], rotation: [0, 0, 0] },
    config: { mass: 10, tension: 70 }
  })
  
  return (
    <animated.mesh ref={thisMesh} position={position} rotation={rotation}>
      <textGeometry args={[text, {font: FONT, size: size, height: 0.15}]} />
      <meshStandardMaterial color={color}/>
    </animated.mesh>
  )
}

export default AnimatedText;

/**
 * Computes the position this mesh should have to be centered on the x axis.  
 */
function getCenteredPositionX(mesh) {
  const width = getWidth(mesh)
  return - width / 2
}

/**
 * Computes the given mesh' width along the x axis.
 */
function getWidth(mesh) {
  mesh.geometry.computeBoundingBox()
  const meshSize = new Vector3();
  mesh.geometry.boundingBox.getSize(meshSize)
  return meshSize.x
}