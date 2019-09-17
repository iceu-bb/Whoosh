import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { HeadingH2 } from '../elements';

const CategoriesContainer = ({
  categories,
  className,
  failMessage,
  showTitle
}) => {
  return (
    <>
      {categories.length === 0 ? (
        <div className={className}>{failMessage}</div>
      ) : (
        <div className={className}>
          {showTitle && <HeadingH2>{showTitle}</HeadingH2>}
          <div className='grid'>
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default styled(CategoriesContainer)`
  padding: 100px 0;
  text-align: center;
  background-color: #ddd;
  font-size: 2.5rem;

  .grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
  }
`;
