import React from "react";
import { Link } from 'react-router-dom';
import './infoPlano.css';


function InfoPlano (props) {
    return (
        <div className="containerInfoPlano" >
            <h5>PROVEDOR: {props.plano.isp}</h5>
            <h5>PREÇO: {props.plano.price_per_month}</h5>
            <h5>DOWNLOAD: {props.plano.download_speed}</h5>
            <h5>UPLOAD: {props.plano.upload_speed}</h5>
            <h5>TIPO DE INTERNET: {props.plano.type_of_internet}</h5>
            <p>Descricao: {props.plano.description}</p>
            <Link to='/instaladores' state={props.plano}>AGENDAR INSTALAÇÃO</Link>
        </div>
    );
}

export default InfoPlano;