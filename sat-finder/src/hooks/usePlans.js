import { useEffect, useState } from 'react';

export default function usePlans() {
    const [estado, setEstado] = useState();
    const [plans, setPlans] = useState([]);

    useEffect(()=> {
        function loadApi(location){
          let url = `https://app-challenge-api.herokuapp.com/plans?state=${location}`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            setPlans(json);
          })
        }

      navigator.geolocation.getCurrentPosition((position) => {
        function loadEstado(lat, lng){
          let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            setEstado(json.principalSubdivisionCode.slice(-2));
            loadApi(json.principalSubdivisionCode.slice(-2));
          })

        }
        
        loadEstado(position.coords.latitude, position.coords.longitude);
    });
    }, []);

    const response = {
      plans, estado
    }
    
    return response;
}