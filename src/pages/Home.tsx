import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { AppPreview } from '../components/AppPreview';
import { DownloadSection } from '../components/DownloadSection';
import { FAQ } from '../components/FAQ';
import { Support } from '../components/Support';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <DownloadSection />
        <FAQ />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
};