import '../../App.css';
import React, { useEffect, useState } from 'react';

import Titulo from '../../componentes/titulo';
import Mapa from '../../componentes/mapa';
import ColorToggleButton from '../../componentes/tipos';
import Plano from '../../componentes/planos';

import useLocation from '../../hooks/useLocation';
import usePlans from '../../hooks/usePlans';

function Home() {
  // GET LOCATION
  const location = useLocation();

  // GET PLANS
  let plans = usePlans(useLocation());

  if(location !== []){
    return(
      <div>
      <Titulo texto={`REGIÃO: ${location}`} />
      <Mapa />
      <Titulo texto="PLANOS" />
      <ColorToggleButton />
      {
      plans.map((item) => {
        return (
          <Plano item={item} />
        );
      })
    }
    </div>
    );
  }
else{
  return (
    <p>LOADING...</p>
  );}
}

export default Home;
