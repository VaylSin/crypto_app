import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Définir la baseURL sans les paramètres de requête
    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const result = await axios(param);
            setResponse(result.data);
        } catch(err) {
            if (err.response && err.response.status === 401) {
                setError('Unauthorized: Invalid API key');
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(param);
    }, [param]);

    return { response, loading, error };
};

export default useAxios;