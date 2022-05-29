import '../../App.css';
import React from 'react';
import { useLocation } from 'react-router';

import Titulo from '../../componentes/titulo'

import './agendar.css'

function Agendar(props) {
    const location = useLocation();
    const data = location.state;
    const instalador = data.instalador;
    const plano = data.plano;

  return(
      <div >
          <Titulo texto = 'Instalador' />
          <div className='InfoInstalado' >
              <h2>{instalador.name}</h2>
              <p>Nota: {instalador.rating}</p>
              <p>Preço/KM: R${instalador.price_per_km}</p>
          </div>

          <div className='InformacaoPLano' >
          <h2>PLANO</h2>
              <p>Provedor: {plano.isp}</p>
              <p>Preço:R$  {plano.price_per_month}</p>
              <p>Velocida de Download: {plano.download_speed}</p>
          </div>

          <button className='botaoAgendar' >CONRTATAR</button>
      </div>
  );
}

export default Agendar;
