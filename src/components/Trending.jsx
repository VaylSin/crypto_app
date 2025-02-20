import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
	const { response, loading } = useAxios("search/trending");

	if (loading) {
		return (
			<div className="wrapper-container">
				<Skeleton className="h-8 w-32" />
				<Skeleton className="h-8 w-full" mt-2 />
				<Skeleton className="h-8 w-full" mt-2 />
				<Skeleton className="h-8 w-full" mt-2 />
				<Skeleton className="h-8 w-full" mt-2 />
			</div>
		);
	}
	return (
		<div className="mt-8">
			<h1 className="text-2xl mb-8">Les principaux cours du marché actuel</h1>
			<div className="grid grid-cols md:grid-cols-3 xl:grid-cols-4 gap-4 p-8 lg:p-0 trends_container">
				{response &&
					response.coins.map((coin) => (
						<CoinTrending key={coin.item.coin_id} coin={coin.item} />
					))}
			</div>
		</div>
	);
};

export default Trending;
