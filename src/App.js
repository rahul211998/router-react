import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Users from './Pages/Users'
import User from './Pages/User'
import Errorpage from './Pages/Errorpage'
import Navbar from './Components/Navbar';
import Abouts from './Pages/Abouts';
import Oldbooks from './Pages/Oldbooks';
import Newbooks from './Pages/Newbooks';
import Library from './Library';
import { Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <button><Link to = "/library">library</Link></button>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='users' element = {<Users/>}/>
      <Route path='users/:username' element = {<User/>}/>  //dynamic routing
      <Route path='contact' element = {<Contact/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='about/:n' element = {<Abouts/>}/>
      <Route path='*' element = {<Errorpage/>}/>
      <Route path='/books'>
      <Route path='oldbooks' element = {<Oldbooks/>}/>
      <Route path='newbooks' element = {<Newbooks/>}/>
      </Route>
      <Route path='/library' element = {<Library/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
