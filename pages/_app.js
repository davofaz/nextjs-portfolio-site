import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="className" enableSystem={false}>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp