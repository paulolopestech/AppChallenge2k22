import React from "react";
import { Link } from 'react-router-dom';
import './infoPlano.css';

function Satelite() {
    return <h5>Satelite</h5>;
}

function Cabeada() {
    return <h5>Cabeada</h5>;
}
function Radio() {
    return <h5>Radio</h5>;
}

function TipoDeInternet(tipo) {
    const TipoDeInternet = tipo.tipo;
    if (TipoDeInternet == 'sat') {
        return <Satelite />;
    }
    if (TipoDeInternet == 'radio')
        return <Radio />;

    if (TipoDeInternet == 'wire')
        return <Cabeada />;


}


function InfoPlano(props) {
    return (
        <div className="containerInfoPlano" >
            <div className="contentInfoPlano" >
                <div className="info" >
                    <h4>PROVEDOR</h4>
                    <h5> {props.plano.isp}</h5>
                </div>

                <div className="info" >
                    <h4>TIPO DE INTERNET</h4>
                    <h5><TipoDeInternet tipo={props.plano.type_of_internet} /> </h5>
                </div>

                <div className="info" >
                    <h4>DOWNLOAD</h4>
                    <h5> {props.plano.download_speed}</h5>
                </div>

                <div className="info" >
                    <h4>UPLOAD</h4>
                    <h5>{props.plano.upload_speed}</h5>
                </div>

                <div className="info" >
                    <h4>PREÇO </h4>
                    <h5> {props.plano.price_per_month}</h5>
                </div>
            </div>
            <div className = "areaDescricao" >
                <h4>Descrição:</h4>
            <p> {props.plano.description}</p>
            </div>
            <Link to='/instaladores' state={props.plano} className = "agendamento" >AGENDAR INSTALAÇÃO</Link>
        </div>
    );
}

export default InfoPlano;