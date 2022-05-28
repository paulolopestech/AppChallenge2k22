import { useEffect, useState } from 'react';

export default function usePlans(location) {
    
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

        loadApi(location);
    }, []);

    return plans;
}