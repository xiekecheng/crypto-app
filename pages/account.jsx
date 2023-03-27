import Layout from "@/components/Layout";
import AccountTable from "@/components/AccountTable";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import axios from "axios";
import { useUserContext } from "@/context/UserContext";

export default function Account() {
  const {user} = useUserContext()
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    if (user?.email) {
      const unsub = onSnapshot(doc(db, "users", user?.email), (doc) => {
        console.log("Current data: ", doc.data().watchlist.join(','));
        const coin = doc.data().watchlist.join(',')
        console.log('coin', coin)
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ coin }&order=market_cap_desc&per_page=5&page=1&sparkline=false`
        axios.get(url).then(res => {
          console.log('res', res)
          setTableData(res.data)
        })
      });
    }
  }, [user?.email]);

  return (
      <Layout>
        <div>
          <h1 className='text-2xl font-bold mb-10'>Account</h1>
          {/* <h2>Welcome { user?.email }</h2> */ }
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              {/* <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1> */ }
              <p className="text-base font-semibold leading-6">
                The list presented below denotes the bitcoins that have been collected by you. </p>
            </div>
          </div>
          <AccountTable tableData={ tableData }/>
        </div>
      </Layout>
  );
}