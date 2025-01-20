import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Coin from './Coin';
import Skeleton from './Skeleton';

const Markets = () => {
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const { response, loading } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=CG-9Z997htdtGoahzn9QqHEstiW`);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreCoins);

    useEffect(() => {
        if (response) {
            setCoins(prevCoins => [...prevCoins, ...response]);
            setIsFetching(false);
        }
    }, [response]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function fetchMoreCoins() {
        setPage(prevPage => prevPage + 1);
    }

    const formattedDate = currentDate.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    if (loading && page === 1) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-full" mt-2 />
                <Skeleton className="h-8 w-full" mt-2 />
                <Skeleton className="h-8 w-full" mt-2 />
                <Skeleton className="h-8 w-full" mt-2 />
            </div>
        );
    }

    return (
        <section className="mt-8 border-gray-400 rounded-xl">
            <h1 className="text-2xl mb-2">Les marchés Crypto ce {formattedDate}</h1>
            {coins.map((coin, index) => (
                <Coin key={`${coin.id}-${index}`} coin={coin} />
            ))}
            {loading && <Skeleton className="h-8 w-full" mt-2 />}
        </section>
    );
};

export default Markets;