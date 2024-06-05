import './App.css';
import CalculateCard from './components/CalculateCard'
import Header from './components/Header'
import { calculateCubeVolume } from './components/calculateCubeVolume';
import { calculateSphereVolume } from './components/calculateSphereVolume';
function App() {
  return (
    <>
    <Header />
    <div className="calc-container">
      <CalculateCard name="sphere volume" input="radius" calculateFunction={calculateSphereVolume}/>
      <CalculateCard name="cube volume" input="side length" calculateFunction={calculateCubeVolume}/>
      </div>
    
    </>
  )
}

export default App;
