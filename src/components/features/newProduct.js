import { createSlice } from "@reduxjs/toolkit";
// to create the reducer

const initialStateValue = { productName: "", color: "", price: "" };

export const productSlice = createSlice({
  name: "newProd",
  initialState: { value: { productName: "", color: "", price: "" } },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },

    
  },
});

export const { add, clear } = productSlice.actions
export default productSlice.reducer;
