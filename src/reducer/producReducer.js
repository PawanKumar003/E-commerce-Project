const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "MY_GET_API":
      const featureData =
        action.payload.filter((curElem) => {
          return curElem.price >= 1300;
        }) || [];
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProduct: featureData,
      };
    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        singleproduct: action.payload,
        isSingleLoading: false,
      };

    case "SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        singleError: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
