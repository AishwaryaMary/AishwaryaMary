import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {
  fetchProductsRequest,
  fetchCategoriesRequest,
  fetchProductsSuccess,
  fetchCategoriesSuccess,
  fetchProductsFailure,
  fetchCategoriesFailure,
} from "../app/redux/actions";
import {
  CACHE_KEY_CATEGORIES,
  CACHE_KEY_PRODUCTS,
} from "../app/utils/constants";
import api from "../app/utils/api";

const useProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      dispatch(fetchProductsRequest());
      dispatch(fetchCategoriesRequest());

      try {
        const cachedProducts = await AsyncStorage.getItem(CACHE_KEY_PRODUCTS);
        const cachedCategories = await AsyncStorage.getItem(
          CACHE_KEY_CATEGORIES
        );

        if (cachedProducts && cachedCategories) {
          dispatch(fetchProductsSuccess(JSON.parse(cachedProducts)));
          dispatch(fetchCategoriesSuccess(JSON.parse(cachedCategories)));
          return;
        }

        const productsResponse = await api.get("/products");
        const categoriesResponse = await api.get("/categories");

        dispatch(fetchProductsSuccess(productsResponse?.data));
        dispatch(
          fetchCategoriesSuccess(
            categoriesResponse?.data.map((cat) => cat?.name)
          )
        );

        await AsyncStorage.setItem(
          CACHE_KEY_PRODUCTS,
          JSON.stringify(productsResponse?.data)
        );
        await AsyncStorage.setItem(
          CACHE_KEY_CATEGORIES,
          JSON.stringify(categoriesResponse?.data.map((cat) => cat?.name))
        );
      } catch (err) {
        dispatch(fetchProductsFailure(err?.message));
        dispatch(fetchCategoriesFailure(err?.message));
      }
    };

    fetchProductsAndCategories();
  }, [dispatch]);
};

export default useProducts;
