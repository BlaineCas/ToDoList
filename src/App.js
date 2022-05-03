import './App.css';
 import Particle from './Components/Particle'; 
import Title from './Components/Title';
import ToDoContainer from './Components/ToDoContainer';

function App() {
  return (
    <div className="App">
      <Particle/>
      <Title/>
      <ToDoContainer/>
    </div>
  );
}

export default App;
