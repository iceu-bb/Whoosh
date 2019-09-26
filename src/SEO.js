import React from 'react';
import { Helmet } from 'react-helmet';

const siteTitle = 'Whoosh';

const siteDesc =
  'Witaminy w Whoosh, jednej z największcyh w Polsce społeczności e-learningowych. Każdego miesiąca ponad 6 tysięcy aktywnych użytkowników ćwiczy i uczy sie ponad 20 tysięcy zestawów do nauki.';

const SEO = ({ title, description }) => (
  <Helmet htmlAttributes={{ lang: 'pl' }} title={`${title} | ${siteTitle}`}>
    <meta name='description' content={description || siteDesc} />
    <meta name='image' content={'../assets/macbook.png'} />
  </Helmet>
);

export default SEO;
