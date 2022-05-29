import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plano from './componentes/planos';

import Home from './pages/Home';
import Descricao from './pages/Descricao';
import Instaladores from './pages/Instaladores';
import Agendar from './pages/Agendar';
import Loading from './pages/Loading';
import Favoritos from './pages/Favoritos';
import Navbar from './componentes/navBar';
import Selecionar from './pages/Selecionar';
import Clientes from './pages/Instalador';

function RoutesApp(){
  return(
    <BrowserRouter>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
      <Routes>
        <Route path="/" element={ <Loading/> } />
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path="/home" element={ <Home/> } />
        <Route path="/descricao/:id" element={ <Descricao/> } />
        <Route path="/instaladores" element={ <Instaladores/> } />
        <Route path="/agendar" element={ <Agendar/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
        <Route path='/selecionar' element={<Selecionar/>}/>
        <Route path='/instalador' element={<Clientes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;