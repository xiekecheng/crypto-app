import { useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { removeBookmark } from "@/api/coin";
import { useUserContext } from "@/context/UserContext";

export default function AccountTable({tableData}) {
  const {user} = useUserContext()
  useEffect(() => {
    console.log('tableData', tableData)
  }, [tableData]);

  // 删除关注的bitCoin
  const removeCollection = (id) => {
    removeBookmark(id, user.email).then(r => {

    })
  }

  return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Rank #
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Coin
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Remove
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0"> */ }
                  {/*   <span className="sr-only">Edit</span> */ }
                  {/* </th> */ }
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                { tableData.map((coin) => (
                    <tr key={ coin.id }>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { coin.market_cap_rank }
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={ coin.image } alt=""/>
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{ coin.name }</div>
                            <div className="text-gray-500">{ coin.symbol }</div>
                          </div>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <AiTwotoneDelete size={ 20 } className='text-red-400 cursor-pointer' onClick={ () => {
                          removeCollection(coin.id)
                        } }/>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ coin.role }</td>
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
