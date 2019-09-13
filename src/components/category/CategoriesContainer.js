import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesContainer = ({ categories }) => {
  return (
    <>
      <div>
        {categories.length} zestawów do nauki, a ich liczba ciągle rośnie
      </div>
      <div>
        {categories.length !== 0 &&
          categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </>
  );
};

export default CategoriesContainer;
