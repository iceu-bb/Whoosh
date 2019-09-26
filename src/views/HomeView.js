import React, { useEffect } from 'react';
import CategoriesDashboard from '../components/category/CategoriesDashboard';
import Hero from '../components/layout/hero/Hero';
import Section1 from '../components/layout/Section1';
import Section2 from '../components/layout/Section2';
import SEO from '../SEO';

const HomeView = ({ location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO title='Strona Główna' />
      <main>
        <Hero />
        <Section1 />
        <CategoriesDashboard />
        <Section2 />
      </main>
    </>
  );
};

export default HomeView;
