import React from 'react'
import HistoryCharts from '../components/HistoryCharts'
import CoinDetail from "../components/CoinDetail"

const CryptoDetail = () => {
  return (
    <div className='wrapper-container mt-10'>
 
        <HistoryCharts />
        <CoinDetail />
    </div>
  )
}

export default CryptoDetail