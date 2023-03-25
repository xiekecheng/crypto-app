export default function TrendingItem({trendingItem}) {


  return (
      <div className='flex flex-col rounded-xl shadow-lg hover:shadow-2xl p-3'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <img className='rounded-full mr-4' src={ trendingItem.small } alt=''/>
            <div>
              <p className='font-bold'>{ trendingItem.name }</p>
              <p className='text-gray-500 text-sm'>{ trendingItem.symbol }</p>
            </div>
          </div>
          <div className='flex items-center'>
            <img className='w-4 mr-2' src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                 alt="btc"/>
            <span>{ trendingItem.price_btc.toFixed(7) }</span>
          </div>
        </div>
        {/* <div>
          <Sparklines data={ trendingItem.sparkline }>
            <SparklinesLine color="blue"/>
          </Sparklines>
        </div> */ }
      </div>
  )
}