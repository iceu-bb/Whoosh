import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { HeadingH2 } from '../elements';

const CategoriesContainer = ({ categories, className }) => {
  return (
    <div className={className}>
      {/* odmienić przez przypadki */}
      <HeadingH2 style={{ marginBottom: 100 }}>
        {categories.length} zestawów do nauki, a ich liczba ciągle rośnie
      </HeadingH2>
      <div className='grid'>
        {categories.length !== 0 &&
          categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default styled(CategoriesContainer)`
  padding: 100px 0;
  text-align: center;

  .grid {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
  }
`;
