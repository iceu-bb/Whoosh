import { FETCH_CATEGORY_ITEMS, FETCH_CATEGORY_LIST } from './constants';

const initialState = {
  currentCategoryItems: [],
  categoriesList: []
};

// !!! zmienić reducer ITEMS dodać to kategori !!! currentCattegory
//  pobrac to z paramsow

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY_ITEMS:
      return { ...state, currentCategoryItems: [...payload] };
    case FETCH_CATEGORY_LIST:
      return { ...state, categoriesList: [...payload] };
    default:
      return state;
  }
};
