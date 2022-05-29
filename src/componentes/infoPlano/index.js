import React from "react";
import './infoPlano.css';


function InfoPlano (props) {
    return (
        <div className="containerInfoPlano" >
            <h5>PROVEDOR: {props.item.isp}</h5>
            <h5>PREÇO: {props.item.price_per_month}</h5>
            <h5>DOWNLOAD: {props.item.download_speed}</h5>
            <h5>UPLOAD: {props.item.upload_speed}</h5>
            <h5>TIPO DE INTERNET: {props.item.type_of_internet}</h5>
            <p>Descricao: {props.item.description}</p>
            <button>AGENDAR INSTALAÇÃO</button>
        </div>
    );
}

export default InfoPlano;