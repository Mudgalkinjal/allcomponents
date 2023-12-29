
import HeaderComp from './components/HeaderComp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Games from './pages/Games'
import Datatable from './pages/Datatable'
import TodoList from './components/TodoList';
import './styles/App.css'
import InfiniteScroll from './components/InfiniteScroll';
import Form from './components/Form';

function App() {

  const navbarItems = [
    { name: 'Homepage', page: 'Home' },
    { name: 'Games', page: 'Games' },
    { name: 'Datatable', page: 'Datatable' },
    { name: 'To do List', page: 'TodoList' },
    { name: 'Infinite Scroll', page: 'InfiniteScroll' },
    { name: 'Form', page: 'Form' }
  ];

  return (
    <Router>
    <div>
      <HeaderComp />
        <Navbar navbarItems={navbarItems}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" exact element={<Home/>} />
          <Route path="/Games" exact element={<Games />} />
          <Route path="/Datatable" exact element={<Datatable />} />
          <Route path="/TodoList" exact element={<TodoList />} />
          <Route path="/InfiniteScroll" exact element={<InfiniteScroll />} />
          <Route path="/Form" exact element={<Form />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;