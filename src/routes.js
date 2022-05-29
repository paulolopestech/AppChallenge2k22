import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plano from './componentes/planos';

import Home from './pages/Home';
import Descricao from './pages/Descricao';
import Instaladores from './pages/Instaladores';
import Agendar from './pages/Agendar';
import Loading from './pages/Loading';
import Favoritos from './pages/Favoritos';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Loading/> } />
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path="/home" element={ <Home/> } />
        <Route path="/descricao/:id" element={ <Descricao/> } />
        <Route path="/instaladores" element={ <Instaladores/> } />
        <Route path="/agendar" element={ <Agendar/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;