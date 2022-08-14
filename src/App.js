import './App.css';
import Text from './Text';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <pointLight position={[10, 10, 10]} />
        <Text text="Expedia Group"/>
      </Canvas>
    </div>
  );
}

export default App;
