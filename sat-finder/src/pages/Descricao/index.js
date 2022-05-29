import '../../App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Titulo from '../../componentes/titulo';
import InfoPlano from '../../componentes/infoPlano';

function Descricao(props) {
  const location = useLocation();
  const item = location.state;
  
  return (
    <div>
      <Titulo texto = 'DESCRIÇÃO'/>
      <InfoPlano item ={item}/>
    </div>
  );
}

export default Descricao;
