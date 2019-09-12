import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        margin: 20,
        padding: 20,
        height: '200px',
        width: '200px',
        backgroundColor: 'salmon'
      }}
    >
      <h3>{category.name}</h3>
      <Link to={`/category/${category.name}`}>Ucz się :)</Link>
    </div>
  );
};

export default CategoryCard;
