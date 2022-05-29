import '../../App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Titulo from '../../componentes/titulo';
import InfoPlano from '../../componentes/infoPlano';


function Descricao() {
  const location = useLocation();
  const plano = location.state;
  
  return (
    <div className = "fundo" >
      <Titulo texto = "DESCRIÇÃO"/>
      <InfoPlano plano ={plano}/>
    </div>
  );
}

export default Descricao;
