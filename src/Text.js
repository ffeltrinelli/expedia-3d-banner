import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { extend } from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three";

const FONT = new FontLoader().parse(HelvetikerFont);

function Text({text}) {
  extend({ TextGeometry })
  const { position } = useSpring({
    to: { position: [10, 0, 0] },
    from: { position: [-10, 0, 0] },
    config: { duration: 1000 }
  })
  
  return (
    <animated.mesh position={position}>
      <textGeometry args={[text, {font: FONT, size: 1, height: 1}]} />
      <meshStandardMaterial/>
    </animated.mesh>
  )
}

export default Text;
