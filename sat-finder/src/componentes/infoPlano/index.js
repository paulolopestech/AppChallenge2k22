import React, { Component } from "react";
import './infoPlano.css';


class InfoPlano extends Component {


    render() {
        return (

            <div className="containerInfoPlano" >
                <h5>PROVEDOR</h5>
                <h5>PREÇO</h5>
                <h5>DOWNLOAD</h5>
                <h5>UPLOAD</h5>
                <h5>PRECO</h5>
                <h5>TIPO DE INTERNET</h5>
                <button>INSTALADORES</button>
            </div>


        );
    }

}

export default InfoPlano;