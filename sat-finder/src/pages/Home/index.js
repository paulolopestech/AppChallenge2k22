import '../../App.css';
import React, { useEffect, useState } from 'react';

import Titulo from '../../componentes/titulo';
import Mapa from '../../componentes/mapa';
import ColorToggleButton from '../../componentes/tipos';

import useLocation from '../../hooks/useLocation';
import usePlans from '../../hooks/usePlans';

function Home() {
    // GET LOCATION
    const location = useLocation();

    // GET PLANS
    const plans = usePlans(location);   

    return (
      <div>
        <Titulo texto = "REGIÃO"/>
        <Mapa/>
        <Titulo texto = "PLANOS" />
        <ColorToggleButton/>
        {plans.map((item) => {
          return(
           <p key={item.id}>
            PROVEDOR={item.isp}
            <br></br>
            DESCRICAO={item.description}
            <br></br>
           </p>
          );
        })}
      </div>
    );
}

export default Home;
