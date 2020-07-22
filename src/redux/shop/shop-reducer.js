const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTION_START":
      return {
        isLoading: true,
      };
    case "FETCH_COLLECTION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };

    case "FETCH_COLLECTION_FAIL":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
