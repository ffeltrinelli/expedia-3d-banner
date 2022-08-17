import { Canvas } from '@react-three/fiber'
import AnimatedText from './AnimatedText';
import AnimatedStar from './AnimatedStar';

const CAMERA_POSITION = [0, 0.5, 5]
const EXPEDIA_BLUE = 'rgb(0, 0, 153)'
const TITLE = 'Expedia Group'
const SUBTITLE = 'Open Source'
const STAR_RADIUS = 1
const STAR_DELAY = 3000

function App() {
  return (
    <Canvas camera={{ position: CAMERA_POSITION }}>
      <pointLight position={CAMERA_POSITION} />
      <AnimatedText text={TITLE} size={1.5} color={EXPEDIA_BLUE} startPosition={[-100, 1, 0]}/>
      <AnimatedText text={SUBTITLE} size={1} color={EXPEDIA_BLUE} startPosition={[100, -1, 0]}/>
      <AnimatedStar startPosition={[100, 100, 50]} endPosition={[7, -2, 0]} radius={STAR_RADIUS} delay={STAR_DELAY}/>
      <AnimatedStar startPosition={[-100, 100, 50]} endPosition={[-7, -2, 0]} radius={STAR_RADIUS} delay={STAR_DELAY}/>
    </Canvas>
  );
}

export default App;
