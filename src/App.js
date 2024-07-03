import logo from './logo.svg';
import './App.css';
import ProjectDashboard from './Components/pages/PeojectDashboard';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AllProjects from './Components/pages/AllProjects';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<AllProjects/>} />
          <Route path='/project' element={<Home/>} >
            <Route index element={<ProjectDashboard/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
