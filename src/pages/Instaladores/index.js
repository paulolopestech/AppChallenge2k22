import '../../App.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './instaladores.css'

import Titulo from '../../componentes/titulo';
import useInstaladores from '../../hooks/useInstaladores';
import coordinatesUtils from '../../utils/coordinatesUtils';
import distance from '../../utils/distanceUtils';

function Instaladores(props) {
  const location = useLocation();
  const plano = location.state;

  const {instaladores} = useInstaladores(plano.id);
  let lat, long;
  navigator.geolocation.getCurrentPosition((position) =>
    {
      lat = position.coords.latitude;
      long = position.coords.longitude;
  }
    );

  return (
    <div>
      <Titulo texto = 'INSTALADORES'/>
      <div>
        {
          instaladores.map((instalador) => {
            return (
             
                
              <div className = "containerInstalador" key={instalador.id}>
              <h2>{instalador.name}</h2>
              <div className = "contentInstalador" >
                <p>Preço/Km: R$  {instalador.price_per_km}</p>
                <p>Preço: R$ {
                  (instalador.price_per_km)*distance(lat, long, instalador.lat, instalador.long)
                  }</p>
                <p>Nota: {instalador.rating}</p>
              </div>
                <Link to={`/agendar`} state={{plano, instalador}}>Agendar Instalação</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Instaladores;
