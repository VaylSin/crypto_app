import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios';

const HistoryCharts = () => {

    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

    if(!response) {
      return <div>Loading...</div>
    }
    const coinChartData = response.prices.map(value => ({
      x:value[0],
      y:value[0].toFixed(1)
    }) );
    console.log(coinChartData)
    return (
      <div>HistoryCharts</div>
    )
}

export default HistoryCharts