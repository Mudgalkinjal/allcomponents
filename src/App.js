
import HeaderComp from './components/HeaderComp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Games from './pages/Games'
import './styles/App.css'

function App() {

  const navbarItems = [{ name: 'Homepage', page: 'Home' }, { name: 'Games', page: 'Games' }];

  return (
    <Router>
    <div>
      <HeaderComp />
        <Navbar navbarItems={navbarItems}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" exact element={<Home/>} />
        <Route path="/Games" exact element={<Games/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
