import '../../App.css';

import Titulo from '../../componentes/titulo';
import Mapa from '../../componentes/mapa';
import ColorToggleButton from '../../componentes/tipos';
import Plano from '../../componentes/planos';
import usePlans from '../../hooks/usePlans';

function Home() {
  // GET PLANS AND LOCATION
  const {plans, estado} = usePlans();

  return(
    <div  >
    <Titulo texto={`REGIÃO: ${estado}`} />
    <Mapa />
    <Titulo texto="PLANOS" />
    <ColorToggleButton />
    {
    plans.map((item) => {
      return (
        <Plano item={item} />
      );
    })
  }
  </div>
  );
}

export default Home;
