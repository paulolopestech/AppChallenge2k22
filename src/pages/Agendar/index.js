import '../../App.css';
import React from 'react';
import { useLocation } from 'react-router';

function Agendar(props) {
    const location = useLocation();
    const data = location.state;
    const instalador = data.instalador;
    const plano = data.plano;

  return(
      <div>
          INSTALADOR
          <div>
              <p>NOTA: {instalador.rating}</p>
              <p>NOME: {instalador.name}</p>
              <p>PREÇO/KM: {instalador.price_per_km}</p>
          </div>

          PLANO
          <div>
              <p>PROVEDOR: {plano.isp}</p>
              <p>PREÇO: {plano.price_per_month}</p>
              <p>VELOCIDADE DE DOWNLOAD{plano.download_speed}</p>
          </div>

          <button>AGENDAR</button>
      </div>
  );
}

export default Agendar;
