import {
  FETCH_CATEGORY_ITEMS,
  FETCH_CATEGORY_LIST,
  SEARCH_CATEGORIES,
  GET_USER_CATEGORIES
} from './categoryConstants';

const initialState = {
  currentCategoryItems: [],
  categoriesList: [],
  filteredCategories: [],
  userCategories: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY_ITEMS:
      return { ...state, currentCategoryItems: [...payload] };
    case FETCH_CATEGORY_LIST:
      return { ...state, categoriesList: [...payload] };
    case SEARCH_CATEGORIES:
      return { ...state, filteredCategories: [...payload] };
    case GET_USER_CATEGORIES:
      return { ...state, userCategories: [...payload] };
    default:
      return state;
  }
};
