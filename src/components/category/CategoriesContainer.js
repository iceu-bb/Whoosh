import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesContainer = ({ categories }) => {
  return (
    <div>
      {categories.length !== 0 &&
        categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </div>
  );
};

export default CategoriesContainer;
