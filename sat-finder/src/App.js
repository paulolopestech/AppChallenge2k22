import * as React from 'react';
import './App.css';
import Titulo from './componentes/titulo';
import Mapa from './componentes/mapa';
import ColorToggleButton from './componentes/tipos';

function App() {
  return (
    <div>
      <Titulo texto = "REGIÃO"/>
      <Mapa/>
      <Titulo texto = "PLANOS" />
      <ColorToggleButton/>
      </div>
  );
}

export default App;
