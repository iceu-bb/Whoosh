import React, { useEffect } from 'react';
import Header from '../components/layout/header/Header';
import CategoriesDashboard from '../components/category/CategoriesDashboard';
import Hero from '../components/layout/hero/Hero';
import Section1 from '../components/layout/Section1';
import Section2 from '../components/layout/Section2';
import Footer from '../components/layout/Footer';

const HomeView = ({ location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section1 />
        <CategoriesDashboard />
        <Section2 />
      </main>
      <Footer />
    </>
  );
};

export default HomeView;
