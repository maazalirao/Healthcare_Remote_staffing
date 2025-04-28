import Head from 'next/head';
import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import ServiceCards from '../components/home/ServiceCards';
import ProblemSolution from '../components/home/ProblemSolution';
import ProcessSteps from '../components/home/ProcessSteps';
import TrustBuilders from '../components/home/TrustBuilders';
import FinalCta from '../components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clearview Staffing Group | Remote Healthcare Staffing Solutions</title>
        <meta name="description" content="Access top-tier healthcare professionals at 80% less cost than local hires. Connect with skilled medical and administrative staff worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <Statistics />
      <ServiceCards />
      <ProblemSolution />
      <ProcessSteps />
      <TrustBuilders />
      <FinalCta />
    </>
  );
}
