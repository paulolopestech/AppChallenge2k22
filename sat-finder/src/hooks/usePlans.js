import { useEffect, useState } from 'react';

export default function usePlans(location) {

    const [plans, setPlans] = useState([]);
    useEffect(()=> {
        function loadApi(location){
          let url = `https://app-challenge-api.herokuapp.com/plans?state=${location}`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            console.log(location)
            setPlans(json);
          })
        }

      navigator.geolocation.getCurrentPosition((position) => {
        function loadEstado(lat, lng){
          let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            let estado = json.principalSubdivisionCode.slice(-2);
              loadApi(estado);
          })

        }
        
        loadEstado(position.coords.latitude, position.coords.longitude);
    });
    }, []);

    return plans;
}