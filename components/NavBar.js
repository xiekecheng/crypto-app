import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
      <div className='rounded-div flex justify-between items-center p-4 font-bold h-20'>
        <Link href='/'>
          <h1 className='text-2xl'>CryptoBase</h1>
        </Link>
        <div className='hidden md:block'>
          <ThemeToggle/>
        </div>
        <div className='hidden md:block'>
          <Link href='/signin'>
            <button className='px-2 hover:text-accent'>Sign in</button>
          </Link>
          <Link href='/signup'>
            <button className='bg-button text-btnText rounded-2xl shadow-lg hover:shadow-2xl px-5 py-2'>Sign up</button>
          </Link>
        </div>

        <div className='block md:hidden cursor-pointer' onClick={ toggleNav }>
          {
            nav ? <AiOutlineClose /> : <AiOutlineMenu />
          }
        </div>

        {/* mobile menu */ }
        <div
            className={
              nav
                  ? 'md:hidden fixed top-20 left-0 z-10 bg-primary w-full flex flex-col items-center justify-between h-[90%] ease-in duration-300'
                  : 'fixed top-20 left-[-100%] bg-primary w-full flex flex-col items-center justify-between h-[90%] ease-in duration-300'
            }>
          <ul className='w-full p-4'>
            <li className='border-b py-6'>
              <Link href='/'>Home</Link>
            </li>
            <li className='border-b py-6'>
              <Link href='/account'>Account</Link>
            </li>
            <li className='py-6'>
              <ThemeToggle/>
            </li>
          </ul>
          <div className='flex flex-col p-4 w-full'>
            <Link href='/signin'>
              <button
                  className='my-2 p-3 bg-primary text-primary border border-secondary shadow-lg rounded-2xl w-full'>Sign
                In
              </button>
            </Link>
            <Link href='/signup'>
              <button className='my-2 p-3 bg-button text-btnText border w-full shadow-lg rounded-2xl'>Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default NavBar