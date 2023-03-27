import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({children}) {
  return (
      // 全局context 应该放在_app.js 而不是 放在layout里
      // <ThemeProvider initialTheme='light'>
      //   <UserProvider>
      <div className="layout">
        <NavBar/>
        <main className='rounded-div my-10 py-6'>{ children }</main>
        <Footer/>
      </div>
      //   </UserProvider>
      // </ThemeProvider>
  );
}