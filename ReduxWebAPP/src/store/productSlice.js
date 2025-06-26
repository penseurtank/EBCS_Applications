/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
//enum...
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      // do not call rest api inside reducers... due to pure function
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    // remove(state, action) {
    //   state.data = state.data.filter((item) => item.id !== action.payload);
    // },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk-it a function, its middleware in redux to communicate with rest api
// its return function inside it own function.for network request.
export function fetchProducts() {
  console.log("________________ calling");
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
