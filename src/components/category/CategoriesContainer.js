import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { HeadingH2 } from '../elements';
import { LoadingComponent } from '../elements';

const CategoriesContainer = ({
  categories,
  className,
  failMessage,
  showTitle,
  settings,
  isLoading
}) => {
  if (isLoading) return <LoadingComponent />;

  return (
    <>
      {categories.length === 0 ? (
        <div className={className}>{failMessage}</div>
      ) : (
        <div className={className}>
          {showTitle && (
            <HeadingH2 modifiers='marginBig'>{showTitle}</HeadingH2>
          )}
          <div className='grid'>
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                settings={settings}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.async.loading
});

export default styled(
  connect(
    mapStateToProps,
    {}
  )(CategoriesContainer)
)`
  margin: 0 auto;
  padding: 100px 3%;
  text-align: center;
  background-color: #fff;
  font-size: 2.5rem;

  .grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
    justify-items: center;
  }
`;
