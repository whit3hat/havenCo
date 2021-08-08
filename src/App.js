import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav.js';
import Minecraft from './components/Minecraft';

function App() {
  return (
    <div className="App">
      <Navigation />    
     </div>
  );
}

export default App;
