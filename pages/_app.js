import Head from 'next/head';
import '../styles/globals.css';
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>SKYDAYS 2023</title>
			</Head>
			<main className={syne.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
