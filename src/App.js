import logo from './logo.svg';
import './App.css';
import ProjectDashboard from './Components/pages/PeojectDashboard';
// import ProjectModules from './Components/pages/PeojectDashboard';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AllProjects from './Components/pages/AllProjects';
import Modules from './Components/pages/Modules';
import Dashboard from './Components/pages/Dashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<AllProjects/>} />
          <Route path='/project' element={<Home/>} >
            <Route index element={<Dashboard/>} />
            <Route path='/project/modules' element={<Modules/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
