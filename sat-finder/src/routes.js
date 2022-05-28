import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plano from './componentes/planos';

import Home from './pages/Home';
import Descricao from './pages/Descricao/descricao';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
         {<Route path="/descricao" element={ <Descricao/> } />}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;