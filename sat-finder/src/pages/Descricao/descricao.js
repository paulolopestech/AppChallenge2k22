import '../../App.css';
import React, { useEffect, useState } from 'react';

import Titulo from '../../componentes/titulo';
import InfoPlano from '../../componentes/infoPlano';

import useLocation from '../../hooks/useLocation';
import usePlans from '../../hooks/usePlans';

function Descricao() {
  // GET LOCATION
  const location = useLocation();

  // GET PLANS
  const plans = usePlans(location);

  return (
    <div>
      <Titulo texto = 'DESCRIÇÃO'/>
      <InfoPlano/>
    </div>
  );
}

export default Descricao;
