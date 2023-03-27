import '@/styles/globals.css'
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }) {
  return (
            <ThemeProvider initialTheme='light'>
        <UserProvider>
      <Component {...pageProps} />
        </UserProvider>
            </ThemeProvider>
          )
}
