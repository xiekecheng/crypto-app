import Layout from "@/components/Layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import axios from "axios";
import dompurify from "isomorphic-dompurify";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Image from "next/image";
import { AiFillFacebook, AiFillGithub, AiFillRedditCircle, AiOutlineTwitter } from "react-icons/ai";

const myLoader = ({src}) => {
  return src
}
export default function Coin() {

  const router = useRouter()
  const {coinId} = router.query

  const [coin, setCoin] = useState({})
  // const url = `https://api.coingecko.com/api/v3/coins/${ coinId }`
  const url = `https://api.coingecko.com/api/v3/coins/${ coinId }?localization=false&sparkline=true
`
  useEffect(() => {
    axios.get(url).then(res => {
      console.log('res', res.data)
      setCoin(res.data)
    })

  }, [url])


  return (
      <Layout>
        {/* BitCoin iCon */ }
        <div className='ren'>
          <div>
            <div className='flex'>
              <div className='mr-6 mb-10'>
                <Image src={ coin.image?.large } loader={ myLoader } width={ 100 } height={ 100 } alt='bit icon'/>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>{ coin.id } price</h1>
                <p>({ coin.symbol?.toUpperCase() } / USD)</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>$27757</h1>
                <p>7Day</p>
              </div>
              {/* sparkLine chart */ }
              <div>
                <Sparklines data={ coin?.market_data?.sparkline_7d?.price }>
                  <SparklinesLine/>
                </Sparklines>
              </div>

              <div className='flex justify-between py-4'>
                <div>
                  <p>Market Cap</p>
                  <p>$1,000,000</p>
                </div>
                <div>
                  <p>Market Cap</p>
                  <p>$1,000,000</p>
                </div>
              </div>
              <div className='flex justify-between py-4'>
                <div>
                  <p>24h High</p>
                  <p>$1,000,000</p>
                </div>
                <div>
                  <p>24h Low</p>
                  <p>$1,000,000</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className='text-2xl font-bold'>Market Stats</h1>
              <div className='flex flex-col justify-between'>
                <ul className='flex justify-between py-4'>
                  <li>
                    <p>Market Rank</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Hashing Algorithm</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Trust Score</p>
                    <p>1</p>
                  </li>
                </ul>
                <ul className='flex justify-between py-4'>
                  <li>
                    <p>Price Change (24h)</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Price Change (7d)</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Price Change (14d)</p>
                    <p>1</p>
                  </li>
                </ul>
                <ul className='flex justify-between py-4'>
                  <li>
                    <p>Price Change (30d)</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Price Change (60d)</p>
                    <p>1</p>
                  </li>
                  <li>
                    <p>Price Change (1y)</p>
                    <p>1</p>
                  </li>
                </ul>
                <ul className='flex justify-around py-4 text-accent'>
                  <li><AiOutlineTwitter size={ 30 }/></li>
                  <li><AiFillFacebook size={ 30 }/></li>
                  <li><AiFillRedditCircle size={ 30 }/></li>
                  <li><AiFillGithub size={ 30 }/></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='py-10'>
            <h1 className='text-2xl font-bold'>About BitCoin</h1>
            <p dangerouslySetInnerHTML={ {__html: dompurify.sanitize(coin.description?.en)} }></p>
          </div>
        </div>

      </Layout>
  )
}