import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={ <h1>Welcome</h1>}  />
        <Route  path="/home/" element={ <h1>Home welcome</h1>}  />
      </Routes>
    
    </div>
  );
}

export default App;
