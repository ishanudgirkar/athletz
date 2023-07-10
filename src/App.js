import './App.css';
import {Route,Routes} from "react-router";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { useData } from './contexts/DataContext';
import { AllRoutes } from './routes/AllRoutes';

function App() {

  

  




  return (
    <div className="App">
      <NavBar/>
      <AllRoutes />

     
     
    </div>
  );
}

export default App;
