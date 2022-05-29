import { useEffect, useState } from 'react';
import installersApi from '../apis/installersApi';

export default function useInstaladores(id) {
    const [instaladores, setInstaladores] = useState([]);

    useEffect(()=> {
      installersApi(id, setInstaladores);
    }, [id]);

    const response = {
      instaladores
    }
    return response;
}