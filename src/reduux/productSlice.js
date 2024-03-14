import { createSlice } from "@reduxjs/toolkit";

let initialState = {};
let productSlice = createSlice({
    name: "product",
    initialState : {value: initialState},
    reducers:{
        productData: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {productData} = productSlice.actions;
export default productSlice.reducer;