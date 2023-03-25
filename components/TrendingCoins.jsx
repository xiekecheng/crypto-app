import TrendingItem from "@/components/TrendingItem";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingCoins() {
/*   const arr = Array(10).fill(0).map((item, index) => {
    return {
      id: index,
      name: 'Bitcoin',
      price: 1000,
      sparkline: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    }
  }) */

  const [trendingCoins, setTrendingCoins] = useState([])
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/search/trending').then(res=>{
      setTrendingCoins(res.data.coins)
      console.log('trendingCoins',trendingCoins)
    })
  },[])

  return (
      <div className='rounded-div my-20'>
        <h1 className='text-xl font-bold'>Trending Coins</h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            trendingCoins.map((item,index) => (
                <li key={index} className='grid-cols-1'><TrendingItem trendingItem={ item.item }/>< /li>
            ))
          }

        </ul>

      </div>
  )
}