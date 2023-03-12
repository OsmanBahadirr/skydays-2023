import '../styles/globals.css'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  return (
    <main className={syne.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
