import Head from 'next/head';
import Hero from '../components/home/Hero';
import ProblemSolution from '../components/home/ProblemSolution';
import HowItWorks from '../components/home/HowItWorks';
import TrustBuilders from '../components/home/TrustBuilders';
import FinalCta from '../components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clearview Staffing Group | Remote Healthcare Staffing Solutions</title>
        <meta name="description" content="Specialized remote healthcare staffing solutions that connect top healthcare organizations with qualified professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <TrustBuilders />
      <FinalCta />
    </>
  );
}
