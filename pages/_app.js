import "@/styles/globals.css";
import Layout from '../components/Layout';
import { Inter, Outfit } from 'next/font/google';

// Add fallback fonts and increase timeout
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  preload: false, // Prevent preloading during build
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  preload: false, // Prevent preloading during build
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${outfit.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
