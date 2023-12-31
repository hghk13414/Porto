
import {Routes,Route} from 'react-router-dom';
import Who from './components/who.js'; 
import Navbaro from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Porjects.js';
import Contact from './components/Contact.js';
import Service from './components/Service.js';
import './App.css';
function App() {  
  return (
    <div >
      <Navbaro/>
   <Routes>
<Route path="/" element={<Who />}></Route>
<Route path="about" element={<About />}></Route>
<Route path='projects' element={<Projects/>}></Route>
<Route path='contact' element={<Contact/>}></Route>
<Route path='service' element={<Service/>}></Route>
</Routes>
    </div>
  );
}

export default App;
