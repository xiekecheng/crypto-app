import Image from "next/image";
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";


const myLoader = ({src}) => {
  return src
}

// <Sparklines data={[5, 10, 5, 20]}>
//   <SparklinesLine color="blue" />
// </Sparklines>

export default function Example({tableData}) {


  return (
      <div className="px-4 sm:px-6 lg:px-8">
        {/* <div className="sm:flex sm:items-center"> */ }
        {/*   <div className="sm:flex-auto"> */ }
        {/*     <h1 className="text-base font-semibold leading-6 text-gray-900">Transactions</h1> */ }
        {/*     <p className="mt-2 text-sm text-gray-700"> */ }
        {/*       A table of placeholder stock market data that does not make any sense. */ }
        {/*     </p> */ }
        {/*   </div> */ }
        {/*   <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"> */ }
        {/*     <button */ }
        {/*         type="button" */ }
        {/*         className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" */ }
        {/*     > */ }
        {/*       Export */ }
        {/*     </button> */ }
        {/*   </div> */ }
        {/* </div> */ }
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                  <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >

                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    #
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Coin
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >

                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    24h
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    24h Volume
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Mkt
                  </th>
                  <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Last 7 days
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                { tableData.map((transaction) => (
                    <tr key={ transaction.id }>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        <AiOutlineStar className='cursor-pointer'/>
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        { transaction.market_cap_rank }
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                        <Link className='flex items-center gap-2 cursor-pointer' href={ `/coin/${ transaction.id }` }>
                          <Image src={ transaction.image } alt="Picture of the author" width={ 30 }
                                 height={ 30 } loader={ myLoader }/>
                          <p className='hidden sm:block font-bold '>{ transaction.name }</p>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900"><p
                          className='text-gray-500 uppercase'>{ transaction.symbol }</p></td>
                      <td className={ `whitespace-nowrap px-2 py-2 text-sm text-gray-500 ` }>${ transaction.current_price.toLocaleString() }</td>
                      <td className={ `whitespace-nowrap px-2 py-2 text-sm text-gray-500 ${ transaction.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500' }` }>{ transaction.price_change_percentage_24h.toFixed(2) }</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">${ transaction.total_volume.toLocaleString() }</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">${ transaction.market_cap.toLocaleString() }</td>
                      {/* <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"> */ }
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a> */ }
                        <Sparklines data={ transaction.sparkline_in_7d.price }>
                          <SparklinesLine/>
                        </Sparklines>
                      </td>
                    </tr>
                )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}
