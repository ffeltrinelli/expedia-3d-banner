import './App.css';
import Text from './Text';
import { Canvas } from '@react-three/fiber'

const CAMERA_POSITION = [0, 0, 5]

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: CAMERA_POSITION }}>
        <pointLight position={CAMERA_POSITION} />
        <Text text="Expedia Group"/>
      </Canvas>
    </div>
  );
}

export default App;
