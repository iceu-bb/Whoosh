import {
  FETCH_CATEGORY_ITEMS,
  FETCH_CATEGORY_LIST,
  SEARCH_CATEGORIES
} from './constants';

const initialState = {
  currentCategoryItems: [],
  categoriesList: [],
  filteredCategories: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY_ITEMS:
      return { ...state, currentCategoryItems: [...payload] };
    case FETCH_CATEGORY_LIST:
      return { ...state, categoriesList: [...payload] };
    case SEARCH_CATEGORIES:
      return { ...state, filteredCategories: [...payload] };
    default:
      return state;
  }
};
