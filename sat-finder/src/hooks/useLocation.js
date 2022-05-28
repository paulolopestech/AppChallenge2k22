import { useEffect, useState } from 'react';

export default function useLocation() {
    const [location, setLocation] = useState([]);    
    useEffect(()=> {
        function loadApi(lat, lng){
          let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`;

          fetch(url)
          .then((r)=> r.json())
          .then((json)=> {
            let estado = json.principalSubdivisionCode.slice(-2);
            setLocation(estado);
          })

        }

        navigator.geolocation.getCurrentPosition((position) => {
            loadApi(position.coords.latitude, position.coords.longitude);
        });
    }, []);

    return location;
}