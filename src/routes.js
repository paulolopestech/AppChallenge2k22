import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plano from './componentes/planos';

import Home from './pages/Home';
import Descricao from './pages/Descricao';
import Instaladores from './pages/Instaladores';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/descricao/:id" element={ <Descricao/> } />
        <Route path="/instaladores" element={ <Instaladores/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;