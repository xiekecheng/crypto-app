import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Layout({children}) {
  return (
      <ThemeProvider initialTheme='light'>
        <div className="layout">
          <NavBar/>
          <main className='rounded-div my-10 py-6'>{ children }</main>
          {/* <Footer /> */ }
        </div>
      </ThemeProvider>
  );
}