import { createContext, useContext, useEffect, useReducer } from "react";
import { AllProducts, SingleProducts } from "../api/ProductApi";
import reducer from "../reducer/producReducer";

const appContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProduct: [],
  singleproduct: {},
  isSingleLoading: false,
  singleError: false,
};

const AppProvider1 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get app api data
  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const allProducts = await AllProducts();
      dispatch({ type: "MY_GET_API", payload: allProducts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Get single api url
  const getsinbgleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const singleproduct = await SingleProducts(id);
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <appContext.Provider value={{ ...state, getsinbgleProduct }}>
      {children}
    </appContext.Provider>
  );
};

// custom hook

const useProductContext = () => {
  return useContext(appContext);
};

export { AppProvider1, appContext, useProductContext };
