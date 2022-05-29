import * as React from 'react';
import './index.css';

import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';

export default function Cliente(props) {
    return (
        <div className='container-plano' >
            <div className='InfoPlano' key={props.cliente.id}>
                <h5>NOME: {props.cliente.nome}</h5>
                <SettingsInputAntennaOutlinedIcon className='tipo' />
                <h5>PLANO: {props.cliente.plano} </h5>
                
            </div>
        </div>
    );
}
