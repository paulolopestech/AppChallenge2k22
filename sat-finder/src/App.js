import * as React from 'react';
import './App.css';
import Titulo from './componentes/titulo';
import Mapa from './componentes/mapa';
import Planos from './componentes/planos';
import ColorToggleButton from './componentes/tipos';

function App() {
  return (
    <div>
      <Titulo texto = "REGIÃO"/>
      <Mapa/>
      <Titulo texto = "PLANOS" />
      <ColorToggleButton/>
      <Planos/>

      </div>
  );
}

export default App;
