export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: [...state.categoryFilter, action.payload],
      };

    case "BRAND_FILTER":
      return { ...state, brandFilter: [...state.brandFilter, action.payload] };

    case"RATINGS_FILTER":
      return {}

    default:
      return state;
  }
};
