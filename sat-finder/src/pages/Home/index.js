import '../../App.css';
import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo';
import Mapa from '../../components/mapa';
import ColorToggleButton from '../../components/tipos';

function Home() {
    // GET LOCATION
    const [location, setLocation] = useState([]);
    useEffect(()=> {
        function loadApi(lat, lng){
          let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            console.log(json.principalSubdivisionCode);
            setLocation(json);
          })

        }

        navigator.geolocation.getCurrentPosition((position) => {
            loadApi(position.coords.latitude, position.coords.longitude);
        });
    }, []);

    // const [estado, setEstado] = useState([]);
    // useEffect(()=> {
    //     function loadApi(lat, lng){
    //       let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`;

    //       fetch(url)
    //       .then((r)=> r.json())
    //       .then((json)=> {
    //         console.log(json);
    //         setLocation(json);
    //       })

    //     }

    //     navigator.geolocation.getCurrentPosition((position) => {
    //         loadApi(position.coords.latitude, position.coords.longitude);
    //     });
    // }, []);

    return (
      <div>
        <Titulo texto = "REGIÃO"/>
        <Mapa/>
        <Titulo texto = "PLANOS" />
        <div>
            {location.principalSubdivisionCode}
        </div>

        <ColorToggleButton/>
      </div>
    );
}

export default Home;
