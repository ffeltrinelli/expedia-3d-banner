import AnimatedText from './AnimatedText';
import { Canvas } from '@react-three/fiber'

const CAMERA_POSITION = [0, 0, 5]
const EXPEDIA_BLUE = 'rgb(0, 0, 153)'
const TITLE = 'Expedia Group'
const SUBTITLE = 'Open Source'

function App() {
  return (
    <Canvas camera={{ position: CAMERA_POSITION }}>
      <pointLight position={CAMERA_POSITION} />
      <AnimatedText text={TITLE} size={1.5} color={EXPEDIA_BLUE} startPosition={[-100, 1, 0]}/>
      <AnimatedText text={SUBTITLE} size={1} color={EXPEDIA_BLUE} startPosition={[100, -1, 0]}/>
    </Canvas>
  );
}

export default App;
