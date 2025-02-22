import React from 'react';
import {Link} from "react-router-dom"
const CoinTrending = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className="font-light mb-2 p-5 border-gray-200 border-2 rounded hover:bg-gray-600">
            <div className="flex items-center gap-1">
                <img className='w-6' src={coin.small} alt={coin.name} />
                <p>{coin.name}</p>
                <small className='text-xs'>({coin.symbol})</small>
            </div>
        </div>
    </Link>
  )
}

export default CoinTrending