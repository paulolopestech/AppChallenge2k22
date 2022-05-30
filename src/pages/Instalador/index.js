import '../../App.css';

import Titulo from '../../componentes/titulo';
import Cliente from '../../componentes/clientes/index.js';

function Clientes() {
  // GET PLANS AND LOCATION
  const clientes = [
    {
        id: 1,
        nome: "Paulo",
        plano: 1,
    },

    {
        id: 2,
        nome: "Manu",
        plano: 1,
    },

    {
        id: 3,
        nome: "Renzo",
        plano: 1,
    },
  ]

  return(
    <div>
    <Titulo texto={"MEUS CLIENTES"} />
    <br></br>
    <br></br>
    <br></br>
    {
    clientes.map((cliente) => {
      return (
        <Cliente cliente={cliente} key={cliente.id}/>
      );
    })
  }
  </div>
  );
}

export default Clientes;
