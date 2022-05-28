import React, { Component } from "react";
import './titulo.css';


class Titulo extends Component {


    render() {
        return (

            <div className="container" >
                <h3 className="content" > {this.props.texto} </h3>
            </div>


        );
    }

}

export default Titulo;