import { HiMoon, HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <div onClick={ toggleTheme }>
        { theme === 'light'
            ? (
                <div className='flex items-center cursor-pointer'>
                  <HiMoon className='text-primary text-2xl mr-2'/> Dark Mode
                </div>
            )
            : (
                <div className='flex items-center cursor-pointer'>
                  <HiOutlineSun className='text-primary text-2xl mr-2'/> Light Mode
                </div>
            )
        }
      </div>
  )
}