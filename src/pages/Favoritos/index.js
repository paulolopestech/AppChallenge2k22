import '../../App.css';

import Titulo from '../../componentes/titulo';
import Plano from '../../componentes/planos';

function Favoritos() {
  // GET PLANS AND LOCATION
  const plans = [
    {
        id: 1,
        isp: "Viasat",
        data_capacity: 20,
        download_speed: 10,
        upload_speed: 1.5,
        description: "Architecto reiciendis quia vel explicabo quam molestias et.",
        price_per_month: 199,
        type_of_internet: "sat"
    },

    {
        id: 2,
        isp: "Viasat",
        data_capacity: 40,
        download_speed: 15,
        upload_speed: 3,
        description: "Non assumenda voluptas nulla.",
        price_per_month: 269,
        type_of_internet: "sat"
    },

    {
        id: 7,
        isp: "Viva",
        data_capacity: null,
        download_speed: 600,
        upload_speed: 600,
        description: "Molestiae non architecto ipsa debitis asperiores aperiam.",
        price_per_month: 159.99,
        type_of_internet: "wire",
    },
  ]

  return(
    <div>
    <Titulo texto={"FAVORITOS"} />
    {
    plans.map((item) => {
      return (
        <Plano item={item} key={item.id}/>
      );
    })
  }
  </div>
  );
}

export default Favoritos;
