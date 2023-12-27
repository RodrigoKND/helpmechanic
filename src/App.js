import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'react-toastify/dist/ReactToastify.css';

import Menunav from './components/menu/header';

import Maincontain from './components/HOME/home';
import Login from './components/login/login';
import Mecanicoregistro from './components/login/loginMechanic/loginMechanic';
import Nosotros from './components/componentsMenu/nosotros/nosotros';
import Privacidad from './components/componentsMenu/privacidad/privacidad';
import Calidad from './components/componentsMenu/calidad/calidad';

import MechanicList from './components/listMechanic/mechanicList';
import Mylocation from './components/map/location';
import MechanicWorkshop from './components/locationBusiness/mechanicalWorkShop';
import Notfound from './components/errorsSystem/404';

import Homeblog from './components/blog/homeblog/homeblog';
import Blogstruct from './components/blog/structblog/blogstruct';

import ContextUser from './components/context/context-registerUser/accessUser';
function App() {
  return (
    <ContextUser>
      <Router>
        <Menunav />
        <Routes>
          <Route path='/' element={<Maincontain />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bloghelpmechanic' element={<Homeblog />}></Route>
          <Route path='/bloghelpmechanic/:title' element={<Blogstruct />}></Route>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/privacidad' element={<Privacidad />} />
          <Route path='/calidad' element={<Calidad />} />
          <Route path='/mecanico' element={<Mecanicoregistro />} />
          <Route path='/Listamecanicos' element={<MechanicList/>}></Route>
          <Route path='/map' element={<Mylocation />}></Route>
          <Route path='/mecanico/direccionTaller' element={<MechanicWorkshop />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </Router>
    </ContextUser>
  );
}

export default App;
