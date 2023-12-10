import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js'

import Menunav from './components/menu/header';
import Maincontain from './components/contain/mainContain';
import Login from './components/login/login';
import Mecanicoregistro from './components/login/mecanico/loginMecanico';
import Nosotros from './components/componentsMenu/nosotros/nosotros';
import Privacidad from './components/componentsMenu/privacidad/privacidad';
import Calidad from './components/componentsMenu/calidad/calidad';

import './App.css';
import Listamecanicos from './components/listMechanic/listamecanicos';
import Mylocation from './components/map/location';
import Mechanictaller from './components/locationBusiness/bMechanic';
import Notfound from './components/errors/404';

import ContextUser from './components/context/context-registerUser/accessUser';
import Homeblog from './components/blog/homeblog/homeblog';

function App() {
  return (
    <ContextUser>
      <Router>
        <Menunav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bloghelpmechanic' element={<Homeblog />}></Route>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/privacidad' element={<Privacidad />} />
          <Route path='/calidad' element={<Calidad />} />
          <Route path='/mecanico' element={<Mecanicoregistro />} />
          <Route path='/Listamecanicos' element={<Listamecanicos />}></Route>
          <Route path='/map' element={<Mylocation />}></Route>
          <Route path='/direccionTaller' element={<Mechanictaller />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </Router>
    </ContextUser>
  );
}

function Home() {
  return (
    <>
      <Maincontain />
    </>
  );
}

export default App;
