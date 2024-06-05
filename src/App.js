import './App.css';
import Calculate from './components/Calculate'
import Header from './components/Header'
import { calculateCubeVolume } from './components/calculateCubeVolume';
import { calculateSphereVolume } from './components/calculateSphereVolume';
function App() {
  return (
    <>
    <Header />
    <div className="calc-container">
      <Calculate name="sphere volume" input="radius" calculateFunction={calculateSphereVolume}/>
      <Calculate name="cube volume" input="side length" calculateFunction={calculateCubeVolume}/>
      </div>
    
    </>
  )
}

export default App;
