import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { logout } from "@/api/user";

const NavBar = () => {
  const {user} = useUserContext()
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    console.log('Nav user', user)
  }, [user]);


  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (nav) {
      // 给 html 和 body 元素添加 overflow-hidden 类
      html.classList.add('overflow-hidden');
      body.classList.add('overflow-hidden');
    } else {
      // 给 html 和 body 元素添加 overflow-hidden 类
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    }
    return () => {
      // 给 html 和 body 元素添加 overflow-hidden 类
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    };
  }, [nav]);


  return (
      <div className='rounded-div flex justify-between items-center p-4 font-bold h-20'>
        <Link href='/'>
          <h1 className='text-2xl'>CryptoBase</h1>
        </Link>
        <div className='hidden md:block'>
          <ThemeToggle/>
        </div>
        <div className='hidden md:block'>
          {
            !user ? (
                <>
                  <Link href='/signin'>
                    <button className='px-2 hover:text-accent'>Sign in</button>
                  </Link>
                  <Link href='/signup'>
                    <button className='bg-button text-btnText rounded-2xl shadow-lg hover:shadow-2xl px-5 py-2'>Sign
                      up
                    </button>
                  </Link>
                </>
            ) : (
                <button className='bg-button text-btnText rounded-2xl shadow-lg hover:shadow-2xl px-5 py-2'
                        onClick={ logout }>
                  Logout</button>
            )
          }
        </div>

        <div className='flex md:hidden cursor-pointer'>
          {/* {user&& <button onClick={ logout }>{user.email}Logout</button> } */ }
          {
            nav ? <AiOutlineClose onClick={ toggleNav }/> : <AiOutlineMenu onClick={ toggleNav }/>
          }
        </div>

        {/* mobile menu */ }
        <div
            className={
              nav
                  ? 'md:hidden fixed top-0 right-0 z-10 bg-primary w-full flex flex-col items-center justify-between h-full ease-in duration-300'
                  : 'fixed top-0 right-[-100%] bg-primary w-full flex flex-col items-center justify-between h-full ease-in duration-300'
            }>
          <div className='rounded-div flex justify-between items-center p-4 font-bold h-20'>
            <Link href='/'>
              <h1 className='text-2xl'>CryptoBase</h1>
            </Link>
            <div className='block md:hidden cursor-pointer'>
              { nav ? <AiOutlineClose onClick={ toggleNav }/> : <AiOutlineMenu onClick={ toggleNav }/> }
            </div>
          </div>
          <ul className='w-full p-4 flex-1'>
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

          {
            !user
                ? (
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
                )
                : (
                    <button
                        className='my-2 p-3 bg-button text-btnText border w-full shadow-lg rounded-2xl'
                        onClick={ logout }>
                      Logout
                    </button>
                )
          }
        </div>
      </div>
  )
}

export default NavBar