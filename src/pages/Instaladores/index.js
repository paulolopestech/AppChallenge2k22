import '../../App.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

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
              <div>
                <h2>NOME: {instalador.name}</h2>
                <p>PREÇO/KM: {instalador.price_per_km}</p>
                <p>PREÇO: {
                  (instalador.price_per_km)*distance(lat, long, instalador.lat, instalador.long)
                  }</p>
                <p>NOTA: {instalador.rating}</p>
                <br></br>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Instaladores;
